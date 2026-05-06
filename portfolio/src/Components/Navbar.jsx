import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    {
      name: 'Home',
      path: '/',
      icon: '<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 01-1-1v-4a1 1 0 011-1h2M4 20h4a2 2 0 002-2v-1a6 6 0 00-12 0v1a2 2 0 002 2h4z" /></svg>'
    },
    {
      name: 'About',
      path: '/about',
      icon: '<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>'
    },
    {
      name: 'Skills',
      path: '/skills',
      icon: '<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>'
    },
    {
      name: 'Projects',
      path: '/projects',
      icon: '<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7m0 0v-7m0 7l4-4m4 4v-7m0 0l-4 4m-4 4H4a2 2 0 01-2-2v-7a2 2 0 012-2h7l4-4z" /></svg>'
    },
    {
      name: 'Experience',
      path: '/experience',
      icon: '<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>'
    },
    {
      name: 'Testimonials',
      path: '/testimonials',
      icon: '<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 01-.69.928l-2.52 2.538a1 1 0 01-1.039-.052l-4.765-4.828a1 1 0 01-.051-1.039l2.538-2.52a1 1 0 01.928-.69l4.674 1.519a1 1 0 010 1.902l-4.674 1.519a1 1 0 01-.928-.69l-2.538-2.52a1 1 0 01-.051-1.039l4.765-4.828a1 1 0 011.039-.052l2.538 2.52a1 1 0 01.69.928l-1.519 4.674z" /></svg>'
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: '<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>'
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isHovered
          ? 'nav-glass shadow-glow transform translate-y-0'
          : 'transform -translate-y-full'
          }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="group flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-glow overflow-hidden">
                <img
                  src="/logo.jpg"
                  alt="Privotech Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className={`font-display text-2xl font-bold transition-colors duration-300 ${isScrolled || isHovered ? 'text-gradient' : 'text-white/95'
                }`}>
                Privotech
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`group relative px-4 py-2 rounded-xl transition-all duration-300 ${location.pathname === item.path
                    ? 'bg-primary-500 text-white shadow-glow transform scale-105'
                    : isScrolled || isHovered
                      ? 'text-primary-700 hover:bg-primary-100 hover:text-primary-800'
                      : 'text-white/95 hover:text-white hover:bg-white/20'
                    }`}
                >
                  <span className="flex items-center space-x-2">
                    <span dangerouslySetInnerHTML={{ __html: item.icon }}></span>
                    <span className="font-medium">{item.name}</span>
                  </span>
                  {location.pathname === item.path && (
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-400 to-secondary-400 opacity-20 animate-pulse"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="btn-primary text-sm px-6 py-3"
              >
                Let's Connect
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-3 rounded-xl transition-all duration-300 ${isScrolled || isHovered
                  ? 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                  : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <span
                    className={`block h-0.5 w-6 transition-all duration-300 ${isMobileMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''
                      } ${isScrolled || isHovered ? 'bg-primary-700' : 'bg-white'
                      }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-6 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                      } ${isScrolled || isHovered ? 'bg-primary-700' : 'bg-white'
                      }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-6 transition-all duration-300 ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''
                      } ${isScrolled || isHovered ? 'bg-primary-700' : 'bg-white'
                      }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isMobileMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-dark-900/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="p-6">
            {/* Mobile Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-glow overflow-hidden">
                  <img
                    src="/logo.jpg"
                    alt="Privotech Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-display text-2xl font-bold text-white/95">
                  Privotech
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-primary-100 text-primary-700 hover:bg-primary-200 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Items */}
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${location.pathname === item.path
                    ? 'bg-primary-500 text-white shadow-glow transform scale-105'
                    : 'text-primary-700 hover:bg-primary-100'
                    }`}
                >
                  <span dangerouslySetInnerHTML={{ __html: item.icon }}></span>
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-8">
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary w-full text-center"
              >
                Let's Connect
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
