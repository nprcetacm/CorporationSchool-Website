import { useState } from 'react';
import { Heart, Target, Eye, Award, Users, BookOpen, Lightbulb, Globe } from 'lucide-react';
import img1 from '../schoolassets/scho-img3.png'
import img2 from '../schoolassets/lab1.jpg'
import img3 from '../schoolassets/sciencelab-pic.jpg'
import img5 from '../schoolassets/scho-img1.png'
import img6 from '../schoolassets/scho-img2.png'



export default function AboutUs() {
  const [activeTab, setActiveTab] = useState('mission');

  const tabs = [
    { id: 'mission', label: 'Our Mission', icon: <Target className="w-5 h-5" /> },
    { id: 'vision', label: 'Our Vision', icon: <Eye className="w-5 h-5" /> },
    { id: 'values', label: 'Core Values', icon: <Heart className="w-5 h-5" /> }
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do, from academics to character development.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community',
      description: 'Building strong relationships and fostering a supportive environment for all members.'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Learning',
      description: 'Promoting lifelong learning and curiosity in every student through innovative teaching.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Embracing new ideas and technologies to prepare students for a dynamic future.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Integrity',
      description: 'Upholding honesty, responsibility, and ethical behavior in all our interactions.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Citizenship',
      description: 'Developing awareness and respect for diverse cultures and global perspectives.'
    }
  ];



  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            About Our School
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Building Tomorrow's Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over two decades, we've been committed to providing exceptional education 
            that nurtures both minds and hearts, preparing students for a bright future.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left Side - Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={img1} 
                    alt="Students learning"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 bg-gradient-to-br from-pink-400 to-orange-500 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={img2} 
                    alt="School activities"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={img5} 
                    alt="Classroom"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={img6} 
                    alt="Students success"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border-4 border-yellow-400">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600">28+</div>
                <div className="text-sm text-gray-600 font-medium">Years Legacy</div>
              </div>
            </div>
          </div>

          {/* Right Side - Tabs Content */}
          <div>
            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-indigo-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              {activeTab === 'mission' && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-indigo-600" />
                    </div>
                    Our Mission
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To provide a comprehensive educational experience that empowers students to achieve 
                    academic excellence, develop strong character, and become responsible global citizens. 
                    We are dedicated to fostering critical thinking, creativity, and a lifelong love of learning 
                    in a nurturing and inclusive environment.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Through innovative teaching methods, state-of-the-art facilities, and a passionate faculty, 
                    we prepare our students to face future challenges with confidence and integrity.
                  </p>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Eye className="w-6 h-6 text-purple-600" />
                    </div>
                    Our Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To be recognized as a leading educational institution that transforms lives through 
                    excellence in teaching, character development, and holistic education. We envision a 
                    future where every student discovers their potential and makes meaningful contributions 
                    to society.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    We aspire to create leaders who are not only academically accomplished but also 
                    compassionate, ethical, and ready to make a positive impact on the world.
                  </p>
                </div>
              )}

              {activeTab === 'values' && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
                    {/* <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-pink-600" />
                    </div> */}
                    Core Values
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {values.slice(0, 4).map((value, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
                        <div className="text-indigo-600 flex-shrink-0">
                          {value.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">{value.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

 

      </div>
    </section>
  );
}