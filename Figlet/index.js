// cd "C:\Users\SUDIP BHATTACHARYA\Desktop\BACKEND\Figlet"
// index.js
// callback and sync api
var figlet = require("figlet");

figlet("Arindom", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

// npm i figlet
