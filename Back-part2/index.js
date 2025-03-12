// PS C:\Users\SUDIP BHATTACHARYA\Desktop\WEB\P1> cd "C:\Users\SUDIP BHATTACHARYA\Desktop\BACKEND\Express"
// PS C:\Users\SUDIP BHATTACHARYA\Desktop\WEB\P1> node index.js
// npm i express
const express = require('express')
const app = express();

// console.log(app.dir);
// console.dir(app);

let port = 3000;// or 8080 for custom servers
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
})

app.use((req,res)=>{
    console.log("Resquest recieved");
})

// control + c
// localhost:3000
// http://127.0.0.1:5500/P1/index.html

// ports are the logical endpoints of a network connection that is used to exchange information between
// a web server and a web client

