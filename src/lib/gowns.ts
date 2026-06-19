export interface Gown {
  id: string;
  name: string;
  designer: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
  available: boolean;
}

export const gowns: Gown[] = [
  {
    id: "GOWN-001",
    name: "Elegant Evening Gown",
    designer: "Designer Name",
    price: 125,
    image: "https://i.pinimg.com/736x/4b/64/f2/4b64f25799c086d8333a0fc82fbecd62.jpg",
    description: "A stunning evening gown perfect for any special occasion.",
    sizes: ["2", "4", "6", "8"],
    available: true,
  },
  {
    id: "GOWN-002",
    name: "Classic Ballgown",
    designer: "Designer Name",
    price: 125,
    image: "https://i.pinimg.com/736x/4b/64/f2/4b64f25799c086d8333a0fc82fbecd62.jpg",
    description: "Timeless ballgown with elegant details.",
    sizes: ["4", "6", "8", "10"],
    available: true,
  },
  {
    id: "GOWN-003",
    name: "Modern Cocktail Dress",
    designer: "Designer Name",
    price: 125,
    image: "https://i.pinimg.com/736x/4b/64/f2/4b64f25799c086d8333a0fc82fbecd62.jpg",
    description: "Contemporary design for modern celebrations.",
    sizes: ["2", "4", "6"],
    available: true,
  },
  {
    id: "GOWN-004",
    name: "Romantic Lace Gown",
    designer: "Designer Name",
    price: 125,
    image: "https://i.pinimg.com/736x/4b/64/f2/4b64f25799c086d8333a0fc82fbecd62.jpg",
    description: "Delicate lace detailing for a romantic look.",
    sizes: ["4", "6", "8"],
    available: true,
  },
  {
    id: "GOWN-005",
    name: "Sequin Evening Dress",
    designer: "Designer Name",
    price: 125,
    image: "https://i.pinimg.com/736x/4b/64/f2/4b64f25799c086d8333a0fc82fbecd62.jpg",
    description: "Sparkle and shine in this sequined masterpiece.",
    sizes: ["2", "4", "6", "8", "10"],
    available: true,
  },
  {
    id: "GOWN-006",
    name: "Vintage-Inspired Gown",
    designer: "Designer Name",
    price: 125,
    image: "https://i.pinimg.com/736x/4b/64/f2/4b64f25799c086d8333a0fc82fbecd62.jpg",
    description: "Classic vintage styling with modern comfort.",
    sizes: ["4", "6", "8"],
    available: true,
  },
  {
    id: "GOWN-007",
    name: "Contemporary Maxi Dress",
    designer: "Designer Name",
    price: 125,
    image: "https://i.pinimg.com/736x/4b/64/f2/4b64f25799c086d8333a0fc82fbecd62.jpg",
    description: "Flowing maxi dress for elegant occasions.",
    sizes: ["2", "4", "6", "8"],
    available: true,
  },
  {
    id: "GOWN-008",
    name: "Elegant A-Line Gown",
    designer: "Designer Name",
    price: 125,
    image: "https://i.pinimg.com/736x/4b/64/f2/4b64f25799c086d8333a0fc82fbecd62.jpg",
    description: "Flattering A-line silhouette for all body types.",
    sizes: ["2", "4", "6", "8", "10"],
    available: true,
  },
];
