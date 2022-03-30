const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const Note = require("../models/noteModel");
const User = require("../models/userModel");

const protect = expressAsyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      //console.log(token);
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //console.log(decoded);
      req.user = await User.findById(decoded.id).select("-password");
      //console.log(req.user);
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(400);
    throw new Error("Not authorized, token not found");
  }
});

module.exports = protect;
