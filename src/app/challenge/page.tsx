"use client";
import { useRouter } from "next/navigation";

export default function ChallengePage() {
  const router = useRouter();

  return (
    <div className="w-screen h-screen justify-center items-center flex flex-col gap-3">
      <h1 className=" font-bold text-3xl">
        The test of your knowledge starts now{" "}
      </h1>
      <br />
      <p className=" text-xl font-semibold">Start Challenge</p>
      <button
        onClick={() => router.push("/challenge/1")}
        className="bg-green-700 w-36 h-11 rounded hover:bg-green-900 transition-colors shadow shadow-white"
      >
        Start
      </button>
    </div>
  );
}
