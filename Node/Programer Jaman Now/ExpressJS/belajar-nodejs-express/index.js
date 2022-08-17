import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res, next) => {
	// res.status(200).json({
	// 	message: 'hello world',
	// });
	res.status(200).send('Hello World');
});

app.listen(PORT, () => console.log(`Listen to port http://127.0.0.1:${PORT}`));
