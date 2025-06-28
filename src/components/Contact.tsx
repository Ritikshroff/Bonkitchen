import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Button } from "flowbite-react";

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const locations = [
    {
      name: "Central Kitchen - Mumbai",
      address:
        "Shop 15, Ground Floor, Sunshine Plaza, Andheri West, Mumbai - 400058",
      phone: "+91 98765 43210",
      hours: "10:00 AM - 11:00 PM",
      deliveryRadius: "15 km radius",
    },
    {
      name: "BON Kitchen - Delhi",
      address:
        "Unit 23, Food Court Complex, Connaught Place, New Delhi - 110001",
      phone: "+91 98765 43211",
      hours: "11:00 AM - 12:00 AM",
      deliveryRadius: "20 km radius",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-4">
            <MapPin className="text-orange-500 mr-3" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold">
              Find Us & Get in Touch
            </h2>
            <MapPin className="text-orange-500 ml-3" size={32} />
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Visit our kitchens or get your favorite combos delivered fresh to
            your doorstep! 🚚
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-orange-400">
              Our Locations
            </h3>

            {locations.map((location, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 rounded-xl p-6 mb-6 hover:bg-gray-600 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <h4 className="text-xl font-bold text-orange-300 mb-4">
                  {location.name}
                </h4>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin
                      className="text-orange-500 mr-3 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <p className="text-gray-300">{location.address}</p>
                  </div>

                  <div className="flex items-center">
                    <Phone className="text-green-500 mr-3" size={18} />
                    <a
                      href={`tel:${location.phone}`}
                      className="text-green-400 hover:text-green-300"
                    >
                      {location.phone}
                    </a>
                  </div>

                  <div className="flex items-center">
                    <Clock className="text-blue-500 mr-3" size={18} />
                    <p className="text-gray-300">{location.hours}</p>
                  </div>

                  <div className="bg-orange-900/30 rounded-lg p-3 mt-4">
                    <p className="text-orange-300 text-sm">
                      🚚 <strong>Delivery Area:</strong>{" "}
                      {location.deliveryRadius}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Contact & WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-orange-400">
              Quick Contact
            </h3>

            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 mb-8">
              <div className="text-center">
                <div className="text-6xl mb-4">📱</div>
                <h4 className="text-2xl font-bold mb-4">Order via WhatsApp</h4>
                <p className="text-green-100 mb-6">
                  Fastest way to order! Chat with us directly and get instant
                  responses.
                </p>

                <Button
                  size="xl"
                  className="bg-white text-green-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-full w-full mb-4"
                  onClick={() =>
                    window.open(
                      "https://wa.me/8076507512?text=Hi! I want to place an order",
                      "_blank"
                    )
                  }
                >
                  💬 Chat & Order Now
                </Button>

                <p className="text-sm text-green-200">
                  Available 10 AM - 11 PM | Average response time: 2 minutes
                </p>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-700 rounded-xl p-6 text-center">
                <Phone className="text-blue-500 mx-auto mb-3" size={32} />
                <h5 className="font-bold mb-2">Call Us</h5>
                <a
                  href="tel:+8076507512"
                  className="text-blue-400 hover:text-blue-300"
                >
                  +91 98765 43210
                </a>
              </div>

              <div className="bg-gray-700 rounded-xl p-6 text-center">
                <Mail className="text-purple-500 mx-auto mb-3" size={32} />
                <h5 className="font-bold mb-2">Email</h5>
                <a
                  href="mailto:hello@bonkitchen.com"
                  className="text-purple-400 hover:text-purple-300"
                >
                  hello@bonkitchen.com
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-700 rounded-xl p-6">
              <h5 className="font-bold text-orange-300 mb-4 flex items-center">
                <Clock className="mr-2" size={20} />
                Delivery Hours
              </h5>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="text-green-400">10:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday:</span>
                  <span className="text-green-400">10:00 AM - 12:00 AM</span>
                </div>
                <div className="border-t border-gray-600 pt-2 mt-3">
                  <p className="text-orange-300">
                    🎉 <strong>Weekend Special:</strong> Extended hours for
                    party orders!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Delivery Info */}
        <motion.div
          className="mt-16 text-center bg-orange-900/20 rounded-2xl p-8 border border-orange-500/30"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <h4 className="text-2xl font-bold text-orange-400 mb-4">
            Delivery Information
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🚚</div>
              <h5 className="font-bold mb-2">Free Delivery</h5>
              <p className="text-gray-300 text-sm">On orders above ₹299</p>
            </div>

            <div>
              <div className="text-3xl mb-2">⏱️</div>
              <h5 className="font-bold mb-2">Quick Delivery</h5>
              <p className="text-gray-300 text-sm">Average 25-30 minutes</p>
            </div>

            <div>
              <div className="text-3xl mb-2">💳</div>
              <h5 className="font-bold mb-2">Payment Options</h5>
              <p className="text-gray-300 text-sm">Cash, UPI, Cards accepted</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
