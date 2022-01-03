import fs from 'fs';
import zlib from 'zlib';


const source = fs.readFileSync('data.bin')
const result = zlib.gunzipSync(source)

fs.writeFileSync('data.txt', result);

