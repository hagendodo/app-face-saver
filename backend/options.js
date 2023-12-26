const optionsTimeZone = {
  timeZone: "Asia/Jakarta",
  hour12: false,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

const optionsCors = {
  origin: "http://localhost:3000",
  methods: ["*"],
  credentials: true,
};

module.exports = { optionsTimeZone, optionsCors };
