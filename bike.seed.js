const mongoose = require ("mongoose");
//const bike = require(ruta hacia los modelos de bikes)

const bike =[
    {marca: "Yamaha", cc: "1100", modelo:"R1"},
    {marca: "Yamaha", cc: "1100", modelo:"DragStar"},
    {marca: "Honda", cc: "1100", modelo:"CBR"},
    {marca: "Yamaha", cc: "600", modelo:"R6"},
    {marca: "Yamaha", cc: "650", modelo:"DragStar"},
    {marca: "Honda", cc: "500", modelo:"CB-f"},
    {marca: "Suzuki", cc: "400", modelo:"Burgman"},
    {marca: "Suzuki", cc: "650", modelo:"Burgman"},
    {marca: "Honda", cc: "750", modelo:"VT"},
    {marca: "Honda", cc: "125", modelo:"PCX"}
];

mongoose
  //.connect(  )
  .then(async () => {
    const doctorsDB = await Doctor.find();
    if (doctorsDB.length !== 0) {
      await Doctor.collection.drop();
    }
  })
  .catch((err) => console.log(err))
  .then(async () => {
    await Doctor.insertMany(doctorsDocument);
  })
  .catch((error) => console.log(error))
  .finally(() => mongoose.disconnect());