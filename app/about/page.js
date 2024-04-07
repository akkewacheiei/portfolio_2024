"use client";
import Profile from "../../components/ProfileV2/index";
import Skills from "../../components/Skills/index";
import Education from "../../components/Education/index";

export default function Page() {
  return (
    <div className="mb-10">
      <Profile />

      <div className="flex justify-center">
        <span className=" border-[1px] w-[80%] mb-10 mt-10 flex"></span>
      </div>

      <Education />
    </div>
  );
}
