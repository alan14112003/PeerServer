const express = require("express");
const { ExpressPeerServer } = require("peer");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/", (req, res, next) =>
  res.send("Chào mọi người, đây là server peer của Alan!")
);

const server = app.listen(9000);

const peerServer = ExpressPeerServer(server, {
  debug: true,
});

app.use("/call", peerServer);
