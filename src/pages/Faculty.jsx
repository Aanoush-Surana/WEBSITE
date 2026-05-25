import { useState, useMemo } from 'react';
import { Users } from 'lucide-react';
import FacultyCard from '../components/faculty/FacultyCard';
import FacultyFilters from '../components/faculty/FacultyFilters';
import { facultyData } from '../data/facultyData';

export default function Faculty() {
  const [search, setSearch] = useState('');
  const [activeDept, setActiveDept] = useState('All Departments');

  const filtered = useMemo(() => {
    return facultyData.filter((f) => {
      const matchesDept =
        activeDept === 'All Departments' || f.departmentShort === activeDept;
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        f.name.toLowerCase().includes(q) ||
        f.expertise.some((e) => e.toLowerCase().includes(q)) ||
        f.department.toLowerCase().includes(q);
      return matchesDept && matchesSearch;
    });
  }, [search, activeDept]);

  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Page hero */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 shrink-0">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2">
              <span className="w-6 h-px bg-cyan-500/60" />
              People
            </div>
            <h1 className="text-4xl font-black text-white">Faculty Directory</h1>
            <p className="text-slate-400 mt-2 max-w-2xl">
              Meet our distinguished faculty — researchers, innovators, and educators driving cutting-edge
              work across Computer Science, Electronics, and Applied Sciences.
            </p>
          </div>
        </div>
      </div>

      {/* Summary stats */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: `${facultyData.length}`, label: 'Faculty Members' },
            { value: '120+', label: 'Publications (2024)' },
            { value: '18+', label: 'Active Projects' },
            { value: '3', label: 'Departments' },
          ].map(({ value, label }) => (
            <div key={label} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center">
              <p className="text-2xl font-black text-cyan-400">{value}</p>
              <p className="text-slate-500 text-xs mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
          <FacultyFilters
            search={search}
            setSearch={setSearch}
            activeDept={activeDept}
            setActiveDept={setActiveDept}
          />
        </div>
      </div>

      {/* Results count */}
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-sm text-slate-500">
          Showing <span className="text-cyan-400 font-semibold">{filtered.length}</span> of {facultyData.length} faculty members
          {activeDept !== 'All Departments' && ` in ${activeDept}`}
          {search && ` matching "${search}"`}
        </p>
      </div>

      {/* Faculty grid */}
      <div className="max-w-7xl mx-auto px-6">
        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((faculty) => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-500">
            <Users className="w-12 h-12 mx-auto mb-4 text-slate-700" />
            <p className="text-lg font-medium">No faculty found</p>
            <p className="text-sm mt-1">Try adjusting your search or filter</p>
          </div>
        )}
      </div>
    </main>
  );
}
