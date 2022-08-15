export class MyException extends Error {}

export function callMe(name) {
	if (name === 'Yusril') {
		throw new MyException('Ups my exception happens');
	} else {
		return 'OK';
	}
}
