import "./style.css";

export default function Navbar() {
  return (
    <div id="nav" className="bg-white flex justify-between items-center border-black border-b border-opacity-10">
      <div id="logo">
        <div className="text-black font-medium">Akkewach</div>
      </div>
      <div id="menu" className="flex gap-10">
        <div className="text-black font-medium  underline decoration-2 underline-offset-8 decoration-[#4E87F6]">
          Home
        </div>
        <div className="text-black font-medium">About</div>
        <div className="text-black font-medium">Resume</div>
        <div className="text-black font-medium">Portfolio</div>
        <div className="text-black font-medium">Contact</div>
      </div>
    </div>
  );
}
