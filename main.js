"use strict";

const fs = require("fs");
let tekstas, nuskaitimas;

 
console.log("start");
 
nuskaitimas = fs.readFileSync("a.txt", "utf8"); 
tekstas += nuskaitimas;

nuskaitimas = fs.readFileSync("b.txt", "utf8"); 
tekstas += nuskaitimas;

nuskaitimas = fs.readFileSync("c.txt", "utf8"); 
tekstas += nuskaitimas;

console.log(tekstas);

console.log("finish");
