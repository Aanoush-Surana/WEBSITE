import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/shared/PageHero';
import {
  FlaskConical, TrendingUp, CheckCircle, GraduationCap, Library,
  Briefcase, CalendarDays, UserCog, Award, ExternalLink, Filter, Search
} from 'lucide-react';

const researchCenters = [
  {
    id: 'aai',
    name: 'Centre for AI & Intelligent Systems',
    abbr: 'CAIS',
    head: 'Dr. Pradip Bose',
    focus: 'Machine Learning, Computer Vision, NLP, Generative AI',
    projects: 5,
    scholars: 12,
    funded: '₹2.3 Cr',
    color: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'vlsi',
    name: 'VLSI Design & Embedded Systems Lab',
    abbr: 'VDES',
    head: 'Dr. Rajesh Kumar',
    focus: 'VLSI, SoC Design, Hardware Security, AI Accelerators',
    projects: 4,
    scholars: 8,
    funded: '₹1.8 Cr',
    color: 'from-brand-600 to-rose-700',
  },
  {
    id: 'cybersec',
    name: 'Centre for Cybersecurity & Cryptography',
    abbr: 'CCC',
    head: 'Dr. Neeraj Sharma',
    focus: 'IoT Security, Blockchain, Post-Quantum Cryptography',
    projects: 3,
    scholars: 7,
    funded: '₹95 L',
    color: 'from-purple-600 to-violet-700',
  },
  {
    id: 'wireless',
    name: 'Wireless & Communication Research Lab',
    abbr: 'WCRL',
    head: 'Dr. Sunita Rao',
    focus: '5G/6G Networks, Massive MIMO, mmWave Beamforming',
    projects: 3,
    scholars: 6,
    funded: '₹1.1 Cr',
    color: 'from-teal-600 to-cyan-700',
  },
  {
    id: 'data',
    name: 'Data Science & Analytics Lab',
    abbr: 'DSAL',
    head: 'Dr. Priya Mehta',
    focus: 'Big Data, Real-time Analytics, Cloud Computing',
    projects: 2,
    scholars: 5,
    funded: '₹75 L',
    color: 'from-green-600 to-emerald-700',
  },
  {
    id: 'nlp',
    name: 'Language Technology & NLP Lab',
    abbr: 'LTL',
    head: 'Dr. Manish Gupta',
    focus: 'Indic NLP, LLMs, Information Retrieval, Fake News Detection',
    projects: 4,
    scholars: 9,
    funded: '₹1.5 Cr',
    color: 'from-orange-600 to-red-700',
  },
];

const ongoingProjects = [
  { title: 'Development of Post-Quantum Cryptographic Algorithms for IoT Security', pi: 'Dr. Neeraj Sharma', agency: 'MEITY', amount: '₹40 Lakhs', year: '2022-2025', status: 'Ongoing' },
  { title: 'AI-Powered Medical Image Analysis for Early Cancer Detection', pi: 'Dr. Pradip Bose', agency: 'DST', amount: '₹45 Lakhs', year: '2023-2026', status: 'Ongoing' },
  { title: 'Massive MIMO Systems for 6G Networks', pi: 'Dr. Sunita Rao', agency: 'TIFAC', amount: '₹75 Lakhs', year: '2022-2025', status: 'Ongoing' },
  { title: 'Multilingual NLP for Indic Languages using LLMs', pi: 'Dr. Manish Gupta', agency: 'Google Research', amount: '₹90 Lakhs', year: '2022-2025', status: 'Ongoing' },
  { title: 'Low-Power AI Accelerator Chips for Edge Computing', pi: 'Dr. Rajesh Kumar', agency: 'Intel', amount: '₹1.2 Crore', year: '2023-2026', status: 'Ongoing' },
  { title: 'Federated Learning for Decentralized AI', pi: 'Dr. Kavita Joshi', agency: 'SERB', amount: '₹45 Lakhs', year: '2023-2026', status: 'Ongoing' },
];

const completedProjects = [
  { title: 'Smart Agriculture IoT Platform', pi: 'Dr. Priya Mehta', agency: 'MEITY', amount: '₹35 Lakhs', year: '2019-2022', status: 'Completed' },
  { title: 'Blockchain-based Healthcare Data Sharing', pi: 'Dr. Neeraj Sharma', agency: 'DST', amount: '₹28 Lakhs', year: '2020-2023', status: 'Completed' },
  { title: 'Real-time Video Analytics System', pi: 'Dr. Pradip Bose', agency: 'SERB', amount: '₹32 Lakhs', year: '2018-2021', status: 'Completed' },
];

function ProjectTable({ projects }) {
  return (
    <div className="glass-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-dark-800/50">
            <tr>
              <th className="text-left p-4 text-dark-300 text-xs font-semibold uppercase tracking-wider">Project Title</th>
              <th className="text-left p-4 text-dark-300 text-xs font-semibold uppercase tracking-wider">PI</th>
              <th className="text-left p-4 text-dark-300 text-xs font-semibold uppercase tracking-wider">Agency</th>
              <th className="text-left p-4 text-dark-300 text-xs font-semibold uppercase tracking-wider">Amount</th>
              <th className="text-left p-4 text-dark-300 text-xs font-semibold uppercase tracking-wider">Period</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {projects.map((proj, i) => (
              <tr key={i} className="hover:bg-white/3 transition-colors">
                <td className="p-4 text-white text-sm font-medium max-w-xs">{proj.title}</td>
                <td className="p-4 text-dark-300 text-sm whitespace-nowrap">{proj.pi}</td>
                <td className="p-4">
                  <span className="badge-info text-xs">{proj.agency}</span>
                </td>
                <td className="p-4 text-brand-400 text-sm font-bold whitespace-nowrap">{proj.amount}</td>
                <td className="p-4 text-dark-400 text-xs whitespace-nowrap">{proj.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ResearchOverview() {
  return (
    <div>
      <PageHero
        title="Research"
        subtitle="Pushing the boundaries of knowledge through world-class research and innovation"
        breadcrumbs={[{ label: 'Research' }]}
      />

      {/* Stats */}
      <div className="bg-dark-900/60 border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '6', label: 'Research Centers', color: 'text-blue-400' },
            { value: '22+', label: 'Funded Projects', color: 'text-green-400' },
            { value: '₹9 Cr+', label: 'Total Funding', color: 'text-brand-400' },
            { value: '47', label: 'Research Scholars', color: 'text-purple-400' },
          ].map(({ value, label, color }) => (
            <div key={label} className="text-center">
              <div className={`font-display font-black text-3xl ${color}`}>{value}</div>
              <div className="text-dark-400 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16">
        {/* Research Centers */}
        <div className="mb-12">
          <h2 className="font-display font-bold text-white text-2xl mb-6 flex items-center gap-3">
            <FlaskConical size={22} className="text-brand-400" /> Research Centers
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {researchCenters.map((center) => (
              <Link
                key={center.id}
                to={`/research/centers`}
                className="feature-card group"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${center.color} flex items-center justify-center text-white font-bold text-sm mb-4 group-hover:scale-110 transition-transform`}>
                  {center.abbr}
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2 leading-tight">{center.name}</h3>
                <p className="text-dark-400 text-xs mb-3">{center.focus}</p>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-dark-300">{center.projects} projects</span>
                  <span className="text-dark-300">{center.scholars} scholars</span>
                  <span className="text-green-400 font-semibold">{center.funded}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Ongoing projects preview */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-white text-2xl flex items-center gap-3">
              <TrendingUp size={22} className="text-brand-400" /> Ongoing Funded Projects
            </h2>
            <Link to="/research/funded-projects/ongoing" className="btn-ghost text-sm">
              View All →
            </Link>
          </div>
          <ProjectTable projects={ongoingProjects.slice(0, 3)} />
        </div>
      </div>
    </div>
  );
}

function CentersPage() {
  return (
    <div>
      <PageHero
        title="Research Centers"
        subtitle="Specialized laboratories and centers driving innovation at IIIT Pune"
        breadcrumbs={[{ label: 'Research', href: '/research' }, { label: 'Centers' }]}
      />
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16 space-y-6">
        {researchCenters.map((center) => (
          <div key={center.id} className="glass-card p-7 hover:border-white/20 transition-all">
            <div className="flex items-start gap-5">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${center.color} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                {center.abbr}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display font-bold text-white text-xl">{center.name}</h3>
                  <span className="text-green-400 font-bold text-sm flex-shrink-0">{center.funded}</span>
                </div>
                <p className="text-brand-400 text-sm mt-1 mb-2">Head: {center.head}</p>
                <p className="text-dark-300 text-sm mb-3">Focus Areas: {center.focus}</p>
                <div className="flex gap-4 text-xs text-dark-400">
                  <span>{center.projects} funded projects</span>
                  <span>·</span>
                  <span>{center.scholars} research scholars</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Research() {
  return (
    <Routes>
      <Route index element={<ResearchOverview />} />
      <Route path="centers" element={<CentersPage />} />
      <Route path="funded-projects/ongoing" element={
        <div>
          <PageHero title="Funded Projects — Ongoing" breadcrumbs={[{ label: 'Research', href: '/research' }, { label: 'Ongoing Projects' }]} />
          <div className="max-w-6xl mx-auto px-4 lg:px-6 py-16">
            <ProjectTable projects={ongoingProjects} />
          </div>
        </div>
      } />
      <Route path="funded-projects/completed" element={
        <div>
          <PageHero title="Funded Projects — Completed" breadcrumbs={[{ label: 'Research', href: '/research' }, { label: 'Completed Projects' }]} />
          <div className="max-w-6xl mx-auto px-4 lg:px-6 py-16">
            <ProjectTable projects={completedProjects} />
          </div>
        </div>
      } />
      <Route path="scholars/institute-scheme" element={
        <div>
          <PageHero title="Research Scholars — Institute Scheme" breadcrumbs={[{ label: 'Research', href: '/research' }, { label: 'Institute Scheme' }]} />
          <div className="max-w-4xl mx-auto px-4 lg:px-6 py-16">
            <div className="glass-card p-8 text-center">
              <GraduationCap size={48} className="text-brand-400 mx-auto mb-4" />
              <p className="text-dark-400">Institute Scheme Ph.D. Scholars — detailed list available on official website.</p>
              <a href="https://www.iiitp.ac.in" target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 inline-flex">View List</a>
            </div>
          </div>
        </div>
      } />
      <Route path="scholars/visvesvaraya" element={
        <div>
          <PageHero title="Visvesvaraya Ph.D. Scheme Scholars" breadcrumbs={[{ label: 'Research', href: '/research' }, { label: 'Visvesvaraya Scheme' }]} />
          <div className="max-w-4xl mx-auto px-4 lg:px-6 py-16">
            <div className="glass-card p-8 text-center">
              <Award size={48} className="text-brand-400 mx-auto mb-4" />
              <p className="text-dark-400">Visvesvaraya Ph.D. Scheme scholars list.</p>
              <a href="https://www.iiitp.ac.in" target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 inline-flex">View List</a>
            </div>
          </div>
        </div>
      } />
      <Route path="scholars/graduated" element={
        <div>
          <PageHero title="Graduated Ph.D. Students" breadcrumbs={[{ label: 'Research', href: '/research' }, { label: 'Graduated' }]} />
          <div className="max-w-4xl mx-auto px-4 lg:px-6 py-16">
            <div className="glass-card p-8 text-center">
              <GraduationCap size={48} className="text-brand-400 mx-auto mb-4" />
              <p className="text-dark-400">List of graduated Ph.D. students from IIIT Pune.</p>
              <a href="https://www.iiitp.ac.in" target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 inline-flex">View List</a>
            </div>
          </div>
        </div>
      } />
      <Route path="library" element={
        <div>
          <PageHero title="Library" breadcrumbs={[{ label: 'Research', href: '/research' }, { label: 'Library' }]} />
          <div className="max-w-4xl mx-auto px-4 lg:px-6 py-16">
            <div className="glass-card p-8 text-center">
              <Library size={48} className="text-brand-400 mx-auto mb-4" />
              <h2 className="font-display font-bold text-white text-2xl mb-3">IIIT Pune Library</h2>
              <p className="text-dark-400 mb-6">Access the library portal, e-journals, IRINS repository, and IDP.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="https://sites.google.com/iiitp.ac.in/library" target="_blank" rel="noopener noreferrer" className="btn-primary">Library Website <ExternalLink size={13} /></a>
                <a href="https://iiitp.irins.org" target="_blank" rel="noopener noreferrer" className="btn-secondary">IRINS <ExternalLink size={13} /></a>
              </div>
            </div>
          </div>
        </div>
      } />
      <Route path="internship" element={
        <div>
          <PageHero title="Internship @ IIIT Pune" breadcrumbs={[{ label: 'Research', href: '/research' }, { label: 'Internship' }]} />
          <div className="max-w-4xl mx-auto px-4 lg:px-6 py-16">
            <div className="glass-card p-8">
              <Briefcase size={32} className="text-brand-400 mb-4" />
              <h2 className="font-display font-bold text-white text-2xl mb-4">Research Internship Program</h2>
              <p className="text-dark-300 leading-relaxed mb-6">
                IIIT Pune offers summer and winter research internship opportunities for exceptional undergraduate students
                from other colleges. Interns work with faculty on funded research projects.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {['Summer Internship (May-July)', 'Winter Internship (Dec-Jan)'].map(t => (
                  <div key={t} className="bg-dark-800/50 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">{t}</h4>
                    <p className="text-dark-400 text-sm">Applications open. Check official website for deadlines.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      } />
      <Route path="events" element={
        <div>
          <PageHero title="Research Events" breadcrumbs={[{ label: 'Research', href: '/research' }, { label: 'Events' }]} />
          <div className="max-w-4xl mx-auto px-4 lg:px-6 py-16">
            <div className="glass-card p-8 text-center">
              <CalendarDays size={48} className="text-brand-400 mx-auto mb-4" />
              <p className="text-dark-400">Research events and seminars at IIIT Pune.</p>
            </div>
          </div>
        </div>
      } />
      <Route path="postdoc" element={
        <div>
          <PageHero title="PostDoc Fellow" breadcrumbs={[{ label: 'Research', href: '/research' }, { label: 'PostDoc' }]} />
          <div className="max-w-4xl mx-auto px-4 lg:px-6 py-16">
            <div className="glass-card p-8 text-center">
              <UserCog size={48} className="text-brand-400 mx-auto mb-4" />
              <p className="text-dark-400">Postdoctoral fellowship opportunities at IIIT Pune.</p>
              <a href="https://www.iiitp.ac.in" target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 inline-flex">View Openings</a>
            </div>
          </div>
        </div>
      } />
    </Routes>
  );
}
