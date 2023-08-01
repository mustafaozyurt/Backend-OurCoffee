const classicCoffees = [
  {
    name: "Latte",
    price: 12.99,
    description: "Classic latte with espresso and steamed milk.",
    text: "Indulge in the coffee lover's classic favorite - a Latte. The perfect harmony of rich espresso and steamed milk will dance on your taste buds. The destination for flavor is right here! Try it now, and treat yourself to a delightful moment.",
    countInStock: 50,
    imageUrl: "/images/img-latte.jpg",
    coffee_type: "classic",
    isFav: true,
  },
  {
    name: "Espresso",
    price: 7.99,
    description: "Strong shot of espresso made with high-quality beans.",
    text: "If you're a true coffee aficionado, a strong and intense Espresso is just what you need. Made with the finest coffee beans, this shot will fill you with energy. Donned with a thin layer of crema, this taste is not to be missed!",
    countInStock: 30,
    imageUrl: "/images/img-espresso_1.jpg",
    coffee_type: "classic",
    isFav: true,
  },
  {
    name: "Cappuccino",
    price: 10.99,
    description:
      "Traditional cappuccino with equal parts espresso, steamed milk, and foam.",
    text: "For those seeking a traditional and simple flavor, Cappuccino is the perfect choice. The combination of espresso, hot milk, and froth will embrace you with happiness in every sip. Escape from the day's stress with a warm and comforting cup.",
    countInStock: 40,
    imageUrl: "/images/img-cappucino.jpg",
    coffee_type: "classic",
    isFav: false,
  },
  {
    name: "Turkish Coffee",
    price: 15.99,
    description: "Authentic Turkish coffee brewed to perfection.",
    text: "If you're up for a historical journey, Turkish Coffee offers you a unique opportunity. With its authentic taste, this special coffee will add value to your precious moments. Don't miss the chance to savor it, served meticulously in a frothy cup.",
    countInStock: 20,
    imageUrl: "/images/img-turkish-coffee.webp",
    coffee_type: "classic",
    isFav: true,
  },
  {
    name: "Americano",
    price: 10.99,
    description: "Espresso diluted with hot water, similar to drip coffee.",
    text: "For lovers of drip coffee, Americano is the irresistible choice. The blending of Italian espresso with water will invigorate you instantly. Embrace this heartwarming coffee to make ordinary moments extraordinary!",
    countInStock: 25,
    imageUrl: "/images/img-americano.jpg",
    coffee_type: "classic",
    isFav: true,
  },
];

const flavoredCoffees = [
  {
    name: "Caramel Machiato",
    price: 12.99,
    description:
      "Delicious caramel-flavored macchiato with espresso and caramel sauce.",
    text: "Prepare for a sweet feast! Caramel Machiato, with its delightful mix of espresso and caramel sauce, will rejoice your taste buds. Indulge in this unforgettable taste and enjoy a sweet moment of respite.",
    countInStock: 15,
    imageUrl: "/images/img-caramel.jpg",
    coffee_type: "flavored",
    isFav: false,
  },
  {
    name: "Vanilla",
    price: 14.99,
    description:
      "Smooth vanilla-flavored coffee made with high-quality vanilla extract.",
    text: "Get ready to be enchanted by the magical world of vanilla. This smooth and sweet coffee, infused with vanilla essence, offers a unique experience. Savor the taste and freshness!",
    countInStock: 10,
    imageUrl: "/images/img-vanilla.jpg",
    coffee_type: "flavored",
    isFav: false,
  },
  {
    name: "Mocha",
    price: 18.99,
    description:
      "Indulgent mocha with espresso, steamed milk, and rich chocolate syrup.",
    text: "If you're a chocolate lover, Mocha is the one for you! This magnificent concoction of espresso, cream, and chocolate syrup will pamper you. Embark on a romantic flavor journey by trying a Mocha now.",
    countInStock: 12,
    imageUrl: "/images/img-mocha.jpg",
    coffee_type: "flavored",
    isFav: false,
  },
];

module.exports = { classicCoffees, flavoredCoffees };
