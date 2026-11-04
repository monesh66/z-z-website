const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function generateAllLogos() {
  console.log('Starting ultra-crisp studio logo generation...');

  // 1. First, render supersampled high-DPI ampersand (&)
  const pyScript = path.join(__dirname, '../scratch/render_hires_amp.py');
  if (fs.existsSync(pyScript)) {
    execSync(`python "${pyScript}"`, { stdio: 'pipe' });
  }

  // 2. Load raw official logo
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

  // Extract ZIYA (x: 45, y: 406, w: 284, h: 91)
  const ziyaBuf = await sharp(baseBuf)
    .extract({ left: 45, top: 406, width: 284, height: 91 })
    .toBuffer();

  // Extract ZARA (x: 349, y: 406, w: 335, h: 91)
  const zaraBuf = await sharp(baseBuf)
    .extract({ left: 349, top: 406, width: 335, height: 91 })
    .toBuffer();

  // Extract TRADING COMPANY (x: 36, y: 515, w: 648, h: 37)
  const tradingCoBuf = await sharp(baseBuf)
    .extract({ left: 36, top: 515, width: 648, height: 37 })
    .toBuffer();

  // ----------------------------------------------------
  // Horizontal Lockup (for Navbar & Footer)
  // Target Height: 560px
  // ----------------------------------------------------
  const emblemScaled = await sharp(emblemBuf)
    .resize({ height: 480, kernel: 'lanczos3' })
    .toBuffer();
  const emblemMeta = await sharp(emblemScaled).metadata();

  const scale = 1220 / 639;
  const ziyaW = Math.round(284 * scale);
  const zaraW = Math.round(335 * scale);
  const textH = Math.round(91 * scale);

  const ziyaScaled = await sharp(ziyaBuf).resize({ width: ziyaW, height: textH, kernel: 'lanczos3' }).toBuffer();
  const zaraScaled = await sharp(zaraBuf).resize({ width: zaraW, height: textH, kernel: 'lanczos3' }).toBuffer();

  const ampLightPath = path.join(__dirname, '../scratch/amp_light.png');
  const ampDarkPath = path.join(__dirname, '../scratch/amp_dark.png');
  const ampLightBuf = fs.readFileSync(ampLightPath);
  const ampDarkBuf = fs.readFileSync(ampDarkPath);
  const ampMeta = await sharp(ampLightBuf).metadata();

  const ampSpacing = 16;
  const zzTotalW = ziyaW + ampSpacing + ampMeta.width + ampSpacing + zaraW;

  // Composite Light ZIYA&ZARA
  const zzLightComposite = await sharp({
    create: {
      width: zzTotalW,
      height: textH,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    { input: ziyaScaled, left: 0, top: 0 },
    { input: ampLightBuf, left: ziyaW + ampSpacing, top: 0 },
    { input: zaraScaled, left: ziyaW + ampSpacing + ampMeta.width + ampSpacing, top: 0 }
  ])
  .png()
  .toBuffer();

  const zzScaled = await sharp(zzLightComposite)
    .resize({ width: 1320, kernel: 'lanczos3' })
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

  const canvasWidth = 35 + emblemMeta.width + 55 + Math.max(zzMeta.width, tcMeta.width) + 35;
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
  // For dark background, convert ZIYA and ZARA to pure crisp white with exact alpha
  const { data: ziyaData, info: ziyaInfo } = await sharp(ziyaScaled).raw().toBuffer({ resolveWithObject: true });
  const ziyaWhiteBuf = Buffer.alloc(ziyaInfo.width * ziyaInfo.height * 4);
  for (let i = 0; i < ziyaInfo.width * ziyaInfo.height; i++) {
    const idx = i * 4;
    ziyaWhiteBuf[idx] = 255;
    ziyaWhiteBuf[idx + 1] = 255;
    ziyaWhiteBuf[idx + 2] = 255;
    ziyaWhiteBuf[idx + 3] = ziyaData[idx + 3];
  }
  const ziyaWhite = await sharp(ziyaWhiteBuf, { raw: { width: ziyaInfo.width, height: ziyaInfo.height, channels: 4 } }).png().toBuffer();

  const { data: zaraData, info: zaraInfo } = await sharp(zaraScaled).raw().toBuffer({ resolveWithObject: true });
  const zaraWhiteBuf = Buffer.alloc(zaraInfo.width * zaraInfo.height * 4);
  for (let i = 0; i < zaraInfo.width * zaraInfo.height; i++) {
    const idx = i * 4;
    zaraWhiteBuf[idx] = 255;
    zaraWhiteBuf[idx + 1] = 255;
    zaraWhiteBuf[idx + 2] = 255;
    zaraWhiteBuf[idx + 3] = zaraData[idx + 3];
  }
  const zaraWhite = await sharp(zaraWhiteBuf, { raw: { width: zaraInfo.width, height: zaraInfo.height, channels: 4 } }).png().toBuffer();

  // Composite Dark ZIYA&ZARA
  const zzDarkComposite = await sharp({
    create: {
      width: zzTotalW,
      height: textH,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    { input: ziyaWhite, left: 0, top: 0 },
    { input: ampDarkBuf, left: ziyaW + ampSpacing, top: 0 },
    { input: zaraWhite, left: ziyaW + ampSpacing + ampMeta.width + ampSpacing, top: 0 }
  ])
  .png()
  .toBuffer();

  const zzDarkScaled = await sharp(zzDarkComposite)
    .resize({ width: 1320, kernel: 'lanczos3' })
    .toBuffer();

  // For dark background, convert Trading Company to vibrant luminous emerald #34D399 (matching dark SVG!)
  const { data: tcData, info: tcInfo } = await sharp(tcScaled).raw().toBuffer({ resolveWithObject: true });
  const tcDarkBuf = Buffer.alloc(tcInfo.width * tcInfo.height * 4);
  for (let i = 0; i < tcInfo.width * tcInfo.height; i++) {
    const idx = i * 4;
    const a = tcData[idx + 3];
    tcDarkBuf[idx] = 52;    // #34
    tcDarkBuf[idx + 1] = 211; // #D3
    tcDarkBuf[idx + 2] = 153; // #99
    tcDarkBuf[idx + 3] = a;
  }
  const tcDarkScaled = await sharp(tcDarkBuf, { raw: { width: tcInfo.width, height: tcInfo.height, channels: 4 } }).png().toBuffer();

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
    { input: zzDarkScaled, left: textX, top: zzY },
    { input: tcDarkScaled, left: textX, top: tcY },
    { input: qpDarkBuf, left: textX, top: qpY }
  ])
  .png({ compressionLevel: 9 })
  .toFile(darkLogoPath);
  console.log(`Saved ${darkLogoPath} (${canvasWidth}x${canvasHeight})`);

  // 3. Save emblem.png (highest quality)
  const emblemPath = path.join(__dirname, '../public/images/logo/emblem.png');
  await sharp(emblemScaled).png({ compressionLevel: 9 }).toFile(emblemPath);
  console.log(`Saved ${emblemPath}`);

  // 4. Save logo-stacked.png (Square official logo for about/modal)
  // Build stacked lockup with ZIYA&ZARA
  const stackedW = 1400;
  const stackedH = 1400;
  const embStackW = 900;
  const embStackH = Math.round(900 * 304 / 524);
  const embStack = await sharp(emblemBuf).resize({ width: embStackW, kernel: 'lanczos3' }).toBuffer();
  const embStackX = Math.round((stackedW - embStackW) / 2);
  const embStackY = 120;

  const zzStackW = 1100;
  const zzStack = await sharp(zzLightComposite).resize({ width: zzStackW, kernel: 'lanczos3' }).toBuffer();
  const zzStackMeta = await sharp(zzStack).metadata();
  const zzStackX = Math.round((stackedW - zzStackW) / 2);
  const zzStackY = embStackY + embStackH + 60;

  const tcStackW = 1000;
  const tcStack = await sharp(tradingCoBuf).resize({ width: tcStackW, kernel: 'lanczos3' }).toBuffer();
  const tcStackMeta = await sharp(tcStack).metadata();
  const tcStackX = Math.round((stackedW - tcStackW) / 2);
  const tcStackY = zzStackY + zzStackMeta.height + 40;

  const qpStackSvg = `
  <svg width="1000" height="70" viewBox="0 0 1000 70" xmlns="http://www.w3.org/2000/svg">
    <text x="50%" y="50" 
      text-anchor="middle" 
      font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" 
      font-size="38" 
      font-weight="700" 
      letter-spacing="9" 
      fill="#0B1F3A">
      QUALITY PRODUCTS   |   GLOBAL REACH
    </text>
  </svg>
  `;
  const qpStackBuf = await sharp(Buffer.from(qpStackSvg)).png().toBuffer();
  const qpStackMeta = await sharp(qpStackBuf).metadata();
  const qpStackX = Math.round((stackedW - 1000) / 2);
  const qpStackY = tcStackY + tcStackMeta.height + 40;

  const stackedPath = path.join(__dirname, '../public/images/logo/logo-stacked.png');
  await sharp({
    create: {
      width: stackedW,
      height: stackedH,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    { input: embStack, left: embStackX, top: embStackY },
    { input: zzStack, left: zzStackX, top: zzStackY },
    { input: tcStack, left: tcStackX, top: tcStackY },
    { input: qpStackBuf, left: qpStackX, top: qpStackY }
  ])
  .png({ compressionLevel: 9 })
  .toFile(stackedPath);
  console.log(`Saved ${stackedPath}`);

  // 5. Save logo-transparent.png (640x640)
  const transSquarePath = path.join(__dirname, '../public/images/logo/logo-transparent.png');
  await sharp(stackedPath).resize({ width: 640, height: 640, kernel: 'lanczos3' }).png({ compressionLevel: 9 }).toFile(transSquarePath);
  console.log(`Saved ${transSquarePath}`);

  // 6. Save logo-text.png
  const textLockupW = 1320;
  const textLockupH = zzMeta.height + textGap1 + tcMeta.height + 20;
  const textLockupBuf = await sharp({
    create: {
      width: textLockupW + 40,
      height: textLockupH,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    { input: zzScaled, left: 20, top: 10 },
    { input: tcScaled, left: 20, top: 10 + zzMeta.height + textGap1 }
  ])
  .png()
  .toBuffer();

  const logoTextPath = path.join(__dirname, '../public/images/logo/logo-text.png');
  await sharp(textLockupBuf).resize({ width: 636, height: 188, fit: 'inside', kernel: 'lanczos3' }).png({ compressionLevel: 9 }).toFile(logoTextPath);
  console.log(`Saved ${logoTextPath}`);

  console.log('All logo assets generated successfully with razor-sharp clarity and ZIYA&ZARA!');
}

generateAllLogos().catch(console.error);
