import React, { useState } from "react";
import FormInput from "./FormInput";
import { motion } from "framer-motion";
import { handleEnquiryFormClick } from "../../../utils/whatsApp";

export default function ContactUsSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div
      id="contact"
      className="text-black w-full rounded-lg bg-cover bg-right bg-no-repeat"
      style={{ backgroundImage: `url("/contact1.jpg")` }}
    >
      <div className="flex flex-col gap-5 w-2/3 p-5 ms-auto">
        <h4 className="text-3xl font-bold text-white my-7">
          Have any Questions? Contact US
        </h4>
        <FormInput
          title={"Full Name"}
          placeholder={"Enter Name"}
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          title={"Phone"}
          placeholder={"Enter Phone"}
          type={"Number"}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <FormInput
          title={"Location"}
          placeholder={"Enter your location"}
          type={"text"}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <div className="flex flex-col gap-2">
          <label className="text-white">Message</label>
          <textarea
            className="px-3 py-2 bg-[#8a8a8c] rounded-lg"
            placeholder="Enter your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={10}
          ></textarea>
        </div>
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, backgroundColor: "#292524" }} // Change color on hover
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }} // Smooth animation
          className="px-4 py-2 bg-black text-white rounded-lg"
          onClick={() =>
            handleEnquiryFormClick({ name, location, phone, message })
          }
        >
          Contact Now
        </motion.button>
      </div>
    </div>
  );
}
