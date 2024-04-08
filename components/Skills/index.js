"use client";
import styles from "./Styles.module.css";

export default function Page() {
  return (
    <div id={styles.skills} className="bg-white mb-10">
      <div className="text-center mb-20  ">
        <h1 className="text-4xl font-bold text-black">Skills</h1>
        <p className="text-gray-500 text-sm">My technical level</p>
      </div>

      <div className="lg:w-[50%]">
        <section>
          <h2 className="font-bold text-xl">Frontend</h2>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-main hover:animate-pulse px-4 py-2 text-center text-sm text-white">
              Next.js
            </span>
            <span className="rounded-full bg-main hover:animate-pulse px-4 py-2 text-center text-sm text-white">
              React.js
            </span>
            <span className="rounded-full bg-main hover:animate-pulse px-4 py-2 text-center text-sm text-white">
              React Native
            </span>
            <span className="rounded-full bg-main hover:animate-pulse px-4 py-2 text-center text-sm text-white">
              Redux
            </span>
            <span className="rounded-full bg-main hover:animate-pulse px-4 py-2 text-center text-sm text-white">
              HTML
            </span>
            <span className="rounded-full bg-main hover:animate-pulse px-4 py-2 text-center text-sm text-white">
              CSS
            </span>
            <span className="rounded-full bg-main hover:animate-pulse px-4 py-2 text-center text-sm text-white">
              JavaScript
            </span>
            <span className="rounded-full bg-main hover:animate-pulse px-4 py-2 text-center text-sm text-white">
              TailwindCSS
            </span>
            <span className="rounded-full bg-main hover:animate-pulse px-4 py-2 text-center text-sm text-white">
              Bootstrap
            </span>
          </div>
        </section>
        <section>
          <h2 className="font-bold mt-5 text-xl">Backend</h2>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-main hover:animate-pulse px-4 py-2 text-center text-sm text-white">
              Node.js
            </span>
            <span className="rounded-full bg-main hover:animate-pulse px-4 py-2 text-center text-sm text-white">
              MySQL
            </span>
          </div>
        </section>
        <section>
          <h2 className="font-bold mt-5 text-xl">Other</h2>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-main hover:animate-pulse px-4 py-2 text-center text-sm text-white">
              Git
            </span>
            <span className="rounded-full bg-main hover:animate-pulse px-4 py-2 text-center text-sm text-white">
              AWS
            </span>
            <span className="rounded-full bg-main hover:animate-pulse px-4 py-2 text-center text-sm text-white">
              Nginx
            </span>
            <span className="rounded-full bg-main hover:animate-pulse px-4 py-2 text-center text-sm text-white">
              Figma
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
