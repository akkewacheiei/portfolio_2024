"use client";
import styles from "./Styles.module.css";

export default function Page() {
  return (
    <div
      id={styles.about}
      className="bg-white p-[100px] flex flex-col gap-3 items-center"
    >
      <h1 className="text-6xl font-bold">About</h1>
      <div className="flex gap-8 flex-col lg:flex-row items-center justify-center mt-10">
        <img
          className="mb-10"
          src={"/images/profile_crop.png"}
          alt="Profile"
          width={490}
        ></img>

        <div className="flex flex-col">
          <p
            id={styles.text1}
            className="text-2xl md:text-3xl text-[#4E87F6] font-bold"
          >
            AKKEWACH YODSOMBOON
          </p>
          <p
            id={styles.text1}
            className="text-2xl font-bold"
          >
            Software Developer
          </p>

          <div className="flex flex-col flex-wrap mt-8">
            <p className="flex items-center gap-1">
              <i
                className="fa fa-chevron-right text-[#4E87F6]"
                aria-hidden="true"
              ></i>
              <span className="font-bold"> Birthday:</span> 7 May 1998
            </p>
            <p className="flex items-center gap-1">
              <i
                className="fa fa-chevron-right text-[#4E87F6]"
                aria-hidden="true"
              ></i>
              <span className="font-bold"> Gender:</span> Male
            </p>
            <p className="flex items-center gap-1">
              <i
                className="fa fa-chevron-right text-[#4E87F6]"
                aria-hidden="true"
              ></i>
              <span className="font-bold"> Nationality:</span> Thai
            </p>
            <p className="flex items-center gap-1">
              <i
                className="fa fa-chevron-right text-[#4E87F6]"
                aria-hidden="true"
              ></i>
              <span className="font-bold"> Degree:</span> Bachelor, Computer
              Engineering
            </p>
            <p className="flex items-center gap-1">
              <i
                className="fa fa-chevron-right text-[#4E87F6]"
                aria-hidden="true"
              ></i>
              <span className="font-bold"> City:</span> Pathum Thani, Thailand
            </p>
            <p className="flex items-center gap-1">
              <i
                className="fa fa-chevron-right text-[#4E87F6]"
                aria-hidden="true"
              ></i>
              <span className="font-bold"> Phone:</span> +66 84 004 5946
            </p>
            <p className="flex items-center gap-1">
              <i
                className="fa fa-chevron-right text-[#4E87F6]"
                aria-hidden="true"
              ></i>
              <span className="font-bold"> Email:</span>{" "}
              akkewach.yodsomboon@gmail.com
            </p>

            <p className="flex items-center gap-1">
              <i
                className="fa fa-chevron-right text-[#4E87F6]"
                aria-hidden="true"
              ></i>
              <span className="font-bold"> GitHub:</span>
              <a href="https://github.com/akkewacheiei" target="_blank">
                https://github.com/akkewacheiei
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
