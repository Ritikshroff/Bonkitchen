import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "BON Kitchen ne family dinner ko bilkul perfect banaya! The biryani party pack was absolutely delicious and so convenient. Sab kuch ghar jaisa taste tha! 🏠❤️",
    avatar: "👩‍💼",
    order: "Biryani Party Pack",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    text: "Office lunch problem solve! Their lunch duos are amazing - fresh, tasty, and pocket-friendly. Best part? Delivery hamesha on time! 🕒✅",
    avatar: "👨‍💻",
    order: "Lunch Duo Special",
  },
  {
    id: 3,
    name: "Sneha Patel",
    location: "Pune",
    rating: 5,
    text: "Chinese combo ki craving thi, and BON Kitchen delivered exactly what I wanted! Dragon chicken was fire 🔥 and the noodles were perfectly cooked!",
    avatar: "👩‍🎓",
    order: "Dragon Chicken Combo",
  },
  {
    id: 4,
    name: "Amit Singh",
    location: "Bangalore",
    rating: 5,
    text: "Family meal pack saved our Sunday! 4 logon ke liye perfect quantity, and taste was restaurant quality. Kids loved the gulab jamun! 🍮",
    avatar: "👨‍👩‍👧‍👦",
    order: "Family Feast Pack",
  },
  {
    id: 5,
    name: "Kavya Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "Late night cravings ke liye perfect! Quick delivery, hot food, and the packaging was so good. Paneer tikka combo was absolutely divine! ✨",
    avatar: "👩‍🍳",
    order: "Paneer Tikka Combo",
  },
  {
    id: 6,
    name: "Rohit Jain",
    location: "Chennai",
    rating: 5,
    text: "House party ke liye order kiya tha - everyone was impressed! Quality, quantity, taste - everything was top-notch. Highly recommended! 🎉",
    avatar: "🧑‍🎤",
    order: "Mutton Curry Party Pack",
  },
];

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Quote className="text-orange-500 mr-2 md:mr-3" size={24} />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              What Our Food Lovers Say
            </h2>
            <Quote
              className="text-orange-500 ml-2 md:ml-3 rotate-180"
              size={24}
            />
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 md:px-0">
            Real reviews from real customers who've fallen in love with our
            authentic flavors! 💕
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-100 rounded-bl-full opacity-50"></div>

              {/* Quote icon */}
              <Quote className="text-orange-300 mb-4" size={24} />

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-orange-400 fill-current"
                    size={18}
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Order info */}
              <div className="bg-orange-50 rounded-lg p-3 mb-4">
                <p className="text-sm text-orange-700 font-medium">
                  📦 Ordered: {testimonial.order}
                </p>
              </div>

              {/* Customer info */}
              <div className="flex items-center">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    📍 {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
            <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1 md:mb-2">
              10,000+
            </div>
            <div className="text-gray-600 text-sm md:text-base">
              Happy Customers
            </div>
          </div>
          <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
            <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1 md:mb-2">
              4.8/5
            </div>
            <div className="text-gray-600 text-sm md:text-base">
              Average Rating
            </div>
          </div>
          <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
            <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1 md:mb-2">
              50,000+
            </div>
            <div className="text-gray-600 text-sm md:text-base">
              Orders Delivered
            </div>
          </div>
          <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
            <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1 md:mb-2">
              25 min
            </div>
            <div className="text-gray-600 text-sm md:text-base">
              Avg Delivery Time
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
