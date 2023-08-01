const mongoose = require("mongoose");
const validator = require("validator");

const subscriptionSchema = mongoose.Schema({
  email: {
    required: true,
    type: String,
  },
});

subscriptionSchema.statics.makeSubscription = async function (email) {
  if (email.trim() === "") {
    throw Error("Empty input fields");
  } else if (!validator.isEmail(email)) {
    throw Error("Please enter a valid email address!");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    console.log("email already exists");
    throw Error("This email is already subscribed");
  }

  const subscription = await this.create({
    email,
  });

  if (!subscription) {
    throw Error("Failed while subscription");
  }
};

const Subscription = mongoose.model("subscription", subscriptionSchema);

module.exports = Subscription;
