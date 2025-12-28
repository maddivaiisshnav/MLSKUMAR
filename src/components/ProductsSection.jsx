import React from 'react';
import { Star, Flame, Droplet } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProductsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.1);

  const products = [
    {
      name: "S17 Teja",
      heat: "High Heat",
      color: "Deep Red",
      url: "/s17Teja.jpeg",
      desc: "The most pungent variety, perfect for oleoresin extraction and spicy cuisine."
    },
    {
      name: "Armour Quality",
      heat: "Light Heat",
      color: "Red",
      url: "/Armour.jpeg",
      desc: "Known for its rich red color and intense heat profile."
    },
    {
      name: "DD Variety",
      heat: "Mild Heat",
      color: "Dark Red",
      url: "/DD.jpeg",
      specification: "Best for Powder",
      desc: "Ideal for blending and powder manufacturing due to its consistent color."
    },
    {
      name: "341 Variety",
      heat: "Medium",
      color: "Bright Red",
      url: "/341 Variety.jpeg",
      specification: "Best Color",
      desc: "Balanced heat and excellent color retention for various culinary uses."
    },
  ];

  return (
    <section id="products" className="py-24 relative" ref={elementRef}>
      <div className="absolute inset-0 bg-orange-50/10 -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 font-serif">
            Premium Varieties
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-stone-600 font-light">
            Hand-picked, grade-A Guntur dry chillies for the global market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((variety, index) => (
            <ProductCard
              key={index}
              variety={variety}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ variety, index, isVisible }) => (
  <div
    className={`group relative bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-emerald-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    {/* Image Container */}
    <div className="relative h-64 overflow-hidden">
      <img
        src={variety.url}
        alt={variety.name}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
      />

      {/* Specification Badge */}
      {variety.specification && (
        <div className="absolute top-4 right-4 z-20 bg-[#FDFBF7]/95 backdrop-blur-md text-emerald-800 px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 border border-emerald-100">
          <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
          <span className="text-xs font-bold tracking-wide uppercase">
            {variety.specification}
          </span>
        </div>
      )}
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col grow relative z-20">
      <h3 className="text-2xl font-bold text-stone-900 mb-3 font-serif group-hover:text-emerald-700 transition-colors">
        {variety.name}
      </h3>

      <p className="text-stone-600 text-sm mb-6 leading-relaxed grow">
        {variety.desc}
      </p>

      <div className="space-y-4 pt-6 border-t border-stone-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-stone-500 text-sm font-medium">
            <Flame size={16} className="text-orange-500" />
            Heat Level
          </div>
          <span className="text-sm font-semibold text-stone-700 bg-[#FDFBF7] px-2 py-1 rounded border border-stone-100">
            {variety.heat}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-stone-500 text-sm font-medium">
            <Droplet size={16} className="text-red-600" />
            Color
          </div>
          <span className="text-sm font-semibold text-stone-700 bg-[#FDFBF7] px-2 py-1 rounded border border-stone-100">
            {variety.color}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default ProductsSection;