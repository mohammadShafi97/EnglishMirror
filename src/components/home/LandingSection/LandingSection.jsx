import React, { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { motion, useAnimation, useInView } from "framer-motion";
import LanguageSelector from "../../LanguageSelector";

export default function LandingSection() {
  const images = ['url("/bg-1.jpg")', 'url("/bg-2.jpg")', 'url("/bg-3.jpg")'];
  const [activeIndex, setActiveIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const h1Controls = useAnimation();
  const spanControls = useAnimation();
  // Change background image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateSequence = async () => {
      if (isInView) {
        // First, run the pop-up animation on the h1 when it comes into view
        await h1Controls.start({
          scale: 1,
          transition: { duration: 1.2, ease: "easeInOut" },
        });
        // After h1 animation completes, start the rotation and translation on the span
        await spanControls.start({
          rotateX: 720,
          transition: { duration: 1, ease: "easeInOut" },
        });
        // Start the continuous right translation after rotation completes
        spanControls.start({
          x: ["0%", "5%", "0%"],
          transition: { repeat: Infinity, duration: 2, ease: "linear" },
        });
      }
    };
    animateSequence();
  }, [isInView, h1Controls, spanControls]);
  return (
    <div
      id="home"
      className="lg:px-[120px] fade-background relative py-10 px-5 h-screen bg-no-repeat bg-cover flex flex-col justify-center items-center"
      style={{ backgroundImage: images[activeIndex] }}
    >
      <div className="absolute inset-0 bg-black opacity-50 "></div>
      <div className="relative flex flex-col gap-7 items-center">
        <motion.h1
          ref={ref}
          initial={{ scale: 0 }}
          animate={h1Controls}
          className="md:text-5xl text-3xl font-bold text-white flex flex-col gap-2 items-center text-center"
        >
          <motion.span initial={{ rotateX: 0 }} animate={spanControls}>
            Welcome!
          </motion.span>
          <span>Online English Learning Platform</span>
        </motion.h1>
        <p className="text-white font-medium text-center">
          Mirror Your Success With Fluent English
        </p>
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, backgroundColor: "#10b981" }} // Change color on hover
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }} // Smooth animation
          onClick={() => setShowPopup(true)}
          className="bg-green-600 px-4 py-2 rounded-lg text-white flex gap-2 items-center text-xl"
        >
          Whatsapp Now
          <span>
            <FaWhatsapp />
          </span>
        </motion.button>
      </div>
      {showPopup && <LanguageSelector setShowPopup={setShowPopup} />}
    </div>
  );
}
