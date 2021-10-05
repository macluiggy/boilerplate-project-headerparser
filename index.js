// server.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();
var requestIp = require('request-ip');

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static(__dirname + '/public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

//PROJECT PART

app.get('/api/whoami', (req, res) => {
  //const clientIp = requestIp.getClientIp(req);
  //console.log(clientIp);
  res.json({
    ipaddress: req.ip,
    language: 'javascript'
  })
})
// listen for requests :)
const port = process.env.PORT
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});