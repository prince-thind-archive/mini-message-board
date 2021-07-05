const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function (req, res, next) {
  res.render('form', {});
});

router.post('/new', function (req, res, next) {
  const name = req.body.author;
  const text = req.body.text;
  const date = new Date();
  messages.push({
    text: name,
    user: text,
    added: date,
  });
  res.redirect('/');
});

module.exports = router;
