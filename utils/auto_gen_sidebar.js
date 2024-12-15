
import fs from 'fs';
import path from 'path';

/* 从源目录生成导航到data.json */
const baseDir = path.resolve('../src');
// 扫描目录并生成导航项
function generateNav (currentDir, fir_path = '') {
  const absoluteDir = path.join(baseDir, currentDir);
  if (!fs.existsSync(absoluteDir)) {
    console.warn(`Directory does not exist: ${absoluteDir}`);
    return [];
  }
  const files = fs.readdirSync(absoluteDir);
  const navItems = [];
  files.forEach((file) => {
    const filePath = path.join(absoluteDir, file);
    const stats = fs.statSync(filePath);
    // 判断是否为文件夹
    if (stats.isDirectory()) {
      navItems.push({
        text: file,
        link: null,
        items: generateNav(path.join(currentDir, file), file)
      });
    } else if (file.endsWith('.md') && file !== 'index.md') {
      const temp = fir_path ? `/${fir_path}/` : '/'
      navItems.push({
        text: file.replace('.md', ''),
        link: temp + file.replace('.md', '')
      });
    }
  });

  return navItems;
}

// const sidebar = generateNav('').filter(item => item.text !== 'public');
// export { sidebar }
const nav = generateNav('').filter(item => item.text !== 'public');
console.log('nav', nav)
const __dirname = '../';
const outputFilePath = path.join(path.dirname(__dirname), 'data.json');
fs.writeFileSync(outputFilePath, JSON.stringify(nav, null, 2), 'utf-8');
console.log('@@@@', JSON.stringify(nav, null, 2))