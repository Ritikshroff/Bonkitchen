import { Button } from "flowbite-react";
import { motion } from "framer-motion";
import type { ButtonProps } from "flowbite-react";
import type { LucideIcon } from "lucide-react";

interface CustomButtonProps extends Omit<ButtonProps, "children"> {
  children: React.ReactNode;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  variant?: "primary" | "secondary" | "ghost" | "gradient" | "whatsapp";
  animate?: boolean;
  fullWidth?: boolean;
}

const CustomButton = ({
  children,
  icon: Icon,
  iconPosition = "left",
  variant = "primary",
  animate = true,
  fullWidth = false,
  className = "",
  ...props
}: CustomButtonProps) => {
  const getVariantStyles = () => {
    const baseStyles =
      "font-bold rounded-full transition-all duration-300 transform";

    switch (variant) {
      case "primary":
        return `${baseStyles} bg-orange-500 hover:bg-orange-600 text-white hover:scale-105 shadow-lg hover:shadow-xl`;
      case "secondary":
        return `${baseStyles} bg-white text-orange-500 border-2 border-orange-500 hover:bg-orange-50 hover:scale-105 shadow-lg`;
      case "ghost":
        return `${baseStyles} bg-transparent text-gray-700 hover:bg-gray-100 border border-gray-300`;
      case "gradient":
        return `${baseStyles} bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white hover:scale-105 shadow-lg`;
      case "whatsapp":
        return `${baseStyles} bg-green-500 hover:bg-green-600 text-white hover:scale-105 shadow-lg`;
      default:
        return baseStyles;
    }
  };

  const buttonContent = (
    <div
      className={`flex items-center justify-center gap-2 ${
        fullWidth ? "w-full" : ""
      }`}
    >
      {Icon && iconPosition === "left" && <Icon size={18} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={18} />}
    </div>
  );

  const combinedClassName = `${getVariantStyles()} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  if (animate) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={fullWidth ? "w-full" : "inline-block"}
      >
        <Button className={combinedClassName} {...props}>
          {buttonContent}
        </Button>
      </motion.div>
    );
  }

  return (
    <Button className={combinedClassName} {...props}>
      {buttonContent}
    </Button>
  );
};

export default CustomButton;
