import React from 'react';
import { Check, User } from "lucide-react";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      ref={elementRef}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/30 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-emerald-700 font-medium tracking-widest text-sm uppercase block mb-3">Est. 1950</span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 font-serif">
            A Legacy of Quality
          </h2>
          <p className="text-xl text-stone-600 font-light max-w-2xl mx-auto">
            Leading the spice export industry for over 75 years from Guntur, the spice capital of India.
          </p>
        </div>

        {/* Content Block 1: Story & Strengths */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className={`space-y-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-stone-800 mb-2 font-serif">Deep Roots in Guntur</h3>
            <p className="text-lg text-stone-600 leading-relaxed font-light">
              Based in <span className="text-emerald-700 font-medium">Guntur, Andhra Pradesh</span>, we are India's premier supplier. With direct access to the market and established relationships with growers, we ensure consistent quality for bulk orders ranging from <span className="text-stone-900 font-medium">5 to 200+ tons monthly</span>.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed font-light">
              Our commitment to quality, timely delivery, and customer satisfaction has made us a preferred partner for global food manufacturers and distributors.
            </p>
          </div>

          <div className={`bg-white/60 border border-emerald-100/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-xl font-semibold text-stone-800 mb-8 border-b border-stone-100 pb-4">
              Why Global Brands Trust Us
            </h3>
            <ul className="space-y-5">
              {[
                "Supply capacity: 5-50 tons per month",
                "Export to 25+ states in India",
                "Custom packaging solutions",
                "Quality testing for each batch",
                "Pan-India delivery network",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                    <Check className="w-4 h-4 text-emerald-700" />
                  </div>
                  <span className="text-stone-600 font-light group-hover:text-emerald-800 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Founders Section */}
        <div className="relative">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 font-serif">
              Meet The Visionaries
            </h3>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
            <p className="text-stone-500 mt-6 max-w-2xl mx-auto">
              Four generations of spice trade expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FounderCard
              image="/founder1.png"
              name="Maddi Sampath Kumar"
              role="Co-Founder & CEO"
              exp="25+ Years Experience"
              detail="Expert in Export Operations"
            />
            <FounderCard
              image="/founder2.jpeg"
              name="Founder Name"
              role="Co-Founder & Director"
              exp="Proprietor"
              detail="Maddi Tataiah & Sons"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FounderCard = ({ image, name, role, exp, detail }) => (
  <div className="group relative bg-white/80 rounded-2xl p-1 overflow-hidden transition-all hover:-translate-y-2 duration-300 shadow-sm hover:shadow-xl border border-stone-100">
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative bg-white/50 rounded-xl p-8 h-full group-hover:bg-transparent transition-colors">
      <div className="w-32 h-32 mx-auto mb-6 rounded-full p-1 bg-gradient-to-br from-stone-100 to-stone-200 group-hover:from-emerald-400 group-hover:to-teal-400 transition-colors">
        <img
          src={image}
          alt={name}
          className="w-full h-full rounded-full object-cover border-4 border-[#FDFBF7]"
          onError={(e) => {
            e.target.src = "https://ui-avatars.com/api/?name=Founder+Name&size=128&background=059669&color=fff";
          }}
        />
      </div>

      <h4 className="text-xl font-bold text-stone-900 text-center mb-1 font-serif">{name}</h4>
      <p className="text-emerald-700 text-center text-sm font-medium mb-6 uppercase tracking-wider">{role}</p>

      <div className="space-y-3 pt-6 border-t border-stone-100">
        <div className="flex items-center justify-center gap-2 text-stone-500 text-sm">
          <User size={14} className="text-emerald-600" />
          <span>{exp}</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-stone-500 text-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
          <span>{detail}</span>
        </div>
      </div>
    </div>
  </div>
);

export default AboutSection;
