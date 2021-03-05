#  前台API文档

## 玩家 API

### 注册账号

- method:<font color=#CC3333 >**POST**</font>
- url:  <font color=#CC3333 >*/api/user/register*</font>
- header: `Accept  application/json`

**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
name|string|是|用户名 2-12位 ，只能由字母数字组成，不能使用特殊符号
email|string|是|邮箱
password|string|是|密码6-20位 



**错误返回：**
```json
{
    "code": 10042,
    "message": {
        "name": [
            "用户名不能为空"
        ],
        "password": [
            "密码不能为空"
        ],
        "email": [
            "邮箱不能为空"
        ]
    },
    "data": []
}
```

**成功返回:**
```json
{
    "code": 10000,
    "message": "创建成功",
    "data": ""
}
```


### 登录

---


- method:<font color=#CC3333 >**POST**</font>
- url:  <font color=#CC3333 >*/api/user/login*</font>
- header: `Accept  application/json`

**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
name|string|是|名称
email|string|是|邮箱
password|string|是|密码



返回：
```json
{
    "code": 10000,
    "message": "success",
    "data": {
        "token_type": "Bearer",
        "expires_in": 31536000,
        "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMzc2ODgxZWE4NTJhZDJkNTY2MDg0OTJhYjUzMzg2NzFmNzNjN2UyNDg1ODJlN2EwZGY4Mzc4NzI3OWNkMjc5MzlkYmNmZmI5NjMwMDAyYzUiLCJpYXQiOjE1OTA2NTE3NzgsIm5iZiI6MTU5MDY1MTc3OCwiZXhwIjoxNjIyMTg3Nzc4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.TetZkFkJpNNEWqvRb89J9BE6eReV6X_yYFTUMvrZucpra88E9XrL_UWd-L2aaeyCbS5Py4zZk3EKMXDmtub5Qiyt1Vod5aU4dUNF0RhSAU9h_Yanq611YvMihRoGYkYQYIChJw98v7vI4dDWblHQxWc1dLSb0ele2lUsJeUT7pm6CphAHxHvp8y6YQUbDMuNEhI_DW1BtYTDGQE-IbajHtT-T3-Hg_WV2q_ervv6AkhVELxHqD3gItYuyfM8U_l1k6p9Wq-1DpuariRbtK4XBXT-2Cbr3BEmoRkDUtH3qqtpyr4YnQKP-XBW00H_EMY73P-R32hKRYQzf167orkezZVvaynTL-Hk5RsdLkmKWleYHGfidHQ8ro9se6LgtmaXhEGT4eOfwLxJZg_GT2-MQxgUQakzdAWiEWWGv2d6X83VdjesMEIFs7USeljUiJxi5PgAvhPvY46vG3-aa31tr7LxVdCMkZpvoymlT9ar4StJWA05MlSOwMbL59KJV2akm_UTJXNHX0ttdrz74_XygquCdZfsI0T_Q5dJQp97rW4b_ELR0RHg_7GyhV5Gopo4pi4hTylNOu8IlZRzyV3iDelD1V_e1P8nl_sQ3ALp-VaWOUVnVFps2ly49kiNmxXcKql15iq2mslrPQPivfy99U28BeCD_ekFTOw4Q0fyTFs",
        "refresh_token": "def50200c68d6dcc344a79cadb1a97029a2e524e201fcc8df07142f82e7de94b6bb169124d271cfa98d6bd7d482c3760b39ba406f1237325b20fc044445c9828d30fc0095bbfbbeaaef3f3fb90f34d479fba7ade98c00d207b4e5f0f8574d2821df0d689caf5c685cfe90b928b513c8887e371b7e46a345ef00bd733513781e185b49b149d271d6378157fd2426119eb88bed976051465d596a52c72b861c955c1687cbd849387be10fcfd9fd451e33fdb0677d2be11763e27b7cce3a248ed9e302e165bb908bcbfb7e2d7430b1b1eda7699750f65a02db03dc5d2400eca3a40d8d770f0c9cb8f3aefb6ac8f5e103c57e249ec8b5833f59ee38e9e22728b6de8939506d90b19607d8163c90f78c6281bab5594cf5d90acf19da4d37bfe26d33a9598760c42b0d6c6b9071fce87b5842624d1b42fdddeded2007d7a772cfbef548acd4fa9af5ff4f0a7f2e1ab6edd1023698aca72d86bf294cb26a25871479fd6b0"
    }
}
```


### 获取当前登录玩家信息

---

- method:<font color=#CC3333 >**GET**</font>
- url:  <font color=#CC3333 >*/api/users/me*</font>
- header: `Accept  application/json`   `Authorization  Bearer $token`


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": {
        "id": 1,
        "name": "test",
        "email": "test@qq.com"
    }
}
```

### 修改个人资料

---

- method:<font color=#CC3333 >**PUT**</font>
- url:  <font color=#CC3333 >*/api/users/personal*</font>
- header: `Accept  application/json`   `Authorization  Bearer $token`


**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
name|string|否|名称
email|string|否|邮箱
password|string|否|密码


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```


### 发送邮箱验证

---

- method:<font color=#CC3333 >**POST**</font>
- url:  <font color=#CC3333 >*/api/users/send_email_verification*</font>
- header: `Accept  application/json`   `Authorization  Bearer $token`


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```

### 验证邮箱

---

- method:<font color=#CC3333 >**POST**</font>
- url:  <font color=#CC3333 >*/api/users/verify_email*</font>
- header: `Accept  application/json`   `Authorization  Bearer $token`


**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
code|int|是|发送到邮箱的验证码

**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```


### 发送忘记密码邮箱验证

---

- method:<font color=#CC3333 >**POST**</font>
- url:  <font color=#CC3333 >*/api/users/send_email_retrieve*</font>
- header: `Accept  application/json`   `Authorization  Bearer $token`


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```

### 重置密码

---

- method:<font color=#CC3333 >**POST**</font>
- url:  <font color=#CC3333 >*/api/users/retrieve_password*</font>
- header: `Accept  application/json`   `Authorization  Bearer $token`


**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
email|string|是|邮箱
code|string|是|发送到邮箱的验证码
password|string|是|密码 6-16
password_confirmation|string|是|确认密码

**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```


### 发送更换邮箱验证

---

- method:<font color=#CC3333 >**POST**</font>
- url:  <font color=#CC3333 >*/api/users/send_email_change*</font>
- header: `Accept  application/json`   `Authorization  Bearer $token`


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```

### 更换邮箱

---

- method:<font color=#CC3333 >**POST**</font>
- url:  <font color=#CC3333 >*/api/users/verify_email*</font>
- header: `Accept  application/json`   `Authorization  Bearer $token`


**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
code|string|是|发送到邮箱的验证码
email|string|是|新邮箱

**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```


### 玩家登出

---

- method:<font color=#CC3333 >**DELETE**</font>
- url:  <font color=#CC3333 >*/api/users/logout*</font>
- header: `Accept  application/json`   `Authorization  Bearer $token`


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```






## 帖子 API

### 帖子列表
- method:<font color=#CC3333 >**GET**</font>
- url:  <font color=#CC3333 >*/api/topics?page=1&page_size=10*</font>
- header: `Accept  application/json` 

**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
page|int|否|页码,默认为1
page_size|int|否|每页显示数目，默认为10



**成功返回:**
```json
{
    "data": [
        {
            "id": 1,
            "title": "标题111",
            "body": "内容11111",
            "created_at": "2020-05-29 15:39:00",
            "updated_at": "2020-05-29 15:39:00",
            "node": "技术",
            "tags": []
        }
    ],
    "links": {
        "first": "http://api.luntan.test/api/topics?page=1",
        "last": "http://api.luntan.test/api/topics?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "path": "http://api.luntan.test/api/topics",
        "per_page": 10,
        "to": 1,
        "total": 1
    }
}
```

### 发帖详情

---


- method:<font color=#CC3333 >**GET**</font>
- url:  <font color=#CC3333 >*/api/topics/{id}*</font>
- header: `Accept  application/json`  `Authorization  Bearer $token`




**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data":
    {
        "id": 1,
        "title": "标题111",
        "body": "内容11111",
        "created_at": "2020-05-29 15:39:00",
        "updated_at": "2020-05-29 15:39:00",
        "node": "技术",
        "tags": []
    }
}
```

### 发帖

---


- method:<font color=#CC3333 >**POST**</font>
- url:  <font color=#CC3333 >*/api/topics*</font>
- header: `Accept  application/json`  `Authorization  Bearer $token`

**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
title|string|是|标题
node_id|int|是|节点ID
body|string|是|内容



**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": ""
}
```


### 修改帖子

---

- method:<font color=#CC3333 >**PUT**</font>
- url:  <font color=#CC3333 >*/api/topics/{id}*</font>
- header: `Accept  application/json` `Authorization  Bearer $token`

**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
title|string|否|标题
node_id|int|否|节点ID
body|string|否|内容



**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": ""
}
```

### 删除帖子

---

- method:<font color=#CC3333 >**DELETE**</font>
- url:  <font color=#CC3333 >*/api/topics/{id}*</font>
- header: `Accept  application/json` `Authorization  Bearer $token`



**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": ""
}
```


### 点赞

---

- method:<font color=#CC3333 >**POST**</font>
- url:  <font color=#CC3333 >*/api/topics/favor/{id}*</font>
- header: `Accept  application/json` `Authorization  Bearer $token`


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": ""
}
```

### 取消点赞

---

- method:<font color=#CC3333 >**POST**</font>
- url:  <font color=#CC3333 >*/api/topic/disfavor/{id}*</font>
- header: `Accept  application/json` `Authorization  Bearer $token`


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": ""
}
```

### 收藏

---

- method:<font color=#CC3333 >**POST**</font>
- url:  <font color=#CC3333 >*/api/topic/collect/{id}*</font>
- header: `Accept  application/json` `Authorization  Bearer $token`



**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": ""
}
```

### 取消收藏

---

- method:<font color=#CC3333 >**POST**</font>
- url:  <font color=#CC3333 >*/api/topic/cancel_collect/{id}*</font>
- header: `Accept  application/json` `Authorization  Bearer $token`



**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": ""
}
```

## 评论 API

### 发表评论

- method:<font color=#CC3333 >**POST**</font>
- url:  <font color=#CC3333 >*/api/replies/store*</font>
- header: `Accept  application/json` `Authorization  Bearer $token`

**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
topic_id|int|是|帖子ID
content|string|是|评论内容



**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": ""
}
```

### 删除评论

---

- method:<font color=#CC3333 >**DELETE**</font>
- url:  <font color=#CC3333 >*/api/replies/{id}*</font>
- header: `Accept  application/json` `Authorization  Bearer $token`


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": ""
}
```


## 标签API

### 所有标签

---
- method:<font color=#CC3333 >**GET**</font>
- url:  <font color=#CC3333 >*/api/tags/all*</font>
- header: `Accept  application/json`


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": [
        {
            "id": 1,
            "name": "php"
        },
        {
            "id": 2,
            "name": "laravel"
        }
    ]
}
```

## 节点API

### 所有节点

- method:<font color=#CC3333 >**GET**</font>
- url:  <font color=#CC3333 >*/api/nodes/all*</font>
- header: `Accept  application/json`


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": [
        {
            "name": "技术",
            "description": "技术为主",
            "icon": null,
            "post_count": 0
        },
        {
            "name": "分享",
            "description": "分享你的故事",
            "icon": null,
            "post_count": 0
        }
    ]
}
```
