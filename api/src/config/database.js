const mongoose = require("mongoose");
require("dotenv").config();

//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("connected to Atlas"))
.catch((error) => console.error(error))

module.exports = mongoose