import { sayHelloAysnc } from '../src/async';

describe('Async Test', () => {
	test('Async ', async () => {
		const result = await sayHelloAysnc('Bimo');
		expect(result).toBe('Hello Bimo');
	});
	it('Async Matchers', async () => {
		await expect(sayHelloAysnc('Yusril')).resolves.toBe('Hello Yusril');
		await expect(sayHelloAysnc()).rejects.toBe('Name is empty');
	});
});
