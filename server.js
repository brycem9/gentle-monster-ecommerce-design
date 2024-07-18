// This is your test secret API key.
const stripe = require('stripe')('sk_test_51O2K9CJLILYwU6kbko8KBS5jpHrOWLktgLNknBKtel7iYUSvxaq7RMLtr4LzttI7Wg7n6tLeDEBGIANyLzsh8iXf003uwP0XIF');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:5501';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1PdRzaJLILYwU6kbSDLjFX6H',
        quantity: 1,
        adjustable_quantity: {
          enabled: true,
          minimum: 1,
          maximum: 10,
        },
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `http://127.0.0.1:5501/optical24.html`,
  });

  res.redirect(303, session.url);
});

app.listen(5501, () => console.log('Running on port 5501'));