import React from "react";
import { motion } from "framer-motion";

export default function FooterLinks({ icon, href, text }) {
  return (
    <motion.a
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.4 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }} // Smooth animation
      href={href}
      className={`${text}`}
      target="_blank"
    >
      {icon}
    </motion.a>
  );
}
