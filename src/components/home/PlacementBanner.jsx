import { Link } from 'react-router-dom';
import { TrendingUp, Package, Building2, Percent, ArrowRight, Award } from 'lucide-react';

const stats = [
  { value: '52 LPA', label: 'Highest Package', icon: Award, accent: true },
  { value: '128+', label: 'Offers Made', icon: Package },
  { value: '50+', label: 'Recruiters', icon: Building2 },
  { value: '95%', label: 'Placement Rate', icon: Percent },
];

const topRecruiters = ['Google', 'Amazon', 'Microsoft', 'Infosys', 'TCS', 'Wipro', 'DRDO', 'ISRO'];

export default function PlacementBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 to-slate-900">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4">
                <TrendingUp className="w-4 h-4" />
                Placement 2024
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">
                Training & Placement Cell
              </h2>
              <p className="text-slate-400 mt-4 leading-relaxed max-w-md">
                Our placement ecosystem connects students with top recruiters, research organizations,
                and startups through internships, placement drives, and innovation partnerships.
              </p>

              {/* Top recruiters */}
              <div className="mt-6">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Top Recruiters</p>
                <div className="flex flex-wrap gap-2">
                  {topRecruiters.map((r) => (
                    <span
                      key={r}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 border border-slate-700 text-slate-300"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to="/placements"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200"
              >
                View Full Report <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right — stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label, icon: Icon, accent }) => (
                <div
                  key={label}
                  className={`rounded-2xl p-5 border transition-all duration-200 card-hover ${
                    accent
                      ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30'
                      : 'bg-slate-800/60 border-slate-700/60 hover:border-slate-600'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <p className="text-3xl font-black text-cyan-400">{value}</p>
                  <p className="text-slate-400 text-sm mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
