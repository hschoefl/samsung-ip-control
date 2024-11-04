const express = require('express');
const router = express.Router();
const axios = require('axios');

const TV_PORT = 1516;

router.post('/', async (req, res) => {
  const tvIP = req.tvIP; // added by middleware to the body

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Accept', 'application/json');

  const accessTokenRequest = {
    jsonrpc: '2.0',
    method: 'createAccessToken',
    id: 1,
  };

  // accessTokenRequest wird an den TV geschickt
  const urlSend = `https://${tvIP}:${TV_PORT}`;
  console.log(urlSend);

  const response = await fetch(urlSend, {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(accessTokenRequest),
  });

  if (response.ok) {
    console.log('Response was ok.');
  }
  // console.log(response);
  if (!response.ok) {
    console.log('Response was not ok.');
  }

  const data = await response.json();

  console.log(data);

  res.status(200).json(data);
});

module.exports = router;
