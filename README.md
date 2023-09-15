# vue-rabbit

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### src目录

+ apis -> API接口文件夹
+ components -> 通用组件
+ composables -> 组合函数文件夹
+ directives -> 全局指令文件夹
+ styles -> 全局样式文件夹
+ utils -> 工具函数文件夹

### 技术思考

+ pinia ：集中状态管理工具

# 小兔鲜电商平台

## 技术栈
+ Vue3全家桶：create-vue、Pinia、ElementPlus、Vue3+Setup、Vue-Router、VueUse
## 项目亮点
+ 基于业务逻辑的组件拆分思想
+ 长页面吸顶交互实现
+ SKU电商组件封装
+ 图片懒加载指令封装
+ 通用逻辑函数封装
+ 面板插槽组件等业务通用组件封装
+ 路由缓存问题处理
+ 支付宝第三方支付
