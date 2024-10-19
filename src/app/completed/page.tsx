"use client";

import Image from "next/image";
import SuccessLogo from "../../../public/success-icon.svg";
import { useEffect } from "react";

export default function CompletedPage() {
  useEffect(() => {
    const completed = localStorage.getItem("d5c8e8b9aa5102c1b63c5af71499f00a");

    if (!completed || completed === undefined) {
      window.location.href =
        "https://www.youtube.com/watch?v=3YY1GvJpk6Q&pp=ygUSc3BvbmdlYm9iIDEwIGhvdXJz";
    }
  }, []);

  return (
    <div className="w-screen h-screen justify-center items-center flex flex-col gap-3">
      <Image alt="Success Logo" src={SuccessLogo} width={200} height={200} />
      <p>
        Congratulations! The flag is{" "}
        <code className="bg-gray-700 p-1">Br1tChall3ng3Flag</code>
      </p>
    </div>
  );
}
