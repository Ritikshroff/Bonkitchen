import { Badge } from "flowbite-react";
import type { LucideIcon } from "lucide-react";

interface CustomBadgeProps {
  children: React.ReactNode;
  variant?:
    | "success"
    | "warning"
    | "error"
    | "info"
    | "veg"
    | "nonveg"
    | "spicy"
    | "popular";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  className?: string;
}

const CustomBadge = ({
  children,
  variant = "info",
  size = "md",
  icon: Icon,
  className = "",
}: CustomBadgeProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return "bg-green-100 text-green-800 border border-green-200";
      case "warning":
        return "bg-yellow-100 text-yellow-800 border border-yellow-200";
      case "error":
        return "bg-red-100 text-red-800 border border-red-200";
      case "veg":
        return "bg-green-100 text-green-800 border-2 border-green-500";
      case "nonveg":
        return "bg-red-100 text-red-800 border-2 border-red-500";
      case "spicy":
        return "bg-orange-100 text-orange-800 border border-orange-200";
      case "popular":
        return "bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0";
      default:
        return "bg-gray-100 text-gray-800 border border-gray-200";
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return "text-xs px-2 py-1";
      case "lg":
        return "text-sm px-4 py-2";
      default:
        return "text-xs px-3 py-1.5";
    }
  };

  const combinedClassName = `${getVariantStyles()} ${getSizeStyles()} ${className} rounded-full font-bold flex items-center gap-1`;

  return (
    <Badge className={combinedClassName}>
      {Icon && <Icon size={12} />}
      {children}
    </Badge>
  );
};

export default CustomBadge;
