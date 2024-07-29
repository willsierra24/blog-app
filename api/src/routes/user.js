// const express = require("express");
// const userSchema = require("../models/user")

// const router = express.Router();

// // create user
// router.post('/users', (req, res) => {
//     const user = userSchema(req.body);
//     user
//     .save()
//     .then((data) => res.json(data))
//     .catch((error) => res.json({message: error}))
// })

// //get all users
// router.get('/users', (req, res) => {
//     userSchema
//     .find()
//     .then((data) => res.json(data))
//     .catch((error) => res.json({message: error}))
// })

// //get a user
// router.get('/users/:id', (req, res) => {
//     const {id} = req.params;
//     userSchema
//     .findById(id)
//     .then((data) => res.json(data))
//     .catch((error) => res.json({message: error}))
// })

// //delete a user
// router.delete('/users/:id', (req, res) => {
//     const {id} = req.params;
//     userSchema
//     .deleteOne({ _id: id })
//     .then((data) => res.json(data))
//     .catch((error) => res.json({message: error}))
// })

// module.exports = router

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.route('/users')
  .get(userController.getUsers)
  .post(userController.createUser);

router.route('/users/:id')
  .get(userController.getUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;