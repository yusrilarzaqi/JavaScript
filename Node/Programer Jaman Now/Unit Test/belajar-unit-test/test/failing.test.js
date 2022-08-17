import { sayHello } from '../src/sayHello';

test('sayHello success', () => {
	expect(sayHello('Yusril')).toBe('Hello Yusril');
});

test.failing('sayHello error matcher', () => {
	expect(sayHello(null)).toThrow();
});
