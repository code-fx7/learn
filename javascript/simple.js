const name = "Chris";
const age = 39;
console.log(`Mein Name ist ${name} und ich bin ${age} Jahre alt.`);

function checkNumber(number) {
  if (number > 10) {
    console.log("Die Zahl ist größer als 10");
  } else {
    console.log("Die Zahl ist kleiner oder gleich 10");
  }
}

checkNumber(5);
checkNumber(10);
checkNumber(15);

for (let i = 1; i < 11; i++) {
  console.log(i);
}

function calculateArea(a, b) {
  console.log(a * b);
}

calculateArea(10, 5);
