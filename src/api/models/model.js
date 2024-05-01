const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const bikerSchema = new Schema({
    marca: {type: String, require: true},
    cc: {type: number},
    modelo: {type: String, require: true},
});

const Bike = mongoose.model("bike", bikerSchema);
module.exports = Bike;