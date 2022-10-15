/*
{
	// Kode : RegExp
	const regex1 = /[a]/;
	const regex2 = new RegExp('[a]');
	const regex3 = new RegExp(/[a]/);

	console.info(regex1);
	console.info(regex2);
	console.info(regex3);
}
*/
/*
{
	// Kode : RegExp Instance Method
	const name = 'Yusril Arzaqi';
	const regex = /Yusril/;

	const result = regex.exec(name);
	console.info(result);

	const test = regex.test(name);
	console.info(test);
}
*/
/*
{
	const name = 'Yusril\nArzaqi\nyusril';
	const regex1 = /yusril/g;
	const regex2 = /Arzaqi/gi;

	let result;
	while ((result = regex1.exec(name)) !== null) console.info(result);

	while ((result = regex2.exec(name)) !== null) console.info(result);
}
*/

/* {
	const regex = /s[auieo]/gi;
	const text =
		'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.';

	const data = [];
	while ((result = regex.exec(text)) !== null) data.push(result);

	data.map((data) => console.info(data));
} */

/* {
	const regex = /s[aiueo]/gi;
	const text =
		'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.';

	while ((result = regex.exec(text)) !== null) {
		console.info(result);
	}
} */

{
	const string =
		'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.';

	console.info(string.match(/s[aiueo]/gi));
	console.info(string.search(/s[aiueo]/gi));

	// di replace semua karena regex
	console.info(string.replace(/s[aiueo]/gi), 'XXXX');
	console.info(string.replaceAll(/s[aiueo]/gi), 'XXXX');
}
console.info(string.split(/e/gi));
