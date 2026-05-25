import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/shared/PageHero';
import {
  GraduationCap, Code2, CircuitBoard, Star, Calendar, Receipt,
  Scroll, BookOpen, ChevronRight, Download, Clock, Award
} from 'lucide-react';

const programs = [
  {
    id: 'btech-cse',
    title: 'B.Tech Computer Science & Engineering',
    shortTitle: 'B.Tech CSE',
    duration: '4 Years',
    intake: 120,
    admission: 'JoSAA (JEE Main)',
    description: 'The flagship B.Tech CSE program prepares students for careers in software development, AI/ML, data science, cybersecurity, and research. The curriculum is designed in collaboration with industry to ensure graduates are industry-ready.',
    semesters: [
      { sem: 1, subjects: ['Engineering Mathematics I', 'Physics', 'Programming in C', 'Engineering Drawing', 'Communication Skills'] },
      { sem: 2, subjects: ['Engineering Mathematics II', 'Chemistry', 'Data Structures', 'Digital Logic', 'Environmental Science'] },
      { sem: 3, subjects: ['Discrete Mathematics', 'OOP with Java', 'Computer Organization', 'Probability & Statistics', 'Algorithms'] },
      { sem: 4, subjects: ['Database Management', 'Operating Systems', 'Computer Networks', 'Theory of Computation', 'Mini Project'] },
      { sem: 5, subjects: ['Compiler Design', 'Software Engineering', 'AI & ML', 'Elective I', 'Elective II'] },
      { sem: 6, subjects: ['Big Data Analytics', 'Cloud Computing', 'Information Security', 'Elective III', 'Elective IV'] },
      { sem: 7, subjects: ['Major Project Part I', 'Open Elective', 'Industrial Training'] },
      { sem: 8, subjects: ['Major Project Part II', 'Comprehensive Viva', 'Internship'] },
    ],
    color: 'from-blue-600 to-indigo-700',
    icon: Code2,
    highlights: ['120 intake seats', 'Strong placement record', 'Industry electives', 'Research track available'],
  },
  {
    id: 'btech-ece',
    title: 'B.Tech Electronics & Communication Engineering',
    shortTitle: 'B.Tech ECE',
    duration: '4 Years',
    intake: 60,
    admission: 'JoSAA (JEE Main)',
    description: 'The B.Tech ECE program focuses on VLSI design, embedded systems, wireless communications, signal processing, and IoT. Graduates find excellent opportunities in semiconductor companies and telecom industries.',
    semesters: [
      { sem: 1, subjects: ['Engineering Mathematics I', 'Physics', 'Programming in C', 'Engineering Drawing', 'Communication Skills'] },
      { sem: 2, subjects: ['Engineering Mathematics II', 'Network Theory', 'Electronic Devices', 'Digital Electronics', 'Environmental Science'] },
      { sem: 3, subjects: ['Signals & Systems', 'Analog Circuits', 'Electromagnetic Theory', 'Programming Lab', 'Mathematics III'] },
      { sem: 4, subjects: ['Digital Signal Processing', 'Communication Systems', 'Microprocessors', 'Control Systems', 'Mini Project'] },
      { sem: 5, subjects: ['VLSI Design', 'Wireless Communications', 'Embedded Systems', 'Elective I', 'Elective II'] },
      { sem: 6, subjects: ['RF & Microwave', 'Image Processing', 'IoT Systems', 'Elective III', 'Elective IV'] },
      { sem: 7, subjects: ['Major Project Part I', 'Open Elective', 'Industrial Training'] },
      { sem: 8, subjects: ['Major Project Part II', 'Comprehensive Viva', 'Internship'] },
    ],
    color: 'from-brand-600 to-brand-800',
    icon: CircuitBoard,
    highlights: ['60 intake seats', 'VLSI & IoT specialization', 'Industry collaboration', 'Lab-intensive program'],
  },
  {
    id: 'btech-honors',
    title: 'B.Tech Honors Program',
    shortTitle: 'B.Tech Honors',
    duration: '4 Years',
    intake: 40,
    admission: 'Internal selection after 4th sem',
    description: 'The B.Tech Honors program is for academically exceptional students who wish to pursue additional credits in specialized areas like AI/ML, cybersecurity, or advanced electronics. Students maintain CGPA ≥ 8.0.',
    semesters: [],
    color: 'from-yellow-500 to-orange-600',
    icon: Star,
    highlights: ['CGPA ≥ 8.0 required', '24 extra credits', 'Research focus', 'Industry mentorship'],
  },
  {
    id: 'mtech-cse',
    title: 'M.Tech Computer Science & Engineering',
    shortTitle: 'M.Tech CSE',
    duration: '2 Years',
    intake: 30,
    admission: 'GATE (CS/IT)',
    description: 'Advanced postgraduate program in CSE with focus areas in AI/ML, distributed systems, NLP, computer vision, and cybersecurity. GATE scholars receive stipend of ₹12,400/month.',
    semesters: [
      { sem: 1, subjects: ['Advanced Algorithms', 'Advanced OS', 'ML Foundations', 'Research Methodology', 'Elective I'] },
      { sem: 2, subjects: ['Deep Learning', 'Distributed Computing', 'Advanced Database', 'Elective II', 'Elective III'] },
      { sem: 3, subjects: ['Thesis Part I', 'Seminar', 'Elective IV'] },
      { sem: 4, subjects: ['Thesis Part II', 'Comprehensive Exam', 'Publication'] },
    ],
    color: 'from-purple-600 to-indigo-700',
    icon: GraduationCap,
    highlights: ['GATE scholarship available', 'Research-oriented', 'Industry internship', 'Publication support'],
  },
  {
    id: 'mtech-ece',
    title: 'M.Tech Electronics & Communication Engineering',
    shortTitle: 'M.Tech ECE',
    duration: '2 Years',
    intake: 20,
    admission: 'GATE (EC)',
    description: 'Postgraduate program in ECE with specializations in VLSI, wireless communications, signal processing, and embedded systems design.',
    semesters: [
      { sem: 1, subjects: ['Advanced DSP', 'VLSI CAD', 'Advanced Communication', 'Research Methods', 'Elective I'] },
      { sem: 2, subjects: ['Advanced VLSI', '5G Systems', 'IoT Architecture', 'Elective II', 'Elective III'] },
      { sem: 3, subjects: ['Thesis Part I', 'Seminar', 'Elective IV'] },
      { sem: 4, subjects: ['Thesis Part II', 'Comprehensive Exam', 'Publication'] },
    ],
    color: 'from-teal-600 to-cyan-700',
    icon: CircuitBoard,
    highlights: ['GATE scholarship available', 'VLSI lab access', 'Industry projects', 'Publication support'],
  },
  {
    id: 'phd',
    title: 'Ph.D. Program',
    shortTitle: 'Ph.D.',
    duration: '3-5 Years',
    intake: 'Variable',
    admission: 'Written Test + Interview',
    description: 'The doctoral program at IIIT Pune offers research opportunities in all areas of CSE and ECE. Ph.D. scholars work under the supervision of faculty members and may receive fellowship support.',
    semesters: [],
    color: 'from-rose-600 to-brand-700',
    icon: Award,
    highlights: ['Institute scheme fellowship', 'Visvesvaraya scheme', 'Conference funding', 'International collaboration'],
  },
];

function ProgramPage({ programId }) {
  const [activeSem, setActiveSem] = useState(0);
  const program = programs.find(p => p.id === programId);

  if (!program) return <div className="p-16 text-center text-white">Program not found</div>;

  const Icon = program.icon;

  return (
    <div>
      <PageHero
        title={program.title}
        subtitle={`${program.duration} | Intake: ${program.intake} | Admission: ${program.admission}`}
        breadcrumbs={[{ label: 'Academics', href: '/academics' }, { label: program.shortTitle }]}
        tag={program.shortTitle}
      />
      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-7">
            {/* Overview */}
            <div className="glass-card p-7">
              <h2 className="font-display font-bold text-white text-2xl mb-4">Program Overview</h2>
              <p className="text-dark-300 leading-relaxed mb-5">{program.description}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: 'Duration', value: program.duration },
                  { label: 'Intake', value: String(program.intake) },
                  { label: 'Admission', value: program.admission },
                  { label: 'Degree', value: program.shortTitle + ' (IIIT Pune)' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-dark-800/50 rounded-xl p-3">
                    <div className="text-dark-400 text-xs mb-1">{label}</div>
                    <div className="text-white font-semibold text-sm">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum (if semesters exist) */}
            {program.semesters.length > 0 && (
              <div className="glass-card p-7">
                <h2 className="font-display font-bold text-white text-xl mb-5">Curriculum</h2>
                <div className="flex flex-wrap gap-2 mb-5">
                  {program.semesters.map((sem, idx) => (
                    <button
                      key={sem.sem}
                      onClick={() => setActiveSem(idx)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                        activeSem === idx
                          ? 'bg-brand-700 text-white shadow-glow'
                          : 'bg-dark-800 text-dark-300 hover:text-white hover:bg-dark-700'
                      }`}
                    >
                      Sem {sem.sem}
                    </button>
                  ))}
                </div>
                <div className="space-y-2">
                  {program.semesters[activeSem]?.subjects.map((subj, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/3 transition-colors">
                      <div className="w-6 h-6 rounded-lg bg-brand-900/50 border border-brand-800/40 flex items-center justify-center text-brand-400 text-xs font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-white/80 text-sm">{subj}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-5">
            <div className="glass-card p-6">
              <h3 className="font-display font-bold text-white text-lg mb-4">Highlights</h3>
              <ul className="space-y-2.5">
                {program.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-dark-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-display font-bold text-white text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#" className="flex items-center gap-2 text-sm text-dark-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-all">
                  <Download size={14} className="text-brand-400" /> Curriculum PDF
                </a>
                <Link to="/academics/fee-structure" className="flex items-center gap-2 text-sm text-dark-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-all">
                  <Receipt size={14} className="text-brand-400" /> Fee Structure
                </Link>
                <Link to="/academics/academic-calendar" className="flex items-center gap-2 text-sm text-dark-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-all">
                  <Calendar size={14} className="text-brand-400" /> Academic Calendar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AcademicsOverview() {
  return (
    <div>
      <PageHero
        title="Academics"
        subtitle="World-class programs in Computer Science and Electronics & Communication Engineering"
        breadcrumbs={[{ label: 'Academics' }]}
      />
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((prog) => {
            const Icon = prog.icon;
            return (
              <Link
                key={prog.id}
                to={`/academics/${prog.id}`}
                className={`feature-card bg-gradient-to-br ${prog.color} bg-opacity-10 border border-white/10 hover:border-white/30`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${prog.color} flex items-center justify-center`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="text-xs text-dark-400">{prog.duration}</div>
                </div>
                <h3 className="font-display font-bold text-white text-base mb-1.5 leading-snug">{prog.title}</h3>
                <p className="text-dark-400 text-sm mb-3">Intake: {prog.intake} | {prog.admission}</p>
                <div className="flex items-center gap-1 text-sm text-brand-400 group-hover:gap-2 transition-all">
                  <span>View Program</span> <ChevronRight size={13} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function FeeStructure() {
  return (
    <div>
      <PageHero
        title="Fee Structure 2025-26"
        breadcrumbs={[{ label: 'Academics', href: '/academics' }, { label: 'Fee Structure' }]}
      />
      <div className="max-w-4xl mx-auto px-4 lg:px-6 py-16">
        <div className="glass-card overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <h2 className="font-display font-bold text-white text-xl">Program-wise Fee Structure</h2>
            <p className="text-dark-400 text-sm mt-1">Annual fees for AY 2025-26 (all amounts in ₹)</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-dark-800/50">
                <tr>
                  <th className="text-left p-4 text-dark-300 text-sm font-semibold">Program</th>
                  <th className="text-right p-4 text-dark-300 text-sm font-semibold">Tuition Fee</th>
                  <th className="text-right p-4 text-dark-300 text-sm font-semibold">Hostel Fee</th>
                  <th className="text-right p-4 text-dark-300 text-sm font-semibold">Total/Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { prog: 'B.Tech (CSE / ECE)', tuition: '1,00,000', hostel: '60,000', total: '1,60,000' },
                  { prog: 'B.Tech Honors', tuition: '1,20,000', hostel: '60,000', total: '1,80,000' },
                  { prog: 'M.Tech (CSE / ECE)', tuition: '1,50,000', hostel: '60,000', total: '2,10,000' },
                  { prog: 'Ph.D.', tuition: '30,000', hostel: '60,000', total: '90,000' },
                ].map((row) => (
                  <tr key={row.prog} className="hover:bg-white/3 transition-colors">
                    <td className="p-4 text-white font-medium text-sm">{row.prog}</td>
                    <td className="p-4 text-dark-300 text-sm text-right">₹{row.tuition}</td>
                    <td className="p-4 text-dark-300 text-sm text-right">₹{row.hostel}</td>
                    <td className="p-4 text-brand-400 font-bold text-sm text-right">₹{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 bg-dark-800/20 border-t border-white/5">
            <p className="text-dark-400 text-xs">* Fees subject to revision. Scholarships and fee waivers available for eligible students. GATE scholars (M.Tech) receive stipend of ₹12,400/month.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AcademicCalendar() {
  return (
    <div>
      <PageHero
        title="Academic Calendar"
        breadcrumbs={[{ label: 'Academics', href: '/academics' }, { label: 'Academic Calendar' }]}
      />
      <div className="max-w-4xl mx-auto px-4 lg:px-6 py-16">
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          {['Odd Semester 2025-26', 'Even Semester 2025-26'].map((sem) => (
            <div key={sem} className="glass-card p-6">
              <Calendar size={24} className="text-brand-400 mb-4" />
              <h3 className="font-display font-bold text-white text-xl mb-4">{sem}</h3>
              <div className="space-y-3">
                {[
                  { event: 'Registration', dates: sem.includes('Odd') ? '28 Jul - 2 Aug 2025' : '2 Jan - 7 Jan 2026' },
                  { event: 'Classes Begin', dates: sem.includes('Odd') ? '4 Aug 2025' : '8 Jan 2026' },
                  { event: 'Mid-Semester Exam', dates: sem.includes('Odd') ? '22 Sep - 27 Sep 2025' : '24 Feb - 1 Mar 2026' },
                  { event: 'End-Semester Exam', dates: sem.includes('Odd') ? '10 Nov - 22 Nov 2025' : '4 May - 16 May 2026' },
                  { event: 'Results', dates: sem.includes('Odd') ? '15 Dec 2025' : '15 Jun 2026' },
                ].map(({ event, dates }) => (
                  <div key={event} className="flex justify-between text-sm">
                    <span className="text-dark-400">{event}</span>
                    <span className="text-white font-medium">{dates}</span>
                  </div>
                ))}
              </div>
              <a href="#" className="btn-ghost w-full justify-center mt-4 text-xs">
                <Download size={13} /> Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Academics() {
  return (
    <Routes>
      <Route index element={<AcademicsOverview />} />
      {programs.map(prog => (
        <Route key={prog.id} path={prog.id} element={<ProgramPage programId={prog.id} />} />
      ))}
      <Route path="fee-structure" element={<FeeStructure />} />
      <Route path="academic-calendar" element={<AcademicCalendar />} />
      <Route path="curriculum" element={<AcademicsOverview />} />
      <Route path="ordinances/mtech" element={
        <div>
          <PageHero title="M.Tech Ordinances" breadcrumbs={[{ label: 'Academics', href: '/academics' }, { label: 'M.Tech Ordinance' }]} />
          <div className="max-w-4xl mx-auto px-4 lg:px-6 py-16 text-center">
            <div className="glass-card p-10"><Scroll size={48} className="text-brand-400 mx-auto mb-4" />
              <p className="text-dark-400 mb-6">M.Tech Ordinances document — view on official website.</p>
              <a href="https://www.iiitp.ac.in" target="_blank" rel="noopener noreferrer" className="btn-primary">View Document</a>
            </div>
          </div>
        </div>
      } />
      <Route path="ordinances/phd" element={
        <div>
          <PageHero title="Ph.D. Ordinances" breadcrumbs={[{ label: 'Academics', href: '/academics' }, { label: 'Ph.D. Ordinance' }]} />
          <div className="max-w-4xl mx-auto px-4 lg:px-6 py-16 text-center">
            <div className="glass-card p-10"><Scroll size={48} className="text-brand-400 mx-auto mb-4" />
              <p className="text-dark-400 mb-6">Ph.D. Ordinances and Regulations — view on official website.</p>
              <a href="https://www.iiitp.ac.in" target="_blank" rel="noopener noreferrer" className="btn-primary">View Document</a>
            </div>
          </div>
        </div>
      } />
    </Routes>
  );
}
