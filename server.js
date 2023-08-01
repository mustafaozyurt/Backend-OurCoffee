require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

// Database
const { connectDB } = require("./config/db");

// Routes
const contactRouter = require("./routes/contactRouter");
const coffeesRouter = require("./routes/coffeesRouter");

const PORT = process.env.PORT || 5000;
  
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connectDB();

app.use("/coffees", coffeesRouter);
app.use("/contact", contactRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
