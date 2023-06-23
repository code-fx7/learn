// https://dmitripavlutin.com/typescript-index-signatures/
var salary1 = {
    baseSalary: 100000,
    yearlyBonus: 20000
};
var salary2 = {
    contractSalary: 110000
};
// Indexsignatur: { [key: string]: number } ist die Indexsignatur,
// die TypeScript mitteilt, dass es salaryObjectsich um ein Objekt
// mit stringTyp als Schlüssel und numberTyp als Wert handeln muss.
function totalSalary(salaryObject) {
    var total = 0;
    for (var name_1 in salaryObject) {
        total += salaryObject[name_1];
    }
    return total;
}
console.log('salary1: ', totalSalary(salary1));
console.log('salary2: ', totalSalary(salary2));
var heroesInBooks = {
    'Gunslinger': 'The Dark Tower',
    'Jack Torrance': 'The Shining'
};
var options = {
    timeout: 1000,
    timeoutMessage: 'The request timed out!',
    isFileUpload: false
};
