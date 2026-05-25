import PageHero from '../components/shared/PageHero';
import { Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with IIIT Pune — we're here to help"
        breadcrumbs={[{ label: 'Contact' }]}
      />
      <div className="max-w-5xl mx-auto px-4 lg:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-5">
            <div className="glass-card p-7 bg-white">
              <h2 className="font-display font-bold text-dark-100 text-xl mb-5">Institute Address</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-brand-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-dark-100 font-medium">Indian Institute of Information Technology, Pune</div>
                    <div className="text-dark-400 text-sm mt-1">
                      Nanoli Tarf Chakan, Talegaon Dabhade, Maval, Pune<br />
                      Maharashtra - 410507, India
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-brand-700 flex-shrink-0" />
                  <div>
                    <div className="text-dark-400 text-xs mb-0.5">Main Switchboard</div>
                    <a href="tel:+912029042000" className="text-dark-100 hover:text-brand-700 transition-colors font-medium">+91-20-2904-2000</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-brand-700 flex-shrink-0" />
                  <div>
                    <div className="text-dark-400 text-xs mb-0.5">Registrar's Office</div>
                    <a href="mailto:registrar@iiitp.ac.in" className="text-dark-100 hover:text-brand-700 transition-colors font-medium">registrar@iiitp.ac.in</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-brand-700 flex-shrink-0" />
                  <div>
                    <div className="text-dark-400 text-xs mb-0.5">Office Hours</div>
                    <div className="text-dark-200 text-sm font-medium">Mon – Fri: 9:00 AM – 5:30 PM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-7 bg-white">
              <h2 className="font-display font-bold text-dark-100 text-xl mb-5">Department Contacts</h2>
              <div className="space-y-3">
                {[
                  { dept: 'Admissions', email: 'admissions@iiitp.ac.in' },
                  { dept: 'Placements', email: 'placements@iiitp.ac.in' },
                  { dept: 'Research', email: 'research@iiitp.ac.in' },
                  { dept: 'Academics', email: 'academics@iiitp.ac.in' },
                  { dept: 'Finance', email: 'finance@iiitp.ac.in' },
                ].map(({ dept, email }) => (
                  <div key={dept} className="flex justify-between items-center text-sm">
                    <span className="text-dark-400 font-medium">{dept}</span>
                    <a href={`mailto:${email}`} className="text-brand-700 hover:text-brand-600 font-semibold transition-colors">{email}</a>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/Indian+Institute+of+Information+Technology+Pune/@18.7650781,73.6971403,15z/data=!4m6!3m5!1s0x3bc2b405ac494d45:0xc302bc70566bb0f8!8m2!3d18.7650781!4d73.6971403!16s%2Fg%2F11c1qzfh2p?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full justify-center"
            >
              <MapPin size={14} /> View on Google Maps <ExternalLink size={13} />
            </a>
          </div>

          {/* Contact form */}
          <div className="glass-card p-7 bg-white">
            <h2 className="font-display font-bold text-dark-100 text-xl mb-6">Send us a Message</h2>
            <form className="space-y-4" onSubmit={e => { e.preventDefault(); alert('Message sent! We\'ll respond within 2 business days.'); }}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-dark-400 text-xs mb-1.5 block">First Name</label>
                  <input type="text" placeholder="John" className="input-glass w-full" required />
                </div>
                <div>
                  <label className="text-dark-400 text-xs mb-1.5 block">Last Name</label>
                  <input type="text" placeholder="Doe" className="input-glass w-full" required />
                </div>
              </div>
              <div>
                <label className="text-dark-400 text-xs mb-1.5 block">Email Address</label>
                <input type="email" placeholder="john@example.com" className="input-glass w-full" required />
              </div>
              <div>
                <label className="text-dark-400 text-xs mb-1.5 block">Subject</label>
                <select className="input-glass w-full">
                  <option value="">Select a subject</option>
                  <option>Admissions Inquiry</option>
                  <option>Placement & Recruitment</option>
                  <option>Research Collaboration</option>
                  <option>Alumni Affairs</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="text-dark-400 text-xs mb-1.5 block">Message</label>
                <textarea
                  placeholder="Your message here..."
                  rows={5}
                  className="input-glass w-full resize-none"
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
