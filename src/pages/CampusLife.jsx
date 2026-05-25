import { useState } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/shared/PageHero';
import { clubs, clubCategories } from '../data/clubs';
import {
  ArrowLeft, Users, Calendar,
  ChevronRight, Image, Newspaper, MapPin, Trophy
} from 'lucide-react';

function ClubCard({ club }) {
  const navigate = useNavigate();
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 cursor-pointer group hover:border-white/25 hover:shadow-card-hover transition-all duration-300"
      onClick={() => navigate(`/campus-life/clubs/${club.id}`)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{club.icon}</div>
        <span className="text-xs px-2.5 py-1 bg-dark-800 border border-white/10 rounded-full text-dark-300">
          {club.category}
        </span>
      </div>
      <h3 className={`font-display font-bold text-white text-xl mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${club.color} group-hover:bg-clip-text transition-all`}>
        {club.name}
      </h3>
      <p className="text-dark-400 text-xs italic mb-3">{club.tagline}</p>
      <p className="text-dark-300 text-sm leading-relaxed line-clamp-2 mb-4">{club.description}</p>
      <div className="flex items-center justify-between text-xs text-dark-500">
        <div className="flex items-center gap-2">
          <Users size={12} /> {club.members} members
        </div>
        <div className="flex items-center gap-1 text-brand-400 group-hover:gap-2 transition-all">
          Explore <ChevronRight size={12} />
        </div>
      </div>
    </motion.div>
  );
}

function ClubDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const club = clubs.find(c => c.id === slug);

  if (!club) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-dark-400 mb-4">Club not found.</p>
        <Link to="/campus-life/clubs" className="btn-primary">Back to Clubs</Link>
      </div>
    </div>
  );

  return (
    <div>
      <div className={`relative overflow-hidden bg-gradient-to-br ${club.color} py-16`}>
        <div className="absolute inset-0 bg-dark-950/70" />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
          <button onClick={() => navigate('/campus-life/clubs')} className="btn-ghost mb-6 text-sm">
            <ArrowLeft size={15} /> All Clubs
          </button>
          <div className="flex items-center gap-6">
            <div className="text-6xl">{club.icon}</div>
            <div>
              <h1 className="font-display font-black text-4xl text-white mb-1">{club.name}</h1>
              <p className="text-white/70 text-lg italic mb-3">{club.tagline}</p>
              <div className="flex flex-wrap gap-3 text-sm text-white/60">
                <span className="flex items-center gap-1"><Users size={13} /> {club.members} members</span>
                <span>·</span>
                <span>Founded {club.founded}</span>
                <span>·</span>
                <span>{club.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-7">
              <h2 className="font-display font-bold text-white text-xl mb-4">About {club.name}</h2>
              <p className="text-dark-300 leading-relaxed">{club.description}</p>
            </div>

            <div className="glass-card p-7">
              <h2 className="font-display font-bold text-white text-xl mb-4">Activities</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {club.activities.map((act, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-dark-800/40 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-brand-500 flex-shrink-0" />
                    <span className="text-dark-300 text-sm">{act}</span>
                  </div>
                ))}
              </div>
            </div>

            {club.achievements.length > 0 && (
              <div className="glass-card p-7">
                <h2 className="font-display font-bold text-white text-xl mb-4 flex items-center gap-2">
                  <Trophy size={18} className="text-yellow-400" /> Achievements
                </h2>
                <ul className="space-y-2.5">
                  {club.achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-3 text-dark-300 text-sm">
                      <span className="text-yellow-400">🏆</span> {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="space-y-5">
            <div className="glass-card p-6">
              <h3 className="font-display font-bold text-white mb-4">Club Head</h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-700 to-navy-700 flex items-center justify-center text-white font-bold text-sm">
                  {club.head.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{club.head.split('(')[0].trim()}</div>
                  <div className="text-dark-400 text-xs">{club.head.match(/\(.*?\)/)?.[0]?.replace(/[()]/g, '')}</div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-display font-bold text-white mb-4">Quick Stats</h3>
              <div className="space-y-3">
                {[
                  { label: 'Members', value: club.members },
                  { label: 'Founded', value: club.founded },
                  { label: 'Category', value: club.category },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-dark-400">{label}</span>
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClubsDirectory() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? clubs : clubs.filter(c => c.category === activeCategory);

  return (
    <div>
      <PageHero
        title="Campus Clubs"
        subtitle="Vibrant student clubs driving technical, cultural, and creative excellence at IIIT Pune"
        breadcrumbs={[{ label: 'Campus Life', href: '/campus-life' }, { label: 'Clubs' }]}
      />
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-10">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {clubCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-brand-700 text-white shadow-glow'
                  : 'bg-dark-800 text-dark-300 hover:text-white hover:bg-dark-700 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map(club => <ClubCard key={club.id} club={club} />)}
        </div>
      </div>
    </div>
  );
}

const galleryEvents = [
  { title: 'Prastuti 2024 — Annual Cultural Fest', date: 'March 2024', images: 24, highlight: true },
  { title: 'Graduation Ceremony 2024', date: 'July 2024', images: 18 },
  { title: 'Placement Drive 2024', date: 'Nov 2023', images: 12 },
  { title: 'Smart India Hackathon 2024', date: 'Sept 2024', images: 20 },
  { title: 'Yoga Day 2024', date: 'June 2024', images: 8 },
  { title: 'Thinking Machine Hackathon', date: 'Feb 2024', images: 15 },
];

export default function CampusLife() {
  return (
    <Routes>
      <Route index element={
        <div>
          <PageHero title="Campus Life" subtitle="Experience the vibrant community and culture at IIIT Pune" breadcrumbs={[{ label: 'Campus Life' }]} />
          <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: 'Clubs', href: '/campus-life/clubs', icon: '🎭', desc: '8 active student clubs' },
                { title: 'Photo Gallery', href: '/campus-life/gallery', icon: '📸', desc: 'Campus moments & events' },
                { title: 'College Events', href: '/campus-life/events', icon: '🎪', desc: 'Fests, hackathons & more' },
                { title: 'Magazine', href: '/campus-life/magazine', icon: '📖', desc: 'Eminence — student magazine' },
                { title: 'Campus Tour', href: '/campus-life/campus-tour', icon: '🏛️', desc: 'Virtual campus tour' },
                { title: 'Activities', href: '/campus-life/activities', icon: '🌿', desc: 'Fit India, Yoga Day, etc.' },
              ].map(({ title, href, icon, desc }) => (
                <Link key={title} to={href} className="feature-card text-center">
                  <div className="text-4xl mb-3">{icon}</div>
                  <h3 className="font-display font-bold text-white text-lg mb-1">{title}</h3>
                  <p className="text-dark-400 text-sm">{desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      } />
      <Route path="clubs" element={<ClubsDirectory />} />
      <Route path="clubs/:slug" element={<ClubDetailPage />} />
      <Route path="gallery" element={
        <div>
          <PageHero title="Photo Gallery" breadcrumbs={[{ label: 'Campus Life', href: '/campus-life' }, { label: 'Gallery' }]} />
          <div className="max-w-6xl mx-auto px-4 lg:px-6 py-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {galleryEvents.map((ev) => (
                <div key={ev.title} className={`glass-card-hover overflow-hidden ${ev.highlight ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
                  <div className="h-40 bg-gradient-to-br from-brand-900 to-navy-900 flex items-center justify-center">
                    <Image size={40} className="text-dark-500" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-sm mb-1">{ev.title}</h3>
                    <div className="flex justify-between text-xs text-dark-500">
                      <span>{ev.date}</span>
                      <span>{ev.images} photos</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      } />
      <Route path="events" element={
        <div>
          <PageHero title="College Events" breadcrumbs={[{ label: 'Campus Life', href: '/campus-life' }, { label: 'Events' }]} />
          <div className="max-w-4xl mx-auto px-4 lg:px-6 py-12 space-y-4">
            {[
              { title: 'Prastuti 2024 — Annual Cultural Fest', date: 'March 8-10, 2024', type: 'Cultural Fest', attendees: '1000+' },
              { title: 'Thinking Machine Hackathon', date: 'Feb 24-25, 2024', type: 'Hackathon', attendees: '200+' },
              { title: 'HR Summit 2024', date: 'Oct 15, 2024', type: 'Industry Event', attendees: '50+ companies' },
              { title: 'Research Day 2024', date: 'Sept 5, 2024', type: 'Academic', attendees: '300+' },
              { title: 'Alumni Meet 2024', date: 'Dec 20, 2024', type: 'Community', attendees: '150+' },
            ].map(ev => (
              <div key={ev.title} className="glass-card-hover p-5 flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-brand-950/60 border border-brand-800/40 flex items-center justify-center text-brand-400 flex-shrink-0">
                  <Calendar size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold">{ev.title}</h3>
                  <div className="text-dark-400 text-xs mt-1">{ev.date} · {ev.attendees} attendees</div>
                </div>
                <span className="badge-info text-xs">{ev.type}</span>
              </div>
            ))}
          </div>
        </div>
      } />
      <Route path="magazine" element={
        <div>
          <PageHero title="Eminence — Student Magazine" breadcrumbs={[{ label: 'Campus Life', href: '/campus-life' }, { label: 'Magazine' }]} />
          <div className="max-w-4xl mx-auto px-4 lg:px-6 py-12 text-center">
            <div className="glass-card p-10">
              <Newspaper size={48} className="text-brand-400 mx-auto mb-4" />
              <p className="text-dark-400 mb-6">Read Eminence — the annual magazine of IIIT Pune.</p>
              <a href="https://iiitp.ac.in/page/eminence" target="_blank" rel="noopener noreferrer" className="btn-primary">Read Magazine</a>
            </div>
          </div>
        </div>
      } />
      <Route path="campus-tour" element={
        <div>
          <PageHero title="Campus Tour" breadcrumbs={[{ label: 'Campus Life', href: '/campus-life' }, { label: 'Campus Tour' }]} />
          <div className="max-w-4xl mx-auto px-4 lg:px-6 py-12 text-center">
            <div className="glass-card p-10">
              <MapPin size={48} className="text-brand-400 mx-auto mb-4" />
              <h2 className="font-display font-bold text-white text-2xl mb-3">Virtual Campus Tour</h2>
              <p className="text-dark-400 mb-6">Explore IIIT Pune's campus — labs, hostels, sports facilities, and more.</p>
              <a href="https://www.iiitp.ac.in/page/permanent-campus" target="_blank" rel="noopener noreferrer" className="btn-primary">Explore Campus</a>
            </div>
          </div>
        </div>
      } />
      <Route path="activities" element={
        <div>
          <PageHero title="Activities" breadcrumbs={[{ label: 'Campus Life', href: '/campus-life' }, { label: 'Activities' }]} />
          <div className="max-w-4xl mx-auto px-4 lg:px-6 py-12">
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: 'Fit India Movement', icon: '🏃', desc: 'Annual fitness drives and awareness campaigns aligned with the national Fit India Movement.' },
                { title: 'Yoga Day', icon: '🧘', desc: 'International Yoga Day celebrations with mass yoga sessions on June 21.' },
                { title: 'Swachh Bharat', icon: '🌿', desc: 'Cleanliness drives and awareness programs as part of the Swachh Bharat Abhiyan.' },
                { title: 'Youth Day', icon: '⭐', desc: 'Celebrated on January 12th — Swami Vivekananda\'s birth anniversary.' },
              ].map(({ title, icon, desc }) => (
                <div key={title} className="glass-card p-6">
                  <div className="text-3xl mb-3">{icon}</div>
                  <h3 className="font-display font-bold text-white text-lg mb-2">{title}</h3>
                  <p className="text-dark-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      } />
    </Routes>
  );
}
