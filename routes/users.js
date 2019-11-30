const express = require("express");
const router = express.Router();

const User = require("../models/User");

// list all users
router.get("/", async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json({ status: true, user });
  } catch (error) {
    res.status(400).json({ status: false, error, message: "user not found" });
  }
});

//create user route
router.post("/", async (req, res) => {
  try {
    let { email, name } = req.body;
    if (!email || !name) {
      throw new Error("Email or Password not found!");
    }
    const user = await User.create(req.body);
    res.status(201).json({ status: true, message: "user created" });
  } catch (error) {
    res.status(400).json({ status: false, error, message: "user not created" });
  }
});

// update user route
router.put("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    const user = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true
    });
    res.status(202).json({ status: true, message: "user updated" });
  } catch (error) {
    res.status(400).json({ status: false, error, message: "user not updated" });
  }
});

// user delete route
router.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    const user = await User.findOneAndDelete({ _id: id });
    res.status(202).json({ status: true, message: "user delete" });
  } catch (error) {
    res.status(400).json({ status: false, error, message: "user delete" });
  }
});

module.exports = router;
