import { callMe, MyException } from '../src/exception';

test('Exception', () => {
	expect(() => callMe('Yusril')).toThrow();
	expect(() => callMe('Yusril')).toThrow(MyException);
	expect(() => callMe('Yusril')).toThrow('Ups my exception happens');
});

test('exception not happends', () => {
	expect(callMe('Bimo')).toBe('OK');
});
