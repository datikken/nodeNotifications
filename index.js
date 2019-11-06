const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
      app.use(bodyParser.json());

//set static
      app.use(express.static(path.join(__dirname, 'client')));

const publicVapidKey = 'BLBELF8rQoaKJDi5onpACUzEqhUrK7vT4S6i2EnEV0R7XMwAUfWfUHYJe_Hvib7UdY_ssroEjWkux_YK5jT-bEI';
const privateVapidKey = 'CLNxoZySQb6IEPGt1tTOxRIf2cCEq6YBUG2_UAoCgtg';

webpush.setVapidDetails('mailto:tikken23@gmail.com', publicVapidKey, privateVapidKey);

app.post('/subscribe', (req, res) => {
    const subscription = req.body;
    //status
    res.status(201).json({});
    //payload
    const payload = JSON.stringify({title: 'push test'});
    //object to notifi
    webpush.sendNotification(subscription, payload).catch(err => console.log(err));
});

const port = 5000;

app.listen(port, () => console.log('Server is running on 5000'));