import { useState } from 'react';
import { Quote, Award, Heart, Lightbulb, Users, Target } from 'lucide-react';
import principal from '../schoolassets/Principal-Pic.jpg'

export default function PrincipalMsg() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-20 mt-15 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full filter blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-emerald-700 text-white px-6 py-2 rounded-full mb-4">
            <Award className="w-5 h-5" />
            <span className="font-semibold">Leadership Message</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Message from the Principal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Left Side - Principal Image */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              {/* Image Container with Decorative Frame */}
              <div className="relative">
                {/* Decorative Corner Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-emerald-600 rounded-tl-3xl"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-teal-600 rounded-br-3xl"></div>
                
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  {/* Replace with your principal image */}
                  <img 
                    src={principal} 
                    alt="Principal"
                    className="w-full h-auto object-cover"
                  />
                  {/* Gradient Overlay at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-white text-2xl font-bold">Mr. H. Subramaniakumar</h3>
                    <p className="text-emerald-200 text-sm font-medium">Headmaster</p>
                    {/* <p className="text-gray-300 text-xs mt-1">M.A., M.Ed., Ph.D.</p> */}
                  </div>
                </div>

                {/* Quote Icon Decoration */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-emerald-600 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Credentials Card */}
              <div className="mt-8 bg-white rounded-xl shadow-lg p-6 border-l-4 border-emerald-600">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-600" />
                  Professional Highlights
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>Years Demo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>Any Special Demo(Phd) or any</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>Any Appreciation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>Any other</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - Message Content */}
          <div className="lg:col-span-3">
            
            {/* Opening Quote */}
            <div className="bg-gradient-to-r from-emerald-700 to-teal-700 rounded-2xl p-8 mb-8 text-white shadow-xl">
              <Quote className="w-12 h-12 mb-4 opacity-50" />
              <p className="text-xl lg:text-2xl font-semibold italic leading-relaxed">
                "Education is not the filling of a pail, but the lighting of a fire. 
                Our mission is to ignite that flame in every student."
              </p>
            </div>

            {/* Message Content */}
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              
              {/* Greeting */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dear Students, Parents, and Well-wishers,</h3>
                <p className="text-gray-700 leading-relaxed">
                  It gives me immense pleasure to welcome you to our esteemed institution. As we embark on 
                  another year of academic excellence and holistic development, I am filled with pride and 
                  gratitude for the trust you have placed in us.
                </p>
              </div>

              {/* Vision Points */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-xl p-5 border-l-4 border-emerald-600">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <Lightbulb className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Academic Excellence</h4>
                      <p className="text-sm text-gray-600">
                        Fostering critical thinking and a love for learning in every student.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-50 rounded-xl p-5 border-l-4 border-teal-600">
                  <div className="flex items-start gap-3">
                    <div className="bg-teal-100 p-2 rounded-lg">
                      <Heart className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Character Building</h4>
                      <p className="text-sm text-gray-600">
                        Nurturing values, ethics, and compassion in our future leaders.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-600">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Community Spirit</h4>
                      <p className="text-sm text-gray-600">
                        Building a supportive and inclusive learning environment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-xl p-5 border-l-4 border-amber-600">
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-100 p-2 rounded-lg">
                      <Target className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Future Ready</h4>
                      <p className="text-sm text-gray-600">
                        Preparing students for the challenges of tomorrow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Message Body */}
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Our school stands as a testament to the power of education in transforming lives. With a 
                  rich heritage spanning nearly five decades, we have consistently evolved to meet the changing 
                  needs of our students while staying rooted in our core values of integrity, excellence, and 
                  compassion.
                </p>

                <p>
                  We believe that education extends beyond textbooks and examinations. It encompasses the 
                  development of critical thinking, creativity, leadership, and social responsibility. Our 
                  dedicated faculty works tirelessly to create a nurturing environment where every student 
                  can discover their potential and pursue their passions.
                </p>

                {/* Expandable Content */}
                {isExpanded && (
                  <div className="space-y-4 animate-fadeIn">
                    <p>
                      In today's rapidly changing world, we are committed to providing our students with the 
                      skills and knowledge they need to succeed. Our comprehensive curriculum combines academic 
                      rigor with practical application, ensuring that our students are well-prepared for higher 
                      education and their future careers.
                    </p>

                    <p>
                      I am proud of the strong partnership we have built with parents and the community. Your 
                      support and involvement are crucial to our students' success. Together, we create a 
                      nurturing ecosystem where young minds can flourish and reach their fullest potential.
                    </p>

                    <p>
                      As we look to the future, we remain committed to our mission of providing quality education 
                      that empowers students to become lifelong learners, responsible citizens, and leaders who 
                      will make a positive difference in the world.
                    </p>
                  </div>
                )}
              </div>

              {/* Read More Button */}
              <div className="text-center pt-4">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-2 bg-gradient-to-br from-emerald-700 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  {isExpanded ? 'Read Less' : 'Read Full Message'}
                  <span className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
              </div>

              {/* Closing & Signature */}
              <div className="border-t-2 border-gray-200 pt-6 mt-8">
                <p className="text-gray-700 mb-6">
                  I invite you to explore our website to learn more about our programs, achievements, and the 
                  vibrant community that makes our school special. Let us work together to ensure that every 
                  student achieves their dreams and contributes meaningfully to society.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-800 font-semibold">Warm regards,</p>
                  <p className="text-2xl font-bold text-gray-900 italic">Mr. H. Subramaniakumar</p>
                  <p className="text-gray-600">headmaster</p>
                  <p className="text-sm text-gray-500">[School Name]</p>
                </div>
              </div>
            </div>

            {/* Contact Call-to-Action */}
            <div className="mt-8 bg-gradient-to-br from-emerald-700 to-teal-600 rounded-2xl p-6 text-white text-center">
              <p className="text-lg mb-4">
                Have questions or suggestions? We'd love to hear from you!
              </p>
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
                Contact Principal's Office
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}