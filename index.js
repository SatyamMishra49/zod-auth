const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());
app.use(express.json());
app.post("/", function (req, res) {
  const userID = req.body.userID;
  const response = schema.parse(userID);
  if (!response.success) {
    res.status(411).json({
      msg: "input is invalid",
    });
  } else {
    res.send({
      response,
    });
  }
});

app.listen(3001);
