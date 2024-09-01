"use client";
import styles from "./Styles.module.css";

export default function Page() {
  return (
    <div
      id={styles.about}
      className="bg-white flex flex-col gap-3 items-center"
    >
      <div className="mb-4 text-center">
        <h1 className="text-4xl font-bold  text-black">About me</h1>
        <p className="text-gray-500 text-sm">My introduction</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-[5%]  items-center lg:items-start justify-center  px-[10%] lg:px-[0px]">
        <img
          className="rounded-md"
          src={"/images/profile.JPG"}
          alt="Profile"
          width={300}
        ></img>
        <section className="flex flex-col flex-wrap lg:w-[25%]">
          <p id={styles.text1} className="text-2xl md:text-2xl font-bold">
            Akkewach Yodsomboon
          </p>
          <p id={styles.text2} className="text-gray-500 mb-5">
            I am a software developer with 3 years and 5 months of experience in
            developing both websites and applications, I continue to further my
            skills to grow in this field.
          </p>
          <section className="flex lg:justify-between justify-around">
            <div className="flex flex-col text-center">
              <span className="font-bold text-2xl">03+</span>
              <span className="text-gray-500 text-sm">Years</span>
              <span className="text-gray-500 text-sm">experience</span>
            </div>
            <div className="flex flex-col text-center">
              <span className="font-bold text-2xl">05+</span>
              <span className="text-gray-500 text-sm">Completed</span>
              <span className="text-gray-500 text-sm">projects</span>
            </div>
            <div className="flex flex-col text-center">
              <span className="font-bold text-2xl">02+</span>
              <span className="text-gray-500 text-sm">Companies</span>
              <span className="text-gray-500 text-sm">worked</span>
            </div>
          </section>
          <div className="flex justify-center lg:justify-start">
            <a href="/pdf/portfolio.pdf" target="_blank">
              <button
                id={styles.download_cv}
                className="bg-main rounded-md text-white text-[16px] font-medium w-[134px] h-[40px] mt-5"
              >
                View Portfolio
              </button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
