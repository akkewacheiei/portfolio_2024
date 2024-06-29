"use client";
import styles from "./Styles.module.css";
import { useState } from "react";

export default function Page() {
  const programmingLanguage = ["javaScript", "TypeScript"];
  const frontendSkill = [
    "Next.js",
    "React.js",
    "React Native",
    "Redux",
    "HTML",
    "CSS",
    "JavaScript",
    "TailwindCSS",
    "Bootstrap",
  ];

  const backendSkill = [
    "Node.js",
    "Express.js",
    "REST API",
    "MySQL",
    "Sequelize",
    "MongoDB",
    "Mongoose",
  ];

  const otherSkill = ["Git", "AWS", "Nginx", "Figma"];

  return (
    <div id={styles.skills} className="bg-white mb-10">
      <div className="text-center mb-20  ">
        <h1 className="text-4xl font-bold text-black">Skills</h1>
        <p className="text-gray-500 text-sm">My technical level</p>
      </div>

      <div className="lg:w-[50%] flex flex-col gap-5">
        <section>
          <h2 className="font-bold text-xl">Language</h2>
          <div className="flex flex-wrap gap-2">
            {programmingLanguage.map((item) => (
              <span className="rounded-full bg-main hover:animate-pulse px-4 py-2 text-center text-sm text-white">
                {item}
              </span>
            ))}
          </div>
        </section>
        <section>
          <h2 className="font-bold text-xl">Frontend</h2>
          <div className="flex flex-wrap gap-2">
            {frontendSkill.map((item) => (
              <span className="rounded-full bg-main hover:animate-pulse px-4 py-2 text-center text-sm text-white">
                {item}
              </span>
            ))}
          </div>
        </section>
        <section>
          <h2 className="font-bold  text-xl">Backend</h2>
          <div className="flex flex-wrap gap-2">
            {backendSkill.map((item) => (
              <span className="rounded-full bg-main hover:animate-pulse px-4 py-2 text-center text-sm text-white">
                {item}
              </span>
            ))}
          </div>
        </section>
        <section>
          <h2 className="font-bold text-xl">Other</h2>
          <div className="flex flex-wrap gap-2">
            {otherSkill.map((item) => (
              <span className="rounded-full bg-main hover:animate-pulse px-4 py-2 text-center text-sm text-white">
                {item}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
