import os
from PIL import Image, ImageFont, ImageDraw
import numpy as np

def create_transparent_base(raw_img):
    rgba = raw_img.convert('RGBA')
    arr = np.array(rgba, dtype=np.float32)
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    brightness = (r + g + b) / 3.0
    
    alpha = np.ones_like(brightness) * 255.0
    white_mask = (r > 248) & (g > 248) & (b > 248)
    alpha[white_mask] = 0.0
    
    soft_mask = (~white_mask) & (brightness > 218)
    alpha[soft_mask] = np.clip(255.0 * (1.0 - (brightness[soft_mask] - 218.0) / 32.0), 0.0, 255.0)
    
    a_norm = np.clip(alpha / 255.0, 1e-5, 1.0)
    for c in range(3):
        arr[:, :, c] = np.clip((arr[:, :, c] - 255.0 * (1.0 - a_norm)) / a_norm, 0.0, 255.0)
    
    arr[:, :, 3] = alpha
    return Image.fromarray(arr.astype(np.uint8))

def build_ziya_and_zara(base_img, is_dark=False):
    # Extract ZIYA (left: 45, top: 406, width: 284, height: 91)
    ziya = base_img.crop((45, 406, 45 + 284, 406 + 91))
    # Extract ZARA (left: 349, top: 406, width: 335, height: 91)
    zara = base_img.crop((45 + 304, 406, 45 + 639, 406 + 91))
    
    # Times New Roman Bold ampersand
    font_path = 'C:/Windows/Fonts/timesbd.ttf'
    f = ImageFont.truetype(font_path, 98)
    bbox = f.getbbox('&')
    amp_w = bbox[2] - bbox[0]
    # Align to baseline y=88
    y_pos = 88 - bbox[3]
    
    spacing = 8
    total_w = ziya.width + spacing + amp_w + spacing + zara.width
    text_img = Image.new('RGBA', (total_w, 91), (0, 0, 0, 0))
    text_img.paste(ziya, (0, 0))
    
    d = ImageDraw.Draw(text_img)
    amp_color = (255, 255, 255, 255) if is_dark else (11, 31, 58, 255)
    d.text((ziya.width + spacing - bbox[0], y_pos), '&', font=f, fill=amp_color)
    text_img.paste(zara, (ziya.width + spacing + amp_w + spacing, 0))
    
    if is_dark:
        # Convert all non-transparent pixels in ziya & zara to pure crisp white
        arr = np.array(text_img)
        # keep alpha, make RGB white
        arr[:, :, 0] = 255
        arr[:, :, 1] = 255
        arr[:, :, 2] = 255
        text_img = Image.fromarray(arr)
    else:
        # Ensure deep crisp brand navy
        arr = np.array(text_img, dtype=np.float32)
        alpha = arr[:, :, 3] / 255.0
        # Target navy: #0B1F3A -> (11, 31, 58)
        arr[:, :, 0] = 11
        arr[:, :, 1] = 31
        arr[:, :, 2] = 58
        arr[:, :, 3] = alpha * 255.0
        text_img = Image.fromarray(arr.astype(np.uint8))
        
    return text_img

def main():
    raw_path = 'public/images/logo/logo_official_raw.png'
    raw_img = Image.open(raw_path)
    base_img = create_transparent_base(raw_img)
    
    # 1. Extract Emblem (x: 110, y: 98, w: 524, h: 304)
    emblem = base_img.crop((110, 98, 110 + 524, 98 + 304))
    
    # 2. Extract Trading Company (x: 36, y: 515, w: 648, h: 37)
    trading_co = base_img.crop((36, 515, 36 + 648, 515 + 37))
    
    # 3. Build ZIYA&ZARA for Light and Dark
    zz_light = build_ziya_and_zara(base_img, is_dark=False)
    zz_dark = build_ziya_and_zara(base_img, is_dark=True)
    
    # Scale elements for horizontal lockup
    # Emblem scaled to height 480
    emb_aspect = emblem.width / emblem.height
    emb_scaled_w = int(480 * emb_aspect)
    emb_scaled = emblem.resize((emb_scaled_w, 480), Image.Resampling.LANCZOS)
    
    # Scale ZIYA&ZARA to width 1260
    zz_aspect = zz_light.height / zz_light.width
    zz_scaled_h = int(1260 * zz_aspect)
    zz_light_scaled = zz_light.resize((1260, zz_scaled_h), Image.Resampling.LANCZOS)
    zz_dark_scaled = zz_dark.resize((1260, zz_scaled_h), Image.Resampling.LANCZOS)
    
    # Scale Trading Co to width 1220
    tc_aspect = trading_co.height / trading_co.width
    tc_scaled_h = int(1220 * tc_aspect)
    tc_light_scaled = trading_co.resize((1220, tc_scaled_h), Image.Resampling.LANCZOS)
    
    # Dark version of Trading Co: emerald #34D399 / #10B981
    tc_arr = np.array(trading_co, dtype=np.float32)
    tc_alpha = tc_arr[:, :, 3] / 255.0
    tc_dark_arr = np.zeros_like(tc_arr)
    tc_dark_arr[:, :, 0] = 52   # 0x34
    tc_dark_arr[:, :, 1] = 211  # 0xD3
    tc_dark_arr[:, :, 2] = 153  # 0x99
    tc_dark_arr[:, :, 3] = tc_alpha * 255.0
    tc_dark = Image.fromarray(tc_dark_arr.astype(np.uint8))
    tc_dark_scaled = tc_dark.resize((1220, tc_scaled_h), Image.Resampling.LANCZOS)
    
    # Render Tagline: QUALITY PRODUCTS   |   GLOBAL REACH (width 1220, height 75)
    f_tag = ImageFont.truetype('C:/Windows/Fonts/calibri.ttf', 44)
    # Let's create high-res tagline canvas
    tag_text = "QUALITY PRODUCTS   |   GLOBAL REACH"
    
    def render_tagline(color):
        img = Image.new('RGBA', (1220, 75), (0, 0, 0, 0))
        d = ImageDraw.Draw(img)
        bbox = f_tag.getbbox(tag_text)
        tw = bbox[2] - bbox[0]
        tx = (1220 - tw) // 2
        d.text((tx, 15), tag_text, font=f_tag, fill=color)
        return img
    
    tag_light = render_tagline((11, 31, 58, 255))
    tag_dark = render_tagline((241, 245, 249, 255))
    
    # Layout Canvas: Height 560
    canvas_h = 560
    emblem_x = 35
    emblem_y = (canvas_h - emb_scaled.height) // 2
    text_x = emblem_x + emb_scaled.width + 55
    canvas_w = text_x + 1260 + 35
    
    gap1 = 26
    gap2 = 34
    total_text_h = zz_scaled_h + gap1 + tc_scaled_h + gap2 + 75
    text_start_y = (canvas_h - total_text_h) // 2
    
    zz_y = text_start_y
    tc_y = zz_y + zz_scaled_h + gap1
    tag_y = tc_y + tc_scaled_h + gap2
    
    # 1. Build & Save logo-light.png
    light_logo = Image.new('RGBA', (canvas_w, canvas_h), (0, 0, 0, 0))
    light_logo.paste(emb_scaled, (emblem_x, emblem_y), emb_scaled)
    light_logo.paste(zz_light_scaled, (text_x, zz_y), zz_light_scaled)
    light_logo.paste(tc_light_scaled, (text_x, tc_y), tc_light_scaled)
    light_logo.paste(tag_light, (text_x, tag_y), tag_light)
    light_logo.save('public/images/logo/logo-light.png', 'PNG')
    print(f"Saved public/images/logo/logo-light.png ({canvas_w}x{canvas_h})")
    
    # 2. Build & Save logo-dark.png
    dark_logo = Image.new('RGBA', (canvas_w, canvas_h), (0, 0, 0, 0))
    dark_logo.paste(emb_scaled, (emblem_x, emblem_y), emb_scaled)
    dark_logo.paste(zz_dark_scaled, (text_x, zz_y), zz_dark_scaled)
    dark_logo.paste(tc_dark_scaled, (text_x, tc_y), tc_dark_scaled)
    dark_logo.paste(tag_dark, (text_x, tag_y), tag_dark)
    dark_logo.save('public/images/logo/logo-dark.png', 'PNG')
    print(f"Saved public/images/logo/logo-dark.png ({canvas_w}x{canvas_h})")
    
    # 3. Save emblem.png
    emb_scaled.save('public/images/logo/emblem.png', 'PNG')
    print("Saved public/images/logo/emblem.png")
    
    # 4. Save logo-stacked.png (Square official logo with ZIYA&ZARA centered)
    # Width 1400, height ~1377
    stacked = Image.new('RGBA', (1400, 1400), (0, 0, 0, 0))
    # Emblem at top
    emb_st_w = 900
    emb_st_h = int(emb_st_w / emb_aspect)
    emb_st = emblem.resize((emb_st_w, emb_st_h), Image.Resampling.LANCZOS)
    emb_st_x = (1400 - emb_st_w) // 2
    emb_st_y = 120
    stacked.paste(emb_st, (emb_st_x, emb_st_y), emb_st)
    
    # ZIYA&ZARA in middle (width 1100)
    zz_st_w = 1100
    zz_st_h = int(zz_st_w * zz_aspect)
    zz_st = zz_light.resize((zz_st_w, zz_st_h), Image.Resampling.LANCZOS)
    zz_st_x = (1400 - zz_st_w) // 2
    zz_st_y = emb_st_y + emb_st_h + 60
    stacked.paste(zz_st, (zz_st_x, zz_st_y), zz_st)
    
    # TRADING COMPANY below (width 1000)
    tc_st_w = 1000
    tc_st_h = int(tc_st_w * tc_aspect)
    tc_st = tc_light_scaled.resize((tc_st_w, tc_st_h), Image.Resampling.LANCZOS)
    tc_st_x = (1400 - tc_st_w) // 2
    tc_st_y = zz_st_y + zz_st_h + 40
    stacked.paste(tc_st, (tc_st_x, tc_st_y), tc_st)
    
    # Tagline at bottom
    tag_st = render_tagline((11, 31, 58, 255)).resize((1000, 60), Image.Resampling.LANCZOS)
    tag_st_x = (1400 - 1000) // 2
    tag_st_y = tc_st_y + tc_st_h + 40
    stacked.paste(tag_st, (tag_st_x, tag_st_y), tag_st)
    
    stacked.save('public/images/logo/logo-stacked.png', 'PNG')
    print("Saved public/images/logo/logo-stacked.png")
    
    # 5. Save logo-transparent.png (640x640)
    trans_square = stacked.resize((640, 640), Image.Resampling.LANCZOS)
    trans_square.save('public/images/logo/logo-transparent.png', 'PNG')
    print("Saved public/images/logo/logo-transparent.png")
    
    # 6. Save logo-text.png
    text_only = Image.new('RGBA', (1300, zz_scaled_h + gap1 + tc_scaled_h + 30), (0, 0, 0, 0))
    text_only.paste(zz_light_scaled, (20, 10), zz_light_scaled)
    text_only.paste(tc_light_scaled, (40, 10 + zz_scaled_h + gap1), tc_light_scaled)
    text_only.resize((636, 188), Image.Resampling.LANCZOS).save('public/images/logo/logo-text.png', 'PNG')
    print("Saved public/images/logo/logo-text.png")
    
    print("All raster logo assets generated successfully with ZIYA&ZARA!")

if __name__ == '__main__':
    main()
