"use client";
import styles from "./Styles.module.css";

export default function Page() {
  return (
    <div
      id={styles.about}
      className="bg-white flex flex-col gap-3 items-center"
    >
      <div className="flex gap-8 flex-col   items-center justify-center mt-10">
        <h1
          id={styles.text2}
          className="text-4xl font-bold mb-6 text-[#4e87f6]"
        >
          About
        </h1>
        <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
          <img
            className=""
            src={"/images/profile.JPG"}
            alt="Profile"
            width={300}
          ></img>
          <div className="flex flex-col">
            <p id={styles.text1} className="text-2xl md:text-3xl font-bold">
              AKKEWACH YODSOMBOON
            </p>
            <p id={styles.text1} className="text-2xl md:text-3xl text-gray-400">
              Software Developer
            </p>

            <>
              <div className="flex flex-col flex-wrap mt-2">
                <p className="flex items-center gap-1">
                  <span className="font-bold"> Birthday:</span> 7 May 1998
                </p>
                <p className="flex items-center gap-1">
                  <span className="font-bold"> Gender:</span> Male
                </p>
                <p className="flex items-center gap-1">
                  <span className="font-bold"> Nationality:</span> Thai
                </p>
                <p className="flex items-center gap-1">
                  <span className="font-bold"> City:</span> Pathum Thani,
                  Thailand
                </p>
                <p className="flex items-center gap-1">
                  <span className="font-bold"> Degree:</span> Bachelor, Computer
                  Engineering
                </p>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
