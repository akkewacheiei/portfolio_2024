"use client";
import HomeV2 from "../components/HomeV2/index";
import Profile from "../components/ProfileV2/index";
import Education from "../components/Education/index";
import Skills from "../components/Skills/index";
import Experience from "../components/Experience/index";
import ScrollTracker from "../components/ScrollTracker/index";

const headings = [
  "home_heading",
  "about_heading",
  "skills_heading",
  "experience_heading",
 
]; // ระบุ id ของหัวข้อที่ต้องการตรวจสอบ

export default function Page() {
  return (
    <div className=" bg-white">
      <div id="home_heading"></div>

      <ScrollTracker className="fixed" headings={headings} />

      {/* เพิ่มเนื้อหาของเว็บไซต์ที่ต้องการให้ผู้ใช้เลื่อนลงมาอ่าน */}

      <HomeV2></HomeV2>

      <div id="about_heading" className="flex justify-center">
        <span className=" border-[1px] w-[80%] mb-20 mt-10 flex"></span>
      </div>

      <Profile />

      <div id="skills_heading" className="flex justify-center">
        <span className=" border-[1px] w-[80%] mb-20 mt-10 flex"></span>
      </div>

      <Skills />

    {/*   <div className="flex justify-center">
        <span className=" border-[1px] w-[80%] mb-10 mt-10 flex"></span>
      </div>

      <Education /> */}

      <div id="experience_heading" className="flex justify-center">
        <span className=" border-[1px] w-[80%] mb-20 mt-10 flex"></span>
      </div>

      <div className="bg-white lg:mb-[25%]">
        <Experience />
      </div>

    </div>
  );
}
