"use client";
import styles from "./Styles.module.css";
import CircleWithLine from "../CircleWithLine/index";
import Education from "../Education/index";

export default function Page() {
  return (
    <div id={styles.experience} className="bg-white  px-[2%] md:px-[10%] ">
      <div className="text-center mb-20 ">
        <h1 className="text-4xl font-bold text-black">Experience</h1>
        <p className="text-gray-500 text-sm">My personal journey</p>
      </div>
      <div className=" flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col lg:w-1/2">
          <h2 className="font-bold text-3xl mb-4">Work</h2>

          <section>
            <div className="flex gap-3">
              <CircleWithLine />
              <div className="mb-4">
                <p className="font-bold text-2xl">Summary</p>
                <p className="text-gray-500">
                  A software developer with 4 years of experience in developing
                  both websites and applications.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex gap-3">
              <CircleWithLine />
              <div>
                <p className="font-bold text-2xl">Frontend Developer</p>
                <p className="inline-block bg-main text-white p-2 rounded-full text-sm font-bold">
                  JUL 2024 - PRESENT
                </p>
                <p className="font-bold">Workmotion Co.,Ltd.</p>
                <ul className="list-disc  pl-[1.25rem] ">
                  <li className="text-gray-500">
                    Full-stack development with Next.js/Nuxt.js and
                    Node.js/NestJS, including REST API design.
                  </li>
                  <li className="text-gray-500">
                    ITD Expert Anywhere – Online platform enabling SMEs to book
                    and consult with business experts.
                  </li>
                  <li className="text-gray-500">
                    Rebalance – Clinic management platform covering patient
                    records, sales orders, stock management, and refund
                    processes.
                  </li>
                  <li className="text-gray-500">
                    INDY T-Shirt – T-shirt ordering and production system with
                    dynamic work order generation and inventory management.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="flex gap-3">
              <CircleWithLine />
              <div>
                <p className="font-bold text-2xl">Junior Developer</p>
                <p className="inline-block bg-main text-white p-2 rounded-full text-sm font-bold">
                  AUG 2020 - JAN 2024
                </p>
                <p className="font-bold">Wellliness Co.,Ltd.</p>
                <ul className="list-disc  pl-[1.25rem] ">
                  <li className="text-gray-500">
                    Working collaboratively with a team of UX/UI designers and
                    fitness coaches.
                  </li>
                  <li className="text-gray-500">
                    Developed a platform for online fitness courses that
                    generates workout video schedules tailored to each
                    individual user.
                  </li>
                  <li className="text-gray-500">
                    Developed a gamification system that rewards points for
                    completing tasks.
                  </li>
                  <li className="text-gray-500">
                    Collaborated with Admin support to assist users in resolving
                    issues encountered in the software.
                  </li>
                  <li className="text-gray-500">
                    Continuously adapt and improve the software's features.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="flex flex-col lg:w-1/2">
          <h2 className="font-bold text-3xl mb-4">Education</h2>

          <section>
            <div className="flex gap-3">
              <CircleWithLine />
              <div>
                <p className="font-bold text-2xl">
                  Bachelor of Engineering (B.Eng.) in Computer Engineering
                </p>
                <p className="inline-block bg-main text-white p-2 rounded-full text-sm font-bold">
                  2016 - 2020
                </p>
                <p className="font-bold">
                  Rajamangala University of Technology Thanyaburi
                </p>
                <p className="text-gray-500 font-bold">Course relevant</p>
                <ul className="list-disc list-inside text-gray-500">
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
          </section>
        </div>
      </div>
    </div>
  );
}
