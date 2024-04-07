"use client";
import HomeV2 from "../components/HomeV2/index";
import Profile from "../components/ProfileV2/index";
import Education from "../components/Education/index";
import Skills from "../components/Skills/index";
import Experience from "../components/Experience/index";

export default function Page() {
  return (
    <div className=" bg-white">
      <HomeV2></HomeV2>

      <div className="flex justify-center">
        <span className=" border-[1px] w-[80%] mb-10 mt-10 flex"></span>
      </div>

      <Profile />

      <div className="flex justify-center">
        <span className=" border-[1px] w-[80%] mb-10 mt-10 flex"></span>
      </div>

      <Education />

      <div className="flex justify-center">
        <span className=" border-[1px] w-[80%] mb-10 mt-10 flex"></span>
      </div>

      <div className="bg-white">
        <Experience />
      </div>
   
      <div className="flex justify-center">
        <span className=" border-[1px] w-[80%] mb-10 mt-10 flex"></span>
      </div>

      <div className="mb-20">
        <Skills />
      </div>
  
    </div>
  );
}
