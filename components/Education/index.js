"use client";
import styles from "./Styles.module.css";

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      <div id={styles.skills} className="bg-white ">
        <div className="flex">
          <h1 className="text-4xl font-bold mb-6 mt-5">Education</h1>
        </div>

        <h3 class="font-bold text-xl">
          Bachelor of Engineering (B.Eng.) in Computer Engineering
        </h3>
        <h4 class="font-bold text-lg">
          Rajamangala University of Technology Thanyaburi
        </h4>
        <p class="text-gray-700">2016 - 2020</p>
        <div class="my-4">
          <h4 class="font-bold text-lg">Course relevant</h4>
          <ul class="list-disc list-inside mt-2">
            <li>Data structures and Algorithms</li>
            <li>Software Engineering</li>
            <li>Database System</li>
            <li>Operating System</li>
            <li>System Analysis and Design</li>
            <li>Data Communication</li>
            <li>Computer Network</li>
            <li>TCP/IP</li>
            <li>Digital Logic and Circuit</li>
            <li>Computer Organization &amp; Assembly</li>
            <li>Computer Architect</li>
            <li>Big Data</li>
          </ul>
        </div>
      </div>
      <img
        className=""
        src={"/images/congreat01.JPEG"}
        alt="Profile"
        width={350}
      ></img>
    </div>
  );
}
