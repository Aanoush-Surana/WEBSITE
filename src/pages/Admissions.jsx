import { UserPlus, CheckCircle, ClipboardList, Calendar, Info } from 'lucide-react';

const steps = [
  { step: '01', title: 'Check Eligibility', desc: 'Review program-specific eligibility criteria and cutoff rankings.' },
  { step: '02', title: 'Register on Portal', desc: 'Sign up on the IIIT Pune admissions portal with your JEE/GATE score.' },
  { step: '03', title: 'Fill Application', desc: 'Complete the online application form and upload required documents.' },
  { step: '04', title: 'Counselling', desc: 'Participate in JoSAA or institute-level counselling rounds.' },
  { step: '05', title: 'Fee Payment', desc: 'Pay the admission fee online to confirm your seat.' },
  { step: '06', title: 'Report to Campus', desc: 'Complete document verification and report on the joining date.' },
];

export default function Admissions() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-dark-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-brand-700 uppercase tracking-widest mb-3">
            <span className="w-6 h-px bg-brand-700/60" />
            Join Us
          </div>
          <h1 className="text-5xl font-black text-dark-100">Admissions</h1>
          <p className="text-dark-400 mt-2 max-w-xl">Your journey to IIIT Pune starts here. Explore programs, eligibility, and the application process.</p>
        </div>

        {/* Admission Process */}
        <div className="glass-card p-8 mb-8 bg-white">
          <h2 className="text-2xl font-bold text-dark-100 mb-8">Admission Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-brand-700 to-brand-600 flex items-center justify-center text-white font-bold text-sm">
                  {step}
                </div>
                <div>
                  <h3 className="font-bold text-dark-100 text-sm mb-1">{title}</h3>
                  <p className="text-dark-400 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="glass-card p-6 bg-white">
            <h2 className="text-lg font-bold text-dark-100 mb-5 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand-700" /> Eligibility Criteria
            </h2>
            <div className="space-y-3 text-sm">
              {[
                { prog: 'B.Tech', criteria: 'JEE Main qualified; 10+2 PCM with 75%+' },
                { prog: 'M.Tech', criteria: 'GATE qualified; B.E./B.Tech in relevant field' },
                { prog: 'PhD', criteria: 'M.Tech/M.E. or B.Tech with GATE/JRF; valid score required' },
              ].map(({ prog, criteria }) => (
                <div key={prog} className="flex gap-3 py-2 border-b border-dark-700">
                  <span className="font-bold text-brand-700 w-16 shrink-0">{prog}</span>
                  <span className="text-dark-300">{criteria}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 bg-white">
            <h2 className="text-lg font-bold text-dark-100 mb-5 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-brand-700" /> Important Dates
            </h2>
            <div className="space-y-3 text-sm">
              {[
                { event: 'JoSAA Registration Opens', date: 'June 2025' },
                { event: 'Document Verification', date: 'July 2025' },
                { event: 'Classes Begin', date: 'August 2025' },
                { event: 'GATE Applications', date: 'Sep 2025' },
              ].map(({ event, date }) => (
                <div key={event} className="flex justify-between py-2 border-b border-dark-700">
                  <span className="text-dark-300">{event}</span>
                  <span className="text-brand-700 font-medium text-xs">{date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-50/50 border border-brand-100 rounded-3xl p-8 text-center bg-white">
          <Info className="w-8 h-8 text-brand-700 mx-auto mb-3" />
          <h2 className="text-2xl font-bold text-dark-100 mb-2">Ready to Apply?</h2>
          <p className="text-dark-400 mb-6 max-w-md mx-auto">Visit the official admissions portal for JoSAA-linked seat allotment and real-time application status.</p>
          <a
            href="#"
            className="btn-primary"
          >
            <UserPlus className="w-4 h-4" /> Apply via JoSAA Portal
          </a>
        </div>
      </div>
    </main>
  );
}
