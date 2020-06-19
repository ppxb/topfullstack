# topfullstack

使用 typescript 开发的全栈视频网站项目，B 站 UP 🐖 全栈之巅的重构实现。

# Demo

WIP

# TODO

- [x] 完成后台管理的 graphql 增删改查测试
- [x] 完成服务器端 graphql 架构
- [x] 后台登录鉴权和权限控制 example 完成
- [ ] 后台鉴权和权限控制的完善以及菜单和部分 UI 的调整
- [ ] 项目结构调整及代码优化
- [ ] redis 验证 token
- [ ] web 端注册登录
- [ ] web 端 auth 模块

# 关于 Vue 3

目前 Vue3 处于 Beta 阶段，typescript 的支持可能不太完善。

# 技术栈

|  构架  |                   技术栈                    |          备注           |
| :----: | :-----------------------------------------: | :---------------------: |
|  后台  |            Vue3 Beta、typescript            |            -            |
| 服务端 | typescript、nestjs、mongodb、redis、graphql |            -            |
|  前端  |          nuxtjs、vuetify、graphql           | nuxtjs 支持 Vue3 后重构 |

# Screenshot

![LoginPage](./screenshot/screenshot_20200619160958.png LoginPage)

# 如何使用

```
cd server && yarn install && yarn start:dev
cd admin && yarn install && yarn serve
```
