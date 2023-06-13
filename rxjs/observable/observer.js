const observable = {
    observers: [],
    next: (value) => {
        for (let observer of observable.observers) {
            observer(value);
        }
    },
    subscribe: (observer) => observable.observers = [...observable.observers, observer],
    unsubscribe: (observer) => observable.observers = observable.observers.filter(item => item !== observer)
};

const observerA = (value) => {
    console.log(`A (${value}): ${value}`);
}

const observerB = (value) => {
    console.log(`B (${value}): ${value + 5}`);
}


observable.subscribe(observerA);
setTimeout( () => observable.next(1), 1000);
observable.next(2);
observable.subscribe(observerB);
observable.next(3);
observable.unsubscribe(observerA);
observable.next(4);
