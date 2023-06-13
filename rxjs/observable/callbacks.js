const addFive = (a) => a + 5;
const subOne = (a) => a - 1;

const processArray = (array, callback)  => {
    const result = [];
    for (let item of array) {
        result.push(callback(item));
    }
    return result;
};

const summe = addFive(5);
console.log(summe);
const num = [1, 2, 3, 4, 5];

const sumArray = processArray(num, addFive);
console.log(sumArray);

const result = processArray(num, subOne);
console.log(result);
