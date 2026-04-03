const express = require("express");
const router = express.Router();
const {createAOrder, getOrdersByEmail} = require("./order.controller")

//create order endpoint
router.post('/', createAOrder);

//get orders by user email
router.get('/email/:email', getOrdersByEmail);


module.exports = router;