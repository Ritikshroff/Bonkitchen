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
import { useCart } from "../hooks/useCart";
import { menuData, menuCategories } from "../data/menuData";

const OrderPage = () => {
  const [activeSection, setActiveSection] = useState("combos");
  const [rewardPoints] = useState(245);

  const {
    cart,
    cartTotal,
    addToCart,
    removeFromCart,
    getCartItemQuantity,
    handleWhatsAppOrder,
  } = useCart();

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

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
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

  const renderMenuSection = (categoryId: string) => {
    const category = menuCategories.find((cat) => cat.id === categoryId);
    const items = menuData.filter((item) => item.category === categoryId);
    const Icon =
      navigationItems.find((nav) => nav.id === categoryId)?.icon || Utensils;

    if (!category) return null;

    return (
      <section id={categoryId} className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={category.label}
            subtitle={category.description}
            icon={Icon}
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
          {menuCategories.map((category) => renderMenuSection(category.id))}
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
