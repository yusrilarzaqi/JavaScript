test('string', () => {
	const name = 'Yusril Arzaqi';

	expect(name).toBe('Yusril Arzaqi');
	expect(name).toEqual('Yusril Arzaqi');
	expect(name).toMatch(/zaqi/);
});
