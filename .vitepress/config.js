import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vitepress'
import sidebar from '../utils/data.json';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小破站", // SEO title
  description: "my first docs",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  srcDir: 'src', // 修改源目录， 默认就是docs
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '小破站', // 网站名
    outline: { // 右侧目录
      level: [2, 6],  // ==> 从h2开始生成
      label: "目录",
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭"
            },
          },
        },
      },
    },
    nav: [
      { text: '首页', link: '/' },
    ],
    sidebar,
    // rewrites: getRewritesConfig(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Rookie-Chen' },
      { icon: 'gitee', link: 'https://gitee.com/rookie-chen' }
    ],
    lastUpdated: {
      text: '上次更新时间：',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    footer: {
      copyright: 'Copyright ©2024~forever'
    },
  },
})

// 路由重写，去掉二级目录
function getRewritesConfig () {
  const packagesDir = path.resolve('../src')
  const packages = fs.readdirSync(packagesDir).filter(item => item !== 'index.md' && item !== 'public')
  const rewrites = {}
  packages.forEach(pkg => {
    const pkgPath = path.join(packagesDir, pkg)
    if (fs.statSync(pkgPath).isDirectory()) {
      const files = fs.readdirSync(pkgPath)
      files.forEach(file => {
        if (file.endsWith('.md')) {
          rewrites[`${pkg}/${file}`] = file
        }
      })
    }
  })
  return rewrites
}
// console.log('@@@@', getRewritesConfig())