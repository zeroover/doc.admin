#  后台API文档


## 管理员 API

### 登录

- method:<font color=#CC3333 >**POST**</font>
- url:  <font color=#CC3333 >*/api/admin/login*</font>
- header: `Accept  application/json`

**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
name|string|是|账号（测试账密：admin/123456）
password|string|是|密码

**错误返回:**
```json
{
    "code": 10001,
    "message": "账号或密码错误",
    "data": []
}
```

**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": {
        "token_type": "Bearer",
        "expires_in": 31536000,
        "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMzlhM2FkMjQ5OGY1ZWVkN2U3NTM3NzA1ZjY2MDQ4Yzg0YzU3MWU3MWFjYjI1YzVkZGRlNzdjMjFkZjA3OWNhYjdkYTk3NGYxNjNmODhmMjkiLCJpYXQiOjE1OTA3MjAzOTksIm5iZiI6MTU5MDcyMDM5OSwiZXhwIjoxNjIyMjU2Mzk5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.XjczHqIgsZHzW8-y4LnTLGMzzbtzwBncbDnN3cIUCPXsDLUHctheJ4s5z3XidrtrXQJcpRl_L1lwdgYzfpQY0j9JW-iMhN9-mgi7CNjsqUgJyp3lOxAHl7DL731Va6ayG9xAhiVE7K7Mbm_LpY8TX3aEKvHuTo2_k0Mc9nMQsbrQvUGv-hCOvtGpYQyskmCz0QqQ18tVf9tVy3XLjpBJ0ZoVCI9QNILRoOqAnOjDMTp7dIKR-g1pT5sF584vSmoOxlc1QG5EmtTooQdSM2ACG3PlEnakGqXYHo5x6F9TD45SMpnx7kHolv7LjXiT3YC3suyq3oMoB3npNowU98pyzmmivS2zON3jXmJMU0CbJrwwgJLryA1VgB3Jp-6OuZDjC2QXPPRRF3I06s4q18QiowLqKTdbRmjNs7tObz3VeIBHPxeXzbC6X03IYbH7qsNzZ-ScdUxRZtx5CBJkbDYlERcvWnnosSZxIONCpkdc956TWOOiuKm9LkH8Fb8CDsmO-vzAgeB8pQwOPWj_6KvF8KF-T9Xyq1U_OxJ_itUlnnsluNDA58HEtboN-XZCpighQFV0QUsCw96S5_GY2JWR2yMHJHAnRM2ZXmgh41hLKASb4W3kkYPOeYlgcAChvYaI_fKVYZL9PqUuNOUSQ3HI7q38XlW20R9bb3SGKNGMtvo",
        "refresh_token": "def5020097f7f2399dc3a983a7d15a6f0b0f36dd61f8b22a35f0888caef7e8e65e77fa1c57a274a7bde92446781cbab742a0f6f313fc5d9878f2b7fdc8ea4695960197508d09bb167383c8059410b20d84a22d6bdb58e184f3865ef8e92a4f169028e64b672ca61447ea79617ff60890d8551249a2d70953dde3f1e65fd530d160f53fc22eae4cf647a91efac7e605872d6dc3f8e8b04bdc36f5fe5c53e733f3f5a39332e28e6e0a1ff031cb5af57f4e599c7a66f43dca3dc90293a646cc45a844e570fd7b030463720e1ad9687e5c4d9a70a29f9b6814ecd3c0f0295b43783da9196c0d1a060ac5be606f0c352a45f826b7beaf62a3632341cba70d95cd6a61d2767a007766a65396bddecd41f5732e1fc7c01ec3e7557bf06be67702149218551b6eefc929c375edfd07b2944ab455b791621d00f959a6fe75fbca51416526bbb9f7d823b8d87ef69484bd9ec94f18cc780f3a25db52eca4dc15f74e3b476269"
    }
}
```

### 获取当前登录管理员信息

---

- method:<font color=#CC3333 >**GET**</font>
- url:  <font color=#CC3333 >*/api/admin/admins/me*</font>
- header: `Accept  application/json`   `Authorization  Bearer $token`


**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
include|string|否|permissions


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": {
        "id": 4,
        "avatar": null,
        "is_super": 0,
        "name": "test",
        "email": "test@qq.com",
        "roles": [
            {
                "id": 2,
                "name": "普通管理员",
                "slug": "admin",
                "created_at": "2017-02-03 09:52:51"
            }
        ]
    }
}
```

### 管理员登出

---

- method:<font color=#CC3333 >**DELETE**</font>
- url:  <font color=#CC3333 >*/api/admin/admins/logout*</font>
- header: `Accept  application/json`   `Authorization  Bearer $token`


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```

### 管理员列表

---

- method:<font color=#CC3333 >**GET**</font>
- url:  <font color=#CC3333 >*/api/admin/admins?page=1&page_size=10*</font>
- header: `Accept  application/json`    `Authorization  Bearer $token`

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
            "id": 4,
            "avatar": null,
            "is_super": 0,
            "name": "test",
            "email": "test@qq.com",
            "roles": [
                {
                    "id": 2,
                    "name": "普通管理员",
                    "slug": "admin",
                    "created_at": "2017-02-03 09:52:51"
                }
            ]
        }
    ],
    "links": {
        "first": "http://api.admin.test/api/admin/admins?page=1",
        "last": "http://api.admin.test/api/admin/admins?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "path": "http://api.admin.test/api/admin/admins",
        "per_page": 10,
        "to": 1,
        "total": 1
    }
}
```


### 获取单个管理员

---

- method:<font color=#CC3333 >**GET**</font>
- url:  <font color=#CC3333 >*/api/admin/admins/{id}*</font>
- header: `Accept  application/json`    `Authorization  Bearer $token`

**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
include|string|否|每页显示数目，默认为10



**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": {
        "id": 4,
        "avatar": null,
        "is_super": 0,
        "name": "test",
        "email": "test@qq.com",
        "roles": [
            {
                "id": 2,
                "name": "普通管理员",
                "slug": "admin",
                "created_at": "2017-02-03 09:52:51"
            }
        ]
    }
}
```

### 新增管理员

---

- method:<font color=#CC3333 >**POST**</font>
- url:  <font color=#CC3333 >*/api/admin/admins*</font>
- header: `Accept  application/json`    `Authorization  Bearer $token`

**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
name|string|是|用户名 小写字母与数字组合
password|string|是|密码 最小 6 位
email|string|是|邮箱
roles[]|array|否|角色id
permissions[]|array|否|权限ID



**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```

### 更新管理员

---

- method:<font color=#CC3333 >**PUT**</font>
- url:  <font color=#CC3333 >*/api/admin/admins/{id}*</font>
- header: `Accept  application/json`    `Authorization  Bearer $token`

**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
name|string|是|用户名 小写字母与数字组合
password|string|是|密码 最小 6 位
email|string|是|邮箱
roles[]|array|否|角色id
permissions[]|array|否|权限ID



**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```

### 给管理员赋角色

---

- method:<font color=#CC3333 >**POST**</font>
- url:  <font color=#CC3333 >*/api/admin/admins/{id}/roles*</font>
- header: `Accept  application/json`    `Authorization  Bearer $token`

**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
roles[]|array|否|权限ID


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```


### 给管理员赋权限

---

- method:<font color=#CC3333 >**POST**</font>
- url:  <font color=#CC3333 >*/api/admin/admins/{id}/permissions*</font>
- header: `Accept  application/json`    `Authorization  Bearer $token`

**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
permissions[]|array|否|权限ID


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```


### 删除管理员

---

- method:<font color=#CC3333 >**DELETE**</font>
- url:  <font color=#CC3333 >*/api/admin/admins/{id}*</font>
- header: `Accept  application/json`    `Authorization  Bearer $token`


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```

## 角色



### 角色列表

---

- method:<font color=#CC3333 >**GET**</font>
- url:  <font color=#CC3333 >*/api/admin/roles?page=1&page_size=10*</font>
- header: `Accept  application/json`    `Authorization  Bearer $token`

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
            "name": "超级管理员",
            "slug": "super_admin",
            "created_at": "2017-02-03 09:52:51"
        },
        {
            "id": 2,
            "name": "普通管理员",
            "slug": "admin",
            "created_at": "2017-02-03 09:52:51"
        }
    ],
    "links": {
        "first": "http://api.admin.test/api/admin/roles?page=1",
        "last": "http://api.admin.test/api/admin/roles?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "path": "http://api.admin.test/api/admin/roles",
        "per_page": 10,
        "to": 2,
        "total": 2
    }
}
```


### 获取单个角色

---

- method:<font color=#CC3333 >**GET**</font>
- url:  <font color=#CC3333 >*/api/admin/roles/{id}*</font>
- header: `Accept  application/json`    `Authorization  Bearer $token`

**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
include|string|否|permissions



**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": {
        "id": 2,
        "name": "普通管理员",
        "slug": "admin",
        "created_at": "2017-02-03 09:52:51",
        "permissions": [
            {
                "id": 1,
                "name": "后台首页",
                "slug": "admin.init",
                "http_method": "get",
                "http_path": "api/admin/index"
            },
            {
                "id": 2,
                "name": "管理员列表",
                "slug": "admin.index",
                "http_method": "get",
                "http_path": "api/admin/admins"
            },
            {
                "id": 5,
                "name": "查看单个管理员",
                "slug": "admin.show",
                "http_method": "get",
                "http_path": "api/admin/admins/*"
            }
            ...
        ]
    }
}
```

### 新增角色

---

- method:<font color=#CC3333 >**POST**</font>
- url:  <font color=#CC3333 >*/api/admin/roles*</font>
- header: `Accept  application/json`    `Authorization  Bearer $token`

**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
name|string|是|用户名 小写字母与数字组合
slug|string|是|标记



**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```

### 更新角色

---

- method:<font color=#CC3333 >**PUT**</font>
- url:  <font color=#CC3333 >*/api/admin/roles/{id}*</font>
- header: `Accept  application/json`    `Authorization  Bearer $token`

**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
name|string|是|用户名 小写字母与数字组合
slug|string|是|标记
menus[]|array|否|角色id
permissions[]|array|否|权限ID



**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```

### 给角色赋菜单

---

- method:<font color=#CC3333 >**POST**</font>
- url:  <font color=#CC3333 >*/api/admin/roles/{id}/menus*</font>
- header: `Accept  application/json`    `Authorization  Bearer $token`

**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
menus[]|array|否|权限ID


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```


### 给角色赋权限

---

- method:<font color=#CC3333 >**POST**</font>
- url:  <font color=#CC3333 >*/api/admin/roles/{id}/permissions*</font>
- header: `Accept  application/json`    `Authorization  Bearer $token`

**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
permissions[]|array|否|权限ID


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```


### 删除角色

---

- method:<font color=#CC3333 >**DELETE**</font>
- url:  <font color=#CC3333 >*/api/admin/roles/{id}*</font>
- header: `Accept  application/json`    `Authorization  Bearer $token`


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```


## 权限



### 权限列表

---

- method:<font color=#CC3333 >**GET**</font>
- url:  <font color=#CC3333 >*/api/admin/permissions?page=1&page_size=10*</font>
- header: `Accept  application/json`    `Authorization  Bearer $token`

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
            "name": "后台首页",
            "slug": "admin.init",
            "http_method": "get",
            "http_path": "api/admin/index"
        },
        {
            "id": 2,
            "name": "管理员列表",
            "slug": "admin.index",
            "http_method": "get",
            "http_path": "api/admin/admins"
        },
        {
            "id": 3,
            "name": "新增管理员",
            "slug": "admin.store",
            "http_method": "post",
            "http_path": "api/admin/admins"
        },
        {
            "id": 4,
            "name": "修改管理员",
            "slug": "admin.update",
            "http_method": "put",
            "http_path": "api/admin/admins/*"
        },
        {
            "id": 5,
            "name": "查看单个管理员",
            "slug": "admin.show",
            "http_method": "get",
            "http_path": "api/admin/admins/*"
        },
        {
            "id": 6,
            "name": "删除管理员",
            "slug": "admin.destroy",
            "http_method": "delete",
            "http_path": "api/admin/admins/*"
        },
        {
            "id": 7,
            "name": "给管理员赋权限",
            "slug": "admin.permissions",
            "http_method": "post",
            "http_path": "api/admin/admins/*/permissions"
        },
        {
            "id": 8,
            "name": "给管理员添加角色",
            "slug": "admin.menus",
            "http_method": "post",
            "http_path": "api/admin/admins/*/permissions"
        },
        {
            "id": 9,
            "name": "角色列表",
            "slug": "role.index",
            "http_method": "get",
            "http_path": "api/admin/roles"
        },
        {
            "id": 10,
            "name": "新增角色",
            "slug": "role.store",
            "http_method": "post",
            "http_path": "api/admin/roles"
        }
    ],
    "links": {
        "first": "http://api.admin.test/api/admin/permissions?page=1",
        "last": "http://api.admin.test/api/admin/permissions?page=3",
        "prev": null,
        "next": "http://api.admin.test/api/admin/permissions?page=2"
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 3,
        "path": "http://api.admin.test/api/admin/permissions",
        "per_page": 10,
        "to": 10,
        "total": 30
    }
}
```


### 获取单个权限

---

- method:<font color=#CC3333 >**GET**</font>
- url:  <font color=#CC3333 >*/api/admin/permissions/{id}*</font>
- header: `Accept  application/json`    `Authorization  Bearer $token`


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": {
        "id": 2,
        "name": "管理员列表",
        "slug": "admin.index",
        "http_method": "get",
        "http_path": "api/admin/admins"
    }
}
```

### 新增权限

---

- method:<font color=#CC3333 >**POST**</font>
- url:  <font color=#CC3333 >*/api/admin/permissions*</font>
- header: `Accept  application/json`    `Authorization  Bearer $token`

**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
name|string|是|名称
slug|string|是|标记
http_path|string|是|路由地址
http_method|string|是|请求方法'get', 'post', 'put', 'delete', 'patch', 'options', 'head', '*'为所有方法



**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```

### 更新权限

---

- method:<font color=#CC3333 >**PUT**</font>
- url:  <font color=#CC3333 >*/api/admin/permissions/{id}*</font>
- header: `Accept  application/json`    `Authorization  Bearer $token`

**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
name|string|是|名称
slug|string|是|标记
http_path|string|是|路由地址
http_method|string|是|请求方法'get', 'post', 'put', 'delete', 'patch', 'options', 'head', '*'为所有方法



**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```


### 删除角色

---

- method:<font color=#CC3333 >**DELETE**</font>
- url:  <font color=#CC3333 >*/api/admin/roles/{id}*</font>
- header: `Accept  application/json`    `Authorization  Bearer $token`


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```


## 菜单



### 菜单列表

---

- method:<font color=#CC3333 >**GET**</font>
- url:  <font color=#CC3333 >*/api/admin/menus?page=1&page_size=10*</font>
- header: `Accept  application/json`    `Authorization  Bearer $token`

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
            
        }
    ],
    "links": {
        "first": "http://api.luntan.test/api/admin/admins?page=1",
        "last": "http://api.luntan.test/api/admin/admins?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "path": "http://api.luntan.test/api/admin/admins",
        "per_page": 10,
        "to": 1,
        "total": 1
    }
}
```


### 获取单个菜单

---

- method:<font color=#CC3333 >**GET**</font>
- url:  <font color=#CC3333 >*/api/admin/menus/{id}*</font>
- header: `Accept  application/json`    `Authorization  Bearer $token`


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```

### 新增菜单

---

- method:<font color=#CC3333 >**POST**</font>
- url:  <font color=#CC3333 >*/api/admin/menus*</font>
- header: `Accept  application/json`    `Authorization  Bearer $token`

**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
parent_id|int|是|上级菜单ID
order|int|是|排序
title|string|是|名称
icon|string|是|标记
uri|string|是|地址
hidden|int|是|0隐藏1显示



**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```

### 更新菜单

---

- method:<font color=#CC3333 >**PUT**</font>
- url:  <font color=#CC3333 >*/api/admin/menus/{id}*</font>
- header: `Accept  application/json`    `Authorization  Bearer $token`

**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
parent_id|int|是|上级菜单ID
order|int|是|排序
title|string|是|名称
icon|string|是|标记
uri|string|是|地址
hidden|int|是|0隐藏1显示



**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```


### 删除菜单

---

- method:<font color=#CC3333 >**DELETE**</font>
- url:  <font color=#CC3333 >*/api/admin/menus/{id}*</font>
- header: `Accept  application/json`    `Authorization  Bearer $token`


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```


## 用户 API

### 用户列表
- method:<font color=#CC3333 >**GET**</font>
- url:  <font color=#CC3333 >*/api/admin/users?page=1&page_size=10*</font>
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

### 单个用户详情
- method:<font color=#CC3333 >**GET**</font>
- url:  <font color=#CC3333 >*/api/admin/users/{id}*</font>
- header: `Accept  application/json` 

**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": ""
}
```


### 修改用户

---

- method:<font color=#CC3333 >**PUT**</font>
- url:  <font color=#CC3333 >*/api/admin/users/{id}*</font>
- header: `Accept  application/json` `Authorization  Bearer $token`

**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
status|int|否|状态 1正常0禁用

**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": ""
}
```

### 删除用户

---

- method:<font color=#CC3333 >**DELETE**</font>
- url:  <font color=#CC3333 >*/api/admin/users/{id}*</font>
- header: `Accept  application/json` `Authorization  Bearer $token`


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": ""
}
```



## 帖子 API

### 帖子列表
- method:<font color=#CC3333 >**GET**</font>
- url:  <font color=#CC3333 >*/api/admin/topics?page=1&page_size=10*</font>
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

### 帖子详情
- method:<font color=#CC3333 >**GET**</font>
- url:  <font color=#CC3333 >*/api/admin/topics/{id}*</font>
- header: `Accept  application/json` 

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
- url:  <font color=#CC3333 >*/api/admin/topics/{id}*</font>
- header: `Accept  application/json` `Authorization  Bearer $token`


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
- url:  <font color=#CC3333 >*/api/admin/topics/{id}*</font>
- header: `Accept  application/json` `Authorization  Bearer $token`


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": ""
}
```


## 回复 API

### 回复列表
- method:<font color=#CC3333 >**GET**</font>
- url:  <font color=#CC3333 >*/api/admin/nodes?page=1&page_size=10*</font>
- header: `Accept  application/json`    `Authorization  Bearer $token`

**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
page|int|否|页码,默认为1
page_size|int|否|每页显示数目，默认为10


**成功返回:**
```json
{
    "data": [
        
    ],
    "links": {
        "first": "http://api.luntan.test/api/nodes?page=1",
        "last": "http://api.luntan.test/api/nodes?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "path": "http://api.luntan.test/api/nodes",
        "per_page": 10,
        "to": 2,
        "total": 2
    }
}
```

### 回复详情
- method:<font color=#CC3333 >**GET**</font>
- url:  <font color=#CC3333 >*/api/admin/replies/{id}*</font>
- header: `Accept  application/json` 

**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": ""
}
```

### 修改回复

---

- method:<font color=#CC3333 >**PUT**</font>
- url:  <font color=#CC3333 >*/api/admin/replies/{id}*</font>
- header: `Accept  application/json` `Authorization  Bearer $token`


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": ""
}
```

### 删除回复

---

- method:<font color=#CC3333 >**DELETE**</font>
- url:  <font color=#CC3333 >*/api/admin/replies/{id}*</font>
- header: `Accept  application/json` `Authorization  Bearer $token`


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": ""
}
```


## 节点 API


### 节点列表
- method:<font color=#CC3333 >**GET**</font>
- url:  <font color=#CC3333 >*/api/admin/nodes?page=1&page_size=10*</font>
- header: `Accept  application/json`    `Authorization  Bearer $token`

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
    ],
    "links": {
        "first": "http://api.luntan.test/api/nodes?page=1",
        "last": "http://api.luntan.test/api/nodes?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "path": "http://api.luntan.test/api/nodes",
        "per_page": 10,
        "to": 2,
        "total": 2
    }
}
```

### 创建节点

---



- method:<font color=#CC3333 >**POST**</font>
- url:  <font color=#CC3333 >*/api/admin/nodes*</font>
- header: `Accept  application/json` `Authorization  Bearer $token`

**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
name|string|是|名称
description|string|是|描述


**错误返回：**
```json
{
    "code": 10042,
    "message": {
        "name": [
            "名称不能为空"
        ],
        "description": [
            "描述不能为空"
        ]
    },
    "data": []
}
```



**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```

### 修改节点

---



- method:<font color=#CC3333 >**PUT**</font>
- url:  <font color=#CC3333 >*/api/admin/replies/{id}*</font>
- header: `Accept  application/json` `Authorization  Bearer $token`


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": ""
}
```

### 删除节点

---



- method:<font color=#CC3333 >**DELETE**</font>
- url:  <font color=#CC3333 >*/api/admin/nodes/{id}*</font>
- header: `Accept  application/json` `Authorization  Bearer $token`


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": ""
}
```


## 标签 API

### 标签列表
- method:<font color=#CC3333 >**GET**</font>
- url:  <font color=#CC3333 >*/api/admin/tags?page=1&page_size=10*</font>
- header: `Accept  application/json`    `Authorization  Bearer $token`

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
            "name": "php"
        },
        {
            "id": 2,
            "name": "laravel"
        },
        {
            "id": 3,
            "name": "技术"
        }
    ],
    "links": {
        "first": "http://api.luntan.test/api/tags?page=1",
        "last": "http://api.luntan.test/api/tags?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "path": "http://api.luntan.test/api/tags",
        "per_page": 10,
        "to": 3,
        "total": 3
    }
}
```


### 创建标签

---

- method:<font color=#CC3333 >**POST**</font>
- url:  <font color=#CC3333 >*/api/admin/tags*</font>
- header: `Accept  application/json` `Authorization  Bearer $token`

**请求字段：**
字段|属性|是否必须|说明
:--:|:--:|:--:|:--:
name|string|是|名称


**错误返回：**
```json
{
    "code": 10042,
    "message": {
        "name": [
            "名称不能为空"
        ],
    },
    "data": []
}
```



**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```

### 修改标签

---

- method:<font color=#CC3333 >**PUT**</font>
- url:  <font color=#CC3333 >*/api/admin/tags/{id}*</font>
- header: `Accept  application/json` `Authorization  Bearer $token`


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": ""
}
```

### 删除标签

---

- method:<font color=#CC3333 >**DELETE**</font>
- url:  <font color=#CC3333 >*/api/tags/{id}*</font>
- header: `Accept  application/json` `Authorization  Bearer $token`


**成功返回:**
```json
{
    "code": 10000,
    "message": "success",
    "data": ""
}
```

