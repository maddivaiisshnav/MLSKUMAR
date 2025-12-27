import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ scrolled, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (section) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Stats", id: "stats" },
    { name: "About", id: "about" },
    { name: "Varieties", id: "products" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#FDFBF7]/90 backdrop-blur-md shadow-sm border-b border-stone-200"
          : "bg-transparent backdrop-blur-[1px]"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo Section */}
          <div
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => handleMenuClick("home")}
          >
            <div className="relative h-14 w-14 rounded-full overflow-hidden bg-[#FDFBF7] border border-orange-100 flex items-center justify-center p-1 group-hover:border-emerald-500 transition-colors duration-300 shadow-sm">
              <img
                src="/logo.png"
                alt="Spice Kingdom Logo"
                className="h-full w-full object-cover rounded-full"
              />
            </div>

            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-bold text-stone-800 tracking-wide font-serif group-hover:text-emerald-700 transition-colors">
                MLS KUMAR & CO.
              </h1>
              <span className="text-[10px] md:text-xs text-emerald-700/80 uppercase tracking-widest font-semibold">
                Premium Spice Experts
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleMenuClick(link.id)}
                className="text-sm font-medium text-stone-600 hover:text-emerald-700 uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-stone-800 hover:text-emerald-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-20 -z-10 bg-[#FDFBF7]/95 backdrop-blur-xl transition-all duration-300 border-t border-stone-100 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}
      >
        <div className="flex flex-col items-center justify-start pt-12 h-full gap-8 p-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleMenuClick(link.id)}
              className="text-xl font-serif text-stone-800 hover:text-emerald-600 transition-colors border-b border-transparent hover:border-emerald-100 pb-2 w-full text-center"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
