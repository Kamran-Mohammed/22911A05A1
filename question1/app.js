const express = require("express");
const numberRouter = require("./routes/numberRouter");

const app = express();

// app.use("/numbers/e", (req, res) => {
//   //HERE------
// });

app.use("/numbers", numberRouter);

module.exports = app;
