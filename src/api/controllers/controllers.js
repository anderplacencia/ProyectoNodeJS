const Bike = require("../models/model");

const addBike = async (req, res) => {
    try {
        console.log(req.body);
        const newBike = new Bike (req.body);
        const createdBike = await newBike.save();
        return res.json(createdBike);
      } catch (error) {
        console.log(error);
        return res.status(500).json(error);
      }
};

const selectBike = async (req, res) => {
  const nameBike = req.query.name;
  const users = await User.find({ name: nameUser })
    .populate({ path: 'bike', select: 'name' });
  return res.status(200).json(users);
};


module.exports ={ addBike, selectBike };