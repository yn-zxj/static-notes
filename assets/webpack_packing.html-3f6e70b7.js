import{_ as c,x as l,X as r,Y as i,Z as t,a1 as u,z as k,$ as n,a0 as s}from"./framework-13dd6df4.js";const m={},d=u(`<h2 id="_1-初始化项目" tabindex="-1"><a class="header-anchor" href="#_1-初始化项目" aria-hidden="true">#</a> 1.初始化项目</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init <span class="token parameter variable">-y</span> // 创建package.json文件
</code></pre></div><h2 id="_2-下载构建工具" tabindex="-1"><a class="header-anchor" href="#_2-下载构建工具" aria-hidden="true">#</a> 2.下载构建工具</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> webpack webpack-cli webpack-dev-server typescript ts-loader html-webpack-plugin clean-webpack-plugin
</code></pre></div><blockquote><p>webpack：构建工具webpack</p><p>webpack-cli：webpack的命令行工具</p><p>webpack-dev-server：webpack的开发服务器</p><p>typescript：ts编译器</p><p>ts-loader：ts加载器，用于在webpack中编译ts文件</p><p>html-webpack-plugin：webpack中html插件，用来自动创建html文件</p><p>clean-webpack-plugin：webpack中的清除插件，每次构建都会先清除目录</p></blockquote><h2 id="_3-配置webpack" tabindex="-1"><a class="header-anchor" href="#_3-配置webpack" aria-hidden="true">#</a> 3.配置webpack</h2><p>参考：https://www.webpackjs.com/concepts/configuration/</p><p><code>webpack.config.js:</code></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;html-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;clean-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

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
		<span class="token comment">// 指定要加载的规则 </span>
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
									<span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 指定环境的插件</span>
									<span class="token comment">// 配置信息</span>
									<span class="token punctuation">{</span>
										<span class="token comment">// 要兼容的目标浏览器</span>
										<span class="token string-property property">&quot;targets&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
											<span class="token string-property property">&quot;chrome&quot;</span><span class="token operator">:</span> <span class="token string">&quot;40&quot;</span><span class="token punctuation">,</span>
											<span class="token string-property property">&quot;ie&quot;</span><span class="token operator">:</span> <span class="token string">&quot;11&quot;</span>
										<span class="token punctuation">}</span><span class="token punctuation">,</span>
										<span class="token string-property property">&quot;corejs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span> <span class="token comment">// // 指定corejs的版本</span>
										<span class="token string-property property">&quot;useBuiltIns&quot;</span><span class="token operator">:</span> <span class="token string">&quot;usage&quot;</span> <span class="token comment">// 使用corejs的方式(目前按需加载)</span>
									<span class="token punctuation">}</span>
								<span class="token punctuation">]</span>
							<span class="token punctuation">]</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;ts-loader&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 要使用的loader(后面的先执行)</span>
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
</code></pre></div><p><strong>配置TS编译选项(tsconfig.json)：</strong></p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES2015&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES2015&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>修改package.json配置：</strong></p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
   ...
   <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack serve --open chrome.exe&quot;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   ...
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>执行命令<code>npm run build</code>对代码进行编译；</p><p>执行<code>npm run start</code>启动开发服务器；</p></blockquote><h2 id="_4-配置文件示例" tabindex="-1"><a class="header-anchor" href="#_4-配置文件示例" aria-hidden="true">#</a> 4.配置文件示例</h2>`,15),b=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"compilerOptions"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"module"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"ES6"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"target"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"ES6"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"strict"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" path "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'path'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" HtmlWebpackPlugin "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"html-webpack-plugin"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" CleanWebpackPlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"clean-webpack-plugin"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

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
		`),n("span",{class:"token comment"},"// 指定要加载的规则 "),s(`
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
									`),n("span",{class:"token string"},'"@babel/preset-env"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 指定环境的插件"),s(`
									`),n("span",{class:"token comment"},"// 配置信息"),s(`
									`),n("span",{class:"token punctuation"},"{"),s(`
										`),n("span",{class:"token comment"},"// 要兼容的目标浏览器"),s(`
										`),n("span",{class:"token string-property property"},'"targets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
											`),n("span",{class:"token string-property property"},'"chrome"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"40"'),n("span",{class:"token punctuation"},","),s(`
											`),n("span",{class:"token string-property property"},'"ie"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"11"'),s(`
										`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
										`),n("span",{class:"token string-property property"},'"corejs"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"3"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// // 指定corejs的版本"),s(`
										`),n("span",{class:"token string-property property"},'"useBuiltIns"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"usage"'),s(),n("span",{class:"token comment"},"// 使用corejs的方式(目前按需加载)"),s(`
									`),n("span",{class:"token punctuation"},"}"),s(`
								`),n("span",{class:"token punctuation"},"]"),s(`
							`),n("span",{class:"token punctuation"},"]"),s(`
						`),n("span",{class:"token punctuation"},"}"),s(`
					`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'ts-loader'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 要使用的loader(后面的先执行)"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function v(h,w){const o=k("CodeTabs");return l(),r("div",null,[d,i(o,{id:"60",data:[{title:"tsconfig.json",id:"tsconfig"},{title:"package.json",id:"package"},{title:"webpack.config.js",id:"webpack"}]},{tab0:t(({title:a,value:e,isActive:p})=>[b]),tab1:t(({title:a,value:e,isActive:p})=>[g]),tab2:t(({title:a,value:e,isActive:p})=>[y]),_:1},8,["data"])])}const x=c(m,[["render",v],["__file","webpack_packing.html.vue"]]);export{x as default};
