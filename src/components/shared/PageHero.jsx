import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function PageHero({ title, subtitle, breadcrumbs = [], tag, children }) {
  return (
    <div className="relative overflow-hidden bg-hero-gradient py-14 md:py-20">
      {/* Orbs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-navy-900/20 rounded-full blur-3xl" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 mb-5 flex-wrap">
            <Link to="/" className="text-dark-400 hover:text-white transition-colors">
              <Home size={13} />
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={12} className="text-dark-600" />
                {crumb.href ? (
                  <Link to={crumb.href} className="text-dark-400 hover:text-white text-xs transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-dark-300 text-xs">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Tag */}
        {tag && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <span className="section-tag">{tag}</span>
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-dark-300 text-lg max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Extra content */}
        {children && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6"
          >
            {children}
          </motion.div>
        )}
      </div>
    </div>
  );
}
