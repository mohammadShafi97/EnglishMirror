import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import HeaderLinks from "./HeaderLinks";
import { RxHamburgerMenu } from "react-icons/rx";
import SmallHeader from "./SmallHeader";

export default function Header({ setShowPopup }) {
  const [showSmallHeader, setShowSmallHeader] = useState(false);
  return (
    <header className="h-20 lg:px-[120px] py-5 px-5 flex justify-between items-center shadow-md ">
      <img src="/logo.jpg" className="w-[150px] rounded-md"></img>
      <nav className="lg:flex gap-5 text-lg font-medium hidden">
        <HeaderLinks href={"#home"} content={"Home"} />
        <HeaderLinks href={"#why"} content={"Why Us"} />
        <HeaderLinks href={"#about"} content={"About Us"} />
        <HeaderLinks href={"#contact"} content={"Contact Us"} />
      </nav>
      <motion.button
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1, backgroundColor: "#10b981" }} // Change color on hover
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }} // Smooth animation
        onClick={() => setShowPopup(true)}
        className="lg:flex items-center gap-2 bg-green-600 px-3 py-2 rounded-lg text-white hidden"
      >
        WhatsApp Now
        <span>
          <FaWhatsapp />
        </span>
      </motion.button>
      <p className="text-lg lg:hidden" onClick={() => setShowSmallHeader(true)}>
        <RxHamburgerMenu />
      </p>
      {showSmallHeader && (
        <div className="absolute w-full top-20 left-0 z-20 animate-slideInTop">
          <SmallHeader setShowSmallHeader={setShowSmallHeader} />
        </div>
      )}
    </header>
  );
}
