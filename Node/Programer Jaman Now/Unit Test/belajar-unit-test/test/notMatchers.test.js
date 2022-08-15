describe('Not Matchers', () => {
	test('String not', () => {
		const name = 'Yusril Arzaqi';

		expect(name).not.toBe('Bimo');
		expect(name).not.toEqual('Dimas');
		expect(name).not.toMatch(/Adam/);
	});

	test('Numbers Not', () => {
		const value = 2 + 2;

		expect(value).not.toBeGreaterThan(6);
		expect(value).not.toBeLessThan(2);
		expect(value).not.toBe(10);
	});
});
