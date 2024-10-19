"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const completed = localStorage.getItem("d5c8e8b9aa5102c1b63c5af71499f00a");
    if (completed) {
      localStorage.removeItem("d5c8e8b9aa5102c1b63c5af71499f00a");
    }
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen p-2">
      <header className="w-full min-h-24 h-fit flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl font-bold">CTF - Brit Challenge Project</h1>
      </header>
      <main className="w-full h-full flex  items-center flex-col gap-10">
        <p className="mt-2 w-70p text-center">
          Welcome to our CTF challenge project. This project is a collection of
          challenges that are designed to test your skills in various areas of
          cybersecurity. The challenges are designed to be fun and educational,
          and are suitable for beginners, as well as more experienced players.
        </p>
        <button
          onClick={() => router.push("/challenge")}
          className="w-40 h-12 bg-green-700 rounded hover:bg-green-900 transition-colors mt-2"
        >
          Go to Challenge
        </button>
      </main>
    </div>
  );
}
