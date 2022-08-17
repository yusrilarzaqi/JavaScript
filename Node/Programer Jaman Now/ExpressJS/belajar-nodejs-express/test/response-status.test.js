import express from 'express';
import request from 'supertest';

test('Response Status', async () => {
	const app = express();
	app.get('/', ({ query: { name } }, res) => {
		if (name) {
			res.status(200).send(`Hello ${name}`);
		} else {
			res.status(400).end();
		}
	});

	let response = await request(app).get('/').query({ name: 'Yusril' });
	expect(response.status).toBe(200);
	expect(response.text).toBe('Hello Yusril');

	response = await request(app).get('/');
	expect(response.status).toBe(400);
});
