//const {default: isEmail} = require("validator/lib/isEmail");

//const validator = require('validator');

//const myEmail = 'yusrilarzaqi@gmail.co.id';
//const myHp = '088804051691';

//console.log(validator.isEmail(myEmail));
//console.log(validator.isNumeric(myHp));
//


//const {underline} = require('chalk');
const chalk = require('chalk');
const {log} = require('console');
const os = require('os');

//console.log(chalk.black.bgBlue.underline("hello world"));
const myCpu = os.cpus()[0].model;
const myIp = os.networkInterfaces().wlan0[0].address;
const pesan = chalk`lorem,{bgBlue.white.italic ipsum dolor sit} {bgRed.black amet} constecteur {bgWhite.black.italic adipisicilng} elit. ab, rem `

log("my CPU is : "+ chalk.black.bgGreen(myCpu));
log("my ip address is : " + chalk.black.bgRed(myIp));
log(pesan);



