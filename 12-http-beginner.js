const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our HomePage')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    if(req.url === '/contact'){
        res.end('Contact us on: ')
    }
    res.end(
        `<h1>Ooops!</h1>
        <p>We can't seem to find this page</p>`)

})

server.listen(5000) 