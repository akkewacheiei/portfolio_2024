"use client";
import styles from "./Styles.module.css";
import CircleWithLine from "../CircleWithLine/index";

export default function Page() {
  return (
    <div id={styles.experience} className="bg-white  px-[2%] md:px-[10%] ">
      <div className="flex justify-center mb-20 ">
        <h1 id={styles.text2} className="text-4xl font-bold text-[#4e87f6]">
          Experience
        </h1>
      </div>
      <div className=" flex flex-col gap-10">
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-3xl">Sumary</h2>
          <div className="flex gap-3 lg:w-[45%] mt-2">
            <CircleWithLine />
            <div>
              <p className="font-bold text-2xl">AKKEWACH YODSOMBOON</p>
              <p className="flex-wrap ">
                A software developer with 3 years and 5 months of experience in
                developing both websites and applications.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-3xl">Work Experience</h2>
          <div className="flex gap-3 lg:w-[45%]">
            <CircleWithLine />
            <div>
              <p className="font-bold text-2xl">SOFTWARE DEVELOPER</p>
              <p className="inline-block bg-blue-100 p-2">
                AUG 2020 - JAN 2024
              </p>
              <p className="italic">Wellliness Co.,Ltd.</p>
              <ul className="list-disc  pl-[1.25rem] ">
                <li className="">
                  Working collaboratively with a team of UX/UI designers and
                  fitness coaches.
                </li>
                <li className="">
                  Developed a platform for online fitness courses that generates
                  workout video schedules tailored to each individual user.
                </li>
                <li className="">
                  Developed a gamification system that rewards points for
                  completing tasks.
                </li>
                <li className="">
                  Collaborated with Admin support to assist users in resolving
                  issues encountered in the software.
                </li>
                <li className="">Continuously adapt and improve the software's features.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
