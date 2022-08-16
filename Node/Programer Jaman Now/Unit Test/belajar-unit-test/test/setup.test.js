import { sum } from '../src/sum';
import { info } from 'console';

beforeAll(async () => {
	info('Before All');
});

afterAll(async () => {
	info('After All');
});

beforeEach(async () => {
	info('Before Each');
});

afterEach(async () => {
	info('After Each');
});

describe('Setup Test', () => {
	it('first test', () => {
		expect(sum(10, 10)).toBe(20);
	});

	it('second test', () => {
		expect(sum(10, 10)).toBe(20);
	});
});
