import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Sunglasses', href: '/category/sunglasses' },
    { label: 'Reading', href: '/category/reading' },
    { label: 'Computer', href: '/category/computer' },
    { label: 'Sports', href: '/category/sports' },
  ];

  return (
    <nav
      data-testid="navbar"
      className="sticky top-0 z-50 backdrop-blur-xl bg-[#FBFBF9]/80 border-b border-[rgba(26,26,26,0.08)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" data-testid="nav-logo" className="flex items-center gap-2">
          <span
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Monika <span className="text-[#967C55]">Opticals</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
              className={`text-sm font-medium transition-colors duration-300 ${
                location.pathname === link.href
                  ? 'text-[#967C55]'
                  : 'text-[#5A5A5A] hover:text-[#1A1A1A]'
              }`}
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+918109204075"
            data-testid="nav-phone-btn"
            className="flex items-center gap-2 text-sm text-[#5A5A5A] hover:text-[#967C55] transition-colors"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <Phone className="w-4 h-4" />
            +91 8109204075
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          data-testid="mobile-menu-toggle"
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FBFBF9] border-b border-[rgba(26,26,26,0.08)] overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                  className={`block text-sm font-medium py-2 ${
                    location.pathname === link.href
                      ? 'text-[#967C55]'
                      : 'text-[#5A5A5A]'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+918109204075"
                className="flex items-center gap-2 text-sm text-[#967C55] font-semibold py-2"
              >
                <Phone className="w-4 h-4" />
                +91 8109204075
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
