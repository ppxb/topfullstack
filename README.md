# topfullstack

使用 typescript 开发的全栈视频网站项目，B 站 UP🐖 全栈之巅的重构实现。

# Demo

WIP

# TODO

- [x] 完成后台管理的 graphql 增删改查
- [x] 完成服务器端 graphql 架构
- [ ] 增加 graphql 的 swagger 支持，虽然 playground 也很好用
- [ ] 后台管理基于 graphql 的权限管理
- [ ] web 端注册登录
- [ ] web 端 auth 模块

# 关于 Vue 3

目前 Vue3 处于 Beta 阶段，不管是暴露的 API 还是实现方式都和之前有较大差异（关键是没有一个组件库适配了 Vue3 ）。并且 Vue3 的 ts 支持现在还有很多问题。自行开发组件库工作量太巨大。可能会在 Vue3 正式发行的时候才会做这方面的重构。

# 技术栈

|  构架  |                   技术栈                    |          备注           |
| :----: | :-----------------------------------------: | :---------------------: |
|  后台  |              Vue2、typescript               |  Vue 3 正式发行后重构   |
| 服务端 | typescript、nestjs、mongodb、redis、graphql |            -            |
|  前端  |          nuxtjs、vuetify、graphql           | nuxtjs 支持 Vue3 后重构 |

# 如何使用

```
cd server && yarn install && yarn start:dev
cd admin && yarn install && yarn serve
```
