//引入Express框架及相关工具
import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';


//引入数据服务模块
import register from './data_servers/register';
import login from './data_servers/login';
import postTodoItem from './data_servers/postTodoItem';
import updateTodoItem from './data_servers/updateTodoItem';
import deleteTodoItem from './data_servers/deleteTodoItem';
import getTodoItems from './data_servers/getTodoItems';
import finishTodoItem from './data_servers/finishTodoItem';

//加载ORM服务
import sequelize from './data-model/data-base';


//通过Express框架创建一个ExpressApp对象
const app = express();



//支持跨域请求
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();   
});



//添加静态文件服务器
//使用express自带的static中间件，对source目录提供静态文件服务
app.use('/resource',express.static('./resource'));

//解析JSON数据表单
app.use(bodyParser.json())
//解析表单文件
app.use(multer().any());


//配置请求路由
// app.get('/api/getMessages',getMessages);
app.post('/api/register',register);
app.post('/api/login',login);
app.post('/api/postTodoItem',postTodoItem);
app.post('/api/updateTodoItem',updateTodoItem);
app.post('/api/deleteTodoItem',deleteTodoItem);
app.post('/api/getTodoItems',getTodoItems);
app.post('/api/finishTodoItem',finishTodoItem);

//开启监听服务
const server = app.listen(60002,'60.205.141.116',()=>{
	console.log('开启成功，访问http://60.205.141.116:60002');
});