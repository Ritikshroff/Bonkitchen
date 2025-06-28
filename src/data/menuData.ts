import type { MenuItem } from '../hooks/useCart';

export const menuData: MenuItem[] = [
  // Combo Meals
  {
    id: "combo1",
    name: "Chicken Combo Deluxe",
    description: "Butter chicken, dal makhani, rice, naan, raita",
    price: 199,
    originalPrice: 249,
    category: "combos",
    isVeg: false,
    isSpicy: true,
    isPopular: true,
    rating: 4.8,
    emoji: "🍛"
  },
  {
    id: "combo2", 
    name: "Veg Supreme Combo",
    description: "Paneer makhani, dal tadka, rice, roti, pickle",
    price: 149,
    originalPrice: 199,
    category: "combos",
    isVeg: true,
    isSpicy: false,
    rating: 4.6,
    emoji: "🥘"
  },
  {
    id: "combo3",
    name: "Fish Curry Combo",
    description: "Bengali fish curry, rice, dal, papad, sweet",
    price: 229,
    category: "combos",
    isVeg: false,
    isSpicy: true,
    rating: 4.7,
    emoji: "🐟"
  },
  {
    id: "combo4",
    name: "Mutton Curry Combo",
    description: "Slow-cooked mutton curry with rice and bread",
    price: 259,
    originalPrice: 299,
    category: "combos",
    isVeg: false,
    isSpicy: true,
    rating: 4.9,
    emoji: "🐑"
  },
  // Biryani Packs
  {
    id: "biryani1",
    name: "Royal Chicken Biryani",
    description: "Authentic Hyderabadi style with tender chicken pieces",
    price: 299,
    originalPrice: 349,
    category: "biryani",
    isVeg: false,
    isSpicy: true,
    isPopular: true,
    rating: 4.9,
    emoji: "👑"
  },
  {
    id: "biryani2",
    name: "Mutton Dum Biryani",
    description: "Slow-cooked mutton with aromatic basmati rice",
    price: 399,
    category: "biryani",
    isVeg: false,
    isSpicy: true,
    rating: 4.8,
    emoji: "🐑"
  },
  {
    id: "biryani3",
    name: "Veg Dum Biryani",
    description: "Mixed vegetables and paneer with saffron rice",
    price: 199,
    category: "biryani",
    isVeg: true,
    isSpicy: false,
    rating: 4.5,
    emoji: "🥬"
  },
  {
    id: "biryani4",
    name: "Prawns Biryani",
    description: "Fresh prawns cooked with fragrant spices",
    price: 349,
    category: "biryani",
    isVeg: false,
    isSpicy: true,
    rating: 4.7,
    emoji: "🦐"
  },
  // Chinese Meals
  {
    id: "chinese1",
    name: "Chicken Manchurian Combo",
    description: "Spicy chicken manchurian with fried rice & noodles",
    price: 249,
    category: "chinese",
    isVeg: false,
    isSpicy: true,
    isPopular: true,
    rating: 4.7,
    emoji: "🥡"
  },
  {
    id: "chinese2",
    name: "Veg Hakka Noodles Combo",
    description: "Stir-fried noodles with mixed vegetables",
    price: 179,
    category: "chinese",
    isVeg: true,
    isSpicy: false,
    rating: 4.4,
    emoji: "🍜"
  },
  {
    id: "chinese3",
    name: "Szechuan Chicken",
    description: "Spicy Szechuan chicken with steamed rice",
    price: 229,
    category: "chinese",
    isVeg: false,
    isSpicy: true,
    rating: 4.6,
    emoji: "🌶️"
  },
  // Thali Specials
  {
    id: "thali1",
    name: "Punjabi Thali",
    description: "Dal makhani, paneer, rice, roti, raita, pickle, sweet",
    price: 299,
    category: "thali",
    isVeg: true,
    isSpicy: false,
    rating: 4.6,
    emoji: "🍽️"
  },
  {
    id: "thali2",
    name: "South Indian Thali",
    description: "Sambar, rasam, rice, curry, pickle, papad, sweet",
    price: 249,
    category: "thali",
    isVeg: true,
    isSpicy: true,
    rating: 4.5,
    emoji: "🥥"
  },
  {
    id: "thali3",
    name: "Bengali Thali",
    description: "Fish curry, dal, rice, vegetables, sweet",
    price: 279,
    category: "thali",
    isVeg: false,
    isSpicy: true,
    rating: 4.7,
    emoji: "🐟"
  },
  // Add-ons & Sides
  {
    id: "addon1",
    name: "Garlic Naan",
    description: "Fresh baked naan with garlic and herbs",
    price: 49,
    category: "addons",
    isVeg: true,
    isSpicy: false,
    rating: 4.3,
    emoji: "🫓"
  },
  {
    id: "addon2",
    name: "Chicken Tikka (4 pcs)",
    description: "Tandoor grilled chicken tikka pieces",
    price: 199,
    category: "addons",
    isVeg: false,
    isSpicy: true,
    rating: 4.7,
    emoji: "🍢"
  },
  {
    id: "addon3",
    name: "Paneer Tikka (6 pcs)",
    description: "Grilled cottage cheese with spices",
    price: 179,
    category: "addons",
    isVeg: true,
    isSpicy: false,
    rating: 4.5,
    emoji: "🧈"
  },
  {
    id: "addon4",
    name: "Masala Papad",
    description: "Crispy papad with onions and tomatoes",
    price: 29,
    category: "addons",
    isVeg: true,
    isSpicy: false,
    rating: 4.2,
    emoji: "🥙"
  },
  // Desserts
  {
    id: "dessert1",
    name: "Gulab Jamun (2 pcs)",
    description: "Traditional milk dumplings in sugar syrup",
    price: 79,
    category: "desserts",
    isVeg: true,
    isSpicy: false,
    rating: 4.5,
    emoji: "🍯"
  },
  {
    id: "dessert2",
    name: "Kulfi Stick",
    description: "Traditional Indian ice cream with nuts",
    price: 59,
    category: "desserts",
    isVeg: true,
    isSpicy: false,
    rating: 4.4,
    emoji: "🍦"
  },
  {
    id: "dessert3",
    name: "Ras Malai (2 pcs)",
    description: "Cottage cheese dumplings in sweet milk",
    price: 89,
    category: "desserts",
    isVeg: true,
    isSpicy: false,
    rating: 4.6,
    emoji: "🥛"
  },
  {
    id: "dessert4",
    name: "Jalebi (4 pcs)",
    description: "Crispy sweet spirals in sugar syrup",
    price: 69,
    category: "desserts",
    isVeg: true,
    isSpicy: false,
    rating: 4.3,
    emoji: "🍩"
  },
  // Beverages
  {
    id: "beverage1",
    name: "Fresh Lime Soda",
    description: "Refreshing lime with soda and mint",
    price: 49,
    category: "beverages",
    isVeg: true,
    isSpicy: false,
    rating: 4.2,
    emoji: "🥤"
  },
  {
    id: "beverage2",
    name: "Mango Lassi",
    description: "Thick yogurt drink with fresh mango",
    price: 69,
    category: "beverages",
    isVeg: true,
    isSpicy: false,
    rating: 4.6,
    emoji: "🥭"
  },
  {
    id: "beverage3",
    name: "Masala Chai",
    description: "Traditional spiced tea with milk",
    price: 39,
    category: "beverages",
    isVeg: true,
    isSpicy: false,
    rating: 4.4,
    emoji: "☕"
  },
  {
    id: "beverage4",
    name: "Fresh Coconut Water",
    description: "Natural tender coconut water",
    price: 59,
    category: "beverages",
    isVeg: true,
    isSpicy: false,
    rating: 4.3,
    emoji: "🥥"
  }
];

export const menuCategories = [
  { id: "combos", label: "Combo Meals", description: "Complete meals with rice, curry, and sides" },
  { id: "biryani", label: "Biryani Packs", description: "Authentic aromatic rice dishes" },
  { id: "chinese", label: "Chinese Meals", description: "Indo-Chinese fusion favorites" },
  { id: "thali", label: "Thali Specials", description: "Traditional regional platters" },
  { id: "addons", label: "Add-ons & Sides", description: "Enhance your meal with extras" },
  { id: "desserts", label: "Desserts", description: "Sweet endings to your meal" },
  { id: "beverages", label: "Beverages", description: "Refreshing drinks and traditional beverages" }
];

export default menuData;
