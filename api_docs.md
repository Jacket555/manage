# 接口文档

## 目录：

[TOC]



## 1. 登陆

### 请求URL：
	http://118.24.25.7:5000/api/login

### 请求方式：
	POST

### 参数类型
| 参数     | 是否必选 | 类型   | 说明   |
| -------- | -------- | ------ | ------ |
| username | Y        | string | 用户名 |
| password | Y        | string | 密码   |



### 返回示例：
	成功:
	  {
	    "status": 0,
	    "data": {
	      "_id": "5c3b297dea95883f340178b0",
	      "password": "21232f297a57a5a743894a0e4a801fc3",
	      "username": "admin",
	      "create_time": 1547381117891,
	      "__v": 0,
	      "role": {
	        "menus": []
	      }
	    }
	  }
	失败
	  {
	    "status": 1,
	    "msg": "用户名或密码不正确!"
	  }

## 2. 添加用户

### 请求URL：
	http://118.24.25.7:5000/api/manage/user/add

### 请求方式：
	POST

### 参数类型
| 参数     | 是否必选 | 类型   | 说明   |
| -------- | -------- | ------ | ------ |
| username | Y        | string | 用户名 |
| password | Y        | string | 密码   |
| phone    | N        | string | 手机号 |
| email    | N        | string | 邮箱   |
| role_id  | N        | string | 角色ID |



### 返回示例：
	成功:
	  {
	    "status": 0,
	    "data": {
	      "_id": "5c3b382c82a14446f4ffb647",
	      "username": "admin6",
	      "password": "d7b79bb6d6f77e6cbb5df2d0d2478361",
	      "phone": "13712341234",
	      "email": "test@qq.com",
	      "create_time": 1547384876804,
	      "__v": 0
	    }
	  }
	失败
	  {
	    "status": 1,
	    "msg": "此用户已存在"
	  }

## 3. 更新用户
### 请求URL：
	http://118.24.25.7:5000/api/manage/user/update

### 请求方式：
	POST

### 参数类型

| 参数     | 是否必选 | 类型   | 说明   |
| -------- | -------- | ------ | ------ |
| _id      | Y        | string | ID     |
| username | N        | string | 用户名 |
| phone    | N        | string | 手机号 |
| email    | N        | string | 邮箱   |
| role_id  | N        | string | 角色ID |



### 返回示例：
	成功:
	  {
	    "status": 0,
	    "data": {
	      "_id": "5c3b382c82a14446f4ffb647",
	      "username": "admin6",
	      "password": "d7b79bb6d6f77e6cbb5df2d0d2478361",
	      "phone": "13712341234",
	      "email": "test@qq.com",
	      "create_time": 1547384876804,
	      "__v": 0
	    }
	  }
	失败
	  {
	    "status": 1,
	    "msg": "此用户已存在"
	  }

## 4. 获取用户列表
### 请求URL：
	http://118.24.25.7:5000/api/manage/user/list

### 请求方式：
	GET

### 参数类型: 
| 参数     | 是否必选 | 类型   | 说明       |
| -------- | -------- | ------ | ---------- |
| pageNum  | 是       | Number | 当前页数   |
| pageSize | 是       | Number | 每页数据数 |

### 返回示例：
    {
    	"status": 0,
    	"data": {
    		"pageNum": "1",
    		"pageSize": "2",
    		"total": 6,
    		"list": [
    			{
    				"_id": "5d8481eaa3b23d15449030aa",
    				"username": "1234567",
    				"password": "202cb962ac59075b964b07152d234b70",
    				"phone": "18785465494",
    				"email": "18785465494@qq.com",
    				"role_id": "5d4a6cf6c402b4092484b9eb",
    				"create_time": 1568965098097,
    				"__v": 0
    			},
    			{
    				"_id": "5da4b36012c971011453b429",
    				"username": "aaa",
    				"password": "0b4e7a0e5fe84ad35fb5f95b9ceeac79",
    				"phone": "13880790302",
    				"email": "22@qq.com",
    				"role_id": "5d3a9db0a9595814c08e66a1",
    				"create_time": 1571074912458,
    				"__v": 0
    			}
    		],
    		"roles": [
    			{
    				"menus": [
    					"/home",
    					"/goods",
    					"/category",
    					"/product",
    					"/users",
    					"/user",
    					"/role",
    					"/orders",
    					"/order"
    				],
    				"_id": "5d3a9db0a9595814c08e66a1",
    				"name": "管理员",
    				"create_time": 1564122544647,
    				"__v": 0,
    				"auth_name": "admin",
    				"auth_time": 1571103909385
    			},
    			{
    				"menus": [
    					"/home",
    					"/goods",
    					"/category",
    					"/product",
    					"/users",
    					"/user",
    					"/role",
    					"/orders",
    					"/order"
    				],
    				"_id": "5d4a6ce7c402b4092484b9ea",
    				"name": "会员",
    				"create_time": 1565158631433,
    				"__v": 0,
    				"auth_name": "admin",
    				"auth_time": 1569052646409
    			},
    			{
    				"menus": [],
    				"_id": "5d4a6cf6c402b4092484b9eb",
    				"name": "超级管理员",
    				"create_time": 1565158646003,
    				"__v": 0,
    				"auth_name": "admin",
    				"auth_time": 1569032642677
    			},
    			{
    				"menus": [
    					"/home",
    					"/goods",
    					"/category",
    					"/product",
    					"/users",
    					"/user",
    					"/role",
    					"/orders",
    					"/order"
    				],
    				"_id": "5d4a6d02c402b4092484b9ec",
    				"name": "普通用户",
    				"create_time": 1565158658529,
    				"__v": 0,
    				"auth_name": "admin",
    				"auth_time": 1568022231742
    			},
    			{
    				"menus": [
    					"/home",
    					"/goods",
    					"/category",
    					"/product",
    					"/users",
    					"/user",
    					"/role",
    					"/orders",
    					"/order"
    				],
    				"_id": "5d776788a3b23d1544903002",
    				"name": "不不不",
    				"create_time": 1568106376514,
    				"__v": 0,
    				"auth_name": "123",
    				"auth_time": 1569075384808
    			},
    			{
    				"menus": [
    					"/users",
    					"/user",
    					"/role"
    				],
    				"_id": "5d7767b1a3b23d1544903003",
    				"name": "订单",
    				"create_time": 1568106417396,
    				"__v": 0,
    				"auth_name": "admin",
    				"auth_time": 1568255822259
    			},
    			{
    				"menus": [
    					"/home",
    					"/goods",
    					"/category",
    					"/product"
    				],
    				"_id": "5d791680a3b23d1544903017",
    				"name": "会员1",
    				"create_time": 1568216704234,
    				"__v": 0,
    				"auth_name": "admin",
    				"auth_time": 1569057980534
    			},
    			{
    				"menus": [
    					"/home"
    				],
    				"_id": "5d791e9ea3b23d1544903022",
    				"name": "用户",
    				"create_time": 1568218782414,
    				"__v": 0,
    				"auth_name": "admin",
    				"auth_time": 1568255833357
    			},
    			{
    				"menus": [
    					"/users",
    					"/user",
    					"/role"
    				],
    				"_id": "5d79a325a3b23d1544903027",
    				"name": "1515",
    				"create_time": 1568252709035,
    				"__v": 0,
    				"auth_name": "admin",
    				"auth_time": 1568252764971
    			},
    			{
    				"menus": [
    					"/orders",
    					"/order"
    				],
    				"_id": "5d79aee7a3b23d154490302f",
    				"name": "new",
    				"create_time": 1568255719577,
    				"__v": 0,
    				"auth_name": "admin",
    				"auth_time": 1568255839490
    			},
    			{
    				"menus": [
    					"/home",
    					"/users",
    					"/user",
    					"/role"
    				],
    				"_id": "5d7bed75a3b23d1544903069",
    				"name": "vvv",
    				"create_time": 1568402805560,
    				"__v": 0,
    				"auth_name": "admin",
    				"auth_time": 1569053140495
    			},
    			{
    				"menus": [
    					"/home",
    					"/goods",
    					"/category",
    					"/product",
    					"/users",
    					"/user",
    					"/role"
    				],
    				"_id": "5d7cb5e1a3b23d154490306e",
    				"name": "ff",
    				"create_time": 1568454113618,
    				"__v": 0,
    				"auth_name": "admin",
    				"auth_time": 1569057814770
    			},
    			{
    				"menus": [
    					"/home",
    					"/goods",
    					"/category",
    					"/product",
    					"/users",
    					"/user",
    					"/role",
    					"/orders",
    					"/order"
    				],
    				"_id": "5d7cb697a3b23d154490306f",
    				"name": "666",
    				"create_time": 1568454295261,
    				"__v": 0,
    				"auth_name": "admin",
    				"auth_time": 1569053358688
    			},
    			{
    				"menus": [
    					"/product"
    				],
    				"_id": "5d7cb6c1a3b23d1544903070",
    				"name": "role",
    				"create_time": 1568454337833,
    				"__v": 0,
    				"auth_name": "admin",
    				"auth_time": 1569053374369
    			},
    			{
    				"menus": [
    					"/home",
    					"/goods",
    					"/category",
    					"/product"
    				],
    				"_id": "5d7cc87da3b23d1544903071",
    				"name": "hhh",
    				"create_time": 1568458877664,
    				"__v": 0,
    				"auth_name": "admin",
    				"auth_time": 1569057965661
    			},
    			{
    				"menus": [
    					"/home",
    					"/product",
    					"/users",
    					"/user",
    					"/role",
    					"/orders",
    					"/order"
    				],
    				"_id": "5d7cc8dfa3b23d1544903072",
    				"name": "用户",
    				"create_time": 1568458975166,
    				"__v": 0,
    				"auth_name": "admin",
    				"auth_time": 1569147792280
    			},
    			{
    				"menus": [
    					"/goods",
    					"/category",
    					"/product",
    					"/role"
    				],
    				"_id": "5d84900ea3b23d15449030b9",
    				"name": "傻子",
    				"create_time": 1568968718280,
    				"__v": 0,
    				"auth_name": "123",
    				"auth_time": 1569150167507
    			},
    			{
    				"menus": [
    					"/home",
    					"/goods",
    					"/category",
    					"/product"
    				],
    				"_id": "5d85ecdda3b23d15449030c6",
    				"name": "会员2",
    				"create_time": 1569058013556,
    				"__v": 0,
    				"auth_name": "123",
    				"auth_time": 1569150159497
    			},
    			{
    				"menus": [
    					"/home",
    					"/goods",
    					"/category",
    					"/product",
    					"/users",
    					"/user",
    					"/role",
    					"/orders",
    					"/order"
    				],
    				"_id": "5da4ade64c0a9e31408f283a",
    				"name": "a",
    				"create_time": 1571073510826,
    				"__v": 0,
    				"auth_name": "admin",
    				"auth_time": 1571073524766
    			},
    			{
    				"menus": [
    					"/home",
    					"/goods",
    					"/category",
    					"/product",
    					"/users",
    					"/user",
    					"/role"
    				],
    				"_id": "5da6bf1f7157a50774e51ff8",
    				"name": "k",
    				"create_time": 1571208991982,
    				"__v": 0,
    				"auth_name": "admin",
    				"auth_time": 1571208999338
    			}
    		]
    	}
    }

## 5. 删除用户
### 请求URL：
	http://118.24.25.7:5000/api/manage/user/delete

### 请求方式：
	POST

### 参数类型:

| 参数   | 是否必选 | 类型   | 说明   |
| ------ | -------- | ------ | ------ |
| userId | Y        | string | 用户ID |



### 返回示例：
	{
	  "status": 0
	}

## 6. 获取分类列表
### 请求URL：
	http://118.24.25.7:5000/api/manage/category/list

### 请求方式：
	GET

### 参数类型: query

| 参数     | 是否必选 | 类型   | 说明         |
| -------- | -------- | ------ | ------------ |
| parentId | Y        | string | 父级分类的ID |
| pageNum  | Y        | Number | 当前页码     |
| pageSize | Y        | Number | 每页数据数   |



### 返回示例：
    一级分类:
    {
    	"status": 0,
    	"data": {
    		"pageNum": "1",
    		"pageSize": "5",
    		"total": 41,
    		"list": [
    			{
    				"parentId": "0",
    				"_id": "5d4a6d42c402b4092484b9ee",
    				"name": "aaaaaa",
    				"__v": 0
    			},
    			{
    				"parentId": "0",
    				"_id": "5d4a6d7cc402b4092484b9ef",
    				"name": "嘿~tui",
    				"__v": 0
    			},
    			{
    				"parentId": "0",
    				"_id": "5d4a6d9cc402b4092484b9f0",
    				"name": "电脑",
    				"__v": 0
    			},
    			{
    				"parentId": "0",
    				"_id": "5d4a6dacc402b4092484b9f1",
    				"name": "啊啊啊啊",
    				"__v": 0
    			},
    			{
    				"parentId": "0",
    				"_id": "5d4a6ddac402b4092484b9f2",
    				"name": "asd",
    				"__v": 0
    			}
    		]
    	}
    }
    二级分类
      {
    	"status": 0,
    	"data": {
    		"pageNum": "1",
    		"pageSize": "5",
    		"total": 5,
    		"list": [
    			{
    				"parentId": "5d4a6d9cc402b4092484b9f0",
    				"_id": "5d4a6e04c402b4092484b9f5",
    				"name": "电脑整机",
    				"__v": 0
    			},
    			{
    				"parentId": "5d4a6d9cc402b4092484b9f0",
    				"_id": "5d4a6e0ec402b4092484b9f6",
    				"name": "电脑配件",
    				"__v": 0
    			},
    			{
    				"parentId": "5d4a6d9cc402b4092484b9f0",
    				"_id": "5d4a6e28c402b4092484b9f7",
    				"name": "外设产品",
    				"__v": 0
    			},
    			{
    				"parentId": "5d4a6d9cc402b4092484b9f0",
    				"_id": "5d4a6e3ac402b4092484b9f8",
    				"name": "游戏设备",
    				"__v": 0
    			},
    			{
    				"parentId": "5d4a6d9cc402b4092484b9f0",
    				"_id": "5da51a809e16db2488b34aec",
    				"name": "aaa",
    				"__v": 0
    			}
    		]
    	}
    }


​      
## 7. 添加分类
### 请求URL：
    http://118.24.25.7:5000/api/manage/category/add

### 请求方式：
    POST

### 参数类型:

| 参数         | 是否必选 | 类型   | 说明         |
| ------------ | -------- | ------ | ------------ |
| parentId     | Y        | string | 父级分类的ID |
| categoryName | Y        | string | 名称         |



### 返回示例：
    添加一级分类:
        {
          "status": 0,
          "data": {
            "parentId": "0",
            "_id": "5c3ec1534594a00e5877b841",
            "name": "分类9",
            "__v": 0
          }
        }
    添加二级分类
        {
          "status": 0,
          "data": {
            "parentId": "5c2ed64cf352726338607048",
            "_id": "5c3ec1814594a00e5877b842",
            "name": "分类39",
            "__v": 0
          }
        }


## 8. 更新品类名称
### 请求URL：
    http://118.24.25.7:5000/api/manage/category/update

### 请求方式：
    POST

### 参数类型:

| 参数         | 是否必选 | 类型   | 说明     |
| ------------ | -------- | ------ | -------- |
| categoryId   | Y        | string | 自己的ID |
| categoryName | Y        | string | 名称     |



### 返回示例：
    {
      "status": 0
    }


## 9. 根据分类ID获取分类
### 请求URL：
    http://118.24.25.7:5000/api/manage/category/info

### 请求方式：
    GET

### 参数类型:

| 参数       | 是否必选 | 类型   | 说明         |
| ---------- | -------- | ------ | ------------ |
| categoryId | Y        | string | 父级分类的ID |



### 返回示例：
    {
      "status": 0,
      "data": {
        "parentId": "0",
        "_id": "5c2ed631f352726338607046",
        "name": "分类001",
        "__v": 0
      }
    }


## 10. 获取商品分页列表
### 请求URL：
    http://118.24.25.7:5000/api/manage/product/list

### 请求方式：
    GET

### 参数类型:

| 参数     | 是否必选 | 类型   | 说明       |
| -------- | -------- | ------ | ---------- |
| pageNum  | Y        | Number | 页码       |
| pageSize | Y        | Number | 每页条目数 |



### 返回示例：
    {
        "status": 0,
        "data": {
            "pageNum": 1,
            "total": 12,
            "pages": 3,
            "pageSize": 5,
            "list": [
                {
                    "status": 1,
                    "imgs": [
                        "image-1559402396338.jpg"
                    ],
                    "_id": "5ca9e05db49ef916541160cd",
                    "name": "联想ThinkPad 翼4809",
                    "desc": "年度重量级新品，X390、T490全新登场 更加轻薄机身设计9",
                    "price": 65999,
                    "pCategoryId": "5ca9d6c0b49ef916541160bb",
                    "categoryId": "5ca9db9fb49ef916541160cc",
                    "detail": "<p><span style=\"color: rgb(228,57,60);background-color: rgb(255,255,255);font-size: 12px;\">想你所需，超你所想！精致外观，轻薄便携带光驱，内置正版office杜绝盗版死机，全国联保两年！</span> 222</p>\n<p><span style=\"color: rgb(102,102,102);background-color: rgb(255,255,255);font-size: 16px;\">联想（Lenovo）扬天V110 15.6英寸家用轻薄便携商务办公手提笔记本电脑 定制【E2-9010/4G/128G固态】 2G独显 内置</span></p>\n<p><span style=\"color: rgb(102,102,102);background-color: rgb(255,255,255);font-size: 16px;\">99999</span></p>\n",
                    "__v": 0
                },
                {
                    "status": 1,
                    "imgs": [
                        "image-1559402448049.jpg",
                        "image-1559402450480.jpg"
                    ],
                    "_id": "5ca9e414b49ef916541160ce",
                    "name": "华硕(ASUS) 飞行堡垒",
                    "desc": "15.6英寸窄边框游戏笔记本电脑(i7-8750H 8G 256GSSD+1T GTX1050Ti 4G IPS)",
                    "price": 6799,
                    "pCategoryId": "5ca9d6c0b49ef916541160bb",
                    "categoryId": "5ca9db8ab49ef916541160cb",
                    "detail": "<p><span style=\"color: rgb(102,102,102);background-color: rgb(255,255,255);font-size: 16px;\">华硕(ASUS) 飞行堡垒6 15.6英寸窄边框游戏笔记本电脑(i7-8750H 8G 256GSSD+1T GTX1050Ti 4G IPS)火陨红黑</span>&nbsp;</p>\n<p><span style=\"color: rgb(228,57,60);background-color: rgb(255,255,255);font-size: 12px;\">【4.6-4.7号华硕集体放价，大牌够品质！】1T+256G高速存储组合！超窄边框视野无阻，强劲散热一键启动！</span>&nbsp;</p>\n",
                    "__v": 0
                },
                {
                    "status": 2,
                    "imgs": [
                        "image-1559402436395.jpg"
                    ],
                    "_id": "5ca9e4b7b49ef916541160cf",
                    "name": "你不知道的JS（上卷）",
                    "desc": "图灵程序设计丛书： [You Don't Know JS:Scope & Closures] JavaScript开发经典入门图书 打通JavaScript的任督二脉",
                    "price": 35,
                    "pCategoryId": "0",
                    "categoryId": "5ca9d6c9b49ef916541160bc",
                    "detail": "<p style=\"text-align:start;\"><span style=\"color: rgb(102,102,102);background-color: rgb(255,255,255);font-size: 16px;\">图灵程序设计丛书：你不知道的JavaScript（上卷）</span> <span style=\"color: rgb(102,102,102);background-color: rgb(255,255,255);font-size: 16px;\"><strong>[You Don't Know JS:Scope &amp; Closures]</strong></span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(227,57,60);background-color: rgb(255,255,255);font-size: 12px;\">JavaScript开发经典入门图书 打通JavaScript的任督二脉 领略语言内部的绝美风光</span>&nbsp;</p>\n",
                    "__v": 0
                },
                {
                    "status": 2,
                    "imgs": [
                        "image-1554638240202.jpg"
                    ],
                    "_id": "5ca9e5bbb49ef916541160d0",
                    "name": "美的(Midea) 213升-BCD-213TM",
                    "desc": "爆款直降!大容量三口之家优选! *节能养鲜,自动低温补偿,36分贝静音呵护",
                    "price": 1388,
                    "pCategoryId": "5ca9d695b49ef916541160ba",
                    "categoryId": "5ca9d9cfb49ef916541160c4",
                    "detail": "<p style=\"text-align:start;\"><span style=\"color: rgb(102,102,102);background-color: rgb(255,255,255);font-size: 16px;font-family: Arial, \"microsoft yahei;\">美的(Midea) 213升 节能静音家用三门小冰箱 阳光米 BCD-213TM(E)</span></p>\n<p><span style=\"color: rgb(228,57,60);background-color: rgb(255,255,255);font-size: 12px;font-family: tahoma, arial, \"Microsoft YaHei\", \"Hiragino Sans GB\", u5b8bu4f53, sans-serif;\">【4.8美的大牌秒杀日】爆款直降!大容量三口之家优选! *节能养鲜,自动低温补偿,36分贝静音呵护! *每天不到一度电,省钱又省心!</span>&nbsp;</p>\n",
                    "__v": 0
                },
                {
                    "status": 1,
                    "imgs": [
                        "image-1554638403550.jpg"
                    ],
                    "_id": "5ca9e653b49ef916541160d1",
                    "name": "美的（Midea）KFR-35GW/WDAA3",
                    "desc": "正1.5匹 变频 智弧 冷暖 智能壁挂式卧室空调挂机",
                    "price": 2499,
                    "pCategoryId": "5ca9d695b49ef916541160ba",
                    "categoryId": "5ca9da1ab49ef916541160c6",
                    "detail": "<p style=\"text-align:start;\"><span style=\"color: rgb(102,102,102);background-color: rgb(255,255,255);font-size: 16px;\">美的（Midea）正1.5匹 变频 智弧 冷暖 智能壁挂式卧室空调挂机 KFR-35GW/WDAA3@</span></p>\n<p style=\"text-align:start;\"></p>\n<p><span style=\"color: rgb(228,57,60);background-color: rgb(255,255,255);font-size: 12px;\">【4.8美的大牌秒杀日】提前加入购物车！2299元成交价！前50名下单送赠品加湿型电风扇，赠完即止！8日0点开抢！</span><a href=\"https://sale.jd.com/mall/LKHdqZUIYk.html\" target=\"_blank\"><span style=\"color: rgb(94,105,173);background-color: rgb(255,255,255);font-size: 12px;\">更有无风感柜挂组合套购立减500元！猛戳！！</span></a>&nbsp;</p>\n",
                    "__v": 0
                }
            ]
        }
    }

## 11. 搜索产品

通过商品名称或商品描述搜索商品

### 请求URL：
    http://118.24.25.7:5000/api/manage/product/search

### 请求方式：
    GET

### 参数类型:
| 参数        | 是否必选 | 类型   | 说明             |
| ----------- | -------- | ------ | ---------------- |
| pageNum     | Y        | Number | 页码             |
| pageSize    | Y        | Number | 每页条目数       |
| productName | N        | String | 根据商品名称搜索 |
| productDesc | N        | String | 根据商品描述搜索 |



### 返回示例：
    {
        "status": 0,
        "data": {
            "pageNum": 1,
            "total": 3,
            "pages": 1,
            "pageSize": 5,
            "list": [
                {
                    "status": 1,
                    "imgs": [
                        "image-1559402396338.jpg"
                    ],
                    "_id": "5ca9e05db49ef916541160cd",
                    "name": "联想ThinkPad 翼4809",
                    "desc": "年度重量级新品，X390、T490全新登场 更加轻薄机身设计9",
                    "price": 65999,
                    "pCategoryId": "5ca9d6c0b49ef916541160bb",
                    "categoryId": "5ca9db9fb49ef916541160cc",
                    "detail": "<p><span style=\"color: rgb(228,57,60);background-color: rgb(255,255,255);font-size: 12px;\">想你所需，超你所想！精致外观，轻薄便携带光驱，内置正版office杜绝盗版死机，全国联保两年！</span> 222</p>\n<p><span style=\"color: rgb(102,102,102);background-color: rgb(255,255,255);font-size: 16px;\">联想（Lenovo）扬天V110 15.6英寸家用轻薄便携商务办公手提笔记本电脑 定制【E2-9010/4G/128G固态】 2G独显 内置</span></p>\n<p><span style=\"color: rgb(102,102,102);background-color: rgb(255,255,255);font-size: 16px;\">99999</span></p>\n",
                    "__v": 0
                },
                {
                    "status": 2,
                    "imgs": [
                        "image-1554638240202.jpg"
                    ],
                    "_id": "5ca9e5bbb49ef916541160d0",
                    "name": "美的(Midea) 213升-BCD-213TM",
                    "desc": "爆款直降!大容量三口之家优选! *节能养鲜,自动低温补偿,36分贝静音呵护",
                    "price": 1388,
                    "pCategoryId": "5ca9d695b49ef916541160ba",
                    "categoryId": "5ca9d9cfb49ef916541160c4",
                    "detail": "<p style=\"text-align:start;\"><span style=\"color: rgb(102,102,102);background-color: rgb(255,255,255);font-size: 16px;font-family: Arial, \"microsoft yahei;\">美的(Midea) 213升 节能静音家用三门小冰箱 阳光米 BCD-213TM(E)</span></p>\n<p><span style=\"color: rgb(228,57,60);background-color: rgb(255,255,255);font-size: 12px;font-family: tahoma, arial, \"Microsoft YaHei\", \"Hiragino Sans GB\", u5b8bu4f53, sans-serif;\">【4.8美的大牌秒杀日】爆款直降!大容量三口之家优选! *节能养鲜,自动低温补偿,36分贝静音呵护! *每天不到一度电,省钱又省心!</span>&nbsp;</p>\n",
                    "__v": 0
                },
                {
                    "status": 1,
                    "imgs": [
                        "image-1554638676149.jpg",
                        "image-1554638683746.jpg"
                    ],
                    "_id": "5ca9e773b49ef916541160d2",
                    "name": "联想ThinkPad X1 Carbon",
                    "desc": "英特尔酷睿i5 14英寸轻薄笔记本电脑（i5-8250U 8G 256GSSD FHD）黑色",
                    "price": 9999,
                    "pCategoryId": "5ca9d6c0b49ef916541160bb",
                    "categoryId": "5ca9db78b49ef916541160ca",
                    "detail": "<p style=\"text-align:start;\"><span style=\"color: rgb(102,102,102);background-color: rgb(255,255,255);font-size: 16px;font-family: Arial, \"microsoft yahei;\">联想ThinkPad X1 Carbon 2018（09CD）英特尔酷睿i5 14英寸轻薄笔记本电脑（i5-8250U 8G 256GSSD FHD）黑色</span></p>\n<p><span style=\"color: rgb(228,57,60);background-color: rgb(255,255,255);font-size: 12px;font-family: tahoma, arial, \"Microsoft YaHei\", \"Hiragino Sans GB\", u5b8bu4f53, sans-serif;\">年度重量级新品，X390、T490全新登场 更加轻薄机身设计，全面的配置升级，让工作更便捷，让生活更轻松</span><a href=\"https://pro.jd.com/mall/active/2M4o7NTzHH6jEJXS7VbpbTAANQB9/index.html\" target=\"_blank\"><span style=\"color: rgb(94,105,173);background-color: rgb(255,255,255);font-size: 12px;font-family: tahoma, arial, \"Microsoft YaHei\", \"Hiragino Sans GB\", u5b8bu4f53, sans-serif;\">4月9日京东震撼首发，火爆预约</span></a>&nbsp;</p>\n",
                    "__v": 0
                }
            ]
        }
    }

## 12. 添加商品
### 请求URL：
    http://118.24.25.7:5000/api/manage/product/add

### 请求方式：
    POST

### 参数类型:
| 参数        | 是否必选 | 类型   | 说明           |
| ----------- | -------- | ------ | -------------- |
| categoryId  | Y        | string | 分类ID         |
| pCategoryId | Y        | string | 父分类ID       |
| name        | Y        | string | 商品名称       |
| desc        | N        | string | 商品描述       |
| price       | N        | string | 商品价格       |
| detail      | N        | string | 商品详情       |
| imgs        | N        | array  | 商品图片名数组 |



### 返回示例：
    {
        "status": 0,
        "data": {
            "status": 1,
            "imgs": [
                "image-1559467198366.jpg"
            ],
            "_id": "5cf394d29929a304dcc0c6eb",
            "name": "商品A",
            "desc": "一个笔记本",
            "price": 11111,
            "detail": "<p><strong>abc</strong></p>\n",
            "pCategoryId": "5ca9d6c0b49ef916541160bb",
            "categoryId": "5ca9db78b49ef916541160ca",
            "__v": 0
        }
    }

## 13. 更新商品
### 请求URL：
    http://118.24.25.7:5000/api/manage/product/update

### 请求方式：
    POST

### 参数类型:
| 参数        | 是否必选 | 类型   | 说明           |
| ----------- | -------- | ------ | -------------- |
| _id         | Y        | string | 商品ID         |
| categoryId  | Y        | string | 分类ID         |
| pCategoryId | Y        | string | 父分类ID       |
| name        | Y        | string | 商品名称       |
| desc        | N        | string | 商品描述       |
| price       | N        | string | 商品价格       |
| detail      | N        | string | 商品详情       |
| imgs        | N        | array  | 商品图片名数组 |



### 返回示例：
    {
      "status": 0
    }

## 14. 对商品进行上架/下架处理
### 请求URL：
    http://118.24.25.7:5000/api/manage/product/updateStatus

### 请求方式：
    POST

### 参数类型:

| 参数      | 是否必选 | 类型   | 说明       |
| --------- | -------- | ------ | ---------- |
| productId | Y        | string | 商品名称   |
| status    | Y        | number | 商品状态值 |



### 返回示例：
    {
      "status": 0
    }

## 15. 上传图片
### 请求URL：
    http://118.24.25.7:5000/api/manage/img/upload

### 请求方式：
    POST

### 参数类型:

| 参数  | 是否必选 | 类型 | 说明     |
| ----- | -------- | ---- | -------- |
| image | Y        | 文件 | 图片文件 |



### 返回示例：
    {
        "status": 0,
        "data": {
            "name": "image-1559466841118.jpg",
            "url": "http://118.24.25.7:5000/api/manage/upload/image-1559466841118.jpg"
        }
    }

## 16. 删除图片
### 请求URL：
    http://118.24.25.7:5000/api/manage/img/delete

### 请求方式：
    POST

### 参数类型:

| 参数 | 是否必选 | 类型   | 说明       |
| ---- | -------- | ------ | ---------- |
| name | Y        | string | 图片文件名 |



### 返回示例：
    {
      "status": 0
    }

## 17. 添加角色

### 请求URL：
    http://118.24.25.7:5000/api/manage/role/add

### 请求方式：
    POST

### 参数类型:
| 参数     | 是否必选 | 类型   | 说明     |
| -------- | -------- | ------ | -------- |
| roleName | Y        | string | 角色名称 |



### 返回示例：
    {
        "status": 0,
        "data": {
            "menus": [],
            "_id": "5cf39a319929a304dcc0c6ec",
            "name": "角色x",
            "create_time": 1559468593702,
            "__v": 0
        }
    }

## 18. 获取角色列表
### 请求URL：
    http://118.24.25.7:5000/api/manage/role/list

### 请求方式：
    GET

### 参数类型: 
### 

| 参数     | 是否必选 | 类型   | 说明       |
| -------- | -------- | ------ | ---------- |
| pageNum  | 是       | Number | 当前页数   |
| pageSize | 是       | Number | 每页数据数 |

### 返回示例：
    {
    	"status": 0,
    	"data": {
    		"pageNum": "1",
    		"pageSize": "2",
    		"total": 20,
    		"list": [
    			{
    				"menus": [
    					"/home",
    					"/goods",
    					"/category",
    					"/product",
    					"/users",
    					"/user",
    					"/role",
    					"/orders",
    					"/order"
    				],
    				"_id": "5d3a9db0a9595814c08e66a1",
    				"name": "管理员",
    				"create_time": 1564122544647,
    				"__v": 0,
    				"auth_name": "admin",
    				"auth_time": 1571103909385
    			},
    			{
    				"menus": [
    					"/home",
    					"/goods",
    					"/category",
    					"/product",
    					"/users",
    					"/user",
    					"/role",
    					"/orders",
    					"/order"
    				],
    				"_id": "5d4a6ce7c402b4092484b9ea",
    				"name": "会员",
    				"create_time": 1565158631433,
    				"__v": 0,
    				"auth_name": "admin",
    				"auth_time": 1569052646409
    			}
    		]
    	}
    }

## 19. 更新角色(给角色设置权限)
### 请求URL：
    http://118.24.25.7:5000/api/manage/role/update

### 请求方式：
    POST

### 参数类型:

| 参数      | 是否必选 | 类型   | 说明        |
| --------- | -------- | ------ | ----------- |
| _id       | Y        | string | 角色ID      |
| menus     | Y        | array  | 权限key数组 |
| auth_time | Y        | number | 权限时间    |
| auth_name | Y        | string | 权限人姓名  |



### 返回示例：
    {
        "status": 0,
        "data": {
            "menus": [
                "/role",
                "/charts/bar",
                "/home",
                "/category",
                "/user"
            ],
            "_id": "5ca9eaa1b49ef916541160d3",
            "name": "测试",
            "create_time": 1554639521749,
            "__v": 0,
            "auth_time": 1559469116470,
            "auth_name": "admin"
        }
    }

## 20. 获取天气信息(支持jsonp)
### 请求URL：
    http://api.map.baidu.com/telematics/v3/weather

### 请求方式：
    GET

### 参数类型:
| 参数     | 是否必选 | 类型   | 说明                                    |
| -------- | -------- | ------ | --------------------------------------- |
| location | Y        | string | 城市名称                                |
| output   | Y        | string | 返回数据格式: json                      |
| ak       | Y        | string | 唯一的应用key(3p49MVra6urFRGOT9s8UBWr2) |



### 返回示例：
    {
      "error": 0,
      "status": "success",
      "date": "2019-06-02",
      "results": [
        {
          "currentCity": "北京",
          "pm25": "119",
          "index": [
            {
              "des": "建议着长袖T恤、衬衫加单裤等服装。年老体弱者宜着针织长袖衬衫、马甲和长裤。",
              "tipt": "穿衣指数",
              "title": "穿衣",
              "zs": "舒适"
            },
            {
              "des": "不宜洗车，未来24小时内有雨，如果在此期间洗车，雨水和路上的泥水可能会再次弄脏您的爱车。",
              "tipt": "洗车指数",
              "title": "洗车",
              "zs": "不宜"
            },
            {
              "des": "各项气象条件适宜，无明显降温过程，发生感冒机率较低。",
              "tipt": "感冒指数",
              "title": "感冒",
              "zs": "少发"
            },
            {
              "des": "天气较好，赶快投身大自然参与户外运动，尽情感受运动的快乐吧。",
              "tipt": "运动指数",
              "title": "运动",
              "zs": "适宜"
            },
            {
              "des": "紫外线强度较弱，建议出门前涂擦SPF在12-15之间、PA+的防晒护肤品。",
              "tipt": "紫外线强度指数",
              "title": "紫外线强度",
              "zs": "弱"
            }
          ],
          "weather_data": [
            {
              "date": "周日 06月02日 (实时：30℃)",
              "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/duoyun.png",
              "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/leizhenyu.png",
              "weather": "多云转雷阵雨",
              "wind": "西南风3-4级",
              "temperature": "31 ~ 20℃"
            },
            {
              "date": "周一",
              "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/duoyun.png",
              "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/duoyun.png",
              "weather": "多云",
              "wind": "南风微风",
              "temperature": "34 ~ 20℃"
            },
            {
              "date": "周二",
              "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/leizhenyu.png",
              "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/leizhenyu.png",
              "weather": "雷阵雨",
              "wind": "东风微风",
              "temperature": "28 ~ 21℃"
            },
            {
              "date": "周三",
              "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/duoyun.png",
              "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/duoyun.png",
              "weather": "多云",
              "wind": "北风3-4级",
              "temperature": "33 ~ 19℃"
            }
          ]
        }
      ]
    }




## 21.  获取订单列表
### 请求URL：

 http://118.24.25.7:5000/api/manage/order/list

### 请求方式：

GET

### 参数类型:

| 参数     | 是否必选 | 类型   | 说明       |
| -------- | -------- | ------ | ---------- |
| pageNum  | 是       | Number | 当前页数   |
| pageSize | 是       | Number | 每页数据数 |

### 返回示例：

```json
{
	"status": 0,
	"data": {
		"pageNum": "1",
		"pageSize": "2",
		"total": 7,
		"list": [
			{
				"status": 1,
				"paymentMethod": 2,
				"_id": "5da30a5befd7ff31b0055742",
				"orderId": "1570966107803",
				"recipient": "七歌",
				"allPrice": 56924,
				"details": [
					{
						"imgs": [
							"image-1565159368065.jpg",
							"image-1565159370976.jpg"
						],
						"_id": "5da30a5befd7ff31b0055743",
						"name": "笔记本",
						"id": "5d4a7057c402b4092484b9f9",
						"info": "荣耀MagicBook 2019",
						"price": 4299,
						"count": 2
					}
				],
				"create_time": 1570966107797,
				"__v": 0
			},
			{
				"status": 1,
				"paymentMethod": 2,
				"_id": "5da30a59efd7ff31b005573e",
				"orderId": "1570966105480",
				"recipient": "学",
				"allPrice": 28587,
				"details": [
					{
						"imgs": [
							"image-1565159368065.jpg",
							"image-1565159370976.jpg"
						],
						"_id": "5da30a59efd7ff31b005573f",
						"name": "笔记本",
						"id": "5d4a7057c402b4092484b9f9",
						"info": "荣耀MagicBook 2019",
						"price": 4299,
						"count": 2
					}
				],
				"create_time": 1570966105506,
				"__v": 0
			}
		]
	}
}
```

## 22. 获取订单详情

### 请求URL：

http://118.24.25.7:5000/api/manage/order/info

### 请求方式：

GET

### 参数类型:

| 参数 | 是否必选 | 类型   | 说明   |
| ---- | -------- | ------ | ------ |
| id   | 是       | String | 订单ID |

### 返回示例：

```json
{
	"status": 0,
	"data": {
		"status": 1,
		"paymentMethod": 2,
		"_id": "5da30a5befd7ff31b0055742",
		"orderId": "1570966107803",
		"recipient": "七歌",
		"allPrice": 56924,
		"details": [
			{
				"imgs": [
					"image-1565159368065.jpg",
					"image-1565159370976.jpg"
				],
				"_id": "5da30a5befd7ff31b0055743",
				"name": "笔记本",
				"id": "5d4a7057c402b4092484b9f9",
				"info": "荣耀MagicBook 2019",
				"price": 4299,
				"count": 2
			}
		],
		"create_time": 1570966107797,
		"__v": 0
	}
}
```

## 23. 订单搜索

### 请求URL：

 http://118.24.25.7:5000/api/manage/order/search

### 请求方式：

GET

### 参数类型:

| 参数     | 是否必选 | 类型   | 说明                                           |
| -------- | -------- | ------ | ---------------------------------------------- |
| type     | 是       | String | 搜索类型（订单号：orderId，recipient：收件人） |
| value    | 是       | String | 搜索内容                                       |
| pageNum  | 是       | String | 当前页数                                       |
| pageSize | 是       | String | 每页数据数                                     |

### 返回示例：

```json
{
	"status": 0,
	"data": {
		"pageNum": "1",
		"pageSize": "5",
		"total": 1,
		"list": [
			{
				"status": 1,
				"paymentMethod": 2,
				"_id": "5da30a5befd7ff31b0055742",
				"orderId": "1570966107803",
				"recipient": "七歌",
				"allPrice": 56924,
				"details": [
					{
						"imgs": [
							"image-1565159368065.jpg",
							"image-1565159370976.jpg"
						],
						"_id": "5da30a5befd7ff31b0055743",
						"name": "笔记本",
						"id": "5d4a7057c402b4092484b9f9",
						"info": "荣耀MagicBook 2019",
						"price": 4299,
						"count": 2
					}
				],
				"create_time": 1570966107797,
				"__v": 0
			}
		]
	}
}
```







## 24. 添加订单

### 请求URL：

 http://118.24.25.7:5000/api/manage/order/add

### 请求方式：

POST

### 参数类型:

```json
{
    orderId,  // 订单号
    recipient, // 订单人
    status, // 支付状态   1--未完成，2--已完成，3--已取消
    paymentMethod, // 支付方式 1--支付宝，2--微信，3--银联
    allPrice, // 总价
    details:[  // 订单详情
        {
            name, // 商品名称
            id, // 商品ID
            info, // 商品描述
            imgs, // 商品图片（数组）
            price, // 商品价格
            count //商品数量
        }
    ],
}
```



### 返回示例：

