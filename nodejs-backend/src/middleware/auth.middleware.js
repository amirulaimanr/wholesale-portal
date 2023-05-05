// src/middleware/auth.middleware.js

const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).send("Unauthorized");
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send("Unauthorized");
  }
};

const supplier = async (req, res, next) => {
  if (req.user.role !== "Supplier") {
    res.status(403).send("Forbidden");
    return;
  }
  next();
};

module.exports = {
  protect,
  supplier,
};
