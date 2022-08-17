import { sayHelloAysnc } from '../src/async';

test.concurrent('Concurrent 1', async () => {
	await expect(sayHelloAysnc('Yusril')).resolves.toBe('Hello Yusril');
});

test.concurrent('Concurrent 2', async () => {
	await expect(sayHelloAysnc('Yusril')).resolves.toBe('Hello Yusril');
});

test.concurrent('Concurrent 3', async () => {
	await expect(sayHelloAysnc('Yusril')).resolves.toBe('Hello Yusril');
});
