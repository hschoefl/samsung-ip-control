const express = require("express");
const router = express.Router();

router.post("/:keyName", (req, res) => {
  const remoteKey = req.params.keyName;

  console.log(req.tvIP); // inserted throug middleware
  console.log(remoteKey);

  const pressedKey = {
    jsonrpc: "2.0",
    method: "remoteKeyControl",
    params: {
      remoteKey,
      AccessToken: "519fcc9b8c4e4b64b5531c7281bf700a",
    },
    id: "1",
  };

  // pressed key wird an den TV geschickt

  res.status(200).json({ message: remoteKey });
});

module.exports = router;
