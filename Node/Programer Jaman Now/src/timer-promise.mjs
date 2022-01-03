import timers from 'timers/promises';

// info(new Date().toLocaleTimeString())
// const name = await timers.setTimeout(6000, "Yusril");
// info(new Date().toLocaleTimeString())

// info(name)

for await (const startTime of timers.setInterval(1000, "ignored")) {
  console.info(`Start Timer at ${new Date().toLocaleTimeString()}`)
}






