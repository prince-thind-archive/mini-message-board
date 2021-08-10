const {DateTime}=require('luxon');
const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: DateTime.now().toFormat('MMMM dd, yyyy')
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: DateTime.now().toFormat('MMMM dd, yyyy')
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
  const date = DateTime.now().toFormat('MMMM dd, yyyy')
  messages.push({
    text: name,
    user: text,
    added: date,
  });
  res.redirect('/');
});

module.exports = router;
