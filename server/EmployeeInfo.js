const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const PORT = 3002;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "dbms",
});

app.get("/employeesInfo", (req, res) => {
  db.query("SELECT * FROM staff", (err, result) => {
    if (err) {
      console.log({ err: err });
      res.send("Error Encountered");
    }
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send({ message: "Cannot Insert Check Format Again" });
    }
  });
});

app.post("/employeeInfo", (req, res) => {
  console.log(req.body);
  const name = req.body.name;

  db.query(
    "SELECT * FROM Staff WHERE StaffName= ?",
    "Vedang",
    (err, result) => {
      if (err) {
        console.log({ err: err });
        res.send("Error Occured");
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Not a Staff" });
      }
    }
  );
});

app.listen(PORT, () => {
  console.log("running server on port ", PORT);
});
