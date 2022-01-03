import {readFileSync, writeFileSync} from 'fs';
import zlib from 'zlib';

const source = readFileSync('tmp.txt');
const result = zlib.gzipSync(source);

writeFileSync('data.bin', result);

