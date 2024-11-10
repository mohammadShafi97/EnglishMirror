import React from "react";
import { whyStats } from "../../../utils/whystats";
import WhyCard from "./WhyCard";

export default function WhySection() {
  return (
    <div className="lg:px-[120px] py-10 px-5 pb-15 bg-gradient-to-br from-white to-gray-300">
      <h5 className="text-3xl font-semibold text-center my-10">
        Why Choose English Mirror?
      </h5>
      <div className="grid grid-cols-2 gap-10">
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
