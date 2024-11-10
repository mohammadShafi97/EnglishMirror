import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";

export default function LandingSection() {
  const images = ['url("/bg-1.jpg")', 'url("/bg-2.jpg")', 'url("/bg-3.jpg")'];
  const [activeIndex, setActiveIndex] = useState(0);

  // Change background image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="lg:px-[120px] fade-background relative py-10 px-5 min-height bg-no-repeat bg-cover flex flex-col justify-center items-center"
      style={{ backgroundImage: images[activeIndex] }}
    >
      <div className="absolute inset-0 bg-black opacity-50 "></div>
      <div className="relative flex flex-col gap-7 items-center">
        <h1 className="text-5xl font-bold text-white flex flex-col gap-2 items-center">
          <span>Welcome! To </span>
          <span>Online English Learning Platform</span>
        </h1>
        <p className="text-white font-medium">
          Mirror Your Success With Fluent English
        </p>
        <button className="bg-green-600 px-4 py-2 rounded-lg text-white flex gap-2 items-center text-xl">
          Whatsapp Now
          <span>
            <FaWhatsapp />
          </span>
        </button>
      </div>
    </div>
  );
}
