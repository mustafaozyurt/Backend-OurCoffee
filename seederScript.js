require("dotenv").config();
const { connectDB } = require("./config/db");
const {classicCoffees, flavoredCoffees} = require("./data/products");

const Product = require("./models/Product");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(classicCoffees);
    await Product.insertMany(flavoredCoffees);

    console.log("Data import success");

    process.exit();
  } catch (err) {
    console.error(`Error: ${err}`);
    process.exit(1);
  }
};

importData();
