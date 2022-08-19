/*
{
	// Object Frreze & Seal
	const person = {
		firstName: 'Yusril',
		lastName: 'Arzaqi',
	};

	// Object.freeze(person);
	Object.seal(person);

	person.firstName = 'Diubah'; // tidak berubah
	delete person.firstName; // tidak berubah
	console.info(person);
}
*/

/*
{
	// Object Assign
	const target = { firstName: 'Yusril' };
	const source = {
		firstName: 'Adam',
		lastName: 'Arzaqi',
	};

	Object.assign(target, source);
	console.info(target);
	console.info(source);
}
*/

{
	// Object Property Name & Value
	const person = {
		firstName: 'Yusril',
		lastName: 'Arzaqi',
	};

	console.info(Object.values(person));
	console.info(Object.getOwnPropertyNames(person));
}
