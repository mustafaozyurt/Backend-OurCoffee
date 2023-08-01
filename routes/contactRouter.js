const contactRouter = require("express").Router();

const { sendContactForm, contactSubscription } = require("../controllers/contactControllers");

contactRouter.post("/", sendContactForm);

contactRouter.post("/subscription", contactSubscription);

module.exports = contactRouter;
