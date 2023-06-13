let interval;
let zaehler = 0;

const callbackInterval = () => {
    zaehler++;
    console.log('Interval');
    if (zaehler > 3) {
        return clearInterval(interval);
    }
};

interval = setInterval(callbackInterval, 1000);
