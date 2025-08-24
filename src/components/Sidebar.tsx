import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SidebarItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface SidebarProps {
  items: SidebarItem[];
  activeSection?: string;
  onItemClick?: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ items, activeSection, onItemClick }) => {
  const [currentActive, setCurrentActive] = useState<string>(activeSection || items[0]?.id);

  useEffect(() => {
    if (activeSection) {
      setCurrentActive(activeSection);
    }
  }, [activeSection]);

  const handleClick = (id: string) => {
    setCurrentActive(id);
    if (onItemClick) {
      onItemClick(id);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <aside className="sticky top-24 h-fit">
      <div className="card-discord p-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-4">목차</h3>
        <nav className="space-y-1">
          {items.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-discord transition-all duration-150 flex items-center space-x-3 ${
                currentActive === item.id
                  ? 'bg-brand/10 dark:bg-brand/20 text-brand'
                  : 'text-text-light dark:text-text-secondary hover:bg-surface-light-300 dark:hover:bg-surface-dark-100 hover:text-text-light dark:hover:text-white'
              }`}
              whileHover={{ x: currentActive === item.id ? 0 : 4 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.icon && <span className={`flex-shrink-0 ${currentActive === item.id ? 'text-brand' : ''}`}>{item.icon}</span>}
              <span className="text-sm font-medium">{item.label}</span>
              {currentActive === item.id && (
                <motion.div
                  layoutId="sidebar-indicator"
                  className="absolute left-0 w-1 h-8 bg-brand rounded-r"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;