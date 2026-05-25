import { Routes, Route, Link } from 'react-router-dom';
import PageHero from '../components/shared/PageHero';
import { Crown, UserCircle, ClipboardList, Users, ChevronRight, Mail, Phone } from 'lucide-react';

function LeaderProfile({ title, name, designation, dept, photo, message, education, breadcrumbs }) {
  return (
    <div>
      <PageHero
        title={title}
        breadcrumbs={[{ label: 'Administration', href: '/administration' }, ...breadcrumbs]}
      />
      <div className="max-w-5xl mx-auto px-4 lg:px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="glass-card p-6 sticky top-24 text-center">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-brand-700 to-navy-700 flex items-center justify-center mx-auto mb-5 shadow-glow">
                <UserCircle size={56} className="text-white/70" />
              </div>
              <h2 className="font-display font-bold text-white text-xl mb-1">{name}</h2>
              <p className="text-brand-400 text-sm font-medium mb-1">{designation}</p>
              {dept && <p className="text-dark-400 text-xs mb-4">{dept}</p>}
              <div className="divider mb-4" />
              {education && (
                <div className="space-y-2 text-left">
                  {education.map((e, i) => (
                    <div key={i} className="text-xs">
                      <span className="text-white font-medium">{e.degree}</span>
                      <span className="text-dark-400"> — {e.institution}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-4 flex flex-col gap-2">
                <a href={`mailto:director@iiitp.ac.in`} className="btn-ghost w-full justify-center text-xs">
                  <Mail size={12} /> Email
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="glass-card p-8">
              <h3 className="font-display font-bold text-white text-2xl mb-5">About</h3>
              <div className="text-dark-300 leading-relaxed space-y-4">
                {message.map((para, i) => <p key={i}>{para}</p>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommitteePage({ title, desc, members, breadcrumbs }) {
  return (
    <div>
      <PageHero
        title={title}
        subtitle={desc}
        breadcrumbs={[{ label: 'Administration', href: '/administration' }, { label: 'Committees', href: '/administration' }, ...breadcrumbs]}
      />
      <div className="max-w-4xl mx-auto px-4 lg:px-6 py-16">
        <div className="glass-card overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <h2 className="font-display font-bold text-white text-xl flex items-center gap-3">
              <Users size={20} className="text-brand-400" />
              Committee Members
            </h2>
          </div>
          <div className="divide-y divide-white/5">
            {members.map((m, i) => (
              <div key={i} className="flex items-start gap-5 p-5 hover:bg-white/3 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-800 to-navy-900 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {m.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white">{m.name}</div>
                  <div className="text-brand-400 text-sm">{m.role}</div>
                  {m.org && <div className="text-dark-400 text-xs mt-0.5">{m.org}</div>}
                </div>
                {m.category && (
                  <span className="badge-info text-xs">{m.category}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const bogMembers = [
  { name: 'Shri Rajesh Kumar', role: 'Chairperson', org: 'Government Nominee, MoE', category: 'Chairman' },
  { name: 'Prof. Abhijit Sawant', role: 'Director, IIIT Pune', org: 'IIIT Pune', category: 'Ex-Officio' },
  { name: 'Shri Narayan Patil', role: 'Govt. of Maharashtra Nominee', org: 'DTTE, Maharashtra', category: 'Govt. Nominee' },
  { name: 'Dr. Pramod Sharma', role: 'Industry Nominee', org: 'TCS Research', category: 'Industry' },
  { name: 'Ms. Kavitha Menon', role: 'Industry Nominee', org: 'Infosys Foundation', category: 'Industry' },
  { name: 'Prof. P.V. Bhave', role: 'Expert Member', org: 'IIT Bombay', category: 'Expert' },
  { name: 'Prof. S.K. Gupta', role: 'Expert Member', org: 'IIT Delhi', category: 'Expert' },
  { name: 'Dr. Anita Sharma', role: 'Registrar, IIIT Pune', org: 'IIIT Pune', category: 'Ex-Officio' },
];

const senateMembers = [
  { name: 'Prof. Abhijit Sawant', role: 'Chairman', org: 'Director, IIIT Pune', category: 'Ex-Officio' },
  { name: 'Dr. Pradip Bose', role: 'Head, CSE Dept.', org: 'IIIT Pune', category: 'HoD' },
  { name: 'Dr. Rajesh Kumar', role: 'Head, ECE Dept.', org: 'IIIT Pune', category: 'HoD' },
  { name: 'Dr. Anjali Patil', role: 'Head, AS&H Dept.', org: 'IIIT Pune', category: 'HoD' },
  { name: 'Dr. Manish Gupta', role: 'Faculty Member', org: 'CSE Dept.', category: 'Faculty' },
  { name: 'Dr. Sunita Rao', role: 'Faculty Member', org: 'ECE Dept.', category: 'Faculty' },
  { name: 'Dr. Priya Mehta', role: 'Faculty Member', org: 'CSE Dept.', category: 'Faculty' },
  { name: 'Dr. Anita Sharma', role: 'Registrar', org: 'IIIT Pune', category: 'Ex-Officio' },
];

export default function Administration() {
  return (
    <Routes>
      <Route index element={
        <div>
          <PageHero
            title="Administration"
            subtitle="Leadership and governance structure of IIIT Pune"
            breadcrumbs={[{ label: 'Administration' }]}
          />
          <div className="max-w-5xl mx-auto px-4 lg:px-6 py-16">
            <div className="grid sm:grid-cols-3 gap-5 mb-10">
              {[
                { title: 'Chairperson', href: '/administration/chairperson', icon: Crown, desc: 'Board Chairperson' },
                { title: 'Director', href: '/administration/director', icon: UserCircle, desc: 'Institute Director' },
                { title: 'Registrar', href: '/administration/registrar', icon: ClipboardList, desc: 'Administrative Head' },
              ].map(({ title, href, icon: Icon, desc }) => (
                <Link key={title} to={href} className="feature-card text-center">
                  <Icon size={32} className="text-brand-400 mx-auto mb-3" />
                  <h3 className="font-display font-bold text-white text-lg mb-1">{title}</h3>
                  <p className="text-dark-400 text-sm">{desc}</p>
                </Link>
              ))}
            </div>
            <h2 className="font-display font-bold text-white text-2xl mb-5">Committees</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Board of Governors', href: '/administration/committees/board-of-governors' },
                { label: 'Finance Committee', href: '/administration/committees/finance' },
                { label: 'Building & Works Committee', href: '/administration/committees/building-works' },
                { label: 'Senate', href: '/administration/committees/senate' },
                { label: 'Board of Studies — CSE', href: '/administration/committees/bos-cse' },
                { label: 'Board of Studies — ECE', href: '/administration/committees/bos-ece' },
                { label: 'Board of Studies — AS&H', href: '/administration/committees/bos-ash' },
              ].map(({ label, href }) => (
                <Link key={label} to={href} className="glass-card-hover flex items-center gap-3 p-4 group">
                  <Users size={16} className="text-brand-400 flex-shrink-0" />
                  <span className="text-white font-medium group-hover:text-brand-300 transition-colors">{label}</span>
                  <ChevronRight size={14} className="text-dark-600 group-hover:text-brand-400 ml-auto transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      } />

      <Route path="chairperson" element={
        <LeaderProfile
          title="Chairperson"
          name="Shri Rajesh Kumar"
          designation="Chairperson, Board of Governors"
          dept="Government of India Nominee (MoE)"
          education={[
            { degree: 'IAS Officer', institution: 'Ministry of Education' },
            { degree: 'M.Phil.', institution: 'Jawaharlal Nehru University' },
          ]}
          message={[
            "I am honoured to serve as the Chairperson of the Board of Governors of IIIT Pune. The institute has made remarkable progress since its inception, and I am proud of the commitment shown by the faculty, staff, and students.",
            "As an Institute of National Importance, IIIT Pune plays a critical role in India's journey to become a global technology powerhouse. Our programs in Computer Science and Electronics are carefully designed to meet the demands of a rapidly evolving industry landscape.",
            "I am confident that with continued support from the Government, industry partners, and our dedicated academic community, IIIT Pune will achieve new heights of excellence in education, research, and innovation.",
          ]}
          breadcrumbs={[{ label: 'Chairperson' }]}
        />
      } />

      <Route path="director" element={
        <LeaderProfile
          title="Director"
          name="Prof. Abhijit A.M. Sawant"
          designation="Director"
          dept="IIIT Pune"
          education={[
            { degree: 'Ph.D.', institution: 'IIT Bombay' },
            { degree: 'M.Tech', institution: 'IIT Bombay' },
            { degree: 'B.E.', institution: 'Walchand College of Engineering' },
          ]}
          message={[
            "Welcome to IIIT Pune — an institution built on the foundations of excellence, innovation, and service to the nation.",
            "Our vision is clear: to build the next generation of technology leaders who can think critically, solve complex problems, and make a positive impact on society.",
            "The institute has built strong industry connections with companies like TCS, Infosys, Wipro, Microsoft, Google, and many more, ensuring that our graduates are industry-ready from day one.",
            "Research is the backbone of our academic mission. Our faculty members are actively engaged in cutting-edge research funded by SERB, DST, MEITY, and international collaborators.",
          ]}
          breadcrumbs={[{ label: 'Director' }]}
        />
      } />

      <Route path="registrar" element={
        <LeaderProfile
          title="Registrar"
          name="Dr. Anita Sharma"
          designation="Registrar"
          dept="IIIT Pune Administration"
          education={[
            { degree: 'Ph.D.', institution: 'University of Pune' },
            { degree: 'M.Tech', institution: 'COEP Pune' },
          ]}
          message={[
            "The Office of the Registrar at IIIT Pune is committed to providing efficient and transparent administrative services to students, faculty, and staff.",
            "We handle all academic records, examinations, admissions, and statutory compliance matters. Our goal is to ensure smooth academic administration that supports the institute's educational mission.",
            "Students are encouraged to reach out to the Registrar's office for any queries regarding admissions, fees, degree certificates, transcripts, or other academic administrative matters.",
          ]}
          breadcrumbs={[{ label: 'Registrar' }]}
        />
      } />

      <Route path="committees/board-of-governors" element={
        <CommitteePage
          title="Board of Governors"
          desc="The apex governing body of IIIT Pune responsible for overall policy and strategic direction."
          members={bogMembers}
          breadcrumbs={[{ label: 'Board of Governors' }]}
        />
      } />

      <Route path="committees/senate" element={
        <CommitteePage
          title="Senate"
          desc="The Academic Senate oversees all academic matters including curriculum, examinations, and research."
          members={senateMembers}
          breadcrumbs={[{ label: 'Senate' }]}
        />
      } />

      <Route path="committees/finance" element={
        <CommitteePage
          title="Finance Committee"
          desc="Responsible for financial oversight, budget approval, and audit of IIIT Pune."
          members={[
            { name: 'Shri Rajesh Kumar', role: 'Chairman', org: 'MoE Nominee', category: 'Chairman' },
            { name: 'Prof. Abhijit Sawant', role: 'Director', org: 'IIIT Pune', category: 'Member' },
            { name: 'Dr. Anita Sharma', role: 'Registrar', org: 'IIIT Pune', category: 'Member Secretary' },
            { name: 'Shri Vinod Patil', role: 'Finance Officer', org: 'IIIT Pune', category: 'Member' },
          ]}
          breadcrumbs={[{ label: 'Finance Committee' }]}
        />
      } />

      {['building-works', 'bos-cse', 'bos-ece', 'bos-ash'].map((slug) => {
        const titles = {
          'building-works': 'Building & Works Committee',
          'bos-cse': 'Board of Studies — CSE',
          'bos-ece': 'Board of Studies — ECE',
          'bos-ash': 'Board of Studies — AS&H',
        };
        return (
          <Route key={slug} path={`committees/${slug}`} element={
            <CommitteePage
              title={titles[slug]}
              desc={`${titles[slug]} members and meeting schedules.`}
              members={[
                { name: 'Prof. Abhijit Sawant', role: 'Chairman', org: 'Director, IIIT Pune', category: 'Ex-Officio' },
                { name: 'Department Head', role: 'Convener', org: 'IIIT Pune', category: 'Convener' },
                { name: 'Senior Faculty Member 1', role: 'Member', org: 'IIIT Pune', category: 'Faculty' },
                { name: 'Senior Faculty Member 2', role: 'Member', org: 'IIIT Pune', category: 'Faculty' },
                { name: 'Industry Expert', role: 'External Member', org: 'Industry', category: 'External' },
              ]}
              breadcrumbs={[{ label: titles[slug] }]}
            />
          } />
        );
      })}
    </Routes>
  );
}
