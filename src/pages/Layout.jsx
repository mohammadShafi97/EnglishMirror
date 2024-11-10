import React, { useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import LanguageSelector from "../components/LanguageSelector";

export default function Layout() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="mx-0 overflow-hidden">
      <div className="fixed top-0 bg-white z-10 w-full">
        <Header setShowPopup={setShowPopup} />
      </div>
      {showPopup && <LanguageSelector setShowPopup={setShowPopup} />}

      <div>
        <Outlet />
        <motion.img
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }} // Smooth animation
          src="/whatsapp_logo.png"
          className="fixed bottom-5 right-5 w-[60px] z-10 cursor-pointer"
          onClick={() => setShowPopup(true)}
        ></motion.img>
      </div>
      <Footer />
    </div>
  );
}
