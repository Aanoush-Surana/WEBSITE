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
      className="glass-card overflow-hidden cursor-pointer group hover:border-brand-500/20 hover:shadow-card-hover transition-all duration-300 bg-white flex flex-col h-full"
      onClick={() => navigate(`/campus-life/clubs/${club.id}`)}
    >
      <div className="h-44 overflow-hidden relative">
        <img
          src={club.image}
          alt={club.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-transparent" />
        <span className="absolute top-3 right-3 text-xs px-2.5 py-1 bg-white/95 backdrop-blur-sm rounded-full text-dark-100 font-semibold shadow-sm border border-dark-700/50">
          {club.category}
        </span>
        <div className="absolute bottom-3 left-3 text-3xl drop-shadow-md">{club.icon}</div>
      </div>
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-display font-bold text-dark-100 text-xl mb-1 group-hover:text-brand-700 transition-colors">
            {club.name}
          </h3>
          <p className="text-dark-400 text-xs italic mb-3">{club.tagline}</p>
          <p className="text-dark-300 text-sm leading-relaxed line-clamp-2 mb-4">{club.description}</p>
        </div>
        <div className="flex items-center justify-between text-xs text-dark-500 pt-3 border-t border-dark-700/40">
          <div className="flex items-center gap-2">
            <Users size={12} /> {club.members} members
          </div>
          <div className="flex items-center gap-1 text-brand-700 group-hover:gap-2 transition-all font-medium">
            Explore <ChevronRight size={12} />
          </div>
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
      {/* Club Header with blurred image backdrop */}
      <div className="relative overflow-hidden py-16 bg-dark-900 border-b border-dark-700">
        <div className="absolute inset-0">
          <img
            src={club.image}
            alt={club.name}
            className="w-full h-full object-cover opacity-20 filter blur-[3px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/80 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
          <button onClick={() => navigate('/campus-life/clubs')} className="btn-ghost mb-6 text-sm text-dark-300 hover:text-brand-700">
            <ArrowLeft size={15} /> All Clubs
          </button>
          <div className="flex items-center gap-6">
            <div className="text-6xl p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">{club.icon}</div>
            <div>
              <h1 className="font-display font-black text-4xl text-dark-100 mb-1">{club.name}</h1>
              <p className="text-dark-300 text-lg italic mb-3">{club.tagline}</p>
              <div className="flex flex-wrap gap-3 text-sm text-dark-400">
                <span className="flex items-center gap-1"><Users size={13} /> {club.members} members</span>
                <span>·</span>
                <span>Founded {club.founded}</span>
                <span>·</span>
                <span className="font-semibold text-brand-700">{club.category} Club</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-7 bg-white">
              <h2 className="font-display font-bold text-dark-100 text-xl mb-4">About {club.name}</h2>
              <p className="text-dark-300 leading-relaxed">{club.description}</p>
            </div>

            <div className="glass-card p-7 bg-white">
              <h2 className="font-display font-bold text-dark-100 text-xl mb-4">Activities</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {club.activities.map((act, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-dark-800/40 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-brand-500 flex-shrink-0" />
                    <span className="text-dark-300 text-sm">{act}</span>
                  </div>
                ))}
              </div>
            </div>

            {club.events && club.events.length > 0 && (
              <div className="glass-card p-7 bg-white">
                <h2 className="font-display font-bold text-dark-100 text-xl mb-4 flex items-center gap-2">
                  <Calendar size={18} className="text-brand-700" /> Key Events & Fests
                </h2>
                <div className="space-y-4">
                  {club.events.map((evt, i) => (
                    <div key={i} className="p-4 bg-dark-800/40 rounded-xl border border-dark-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <h4 className="font-semibold text-dark-100 text-sm">{evt.name}</h4>
                        <p className="text-dark-400 text-xs mt-1">{evt.desc}</p>
                      </div>
                      <span className="text-xs px-2.5 py-1 bg-brand-50 border border-brand-100 text-brand-700 font-semibold rounded-full self-start sm:self-center flex-shrink-0">
                        {evt.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {club.achievements && club.achievements.length > 0 && (
              <div className="glass-card p-7 bg-white">
                <h2 className="font-display font-bold text-dark-100 text-xl mb-4 flex items-center gap-2">
                  <Trophy size={18} className="text-yellow-500" /> Achievements
                </h2>
                <ul className="space-y-2.5">
                  {club.achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-3 text-dark-300 text-sm">
                      <span className="text-yellow-500">🏆</span> {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="space-y-5">
            <div className="glass-card overflow-hidden bg-white">
              <img
                src={club.image}
                alt={club.name}
                className="w-full h-48 object-cover"
              />
            </div>

            <div className="glass-card p-6 bg-white">
              <h3 className="font-display font-bold text-dark-100 mb-4">Club Head</h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-700 to-navy-700 flex items-center justify-center text-white font-bold text-sm">
                  {club.head.charAt(0)}
                </div>
                <div>
                  <div className="text-dark-100 font-medium text-sm">{club.head.split('(')[0].trim()}</div>
                  <div className="text-dark-400 text-xs">{club.head.match(/\(.*?\)/)?.[0]?.replace(/[()]/g, '')}</div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 bg-white">
              <h3 className="font-display font-bold text-dark-100 mb-4">Quick Stats</h3>
              <div className="space-y-3">
                {[
                  { label: 'Members', value: club.members },
                  { label: 'Founded', value: club.founded },
                  { label: 'Category', value: club.category },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-dark-400">{label}</span>
                    <span className="text-dark-100 font-medium">{value}</span>
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
                  : 'bg-dark-800 text-dark-300 hover:text-brand-700 hover:bg-brand-50 border border-dark-700'
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
                <Link key={title} to={href} className="feature-card border border-dark-700 hover:border-brand-500/20 shadow-sm hover:shadow-md text-center bg-white group">
                  <div className="text-4xl mb-3">{icon}</div>
                  <h3 className="font-display font-bold text-dark-100 text-lg mb-1 group-hover:text-brand-700 transition-colors">{title}</h3>
                  <p className="text-dark-500 text-sm">{desc}</p>
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
                <div key={ev.title} className={`glass-card-hover overflow-hidden bg-white border border-dark-700 ${ev.highlight ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
                  <div className="h-40 bg-gradient-to-br from-brand-900 to-navy-900 flex items-center justify-center">
                    <Image size={40} className="text-white/40" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-dark-100 font-semibold text-sm mb-1">{ev.title}</h3>
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
              <div key={ev.title} className="glass-card-hover p-5 flex items-center gap-5 bg-white border border-dark-700">
                <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-700 flex-shrink-0">
                  <Calendar size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-dark-100 font-semibold">{ev.title}</h3>
                  <div className="text-dark-500 text-xs mt-1">{ev.date} · {ev.attendees} attendees</div>
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
            <div className="glass-card p-10 bg-white border border-dark-700">
              <Newspaper size={48} className="text-brand-700 mx-auto mb-4" />
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
            <div className="glass-card p-10 bg-white border border-dark-700">
              <MapPin size={48} className="text-brand-700 mx-auto mb-4" />
              <h2 className="font-display font-bold text-dark-100 text-2xl mb-3">Virtual Campus Tour</h2>
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
                <div key={title} className="glass-card p-6 bg-white border border-dark-700">
                  <div className="text-3xl mb-3">{icon}</div>
                  <h3 className="font-display font-bold text-dark-100 text-lg mb-2">{title}</h3>
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
