// 2.1 Execution Context, Hoistring, Scope

// console.log(nama);
// var nama = 'Yusril Arzaqi';

// Creation phase pada Global Context
// nama var = undifined
// nama function = fn()
// hoisting

// execution Context
// console.log(sayHello);


// var nama = "Yusril";
// var umur = 18;

// function sayHello(){ 
//     console.log(`Hello, saya ${nama}, umur saya ${umur}`);
// }

// function membuat local Execution Context
// yang di dalamanya terdapat Creation dan execution phase
// window, arguments dan hoisting 

/*
var nama = 'Yusril Arzaqi';
// var username = 'yusrilarzaqi';

function cetakURL( ) {
    console.log(arguments);
    var githubURL = 'https://github.com/';
    return githubURL + arguments[0];
}


console.log(cetakURL('limans'));
*/ 
function a(){
    console.log('a');
    function b() {
        console.log('b');
        function c() {
            console.log('c');
        }
        c();
    }
    b();
}


a();