import {asyncScheduler, merge, Observable, observeOn} from 'rxjs';

const delay = 1000;

const observable = new Observable<number>((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
}).pipe(
    observeOn(asyncScheduler) // delay is 0 by default
);

const observable2 = new Observable<number>((observer) => {
    observer.next(4);
    observer.next(5);
    observer.next(6);
    observer.complete();
});

console.log('just before subscribe');
merge(observable, observable2).subscribe({
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