const express = require("express");
const APP_SERVER = express();

APP_SERVER.use("/api", require("./Routes/categorymasterroute"));
APP_SERVER.use("/api", require("./Routes/placemasterroute"));
APP_SERVER.use("/api", require("./Routes/citymasterroute"));
APP_SERVER.use("/api", require("./Routes/userloginroute"));

module.exports = APP_SERVER;
