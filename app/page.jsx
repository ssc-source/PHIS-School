import { Navbar } from '@/components/layout/Navbar';
import { HeroCarousel } from '@/components/homepage/HeroCarousel';
import { AboutSection } from '@/components/homepage/AboutSection';
import { WhyChoosePHIS } from '@/components/homepage/WhyChoosePHIS';
import { AcademicPrograms } from '@/components/homepage/AcademicPrograms';
import { FacilitiesSection } from '@/components/homepage/FacilitiesSection';
import { VideoGallery } from '@/components/homepage/VideoGallery';
import { Testimonials } from '@/components/homepage/Testimonials';
import { NewsInsights } from '@/components/homepage/NewsInsights';
import { EnquiryForm } from '@/components/admission/EnquiryForm';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 selection:bg-blue-600 selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Hero Carousel (7 PHIS Slides from /PHIS/gallery/) */}
      <HeroCarousel />

      {/* 3. About Section (CBSE 330963, Est 2017, English Medium, Nur-X) */}
      <AboutSection />

      {/* 4. Why Choose PHIS Section (6 Institutional Features) */}
      <WhyChoosePHIS />

      {/* 5. Academic Programs (Pre-Primary, Primary, Middle, Secondary) */}
      <AcademicPrograms />

      {/* 6. Facilities Section (Smart Classrooms, Labs, Library, Sports, Transport) */}
      <FacilitiesSection />

      {/* 7. Campus Life in Motion (Instagram Videos / Video Gallery) */}
      <VideoGallery />

      {/* 8. Parent Testimonials & Verified Reviews */}
      <Testimonials />

      {/* 9. Campus News & Announcements */}
      <NewsInsights />

      {/* 10. Admission Enquiry Form */}
      <section className="section-padding bg-gradient-to-b from-blue-50/50 via-blue-100/30 to-slate-50 relative overflow-hidden">
        <div className="container-custom max-w-4xl mx-auto">
          <EnquiryForm />
        </div>
      </section>

      {/* 11. Global Footer */}
      <Footer />
    </main>
  );
}
