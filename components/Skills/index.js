"use client";
import styles from "./Styles.module.css";

export default function Page() {
  return (
    <div id={styles.skills} className="bg-white mb-10">
      <div className="flex justify-center mb-20  ">
        <h1 className="text-4xl font-bold text-black">Skills</h1>
      </div>
      <p className="font-bold text-xl">Front-End</p>
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-[#4e87f6] hover:animate-pulse px-4 py-2 text-center text-sm text-white">
          React.js
        </span>
        <span className="rounded-full bg-[#4e87f6] hover:animate-pulse px-4 py-2 text-center text-sm text-white">
          React Native
        </span>
        <span className="rounded-full bg-[#4e87f6] hover:animate-pulse px-4 py-2 text-center text-sm text-white">
          Redux
        </span>
        <span className="rounded-full bg-[#4e87f6] hover:animate-pulse px-4 py-2 text-center text-sm text-white">
          Next.js
        </span>
      </div>
      <p className="font-bold mt-5 text-xl">Back-End</p>
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-[#4e87f6] hover:animate-pulse px-4 py-2 text-center text-sm text-white">
          Node.js
        </span>
        <span className="rounded-full bg-[#4e87f6] hover:animate-pulse px-4 py-2 text-center text-sm text-white">
          AWS
        </span>
        <span className="rounded-full bg-[#4e87f6] hover:animate-pulse px-4 py-2 text-center text-sm text-white">
          MySQL
        </span>
      </div>
      <p className="font-bold mt-5 text-xl">Other</p>
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-[#4e87f6] hover:animate-pulse px-4 py-2 text-center text-sm text-white">
          Git
        </span>
        <span className="rounded-full bg-[#4e87f6] hover:animate-pulse px-4 py-2 text-center text-sm text-white">
          Nginx
        </span>
        <span className="rounded-full bg-[#4e87f6] hover:animate-pulse px-4 py-2 text-center text-sm text-white">
          TailwindCSS
        </span>
        <span className="rounded-full bg-[#4e87f6] hover:animate-pulse px-4 py-2 text-center text-sm text-white">
          Bootstrap
        </span>
      </div>
    </div>
  );
}
