import express from "express";
import data from "./data";
//import dotenv from "dotenv";
import bodyParser from "body-parser";
import config from "./config";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
const path = require("path");
//dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();

app.use("/api/users", userRoute);
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find((x) => x._id === productId);

  if (product) res.send(product);
  else res.send(404).send({ msg: "Product Not Found." });

  res.send(data.products);
});

app.use(express.static(path.join(__dirname, "/../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});

app.listen(config.PORT, () => {
  console.log("Server started at http://localhost:5000");
});
