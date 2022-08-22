var express = require('express');
var router = express.Router();

const MY_NAME_APP = process.env.MY_NAME_APP || 'MY_NAME_APP NOT FOUND';

/* GET greeting */
router.get('/', function(req, res, next) {
  res.send(
    { "greeting": "Hello, world!",
      "name_app": MY_NAME_APP
    }
  );
});

module.exports = router;
