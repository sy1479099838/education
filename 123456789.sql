/*
SQLyog Enterprise v12.09 (64 bit)
MySQL - 5.5.53 : Database - snake
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`snake` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `snake`;

/*Table structure for table `snake_articles` */

DROP TABLE IF EXISTS `snake_articles`;

CREATE TABLE `snake_articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '文章id',
  `title` varchar(155) NOT NULL COMMENT '文章标题',
  `description` varchar(255) NOT NULL COMMENT '文章描述',
  `keywords` varchar(155) NOT NULL COMMENT '文章关键字',
  `thumbnail` varchar(255) NOT NULL COMMENT '文章缩略图',
  `content` text NOT NULL COMMENT '文章内容',
  `add_time` datetime NOT NULL COMMENT '发布时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `snake_articles` */

insert  into `snake_articles`(`id`,`title`,`description`,`keywords`,`thumbnail`,`content`,`add_time`) values (2,'短信群发说明','关于短信群发的文章','短信,群发,钓鱼短信','/upload/20180705/7159a540e4e78e0bc15a7c548c8d1207.jpg','<p style=\"text-align: center;\"><span style=\"font-size: 36px;\"><strong><br/></strong></span></p><p style=\"text-align: center;\"><span style=\"font-size: 36px;\"><strong>短信群发使用说明</strong></span></p><p><span style=\"font-size: 36px;\"><strong><br/></strong></span></p><p style=\"text-indent: 2em;\"><span style=\"font-size: 24px;\"><span style=\"font-family: &quot;Microsoft Yahei&quot;, 微软雅黑, &quot;STHeiti Light&quot;, 华文细黑, SimSun, 宋体, Arial, sans-serif; font-size: 18px; letter-spacing: 1px; text-indent: 36px;\">短信诈骗是指骗子使用短信发送设备或伪基站，将虚假短信发送至事主手机，再结合配套的骗局，诈骗消费者钱财的行为。这类骗术往往并不高明，但是由于行骗成本低，诈骗短信发送面广，还是有不少的消费者上当受骗。</span></span></p><p style=\"text-align: left;\"><img src=\"/upload/image/20180705/1530757285232371.jpg\" title=\"1530757285232371.jpg\" alt=\"f43b-fyrpeie5439383.jpg\" width=\"792\" height=\"323\"/></p><p style=\"text-indent: 2em;\">在此，我想大家介绍我们灵先创测试钓鱼短信群发使用说明。</p><p style=\"text-indent: 2em;\"><span style=\"font-size: 18px;\"><strong>第一步</strong><strong><span style=\"color: rgb(255, 0, 0);\">（至关重要）</span></strong>：</span></p><p style=\"text-indent: 2em;\">准备好已经编辑好的CSV文件。CSV文件可以由如下方法获得：</p><p style=\"text-indent: 2em; text-align: left;\">&nbsp;&nbsp;&nbsp;&nbsp;使用xls或者xlsx文件另存为获得：</p><p style=\"text-indent: 2em; text-align: left;\"><br/></p><p style=\"text-indent: 2em; text-align: left;\"><img src=\"/upload/image/20180705/1530759520114791.png\" title=\"1530759520114791.png\" alt=\"微信图片_20180705105817.png\" width=\"443\" height=\"243\"/></p><p style=\"text-indent: 2em; text-align: left;\"><img src=\"/upload/image/20180705/1530759620306472.png\" title=\"1530759620306472.png\" alt=\"微信图片_20180705105825.png\" width=\"461\" height=\"250\"/></p><p style=\"text-indent: 2em;\">CSV文件里面的内容规范必须如下：</p><p style=\"text-indent: 2em; text-align: left;\"><img src=\"/upload/image/20180705/1530758941542802.png\" title=\"1530758941542802.png\" alt=\"微信图片_20180705104840.png\" width=\"459\" height=\"182\"/></p><p style=\"text-indent: 2em;\">&nbsp;&nbsp;&nbsp;&nbsp;1、CSV文件名称可以随意<br/></p><p style=\"text-indent: 2em;\">&nbsp;&nbsp;&nbsp;&nbsp;2、CSV文件内每一列必须分别对应的是编号、姓名、电话、分类、分类编号，顺序不能有误。<br/></p><p style=\"text-indent: 2em;\">&nbsp;&nbsp;&nbsp;&nbsp;3、每种分类名称必须唯一，且对应每个分类唯一的编号，如公司对应编号1，企业对应编号2 。<br/></p><p style=\"text-indent: 2em;\">使用者可以去批量发送处下载模板。</p><p style=\"text-indent: 2em;\"><strong><span style=\"font-size: 18px;\">第二步：</span></strong></p><p style=\"text-indent: 2em;\">点击发送短信，选择批量发送，选择CSV文件（必须是CSV文件，不能是xls、xlsx等表格文件）</p><p style=\"text-indent: 2em;\"><br/></p><p style=\"text-indent: 2em; text-align: left;\"><img src=\"/upload/image/20180705/1530758023177290.png\" title=\"1530758023177290.png\" alt=\"微信图片_20180705102924.png\" width=\"470\" height=\"205\"/></p><p style=\"text-indent: 2em;\"><span style=\"font-size: 18px;\"><strong>第三步：上传预览并选择需要发送的手机号，点击发送</strong></span></p><p style=\"text-indent: 2em; text-align: left;\"><img src=\"/upload/image/20180705/1530758134303287.png\" title=\"1530758134303287.png\" alt=\"微信图片_20180705103110.png\" width=\"468\" height=\"219\"/></p><p style=\"text-indent: 2em; text-align: left;\"><img src=\"/upload/image/20180705/1530757938731798.png\" title=\"1530757938731798.png\" alt=\"image.png\" width=\"470\" height=\"229\"/></p>','2017-09-16 17:47:44');

/*Table structure for table `snake_node` */

DROP TABLE IF EXISTS `snake_node`;

CREATE TABLE `snake_node` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `node_name` varchar(155) NOT NULL DEFAULT '' COMMENT '节点名称',
  `control_name` varchar(155) NOT NULL DEFAULT '' COMMENT '控制器名',
  `action_name` varchar(155) NOT NULL COMMENT '方法名',
  `is_menu` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否是菜单项 1不是 2是',
  `type_id` int(11) NOT NULL COMMENT '父级节点id',
  `style` varchar(155) DEFAULT '' COMMENT '菜单样式',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

/*Data for the table `snake_node` */

insert  into `snake_node`(`id`,`node_name`,`control_name`,`action_name`,`is_menu`,`type_id`,`style`) values (1,'用户管理','#','#',2,0,'fa fa-users'),(2,'管理员管理','user','index',2,1,''),(3,'添加管理员','user','useradd',1,2,''),(4,'编辑管理员','user','useredit',1,2,''),(5,'删除管理员','user','userdel',1,2,''),(6,'角色管理','role','index',2,1,''),(7,'添加角色','role','roleadd',1,6,''),(8,'编辑角色','role','roleedit',1,6,''),(9,'删除角色','role','roledel',1,6,''),(10,'分配权限','role','giveaccess',1,6,''),(11,'系统管理','#','#',2,0,'fa fa-desktop'),(12,'数据备份/还原','data','index',2,11,''),(13,'备份数据','data','importdata',1,12,''),(14,'还原数据','data','backdata',1,12,''),(15,'节点管理','node','index',2,1,''),(16,'添加节点','node','nodeadd',1,15,''),(17,'编辑节点','node','nodeedit',1,15,''),(18,'删除节点','node','nodedel',1,15,''),(19,'文章管理','articles','index',2,0,'fa fa-book'),(20,'文章列表','articles','index',2,19,''),(21,'添加文章','articles','articleadd',1,19,''),(22,'编辑文章','articles','articleedit',1,19,''),(23,'删除文章','articles','articledel',1,19,''),(24,'上传图片','articles','uploadImg',1,19,''),(25,'app检测','app','index',2,0,'fa fa-life-saver'),(26,'静态检测','app','appstatic',2,25,''),(27,'动态分析','app','dynamic',2,25,''),(28,'加密保护','app','encrypt',2,25,''),(29,'智能监测','app','monitor',2,25,''),(30,'短信管理','message','index',2,0,'fa fa-envelope-o'),(31,'发送短信','message','sendmsg',2,30,'');

/*Table structure for table `snake_phonecode` */

DROP TABLE IF EXISTS `snake_phonecode`;

CREATE TABLE `snake_phonecode` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phoneNum` varchar(12) DEFAULT NULL COMMENT '电话号码',
  `code` varchar(10) DEFAULT NULL COMMENT '验证码',
  `state` int(2) DEFAULT NULL COMMENT '是否上当',
  `createTime` varchar(20) DEFAULT NULL COMMENT '发送时间',
  `useerName` varchar(30) DEFAULT NULL COMMENT '接受者姓名',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

/*Data for the table `snake_phonecode` */

insert  into `snake_phonecode`(`id`,`phoneNum`,`code`,`state`,`createTime`,`useerName`) values (1,'17378516325','dfb47d',0,'1529661199','沈仁海'),(2,'17378516325','709f2f',0,'1529663145','沈仁海'),(3,'18780516325','a16b94',0,'1529663873','沈阳'),(4,'18780516325','f78ecf',0,'1529665968','测试'),(5,'17378516325','a7e428',0,'1529667795','沈仁海'),(6,'15982269673','6ee470',0,'1529914706','zhangzong'),(7,'17378516325','09e398',0,'1530682930','沈仁海'),(8,'15008156300','cf8488',0,'1530682930','蒙哥'),(9,'15228763822','8f3dc5',0,'1530682930','曼姐'),(10,'18380580702','351d6f',0,'1530682930','田野'),(11,'17378516325','b9474e',0,'1530755475','测试'),(12,'17378516325','f5a64b',0,'1530864939','沈仁海');

/*Table structure for table `snake_role` */

DROP TABLE IF EXISTS `snake_role`;

CREATE TABLE `snake_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `role_name` varchar(155) NOT NULL COMMENT '角色名称',
  `rule` varchar(255) DEFAULT '' COMMENT '权限节点数据',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `snake_role` */

insert  into `snake_role`(`id`,`role_name`,`rule`) values (1,'超级管理员','*'),(2,'系统维护员','1,2,3,4,5,6,7,8,9,25,26');

/*Table structure for table `snake_user` */

DROP TABLE IF EXISTS `snake_user`;

CREATE TABLE `snake_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '' COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '' COMMENT '密码',
  `login_times` int(11) NOT NULL DEFAULT '0' COMMENT '登陆次数',
  `last_login_ip` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '' COMMENT '最后登录IP',
  `last_login_time` int(11) NOT NULL DEFAULT '0' COMMENT '最后登录时间',
  `real_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '' COMMENT '真实姓名',
  `status` int(1) NOT NULL DEFAULT '0' COMMENT '状态',
  `role_id` int(11) NOT NULL DEFAULT '1' COMMENT '用户角色id',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `snake_user` */

insert  into `snake_user`(`id`,`user_name`,`password`,`login_times`,`last_login_ip`,`last_login_time`,`real_name`,`status`,`role_id`) values (1,'admin','21232f297a57a5a743894a0e4a801fc3',64,'127.0.0.1',1530859373,'admin',1,1),(2,'shenyang','200820e3227815ed1756a6b531e7e0d2',1,'127.0.0.1',1527135381,'沈仁海',1,2);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
