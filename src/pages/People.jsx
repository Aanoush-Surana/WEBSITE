import { useState } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/shared/PageHero';
import { facultyData, departments, expertiseAreas } from '../data/faculty';
import {
  Search, Filter, Mail, Phone, ExternalLink, Download, BookOpen,
  FlaskConical, Award, Code, ChevronRight, ArrowLeft, Users, UserPlus, UserCheck
} from 'lucide-react';

// Initials avatar with gradient
function Avatar({ name, size = 'md' }) {
  const initials = name.split(' ').slice(-2).map(n => n[0]).join('');
  const sizeClass = size === 'lg' ? 'w-20 h-20 text-2xl' : size === 'sm' ? 'w-10 h-10 text-sm' : 'w-14 h-14 text-lg';
  return (
    <div className={`${sizeClass} rounded-2xl bg-gradient-to-br from-brand-700 to-navy-700 flex items-center justify-center text-white font-bold flex-shrink-0`}>
      {initials}
    </div>
  );
}

function FacultyCard({ faculty }) {
  const navigate = useNavigate();
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-5 cursor-pointer group hover:border-brand-500/20 hover:shadow-card-hover transition-all duration-300 bg-white"
      onClick={() => navigate(`/people/faculty/${faculty.id}`)}
    >
      <div className="flex items-start gap-4 mb-4">
        <Avatar name={faculty.name} />
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-dark-100 text-base group-hover:text-brand-700 transition-colors leading-tight mb-0.5">
            {faculty.name}
          </h3>
          <p className="text-brand-700 text-xs font-medium">{faculty.designation}</p>
          <p className="text-dark-400 text-xs mt-0.5">{faculty.departmentFull}</p>
        </div>
        {faculty.type === 'visiting' && (
          <span className="badge-info text-xs flex-shrink-0">Visiting</span>
        )}
      </div>

      {/* Expertise tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {faculty.expertise.slice(0, 3).map((exp) => (
          <span key={exp} className="px-2.5 py-1 bg-dark-800/60 border border-dark-700 rounded-lg text-xs text-dark-300 hover:border-brand-700/40 hover:text-brand-700 transition-colors">
            {exp}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-dark-500">
          <span>{faculty.publications.length} papers</span>
          {faculty.awards.length > 0 && (
            <>
              <span>·</span>
              <span>{faculty.awards.length} award{faculty.awards.length > 1 ? 's' : ''}</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-1 text-xs text-dark-500 group-hover:text-brand-700 transition-colors">
          View Profile <ChevronRight size={12} />
        </div>
      </div>
    </motion.div>
  );
}

function FacultyDirectory() {
  const [search, setSearch] = useState('');
  const [dept, setDept] = useState('All');
  const [expertise, setExpertise] = useState('All Areas');
  const [typeFilter, setTypeFilter] = useState('all');

  const filtered = facultyData.filter(f => {
    const matchSearch = search === '' ||
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.expertise.some(e => e.toLowerCase().includes(search.toLowerCase()));
    const matchDept = dept === 'All' || f.department === dept;
    const matchExpertise = expertise === 'All Areas' || f.expertise.includes(expertise);
    const matchType = typeFilter === 'all' || f.type === typeFilter;
    return matchSearch && matchDept && matchExpertise && matchType;
  });

  return (
    <div>
      <PageHero
        title="Faculty Directory"
        subtitle="Meet our distinguished faculty — researchers and educators from India's premier institutions"
        breadcrumbs={[{ label: 'People', href: '/people' }, { label: 'Faculty' }]}
        tag="Academic Excellence"
      >
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { label: `${facultyData.filter(f => f.type === 'regular').length} Regular Faculty`, color: 'badge-info' },
            { label: `${facultyData.filter(f => f.type === 'visiting').length} Visiting Faculty`, color: 'badge-new' },
            { label: `${departments.length - 1} Departments`, color: 'badge-info' },
          ].map(({ label, color }) => (
            <span key={label} className={color}>{label}</span>
          ))}
        </div>
      </PageHero>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-10">
        {/* Filters */}
        <div className="glass-card p-4 mb-8 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400" />
            <input
              type="search"
              placeholder="Search by name or expertise..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="input-glass pl-9 text-sm w-full"
            />
          </div>
          <select
            value={dept}
            onChange={e => setDept(e.target.value)}
            className="input-glass text-sm sm:w-36"
          >
            {departments.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
          <select
            value={typeFilter}
            onChange={e => setTypeFilter(e.target.value)}
            className="input-glass text-sm sm:w-40"
          >
            <option value="all">All Faculty</option>
            <option value="regular">Regular</option>
            <option value="visiting">Visiting</option>
          </select>
        </div>

        {/* Count */}
        <p className="text-dark-400 text-sm mb-5">
          Showing {filtered.length} of {facultyData.length} faculty members
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(f => <FacultyCard key={f.id} faculty={f} />)}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Users size={48} className="text-dark-600 mx-auto mb-4" />
            <p className="text-dark-400">No faculty found matching your search.</p>
            <button onClick={() => { setSearch(''); setDept('All'); setExpertise('All Areas'); setTypeFilter('all'); }} className="btn-ghost mt-3">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function FacultyProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about');
  const faculty = facultyData.find(f => f.id === id);

  if (!faculty) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-dark-400 mb-4">Faculty profile not found.</p>
        <Link to="/people/faculty" className="btn-primary">Back to Faculty</Link>
      </div>
    </div>
  );

  const tabs = [
    { id: 'about', label: 'About', icon: Users },
    { id: 'research', label: 'Research', icon: FlaskConical },
    { id: 'publications', label: 'Publications', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div>
      {/* Profile header */}
      <div className="relative overflow-hidden bg-hero-gradient py-14">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-900/20 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          {/* Back */}
          <button onClick={() => navigate('/people/faculty')} className="btn-ghost mb-6 text-sm">
            <ArrowLeft size={15} /> Faculty Directory
          </button>

          <div className="flex flex-col sm:flex-row items-start gap-7">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-700 to-navy-700 flex items-center justify-center text-white font-black text-3xl shadow-glow flex-shrink-0">
              {faculty.name.split(' ').slice(-2).map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h1 className="font-display font-black text-3xl text-dark-100 mb-1">{faculty.name}</h1>
                  <p className="text-brand-700 font-semibold text-lg">{faculty.designation}</p>
                  <p className="text-dark-300 mt-0.5">{faculty.departmentFull} · IIIT Pune</p>
                </div>
                <div className="flex gap-3">
                  {faculty.googleScholar && (
                    <a href={faculty.googleScholar} target="_blank" rel="noopener noreferrer" className="btn-secondary text-xs px-3 py-2">
                      Google Scholar <ExternalLink size={12} />
                    </a>
                  )}
                  <a href="#" className="btn-ghost text-xs">
                    <Download size={13} /> CV
                  </a>
                </div>
              </div>

              {/* Expertise */}
              <div className="flex flex-wrap gap-2 mt-4">
                {faculty.expertise.map(exp => (
                  <span key={exp} className="px-3 py-1 bg-brand-50 border border-brand-100 text-brand-700 text-xs font-medium rounded-full">
                    {exp}
                  </span>
                ))}
              </div>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-5 mt-4">
                {[
                  { label: 'Publications', value: faculty.publications.length },
                  { label: 'Awards', value: faculty.awards.length },
                  { label: 'Projects', value: faculty.projects.length },
                  { label: 'Joined', value: faculty.joinYear },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <span className="text-dark-100 font-bold text-lg">{value}</span>
                    <span className="text-dark-400 text-xs ml-1.5">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-dark-950 border-b border-dark-700 sticky top-16 z-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex overflow-x-auto">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-5 py-4 text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
                  activeTab === id
                    ? 'border-brand-700 text-brand-700 font-semibold'
                    : 'border-transparent text-dark-400 hover:text-brand-700 hover:border-dark-500'
                }`}
              >
                <Icon size={15} />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-10">
        {activeTab === 'about' && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="glass-card p-7">
                <h2 className="font-display font-bold text-dark-100 text-xl mb-4">Biography</h2>
                <p className="text-dark-300 leading-relaxed">{faculty.bio}</p>
              </div>
              <div className="glass-card p-7">
                <h2 className="font-display font-bold text-dark-100 text-xl mb-4">Education</h2>
                <div className="space-y-4">
                  {faculty.education.map((edu, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
                      <div>
                        <div className="text-dark-100 font-semibold">{edu.degree} — {edu.field}</div>
                        <div className="text-dark-400 text-sm">{edu.institute}, {edu.year}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {faculty.awards.length > 0 && (
                <div className="glass-card p-7">
                  <h2 className="font-display font-bold text-dark-100 text-xl mb-4 flex items-center gap-2">
                    <Award size={18} className="text-yellow-500" /> Awards & Honors
                  </h2>
                  <ul className="space-y-2.5">
                    {faculty.awards.map((a, i) => (
                      <li key={i} className="flex items-start gap-3 text-dark-300 text-sm">
                        <span className="text-yellow-500 mt-0.5">🏆</span> {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="space-y-5">
              <div className="glass-card p-5">
                <h3 className="font-display font-bold text-dark-100 mb-3">Courses Taught</h3>
                <ul className="space-y-2">
                  {faculty.subjects.map((s, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-dark-300">
                      <BookOpen size={13} className="text-brand-700 flex-shrink-0" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
              {faculty.projects.length > 0 && (
                <div className="glass-card p-5">
                  <h3 className="font-display font-bold text-dark-100 mb-3">Funded Projects</h3>
                  <ul className="space-y-2">
                    {faculty.projects.map((p, i) => (
                      <li key={i} className="text-sm text-dark-300 flex items-start gap-2">
                        <span className="text-green-600 mt-0.5 flex-shrink-0">💰</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'research' && (
          <div className="space-y-6">
            <div className="glass-card p-7">
              <h2 className="font-display font-bold text-dark-100 text-xl mb-5">Research Interests</h2>
              <div className="flex flex-wrap gap-3">
                {faculty.research.map(r => (
                  <div key={r} className="px-4 py-2.5 bg-brand-50 border border-brand-100 rounded-xl text-sm font-medium text-brand-700">
                    {r}
                  </div>
                ))}
              </div>
            </div>
            {faculty.projects.length > 0 && (
              <div className="glass-card p-7">
                <h2 className="font-display font-bold text-dark-100 text-xl mb-5">Research Projects</h2>
                <div className="space-y-3">
                  {faculty.projects.map((p, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-dark-800/30">
                      <div className="text-green-600">💰</div>
                      <span className="text-dark-300 text-sm">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'publications' && (
          <div className="space-y-4">
            {faculty.publications.length === 0 ? (
              <div className="glass-card p-10 text-center">
                <BookOpen size={40} className="text-dark-600 mx-auto mb-3" />
                <p className="text-dark-400">Publications list will be added soon.</p>
              </div>
            ) : faculty.publications.map((pub, i) => (
              <div key={i} className="glass-card p-5 hover:border-brand-500/20 transition-all group bg-white">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-dark-100 text-base mb-1.5 group-hover:text-brand-700 transition-colors">{pub.title}</h3>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-brand-700 font-medium">{pub.journal}</span>
                      <span className="text-dark-500">·</span>
                      <span className="text-dark-400">{pub.year}</span>
                    </div>
                  </div>
                  <a href="#" className="btn-ghost text-xs flex-shrink-0">PDF <ExternalLink size={11} /></a>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="max-w-lg">
            <div className="glass-card p-7 space-y-4">
              <h2 className="font-display font-bold text-dark-100 text-xl mb-5">Contact Information</h2>
              {faculty.email && (
                <a href={`mailto:${faculty.email}`} className="flex items-center gap-4 p-4 bg-dark-800/50 rounded-xl hover:bg-brand-50 transition-colors">
                  <Mail size={18} className="text-brand-700" />
                  <div>
                    <div className="text-dark-400 text-xs mb-0.5">Email</div>
                    <div className="text-dark-100 font-medium">{faculty.email}</div>
                  </div>
                </a>
              )}
              {faculty.phone && (
                <div className="flex items-center gap-4 p-4 bg-dark-800/50 rounded-xl">
                  <Phone size={18} className="text-brand-700" />
                  <div>
                    <div className="text-dark-400 text-xs mb-0.5">Phone</div>
                    <div className="text-dark-100 font-medium">{faculty.phone}</div>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-4 p-4 bg-dark-800/50 rounded-xl">
                <Code size={18} className="text-brand-700" />
                <div>
                  <div className="text-dark-400 text-xs mb-0.5">Department</div>
                  <div className="text-dark-100 font-medium">{faculty.departmentFull}</div>
                  <div className="text-dark-400 text-xs">IIIT Pune, Nanoli Tarf Chakan, Pune 410507</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function GenericPeoplePage({ title, subtitle, breadcrumbs, icon: Icon, children }) {
  return (
    <div>
      <PageHero title={title} subtitle={subtitle} breadcrumbs={[{ label: 'People', href: '/people' }, ...breadcrumbs]} />
      <div className="max-w-4xl mx-auto px-4 lg:px-6 py-16">
        {children || (
          <div className="glass-card p-10 text-center">
            <Icon size={48} className="text-brand-400 mx-auto mb-4" />
            <p className="text-dark-400 mb-6">Information will be available here.</p>
            <a href="https://www.iiitp.ac.in" target="_blank" rel="noopener noreferrer" className="btn-primary">View on Official Website</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function People() {
  return (
    <Routes>
      <Route index element={
        <div>
          <PageHero title="People" subtitle="Faculty, staff, alumni, and student community of IIIT Pune" breadcrumbs={[{ label: 'People' }]} />
          <div className="max-w-5xl mx-auto px-4 lg:px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Faculty Directory', href: '/people/faculty', icon: Users, desc: '60+ faculty from premier institutes' },
              { title: 'Visiting Faculty', href: '/people/visiting-faculty', icon: UserPlus, desc: 'Industry and academic visitors' },
              { title: 'Regular Staff', href: '/people/staff/regular', icon: UserCheck, desc: 'Permanent non-teaching staff' },
              { title: 'Contract Staff', href: '/people/staff/contract', icon: UserCheck, desc: 'Contract employees' },
              { title: 'Alumni', href: '/people/alumni', icon: Users, desc: 'IIIT Pune graduates worldwide' },
              { title: 'Student Council', href: '/people/student-council', icon: Users, desc: 'Student representatives' },
            ].map(({ title, href, icon: Icon, desc }) => (
              <Link key={title} to={href} className="feature-card border border-dark-700 hover:border-brand-500/20 shadow-sm hover:shadow-md text-center bg-white group">
                <Icon size={28} className="text-brand-700 mx-auto mb-3" />
                <h3 className="font-display font-bold text-dark-100 text-lg mb-1 group-hover:text-brand-700 transition-colors">{title}</h3>
                <p className="text-dark-500 text-sm">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      } />
      <Route path="faculty" element={<FacultyDirectory />} />
      <Route path="faculty/:id" element={<FacultyProfile />} />
      <Route path="visiting-faculty" element={
        <GenericPeoplePage title="Visiting Faculty" subtitle="Distinguished visiting professors and industry experts" breadcrumbs={[{ label: 'Visiting Faculty' }]} icon={UserPlus}>
          <div className="grid sm:grid-cols-2 gap-5">
            {facultyData.filter(f => f.type === 'visiting').map(f => <FacultyCard key={f.id} faculty={f} />)}
          </div>
        </GenericPeoplePage>
      } />
      <Route path="staff/regular" element={<GenericPeoplePage title="Regular Non-Teaching Staff" subtitle="Permanent staff members of IIIT Pune" breadcrumbs={[{ label: 'Staff' }, { label: 'Regular' }]} icon={UserCheck} />} />
      <Route path="staff/contract" element={<GenericPeoplePage title="Contract Staff" subtitle="Contract-based staff at IIIT Pune" breadcrumbs={[{ label: 'Staff' }, { label: 'Contract' }]} icon={UserCheck} />} />
      <Route path="alumni" element={<GenericPeoplePage title="Alumni" subtitle="IIIT Pune graduates making an impact worldwide" breadcrumbs={[{ label: 'Alumni' }]} icon={Users} />} />
      <Route path="student-council" element={<GenericPeoplePage title="Student Council" subtitle="Elected student representatives for 2025-26" breadcrumbs={[{ label: 'Student Council' }]} icon={Users} />} />
    </Routes>
  );
}
