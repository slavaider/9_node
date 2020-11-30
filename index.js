// const Car = require('./car').CarClass
// require('./car')
// const bmw = new Car('bmw')
// bmw.logName()
//
// const _ = require('lodash')
// console.log(_.sum([1, 2]))
//
// const EventEmitter = require('events').EventEmitter
// const dispatcher = new EventEmitter()
// dispatcher.on('connect', (data) => {
//     console.log('Connect 1', data)
// })
// dispatcher.on('error', (err) => {
//     console.log('Error!')
// })
// dispatcher.on('connect', (data) => {
//     console.log('Connect 2', data)
// })
// dispatcher.emit('error', new Error('error'))
// dispatcher.emit('connect', {foo: '123'})
// dispatcher.emit('error', new Error('error'))
//
// const fs = require('fs')
// fs.writeFileSync('test.txt', 'Hello World123!')
// const data = fs.readFileSync('test.txt')
// console.log(data.toString())
// const data2 = fs.readFileSync('test.txt', encoding = "utf-8")
// console.log(data2)
//
// fs.writeFile('test1.txt', 'Hello world1', (error) => {
//     if (error) {
//         throw new Error(error.toString())
//     }
//     fs.rename('test1.txt', 'test2.txt', (error) => {
//         if (error) {
//             throw new Error(error.toString())
//         }
//         fs.readFile('test2.txt', encoding = 'utf-8', (error, data) => {
//             if (error) {
//                 throw new Error(error.toString())
//             }
//             console.log(data)
//         })
//     })
// })

// var opt  = require('optimist')
// const message = opt.argv.message
// console.log('hello ' + message)

function getPageNameByPath(path) {
    switch (path) {
        case "/":
        case "/home":
            return 'index'
        case "/about":
            return 'about'
        default:
            return '404'
    }
}

const http = require('http')
const url = require('url')
const fs = require('fs')
const server = new http.Server
server.listen(8090, 'localhost')

server.on('request', (req, res) => {
    const parsedUrl = url.parse(req.url, true)
    fs.readFile(`./templates/${getPageNameByPath(parsedUrl.pathname)}.html`, (error, data) => {
        if (error) {
            throw new Error(error.toString())
        }
        res.end(data)
    })
})


