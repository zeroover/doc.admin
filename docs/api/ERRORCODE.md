# 错误码说明

::: danger
当 **code** 不为 10000 时，即为报错，错误信息会在 **msg** 中说明
:::

>一般返回格式
```json
{
    "code": 10000,
    "message": "success",
    "data": []
}
```



> 当token不存在或者token错误或者token过期时会返回下面错误码
```json
{
    "code": 10401,
    "message": "未授权",
    "data": []
}
```

>404
```json
{
    "code": 10404,
    "message": "没有找到该接口",
    "data": []
}
```

>请求过于频繁
```json
{
    "code": 10429,
    "message": "请求次数过于频繁",
    "data": []
}
```


>表单报错返回格式
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


>带分页信息的返回格式
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
