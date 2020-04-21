const express = require('express');
const app = express();
const port = 3000;

const expressip = require('express-ip');
const cors = require('cors');
const useragent = require('express-useragent');

app.use(cors());
app.use(expressip().getIpInfoMiddleware);
app.use(useragent.express());

app.get('/', (req, res) => {
  const ipInfo = req.ipInfo;
  const browserInfo = req.useragent;

  var browser = `On: ${browserInfo.browser}, Version: ${browserInfo.version}, OS: ${browserInfo.os}`;
  var message = `Broswing from ${ipInfo.city}, ${ipInfo.country} ${browser}`;

  res.send(message);
})

app.listen(port, () => console.log("listening on localhost:3000"));