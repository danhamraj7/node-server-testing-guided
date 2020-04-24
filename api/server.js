const express = require("express");

const hobbitsRouter = require("../hobbits/hobbitsRouter");

const server = express();

server.use(express.json());

server.use("/api/hobbits", hobbitsRouter);

server.get("/", (req, res) => {
  res.send("server is up and running!");
});

// server.get("/hobbits", (req, res) => {
//   Hobbits.getAll()
//     .then(hobbits => {
//       res.status(200).json(hobbits);
//     })
//     .catch(error => {
//       res.status(500).json(error);
//     });
// });

module.exports = server;
