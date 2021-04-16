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

app.post("/createEmployee", (req, res) => {
  console.log(req.body);
  const id = req.body.id;
  const name = req.body.name;
  const password = req.body.password;
  const numoforders = req.body.noOfOrders;
  const date = req.body.date;

  db.query(
    "INSERT INTO staff (EmployeeId, StaffName, Password, NumberofOrders, CheckupDate) VALUES (?,?,?,?,?)",
    [id, name, password, numoforders, date],
    (err, result) => {
      if (err) {
        console.log({ err: err });
        res.send("Error Encountered");
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Cannot Insert Check Format Again" });
      }
    }
  );
});

app.listen(PORT, () => {
  console.log("running server on port ", PORT);
});
