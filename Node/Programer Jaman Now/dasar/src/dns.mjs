import {log} from 'console'
import dns from 'dns/promises'

// const hostname = 'www.programmerzamannow.com'
const hostname = 'www.yusrilarzaqi.github.io'

const address = await dns.lookup(hostname)
// const test = await dns.lookupService(address.address, 80)

log(address.address)
log(address.family)

// log(test)

// lookup("www.programmerzamannow.com", (err, ip) => {
//   if (err) console.error(err)
//   console.info(ip)
// })
