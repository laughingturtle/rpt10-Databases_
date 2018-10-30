/* CONTROLLERS */
var models = require('../models');


module.exports = {
  messages: {
    get: (req, res) => {
      models.messages.get ((err, result) => {
        if (err) {
          throw err;
        } else {
          res.send(result);
        }
      });
    // invoke a func in model and pass in a call back to the response in line 5.
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req, function() {
        console.log('do a happy dance, your data has posted');
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

// module.exports.messages.get({}, {});
