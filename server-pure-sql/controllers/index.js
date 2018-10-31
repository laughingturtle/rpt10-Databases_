/* CONTROLLERS */
var models = require('../models');

module.exports = {
  messages: {
    get: (req, res) => {
      models.messages.get ((err, result) => {
        if (err) {
          res.status(404).json(err);
        } else {
          res.send(result);
        }
      });
    // invoke a func in model and pass in a call back to the response in line 5.
    }, // a function which handles a get request for all messages
    post: (req, res) => {
      //console.log('request from controller 1:  ', req.body.username);
      var message = {username: req.body.username, msg: req.body.message, roomname: req.body.roomname};

      models.messages.post(message, (err, result) => {
        if (err) {
          res.status(400).end('damn, failed');

        } else {
          // console.log('our message in controller: ', req.body.message);
          // console.log('our body in controller 2: ', req.body);
          res.send("success");
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get ((err, result) => {
        if (err) {
          throw err;
        } else {
          res.send(result);
        }
      });
    },
    post:  (req, res) => {
      console.log("controller requst body:    ", req.body);
      var user = {username: req.body.username};
      console.log("user from postman:  ", user);
      console.log("users object from models:   ", models.users);
      models.users.post(user, (err, result) => {
        if (err) {
          res.status(400).end('failed');
        } else {
          res.send("success");
        }
      });
    }
  }
};

// module.exports.messages.get({}, {});
