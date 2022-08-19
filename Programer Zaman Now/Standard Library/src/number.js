const input = '12345';
const number = Number(input);

console.info(typeof input);
console.info(typeof number);
console.info(number);

console.info(Number('STRING')); // NaN (Not a Number)

console.info(Number.MIN_VALUE); // 5e-324
console.info(Number.MAX_VALUE); // 1.7976931348623157e+308
console.info(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.info(Number.MAX_SAFE_INTEGER); // 9007199254740991

const value = Number(12345);
console.info(value.toString(2)); // 11000000111001
console.info(value.toLocaleString('id-ID')); // 12.345
console.info(value.toLocaleString('en-US')); // 12,345
