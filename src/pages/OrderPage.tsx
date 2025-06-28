import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "flowbite-react";
import {
  Menu as MenuIcon,
  X,
  ShoppingCart,
  Plus,
  Minus,
  ChefHat,
  Star,
  Phone,
  Heart,
  Award,
  Coffee,
  Utensils,
  Cookie,
  Gift,
  Truck,
  Clock,
  Shield,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("combos");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [rewardPoints] = useState(245); // Mock user reward points
  const navigate = useNavigate();

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

  const navigationItems = [
    { id: "combos", label: "Combo Meals", icon: Utensils },
    { id: "biryani", label: "Biryani Packs", icon: Star },
    { id: "chinese", label: "Chinese Meals", icon: ChefHat },
    { id: "thali", label: "Thali Specials", icon: Award },
    { id: "addons", label: "Add-ons & Sides", icon: Plus },
    { id: "desserts", label: "Desserts", icon: Cookie },
    { id: "beverages", label: "Beverages", icon: Coffee },
  ];

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

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setSidebarOpen(false);
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

  const renderMenuSection = (categoryId: string, title: string, icon: any) => {
    const Icon = icon;
    const items = menuItems.filter((item) => item.category === categoryId);

    return (
      <section id={categoryId} className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex items-center justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Icon className="text-orange-500 mr-3" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              {title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {item.isPopular && (
                  <div className="absolute -top-3 -right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Popular
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-3">{item.emoji}</span>
                    <div>
                      <div className="flex items-center mb-1">
                        {item.isVeg ? (
                          <div className="w-3 h-3 border-2 border-green-500 mr-2 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          </div>
                        ) : (
                          <div className="w-3 h-3 border-2 border-red-500 mr-2 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                          </div>
                        )}
                        {item.isSpicy && (
                          <span className="text-red-500 text-sm">🌶️</span>
                        )}
                      </div>
                      <div className="flex items-center">
                        <Star
                          className="text-yellow-500 mr-1"
                          size={14}
                          fill="currentColor"
                        />
                        <span className="text-sm text-gray-600">
                          {item.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xl font-bold text-orange-500">
                      ₹{item.price}
                    </div>
                    {item.originalPrice && (
                      <div className="text-sm text-gray-400 line-through">
                        ₹{item.originalPrice}
                      </div>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                <div className="flex items-center justify-between">
                  {getCartItemQuantity(item.id) > 0 ? (
                    <div className="flex items-center bg-orange-500 rounded-full">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-white hover:bg-orange-600 rounded-full"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 py-2 text-white font-bold">
                        {getCartItemQuantity(item.id)}
                      </span>
                      <button
                        onClick={() => addToCart(item)}
                        className="p-2 text-white hover:bg-orange-600 rounded-full"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  ) : (
                    <Button
                      onClick={() => addToCart(item)}
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-full"
                    >
                      <Plus size={16} className="mr-2" />
                      Add
                    </Button>
                  )}

                  <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                    <Heart size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-md px-4 py-3 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center">
          <ChefHat className="text-orange-500 mr-2" size={24} />
          <span className="font-bold text-gray-800">BON Menu</span>
        </div>
        <div className="flex items-center space-x-3">
          {cart.length > 0 && (
            <div className="relative">
              <ShoppingCart className="text-orange-500" size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg bg-orange-500 text-white"
          >
            <MenuIcon size={20} />
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center">
                  <ChefHat className="text-orange-500 mr-2" size={24} />
                  <span className="font-bold text-gray-800">BON Menu</span>
                </div>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-1 rounded-lg hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Rewards Section */}
              <div className="p-4 bg-orange-50 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Gift className="text-orange-500 mr-2" size={20} />
                    <span className="font-bold text-gray-800">
                      Reward Points
                    </span>
                  </div>
                  <span className="text-orange-500 font-bold">
                    {rewardPoints}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Earn 1 point per ₹10 spent
                </p>
              </div>

              <nav className="p-4">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center p-3 rounded-lg mb-2 text-left transition-colors ${
                        activeSection === item.id
                          ? "bg-orange-500 text-white"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <Icon size={18} className="mr-3" />
                      {item.label}
                    </button>
                  );
                })}
                <div className="mt-6 pt-4 border-t">
                  <Button
                    onClick={() => navigate("/")}
                    className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300"
                  >
                    ← Back to Home
                  </Button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed left-0 top-0 h-full w-80 bg-white shadow-lg z-30 overflow-y-auto">
        <div className="p-6 border-b">
          <div className="flex items-center mb-4">
            <ChefHat className="text-orange-500 mr-3" size={28} />
            <span className="font-bold text-xl text-gray-800">BON Menu</span>
          </div>
          <p className="text-gray-600 text-sm">
            Order fresh, authentic meals delivered to your doorstep
          </p>
        </div>

        {/* Rewards Section */}
        <div className="p-6 bg-orange-50 border-b">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Gift className="text-orange-500 mr-2" size={20} />
              <span className="font-bold text-gray-800">Reward Points</span>
            </div>
            <span className="text-orange-500 font-bold text-lg">
              {rewardPoints}
            </span>
          </div>
          <p className="text-sm text-gray-600">Earn 1 point per ₹10 spent</p>
          <div className="mt-3 bg-orange-200 rounded-full h-2">
            <div
              className="bg-orange-500 h-2 rounded-full"
              style={{ width: `${rewardPoints % 100}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {100 - (rewardPoints % 100)} points to next reward
          </p>
        </div>

        <nav className="p-6">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center p-3 rounded-lg mb-2 text-left transition-colors ${
                  activeSection === item.id
                    ? "bg-orange-500 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <Icon size={18} className="mr-3" />
                {item.label}
              </button>
            );
          })}
          <div className="mt-8 pt-6 border-t">
            <Button
              onClick={() => navigate("/")}
              className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300 mb-4"
            >
              ← Back to Home
            </Button>
          </div>
        </nav>
      </div>

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
      <AnimatePresence>
        {cart.length > 0 && (
          <motion.div
            className="fixed bottom-4 right-4 bg-orange-500 text-white rounded-2xl shadow-2xl z-40 max-w-sm"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg">Your Order</h3>
                <span className="bg-white text-orange-500 px-2 py-1 rounded-full text-sm font-bold">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)} items
                </span>
              </div>

              <div className="max-h-40 overflow-y-auto mb-3">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between py-1 text-sm"
                  >
                    <span>
                      {item.name} x{item.quantity}
                    </span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-orange-400 pt-3 mb-4">
                <div className="flex items-center justify-between font-bold text-lg">
                  <span>Total:</span>
                  <span>₹{cartTotal}</span>
                </div>
                {cartTotal < 299 && (
                  <p className="text-orange-200 text-xs mt-1">
                    Add ₹{299 - cartTotal} more for free delivery
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Button
                  onClick={handleWhatsAppOrder}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-full text-sm"
                >
                  <Phone size={14} className="mr-1" />
                  WhatsApp
                </Button>
                <Button
                  onClick={handleWhatsAppOrder}
                  className="bg-white text-orange-500 hover:bg-orange-50 font-bold py-2 rounded-full text-sm"
                >
                  <ShoppingCart size={14} className="mr-1" />
                  Order
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OrderPage;
