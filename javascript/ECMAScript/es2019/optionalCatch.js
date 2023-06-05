'use strict';

// Alt
try {

  throw new Error();
} catch (ex) {
  console.log('Es ist ein Fehler aufgetreten!');
}


// Neu
try {
  
  throw new Error();
} catch {
  console.log('Es ist ein Fehler aufgetreten!');
}
