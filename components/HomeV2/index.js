import styles from "./Styles.module.css";

function Home() {
  return (
    <div id={styles.home} className="bg-white">
      <div className="flex justify-center items-center gap-32">
        <img
          className="rounded-lg"
          src={"/images/profile.jpg"}
          alt="Profile"
          width={350}
        ></img>
        <div className="flex flex-col gap-3">
          <p className="text-[#5781A7] text-3xl">Hello, I'm</p>
          <p className="text-black text-5xl font-bold">Akkewach Yodsomboon</p>
          <p
            className={`text-black text-3xl underline decoration-4 underline-offset-4 decoration-[#4DA9FE]  ${styles.line_1} ${styles.anim_typewriter} h-10`}
          >
            Full-Stack Developer
          </p>
          <div className="flex gap-5 mt-8">
            <button className="bg-[#5781A7] text-white text-lg w-32 h-12">
              Contact
            </button>
            <button className="text-[#5781A7] text-lg border-[#5781A7] border-2  w-32 h-12">
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
