const getTvIp = (req, res, next) => {
  const tvIP = req.header('tvIP');

  // tbd: if no IP in header --> Error

  // else insert IP in req object

  // console.log("TV IP: ", tvIP);
  req.tvIP = tvIP;

  next();
};

module.exports = { getTvIp };
