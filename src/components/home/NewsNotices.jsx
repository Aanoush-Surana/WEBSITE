import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bell, AlertCircle, Pin, ChevronRight, ExternalLink, Calendar, UserCircle, ArrowRight } from 'lucide-react';
import { notices } from '../../data/notices';

const pinnedNotices = notices.filter(n => n.pinned).slice(0, 5);

function NoticeItem({ notice, index }) {
  return (
    <Link
      to="/notices"
      className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-brand-50/50 transition-all cursor-pointer group border border-transparent hover:border-brand-100 w-full block"
    >
      {notice.urgency === 'urgent' ? (
        <AlertCircle size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
      ) : (
        <Bell size={14} className="text-brand-700 mt-0.5 flex-shrink-0" />
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5 flex-wrap">
          {notice.isNew && (
            <span className="text-[8px] font-bold px-1 py-0.2 bg-brand-100 text-brand-800 rounded flex-shrink-0">NEW</span>
          )}
          {notice.urgency === 'urgent' && (
            <span className="text-[8px] font-bold px-1 py-0.2 bg-red-100 text-red-800 rounded flex-shrink-0">URGENT</span>
          )}
        </div>
        <p className="text-dark-300 text-xs font-semibold group-hover:text-brand-700 transition-colors leading-snug line-clamp-1 mt-0.5">
          {notice.title}
        </p>
        <p className="text-[10px] text-dark-500 mt-0.5">
          {new Date(notice.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
        </p>
      </div>
      <ChevronRight size={12} className="text-dark-600 group-hover:text-brand-700 transition-colors flex-shrink-0 self-center" />
    </Link>
  );
}

// Scrolling ticker for latest notices - notice-by-notice clickable links
function NoticeTicker() {
  const allNotices = notices.filter(n => n.isNew).slice(0, 8);

  const renderTickerList = () => (
    <div className="flex items-center gap-12 whitespace-nowrap animate-marquee">
      {allNotices.map((n) => (
        <Link
          key={n.id}
          to="/notices"
          className="text-brand-800 hover:text-brand-600 font-medium text-sm transition-colors flex items-center gap-2 group"
        >
          <span>📢</span>
          <span className="group-hover:underline">{n.title}</span>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="bg-brand-50 border-y border-brand-100 py-2.5 overflow-hidden relative">
      <div className="flex items-center">
        <div className="flex-shrink-0 bg-brand-700 text-white text-xs font-bold px-4 py-1 mr-4 rounded-r-full z-10">
          LATEST
        </div>
        <div className="flex-1 overflow-hidden relative flex">
          {renderTickerList()}
          {renderTickerList()}
        </div>
      </div>
    </div>
  );
}

export default function NewsNotices() {
  const [activeTab, setActiveTab] = useState('notices');

  return (
    <>
      <NoticeTicker />

      <section className="py-6 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          {/* Mobile Tab Selectors */}
          <div className="flex lg:hidden bg-dark-800 p-1.5 rounded-2xl border border-dark-700/80 mb-6 shadow-sm gap-1">
            {[
              { id: 'notices', label: 'Notices', icon: Pin },
              { id: 'info', label: 'Quick Info', icon: ExternalLink },
              { id: 'director', label: "Director's Desk", icon: UserCircle },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-semibold transition-all duration-200 select-none ${
                    activeTab === tab.id
                      ? 'bg-brand-700 text-white shadow-glow'
                      : 'text-dark-400 hover:text-dark-200 hover:bg-dark-700/40'
                  }`}
                >
                  <Icon size={12} className={activeTab === tab.id ? 'text-white' : 'text-brand-700'} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pinned Notices */}
            <div className={`${activeTab === 'notices' ? 'block' : 'hidden'} lg:block`}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Pin size={16} className="text-brand-700" />
                  <h2 className="font-display font-bold text-dark-100 text-xl">Important Notices</h2>
                </div>
                <Link to="/notices" className="text-xs text-brand-700 hover:text-brand-600 flex items-center gap-1 font-semibold">
                  View All <ChevronRight size={12} />
                </Link>
              </div>
              <div className="glass-card h-[345px] flex flex-col justify-between overflow-hidden">
                {pinnedNotices.map((notice, idx) => (
                  <div key={notice.id} className="px-2.5 flex-1 flex flex-col justify-center border-b border-dark-700 last:border-b-0">
                    <NoticeItem notice={notice} index={idx} />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick info panel */}
            <div className={`${activeTab === 'info' ? 'block' : 'hidden'} lg:block`}>
              <div className="flex items-center gap-3 mb-6">
                <ExternalLink size={16} className="text-brand-700" />
                <h2 className="font-display font-bold text-dark-100 text-xl">
                  Quick Information
                </h2>
              </div>

              <div className="flex flex-col gap-2 h-[345px] justify-between">
                {[
                  {
                    title: 'Admissions 2025-26',
                    desc: 'B.Tech through JoSAA, M.Tech through CCMT/GATE',
                    badge: 'Open',
                    badgeColor: 'text-green-700 bg-green-50 border border-green-200',
                    href: '/academics',
                  },
                  {
                    title: 'Fee Structure 2025-26',
                    desc: 'View complete fee structure for all programs',
                    badge: 'Updated',
                    badgeColor: 'text-blue-700 bg-blue-50 border border-blue-200',
                    href: '/academics/fee-structure',
                  },
                  {
                    title: 'Academic Calendar',
                    desc: 'Odd semester 2025-26 schedule published',
                    badge: 'New',
                    badgeColor: 'text-brand-700 bg-brand-50 border border-brand-200',
                    href: '/academics/academic-calendar',
                  },
                  {
                    title: 'NIRF Ranking 2024',
                    desc: 'IIIT Pune ranking data and analytics',
                    badge: 'Rankings',
                    badgeColor: 'text-amber-700 bg-amber-50 border border-amber-200',
                    href: '/about/nirf',
                  },
                  {
                    title: 'Placement Report 2024',
                    desc: '95% placement rate — detailed statistics',
                    badge: 'Stats',
                    badgeColor: 'text-teal-700 bg-teal-50 border border-teal-200',
                    href: '/placements',
                  },
                ].map(({ title, desc, badge, badgeColor, href }) => (
                  <Link
                    key={title}
                    to={href}
                    className="glass-card-hover flex items-center gap-3 p-2.5 group flex-1"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-semibold text-dark-200 text-xs group-hover:text-brand-700 transition-colors">{title}</span>
                        <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full ${badgeColor}`}>{badge}</span>
                      </div>
                      <p className="text-dark-500 text-[10px] truncate">{desc}</p>
                    </div>
                    <ChevronRight size={13} className="text-dark-600 group-hover:text-brand-700 transition-colors flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Director's Desk column */}
            <div className={`${activeTab === 'director' ? 'block' : 'hidden'} lg:block`}>
              <div className="flex items-center gap-3 mb-6">
                <UserCircle size={18} className="text-brand-700" />
                <h2 className="font-display font-bold text-dark-100 text-xl">
                  Director's Desk
                </h2>
              </div>
              
              <div className="glass-card-hover p-4 bg-white flex flex-col justify-between h-[345px]">
                <div className="flex flex-col items-center text-center my-auto">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-brand-100 shadow-sm mb-2">
                    <img 
                      src="/director.jpg" 
                      alt="Prof. (Dr.) Vineet Kansal" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="font-display font-bold text-dark-100 text-xs leading-tight">
                    Prof. (Dr.) Vineet Kansal
                  </h3>
                  <p className="text-brand-700 text-[10px] font-semibold uppercase tracking-wider mt-0.5">
                    Director, IIIT Pune
                  </p>
                  <p className="text-dark-400 text-[11px] italic mt-2 leading-relaxed max-w-xs line-clamp-3">
                    "IIIT Pune is committed to cultivating a culture of innovation, academic rigor, and advanced research to empower students to solve global technological challenges."
                  </p>
                </div>
                
                <Link 
                  to="/about/director-desk" 
                  className="btn-secondary text-[11px] py-1.5 w-full justify-center mt-2 flex-shrink-0"
                >
                  Read Message
                  <ArrowRight size={11} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
