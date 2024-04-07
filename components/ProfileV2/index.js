"use client";
import styles from "./Styles.module.css";

export default function Page() {
  return (
    <div
      id={styles.about}
      className="bg-white flex flex-col gap-3 items-center"
    >
      <div className="flex gap-8 flex-col   items-center justify-center">
        <h1
          id={styles.text2}
          className="text-4xl font-bold mb-6 text-[#4e87f6]"
        >
          About
        </h1>
        <div className="flex flex-col lg:flex-row gap-10  items-center lg:items-start border-[1px] p-[1.5rem] bg-blue-50 rounded-md shadow-md">
          <img
            className=""
            src={"/images/profile.JPG"}
            alt="Profile"
            width={300}
          ></img>
          <div className="flex flex-col mt-3">
            <p id={styles.text1} className="text-xl md:text-3xl font-bold">
              AKKEWACH YODSOMBOON
            </p>
            <p id={styles.text1} className="text-xl md:text-3xl text-gray-400">
              Software Developer
            </p>

            <>
              <div className="flex flex-col flex-wrap mt-2">
                <p className="flex items-center gap-1">
                  <span className="font-bold"> Date of Birth:</span> 7 May 1998
                </p>
                <p className="flex items-center gap-1">
                  <span className="font-bold"> Gender:</span> Male
                </p>
                <p className="flex items-center gap-1">
                  <span className="font-bold"> Nationality:</span> Thai
                </p>
                <p className="flex items-center gap-1">
                  <span className="font-bold"> Email:</span> akkewach.yodsomboon@gmail.com
                </p>
                <p className="flex items-center gap-1">
                  <span className="font-bold"> Phone:</span> 084-004-5946
                </p>
               
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
