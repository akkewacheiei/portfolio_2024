"use client";
import styles from "./Styles.module.css";

export default function Page() {
  return (
    <div id={styles.skills} className="bg-white ">
      <div className="flex justify-center">
        <h1
          id={styles.text2}
          className="text-4xl font-bold mb-6 text-[#4e87f6]"
        >
          Skills
        </h1>
      </div>
      <p className="font-bold">Front-End</p>
      <div class="flex flex-wrap gap-2">
        <span class="rounded-full bg-[#4e87f6] hover:animate-pulse px-4 py-2 text-center text-sm text-white">
          React.js
        </span>
        <span class="rounded-full bg-[#4e87f6] hover:animate-pulse px-4 py-2 text-center text-sm text-white">
          React Native
        </span>
        <span class="rounded-full bg-[#4e87f6] hover:animate-pulse px-4 py-2 text-center text-sm text-white">
          Redux
        </span>
        <span class="rounded-full bg-[#4e87f6] hover:animate-pulse px-4 py-2 text-center text-sm text-white">
          Next.js
        </span>
      </div>
      <p className="font-bold mt-5">Back-End</p>
      <div class="flex flex-wrap gap-2">
        <span class="rounded-full bg-[#4e87f6] hover:animate-pulse px-4 py-2 text-center text-sm text-white">
          Node.js
        </span>
        <span class="rounded-full bg-[#4e87f6] hover:animate-pulse px-4 py-2 text-center text-sm text-white">
          AWS
        </span>
        <span class="rounded-full bg-[#4e87f6] hover:animate-pulse px-4 py-2 text-center text-sm text-white">
          MySQL
        </span>
      </div>
      <p className="font-bold mt-5">Other</p>
      <div class="flex flex-wrap gap-2">
        <span class="rounded-full bg-[#4e87f6] hover:animate-pulse px-4 py-2 text-center text-sm text-white">
          Git
        </span>
        <span class="rounded-full bg-[#4e87f6] hover:animate-pulse px-4 py-2 text-center text-sm text-white">
          Nginx
        </span>
        <span class="rounded-full bg-[#4e87f6] hover:animate-pulse px-4 py-2 text-center text-sm text-white">
          TailwindCSS
        </span>
        <span class="rounded-full bg-[#4e87f6] hover:animate-pulse px-4 py-2 text-center text-sm text-white">
          Bootstrap
        </span>
      </div>
    </div>
  );
}
