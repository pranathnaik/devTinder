const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("hi from request handles");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000sfa");
});
