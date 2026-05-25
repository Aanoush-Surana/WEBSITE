import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { studentAchievements, facultyAchievements, placementAchievements } from '../../data/achievements';

function AchievementCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="glass-card p-6 h-full relative overflow-hidden group hover:border-white/20 transition-all duration-300"
    >
      {/* Gradient background */}
      <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${item.color} opacity-10 rounded-full blur-2xl group-hover:opacity-15 transition-opacity`} />

      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} text-2xl mb-4 shadow-lg`}>
        {item.icon}
      </div>

      {/* Category badge */}
      <div className="flex items-center gap-2 mb-3">
        <span className="badge-info text-xs">{item.category}</span>
        <span className="text-dark-500 text-xs">{item.year}</span>
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-white text-base mb-2 leading-tight">
        {item.title}
      </h3>

      {/* Person */}
      <div className="text-brand-400 text-sm font-medium mb-2">
        {item.student || item.faculty || item.detail}
      </div>

      {/* Description */}
      <p className="text-dark-400 text-sm leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
}

function Carousel({ data, label, color }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % data.length);
  }, [data.length]);

  const prev = () => {
    setCurrent((c) => (c - 1 + data.length) % data.length);
  };

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [next]);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 5000);
  };

  const handleNext = () => { next(); resetTimer(); };
  const handlePrev = () => { prev(); resetTimer(); };

  const visibleItems = () => {
    const items = [];
    for (let i = 0; i < 2; i++) {
      items.push(data[(current + i) % data.length]);
    }
    return items;
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${color}`} />
          <div>
            <h3 className="font-display font-bold text-white text-lg">{label}</h3>
            <p className="text-dark-400 text-xs">{data.length} achievements</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-dark-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={handleNext}
            className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-dark-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AnimatePresence mode="wait">
          {visibleItems().map((item, idx) => (
            <AchievementCard key={`${item.id}-${current}-${idx}`} item={item} />
          ))}
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-1.5">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); resetTimer(); }}
            className={`rounded-full transition-all duration-200 ${
              i === current
                ? 'w-5 h-1.5 bg-brand-500'
                : 'w-1.5 h-1.5 bg-dark-600 hover:bg-dark-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function AchievementPanel() {
  return (
    <section className="py-20 bg-dark-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-navy-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="section-tag mb-4">
            🏆 Excellence & Recognition
          </span>
          <h2 className="section-title mt-3 mb-4">Achievement Panel</h2>
          <p className="section-subtitle mx-auto">
            Celebrating the outstanding accomplishments of our students, faculty, and placement cell
          </p>
        </div>

        {/* Three carousels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <Carousel
            data={studentAchievements}
            label="Student Achievements"
            color="from-yellow-500 to-orange-500"
          />
          <Carousel
            data={facultyAchievements}
            label="Faculty Achievements"
            color="from-blue-500 to-indigo-600"
          />
          <Carousel
            data={placementAchievements}
            label="T&P Cell Achievements"
            color="from-green-500 to-teal-600"
          />
        </div>
      </div>
    </section>
  );
}
