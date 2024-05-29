const {readFileSync, writeFileSync} = require('fs')

const file_1 = readFileSync("./content/1-file.txt","utf8");
const file_1_1 = readFileSync("./content/subcontent/1-1-file.txt","utf8")

writeFileSync(
    './content/2-file.txt', `This is the 2-file text from: ${file_1} ${file_1_1}`,
    {flag: 'a'}
)