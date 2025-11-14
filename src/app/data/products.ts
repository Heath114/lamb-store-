// src/app/data/products.ts
interface BaseProduct {
    id: number;
    name: string;
    description?: string;
    image?: string;
    hoverImage?: string; // Image shown on hover
    images: string[]; // Gallery images for product detail page
    inStock?: boolean;
    stock?: number;
    category?: string;
    rating?: number;
    reviews?: number;
    features?: string[];
    slug?: string;
    brand?: string;
    warranty?: string;
    colors?: string[];
    specifications?: {
        [key: string]: string
    };
    tags?: string[];
    whatsInTheBox?: string[];
}

export type Product = BaseProduct & (
    | { isSale?: false; price: number }
    | { isSale: true; originalPrice: number; discount: number; price?: number }
);

// Helper function to get the actual price of a product
export function getProductPrice(product: Product): number {
    if (product.isSale) {
        // If price is provided, use it; otherwise calculate from originalPrice and discount
        return product.price ?? product.originalPrice * (1 - product.discount / 100);
    }
    return product.price;
}

export const ProductList: Product[] = [
  // 1) Cordless Table Lamp – variant A
  {
    id: 1,
    name: "Cordless Table Lamp",
    description:
      "Luxury cordless table lamp with 3 color modes, dimmable brightness and invisible touch control. Designed to add a warm, elegant glow to any space.",
    image: "/images/lamb/lamb/1.png",
    hoverImage: "/images/lamb/lambcover/1.png",
    brand: "Necessary Light",
    category: "table-lamps",
    colors: ["Gold", "Silver", "Black"],
    features: [
      "3 color modes (white, warm, natural)",
      "Brightness dimmable",
      "Invisible touch switch",
      "Cordless & rechargeable",
      "Battery life 6–7 hours",
      "High-quality build"
    ],
    specifications: {
      "Light Modes": "White, Warm, Natural",
      "Control": "Touch control (invisible switch)",
      "Power Supply": "Rechargeable battery",
      "Battery Life": "6–7 hours (approx.)",
      "Usage": "Living room, bedroom, cafés, desks"
    },
    whatsInTheBox: ["Cordless table lamp", "Charging cable", "User guide"],
    price: 25,
    images: [
      "/images/lamb/lamb/1.png",
      "/images/lamb/lambcover/1.png"
    ],
    slug: "cordless-table-lamp-a",
    tags: ["Cordless", "Table Lamp", "Touch Control", "Dimmable"]
  },

  // 2) Cordless Table Lamp – variant B (same lamp, second image)
  {
    id: 2,
    name: "Cordless Table Lamp",
    description:
      "Cordless table lamp with 3 color-changing light and dimmable brightness. A modern, high-quality piece for cozy corners and bedside tables.",
    image: "/images/lamb/lamb/2.png",
    hoverImage: "/images/lamb/lambcover/2.png",
    brand: "Necessary Light",
    category: "table-lamps",
    colors: ["Gold", "Silver", "Black"],
    features: [
      "3 color modes (white, warm, natural)",
      "Brightness dimmable",
      "Invisible touch switch",
      "Cordless & rechargeable",
      "Battery life 6–7 hours",
      "High-quality build"
    ],
    specifications: {
      "Light Modes": "White, Warm, Natural",
      "Control": "Touch control (invisible switch)",
      "Power Supply": "Rechargeable battery",
      "Battery Life": "6–7 hours (approx.)"
    },
    whatsInTheBox: ["Cordless table lamp", "Charging cable", "User guide"],
    price: 25,
    images: [
      "/images/lamb/lamb/2.png",
      "/images/lamb/lambcover/2.png"
    ],
    slug: "cordless-table-lamp-b",
    tags: ["Cordless", "Table Lamp", "Touch Control", "Dimmable"]
  },

  // 3) Limited Edition Pleated Lamp (first attached image)
  {
    id: 3,
    name: "Limited Edition Pleated Lamp",
    description:
      "A classic pleated-shade lamp with a golden base and soft, cozy light. Limited edition piece that brings a warm, timeless look to any corner.",
    image: "/images/lamb/lamb/3.png",
    hoverImage: "/images/lamb/lambcover/3.png",
    brand: "Necessary Light",
    category: "bedside-lamps",
    colors: ["Gold / Cream Shade"],
    features: [
      "Elegant pleated fabric shade",
      "Warm ambient light",
      "USB charging with status indicator (red = charging, green = full)",
      "Touch control",
      "Battery life 6–7 hours (approx.)",
      "Limited edition"
    ],
    specifications: {
      "Height": "30 cm",
      "Base Width": "10.5 cm",
      "Control": "Touch control",
      "Charging": "USB charging with indicator",
      "Usage": "Bedside, living room, reading corner"
    },
    whatsInTheBox: ["Pleated lamp", "USB charging cable"],
    price: 26,
    images: [
      "/images/lamb/lamb/3.png",
      "/images/lamb/lambcover/3.png"
    ],
    slug: "limited-edition-pleated-lamp",
    tags: ["Limited Edition", "Bedside", "Pleated Shade"]
  },

  // 4) Velora Lamp (second attached image – dome, warm interior shot)
  {
    id: 4,
    name: "Velora Lamp",
    description:
      "Where elegance meets warmth. A dome-shaped cordless lamp that turns any surface into a calm, luxurious focal point.",
    image: "/images/lamb/lamb/4.png",
    hoverImage: "/images/lamb/lambcover/4.png",
    brand: "Necessary Light",
    category: "table-lamps",
    colors: ["Gold"],
    features: [
      "Soft warm light",
      "Cordless & rechargeable",
      "Elegant dome design",
      "Minimalist, luxury aesthetic"
    ],
    specifications: {
      "Height": "Approx. 21 cm",
      "Shade Width": "Approx. 15.5 cm",
      "Base Width": "Approx. 10 cm",
      "Light": "Soft warm ambient light",
      "Usage": "Living room, sideboard, office desk"
    },
    whatsInTheBox: ["Velora lamp", "Charging cable"],
    // TODO: set real price once decided
    price: 0,
    images: [
      "/images/lamb/lamb/4.png",
      "/images/lamb/lambcover/4.png"
    ],
    slug: "velora-lamp",
    tags: ["Dome Lamp", "Luxury", "Warm Light"]
  },

  // 5) Dome Touch Lamp (third attached image – rounded base & top)
  {
    id: 5,
    name: "Dome Touch Lamp",
    description:
      "A unique dome lamp with soft, diffused light and a sculptural silhouette. Perfect for desks, shelves, and bedside tables.",
    image: "/images/lamb/lamb/5.png",
    hoverImage: "/images/lamb/lambcover/5.png",
    brand: "Necessary Light",
    category: "table-lamps",
    colors: ["White", "Grey", "Red"],
    features: [
      "LED light source",
      "3 color modes (white, warm, natural)",
      "Brightness dimmable",
      "Touch control",
      "Rechargeable via Type-C",
      "Battery life 6–7 hours (approx.)"
    ],
    specifications: {
      "Height": "29.5 cm",
      "Lampshade Diameter": "16 cm",
      "Material": "ABS / PS",
      "Light Modes": "White, Warm, Natural",
      "Charging": "Type-C cable",
      "Usage": "Bedroom, study, living room"
    },
    whatsInTheBox: ["Dome lamp", "Type-C charging cable"],
    // TODO: set real price once decided
    price: 0,
    images: [
      "/images/lamb/lamb/5.png",
      "/images/lamb/lambcover/5.png"
    ],
    slug: "dome-touch-lamp",
    tags: ["Dome Lamp", "Touch Control", "Rechargeable"]
  }
];






export interface Brand {
    id: number;
    name: string;
    image: string;
    website?: string;
}

export const BrandList: Brand[] = [
    {
        id: 1,
        name: "Apple",
        image: "/images/brands/apple.webp",
        website: "https://www.apple.com"
    },
    {
        id: 2,
        name: "Samsung",
        image: "/images/brands/samsung.webp",
        website: "https://www.samsung.com"
    },
    {
        id: 3,
        name: "Anker",
        image: "/images/brands/anker.webp",
        website: "https://www.anker.com"
    },
    {
        id: 4,
        name: "Huawei",
        image: "/images/brands/huawei.webp",
        website: "https://www.huawei.com"
    },
    {
        id: 5,
        name: "Infinix",
        image: "/images/brands/infinix.webp",
        website: "https://www.infinixmobility.com"
    },
    {
        id: 6,
        name: "tecno",
        image: "/images/brands/tecno.webp",
        website: "https://www.tecno-mobile.com"
    },
    {
        id: 7,
        name: "Xiaomi",
        image: "/images/brands/xiaomi.webp",
        website: "https://www.mi.com"
    }
];


