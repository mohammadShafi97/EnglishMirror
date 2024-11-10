import { motion } from "framer-motion";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { handleChatClick } from "../utils/whatsApp";

const list = ["Malayalam", "Tamil"];

export default function LanguageSelector({ setShowPopup }) {
  const [language, setLanguage] = useState("Malayalam");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowPopup(false)}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="xl:w-1/3 md:w-1/2 sm:w-3/4 w-11/12 mx-auto flex flex-col p-7 rounded-md gap-5 items-center bg-white border border-[#A5A5A5] py-5"
      >
        <p
          className="flex justify-end w-full  cursor-pointer"
          onClick={() => setShowPopup(false)}
        >
          <IoMdClose />
        </p>
        <h4>Select your Native Language</h4>
        <select
          className={`w-full py-1 px-3 rounded-lg bg-gray-300 border border-gray-300 text-gray-900 `}
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          {list?.map((item) => (
            <option
              className="border-b py-1 border-gray-300"
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, backgroundColor: "#10b981" }} // Change color on hover
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }} // Smooth animation
          className="px-4 py-2 rounded-lg bg-black text-white w-full"
          onClick={() => handleChatClick(language)}
        >
          Message
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
