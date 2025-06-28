import { motion } from "framer-motion";
import { ChefHat, Heart, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              className="flex items-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ChefHat className="text-orange-500 mr-2 md:mr-3" size={28} />
              <span className="text-xl md:text-2xl font-bold">BON Kitchen</span>
            </motion.div>

            <motion.p
              className="text-gray-300 mb-4 md:mb-6 max-w-md leading-relaxed text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Bringing authentic desi flavors to your doorstep! From royal
              biryanis to sizzling Chinese combos, we craft every meal with love
              and deliver happiness in every bite. 🍛❤️
            </motion.p>

            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-orange-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#menu"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                >
                  Our Menu
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                >
                  Locations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                >
                  Rewards Program
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                >
                  Track Order
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                >
                  Nutritional Info
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Customer Care */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-orange-400 mb-4">
              Customer Care
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                >
                  Help & Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                >
                  Careers
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Sticky Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 300 }}
      >
        <motion.button
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300"
          onClick={() =>
            window.open(
              "https://wa.me/8076507512?text=Hi! I want to place an order",
              "_blank"
            )
          }
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(34, 197, 94, 0.7)",
              "0 0 0 20px rgba(34, 197, 94, 0)",
            ],
          }}
          transition={{
            boxShadow: { duration: 2, repeat: Infinity },
          }}
        >
          <div className="flex items-center">
            <span className="text-2xl mr-2">📱</span>
            <div className="hidden sm:block">
              <div className="text-sm font-bold">Order on WhatsApp</div>
              <div className="text-xs opacity-90">Quick & Easy!</div>
            </div>
          </div>
        </motion.button>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} BON Kitchen. Made with{" "}
              <Heart className="inline text-red-500" size={16} /> for food
              lovers across India.
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>🏆 10,000+ Happy Customers</span>
              <span>⭐ 4.8/5 Rating</span>
              <span>🚚 25 min Avg Delivery</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
