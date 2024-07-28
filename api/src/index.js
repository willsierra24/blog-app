const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user")

const app = express()
const port = process.env.PORT || 3001

//middlewares
app.use(express.json())
app.use('/api', userRoutes)

//routes
app.get("/", (req,res) => {
    res.send("hello world!")
})

//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("connected to Atlas"))
.catch((error) => console.error(error))



app.listen(port, () => {
    console.log("Server running on port", 3001)
}) 