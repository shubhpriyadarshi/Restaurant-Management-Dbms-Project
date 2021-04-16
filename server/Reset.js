const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const PORT = 3005;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "dbms",
});

app.post("/resetnoOfOrders", (req, res) => {
  db.query("UPDATE staff SET NumberofOrders = 0", (err, result) => {
    if (err) {
      console.log({ err: err });
      res.send("Error Encountered");
    }
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send({ message: "Reset Successful" });
    }
  });
});

app.listen(PORT, () => {
  console.log("running server on port ", PORT);
});
