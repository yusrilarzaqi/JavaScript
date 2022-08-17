import express from 'express';
import request from 'supertest';

test('Request Query Param', async () => {
	const app = express();
	app.get('/', (req, res) => {
		res.send(`Hello ${req.query.firstName} ${req.query.lastName}`);
	});
	const response = await request(app).get('/').query({
		firstName: 'Yusril',
		lastName: 'Arzaqi',
	});
	expect(response.text).toBe('Hello Yusril Arzaqi');
});
