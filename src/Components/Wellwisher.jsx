import React, { useState } from 'react';
import { Users, Sparkles, ArrowDown, Landmark, Building2, MapPin, Layers, GitMerge, ChevronDown, ChevronUp, School, Quote, UserCircle } from 'lucide-react';
// Import your images here. 
// For now, I am using the same image for everyone as a placeholder. 
// YOU MUST CHANGE THESE IMPORTS to your real photos.
import Wellwisherimage from '../schoolassets/Wellwisher.jpg'; 

export default function Wellwisher() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // --- 1. ADMINISTRATIVE HIERARCHY DATA (Government -> School) ---
  const hierarchy = [
    { 
      label: 'Government', 
      value: 'Government of Tamil Nadu', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/81/TamilNadu_Logo.svg',
      icon: <Landmark className="w-5 h-5" />,
      points: ['Formulates educational policies', 'Allocates budget', 'Ensures constitutional rights']
    },
    { 
      label: 'Department', 
      value: 'School Education Department', 
      icon: <Building2 className="w-5 h-5" />,
      points: ['Implements RTE Act', 'Develops curriculum', 'Ensures safety and infrastructure']
    },
    { 
      label: 'Directorate', 
      value: 'Directorate of School Education', 
      icon: <GitMerge className="w-5 h-5" />,
      points: ['Conducts public exams (SSLC/HSC)', 'Manages regional offices', 'Administers scholarships']
    },
    { 
      label: 'District', 
      value: 'Madurai District', 
      icon: <MapPin className="w-5 h-5" />,
      points: ['District-level administration', 'Monitors school performance', 'Teacher appointments']
    },
    { 
      label: 'Block', 
      value: 'Educational District / Block', 
      icon: <Layers className="w-5 h-5" />,
      points: ['Academic support', 'Teacher training workshops', 'Implementation of schemes']
    },
    { 
      label: 'Local Body', 
      value: 'Madurai Corporation', 
      icon: <Users className="w-5 h-5" />,
      points: ['Maintains school infrastructure', 'Manages sanitation & water', 'Supports local welfare']
    },
  ];

  // --- 2. DIGNITARIES & PREFACE MESSAGES DATA ---
  // Update the 'image' field for each person with their real photo
  const dignitaries = [
    {
      role: "Honourable Mayor",
      tamilRole: "மாண்புமிகு மேயர்",
      name: "Mayor Name Here",
      image: null, // Put Mayor's photo here
      color: "from-yellow-400 to-orange-500",
      message: "As the Mayor of Madurai Corporation, I am delighted to witness the growth of this institution. Education is the foundation of our city's future, and we are committed to providing world-class facilities to our corporation schools."
    },
    {
      role: "Deputy Mayor",
      tamilRole: "துணை மேயர்",
      name: "Deputy Mayor Name Here",
      image: null, // Put Deputy Mayor's photo here
      color: "from-blue-400 to-indigo-500",
      message: "Our goal is to ensure every child has access to quality education. I congratulate the teachers and parents for their continuous support in molding the students into responsible citizens."
    },
    {
      role: "Corporation Commissioner",
      tamilRole: "மாநகராட்சி ஆணையாளர்",
      name: "Commissioner Name Here",
      image: null, // Put Commissioner's photo here
      color: "from-green-400 to-emerald-600",
      message: "We are focused on strengthening the infrastructure and academic standards of our schools. This school stands as a testament to what disciplined administration and passionate teaching can achieve."
    },
    {
      role: "City Education Officer (C.E.O)",
      tamilRole: "கல்வி அதிகாரி",
      name: "Education Officer Name",
      image: null, // Put EO photo here
      color: "from-purple-400 to-pink-500",
      message: "Education goes beyond textbooks. It is about character building and skill development. I urge the students to make full use of the opportunities provided by the government."
    },
    {
      role: "PTA President",
      tamilRole: "பெற்றோர் ஆசிரியர் கழகத் தலைவர்",
      name: "Thiru. M. Pandian",
      image: Wellwisherimage, // Using the image you provided
      color: "from-red-400 to-rose-500",
      message: "As the PTA President, I am proud of the bridge we have built between parents and teachers. Together, we ensure a safe and nurturing environment for our children to thrive."
    },
    {
      role: "Headmaster (I/C)",
      tamilRole: "தலைமை ஆசிரியர் (பொறுப்பு)",
      name: "HM Name Here",
      image: null, // Put HM photo here
      color: "from-cyan-400 to-blue-600",
      message: "I welcome you all to our school. With the support of the Corporation and the PTA, we strive for excellence in both academics and extracurricular activities."
    }
  ];

  return (
    <div className="max-w-6xl mt-20 mx-auto p-4 md:p-8">
      
      {/* Title Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          School Administration & Leadership
        </h2>
        {/* <p className="text-gray-500 mt-2">Hierarchy & Preface Messages</p> */}
      </div>

      {/* --- PART 1: HIERARCHY FLOW --- */}
      <div className="max-w-4xl mx-auto mb-24">
        <div className="relative flex flex-col items-center">
          {hierarchy.map((item, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              {/* Hierarchy Node */}
              <div className="relative bg-white border border-gray-100 shadow-lg rounded-xl p-4 w-full md:w-3/4 hover:shadow-xl transition-all duration-300 z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200 overflow-hidden shrink-0">
                    {item.image ? (
                       <img src={item.image} alt={item.label} className="w-full h-full object-cover p-1" />
                    ) : (
                       item.icon
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-gray-400 uppercase">{item.label}</p>
                    <p className="text-gray-800 font-bold text-lg">{item.value}</p>
                    <button onClick={() => toggleExpand(index)} className="flex items-center gap-1 text-xs text-purple-600 font-semibold mt-1">
                      {expandedIndex === index ? 'Hide Details' : 'View Functions'}
                      {expandedIndex === index ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>
                    {expandedIndex === index && (
                      <ul className="mt-2 text-sm text-gray-600 list-disc list-inside bg-gray-50 p-2 rounded">
                        {item.points.map((pt, i) => <li key={i}>{pt}</li>)}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
              {/* Connector Arrow */}
              {index < hierarchy.length - 1 && (
                <div className="flex flex-col items-center">
                  <div className="h-4 w-0.5 bg-gray-300"></div>
                  <ArrowDown className="w-4 h-4 text-gray-400" />
                  <div className="h-4 w-0.5 bg-gray-300"></div>
                </div>
              )}
            </div>
          ))}
          
          {/* Final Connector */}
          <div className="h-6 w-0.5 bg-gray-300"></div>
          <ArrowDown className="w-5 h-5 text-gray-400 mb-2" />

          {/* School Node */}
          <div className="bg-gradient-to-r from-purple-700 to-pink-700 text-white rounded-xl p-6 text-center shadow-xl w-full md:w-3/4">
            <School className="w-8 h-8 mx-auto mb-2" />
            <h3 className="text-xl font-bold">Corporation Higher Secondary School</h3>
            <p className="text-purple-100 text-sm">Sundararajapuram, Madurai - 625011</p>
          </div>
        </div>
      </div>

      {/* --- PART 2: DIGNITARIES & PREFACE MESSAGES --- */}
      <div className="border-t border-gray-200 pt-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800">Leadership Desk</h3>
          <p className="text-gray-500 mt-2">Messages from our esteemed leaders</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {dignitaries.map((person, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 hover:-translate-y-1 transition-transform duration-300`}
              style={{ borderColor: person.color }} // This doesn't work with Tailwind classes dynamically usually, doing inline style for fallback or use class mapping.
            >
              {/* Card Header Gradient */}
              <div className={`h-24 bg-gradient-to-r ${person.color} opacity-90 relative`}>
                <div className="absolute -bottom-10 left-6">
                  <div className="w-24 h-24 rounded-xl border-4 border-white bg-white shadow-md overflow-hidden">
                    {person.image ? (
                      <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                        <UserCircle className="w-16 h-16" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="pt-12 px-6 pb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{person.name}</h4>
                    <p className={`font-semibold bg-gradient-to-r ${person.color} bg-clip-text text-transparent`}>
                      {person.role}
                    </p>
                    <p className="text-xs text-gray-500 font-medium mt-1">{person.tamilRole}</p>
                  </div>
                  <Quote className="w-8 h-8 text-gray-200 rotate-180" />
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg relative">
                  <p className="text-gray-600 italic text-sm leading-relaxed">
                    "{person.message}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}