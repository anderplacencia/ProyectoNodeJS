const express = require("express");

const router = express.Router();
const {
    addBike,

} = require("../controllers/controllers");

const {addBike} = require("../controllers/controllers");

router.get("/add", addBike);