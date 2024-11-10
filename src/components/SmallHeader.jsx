import React from "react";
import HeaderLinks from "./HeaderLinks";
import { IoMdClose } from "react-icons/io";

export default function SmallHeader({ setShowSmallHeader }) {
  return (
    <div className="lg:hidden w-full bg-white py-5">
      <div className="flex flex-col gap-5 items-start px-10">
        <p
          className="flex justify-end w-full"
          onClick={() => setShowSmallHeader(false)}
        >
          <IoMdClose />
        </p>
        <HeaderLinks
          href={"#home"}
          content={"Home"}
          setShowSmallHeader={setShowSmallHeader}
          border
        />
        <HeaderLinks
          href={"#why"}
          content={"Why Us"}
          setShowSmallHeader={setShowSmallHeader}
          border
        />
        <HeaderLinks
          href={"#about"}
          content={"About Us"}
          setShowSmallHeader={setShowSmallHeader}
          border
        />
        <HeaderLinks
          href={"#contact"}
          content={"Contact Us"}
          setShowSmallHeader={setShowSmallHeader}
          border
        />
        <button
          onClick={() => handleChatClick("know more about Tron Academy")}
          className="rounded-lg px-3 py-2 bg-primary hover:bg-hoverPrimary hover-animation text-white hover:py-[10px]"
        >
          Contact us
        </button>
      </div>
    </div>
  );
}
