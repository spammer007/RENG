const express = require('express');

const app = express();

app.get('/', (req, res) => res.send({ data: [], status: { code: 1 } }));

app.listen(1801);