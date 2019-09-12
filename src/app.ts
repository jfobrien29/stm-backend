import * as bodyParser from 'body-parser';
import * as admin from 'firebase-admin';
import { config } from './config';

const express = require('express');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Parse service account from env
const serviceAccount = JSON.parse(config.FIREBASE.SERVICE_ACCOUNT);
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://skys-the-minute.firebaseio.com"
});

require('./stm/StmRoutes')(app);

app.get('/status', (req, res) => res.status(200).json({message: `Application is running on ${config.PORT} in ${config.ENV}`}));

app.use((req, res, next) => {
    res.status(404)
        .json({error: 'Sorry! Endpoint not found'});
    next();
});

app.use((err, req, res, next) => {
    const sc = err.status || 500;
    res.status(sc);
});

export { app };
