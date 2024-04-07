import styles from "./Styles.module.css";
import Link from "next/link";

function Home() {
  return (
    <div
      id={styles.home}
      className="bg-white flex justify-center items-center lg:items-stretch flex-col lg:flex-row gap-[6%] md:pt-[10%] pt-[25%] p-[5%]"
    >
      <>
        <div id={styles.content} className="flex flex-col gap-3 items-stretch">
          <p className="text-black md:text-6xl text-4xl font-bold ">Hi,</p>
          <p className="text-black md:text-6xl text-4xl font-bold lg:mt-3">
            I am <span className="text-[#4E87F6]">Akkewach</span>
          </p>
          <p className="text-black md:text-6xl text-4xl font-bold lg:mt-3 ">
            Software Developer
          </p>
          <Link
            href={"/about"}
            className="flex gap-5 lg:mt-[45px] lg:mb-[30px] justify-start"
          >
            <button className="bg-[#4E87F6] rounded-md text-white text-[16px] font-medium w-[134px] h-[40px]">
              Contact
            </button>
          </Link>
          <div className="flex justify-between lg:mt-[auto]">
            <div
              id={styles.social_icons}
              className="flex lg:flex-row flex-col gap-[30px] justify-center "
            >
              <a href="https://www.instagram.com/broyyy._" target="_blank">
                <img
                  className="rounded-lg cursor-pointer"
                  src={"/images/icons/instragram_icon.png"}
                  alt="instragram_icon"
                  width={32}
                ></img>
              </a>
              <a href="https://www.facebook.com/akkewach" target="_blank">
                <img
                  className="rounded-lg cursor-pointer"
                  src={"/images/icons/fb_icon.png"}
                  alt="fb_icon"
                  width={32}
                ></img>
              </a>
              <a href="https://github.com/akkewacheiei" target="_blank">
                <img
                  className="rounded-lg cursor-pointer"
                  src={"/images/icons/github_icon.png"}
                  alt="Profile"
                  width={32}
                ></img>
              </a>
            </div>
            <img
              id={styles.img}
              className="w-[90%] lg:w-[490px] lg:hidden"
              src={"/images/profile2.png"}
              alt="Profile"
            ></img>
          </div>
        </div>
      </>

      <>
        <img
          id={styles.img}
          className="mb-10 hidden lg:block"
          src={"/images/profile2.png"}
          alt="Profile"
          width={490}
        ></img>
      </>
    </div>
  );
}

export default Home;
