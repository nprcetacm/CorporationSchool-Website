import { useState } from 'react';
import { ChevronDown, Menu, X, LogIn } from 'lucide-react';
import logo from "../schoolassets/newSchoollogo.png"
import { Link } from 'react-router-dom';
import TamilThaiPlayer from './TamilThaiPlayer';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'About Us',
      dropdown: [
        { name: 'History Vision Mission', path:'/history' },
        { name: 'School Well-Wisher', path:'/wellwisher' },
        { name: 'Principal Message', path:'/principal' },
        { name: 'Faculty and Staff', path:'/faculty' }
      ]
    },
    {
      name: 'Academics',
      dropdown: [
        { name: 'Curriculum',path: '/curriculum' },
        { name: 'Class Structure', path:'/classstruct' },
        { name: 'Special Programs', path:'/specialprog' }
      ]
    },
    {
      name: 'Admission',
      dropdown: [
        { name: 'Admission Process', path: '/admission-process' },
        { name: 'Fee Structure', path: '/fee-structure' },
        { name: 'Admission Criteria', path: '/admission-criteria' }
      ]
    },
    {
      name: 'Facilities',
      dropdown: [
        { name: 'Library', path: '/lib' },
        { name: 'Laboratory', path: '/lab' },
        { name: 'Pure Water', path: '/water' },
      ]
    },
    {
      name: 'News/Events',
      dropdown: [
        { name: 'Noticeboard', path: '/noticeboard' },
        { name: 'Calendar', path: '/calendar' },
        { name: 'Photo Gallery', path: '/photos' },
      ]
    },
    { name: 'Achievements', path:'/achievements'},
    {
      name: 'Alumni',
      dropdown: [
        { name: 'Success Stories', path: '/admission-process' },
      ]
    },
    { name:'Contact Us',path:'/contact' }
  ];

  const handleMouseEnter = (itemName) => {
    setOpenDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const toggleMobileDropdown = (itemName) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  return (
    <>
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Fixed width to prevent compression */}
          <div className="flex-shrink-0">
            <img className="h-16 w-auto" src={logo} alt="School Logo" />
          </div>

          {/* Desktop Menu - Centered navigation items */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.dropdown ? (
                    <>
                      <button className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium flex items-center gap-1 transition-colors whitespace-nowrap">
                        {item.name}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {openDropdown === item.name && (
                        <div 
                          className="absolute left-0 mt-0 w-64 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-100"
                          onMouseEnter={() => handleMouseEnter(item.name)}
                          onMouseLeave={handleMouseLeave}
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side - TamilThaiPlayer and Login */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <TamilThaiPlayer/>
            
            <Link
              to="/login"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:shadow-lg transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              <LogIn className="w-4 h-4" />
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-gray-700 hover:text-indigo-600 p-2"
          >
            {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(item.name)}
                      className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-colors"
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Login Button */}
            <Link
              to="/login"
              className="flex items-center justify-center gap-2 mx-3 my-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              <LogIn className="w-5 h-5" />
              Login
            </Link>
          </div>
          <div className="px-4 py-3">
            <TamilThaiPlayer/>
          </div>
        </div>
      )}
    </nav>
    </>
  );
}
