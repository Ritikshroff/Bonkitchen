import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, Users, Flame } from "lucide-react";
import { Button } from "flowbite-react";

const menuItems = [
  {
    id: 1,
    name: "Royal Chicken Biryani Combo",
    description:
      "Aromatic basmati rice with tender chicken, served with raita, boiled egg & pickle",
    price: 199,
    originalPrice: 299,
    image: "🍛",
    category: "Biryani Packs",
    isSpecial: true,
    servings: "1-2 people",
    time: "25 mins",
  },
  {
    id: 2,
    name: "Dragon Chicken Combo",
    description:
      "Spicy dragon chicken with hakka noodles, spring rolls & fortune cookie",
    price: 179,
    originalPrice: 249,
    image: "🐲",
    category: "Chinese Combos",
    servings: "1 person",
    time: "20 mins",
  },
  {
    id: 3,
    name: "Family Feast Pack",
    description:
      "Chicken curry, dal makhani, 8 rotis, rice, salad & gulab jamun for 4",
    price: 599,
    originalPrice: 799,
    image: "👨‍👩‍👧‍👦",
    category: "Family Meals",
    isPopular: true,
    servings: "4 people",
    time: "30 mins",
  },
  {
    id: 4,
    name: "Lunch Duo Special",
    description: "Dal rice bowl + sabzi of the day + pickle + papad",
    price: 99,
    originalPrice: 149,
    image: "🍚",
    category: "Lunch Duos",
    servings: "1 person",
    time: "15 mins",
  },
  {
    id: 5,
    name: "Paneer Tikka Combo",
    description: "Smoky paneer tikka with butter naan, dal & mint chutney",
    price: 159,
    originalPrice: 219,
    image: "🧀",
    category: "Vegetarian",
    servings: "1 person",
    time: "25 mins",
  },
  {
    id: 6,
    name: "Mutton Curry Party Pack",
    description:
      "Rich mutton curry with 6 naans, rice, salad & dessert - perfect for parties!",
    price: 799,
    originalPrice: 999,
    image: "🥘",
    category: "Party Packs",
    isSpecial: true,
    servings: "6-8 people",
    time: "40 mins",
  },
];

const categories = [
  "All",
  "Biryani Packs",
  "Chinese Combos",
  "Family Meals",
  "Lunch Duos",
  "Party Packs",
];

const Menu = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="menu" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Flame className="text-orange-500 mr-2" size={24} />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              Our Delicious Menu
            </h2>
            <Flame className="text-orange-500 ml-2" size={24} />
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 md:px-0">
            Handcrafted with love, delivered with care! Each combo is a perfect
            blend of authentic flavors and modern convenience 🍴
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              color={selectedCategory === category ? "warning" : "light"}
              className={`px-3 md:px-6 py-2 rounded-full transition-all duration-300 text-sm md:text-base ${
                selectedCategory === category
                  ? "bg-orange-500 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-orange-100"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Badge */}
              {(item.isSpecial || item.isPopular) && (
                <div className="relative">
                  <div
                    className={`absolute top-3 right-3 md:top-4 md:right-4 z-10 px-2 md:px-3 py-1 rounded-full text-xs font-bold ${
                      item.isSpecial
                        ? "bg-orange-500 text-white"
                        : "bg-gray-700 text-white"
                    }`}
                  >
                    {item.isSpecial ? "🔥 Special" : "⭐ Popular"}
                  </div>
                </div>
              )}

              <div className="p-4 md:p-6">
                <div className="text-center mb-4">
                  <div className="text-5xl md:text-6xl mb-3">{item.image}</div>
                  <div className="inline-block bg-orange-100 text-orange-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium mb-2">
                    {item.category}
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 text-center">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-center mb-4 text-sm leading-relaxed px-2 md:px-0">
                  {item.description}
                </p>

                <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 text-xs md:text-sm text-gray-500">
                  <div className="flex items-center">
                    <Users size={14} className="mr-1" />
                    {item.servings}
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {item.time}
                  </div>
                </div>

                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-orange-600">
                    ₹{item.price}
                  </span>
                  {item.originalPrice && (
                    <span className="text-lg text-gray-500 line-through ml-2">
                      ₹{item.originalPrice}
                    </span>
                  )}
                  {item.originalPrice && (
                    <div className="text-green-600 font-semibold text-sm">
                      Save ₹{item.originalPrice - item.price}!
                    </div>
                  )}
                </div>

                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl"
                  onClick={() =>
                    window.open(
                      `https://wa.me/8076507512?text=Hi! I want to order ${item.name} for ₹${item.price}`,
                      "_blank"
                    )
                  }
                >
                  Add to Cart - ₹{item.price}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-8 md:mt-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-full w-full sm:w-auto"
            onClick={() =>
              window.open(
                "https://wa.me/8076507512?text=Hi! I want to see your full menu",
                "_blank"
              )
            }
          >
            📋 View Full Menu on WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
