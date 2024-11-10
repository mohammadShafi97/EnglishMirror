import React, { useRef } from "react";
import { whyStats } from "../../../utils/whystats";
import WhyCard from "./WhyCard";
import { motion, useInView } from "framer-motion";

export default function WhySection() {
  const Ref = useRef(null);
  const isInView = useInView(Ref, { once: false });
  return (
    <div
      id="why"
      className="lg:px-[120px] py-10 px-5 pb-15 bg-gradient-to-br from-white to-gray-300"
    >
      <motion.h5
        ref={Ref}
        initial={{ y: 100, opacity: 0 }} // Start off-screen at the bottom with opacity 0
        animate={isInView ? { y: 0, opacity: 1 } : {}} // Slide to the center and fade in when in view
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
        className="text-3xl font-semibold text-center my-10"
      >
        Why Choose English Mirror?
      </motion.h5>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
        {whyStats.map((x) => (
          <WhyCard
            key={x.id}
            icon={x.icon}
            content={x.content}
            bg={x.bg}
            text={x.text}
            hover={x.hover}
            shadow={x.shadow}
          />
        ))}
      </div>
    </div>
  );
}
