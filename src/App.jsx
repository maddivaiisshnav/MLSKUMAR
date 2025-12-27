import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/HeroSection.jsx';
import Stats from './components/StatsSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import Products from './components/ProductsSection.jsx';
import Choose from './components/WhyChooseSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

export default function SpiceKingdomWebsite() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-emerald-500/30">
      <Navbar scrolled={scrolled} scrollToSection={scrollToSection} />

      <main className="relative z-10 w-full overflow-hidden">
        <Hero scrollToSection={scrollToSection} />
        <Stats />
        <AboutSection />
        <Products />
        <Choose />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
