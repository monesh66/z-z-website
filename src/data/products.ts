/**
 * ZIYA ZARA TRADING COMPANY
 * Product Categories & Sourcing Scope Data
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
  sourcingLocations: string;
  complianceStandards: string[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "agricultural-commodities",
    slug: "agricultural-products",
    title: "Agricultural Products & Commodities",
    shortDescription: "Grains, pulses, whole spices, oilseeds, and natural farm produce sourced from prime agricultural regions.",
    longDescription:
      "We source and export staple agricultural commodities directly from certified producer cooperatives and agricultural aggregation centers. Every shipment undergoes moisture, purity, and grading verifications to satisfy demanding import regulations.",
    image: "/images/products/agricultural.jpg",
    items: [
      "Milling Wheat & Feed Grains",
      "Organic Chickpeas, Lentils & Pulses",
      "Cardamom, Black Pepper & Cumin",
      "Sunflower Seeds & Soybeans",
      "Whole Red Chillies & Turmeric Fingers"
    ],
    keySpecs: ["Export-grade sorting (99% purity)", "Moisture content < 12%", "Fumigation & Phytosanitary certified", "Multi-ply woven poly/jute packaging"],
    sourcingLocations: "Direct farm aggregators & certified agricultural belts",
    complianceStandards: ["Phytosanitary Certification", "SGS / Intertek Pre-shipment Assays", "ISO 22000 / HACCP Compliant facilities"]
  },
  {
    id: "food-and-grains",
    slug: "food-and-grains",
    title: "Food & Grains",
    shortDescription: "Basmati and non-basmati rice, refined grains, edible oils, and packaged culinary staples for commercial buyers.",
    longDescription:
      "Providing institutional buyers, food distributors, and wholesale packers with consistently graded rice, flour, pulses, and culinary oils. We ensure adherence to food safety norms, consistent grain length, and tailored bulk or private-label packaging.",
    image: "/images/products/food_grains.jpg",
    items: [
      "Traditional & 1121 Basmati Rice",
      "Long Grain White & Parboiled Rice",
      "Cold-Pressed & Refined Vegetable Oils",
      "Wheat Flour (Atta & Maida)",
      "Processed Edible Pulses & Legumes"
    ],
    keySpecs: ["Purity: 95% - 99%", "Average Grain Length: 7.2mm - 8.4mm", "Broken Grain: < 1% - 5% (Customizable)", "Nitrogen-flushed or standard PP sacks"],
    sourcingLocations: "Premier river basin milling hubs & refined oil processors",
    complianceStandards: ["FSSAI / FDA Compliant Export Clearances", "Aflatoxin & Pesticide Residue Tested", "Certificate of Analysis (CoA)"]
  },
  {
    id: "textiles-and-garments",
    slug: "textiles-and-garments",
    title: "Textiles & Garments",
    shortDescription: "Premium fabrics, spun yarns, industrial workwear, apparel, and raw textile materials for global manufacturers.",
    longDescription:
      "Connecting textile mills, apparel brands, and industrial manufacturers with verified yarn spinners, weaving factories, and garment facilities. From pure organic cotton to technical fabrics, we coordinate strict GSM, colorfastness, and tensile standards.",
    image: "/images/products/textiles.jpg",
    items: [
      "Combed & Carded Cotton Yarns",
      "Raw Greige & Finished Woven Fabrics",
      "Silk, Linen & Blended Suiting Textiles",
      "Institutional Linens & Hospitality Towels",
      "Industrial Protective Workwear"
    ],
    keySpecs: ["Yarn Counts: 20s to 80s Ne", "GSM tolerance: ± 3%", "AATCC / ISO Colorfastness rating: 4+", "OEKO-TEX Standard 100 available"],
    sourcingLocations: "Leading spinning clusters & certified industrial garment corridors",
    complianceStandards: ["OEKO-TEX Standard 100", "GOTS (Global Organic Textile Standard)", "Sedex / SMETA Social Audit Verified"]
  },
  {
    id: "industrial-supplies",
    slug: "industrial-supplies",
    title: "Industrial Supplies",
    shortDescription: "Metals, seamless pipes, industrial valves, machinery components, and construction hardware.",
    longDescription:
      "Procuring robust structural materials, fabricated metal components, seamless piping, and heavy-duty mechanical fittings for engineering projects, infrastructure, and manufacturing operations globally.",
    image: "/images/products/industrial.jpg",
    items: [
      "Carbon & Stainless Steel Seamless Pipes",
      "Industrial Ball, Gate & Check Valves",
      "Flanges, Elbows & Pipe Fittings",
      "Precision Machined Fasteners & Hardware",
      "Fabricated Structural Steel Sections"
    ],
    keySpecs: ["ASTM / ASME / DIN standard compliance", "Mill Test Certificates (EN 10204 3.1)", "Hydrostatic & ultrasonic tested", "Anti-corrosion protective coatings"],
    sourcingLocations: "Certified metallurgy plants & ISO-accredited engineering mills",
    complianceStandards: ["ISO 9001:2015", "API 5L / API 6D Standards", "Third-party inspection (TUV/Bureau Veritas)"]
  },
  {
    id: "consumer-goods",
    slug: "consumer-goods",
    title: "Consumer Goods",
    shortDescription: "Daily essentials, sustainable homeware, personal care merchandise, and retail FMCG commodities.",
    longDescription:
      "Fulfilling wholesale retail demand with high-quality consumer merchandise, eco-friendly household goods, and packaged fast-moving goods. We handle multi-item container consolidation and custom retail labeling.",
    image: "/images/products/consumer.jpg",
    items: [
      "Eco-Friendly Home & Kitchen Products",
      "Personal Care & Natural Cosmetics",
      "Handcrafted Home Accents & Glassware",
      "Packaged Fast-Moving Consumer Commodities",
      "Custom Branded Promotional Merchandise"
    ],
    keySpecs: ["Barcoded & Retail-ready Packaging", "Bilingual labeling as per destination laws", "Drop-test verified master cartons", "Consolidated LCL/FCL shipments"],
    sourcingLocations: "Audited consumer goods manufacturers & specialized craft cooperatives",
    complianceStandards: ["CE / RoHS Compliance where applicable", "Consumer Product Safety Standards", "Non-toxic & Eco-certified Materials"]
  },
  {
    id: "custom-sourcing",
    slug: "custom-sourcing",
    title: "Custom Sourcing & Procurement",
    shortDescription: "Tailored procurement solutions, tender fulfillment, and contract sourcing for specialized client requests.",
    longDescription:
      "When standard catalogs do not meet your precise commercial or industrial parameters, our global sourcing desk steps in. We analyze technical drawings, conduct bespoke supplier discovery, negotiate contract terms, and oversee end-to-end delivery.",
    image: "/images/products/custom_sourcing.jpg",
    items: [
      "Bespoke OEM / ODM Sourcing",
      "Consolidated Multi-Product Shipping Containers",
      "Government & Commercial Tender Procurement",
      "Specialized Raw Material Discovery",
      "Contract Manufacturing Representation"
    ],
    keySpecs: ["Strict Buyer Non-Disclosure Agreements (NDA)", "Prototype & Pilot Batch Verification", "Custom payment milestone schedules", "Dedicated Trade Account Officer"],
    sourcingLocations: "Global supplier network across Asia, Middle East, and worldwide hubs",
    complianceStandards: ["Tailored to destination country import tariffs & certifications", "Custom third-party laboratory verification"]
  }
];
