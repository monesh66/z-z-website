/**
 * ZIYA ZARA TRADING COMPANY
 * Product Categories Data matching reference design
 */

export interface ProductCategory {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  items: string[];
  keySpecs: string[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "agricultural-products",
    slug: "agricultural-products",
    title: "Agricultural Products",
    shortDescription: "Grains, pulses, spices and more.",
    longDescription: "We source and export staple agricultural commodities directly from certified producer cooperatives and agricultural aggregation centers.",
    image: "/images/products/agricultural.jpg",
    items: [
      "Milling Wheat & Feed Grains",
      "Organic Chickpeas, Lentils & Pulses",
      "Cardamom, Black Pepper & Cumin",
      "Sunflower Seeds & Soybeans"
    ],
    keySpecs: ["Export-grade sorting (99% purity)", "Moisture content < 12%", "Phytosanitary certified"]
  },
  {
    id: "food-and-grains",
    slug: "food-and-grains",
    title: "Food & Grains",
    shortDescription: "Rice, wheat, pulses, edible oils and food items.",
    longDescription: "Providing institutional buyers, food distributors, and wholesale packers with consistently graded rice, flour, pulses, and culinary oils.",
    image: "/images/products/food_grains.jpg",
    items: [
      "Traditional & 1121 Basmati Rice",
      "Long Grain White & Parboiled Rice",
      "Cold-Pressed & Refined Vegetable Oils",
      "Processed Edible Pulses & Legumes"
    ],
    keySpecs: ["Purity: 95% - 99%", "Average Grain Length: 7.2mm - 8.4mm", "Broken Grain: < 1% - 5%"]
  },
  {
    id: "textiles-and-garments",
    slug: "textiles-and-garments",
    title: "Textiles & Garments",
    shortDescription: "Fabrics, apparel and textile raw materials.",
    longDescription: "Connecting textile mills, apparel brands, and industrial manufacturers with verified yarn spinners, weaving factories, and garment facilities.",
    image: "/images/products/textiles.jpg",
    items: [
      "Combed & Carded Cotton Yarns",
      "Raw Greige & Finished Woven Fabrics",
      "Silk, Linen & Blended Suiting Textiles",
      "Industrial Protective Workwear"
    ],
    keySpecs: ["Yarn Counts: 20s to 80s Ne", "GSM tolerance: ± 3%", "AATCC / ISO Colorfastness rating: 4+"]
  },
  {
    id: "industrial-supplies",
    slug: "industrial-supplies",
    title: "Industrial Supplies",
    shortDescription: "Metals, pipes, machinery and industrial materials.",
    longDescription: "Procuring robust structural materials, fabricated metal components, seamless piping, and heavy-duty mechanical fittings.",
    image: "/images/products/industrial.jpg",
    items: [
      "Carbon & Stainless Steel Seamless Pipes",
      "Industrial Ball, Gate & Check Valves",
      "Flanges, Elbows & Pipe Fittings",
      "Fabricated Structural Steel Sections"
    ],
    keySpecs: ["ASTM / ASME / DIN standard compliance", "Mill Test Certificates (EN 10204 3.1)", "Hydrostatic & ultrasonic tested"]
  },
  {
    id: "consumer-goods",
    slug: "consumer-goods",
    title: "Consumer Goods",
    shortDescription: "Daily use and general merchandise.",
    longDescription: "Fulfilling wholesale retail demand with high-quality consumer merchandise, eco-friendly household goods, and packaged fast-moving goods.",
    image: "/images/products/consumer.jpg",
    items: [
      "Eco-Friendly Home & Kitchen Products",
      "Personal Care & Natural Cosmetics",
      "Handcrafted Home Accents & Glassware",
      "Packaged Fast-Moving Consumer Commodities"
    ],
    keySpecs: ["Barcoded & Retail-ready Packaging", "Bilingual labeling as per destination laws", "Consolidated LCL/FCL shipments"]
  },
  {
    id: "custom-sourcing",
    slug: "custom-sourcing",
    title: "Custom Sourcing",
    shortDescription: "Tailored sourcing as per your requirements.",
    longDescription: "When standard catalogs do not meet your precise commercial or industrial parameters, our global sourcing desk steps in.",
    image: "/images/products/custom_sourcing.jpg",
    items: [
      "Bespoke OEM / ODM Sourcing",
      "Consolidated Multi-Product Shipping Containers",
      "Government & Commercial Tender Procurement",
      "Specialized Raw Material Discovery"
    ],
    keySpecs: ["Strict Buyer Non-Disclosure Agreements (NDA)", "Prototype & Pilot Batch Verification", "Dedicated Trade Account Officer"]
  },
];
