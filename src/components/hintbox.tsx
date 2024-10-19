export default function HintBox({ hint, setHintBox }: { hint: string, setHintBox: (value: boolean) => void}) {
  return (
    <div className="absolute">
      <div className="w-screen h-screen flex justify-center items-center backdrop-blur">
        <div className="relative w-[35rem] min-h-48 h-fit bg-black opacity-80 p-5 flex justify-center items-center flex-col gap-3 rounded-lg">
          <div className=" min-h-36 h-fit p-1 text-base text-wrap">
            {hint}
          </div>
          <button className="h-12 w-28 hover:scale-125" onClick={() => setHintBox(false)}>Close</button>
        </div>
      </div>
    </div>
  );
}
