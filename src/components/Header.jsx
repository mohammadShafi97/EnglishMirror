import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

export default function Header() {
  return (
    <div className="h-20 lg:px-[120px] py-5 px-5 flex justify-between items-center shadow-md">
      <img src="/logo.jpg" className="w-[150px] rounded-md"></img>
      <div className="flex gap-5 text-lg font-medium">
        <p>Home</p>
        <p>About Us</p>
      </div>
      <button className="flex items-center gap-2 bg-green-600 px-3 py-2 rounded-lg text-white">
        WhatsApp Now
        <span>
          <FaWhatsapp />
        </span>
      </button>
    </div>
  );
}
