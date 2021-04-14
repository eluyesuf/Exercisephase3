const express = require("express");
const server = express();
server.listen(4567);
server.use(express.static("./static/apple"));