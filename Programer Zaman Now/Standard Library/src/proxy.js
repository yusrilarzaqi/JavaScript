{
	const target = {}

	const handler = {
		get: (target, property) => target[property],
		set: (target, property, value) => {
			target[property] = value
		},
	}

	const proxy = new Proxy(target, handler)
	proxy.firstName = 'Yusril'
	proxy.lastName = 'Arzaqi'

	console.info(proxy.firstName)
	console.info(proxy.lastName)
}
