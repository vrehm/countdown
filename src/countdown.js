import { interval, timer } from 'rxjs'; 
import timeInSeconds from '../pages/index';

export const timerInterval$ = interval(1000); //1s
export const timer$ = timer(timeInSeconds*1000); //30s 
