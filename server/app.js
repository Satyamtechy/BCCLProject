const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());

dotenv.config({ path: "./config.env" });

require("./db/connection");
// const User = require("./model/userSchema");

app.use(express.json());

// Linking router files
app.use(require("./router/auth"));
app.use(require('./router/inputauth'))

const PORT = process.env.PORT;


// app.get("/", (req, res) => {
//   res.send("Hello World");
// });


app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});