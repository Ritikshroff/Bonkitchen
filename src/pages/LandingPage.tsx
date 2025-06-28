import { motion } from "framer-motion";
import { Button } from "flowbite-react";
import { ChefHat, Utensils, Users2, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import Testimonials from "../components/Testimonials";
import ComboOfTheWeek from "../components/ComboOfTheWeek";
import RewardsProgram from "../components/RewardsProgram";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const LandingPage = () => {
  const navigate = useNavigate();

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Updated Hero Section with prominent CTAs */}
      <section className="relative min-h-screen bg-gradient-to-br from-orange-500 to-orange-600 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl md:text-8xl text-white">
            🌶️
          </div>
          <div className="absolute top-32 right-20 text-5xl md:text-6xl text-white">
            🍛
          </div>
          <div className="absolute bottom-20 left-20 text-6xl md:text-7xl text-white">
            🥘
          </div>
          <div className="absolute bottom-32 right-10 text-4xl md:text-5xl text-white">
            ✨
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 flex flex-col lg:flex-row items-center min-h-screen">
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex items-center justify-center lg:justify-start mb-4 md:mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <ChefHat className="text-white mr-2 md:mr-3" size={32} />
              <span className="text-white text-xl md:text-2xl font-bold">
                BON Kitchen
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Authentic <span className="text-white">Desi</span> Flavors
              <br />
              <span className="text-orange-100">For Every Occasion!</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-orange-100 mb-8 md:mb-10 max-w-2xl px-4 md:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              From intimate family dinners to grand celebrations, we bring the
              magic of home-cooked Indian cuisine to your doorstep! 🏠✨
            </motion.p>

            {/* Prominent CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start px-4 md:px-0 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                size="xl"
                className="bg-white text-orange-500 hover:bg-orange-50 font-bold px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                onClick={() => navigate("/catering")}
              >
                <Users2 className="mr-2" size={20} />
                Catering Services
              </Button>
              <Button
                size="xl"
                className="bg-orange-700 hover:bg-orange-800 text-white font-bold px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                onClick={() => navigate("/order")}
              >
                <ShoppingCart className="mr-2" size={20} />
                Order Now
              </Button>
            </motion.div>

            {/* Quick Order Option */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start px-4 md:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Button
                size="lg"
                className="bg-white/20 backdrop-blur-sm text-white border-white hover:bg-white/30 px-6 py-3 rounded-full w-full sm:w-auto"
                onClick={() =>
                  window.open("https://wa.me/8076507512", "_blank")
                }
              >
                📱 Quick WhatsApp Order
              </Button>
              <Button
                size="lg"
                color="light"
                className="bg-transparent text-white border-white hover:bg-white/10 px-6 py-3 rounded-full w-full sm:w-auto"
                onClick={scrollToMenu}
              >
                <Utensils className="mr-2" size={18} />
                View Menu
              </Button>
            </motion.div>

            <motion.div
              className="mt-6 md:mt-8 flex items-center justify-center lg:justify-start text-white/80 px-4 md:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex -space-x-2 mr-3 md:mr-4">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-orange-400 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-400 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 md:w-8 md:h-8 bg-orange-300 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-xs md:text-sm">
                10,000+ Happy Customers | ⭐ 4.8/5 Rating
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative px-4 md:px-0">
              <motion.div
                className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-12 h-12 md:w-20 md:h-20 bg-white rounded-full opacity-80"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity },
                }}
              />
              <motion.div
                className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-10 h-10 md:w-16 md:h-16 bg-orange-400 rounded-full opacity-80"
                animate={{
                  rotate: -360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity },
                }}
              />
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl md:text-8xl mb-3 md:mb-4">🍽️</div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    What's Your Craving?
                  </h3>
                  <p className="text-orange-200 text-base md:text-lg mb-3 md:mb-4">
                    Personal Orders • Event Catering
                  </p>
                  <div className="bg-white text-orange-500 px-3 md:px-4 py-2 rounded-full font-bold text-sm md:text-base">
                    Starting at ₹99
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 md:h-3 bg-white/50 rounded-full mt-1 md:mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Existing sections */}
      <Menu />
      <ComboOfTheWeek />
      <Testimonials />
      <RewardsProgram />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
