import React, { useState, useEffect } from 'react';

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsScrolled(currentScrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-300 py-4 ${
        isScrolled
          ? 'backdrop-filter backdrop-blur-sm bg-opacity-50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <span></span>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span>☰</span>
          </button>

          <div
            className={`${
              mobileMenuOpen ? 'flex' : 'hidden'
            } md:flex space-x-4`}
          >
            <a href="#home" className="relative inline-block px-3 py-2 text-sm font-medium">
              HOME
              <div className="relative">
                <div className="line absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-200"></div>
              </div>
            </a>

            <a href="#arts" className="relative inline-block px-3 py-2 text-sm font-medium">
              ARTS
              <div className="relative">
                <div className="line absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-200"></div>
              </div>
            </a>

            <a href="#INSTALL" className="relative inline-block px-3 py-2 text-sm font-medium">
             INSTALL
              <div className="relative">
                <div className="line absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-200"></div>
              </div>
            </a>

            <a href="#contact" className="relative inline-block px-3 py-2 text-sm font-medium">
              CONTACT
              <div className="relative">
                <div className="line absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-200"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
