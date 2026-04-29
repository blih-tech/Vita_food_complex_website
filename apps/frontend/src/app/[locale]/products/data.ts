export interface Product {
  id: string;
  name: string;
  image: string;
  bgColor: string;
  textColor: string;
  nameColor: string;
  category?: 'Biscuit' | 'Flour';
}

export const products: Product[] = [
  {
    id: "zoo",
    name: "Zoo",
    image: "/assets/products/figma/figma_prod_1.png",
    bgColor: "#FF8C00",
    textColor: "#FFFFFF",
    nameColor: "#FFFFFF",
    category: "Biscuit"
  },
  {
    id: "cream",
    name: "Cream",
    image: "/assets/products/figma/figma_prod_2.png",
    bgColor: "#87CEEB",
    textColor: "#000000",
    nameColor: "#000000",
    category: "Biscuit"
  },
  {
    id: "oreo",
    name: "Oreo",
    image: "/assets/products/figma/figma_prod_3.png",
    bgColor: "#1648B5",
    textColor: "#FFFFFF",
    nameColor: "#FFFFFF",
    category: "Biscuit"
  },
  {
    id: "high-energy",
    name: "High Energy",
    image: "/assets/products/figma/figma_prod_4.png",
    bgColor: "#FFD700",
    textColor: "#000000",
    nameColor: "#000000",
    category: "Biscuit"
  },
  {
    id: "tea",
    name: "Tea",
    image: "/assets/products/figma/figma_prod_5.png",
    bgColor: "#8B4513",
    textColor: "#FFFFFF",
    nameColor: "#FFFFFF",
    category: "Biscuit"
  },
  {
    id: "glucose",
    name: "Glucose",
    image: "/assets/products/figma/figma_prod_6.png",
    bgColor: "#98FB98",
    textColor: "#000000",
    nameColor: "#000000",
    category: "Biscuit"
  },
  {
    id: "chewata",
    name: "Chewata",
    image: "/assets/products/figma/figma_prod_7.png",
    bgColor: "#D6F7D7",
    textColor: "#000000",
    nameColor: "#000000",
    category: "Biscuit"
  },
  {
    id: "digestive",
    name: "Digestive",
    image: "/assets/products/figma/figma_prod_8.png",
    bgColor: "#DEB887",
    textColor: "#000000",
    nameColor: "#000000",
    category: "Biscuit"
  },
  {
    id: "marie-cream",
    name: "Marie Cream",
    image: "/assets/products/figma/figma_prod_9.png",
    bgColor: "#FFF8DC",
    textColor: "#000000",
    nameColor: "#000000",
    category: "Biscuit"
  },
  {
    id: "tafach",
    name: "Tafach",
    image: "/assets/products/figma/figma_prod_10.png",
    bgColor: "#F5DEB3",
    textColor: "#000000",
    nameColor: "#000000",
    category: "Biscuit"
  },
  {
    id: "bora",
    name: "Bora",
    image: "/assets/products/figma/figma_prod_11.png",
    bgColor: "#4A3728",
    textColor: "#FFFFFF",
    nameColor: "#FFFFFF",
    category: "Biscuit"
  },
  {
    id: "marie",
    name: "Marie",
    image: "/assets/products/figma/figma_prod_13.png",
    bgColor: "#FFFACD",
    textColor: "#000000",
    nameColor: "#000000",
    category: "Biscuit"
  },
  {
    id: "burger-flour",
    name: "Burger Flour",
    image: "/assets/products/figma/figma_prod_14.png",
    bgColor: "#FDF5E6",
    textColor: "#000000",
    nameColor: "#23B349",
    category: "Flour"
  },
  {
    id: "all-purpose",
    name: "All Purpose",
    image: "/assets/products/figma/figma_prod_14.png",
    bgColor: "#F5F5DC",
    textColor: "#000000",
    nameColor: "#23B349",
    category: "Flour"
  }
];
