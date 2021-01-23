require("dotenv").config();
const x= require("./helpers/initMongodb");
const express = require("express");
const app = express();
const morgan = require("morgan");
const productRouter = require("./routes/productRoutes");
const categoryRouter = require("./routes/categoryRoutes");




 

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
const port = 3200;


const server = app.listen(port, () => {
  console.log(`Server connection on  local:${port}`);
});



app.use("/api/v1/products",productRouter);
app.use("/api/v1/categories",categoryRouter);




app.use("/", (req, res, next) => {
  console.log("Introuvable !");
  res.status(404).json({
    status: 404,
    message: "Page not found!",
  });
});


 
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});


