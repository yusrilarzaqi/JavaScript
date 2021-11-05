var ulangi = confirm("Apakah anda mau mengulangi ?");
var counter = 0;

do{
	counter++;
	ulangi = confirm("Apakah anda mau mengulangi ?");
}while(ulangi)

document.write("Perulangan sudah dilakukan sebanyak "+counter+"x");