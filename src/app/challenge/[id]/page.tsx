"use client";

import { useEffect, useState } from "react";
import challenges from "../../../../challenges.json";
import { useRouter } from "next/navigation";
import NotFound from "@/components/notfound";
import HintBoxCard from "@/components/hintbox";

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [activeChallenge, setActiveChallenge] = useState<{
    id: number;
    name: string;
    description: string;
    hint: string;
    answers: string[];
  }>();
  const [answer, setAnswer] = useState<string>("");
  const [correctAnswer, setCorrectAnswer] = useState<boolean>(true);
  const [hintBox, setHintBox] = useState<boolean>(false);
  const [hint, setHint] = useState<string>("");

  const validateAnswer = () => {
    if (!activeChallenge) return;
    if (
      activeChallenge.answers
        .map((x: string) => x.toString().toLowerCase())
        .includes(answer.toLowerCase())
    ) {
      if (parseInt(params.id) >= challenges[challenges.length - 1].id) {
        localStorage.setItem("d5c8e8b9aa5102c1b63c5af71499f00a", "true");
        router.push("/completed");
        return;
      }

      router.push("/challenge/" + (parseInt(params.id) + 1));
      return;
    }

    setCorrectAnswer(false);
  };

  const onKeyPress = (event: any) => {
    const keyCode = event.keyCode || event.which;

    if (keyCode === 13) {
      validateAnswer();
    }
  };

  useEffect(() => {
    if (activeChallenge) return;
    const challenge = challenges.find((x) => x.id == parseInt(params.id));
    if (challenge) {
      setActiveChallenge(challenge);
      setHint(challenge.hint);
    }
  }, []);

  return (
    <>
      {hintBox ? (
        <HintBoxCard hint={hint} setHintBox={setHintBox} key={hint} />
      ) : null}
      {activeChallenge ? (
        <div className="w-screen h-screen flex flex-col gap-5 items-center justify-center">
          <h1 className="font-bold text-3xl">{activeChallenge?.name}</h1>
          <p className="text-base">{activeChallenge?.description}</p>
          <input
            className={
              "text-white p-2 w-96 h-11 rounded border-[1px] bg-transparent focus:outline-none" +
              (!correctAnswer ? " border-red-500" : "border-gray-300")
            }
            placeholder="Answer here..."
            type="text"
            onChange={(e) => setAnswer(e.target.value)}
            onKeyDown={(e) => onKeyPress(e)}
            value={answer}
            autoFocus={true}
          />
          <div className="flex w-auto p-2 flex-row gap-4">
            <button
              onClick={validateAnswer}
              className="bg-green-700 w-36 h-11 rounded hover:bg-green-900 transition-colors"
            >
              Submit
            </button>
            <button
              onClick={() => setHintBox(true)}
              className="bg-orange-600 w-36 h-11 rounded hover:bg-orange-800 transition-colors"
            >
              Hint
            </button>
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}
