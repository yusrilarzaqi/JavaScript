import { URL } from 'url';

const link = new URL('https://www.programmerzamannow.com/belajar?kelas=nodejs');

// Mengubah url
link.host = 'www.yusrilarzaqi.github.io';
link.searchParams.append('status', 'OK');


console.info(link.toString());
console.info(link.protocol);
console.info(link.host);
console.info(link.pathname);
console.info(link.searchParams);
console.info(link.password);
console.info(link.href);
console.info(link.origin);
console.info(link.hash);

