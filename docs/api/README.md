![](../.vuepress/public/jsonapi.png)

本论坛 采用 JSON 构建 API 的标准指南

JSON API 是数据交互规范，用以定义客户端如何获取与修改资源，以及服务器如何响应对应请求。

JSON API 设计用来最小化请求的数量，以及客户端与服务器间传输的数据量。在高效实现的同时，无需牺牲可读性、灵活性和可发现性。
## 项目描述

- 前后端分离论坛项目
- 前端版本 1.0.0
- 后端API版本 1.0.0

## API认证方式

目前所有的接口使用 `Oauth2 Password` 方式，也就是 `JWT Authorization Bearer header` 进认证。