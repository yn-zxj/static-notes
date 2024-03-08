import{_ as i,r as p,o as u,c as k,e as n,i as s,f as o,w as a,a as c}from"./app-fpN15tNc.js";const m={},d=c(`<h2 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目"><span>初始化项目</span></a></h2><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> init <span class="token parameter variable">-y</span> // 创建package.json文件
</code></pre></div><h2 id="下载构建工具" tabindex="-1"><a class="header-anchor" href="#下载构建工具"><span>下载构建工具</span></a></h2><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> webpack webpack-cli webpack-dev-server typescript ts-loader html-webpack-plugin clean-webpack-plugin
</code></pre></div><blockquote><p>webpack：构建工具 webpack</p><p>webpack-cli：webpack 的命令行工具</p><p>webpack-dev-server：webpack 的开发服务器</p><p>typescript：ts 编译器</p><p>ts-loader：ts 加载器，用于在 webpack 中编译 ts 文件</p><p>html-webpack-plugin：webpack 中 html 插件，用来自动创建 html 文件</p><p>clean-webpack-plugin：webpack 中的清除插件，每次构建都会先清除目录</p></blockquote><h2 id="配置-webpack" tabindex="-1"><a class="header-anchor" href="#配置-webpack"><span>配置 webpack</span></a></h2>`,6),b={href:"https://www.webpackjs.com/concepts/configuration/",target:"_blank",rel:"noopener noreferrer"},g=c(`<p><code>webpack.config.js:</code></p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;clean-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">minimize</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 关闭代码压缩，可选</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.ts&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 指定入口文件</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 模式(开发/生产)</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 指定打包文件的目录</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 打包后文件的文件</span>
    <span class="token literal-property property">environment</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">arrowFunction</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 关闭webpack的箭头函数，可选</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 指定webpack打包时要用的模块</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 指定要加载的规则</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.ts$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// 指定规则生效的文件</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token comment">// 指定加载器</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token comment">// 设置预定义的环境</span>
              <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">[</span>
                  <span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 指定环境的插件</span>
                  <span class="token comment">// 配置信息</span>
                  <span class="token punctuation">{</span>
                    <span class="token comment">// 要兼容的目标浏览器</span>
                    <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                      <span class="token literal-property property">chrome</span><span class="token operator">:</span> <span class="token string">&#39;40&#39;</span><span class="token punctuation">,</span>
                      <span class="token literal-property property">ie</span><span class="token operator">:</span> <span class="token string">&#39;11&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">corejs</span><span class="token operator">:</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> <span class="token comment">// // 指定corejs的版本</span>
                    <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">&#39;usage&#39;</span> <span class="token comment">// 使用corejs的方式(目前按需加载)</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
              <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">&#39;ts-loader&#39;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 要使用的loader(后面的先执行)</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 配置webpack插件</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;TypeScript学习&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 可以修改自动生成的html的标题等属性</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span> <span class="token comment">// 或者根据模板生成</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 用来设置引用模块</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.ts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.js&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> config<span class="token punctuation">;</span>
</code></pre></div><p><strong>配置 TS 编译选项(tsconfig.json)：</strong></p><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES2015&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES2015&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>修改 package.json 配置：</strong></p><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
   ...
   <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack serve --open chrome.exe&quot;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   ...
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>执行命令<code>npm run build</code>对代码进行编译；</p><p>执行<code>npm run start</code>启动开发服务器；</p></blockquote><h2 id="配置文件示例" tabindex="-1"><a class="header-anchor" href="#配置文件示例"><span>配置文件示例</span></a></h2>`,8),y=n("div",{class:"language-json line-numbers-mode","data-ext":"json","data-title":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"compilerOptions"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"module"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"ES6"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"target"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"ES6"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"strict"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-json line-numbers-mode","data-ext":"json","data-title":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"item"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1.0.0"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"main"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"index.js"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"scripts"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"test"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"echo \\"Error: no test specified\\" && exit 1"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"build"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"webpack"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"webpack serve --open"'),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"keywords"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"author"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"license"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"ISC"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"devDependencies"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"@babel/core"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^7.19.6"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"@babel/preset-env"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^7.19.4"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"babel-loader"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^8.2.5"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"clean-webpack-plugin"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^4.0.0"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"core-js"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^3.26.0"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"html-webpack-plugin"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^5.5.0"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"ts-loader"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^9.4.1"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"typescript"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^4.8.4"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"webpack"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^5.74.0"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"webpack-cli"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^4.10.0"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"webpack-dev-server"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^4.11.1"'),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" path "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'path'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" HtmlWebpackPlugin "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'html-webpack-plugin'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" CleanWebpackPlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'clean-webpack-plugin'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" config "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"optimization"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"minimize"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),s(),n("span",{class:"token comment"},"// 关闭代码压缩，可选"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"entry"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'./src/index.ts'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 指定入口文件"),s(`
  `),n("span",{class:"token literal-property property"},"mode"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'production'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 模式(开发/生产)"),s(`
  `),n("span",{class:"token literal-property property"},"output"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),s(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("__dirname"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'dist'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 指定打包文件的目录"),s(`
    `),n("span",{class:"token literal-property property"},"filename"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bundle.js'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 打包后文件的文件"),s(`
    `),n("span",{class:"token literal-property property"},"environment"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"arrowFunction"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),s(),n("span",{class:"token comment"},"// 关闭webpack的箭头函数，可选"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token comment"},"// 指定webpack打包时要用的模块"),s(`
  `),n("span",{class:"token literal-property property"},"module"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 指定要加载的规则"),s(`
    `),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"test"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.ts$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 指定规则生效的文件"),s(`
        `),n("span",{class:"token literal-property property"},"use"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// 指定加载器"),s(`
            `),n("span",{class:"token literal-property property"},"loader"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'babel-loader'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"options"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token comment"},"// 设置预定义的环境"),s(`
              `),n("span",{class:"token literal-property property"},"presets"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                `),n("span",{class:"token punctuation"},"["),s(`
                  `),n("span",{class:"token string"},"'@babel/preset-env'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 指定环境的插件"),s(`
                  `),n("span",{class:"token comment"},"// 配置信息"),s(`
                  `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token comment"},"// 要兼容的目标浏览器"),s(`
                    `),n("span",{class:"token literal-property property"},"targets"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                      `),n("span",{class:"token literal-property property"},"chrome"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'40'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token literal-property property"},"ie"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'11'"),s(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token literal-property property"},"corejs"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// // 指定corejs的版本"),s(`
                    `),n("span",{class:"token literal-property property"},"useBuiltIns"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'usage'"),s(),n("span",{class:"token comment"},"// 使用corejs的方式(目前按需加载)"),s(`
                  `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token punctuation"},"]"),s(`
              `),n("span",{class:"token punctuation"},"]"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},"'ts-loader'"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 要使用的loader(后面的先执行)"),s(`
        `),n("span",{class:"token literal-property property"},"exclude"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"node_modules"),n("span",{class:"token regex-delimiter"},"/")]),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token comment"},"// 配置webpack插件"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"CleanWebpackPlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"HtmlWebpackPlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'TypeScript学习'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 可以修改自动生成的html的标题等属性"),s(`
      `),n("span",{class:"token literal-property property"},"template"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'./src/index.html'"),s(),n("span",{class:"token comment"},"// 或者根据模板生成"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token comment"},"// 用来设置引用模块"),s(`
  `),n("span",{class:"token literal-property property"},"resolve"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"extensions"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'.ts'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'.js'"),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(" config"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function w(x,j){const l=p("ExternalLinkIcon"),r=p("CodeTabs");return u(),k("div",null,[d,n("p",null,[s("参考："),n("a",b,[s("https://www.webpackjs.com/concepts/configuration/"),o(l)])]),g,o(r,{id:"60",data:[{id:"tsconfig"},{id:"package"},{id:"webpack"}]},{title0:a(({value:t,isActive:e})=>[s("tsconfig.json")]),title1:a(({value:t,isActive:e})=>[s("package.json")]),title2:a(({value:t,isActive:e})=>[s("webpack.config.js")]),tab0:a(({value:t,isActive:e})=>[y]),tab1:a(({value:t,isActive:e})=>[v]),tab2:a(({value:t,isActive:e})=>[h]),_:1})])}const _=i(m,[["render",w],["__file","webpack_packing.html.vue"]]),q=JSON.parse('{"path":"/frontend/typescript/webpack_packing.html","title":"WebPack打包","lang":"zh-CN","frontmatter":{"title":"WebPack打包","icon":"webpack","order":4,"author":"Mr.Zhang","date":"2022-12-11T00:00:00.000Z","description":"初始化项目 下载构建工具 webpack：构建工具 webpack webpack-cli：webpack 的命令行工具 webpack-dev-server：webpack 的开发服务器 typescript：ts 编译器 ts-loader：ts 加载器，用于在 webpack 中编译 ts 文件 html-webpack-plugin：webpa...","head":[["meta",{"property":"og:url","content":"https://doc.bt66.cn/frontend/typescript/webpack_packing.html"}],["meta",{"property":"og:title","content":"WebPack打包"}],["meta",{"property":"og:description","content":"初始化项目 下载构建工具 webpack：构建工具 webpack webpack-cli：webpack 的命令行工具 webpack-dev-server：webpack 的开发服务器 typescript：ts 编译器 ts-loader：ts 加载器，用于在 webpack 中编译 ts 文件 html-webpack-plugin：webpa..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-22T09:18:25.000Z"}],["meta",{"property":"article:author","content":"Mr.Zhang"}],["meta",{"property":"article:published_time","content":"2022-12-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-22T09:18:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WebPack打包\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-12-11T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-22T09:18:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Zhang\\"}]}"]]},"headers":[{"level":2,"title":"初始化项目","slug":"初始化项目","link":"#初始化项目","children":[]},{"level":2,"title":"下载构建工具","slug":"下载构建工具","link":"#下载构建工具","children":[]},{"level":2,"title":"配置 webpack","slug":"配置-webpack","link":"#配置-webpack","children":[]},{"level":2,"title":"配置文件示例","slug":"配置文件示例","link":"#配置文件示例","children":[]}],"git":{"createdTime":1676131849000,"updatedTime":1690017505000,"contributors":[{"name":"ynzxj","email":"ynzxj@qq.com","commits":4},{"name":"zhangxj_a_sc","email":"zhangxj_a_sc@si-tech.com.cn","commits":1}]},"readingTime":{"minutes":2.89,"words":867},"filePathRelative":"frontend/typescript/webpack_packing.md","localizedDate":"2022年12月11日","autoDesc":true}');export{_ as comp,q as data};
