import React, { useState } from 'react';
import { Bell, Calendar, Pin, Clock, AlertCircle, FileText, X } from 'lucide-react';

export default function NoticeBoard() {
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');

  // Easy to modify static data
  const notices = [
    {
      id: 1,
      title: 'பருவத் தேர்வு அட்டவணை வெளியீடு',
      titleEng: 'Term Examination Schedule Released',
      date: '2024-12-15',
      category: 'exam',
      priority: 'high',
      description: 'இரண்டாம் பருவத் தேர்வுகள் ஜனவரி 15, 2025 முதல் தொடங்கும். முழு அட்டவணையை பள்ளி அறிவிப்பு பலகையில் பார்க்கவும்.',
      descriptionEng: 'Second term examinations will commence from January 15, 2025. Complete schedule available on school notice board.',
      author: 'Principal',
      isPinned: true
    },
    {
      id: 2,
      title: 'விளையாட்டு நாள் கொண்டாட்டம்',
      titleEng: 'Sports Day Celebration',
      date: '2024-12-20',
      category: 'event',
      priority: 'medium',
      description: 'வருகிற டிசம்பர் 28 அன்று பள்ளி விளையாட்டு நாள் நடைபெறும். அனைத்து மாணவர்களும் கலந்து கொள்ள வேண்டும்.',
      descriptionEng: 'School Sports Day will be held on December 28. All students are required to participate.',
      author: 'Sports Coordinator',
      isPinned: true
    },
    {
      id: 3,
      title: 'பெற்றோர்-ஆசிரியர் சந்திப்பு',
      titleEng: 'Parent-Teacher Meeting',
      date: '2024-12-18',
      category: 'meeting',
      priority: 'high',
      description: 'டிசம்பர் 22 அன்று காலை 9 மணிக்கு பெற்றோர்-ஆசிரியர் சந்திப்பு நடைபெறும். மாணவர்களின் முன்னேற்றம் குறித்து விவாதிக்கப்படும்.',
      descriptionEng: 'Parent-Teacher meeting scheduled on December 22 at 9:00 AM to discuss student progress.',
      author: 'Headmaster',
      isPinned: false
    },
    {
      id: 4,
      title: 'புத்தக வினியோகம்',
      titleEng: 'Textbook Distribution',
      date: '2024-12-12',
      category: 'general',
      priority: 'medium',
      description: 'புதிய பருவத்திற்கான பாடப்புத்தகங்கள் வினியோகிக்கப்படும். அனைத்து மாணவர்களும் தங்கள் வகுப்பு ஆசிரியரை சந்திக்கவும்.',
      descriptionEng: 'Textbooks for new term will be distributed. All students must meet their class teachers.',
      author: 'Administration',
      isPinned: false
    },
    {
      id: 5,
      title: 'அறிவியல் கண்காட்சி',
      titleEng: 'Science Exhibition',
      date: '2024-12-25',
      category: 'event',
      priority: 'medium',
      description: 'ஜனவரி 10-12 வரை பள்ளி அறிவியல் கண்காட்சி நடைபெறும். மாணவர்கள் தங்கள் திட்டங்களை சமர்ப்பிக்கலாம்.',
      descriptionEng: 'School Science Exhibition from January 10-12. Students can submit their projects.',
      author: 'Science Department',
      isPinned: false
    },
    {
      id: 6,
      title: 'விடுமுறை அறிவிப்பு',
      titleEng: 'Holiday Notice',
      date: '2024-12-10',
      category: 'holiday',
      priority: 'low',
      description: 'பொங்கல் பண்டிகைக்காக ஜனவரி 14-16 வரை விடுமுறை. பள்ளி ஜனவரி 17 அன்று மீண்டும் திறக்கும்.',
      descriptionEng: 'Holiday for Pongal festival from January 14-16. School reopens on January 17.',
      author: 'Administration',
      isPinned: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All', icon: FileText, color: 'gray' },
    { id: 'exam', label: 'Exams', icon: AlertCircle, color: 'red' },
    { id: 'event', label: 'Events', icon: Calendar, color: 'blue' },
    { id: 'meeting', label: 'Meetings', icon: Bell, color: 'orange' },
    { id: 'holiday', label: 'Holidays', icon: Calendar, color: 'green' },
    { id: 'general', label: 'General', icon: FileText, color: 'purple' }
  ];

  // Map of color -> concrete Tailwind class fragments (keeps classes static for Tailwind)
  const colorMap = {
    red: {
      active: 'bg-red-600',
      label: 'bg-red-100 text-red-700 border border-red-200',
      header: 'bg-red-600',
      hoverBorder: 'hover:border-red-400'
    },
    blue: {
      active: 'bg-blue-600',
      label: 'bg-blue-100 text-blue-700 border border-blue-200',
      header: 'bg-blue-600',
      hoverBorder: 'hover:border-blue-400'
    },
    orange: {
      active: 'bg-orange-600',
      label: 'bg-orange-100 text-orange-700 border border-orange-200',
      header: 'bg-orange-600',
      hoverBorder: 'hover:border-orange-400'
    },
    green: {
      active: 'bg-green-600',
      label: 'bg-green-100 text-green-700 border border-green-200',
      header: 'bg-green-600',
      hoverBorder: 'hover:border-green-400'
    },
    purple: {
      active: 'bg-purple-600',
      label: 'bg-purple-100 text-purple-700 border border-purple-200',
      header: 'bg-purple-600',
      hoverBorder: 'hover:border-purple-400'
    },
    gray: {
      active: 'bg-gray-600',
      label: 'bg-gray-100 text-gray-700 border border-gray-200',
      header: 'bg-gray-600',
      hoverBorder: 'hover:border-gray-400'
    }
  };

  // returns the basic color string for a category
  const getCategoryColor = (category) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'gray';
  };

  // returns the class fragments for a color (safe static class strings for Tailwind)
  const getCategoryClasses = (color) => {
    return colorMap[color] || colorMap.gray;
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-red-400 bg-red-50';
      case 'medium': return 'border-yellow-400 bg-yellow-50';
      case 'low': return 'border-green-400 bg-green-50';
      default: return 'border-gray-400 bg-gray-50';
    }
  };

  const filteredNotices = filterCategory === 'all' 
    ? notices 
    : notices.filter(n => n.category === filterCategory);

  const pinnedNotices = filteredNotices.filter(n => n.isPinned);
  const regularNotices = filteredNotices.filter(n => !n.isPinned);

  return (
    <div className="max-w-7xl mt-23 mx-auto p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-3">
          <div className="p-3 bg-orange-100 rounded-lg">
            <Bell className="w-8 h-8 text-orange-600" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Notice Board</h1>
            <p className="text-orange-600 font-medium">அறிவிப்பு பலகை</p>
          </div>
        </div>
        <p className="text-gray-600">
          Stay updated with latest announcements and important information
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const catClasses = getCategoryClasses(cat.color);
          const isActive = filterCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                isActive
                  ? `${catClasses.active} text-white shadow-md`
                  : `bg-white text-gray-700 border border-gray-200 ${catClasses.hoverBorder}`
              }`}
            >
              <Icon className="w-4 h-4" />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Pinned Notices */}
      {pinnedNotices.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Pin className="w-5 h-5 text-red-600" />
            Pinned Notices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pinnedNotices.map((notice) => (
              <NoticeCard
                key={notice.id}
                notice={notice}
                onClick={() => setSelectedNotice(notice)}
                getPriorityColor={getPriorityColor}
                getCategoryColor={getCategoryColor}
                getCategoryClasses={getCategoryClasses}
              />
            ))}
          </div>
        </div>
      )}

      {/* Regular Notices */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {regularNotices.map((notice) => (
          <NoticeCard
            key={notice.id}
            notice={notice}
            onClick={() => setSelectedNotice(notice)}
            getPriorityColor={getPriorityColor}
            getCategoryColor={getCategoryColor}
            getCategoryClasses={getCategoryClasses}
          />
        ))}
      </div>

      {filteredNotices.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <Bell className="w-16 h-16 mx-auto mb-4 opacity-30" />
          <p className="text-lg">No notices in this category</p>
        </div>
      )}

      {/* Modal */}
      {selectedNotice && (
        <NoticeModal
          notice={selectedNotice}
          onClose={() => setSelectedNotice(null)}
          getCategoryColor={getCategoryColor}
          getCategoryClasses={getCategoryClasses}
        />
      )}
    </div>
  );
}

function NoticeCard({ notice, onClick, getPriorityColor, getCategoryColor, getCategoryClasses }) {
  const colorKey = getCategoryColor(notice.category);
  const classes = getCategoryClasses(colorKey);
  
  return (
    <div
      onClick={onClick}
      // keep card visually white even when overlay appears; add active scale to reduce dark flash
      className={`relative bg-white rounded-xl p-5 border-l-4 ${getPriorityColor(notice.priority)} cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-[0.98]`}
    >
      {notice.isPinned && (
        <Pin className="absolute top-3 right-3 w-5 h-5 text-red-600 transform rotate-45" />
      )}
      
      <div className="flex items-start justify-between mb-3">
        <span className={`${classes.label} px-3 py-1 text-xs font-semibold rounded-full`}>
          {notice.category.toUpperCase()}
        </span>
      </div>
      
      <h3 className="text-lg font-bold text-gray-800 mb-1">{notice.titleEng}</h3>
      <p className="text-sm text-gray-600 mb-3">{notice.title}</p>
      
      <p className="text-sm text-gray-700 line-clamp-2 mb-4">
        {notice.descriptionEng}
      </p>
      
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {new Date(notice.date).toLocaleDateString('en-GB')}
        </div>
        <span className="font-medium">{notice.author}</span>
      </div>
    </div>
  );
}

function NoticeModal({ notice, onClose, getCategoryColor, getCategoryClasses }) {
  const colorKey = getCategoryColor(notice.category);
  const classes = getCategoryClasses(colorKey);
  
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className={`${classes.header} text-white p-6 rounded-t-2xl relative`}>
          <button
            onClick={onClose}
            aria-label="Close notice"
            className="absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-2 mb-3">
            {/* white badge so it stays readable on colored header */}
            <span className="px-3 py-1 bg-white text-gray-800 text-xs font-semibold rounded-full shadow">
              {notice.category.toUpperCase()}
            </span>
            {notice.isPinned && <Pin className="w-5 h-5" />}
          </div>
          
          <h2 className="text-2xl font-bold mb-2">{notice.titleEng}</h2>
          <p className="text-lg opacity-90">{notice.title}</p>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(notice.date).toLocaleDateString('en-GB', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Posted by {notice.author}
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Description (English)</h3>
              <p className="text-gray-700 leading-relaxed">{notice.descriptionEng}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">விளக்கம் (தமிழ்)</h3>
              <p className="text-gray-700 leading-relaxed">{notice.description}</p>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 italic">
              For more information, please contact the school office or respective department.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
