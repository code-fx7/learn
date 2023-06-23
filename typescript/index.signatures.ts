// https://dmitripavlutin.com/typescript-index-signatures/

const salary1 = {
  baseSalary: 100_000,
  yearlyBonus: 20_000
};

const salary2= {
  contractSalary: 110_000
};

// Indexsignatur: { [key: string]: number } ist die Indexsignatur,
// die TypeScript mitteilt, dass es salaryObjectsich um ein Objekt
// mit stringTyp als Schlüssel und numberTyp als Wert handeln muss.
function totalSalary(salaryObject: { [key: string]: number }) {
  let total =0;
for (const name in salaryObject) {
  total += salaryObject[name];
}
return total;
}

console.log('salary1: ',totalSalary(salary1));
console.log('salary2: ',totalSalary(salary2));

// ------------------------------------------------------------------

interface StringByString {
  [key: string]: string;
}

const heroesInBooks: StringByString = {
  'Gunslinger': 'The Dark Tower',
  'Jack Torrance': 'The Shining'
};

// ------------------------------------------------------------------

interface Options {
  [key: string]: string | number | boolean;
  timeout: number;
}

const options: Options = {
  timeout: 1000,
  timeoutMessage: 'The request timed out!',
  isFileUpload: false
};
