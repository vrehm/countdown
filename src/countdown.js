import { interval, timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { timeInSeconds } from "./constants";

const timerInterval$ = interval(1000); // 1s
export const timer$ = timer(timeInSeconds * 1000); // dynamic time in s 
export const countDown$ = timerInterval$.pipe(take(timeInSeconds));