import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, FlaskConical, Users, Trophy, TrendingUp, Star, ChevronRight } from 'lucide-react';

const stats = [
  { value: '3,200+', label: 'Students', icon: Users, color: 'text-blue-400' },
  { value: '95%', label: 'Placement Rate', icon: TrendingUp, color: 'text-green-400' },
  { value: '₹52 LPA', label: 'Highest Package', icon: Trophy, color: 'text-yellow-400' },
  { value: '120+', label: 'Research Papers', icon: FlaskConical, color: 'text-brand-400' },
];

// Animated particle dot
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
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    style: {
      width: Math.random() * 8 + 4 + 'px',
      height: Math.random() * 8 + 4 + 'px',
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
    }
  }));

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-hero-gradient">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-900/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-navy-900/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-950/20 rounded-full blur-3xl" />

      {/* Particles */}
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

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="section-tag">
                <Star size={10} />
                Institute of National Importance
              </span>
              <span className="text-xs text-dark-400">Est. 2013</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white leading-[1.08] mb-6"
            >
              Building the{' '}
              <span className="gradient-text">Future</span>
              {' '}of<br />
              Technology &{' '}
              <span className="gradient-text-gold">Innovation</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-dark-300 text-lg leading-relaxed mb-8 max-w-lg"
            >
              IIIT Pune offers world-class B.Tech, M.Tech, and PhD programs in Computer
              Science and Electronics, with industry-leading placements and cutting-edge research.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <a
                href="https://josaa.ntaonline.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Apply Now
                <ArrowRight size={16} />
              </a>
              <Link to="/campus-life/campus-tour" className="btn-secondary">
                <Play size={14} />
                Explore Campus
              </Link>
              <Link to="/placements" className="btn-ghost text-brand-400 hover:text-brand-300">
                View Placements
                <ChevronRight size={14} />
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map(({ value, label, icon: Icon, color }) => (
                <div key={label} className="glass-card p-3 text-center">
                  <Icon size={18} className={`${color} mx-auto mb-1`} />
                  <div className="font-display font-bold text-white text-xl">{value}</div>
                  <div className="text-dark-400 text-xs mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="glass-card p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-800/20 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-navy-800/20 rounded-full blur-2xl" />

                {/* Institute logo placeholder */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <span className="text-white font-black text-2xl">I³P</span>
                </div>

                <h2 className="text-center font-display font-bold text-white text-xl mb-1">
                  IIIT Pune
                </h2>
                <p className="text-center text-dark-400 text-sm mb-6">
                  Indian Institute of Information Technology, Pune
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: 'Programs', value: '6', color: 'bg-blue-500/10 text-blue-400' },
                    { label: 'Faculty', value: '60+', color: 'bg-brand-800/30 text-brand-400' },
                    { label: 'Research Labs', value: '12', color: 'bg-purple-500/10 text-purple-400' },
                    { label: 'Batches', value: '11+', color: 'bg-green-500/10 text-green-400' },
                  ].map(({ label, value, color }) => (
                    <div key={label} className={`rounded-xl ${color} p-3 text-center`}>
                      <div className="font-bold text-xl">{value}</div>
                      <div className="text-xs opacity-80">{label}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  {[
                    { label: 'B.Tech CSE / ECE', desc: 'UG Programs' },
                    { label: 'M.Tech CSE / ECE', desc: 'PG Programs' },
                    { label: 'Ph.D. Research', desc: 'Doctoral Program' },
                  ].map(({ label, desc }) => (
                    <div key={label} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
                      <div className="w-2 h-2 rounded-full bg-brand-500 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium text-sm">{label}</div>
                        <div className="text-dark-400 text-xs">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass-card px-4 py-3 shadow-card-hover"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <div className="text-xs font-semibold text-white">Admissions 2025</div>
                </div>
                <div className="text-xs text-dark-400 mt-1">JoSAA Counselling Open</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 glass-card px-4 py-3 shadow-card-hover"
              >
                <div className="text-xs text-dark-400">Highest Package 2024</div>
                <div className="text-lg font-bold text-green-400">₹52 LPA</div>
                <div className="text-xs text-dark-400">Microsoft</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-dark-500 text-xs">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border border-dark-600 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-brand-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
