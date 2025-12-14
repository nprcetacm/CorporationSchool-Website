import React from 'react';
import { Users, Sparkles } from 'lucide-react';
import Wellwisherimage from '../schoolassets/Wellwisher.jpg'

export default function Wellwisher() {
  return (
    <div className="max-w-5xl mt-20 mx-auto p-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full mb-4">
          <Sparkles className="w-5 h-5" />
          <span className="font-semibold">நலம் விரும்பிகள்</span>
          <Sparkles className="w-5 h-5" />
        </div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          WellWishers
        </h2>
      </div>
      
      <div className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-3xl shadow-2xl p-10 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-purple-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-200 rounded-full filter blur-3xl opacity-30"></div>
        
        <div className="relative flex flex-col items-center">
          {/* Image Container with Creative Border */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-2xl blur-md"></div>
            <div className="relative w-95 h-72 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img className='rounded-lg' src={Wellwisherimage} alt="" />
            </div>
          </div>
          
          {/* Members Info with Creative Cards */}
          <div className="w-full max-w-2xl space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-l-4 border-purple-500 transform hover:translate-x-2 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    திருமதி பாண்டிச் செல்வி
                  </h3>
                  <p className="text-purple-600 font-medium flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-purple-400"></span>
                    மாமன்ற உறுப்பினர் வார்ட் 75
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-l-4 border-pink-500 transform hover:translate-x-2 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    திரு பாண்டியன் M
                  </h3>
                  <p className="text-pink-600 font-medium flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-pink-400"></span>
                    பெற்றோர் ஆசிரியர் கழகத் தலைவர்
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}