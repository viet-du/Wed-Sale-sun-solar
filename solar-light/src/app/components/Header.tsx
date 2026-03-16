import { Link, useLocation } from 'react-router';
import { ShoppingCart, Sun, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const { getTotalItems } = useCart();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Trang chủ' },
    { path: '/products', label: 'Sản phẩm' },
    { path: '/about', label: 'Về chúng tôi' },
    { path: '/contact', label: 'Liên hệ' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-sm border-b border-slate-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-gradient-to-br from-yellow-400 to-orange-500 p-2.5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Sun className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <div className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">SolarLight</div>
              <div className="text-xs text-slate-500 font-medium">Năng Lượng Xanh</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-xl ${
                  isActive(link.path)
                    ? 'text-orange-600'
                    : 'text-slate-600 hover:text-orange-500'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link
              to="/cart"
              className="relative p-2.5 hover:bg-slate-100 rounded-xl transition-all duration-300 group"
            >
              <ShoppingCart className="w-6 h-6 text-slate-700 group-hover:text-orange-500 transition-colors" />
              {getTotalItems() > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-lg"
                >
                  {getTotalItems()}
                </motion.span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 hover:bg-slate-100 rounded-xl transition-all duration-300"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-700" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-slate-200"
            >
              <div className="py-4 space-y-1">
                {navLinks.map(link => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isActive(link.path)
                        ? 'bg-gradient-to-r from-orange-50 to-yellow-50 text-orange-600'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}