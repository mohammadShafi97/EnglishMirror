import { motion } from "framer-motion";
import React from "react";

export default function HeaderLinks({
  content,
  href,
  setShowSmallHeader,
  border,
}) {
  function handleClick() {
    if (setShowSmallHeader) {
      setShowSmallHeader(false);
    } else {
      return;
    }
  }
  return (
    <motion.a
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }} // Change color on hover
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }} // Smooth animation
      href={href}
      onClick={handleClick}
      className={`${border && "border-b py-2 w-full"}`}
    >
      {content}
    </motion.a>
  );
}
