import React from 'react';
import { Award, Package, MapPin, CircleDollarSign, Truck, ShieldCheck } from "lucide-react";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WhyChooseSection = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);

  const features = [
    { icon: <MapPin />, title: 'Export to 25+ States', desc: 'Trusted by buyers across India, delivering premium spices to over 25 states.' },
    { icon: <Package />, title: 'Custom Packaging', desc: 'Tailored packaging solutions to meet specific branding and storage requirements.' },
    { icon: <ShieldCheck />, title: 'Quality Testing', desc: 'Rigorous quality checks for every batch ensuring premium standards.' },
    { icon: <Truck />, title: 'Pan-India Delivery', desc: 'Robust logistics network ensuring timely and secure delivery across the nation.' },
    { icon: <Award />, title: 'Premium Quality', desc: 'Direct sourcing from Guntur. FSSAI certified and quality tested for every batch.' },
    { icon: <CircleDollarSign />, title: 'Best Prices', desc: 'Competitive rates for bulk orders due to our direct farm-to-warehouse model.' },
  ];

  return (
    <section className="py-24 relative" ref={elementRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 font-serif">Why Brands Trust Us</h2>
          <div className="h-1 w-24 bg-emerald-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-stone-600 font-medium">Excellence in every shipment.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <FeatureCard
              key={index}
              item={item}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ item, index, isVisible }) => (
  <div
    className={`group bg-white/70 border border-stone-200 rounded-xl p-8 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <div className="w-14 h-14 rounded-lg bg-emerald-50 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-6 shadow-sm">
      <div className="text-emerald-700 group-hover:text-white transition-colors">
        {React.cloneElement(item.icon, { size: 28, strokeWidth: 1.5 })}
      </div>
    </div>
    <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">{item.title}</h3>
    <p className="text-stone-600 text-sm leading-relaxed group-hover:text-stone-700 transition-colors">{item.desc}</p>
  </div>
);

export default WhyChooseSection