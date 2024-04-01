import styles from "./Styles.module.css";

function Home() {
  return (
    <div
      id={styles.home}
      className="bg-white flex justify-center  content-end gap-[70px]"
    >
      <>
        <div className="flex flex-col gap-3 ">
          <p className="text-black text-6xl font-bold">Hi,</p>
          <p className="text-black text-6xl font-bold mt-3">
            I am <span className="text-[#4E87F6]">Akkewach</span>
          </p>
          <p className="text-black text-6xl font-bold mt-3 ">
            Software Developer
          </p>
          <div className="flex gap-5 mt-[45px]">
            <button className="bg-[#4E87F6] rounded-md text-white text-[16px] font-medium w-[134px] h-[40px]">
              Contact
            </button>
          </div>
          <>
            <div id={styles.social_icons} className="flex gap-[30px] mt-[auto]">
              <a href="https://www.facebook.com/akkewach" target="_blank">
                <img
                  className="rounded-lg cursor-pointer"
                  src={"/images/icons/fb_icon.png"}
                  alt="fb_icon"
                  width={32}
                ></img>
              </a>
              <a href="https://www.instagram.com/broyyy._" target="_blank">
                <img
                  className="rounded-lg cursor-pointer"
                  src={"/images/icons/instragram_icon.png"}
                  alt="instragram_icon"
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
          </>
        </div>
      </>

      <>
        <img
          className="mb-10"
          src={"/images/profile2.png"}
          alt="Profile"
          width={490}
        ></img>
      </>
    </div>
  );
}

export default Home;
