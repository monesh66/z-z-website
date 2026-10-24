/**
 * ZIYA ZARA TRADING COMPANY
 * Central Business & Site Configuration Module
 * 
 * Update contact details, branding, operational scope, and metadata here.
 * Items marked [LAUNCH PLACEHOLDER] should be updated with verified client data before deployment.
 */

export interface NavItem {
  name: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroSubheadline: string;
  description: string;
  url: string;
  email: string;
  phone: string;
  location: string;
  isPlaceholderContact: boolean;
  nav: NavItem[];
  badges: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  principles: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  logisticsModes: Array<{
    title: string;
    tagline: string;
    description: string;
    image: string;
    features: string[];
  }>;
  sourcingSteps: Array<{
    step: string;
    title: string;
    description: string;
    deliverables: string[];
  }>;
}

export const siteConfig: SiteConfig = {
  name: "ZIYA ZARA",
  legalName: "ZIYA ZARA TRADING COMPANY",
  tagline: "Connecting Markets, Delivering Possibilities.",
  heroEyebrow: "IMPORT | EXPORT | GLOBAL SOURCING",
  heroHeadline: "The World, Within Reach.",
  heroSubheadline:
    "ZIYA ZARA TRADING COMPANY bridges international markets by sourcing and supplying premium commodities, industrial supplies, and consumer goods with uncompromising integrity and disciplined global execution.",
  description:
    "ZIYA ZARA TRADING COMPANY connects global markets through verified supplier networks, strategic multi-modal logistics, and customer-first trade solutions.",
  url: "https://ziyazara.com",

  // Official contact channels
  email: "info@ziyazaratrading.com",
  phone: "+91 90030 98708",
  location: "Registered Trading Operations — India",
  isPlaceholderContact: false,

  nav: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Sourcing", href: "/sourcing" },
    { name: "Products", href: "/products" },
    { name: "Global Reach", href: "/global-reach" },
    { name: "Contact", href: "/contact" },
  ],

  badges: [
    {
      title: "Reliable Sourcing",
      description: "Rigorous supplier discovery and specification adherence.",
      icon: "ShieldCheck",
    },
    {
      title: "Global Network",
      description: "Direct linkages across key trade routes and markets.",
      icon: "Globe",
    },
    {
      title: "Long-term Partnerships",
      description: "Sustainable commercial value built on transparency.",
      icon: "Handshake",
    },
    {
      title: "Multimodal Logistics",
      description: "Synchronized sea, air, and overland delivery coordination.",
      icon: "Truck",
    },
  ],

  principles: [
    {
      title: "Quality Products Across Industries",
      description: "From certified agricultural commodities to precision industrial supplies, every trade order adheres to verified buyer benchmarks.",
      icon: "Award",
    },
    {
      title: "Transparent Trade Practices",
      description: "Complete clarity in commercial agreements, compliance documentation, origin certification, and pricing models.",
      icon: "FileCheck",
    },
    {
      title: "Global Supplier Network",
      description: "Established channels across producer hubs, manufacturing centers, and regional distribution corridors worldwide.",
      icon: "Network",
    },
    {
      title: "Commitment to Long-Term Growth",
      description: "Dedicated to building enduring, repeat trading relationships that scale smoothly alongside buyer demand.",
      icon: "TrendingUp",
    },
  ],

  sourcingSteps: [
    {
      step: "01",
      title: "Understand",
      description: "We clarify the buyer's exact technical specifications, volume schedules, packaging standards, and target port requirements.",
      deliverables: ["Product Specification Matrix", "Compliance & Tolerance Check", "Estimated Lead Times"],
    },
    {
      step: "02",
      title: "Source",
      description: "We identify and engage vetted producer hubs and manufacturers with proven production capability and verifiable trade history.",
      deliverables: ["Supplier Due Diligence", "Batch Sampling & Quotation", "Optimal Origin Selection"],
    },
    {
      step: "03",
      title: "Verify",
      description: "We oversee rigorous quality checks, laboratory assays, export documentation, and regulatory phytosanitary/customs filings.",
      deliverables: ["Pre-Shipment Inspections", "Certification of Origin & Assays", "Export Customs Clearance"],
    },
    {
      step: "04",
      title: "Deliver",
      description: "We synchronize maritime, air, or overland freight routing, customs coordination, and track cargo to destination ports.",
      deliverables: ["Bill of Lading / Airway Bill", "Multimodal Freight Booking", "End-to-End Port Dispatch"],
    },
  ],

  logisticsModes: [
    {
      title: "Sea Freight",
      tagline: "Cost-Effective, High Capacity",
      description: "FCL and LCL containerized shipping across major maritime routes, linking global manufacturing hubs and consumer markets.",
      image: "/images/logistics/sea.jpg",
      features: ["Full Container Load (FCL)", "Less than Container (LCL)", "Bulk Commodity Vessels", "Port-to-Port Handling"],
    },
    {
      title: "Air Freight",
      tagline: "Fast, Reliable, Global",
      description: "Time-critical cargo delivery and temperature-controlled air shipments connecting prime international airport terminals.",
      image: "/images/logistics/air.jpg",
      features: ["Scheduled Cargo Charters", "Priority Express Freight", "High-Value Goods Security", "Urgent Sample Dispatch"],
    },
    {
      title: "Road Transport",
      tagline: "Flexible, Door-to-Door",
      description: "Reliable overland transport networks for regional distribution, inland container depots, and final destination handovers.",
      image: "/images/logistics/road.jpg",
      features: ["Inland Container Depots (ICD)", "Heavy-Duty Haulage", "Cross-Border Trucking", "Last-Mile Distribution"],
    },
  ],
};
