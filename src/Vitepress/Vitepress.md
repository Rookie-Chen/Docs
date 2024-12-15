文档构建：较于vuepress比较新，配置简单，生态还不够丰富，启动速度快。

- [Node.js](https://nodejs.org/) 18 及以上版本。
- 官网：<https://vitejs.cn/vitepress/>
- 民间教程：<https://docs.bugdesigner.cn/>
- 基础文档：

### 安装 

```
# 初始化一个新的项目目录
mkdir my-vitepress-docs
cd my-vitepress-docs
# 初始化 npm 项目
npm init -y
# 安装 VitePress
npm add -D vitepress
npx vitepress init
```
### 目录结构

```
|-.vitepress
|---config.js  // 默认存在 文档的基础配置都在这里
|-public // 新建 存放公共资源，logo，图片等, 如果改动了 srcDir, public也要放到src下面
|-src // 新建，原始文档都在当前目录下，需在 config 里面 配置 srcDir: 'src'
|---index.md // 默认 设置首页
|-package.json
```

### 根据目录自动生成siderbar

- 单独的方法直接返回生成好的结果，返回的数据有嵌套的话不能正常显示，会有[Object]的问题
- 可以写入json文件在引入，坏处是每次更新目录需要手动npm run dev 不科学
- 我想的是直接返回数据，自动刷新目录

```
const outputFilePath = path.join(path.dirname(__dirname), 'data.json'); 
fs.writeFileSync(outputFilePath, JSON.stringify(nav, null, 2), 'utf-8');

// 使用
import data from 'xxx.json'
```