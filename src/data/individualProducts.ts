/**
 * ZIYA ZARA TRADING COMPANY
 * Active Export Commodity Catalogue (Verified Luxury Product Photography)
 * 
 * Only commodities featuring signature luxury commercial photography
 * (white Carrara marble, brushed gold/brass accents, high-end export aesthetic)
 * are rendered to maintain complete visual consistency for international buyers.
 * 
 * Unrendered commodities are memorised in src/data/backlogProducts.ts.
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
    id: "rtc-biryani-paste-arcot",
    name: "Arcot & Chettinad Biryani Pastes",
    category: "Ready-to-Cook Mixes",
    categorySlug: "ready-to-cook-mixes",
    hsnCode: "21039090",
    image: "/images/products/rtc_biryani_paste.jpg",
    specs: "Concentrated Biryani Gravy Paste | No Added MSG / Artificial Colors",
    origin: "Tamil Nadu, India"
  },

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
    id: "val-wild-forest-honey",
    name: "Pure Wild Forest Honey & Comb",
    category: "Value-Added Produce",
    categorySlug: "value-added-produce",
    hsnCode: "04090000",
    image: "/images/products/wild_forest_honey.jpg",
    specs: "Unpasteurized Raw Forest Nectar | Antibiotic Free | Export Grade",
    origin: "Western Ghats, India"
  },

  {
    id: "val-mango-pulp",
    name: "Alphonso & Kesar Mango Pulp",
    category: "Value-Added Produce",
    categorySlug: "value-added-produce",
    hsnCode: "20079910",
    image: "/images/products/mango_pulp_export.jpg",
    specs: "16°-24° Brix Pure Fruit Puree | Aseptic Cans & Drums",
    origin: "Ratnagiri & Gujarat, India"
  },

  {
    id: "val-cashew-kernels",
    name: "Export Graded Cashew Kernels (W240 & W320)",
    category: "Value-Added Produce",
    categorySlug: "value-added-produce",
    hsnCode: "08013210",
    image: "/images/products/cashew_kernels.jpg",
    specs: "Whole White Kernels | Nitrogen Vacuum Packed | Zero Blemish",
    origin: "Panruti & Goa, India"
  },

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
    image: "/images/products/snack_madras_mixture.jpg",
    specs: "Omapodi, Roasted Peanuts, Curry Leaves & Boondi | Crunchy",
    origin: "Tamil Nadu, India"
  },

  {
    id: "snack-kai-murukku",
    name: "Traditional Kai Murukku & Butter Murukku",
    category: "Traditional & Healthy Snacks",
    categorySlug: "traditional-snacks",
    hsnCode: "19059090",
    image: "/images/products/snack_kai_murukku.jpg",
    specs: "Hand-Twisted Rice & Butter Snack | Festival Quality",
    origin: "Tamil Nadu, India"
  },

  {
    id: "snack-roasted-makhana",
    name: "Roasted Fox Nuts (Makhana) - Spiced & Salted",
    category: "Traditional & Healthy Snacks",
    categorySlug: "traditional-snacks",
    hsnCode: "19041090",
    image: "/images/products/snack_roasted_makhana.jpg",
    specs: "High Protein | Gluten-Free | Low Oil Roasted Snack",
    origin: "Bihar & Madhya Pradesh, India"
  },

  {
    id: "snack-peanut-chikki",
    name: "Traditional Jaggery Peanut Chikki / Brittle",
    category: "Traditional & Healthy Snacks",
    categorySlug: "traditional-snacks",
    hsnCode: "17049020",
    image: "/images/products/snack_peanut_chikki.jpg",
    specs: "Crushed Groundnuts & Organic Jaggery | Pure Sweet Crunch",
    origin: "Kovilpatti, Tamil Nadu, India"
  },

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
    id: "val-multifloral-honey",
    name: "Organic Multifloral & Comb Honey",
    category: "Value-Added Produce",
    categorySlug: "value-added-produce",
    hsnCode: "04090000",
    image: "/images/products/wild_forest_honey.jpg",
    specs: "Unpasteurized Natural Bee Nectar | Pure Honey with Comb Slices",
    origin: "Himachal & Nilgiris, India"
  },

  {
    id: "snack-omapodi-sev",
    name: "Traditional Omapodi & Fine Bhujia Sev",
    category: "Traditional & Healthy Snacks",
    categorySlug: "traditional-snacks",
    hsnCode: "19059090",
    image: "/images/products/snack_madras_mixture.jpg",
    specs: "Gram Flour Seasoned with Ajwain (Omam) | Delicate Melt-in-Mouth",
    origin: "Tamil Nadu, India"
  },

  {
    id: "snack-uppu-seedai",
    name: "Traditional Uppu Seedai & Vella Seedai",
    category: "Traditional & Healthy Snacks",
    categorySlug: "traditional-snacks",
    hsnCode: "19059090",
    image: "/images/products/snack_kai_murukku.jpg",
    specs: "Crispy Roasted Rice Flour Marbles with Urad & Sesame | Sweet & Salted",
    origin: "Chettinad, Tamil Nadu, India"
  },

  {
    id: "snack-kara-boondi",
    name: "Spiced Kara Boondi & Masala Crunch",
    category: "Traditional & Healthy Snacks",
    categorySlug: "traditional-snacks",
    hsnCode: "21069099",
    image: "/images/products/snack_madras_mixture.jpg",
    specs: "Crisp Golden Gram Droplets with Curry Leaves & Garlic Pods",
    origin: "Tamil Nadu, India"
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
    id: "frozen-paneer-cubes",
    name: "IQF Frozen Malai Paneer Cubes",
    category: "Frozen Foods",
    categorySlug: "frozen-foods",
    hsnCode: "04061000",
    image: "/images/products/frozen_paneer.jpg",
    specs: "Individually Quick Frozen (-18°C) | 100% Pure Cow Milk | Soft & Spongy",
    origin: "Punjab & Haryana, India"
  },

  {
    id: "frozen-spring-rolls",
    name: "Frozen Crispy Vegetable Spring Rolls",
    category: "Frozen Foods",
    categorySlug: "frozen-foods",
    hsnCode: "19049000",
    image: "/images/products/frozen_spring_rolls.jpg",
    specs: "Ready to Fry / Air-Fry | Crispy Pastry Crust | Indo-Chinese Veg Filling",
    origin: "Certified Export Kitchen, India"
  },

  {
    id: "frozen-aloo-tikki",
    name: "Frozen Spiced Aloo Tikki Patties",
    category: "Frozen Foods",
    categorySlug: "frozen-foods",
    hsnCode: "20041000",
    image: "/images/products/frozen_aloo_tikki.jpg",
    specs: "Crispy Golden Coating | Traditional Indian Spices | 0 Trans Fat",
    origin: "Delhi NCR & Gujarat, India"
  },

  {
    id: "frozen-bhatura",
    name: "Frozen Fluffy Amritsari Bhatura",
    category: "Frozen Foods",
    categorySlug: "frozen-foods",
    hsnCode: "19059090",
    image: "/images/products/frozen_bhatura.jpg",
    specs: "Pre-formed Leavened Dough | Ready to Puff | Authentic Recipe",
    origin: "Punjab Basin, India"
  },

  {
    id: "iqf-alphonso-mango-chunks",
    name: "IQF Alphonso Mango Dices & Chunks",
    category: "Frozen Fruits",
    categorySlug: "frozen-fruits",
    hsnCode: "08119010",
    image: "/images/products/iqf_mango_chunks.jpg",
    specs: "10x10mm / 15x15mm Dices | 100% Ratnagiri Alphonso | Sweet & Aromatic | -18°C",
    origin: "Konkan Belt, Maharashtra, India"
  },

  {
    id: "iqf-strawberry-whole",
    name: "IQF Whole Strawberries & Halves",
    category: "Frozen Fruits",
    categorySlug: "frozen-fruits",
    hsnCode: "08111000",
    image: "/images/products/iqf_strawberries.jpg",
    specs: "Blast Frozen Sweet Crimson Berries | Calibrated 25-35mm | Grade A",
    origin: "Mahabaleshwar, Maharashtra, India"
  },

  {
    id: "iqf-pomegranate-arils",
    name: "IQF Pomegranate Arils (Ruby Kernels)",
    category: "Frozen Fruits",
    categorySlug: "frozen-fruits",
    hsnCode: "08119090",
    image: "/images/products/iqf_pomegranate_arils.jpg",
    specs: "Bhagwa Variety | Juicy Deep Red Seeds | Blemishes < 1% | Ready to Blend",
    origin: "Solapur, Maharashtra, India"
  },

  {
    id: "iqf-papaya-dices",
    name: "IQF Red Papaya Chunks & Dices",
    category: "Frozen Fruits",
    categorySlug: "frozen-fruits",
    hsnCode: "08119090",
    image: "/images/products/iqf_papaya_chunks.jpg",
    specs: "Red Lady Taiwan Variety | Sweet Flesh | 15x15mm Cuts | No Added Sugar",
    origin: "Andhra Pradesh, India"
  },

  {
    id: "bio-areca-palm-plates-10inch",
    name: "Areca Palm Leaf 10\" Round Dinner Plates",
    category: "Bio Disposables",
    categorySlug: "bio-disposables",
    hsnCode: "14049090",
    image: "/images/products/bio_areca_round_plates.jpg",
    specs: "100% Naturally Fallen Areca Sheath | Microwave & Oven Safe | Leakproof",
    origin: "Shimoga, Karnataka & Tamil Nadu, India"
  },

  {
    id: "bio-areca-palm-compartment-trays",
    name: "Areca Palm Leaf 4 & 5-Compartment Meal Trays",
    category: "Bio Disposables",
    categorySlug: "bio-disposables",
    hsnCode: "14049090",
    image: "/images/products/bio_areca_compartment_trays.jpg",
    specs: "Heavy-Duty Catering Strength | Oil & Heat Resistant | Backyard Compostable",
    origin: "Western Ghats Belt, India"
  },

  {
    id: "bio-areca-palm-bowls",
    name: "Areca Palm Leaf Soup & Dessert Bowls (4\" & 6\")",
    category: "Bio Disposables",
    categorySlug: "bio-disposables",
    hsnCode: "14049090",
    image: "/images/products/bio_areca_bowls.jpg",
    specs: "Chemical-Free Heat Pressed | Zero Plastic Coating | Liquid Safe",
    origin: "Karnataka & Kerala, India"
  },

  {
    id: "bio-bagasse-clamshell-boxes",
    name: "Sugarcane Bagasse Clamshell Burger & Meal Boxes",
    category: "Bio Disposables",
    categorySlug: "bio-disposables",
    hsnCode: "48237090",
    image: "/images/products/bio_bagasse_clamshell.jpg",
    specs: "Upcycled Sugarcane Fiber | 6\"x6\" & 9\"x9\" | Hinged Lid | 100% Biodegradable",
    origin: "Maharashtra & Tamil Nadu, India"
  }
];
