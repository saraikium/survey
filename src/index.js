//@ts-check
const express = require("express");
const { json, urlencoded } = require("body-parser");
const router = require("./routes");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(urlencoded({ extended: true }));
app.use(json());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
