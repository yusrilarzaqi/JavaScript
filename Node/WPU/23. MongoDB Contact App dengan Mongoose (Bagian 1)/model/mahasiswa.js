const mongoose = require('mongoose');

const Mahasiswa = mongoose.model('mahasiswa', {
	nama: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
});

/* (async () => { */
/* 	console.log( */
/* 		await Mahasiswa.insertMany([ */
/* 			{ nama: 'Bimo Alamsyah', email: 'bimoAlam@gmail.com' }, */
/* 			{ nama: 'Irfan Aziz Ardianto', email: 'azizirfan723@gmail.com' }, */
/* 			{ nama: 'Adam Saputra', email: 'adam@gmail.com' }, */
/* 		]) */
/* 	); */
/* })(); */

module.exports = Mahasiswa;
