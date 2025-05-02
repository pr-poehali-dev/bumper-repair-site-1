import React from 'react';
import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ReviewSection from '@/components/ReviewSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <ServicesSection />
        <AboutSection />
        <ReviewSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;