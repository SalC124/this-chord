const express = require("express");
const msgsRouter = express.Router();
const Msg = require("../models/msg");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const extractToken = (req) => {
  const authHeader = req.get("authorization");
  if (!authHeader) return null;
  return authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
};

msgsRouter.post("/", async (req, res) => {
  const { content, time } = req.body;
  const tokenPayload = jwt.verify(extractToken(req), process.env.JWT_SECRET);
  if (!tokenPayload.id) return res.status(401).json({ error: "invalid token" });

  const user = await User.findById(tokenPayload.id);
  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }
  if (!time) {
    return res.status(401).json({ error: "time not found" });
  }
  if (!content) {
    return res.status(400).json({ error: "content is required" });
  } else {
    const msg = new Msg({ content, user: user._id, time });
    const savedMsg = await msg.save();
    user.msgs = [...user.msgs, savedMsg._id];
    await user.save();
    res.json(savedMsg);
  }
});

msgsRouter.get("/", async (req, res) => {
  const msgs = await Msg.find({}).populate("user", { username: 1, content: 1, time: 1 });
  res.json(msgs);
});

msgsRouter.get("/:id", async (req, res) => {
  const msg = await Msg.findById(req.params.id);
  if (!msg) {
    res.status(404).json({ error: "message not found" });
  } else {
    res.json(msg);
  }
});


module.exports = msgsRouter;
