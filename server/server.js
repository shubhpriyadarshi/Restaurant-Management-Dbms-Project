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

app.post("/create-user", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const userId = req.body.phonenumber;
  const password = req.body.password;
  const email = req.body.email;
  const phonenumber = req.body.phonenumber;

  db.query(
    "INSERT INTO customer (CustomerId, Name, Email, Password, PhoneNumber) VALUES (?,?,?,?,?)",
    [userId, name, email, password, phonenumber],
    (err, result) => {
      if (err) {
        console.log({ err: err });
        res.send("Error Encountered");
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Cannot Insert Check Details Again" });
      }
    }
  );
});

app.post("/create-order", (req, res) => {
  console.log(req.body);
  const customerId = req.body.customerId;
  const orderId = req.body.orderId;
  const employeeId = req.body.employeeId;
  const email = req.body.email;
  const foodDetails = req.body.foodDetails;
  const date = req.body.date;
  /* const f0 = req.body.f0;
  const f1 = req.body.f1;
  const f2 = req.body.f2;
  const f3 = req.body.f3;
  const f4 = req.body.f4;
  const f5 = req.body.f5;
  const a0 = req.body.a0;
  const a1 = req.body.a1;
  const a2 = req.body.a2;
  const a3 = req.body.a3;
  const a4 = req.body.a4;
  const a5 = req.body.a5; */

  db.query(
    "INSERT INTO orderinfo VALUES (?,?,?,?)",
    [orderId, email, date, employeeId],
    (err, result) => {
      if (err) {
        console.log({ err: err });
        res.send("Error Encountered");
      } else {
        res.send(result);
      }
    }
  );

  db.query(
    "INSERT INTO orderdetails (OrderId, FoodId, Quantity) VALUES ?",
    [
      foodDetails.map((foodDetail) => [
        orderId,
        String(foodDetail.FoodId),
        String(foodDetail.qty),
      ]),
    ],
    (err, result) => {
      if (err) {
        console.log({ err: err });
        res.send("Error Encountered");
      } else {
        res.send("All Values added successfully using map");
      }
    }
  );
});

// TODO: Do This
/* db.query(
    "INSERT INTO orderdetails (OrderId, FoodId, Quantity) VALUES (?,?,?),(?,?,?),(?,?,?),(?,?,?)",
    [
      orderId,
      String(a0),
      String(f0),
      orderId,
      String(a1),
      String(f1),
      orderId,
      String(a2),
      String(f2),
      orderId,
      String(a3),
      String(f3),
    ],
    (err, result) => {
      if (err) {
        console.log({ err: err });
        res.send("Error Encountered");
      } else {
        res.send("done");
      }
    }
  );*/

/* db.query(
    "INSERT INTO orderdetails (OrderId, FoodId, Quantity) VALUES (?,?,?)",
    [orderId, String(a1), String(f1)],
    (err, result) => {
      if (err) {
        console.log({ err: err });
        res.send("Error Encountered");
      } else {
        res.send("done");
      }
    }
  );*/

/* app.post("/create-order-2", (req, res) => {
  console.log(req.body);
  const orderId = req.body.orderId;
  const email = req.body.email; 
  const f2 = req.body.f2;
  const f3 = req.body.f3;
  const f4 = req.body.f4;
  const a2 = req.body.a2;
  const a3 = req.body.a3;
  const a4 = req.body.a4;

  db.query(
    "INSERT INTO orderdetails (OrderId, FoodId, Quantity) VALUES (?,?,?)",
    [orderId, String(a2), String(f2)],
    (err, result) => {
      if (err) {
        console.log({ err: err });
        res.send("Error Encountered");
      } else {
        res.send("done");
      }
    }
  );*/

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

app.post("/menu", (req, res) => {
  db.query("SELECT * FROM Menu", (err, result) => {
    if (err) {
      console.log({ err: err });
      res.send({ err: err });
    }
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send({ message: "No Menu foodDetails" });
    }
  });
});

app.post("/place-order", (req, res) => {
  db.query("SELECT * FROM Menu", (err, result) => {
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

app.post("/updateEmployee", (req, res) => {
  console.log(req.body);
  const id = req.body.id;
  const noOfOrders = req.body.noOfOrders;

  db.query(
    "UPDATE staff SET NumberofOrders = ? WHERE EmployeeId = ?",
    [noOfOrders, id],
    (err, result) => {
      if (err) {
        console.log({ err: err });
        res.send({ err: err });
        res.send("Error Encountered");
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Cannot Update Value Try Again Correctly" });
      }
    }
  );
});

app.get("/managerInfo", (req, res) => {
  db.query("SELECT * FROM Manager", (err, result) => {
    if (err) {
      console.log({ err: err });
      res.send("Some error occured while connecting to database");
    }
    if (result.length > 0) {
      res.send(result);
      res.send({ message: "Manager Approved" });
    } else {
      res.send({ message: "No Manager Present" });
    }
  });
});

app.post("/manager", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const password = req.body.password;

  db.query(
    "SELECT * FROM Manager WHERE ManagerName= ? AND password= ?",
    [name, password],
    (err, result) => {
      if (err) {
        res.send("Wrong Manager Details");
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong Manager Details" });
      }
    }
  );
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

app.post("/createEmployee", (req, res) => {
  console.log(req.body);
  const id = req.body.id;
  const name = req.body.name;
  const password = req.body.password;
  const noOfOrders = req.body.noOfOrders;
  const date = req.body.date;

  db.query(
    "INSERT INTO staff (EmployeeId, StaffName, Password, NumberofOrders, CheckupDate) VALUES (?,?,?,?,?)",
    [id, name, password, noOfOrders, date],
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

app.get("/getstaff", (req, res) => {
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
  const password = req.body.password;

  db.query(
    "SELECT * FROM Staff WHERE StaffName= ? AND Password = ?",
    [name, password],
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

app.post("/loginemployee", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const password = req.body.password;

  db.query(
    "SELECT * FROM Staff WHERE StaffName= ? AND Password = ?",
    [name, password],
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

app.post("/update", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const password = req.body.password;
  const date = req.body.date;

  db.query(
    "UPDATE Staff SET CheckupDate = ? WHERE StaffName = ? AND Password = ?",
    [date, name, password],
    (err, result) => {
      if (err) {
        console.log({ err: err });
        res.send("Error Occured");
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Check date Format" });
      }
    }
  );
});

app.listen(PORT, () => {
  console.log("running server on port ", PORT);
});
