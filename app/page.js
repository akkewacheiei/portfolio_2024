import Navbar from "../components/Navbar/index";
import HomeV1 from "../components/HomeV1/index";
import HomeV2 from "../components/HomeV2/index";

export default function Page() {
  return (
    <div className=" bg-black">
      <Navbar></Navbar>
      <HomeV2></HomeV2>
      <div className="mt-[10%]">a</div>
    </div>
  );
}
