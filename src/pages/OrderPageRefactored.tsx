import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChefHat,
  Star,
  Award,
  Coffee,
  Utensils,
  Cookie,
  Gift,
  Truck,
  Clock,
  Shield,
  Plus,
} from "lucide-react";
import {
  CustomSidebar,
  MenuItemCard,
  FloatingCart,
  SectionHeader,
} from "../components/ui";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
}

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  isVeg: boolean;
  isSpicy: boolean;
  isPopular?: boolean;
  rating: number;
  emoji: string;
}

const OrderPage = () => {
  const [activeSection, setActiveSection] = useState("combos");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [rewardPoints] = useState(245);

  // Navigation items for sidebar
  const navigationItems = [
    { id: "combos", label: "Combo Meals", icon: Utensils },
    { id: "biryani", label: "Biryani Packs", icon: Star },
    { id: "chinese", label: "Chinese Meals", icon: ChefHat },
    { id: "thali", label: "Thali Specials", icon: Award },
    { id: "addons", label: "Add-ons & Sides", icon: Plus },
    { id: "desserts", label: "Desserts", icon: Cookie },
    { id: "beverages", label: "Beverages", icon: Coffee },
  ];

  // Sample menu data
  const menuItems: MenuItem[] = [
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
      emoji: "🍛",
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
      emoji: "🥘",
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
      emoji: "🐟",
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
      emoji: "👑",
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
      emoji: "🐑",
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
      emoji: "🥬",
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
      emoji: "🥡",
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
      emoji: "🍜",
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
      emoji: "🍽️",
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
      emoji: "🥥",
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
      emoji: "🫓",
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
      emoji: "🍢",
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
      emoji: "🍯",
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
      emoji: "🍦",
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
      emoji: "🥤",
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
      emoji: "🥭",
    },
  ];

  // Handle scroll-based navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "combos",
        "biryani",
        "chinese",
        "thali",
        "addons",
        "desserts",
        "beverages",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate cart total
  useEffect(() => {
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setCartTotal(total);
  }, [cart]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const addToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [
          ...prevCart,
          {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1,
            category: item.category,
          },
        ];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      } else {
        return prevCart.filter((cartItem) => cartItem.id !== itemId);
      }
    });
  };

  const getCartItemQuantity = (itemId: string) => {
    const item = cart.find((cartItem) => cartItem.id === itemId);
    return item ? item.quantity : 0;
  };

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;

    const orderText = cart
      .map(
        (item) =>
          `${item.name} x${item.quantity} - ₹${item.price * item.quantity}`
      )
      .join("\n");

    const totalText = `\nTotal: ₹${cartTotal}`;
    const message = `BON Kitchen Order:\n${orderText}${totalText}`;

    window.open(
      `https://wa.me/8076507512?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  // Rewards section for sidebar
  const rewardsSection = (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <Gift className="text-orange-500 mr-2" size={20} />
          <span className="font-bold text-gray-800">Reward Points</span>
        </div>
        <span className="text-orange-500 font-bold text-lg">
          {rewardPoints}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-3">Earn 1 point per ₹10 spent</p>
      <div className="bg-orange-200 rounded-full h-2">
        <div
          className="bg-orange-500 h-2 rounded-full"
          style={{ width: `${rewardPoints % 100}%` }}
        ></div>
      </div>
      <p className="text-xs text-gray-500 mt-1">
        {100 - (rewardPoints % 100)} points to next reward
      </p>
    </div>
  );

  const renderMenuSection = (categoryId: string, title: string, icon: any) => {
    const items = menuItems.filter((item) => item.category === categoryId);

    return (
      <section id={categoryId} className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={title}
            icon={icon}
            subtitle={`Discover our amazing ${title.toLowerCase()} collection`}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <MenuItemCard
                key={item.id}
                {...item}
                quantity={getCartItemQuantity(item.id)}
                onAdd={() => addToCart(item)}
                onRemove={() => removeFromCart(item.id)}
                animationDelay={index}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <CustomSidebar
        title="BON Menu"
        subtitle="Order fresh, authentic meals delivered to your doorstep"
        navigationItems={navigationItems}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
        children={rewardsSection}
      />

      {/* Main Content */}
      <div className="lg:ml-80">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-500 to-orange-600 py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 text-6xl text-white">
              🛒
            </div>
            <div className="absolute top-32 right-20 text-5xl text-white">
              🍽️
            </div>
            <div className="absolute bottom-20 left-20 text-6xl text-white">
              🥘
            </div>
            <div className="absolute bottom-32 right-10 text-4xl text-white">
              ⚡
            </div>
          </div>

          <div className="relative container mx-auto px-4 text-center text-white">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Order Fresh & Fast
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Authentic Indian flavors delivered hot to your doorstep in 30
              minutes
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Truck className="mr-2" size={16} />
                Free Delivery on ₹299+
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Clock className="mr-2" size={16} />
                30 Min Delivery
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield className="mr-2" size={16} />
                100% Safe & Hygienic
              </div>
            </motion.div>
          </div>
        </section>

        {/* Menu Sections */}
        <div className="bg-gray-50">
          {renderMenuSection("combos", "Combo Meals", Utensils)}
          {renderMenuSection("biryani", "Biryani Packs", Star)}
          {renderMenuSection("chinese", "Chinese Meals", ChefHat)}
          {renderMenuSection("thali", "Thali Specials", Award)}
          {renderMenuSection("addons", "Add-ons & Sides", Plus)}
          {renderMenuSection("desserts", "Desserts", Cookie)}
          {renderMenuSection("beverages", "Cold Beverages", Coffee)}
        </div>
      </div>

      {/* Floating Cart */}
      <FloatingCart
        cart={cart}
        total={cartTotal}
        onWhatsAppOrder={handleWhatsAppOrder}
        onCheckout={handleWhatsAppOrder}
      />
    </div>
  );
};

export default OrderPage;
