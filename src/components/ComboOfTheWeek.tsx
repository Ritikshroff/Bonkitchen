import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, Users, Zap, Gift } from "lucide-react";
import { Button } from "flowbite-react";

const ComboOfTheWeek = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const weeklyCombo = {
    name: "Maharaja's Royal Feast",
    description:
      "The ultimate indulgence! Chicken biryani, mutton curry, paneer makhani, 4 naans, jeera rice, mixed raita, pickle, papad, and kulfi for dessert!",
    originalPrice: 899,
    specialPrice: 549,
    savings: 350,
    image: "👑",
    features: [
      "Perfect for 2-3 people",
      "Restaurant-style presentation",
      "Premium ingredients",
      "Complimentary kulfi dessert",
    ],
    timeLeft: "3 days",
    ordersLeft: 47,
  };

  return (
    <section className="py-12 md:py-20 bg-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl animate-pulse">⭐</div>
        <div className="absolute top-20 right-20 text-8xl animate-bounce">
          🎉
        </div>
        <div className="absolute bottom-20 left-32 text-7xl animate-pulse">
          💎
        </div>
        <div className="absolute bottom-10 right-10 text-5xl animate-bounce">
          🔥
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block bg-orange-500 text-white px-4 md:px-6 py-2 rounded-full font-bold mb-4 text-sm md:text-base"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🌟 LIMITED TIME SPECIAL 🌟
          </motion.div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Combo of the Week
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4 md:px-0">
            Our chefs' special creation - available only this week! Don't miss
            out on this royal experience! 👑
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-1/2 bg-orange-500 p-8 flex items-center justify-center relative">
              <motion.div
                className="text-center"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="text-9xl mb-4">{weeklyCombo.image}</div>
                <div className="text-white font-bold text-2xl">
                  {weeklyCombo.name}
                </div>
              </motion.div>

              {/* Urgency badge */}
              <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                Only {weeklyCombo.ordersLeft} left!
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {weeklyCombo.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {weeklyCombo.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <Gift className="mr-2 text-orange-500" size={20} />
                  What's Included:
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {weeklyCombo.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-4 mb-6 text-sm">
                <div className="flex items-center text-gray-600">
                  <Users size={16} className="mr-1 text-orange-500" />
                  2-3 people
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock size={16} className="mr-1 text-orange-500" />
                  35 mins
                </div>
                <div className="flex items-center text-gray-600">
                  <Zap size={16} className="mr-1 text-orange-500" />
                  Premium
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="text-4xl font-bold text-orange-600">
                    ₹{weeklyCombo.specialPrice}
                  </span>
                  <span className="text-xl text-gray-500 line-through ml-3">
                    ₹{weeklyCombo.originalPrice}
                  </span>
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full inline-block text-sm font-bold">
                  🎉 You Save ₹{weeklyCombo.savings}!
                </div>
              </div>

              {/* Countdown */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-orange-700 font-bold">
                    ⏰ Offer ends in:
                  </span>
                  <span className="text-orange-700 font-bold text-lg">
                    {weeklyCombo.timeLeft}
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                size="xl"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transform hover:scale-105 transition-all duration-300"
                onClick={() =>
                  window.open(
                    `https://wa.me/8076507512?text=Hi! I want to order the ${weeklyCombo.name} combo for ₹${weeklyCombo.specialPrice}`,
                    "_blank"
                  )
                }
              >
                🛒 Order Now - ₹{weeklyCombo.specialPrice}
              </Button>

              <p className="text-center text-gray-500 text-sm mt-3">
                💳 Pay on delivery | 🚚 Free delivery on this combo
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional offer */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <p className="text-white text-lg font-bold mb-2">
              🎁 Bonus Offer: Order 2 combos and get FREE gulab jamun family
              pack!
            </p>
            <p className="text-gray-300">
              Valid only with Combo of the Week orders
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComboOfTheWeek;
