var controller = require('./controllers');
var router = require('express').Router();

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Connect controller methods to their corresponding routes
router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);

<<<<<<< HEAD
router.get('/rooms', controller.rooms.get);

router.post('/rooms', controller.rooms.post);
=======
>>>>>>> 67f7640816458abd059e333974943bae6473d441

module.exports = router;

