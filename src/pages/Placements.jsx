import { motion } from 'framer-motion';
import PageHero from '../components/shared/PageHero';
import { placementStats, topRecruiters, yearlyData, sectorDistribution, testimonials } from '../data/placements';
import { TrendingUp, Award, Users, Building, ArrowUp } from 'lucide-react';

function StatCard({ label, value, sub, icon: Icon, color, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="glass-card p-6 relative overflow-hidden group hover:border-white/25 transition-all"
    >
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${color} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity`} />
      <Icon size={22} className={`mb-3`} style={{ color: 'rgb(200,100,130)' }} />
      <div className="font-display font-black text-3xl text-white mb-1">{value}</div>
      <div className="font-medium text-white/70 text-sm">{label}</div>
      {sub && <div className="text-dark-500 text-xs mt-1">{sub}</div>}
    </motion.div>
  );
}

export default function Placements() {
  return (
    <div>
      <PageHero
        title="Training & Placements"
        subtitle="Exceptional placement record connecting IIIT Pune graduates with the world's best companies"
        breadcrumbs={[{ label: 'Placements' }]}
        tag="Career Development Cell"
      >
        <div className="flex flex-wrap gap-3 mt-4">
          <span className="badge-new">{placementStats.currentYear} Statistics</span>
          <span className="badge-info">{placementStats.placementRate} Placement Rate</span>
          <span className="badge-info">{placementStats.totalRecruiters}+ Recruiters</span>
        </div>
      </PageHero>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16 space-y-14">
        {/* Key stats */}
        <div>
          <h2 className="font-display font-bold text-white text-2xl mb-6">Key Statistics — 2024</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard label="Highest Package" value={placementStats.highestPackage} sub="Microsoft SDE" icon={Award} color="from-yellow-500 to-orange-500" delay={0} />
            <StatCard label="Average Package" value={placementStats.averagePackage} sub="23% increase YoY" icon={TrendingUp} color="from-green-500 to-teal-500" delay={0.05} />
            <StatCard label="Placement Rate" value={placementStats.placementRate} sub="B.Tech 2024" icon={Users} color="from-blue-500 to-indigo-600" delay={0.1} />
            <StatCard label="Recruiters" value={placementStats.totalRecruiters + '+'} sub="Companies on campus" icon={Building} color="from-brand-600 to-rose-700" delay={0.15} />
          </div>
        </div>

        {/* Year-wise trend */}
        <div>
          <h2 className="font-display font-bold text-white text-2xl mb-6">Year-wise Placement Trends</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full">
              <thead className="bg-dark-800/50">
                <tr>
                  <th className="text-left p-4 text-dark-300 text-sm font-semibold">Year</th>
                  <th className="text-right p-4 text-dark-300 text-sm font-semibold">Highest Package</th>
                  <th className="text-right p-4 text-dark-300 text-sm font-semibold">Average Package</th>
                  <th className="text-right p-4 text-dark-300 text-sm font-semibold">Placement %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {yearlyData.map((row, idx) => (
                  <tr key={row.year} className={`hover:bg-white/3 transition-colors ${row.year === '2024' ? 'bg-brand-950/20' : ''}`}>
                    <td className="p-4 text-white font-bold">{row.year} {row.year === '2024' && <span className="badge-new text-xs ml-2">Latest</span>}</td>
                    <td className="p-4 text-yellow-400 font-bold text-right">₹{row.highest} LPA</td>
                    <td className="p-4 text-green-400 font-semibold text-right">₹{row.average} LPA</td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-24 bg-dark-700 rounded-full h-1.5">
                          <div className="h-full bg-gradient-to-r from-brand-600 to-brand-400 rounded-full" style={{ width: `${row.placed}%` }} />
                        </div>
                        <span className="text-white font-semibold text-sm">{row.placed}%</span>
                        {idx > 0 && (
                          <ArrowUp size={13} className="text-green-400" />
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sector distribution */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="font-display font-bold text-white text-2xl mb-6">Sector Distribution</h2>
            <div className="glass-card p-6 space-y-4">
              {sectorDistribution.map(({ sector, percentage }) => (
                <div key={sector}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-dark-300">{sector}</span>
                    <span className="text-white font-bold">{percentage}%</span>
                  </div>
                  <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-brand-700 to-brand-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display font-bold text-white text-2xl mb-6">Student Testimonials</h2>
            <div className="space-y-4">
              {testimonials.map((t, idx) => (
                <div key={idx} className="glass-card p-5">
                  <p className="text-dark-300 text-sm italic mb-3">"{t.quote.slice(0, 120)}..."</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-700 to-navy-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-brand-400 text-xs">{t.company} · {t.package}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recruiter wall */}
        <div>
          <h2 className="font-display font-bold text-white text-2xl mb-6">Our Recruiters</h2>
          <div className="glass-card p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {topRecruiters.map((r) => (
                <div
                  key={r.name}
                  className="glass-card p-4 text-center hover:border-white/25 hover:bg-dark-700/50 transition-all cursor-default group"
                >
                  <div className="font-bold text-white text-sm group-hover:text-brand-300 transition-colors">{r.name}</div>
                  <div className="text-dark-500 text-xs mt-0.5">{r.category}</div>
                  <div className="text-green-400 text-xs font-semibold mt-1">{r.offers} offers</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact T&P cell */}
        <div className="glass-card p-8 text-center">
          <h2 className="font-display font-bold text-white text-2xl mb-3">Training & Placement Cell</h2>
          <p className="text-dark-400 mb-6">For placement inquiries, internship opportunities, or to schedule campus recruitment</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:placements@iiitp.ac.in" className="btn-primary">Contact T&P Cell</a>
            <a href="https://placements.iiitp.ac.in" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Placement Portal ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
