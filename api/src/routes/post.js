const express = require("express");
const postSchema = require("../models/post");

const router = express.Router();

// create post
router.post('/post', (req, res) => {
    const post = postSchema(req.body);
    post
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//get all posts
router.get('/post', (req, res) => {
    postSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//get a post
router.get('/post/:id', (req, res) => {
    const {id} = req.params;
    postSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: ErrorEvent}))
})

//update a post
router.put('/post/:id', (req, res) => {
    const {id} = req.params;
    const {title, content, author} = req.body;
    postSchema
    .updateOne({_id: id}, {$set: {title, content, author}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}))
})

//delete a post
router.delete('/post/:id', (req, res) => {
    const {id} = req.params;
    postSchema
    .deleteOne({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})


module.exports = router 