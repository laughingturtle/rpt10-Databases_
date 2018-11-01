DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(30) NOT NULL
);

DROP TABLE IF EXISTS rooms;

CREATE TABLE rooms (
  room_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  room_name VARCHAR(30) NOT NULL
);

DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  message_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  message_text VARCHAR(146) NOT NULL,
  user_id INT NOT NULL,
  room_id INT NOT NULL,
  FOREIGN KEY (user_id)
      REFERENCES users (user_id)
      ON UPDATE CASCADE
      ON DELETE RESTRICT,
  FOREIGN KEY (room_id)
      REFERENCES rooms (room_id)
      ON UPDATE CASCADE
      ON DELETE RESTRICT
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

