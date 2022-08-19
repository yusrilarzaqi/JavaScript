/*
{
	// Array Loop
	const array = [
		'Yusril Arzaqi',
		'Adam Saputra',
		'Bimo Alamsyah',
		'Dimas Rafif',
	];

	array.forEach(function (v, i) {
		console.info(`${i} : ${v}`);
	});

	array.forEach((v, i) => console.info(`${i} : ${v}`));

	array.forEach((v) => console.info(v));
}
  */

/*
{
	const queue = [];
	queue.push('Yusril Arzaqi');
	queue.push('Adam Saputra');
	queue.push('Bimo Alamsyah');

	console.info(queue.shift());
	console.info(queue.shift());
	console.info(queue.shift());
}
*/

/*
{
	// Array Stack
	const stack = [];

	stack.push('Yusril Arzaqi');
	stack.push('Adam Saputra');
	stack.push('Bimo Alamsyah');

	console.info(stack.pop());
	console.info(stack.pop());
	console.info(stack.pop());

}
*/
/*
 * Bimo Alamsyah
 * Adam Saputra
 * Yusril Arzaqi
 */

/*
{
	// Array Search
	const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

	console.info(source.find((v) => v > 3)); // 4
	console.info(source.findIndex((v) => v > 3)); // 3
	console.info(source.includes(7)); // false
	console.info(source.indexOf(5)); // 4
	console.info(source.lastIndexOf(5)); // 9
}
*/

/*
{
	// Array Filter
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	console.info(numbers.filter((value) => value % 2 == 1)); // ganjil
	console.info(numbers.filter((value) => value % 2 == 0)); // genap
}
*/

{
	// Array Transform
	const names = 'Yusril Arzaqi'.split(' ');
	console.info(names.map((value) => value.toUpperCase())); // menjadikan toUpperCase
	console.info(names.reduce((before, value) => before + ' ' + value)); // mengabungkan array to string
	console.info(names.reduceRight((before, value) => before + ' ' + value)); // mengabungkan array to string terbalik

	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	console.info(numbers.reduce((result, value) => result + value)); // 55
	console.info(numbers.reduceRight((result, value) => result + value)); // 55
}
