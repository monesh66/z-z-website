/**
 * ZIYA ZARA TRADING COMPANY
 * Comprehensive Export Product Portfolio & Trade Categories
 * Sourced & verified according to international trade & export standards
 */

export interface FeaturedItem {
  name: string;
  image: string;
  spec: string;
}

export interface ProductCategory {
  id: string;
  slug: string;
  title: string;
  badge: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  items: string[];
  featuredItems?: FeaturedItem[];
  keySpecs: string[];
  packaging: string[];
  hsCode: string;
  origin: string;
}

export const productCategories: ProductCategory[] = [
  // 1. AGRICULTURAL PRODUCTS & COMMODITIES (First, as requested)
  {
    id: "agricultural-commodities",
    slug: "agricultural-products",
    title: "Agricultural Products & Commodities",
    badge: "DIRECT ORIGIN SOURCING",
    shortDescription: "Grains, pulses, whole spices, oilseeds, and natural farm produce sourced from prime agricultural regions.",
    longDescription:
      "We source and export staple agricultural commodities directly from certified producer cooperatives and agricultural aggregation centers. Every shipment undergoes moisture, purity, and grading verifications to satisfy demanding import regulations.",
    image: "/images/products/agricultural.jpg",
    items: [
      "Milling Wheat (11.5% - 13.5% Protein) & Feed Grains",
      "Organic Chickpeas (7mm, 8mm, 9mm Kabuli Garbanzo)",
      "Organic Red Split Lentils (Masoor Dal)",
      "Sunflower Seeds (Oil Grade & Confectionery)",
      "Non-GMO Yellow Soybeans & Yellow Maize / Corn",
      "Green Cardamom, Black Pepper & Whole Cumin",
      "Whole Dried Guntur & Teja Red Chillies",
      "Alleppey High-Curcumin Turmeric Fingers"
    ],
    featuredItems: [
      {
        name: "Milling Wheat & Feed Grains",
        image: "/images/products/milling_wheat.jpg",
        spec: "Purity ≥ 99% | Moisture < 12%",
      },
      {
        name: "Organic Chickpeas (Garbanzo)",
        image: "/images/products/organic_chickpeas.jpg",
        spec: "100% Sortex Cleaned | Grade A",
      },
      {
        name: "Organic Red Lentils (Masoor)",
        image: "/images/products/red_lentils.jpg",
        spec: "Sortex Cleaned | Polished / Regular",
      },
    ],
    keySpecs: [
      "Export-grade sorting (99% - 99.5% purity)",
      "Moisture content < 12%",
      "Fumigation & Phytosanitary certified",
      "Multi-ply woven poly / jute packaging with food liner"
    ],
    packaging: [
      "25kg & 50kg Multi-Ply Woven Polypropylene Sacks",
      "1 MT Jumbo Dry Bulk Bags (FIBC)",
      "Bulk Container Dry Liner Loading"
    ],
    hsCode: "HS 1001.99 / 0713.20 / 1206.00",
    origin: "Direct farm aggregators & certified agricultural belts (India & Global)"
  },

  // 2. SPICES & SEASONINGS (Second, as requested)
  {
    id: "spices-and-seasonings",
    slug: "spices-and-seasonings",
    title: "Indian Spices & Seasonings",
    badge: "SPICES BOARD CERTIFIED",
    shortDescription: "Export-grade whole spices, high-curcumin turmeric, bold cardamom, black pepper, and chillies.",
    longDescription:
      "We source and export premium Indian spices directly from certified grower cooperatives in Kerala, Tamil Nadu, Andhra Pradesh, and Rajasthan. Stringently graded for volatile oil content, natural aroma, and microbiological purity.",
    image: "/images/products/spices.jpg",
    items: [
      "Alleppey Turmeric Fingers & High-Curcumin Powder (≥ 5% Curcumin)",
      "Malabar & Tellicherry Black Peppercorns (500g/L - 570g/L GL)",
      "Bold Green Cardamom (7mm, 8mm Extra Bold Grades)",
      "Guntur S4 & Teja Red Chillies (Stemless / With Stem)",
      "Cumin Seeds (Jeera - 99% Sortex Cleaned Machine Quality)",
      "Coriander Seeds (Eagle & Scooter Quality)",
      "Cloves, Star Anise & Cassia Cinnamon",
      "Custom Blended Masalas: Garam Masala, Biryani & Curry Powders"
    ],
    featuredItems: [
      {
        name: "Alleppey Turmeric Fingers",
        image: "/images/products/turmeric.jpg",
        spec: "High Curcumin ≥ 5% | Sun-Dried",
      },
      {
        name: "Bold Green Cardamom",
        image: "/images/products/cardamom.jpg",
        spec: "7mm - 8mm Bold | Extra Green",
      },
      {
        name: "Tellicherry Black Pepper",
        image: "/images/products/black_pepper.jpg",
        spec: "550g/L - 570g/L GL | Machine Cleaned",
      },
      {
        name: "Guntur Red Chillies",
        image: "/images/products/red_chillies.jpg",
        spec: "Stemless | SHU 25,000 - 75,000",
      },
    ],
    keySpecs: [
      "Moisture: < 10% - 12%",
      "Purity: 99% - 99.5% Sortex Cleaned",
      "Volatile Oil: Industry High Benchmark",
      "Aflatoxin / Pesticide: Compliant with EU, US FDA & Codex limits"
    ],
    packaging: [
      "10kg / 25kg / 50kg Multi-Wall Paper Bags",
      "Jute Sacks with Food-Grade Inner Poly Liner",
      "Retail Pouches (100g, 250g, 500g, 1kg) with Custom Private Labeling"
    ],
    hsCode: "HS 0904 / 0908 / 0910",
    origin: "Kerala, Tamil Nadu, Andhra Pradesh, Rajasthan (India)"
  },

  // 3. EXPORT QUALITY RICE & GRAINS
  {
    id: "rice-and-grains",
    slug: "rice-and-grains",
    title: "Export Quality Rice & Grains",
    badge: "APEDA REGISTERED",
    shortDescription: "Aged 1121 Basmati, Sona Masoori, Ponni, and parboiled commercial export rice.",
    longDescription:
      "Supplying international food importers, hypermarket chains, and restaurant distributors with premium long-grain Basmati and nutrient-rich non-Basmati rice varieties, milled and aged to perfection.",
    image: "/images/products/rice.jpg",
    items: [
      "Traditional & 1121 Steam Basmati Rice (AGL 8.35mm+)",
      "1121 Golden & Creamy Sella Basmati Rice",
      "Pusa & Sugandha Fragrant Basmati Varieties",
      "Sona Masoori Raw & Steam Rice (South Indian Favorite)",
      "Ponni Boiled & Raw Rice (Tamil Nadu Origin)",
      "IR64 Long Grain Parboiled Rice (5% / 25% Broken)",
      "Refined Wheat Flour (Maida & Atta) & Semolina (Suji)"
    ],
    keySpecs: [
      "Average Grain Length (AGL): 7.2mm to 8.4mm",
      "Purity: 95% - 99%",
      "Moisture Content: 12% - 13% Max",
      "Broken Grain: < 1% for Premium Grades, 5% for Standard"
    ],
    packaging: [
      "5kg, 10kg, 20kg Non-Woven Fabric Bags with Handles",
      "25kg & 50kg PP Woven Sacks with Inner PE Liner",
      "Custom Master Carton Packaging for Retail Distribution"
    ],
    hsCode: "HS 1006.30 / 1001.99",
    origin: "Punjab, Haryana, Tamil Nadu, Andhra Pradesh (India)"
  },

  // 4. MILLETS & SUPERFOODS
  {
    id: "millets-and-superfoods",
    slug: "millets-and-superfoods",
    title: "Nutritious Millets & Superfoods",
    badge: "100% GLUTEN-FREE • HIGH FIBER",
    shortDescription: "Ancient grains: Ragi, Foxtail, Pearl millet, Sorghum, and ready-to-cook mixes.",
    longDescription:
      "Supporting the global demand for ancient healthy grains. Our export millets are high in dietary fiber, low in glycemic index, and sustainably harvested from traditional dryland farming zones.",
    image: "/images/products/millets.jpg",
    items: [
      "Finger Millet (Ragi / Mandua - Whole & Sprouted Flour)",
      "Foxtail Millet (Thinai / Kangni - Dehulled Grains)",
      "Pearl Millet (Bajra / Kambu - Whole & Flour)",
      "Little Millet (Samai) & Kodo Millet (Varagu)",
      "Barnyard Millet (Kuthiraivali / Sanwa)",
      "White & Red Sorghum (Jowar / Great Millet)",
      "Diabetic-Friendly Multi-Millet Dosa & Porridge Premixes"
    ],
    keySpecs: [
      "Purity: 99% Machine Cleaned & Dehulled",
      "Moisture: < 11%",
      "Gluten-Free Certified",
      "Rich in Iron, Calcium & Dietary Fiber"
    ],
    packaging: [
      "1kg, 2kg, 5kg Nitrogen-Flushed Standup Pouches",
      "25kg Vacuum Sealed Moisture-Proof Sacks",
      "Private Label Packaging Available"
    ],
    hsCode: "HS 1008.21 / 1008.29",
    origin: "Tamil Nadu, Karnataka, Maharashtra (India)"
  },

  // 5. PULSES, LENTILS & LEGUMES
  {
    id: "pulses-and-lentils",
    slug: "pulses-and-lentils",
    title: "Pulses, Lentils & Legumes",
    badge: "SORTEX CLEANED • HIGH PROTEIN",
    shortDescription: "High-protein Toor, Moong, Urad, Chana dal, Kabuli chickpeas, and green peas.",
    longDescription:
      "Connecting institutional wholesale distributors, canned food canneries, and retail packers with cleaned, sorted, and polished pulses and legumes meeting international food grade standards.",
    image: "/images/products/pulses.jpg",
    items: [
      "Toor Dal (Pigeon Peas - Oily & Non-Oily / Desi Quality)",
      "Moong Dal (Yellow Split & Whole Green Gram)",
      "Urad Dal (Black Matpe - Whole, Split & Gota Varieties)",
      "Chana Dal (Bengal Gram Split) & Besan Flour",
      "Red Masoor Dal (Split Red Lentils - Football & Regular)",
      "Kabuli Chickpeas (7mm, 8mm, 9mm, 10mm Jumbo Dollar Chana)",
      "Desi Brown Chickpeas (Kala Chana) & Dried Green Peas"
    ],
    keySpecs: [
      "Foreign Matter: < 0.5%",
      "Moisture: < 12%",
      "Damaged / Weeviled Grains: < 1%",
      "Optically Sorted by Sortex Technology"
    ],
    packaging: [
      "25kg & 50kg Heavy-Duty Polypropylene Bags",
      "1kg & 2kg Retail Transparent Pouches",
      "Bulk Container Dry Liner Bags"
    ],
    hsCode: "HS 0713.20 / 0713.40 / 0713.90",
    origin: "Madhya Pradesh, Maharashtra, Tamil Nadu (India)"
  },

  // 6. COCONUT & BY-PRODUCTS
  {
    id: "coconut-and-byproducts",
    slug: "coconut-and-byproducts",
    title: "Coconut & Plantation Produce",
    badge: "COCONUT DEVELOPMENT BOARD",
    shortDescription: "Virgin coconut oil, desiccated powder, milk powder, and coconut shell charcoal.",
    longDescription:
      "Extracted from prime coconut belts. We export premium culinary coconut products alongside industrial coconut shell charcoal and eco-friendly coir substrates.",
    image: "/images/products/coconut.jpg",
    items: [
      "Cold-Pressed Extra Virgin Coconut Oil (Raw & Organic)",
      "Refined Bleached Deodorized (RBD) Coconut Oil",
      "Desiccated Coconut Powder (High Fat - Fine & Medium Grades)",
      "Spray-Dried Coconut Milk Powder & Canned Coconut Cream",
      "Coconut Shell Activated Carbon (Water & Air Purification Grade)",
      "Hookah & Barbecue Coconut Shell Charcoal Briquettes",
      "Washed Coir Pith / Coco Peat 5kg Compressed Blocks"
    ],
    keySpecs: [
      "Free Fatty Acid (FFA): < 0.1% for Extra Virgin",
      "Fat Content: > 65% for Desiccated Coconut",
      "Fixed Carbon: > 75% for Shell Charcoal",
      "Zero Chemical Additives or Artificial Bleach"
    ],
    packaging: [
      "250ml, 500ml, 1L Glass Bottles & HDPE Jerry Cans",
      "25kg Kraft Paper Bags with Inner Polythene for Powder",
      "200L Steel Drums / Flexi-Tanks for Bulk Oil Exports"
    ],
    hsCode: "HS 1513.11 / 0801.11 / 4402.90",
    origin: "Pollachi, Coimbatore, Kerala (India)"
  },

  // 7. TEXTILES & GARMENTS
  {
    id: "textiles-and-garments",
    slug: "textiles-and-garments",
    title: "Textiles & Garments",
    badge: "OEKO-TEX CERTIFIED",
    shortDescription: "Cotton yarns, woven fabrics, institutional linens, apparel, and industrial workwear.",
    longDescription:
      "Connecting global textile converters, garment manufacturers, and institutional uniform buyers with verified spinning mills and apparel production units in Tirupur, Coimbatore, and Surat.",
    image: "/images/products/textiles.jpg",
    items: [
      "Combed & Carded Ring-Spun Cotton Yarns (Counts 20s to 80s Ne)",
      "Organic & BCI Certified Cotton Knitting Yarns",
      "Raw Greige & Finished Woven Cotton / Poly-Cotton Fabrics",
      "High-GSM Terry Towels, Bed Linens & Hospitality Textiles",
      "Industrial Protective Workwear, Flame-Retardant Uniforms & High-Vis Vests",
      "Custom Knitwear (Polo T-Shirts, Hoodies, Activewear)"
    ],
    keySpecs: [
      "Yarn Count Tolerance: ± 1.5%",
      "Color Fastness to Washing & Light: Grade 4+",
      "Tensile Strength: In accordance with ASTM / ISO standards",
      "Eco-Friendly Azo-Free Dyes"
    ],
    packaging: [
      "Paper Cones Packed in HDPE Woven Sacks or Corrugated Cartons",
      "Fabric Rolls in Protective Polyurethane Outer Sleeves",
      "Individual Polybag Garment Packing in Export Master Cartons"
    ],
    hsCode: "HS 5205 / 5208 / 6203",
    origin: "Tirupur, Coimbatore, Tamil Nadu & Gujarat (India)"
  },

  // 8. INDUSTRIAL SUPPLIES & METALS
  {
    id: "industrial-supplies",
    slug: "industrial-supplies",
    title: "Industrial Metals & Supplies",
    badge: "MILL TEST CERTIFIED (EN 10204)",
    shortDescription: "Seamless steel pipes, industrial valves, flanges, structural beams, and mechanical fittings.",
    longDescription:
      "Procuring robust structural materials, fabricated metal components, seamless piping, and heavy-duty mechanical fittings for international oil & gas, construction, and manufacturing operations globally.",
    image: "/images/products/industrial.jpg",
    items: [
      "Carbon & Stainless Steel Seamless Pipes (ASTM A106 / A312)",
      "Industrial Ball, Gate, Globe & Check Valves (Class 150 - 2500)",
      "Weld Neck, Slip-On & Blind Flanges (ANSI B16.5)",
      "Hot-Rolled Structural Beams, Angles & Channels",
      "Galvanized Steel Coils & Corrugated Roofing Sheets",
      "High-Tensile Fasteners, Bolts, Nuts & Threaded Rods"
    ],
    keySpecs: [
      "Dimensional Tolerances: ANSI / ASME / DIN Standards",
      "Hydrostatic Tested & Non-Destructive Tested (NDT)",
      "Mill Test Certificates (MTC) 3.1 & 3.2 according to EN 10204",
      "Anti-Corrosion Rust Inhibitor Coating Applied"
    ],
    packaging: [
      "Beveled Ends Protected with Plastic Caps",
      "Steel Strapped Bundles with Waterproof Outer Wrap",
      "Heavy-Duty Wooden Cases for Valves & Precision Flanges"
    ],
    hsCode: "HS 7304 / 8481 / 7307",
    origin: "Audited Indian & International Steel Mill Hubs"
  },

  // 9. FOOD PROCESSING & PACKAGING MACHINERY
  {
    id: "processing-machinery",
    slug: "processing-machinery",
    title: "Food Processing & Packaging Machinery",
    badge: "CE CERTIFIED INDUSTRIAL GRADE",
    shortDescription: "Commercial retort sterilizers, dehydrators, automatic pouch packing, and filling lines.",
    longDescription:
      "Supplying commercial food processors, agro-exporters, and packaging units worldwide with durable, stainless steel food processing lines, sterilization retorts, and high-speed packaging machinery.",
    image: "/images/products/machinery.jpg",
    items: [
      "Industrial Retort Autoclave Sterilizers (for Pouches, Cans & Glass Bottles)",
      "Commercial Hot-Air Tray Dehydrators & Dryers (for Fruits, Spices & Herbs)",
      "Industrial Cooking & Stirring Kettles (for Halwa, Sweets & Sauces)",
      "Automatic Form-Fill-Seal (FFS) Pouch Packing Machines",
      "Industrial Continuous Band Vacuum Sealing Machines",
      "Automatic Linear Weighing & Multi-Head Granule Packaging Systems",
      "Bottle Rinsing, Liquid Filling & Capping Automated Lines"
    ],
    keySpecs: [
      "Material: Food Grade SS 304 / SS 316 Contact Parts",
      "PLC Touch Screen Controls with Digital Recipe Storage",
      "Certified Pressure Vessels (ASME / CE Standards)",
      "Energy Efficient Electrical Heating & Steam Jacket Design"
    ],
    packaging: [
      "Export-Grade Wooden Crates with Anti-Corrosive Vacuum Wrap",
      "Container Lashings & Shock-Proof Palletizing",
      "Spare Parts Kit & Operating Manual Included"
    ],
    hsCode: "HS 8422.30 / 8419.89",
    origin: "Chennai, Coimbatore, Gujarat (India)"
  },

  // 10. READY-TO-COOK & READY-TO-EAT FOODS
  {
    id: "rtc-and-rte-foods",
    slug: "rtc-and-rte-foods",
    title: "Ready-to-Cook & Ready-to-Eat Foods",
    badge: "RETORT STERILIZED • 24M SHELF LIFE",
    shortDescription: "Instant breakfast mixes, retort meal pouches, traditional sweets, snacks, and pickles.",
    longDescription:
      "Formulated for global diaspora communities and mainstream ethnic food retailers. Ready-to-eat ambient retort meals that require zero refrigeration, paired with authentic instant South Indian breakfast premixes.",
    image: "/images/products/ready_to_eat.jpg",
    items: [
      "Instant Breakfast Mixes: Idli & Dosa Mix, Instant Adai, Crispy Medu Vada",
      "Traditional Mixes: Rava Upma, Pongal & Bisi Bele Bath Mix",
      "Dessert & Sweet Premixes: Gulab Jamun Mix, Rava Kesari & Semiya Payasam",
      "Traditional Snacks: Handmade Murukku, Ribbon Pakoda, Madras Mixture, Appalam",
      "Retort Pouch Veg Curries: Paneer Butter Masala, Dal Makhani, Chana Masala",
      "Retort Pouch Non-Veg Curries: Seer Fish Curry, Chettinad Chicken, Fish Moilee",
      "Authentic South Indian Pickles, Thokku & Culinary Pastes"
    ],
    keySpecs: [
      "Shelf Life: 12 - 24 Months at Ambient Temperature",
      "Retort Steam Sterilized (Zero Preservatives Added)",
      "High-Barrier 4-Layer Aluminum Foil Retort Pouches",
      "HACCP & ISO 22000 Certified Manufacturing"
    ],
    packaging: [
      "200g - 450g Retort Pouches with Printed Outer Mono-Cartons",
      "500g & 1kg Pillow / Standup Pouches for Instant Mixes",
      "Master Corrugated Cartons (24 / 48 units per carton)"
    ],
    hsCode: "HS 2106.90 / 2005.99 / 1904.90",
    origin: "Chennai, Tamil Nadu (India)"
  }
];
