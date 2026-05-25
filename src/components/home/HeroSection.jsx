import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

// Animated particle dot for premium design background
function Particle({ style }) {
  return (
    <motion.div
      className="absolute rounded-full bg-brand-700/30"
      style={style}
      animate={{
        y: [0, -30, 0],
        opacity: [0.3, 0.7, 0.3],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: Math.random() * 4 + 4,
        repeat: Infinity,
        delay: Math.random() * 3,
        ease: 'easeInOut',
      }}
    />
  );
}

export default function HeroSection() {
  const particles = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    style: {
      width: Math.random() * 8 + 4 + 'px',
      height: Math.random() * 8 + 4 + 'px',
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
    }
  }));

  return (
    <section className="relative overflow-hidden bg-hero-gradient py-6 lg:py-10">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-navy-900/20 rounded-full blur-3xl" />

      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => <Particle key={p.id} style={p.style} />)}
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-card-hover border border-dark-700 h-[240px] sm:h-[320px] md:h-[480px] lg:h-[520px] w-full bg-dark-800"
        >
          {/* Main campus image */}
          <img
            src="/college.jpg"
            alt="IIIT Pune Permanent Campus"
            className="w-full h-full object-cover object-center"
          />
          
          {/* Bottom gradient overlay for readability */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

          {/* Overlaid details */}
          <div className="absolute bottom-6 left-6 z-10">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-display font-semibold text-xs md:text-sm uppercase tracking-widest text-white/95 drop-shadow-md bg-black/50 px-3.5 py-2 rounded-xl backdrop-blur-xs border border-white/10"
            >
              Indian Institute of Information Technology, Pune
            </motion.h1>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
