import Image from "next/image";
import floatingCube from "@/assets/floating-cube.svg";
function BoxImage() {
  return (
    <div className="bg-[#19192c] w-full h-full flex justify-center items-center border rounded-l-lg border-r-0">
      <Image src={floatingCube} alt="floating cube" />
    </div>
  );
}

export default BoxImage;
