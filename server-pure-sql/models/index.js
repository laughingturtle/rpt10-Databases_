/* MODELS */
var db = require('../db');

module.exports = {

  users: {
    get: function (cb) {
      db.connection.query('SELECT * FROM users ;', function(err, result){
        if (err){
          throw err;
        } else {
          cb(null, result);
        }
      });
    },

    post: function (user, cb) {
      console.log('models user name :',user);
      db.connection.query('INSERT INTO users SET ?', user, function (err, result){
        if (err){
          cb(err, null);
        } else {
          cb(null, result);
        }
      });
    } //Insert into database
  },

  messages: {
    get: function (cb) {
      db.connection.query('SELECT * FROM messages;', function(err, result){
        if (err) {
          cb(err, null);
        } else {
        // console.log(result);
          cb(null, result);
        }
      });
    },

    post: function (message, cb) {
      console.log('our message in model: ', message);

      db.connection.query('INSERT INTO messages SET ?', message , function(err, result){
        if (err) {
          cb(err, null);
        } else{
          cb(null, result);
          console.log('this data has posted: ', result);
        }
      });
    }


  }};


/*
 /// ---> ? SELECT * FROM messages WHERE room_id =

 INSERT INTO users (user_name) VALUES ( // name  // );

 INSERT INTO rooms (rooms_name) VALUES ( // name  // );

 INSERT INTO messages (message_text, user_id, room_id) VALUES (text, user_id, room_id );


 messages
 SELECT id FROM users WHERE id = 'id';  // select all messages of this id in this room.


*/