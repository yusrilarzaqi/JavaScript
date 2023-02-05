const { MongoClient } = require('mongodb');

const URI =
	'mongodb+srv://yusrilarzaqi:yusril145@cluster0.rbh4y5t.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'wpu';
const client = new MongoClient(URI);

async function run() {
	try {
		const database = client.db(dbName);
		const mahasiswa = database.collection('mahasiswa');
		const query = { nama: 'Irfan Ardianto' };
		const mhs = await mahasiswa.findOne(query);

		console.log(mhs);
	} finally {
		await client.close();
	}
}

run().catch(console.dir);
