import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  GraduationCap, FlaskConical, Users, TrendingUp, BookOpen, Building2, ArrowRight
} from 'lucide-react';

const quickCards = [
  {
    title: 'Admissions',
    desc: 'JoSAA counselling for B.Tech, GATE for M.Tech',
    icon: GraduationCap,
    href: '/academics/btech-cse',
    gradient: 'from-blue-50/50 to-indigo-50/20',
    iconColor: 'text-blue-600',
    borderColor: 'hover:border-blue-600/40',
    tag: 'Open Now',
    tagColor: 'bg-green-50 text-green-700 border-green-200/60',
  },
  {
    title: 'Academics',
    desc: 'B.Tech, M.Tech, Ph.D. programs in CSE & ECE',
    icon: BookOpen,
    href: '/academics',
    gradient: 'from-brand-50/50 to-rose-50/20',
    iconColor: 'text-brand-700',
    borderColor: 'hover:border-brand-700/40',
    tag: 'Programs',
    tagColor: 'bg-brand-50 text-brand-700 border-brand-200/60',
  },
  {
    title: 'Research',
    desc: 'Cutting-edge research centers and funded projects',
    icon: FlaskConical,
    href: '/research',
    gradient: 'from-purple-50/50 to-fuchsia-50/20',
    iconColor: 'text-purple-600',
    borderColor: 'hover:border-purple-700/40',
    tag: '12 Labs',
    tagColor: 'bg-purple-50 text-purple-700 border-purple-200/60',
  },
  {
    title: 'Faculty',
    desc: 'Distinguished faculty from IITs, IISc, and global institutes',
    icon: Users,
    href: '/people/faculty',
    gradient: 'from-teal-50/50 to-emerald-50/20',
    iconColor: 'text-teal-600',
    borderColor: 'hover:border-teal-700/40',
    tag: '60+ Faculty',
    tagColor: 'bg-teal-50 text-teal-700 border-teal-200/60',
  },
  {
    title: 'Placements',
    desc: '95% placement rate with 80+ recruiters on campus',
    icon: TrendingUp,
    href: '/placements',
    gradient: 'from-green-50/50 to-emerald-50/20',
    iconColor: 'text-green-600',
    borderColor: 'hover:border-green-700/40',
    tag: '₹52 LPA Highest',
    tagColor: 'bg-green-50 text-green-700 border-green-200/60',
  },
  {
    title: 'Campus Life',
    desc: 'Vibrant clubs, cultural activities, and sports',
    icon: Building2,
    href: '/campus-life',
    gradient: 'from-orange-50/50 to-amber-50/20',
    iconColor: 'text-orange-600',
    borderColor: 'hover:border-orange-700/40',
    tag: '8 Clubs',
    tagColor: 'bg-orange-50 text-orange-700 border-orange-200/60',
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function QuickAccess() {
  return (
    <section className="py-6 bg-dark-800/40">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <span className="section-tag mb-2">Quick Access</span>
            <h2 className="section-title mt-1">Explore IIIT Pune</h2>
          </div>
          <Link to="/about/overview" className="btn-ghost hidden sm:flex text-xs py-1.5 px-3">
            Institute Overview <ArrowRight size={12} />
          </Link>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-x-visible lg:pb-0"
        >
          {quickCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.title} variants={cardVariant} className="min-w-[260px] sm:min-w-[280px] lg:min-w-0 snap-start flex-shrink-0 lg:flex-shrink">
                <Link
                  to={card.href}
                  className={`glass-card p-5 cursor-pointer flex flex-col justify-between min-h-[145px] h-full bg-gradient-to-br ${card.gradient} border border-dark-700 ${card.borderColor} group rounded-2xl shadow-sm hover:shadow-md transition-all duration-300`}
                >
                  <div className="space-y-3">
                    {/* Top Header Row */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl bg-white border border-dark-700 flex items-center justify-center ${card.iconColor} group-hover:scale-105 transition-transform duration-200 flex-shrink-0`}>
                          <Icon size={18} />
                        </div>
                        <h3 className="font-display font-bold text-dark-100 text-sm group-hover:text-brand-700 transition-colors leading-tight">
                          {card.title}
                        </h3>
                      </div>
                      <span className={`${card.tagColor} text-[9px] font-bold px-2 py-0.5 rounded-full border flex-shrink-0`}>
                        {card.tag}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-dark-400 text-xs leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  {/* Learn More link */}
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-brand-700 group-hover:text-brand-800 transition-colors mt-3">
                    <span>Learn More</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
