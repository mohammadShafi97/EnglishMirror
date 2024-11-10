import React from "react";

export default function FormInput({
  title,
  type,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-white text-sm">{title}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className="px-3 py-2 bg-[#8a8a8c] rounded-lg"
        onChange={onChange}
        required
      ></input>
    </div>
  );
}
