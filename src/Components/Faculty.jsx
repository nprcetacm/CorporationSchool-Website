import React, { useState, useMemo } from 'react';
import { Search, GraduationCap, BookOpen, Clock, Users, User, Filter, BadgeCheck, Briefcase } from 'lucide-react';

export default function Faculty() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');

  // --- DATA SOURCE ---
  const facultyData = {
    teachers: [
      { id: 1, name: "SUDHANDIRA DEVI M", gender: "Female", qual: "MSC, B.Ed.", role: "TGT", subjects: ["Mathematics", "Science"], class: "Secondary", exp: "05-10-2010" },
      { id: 2, name: "INDRA R", gender: "Female", qual: "M.A, B.Ed.", role: "PGT", subjects: ["Regional Language"], class: "Higher Secondary", exp: "31-07-1995" },
      { id: 3, name: "RAJASEKARAN C", gender: "Male", qual: "M.A, B.Ed.", role: "PGT", subjects: ["Social Studies"], class: "Upper primary", exp: "15-03-2001" },
      { id: 4, name: "JAYAKARAN M", gender: "Male", qual: "Others", role: "PGT", subjects: ["Physical Education"], class: "Higher Secondary", exp: "01-12-2002" },
      { id: 5, name: "MOHAMED HUSSAIN A", gender: "Male", qual: "Secondary, B.Ed.", role: "TGT", subjects: ["Art Education"], class: "Upper primary", exp: "07-03-2012" },
      { id: 6, name: "KARPAHAVALLI M", gender: "Female", qual: "MSC, B.Ed.", role: "TGT", subjects: ["Work Education", "Maths"], class: "Upper primary", exp: "08-03-2012" },
      { id: 7, name: "BOOMINATHAN M", gender: "Male", qual: "Others, B.Ed.", role: "TGT", subjects: ["Physical Education"], class: "Upper primary", exp: "01-03-2013" },
      { id: 8, name: "THAMARAICHELVI S", gender: "Female", qual: "M.A, B.Ed.", role: "TGT", subjects: ["Physics", "Science"], class: "Upper primary", exp: "08-11-2012" },
      { id: 9, name: "SARAL D", gender: "Female", qual: "M.A, B.Ed.", role: "PGT", subjects: ["Regional Language"], class: "Higher Secondary", exp: "28-07-1995" },
      { id: 10, name: "MALARMANI C", gender: "Female", qual: "M.A, B.Ed.", role: "TGT", subjects: ["Regional Language", "Social"], class: "Secondary", exp: "07-12-1990" },
      { id: 11, name: "MEENAKSHI S S", gender: "Female", qual: "M.A, B.Ed.", role: "TGT", subjects: ["Regional Language"], class: "Secondary", exp: "19-07-1988" },
      { id: 12, name: "LILLY MARY P", gender: "Female", qual: "M.A, B.Ed.", role: "TGT", subjects: ["English"], class: "Upper primary", exp: "26-07-1999" },
      { id: 13, name: "JEYANTHI MAI N K", gender: "Female", qual: "M.A, B.Ed.", role: "TGT", subjects: ["English"], class: "Secondary", exp: "12-01-2009" },
      { id: 14, name: "SUJATHA G", gender: "Female", qual: "M.Phil, B.Ed.", role: "TGT", subjects: ["English"], class: "Upper primary", exp: "09-07-2004" },
      { id: 15, name: "NIRMAL N", gender: "Male", qual: "M.A, B.Ed.", role: "TGT", subjects: ["Mathematics", "English"], class: "Secondary", exp: "17-08-2005" },
      { id: 16, name: "ANNARANI S", gender: "Female", qual: "M.Phil, B.Ed.", role: "TGT", subjects: ["Mathematics"], class: "Upper primary", exp: "27-10-2010" },
      { id: 17, name: "ANBARASI ZUNAITHA H", gender: "Female", qual: "MSC, B.Ed.", role: "TGT", subjects: ["Physics", "Science"], class: "Higher Secondary", exp: "15-09-2010" },
      { id: 18, name: "SATHYAKALA R", gender: "Female", qual: "M.Phil, B.Ed.", role: "TGT", subjects: ["Science"], class: "Upper primary", exp: "17-12-2012" },
      { id: 19, name: "CHITRA G", gender: "Female", qual: "MSC, B.Ed.", role: "TGT", subjects: ["Geography", "Social"], class: "Secondary", exp: "05-10-2012" },
      { id: 20, name: "SANTHI A", gender: "Female", qual: "M.A, B.Ed.", role: "TGT", subjects: ["Social Studies", "History"], class: "Upper primary", exp: "02-08-1995" },
      { id: 21, name: "SENTHIL KUMAR S R", gender: "Male", qual: "M.A, B.Ed.", role: "TGT", subjects: ["Social Studies"], class: "Upper primary", exp: "17-08-2005" },
      { id: 22, name: "FRANCIS XAVIER MARY V", gender: "Female", qual: "M.Phil, B.Ed.", role: "TGT", subjects: ["Physics", "Science"], class: "Secondary", exp: "30-09-2005" },
      { id: 23, name: "SUBRAMANIAKUMAR H", gender: "Male", qual: "M.A, B.Ed.", role: "PGT", subjects: ["English"], class: "Higher Secondary", exp: "27-07-1995" },
      { id: 24, name: "AMUTHA FLORENCE P", gender: "Female", qual: "MSC, M.Ed.", role: "TGT", subjects: ["Chemistry"], class: "Higher Secondary", exp: "23-09-2005" },
      { id: 25, name: "NITHILAMADEVI S P", gender: "Female", qual: "MSC, B.Ed.", role: "PGT", subjects: ["Mathematics"], class: "Higher Secondary", exp: "27-02-2001" },
      { id: 26, name: "RUBY SHALINI J", gender: "Female", qual: "M.Com, B.Ed.", role: "PGT", subjects: ["Accountancy"], class: "Higher Secondary", exp: "01-06-2016" },
      { id: 27, name: "KIRTHIKA M", gender: "Female", qual: "M.A, B.Ed.", role: "PGT", subjects: ["Economics"], class: "Higher Secondary", exp: "13-11-2021" },
      { id: 28, name: "SIVAPRATHA M", gender: "Female", qual: "MSC, B.Ed.", role: "PGT", subjects: ["Computer Science"], class: "Higher Secondary", exp: "18-07-2024" },
      { id: 29, name: "CLARA MARY J", gender: "Female", qual: "MSC, B.Ed.", role: "PGT", subjects: ["Computer Science"], class: "Higher Secondary", exp: "22-07-2024" },
      { id: 30, name: "BALASUBRAMANIAN M", gender: "Male", qual: "M.Com, B.Ed.", role: "PGT", subjects: ["Accountancy"], class: "Higher Secondary", exp: "08-06-2018" }
    ],
    nonTeaching: [
      { id: 1, name: "JAYAMUNI K", gender: "Female", role: "Office Assistant", qual: "Higher Secondary", exp: "28-02-2011" },
      { id: 2, name: "KUMARAVEL R", gender: "Male", role: "Office Attendant", qual: "Graduate", exp: "16-07-2024" }
    ]
  };

  // Helper: Calculate Years of Service
  const calculateExperience = (dateString) => {
    const parts = dateString.split('-');
    const joinDate = new Date(parts[2], parts[1] - 1, parts[0]);
    const today = new Date();
    const diffTime = Math.abs(today - joinDate);
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
    return diffYears;
  };

  // Filter Logic
  const filteredTeachers = facultyData.teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          teacher.subjects.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = filterType === 'All' || teacher.role.includes(filterType);
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-slate-50 mt-16 font-sans">
      
      {/* --- HERO SECTION --- */}
      <div className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500 opacity-10 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Dedicated Faculty</h1>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
            Meet the passionate educators and staff who nurture, guide, and inspire our students every day.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400">{facultyData.teachers.length}</div>
              <div className="text-xs text-indigo-200 uppercase tracking-wider">Teaching Staff</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-pink-400">{facultyData.nonTeaching.length}</div>
              <div className="text-xs text-indigo-200 uppercase tracking-wider">Support Staff</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-emerald-400">15+</div>
              <div className="text-xs text-indigo-200 uppercase tracking-wider">Avg Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-cyan-400">100%</div>
              <div className="text-xs text-indigo-200 uppercase tracking-wider">Qualified</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* --- CONTROLS --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 bg-white p-4 rounded-xl shadow-sm border border-gray-100 sticky top-20 z-30">
          
          {/* Search */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name or subject..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 focus:bg-white transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            {['All', 'PGT', 'TGT'].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  filterType === type 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {type === 'All' ? 'All Faculty' : type}
              </button>
            ))}
          </div>
        </div>

        {/* --- TEACHING FACULTY GRID --- */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-800">Teaching Faculty</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeachers.map((teacher, index) => (
              <div 
                key={teacher.id}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                style={{ animation: `fadeIn 0.5s ease-out forwards ${index * 0.05}s`, opacity: 0 }}
              >
                {/* Colored Top Border */}
                <div className={`absolute top-0 left-0 w-full h-1.5 ${
                  teacher.role.includes('PGT') ? 'bg-purple-500' : 'bg-emerald-500'
                }`}></div>

                <div className="flex items-start gap-4">
                  {/* Avatar Placeholder */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg shrink-0 ${
                    teacher.gender === 'Female' 
                      ? 'bg-gradient-to-br from-pink-400 to-rose-500' 
                      : 'bg-gradient-to-br from-blue-400 to-indigo-500'
                  }`}>
                    {teacher.name.charAt(0)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 truncate pr-2 group-hover:text-indigo-600 transition-colors">
                      {teacher.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                        teacher.role.includes('PGT') 
                          ? 'bg-purple-100 text-purple-700' 
                          : 'bg-emerald-100 text-emerald-700'
                      }`}>
                        {teacher.role}
                      </span>
                      {calculateExperience(teacher.exp) > 15 && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center gap-1">
                          <BadgeCheck className="w-3 h-3" /> Senior
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="p-1.5 bg-gray-50 rounded-md shrink-0">
                      <BookOpen className="w-4 h-4 text-indigo-500" />
                    </div>
                    <span className="font-medium truncate">{teacher.subjects.join(", ")}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="p-1.5 bg-gray-50 rounded-md shrink-0">
                      <GraduationCap className="w-4 h-4 text-indigo-500" />
                    </div>
                    <span className="truncate">{teacher.qual}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="p-1.5 bg-gray-50 rounded-md shrink-0">
                      <Users className="w-4 h-4 text-indigo-500" />
                    </div>
                    <span className="truncate">{teacher.class}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="p-1.5 bg-gray-50 rounded-md shrink-0">
                      <Clock className="w-4 h-4 text-indigo-500" />
                    </div>
                    <span>{calculateExperience(teacher.exp)} Years Service</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredTeachers.length === 0 && (
             <div className="text-center py-12 text-gray-500 bg-white rounded-xl border border-dashed border-gray-300">
               <User className="w-12 h-12 mx-auto mb-2 opacity-20" />
               <p>No faculty found matching your search.</p>
             </div>
          )}
        </div>

        {/* --- NON-TEACHING STAFF SECTION --- */}
        <div className="bg-slate-100 rounded-3xl p-8 border border-slate-200">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-6 h-6 text-slate-700" />
            <h2 className="text-2xl font-bold text-gray-800">Administrative Support Staff</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facultyData.nonTeaching.map((staff) => (
              <div key={staff.id} className="bg-white rounded-xl p-5 shadow-sm flex items-center gap-4 border-l-4 border-slate-400">
                 <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                   staff.gender === 'Female' ? 'bg-slate-400' : 'bg-slate-500'
                 }`}>
                   {staff.name.charAt(0)}
                 </div>
                 <div>
                   <h3 className="font-bold text-gray-900">{staff.name}</h3>
                   <p className="text-sm text-indigo-600 font-medium">{staff.role}</p>
                   <p className="text-xs text-gray-500 mt-1">{staff.qual} • {calculateExperience(staff.exp)} Years Exp</p>
                 </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}