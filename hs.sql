SET NAMES UTF8;
DROP DATABASE IF EXISTS hs;
CREATE DATABASE hs CHARSET=UTF8;
USE hs;

/**用户信息**/
CREATE TABLE hs_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32));
INSERT INTO hs_user VALUES
(NULL, 'woshiyihao', '123456'),
(NULL, 'woshierhao', '123456'),
(NULL, 'doudou', '666666'),
(NULL, 'yaya', '888888');
