const express = require('express');
const axios = require('axios');

const router = express.Router();
const remoteKeys = require('../constants/remoteKeyControl');

const TV_PORT = 1516;

// get all available keys
router.get('/', async (req, res) => {
  res.send(remoteKeys);
});

router.post('/:keyName', async (req, res) => {
  const remoteKey = req.params.keyName;

  const tvIP = req.tvIP;

  // check if remoteKey is empty or not valid
  if (remoteKey === '' || !remoteKeys.includes(remoteKey)) {
    throw new Error('remoteKey is empty or not valid');
  }

  const pressedKey = {
    jsonrpc: '2.0',
    method: 'remoteKeyControl',
    params: {
      remoteKey,
      AccessToken: 'pxmgxddXWoWvBVlvOaor4qRlajmooXKInYxkM8tlp9QK94rhg',
    },
    id: '1',
  };

  // pressed key wird an den TV geschickt
  const urlSend = `https://${tvIP}:${TV_PORT}`;

  const response = await axios.post(urlSend, pressedKey);

  if (response.statusText !== 'OK') {
    throw new Error(`Can not get key from TV with IP ${tvIP}`);
  } else {
    res.status(200).json(response.data);
  }
});

module.exports = router;
