const express = require("express");
const router = express.Router();

// to get the power state
// --> {"jsonrpc" : "2.0", "method" : "powerControl", "id" : 1}
// <-- {"jsonrpc" : "2.0", "result" : {"power" : "powerOn"}, "id" : 1}

router.post("/", (req, res) => {
  const powerState = {
    jsonrpc: "2.0",
    method: "powerControl",
    id: "1",
  };

  // power State wird an den TV geschickt

  res.status(200).json({ message: "power state result" });
});

// to control power
// --> {"jsonrpc" : "2.0", "method" : "powerControl", "params" : {"power" : "powerOff | powerOn | Reboot"}, "id" : 1}
// <-- {"jsonrpc" : "2.0", "result" : {"power" : "powerOff"}, "id" : 1}

// power on
router.post("/on", (req, res) => {
  const powerState = {
    jsonrpc: "2.0",
    method: "powerControl",
    params: {
      power: "powerOn",
    },
    id: "1",
  };

  // power State wird an den TV geschickt
  res.status(200).json({ message: "powerOn" });
});

// power off
router.post("/off", (req, res) => {
  const powerState = {
    jsonrpc: "2.0",
    method: "powerControl",
    params: {
      power: "powerOff",
    },
    id: "1",
  };

  // power State wird an den TV geschickt
  res.status(200).json({ message: "powerOff" });
});

// Reboot
router.post("/reboot", (req, res) => {
  const powerState = {
    jsonrpc: "2.0",
    method: "powerControl",
    params: {
      power: "Reboot",
    },
    id: "1",
  };

  // power State wird an den TV geschickt
  res.status(200).json({ message: "Reboot" });
});

module.exports = router;
