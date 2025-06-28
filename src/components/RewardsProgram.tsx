import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Trophy, Gift, Star, Zap } from "lucide-react";
import { Button } from "flowbite-react";

const RewardsProgram = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const rewardTiers = [
    {
      name: "Foodie",
      icon: "🍽️",
      requirement: "₹500 spent",
      benefits: [
        "5% cashback",
        "Birthday special",
        "Early access to new combos",
      ],
      color: "from-green-400 to-green-600",
    },
    {
      name: "Connoisseur",
      icon: "⭐",
      requirement: "₹2000 spent",
      benefits: ["10% cashback", "Free delivery", "Exclusive weekend deals"],
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Maharaja",
      icon: "👑",
      requirement: "₹5000 spent",
      benefits: ["15% cashback", "Priority delivery", "Monthly surprise combo"],
      color: "from-purple-400 to-purple-600",
    },
  ];

  const perks = [
    {
      icon: "💰",
      title: "Cashback on Every Order",
      description: "Earn points with every rupee spent and get cashback!",
    },
    {
      icon: "🎁",
      title: "Exclusive Surprises",
      description: "Special birthday treats and anniversary rewards",
    },
    {
      icon: "🚀",
      title: "Priority Benefits",
      description: "Faster delivery and early access to new menu items",
    },
    {
      icon: "👥",
      title: "Refer & Earn",
      description: "Get ₹100 for every friend who joins BON Kitchen family",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Trophy className="text-orange-500 mr-2 md:mr-3" size={24} />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              BON Rewards Club
            </h2>
            <Trophy className="text-orange-500 ml-2 md:ml-3" size={24} />
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 md:px-0">
            Join our loyalty program and unlock amazing rewards! The more you
            order, the more you save! 🎉
          </p>
        </motion.div>

        {/* Reward Tiers */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {rewardTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`bg-gradient-to-br ${tier.color} rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div className="text-center mb-4">
                <div className="text-5xl mb-2">{tier.icon}</div>
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <p className="text-sm opacity-90">{tier.requirement}</p>
              </div>

              <div className="space-y-2">
                {tier.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <Star size={16} className="mr-2 fill-current" />
                    {benefit}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Perks Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div className="text-4xl mb-3">{perk.icon}</div>
              <h4 className="font-bold text-gray-800 mb-2">{perk.title}</h4>
              <p className="text-gray-600 text-sm">{perk.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* How it Works */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            How BON Rewards Works
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="text-orange-500" size={28} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Order Food</h4>
              <p className="text-gray-600 text-sm">
                Place your order and earn 1 point for every ₹10 spent
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Gift className="text-green-500" size={28} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Collect Points</h4>
              <p className="text-gray-600 text-sm">
                Points automatically added to your account after delivery
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="text-blue-500" size={28} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Unlock Tiers</h4>
              <p className="text-gray-600 text-sm">
                Reach spending milestones to unlock better rewards
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Trophy className="text-purple-500" size={28} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Redeem Benefits</h4>
              <p className="text-gray-600 text-sm">
                Use points for discounts or enjoy tier benefits
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Earning Rewards?
            </h3>
            <p className="mb-6 text-orange-100">
              Join thousands of happy customers already saving with BON Rewards!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="xl"
                className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-full"
                onClick={() =>
                  window.open(
                    "https://wa.me/8076507512?text=Hi! I want to join BON Rewards Club",
                    "_blank"
                  )
                }
              >
                🎯 Join BON Rewards Now
              </Button>

              <div className="text-sm text-orange-100">
                📱 Or mention "REWARDS" in your next WhatsApp order
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RewardsProgram;
