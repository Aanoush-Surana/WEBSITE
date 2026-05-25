import { Link } from 'react-router-dom';
import {
  Mail, Phone, MapPin,
  ExternalLink, ArrowRight, GraduationCap, ChevronRight
} from 'lucide-react';
import Logo from '../shared/Logo';

const FacebookIcon = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const footerLinks = {
  'Quick Links': [
    { label: 'About IIIT Pune', href: '/about/overview' },
    { label: 'Faculty Directory', href: '/people/faculty' },
    { label: 'Placements Directory', href: '/placements' },
    { label: 'Academic Calendar', href: '/academics/academic-calendar' },
    { label: 'Fee Structure', href: '/academics/fee-structure' },
    { label: 'Campus Gallery', href: '/campus-life/gallery' },
    { label: 'Notice Board', href: '/notices' },
  ],
  'Institute & Academics': [
    { label: 'B.Tech Program', href: '/academics/btech-cse' },
    { label: 'M.Tech Program', href: '/academics/mtech-cse' },
    { label: 'Ph.D. Program', href: '/academics/phd' },
    { label: 'Board of Governors', href: '/administration/committees/board-of-governors' },
    { label: 'NIRF & RTI', href: '/about/rti' },
    { label: 'Careers @ IIITP', href: '/careers' },
    { label: 'Contact Details', href: '/contact' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-dark-700 mt-auto">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <Logo className="w-12 h-12" />
              <div>
                <div className="font-display font-bold text-dark-100 text-lg">IIIT Pune</div>
                <div className="text-dark-400 text-xs">Institute of National Importance</div>
              </div>
            </Link>

            <p className="text-dark-400 text-sm leading-relaxed mb-6 max-w-sm">
              Indian Institute of Information Technology, Pune (IIIT Pune) is a premier
              Institute of National Importance established under the PPP model, dedicated
              to excellence in technology education and research.
            </p>

            <div className="space-y-2.5">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-brand-500 mt-0.5 flex-shrink-0" />
                <span className="text-dark-400 text-sm">
                  Nanoli Tarf Chakan, Talegaon Dabhade, Maval, Pune, Maharashtra - 410507
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-brand-500 flex-shrink-0" />
                <a href="tel:+912029042000" className="text-dark-400 text-sm hover:text-brand-700 transition-colors">
                  +91-20-2904-2000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="text-brand-500 flex-shrink-0" />
                <a href="mailto:registrar@iiitp.ac.in" className="text-dark-400 text-sm hover:text-brand-700 transition-colors">
                  registrar@iiitp.ac.in
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: FacebookIcon, href: 'https://facebook.com/iiitpune', label: 'Facebook' },
                { icon: TwitterIcon, href: 'https://twitter.com/IIIT_Pune', label: 'Twitter' },
                { icon: LinkedinIcon, href: 'https://linkedin.com/company/cdcrciiitp', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-dark-800 border border-dark-700 flex items-center justify-center text-dark-400 hover:text-brand-700 hover:border-brand-500/30 hover:bg-brand-50 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-1">
              <h3 className="font-display font-semibold text-dark-100 mb-4 text-sm">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-dark-400 text-sm hover:text-brand-700 flex items-center gap-1.5 group transition-colors"
                    >
                      <ChevronRight size={12} className="text-brand-700 group-hover:text-brand-500 transition-colors flex-shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Locate Us column (Google Maps Map Pin & address) */}
          <div className="lg:col-span-1">
            <h3 className="font-display font-semibold text-dark-100 mb-4 text-sm">Locate Us</h3>
            <div className="rounded-xl overflow-hidden border border-dark-700 bg-dark-800 h-28 w-full mb-3 shadow-sm">
              <iframe
                title="IIIT Pune Permanent Campus"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.337199464871!2d73.6971403!3d18.7650781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b405ac494d45%3A0xc302bc70566bb0f8!2sIndian%20Institute%20of%20Information%20Technology%20Pune!5e0!3m2!1sen!2sin!4v1716630456123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-dark-400 text-[11px] leading-normal">
              <strong>IIIT Pune Campus:</strong><br />
              Nanoli Tarf Chakan, Talegaon Dabhade, Maval, Pune - 410507
            </p>
          </div>
        </div>
      </div>

      {/* External portals strip */}
      <div className="border-t border-dark-700">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="text-dark-500 text-xs font-semibold uppercase tracking-wider">External Portals:</span>
            {[
              { label: 'Placement Portal', href: 'https://placements.iiitp.ac.in' },
              { label: 'Library Portal', href: 'https://sites.google.com/iiitp.ac.in/library' },
              { label: 'IRINS', href: 'https://iiitp.irins.org' },
              { label: 'MoE', href: 'https://www.education.gov.in' },
              { label: 'JoSAA', href: 'https://josaa.ntaonline.in' },
            ].map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-dark-400 hover:text-brand-700 flex items-center gap-1 transition-colors"
              >
                {p.label} <ExternalLink size={10} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-700 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-dark-500 text-xs text-center sm:text-left">
            © {year} Indian Institute of Information Technology, Pune. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/about/rti" className="text-dark-500 text-xs hover:text-brand-700 transition-colors">RTI</Link>
            <Link to="/about/nirf" className="text-dark-500 text-xs hover:text-brand-700 transition-colors">NIRF</Link>
            <a href="https://www.iiitp.ac.in" target="_blank" rel="noopener noreferrer"
              className="text-dark-500 text-xs hover:text-brand-700 transition-colors flex items-center gap-1">
              iiitp.ac.in <ExternalLink size={9} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
