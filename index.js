const express = require('express');
const admin = require('./admin.js');

const app = express();
app.use(express.json());
app.listen(1801);
app.use('/admin', admin);
