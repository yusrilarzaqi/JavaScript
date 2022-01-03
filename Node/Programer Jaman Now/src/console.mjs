import {Console} from 'console';
import fs from 'fs';

const logFile = fs.createWriteStream('application.log')

const log = new Console({
  stdout: logFile,
  stderr: logFile
});

const person = {
  firstName: "Yusril",
  lastName : "Arzaqi"
}


log.info("Hello World")
log.error("404")

log.table(person);



