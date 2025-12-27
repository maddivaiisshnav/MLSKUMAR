import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ContactSection = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);

  const contactInfo = {
    phone: "+919848099423",
    email: "mlskumargnt123@gmail.com",
    address: "Guntur, Andhra Pradesh, India",
    mapsUrl: "https://maps.app.goo.gl/pjhFaKGgm56cGCBs6"
  };

  return (
    <section id="contact" className="py-24 relative" ref={elementRef}>
      {/* Soft Background Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 font-serif">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-emerald-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-stone-600">Reach out to us directly for requirements.</p>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <ContactCard
            icon={<Phone />}
            title="Call Us"
            value={contactInfo.phone}
            href={`tel:${contactInfo.phone}`}
          />
          <ContactCard
            icon={<Mail />}
            title="Email Us"
            value={contactInfo.email}
            href={`mailto:${contactInfo.email}`}
          />
          <ContactCard
            icon={<MapPin />}
            title="Visit Us"
            value={contactInfo.address}
            href={contactInfo.mapsUrl}
          />
        </div>

        {/* Map Preview */}
        <div className={`w-full h-80 rounded-2xl overflow-hidden border border-stone-200 shadow-lg grayscale hover:grayscale-0 transition-all duration-700 delay-200 relative group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.743136275464!2d80.43654021535497!3d16.299738437025877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a755cb1787785%3A0x9f98218ac644d6da!2sGuntur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1652718915478!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="opacity-90 group-hover:opacity-100 transition-opacity"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

const ContactCard = ({ icon, title, value, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center gap-4 p-8 bg-white/60 border border-stone-100 rounded-2xl hover:bg-white hover:border-emerald-200 hover:shadow-xl transition-all group backdrop-blur-sm text-center"
  >
    <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-sm">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div>
      <h4 className="text-stone-900 font-bold mb-1 text-lg">{title}</h4>
      <p className="text-stone-500 text-sm group-hover:text-emerald-700 transition-colors font-medium">{value}</p>
    </div>
  </a>
)

export default ContactSection;
