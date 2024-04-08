import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/index";

const ScrollTracker = ({ headings }) => {
  const [activeHeading, setActiveHeading] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // ตรวจสอบตำแหน่ง scroll และกำหนดหัวข้อที่ถูกอ่านอยู่
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = document.getElementById(headings[i]);
        if (heading.offsetTop <= scrollPosition) {
          setActiveHeading(headings[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  return (
    <div>
      {/* นำค่า activeHeading ไปใช้งานใน sidebar, navbar หรือเอฟเฟ็คต่างๆ */}
      <Navbar activeHeading={activeHeading}></Navbar>
    </div>
  );
};

export default ScrollTracker;
