const express = require('express');
const router = express.Router();

//Register
router.post('/register', function (req,res,next) {
  res.send('Register');
});

// Authenticate
router.get('/authenticate', function (req,res,next) {
  res.send('Auth');
});

// Profile
router.get('/profile', function (req,res,next) {
  res.send('Pro');
});

module.exports = router;
