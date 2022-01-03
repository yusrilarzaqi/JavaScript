import readline from 'readline'
import process from 'process'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question(">> ", ans => {
  console.log(ans) 
  rl.close()
})


