import { interval, timer } from 'rxjs'; 
import { timeInSeconds } from "./constants";
  
export const timerInterval$ = interval(1000); // 1s
export const timer$ = timer(timeInSeconds * 1000); // dynamic time in s 
