import React from 'react';
import { Package, TrendingUp, Globe, ChevronRight } from "lucide-react";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const HeroSection = ({ scrollToSection }) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Ambience - Warm & Subtle */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-[100px] mix-blend-multiply animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50/60 rounded-full blur-[80px] mix-blend-multiply"></div>
      </div>

      <div
        ref={elementRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      >
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 border border-stone-200 mb-8 shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm text-stone-600 uppercase tracking-widest font-medium">Premium Spice Exports</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-stone-900 mb-6 leading-tight tracking-tight font-serif">
            The Essence of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-red-600 to-amber-700">
              Guntur Chilli
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-stone-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Supplying premium quality red dry chilli to leading food manufacturers and large-scale buyers across India.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-4 bg-emerald-800 rounded-full overflow-hidden shadow-xl shadow-emerald-200/50 transition-all hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-700 to-emerald-900"></div>
              <span className="relative flex items-center gap-2 text-white font-bold tracking-wider">
                CONTACT US <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="px-8 py-4 rounded-full border border-stone-300 text-stone-700 font-medium hover:bg-white/60 hover:shadow-lg transition-all uppercase tracking-wider bg-white/30 backdrop-blur-sm"
            >
              View Varieties
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <StatCard
              icon={<Package />}
              label="Minimum Order"
              value="5,000 KG"
              color="emerald"
            />
            <StatCard
              icon={<TrendingUp />}
              label="Supply Capacity"
              value="250+ Tons"
              color="orange"
            />
            <StatCard
              icon={<Globe />}
              label="Delivery Network"
              value="Pan-India"
              color="cyan"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ icon, label, value, color }) => (
  <div className="bg-white/60 backdrop-blur-md border border-stone-100 p-6 rounded-2xl hover:border-emerald-200 hover:shadow-xl transition-all group shadow-sm">
    <div className={`w-12 h-12 rounded-xl bg-[#FDFBF7] flex items-center justify-center mx-auto mb-4 group-hover:bg-${color}-50 transition-colors`}>
      <div className={`text-${color}-700`}>
        {React.cloneElement(icon, { size: 24 })}
      </div>
    </div>
    <p className="text-stone-500 text-xs uppercase tracking-widest mb-1 font-semibold">{label}</p>
    <p className="text-2xl font-bold text-stone-800 font-serif">{value}</p>
  </div>
);

export default HeroSection;