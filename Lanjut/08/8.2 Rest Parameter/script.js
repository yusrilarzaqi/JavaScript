// Rest Parameter

//function myFunc(...myArgs) {
  //return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
  //return myArgs;
  //return Array.from(arguments);
  //return [...arguments];
//}
//console.log(myFunc(1, 2, 3, 4, 5, 6));


//function jumlahkan(...values) {
  //let total = 0;
  //for (const a of values) {
    //total += a;
  //}
  //
  //return values.reduce((a, b) => a + b);
//}

//console.log(jumlahkan(1, 2, 3, 4, 5, 6 ));

// Array destructuring
//const kelompok1 = ['Yusril', 'Bimo', 'Dimas', 'Adam', "Bukhori"];
//const [ketua, wakil, ...angota] = kelompok1;

//console.log(ketua);
//console.log(wakil);

// Object destructuring
/*
const team = {
  pm: 'Yusril',
  frontEnd1: 'Adam',
  frontEnd2: "Dimas",
  backEnd  : "Bimo",
  ux: "Bukhori",
  devOps   : "Mukhlis"
};
*/

//const {pm, ...myTeam} = team;

//console.log(myTeam);

// Filter

//function filterBy(type, ...values) {
  //return values.filter(v => typeof v === type);
//}

//console.log(filterBy('boolean', 1, 2, true, 'Yusril', 4, 5));

