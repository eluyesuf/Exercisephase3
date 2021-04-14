// Question d
const http = require("http");
const url = require("url");
const fs = require("fs");

// // Install mime-types to get access called lookup
const mimetypelookup = require("mime-types").lookup;

// // Create the Server Object
const appl = http.createServer(function (req, res) {
    const parsedUrl = url.parse(req.url, true);
    //   console.log(parsedUrl);

// // Requested file name
    let filePath = parsedUrl.path;
      var requestedFile = __dirname + "/static/apple-responsiveToggle/" + filePath;
  const readFile = fs.readFile(requestedFile, function (err, content) {
    if (err) {
      res.writeHead(404);
      res.end("page can not found");
    } else {
      let mime = mimetypelookup(filePath);
      res.writeHead(200, { "content-type": mime });
      res.end(content);
    }
  });
});
// // Call the listen method to tell the server which port to listen to
appl.listen(9000, function () {
  console.log("Listening to port 9000");
});