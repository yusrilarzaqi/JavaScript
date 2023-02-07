const { MongoClient, ObjectId } = require('mongodb');

const uri = `mongodb+srv://yusrilarzaqi:<password>@cluster0.rbh4y5t.mongodb.net/?retryWrites=true&w=majority`;
const dbName = 'wpu';
const client = new MongoClient(uri);

// Async Await
async function run() {
	try {
		const database = client.db(dbName);
		const mahasiswa = database.collection('mahasiswa');

		// insert 1 data to collection
		/* await mahasiswa.insertOne({ */
		/* 	nama: 'Yusril Arzaqi', */
		/* 	email: 'arzaqiyusril', */
		/* }); */

		// insert many data to collection
		/* const mhs = await mahasiswa.insertMany([ */
		/* 	{ */
		/* 		nama: 'Yusril Arzaqi', */
		/* 		email: 'arzaqiyusril', */
		/* 	}, */
		/* 	{ */
		/* 		nama: 'Bimo Alamsyah', */
		/* 		email: 'bimo@gmail.com', */
		/* 	}, */
		/* ]); */

		// menampilkan semua data di collection
		/* const datas = await mahasiswa.find().toArray(); */
		/* datas.map((mhs, i) => { */
		/* 	console.log(`${i}. ${mhs.nama}:${mhs.email}`); */
		/* }); */

		// menampilkan semua data di collection dengan kriteria
		/* const datas = await mahasiswa */
		/* 	.find({ */
		/* 		_id: new ObjectId('63dfa1518ab8c9482747a31e'), */
		/* 	}) */
		/* 	.toArray(); */
		/* console.log(datas); */

		// mengubah data berdasarkan id (1)
		/* const result = await mahasiswa.updateOne( */
		/* 	{ */
		/* 		_id: new ObjectId('63dfa1518ab8c9482747a31e'), */
		/* 	}, */
		/* 	{ */
		/* 		$set: { email: 'arzaqiyusril@gmail.com' }, */
		/* 	} */
		/* ); */
		/* console.log( */
		/* 	`${result.matchedCount} document(s) matched the filter, updated ${result.upsertedCount} document(s)` */
		/* ); */

		// mengubah data lebih dari satu menggunakan field
		/* const result = await mahasiswa.updateMany( */
		/* 	{ nama: 'Yusril Arzaqi' }, */
		/* 	{ $set: { email: 'arzaqiyusril@gmail.com' } } */
		/* ); */
		/* console.log( */
		/* 	`${result.matchedCount} document(s) matched the filter, updated ${result.upsertedCount} document(s)` */
		/* ); */

		// menghapus 1 data
		/* const result = await mahasiswa.deleteOne({ nama: 'yusril' }); */
		/* if (result.deletedCount == 1) { */
		/* 	console.log('successfully deleted'); */
		/* } else { */
		/* 	console.log('no data deleted'); */
		/* } */

		// menghapus  lebih dari 1 data
		const result = await mahasiswa.deleteMany({ nama: { $regex: 'Yusril' } });
		console.log(`Deleted ${result.deletedCount} data`);
	} finally {
		await client.close();
	}
}

run().catch(console.dir);
