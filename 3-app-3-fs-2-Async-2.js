const {readFile, writeFile} = require('fs')

readFile('./content/1-file.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const file_1 = result;
    console.log(`File_1 ${file_1}`);
    readFile('./content/subcontent/1-1-file.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        const file_1_1 = result;
        console.log(`File_1_1: ${file_1_1}`);
        writeFile('./content/2-file.txt', `The async result ${file_1}, ${file_1_1}`,
            (err, result)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log(`The result ${result}`);
            }
        )
    })
})