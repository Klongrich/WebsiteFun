const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded( {extended: true }));
app.use(bodyParser.json());
app.use(cors());



// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

app.get('/secret', async (req, res) => {
  
    const intent = await stripe.paymentIntents.create({
        amount: 107144,
        currency: 'usd',
        // Verify your integration in this guide by including this parameter
        metadata: {integration_check: 'accept_a_payment'},
    });

  // ... Fetch or create the PaymentIntent
  res.json({client_secret: intent.client_secret});
});

const { createProxyMiddleware } = require('http-proxy-middleware');

app.use('/api', createProxyMiddleware({ 
    target: 'http://localhost:3020/', //original url
    changeOrigin: true, 
    //secure: false,
    onProxyRes: function (proxyRes, req, res) {
       proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));

app.listen(3020, () => {
  console.log('Running on port 3020');
});