const express = require('express');
const app = express();
const port = 3000;

const expressip = require('express-ip');
const cors = require('cors');
const useragent = require('express-useragent');
const fs = require('fs');
const https = require('https');

app.use(cors());
app.use(expressip().getIpInfoMiddleware);
app.use(useragent.express());

app.get('/browserIfno', (req, res) => {
  res.send(req.useragent);
})

app.get('/ipInfo', (req, res) => {
  res.send(req.ipInfo);
})

https.createServer({
  key: fs.readFileSynce('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(port, function() {
  console.log("listening on localhost:3000");
})