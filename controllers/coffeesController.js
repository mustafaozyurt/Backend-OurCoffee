const Product = require("../models/Product");

exports.getCoffees = async (req, res) => {
  const filter = {};

  try {
    const coffee_type = req.query.coffee_type;
    const isFav = req.query.isFav;
    const sortOption = req.query.sort;

    if (coffee_type) {
      filter.coffee_type = coffee_type;
    }

    if (isFav) {
      filter.isFav = isFav;
    }

    let coffees = await Product.find(filter);

    if (sortOption) {
      switch (sortOption) {
        case "a-z":
          coffees.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "z-a":
          coffees.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "price-asc":
          coffees.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          coffees.sort((a, b) => b.price - a.price);
          break;
        default:
          break;
      }
    }

    res.status(200).json({
      coffees,
    });
  } catch (err) {
    console.error(`error: ${err}`);
    res.status(500).json("Server error");
  }
};

exports.getCoffeeById = async (req, res) => {
  try {
    const coffeeId = req.params.id;
    const coffee = await Product.findById({ _id: coffeeId });

    if (!coffee) {
      return res.status(404).json({ error: "Coffee not found" });
    }

    res.json({
      coffee,
    });
  } catch (err) {
    console.error(`error: ${err}`);
    res.status(500).json("Server error");
  }
};
