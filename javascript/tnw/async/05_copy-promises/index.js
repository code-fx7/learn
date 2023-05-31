'use strict';

const fs = require('fs');

/* const readInput = function (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        return reject(err);
      }

      resolve(data);
    });
  });
};

const writeOutput = function (fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, { encoding: 'utf-8' }, err => {
      if (err) {
        return reject(err);
      }

      resolve();
    });
  });
};

const copy = function (source, target) {
  return new Promise((resolve, reject) => {
    const readInputPromise = readInput(source);

    readInputPromise.then(data => {
      const writeOutputPromise = writeOutput(target, data);

      writeOutputPromise.then(() => {
        resolve();
      }).catch(err => {
        reject(err);
      });
    }).catch(err => {
      reject(err);
    });
  });
};

const copyPromise = copy('input.txt', 'output.txt');

copyPromise.then(() => {
  console.log('Copied successfully!');
}).catch(err => {
  console.log('Failed to copy.');
}); */

// --------------------------------------------------

const readInput = function (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        return reject(err);
      }

      resolve(data);
    });
  });
};

const writeOutput = function (fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, { encoding: 'utf-8' }, err => {
      if (err) {
        return reject(err);
      }

      resolve();
    });
  });
};

const copy = function (source, target) {
  return new Promise((resolve, reject) => {
    readInput(source)
      .then(data => writeOutput(target, data))
      .then(() => resolve())
      .catch(err => reject(err));
  });
};

copy('input.txt', 'output.txt')
  .then(() => console.log('Copied successfully!'))
  .catch(() => console.log('Failed to copy.'));
