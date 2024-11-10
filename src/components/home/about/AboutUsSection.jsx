import React from "react";
import ContactUsSection from "../contact/ContactUsSection";

export default function AboutUsSection() {
  return (
    <div
      className="lg:px-[120px] px-5 py-10 relative bg-no-repeat bg-cover"
      style={{ backgroundImage: `url("/about-bg.jpg")` }}
    >
      <div className="absolute inset-0 bg-black opacity-60 "></div>
      <div className="relative flex justify-between items-center">
        <div className="text-white my-10 flex flex-col gap-5 font-medium max-w-[650px] text-justify">
          <h4 className="text-4xl font-bold">About Us</h4>
          <p>
            Welcome to Englishmirror – your partner in mastering the English
            language!
          </p>
          <p>
            At Englishmirror, we believe that language is not just a tool for
            communication; it's a bridge that connects people, cultures, and
            opportunities. Our mission is simple: to empower learners of all
            levels to speak English with confidence. Whether you're a beginner
            just starting out or an advanced learner looking to refine your
            skills, we're here to help you unlock your full potential.
          </p>
          <p>
            Englishmirror was founded by Rishy Sukumaran, a passionate language
            educator with a vision to make high-quality English learning
            accessible to everyone. With years of experience in the field of
            education and a deep understanding of language acquisition, Rishy
            built Englishmirror to offer personalized and effective learning
            solutions for people from all walks of life.
          </p>
          <p>
            Join us today and discover how we can help you reflect your best
            self through the power of language. Your journey to fluency starts
            now, and we’re here to guide you every step of the way.
          </p>
        </div>
        <img src="/logo.jpg" className="w-[350px] rounded-lg"></img>
      </div>
      <div className="relative flex">
        <ContactUsSection />
      </div>
    </div>
  );
}
