import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X, ChefHat, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface NavigationItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface CustomSidebarProps {
  title: string;
  subtitle?: string;
  navigationItems: NavigationItem[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  children?: React.ReactNode;
  showBackButton?: boolean;
}

const CustomSidebar = ({
  title,
  subtitle,
  navigationItems,
  activeSection,
  onSectionClick,
  children,
  showBackButton = true,
}: CustomSidebarProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const navigate = useNavigate();

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setSidebarOpen(false);
  };

  const shouldShowExpanded = isPinned || isHovered;

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden bg-gradient-to-r from-white to-orange-50 shadow-md px-4 py-3 flex items-center justify-between sticky top-0 z-40 border-b border-orange-100">
        <div className="flex items-center">
          <motion.div
            className="p-1.5 rounded-lg bg-orange-100 mr-3"
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            <ChefHat className="text-orange-600" size={20} />
          </motion.div>
          <span className="font-bold text-gray-800">{title}</span>
        </div>
        <motion.button
          onClick={() => setSidebarOpen(true)}
          className="p-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg shadow-orange-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MenuIcon size={18} />
        </motion.button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-white to-orange-50 shadow-2xl z-50 lg:hidden overflow-y-auto"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
            >
              <div className="p-4 border-b border-orange-100 flex items-center justify-between bg-white/80 backdrop-blur-sm">
                <div className="flex items-center">
                  <motion.div
                    className="p-2 rounded-xl bg-orange-100 mr-3"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <ChefHat className="text-orange-600" size={20} />
                  </motion.div>
                  <div>
                    <motion.span
                      className="font-bold text-gray-800 block"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {title}
                    </motion.span>
                    {subtitle && (
                      <motion.span
                        className="text-sm text-orange-600 font-medium"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {subtitle}
                      </motion.span>
                    )}
                  </div>
                </div>
                <motion.button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 rounded-xl hover:bg-orange-100 transition-colors text-gray-600 hover:text-orange-600"
                  whileHover={{ scale: 1.05, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={18} />
                </motion.button>
              </div>

              {children && (
                <motion.div
                  className="p-4 border-b border-orange-100 bg-gradient-to-r from-orange-50 to-yellow-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {children}
                </motion.div>
              )}

              <nav className="p-4">
                {navigationItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => handleSectionClick(item.id)}
                      className={`w-full flex items-center p-3 rounded-xl mb-2 text-left transition-all duration-300 ${
                        activeSection === item.id
                          ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-200"
                          : "hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 text-gray-700 hover:text-orange-700"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon size={18} className="mr-3 flex-shrink-0" />
                      <span className="font-semibold">{item.label}</span>
                    </motion.button>
                  );
                })}

                {showBackButton && (
                  <motion.div
                    className="mt-6 pt-4 border-t border-orange-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.button
                      onClick={() => navigate("/")}
                      className="w-full flex items-center p-3 rounded-xl text-left transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 text-gray-600 hover:text-gray-800"
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Home size={18} className="mr-3 text-gray-500" />
                      <span className="font-medium">Back to Home</span>
                    </motion.button>
                  </motion.div>
                )}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Enhanced Desktop Sidebar */}
      <motion.div
        className="hidden lg:block fixed left-0 top-0 h-full bg-gradient-to-b from-white to-orange-50 shadow-xl z-30 overflow-visible border-r border-orange-100"
        initial={{ width: 80 }}
        animate={{ width: shouldShowExpanded ? 320 : 80 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Pin/Unpin Button */}
        <motion.button
          onClick={() => setIsPinned(!isPinned)}
          className={`absolute top-4 right-3 p-2 rounded-full transition-all duration-300 z-10 shadow-md ${
            isPinned
              ? "bg-orange-500 text-white shadow-orange-200"
              : "bg-white text-gray-600 hover:bg-orange-100 hover:text-orange-600 border border-gray-200"
          }`}
          style={{ opacity: shouldShowExpanded ? 1 : 0 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: isPinned ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm"
          >
            📌
          </motion.div>
        </motion.button>

        {/* Header */}
        <div className="p-4 border-b border-orange-100 relative bg-white/70 backdrop-blur-sm">
          <div className="flex items-center">
            <motion.div
              className="flex-shrink-0 p-2 rounded-xl bg-orange-100"
              animate={{
                marginRight: shouldShowExpanded ? 12 : 0,
                scale: shouldShowExpanded ? 1 : 1.1,
              }}
              transition={{ duration: 0.3 }}
              whileHover={{
                scale: shouldShowExpanded ? 1.05 : 1.15,
                rotate: 5,
              }}
            >
              <ChefHat
                className="text-orange-600"
                size={shouldShowExpanded ? 24 : 20}
              />
            </motion.div>

            <AnimatePresence>
              {shouldShowExpanded && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="overflow-hidden"
                >
                  <motion.span
                    className="font-bold text-xl text-gray-800 block whitespace-nowrap"
                    initial={{ y: 10 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {title}
                  </motion.span>
                  {subtitle && (
                    <motion.p
                      className="text-orange-600 text-sm mt-1 whitespace-nowrap font-medium"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {subtitle}
                    </motion.p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Children Section (like rewards) */}
        <AnimatePresence>
          {children && shouldShowExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="border-b border-orange-100 bg-gradient-to-r from-orange-50 to-yellow-50 overflow-hidden"
            >
              <motion.div
                className="p-4"
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.25 }}
              >
                {children}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <nav className="p-4 flex-1 overflow-y-auto">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.1 }}
              >
                <motion.button
                  onClick={() => onSectionClick(item.id)}
                  className={`w-full flex items-center rounded-xl mb-3 text-left transition-all duration-300 relative group overflow-hidden ${
                    isActive
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-200"
                      : "hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 text-gray-700 hover:text-orange-700"
                  }`}
                  style={{
                    padding: shouldShowExpanded ? "14px 16px" : "14px",
                    justifyContent: shouldShowExpanded
                      ? "flex-start"
                      : "center",
                  }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: isActive
                      ? "0 12px 30px rgba(249, 115, 22, 0.4)"
                      : "0 6px 20px rgba(249, 115, 22, 0.15)",
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  <motion.div
                    className={`flex-shrink-0 ${
                      isActive ? "text-white" : "text-orange-500"
                    }`}
                    whileHover={{ scale: 1.1, rotate: isActive ? 0 : 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon
                      size={20}
                      className={shouldShowExpanded ? "mr-3" : ""}
                    />
                  </motion.div>

                  <AnimatePresence>
                    {shouldShowExpanded && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="whitespace-nowrap font-semibold flex-1"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>

                  {/* Tooltip for collapsed state */}
                  {!shouldShowExpanded && (
                    <motion.div
                      className="absolute left-full ml-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-50 pointer-events-none"
                      style={{ top: "50%", transform: "translateY(-50%)" }}
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      {item.label}
                      <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
                    </motion.div>
                  )}
                </motion.button>
              </motion.div>
            );
          })}

          {/* Back Button */}
          {showBackButton && (
            <AnimatePresence>
              {shouldShowExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 pt-6 border-t border-orange-100"
                >
                  <motion.button
                    onClick={() => navigate("/")}
                    className="w-full flex items-center p-3 rounded-xl text-left transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 text-gray-600 hover:text-gray-800 group"
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      whileHover={{ x: -3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Home
                        size={18}
                        className="mr-3 text-gray-500 group-hover:text-orange-500"
                      />
                    </motion.div>
                    <span className="font-medium">Back to Home</span>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </nav>

        {/* Expand hint for collapsed state */}
        {!shouldShowExpanded && !isHovered && (
          <motion.div
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-orange-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="text-xs font-medium mb-1"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Hover
            </motion.div>
            <motion.div
              className="text-lg"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default CustomSidebar;
