//app.js
//1:加载模块 express pool.js
const express = require("express");
const pool = require("./pool");
//2:创建服务端对象
var app = express();
//3:监听 3000
app.listen(3000);
//4:指定静态目录  public
app.use(express.static("public"));
//5:加载跨域访问模块
const cors = require("cors");
//6:配置跨域访问模块  那个跨域访问允许
//  脚手架8080允许
//  origin 允许跨域访问域名列表
//   credentials 跨域访问保存session id
app.use(cors({
    origin:["http://127.0.0.1:8080","http://localhost:8080"],
    credentials:true
}));
//解决跨域问题 为上

//7:加载第三方模块  body-parser
//body-parser 针对post请求处理请求参数
//如果配置成功  req.body..
const  bodyParser = require("body-parser");
//8:配置对特殊  json是否自动转换 不转或不转换
app.use(bodyParser.urlencoded({extended:false}))

//功能一：home 组件轮播图片
app.get("/imageList",(req,res)=>{
    //1：将轮播图中所需的图片 
    //2: 查询 服务端的图片
    var list = [
        {id:1,img_url:"http://127.0.0.1:3000/img/1b.jpg"},
        {id:2,img_url:"http://127.0.0.1:3000/img/2b.jpg"},
        {id:3,img_url:"http://127.0.0.1:3000/img/4b.jpg"},
        {id:4,img_url:"http://127.0.0.1:3000/img/6b.jpg"}
    ];
    res.send(list);
});

//功能二：获取脐橙列表（分页）
app.get("/newslist",(req,res)=>{
    //1.获取参数 pno pageSize
    var pno = req.query.pno;
    var pageSize = req.query.pageSize;
    //2.设置默认值 pno 1 pageSize 7
    if(!pno){
        pno = 1;
    }
    if(!pageSize){
        pageSize = 7;
    }
    //3.创sql语句
    var sql = "SELECT id,title,img_url,ctime,point FROM qic_news LIMIT ?,?";
    var ps = parseInt(pageSize);
    var offset = (pno-1)*pageSize;
    pool.query(sql,[offset,ps],(err,result)=>{
        if(err)throw err;
        res.send({code:1,data:result});
    })
});


//功能三:商品分页显示 
app.get("/products",(req,res)=>{
    //1:参数 pno pageSize
    var pno = req.query.pno;
    var pageSize = req.query.pageSize;
    //2:允许使用默认值  1 7  15:15
    if(!pno){pno=1}
    if(!pageSize){pageSize=7}
    //3:sql
   var sql = " SELECT l.lid,l.title,";
   sql+=" l.price,p.md";
   sql+=" FROM qic_laptop l,qic_laptop_pic p";
   sql+=" WHERE l.lid = p.laptop_id";
   sql+=" GROUP BY l.lid";
   sql+=" LIMIT ?,?";
   //4:json 
   var offset = (pno-1)*pageSize;
   pageSize = parseInt(pageSize);
   pool.query(sql,[offset,pageSize],(err,result)=>{
     if(err)throw err;
     res.send({code:1,data:result});
   }) 
  });

//功能四：获取脐橙的详细信息
app.get("/findNewslnfo",(req,res)=>{
    //1:获取参数
    var id = req.query.id;
    //2:创建正则表达式
    var reg = /^\d{1,}$/;
    //3:如果验证失败 输出错误信息{code：-1}
    if(!reg.test(id)){
        res.send({code:-1,msg:"新闻编号格式有误"});
        return;
    }
    //4:创建sql
    var sql = " SELECT id,title,content,ctime,img_url FROM qic_news WHERE id = ?";
    //5:发送sql语句
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result});
    })
    //6:输出查询结果 输出{code：1}
})


//功能五：获取脐橙列表
app.get("/getcomment",(req,res)=>{
    //1:分页查询 
    //1.1:参数 nid 新闻编号  pno 页码  pageSize  页大小
    //:127.0.0.1:3000/getcomment?nid=5&pno=2
    var nid = req.query.nid;
    var pno = req.query.pno;
    var pageSize = req.query.pageSize;
    //2:设置默认值
    if(!pno){pno=1}
    if(!pageSize){pageSize=5}
    //3:sql 语句
    var sql = " SELECT id,content,ctime,nid FROM qic_comment WHERE nid = ? LIMIT ?,?";
    //4:offset  行的偏移量
    var offset = (pno-1)*pageSize;
    //5：页大小造型
    pageSize = parseInt(pageSize);
    pool.query(sql,[nid,offset,pageSize],(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result});
    });
})

//功能六：发表评论
//1:用户post请求  /addcomment
app.post("/addcomment",(req,res)=>{
//2:获取二个参数  nid content
var nid = req.body.nid;     //新闻编号
var content = req.body.content; //评论内容
//3;创建sql语句
var sql = "INSERT INTO qic_comment VALUES (null,?,now(),?)";
//4:发送 sql 语句 并返回结果
pool.query(sql,[content,nid],(err,result)=>{
    if(err) throw err;
    //判断执行insert语句返回结果
    if(result.affectedRows > 0){
        res.send({code:1,msg:"评论发表成功！"});
    }else{
        res.send({code:-1,msg:"评论发表失败！"});
    }
})
//5:判断 评论成功 评论失败
});
//6:加载 body-parser 模块 配置 写在app.js 前面



//功能七： 获取商品详细信息
app.get("/findProuduct",(req,res)=>{
    //1：参数  pid
    var pid = req.query.pid;
    //2:sql 语句
    var sql = " SELECT lname,price FROM qic_laptop WHERE lid = ?";
    //3：json
    pool.query(sql,[pid],(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result});
    })
});


//功能八：用户登录
app.get("/login",(req,res)=>{
    //1:参数
    var uname = req.query.uname;
    var upwd = req.query.upwd;
    //2.sql
    var sql = " SELECT id FROM qic_login WHERE uname = ? AND upwd = md5(?)";
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err; 
        if(result.length==0){
            res.send({code:-1,msg:"用户名或密码有误区"});
        }else{
            res.send({code:1,msg:"登录成功"});
        }
    });
})


//功能九：将商品添加至购物车
// http://127.0.0.1:3000/addcart?uid=1&pid=3&price=99
app.get("/addcart",(req,res)=>{
    //1:参数  pid count uid price
    var pid = parseInt(req.query.pid);
    var count = 1;
    var uid = parseInt(req.query.uid);
    var price = parseInt(req.query.price);
    // 查询当前用户是否己经将商品添加至购物车
    var sql = " SELECT id FROM qic_cart WHERE uid = ? AND pid = ?";
    pool.query(sql,[uid,pid],(err,result)=>{
        if(err)throw err;
        // res.send(result);
        if(result.length==0){
            //-将商品信息添加购物车
            var sql = `INSERT INTO qic_cart VALUES(null,1,${price},${pid},${uid})`;
        }else{
            // 更新数量
            var sql = `UPDATE qic_cart SET count=count+1 WHERE pid=${pid} AND uid = ${uid}`;
        }
        pool.query(sql,(err,result)=>{
            if(err) throw err;
            // res.send(result);
            if(result.affectedRows > 0){
                res.send({code:1,msg:"添加成功！"});
            }else{
                res.send({code:-1,msg:"添加失败！"});
            }
         })
    })
    //2:SELECT
    //3:UPDATE
    //4:INSERT
    //5:JSON
    //6:
});


//功能十：购物车列表
app.get("/cartlist",(req,res)=>{
    //1:参数 uid 
    var uid = req.query.uid;
    //2:sql 多表查询
    var sql = " SELECT c.id,c.count,c.price,c.uid,c.pid,l.lname FROM qic_cart c,qic_laptop l WHERE l.lid = c.pid AND c.uid = ?";
    pool.query(sql,[uid],(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result})
    })
    //3:jisn{code:1,data:[]}
});

//功能十一：删除购物车一件商品
//http:"127.0.0.1:3000/delCartItem?id=5"
app.get("/delCartItem",(req,res)=>{
    var id = req.query.id;
    var sql = "DELETE FROM qic_cart WHERE id = ?";
    pool.query(sql,[id],(err,result)=>{
        if(err)throw err;
        if(result.affectedRows > 0){
            res.send({code:1,msg:"删除成功！"});
        }else{
            res.send({code:-1,msg:"删除失败！"});
        }
    });
});


//功能十二：删除购物车中多个指定商品
//http://127.0.0.1:3000/removeMItem?ids=3,8
app.get("/removeMItem",(req,res)=>{
    //1：参数
    var ids = req.query.ids;
    //2：sql
    var sql = " DELETE FROM qic_cart WHERE id IN ("+ids+")";
    //3:json
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.affectedRows > 0){
            res.send({code:1,msg:"删除成功！"});
        }else{
            res.send({code:-1,msg:"删除失败！"});
        }
    })
})