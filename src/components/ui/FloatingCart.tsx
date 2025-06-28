import { motion } from "framer-motion";
import { ShoppingCart, Phone, Truck, Minus } from "lucide-react";
import { useState } from "react";
import CustomButton from "./CustomButton";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface FloatingCartProps {
  cart: CartItem[];
  total: number;
  onWhatsAppOrder: () => void;
  onCheckout: () => void;
  minDeliveryAmount?: number;
}

const FloatingCart = ({
  cart,
  total,
  onWhatsAppOrder,
  onCheckout,
  minDeliveryAmount = 299,
}: FloatingCartProps) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const isDeliveryFree = total >= minDeliveryAmount;

  if (cart.length === 0) return null;

  return (
    <motion.div
      className="fixed bottom-4 right-4 bg-white rounded-2xl shadow-2xl z-40 max-w-sm border border-orange-200"
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 100, scale: 0.8 }}
      transition={{ type: "spring", damping: 20 }}
    >
      {isMinimized ? (
        // Minimized view
        <motion.div
          className="p-3 cursor-pointer"
          onClick={() => setIsMinimized(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ShoppingCart className="text-orange-500 mr-2" size={20} />
              <span className="font-bold text-gray-800">
                {totalItems} item{totalItems !== 1 ? "s" : ""}
              </span>
            </div>
            <span className="text-lg font-bold text-orange-500">₹{total}</span>
          </div>
        </motion.div>
      ) : (
        // Expanded view
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <ShoppingCart className="text-orange-500 mr-2" size={20} />
              <h3 className="font-bold text-lg text-gray-800">Your Order</h3>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                {totalItems} item{totalItems !== 1 ? "s" : ""}
              </div>
              <button
                onClick={() => setIsMinimized(true)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
                title="Minimize cart"
              >
                <Minus size={16} />
              </button>
            </div>
          </div>

          {/* Cart Items */}
          <div className="max-h-40 overflow-y-auto mb-3 space-y-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
              >
                <div className="flex-1">
                  <span className="text-sm font-medium text-gray-800 block truncate">
                    {item.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    ₹{item.price} × {item.quantity}
                  </span>
                </div>
                <span className="text-sm font-bold text-orange-500 ml-2">
                  ₹{item.price * item.quantity}
                </span>
              </div>
            ))}
          </div>

          {/* Delivery Status */}
          {!isDeliveryFree && (
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-3">
              <div className="flex items-center text-orange-600">
                <Truck size={16} className="mr-2" />
                <span className="text-sm">
                  Add ₹{minDeliveryAmount - total} more for free delivery
                </span>
              </div>
              <div className="mt-2 bg-orange-200 rounded-full h-2">
                <div
                  className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${Math.min(
                      (total / minDeliveryAmount) * 100,
                      100
                    )}%`,
                  }}
                />
              </div>
            </div>
          )}

          {isDeliveryFree && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
              <div className="flex items-center text-green-600">
                <Truck size={16} className="mr-2" />
                <span className="text-sm font-medium">
                  🎉 Free delivery unlocked!
                </span>
              </div>
            </div>
          )}

          {/* Total */}
          <div className="border-t border-gray-200 pt-3 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-800">Total:</span>
              <span className="text-xl font-bold text-orange-500">
                ₹{total}
              </span>
            </div>
            {!isDeliveryFree && (
              <p className="text-xs text-gray-500 mt-1">+ delivery charges</p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <CustomButton
              variant="whatsapp"
              icon={Phone}
              iconPosition="left"
              onClick={onWhatsAppOrder}
              className="text-sm py-2"
            >
              WhatsApp
            </CustomButton>
            <CustomButton
              variant="primary"
              icon={ShoppingCart}
              iconPosition="left"
              onClick={onCheckout}
              className="text-sm py-2"
            >
              Order Now
            </CustomButton>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default FloatingCart;
