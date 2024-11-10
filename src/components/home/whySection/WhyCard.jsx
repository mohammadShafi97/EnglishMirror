import React from "react";

export default function WhyCard({ bg, text, hover, icon, content, shadow }) {
  return (
    <div
      className={`p-7 flex flex-col rounded-lg gap-10 justify-center items-center hover:scale-105 ${bg} ${text} ${hover} ${shadow} duration-300 ease-in-out shadow-lg hover:text-white`}
    >
      <p className="text-6xl font-bold">{icon}</p>
      <p className="text-xl font-semibold">{content}</p>
    </div>
  );
}
