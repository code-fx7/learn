'use strict';

const company = {
    name: 'the native web',
    location: 'Riegel am Kaiserstuhl',
    foundedIn: 2012,
    fullName () {
        return `${this.name} GmbH`;
    }
};

console.log(company.name);
console.log(company['name']);

const propertyName = 'name';
console.log(company[propertyName]);

company.country = 'Germany';

const person = null;