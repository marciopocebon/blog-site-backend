const express = require("express");
const mongoose = require("mongoose");
const Blog = require("../models/Blog");
const router = express.Router();

router.get("/", (req, res) => {
  Blog.find()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json({ message: err }));
});

router.post("/", (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    story: req.body.story,
    name: req.body.name,
    email: req.body.email,
    userImage: req.body.userImage,
  });
  blog
    .save()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json({ message: err }));
});
router.delete("/:BlogID", (req, res) => {
  Blog.deleteOne(req.params.BlogId)
    .then((data) => res.status(200).json({ message: "Blog deleted" }))
    .catch((err) => res.status(400).json({ message: err }));
});

router.patch("/:BlogID", (req, res) => {
  Blog.updateOne(
    { _id: req.params.BlogID },
    {
      $set: {
        title: req.body.title,
        story: req.body.story,
        name: req.body.name,
        email: req.body.email,
        userImage: req.body.userImage,
      },
    }
  )
    .then((data) => res.status(200).json({ message: "Blog updated" }))
    .catch((err) => res.status(400).json({ message: err }));
});
module.exports = router;
