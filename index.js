require('dotenv').config();

const express = require('express');
const app = express();
const router = require('./routers');
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

const defaultViewsPath = __dirname + '/views';
const defaultAssetsPath = __dirname + '/public';

app.set('views', defaultViewsPath);
app.use(express.static(defaultAssetsPath));

app.use(router);

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});