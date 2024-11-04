const express = require("express");
const router = express.Router();
const axios = require("axios");

const TV_PORT = 1516;
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "application/json");

router.post("/", async (req, res) => {
  const tvIP = req.tvIP; // added by middleware to the body

  const accessTokenRequest = {
    jsonrpc: "2.0",
    method: "createAccessToken",
    id: "1",
  };

  // accessTokenRequest wird an den TV geschickt
  const urlSend = `http://${tvIP}:${TV_PORT}/`;

  // const response = await fetch(urlSend, {
  //   method: "POST",
  //   headers: myHeaders,
  //   body: JSON.stringify(accessTokenRequest),
  // });

  // if (response.ok) {
  //   console.log("Response was ok.");
  // }
  // // console.log(response);
  // if (!response.ok) {
  //   console.log("Response was not ok: ", response.status);
  // }

  const { data } = await axios.post(urlSend, accessTokenRequest, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  res.status(200).json({
    jsonrpc: "2.0",
    result: {
      AccessToken: "519fcc9b8c4e4b64b5531c7281bf700a",
    },
    id: "1",
  });
});

module.exports = router;
