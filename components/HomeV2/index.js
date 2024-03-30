import styles from "./Styles.module.css";

function Home() {
  return (
    <div id={styles.home} className="bg-white">
      <div className="flex justify-center items-center gap-[128px]">
        <div className="flex flex-col gap-3">
          <p className="text-black text-5xl font-bold">Hello,</p>
          <p className="text-black text-5xl font-bold mt-3">
            I'm <span className="text-[#4E87F6]">Akkewach</span>
          </p>
          <p className="text-black text-5xl font-bold mt-3 ">
            Software Developer
          </p>
          <div className="flex gap-5 mt-[45px]">
            <button className="bg-[#4E87F6] rounded-md text-white text-[16px] font-medium w-[134px] h-[40px]">
              Contact
            </button>
          </div>
        </div>
        <img
          className="rounded-lg"
          src={"/images/profile2.png"}
          alt="Profile"
          width={490}
        ></img>
      </div>
    </div>
  );
}

export default Home;
