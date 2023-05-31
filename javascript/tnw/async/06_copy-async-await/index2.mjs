import fs from 'fs';
import util from 'util';

const readInput = util.promisify(fs.readFile);
const writeOutput = util.promisify(fs.writeFile);

const copy = async function (source, target) {
  try {
    const data = await readInput(source);
    await writeOutput(target, data);
  } catch (ex) {
    throw ex;
  }
};

try {
  await copy('input.txt', 'output.txt');
  console.log('Copied successfully!');
} catch (ex) {
  console.log('Failed to copy.');
}
