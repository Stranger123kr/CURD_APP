const express = require("express");
const server = express();
require("dotenv").config();
const cors = require("cors");
require("./DB/Connect");
// =================================

const router = require("./Routes/Route");

// =================================

server.use(cors());
server.use(express.json());
server.use("/", router);
// =================================

server.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
