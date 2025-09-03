import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { ShieldIcon, SunIcon, MoonIcon, MenuIcon, CloseIcon } from '../Icons';
import { motion, AnimatePresence } from 'framer-motion';
import { button } from '@/styles/recipes/button';

const Navbar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: '홈' },
    { path: '/security', label: '보안' },
    { path: '/product', label: '제품' },
    { path: '/download', label: '다운로드' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-200 ${
      isScrolled 
        ? 'bg-surface-light-200 dark:bg-surface-dark-300 shadow-discord-lg' 
        : 'bg-surface-light-200/50 dark:bg-surface-dark-300/95 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 group">
              <img src="/compass.png" alt="Logo" className="w-16 h-16" />

            <span className="text-lg font-bold text-text-light dark:text-white">
              Compass
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-discord transition-all duration-150 ${
                  location.pathname === link.path
                    ? 'text-brand bg-brand/10 dark:bg-brand/20'
                    : 'text-text-light dark:text-text-secondary hover:text-text-light dark:hover:text-white hover:bg-surface-light-300 dark:hover:bg-surface-dark-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-discord transition-all duration-150 hover:bg-surface-light-300 dark:hover:bg-surface-dark-100"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <SunIcon size={20} className="text-text-muted hover:text-brand transition-colors" />
              ) : (
                <MoonIcon size={20} className="text-text-muted hover:text-brand transition-colors" />
              )}
            </button>

            <Link
              to="/download"
              className={button({intent:"primary"}).root()}
            >
              시작하기
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-discord transition-all duration-150 hover:bg-surface-light-300 dark:hover:bg-surface-dark-100"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <CloseIcon size={24} className="text-text-light dark:text-text-primary" />
              ) : (
                <MenuIcon size={24} className="text-text-light dark:text-text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface-light-100 dark:bg-surface-dark-200 border-t border-surface-light-300 dark:border-surface-dark-100"
          >
            <div className="container mx-auto px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 px-4 rounded-discord transition-all duration-150 ${
                    location.pathname === link.path
                      ? 'bg-brand/10 dark:bg-brand/20 text-brand font-medium'
                      : 'text-text-light dark:text-text-secondary hover:bg-surface-light-300 dark:hover:bg-surface-dark-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/download"
                onClick={() => setIsMobileMenuOpen(false)}
                className={button({intent:"primary", block:true}).root()}
              >
                시작하기
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;