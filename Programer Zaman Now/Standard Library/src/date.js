/*
{
	const date1 = new Date();
	console.info(date1);

	const date2 = new Date(2022, 08, 19);
	console.info(date2);

	const date3 = new Date(2022, 08, 19, 1, 0, 0, 0);
	console.info(date3);

	const date4 = new Date(1660903108);
	console.info(date4);
}
*/

/*
{
	const timestamp = Date.now();
	console.info(timestamp);

	const dateUnix = new Date(timestamp);
	console.info(dateUnix);

	console.info(dateUnix.getTime());
}
*/

/*
{
	// Fomat Date  YYYY-MM-DDTHH:mm:ss.sssZ

	const date = new Date('2022-08-19T07:00:00.000Z');
	console.info(date.getTime());
}
*/

{
	const date = new Date();
	date.setFullYear(2022);

	console.info(date.getFullYear());
	console.info(date.getMonth());
	console.info(date.getDate());
	console.info(date.getHours());
	console.info(date.getMinutes());
	console.info(date.getSeconds());
	console.info(date.getMilliseconds());
	console.info(date.getTimezoneOffset());
}
