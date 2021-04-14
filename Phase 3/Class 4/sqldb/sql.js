const mysql = require("mysql");
const express = require("express");


const bodyparser = require("body-parser");

var app = express();
// Use  body parser as middle ware
app.use(bodyparser.urlencoded({ extended: true }));

var mysqlConnection = mysql.createConnection({
    // socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock", //path to mysql sock in MAMP
    user: "myDBuser",
    password: "myDBuser",
    host: "127.0.0.1",
    database: "myDB",
  });
  
  mysqlConnection.connect((err) => {
    if (err) console.log(err);
    else console.log("Connected");
  });
app.get("/install", (req, res) => {
  let message = "Tables Created";
  let createProducts = `CREATE TABLE if not exists Products(
    product_id int auto_increment,
    product_url varchar(255) not null,
    product_name varchar(255) not null,
    PRIMARY KEY (product_id)
)`;
  let createProductDescription = `CREATE TABLE if not exists ProductDescription(
  description_id int auto_increment,
  product_id int(11) not null,
  product_brief_description TEXT not null,
  product_description TEXT not null,
  product_img varchar(255) not null,
  product_link varchar(255) not null,
  PRIMARY KEY (description_id),
  FOREIGN KEY (product_id) REFERENCES Products(product_id)
)`;
  let createProductPrice = `CREATE TABLE if not exists ProductPrice(
  price_id int auto_increment,
  product_id int(11) not null,    
  starting_price varchar(255) not null,
  price_range varchar(255) not null,
  PRIMARY KEY (price_id),
  FOREIGN KEY (product_id) REFERENCES Products(product_id)
)`;
  
let createOrderid = `CREATE TABLE if not exists Orderid(
  Order_id int auto_increment,
  product_id int(2) not null,    
  PRIMARY KEY (Order_id),
  FOREIGN KEY (product_id) REFERENCES Products(product_id)
)`;
let createUsers = `CREATE TABLE if not exists Users(
  id int auto_increment,
  User_name varchar(35) not null,
  password varchar(30) not null,  
 
)`;
  mysqlConnection.query(createProducts, (err, results, fields) => {
    if (err) console.log(err);
  });
  mysqlConnection.query(createProductDescription, (err, results, fields) => {
    if (err) console.log(err);
  });
  mysqlConnection.query(createProductPrice, (err, results, fields) => {
    if (err) console.log(err);
  });

  mysqlConnection.query(createOrderid, (err, results, fields) => {
    if (err) console.log(err);
  });

  mysqlConnection.query(createUsers, (err, results, fields) => {
    if (err) console.log(err);
  });
  res.end(message);
});


// 3question
// Insert a new iPhone
app.post("/add-product", (req, res) => {
  // console.log(bodyparser.json);
  console.log(req.body.iphoneId);
  let Id = req.body.iphoneId;
  let img = req.body.imgPath;
  let Url = req.body.iphoneLink;
  let Title = req.body.iphoneTitle;
  let Brief = req.body.briefDescription;
  let StartPrice = req.body.StartPrice;
  let PriceRange = req.body.priceRange;
  let Order= req.body.Orderid;
  let Description = req.body.fullDescription;

//   // To use it as a foreign key
  let addedProductId = 0;

  let sqlAddToProducts =
    "INSERT INTO Products (product_url, product_name) VALUES ('" + Id + "', '" + Title +"' )";

  mysqlConnection.query(sqlAddToProducts, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  mysqlConnection.query(
    "SELECT * FROM Products WHERE product_url = '" + Id + "' ",
    (err, rows, fields) => {
      addedProductId = rows[0].product_id;
      console.log(addedProductId);
      if (err) console.log(err);

      if (addedProductId != 0) {
        let sqlAddToProductDescription =
          "INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link,Order_id) VALUES ('" +
          addedProductId +
          "', '" +
          Brief +
          "', '" +
          Description +
          "', '" +
          img +
          "', '" +
          Url +
          "' )";

        let sqlAddToProductPrice =
          "INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES ('" +
          addedProductId +
          "', '" +
          StartPrice +
          "', '" +
          PriceRange +
          "')";

        mysqlConnection.query(
          sqlAddToProductDescription,
          function (err, result) {
            if (err) throw err;
            console.log("Product description inserted");
          }
        );

        mysqlConnection.query(sqlAddToProductPrice, function (err, result) {
          if (err) throw err;
          console.log("Product price inserted");
        });
      }
    }
  );
  res.end("Product added");
});

// Get all iphones
app.get("/iphones", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM Products JOIN ProductDescription JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id",
    (err, rows, fields) => {
      let iphones = { products: [] };
      iphones.products = rows;
      var stringIphones = JSON.stringify(iphones);
      if (!err) res.end(stringIphones);
      else console.log(err);
    }
  );
});

  app.listen(3001, () => console.log("Listening to : 3001"));
