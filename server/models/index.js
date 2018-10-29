var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {}, //Select from database
    post: function () {} //Insert into database
  }
};

/*
 /// ---> ? SELECT * FROM messages WHERE room_id =

 INSERT INTO users (user_name) VALUES ( // name  // );

 INSERT INTO rooms (rooms_name) VALUES ( // name  // );

 INSERT INTO messages (message_text, user_id, room_id) VALUES (text, user_id, room_id );


 messages
 SELECT id FROM users WHERE id = 'id';  // select all messages of this id in this room.


*/