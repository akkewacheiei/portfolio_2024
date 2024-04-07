"use client";
import styles from "./Styles.module.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [pageSelected, setPageSelected] = useState("home");

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

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <div
        id={styles.nav}
        className="bg-white flex justify-between items-center border-black border-b border-opacity-10 fixed w-full "
      >
        <div id="logo">
          <Link href="/" className="text-black font-bold">
            Akkewach
          </Link>
        </div>

        <div id="menu" className="hidden lg:flex gap-10">
          <Link
            href="/"
            className={`text-black font-medium  ${
              pathname === "/" &&
              "underline decoration-2 underline-offset-8 decoration-[#4E87F6]"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-black font-medium  ${
              pathname === "/about" &&
              "underline decoration-2 underline-offset-8 decoration-[#4E87F6]"
            }`}
          >
            About
          </Link>
          <Link
            href="/experience"
            className={`text-black font-medium  ${
              pathname === "/experience" &&
              "underline decoration-2 underline-offset-8 decoration-[#4E87F6]"
            }`}
          >
            Experience
          </Link>
          <Link
            href="/skills"
            className={`text-black font-medium  ${
              pathname === "/skills" &&
              "underline decoration-2 underline-offset-8 decoration-[#4E87F6]"
            }`}
          >
            Skills
          </Link>
          {/*  <Link
           
            href="/portfolio"
            className={`text-black font-medium  ${
              pathname === "/portfolio" &&
              "underline decoration-2 underline-offset-8 decoration-[#4E87F6]"
            }`}
          >
            Portfolio
          </Link> */}
          {/*    <Link
         
            href="/contact"
            className={`text-black font-medium  ${
              pathname === "/contact" &&
              "underline decoration-2 underline-offset-8 decoration-[#4E87F6]"
            }`}
          >
            Contact
          </Link> */}
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
        <Link
          onClick={() => setIsOpen(false)}
          href={"/"}
          className="text-black font-medium mt-3"
        >
          Home
        </Link>
        <Link
          onClick={() => setIsOpen(false)}
          href={"/about"}
          className="text-black font-medium"
        >
          About
        </Link>
        <Link
          onClick={() => setIsOpen(false)}
          href={"/experience"}
          className="text-black font-medium"
        >
          Experience
        </Link>
        <Link
          onClick={() => setIsOpen(false)}
          href={"/skills"}
          className="text-black font-medium mb-3"
        >
          Skills
        </Link>
        {/*  <Link onClick={() => setIsOpen(false)}  href={"/portfolio"} className="text-black font-medium">
          Portfolio
        </Link> */}
        {/*       <Link onClick={() => setIsOpen(false)}  href={"/contact"} className="text-black font-medium mb-3">
          Contact
        </Link> */}
      </div>
    </>
  );
}
