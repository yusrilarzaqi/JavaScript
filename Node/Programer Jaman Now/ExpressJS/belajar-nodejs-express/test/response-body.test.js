import express from 'express';
import request from 'supertest';

test('Response Body', async () => {
	const app = express();
	app.get('/', (req, res) => {
		res.set('Content-Type', 'text/html');
		res.send('<html><head><title>Hello World</title></head></html>');
	});

	const response = await request(app).get('/');
	console.log(response.headers['content-type']);
	expect(response.get('Content-Type')).toContain('text/html');
	expect(response.text).toBe(
		'<html><head><title>Hello World</title></head></html>'
	);
});
