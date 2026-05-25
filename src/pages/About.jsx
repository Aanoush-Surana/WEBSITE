import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/shared/PageHero';
import { Target, Building2, UserCircle, Award, Scale, FileText, ChevronRight } from 'lucide-react';

function Overview() {
  return (
    <div>
      <PageHero
        title="About IIIT Pune"
        subtitle="A premier Institute of National Importance established under the PPP model, shaping the future of technology."
        breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Overview' }]}
        tag="Institute Overview"
      />
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card p-8">
              <h2 className="font-display font-bold text-dark-100 text-2xl mb-5">About the Institute</h2>
              <div className="space-y-4 text-dark-300 leading-relaxed">
                <p>
                  Indian Institute of Information Technology, Pune (IIIT Pune) is an Institute of National
                  Importance established under the <strong className="text-dark-100">IIIT (PPP) Act, 2017</strong> with
                  the collaborative participation of the Government of India (MoE), Government of Maharashtra,
                  and industry partners.
                </p>
                <p>
                  Situated in the technology hub of Pune, the institute offers undergraduate (B.Tech), postgraduate
                  (M.Tech), and doctoral (Ph.D.) programs in Computer Science & Engineering (CSE) and Electronics
                  & Communication Engineering (ECE).
                </p>
                <p>
                  The institute's mentor institution is the <strong className="text-dark-100">College of Engineering Pune (COEP)</strong>,
                  one of India's oldest and most prestigious engineering institutions. This mentorship provides
                  IIIT Pune with invaluable academic guidance and infrastructure support.
                </p>
                <p>
                  With a focus on research, innovation, and industry collaboration, IIIT Pune aims to produce
                  globally competent engineers and researchers who contribute to India's digital transformation.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: '🏛️', title: 'Established', value: '2013', sub: 'As an Institute of National Importance' },
                { icon: '🎓', title: 'Programs', value: '6', sub: 'B.Tech, M.Tech, Ph.D.' },
                { icon: '👨‍🏫', title: 'Faculty', value: '60+', sub: 'From IITs, IISc, and global institutes' },
                { icon: '📚', title: 'Students', value: '3,200+', sub: 'Across all programs' },
              ].map(({ icon, title, value, sub }) => (
                <div key={title} className="glass-card p-6 flex items-center gap-4 bg-white">
                  <div className="text-3xl">{icon}</div>
                  <div>
                    <div className="font-display font-bold text-dark-100 text-2xl">{value}</div>
                    <div className="text-dark-300 font-medium text-sm">{title}</div>
                    <div className="text-dark-400 text-xs mt-0.5">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="glass-card p-6">
              <h3 className="font-display font-bold text-dark-100 mb-4 text-lg">Quick Facts</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Type', value: 'Institute of National Importance' },
                  { label: 'Established', value: '2013' },
                  { label: 'Mentor', value: 'COEP, Pune' },
                  { label: 'Location', value: 'Pune, Maharashtra' },
                  { label: 'Affiliation', value: 'Autonomous (IIIT Act)' },
                  { label: 'Website', value: 'iiitp.ac.in' },
                ].map(({ label, value }) => (
                  <li key={label} className="flex justify-between items-start gap-3 text-sm">
                    <span className="text-dark-400">{label}</span>
                    <span className="text-dark-100 font-medium text-right">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6 bg-white">
              <h3 className="font-display font-bold text-dark-100 mb-4 text-lg">Related Pages</h3>
              <div className="space-y-2">
                {[
                  { label: 'Vision & Mission', href: '/about/vision-mission' },
                  { label: 'Director\'s Desk', href: '/about/director-desk' },
                  { label: 'ARIIA Ranking', href: '/about/ariia-ranking' },
                  { label: 'Governance — ACT', href: '/about/governance/act' },
                ].map(({ label, href }) => (
                  <Link key={label} to={href} className="btn-ghost w-full justify-start hover:text-brand-700">
                    <ChevronRight size={14} className="text-brand-700" />
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VisionMission() {
  return (
    <div>
      <PageHero
        title="Vision & Mission"
        breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Vision & Mission' }]}
        tag="Our Purpose"
      />
      <div className="max-w-5xl mx-auto px-4 lg:px-6 py-16 space-y-8">
        <div className="glass-card p-10 relative overflow-hidden bg-white">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-800/20 rounded-full blur-2xl" />
          <Target size={32} className="text-brand-700 mb-5" />
          <h2 className="font-display font-bold text-dark-100 text-3xl mb-5">Vision</h2>
          <p className="text-dark-200 text-lg leading-relaxed">
            To be a globally recognized Institute of Excellence in Information Technology education,
            research, and innovation — nurturing competent, ethical, and socially responsible
            technology leaders who contribute meaningfully to India's digital growth and global advancement.
          </p>
        </div>

        <div className="glass-card p-10 relative overflow-hidden bg-white">
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-navy-800/20 rounded-full blur-2xl" />
          <Award size={32} className="text-navy-700 mb-5" />
          <h2 className="font-display font-bold text-dark-100 text-3xl mb-6">Mission</h2>
          <ul className="space-y-4">
            {[
              'Provide high-quality undergraduate, postgraduate, and doctoral education in Information Technology and allied fields.',
              'Foster a research culture that addresses real-world challenges through innovation, interdisciplinary collaboration, and industry partnerships.',
              'Develop graduates with strong technical foundations, critical thinking, communication skills, and ethical values.',
              'Create an inclusive, vibrant academic environment that promotes diversity, intellectual growth, and holistic development.',
              'Build sustainable partnerships with industry, government, and academia for knowledge exchange and societal impact.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-lg bg-navy-900/50 border border-navy-700/40 flex items-center justify-center text-navy-400 text-sm font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <p className="text-dark-300 leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { icon: '🌟', title: 'Excellence', desc: 'Striving for the highest standards in education and research' },
            { icon: '💡', title: 'Innovation', desc: 'Encouraging creative thinking and novel problem-solving' },
            { icon: '🤝', title: 'Integrity', desc: 'Upholding ethical values and social responsibility' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="glass-card p-6 text-center bg-white">
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="font-display font-bold text-dark-100 text-lg mb-2">{title}</h3>
              <p className="text-dark-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DirectorDesk() {
  return (
    <div>
      <PageHero
        title="Director's Desk"
        breadcrumbs={[{ label: 'About', href: '/about' }, { label: "Director's Desk" }]}
        tag="From the Director"
      />
      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Left Column: Profile Card */}
          <div className="md:col-span-1">
            <div className="glass-card p-6 bg-white text-center shadow-lg border border-dark-700 sticky top-24">
              <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-brand-50 shadow-md mx-auto mb-5">
                <img 
                  src="/director.jpg" 
                  alt="Prof. (Dr.) Vineet Kansal" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="font-display font-bold text-dark-100 text-xl leading-tight">Prof. (Dr.) Vineet Kansal</h3>
              <p className="text-brand-700 text-sm font-semibold uppercase tracking-wider mt-1.5">Director, IIIT Pune</p>
              
              <div className="my-6 border-t border-dark-700" />
              
              <div className="space-y-4 text-left">
                <div>
                  <h4 className="text-xs font-bold text-dark-400 uppercase tracking-wider">Office Address</h4>
                  <p className="text-dark-200 text-xs mt-1 leading-relaxed">
                    Director's Office, Academic Block,<br />
                    IIIT Pune, Nanoli Tarf Chakan,<br />
                    Pune, Maharashtra - 410507
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-dark-400 uppercase tracking-wider">Contact</h4>
                  <a href="mailto:director@iiitp.ac.in" className="text-brand-700 hover:text-brand-800 text-xs block mt-1 transition-colors">
                    director@iiitp.ac.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Message */}
          <div className="md:col-span-2">
            <div className="glass-card p-8 md:p-10 bg-white shadow-lg border border-dark-700">
              <h2 className="font-display font-bold text-dark-100 text-3xl mb-6 border-b border-dark-700 pb-4">
                Message from the Director
              </h2>
              
              {/* Highlight Quote */}
              <div className="border-l-4 border-brand-500 bg-brand-550/5 p-5 rounded-r-xl mb-8 italic text-dark-200 text-base leading-relaxed">
                "IIIT Pune is committed to cultivating a culture of innovation, academic rigor, and advanced research to empower students to solve global technological challenges."
              </div>

              <div className="space-y-8 text-dark-300 leading-relaxed text-sm">
                <div>
                  <h3 className="font-display font-semibold text-dark-100 text-lg mb-2">Vision for Excellence</h3>
                  <p>
                    Welcome to the Indian Institute of Information Technology, Pune — an institution
                    established with the singular vision of creating world-class technology professionals
                    who can lead India's digital transformation. As Director, my commitment is to build
                    upon this foundation and steer IIIT Pune to become a global hub for technology education
                    and research.
                  </p>
                </div>

                <div>
                  <h3 className="font-display font-semibold text-dark-100 text-lg mb-2">Academic & Research Focus</h3>
                  <p>
                    At IIIT Pune, we believe that education is not just about acquiring knowledge — it is
                    about developing the ability to think critically, innovate fearlessly, and act
                    responsibly. Our curriculum is constantly updated to bridge the gap between academic learning
                    and industry requirements, emphasizing hands-on project-based learning.
                  </p>
                  <p className="mt-3">
                    Our faculty comprises distinguished researchers and practitioners from premier
                    institutions across India and abroad, who bring both depth of knowledge and
                    breadth of experience to the classroom, mentoring students to work on cutting-edge
                    R&D projects.
                  </p>
                </div>

                <div>
                  <h3 className="font-display font-semibold text-dark-100 text-lg mb-2">Industry Partnerships & Placements</h3>
                  <p>
                    I invite you to explore the opportunities that IIIT Pune offers — be it our
                    state-of-the-art research labs, vibrant student clubs, strong industry connections,
                    or our remarkable placement record. We continuously foster ties with global tech giants
                    and emerging startups to give our students unparalleled exposure.
                  </p>
                </div>

                <div className="pt-4 border-t border-dark-700">
                  <p className="text-dark-100 font-semibold text-base mb-1">Prof. (Dr.) Vineet Kansal</p>
                  <p className="text-dark-400 text-xs">Director, Indian Institute of Information Technology, Pune</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GenericAboutPage({ title, subtitle, breadcrumbs }) {
  return (
    <div>
      <PageHero title={title} subtitle={subtitle} breadcrumbs={breadcrumbs} />
      <div className="max-w-4xl mx-auto px-4 lg:px-6 py-16">
        <div className="glass-card p-8 text-center bg-white">
          <FileText size={48} className="text-brand-700 mx-auto mb-4" />
          <h2 className="font-display font-bold text-dark-100 text-2xl mb-3">{title}</h2>
          <p className="text-dark-400 mb-6">{subtitle || 'Document and detailed information will be available here.'}</p>
          <a
            href="https://www.iiitp.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View on Official Website
          </a>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <Routes>
      <Route index element={<Overview />} />
      <Route path="overview" element={<Overview />} />
      <Route path="vision-mission" element={<VisionMission />} />
      <Route path="director-desk" element={<DirectorDesk />} />
      <Route path="ariia-ranking" element={
        <GenericAboutPage
          title="ARIIA Ranking"
          subtitle="Atal Ranking of Institutions on Innovation Achievements — IIIT Pune's innovation metrics."
          breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'ARIIA Ranking' }]}
        />
      } />
      <Route path="nirf" element={
        <GenericAboutPage
          title="NIRF Ranking"
          subtitle="National Institutional Ranking Framework — IIIT Pune's performance metrics."
          breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'NIRF' }]}
        />
      } />
      <Route path="rti" element={
        <GenericAboutPage
          title="Right to Information (RTI)"
          subtitle="RTI information and contact details for IIIT Pune."
          breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'RTI' }]}
        />
      } />
      <Route path="governance/act" element={
        <GenericAboutPage
          title="ACT (PPP)"
          subtitle="The IIIT (Public Private Partnership) Act, 2017 — the founding legislation of IIIT Pune."
          breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Governance' }, { label: 'ACT (PPP)' }]}
        />
      } />
      <Route path="governance/amendment" element={
        <GenericAboutPage
          title="Amendment Act"
          subtitle="Amendment to the IIIT (PPP) Act governing IIIT Pune."
          breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Governance' }, { label: 'Amendment Act' }]}
        />
      } />
      <Route path="governance/statute" element={
        <GenericAboutPage
          title="Statute"
          subtitle="Statutes of IIIT Pune defining governance structure and operational procedures."
          breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Governance' }, { label: 'Statute' }]}
        />
      } />
      <Route path="governance/statute-amendment" element={
        <GenericAboutPage
          title="Statute Amendment"
          subtitle="Amendment to the statutes of IIIT Pune."
          breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Governance' }, { label: 'Statute Amendment' }]}
        />
      } />
    </Routes>
  );
}
