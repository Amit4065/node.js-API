const express = require("express");
const router = new express.Router();

const moviedata = require("../models/course1");

router.post("/movie", async (req, res) => {
  try {
    const addMovielist = new moviedata(req.body);
    console.log(req.body);
    const insertdata = await addMovielist.save();
    res.status(201).send(insertdata);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/movie", async (req, res) => {
  try {
    const getMovies = await moviedata.find({}).sort({ ranking: 1 });
    res.send(getMovies);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.patch("/movie/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const getMovie = await moviedata.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    res.send(getMovie);
  } catch (e) {
    res.status(500).send(e);
    console.log(e)
  }
});

router.delete("/movie/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const getMovie = await moviedata.findByIdAndDelete(userId);
    res.send(getMovie);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;