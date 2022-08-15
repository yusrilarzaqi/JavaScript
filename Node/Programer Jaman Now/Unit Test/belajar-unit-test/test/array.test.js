describe('Arrays Testing', () => {
	test('array', () => {
		const names = ['Yusril', 'Arzaqi'];
		expect(names).toContain('Arzaqi');
		expect(names).toEqual(['Yusril', 'Arzaqi']);
	});

	test('array object', () => {
		const persons = [
			{
				name: 'Yusril',
			},
			{
				name: 'Arzaqi',
			},
		];
		expect(persons).toContainEqual({ name: 'Arzaqi' });
		expect(persons).toEqual([
			{
				name: 'Yusril',
			},
			{
				name: 'Arzaqi',
			},
		]);
	});
});
