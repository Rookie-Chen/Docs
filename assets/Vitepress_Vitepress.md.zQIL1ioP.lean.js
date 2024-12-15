import{_ as a,c as n,a3 as e,o as p}from"./chunks/framework.DtMx7FFi.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Vitepress/Vitepress.md","filePath":"Vitepress/Vitepress.md","lastUpdated":1734247223000}'),i={name:"Vitepress/Vitepress.md"};function t(l,s,r,c,o,d){return p(),n("div",null,s[0]||(s[0]=[e(`<p>文档构建：较于vuepress比较新，配置简单，生态还不够丰富，启动速度快。</p><ul><li><a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> 18 及以上版本。</li><li>官网：<a href="https://vitejs.cn/vitepress/" target="_blank" rel="noreferrer">https://vitejs.cn/vitepress/</a></li><li>民间教程：<a href="https://docs.bugdesigner.cn/" target="_blank" rel="noreferrer">https://docs.bugdesigner.cn/</a></li><li>基础文档：</li></ul><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 初始化一个新的项目目录</span></span>
<span class="line"><span>mkdir my-vitepress-docs</span></span>
<span class="line"><span>cd my-vitepress-docs</span></span>
<span class="line"><span># 初始化 npm 项目</span></span>
<span class="line"><span>npm init -y</span></span>
<span class="line"><span># 安装 VitePress</span></span>
<span class="line"><span>npm add -D vitepress</span></span>
<span class="line"><span>npx vitepress init</span></span></code></pre></div><h3 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>|-.vitepress</span></span>
<span class="line"><span>|---config.js  // 默认存在 文档的基础配置都在这里</span></span>
<span class="line"><span>|-public // 新建 存放公共资源，logo，图片等, 如果改动了 srcDir, public也要放到src下面</span></span>
<span class="line"><span>|-src // 新建，原始文档都在当前目录下，需在 config 里面 配置 srcDir: &#39;src&#39;</span></span>
<span class="line"><span>|---index.md // 默认 设置首页</span></span>
<span class="line"><span>|-package.json</span></span></code></pre></div><h3 id="根据目录自动生成siderbar" tabindex="-1">根据目录自动生成siderbar <a class="header-anchor" href="#根据目录自动生成siderbar" aria-label="Permalink to &quot;根据目录自动生成siderbar&quot;">​</a></h3><ul><li>单独的方法直接返回生成好的结果，返回的数据有嵌套的话不能正常显示，会有[Object]的问题</li><li>可以写入json文件在引入，坏处是每次更新目录需要手动npm run dev 不科学</li><li>我想的是直接返回数据，自动刷新目录</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const outputFilePath = path.join(path.dirname(__dirname), &#39;data.json&#39;); </span></span>
<span class="line"><span>fs.writeFileSync(outputFilePath, JSON.stringify(nav, null, 2), &#39;utf-8&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用</span></span>
<span class="line"><span>import data from &#39;xxx.json&#39;</span></span></code></pre></div>`,9)]))}const b=a(i,[["render",t]]);export{u as __pageData,b as default};
