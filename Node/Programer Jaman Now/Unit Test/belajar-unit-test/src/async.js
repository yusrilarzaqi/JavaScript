export const sayHelloAysnc = (name) => {
	return new Promise((resolve, reject) => {
		setTimeout(
			() => [name ? resolve(`Hello ${name}`) : reject('Name is empty')],
			1000
		);
	});
};
