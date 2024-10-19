import Image from "next/image"
import WarningLogo from "../../public/warning-icon.svg";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col text-center justify-center items-center gap-10">
      <Image alt="Warning Logo" src={WarningLogo} width={200} height={200} />
      <p className="font-bold text-xl">Challenge not found</p>
    </div>
  );
}