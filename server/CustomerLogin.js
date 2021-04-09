const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "dbms",
});

app.post("/user-login", (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM Customer WHERE email= ? AND password= ?",
    [email, password],
    (err, result) => {
      if (err) {
        console.log({ err: err });
        res.send("Not a User");
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong User Details" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("running server on port 3001");
});
