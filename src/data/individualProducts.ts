/**
 * ZIYA ZARA TRADING COMPANY
 * Comprehensive Export Commodity & Traded Products Catalogue
 * International trade grades with verified HSN codes, specifications & origin sourcing
 */

export interface IndividualProduct {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  hsnCode: string;
  image: string;
  specs: string;
  origin: string;
}

export const individualProducts: IndividualProduct[] = [
  // ==========================================
  // 1. RICE & RICE PRODUCTS (Approved Studio Shots)
  // ==========================================
  {
    id: "1121-basmati-rice",
    name: "1121 Basmati Rice",
    category: "Rice & Rice Products",
    categorySlug: "rice-and-rice-products",
    hsnCode: "10063020",
    image: "/images/products/rice_1121_basmati.jpg",
    specs: "AGL 8.35mm+ | Purity 99% | Broken < 1%",
    origin: "Haryana & Punjab, India"
  },
  {
    id: "traditional-basmati-rice",
    name: "Traditional Basmati Rice",
    category: "Rice & Rice Products",
    categorySlug: "rice-and-rice-products",
    hsnCode: "10063020",
    image: "/images/products/rice_traditional_basmati.jpg",
    specs: "Naturally Aged 2 Years | Extra Long Grain",
    origin: "Punjab Basin, India"
  },
  {
    id: "sona-masoori-rice",
    name: "Sona Masoori Rice",
    category: "Rice & Rice Products",
    categorySlug: "rice-and-rice-products",
    hsnCode: "10063090",
    image: "/images/products/rice_sona_masoori.jpg",
    specs: "Medium Grain | Aromatic | Low Starch",
    origin: "Andhra Pradesh & Karnataka, India"
  },
  {
    id: "ponni-boiled-rice",
    name: "Ponni Boiled Rice",
    category: "Rice & Rice Products",
    categorySlug: "rice-and-rice-products",
    hsnCode: "10063010",
    image: "/images/products/rice_ponni_boiled.jpg",
    specs: "Parboiled | High Fiber | 100% Sortex Cleaned",
    origin: "Cauvery Basin, Tamil Nadu"
  },
  {
    id: "golden-sella-basmati",
    name: "1121 Golden Sella Basmati Rice",
    category: "Rice & Rice Products",
    categorySlug: "rice-and-rice-products",
    hsnCode: "10063020",
    image: "/images/products/rice_golden_sella.jpg",
    specs: "AGL 8.35mm+ | Parboiled Golden | Zero Stickiness",
    origin: "Punjab & Haryana, India"
  },
  {
    id: "ir64-parboiled-rice",
    name: "IR-64 Parboiled Long Grain Rice",
    category: "Rice & Rice Products",
    categorySlug: "rice-and-rice-products",
    hsnCode: "10063010",
    image: "/images/products/rice_ir64.jpg",
    specs: "5% / 25% Broken | Sortex Cleaned | High Yield",
    origin: "Andhra Pradesh & Chhattisgarh, India"
  },

  // ==========================================
  // 2. PULSES & DALS
  // ==========================================
  {
    id: "toor-dal",
    name: "Toor Dal (Split Yellow Pigeon Peas)",
    category: "Pulses & Dals",
    categorySlug: "pulses-and-dals",
    hsnCode: "07136000",
    image: "/images/products/pulse_toor_dal.jpg",
    specs: "Fatka / Oily / Desi Unpolished | Sortex Cleaned",
    origin: "Maharashtra & Gujarat, India"
  },
  {
    id: "organic-chickpeas",
    name: "Kabuli Chickpeas (Dollar Chana)",
    category: "Pulses & Dals",
    categorySlug: "pulses-and-dals",
    hsnCode: "07132000",
    image: "/images/products/organic_chickpeas.jpg",
    specs: "7mm / 8mm / 9mm Bold Dollar | Sortex Cleaned",
    origin: "Madhya Pradesh, India"
  },
  {
    id: "red-lentils",
    name: "Red Split Lentils (Masoor Dal)",
    category: "Pulses & Dals",
    categorySlug: "pulses-and-dals",
    hsnCode: "07134000",
    image: "/images/products/red_lentils.jpg",
    specs: "Football & Regular Split | Polished / Unpolished",
    origin: "Madhya Pradesh & UP, India"
  },
  {
    id: "yellow-moong-dal",
    name: "Yellow Moong Dal (Split Mung)",
    category: "Pulses & Dals",
    categorySlug: "pulses-and-dals",
    hsnCode: "07133100",
    image: "/images/products/pulse_moong_dal.jpg",
    specs: "Dehulled Split | Bright Yellow | 99.5% Purity",
    origin: "Rajasthan & Madhya Pradesh, India"
  },
  {
    id: "urad-dal",
    name: "Urad Dal (Black Matpe Split & Gota)",
    category: "Pulses & Dals",
    categorySlug: "pulses-and-dals",
    hsnCode: "07133100",
    image: "/images/products/pulse_urad_dal.jpg",
    specs: "White Gota / Split with Skin | Premium Grade",
    origin: "Andhra Pradesh & Myanmar Corridor"
  },
  {
    id: "green-moong-whole",
    name: "Green Moong Whole (Whole Green Gram)",
    category: "Pulses & Dals",
    categorySlug: "pulses-and-dals",
    hsnCode: "07133100",
    image: "/images/products/pulse_green_moong.jpg",
    specs: "Bold Machine Cleaned | High Germination",
    origin: "Maharashtra & Karnataka, India"
  },
  {
    id: "chana-dal",
    name: "Chana Dal (Bengal Gram Split)",
    category: "Pulses & Dals",
    categorySlug: "pulses-and-dals",
    hsnCode: "07132000",
    image: "/images/products/pulse_chana_dal.jpg",
    specs: "Machine Cleaned | Sweet Taste | Low Moisture",
    origin: "Madhya Pradesh, India"
  },

  // ==========================================
  // 3. SPICES & CONDIMENTS
  // ==========================================
  {
    id: "alleppey-turmeric",
    name: "Alleppey Turmeric Whole Fingers",
    category: "Spices & Condiments",
    categorySlug: "spices-and-condiments",
    hsnCode: "09103020",
    image: "/images/products/turmeric.jpg",
    specs: "Curcumin Content ≥ 5.0% | Sun-Dried Whole",
    origin: "Kerala & Tamil Nadu, India"
  },
  {
    id: "green-cardamom",
    name: "Bold Green Cardamom",
    category: "Spices & Condiments",
    categorySlug: "spices-and-condiments",
    hsnCode: "09083110",
    image: "/images/products/cardamom.jpg",
    specs: "7mm - 8mm Extra Bold | Deep Green | Oil: 8%+",
    origin: "Idukki, Kerala, India"
  },
  {
    id: "tellicherry-black-pepper",
    name: "Tellicherry Black Peppercorns",
    category: "Spices & Condiments",
    categorySlug: "spices-and-condiments",
    hsnCode: "09041110",
    image: "/images/products/black_pepper.jpg",
    specs: "GL 550g/L - 570g/L | High Piperine | Sortex Cleaned",
    origin: "Malabar Coast, Kerala, India"
  },
  {
    id: "guntur-red-chillies",
    name: "Guntur Teja Dried Red Chillies",
    category: "Spices & Condiments",
    categorySlug: "spices-and-condiments",
    hsnCode: "09042110",
    image: "/images/products/red_chillies.jpg",
    specs: "Stemless & With Stem | Heat: 60,000 - 80,000 SHU",
    origin: "Guntur, Andhra Pradesh, India"
  },
  {
    id: "cumin-seeds",
    name: "Cumin Seeds (Jeera Whole)",
    category: "Spices & Condiments",
    categorySlug: "spices-and-condiments",
    hsnCode: "09093129",
    image: "/images/products/spice_cumin.jpg",
    specs: "Singapore / Europe 99% Sortex Quality | High Volatile Oil",
    origin: "Gujarat & Rajasthan, India"
  },
  {
    id: "coriander-seeds",
    name: "Coriander Seeds (Dhania Whole)",
    category: "Spices & Condiments",
    categorySlug: "spices-and-condiments",
    hsnCode: "09092190",
    image: "/images/products/spice_coriander.jpg",
    specs: "Eagle & Scooter Grades | Greenish-Golden | Cleaned",
    origin: "Madhya Pradesh & Rajasthan, India"
  },
  {
    id: "whole-cloves",
    name: "Whole Aromatic Cloves",
    category: "Spices & Condiments",
    categorySlug: "spices-and-condiments",
    hsnCode: "09071000",
    image: "/images/products/spice_cloves.jpg",
    specs: "Lal Pari Quality | High Eugenol | Hand Picked",
    origin: "Tamil Nadu & Kerala, India"
  },

  // ==========================================
  // 4. AGRICULTURAL GRAINS & MILLETS
  // ==========================================
  {
    id: "milling-wheat-grains",
    name: "Milling Wheat & Feed Grains",
    category: "Agricultural Grains",
    categorySlug: "agricultural-grains",
    hsnCode: "10019910",
    image: "/images/products/milling_wheat.jpg",
    specs: "Protein: 11.5% - 13.5% | Moisture < 12%",
    origin: "Madhya Pradesh & Punjab, India"
  },
  {
    id: "finger-millet-ragi",
    name: "Finger Millet (Ragi Whole)",
    category: "Millets & Superfoods",
    categorySlug: "millets-and-superfoods",
    hsnCode: "10082100",
    image: "/images/products/millet_ragi.jpg",
    specs: "Machine Cleaned | Rich in Calcium | 100% Gluten Free",
    origin: "Karnataka & Tamil Nadu, India"
  },
  {
    id: "pearl-millet-bajra",
    name: "Pearl Millet (Bajra Grains)",
    category: "Millets & Superfoods",
    categorySlug: "millets-and-superfoods",
    hsnCode: "10082100",
    image: "/images/products/millet_bajra.jpg",
    specs: "Dryland Harvested | High Iron | Export Cleaned",
    origin: "Rajasthan & Gujarat, India"
  },
  {
    id: "sorghum-jowar",
    name: "White Sorghum (Jowar Grains)",
    category: "Millets & Superfoods",
    categorySlug: "millets-and-superfoods",
    hsnCode: "10079000",
    image: "/images/products/millet_jowar.jpg",
    specs: "Plump White Grains | Low Moisture | Dehulled",
    origin: "Maharashtra & Karnataka, India"
  },
  {
    id: "foxtail-millet",
    name: "Foxtail Millet (Thinai)",
    category: "Millets & Superfoods",
    categorySlug: "millets-and-superfoods",
    hsnCode: "10082900",
    image: "/images/products/millet_foxtail.jpg",
    specs: "Dehulled Golden Grain | High Dietary Fiber",
    origin: "Andhra Pradesh & Tamil Nadu, India"
  },

  // ==========================================
  // 5. FRESH FRUITS
  // ==========================================
  {
    id: "cavendish-bananas",
    name: "Fresh Cavendish Bananas (G9)",
    category: "Fresh Fruits",
    categorySlug: "fresh-fruits",
    hsnCode: "08039010",
    image: "/images/products/fruit_bananas.jpg",
    specs: "Calibration 39-46mm | Length 18-22cm | Sea Reefer",
    origin: "Theni & Jalgaon, India"
  },
  {
    id: "fresh-pomegranates",
    name: "Fresh Pomegranates (Bhagwa Grade A)",
    category: "Fresh Fruits",
    categorySlug: "fresh-fruits",
    hsnCode: "08109010",
    image: "/images/products/fruit_pomegranates.jpg",
    specs: "Deep Red Arils | 250g - 350g+ | TSS 15-16%",
    origin: "Solapur, Maharashtra, India"
  },
  {
    id: "indian-mangoes",
    name: "Alphonso & Kesar Mangoes",
    category: "Fresh Fruits",
    categorySlug: "fresh-fruits",
    hsnCode: "08045020",
    image: "/images/products/fruit_mangoes.jpg",
    specs: "Hot Water & Irradiation Certified | Air Cargo",
    origin: "Ratnagiri & Gujarat, India"
  },
  {
    id: "fresh-table-grapes",
    name: "Fresh Table Grapes (Thomson Seedless)",
    category: "Fresh Fruits",
    categorySlug: "fresh-fruits",
    hsnCode: "08061000",
    image: "/images/products/fruit_grapes.jpg",
    specs: "Berry Size 16-18mm+ | Brix 16%+ | Cold Chain Monitored",
    origin: "Nashik Belt, Maharashtra, India"
  },
  {
    id: "fresh-coconuts",
    name: "Semi-Husked Fresh Mature Coconuts",
    category: "Fresh Fruits",
    categorySlug: "fresh-fruits",
    hsnCode: "08011910",
    image: "/images/products/fruit_coconuts.jpg",
    specs: "Weight 550g - 650g | Thick Meat | High Water",
    origin: "Pollachi & Coastal Tamil Nadu, India"
  },

  // ==========================================
  // 6. FRESH VEGETABLES
  // ==========================================
  {
    id: "fresh-red-onions",
    name: "Fresh Red Onions (Nashik Quality)",
    category: "Fresh Vegetables",
    categorySlug: "fresh-vegetables",
    hsnCode: "07031010",
    image: "/images/products/veg_red_onions.jpg",
    specs: "Size 45mm - 55mm / 55mm+ | Strong Pungency",
    origin: "Nashik, Maharashtra, India"
  },
  {
    id: "fresh-tomatoes",
    name: "Fresh Field Tomatoes",
    category: "Fresh Vegetables",
    categorySlug: "fresh-vegetables",
    hsnCode: "07020000",
    image: "/images/products/veg_tomatoes.jpg",
    specs: "Firm Red | Calibration 50-70mm | Export Packed",
    origin: "Karnataka & Tamil Nadu, India"
  },
  {
    id: "fresh-potatoes",
    name: "Fresh Table & Processing Potatoes",
    category: "Fresh Vegetables",
    categorySlug: "fresh-vegetables",
    hsnCode: "07019000",
    image: "/images/products/veg_potatoes.jpg",
    specs: "Jyoti & LR Varieties | 45mm+ Sorted | Low Sugar",
    origin: "Gujarat & UP, India"
  },
  {
    id: "fresh-ginger",
    name: "Fresh Ginger Roots (Shimoga Quality)",
    category: "Fresh Vegetables",
    categorySlug: "fresh-vegetables",
    hsnCode: "07099910",
    image: "/images/products/veg_ginger.jpg",
    specs: "Washed & Cleaned | High Fiber | Plump Fingers",
    origin: "Karnataka & Kerala, India"
  },
  {
    id: "fresh-garlic",
    name: "Fresh Garlic Bulbs",
    category: "Fresh Vegetables",
    categorySlug: "fresh-vegetables",
    hsnCode: "07032000",
    image: "/images/products/veg_garlic.jpg",
    specs: "Size 40mm - 50mm | White Cloves | Mesh Sacks",
    origin: "Madhya Pradesh & Gujarat, India"
  },
  {
    id: "fresh-green-chillies",
    name: "Fresh Green Chillies (G4)",
    category: "Fresh Vegetables",
    categorySlug: "fresh-vegetables",
    hsnCode: "07096010",
    image: "/images/products/veg_green_chillies.jpg",
    specs: "Length 8-12cm | High Pungency | Air Shipped",
    origin: "Andhra Pradesh & Gujarat, India"
  },
  {
    id: "fresh-curry-leaves",
    name: "Fresh Aromatic Curry Leaves",
    category: "Fresh Vegetables",
    categorySlug: "fresh-vegetables",
    hsnCode: "07099990",
    image: "/images/products/veg_curry_leaves.jpg",
    specs: "Tender Green | Strong Volatile Aroma | Air Freight",
    origin: "Tamil Nadu, India"
  },

  // ==========================================
  // 7. BANANA LEAVES & ECO PRODUCTS
  // ==========================================
  {
    id: "fresh-banana-leaves",
    name: "Fresh Cut Banana Leaves",
    category: "Banana Leaves & Eco",
    categorySlug: "banana-leaves-and-eco",
    hsnCode: "14049090",
    image: "/images/products/leaf_banana_fresh.jpg",
    specs: "Natural Green | Unblemished | Daily Air Shipments",
    origin: "Tamil Nadu River Basins, India"
  },
  {
    id: "vacuum-banana-leaves",
    name: "Vacuum Packed Banana Leaves",
    category: "Banana Leaves & Eco",
    categorySlug: "banana-leaves-and-eco",
    hsnCode: "14049090",
    image: "/images/products/leaf_banana_vacuum.jpg",
    specs: "Extended Shelf Life | Pre-Sanitized & Cut",
    origin: "Certified Agro-Processing Facility"
  },
  {
    id: "banana-leaf-rolls",
    name: "Banana Leaf Dining Rolls & Strips",
    category: "Banana Leaves & Eco",
    categorySlug: "banana-leaves-and-eco",
    hsnCode: "14049090",
    image: "/images/products/leaf_banana_rolls.jpg",
    specs: "Uniform Width | Restaurant & Catering Ready",
    origin: "Tamil Nadu, India"
  },

  // ==========================================
  // 8. FROZEN FOODS & READY TO COOK
  // ==========================================
  {
    id: "frozen-sweet-corn",
    name: "IQF Frozen Sweet Corn Kernels",
    category: "Frozen Foods",
    categorySlug: "frozen-foods",
    hsnCode: "07104000",
    image: "/images/products/frozen_sweet_corn.jpg",
    specs: "Individually Quick Frozen (-18°C) | Sweet & Crisp",
    origin: "Maharashtra, India"
  },
  {
    id: "frozen-green-peas",
    name: "IQF Frozen Green Peas",
    category: "Frozen Foods",
    categorySlug: "frozen-foods",
    hsnCode: "07102100",
    image: "/images/products/frozen_green_peas.jpg",
    specs: "Tender Sweet Peas | Uniform Calibration | Grade A",
    origin: "Punjab & UP, India"
  },
  {
    id: "frozen-mixed-vegetables",
    name: "IQF Frozen Mixed Vegetables",
    category: "Frozen Foods",
    categorySlug: "frozen-foods",
    hsnCode: "07109000",
    image: "/images/products/frozen_mixed_veg.jpg",
    specs: "Carrot, Peas, Beans & Sweet Corn | Balanced Ratio",
    origin: "Certified Cold-Chain Plant"
  },
  {
    id: "frozen-grated-coconut",
    name: "Frozen Fresh Grated Coconut",
    category: "Frozen Foods",
    categorySlug: "frozen-foods",
    hsnCode: "08011990",
    image: "/images/products/frozen_grated_coconut.jpg",
    specs: "100% Pure Coconut Meat | No Preservatives | IQF",
    origin: "Pollachi, Tamil Nadu, India"
  },
  {
    id: "frozen-samosas",
    name: "Frozen Cocktail Samosas",
    category: "Frozen Foods",
    categorySlug: "frozen-foods",
    hsnCode: "19059090",
    image: "/images/products/frozen_samosas.jpg",
    specs: "Spiced Potato & Pea Filling | Ready to Fry | HORECA",
    origin: "FSSAI / Halal / BRC Certified Facility"
  }
];
