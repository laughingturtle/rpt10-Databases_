/* MODELS */
var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      db.connection.query('SELECT * FROM messages', function(err, result){
        if (err) {
          throw err;
        } else {
        // console.log(result);
          cb(null, result);
        } // pass result through to controller into an array.
       // model.messages.get(null, result);
      });
    }, // a function which produces all the messages
    post: function () {
      db.connection.query('INSERT INTO messages (message_text, user_id, room_id) VALUES (text, user_id, room_id', function(err, result){
        if (err) throw err;
        return result;
      }); // a function which can be used to insert a message into the database
    },

  users: {
    // Ditto as above.
    get: function () {}, //Select from database
    post: function () {} //Insert into database
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