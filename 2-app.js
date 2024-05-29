const names = require('./2-app-1-module')
const sayHello = require("./2-app-2-module")
const data = require('./2-app-3-module')
require("./2-app-4-module")

console.log(data)
sayHello(names.esther);
sayHello(names.nick);
sayHello(names.jack);