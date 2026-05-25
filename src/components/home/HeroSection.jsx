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
        <div className="flex flex-col lg:flex-row gap-6 items-stretch justify-center">
          {/* Left Column: Image (No Cropping) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[250px] sm:h-[340px] md:h-[440px] lg:h-[500px] flex-shrink-0 flex justify-center"
          >
            <div className="relative h-full">
              <img
                src="/college.jpg"
                alt="IIIT Pune Permanent Campus"
                className="w-auto h-full object-contain rounded-3xl border border-dark-700 shadow-card"
              />
              {/* Caption on the image */}
              <div className="absolute bottom-6 left-6 z-10">
                <span className="font-display font-semibold text-[10px] md:text-xs uppercase tracking-widest text-white/95 bg-black/60 px-3 py-1.5 rounded-lg backdrop-blur-xs border border-white/10">
                  IIIT Pune Permanent Campus
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Welcome Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex flex-col justify-center bg-gradient-to-br from-dark-900 to-navy-50 border border-dark-700 rounded-3xl p-6 md:p-8 shadow-card-hover"
          >
            <h1 className="font-display font-black text-lg sm:text-xl lg:text-[17px] xl:text-[21px] text-dark-100 leading-tight mb-4 whitespace-nowrap">
              WELCOME TO <span className="bg-gradient-to-r from-brand-700 to-brand-500 bg-clip-text text-transparent">IIIT Pune</span>
            </h1>
            
            <p className="text-dark-400 text-sm md:text-base leading-relaxed mb-5">
              An Institute of National Importance under the Ministry of Education, Government of India. Discover our academic programs, cutting-edge research initiatives, and vibrant student community.
            </p>
            
            {/* Quick Highlights list to cover vertical space */}
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2 flex-shrink-0" />
                <p className="text-dark-300 text-xs md:text-sm leading-relaxed">
                  <strong>Academic Programs:</strong> B.Tech, M.Tech, and Ph.D. curriculum in CSE & ECE aligned with the latest technology trends.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2 flex-shrink-0" />
                <p className="text-dark-300 text-xs md:text-sm leading-relaxed">
                  <strong>Cutting-Edge Research:</strong> Industry-funded research projects in VLSI, AI/ML, cryptography, and communications.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2 flex-shrink-0" />
                <p className="text-dark-300 text-xs md:text-sm leading-relaxed">
                  <strong>Stellar Placement Record:</strong> Top recruiters include Google, Microsoft, Amazon, NVIDIA, Adobe, and more.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 border-t border-dark-700 pt-5">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-brand-700 uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse-slow" />
                Permanent Campus, Nanoli Talegaon
              </div>
              <div className="text-xs text-dark-500">
                Approved by the Ministry of Education, Govt. of India
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
