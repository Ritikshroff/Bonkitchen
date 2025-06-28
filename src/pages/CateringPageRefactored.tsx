import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  ChefHat,
  Star,
  Quote,
  Phone,
  Mail,
  Calendar,
  Award,
  Utensils,
  Clock,
  Shield,
  Heart,
  CheckCircle,
} from "lucide-react";
import {
  CustomSidebar,
  CustomButton,
  SectionHeader,
  CustomBadge,
} from "../components/ui";

const CateringPage = () => {
  const [activeSection, setActiveSection] = useState("about");

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
  };

  // Extended menu packages for 2-column, 3-row grid
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
    {
      title: "Office Special",
      subtitle: "Corporate lunch box",
      price: "₹599",
      originalPrice: "₹799",
      items: ["Lunch Combo", "Curry", "Rice/Roti", "Salad", "Sweet"],
      popular: false,
    },
    {
      title: "Family Pack",
      subtitle: "Family of 4-6 people",
      price: "₹999",
      originalPrice: "₹1,299",
      items: [
        "Mixed Biryani",
        "2 Curries",
        "Veg Side",
        "Breads",
        "Dessert",
        "Drinks",
      ],
      popular: false,
    },
    {
      title: "Premium Deluxe",
      subtitle: "Luxury catering experience",
      price: "₹2,499",
      originalPrice: "₹2,999",
      items: [
        "Signature Biryani",
        "4 Curries",
        "3 Veg Dishes",
        "Variety Breads",
        "Premium Starters",
        "Gourmet Desserts",
      ],
      popular: false,
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We guarantee punctual service for your events",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Fresh ingredients and hygienic preparation always",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Traditional recipes passed down through generations",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Professional chefs and dedicated service staff",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <CustomSidebar
        title="BON Catering"
        subtitle="Professional catering services for all occasions"
        navigationItems={navigationItems}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

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
              <CustomButton
                variant="secondary"
                icon={Calendar}
                iconPosition="left"
                onClick={() => scrollToSection("contact")}
              >
                Book Now
              </CustomButton>
              <CustomButton
                variant="whatsapp"
                icon={Phone}
                iconPosition="left"
                onClick={() =>
                  window.open("https://wa.me/8076507512", "_blank")
                }
              >
                Call Now
              </CustomButton>
            </motion.div>
          </div>
        </section>

        {/* About Our Catering */}
        <section id="about" className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Why Choose BON Kitchen?"
              subtitle="Your trusted partner for memorable dining experiences"
            />

            {/* Auto-scrolling features on mobile, grid on desktop */}
            <div className="lg:grid lg:grid-cols-3 lg:gap-6">
              {/* Mobile: Auto-scrolling horizontal strip with no visible scrollbar */}
              <div className="lg:hidden overflow-hidden relative">
                <motion.div
                  className="flex gap-4"
                  animate={{
                    x: [0, -100 * 4 + "%"],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 15,
                      ease: "linear",
                    },
                  }}
                >
                  {[...features, ...features].map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 min-w-[250px] flex-shrink-0"
                      >
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                            <Icon className="text-orange-600" size={18} />
                          </div>
                          <div>
                            <h3 className="text-sm font-bold text-gray-800 mb-1">
                              {feature.title}
                            </h3>
                            <p className="text-gray-600 text-xs leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Desktop grid */}
              <div className="hidden lg:contents">
                {features.slice(0, 3).map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-orange-200"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -2 }}
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <Icon className="text-orange-600" size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Menu Packages - 2 column, 3 row grid */}
        <section id="packages" className="py-12 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Catering Packages"
              subtitle="Choose from our curated packages"
            />

            {/* 2-column, 3-row grid (6 items total) */}
            <div className="grid grid-cols-2 gap-3 max-w-4xl mx-auto">
              {menuPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-orange-200">
                    {pkg.popular && (
                      <div className="absolute -top-1 -right-1">
                        <CustomBadge variant="popular" size="sm">
                          ⭐
                        </CustomBadge>
                      </div>
                    )}

                    {/* Compact header */}
                    <div className="mb-2">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <span className="text-lg mr-2">🍽️</span>
                          <h3 className="text-sm font-bold text-gray-800 leading-tight">
                            {pkg.title}
                          </h3>
                        </div>
                        <div className="text-sm font-bold text-orange-500">
                          {pkg.price}
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">
                        {pkg.items.length} items • {pkg.subtitle}
                      </p>
                    </div>

                    {/* Compact action button */}
                    <CustomButton
                      variant={pkg.popular ? "primary" : "secondary"}
                      fullWidth
                      onClick={() => scrollToSection("contact")}
                      className="text-xs py-1.5"
                    >
                      Select
                    </CustomButton>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Orders */}
        <section id="custom" className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <SectionHeader
                  title="Custom Menu Planning"
                  subtitle="Personalized menus for your special requirements"
                  centered={false}
                />

                <div className="space-y-3 mb-6">
                  {[
                    "Dietary restrictions accommodated",
                    "Regional cuisine specializations",
                    "Live cooking stations",
                    "Themed menu concepts",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle
                        className="text-green-500 mr-3 flex-shrink-0"
                        size={16}
                      />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <CustomButton
                  variant="primary"
                  onClick={() => scrollToSection("contact")}
                  className="text-sm"
                >
                  Plan Custom Menu
                </CustomButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-5 text-white text-center">
                  <div className="text-4xl mb-3">👨‍🍳</div>
                  <h3 className="text-lg font-bold mb-2">Chef Consultation</h3>
                  <p className="text-orange-100 mb-4 text-sm">
                    Free consultation with our head chef to design your perfect
                    menu
                  </p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                    <p className="text-xs text-orange-100">Starting from</p>
                    <p className="text-xl font-bold">₹299/person</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Corporate Catering */}
        <section id="corporate" className="py-12 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Corporate Catering"
              subtitle="Professional catering for office events"
            />

            <div className="grid lg:grid-cols-2 gap-6 items-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="space-y-3">
                  {[
                    {
                      title: "Office Lunch Programs",
                      desc: "Daily meal solutions for your team",
                    },
                    {
                      title: "Meeting Catering",
                      desc: "Light refreshments to full meals",
                    },
                    {
                      title: "Corporate Events",
                      desc: "Product launches & celebrations",
                    },
                  ].map((service, index) => (
                    <div key={index} className="flex items-start">
                      <Award
                        className="text-orange-500 mr-3 mt-1 flex-shrink-0"
                        size={18}
                      />
                      <div>
                        <h3 className="text-base font-bold text-gray-800 mb-1">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <h3 className="text-base font-bold text-gray-800 mb-3 text-center">
                    Corporate Benefits
                  </h3>
                  <div className="space-y-2 mb-3">
                    {[
                      "Volume discounts available",
                      "Flexible billing options",
                      "Dedicated account manager",
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle
                          className="text-green-500 mr-2 flex-shrink-0"
                          size={14}
                        />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <CustomButton
                    variant="primary"
                    fullWidth
                    onClick={() => scrollToSection("contact")}
                    className="text-sm py-2"
                  >
                    Get Corporate Quote
                  </CustomButton>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Event Types */}
        <section id="events" className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Perfect for Every Occasion"
              subtitle="From family gatherings to grand celebrations"
            />

            {/* Auto-scrolling on mobile, grid on desktop */}
            <div className="lg:grid lg:grid-cols-4 lg:gap-4">
              {/* Mobile: Auto-scrolling horizontal strip */}
              <div className="lg:hidden overflow-hidden relative">
                <motion.div
                  className="flex gap-4"
                  animate={{
                    x: [0, -100 * 4 + "%"],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 20,
                      ease: "linear",
                    },
                  }}
                >
                  {[
                    {
                      emoji: "🍛",
                      title: "Corporate Lunch",
                      desc: "Office catering",
                    },
                    {
                      emoji: "🎂",
                      title: "Birthday Party",
                      desc: "Party packages",
                    },
                    {
                      emoji: "💒",
                      title: "Wedding Reception",
                      desc: "Traditional feast",
                    },
                    {
                      emoji: "🥘",
                      title: "Festival Catering",
                      desc: "Regional specialties",
                    },
                    // Duplicate for seamless loop
                    {
                      emoji: "🍛",
                      title: "Corporate Lunch",
                      desc: "Office catering",
                    },
                    {
                      emoji: "🎂",
                      title: "Birthday Party",
                      desc: "Party packages",
                    },
                    {
                      emoji: "💒",
                      title: "Wedding Reception",
                      desc: "Traditional feast",
                    },
                    {
                      emoji: "🥘",
                      title: "Festival Catering",
                      desc: "Regional specialties",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:border-orange-200 group cursor-pointer min-w-[180px] flex-shrink-0"
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {item.emoji}
                        </div>
                        <h3 className="text-sm font-bold text-gray-800 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Desktop grid */}
              <div className="hidden lg:contents">
                {[
                  {
                    emoji: "🍛",
                    title: "Corporate Lunch",
                    desc: "Office catering",
                  },
                  {
                    emoji: "🎂",
                    title: "Birthday Party",
                    desc: "Party packages",
                  },
                  {
                    emoji: "💒",
                    title: "Wedding Reception",
                    desc: "Traditional feast",
                  },
                  {
                    emoji: "🥘",
                    title: "Festival Catering",
                    desc: "Regional specialties",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-orange-200 group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {item.emoji}
                      </div>
                      <h3 className="text-sm font-bold text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-12 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Our Catering Gallery"
              subtitle="Recent events and food presentations"
            />

            {/* Auto-scrolling on mobile, grid on desktop */}
            <div className="lg:grid lg:grid-cols-3 lg:gap-4">
              {/* Mobile: Auto-scrolling horizontal strip */}
              <div className="lg:hidden overflow-hidden relative">
                <motion.div
                  className="flex gap-4"
                  animate={{
                    x: [0, -100 * 3 + "%"],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 15,
                      ease: "linear",
                    },
                  }}
                >
                  {[
                    {
                      emoji: "📸",
                      title: "Corporate Event",
                      desc: "Professional setup for 100+ guests",
                    },
                    {
                      emoji: "🎉",
                      title: "Birthday Celebration",
                      desc: "Colorful and joyful arrangements",
                    },
                    {
                      emoji: "💍",
                      title: "Wedding Feast",
                      desc: "Traditional & modern fusion",
                    },
                    // Duplicate for seamless loop
                    {
                      emoji: "📸",
                      title: "Corporate Event",
                      desc: "Professional setup for 100+ guests",
                    },
                    {
                      emoji: "🎉",
                      title: "Birthday Celebration",
                      desc: "Colorful and joyful arrangements",
                    },
                    {
                      emoji: "💍",
                      title: "Wedding Feast",
                      desc: "Traditional & modern fusion",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:border-orange-200 group cursor-pointer min-w-[200px] flex-shrink-0"
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {item.emoji}
                        </div>
                        <h3 className="text-sm font-bold text-gray-800 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Desktop grid */}
              <div className="hidden lg:contents">
                {[
                  {
                    emoji: "📸",
                    title: "Corporate Event",
                    desc: "Professional setup for 100+ guests",
                  },
                  {
                    emoji: "🎉",
                    title: "Birthday Celebration",
                    desc: "Colorful and joyful arrangements",
                  },
                  {
                    emoji: "💍",
                    title: "Wedding Feast",
                    desc: "Traditional & modern fusion",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-orange-200 group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {item.emoji}
                      </div>
                      <h3 className="text-sm font-bold text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center mt-6">
              <CustomButton
                variant="secondary"
                onClick={() =>
                  window.open("https://wa.me/8076507512", "_blank")
                }
                className="text-sm"
              >
                View Full Gallery
              </CustomButton>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="What Our Clients Say"
              subtitle="Testimonials from satisfied customers"
            />

            {/* Auto-scrolling testimonials */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-4"
                animate={{
                  x: [0, -100 * 3 + "%"],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
              >
                {[
                  {
                    name: "Priya Sharma",
                    role: "Event Manager",
                    text: "Outstanding service for our corporate event. The food was delicious and perfectly presented!",
                    rating: 5,
                  },
                  {
                    name: "Raj Patel",
                    role: "Wedding Planner",
                    text: "BON Kitchen made our wedding reception unforgettable. Authentic flavors and professional service.",
                    rating: 5,
                  },
                  {
                    name: "Anita Kumar",
                    role: "HR Manager",
                    text: "We use BON Kitchen for all our office events. Consistent quality and on-time delivery every time.",
                    rating: 5,
                  },
                  // Duplicate for seamless loop
                  {
                    name: "Priya Sharma",
                    role: "Event Manager",
                    text: "Outstanding service for our corporate event. The food was delicious and perfectly presented!",
                    rating: 5,
                  },
                  {
                    name: "Raj Patel",
                    role: "Wedding Planner",
                    text: "BON Kitchen made our wedding reception unforgettable. Authentic flavors and professional service.",
                    rating: 5,
                  },
                  {
                    name: "Anita Kumar",
                    role: "HR Manager",
                    text: "We use BON Kitchen for all our office events. Consistent quality and on-time delivery every time.",
                    rating: 5,
                  },
                ].map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 shadow-sm border border-gray-100 min-w-[280px] flex-shrink-0"
                  >
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="text-yellow-500"
                          size={14}
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm mb-3 italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact & Quote */}
        <section
          id="contact"
          className="py-12 lg:py-16 bg-gradient-to-br from-orange-500 to-orange-600"
        >
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Get Your Free Quote"
              subtitle="Ready to make your event unforgettable?"
            />

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-white">
                  <h3 className="text-lg font-bold mb-4">
                    Contact Information
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="mr-3 flex-shrink-0" size={18} />
                      <div>
                        <p className="font-semibold text-sm">Call Us</p>
                        <p className="text-orange-200 text-sm">
                          +91 98765 43210
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Mail className="mr-3 flex-shrink-0" size={18} />
                      <div>
                        <p className="font-semibold text-sm">Email Us</p>
                        <p className="text-orange-200 text-sm">
                          catering@bonkitchen.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Clock className="mr-3 flex-shrink-0" size={18} />
                      <div>
                        <p className="font-semibold text-sm">Service Hours</p>
                        <p className="text-orange-200 text-sm">
                          Mon-Sun: 6:00 AM - 11:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl p-5">
                  <div className="text-center mb-4">
                    <Quote className="text-orange-500 mx-auto mb-2" size={24} />
                    <h4 className="text-lg font-bold text-gray-800 mb-1">
                      Free Tasting Available
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Complimentary tasting for orders above ₹5,000
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <CustomButton
                      variant="primary"
                      icon={Phone}
                      iconPosition="left"
                      onClick={() =>
                        window.open("https://wa.me/8076507512", "_blank")
                      }
                      className="text-sm py-2"
                    >
                      Call Now
                    </CustomButton>
                    <CustomButton
                      variant="whatsapp"
                      onClick={() =>
                        window.open("https://wa.me/8076507512", "_blank")
                      }
                      className="text-sm py-2"
                    >
                      WhatsApp
                    </CustomButton>
                  </div>

                  <CustomButton
                    variant="ghost"
                    fullWidth
                    icon={Mail}
                    iconPosition="left"
                    onClick={() =>
                      window.open("mailto:catering@bonkitchen.com", "_blank")
                    }
                    className="text-sm py-2"
                  >
                    Send Email
                  </CustomButton>
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
