// question A
// send request browser expecting response
// *******************************
const http = require("http");
const mekdiserver = http.createServer(function (req, res) {
    console.log(req);
});
mekdiserver.listen(1234, function () {
    console.log("listen 1234");
});
// ***********************************


// question B
// response in browser
// ********************************
const http = require("http");
const mekdiserver = http.createServer(function (req, res) {
    // console.log(req);
    res.writeHead(200);
    res.end("Request received and processed");
});
    
    mekdiserver.listen(1234, function () {
        // console.log("listen 1234");
    });
// ************************************


// question c
// return random number when request sent
const random = require("./myRandom");
const mekdiserver = http.createServer(function (req, res) {
    res.write(" " + random.random());
    res.end();
})
mekdiserver.listen(1234, function () {
    // console.log("listen 1234");
});

