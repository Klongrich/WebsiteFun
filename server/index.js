const express = require('express');
const app = express();
const port = 3000;

const expressip = require('express-ip');
const cors = require('cors');

app.use(cors());
app.use(expressip().getIpInfoMiddleware);

app.get('/', (req, res) => {
  const ipInfo = req.ipInfo;

  var city = ipInfo.city;

  var message = `Broswing from ${city}, ${ipInfo.country}`;
  res.send(message);
})

app.listen(port, () => console.log("listening on localhost:3000"));