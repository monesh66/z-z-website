/**
 * ZIYA ZARA TRADING COMPANY
 * Central Business & Site Configuration Module
 */

export interface NavItem {
  name: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface Founder {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
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
    icon: string;
  }>;
  principles: Array<{
    title: string;
    icon: string;
  }>;
  sourcingSteps: Array<{
    step: string;
    title: string;
    description: string;
    icon: string;
  }>;
  logisticsModes: Array<{
    title: string;
    tagline: string;
    description: string;
    image: string;
  }>;
  testimonials: Testimonial[];
  founders: Founder[];
}

export const siteConfig: SiteConfig = {
  name: "ZIYA ZARA",
  legalName: "ZIYA ZARA TRADING COMPANY",
  tagline: "Connecting Markets, Delivering Possibilities.",
  heroEyebrow: "IMPORT | EXPORT | GLOBAL SOURCING",
  heroHeadline: "Bridging Markets Worldwide",
  heroSubheadline:
    "ZIYA ZARA TRADING COMPANY connects global markets by sourcing and supplying quality products with reliability, integrity and long-term partnerships.",
  description:
    "ZIYA ZARA TRADING COMPANY connects global markets through verified supplier networks, strategic multi-modal logistics, and customer-first trade solutions.",
  url: "https://ziyazara.com",

  // Official contact channels (editable)
  email: "your@email.com",
  phone: "+91 90000 00000",
  location: "Your Address, City, State, India",
  isPlaceholderContact: true,

  nav: [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Sourcing", href: "/#sourcing-process" },
    { name: "Products", href: "/#products" },
    { name: "Global Reach", href: "/#global-reach" },
    { name: "Founders", href: "/#founders" },
    { name: "Contact", href: "/#contact" },
  ],

  badges: [
    { title: "Reliable Sourcing", icon: "ShieldCheck" },
    { title: "Global Network", icon: "Globe" },
    { title: "Long-term Partnerships", icon: "Handshake" },
    { title: "Sustainable Growth", icon: "Leaf" },
  ],

  principles: [
    { title: "Quality Products Across Industries", icon: "Award" },
    { title: "Transparent Trade Practices", icon: "FileCheck" },
    { title: "Global Supplier Network", icon: "Network" },
    { title: "Commitment to Long-term Growth", icon: "TrendingUp" },
  ],

  sourcingSteps: [
    {
      step: "01",
      title: "Understand",
      description: "Your requirements, specifications and target markets.",
      icon: "Search",
    },
    {
      step: "02",
      title: "Source",
      description: "We identify and engage trusted suppliers globally to source the right products.",
      icon: "Compass",
    },
    {
      step: "03",
      title: "Verify",
      description: "We ensure quality, compliance and documentation.",
      icon: "ShieldCheck",
    },
    {
      step: "04",
      title: "Deliver",
      description: "We manage logistics and coordinate delivery to your destination.",
      icon: "Truck",
    },
  ],

  logisticsModes: [
    {
      title: "AIR FREIGHT",
      tagline: "Fast. Reliable. Global.",
      description: "Time-critical air shipments connecting prime international airport terminals with security and speed.",
      image: "/images/logistics/air.jpg",
    },
    {
      title: "SEA FREIGHT",
      tagline: "Cost-effective, High Capacity.",
      description: "Cost-effective FCL and LCL containerized shipping across major maritime corridors and ports.",
      image: "/images/logistics/sea.jpg",
    },
    {
      title: "ROAD TRANSPORT",
      tagline: "Flexible. Door-to-Door.",
      description: "Reliable overland transport networks for regional distribution, inland container depots, and door delivery.",
      image: "/images/logistics/road.jpg",
    },
  ],

  testimonials: [
    {
      id: "ramesh-k",
      name: "Ramesh K.",
      role: "Import Manager",
      location: "India",
      quote: "Ziya Zara has been a reliable partner for our sourcing needs. Their professionalism and timely delivery have been impressive.",
      rating: 5,
      avatar: "/images/testimonials/avatar_ramesh_hd.jpg",
    },
    {
      id: "fatima-al-nasser",
      name: "Fatima Al Nasser",
      role: "Procurement Head",
      location: "UAE",
      quote: "Excellent quality products and smooth communication. We highly recommend Ziya Zara for international trade.",
      rating: 5,
      avatar: "/images/testimonials/avatar_fatima_hd.jpg",
    },
    {
      id: "michael-thompson",
      name: "Michael Thompson",
      role: "Supply Chain Director",
      location: "UK",
      quote: "A trusted partner with deep market knowledge and a customer-centric approach. Great experience working with their team.",
      rating: 5,
      avatar: "/images/testimonials/avatar_michael_hd.jpg",
    },
  ],

  founders: [
    {
      id: "founder-01",
      name: "Founder 01",
      role: "Co-Founder",
      bio: "Driving strategic growth and global partnerships.",
      image: "/images/founders/founder_1_hd.jpg",
      linkedin: "#",
    },
    {
      id: "founder-02",
      name: "Founder 02",
      role: "Co-Founder",
      bio: "Focused on operations and customer success.",
      image: "/images/founders/founder_2_hd.jpg",
      linkedin: "#",
    },
  ],
};
