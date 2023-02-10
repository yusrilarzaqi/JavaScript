const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const uri =
	'mongodb+srv://yusrilarzaqi:<password>@cluster0.rbh4y5t.mongodb.net/wpu?retryWrites=true&w=majority';
mongoose.connect(uri, {
	autoIndex: true,
});

// menambah 1 data
/* const contact1 = new Contact({ */
/* 	nama: 'Bimo Alamsyah', */
/* 	nohp: '08895312610', */
/* 	email: 'bimoAlamsyah@gmail.com', */
/* }); */

// save
/* contact1.save().then((contact) => console.log(contact)); */
