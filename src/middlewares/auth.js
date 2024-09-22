const adminAuth = (req, res, next) => {
  const token = "xyz";
  if (token === "xyz") {
    next();
  } else {
    res.status(401).send("Unauthorized request");
  }
};

module.exports = { adminAuth };
