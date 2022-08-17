describe('Test Equal', () => {
	it('toBe', async () => {
		const name = 'Yusril';

		expect(`welcome ${name}`).toBe('welcome Yusril');
	});

	it('toEqual', async () => {
		const data = {
			id: '185512',
		};
		Object.assign(data, {
			name: 'Yusril',
		});

		expect(data).toEqual({
			id: '185512',
			name: 'Yusril',
		});
	});
});
