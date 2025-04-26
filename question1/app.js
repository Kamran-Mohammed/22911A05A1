const express = require("express");
const numberRouter = require("./routes/numberRouter");

const app = express();

// app.use("/numbers/e", (req, res) => {
//   //HERE------
// });


//sufiyan was collabrated and now checking is it working or not
app.use("/numbers", numberRouter);

module.exports = app;
