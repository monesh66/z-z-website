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
  },
  {
    id: "frozen-malabar-parotta",
    name: "Frozen Malabar Parottas (Layered Flaky)",
    category: "Frozen Foods",
    categorySlug: "frozen-foods",
    hsnCode: "19059090",
    image: "/images/products/frozen_malabar_parotta.jpg",
    specs: "Multi-Layered Hand-Tossed | Pre-Cooked | -18°C Cold Chain",
    origin: "Kerala, India"
  },
  {
    id: "frozen-whole-wheat-chapati",
    name: "Frozen Plain Chapati & Phulka Roti",
    category: "Frozen Foods",
    categorySlug: "frozen-foods",
    hsnCode: "19059090",
    image: "/images/products/frozen_malabar_parotta.jpg",
    specs: "100% Whole Wheat Atta | Soft & Fluffy | Zero Preservatives",
    origin: "Tamil Nadu & Kerala, India"
  },
// ==========================================
  // 9. READY-TO-EAT RETORT CURRIES & MEALS (Sree Export Line)
  // ==========================================
  {
    id: "rte-seer-fish-curry",
    name: "Retort Ready-to-Eat Seer Fish Curry",
    category: "Ready-to-Eat & Retort Curries",
    categorySlug: "ready-to-eat-curries",
    hsnCode: "21069099",
    image: "/images/products/retort_curry_seer_fish.jpg",
    specs: "Authentic Coconut Tamarind Gravy | 18-24M Ambient Shelf Life",
    origin: "Coastal Tamil Nadu & Kerala, India"
  },
  {
    id: "rte-fish-moilee",
    name: "Retort Ready-to-Eat Fish Moilee",
    category: "Ready-to-Eat & Retort Curries",
    categorySlug: "ready-to-eat-curries",
    hsnCode: "21069099",
    image: "/images/products/retort_curry_seer_fish.jpg",
    specs: "Mild Coconut Milk & Curry Leaf Broth | Seer Fish Steaks",
    origin: "Kerala, India"
  },
  {
    id: "rte-butter-chicken",
    name: "Retort Ready-to-Eat Butter Chicken",
    category: "Ready-to-Eat & Retort Curries",
    categorySlug: "ready-to-eat-curries",
    hsnCode: "21069099",
    image: "/images/products/retort_curry_butter_chicken.jpg",
    specs: "Rich Cashew Tomato Gravy | Tender Boneless Chunks | Halal",
    origin: "Certified Food Processing Facility"
  },
  {
    id: "rte-kerala-chicken-curry",
    name: "Retort Ready-to-Eat Kerala Chicken Curry",
    category: "Ready-to-Eat & Retort Curries",
    categorySlug: "ready-to-eat-curries",
    hsnCode: "21069099",
    image: "/images/products/retort_curry_butter_chicken.jpg",
    specs: "Roasted Coconut & Malabar Spices | Shelf Stable Retort Pouch",
    origin: "Kerala, India"
  },
  {
    id: "rte-kerala-beef-fry",
    name: "Retort Ready-to-Eat Kerala Beef Fry",
    category: "Ready-to-Eat & Retort Curries",
    categorySlug: "ready-to-eat-curries",
    hsnCode: "21069099",
    image: "/images/products/retort_kerala_beef_fry.jpg",
    specs: "Slow Roasted Coconut & Black Pepper Beef | Traditional Recipe",
    origin: "Kerala, India"
  },
  {
    id: "rte-beef-chilly-fry",
    name: "Retort Ready-to-Eat Beef Chilly Fry",
    category: "Ready-to-Eat & Retort Curries",
    categorySlug: "ready-to-eat-curries",
    hsnCode: "21069099",
    image: "/images/products/retort_kerala_beef_fry.jpg",
    specs: "Crisp Onions & Green Chillies | Ready in 3 Minutes | Retort Sealed",
    origin: "Kerala, India"
  },

  // ==========================================
  // 10. READY-TO-COOK (RTC) BATTERS, PASTES & PICKLES
  // ==========================================
  {
    id: "rtc-dosa-batter-mix",
    name: "Instant Dosa Batter Dry Mix",
    category: "Ready-to-Cook Mixes",
    categorySlug: "ready-to-cook-mixes",
    hsnCode: "19021900",
    image: "/images/products/rtc_dosa_batter_mix.jpg",
    specs: "Sortex Rice & Urad Dal Blend | Fermentation Ready | 12M Shelf Life",
    origin: "Tamil Nadu, India"
  },
  {
    id: "rtc-idly-batter-mix",
    name: "Instant Idly Batter Dry Mix",
    category: "Ready-to-Cook Mixes",
    categorySlug: "ready-to-cook-mixes",
    hsnCode: "19021900",
    image: "/images/products/rtc_dosa_batter_mix.jpg",
    specs: "Soft & Fluffy Steamed Cakes | 100% Natural | Export Pack",
    origin: "Tamil Nadu, India"
  },
  {
    id: "rtc-vada-mix",
    name: "Instant Medu Vada Mix",
    category: "Ready-to-Cook Mixes",
    categorySlug: "ready-to-cook-mixes",
    hsnCode: "19021900",
    image: "/images/products/rtc_dosa_batter_mix.jpg",
    specs: "Crispy Lentil Fritters | Spiced with Cumin & Pepper",
    origin: "Tamil Nadu, India"
  },
  {
    id: "rtc-biryani-paste-arcot",
    name: "Arcot & Chettinad Biryani Pastes",
    category: "Ready-to-Cook Mixes",
    categorySlug: "ready-to-cook-mixes",
    hsnCode: "21039090",
    image: "/images/products/ready_to_eat.jpg",
    specs: "Concentrated Biryani Gravy Paste | No Added MSG / Artificial Colors",
    origin: "Tamil Nadu, India"
  },
  {
    id: "rtc-sambar-paste",
    name: "Traditional Sambar & Kathamba Paste",
    category: "Ready-to-Cook Mixes",
    categorySlug: "ready-to-cook-mixes",
    hsnCode: "21039090",
    image: "/images/products/ready_to_eat.jpg",
    specs: "Roasted Lentils & Asafoetida Base | Instant Water Blend",
    origin: "Tamil Nadu, India"
  },
  {
    id: "rtc-prawns-pickle",
    name: "Non-Veg Prawns & Fish Pickle",
    category: "Ready-to-Cook Mixes",
    categorySlug: "ready-to-cook-mixes",
    hsnCode: "20019000",
    image: "/images/products/ready_to_eat.jpg",
    specs: "Gingelly Oil Preserved | Spicy Coastal Marinade | Export Jars",
    origin: "Kerala & Tamil Nadu, India"
  },

  // ==========================================
  // 11. VALUE-ADDED PRODUCE, DAIRY & OILS
  // ==========================================
  {
    id: "val-traditional-ghee",
    name: "Pure Traditional Desi Cow Ghee",
    category: "Value-Added Produce",
    categorySlug: "value-added-produce",
    hsnCode: "04059020",
    image: "/images/products/traditional_ghee.jpg",
    specs: "Granular Golden Texture | 99.7% Milk Fat | Litho Tins & Jars",
    origin: "Tamil Nadu & Gujarat, India"
  },
  {
    id: "val-moringa-ghee",
    name: "Moringa Infused Herbal Ghee",
    category: "Value-Added Produce",
    categorySlug: "value-added-produce",
    hsnCode: "04059020",
    image: "/images/products/traditional_ghee.jpg",
    specs: "Organic Moringa Leaf Infusion | High Antioxidants | Export Grade",
    origin: "Tamil Nadu, India"
  },
  {
    id: "val-virgin-coconut-oil",
    name: "Cold-Pressed Extra Virgin Coconut Oil",
    category: "Value-Added Produce",
    categorySlug: "value-added-produce",
    hsnCode: "15131100",
    image: "/images/products/virgin_coconut_oil.jpg",
    specs: "Unrefined | Cold Extracted | Organic Certified | Zero Cholesterol",
    origin: "Pollachi, Tamil Nadu, India"
  },
  {
    id: "val-cold-pressed-sesame-oil",
    name: "Cold-Pressed Sesame (Gingelly) Oil",
    category: "Value-Added Produce",
    categorySlug: "value-added-produce",
    hsnCode: "15155091",
    image: "/images/products/virgin_coconut_oil.jpg",
    specs: "Traditional Wood Pressed (Chekku) | Natural Aroma | Unrefined",
    origin: "Tamil Nadu, India"
  },
  {
    id: "val-wild-forest-honey",
    name: "Pure Wild Forest Honey & Comb",
    category: "Value-Added Produce",
    categorySlug: "value-added-produce",
    hsnCode: "04090000",
    image: "/images/products/consumer.jpg",
    specs: "Unpasteurized Raw Forest Nectar | Antibiotic Free | Export Grade",
    origin: "Western Ghats, India"
  },
  {
    id: "val-mango-pulp",
    name: "Alphonso & Kesar Mango Pulp",
    category: "Value-Added Produce",
    categorySlug: "value-added-produce",
    hsnCode: "20079910",
    image: "/images/products/fruit_mangoes.jpg",
    specs: "16°-24° Brix Pure Fruit Puree | Aseptic Cans & Drums",
    origin: "Ratnagiri & Gujarat, India"
  },
  {
    id: "val-cashew-kernels",
    name: "Export Graded Cashew Kernels (W240 & W320)",
    category: "Value-Added Produce",
    categorySlug: "value-added-produce",
    hsnCode: "08013210",
    image: "/images/products/consumer.jpg",
    specs: "Whole White Kernels | Nitrogen Vacuum Packed | Zero Blemish",
    origin: "Panruti & Goa, India"
  },
  {
    id: "val-moringa-powder",
    name: "Organic Moringa Leaf Powder & Health Mix",
    category: "Value-Added Produce",
    categorySlug: "value-added-produce",
    hsnCode: "12119099",
    image: "/images/products/millets.jpg",
    specs: "Shade Dried & Fine Mesh Pulverized | Rich in Vitamin A & Iron",
    origin: "Theni, Tamil Nadu, India"
  },

  // ==========================================
  // 12. TRADITIONAL & HEALTHY PACKAGED SNACKS
  // ==========================================
  {
    id: "snack-kerala-banana-chips",
    name: "Kerala Banana Chips (Pure Coconut Oil)",
    category: "Traditional & Healthy Snacks",
    categorySlug: "traditional-snacks",
    hsnCode: "20089999",
    image: "/images/products/snack_banana_chips.jpg",
    specs: "Nendran Banana Slices | Pure Coconut Oil Fried | Vacuum Sealed",
    origin: "Kerala, India"
  },
  {
    id: "snack-spicy-banana-chips",
    name: "Spicy Masala & Jaggery Banana Chips",
    category: "Traditional & Healthy Snacks",
    categorySlug: "traditional-snacks",
    hsnCode: "20089999",
    image: "/images/products/snack_banana_chips.jpg",
    specs: "Chilli Sprinkled / Jaggery Coated (Sharkara Upperi)",
    origin: "Kerala, India"
  },
  {
    id: "snack-madras-mixture",
    name: "Authentic Madras Mixture & Savory Crunch",
    category: "Traditional & Healthy Snacks",
    categorySlug: "traditional-snacks",
    hsnCode: "21069099",
    image: "/images/products/consumer.jpg",
    specs: "Omapodi, Roasted Peanuts, Curry Leaves & Boondi | Crunchy",
    origin: "Tamil Nadu, India"
  },
  {
    id: "snack-kai-murukku",
    name: "Traditional Kai Murukku & Butter Murukku",
    category: "Traditional & Healthy Snacks",
    categorySlug: "traditional-snacks",
    hsnCode: "19059090",
    image: "/images/products/consumer.jpg",
    specs: "Hand-Twisted Rice & Butter Snack | Festival Quality",
    origin: "Tamil Nadu, India"
  },
  {
    id: "snack-roasted-makhana",
    name: "Roasted Fox Nuts (Makhana) - Spiced & Salted",
    category: "Traditional & Healthy Snacks",
    categorySlug: "traditional-snacks",
    hsnCode: "19041090",
    image: "/images/products/consumer.jpg",
    specs: "High Protein | Gluten-Free | Low Oil Roasted Snack",
    origin: "Bihar & Madhya Pradesh, India"
  },
  {
    id: "snack-peanut-chikki",
    name: "Traditional Jaggery Peanut Chikki / Brittle",
    category: "Traditional & Healthy Snacks",
    categorySlug: "traditional-snacks",
    hsnCode: "17049020",
    image: "/images/products/consumer.jpg",
    specs: "Crushed Groundnuts & Organic Jaggery | Pure Sweet Crunch",
    origin: "Kovilpatti, Tamil Nadu, India"
  },

  // ==========================================
  // 13. HERITAGE RICE & SPECIALTY GRAINS
  // ==========================================
  {
    id: "rice-seeraga-samba",
    name: "Seeraga Samba Biryani Rice (Jeera Samba)",
    category: "Rice & Rice Products",
    categorySlug: "rice-and-rice-products",
    hsnCode: "10063090",
    image: "/images/products/rice.jpg",
    specs: "Tiny Grain | High Natural Aroma | Authentic Tamil Nadu Biryani",
    origin: "Cauvery Delta, Tamil Nadu"
  },
  {
    id: "rice-karuppu-kavuni",
    name: "Karuppu Kavuni Black Rice (Heritage Superfood)",
    category: "Rice & Rice Products",
    categorySlug: "rice-and-rice-products",
    hsnCode: "10063090",
    image: "/images/products/rice.jpg",
    specs: "Ancient Black Grain | Rich in Anthocyanins | Unpolished",
    origin: "Chettinad, Tamil Nadu, India"
  },
  {
    id: "rice-mappillai-samba",
    name: "Mappillai Samba (Ancient Red Rice)",
    category: "Rice & Rice Products",
    categorySlug: "rice-and-rice-products",
    hsnCode: "10063090",
    image: "/images/products/rice.jpg",
    specs: "Unpolished Traditional Red Rice | High Fiber & Iron",
    origin: "Tamil Nadu, India"
  },

  // ==========================================
  // 14. FOOD PROCESSING & PACKAGING MACHINERY
  // ==========================================
  {
    id: "machine-retort-sterilization",
    name: "Commercial Retort Sterilization Machine",
    category: "Processing & Packaging Machinery",
    categorySlug: "processing-machinery",
    hsnCode: "84198990",
    image: "/images/products/machinery.jpg",
    specs: "High Pressure Steam (121°C+) | Kills Bacteria | 12-24M RTE Shelf Life",
    origin: "CE Certified Machinery Works"
  },
  {
    id: "machine-pouch-packing",
    name: "Automated Food Pouch Packing & Sealing Machine",
    category: "Processing & Packaging Machinery",
    categorySlug: "processing-machinery",
    hsnCode: "84223000",
    image: "/images/products/machinery.jpg",
    specs: "Multi-Head Weigher | Nitrogen Flushing | Form Fill Seal (FFS)",
    origin: "Industrial Machinery Division"
  },
  {
    id: "machine-food-dehydrator",
    name: "Commercial Cabinet & Tunnel Food Dehydrator",
    category: "Processing & Packaging Machinery",
    categorySlug: "processing-machinery",
    hsnCode: "84193900",
    image: "/images/products/machinery.jpg",
    specs: "Controlled Moisture Extraction | Fruits, Veg & Spices",
    origin: "Engineering Division"
  }
];
