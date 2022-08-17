import { sumAll } from '../src/sum';

const table = [
	[[10, 10, 10], 30],
	[[10, 10, 10, 10, 10], 50],
	[[10, 10, 10, 10, 10, 10, 10], 70],
];

test.each(table)('test sumAll(%s) should result %i', (numbers, expected) => {
	console.log(numbers);
	console.log(expected);
	expect(sumAll(numbers)).toBe(expected);
});
/* it('sumAll(10, 10, 10, 10)', () => { */
/* 	expect(sumAll(10, 10, 10, 10)).toBe(40); */
/* }); */
/**/
/* it('sumAll(10, 10, 10, 10, 10, 10)', () => { */
/* 	expect(sumAll(10, 10, 10, 10, 10, 10)).toBe(60); */
/* }); */
