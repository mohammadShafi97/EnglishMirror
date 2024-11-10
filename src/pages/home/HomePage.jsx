import React from "react";
import LandingSection from "../../components/home/LandingSection/LandingSection";
import WhySection from "../../components/home/whySection/WhySection";
import AboutUsSection from "../../components/home/about/AboutUsSection";
import ContactUsSection from "../../components/home/contact/ContactUsSection";

export default function HomePage() {
  return (
    <div>
      <LandingSection />
      <WhySection />
      <AboutUsSection />
    </div>
  );
}
