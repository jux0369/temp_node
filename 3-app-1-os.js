const os = require('os')

//info about current user
const user = os.userInfo();

//system uptime in seconds
console.log(`System Uptiem is ${os.uptime() } seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totatoMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)