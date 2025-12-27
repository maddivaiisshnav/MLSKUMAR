import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-50 text-stone-600 border-t border-stone-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center overflow-hidden shadow-sm">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 font-serif">MLS KUMAR & CO.</h3>
            </div>
            <p className="text-sm leading-relaxed text-stone-500">
              Premium quality red dry chilli suppliers. Supplying excellence since 1950.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-stone-400 hover:text-emerald-600 transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-stone-900 font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {['Home', 'About Us', 'Varieties', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().split(' ')[0]}`} className="hover:text-emerald-600 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-stone-900 font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>+91 98480 99423</li>
              <li>mlskumargnt123@gmail.com</li>
              <li>Guntur, Andhra Pradesh, India.</li>
            </ul>
          </div>

          {/* Newsletter (Visual Only) */}
          <div>
            <h4 className="text-stone-900 font-semibold mb-6">Stay Updated</h4>
            <p className="text-xs text-stone-500 mb-4">Subscribe for latest market prices and updates.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email Address" className="bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm w-full outline-none focus:border-emerald-500 shadow-sm" />
              <button className="bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg px-4 py-2 transition-colors shadow-md shadow-emerald-200">
                <ArrowUp className="rotate-90" size={18} />
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-stone-500">© {new Date().getFullYear()} MLS Kumar & CO. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-emerald-600 hover:text-emerald-700 font-medium tracking-widest uppercase transition-colors"
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;