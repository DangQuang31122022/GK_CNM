const express = require('express');
const aws = require('aws-sdk');
const multer = require('multer');
require('dotenv').config();
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json({Extended: false}));
app.use(express.static('./view'));

app.set('view engine', 'ejs');
app.set('views', './view');

app.get('/',async (req, res) => {
    const data = [];
    res.render('index', { data });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




