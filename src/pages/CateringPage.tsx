import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "flowbite-react";
import {
  Menu as MenuIcon,
  X,
  Users,
  ChefHat,
  Star,
  Quote,
  Phone,
  Mail,
  Calendar,
  MapPin,
  Award,
  Utensils,
  Clock,
  Shield,
  Heart,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const CateringPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const navigate = useNavigate();

  // Handle scroll-based navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "packages",
        "custom",
        "corporate",
        "events",
        "gallery",
        "contact",
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

  const navigationItems = [
    { id: "about", label: "About Our Catering", icon: ChefHat },
    { id: "packages", label: "Menu Packages", icon: Utensils },
    { id: "custom", label: "Custom Orders", icon: Heart },
    { id: "corporate", label: "Corporate Catering", icon: Award },
    { id: "events", label: "Event Types", icon: Calendar },
    { id: "gallery", label: "Gallery", icon: Star },
    { id: "contact", label: "Contact Us", icon: Phone },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setSidebarOpen(false);
  };

  const menuPackages = [
    {
      title: "Intimate Gathering",
      subtitle: "Perfect for 10-25 people",
      price: "₹799",
      originalPrice: "₹999",
      items: [
        "Chicken Biryani",
        "Dal Makhani",
        "Mixed Veg",
        "Raita",
        "Dessert",
      ],
      popular: false,
    },
    {
      title: "Grand Celebration",
      subtitle: "Perfect for 25-50 people",
      price: "₹1,299",
      originalPrice: "₹1,599",
      items: [
        "Premium Biryani",
        "2 Curries",
        "2 Veg Dishes",
        "Naan/Rice",
        "Desserts",
        "Beverages",
      ],
      popular: true,
    },
    {
      title: "Royal Feast",
      subtitle: "Perfect for 50+ people",
      price: "₹1,899",
      originalPrice: "₹2,299",
      items: [
        "Royal Biryani",
        "3 Non-Veg",
        "3 Veg Dishes",
        "Breads",
        "Starters",
        "Premium Desserts",
      ],
      popular: false,
    },
  ];

  const eventTypes = [
    {
      name: "Birthday Parties",
      icon: "🎂",
      description: "Make birthdays memorable with our special combos",
    },
    {
      name: "Corporate Events",
      icon: "💼",
      description: "Professional catering for office gatherings",
    },
    {
      name: "Wedding Functions",
      icon: "💒",
      description: "Traditional flavors for your special day",
    },
    {
      name: "Religious Ceremonies",
      icon: "🕉️",
      description: "Authentic vegetarian options available",
    },
    {
      name: "Family Reunions",
      icon: "👨‍👩‍👧‍👦",
      description: "Bringing families together over great food",
    },
    {
      name: "Festival Celebrations",
      icon: "🪔",
      description: "Special festive menus and traditional sweets",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-md px-4 py-3 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center">
          <ChefHat className="text-orange-500 mr-2" size={24} />
          <span className="font-bold text-gray-800">BON Catering</span>
        </div>
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 rounded-lg bg-orange-500 text-white"
        >
          <MenuIcon size={20} />
        </button>
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
              className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center">
                  <ChefHat className="text-orange-500 mr-2" size={24} />
                  <span className="font-bold text-gray-800">BON Catering</span>
                </div>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-1 rounded-lg hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
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
      <div className="hidden lg:block fixed left-0 top-0 h-full w-80 bg-white shadow-lg z-30">
        <div className="p-6 border-b">
          <div className="flex items-center mb-4">
            <ChefHat className="text-orange-500 mr-3" size={28} />
            <span className="font-bold text-xl text-gray-800">
              BON Catering
            </span>
          </div>
          <p className="text-gray-600 text-sm">
            Professional catering services for all occasions
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
              className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300"
            >
              ← Back to Home
            </Button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="lg:ml-80">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-500 to-orange-600 py-20 lg:py-32">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 text-6xl text-white">
              🍽️
            </div>
            <div className="absolute top-32 right-20 text-5xl text-white">
              🥘
            </div>
            <div className="absolute bottom-20 left-20 text-6xl text-white">
              👨‍🍳
            </div>
            <div className="absolute bottom-32 right-10 text-4xl text-white">
              ✨
            </div>
          </div>

          <div className="relative container mx-auto px-4 text-center text-white">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Premium Catering Services
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              From intimate gatherings to grand celebrations, we bring authentic
              Indian flavors to your special moments
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button
                size="xl"
                className="bg-white text-orange-500 hover:bg-orange-50 font-bold px-8 py-4 rounded-full"
                onClick={() => scrollToSection("contact")}
              >
                <Calendar className="mr-2" size={20} />
                Book Now
              </Button>
              <Button
                size="xl"
                className="bg-orange-700 text-white hover:bg-orange-800 font-bold px-8 py-4 rounded-full"
                onClick={() =>
                  window.open("https://wa.me/8076507512", "_blank")
                }
              >
                <Phone className="mr-2" size={20} />
                Call Now
              </Button>
            </motion.div>
          </div>
        </section>

        {/* About Our Catering */}
        <section id="about" className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                Why Choose BON Kitchen Catering?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With over 10,000 successful events, we're your trusted partner
                for memorable dining experiences
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  title: "On-Time Delivery",
                  description: "We guarantee punctual service for your events",
                },
                {
                  icon: Shield,
                  title: "Quality Assured",
                  description:
                    "Fresh ingredients and hygienic preparation always",
                },
                {
                  icon: Heart,
                  title: "Made with Love",
                  description:
                    "Traditional recipes passed down through generations",
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "Professional chefs and dedicated service staff",
                },
                {
                  icon: Award,
                  title: "Award Winning",
                  description: "Recognized for excellence in catering services",
                },
                {
                  icon: Star,
                  title: "5-Star Rated",
                  description:
                    "Consistently rated 4.8/5 by our satisfied customers",
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-colors"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon className="text-orange-500 mx-auto mb-4" size={48} />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Menu Packages */}
        <section id="packages" className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                Catering Packages
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our carefully curated packages or customize your own
                menu
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {menuPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                    pkg.popular
                      ? "border-2 border-orange-500 transform scale-105"
                      : ""
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {pkg.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{pkg.subtitle}</p>
                    <div className="flex items-center justify-center">
                      <span className="text-4xl font-bold text-orange-500">
                        {pkg.price}
                      </span>
                      <span className="text-gray-400 line-through ml-2">
                        {pkg.originalPrice}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.items.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <CheckCircle
                          className="text-green-500 mr-3"
                          size={16}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-full"
                    onClick={() => scrollToSection("contact")}
                  >
                    Select Package
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Orders */}
        <section id="custom" className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                  Custom Menu Planning
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Have specific dietary requirements or special requests? Our
                  expert chefs will create a personalized menu just for you.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Dietary restrictions & allergies accommodated",
                    "Regional cuisine specializations",
                    "Fusion menu options available",
                    "Live cooking stations",
                    "Themed menu concepts",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full"
                  onClick={() => scrollToSection("contact")}
                >
                  Plan Custom Menu
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👨‍🍳</div>
                    <h3 className="text-2xl font-bold mb-4">
                      Chef Consultation
                    </h3>
                    <p className="text-orange-100 mb-6">
                      Book a free consultation with our head chef to design your
                      perfect menu
                    </p>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                      <p className="text-sm text-orange-100">Starting from</p>
                      <p className="text-3xl font-bold">₹299/person</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Corporate Catering */}
        <section id="corporate" className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                Corporate Catering Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional catering services for office events, meetings, and
                corporate celebrations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  {[
                    {
                      title: "Office Lunch Programs",
                      desc: "Daily or weekly meal solutions for your team",
                    },
                    {
                      title: "Meeting & Conference Catering",
                      desc: "Light refreshments to full meal services",
                    },
                    {
                      title: "Corporate Events",
                      desc: "Product launches, team building, celebrations",
                    },
                    {
                      title: "Executive Dining",
                      desc: "Premium menu options for VIP events",
                    },
                  ].map((service, index) => (
                    <div key={index} className="flex items-start">
                      <Award className="text-orange-500 mr-4 mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Corporate Benefits
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Volume discounts available",
                      "Flexible billing options",
                      "Dedicated account manager",
                      "24/7 customer support",
                      "Customizable recurring orders",
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle
                          className="text-green-500 mr-3"
                          size={16}
                        />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-full"
                    onClick={() => scrollToSection("contact")}
                  >
                    Get Corporate Quote
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Event Types */}
        <section id="events" className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                Perfect for Every Occasion
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From intimate family gatherings to grand celebrations, we cater
                to all types of events
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventTypes.map((event, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-3xl p-8 text-center hover:bg-orange-50 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-5xl mb-4">{event.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {event.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <Button
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-full"
                    onClick={() => scrollToSection("contact")}
                  >
                    Learn More
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                Our Catering Gallery
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Take a look at some of our recent catering events and food
                presentations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  emoji: "🍛",
                  title: "Corporate Lunch Setup",
                  desc: "Office catering for 50+ employees",
                },
                {
                  emoji: "🎂",
                  title: "Birthday Celebration",
                  desc: "Complete party package with desserts",
                },
                {
                  emoji: "💒",
                  title: "Wedding Reception",
                  desc: "Traditional feast for 200 guests",
                },
                {
                  emoji: "🥘",
                  title: "Festival Catering",
                  desc: "Authentic regional specialties",
                },
                {
                  emoji: "🍽️",
                  title: "Elegant Presentation",
                  desc: "Fine dining setup for corporate events",
                },
                {
                  emoji: "👨‍🍳",
                  title: "Live Cooking Station",
                  desc: "Interactive chef preparation",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4 text-center">{item.emoji}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full"
                onClick={() =>
                  window.open("https://wa.me/8076507512", "_blank")
                }
              >
                View Full Portfolio
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        </section>

        {/* Contact & Quote */}
        <section
          id="contact"
          className="py-16 lg:py-24 bg-gradient-to-br from-orange-500 to-orange-600"
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Get Your Free Quote Today
              </h2>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                Ready to make your event unforgettable? Contact us for a
                personalized quote and tasting session
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-center text-white">
                      <Phone className="mr-4" size={24} />
                      <div>
                        <p className="font-bold">Call Us</p>
                        <p className="text-orange-200">+91 8076507512</p>
                      </div>
                    </div>

                    <div className="flex items-center text-white">
                      <Mail className="mr-4" size={24} />
                      <div>
                        <p className="font-bold">Email Us</p>
                        <p className="text-orange-200">
                          catering@bonkitchen.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center text-white">
                      <MapPin className="mr-4" size={24} />
                      <div>
                        <p className="font-bold">Visit Us</p>
                        <p className="text-orange-200">
                          123 Culinary Street, Food District
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center text-white">
                      <Clock className="mr-4" size={24} />
                      <div>
                        <p className="font-bold">Service Hours</p>
                        <p className="text-orange-200">
                          Mon-Sun: 6:00 AM - 11:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Quick Quote Request
                  </h3>

                  <div className="space-y-6">
                    <div className="bg-orange-50 rounded-2xl p-6 text-center">
                      <Quote
                        className="text-orange-500 mx-auto mb-4"
                        size={32}
                      />
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        Free Tasting Available
                      </h4>
                      <p className="text-gray-600 mb-4">
                        Book a complimentary tasting session for orders above
                        ₹5,000
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        size="lg"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-full"
                        onClick={() =>
                          window.open("https://wa.me/8076507512", "_blank")
                        }
                      >
                        <Phone className="mr-2" size={18} />
                        Call Now
                      </Button>
                      <Button
                        size="lg"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-full"
                        onClick={() =>
                          window.open("https://wa.me/8076507512", "_blank")
                        }
                      >
                        WhatsApp
                      </Button>
                    </div>

                    <Button
                      size="lg"
                      className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 rounded-full"
                      onClick={() =>
                        window.open("mailto:catering@bonkitchen.com", "_blank")
                      }
                    >
                      <Mail className="mr-2" size={18} />
                      Send Email
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CateringPage;
