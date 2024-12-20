const express = require('express');
const axios = require('axios');

const router = express.Router();
const TV_PORT = 1516;

// to get the power state
// --> {"jsonrpc" : "2.0", "method" : "powerControl", "id" : 1}
// <-- {"jsonrpc" : "2.0", "result" : {"power" : "powerOn"}, "id" : 1}

router.get('/', async (req, res) => {
  const tvIP = req.tvIP;

  // check if there is a global AccessToken
  if (!accessToken) {
    throw new Error('There is no global access token defined');
  }

  const urlSend = `https://${tvIP}:${TV_PORT}`;

  const powerState = {
    jsonrpc: '2.0',
    method: 'powerControl',
    params: {
      AccessToken: accessToken,
    },
    id: '1',
  };

  // power State wird an den TV geschickt
  const response = await axios.post(urlSend, powerState);

  res.status(200).json(response.data);
});

// to control power
// --> {"jsonrpc" : "2.0", "method" : "powerControl", "params" : {"power" : "powerOff | powerOn | Reboot"}, "id" : 1}
// <-- {"jsonrpc" : "2.0", "result" : {"power" : "powerOff"}, "id" : 1}

// power on
router.post('/on', async (req, res) => {
  const tvIP = req.tvIP;

  const urlSend = `https://${tvIP}:${TV_PORT}`;
  console.log(urlSend);

  const powerState = {
    jsonrpc: '2.0',
    method: 'powerControl',
    params: {
      power: 'powerOn',
      AccessToken: accessToken,
    },
    id: '1',
  };

  // power State wird an den TV geschickt
  const response = await axios.post(urlSend, powerState);

  res.status(200).json(response.data);
});

// power off
router.post('/off', async (req, res) => {
  const tvIP = req.tvIP;

  const urlSend = `https://${tvIP}:${TV_PORT}`;
  console.log(urlSend);

  const powerState = {
    jsonrpc: '2.0',
    method: 'powerControl',
    params: {
      power: 'powerOff',
      AccessToken: accessToken,
    },
    id: '1',
  };

  // power State wird an den TV geschickt
  const response = await axios.post(urlSend, powerState);

  res.status(200).json(response.data);
});

// Reboot
router.post('/reboot', async (req, res) => {
  const tvIP = req.tvIP;

  const urlSend = `https://${tvIP}:${TV_PORT}`;
  console.log(urlSend);

  const powerState = {
    jsonrpc: '2.0',
    method: 'powerControl',
    params: {
      power: 'Reboot',
      AccessToken: accessToken,
    },
    id: '1',
  };

  // power State wird an den TV geschickt
  const response = await axios.post(urlSend, powerState);

  res.status(200).json(response.data);
});

module.exports = router;
