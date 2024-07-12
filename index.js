const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){res.end("Welcome to my server")}
    if (req.url === '/about'){res.end("this is a brief history")}
    res.end(`<h1>Ooops</h1>
        <p>The resource youre looking for cant be found</p>
        <a href='/'>go home</a>`
    )
})

server.listen(5300);

