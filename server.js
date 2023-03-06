const http = require('http')
const fs = require('fs')
const lo = require('lodash')
// Create Our Server
const server = http.createServer((req, res)=>{
    // lodach
    const num = lo.random(0 ,20)
    console.log(num)

    const greet = lo.once(()=>{
        console.log('Hello')
    })

    greet()
    // set header content type
    res.setHeader('Content-Type', 'text/html')

    let path = './views/'
    switch(req.url){
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break
        case '/about-us':
            path += 'about.html'
            res.statusCode = 301
            res.setHeader('Location', '/about')
            res.end()
            break            
        default:
            path += '404.html' 
            res.statusCode = 404
            break   
    }

    //send an html file
    fs.readFile(path, (err,data)=>{
        if(err){
            console.log(err)
            res.end()
        }else{
            //res.write(data)
            res.end(data)
        }
    })

})

// Listen Between  Server & Browser 
// localhost:3000
server.listen(3000, 'localhost',()=>{  // Default value is Localhost
    console.log('listening for request on port 3000')
}) 






