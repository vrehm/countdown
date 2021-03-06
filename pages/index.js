import { useEffect, useState } from "react";
import { countDown$, timer$ } from "../src/countdown"
import { timeInSeconds } from "../src/constants";

export default function Home() {
  const [timeout, setTimeout] = useState(timeInSeconds);
  const [countdown, setCountdown] = useState("Counting...");
  const useForceUpdate = () => useState()[1];
  useForceUpdate();
  
  useEffect(() => {
    timer$.subscribe(() => { setCountdown("Time's up!")} );
    countDown$.subscribe(timeValue => setTimeout(timeInSeconds - timeValue - 1));
  }, []);

  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-3xl font-bold">
        {timeout}s left
      </h1>
      <h2 className="text-xl font-bold">
        {countdown}
      </h2>
    </main>
  )
}