const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const accessTokenRequest = {
    jsonrpc: "2.0",
    method: "createAccessToken",
    id: "1",
  };
  // accessTokenRequest wird an den TV geschickt

  res.status(200).json({
    jsonrpc: "2.0",
    result: {
      AccessToken: "519fcc9b8c4e4b64b5531c7281bf700a",
    },
    id: "1",
  });
});

module.exports = router;
