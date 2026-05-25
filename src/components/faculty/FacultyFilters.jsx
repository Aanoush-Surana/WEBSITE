import { Search, SlidersHorizontal } from 'lucide-react';
import { departments } from '../../data/facultyData';

export default function FacultyFilters({ search, setSearch, activeDept, setActiveDept }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
      {/* Search */}
      <div className="relative flex-1 max-w-sm">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        <input
          type="text"
          placeholder="Search faculty..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
        />
      </div>

      {/* Department filter tabs */}
      <div className="flex items-center gap-2 flex-wrap">
        <SlidersHorizontal className="w-4 h-4 text-slate-500" />
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setActiveDept(dept)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeDept === dept
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                : 'bg-slate-800 border border-slate-700 text-slate-400 hover:border-slate-600 hover:text-slate-200'
            }`}
          >
            {dept}
          </button>
        ))}
      </div>
    </div>
  );
}
