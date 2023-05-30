'use strict';

setTimeout(() => {
    console.log('Hallo Welt!');
}, 1_000);

// ----------------------------

'use strict';

const sayHello = async function () {
    await sleep(1_000);
    console.log('Hallo Welt!');
};

const main = async function () {
    await sayHello();
};

// Top-level await
// await main();

main().catch(ex => {
    // ...
});
