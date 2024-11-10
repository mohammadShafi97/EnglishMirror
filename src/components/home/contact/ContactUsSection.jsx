import React from "react";
import FormInput from "./FormInput";

export default function ContactUsSection() {
  return (
    <div
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
        />
        <FormInput
          title={"Phone"}
          placeholder={"Enter Phone"}
          type={"Number"}
        />
        <FormInput
          title={"Location"}
          placeholder={"Enter your location"}
          type={"text"}
        />
        <div className="flex flex-col gap-2">
          <label className="text-white">Message</label>
          <textarea
            className="px-3 py-2 bg-[#8a8a8c] rounded-lg"
            placeholder="Enter your Message"
            rows={10}
          ></textarea>
        </div>
        <button className="px-4 py-2 bg-black text-white rounded-lg">
          Contact Now
        </button>
      </div>
    </div>
  );
}
