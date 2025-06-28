import { Card } from "flowbite-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface CustomCardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  icon?: LucideIcon;
  iconColor?: string;
  variant?: "default" | "gradient" | "outlined" | "glass";
  hoverable?: boolean;
  animate?: boolean;
  className?: string;
  onClick?: () => void;
}

const CustomCard = ({
  children,
  title,
  subtitle,
  icon: Icon,
  iconColor = "text-orange-500",
  variant = "default",
  hoverable = true,
  animate = true,
  className = "",
  onClick,
}: CustomCardProps) => {
  const getVariantStyles = () => {
    const baseStyles = "transition-all duration-300";

    switch (variant) {
      case "gradient":
        return `${baseStyles} bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0`;
      case "outlined":
        return `${baseStyles} bg-white border-2 border-orange-200 hover:border-orange-300`;
      case "glass":
        return `${baseStyles} bg-white/10 backdrop-blur-sm border border-white/20`;
      default:
        return `${baseStyles} bg-white shadow-lg ${
          hoverable ? "hover:shadow-xl" : ""
        }`;
    }
  };

  const cardContent = (
    <div className="p-6">
      {(title || subtitle || Icon) && (
        <div className="mb-4">
          {Icon && (
            <div className="flex justify-center mb-4">
              <Icon className={iconColor} size={32} />
            </div>
          )}
          {title && (
            <h3
              className={`text-xl font-bold mb-2 ${
                variant === "gradient" ? "text-white" : "text-gray-800"
              }`}
            >
              {title}
            </h3>
          )}
          {subtitle && (
            <p
              className={`text-sm ${
                variant === "gradient" ? "text-orange-100" : "text-gray-600"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </div>
  );

  const combinedClassName = `${getVariantStyles()} ${className} ${
    onClick ? "cursor-pointer" : ""
  }`;

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={hoverable ? { y: -5 } : {}}
        onClick={onClick}
      >
        <Card className={combinedClassName}>{cardContent}</Card>
      </motion.div>
    );
  }

  return (
    <Card className={combinedClassName} onClick={onClick}>
      {cardContent}
    </Card>
  );
};

export default CustomCard;
