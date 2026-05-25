import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building2, Target, UserCircle, Award, FileText, FilePlus, Scale, FileEdit,
  Crown, ClipboardList, Users, IndianRupee, Building, Landmark, Code, Cpu, BookOpen,
  Code2, CircuitBoard, Star, GraduationCap, FlaskConical, Calendar, Receipt, Scroll,
  TrendingUp, CheckCircle, UserCheck, Library, Briefcase, CalendarDays, UserCog,
  UserPlus, UserX, Globe, Users2, PenTool, Lightbulb, Music2, Palette, Guitar,
  Trophy, HelpCircle, Heart, Sun, Recycle, Image, Newspaper, MapPin, Bell,
  AlertCircle, Shield, ChevronRight, Info,
} from 'lucide-react';

const iconMap = {
  Building2, Target, UserCircle, Award, FileText, FilePlus, Scale, FileEdit,
  Crown, ClipboardList, Users, IndianRupee, Building, Landmark, Code, Cpu, BookOpen,
  Code2, CircuitBoard, Star, GraduationCap, FlaskConical, Calendar, Receipt, Scroll,
  TrendingUp, CheckCircle, UserCheck, Library, Briefcase, CalendarDays, UserCog,
  UserPlus, UserX, Globe, Users2, PenTool, Lightbulb, Music2, Palette, Guitar,
  Trophy, HelpCircle, Heart, Sun, Recycle, Image, Newspaper, MapPin, Bell,
  AlertCircle, Shield, Info,
};

function IconComponent({ name, size = 16 }) {
  const Icon = iconMap[name] || ChevronRight;
  return <Icon size={size} />;
}

export default function MegaMenu({ menu, onMouseEnter, onMouseLeave }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute left-1/2 -translate-x-1/2 top-full mt-1 z-50"
      style={{ minWidth: menu.sections.length * 220 + 'px', maxWidth: '720px' }}
    >
      {/* Arrow */}
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-dark-900 border-l border-t border-white/10 rotate-45" />

      <div className="relative bg-dark-900/98 backdrop-blur-xl border border-white/10 rounded-2xl shadow-card-hover overflow-hidden">
        {/* Top accent bar */}
        <div className="h-0.5 bg-gradient-to-r from-brand-700 via-brand-500 to-navy-600" />

        <div className={`grid p-5 gap-6`} style={{ gridTemplateColumns: `repeat(${menu.sections.length}, minmax(0, 1fr))` }}>
          {menu.sections.map((section, sIdx) => (
            <div key={sIdx}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1 h-4 bg-gradient-to-b from-brand-500 to-brand-700 rounded-full" />
                <h3 className="text-xs font-bold text-dark-300 uppercase tracking-widest">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-0.5">
                {section.items.map((item, iIdx) => (
                  <li key={iIdx}>
                    <Link
                      to={item.href}
                      className="group flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-all duration-150"
                    >
                      <div className="mt-0.5 w-7 h-7 rounded-lg bg-dark-800 border border-white/5 flex items-center justify-center text-brand-500 group-hover:text-brand-400 group-hover:border-brand-800/50 group-hover:bg-brand-950/50 transition-all flex-shrink-0">
                        <IconComponent name={item.icon} size={14} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-white/80 group-hover:text-white transition-colors leading-tight">
                          {item.label}
                        </div>
                        {item.desc && (
                          <div className="text-xs text-dark-400 mt-0.5 leading-tight truncate">
                            {item.desc}
                          </div>
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
