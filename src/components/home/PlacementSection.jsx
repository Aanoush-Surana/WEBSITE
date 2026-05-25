import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, Award, Users, ArrowRight, Building } from 'lucide-react';
import { placementStats, topRecruiters, testimonials } from '../../data/placements';

const statCards = [
  { label: 'Highest Package', value: placementStats.highestPackage, icon: Award, color: 'from-yellow-500 to-orange-500', sub: 'Microsoft SDE 2024' },
  { label: 'Average Package', value: placementStats.averagePackage, icon: TrendingUp, color: 'from-green-500 to-teal-500', sub: '23% increase YoY' },
  { label: 'Placement Rate', value: placementStats.placementRate, icon: Users, color: 'from-blue-500 to-indigo-600', sub: 'B.Tech 2024 batch' },
  { label: 'Total Recruiters', value: placementStats.totalRecruiters + '+', icon: Building, color: 'from-brand-600 to-brand-800', sub: 'Companies on campus' },
];

const topCompanies = ['Microsoft', 'Google', 'Amazon', 'Goldman Sachs', 'Qualcomm', 'Adobe', 'Morgan Stanley', 'Rubrik', 'Cisco', 'Samsung R&D', 'DE Shaw', 'Oracle'];

export default function PlacementSection() {
  return (
    <section className="py-20 bg-dark-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-900/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="section-tag mb-3">
              <TrendingUp size={10} />
              Training & Placement
            </span>
            <h2 className="section-title mt-2">Placements 2024</h2>
            <p className="text-dark-400 mt-2 max-w-lg">
              Exceptional placement record with top global companies recruiting at IIIT Pune
            </p>
          </div>
          <Link to="/placements" className="btn-secondary hidden sm:flex">
            Full Report <ArrowRight size={14} />
          </Link>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {statCards.map(({ label, value, icon: Icon, color, sub }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-5 relative overflow-hidden group hover:border-white/20 transition-all"
            >
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${color} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity`} />
              <Icon size={18} className={`bg-gradient-to-r ${color} bg-clip-text text-transparent mb-3`} style={{ filter: 'drop-shadow(0 0 8px rgba(74,222,128,0.3))' }} />
              <div className="font-display font-black text-2xl text-white">{value}</div>
              <div className="font-medium text-sm text-white/70 mt-0.5">{label}</div>
              <div className="text-xs text-dark-500 mt-1">{sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Recruiter logo wall */}
        <div className="glass-card p-6 mb-10">
          <h3 className="font-display font-semibold text-white mb-5 flex items-center gap-2">
            <Building size={16} className="text-brand-400" />
            Top Recruiters
          </h3>
          <div className="flex flex-wrap gap-3">
            {topCompanies.map((company) => (
              <div
                key={company}
                className="px-4 py-2 bg-dark-800/60 border border-white/8 rounded-xl text-sm font-medium text-dark-300 hover:text-white hover:border-white/20 hover:bg-dark-700/60 transition-all cursor-default"
              >
                {company}
              </div>
            ))}
            <div className="px-4 py-2 bg-brand-950/50 border border-brand-800/40 rounded-xl text-sm font-medium text-brand-400">
              +{placementStats.totalRecruiters - topCompanies.length} more
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-5 hover:border-white/20 transition-all"
            >
              <p className="text-dark-300 text-sm italic leading-relaxed mb-4">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-700 to-navy-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-dark-400 text-xs">{t.batch}</div>
                  <div className="text-brand-400 text-xs font-medium">{t.company} · {t.package}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/placements" className="btn-primary">
            View Complete Placement Report <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
