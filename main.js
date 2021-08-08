const fs = require("fs");
let tekstas = "";

 
console.log("start");
 
function readfile(name, options) {
    return new Promise((resolve, reject) => {
        fs.readFile(name, options, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}

readfile("a.txt", {
    encoding: "utf8"
})
.then(
    data => {
        console.log("perskaiciau is failo 'a'");
        tekstas += data;
        return readfile("b.txt", {
            encoding: "utf8"
        });
    }
)
.catch(err => {
    console.log("nepaviko perskaityti is failo 'a'");
    console.log(err);
    return readfile("b.txt", {
        encoding: "utf8"
    });
})
.then(
    data => {
        console.log("perskaiciau is failo 'b'");
        tekstas += data;
        return readfile("c.txt", {
            encoding: "utf8"
        });
    }
)
.catch(err => {
    console.log("nepaviko perskaityti is failo 'b'");
    console.log(err);
    return readfile("c.txt", {
        encoding: "utf8"
    });
})
.then(
    data => {
        console.log("perskaiciau is failo 'c'");
        tekstas += data;
        console.log (tekstas);
    }
)
.catch(err => {
    console.log("nepaviko perskaityti is failo 'c'");
    console.log(err);
    console.log(tekstas);
    
})
 
console.log("finish");
