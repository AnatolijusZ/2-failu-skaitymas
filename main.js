const fs = require("fs");
let tekstas;
 
console.log("start");
 
const myPromise = new Promise((resolve, reject) => {
    fs.readFile("a.txt", (err, data) => {
        if (err) {
        console.log("Klaida", err);
        return;
        }
        console.log("" + data);
    });
    resolve("Done");
    Promise.then
result => tekstas += data;
});



 
fs.readFile("b.txt", (err, data) => {
 if (err) {
 console.log("Klaida", err);
 return;
 }
 console.log("" + data);
});

fs.readFile("c.txt", (err, data) => {
    if (err) {
    console.log("Klaida", err);
    return;
    }
    console.log("" + data);
   });
 
console.log("finish");
console.log(tekstas);