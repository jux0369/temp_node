const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url==='/'){
        res.end('Welcome to the home page')
    }
    else if(req.url==='/about'){
        res.end('You can read here the entire of the company.')
    }
    else{
        res.end(`<h1>Ooops!</h1><p>The content not found.</p> <a href='/'>return to the home page</a>`)
    }

})

server.listen(5000)
console.log('The server is listening on port: 5000')