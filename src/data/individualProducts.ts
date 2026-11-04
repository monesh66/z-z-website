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
  },

  // ==========================================
  // SREE EXPORT FULL CATALOGUE ADDITIONS
  // ==========================================
  {
    id: "rte-fish-mango-curry",
    name: "Retort Ready-to-Eat Fish Mango Curry",
    category: "Ready-to-Eat & Retort Curries",
    categorySlug: "ready-to-eat-curries",
    hsnCode: "21069099",
    image: "/images/products/retort_curry_seer_fish.jpg",
    specs: "Raw Mango & Coconut Milk Broth | Seer Fish Steaks | 24M Shelf Life",
    origin: "Kerala & Tamil Nadu, India"
  },
  {
    id: "rte-chilly-fish",
    name: "Retort Ready-to-Eat Chilly Fish",
    category: "Ready-to-Eat & Retort Curries",
    categorySlug: "ready-to-eat-curries",
    hsnCode: "21069099",
    image: "/images/products/retort_curry_seer_fish.jpg",
    specs: "Indo-Chinese Glaze | Boneless Fish Chunks | Ambient Retort Pouch",
    origin: "Certified Export Facility"
  },
  {
    id: "rte-kerala-fish-curry",
    name: "Retort Traditional Kerala Fish Curry",
    category: "Ready-to-Eat & Retort Curries",
    categorySlug: "ready-to-eat-curries",
    hsnCode: "21069099",
    image: "/images/products/retort_curry_seer_fish.jpg",
    specs: "Clay-Pot Style Kudampuli & Red Chilli Gravy | Kingfish / Sardine",
    origin: "Kottayam & Alleppey, Kerala"
  },
  {
    id: "rte-kadai-chicken",
    name: "Retort Ready-to-Eat Kadai Chicken",
    category: "Ready-to-Eat & Retort Curries",
    categorySlug: "ready-to-eat-curries",
    hsnCode: "21069099",
    image: "/images/products/retort_curry_butter_chicken.jpg",
    specs: "Crushed Coriander & Bell Pepper Masala | Boneless Halal Chicken",
    origin: "Certified Export Facility"
  },
  {
    id: "rte-chilly-chicken",
    name: "Retort Ready-to-Eat Chilly Chicken",
    category: "Ready-to-Eat & Retort Curries",
    categorySlug: "ready-to-eat-curries",
    hsnCode: "21069099",
    image: "/images/products/retort_curry_butter_chicken.jpg",
    specs: "Spicy Oriental Glaze | Tender Boneless Cubes | Zero Preservatives",
    origin: "Certified Export Facility"
  },
  {
    id: "rte-chicken-pepper-fry",
    name: "Retort Ready-to-Eat Chicken Pepper Fry",
    category: "Ready-to-Eat & Retort Curries",
    categorySlug: "ready-to-eat-curries",
    hsnCode: "21069099",
    image: "/images/products/retort_curry_butter_chicken.jpg",
    specs: "Malabar Black Peppercorn & Curry Leaf Glaze | Dry Roast Style",
    origin: "Kerala & Tamil Nadu, India"
  },
  {
    id: "rte-kerala-beef-curry",
    name: "Retort Ready-to-Eat Kerala Beef Curry",
    category: "Ready-to-Eat & Retort Curries",
    categorySlug: "ready-to-eat-curries",
    hsnCode: "21069099",
    image: "/images/products/retort_kerala_beef_fry.jpg",
    specs: "Rich Coconut Milk & Garam Masala Gravy | Tender Boneless Cubes",
    origin: "Kerala, India"
  },
  {
    id: "rtc-adai-instant-mix",
    name: "Instant Adai Multi-Lentil Breakfast Mix",
    category: "Ready-to-Cook Mixes",
    categorySlug: "ready-to-cook-mixes",
    hsnCode: "19021900",
    image: "/images/products/rtc_dosa_batter_mix.jpg",
    specs: "Rice, Toor, Chana & Urad Lentil Blend | High Protein | 12M Shelf Life",
    origin: "Tamil Nadu, India"
  },
  {
    id: "rtc-multigrain-dosa-mix",
    name: "Multi-Grain Dosa Instant Mix",
    category: "Ready-to-Cook Mixes",
    categorySlug: "ready-to-cook-mixes",
    hsnCode: "19021900",
    image: "/images/products/rtc_dosa_batter_mix.jpg",
    specs: "Ragi, Jowar, Bajra & Wheat Blend | Diabetic-Friendly | Export Pack",
    origin: "Tamil Nadu, India"
  },
  {
    id: "rtc-rava-dosa-mix",
    name: "Instant Rava Dosa Crispy Mix",
    category: "Ready-to-Cook Mixes",
    categorySlug: "ready-to-cook-mixes",
    hsnCode: "19021900",
    image: "/images/products/rtc_dosa_batter_mix.jpg",
    specs: "Semolina, Rice Flour, Cumin & Black Pepper | Crisp Golden Texture",
    origin: "Tamil Nadu, India"
  },
  {
    id: "rtc-rava-kitchadi-mix",
    name: "Instant Rava Kitchadi & Upma Mix",
    category: "Ready-to-Cook Mixes",
    categorySlug: "ready-to-cook-mixes",
    hsnCode: "19021900",
    image: "/images/products/rtc_dosa_batter_mix.jpg",
    specs: "Roasted Semolina with Mustard, Dal & Veggies | 3-Min Preparation",
    origin: "Tamil Nadu, India"
  },
  {
    id: "rtc-millet-pongal-mix",
    name: "Healthy Millet Pongal Breakfast Mix",
    category: "Ready-to-Cook Mixes",
    categorySlug: "ready-to-cook-mixes",
    hsnCode: "19021900",
    image: "/images/products/rtc_dosa_batter_mix.jpg",
    specs: "Foxtail & Little Millet with Moong Dal & Cashews | Low Glycemic",
    origin: "Tamil Nadu, India"
  },
  {
    id: "rtc-rice-pongal-mix",
    name: "Traditional South Indian Ghee Pongal Mix",
    category: "Ready-to-Cook Mixes",
    categorySlug: "ready-to-cook-mixes",
    hsnCode: "19021900",
    image: "/images/products/rtc_dosa_batter_mix.jpg",
    specs: "Raw Rice, Split Yellow Moong, Cumin, Pepper & Asafoetida Blend",
    origin: "Tamil Nadu, India"
  },
  {
    id: "rtc-rava-kesari-mix",
    name: "Instant Rava Kesari Dessert Mix",
    category: "Ready-to-Cook Mixes",
    categorySlug: "ready-to-cook-mixes",
    hsnCode: "19021900",
    image: "/images/products/rtc_dosa_batter_mix.jpg",
    specs: "Roasted Rava with Cardamom & Saffron Notes | Add Ghee & Water",
    origin: "Tamil Nadu, India"
  },
  {
    id: "rtc-ragi-dosa-mix",
    name: "Finger Millet (Ragi) Dosa Instant Mix",
    category: "Ready-to-Cook Mixes",
    categorySlug: "ready-to-cook-mixes",
    hsnCode: "19021900",
    image: "/images/products/rtc_dosa_batter_mix.jpg",
    specs: "100% Whole Finger Millet Flour | Calcium Rich | Traditional Blend",
    origin: "Karnataka & Tamil Nadu, India"
  },
  {
    id: "rtc-vathakulambu-mix",
    name: "Traditional Vathakulambu & Puliyodarai Mix",
    category: "Ready-to-Cook Mixes",
    categorySlug: "ready-to-cook-mixes",
    hsnCode: "21039090",
    image: "/images/products/ready_to_eat.jpg",
    specs: "Sundakkai Turkey Berry / Tamarind Rice Paste | Export Glass Jars",
    origin: "Tamil Nadu, India"
  },
  {
    id: "rtc-palada-pradhaman-mix",
    name: "Kerala Palada Pradhaman & Payasam Mix",
    category: "Ready-to-Cook Mixes",
    categorySlug: "ready-to-cook-mixes",
    hsnCode: "19021900",
    image: "/images/products/ready_to_eat.jpg",
    specs: "Rice Flakes (Ada) with Cardamom & Cashews | Authentic Festival Dessert",
    origin: "Kerala, India"
  },
  {
    id: "rtc-fish-pickle-sardine",
    name: "Coastal Sardine & Tuna Fish Pickle",
    category: "Ready-to-Cook Mixes",
    categorySlug: "ready-to-cook-mixes",
    hsnCode: "20019000",
    image: "/images/products/ready_to_eat.jpg",
    specs: "Gingelly Oil Preserved Fresh Fish Chunks | Garlic & Fenugreek",
    origin: "Malabar Coast, Kerala"
  },
  {
    id: "rtc-chicken-beef-pickle",
    name: "Traditional Chicken & Beef Pickle",
    category: "Ready-to-Cook Mixes",
    categorySlug: "ready-to-cook-mixes",
    hsnCode: "20019000",
    image: "/images/products/ready_to_eat.jpg",
    specs: "Boneless Meat Cubes Preserved in Spiced Mustard Gingelly Oil",
    origin: "Kerala, India"
  },
  {
    id: "spice-chicken-65-masala",
    name: "Authentic Chicken 65 & Kebab Masala",
    category: "Spices & Seasonings",
    categorySlug: "spices-and-seasonings",
    hsnCode: "09109100",
    image: "/images/products/spices.jpg",
    specs: "Red Chilli, Ginger, Garlic & Corn Starch Blend | Crispy Fry Seasoning",
    origin: "Chennai, Tamil Nadu, India"
  },
  {
    id: "spice-tandoori-masala",
    name: "Tandoori BBQ & Tikka Spice Blend",
    category: "Spices & Seasonings",
    categorySlug: "spices-and-seasonings",
    hsnCode: "09109100",
    image: "/images/products/spices.jpg",
    specs: "Deggi Mirch, Kasuri Methi & Garam Masala Blend | Grill Marinade",
    origin: "North & South India"
  },
  {
    id: "spice-butter-chicken-masala",
    name: "Butter Chicken & Paneer Makhani Masala",
    category: "Spices & Seasonings",
    categorySlug: "spices-and-seasonings",
    hsnCode: "09109100",
    image: "/images/products/spices.jpg",
    specs: "Cardamom, Mace, Nutmeg & Cashew Powder Blend | Mild Sweet Spice",
    origin: "Certified Spice Mill"
  },
  {
    id: "spice-mysore-mutton-masala",
    name: "Mysore Mutton & Meat Masala Blend",
    category: "Spices & Seasonings",
    categorySlug: "spices-and-seasonings",
    hsnCode: "09109100",
    image: "/images/products/spices.jpg",
    specs: "Coriander, Cumin, Pepper, Cloves & Star Anise | Rich Dark Roast",
    origin: "Karnataka & Tamil Nadu, India"
  },
  {
    id: "spice-sambar-powder",
    name: "Traditional Madras Sambar Powder",
    category: "Spices & Seasonings",
    categorySlug: "spices-and-seasonings",
    hsnCode: "09109100",
    image: "/images/products/spices.jpg",
    specs: "Coriander, Red Chilli, Bengal Gram, Toor Dal & Fenugreek | Aromatic",
    origin: "Tamil Nadu, India"
  },
  {
    id: "spice-rasam-powder",
    name: "South Indian Pepper Rasam Powder",
    category: "Spices & Seasonings",
    categorySlug: "spices-and-seasonings",
    hsnCode: "09109100",
    image: "/images/products/spices.jpg",
    specs: "Black Pepper, Cumin, Toor Dal & Red Chilli | Clear Broth Blend",
    origin: "Tamil Nadu, India"
  },
  {
    id: "spice-garam-masala",
    name: "Royal Shahi Garam Masala Blend",
    category: "Spices & Seasonings",
    categorySlug: "spices-and-seasonings",
    hsnCode: "09109100",
    image: "/images/products/spices.jpg",
    specs: "Cardamom, Cinnamon, Cloves, Mace, Star Anise & Bay Leaf | Zero Fillers",
    origin: "Kerala & Rajasthan, India"
  },
  {
    id: "spice-hyderabadi-biryani-masala",
    name: "Hyderabadi Dum Biryani Masala",
    category: "Spices & Seasonings",
    categorySlug: "spices-and-seasonings",
    hsnCode: "09109100",
    image: "/images/products/spices.jpg",
    specs: "Mace, Nutmeg, Shahi Jeera, Cloves & Rose Petals | Authentic Dum Aroma",
    origin: "Telangana & Andhra Pradesh, India"
  },
  {
    id: "spice-peri-peri-seasoning",
    name: "Peri Peri & International Seasoning Blends",
    category: "Spices & Seasonings",
    categorySlug: "spices-and-seasonings",
    hsnCode: "21039040",
    image: "/images/products/spices.jpg",
    specs: "African Bird's Eye Chilli, Garlic, Oregano & Herbs | Sprinkle Seasoning",
    origin: "Certified Seasonings Facility"
  },
  {
    id: "val-desiccated-coconut",
    name: "Desiccated Coconut (Fine & Medium Grade)",
    category: "Value-Added Produce",
    categorySlug: "value-added-produce",
    hsnCode: "08011100",
    image: "/images/products/coconut.jpg",
    specs: "Fat Content 65%+ | Moisture < 3% | Pure White Bakery Grade",
    origin: "Pollachi & Kangayam, Tamil Nadu"
  },
  {
    id: "val-canned-coconut-milk",
    name: "Canned Coconut Milk & Thick Cream",
    category: "Value-Added Produce",
    categorySlug: "value-added-produce",
    hsnCode: "20081900",
    image: "/images/products/coconut.jpg",
    specs: "17%-24% Fat Content | Smooth Homogenized | 400ml Cans & Tubs",
    origin: "Tamil Nadu & Kerala, India"
  },
  {
    id: "val-coconut-milk-powder",
    name: "Spray-Dried Coconut Milk Powder",
    category: "Value-Added Produce",
    categorySlug: "value-added-produce",
    hsnCode: "21069099",
    image: "/images/products/coconut.jpg",
    specs: "Instant Dissolving | High Shelf Life | Easy Rehydration",
    origin: "Pollachi, Tamil Nadu, India"
  },
  {
    id: "val-coconut-sugar",
    name: "Organic Low-Glycemic Coconut Sugar",
    category: "Value-Added Produce",
    categorySlug: "value-added-produce",
    hsnCode: "17029090",
    image: "/images/products/coconut.jpg",
    specs: "Unrefined Natural Sap Evaporated Granules | Low GI (35) | Rich in Minerals",
    origin: "Tamil Nadu, India"
  },
  {
    id: "val-groundnut-oil",
    name: "Wood-Pressed Pure Groundnut (Peanut) Oil",
    category: "Value-Added Produce",
    categorySlug: "value-added-produce",
    hsnCode: "15089091",
    image: "/images/products/virgin_coconut_oil.jpg",
    specs: "Cold-Extracted Wooden Expeller (Chekku) | Natural Peanut Aroma",
    origin: "Gujarat & Tamil Nadu, India"
  },
  {
    id: "val-mustard-oil",
    name: "Cold-Pressed Kachi Ghani Mustard Oil",
    category: "Value-Added Produce",
    categorySlug: "value-added-produce",
    hsnCode: "15149110",
    image: "/images/products/virgin_coconut_oil.jpg",
    specs: "High Pungency | Rich in Omega-3 | Unrefined Pure Cold-Pressed",
    origin: "Rajasthan & UP, India"
  },
  {
    id: "val-multifloral-honey",
    name: "Organic Multifloral & Comb Honey",
    category: "Value-Added Produce",
    categorySlug: "value-added-produce",
    hsnCode: "04090000",
    image: "/images/products/consumer.jpg",
    specs: "Unpasteurized Natural Bee Nectar | Pure Honey with Comb Slices",
    origin: "Himachal & Nilgiris, India"
  },
  {
    id: "val-dehydrated-fruits",
    name: "Dehydrated Tropical Fruits (Mango & Pineapple)",
    category: "Value-Added Produce",
    categorySlug: "value-added-produce",
    hsnCode: "08134090",
    image: "/images/products/consumer.jpg",
    specs: "Low-Temperature Hot Air Dried | No Added Sulfur / Color | Chewy",
    origin: "Certified Processing Facility"
  },
  {
    id: "val-health-drinks-mix",
    name: "Red Banana & Beetroot Health Drink Mixes",
    category: "Value-Added Produce",
    categorySlug: "value-added-produce",
    hsnCode: "21069099",
    image: "/images/products/millets.jpg",
    specs: "Dehydrated Kamalapur Red Banana & Organic Beetroot Powder | Nutrient Rich",
    origin: "Tamil Nadu, India"
  },
  {
    id: "snack-omapodi-sev",
    name: "Traditional Omapodi & Fine Bhujia Sev",
    category: "Traditional & Healthy Snacks",
    categorySlug: "traditional-snacks",
    hsnCode: "19059090",
    image: "/images/products/consumer.jpg",
    specs: "Gram Flour Seasoned with Ajwain (Omam) | Delicate Melt-in-Mouth",
    origin: "Tamil Nadu, India"
  },
  {
    id: "snack-uppu-seedai",
    name: "Traditional Uppu Seedai & Vella Seedai",
    category: "Traditional & Healthy Snacks",
    categorySlug: "traditional-snacks",
    hsnCode: "19059090",
    image: "/images/products/consumer.jpg",
    specs: "Crispy Roasted Rice Flour Marbles with Urad & Sesame | Sweet & Salted",
    origin: "Chettinad, Tamil Nadu, India"
  },
  {
    id: "snack-kara-boondi",
    name: "Spiced Kara Boondi & Masala Crunch",
    category: "Traditional & Healthy Snacks",
    categorySlug: "traditional-snacks",
    hsnCode: "21069099",
    image: "/images/products/consumer.jpg",
    specs: "Crisp Golden Gram Droplets with Curry Leaves & Garlic Pods",
    origin: "Tamil Nadu, India"
  },
  {
    id: "snack-ghee-mysore-pak",
    name: "Authentic Traditional Ghee Mysore Pak",
    category: "Traditional & Healthy Snacks",
    categorySlug: "traditional-snacks",
    hsnCode: "17049020",
    image: "/images/products/consumer.jpg",
    specs: "Pure Cow Ghee, Besan & Sugar | Soft Porous Traditional Texture",
    origin: "Mysore & Tamil Nadu, India"
  },
  {
    id: "snack-traditional-laddu",
    name: "Traditional Boondi & Besan Laddu",
    category: "Traditional & Healthy Snacks",
    categorySlug: "traditional-snacks",
    hsnCode: "17049020",
    image: "/images/products/consumer.jpg",
    specs: "Golden Boondi Infused with Cardamom, Raisins & Pure Desi Ghee",
    origin: "Tamil Nadu, India"
  },
  {
    id: "snack-coconut-burfi",
    name: "Authentic Thengai Burfi (Coconut Fudge)",
    category: "Traditional & Healthy Snacks",
    categorySlug: "traditional-snacks",
    hsnCode: "17049020",
    image: "/images/products/consumer.jpg",
    specs: "Fresh Grated Coconut with Jaggery / Cane Sugar & Cardamom",
    origin: "Tamil Nadu, India"
  },
  {
    id: "snack-millet-ragi-laddu",
    name: "Millet Kambu & Ragi Health Laddus",
    category: "Traditional & Healthy Snacks",
    categorySlug: "traditional-snacks",
    hsnCode: "19041090",
    image: "/images/products/consumer.jpg",
    specs: "Sprouted Pearl Millet & Ragi with Palm Jaggery & Dry Fruits",
    origin: "Tamil Nadu, India"
  },
  {
    id: "snack-roasted-chana-peanuts",
    name: "Roasted Salted Chana & Spiced Peanuts",
    category: "Traditional & Healthy Snacks",
    categorySlug: "traditional-snacks",
    hsnCode: "20081100",
    image: "/images/products/consumer.jpg",
    specs: "Wood-Ash Roasted Pottukadalai & Peanuts | High Protein / Low Oil",
    origin: "Gujarat & Tamil Nadu, India"
  },
  {
    id: "snack-baked-banana-chips",
    name: "Baked Plantain Chips (Low-Oil Healthy)",
    category: "Traditional & Healthy Snacks",
    categorySlug: "traditional-snacks",
    hsnCode: "20089999",
    image: "/images/products/snack_banana_chips.jpg",
    specs: "Hot Air Baked Raw Banana Slices | 70% Less Oil | Pink Salt",
    origin: "Kerala, India"
  },
  {
    id: "rice-kichili-samba",
    name: "Kichili Samba Traditional Aromatic Rice",
    category: "Rice & Rice Products",
    categorySlug: "rice-and-rice-products",
    hsnCode: "10063090",
    image: "/images/products/rice.jpg",
    specs: "Short Grain Fragrant Rice | Easy Digestion | Historic Royal Grain",
    origin: "Tamil Nadu, India"
  },
  {
    id: "rice-kerala-red-matta",
    name: "Kerala Palakkadan Red Matta Rice",
    category: "Rice & Rice Products",
    categorySlug: "rice-and-rice-products",
    hsnCode: "10063010",
    image: "/images/products/rice.jpg",
    specs: "Coarse Red Grain | High Fiber Unpolished Parboiled | Nutrient Rich",
    origin: "Palakkad, Kerala, India"
  },
  {
    id: "millet-samai-little",
    name: "Little Millet Grains (Samai Whole)",
    category: "Millets & Superfoods",
    categorySlug: "millets-and-superfoods",
    hsnCode: "10082900",
    image: "/images/products/millet_foxtail.jpg",
    specs: "Small Golden Grains | Low Glycemic Index | Rice Substitute",
    origin: "Tamil Nadu & Andhra Pradesh, India"
  },
  {
    id: "millet-kodo-varagu",
    name: "Kodo Millet Grains (Varagu Whole)",
    category: "Millets & Superfoods",
    categorySlug: "millets-and-superfoods",
    hsnCode: "10082900",
    image: "/images/products/millet_foxtail.jpg",
    specs: "High Dietary Fiber (14%) | Gluten-Free | Sortex Cleaned",
    origin: "Madhya Pradesh & Tamil Nadu, India"
  },
  {
    id: "millet-barnyard-kuthiraivali",
    name: "Barnyard Millet (Kuthiraivali Whole)",
    category: "Millets & Superfoods",
    categorySlug: "millets-and-superfoods",
    hsnCode: "10082900",
    image: "/images/products/millet_foxtail.jpg",
    specs: "Fastest Digesting Ancient Grain | Rich in Iron | Fasting Food",
    origin: "Uttarakhand & Tamil Nadu, India"
  },
  {
    id: "pulse-horse-gram-kollu",
    name: "Traditional Horse Gram (Kollu Whole)",
    category: "Pulses & Dals",
    categorySlug: "pulses-and-dals",
    hsnCode: "07139090",
    image: "/images/products/pulse_chana_dal.jpg",
    specs: "Highest Protein Ancient Pulse | Lowers Bad Cholesterol | Machine Cleaned",
    origin: "Tamil Nadu & Karnataka, India"
  },
  {
    id: "machine-halwa-making",
    name: "Industrial Sweet Halwa Making Machine",
    category: "Processing & Packaging Machinery",
    categorySlug: "processing-machinery",
    hsnCode: "84388090",
    image: "/images/products/machinery.jpg",
    specs: "Automatic Planetary Stirring | Gas / Steam Heating | 50L - 500L Capacity",
    origin: "Coimbatore & Gujarat, India"
  },
  {
    id: "machine-gulab-jamun-laddu",
    name: "Automatic Gulab Jamun & Laddu Machine",
    category: "Processing & Packaging Machinery",
    categorySlug: "processing-machinery",
    hsnCode: "84381010",
    image: "/images/products/machinery.jpg",
    specs: "Uniform Ball Forming + Automatic Frying System | 2000 pcs/hr",
    origin: "Coimbatore, Tamil Nadu, India"
  },
  {
    id: "machine-steam-cooking-kettle",
    name: "Steam Jacketed Tilting Cooking Kettle",
    category: "Processing & Packaging Machinery",
    categorySlug: "processing-machinery",
    hsnCode: "84198990",
    image: "/images/products/machinery.jpg",
    specs: "Food Grade SS304 / SS316 | Even Heating Prevents Burning | 100L - 1000L",
    origin: "Engineering Division, India"
  },
  {
    id: "machine-deep-frying-continuous",
    name: "Commercial Continuous Deep Frying Machine",
    category: "Processing & Packaging Machinery",
    categorySlug: "processing-machinery",
    hsnCode: "84388090",
    image: "/images/products/machinery.jpg",
    specs: "Digital Temperature Controller | Oil Circulation Filter | Snacks & Sweets",
    origin: "Engineering Division, India"
  },
  {
    id: "machine-ffs-form-fill-seal",
    name: "High-Speed Form Fill Seal (FFS) Machine",
    category: "Processing & Packaging Machinery",
    categorySlug: "processing-machinery",
    hsnCode: "84223000",
    image: "/images/products/machinery.jpg",
    specs: "Multi-Head Weigher | Nitrogen Flush | Spices, Snacks & Grains",
    origin: "Industrial Packaging Hub, India"
  },
  {
    id: "machine-bottle-filling-capping",
    name: "Automatic Liquid Bottle Filling & Capping System",
    category: "Processing & Packaging Machinery",
    categorySlug: "processing-machinery",
    hsnCode: "84223000",
    image: "/images/products/machinery.jpg",
    specs: "Rotary Capping | Volumetric Piston Filling | Oils, Juices & Syrups",
    origin: "Packaging Machinery Division"
  }
];
