import { useEffect, useState } from "react";
import { timerInterval$, timer$ } from "../src/countdown"
import { take } from 'rxjs/operators';
export const timeInSeconds = 300; // 5 min, or 300s

export default function Home() {
  const [timeout, setTimeout] = useState(timeInSeconds);
  const [countdown, setCountdown] = useState("Counting...");

  useEffect(() => {
    const countDown$ = timerInterval$.pipe(take(timeInSeconds));
    timer$.subscribe(() => {setCountdown("Time is up!")});
    countDown$.subscribe(timeValue => setTimeout(timeInSeconds - timeValue - 1));
  }, []);

  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-3xl font-bold">
        {timeout}
      </h1>
      <h2 className="text-xl font-bold">
        {countdown}
      </h2>
    </main>
  )
}