import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Award, Users, ArrowRight, Building } from 'lucide-react';
import { placementStats, testimonials } from '../../data/placements';

const statCards = [
  { label: 'Highest Package', value: placementStats.highestPackage, icon: Award, color: 'from-yellow-500 to-orange-500', sub: 'Microsoft SDE 2024' },
  { label: 'Average Package', value: placementStats.averagePackage, icon: TrendingUp, color: 'from-green-500 to-teal-500', sub: '23% increase YoY' },
  { label: 'Placement Rate', value: placementStats.placementRate, icon: Users, color: 'from-blue-500 to-indigo-600', sub: 'B.Tech 2024 batch' },
  { label: 'Total Recruiters', value: placementStats.totalRecruiters + '+', icon: Building, color: 'from-brand-600 to-brand-800', sub: 'Companies on campus' },
];

const recruiters = [
  {
    name: 'Google',
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
      </svg>
    )
  },
  {
    name: 'Microsoft',
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="11" height="11" fill="#F25022"/>
        <rect x="12" width="11" height="11" fill="#7FBA00"/>
        <rect y="12" width="11" height="11" fill="#00A4EF"/>
        <rect x="12" y="12" width="11" height="11" fill="#FFB900"/>
      </svg>
    )
  },
  {
    name: 'Amazon',
    logo: (
      <svg className="h-5 w-auto text-dark-100" viewBox="0 0 48 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="12" fontSize="11" fontWeight="bold" fontFamily="sans-serif">amazon</text>
        <path d="M25 13c-2.4 1.7-5.9 2.4-8.9 2.4-4.2 0-8-1.5-10.8-4-.3-.3-.1-.7.3-.5 3.3 1.6 7.4 2.5 11.5 2.5 2.7 0 5.6-.4 8.2-1.3.6-.2.9.4.2.9zm1.1-2.1c-.2-.3-.8-.3-1.1.1-.7.9-1.8 1.4-2.8 1.4-1.2 0-2.3-.7-2.8-1.7-.2-.3-.7-.2-.8.1-.2.6.2 1.3.8 1.6 1 .5 2.2.5 3.1 0 .6-.3.9-.9.8-1.5z" fill="#FF9900"/>
      </svg>
    )
  },
  {
    name: 'NVIDIA',
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.2 6.4c-1.3-1.6-3.1-2.9-5.1-3.6-2-.8-4.2-1-6.3-.6-2.1.4-4 1.4-5.5 2.9C1.8 6.6.8 8.5.4 10.6c-.4 2.1-.2 4.3.6 6.3s2.1 3.7 3.8 4.9C6.4 23 8.5 23.6 10.6 23.5c2.1-.1 4.2-.9 5.8-2.2l-1.7-1.7c-1.1.9-2.5 1.4-4 1.4-1.5 0-3-.5-4.2-1.4-1.2-1-2-2.3-2.3-3.8-.3-1.5-.1-3 .5-4.4.6-1.4 1.7-2.5 3-3.2 1.3-.7 2.8-1 4.3-1 1.5 0 3 .3 4.3 1 1.3.7 2.4 1.8 3 3.2.6 1.4.8 2.9.5 4.4l2.4 2.4c.5-2.2.4-4.5-.4-6.6s-2.1-3.9-3.8-5.2z" fill="#76B900"/>
        <path d="M12 8.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zm0 5.2c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8z" fill="#76B900"/>
      </svg>
    )
  },
  {
    name: 'Adobe',
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.58 2H24v20zM9.42 2H0v20zM12 9.17l5.67 12.83h-3.48l-1.91-4.5H8.79l-1.91 4.5H3.4z" fill="#FF0000"/>
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" fill="#0A66C2"/>
      </svg>
    )
  },
  {
    name: 'PayPal',
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.08 7.21c0 3.23-2.1 5.56-5.11 5.56H12.1l-1.46 6.35H7.2L10.82 3.3h5.86c3.02 0 3.4 3.91 3.4 3.91zm-4.75 0c0-1.36-.93-2.07-2.16-2.07h-2.15l-1.01 4.21h2.2c1.38 0 2.12-.76 2.12-2.14z" fill="#003087"/>
        <path d="M16.92 9.8c0 3.23-2.1 5.56-5.11 5.56H8.94l-1.46 6.35H4.04L7.66 5.89h5.86c3.02 0 3.4 3.91 3.4 3.91zm-4.75 0c0-1.36-.93-2.07-2.16-2.07H7.86l-1.01 4.21h2.2c1.28 0 2.12-.76 2.12-2.14z" fill="#0079C1" opacity="0.8"/>
      </svg>
    )
  },
  {
    name: 'Intel',
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.6 13.88c-.02-.8-.24-1.57-.64-2.25L18.4 7.07c-.4-.68-1.07-1.07-1.84-1.07H7.44c-.77 0-1.44.39-1.84 1.07L3.04 11.63c-.4.68-.62 1.45-.64 2.25.02.8.24 1.57.64 2.25l2.56 4.56c.4.68 1.07 1.07 1.84 1.07h9.12c.77 0 1.44-.39 1.84-1.07l2.56-4.56c.4-.68.62-1.45.64-2.25z" fill="#0071C5"/>
        <text x="6" y="16.5" fontSize="8" fontWeight="bold" fill="white" fontFamily="sans-serif">intel</text>
      </svg>
    )
  },
  {
    name: 'Samsung',
    logo: (
      <svg className="h-5 w-auto" viewBox="0 0 72 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="36" cy="8" rx="36" ry="8" fill="#0A47A3"/>
        <text x="12" y="11" fontSize="9" fontWeight="900" fill="white" fontFamily="sans-serif" letterSpacing="0.5px">SAMSUNG</text>
      </svg>
    )
  },
  {
    name: 'Deloitte',
    logo: (
      <svg className="h-5 w-auto text-dark-200" viewBox="0 0 60 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="13" fontSize="13" fontWeight="900" fontFamily="sans-serif" letterSpacing="-0.5px">Deloitte</text>
        <circle cx="53" cy="11" r="2" fill="#86BC25"/>
      </svg>
    )
  },
  {
    name: 'Walmart',
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="3" fill="#FFC220"/>
        <path d="M12 2v4M12 18v4M3.34 7v4.62M16.04 12.38l4.62 2.67M3.34 17l4.62-2.67M16.04 11.62l4.62-2.67" stroke="#FFC220" strokeWidth="2.5" strokeLinecap="round"/>
        <text x="0" y="8" fontSize="6" fontWeight="bold" fill="#0071DC" fontFamily="sans-serif">Walmart</text>
      </svg>
    )
  },
  {
    name: 'ServiceNow',
    logo: (
      <svg className="h-5 w-auto" viewBox="0 0 80 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="12" fontSize="11" fontWeight="bold" fill="#293E40" fontFamily="sans-serif">servicenow</text>
        <circle cx="68" cy="10" r="2.5" fill="#81B5A3"/>
      </svg>
    )
  }
];

export default function PlacementSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const renderRecruiters = () => (
    <div className="flex items-center gap-16 whitespace-nowrap animate-marquee flex-shrink-0">
      {recruiters.map((company, idx) => (
        <div key={idx} className="flex items-center justify-center h-6 opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300 select-none">
          {company.logo}
        </div>
      ))}
    </div>
  );

  const t = testimonials[active];

  return (
    <section className="py-6 bg-dark-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-900/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <span className="section-tag mb-2">
              <TrendingUp size={10} />
              Training & Placement
            </span>
            <h2 className="section-title mt-1">Placements 2024</h2>
            <p className="text-dark-400 mt-1 max-w-lg text-xs">
              Exceptional placement record with top global companies recruiting at IIIT Pune
            </p>
          </div>
          <Link to="/placements" className="btn-secondary flex text-xs py-1.5 px-3 flex-shrink-0">
            Full Report <ArrowRight size={12} />
          </Link>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {statCards.map(({ label, value, icon: Icon, color, sub }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-4 relative overflow-hidden group hover:border-brand-500/20 transition-all rounded-xl"
            >
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${color} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity`} />
              <Icon size={16} className={`bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2.5`} />
              <div className="font-display font-black text-xl text-dark-100">{value}</div>
              <div className="font-semibold text-xs text-dark-400 mt-0.5">{label}</div>
              <div className="text-[10px] text-dark-500 mt-1">{sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Recruiter logo wall - infinite horizontal scroll */}
        <div className="overflow-hidden relative flex py-3 bg-dark-900/60 border-y border-dark-700/50 mb-6 rounded-xl select-none">
          {renderRecruiters()}
          {renderRecruiters()}
        </div>

        {/* Testimonials Auto-Slider */}
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-5 relative overflow-hidden bg-white border border-dark-700 rounded-xl min-h-[130px] flex flex-col justify-between shadow-sm">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-700" />
            
            <AnimatePresence mode="wait">
              {t && (
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 flex flex-col justify-between"
                >
                  <p className="text-dark-300 text-xs italic leading-relaxed pl-3 mb-3">
                    "{t.quote}"
                  </p>
                  
                  <div className="flex items-center justify-between pl-3 mt-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-700 to-navy-700 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-dark-100 text-xs leading-tight">{t.name}</div>
                        <div className="text-dark-500 text-[10px] mt-0.5">
                          {t.batch} · <span className="text-brand-700 font-semibold">{t.company}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-brand-700 text-[10px] font-semibold bg-brand-50 px-2 py-0.5 rounded-full border border-brand-100">
                      {t.package}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center gap-1.5 mt-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${i === active ? 'bg-brand-700 w-3' : 'bg-dark-600'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
