import React, { useState, useEffect, useRef } from "react";
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Package, TrendingUp, MapPin } from "lucide-react";

const StatsSection = () => {
  const [counts, setCounts] = useState({ export: 0, import: 0, clients: 0 });
  const hasAnimated = useRef(false);
  const { elementRef, isVisible } = useScrollAnimation(0.5);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;

      const animate = (key, target) => {
        let current = 0;
        const increment = target / 40;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 30);
      };

      animate('export', 200);
      animate('import', 300);
      animate('clients', 50);
    }
  }, [isVisible]);

  return (
    <section
      id="stats"
      className="py-24 relative border-b border-stone-200/50"
      ref={elementRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <StatBox
            icon={<Package strokeWidth={1.5} />}
            value={counts.export}
            label="Tons Exported Monthly"
            delay={0}
            isVisible={isVisible}
          />
          <StatBox
            icon={<MapPin strokeWidth={1.5} />}
            value={25}
            label="States Covered"
            delay={100}
            isVisible={isVisible}
            suffix="+"
          />
          <StatBox
            icon={<TrendingUp strokeWidth={1.5} />}
            value={counts.clients}
            label="Long-term Partners"
            delay={200}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  );
};

const StatBox = ({ icon, value, label, delay, isVisible, suffix = "" }) => (
  <div
    className={`text-center p-8 rounded-2xl bg-white/80 border border-stone-200 transition-all duration-700 transform hover:shadow-xl hover:-translate-y-1 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="text-5xl mb-6 text-emerald-700 flex justify-center">
      {React.cloneElement(icon, { size: 48 })}
    </div>
    <div className="flex items-center justify-center gap-1 mb-2">
      <span className="text-5xl font-bold text-stone-900 font-serif tracking-tight">{value}</span>
      <span className="text-3xl text-emerald-700 font-bold">{suffix || "+"}</span>
    </div>
    <p className="text-sm text-stone-500 uppercase tracking-widest font-medium">{label}</p>
  </div>
);

export default StatsSection;