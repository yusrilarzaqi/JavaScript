// import { readFile } from './write.js';

// const result = readFile('hello.log');
// console.log(result);
// writeToFile(
// 	'hello.log',
// 	'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
// );

import _ from "lodash";

const data = [...Array(101).keys()].slice(1);

const result = _.chunk(data, 10);

console.info(result);
