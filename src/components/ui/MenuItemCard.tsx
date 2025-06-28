import { motion } from "framer-motion";
import { Star, Plus, Minus, Heart } from "lucide-react";
import CustomButton from "./CustomButton";
import CustomBadge from "./CustomBadge";

interface MenuItemCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  emoji: string;
  isVeg: boolean;
  isSpicy: boolean;
  isPopular?: boolean;
  rating: number;
  quantity?: number;
  onAdd: () => void;
  onRemove: () => void;
  onFavorite?: () => void;
  isFavorite?: boolean;
  animationDelay?: number;
}

const MenuItemCard = ({
  name,
  description,
  price,
  originalPrice,
  emoji,
  isVeg,
  isSpicy,
  isPopular,
  rating,
  quantity = 0,
  onAdd,
  onRemove,
  onFavorite,
  isFavorite = false,
  animationDelay = 0,
}: MenuItemCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: animationDelay * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {isPopular && (
        <div className="absolute -top-3 -right-3">
          <CustomBadge variant="popular">Popular</CustomBadge>
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <span className="text-3xl mr-3">{emoji}</span>
          <div>
            <div className="flex items-center mb-1">
              <CustomBadge variant={isVeg ? "veg" : "nonveg"} size="sm">
                {isVeg ? "●" : "●"}
              </CustomBadge>
              {isSpicy && (
                <CustomBadge variant="spicy" size="sm" className="ml-2">
                  🌶️
                </CustomBadge>
              )}
            </div>
            <div className="flex items-center">
              <Star
                className="text-yellow-500 mr-1"
                size={14}
                fill="currentColor"
              />
              <span className="text-sm text-gray-600">{rating}</span>
            </div>
          </div>
        </div>

        <div className="text-right">
          <div className="text-xl font-bold text-orange-500">₹{price}</div>
          {originalPrice && (
            <div className="text-sm text-gray-400 line-through">
              ₹{originalPrice}
            </div>
          )}
        </div>
      </div>

      <h3 className="text-lg font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

      <div className="flex items-center justify-between">
        {quantity > 0 ? (
          <div className="flex items-center bg-orange-500 rounded-full">
            <button
              onClick={onRemove}
              className="p-2 text-white hover:bg-orange-600 rounded-full transition-colors"
            >
              <Minus size={16} />
            </button>
            <span className="px-4 py-2 text-white font-bold min-w-[50px] text-center">
              {quantity}
            </span>
            <button
              onClick={onAdd}
              className="p-2 text-white hover:bg-orange-600 rounded-full transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
        ) : (
          <CustomButton
            variant="primary"
            icon={Plus}
            iconPosition="left"
            onClick={onAdd}
          >
            Add
          </CustomButton>
        )}

        {onFavorite && (
          <button
            onClick={onFavorite}
            className={`p-2 transition-colors ${
              isFavorite ? "text-red-500" : "text-gray-400 hover:text-red-500"
            }`}
          >
            <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default MenuItemCard;
