import fs from 'fs/promises';

// const buffer = fs.readFileSync('file-system.mjs');
// console.info(buffer.toString());
// fs.writeFileSync('tmp.txt', 'Hello World');

const buffer = await fs.readFile('file-system.mjs')

console.info(buffer.toString())

await fs.writeFile('tmp.txt', 'Hello World')

