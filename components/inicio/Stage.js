import Link from "next/link";
import Image from "next/image";
export default function Stage() {
  return (
    <div className="relative">
      <div className="flex flex-row items-center justify-center w-full ">
        <Image
          className="w-full pb-4 -mt-64 rounded-full flex-flex-col opacity-90"
          src="/stage.png"
          alt=""
          width={900}
          height={900}
        />
        <div className="w-1/2 font-bold text-black -translate-y-10 font-chromate text-7xl shadow-color-black">
          Find Investment Opportunities on Devow
        </div>
      </div>
    </div>
  );
}
