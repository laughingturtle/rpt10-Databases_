DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(30) NOT NULL
);

DROP TABLE IF EXISTS rooms;

CREATE TABLE rooms (
  room_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  roomname VARCHAR(30) NOT NULL
);

DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  msg_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  msg VARCHAR(146) NOT NULL,
  username VARCHAR(30) NOT NULL,
  roomname VARCHAR(30) NOT NULL
  -- FOREIGN KEY (username)
  --     REFERENCES users (username)
  --     ON UPDATE CASCADE
  --     ON DELETE RESTRICT,
  -- FOREIGN KEY (roomname)
  --     REFERENCES rooms (roomname)
  --     ON UPDATE CASCADE
  --     ON DELETE RESTRICT
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

