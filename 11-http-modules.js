const http = require('http')
// req incoming request
//response
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('wellcooom')
    }
    if (req.url === '/about') {
        res.end('hooollloooo')
    }
    res.write(`<h1>oops!</h1>
<p>we can,t semm</p>
<a href="/"> back home </a>`)
    res.end()


})
server.listen(5000)