/**
 * ZIYA ZARA TRADING COMPANY
 * Individual Traded Commodities & Products Catalogue
 * Approved luxury studio merchant photography (Antique Brass Uruli & Dark Wood Display)
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

  // ==========================================
  // 2. PULSES & DALS (Approved Studio Shots)
  // ==========================================
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

  // ==========================================
  // 3. SPICES & CONDIMENTS (Approved Studio Shots)
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

  // ==========================================
  // 4. AGRICULTURAL GRAINS (Approved Studio Shots)
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
  }
];
