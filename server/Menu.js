const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const PORT = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "dbms",
});

app.post("/menu", (req, res) => {
  db.query("SELECT UnitPrice, FoodName FROM Menu", (err, result) => {
    if (err) {
      console.log({ err: err });
      res.send({ err: err });
    }
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send({ message: "No Menu Items" });
    }
  });
});

app.listen(PORT, () => {
  console.log("running server on port 3001");
});
