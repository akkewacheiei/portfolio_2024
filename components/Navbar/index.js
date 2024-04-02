"use client";
import styles from "./Styles.module.css";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  //Handles the opening and closing of our nav
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      const hamburgerList = document.getElementById(styles.hamburger_list);
      hamburgerList.classList.toggle(styles.open);
    }
  }, [isOpen]);

  return (
    <>
      <div
        id={styles.nav}
        className="bg-white flex justify-between items-center border-black border-b border-opacity-10 fixed w-full "
      >
        <div id="logo">
          <div className="text-black font-bold">Akkewach</div>
        </div>

        <div id="menu" className="hidden lg:flex gap-10">
          <div className="text-black font-medium  underline decoration-2 underline-offset-8 decoration-[#4E87F6]">
            Home
          </div>
          <div className="text-black font-medium">About</div>
          <div className="text-black font-medium">Resume</div>
          <div className="text-black font-medium">Portfolio</div>
          <div className="text-black font-medium">Contact</div>
        </div>

        <button
          id={styles.hamburger_btn}
          onClick={handleClick}
          className="flex lg:hidden flex-col justify-center items-center"
        >
          {!isOpen ? (
            <>
              <span
                className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm`}
              ></span>
              <span
                className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5`}
              ></span>
              <span
                className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm`}
              ></span>
            </>
          ) : (
            <span className={` text-black text-xl font-medium cursor-pointer`}>
              X
            </span>
          )}
        </button>
      </div>

      <div
        id={styles.hamburger_list}
        className={`flex lg:hidden ${
          isOpen ? "visible" : "invisible"
        } flex-col  items-center gap-3 bg-white mt-[58px]`}
      >
        <div className="text-black font-medium mt-3">Home</div>
        <div className="text-black font-medium">About</div>
        <div className="text-black font-medium">Resume</div>
        <div className="text-black font-medium">Portfolio</div>
        <div className="text-black font-medium mb-3">Contact</div>
      </div>
    </>
  );
}
