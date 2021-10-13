const express = require("express");
require("../src/db/conncetion");

const carpark = require("../src/models/carschema");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.post("/cars", async (req, res) => {
  try {
    const addingcarrecord = new carpark(req.body);
    console.log(req.body);
    const insercar = await addingcarrecord.save();
    res.send(insercar);
  } catch (e) {
    res.send(e);
  }
});

app.get("/", async (req, res) => {
  res.send("hello jayesh");
});

app.listen(port, () => {
  console.log(`conncetion is on ${port}`);
});
