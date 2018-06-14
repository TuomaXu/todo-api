# API文档

### 元数据

账户对象

```
{
	id:0
	username:'',
	password:'',
	access_token:'',
}
```

Todo条目对象

```
{
	id:0
	title:'',
	content:'',
	isFinish:true OR false,
}
```

### 错误代码

|错误代码|内容|
|:---|:---|
|10001|系统错误|
|10002|用户名错误|
|10003|密码错误|
|10004|access_token无效|
|10005|TodoID无效|
|10006|参数无效|
|10007|用户名已存在|

错误返回值：

```
{
    success:false,
    errorCode:10001,
    errorMessage:'系统错误'
}
```

### 请求基础地址

`http://60.205.141.116:60002`

### 接口服务

注册

请求链接：`/api/register`

请求方式：`POST`

|参数名称|参数描述|
|:---|:---|
|username|用户名|
|password|密码|

```
{
    "success": true,
    "data": {
        "id": 2,
        "username": "tom1",
        "password": "1234",
        "access_token": "16e088f3d62c4c132e8728ef79eaf353",
        "updatedAt": "2018-06-06T08:05:13.664Z",
        "createdAt": "2018-06-06T08:05:13.664Z"
    }
}
```

登录

请求链接：`/api/login`

请求方式：`POST`

|参数名称|参数描述|
|:---|:---|
|username|账户名|
|password|密码|

```
{
    "success": true,
    "data": {
        "id": 2,
        "username": "tom1",
        "password": "1234",
        "access_token": "8e58260409dc169009b87800dfe5128f",
        "createdAt": "2018-06-06T08:05:13.000Z",
        "updatedAt": "2018-06-06T08:11:18.442Z"
    }
}

```

提交备忘录条目

请求链接：`/api/postTodoItem`

请求方式：`POST`

|参数名称|参数描述|
|:---|:---|
|access_token|登录令牌|
|title|标题|
|content|内容|

```
{
    "success": true,
    "data": 
}

```

修改备忘录条目：

请求链接：`/api/updateTodoItem`

请求方式：`POST`

|参数名称|参数描述|
|:---|:---|
|access_token|登录令牌|
|id|条目ID|
|title|标题（可选）|
|content|内容（可选）|

```
{
    "success": true,
    "data": 
}

```

切换标记备忘录条目完成状态

请求链接：`/api/finishTodoItem`

请求方式：`POST`

|参数名称|参数描述|
|:---|:---|
|access_token|登录令牌|
|id|条目ID|

```
{
    "success": true,
    "data": 
}

```

删除备忘录条目

请求链接：`/api/deleteTodoItems`

请求方式：`POST`

|参数名称|参数描述|
|:---|:---|
|access_token|登录令牌|
|id|条目ID|

```
{
    "success": true,
}

