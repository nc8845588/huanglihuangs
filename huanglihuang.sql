/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : huanglihuang

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-05-15 11:36:29
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `lihuang`
-- ----------------------------
DROP TABLE IF EXISTS `lihuang`;
CREATE TABLE `lihuang` (
  `indecID` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  PRIMARY KEY (`indecID`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lihuang
-- ----------------------------
INSERT INTO `lihuang` VALUES ('0', '', '', '');
INSERT INTO `lihuang` VALUES ('2', '123', '123', '');
INSERT INTO `lihuang` VALUES ('3', '1', '1', '1');
INSERT INTO `lihuang` VALUES ('4', '2', '2', '2');
INSERT INTO `lihuang` VALUES ('5', '3', '3', '3');
INSERT INTO `lihuang` VALUES ('6', '33', '33', '3');
INSERT INTO `lihuang` VALUES ('7', '66', '6', '6');
INSERT INTO `lihuang` VALUES ('8', '22', '22', '22');
INSERT INTO `lihuang` VALUES ('9', '4', '4', '4');
