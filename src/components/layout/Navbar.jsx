import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronDown, Bell, Phone } from 'lucide-react';
import { navItems } from '../../data/navigation';
import MegaMenu from './MegaMenu';
import MobileDrawer from './MobileDrawer';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const menuRef = useRef(null);
  const timerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [location]);

  const handleMenuEnter = (label) => {
    clearTimeout(timerRef.current);
    setActiveMenu(label);
  };

  const handleMenuLeave = () => {
    timerRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-dark-950 border-b border-white/5 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <span className="text-dark-400 text-xs flex items-center gap-1">
              <Phone size={11} />
              +91-20-2904-2000
            </span>
            <span className="text-dark-400 text-xs">
              registrar@iiitp.ac.in
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://placements.iiitp.ac.in" target="_blank" rel="noopener noreferrer"
              className="text-xs text-brand-400 hover:text-brand-300 font-medium transition-colors">
              Placements Portal ↗
            </a>
            <a href="https://sites.google.com/iiitp.ac.in/library" target="_blank" rel="noopener noreferrer"
              className="text-xs text-dark-400 hover:text-white transition-colors">
              Library
            </a>
            <a href="#" className="text-xs text-dark-400 hover:text-white transition-colors">
              IRINS
            </a>
            <a href="#" className="text-xs text-dark-400 hover:text-white transition-colors">
              RTI
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-dark-950/95 backdrop-blur-lg shadow-card border-b border-white/10'
            : 'bg-dark-950/90 backdrop-blur-md border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-700 to-brand-900 flex items-center justify-center shadow-glow group-hover:shadow-none transition-shadow">
                <span className="text-white font-black text-sm">IIITPune</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-display font-bold text-white text-sm leading-tight">IIIT Pune</div>
                <div className="text-dark-400 text-[10px] leading-tight">Indian Institute of Information Technology</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              ref={menuRef}
              className="hidden lg:flex items-center gap-0.5"
              onMouseLeave={handleMenuLeave}
            >
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMenuEnter(item.label)}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                      location.pathname.startsWith(item.href)
                        ? 'text-white bg-white/8'
                        : 'text-dark-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                    {item.megaMenu && (
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${activeMenu === item.label ? 'rotate-180' : ''}`}
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {activeMenu === item.label && item.megaMenu && (
                      <MegaMenu
                        menu={item.megaMenu}
                        onMouseEnter={() => handleMenuEnter(item.label)}
                        onMouseLeave={handleMenuLeave}
                      />
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Placements link */}
              <Link
                to="/placements"
                className="ml-1 px-3 py-2 rounded-lg text-sm font-semibold text-brand-400 hover:text-brand-300 hover:bg-brand-950/50 transition-all duration-150"
              >
                Placements
              </Link>
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <div className="relative">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-2 rounded-lg text-dark-400 hover:text-white hover:bg-white/5 transition-all"
                >
                  <Search size={17} />
                </button>
                <AnimatePresence>
                  {searchOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -5 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -5 }}
                      className="absolute right-0 top-10 w-72 glass-card p-2 shadow-card-hover"
                    >
                      <input
                        autoFocus
                        type="search"
                        placeholder="Search IIIT Pune..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="input-glass w-full text-sm"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Notices bell */}
              <Link
                to="/notices"
                className="relative p-2 rounded-lg text-dark-400 hover:text-white hover:bg-white/5 transition-all"
              >
                <Bell size={17} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-500 rounded-full animate-pulse-slow" />
              </Link>

              {/* Apply Now CTA */}
              <a
                href="https://josaa.ntaonline.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex btn-primary text-xs px-4 py-2"
              >
                Apply Now
              </a>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-dark-300 hover:text-white hover:bg-white/5 transition-all"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
