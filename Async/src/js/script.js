function getProductsUrl(keyword) {
	return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProducts(keyword) {
	// Code Promise Here!
	const promise = new Promise((resolve, reject) => {
			// code async
			const ajax = new XMLHttpRequest();
			ajax.onload = () => {
					if (ajax.status === 200) {
							const data = JSON.parse(ajax.responseText);
							resolve(data);
					} else {
							reject(Error("Gagal mengambil data products"));
					}
			}
			const url = getProductsUrl(keyword);
			ajax.open("GET", url);
			ajax.send();
	});
	return promise;
}

function clearProducts() {
	const productUl = document.getElementById("products");
	productUl.textContent = "";
}

function displayProducts(data) {
	data.data.products.forEach(product => displayProduct(product));
}

function displayProduct(product) {
	const productLi = document.createElement("li");
	productLi.textContent = product.name;

	const productUl = document.getElementById("products");
	productUl.appendChild(productLi);
}

function buttonClick() {
	const promise1 = getProducts(document.getElementById("keyword").value);
	const promise2 = getProducts(document.getElementById("keyword").value);
	const promise3 = getProducts(document.getElementById("keyword").value);
	
	Promise.all([promise1, promise2, promise3])
		.then(values => {
			return values.map(value => value.data.products);
		})
		.then(values => {
			clearProducts();
			values.forEach(value => {
				value.forEach(products => {
					displayProduct(products)
				})
			})
		})
		.catch(err => {
			console.error(`ERROR: ${err.message}`);
		})
		.finally(() => {
			console.log("Selesai Memproses Promise");
		})
};

// 	const promise = getProducts(document.getElementById("keyword").value);
// 	promise
// 			.then(values => {
// 				return values.data.products
// 			})
// 			.then(products => {
// 				products.forEach(product => {
// 					displayProduct(product);
// 				});
// 			})
// 			.catch(err => {
// 				console.error(Error(`Error : ${err}`));
// 			})
// 			.finally(() => {
// 				console.info("Selesai memproses data");
// 			});


