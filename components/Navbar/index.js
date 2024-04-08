"use client";
import styles from "./Styles.module.css";
import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { usePathname } from "next/navigation";

export default function Navbar({ activeHeading }) {
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
          <ScrollLink
            activeClass="active"
            to="home_heading"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div className="text-black font-bold cursor-pointer">Akkewach</div>
          </ScrollLink>
        </div>

        <div id="menu" className="hidden lg:flex gap-10">
          <ScrollLink
            activeClass="active"
            to="home_heading"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div
              className={` text-black font-medium cursor-pointer  ${
                activeHeading === "home_heading" &&
                "underline decoration-2 underline-offset-8 decoration-main"
              }`}
            >
              Home
            </div>
          </ScrollLink>

          <ScrollLink
            activeClass="active"
            to="about_heading"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div
              className={` text-black font-medium cursor-pointer  ${
                activeHeading === "about_heading" &&
                "underline decoration-2 underline-offset-8 decoration-main"
              }`}
            >
              About
            </div>
          </ScrollLink>

          <ScrollLink
            activeClass="active"
            to="skills_heading"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div
              className={` text-black font-medium cursor-pointer  ${
                activeHeading === "skills_heading" &&
                "underline decoration-2 underline-offset-8 decoration-main"
              }`}
            >
              Skills
            </div>
          </ScrollLink>

          <ScrollLink
            activeClass="active"
            to="experience_heading"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div
              className={` text-black font-medium cursor-pointer  ${
                activeHeading === "experience_heading" &&
                "underline decoration-2 underline-offset-8 decoration-main"
              }`}
            >
              Experience
            </div>
          </ScrollLink>
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
        className={`flex lg:hidden py-3 ${
          isOpen ? "visible" : "invisible"
        } flex-col  items-center gap-3 bg-gray-100 mt-[58px]`}
      >
        {" "}
        <ScrollLink
          activeClass="active"
          to="home_heading"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <div
            onClick={() => setIsOpen(false)}
            className="text-black font-medium"
          >
            Home
          </div>{" "}
        </ScrollLink>{" "}
        <ScrollLink
          activeClass="active"
          to="about_heading"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <div
            onClick={() => setIsOpen(false)}
            className="text-black font-medium"
          >
            About
          </div>
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="skills_heading"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <div
            onClick={() => setIsOpen(false)}
            className="text-black font-medium"
          >
            Skills
          </div>
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="experience_heading"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <div
            onClick={() => setIsOpen(false)}
            className="text-black font-medium"
          >
            Experience
          </div>
        </ScrollLink>
      </div>
    </>
  );
}
