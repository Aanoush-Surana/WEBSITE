import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronDown, Bell, Phone } from 'lucide-react';
import { navItems } from '../../data/navigation';
import MegaMenu from './MegaMenu';
import MobileDrawer from './MobileDrawer';
import Logo from '../shared/Logo';

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
      <div className="bg-dark-800 border-b border-dark-700 hidden lg:block">
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
              className="text-xs text-brand-700 hover:text-brand-600 font-semibold transition-colors">
              Placements Portal ↗
            </a>
            <a href="https://sites.google.com/iiitp.ac.in/library" target="_blank" rel="noopener noreferrer"
              className="text-xs text-dark-400 hover:text-brand-700 transition-colors">
              Library
            </a>
            <a href="#" className="text-xs text-dark-400 hover:text-brand-700 transition-colors">
              IRINS
            </a>
            <a href="#" className="text-xs text-dark-400 hover:text-brand-700 transition-colors">
              RTI
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-dark-900 border-b border-dark-700 shadow-sm'
            : 'bg-dark-900/90 border-b border-dark-700/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
              <Logo className="w-9 h-9 group-hover:scale-105 transition-transform duration-200" />
              <div className="hidden sm:block leading-none">
                <div className="font-display font-bold text-dark-100 text-base tracking-tight">
                  IIIT Pune
                </div>
                <div className="hidden xl:block text-dark-500 text-[9px] font-medium tracking-wide mt-0.5">
                  Indian Institute of Information Technology
                </div>
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
                        ? 'text-brand-700 bg-brand-50/70 font-semibold'
                        : 'text-dark-300 hover:text-brand-700 hover:bg-brand-50/30'
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
                        alignRight={item.label === 'Campus Life' || item.label === 'Notices'}
                      />
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Placements link */}
              <Link
                to="/placements"
                className="ml-1 px-3 py-2 rounded-lg text-sm font-semibold text-brand-700 hover:text-brand-600 hover:bg-brand-50 transition-all duration-150"
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
                  className="p-2 rounded-lg text-dark-400 hover:text-brand-700 hover:bg-brand-50/50 transition-all"
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
                className="relative p-2 rounded-lg text-dark-400 hover:text-brand-700 hover:bg-brand-50/50 transition-all"
              >
                <Bell size={17} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-500 rounded-full animate-pulse-slow" />
              </Link>



              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-dark-300 hover:text-brand-700 hover:bg-brand-50/50 transition-all"
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
