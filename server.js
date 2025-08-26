const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const WebSocket = require('ws');
const config = require('./config');
const db = require('./services/db');
const scheduler = require('./services/scheduler');
const scenarios = require('./services/scenarios');
const ws2812 = require('./services/ws2812');
const gpio = require('./services/gpio');
const audio = require('./services/audio');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', require('./routes/api'));

// Health
app.get('/health', (_, res) => res.json({ ok: true }));

wss.on('connection', (socket) => {
  socket.send(JSON.stringify({ type: 'hello', msg: 'WS connected' }));
  scheduler.pushStatus = (status) => {
    if (socket.readyState === 1) {
      socket.send(JSON.stringify({ type: 'status', status }));
    }
  };
});

(async () => {
  await db.init();
  await scheduler.init({ db, scenarios, ws2812, gpio, audio });
  server.listen(config.port, () => console.log('Server listening on', config.port));
})();
