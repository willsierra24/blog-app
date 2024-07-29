const express = require("express");
const session = require('express-session');
const mongoose = require("./config/database");
require("dotenv").config();
const userRoutes = require("./routes/user")
const postRoutes = require("./routes/post")
const authRoutes = require("./routes/auth")
const passport = require('passport')

const app = express()
const port = process.env.PORT || 3001

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }));

//middlewares
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json())
app.use('/api', userRoutes, postRoutes, authRoutes)



app.listen(port, () => {
    console.log("Server running on port", 3001)
}) 