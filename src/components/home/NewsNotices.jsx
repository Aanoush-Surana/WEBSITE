import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bell, AlertCircle, Pin, ChevronRight, ExternalLink, Calendar } from 'lucide-react';
import { notices } from '../../data/notices';

const pinnedNotices = notices.filter(n => n.pinned).slice(0, 5);

function NoticeItem({ notice, index }) {
  return (
    <div
      className={`flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer group border border-transparent hover:border-white/10`}
    >
      {notice.urgency === 'urgent' ? (
        <AlertCircle size={15} className="text-red-400 mt-0.5 flex-shrink-0" />
      ) : (
        <Bell size={15} className="text-brand-400 mt-0.5 flex-shrink-0" />
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-start gap-2 flex-wrap">
          {notice.isNew && (
            <span className="badge-new text-[10px] flex-shrink-0">NEW</span>
          )}
          {notice.urgency === 'urgent' && (
            <span className="badge-urgent text-[10px] flex-shrink-0">URGENT</span>
          )}
        </div>
        <p className="text-white/80 text-sm mt-1 group-hover:text-white transition-colors leading-snug line-clamp-2">
          {notice.title}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <Calendar size={11} className="text-dark-500" />
          <span className="text-dark-500 text-xs">
            {new Date(notice.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
          </span>
        </div>
      </div>
      <ChevronRight size={14} className="text-dark-600 group-hover:text-brand-400 transition-colors flex-shrink-0 mt-1" />
    </div>
  );
}

// Scrolling ticker for latest notices
function NoticeTicker() {
  const allNotices = notices.filter(n => n.isNew).slice(0, 8);
  const text = allNotices.map(n => `📢 ${n.title}`).join('   ·   ');

  return (
    <div className="bg-brand-950/60 border-y border-brand-800/30 py-2.5 overflow-hidden relative">
      <div className="flex items-center">
        <div className="flex-shrink-0 bg-brand-700 text-white text-xs font-bold px-4 py-1 mr-4 rounded-r-full">
          LATEST
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            <span className="text-brand-300 text-sm mr-12">{text}</span>
            <span className="text-brand-300 text-sm mr-12">{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NewsNotices() {
  return (
    <>
      <NoticeTicker />

      <section className="py-16 bg-dark-900/40">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pinned Notices */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Pin size={16} className="text-brand-400" />
                  <h2 className="font-display font-bold text-white text-xl">Important Notices</h2>
                </div>
                <Link to="/notices" className="text-xs text-brand-400 hover:text-brand-300 flex items-center gap-1 font-medium">
                  View All <ChevronRight size={12} />
                </Link>
              </div>
              <div className="glass-card divide-y divide-white/5">
                {pinnedNotices.map((notice, idx) => (
                  <div key={notice.id} className="p-1">
                    <NoticeItem notice={notice} index={idx} />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick info panel */}
            <div className="space-y-4">
              <h2 className="font-display font-bold text-white text-xl mb-6 flex items-center gap-3">
                <ExternalLink size={16} className="text-brand-400" />
                Quick Information
              </h2>

              {[
                {
                  title: 'Admissions 2025-26',
                  desc: 'B.Tech through JoSAA, M.Tech through CCMT/GATE',
                  badge: 'Open',
                  badgeColor: 'text-green-400 bg-green-900/30',
                  href: '/academics',
                },
                {
                  title: 'Fee Structure 2025-26',
                  desc: 'View complete fee structure for all programs',
                  badge: 'Updated',
                  badgeColor: 'text-blue-400 bg-blue-900/30',
                  href: '/academics/fee-structure',
                },
                {
                  title: 'Academic Calendar',
                  desc: 'Odd semester 2025-26 schedule published',
                  badge: 'New',
                  badgeColor: 'text-brand-400 bg-brand-950/50',
                  href: '/academics/academic-calendar',
                },
                {
                  title: 'NIRF Ranking 2024',
                  desc: 'IIIT Pune ranking data and analytics',
                  badge: 'Rankings',
                  badgeColor: 'text-yellow-400 bg-yellow-900/20',
                  href: '/about/nirf',
                },
                {
                  title: 'Placement Report 2024',
                  desc: '95% placement rate — detailed statistics',
                  badge: 'Stats',
                  badgeColor: 'text-teal-400 bg-teal-900/30',
                  href: '/placements',
                },
              ].map(({ title, desc, badge, badgeColor, href }) => (
                <Link
                  key={title}
                  to={href}
                  className="glass-card-hover flex items-center gap-4 p-4 group"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-semibold text-white text-sm group-hover:text-brand-300 transition-colors">{title}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${badgeColor}`}>{badge}</span>
                    </div>
                    <p className="text-dark-400 text-xs">{desc}</p>
                  </div>
                  <ChevronRight size={15} className="text-dark-600 group-hover:text-brand-400 transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
