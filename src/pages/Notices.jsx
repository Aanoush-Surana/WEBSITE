import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/shared/PageHero';
import { notices, noticeCategories } from '../data/notices';
import { Bell, AlertCircle, Pin, Calendar, Search, Filter, ChevronRight, ExternalLink } from 'lucide-react';

function NoticeDashboard() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [showPinnedOnly, setShowPinnedOnly] = useState(false);

  const filtered = notices.filter(n => {
    const matchCategory = activeCategory === 'all' || n.category === activeCategory;
    const matchSearch = search === '' ||
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.subcategory.toLowerCase().includes(search.toLowerCase());
    const matchPinned = !showPinnedOnly || n.pinned;
    return matchCategory && matchSearch && matchPinned;
  });

  const pinnedNotices = filtered.filter(n => n.pinned);
  const regularNotices = filtered.filter(n => !n.pinned);

  const urgencyCount = notices.filter(n => n.urgency === 'urgent').length;
  const newCount = notices.filter(n => n.isNew).length;

  return (
    <div>
      <PageHero
        title="Notice Center"
        subtitle="Categorized notice board for academic, student, and administrative notices"
        breadcrumbs={[{ label: 'Notices' }]}
      >
        {/* Quick stats */}
        <div className="flex flex-wrap gap-3 mt-4">
          <span className="badge-urgent">{urgencyCount} Urgent</span>
          <span className="badge-new">{newCount} New</span>
          <span className="badge-info">{notices.length} Total Notices</span>
        </div>
      </PageHero>

      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-10">
        {/* Filter bar */}
        <div className="glass-card p-4 mb-8 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400" />
            <input
              type="search"
              placeholder="Search notices..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="input-glass pl-9 text-sm w-full"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {noticeCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-brand-700 text-white shadow-glow'
                    : 'bg-dark-800 text-dark-300 hover:text-brand-700 border border-dark-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowPinnedOnly(!showPinnedOnly)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all border ${
              showPinnedOnly ? 'bg-yellow-50 border-yellow-200 text-yellow-700' : 'border-dark-700 text-dark-300 hover:text-brand-700 bg-dark-800'
            }`}
          >
            <Pin size={13} /> Pinned Only
          </button>
        </div>

        {/* Pinned notices */}
        {pinnedNotices.length > 0 && (
          <div className="mb-8">
            <h2 className="flex items-center gap-2 font-display font-bold text-dark-100 text-lg mb-4">
              <Pin size={16} className="text-yellow-600" /> Pinned Notices
            </h2>
            <div className="space-y-3">
              {pinnedNotices.map(notice => (
                <NoticeCard key={notice.id} notice={notice} />
              ))}
            </div>
          </div>
        )}

        {/* Regular notices */}
        {regularNotices.length > 0 && (
          <div>
            <h2 className="flex items-center gap-2 font-display font-bold text-dark-100 text-lg mb-4">
              <Bell size={16} className="text-brand-700" /> All Notices
              <span className="text-dark-500 font-normal text-sm">({regularNotices.length})</span>
            </h2>
            <div className="space-y-3">
              {regularNotices.map(notice => (
                <NoticeCard key={notice.id} notice={notice} />
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Bell size={48} className="text-dark-600 mx-auto mb-4" />
            <p className="text-dark-400">No notices found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function NoticeCard({ notice }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`glass-card p-4 hover:border-brand-500/20 transition-all cursor-pointer group bg-white ${
        notice.pinned ? 'border-yellow-500/20' : ''
      }`}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
          notice.urgency === 'urgent'
            ? 'bg-red-50 border border-red-100 text-red-600'
            : 'bg-brand-50 border border-brand-100 text-brand-700'
        }`}>
          {notice.urgency === 'urgent' ? <AlertCircle size={16} /> : <Bell size={16} />}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            {notice.pinned && (
              <Pin size={11} className="text-yellow-500" />
            )}
            {notice.isNew && (
              <span className="badge-new text-[10px]">NEW</span>
            )}
            {notice.urgency === 'urgent' && (
              <span className="badge-urgent text-[10px]">URGENT</span>
            )}
            <span className="badge-info text-[10px]">{notice.subcategory}</span>
          </div>

          <h3 className="text-dark-100 text-sm font-medium group-hover:text-brand-700 transition-colors leading-snug mb-1.5">
            {notice.title}
          </h3>

          <div className="flex items-center gap-3 text-xs text-dark-500">
            <span className="flex items-center gap-1">
              <Calendar size={11} />
              {new Date(notice.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
            </span>
            <span className="capitalize">{notice.category}</span>
          </div>
        </div>

        {/* Action */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={notice.link}
            className="p-2 rounded-lg text-dark-500 hover:text-brand-700 hover:bg-brand-50 transition-all"
            onClick={e => e.stopPropagation()}
          >
            <ExternalLink size={14} />
          </a>
          <div className="text-dark-600 group-hover:text-brand-700 transition-colors">
            <ChevronRight size={15} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CategoryNotices({ category }) {
  const categoryNotices = notices.filter(n => n.category === category);
  return (
    <div>
      <PageHero
        title={`${category.charAt(0).toUpperCase() + category.slice(1)} Notices`}
        breadcrumbs={[{ label: 'Notices', href: '/notices' }, { label: category.charAt(0).toUpperCase() + category.slice(1) }]}
      />
      <div className="max-w-4xl mx-auto px-4 lg:px-6 py-10 space-y-3">
        {categoryNotices.map(n => <NoticeCard key={n.id} notice={n} />)}
      </div>
    </div>
  );
}

export default function Notices() {
  return (
    <Routes>
      <Route index element={<NoticeDashboard />} />
      <Route path="academic" element={<CategoryNotices category="academic" />} />
      <Route path="student" element={<CategoryNotices category="student" />} />
      <Route path="administrative" element={<CategoryNotices category="administrative" />} />
    </Routes>
  );
}
