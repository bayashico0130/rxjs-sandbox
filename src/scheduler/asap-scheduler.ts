import {asapScheduler, Observable, observeOn} from 'rxjs';

const delay = 1000;

const observable = new Observable<number>((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
}).pipe(
    observeOn(asapScheduler, delay) // delay is 0 by default
);

console.log('just before subscribe');
observable.subscribe({
    next(x) {
        console.log('got value ' + x);
    },
    error(err) {
        console.error('something wrong occurred: ' + err);
    },
    complete() {
        console.log('done');
    },
});
console.log('just after subscribe');