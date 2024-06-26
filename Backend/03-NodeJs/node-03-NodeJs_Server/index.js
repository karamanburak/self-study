'use strict'
/*
     NODE JS SERVER
*/
console.log("hallo from index.js");

const { error } = require('node:console');
const http = require('node:http');

//const dotenv = require('dotenv').config()
// dotenv.config()

require('dotenv').config()
const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || '127.0.0.1'


// http.createServer((parametre1, param2)=>{

//     console.log("server running...");

// })

//1. param request, 2. param response

/*
const app = http.createServer((req, res) => {
    res.end("server runned")

     // res.end("bye") // birden fazla res.end kullanilmaz hata verir!
     // console.log(req.method);
     // console.log("server running...");

})
// app.listen(8000)
// app.listen(PORT,()=>console.log("server runned http://127.0.0.1"))
app.listen(PORT,()=>console.log(`server runned http://${HOST}`))
*/

            //* SERVER  *\\

const app = http.createServer((req, res) => {

    /*
    "/" home page
    "/FS" fullstack page
    "/DS" data science page
    "/CW/api" api page
    */

    //! 1. yol if method 
    // if (req.url == '/') {
    //     res.end('<h1>Home Page</h1>')
    // } else if (req.url == '/DS') {
    //     res.end('<h1>Data Science Page</h1>')
    // } else if (req.url == '/FS') {
    //     res.end('<h1>Full Stack Page</h1>')
    // } else if (req.url == 'CW/api') {
    //     res.end('<h1>Welcome cw Api</h1>')
    // } else {
    //     res.end("404 - page not found");
    // }


    //! 2. yol switch case method 
    //     if (!res) {
    //         throw new error("error")
    //     } else {
    //         switch (req.url) {
    //             case "/":
    //                 res.end('<h1>Home Page</h1>');
    //                 break;
    //             case "/DS":
    //                 res.end('<h1>Data Science Page</h1>');
    //                 break;
    //             case "/FS":
    //                 res.end('<h1>Full Stack Page</h1>');
    //                 break;
    //             case "/CW/api":
    //                 res.end('<h1>Welcome CW Api</h1>');
    //                 break;
    //             default:
    //                 res.end("404 - page not found");
    //         }
    //     }

    //     // res.end('<h1>Server runned</h1>')


    //! with statuscode
    // if(req.url=='/' && req.method=='GET'){
    if (req.url == '/') {
        if (req.method == 'GET') { // default method get
            res.statusCode = 200
            res.end('welcome CW')
        } else {
            res.statusCode = 403  // default 200 OK
            res.end('you can not use this method ')
        }

    } else if (req.url == '/DS') {
        const myObj = {
            username: "myUsername",
            email: "john@doe.com"
        }

        // res.end('welcome DS')
        res.end(JSON.stringify(myObj))

    } else if (req.url == '/FS') {
        res.writeHead(200, 'Basarili', { 'myHeader1': 'comment1', "myHeader2": "comment2" })

        res.write('Welcome ')
        res.write('Full Stack ')
        res.write('Path ')

        res.end()

    } else if (req.url == '/CW/api') {

        res.end('welcome api page')

    } else {
        res.statusCode = 404
        res.statusMessage = "aradiginiz sayfa yok!"
        // res.mymessage
        res.end('<h1> no page </h1> ')
    }

})

//! zorunlu olan sadece port parametresi
app.listen(PORT, () => console.log(`server runned http://${HOST}:${PORT}`))