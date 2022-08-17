import { sum } from '../src/sum';

describe('Program Function Sum', () => {
	test('sum(1, 2) must be 3', () => {
		const result = sum(1, 2);

		expect(result).toBe(3);
	});

	it('should must be 100', () => {
		expect(sum(50, 50)).toBe(100);
	});

	it('should must be 100', () => {
		expect(sum(50, 50)).toBe(100);
	});

	it('should must be 200', () => {
		expect(sum(100, 100)).toBe(200);
	});
});
