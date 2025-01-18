const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Connect to MongoDB

mongoose
  .connect(
    "mongodb+srv://MOLOY-NODE:mongodb2025@node-api.qoofc.mongodb.net/?retryWrites=true&w=majority&appName=NODE-API"
  )

  .then(() => {
    console.log("MongoDB connected");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error", err);
  });
