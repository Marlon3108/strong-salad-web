// src/data/menu.js

export const menuItems = [
  // --- PLATOS ESTRELLA (Golden Triangle) ---
  {
    id: "star_1",
    name: "Cesar Grill Premium",
    price: 30000,
    category: "Ensaladas",
    type: "Star", // Alta rentabilidad + Popular
    description: "Lomo de res grillé, mix de lechugas orgánicas, parmesano y aderezo de la casa.",
    nutrition: { calories: 450, protein: "35g", carbs: "12g", fat: "20g" },
    tags: ["Keto", "High Protein"],
    image: "/images/cesar.jpg" 
  },
  {
    id: "star_2",
    name: "Club House",
    price: 30000,
    category: "Sandwiches",
    type: "Star",
    description: "El clásico elevado: Pollo a la plancha, tocineta crujiente, queso, vegetales orgánicos.",
    nutrition: { calories: 520, protein: "28g", carbs: "45g", fat: "22g" },
    tags: ["Best Seller"],
    image: "/images/club.jpg"
  },
  
  // --- BOWLS (Nutrición Funcional) ---
  {
    id: "puzzle_1",
    name: "Bowl Vegano Zen",
    price: 19000,
    category: "Bowls",
    type: "Puzzle", // Rentable pero necesita impulso
    description: "Quinoa real, garbanzos crocantes, tofu marinado en jengibre y aguacate.",
    nutrition: { calories: 320, protein: "18g", carbs: "35g", fat: "15g" },
    tags: ["Vegan", "Gluten Free"],
    image: "/images/vegan.jpg"
  },
  {
    id: "plow_1",
    name: "Bowl de Pollo Clásico",
    price: 17000,
    category: "Bowls",
    type: "Plowhorse", // Popular básico
    description: "Arroz integral, pechuga de pollo desmechada, maíz y maduritos.",
    nutrition: { calories: 380, protein: "30g", carbs: "40g", fat: "10g" },
    tags: ["Balanced"],
    image: "/images/pollo.jpg"
  },
  {
    id: "bowl_carne",
    name: "Bowl de Carne",
    price: 18000,
    category: "Bowls",
    type: "Standard",
    description: "Arroz integral, lechuga batavia, carne de res jugosa y pico de gallo.",
    nutrition: { calories: 410, protein: "32g", carbs: "38g", fat: "14g" },
    tags: ["High Protein"],
    image: "/images/carne.jpg"
  },

  // --- WRAPS (Convenience) ---
  {
    id: "wrap_pollo",
    name: "Wrap de Pollo",
    price: 17000,
    category: "Wraps",
    type: "Plowhorse",
    description: "Tortilla integral, pollo, lechuga, tomate, pepino y cebolla.",
    nutrition: { calories: 350, protein: "25g", carbs: "42g", fat: "11g" },
    tags: ["Lunch"],
    image: "/images/wrap.jpg"
  },

  {
    id: "bebida_1",
    name: "Jugo Detox Verde",
    price: 8000,
    category: "Bebidas",
    type: "Standard",
    description: "Espinaca, pepino, piña, limón, apio y manzana.",
    nutrition: { calories: 120, protein: "1g", carbs: "28g", fat: "0g" },
    tags: ["Detox", "Vegan"],
    image: null
  },
  {
    id: "bebida_2",
    name: "Piña Colada Natural",
    price: 8000,
    category: "Bebidas",
    type: "Standard",
    description: "Piña fresca y leche de coco.",
    nutrition: { calories: 180, protein: "2g", carbs: "35g", fat: "5g" },
    tags: ["Natural"],
    image: null
  }
];

// --- ADICIONES ---
export const ingredientsDB = {
  bases: [
    { name: "Arroz Integral (Bowl)", price: 2000, category: "Bowls" },
    { name: "Mix de Lechugas (Ensalada)", price: 2000, category: "Ensaladas" },
    { name: "Quinoa (Bowl)", price: 3000, category: "Bowls" },
    { name: "Pan Artesanal (Sandwich)", price: 2000, category: "Sandwiches" },
    { name: "Tortilla Integral (Wrap)", price: 2000, category: "Wraps" }
  ],
  proteins: [
    { name: "Pollo Desmechado", price: 5000 },
    { name: "Carne de Res", price: 6000 },
    { name: "Tofu Marinado", price: 5000 },
    { name: "Atún", price: 6000 },
    { name: "Jamón y Queso", price: 4000 }
  ],
  toppings: [
    { name: "Maíz Tierno", price: 1000 },
    { name: "Aguacate", price: 2500 },
    { name: "Maduritos", price: 1500 },
    { name: "Pico de Gallo", price: 1000 },
    { name: "Queso Costeño", price: 2000 },
    { name: "Champiñones", price: 2000 },
    { name: "Huevo", price: 1500 }
  ]
};
