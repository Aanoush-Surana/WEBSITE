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
    gradient: 'from-blue-600/20 to-indigo-700/20',
    iconColor: 'text-blue-400',
    borderColor: 'hover:border-blue-600/40',
    tag: 'Open Now',
    tagColor: 'bg-green-500/20 text-green-400',
  },
  {
    title: 'Academics',
    desc: 'B.Tech, M.Tech, Ph.D. programs in CSE & ECE',
    icon: BookOpen,
    href: '/academics',
    gradient: 'from-brand-800/20 to-brand-700/10',
    iconColor: 'text-brand-400',
    borderColor: 'hover:border-brand-700/40',
    tag: 'Programs',
    tagColor: 'bg-brand-900/50 text-brand-400',
  },
  {
    title: 'Research',
    desc: 'Cutting-edge research centers and funded projects',
    icon: FlaskConical,
    href: '/research',
    gradient: 'from-purple-800/20 to-purple-700/10',
    iconColor: 'text-purple-400',
    borderColor: 'hover:border-purple-700/40',
    tag: '12 Labs',
    tagColor: 'bg-purple-900/30 text-purple-400',
  },
  {
    title: 'Faculty',
    desc: 'Distinguished faculty from IITs, IISc, and global institutes',
    icon: Users,
    href: '/people/faculty',
    gradient: 'from-teal-800/20 to-teal-700/10',
    iconColor: 'text-teal-400',
    borderColor: 'hover:border-teal-700/40',
    tag: '60+ Faculty',
    tagColor: 'bg-teal-900/30 text-teal-400',
  },
  {
    title: 'Placements',
    desc: '95% placement rate with 80+ recruiters on campus',
    icon: TrendingUp,
    href: '/placements',
    gradient: 'from-green-800/20 to-green-700/10',
    iconColor: 'text-green-400',
    borderColor: 'hover:border-green-700/40',
    tag: '₹52 LPA Highest',
    tagColor: 'bg-green-900/30 text-green-400',
  },
  {
    title: 'Campus Life',
    desc: 'Vibrant clubs, cultural activities, and sports',
    icon: Building2,
    href: '/campus-life',
    gradient: 'from-orange-800/20 to-orange-700/10',
    iconColor: 'text-orange-400',
    borderColor: 'hover:border-orange-700/40',
    tag: '8 Clubs',
    tagColor: 'bg-orange-900/30 text-orange-400',
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
    <section className="py-20 bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="section-tag mb-3">Quick Access</span>
            <h2 className="section-title mt-2">Explore IIIT Pune</h2>
          </div>
          <Link to="/about/overview" className="btn-ghost hidden sm:flex">
            Institute Overview <ArrowRight size={14} />
          </Link>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {quickCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.title} variants={cardVariant}>
                <Link
                  to={card.href}
                  className={`feature-card flex flex-col gap-4 bg-gradient-to-br ${card.gradient} border border-white/8 ${card.borderColor} group`}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <div className={`w-11 h-11 rounded-xl bg-dark-800/80 flex items-center justify-center ${card.iconColor} group-hover:scale-110 transition-transform duration-200`}>
                      <Icon size={20} />
                    </div>
                    <span className={`${card.tagColor} text-xs font-semibold px-2.5 py-1 rounded-full border border-current/20`}>
                      {card.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-display font-bold text-white text-lg mb-1.5 group-hover:text-white/90">
                      {card.title}
                    </h3>
                    <p className="text-dark-400 text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-1.5 text-sm text-dark-400 group-hover:text-white group-hover:gap-2.5 transition-all duration-200 mt-auto">
                    <span className="font-medium">Explore</span>
                    <ArrowRight size={15} />
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
