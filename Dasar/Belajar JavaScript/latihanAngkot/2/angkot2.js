//Angkot beroperasi
var noAngkot = 1,
   angkotBeroperasi = 9,
   jmlAngkot=10;
while(noAngkot<=angkotBeroperasi){
   console.log("Angkot no : "+noAngkot+" beroperasi dengan baik.");
noAngkot++;
}

//Angkot tidak beroperasi
for(noAngkot = angkotBeroperasi+1;noAngkot <= jmlAngkot ;noAngkot++){
   console.log('Angkot no . '+noAngkot+'sedang tidak beroperasi.');
}