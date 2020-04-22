const express = require('express');
const app = express();
const port = 3000;

const expressip = require('express-ip');
const cors = require('cors');
const useragent = require('express-useragent');

app.use(cors());
app.use(expressip().getIpInfoMiddleware);
app.use(useragent.express());

app.get('/browserIfno', (req, res) => {
  res.send(req.useragent);
})

app.get('/ipInfo', (req, res) => {
  res.send(req.ipInfo);
})

app.listen(port, () => console.log("listening on localhost:3000"));