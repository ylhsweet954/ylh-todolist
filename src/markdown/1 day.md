### 解决不能直接打开index.html文件的问题

可以安装兼容的插件 @vitejs/plugin-legacy

```
pnpm install @vitejs/plugin-legacy -D
```

然后在 vite.config.ts 中使用该插件：

```
// 引入@vitejs/plugin-legacy
import legacy from '@vitejs/plugin-legacy';
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  base: './'
})
```

注意要加这个 base: './'

处理<script></script> 标签中的 type="module"、crossorigin、nomodule
在html标签后面加这段代码

```
<script>
  (function (win) {
    // 获取页面所有的 <script > 标签对象
    let scripts = document.getElementsByTagName('script')
    // 遍历标签
    for(let i = 0; i < scripts.length; i++) {
      // 提取单个<script > 标签对象
      let script = scripts[i]
      // 获取标签中的 src
      let url = script.getAttribute("src")
      // 获取标签中的 type
      let type = script.getAttribute("type")
      // 获取标签中的js代码
      let scriptText = script.innerHTML
      // 如果有引用地址或者 type 属性 为 "module" 则代表该标签需要更改
      if (url || type === "module") {
        // 创建一个新的标签对象
        let tag=document.createElement('script');
        // 设置src的引入
        tag.setAttribute('url',url);
        // 设置js代码
        tag.innerHTML = scriptText
        // 删除原先的标签
        script.remove()
        // 将标签添加到代码中
        document.getElementsByTagName('head')[0].appendChild(tag)
      }
    }
  })(window)
</script>
```

即可
