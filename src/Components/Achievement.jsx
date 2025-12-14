import React, { useState } from 'react';
import { Search, Calendar, Award, X } from 'lucide-react';

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');

  const achievements = [
    {
      id: 1,
      title: 'National Science Olympiad Gold Medal',
      date: '2024-11-15',
      year: '2024',
      description: 'Our talented students secured first place in the National Science Olympiad, competing against 200+ schools nationwide. The team demonstrated exceptional problem-solving skills and scientific knowledge.',
      images: [
        'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
        'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80'
      ],
      category: 'Academic'
    },
    {
      id: 2,
      title: 'International Robotics Championship',
      date: '2024-10-22',
      year: '2024',
      description: 'Student team won the prestigious International Robotics Championship with their innovative AI-powered robot design. The project showcased advanced programming and engineering skills.',
      images: [
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80'
      ],
      category: 'Technology'
    },
    {
      id: 3,
      title: 'State Level Art Competition Winner',
      date: '2024-09-10',
      year: '2024',
      description: 'Excellence in creative arts was recognized at the state level competition. Students created breathtaking artwork that impressed judges with its originality and technique.',
      images: [
        'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80',
        'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80'
      ],
      category: 'Arts'
    },
    {
      id: 4,
      title: 'Mathematics Olympiad Regional Champions',
      date: '2023-12-05',
      year: '2023',
      description: 'Our mathematics team clinched the regional championship, solving complex problems with remarkable speed and accuracy. This achievement qualifies them for the national finals.',
      images: [
        'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80',
        'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80'
      ],
      category: 'Academic'
    },
    {
      id: 5,
      title: 'Inter-School Sports Championship',
      date: '2023-08-18',
      year: '2023',
      description: 'Outstanding performance in athletics and team sports led to winning the overall championship trophy. Students showed exceptional sportsmanship and dedication.',
      images: [
        'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
        'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
        'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80'
      ],
      category: 'Sports'
    },
    {
      id: 6,
      title: 'Environmental Innovation Award',
      date: '2023-06-30',
      year: '2023',
      description: 'Students received national recognition for their innovative environmental project focused on sustainable waste management. The project has been adopted by local authorities.',
      images: [
        'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
        'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80'
      ],
      category: 'Environment'
    }
  ];

  const years = ['all', ...new Set(achievements.map(a => a.year))];

  const filteredAchievements = achievements.filter(achievement => {
    const matchesSearch = achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         achievement.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === 'all' || achievement.year === selectedYear;
    return matchesSearch && matchesYear;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white p-6 mt-25">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-12 h-12 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-bold text-emerald-900 mb-2">Student Achievements</h1>
          <p className="text-emerald-700">Celebrating excellence and success</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search achievements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Year Filter */}
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-500 w-5 h-5" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="pl-10 pr-8 py-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-500 bg-white appearance-none cursor-pointer"
              >
                {years.map(year => (
                  <option key={year} value={year}>
                    {year === 'all' ? 'All Years' : year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map(achievement => (
            <div
              key={achievement.id}
              onClick={() => setSelectedAchievement(achievement)}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image Gallery */}
              <div className="relative h-48 bg-emerald-100">
                <img
                  src={achievement.images[0]}
                  alt={achievement.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {achievement.category}
                </div>
                {achievement.images.length > 1 && (
                  <div className="absolute bottom-3 right-3 bg-white/90 text-emerald-700 px-2 py-1 rounded-full text-xs font-semibold">
                    +{achievement.images.length - 1} more
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-emerald-600 text-sm mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(achievement.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-2 line-clamp-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {achievement.description}
                </p>
                <div className="mt-4">
                  <span className="text-emerald-600 text-sm font-semibold hover:underline">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAchievements.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No achievements found matching your criteria.</p>
          </div>
        )}

        {/* Modal */}
        {selectedAchievement && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50" onClick={() => setSelectedAchievement(null)}>
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              {/* Modal Header */}
              <div className="sticky top-0 bg-emerald-600 text-white p-6 flex justify-between items-start">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-2">{selectedAchievement.title}</h2>
                  <div className="flex items-center gap-4 text-emerald-100">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(selectedAchievement.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="bg-emerald-700 px-3 py-1 rounded-full text-sm">
                      {selectedAchievement.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="p-2 hover:bg-emerald-700 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Image Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {selectedAchievement.images.map((img, idx) => (
                    <div key={idx} className="rounded-lg overflow-hidden shadow-md">
                      <img
                        src={img}
                        alt={`${selectedAchievement.title} - Image ${idx + 1}`}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div className="bg-emerald-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-emerald-900 mb-3">About this Achievement</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedAchievement.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Achievements;