import express from 'express';
import request from 'supertest';

test('Response Header', async () => {
	const app = express();
	app.get('/', (req, res) => {
		res.set({
			'X-Powered-By': 'Yusril Channel',
			'X-Author': 'Yusril Arzaqi',
		});

		res.send('Hello World').end();
	});

	const response = await request(app).get('/');
	expect(response.text).toBe('Hello World');
	expect(response.get('X-Powered-By')).toBe('Yusril Channel');
	expect(response.get('X-Author')).toBe('Yusril Arzaqi');
});
