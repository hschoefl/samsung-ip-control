const express = require('express');
const router = express.Router();
const axios = require('axios');

const TV_PORT = 1516;

router.get('/', async (req, res) => {
  const tvIP = req.tvIP; // added by middleware to the body

  const accessTokenRequest = {
    jsonrpc: '2.0',
    method: 'createAccessToken',
    id: '1',
  };

  const urlSend = `https://${tvIP}:${TV_PORT}`;

  const response = await axios.post(urlSend, accessTokenRequest);

  if (response.statusText !== 'OK') {
    throw new Error(`Can not get access token from TV with IP ${tvIP}`);
  } else {
    // now save the access token in a global variable
    global.accessToken = response.data.result.AccessToken;
    res.status(200).json(response.data);
  }
});

module.exports = router;
