const express = require('express');

const router = express.Router();
const User = require('../model/User');

router.post('/login', (req, res) => {
  const { name } = req.body;
  const { password } = req.body;
  User.findOne({ name, password })
    .then((response) => {
      if (response != null) {
        res.json({
          response: true,
        });
      } else {
        res.json({
          response: false,
        });
      }
    })
    .catch((error) => {
      res.json({
        message: error,
      });
    });
});

router.post('/signup', (req, res) => {
  const Newuser = new User(
    req.body.user,
  );
  Newuser.save()
    .then(() => {
      res.json({
        message: 'New User Details Added!',
      });
    });
});

module.exports = router;
