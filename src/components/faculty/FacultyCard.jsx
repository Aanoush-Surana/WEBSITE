import { Mail, Phone, BookOpen, FlaskConical, TrendingUp, ExternalLink } from 'lucide-react';

const deptColors = {
  CSE: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  ECE: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  ASM: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
};

const designationColors = {
  Professor: 'text-amber-400',
  'Professor & HOD': 'text-amber-400',
  'Associate Professor': 'text-blue-400',
  'Assistant Professor': 'text-cyan-400',
};

export default function FacultyCard({ faculty }) {
  const {
    name, designation, department, departmentShort,
    expertise, email, phone, publications, projects,
    hIndex, experience, education, googleScholar, researchGate, image,
  } = faculty;

  return (
    <article className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden card-hover group hover:border-cyan-500/30 flex flex-col">
      {/* Photo + dept badge */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

        {/* Dept badge */}
        <div className={`absolute top-4 right-4 px-2.5 py-1 rounded-lg text-xs font-bold border ${deptColors[departmentShort] || 'bg-slate-700/80 text-slate-300 border-slate-600'}`}>
          {departmentShort}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Name + designation */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-white leading-tight">{name}</h3>
          <p className={`text-sm font-medium mt-0.5 ${designationColors[designation] || 'text-slate-400'}`}>
            {designation}
          </p>
          <p className="text-xs text-slate-500 mt-0.5">{department}</p>
        </div>

        {/* Expertise tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {expertise.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-800 border border-slate-700 text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { icon: BookOpen, label: 'Papers', value: publications },
            { icon: FlaskConical, label: 'Projects', value: projects },
            { icon: TrendingUp, label: 'h-Index', value: hIndex },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-slate-800/60 rounded-xl p-2.5 text-center border border-slate-700/50">
              <Icon className="w-3.5 h-3.5 text-cyan-400 mx-auto mb-1" />
              <p className="text-base font-bold text-white">{value}</p>
              <p className="text-[10px] text-slate-500">{label}</p>
            </div>
          ))}
        </div>

        {/* Info */}
        <div className="space-y-1.5 mb-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
            <a href={`mailto:${email}`} className="hover:text-cyan-400 transition-colors truncate">{email}</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
            <span>{phone}</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-500 mt-1">
            <span>📚 {education}</span>
            <span>🕐 {experience}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto pt-1">
          <a
            href={googleScholar}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold hover:bg-cyan-500/20 transition-all duration-200"
          >
            <BookOpen className="w-3.5 h-3.5" />
            Publications
          </a>
          <a
            href={researchGate}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-700 text-slate-300 text-xs font-semibold hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-200"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Profile
          </a>
        </div>
      </div>
    </article>
  );
}
