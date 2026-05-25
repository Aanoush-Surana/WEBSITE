import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ExternalLink } from 'lucide-react';
import { navItems } from '../../data/navigation';

export default function MobileDrawer({ open, onClose }) {
  const [expandedItem, setExpandedItem] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleItem = (label) => {
    setExpandedItem(expandedItem === label ? null : label);
    setExpandedSection(null);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-80 bg-dark-950 border-l border-white/10 flex flex-col lg:hidden overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div>
                <div className="font-display font-bold text-white">IIIT Pune</div>
                <div className="text-dark-400 text-xs">Navigation Menu</div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-dark-400 hover:text-white hover:bg-white/5 transition-all"
              >
                <X size={18} />
              </button>
            </div>

            {/* Nav items */}
            <div className="flex-1 overflow-y-auto py-2">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-white/5">
                  {item.megaMenu ? (
                    <>
                      <button
                        onClick={() => toggleItem(item.label)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left text-white font-medium hover:bg-white/5 transition-colors"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={16}
                          className={`text-dark-400 transition-transform duration-200 ${expandedItem === item.label ? 'rotate-180' : ''}`}
                        />
                      </button>

                      <AnimatePresence>
                        {expandedItem === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden bg-dark-900/50"
                          >
                            {item.megaMenu.sections.map((section, sIdx) => (
                              <div key={sIdx} className="pb-2">
                                <button
                                  onClick={() => setExpandedSection(expandedSection === `${item.label}-${sIdx}` ? null : `${item.label}-${sIdx}`)}
                                  className="w-full flex items-center justify-between px-8 py-2.5 text-xs font-bold text-brand-400 uppercase tracking-widest hover:text-brand-300 transition-colors"
                                >
                                  {section.title}
                                  <ChevronDown
                                    size={12}
                                    className={`transition-transform duration-200 ${expandedSection === `${item.label}-${sIdx}` ? 'rotate-180' : ''}`}
                                  />
                                </button>

                                <AnimatePresence>
                                  {expandedSection === `${item.label}-${sIdx}` && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.15 }}
                                      className="overflow-hidden"
                                    >
                                      {section.items.map((link, lIdx) => (
                                        <Link
                                          key={lIdx}
                                          to={link.href}
                                          onClick={onClose}
                                          className="flex items-center gap-3 px-8 py-2.5 text-sm text-dark-300 hover:text-white hover:bg-white/5 transition-all"
                                        >
                                          <div className="w-1.5 h-1.5 rounded-full bg-brand-700 flex-shrink-0" />
                                          {link.label}
                                        </Link>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className="flex items-center px-5 py-4 text-white font-medium hover:bg-white/5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <Link
                to="/placements"
                onClick={onClose}
                className="flex items-center px-5 py-4 text-brand-400 font-semibold hover:bg-brand-950/30 transition-colors border-b border-white/5"
              >
                Placements
              </Link>

              <Link
                to="/contact"
                onClick={onClose}
                className="flex items-center px-5 py-4 text-dark-300 font-medium hover:bg-white/5 transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/10">
              <a
                href="https://josaa.ntaonline.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-sm"
              >
                Apply Now
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
