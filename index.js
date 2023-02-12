const express = require("express");
const app = express();
app.set("view engine", "ejs");

const db = require("./data/db");

let data = [
  { id: 1, name: "iphone 14", price: 1400 },
  { id: 2, name: "iphone 11", price: 400 },
  { id: 3, name: "iphone 14", price: 1800 },
];

app.use("/products/:id", (req, res) => {
  res.render("product-details");
});

app.use("/products", (req, res) => {
  res.render("products", {
    urunler: data,
  });
});
app.use("/", (req, res) => {
  db.execute("select * from products")
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });

  res.render("index");
});
app.listen(5001, () => {
  console.log("litenining on port http://localhost:5001");
});
