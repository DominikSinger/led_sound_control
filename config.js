module.exports = {
  port: process.env.PORT || 8080,
  db: {
    host: process.env.DB_HOST || "127.0.0.1",
    user: process.env.DB_USER || "pi",
    password: process.env.DB_PASS || "",
    database: process.env.DB_NAME || "nativity",
    connectionLimit: 5,
    connectTimeout: 20000,
    multipleStatements: true
  },
  gpio: {
    pumpPin: 10,
    speechTriggerPin: 17
  },
  ws2812: {
    enabled: true,
    count: 1000,
    dma: 10,
    gpioPin: 12,
    brightness: 64
  },
  audio: {
    musicVolume: 75,
    duckedVolume: 40,
    device: "default"
  },
  calendar: {
    cycleSeconds: 300,
    phaseDurations: {
      day: 100,
      dayToNight: 50,
      night: 100,
      nightToDay: 50
    }
  }
};
