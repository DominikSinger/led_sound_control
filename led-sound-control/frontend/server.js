const express = require('express');
const app = express();
const index = require('./routes/index');
app.use('/', index);
app.listen(3000, () => console.log('Webserver running on :3000'));
