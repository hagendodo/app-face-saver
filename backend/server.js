const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");
const { optionsCors, optionsTimeZone } = require("./options");
const users = require("./routes/userRoute");
const helpers = require("./routes/helperRoute");
const helperContacts = require("./routes/helperContactRoute");
const userHelpers = require("./routes/userHelperRoute");
const menus = require("./routes/menuRoute");
const historyMenus = require("./routes/historyMenuRoute");
const responses = require("./routes/responseRoute");
require('dotenv').config()

const app = express();
const server = http.createServer(app);

app.use(cors(optionsCors));
const io = socketIO(server, {
  cors: {
    optionsCors,
  },
});

app.use(express.json());
app.use("/face-api/models", express.static(__dirname + "/face-api/models"));

io.on("connection", (socket) => {
  let timestamp;
  let valName;
  socket.on("my event", (data) => {
    // try {
    //   timestamp = new Date().toLocaleString("en-US", optionsTimeZone);
    //   const maxVal = Math.max(
    //     data.data[0] ? data.data[0].expressions.idle : 0,
    //     data.data[0] ? data.data[0].expressions.menu_1 : 0,
    //     data.data[0] ? data.data[0].expressions.menu_2 : 0,
    //     data.data[0] ? data.data[0].expressions.menu_3 : 0
    //   );
    //   if (maxVal === data.data[0].expressions.menu_3) {
    //     valName = "menu 3";
    //   } else if (maxVal === data.data[0].expressions.menu_1) {
    //     valName = "menu 1";
    //   } else if (maxVal === data.data[0].expressions.menu_2) {
    //     valName = "menu 2";
    //   } else {
    //     valName = "idle";
    //   }
    //   if (maxVal !== 0 && valName !== "idle") {
    //     console.log(timestamp + " - " + valName);
    //   }
    // } catch (err) {}
  });
});

app.use("/user", users);
app.use("/helper", helpers);
app.use("/helper-contact", helperContacts);
app.use("/user-helper", userHelpers);
app.use("/menu", menus);
app.use("/history-menu", historyMenus);
app.use("/response", responses);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
