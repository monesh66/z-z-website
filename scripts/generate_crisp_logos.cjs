const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateAllLogos() {
  console.log('Starting high-DPI logo generation...');

  // 1. Load raw official logo
  const rawPath = path.join(__dirname, '../public/images/logo/logo_official_raw.png');
  const { data, info } = await sharp(rawPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;

  // Studio-grade alpha extraction: convert white background to pure anti-aliased transparency
  const transparentRaw = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    const src = i * channels;
    const dst = i * 4;
    const r = data[src];
    const g = data[src + 1];
    const b = data[src + 2];

    const brightness = (r + g + b) / 3;
    let alpha = 255;
    if (r > 248 && g > 248 && b > 248) {
      alpha = 0;
    } else if (brightness > 218) {
      alpha = Math.round(255 * (1 - (brightness - 218) / 30));
      if (alpha < 0) alpha = 0;
      if (alpha > 255) alpha = 255;
    }

    if (alpha > 0) {
      const aNorm = alpha / 255;
      const rDef = Math.max(0, Math.min(255, Math.round((r - 255 * (1 - aNorm)) / aNorm)));
      const gDef = Math.max(0, Math.min(255, Math.round((g - 255 * (1 - aNorm)) / aNorm)));
      const bDef = Math.max(0, Math.min(255, Math.round((b - 255 * (1 - aNorm)) / aNorm)));
      transparentRaw[dst] = rDef;
      transparentRaw[dst + 1] = gDef;
      transparentRaw[dst + 2] = bDef;
      transparentRaw[dst + 3] = alpha;
    } else {
      transparentRaw[dst] = 0;
      transparentRaw[dst + 1] = 0;
      transparentRaw[dst + 2] = 0;
      transparentRaw[dst + 3] = 0;
    }
  }

  const baseBuf = await sharp(transparentRaw, { raw: { width, height, channels: 4 } }).png().toBuffer();

  // Extract Emblem (x: 110, y: 98, w: 524, h: 304)
  const emblemBuf = await sharp(baseBuf)
    .extract({ left: 110, top: 98, width: 524, height: 304 })
    .toBuffer();

  // Extract ZIYA ZARA (x: 45, y: 406, w: 639, h: 91)
  const ziyaZaraBuf = await sharp(baseBuf)
    .extract({ left: 45, top: 406, width: 639, height: 91 })
    .toBuffer();

  // Extract TRADING COMPANY (x: 36, y: 515, w: 648, h: 37)
  const tradingCoBuf = await sharp(baseBuf)
    .extract({ left: 36, top: 515, width: 648, height: 37 })
    .toBuffer();

  // Extract QUALITY PRODUCTS | GLOBAL REACH (x: 75, y: 568, w: 575, h: 38)
  const qualityProductsBuf = await sharp(baseBuf)
    .extract({ left: 75, top: 568, width: 575, height: 38 })
    .toBuffer();

  // ----------------------------------------------------
  // Horizontal Lockup (for Navbar & Footer)
  // Target Height: 560px, Width: ~2200px
  // ----------------------------------------------------
  const emblemScaled = await sharp(emblemBuf)
    .resize({ height: 480, kernel: 'lanczos3' })
    .toBuffer();
  const emblemMeta = await sharp(emblemScaled).metadata();

  const zzScaled = await sharp(ziyaZaraBuf)
    .resize({ width: 1220, kernel: 'lanczos3' })
    .toBuffer();
  const zzMeta = await sharp(zzScaled).metadata();

  const tcScaled = await sharp(tradingCoBuf)
    .resize({ width: 1220, kernel: 'lanczos3' })
    .toBuffer();
  const tcMeta = await sharp(tcScaled).metadata();

  // Create ultra-sharp, high-contrast, crystal-clear tagline at exact width
  const qpSvg = `
  <svg width="1220" height="75" viewBox="0 0 1220 75" xmlns="http://www.w3.org/2000/svg">
    <text x="50%" y="54" 
      text-anchor="middle" 
      font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" 
      font-size="44" 
      font-weight="700" 
      letter-spacing="10" 
      fill="#0B1F3A">
      QUALITY PRODUCTS   |   GLOBAL REACH
    </text>
  </svg>
  `;
  const qpSharpBuf = await sharp(Buffer.from(qpSvg)).png().toBuffer();
  const qpMeta = await sharp(qpSharpBuf).metadata();

  const canvasWidth = 35 + emblemMeta.width + 55 + 1220 + 35;
  const canvasHeight = 560;

  const textGap1 = 26;
  const textGap2 = 34;
  const totalTextHeight = zzMeta.height + textGap1 + tcMeta.height + textGap2 + qpMeta.height;
  const textStartY = Math.round((canvasHeight - totalTextHeight) / 2);

  const zzY = textStartY;
  const tcY = zzY + zzMeta.height + textGap1;
  const qpY = tcY + tcMeta.height + textGap2;

  const emblemX = 35;
  const emblemY = Math.round((canvasHeight - emblemMeta.height) / 2);
  const textX = emblemX + emblemMeta.width + 55;

  // 1. Build LIGHT Horizontal Logo (PNG)
  const lightLogoPath = path.join(__dirname, '../public/images/logo/logo-light.png');
  await sharp({
    create: {
      width: canvasWidth,
      height: canvasHeight,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    { input: emblemScaled, left: emblemX, top: emblemY },
    { input: zzScaled, left: textX, top: zzY },
    { input: tcScaled, left: textX, top: tcY },
    { input: qpSharpBuf, left: textX, top: qpY }
  ])
  .png({ compressionLevel: 9 })
  .toFile(lightLogoPath);
  console.log(`Saved ${lightLogoPath} (${canvasWidth}x${canvasHeight})`);

  // 2. Build DARK Horizontal Logo (PNG)
  // For dark background, convert ZIYA ZARA and QUALITY PRODUCTS to pure crisp white
  const { data: zzData, info: zzInfo } = await sharp(zzScaled).raw().toBuffer({ resolveWithObject: true });
  const zzWhiteBuf = Buffer.alloc(zzInfo.width * zzInfo.height * 4);
  for (let i = 0; i < zzInfo.width * zzInfo.height; i++) {
    const idx = i * 4;
    const a = zzData[idx + 3];
    zzWhiteBuf[idx] = 255;
    zzWhiteBuf[idx + 1] = 255;
    zzWhiteBuf[idx + 2] = 255;
    zzWhiteBuf[idx + 3] = a;
  }
  const zzWhite = await sharp(zzWhiteBuf, { raw: { width: zzInfo.width, height: zzInfo.height, channels: 4 } }).png().toBuffer();

  const qpSvgDark = `
  <svg width="1220" height="75" viewBox="0 0 1220 75" xmlns="http://www.w3.org/2000/svg">
    <text x="50%" y="54" 
      text-anchor="middle" 
      font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" 
      font-size="44" 
      font-weight="700" 
      letter-spacing="10" 
      fill="#F1F5F9">
      QUALITY PRODUCTS   |   GLOBAL REACH
    </text>
  </svg>
  `;
  const qpDarkBuf = await sharp(Buffer.from(qpSvgDark)).png().toBuffer();

  const darkLogoPath = path.join(__dirname, '../public/images/logo/logo-dark.png');
  await sharp({
    create: {
      width: canvasWidth,
      height: canvasHeight,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    { input: emblemScaled, left: emblemX, top: emblemY },
    { input: zzWhite, left: textX, top: zzY },
    { input: tcScaled, left: textX, top: tcY },
    { input: qpDarkBuf, left: textX, top: qpY }
  ])
  .png({ compressionLevel: 9 })
  .toFile(darkLogoPath);
  console.log(`Saved ${darkLogoPath} (${canvasWidth}x${canvasHeight})`);

  // 3. Save emblem.png (highest quality)
  const emblemPath = path.join(__dirname, '../public/images/logo/emblem.png');
  await sharp(emblemScaled).png({ compressionLevel: 9 }).toFile(emblemPath);
  console.log(`Saved ${emblemPath}`);

  // 4. Save logo-stacked.png (Square official logo for about/modal/favicon)
  const stackedPath = path.join(__dirname, '../public/images/logo/logo-stacked.png');
  await sharp(baseBuf).resize({ width: 1400, kernel: 'lanczos3' }).png({ compressionLevel: 9 }).toFile(stackedPath);
  console.log(`Saved ${stackedPath}`);

  console.log('All logo assets generated successfully with maximum clarity and full tagline!');
}

generateAllLogos().catch(console.error);
