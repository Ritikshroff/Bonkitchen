import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  centered?: boolean;
  animate?: boolean;
  className?: string;
}

const SectionHeader = ({
  title,
  subtitle,
  icon: Icon,
  centered = true,
  animate = true,
  className = "",
}: SectionHeaderProps) => {
  const content = (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {Icon && (
        <div
          className={`flex items-center ${
            centered ? "justify-center" : ""
          } mb-4`}
        >
          <Icon className="text-orange-500 mr-3" size={32} />
          <div className="w-12 h-0.5 bg-orange-500"></div>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 lg:mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 lg:mb-16"
      >
        {content}
      </motion.div>
    );
  }

  return <div className="mb-12 lg:mb-16">{content}</div>;
};

export default SectionHeader;
