import React from 'react';
import { 
  Users, BookOpen, Target, Calendar, 
  CheckCircle, MessageCircle, Star, TrendingUp, 
  Lightbulb, HeartHandshake
} from 'lucide-react';

// IMPORT YOUR IMAGES HERE
import smcImage from '../schoolassets/smc_collage.jpg';
import classImage from '../schoolassets/special_class_collage.jpg';

export default function SpecialProgram() {
  return (
    <div className="min-h-screen bg-slate-50 mt-16 pb-20 font-sans">

      {/* --- HERO HEADER --- */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white py-20 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-xs md:text-sm font-semibold border border-white/20 tracking-wide uppercase text-yellow-300">
            Beyond Regular Academics
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-6 mb-6 leading-tight">
            Special Programs & <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400">Strategic Initiatives</span>
          </h1>
          <p className="text-indigo-200 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            We go the extra mile to ensure school governance is transparent and every student gets the additional support they need to excel.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 space-y-20">

        {/* ================= SECTION 1: SMC MEETING ================= */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-2">
            
            {/* Left: Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-rose-100 text-rose-600 rounded-xl">
                  <Users className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">School Management Committee (SMC)</h2>
              </div>
              
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                The SMC is the backbone of our school's development. Comprising parents, teachers, and local representatives, it ensures transparency in administration and fosters a strong community bond.
              </p>

              <div className="space-y-4 mb-8">
                <FeatureRow 
                  icon={<Target className="text-rose-500" />} 
                  title="Strategic Planning"
                  desc="Discussing and approving school development plans."
                />
                <FeatureRow 
                  icon={<MessageCircle className="text-rose-500" />} 
                  title="Parental Engagement"
                  desc="Creating a direct feedback loop between parents and staff."
                />
                <FeatureRow 
                  icon={<HeartHandshake className="text-rose-500" />} 
                  title="Welfare Monitoring"
                  desc="Ensuring proper utilization of funds and student safety."
                />
              </div>

              <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-lg">
                <p className="text-sm text-rose-800 font-medium italic">
                  "Community participation is key to educational success. Our SMC meetings ensure every voice is heard."
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-[400px] lg:h-auto overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <img 
                src={smcImage} 
                alt="SMC Meeting" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <span className="bg-rose-600 px-3 py-1 rounded-full text-xs font-bold uppercase mb-2 inline-block">Community</span>
                <h3 className="text-2xl font-bold">Active Governance</h3>
              </div>
            </div>

          </div>
        </div>

        {/* ================= SECTION 2: SPECIAL CLASSES ================= */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-2">
            
            {/* Left: Image (Order swapped for Zig-Zag effect on desktop) */}
            <div className="relative h-[400px] lg:h-auto overflow-hidden group order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <img 
                src={classImage} 
                alt="Special Classes" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <span className="bg-indigo-600 px-3 py-1 rounded-full text-xs font-bold uppercase mb-2 inline-block">Academic Focus</span>
                <h3 className="text-2xl font-bold">Saturday Special Classes</h3>
              </div>
            </div>

            {/* Right: Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Special Coaching Classes</h2>
              </div>
              
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                To ensure 100% results in board exams and support students who need extra guidance, we conduct dedicated special classes on Saturdays and evenings.
              </p>

              <div className="space-y-4 mb-8">
                <FeatureRow 
                  icon={<Star className="text-indigo-500" />} 
                  title="Board Exam Focus (X & XII)"
                  desc="Intensive coaching for Maths, Science, and Commerce streams."
                />
                <FeatureRow 
                  icon={<Calendar className="text-indigo-500" />} 
                  title="Weekend Sessions"
                  desc="Saturday sessions dedicated to doubt clearing and unit tests."
                />
                <FeatureRow 
                  icon={<Lightbulb className="text-indigo-500" />} 
                  title="Personalized Attention"
                  desc="Small groups to help slow learners catch up with the curriculum."
                />
              </div>

              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                <p className="text-sm text-indigo-800 font-medium italic">
                  "Extra effort today leads to excellence tomorrow. Our teachers dedicate their weekends to student success."
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* --- BOTTOM STATS --- */}
        <div className="grid md:grid-cols-3 gap-6 pb-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center border-b-4 border-rose-500">
            <h3 className="text-4xl font-bold text-rose-600 mb-2">12+</h3>
            <p className="text-gray-600 font-medium">SMC Meetings / Year</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center border-b-4 border-indigo-500">
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">50+</h3>
            <p className="text-gray-600 font-medium">Special Classes / Term</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center border-b-4 border-green-500">
            <h3 className="text-4xl font-bold text-green-600 mb-2">100%</h3>
            <p className="text-gray-600 font-medium">Dedication to Growth</p>
          </div>
        </div>

      </div>
    </div>
  );
}

// Helper Component for Feature Rows
function FeatureRow({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 shrink-0 bg-white p-1.5 rounded-lg shadow-sm border border-gray-100">
        {React.cloneElement(icon, { className: "w-5 h-5" })}
      </div>
      <div>
        <h4 className="font-bold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}