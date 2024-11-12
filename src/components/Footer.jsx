import React from "react";
import FooterLinks from "./FooterLinks";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";

export default function Footer() {
  return (
    <div className="lg:px-[120px] py-10 px-5 bg-gradient-to-br from-white to-gray-600 flex flex-col gap-5">
      <div className="flex md:flex-row flex-col justify-between gap-7 md:items-center">
        <div className="flex flex-col gap-7">
          <img className="w-[170px] rounded-lg" src="/logo.jpg"></img>
          <div className="text-xl flex gap-5">
            <FooterLinks
              icon={<FaInstagram />}
              href={
                "https://www.instagram.com/englishmirror_kerala?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              }
              text={"text-[#e1306c]"}
            />
            <FooterLinks
              icon={<FaFacebookSquare />}
              href={"https://www.facebook.com/profile.php?id=61568276982938"}
              text={"text-[#3C5A99]"}
            />
            <FooterLinks
              icon={<FaLinkedin />}
              href={"https://www.linkedin.com/in/englishmirror/"}
              text={"text-[#156BC1]"}
            />
            <FooterLinks
              icon={<FaYoutube />}
              href={"https://www.youtube.com/@no1onlineenglishacademy"}
              text={"text-[#EC1515]"}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-bold">Contact Us</p>
          <p className="flex gap-2 text-lg items-center">
            <span>
              <CiLocationOn />
            </span>
            Location, Malappuram, Kerala
          </p>
          <p className="flex gap-2 text-lg items-center">
            <span>
              <CiMail />
            </span>
            englishmirrorofficial@gmail.com.com
          </p>
          <p className="flex gap-2 text-lg items-center">
            <span>
              <CiPhone />
            </span>
            +91 8111827681
          </p>
        </div>
      </div>
      <div className="w-full h-[2px] bg-black"></div>
      <p className="text-center">© 2024 English Mirror. All Rights Reserved</p>
    </div>
  );
}
