// server.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();
var path = require('path')

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static(path.join(__dirname, '../public')));

// http://expressjs.com/en/starter/basic-routing.html
interface SendFileRequest {
  sendFile: (path: string) => void;
}
app.get("/", function (_:any, res: SendFileRequest) {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

// your first API endpoint... 
interface ApiHelloRequestJson {
  greeting: string;
}
type ApiHelloRequest = {
  json: (jsonObject: ApiHelloRequestJson) => void
}
app.get("/api/hello", function (_:any, res: ApiHelloRequest) {
  res.json({greeting: 'hello API'});
});

//PROJECT PART
type ApiWhoAmIRequest = {
  ip: string;
  get: (val: string) => string;
}
interface ApiWhoAmIResponse {
  json: ({ipaddress, language, software}: {ipaddress:string, language: string, software:string}) => void
}
app.get('/api/whoami', (req: ApiWhoAmIRequest, res: ApiWhoAmIResponse) => {
  res.json({
    ipaddress: req.ip,
    language: req.get('Accept-Language'),
    software: req.get('User-Agent')
  })
})
// listen for requests :)
const port = process.env.PORT
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});