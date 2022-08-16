import { sumAll } from '../src/sum';

describe('When call sumAll()', () => {
	it('should get 100 with parameter 10, 20, 30, 40', () => {
		expect(sumAll(10, 20, 30, 40)).toBe(100);
	});

	it('should get 200 with parameter 50, 50, 50, 50', () => {
		expect(sumAll(50, 50, 50, 50)).toBe(200);
	});
});
