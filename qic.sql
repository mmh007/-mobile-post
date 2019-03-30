SET NAMES UTF8;
DROP DATABASE IF EXISTS qic;
CREATE DATABASE qic CHARSET=UTF8;
USE qic;

/**1插入新闻信息**/

CREATE TABLE qic_news(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title  VARCHAR(255),
    img_url VARCHAR(255),
    ctime  DATETIME,
    point INT,
    content VARCHAR(2000)
);

INSERT INTO qic_news VALUES
(null,'奉节脐橙,','http://127.0.0.1:3000/logo/a1.jpg',now(),0,'奉节脐橙,优质品质'),
(null,'农家脐橙,','http://127.0.0.1:3000/logo/a2.jpg',now(),0,'吃最新鲜的水果就选,奉节脐橙！'),
(null,'（梅子）奉节脐橙','http://127.0.0.1:3000/logo/a3.jpg',now(),0,'（梅子）奉节脐橙,优质品质!'),
(null,'（三角坝）奉节脐橙','http://127.0.0.1:3000/logo/a4.jpg',now(),0,'（三角坝）奉节脐橙,优质品质!'),
(null,'（凤仙）奉节脐橙','http://127.0.0.1:3000/logo/a5.jpg',now(),0,'（凤仙）奉节脐橙,优质品质！'),
(null,'（梁平）奉节脐橙','http://127.0.0.1:3000/logo/a6.jpg',now(),0,'（梁平）奉节脐橙,优质品质！'),
(null,'（上坝）奉节脐橙','http://127.0.0.1:3000/logo/a7.jpg',now(),0,'（上坝）奉节脐橙,优质品质!'),
(null,'（云盘包）奉节脐橙','http://127.0.0.1:3000/logo/a8.jpg',now(),0,'（云盘包）奉节脐橙,优质品质!'),
(null,'（36公里）奉节脐橙','http://127.0.0.1:3000/logo/a9.jpg',now(),0,'（36公里）奉节脐橙,优质品质!'),
(null,'（重庆）奉节脐橙','http://127.0.0.1:3000/logo/a10.jpg',now(),0,'（重庆）奉节脐橙,优质品质!'),
(null,'（武隆）奉节脐橙','http://127.0.0.1:3000/logo/a11.jpg',now(),0,'（武隆）奉节脐橙,优质品质!'),
(null,'（草堂）奉节脐橙','http://127.0.0.1:3000/logo/a12.jpg',now(),0,'（草堂）奉节脐橙,优质品质!'),
(null,'（杨家湾）奉节脐橙','http://127.0.0.1:3000/logo/a13.jpg',now(),0,'（杨家湾）奉节脐橙,优质品质!'),
(null,'（大树镇）奉节脐橙','http://127.0.0.1:3000/logo/a14.jpg',now(),0,'（大树镇）奉节脐橙,优质品质!'),
(null,'（大雁）奉节脐橙','http://127.0.0.1:3000/logo/a15.jpg',now(),0,'（大雁）奉节脐橙,优质品质!'),
(null,'（后湾）奉节脐橙','http://127.0.0.1:3000/logo/a16.jpg',now(),0,'（后湾）奉节脐橙,优质品质!'),
(null,'（罗家村）奉节脐橙','http://127.0.0.1:3000/logo/a17.jpg',now(),0,'（罗家村）奉节脐橙,优质品质!'),
(null,'（古坪）奉节脐橙','http://127.0.0.1:3000/logo/a18.jpg',now(),0,'（古坪）奉节脐橙,优质品质!'),
(null,'（双店乡）奉节脐橙','http://127.0.0.1:3000/logo/a19.jpg',now(),0,'（双店乡）奉节脐橙,优质品质!'),
(null,'（三块石）奉节脐橙','http://127.0.0.1:3000/logo/a20.jpg',now(),0,'（三块石）奉节脐橙,优质品质!');


/*2.商品的信息*/
CREATE TABLE qic_laptop(
    lid INT PRIMARY KEY AUTO_INCREMENT,
    title  VARCHAR(255),
    price  VARCHAR(255),
    lname  VARCHAR(255) 
);

INSERT INTO qic_laptop VALUES
(null,'奉节脐橙,优质品质','$108.00','奉节脐橙'),
(null,'吃最新鲜的水果就选,奉节脐橙！','$188.00','农家乐脐橙'),
(null,'（梅子）奉节脐橙,优质品质!','$236.00','（梅子）脐橙'),
(null,'（三角坝）奉节脐橙,优质品质!','$80.00','（三角坝）脐橙'),
(null,'（凤仙）奉节脐橙,优质品质！','$68.00','（凤仙）脐橙'),
(null,'（梁平）奉节脐橙,优质品质！','$73.00','（梁平）脐橙'),
(null,'（上坝）奉节脐橙,优质品质!','$113.00','（上坝）脐橙'),
(null,'（云盘包）奉节脐橙,优质品质!','$253.00','（云盘包）脐橙'),
(null,'（36公里）奉节脐橙,优质品质!','$99.00','（36公里）脐橙'),
(null,'（重庆）奉节脐橙,优质品质!','$68.00','（重庆）脐橙'),
(null,'（武隆）奉节脐橙,优质品质!','$218.00','（武隆）脐橙'),
(null,'（草堂）奉节脐橙,优质品质!','$150.00','（草堂）脐橙'),
(null,'（杨家湾）奉节脐橙,优质品质!','$168.00','（杨家湾）脐橙'),
(null,'（大树镇）奉节脐橙,优质品质!','$153.00','（大树镇）脐橙'),
(null,'（大雁）奉节脐橙,优质品质!','$184.00','（大雁）脐橙'),
(null,'（后湾）奉节脐橙,优质品质!','$142.00','（后湾）脐橙'),
(null,'（罗家村）奉节脐橙,优质品质!','$136.00','（罗家村）脐橙'),
(null,'（古坪）奉节脐橙,优质品质!','$100.00','（古坪）脐橙'),
(null,'（双店乡）奉节脐橙,优质品质!','$89.00','（双店乡）脐橙'),
(null,'（三块石）奉节脐橙,优质品质!','$103.00','（三块石）脐橙');


	
/*3.商品的图片*/
CREATE TABLE qic_laptop_pic(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    laptop_id VARCHAR(255),
    md VARCHAR(255)
);

INSERT INTO qic_laptop_pic VALUES
(null,1,'http://127.0.0.1:3000/logo/1.jpg'),
(null,2,'http://127.0.0.1:3000/logo/a20.jpg'),
(null,3,'http://127.0.0.1:3000/logo/a2.jpg'),
(null,4,'http://127.0.0.1:3000/logo/3.jpg'),
(null,5,'http://127.0.0.1:3000/logo/a4.jpg'),
(null,6,'http://127.0.0.1:3000/logo/a5.jpg'),
(null,7,'http://127.0.0.1:3000/logo/a6.jpg'),
(null,8,'http://127.0.0.1:3000/logo/a12.jpg'),
(null,9,'http://127.0.0.1:3000/logo/a19.jpg'),
(null,10,'http://127.0.0.1:3000/logo/a7.jpg'),
(null,11,'http://127.0.0.1:3000/logo/a4.jpg'),
(null,12,'http://127.0.0.1:3000/logo/a19.jpg'),
(null,13,'http://127.0.0.1:3000/logo/a6.jpg'),
(null,14,'http://127.0.0.1:3000/logo/a20.jpg'),
(null,15,'http://127.0.0.1:3000/logo/a2.jpg'),
(null,16,'http://127.0.0.1:3000/logo/a11.jpg'),
(null,17,'http://127.0.0.1:3000/logo/a10.jpg'),
(null,18,'http://127.0.0.1:3000/logo/aaa.jpg'),
(null,19,'http://127.0.0.1:3000/logo/a21.jpg'),
(null,20,'http://127.0.0.1:3000/logo/a20.jpg');


/*4.创建商品发表评论表*/
CREATE TABLE qic_comment(
    id       INT  PRIMARY KEY AUTO_INCREMENT,
    content  VARCHAR(50),
    ctime    DATETIME,
    nid      INT
);

INSERT INTO qic_comment VALUES
(null,'赞一个1',now(),5),
(null,'赞一个2',now(),5),
(null,'赞一个3',now(),5),
(null,'赞一个4',now(),5),
(null,'赞一个5',now(),5),
(null,'赞一个6',now(),5),
(null,'赞一个7',now(),5),
(null,'赞一个8',now(),5),
(null,'赞一个9',now(),5),
(null,'赞一个10',now(),5);


/* 创建用户登录表 */
CREATE TABLE qic_login(
    id  INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(25),
    upwd VARCHAR(32)
);

INSERT INTO qic_login VALUES
(null,'mmh',md5('123'));



/* 创建购物车 */
CREATE TABLE qic_cart(
    id  INT PRIMARY KEY AUTO_INCREMENT,
    count INT,
    price DECIMAL(15,2),
    pid   INT,
    uid   Int
);