import { useState } from 'react';
import { Clock, Eye, Target, Book, ChevronRight } from 'lucide-react';
import stoneimg from '../schoolassets/SchoolStonework.png'

export default function History() {
  const [activeSection, setActiveSection] = useState('history');

  const sections = [
    { id: 'history', label: 'Our History', icon: <Clock className="w-6 h-6" /> },
    { id: 'vision', label: 'Our Vision', icon: <Eye className="w-6 h-6" /> },
    { id: 'mission', label: 'Our Mission', icon: <Target className="w-6 h-6" /> }
  ];

 // Stone Work Component
  const StoneWork = () => (
    <div className="relative group">
      {/* Stone Memorial Image Container */}
      <div className="relative overflow-hidden rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500">
        {/* Replace src with your image path */}
        <img 
          src={stoneimg}
          alt="Foundation Stone Memorial"
          className="w-full h-auto object-cover"
        />
        
        {/* Optional Overlay on Hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
      </div>

      {/* 3D Shadow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40 rounded-lg transform translate-y-4 translate-x-4 -z-10 blur-md"></div>
      
      {/* Optional: Decorative Corner Accents */}
      <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );

  // History Content
  const HistoryContent = () => (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
          <Clock className="w-8 h-8 text-blue-600" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Rich Heritage</h3>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              Established in <strong>1975-1976</strong>, our institution has been a beacon of educational excellence 
              in Madurai for nearly five decades. What began as a small school has grown into a comprehensive 
              educational institution serving thousands of students.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg my-4">
              <h4 className="font-bold text-gray-900 mb-2">Milestones in Our Journey:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span><strong>1975-1976:</strong> Foundation as Primary School</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span><strong>1997-1998:</strong> Upgraded to Middle School</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span><strong>1997-1998:</strong> Elevated to High School</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span><strong>2001-2002:</strong> Expanded to Higher Secondary School</span>
                </li>
              </ul>
            </div>

            <p>
              Under the administration of the Madurai Municipal Corporation, we have continuously evolved 
              to meet the changing educational needs of our community. Our commitment to quality education 
              has remained unwavering throughout the decades, producing countless successful alumni who 
              contribute meaningfully to society.
            </p>

            <p>
              Today, we stand proud as a testament to educational excellence, combining traditional values 
              with modern teaching methodologies to prepare students for the challenges of tomorrow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // Vision Content
  const VisionContent = () => (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
          <Eye className="w-8 h-8 text-purple-600" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p className="text-xl font-semibold text-purple-700 italic border-l-4 border-purple-600 pl-4">
              "To be a leading institution that nurtures excellence, innovation, and character, 
              empowering every student to reach their fullest potential."
            </p>
            
            <p>
              We envision a future where our school stands as a model of educational excellence, 
              recognized for our commitment to holistic development and academic achievement. Our 
              vision encompasses:
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Academic Excellence
                </h4>
                <p className="text-sm text-gray-700">
                  Creating an environment where academic achievement thrives through innovative 
                  teaching methods and comprehensive curriculum.
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Character Building
                </h4>
                <p className="text-sm text-gray-700">
                  Fostering integrity, responsibility, and ethical values that shape students 
                  into responsible citizens.
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Innovation & Technology
                </h4>
                <p className="text-sm text-gray-700">
                  Embracing modern technology and innovative approaches to prepare students 
                  for a digital future.
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Global Citizenship
                </h4>
                <p className="text-sm text-gray-700">
                  Developing awareness and respect for diverse cultures while nurturing 
                  global perspectives.
                </p>
              </div>
            </div>

            <p>
              We aspire to create an inclusive learning environment where every student feels valued, 
              supported, and inspired to pursue their dreams with confidence and determination.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // Mission Content
  const MissionContent = () => (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
          <Target className="w-8 h-8 text-green-600" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p className="text-lg text-gray-800">
              Our mission is to provide a comprehensive educational experience that empowers students 
              to achieve academic excellence, develop strong character, and become responsible members 
              of society through:
            </p>

            <div className="space-y-4">
              <div className="bg-white border-l-4 border-green-600 p-5 rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Quality Education</h4>
                <p className="text-gray-700">
                  Delivering a rigorous and relevant curriculum that challenges students intellectually 
                  while addressing individual learning needs and styles.
                </p>
              </div>

              <div className="bg-white border-l-4 border-green-600 p-5 rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Holistic Development</h4>
                <p className="text-gray-700">
                  Nurturing physical, emotional, social, and intellectual growth through diverse 
                  programs in sports, arts, and co-curricular activities.
                </p>
              </div>

              <div className="bg-white border-l-4 border-green-600 p-5 rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Dedicated Faculty</h4>
                <p className="text-gray-700">
                  Employing passionate, qualified educators who are committed to student success 
                  and continuous professional development.
                </p>
              </div>

              <div className="bg-white border-l-4 border-green-600 p-5 rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Safe Environment</h4>
                <p className="text-gray-700">
                  Creating a secure, inclusive, and supportive atmosphere where every student 
                  can learn, grow, and thrive without fear or discrimination.
                </p>
              </div>

              <div className="bg-white border-l-4 border-green-600 p-5 rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Community Partnership</h4>
                <p className="text-gray-700">
                  Building strong relationships with families and the community to support 
                  student learning and foster civic responsibility.
                </p>
              </div>
            </div>

            <p className="text-gray-800 font-medium bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
              Through these commitments, we strive to prepare our students not just for examinations, 
              but for life—equipping them with the knowledge, skills, and values necessary to succeed 
              in an ever-changing world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="history" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        
        {/* Main Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Foundation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding our past, embracing our vision, and pursuing our mission
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          {/* Left Side - Stone Memorial */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Foundation Stone
              </h2>
              <StoneWork />
            </div>
          </div>

          {/* Right Side - Content Tabs */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-3 mb-8 border-b-2 border-gray-200 pb-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-semibold transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-blue-600 text-white shadow-lg -mb-4'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {section.icon}
                  {section.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200 min-h-[600px]">
              {activeSection === 'history' && <HistoryContent />}
              {activeSection === 'vision' && <VisionContent />}
              {activeSection === 'mission' && <MissionContent />}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}