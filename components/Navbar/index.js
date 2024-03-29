import "./style.css";

export default function Navbar() {
  return (
    <div id="nav" className="bg-black flex justify-between items-center">
      <div id="logo" className="flex gap-1">
        <div className="text-[#5781A7] font-bold">{"</>"}</div>
        <div className="text-white font-bold">AKKEWACH</div>
      </div>
      <div id="menu" className="flex gap-7">
        <div className="text-white">Home</div>
        <div className="text-white">About</div>
        <div className="text-white">Resume</div>
        <div className="text-white">Portfolio</div>
        <div className="text-white">Contact</div>
      </div>
    </div>
  );
}
