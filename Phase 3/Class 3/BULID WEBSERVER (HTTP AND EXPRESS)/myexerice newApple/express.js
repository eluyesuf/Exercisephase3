// using express module
const express = require("express");
const server = express();
server.listen(3456);
server.use(express.static("./static/apple-responsiveToggle"));