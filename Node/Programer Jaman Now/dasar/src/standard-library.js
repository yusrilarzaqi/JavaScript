import os from "os"

console.info(os.platform())
console.table(os.cpus())
console.table(os.networkInterfaces().wlan0)

// Error karena bukan js modules
