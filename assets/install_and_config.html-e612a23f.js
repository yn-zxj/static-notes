import{_ as n,j as t,o,c as r,f as e,i as s,g as i,a as d}from"./app-2b6fe2ee.js";const c="/assets/rdeis-server-ded1ca62.png",p="/assets/start_and_stop-ec79913f.png",l={},h={href:"https://redis.io/docs/getting-started/installation/install-redis-on-mac-os/",target:"_blank",rel:"noopener noreferrer"},m=d('<h2 id="先决条件" tabindex="-1"><a class="header-anchor" href="#先决条件" aria-hidden="true">#</a> 先决条件</h2><p>  确保你的 macOS 安装了 Homebrew。在终端中输入<code>brew --version</code>执行，正常会返回版本信息，如果没有你需要先安装 Homebrew。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>  在终端中执行<code>brew install redis</code>将会在你的系统上进行 Redis 的安装。</p><h2 id="启动与停止-redis" tabindex="-1"><a class="header-anchor" href="#启动与停止-redis" aria-hidden="true">#</a> 启动与停止 Redis</h2><p>  验证 Redis 的安装，你可以在终端输入命令行<code>redis-server</code>。如果成功你将看到 Redis 的启动日志(<strong>如下图</strong>)，并且 Redis 将在前台运行。如果需要停止，你可以输入<kbd>Control</kbd>+<kbd>C</kbd></p><figure><img src="'+c+`" alt="Redis安装验证.png" tabindex="0" loading="lazy"><figcaption>Redis安装验证.png</figcaption></figure><h3 id="启动与停止-redis-后台启动方式" tabindex="-1"><a class="header-anchor" href="#启动与停止-redis-后台启动方式" aria-hidden="true">#</a> 启动与停止 Redis(后台启动方式)</h3><p>  作为在前台运行 Redis 的替代方案，也可以使用 launchd 在后台启动进程。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 后台启动Redis</span>
brew services start redis

<span class="token comment"># 检查Redis运行状态</span>
brew services info redis

<span class="token comment"># 停止Redis</span>
brew services stop redis
</code></pre></div><figure><img src="`+p+`" alt="启动与停止.png" tabindex="0" loading="lazy"><figcaption>启动与停止.png</figcaption></figure><h2 id="连接-redis" tabindex="-1"><a class="header-anchor" href="#连接-redis" aria-hidden="true">#</a> 连接 Redis</h2><p>输入<code>redis-cli</code>连接到本机的 Redis，再打开的客户端中，尝试输入一些命令</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lpush demos redis-macOS-demo
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> rpop demos
<span class="token string">&quot;redis-macOS-demo&quot;</span>
</code></pre></div><h2 id="关闭" tabindex="-1"><a class="header-anchor" href="#关闭" aria-hidden="true">#</a> 关闭</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 单实例</span>
redis-cli <span class="token parameter variable">-a</span> <span class="token function">passwd</span> <span class="token function">shutdown</span>

<span class="token comment"># 多实例（指定端口）</span>
redis-cli <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-a</span> <span class="token function">passwd</span> <span class="token parameter variable">-p</span> <span class="token number">6379</span> <span class="token function">shutdown</span>
</code></pre></div><blockquote><p>注意：完整的格式：<code>redis-cli -h 127.0.0.1 -p 6379</code></p></blockquote><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>  终端输入命令行<code>brew list redis</code>可以得到 Redis 的安装路径，查看<code>homebrew.mxcl.redis.plist</code>文件信息，可以获取 redis.conf 配置文件的路径。</p><p><strong>重要参数说明</strong>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 如果需要作为后端启动改为 yes</span>
daemonize no

<span class="token comment"># 安全模式(如果需要其他主机连接Redis改为 no)</span>
protected-mode <span class="token function">yes</span>

<span class="token comment"># 端口</span>
port <span class="token number">6379</span>

<span class="token comment"># 绑定(注释或者改为本机IP地址，否则影响远程IP连接)</span>
<span class="token builtin class-name">bind</span> <span class="token number">127.0</span>.0.1 ::1

<span class="token comment"># 添加redis密码</span>
requirepass your_password
<span class="token comment"># 使用客户端连接：redis-cli -h 127.0.0.1 -p 6379 -a your_password</span>
</code></pre></div><blockquote><p>修改配置文件，需要重启！</p></blockquote><h2 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>brew uninstall redis
</code></pre></div>`,24);function u(g,b){const a=t("ExternalLinkIcon");return o(),r("div",null,[e("p",null,[s("  笔者处于学习阶段，使用的系统为 M1 的 macOS，故参考使用 Homebrew 在本地安装 Redis。安装参考地址："),e("a",h,[s("https://redis.io/docs/getting-started/installation/install-redis-on-mac-os/"),i(a)]),s("，在这里你也可以找到自己系统的安装方式，或者你也可以从其它地方学习如何安装。")]),m])}const f=n(l,[["render",u],["__file","install_and_config.html.vue"]]);export{f as default};
