import{_ as e,l as o,o as t,c as p,g as a,k as s,i as c,a as r}from"./app-6ps-n2lP.js";const d="/assets/rdeis-server-8xwIMH2e.png",l={},i={href:"https://redis.io/docs/getting-started/installation/install-redis-on-mac-os/",target:"_blank",rel:"noopener noreferrer"},m=r('<h2 id="redis-数据库" tabindex="-1"><a class="header-anchor" href="#redis-数据库" aria-hidden="true">#</a> Redis 数据库</h2><p>Redis 是一种基于内存的数据库技术。底层采用 C 语言开发，默认端口号 6379。</p><p>① Redis 数据库作为数据缓存，将业务数据直接存储在内存中进行读写，单机读/写速度可达 110000/84000 QPS，可以满足高速响应的需求。<br> ② Redis 数据库只负责存储数据，数据之间不具有任何关联，易于扩容和伸缩。</p><h2 id="redis-应用场景" tabindex="-1"><a class="header-anchor" href="#redis-应用场景" aria-hidden="true">#</a> Redis 应用场景</h2><p>受限于内存的高昂成本，一般我们只使用 Redis 存储高频读写的关键数据。比如：</p><p><strong>热点数据</strong>：如热点商品信息。<br><strong>任务队列</strong>：如秒杀队列、抢购队列。<br><strong>实时更新信息</strong>：如商品排行榜、公交到站信息。<br><strong>时效性信息</strong>：如手机验证码、session 、 心跳(heartbeat)。</p><blockquote><p>Redis 主要适用于内部系统的高频数据。在线上环境负载极大的情况下，使用 Redis 也不足以满足对数据读写的速度要求。</p></blockquote><h2 id="先决条件" tabindex="-1"><a class="header-anchor" href="#先决条件" aria-hidden="true">#</a> 先决条件</h2><p>  确保你的 macOS 安装了 Homebrew。在终端中输入<code>brew --version</code>执行，正常会返回版本信息，如果没有你需要先安装 Homebrew。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>  在终端中执行<code>brew install redis</code>将会在你的系统上进行 Redis 的安装。</p><h2 id="启动与停止-redis" tabindex="-1"><a class="header-anchor" href="#启动与停止-redis" aria-hidden="true">#</a> 启动与停止 Redis</h2><p>  验证 Redis 的安装，你可以在终端输入命令行<code>redis-server</code>。如果成功你将看到 Redis 的启动日志(<strong>如下图</strong>)，并且 Redis 将在前台运行。如果需要停止，你可以输入<kbd>Control</kbd>+<kbd>C</kbd></p><figure><img src="'+d+`" alt="Redis安装验证.png" tabindex="0" loading="lazy"><figcaption>Redis安装验证.png</figcaption></figure><blockquote><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>redis-server                            <span class="token comment"># 启动 Redis 数据库</span>
redis-server <span class="token parameter variable">--port</span> <span class="token number">6380</span>                <span class="token comment"># 启动 Redis 数据库，在指定端口</span>
redis-server redis-6379.conf            <span class="token comment"># 启动 Redis 数据库，使用指定配置文件</span>
</code></pre></div></blockquote><h3 id="启动与停止-redis-后台启动方式" tabindex="-1"><a class="header-anchor" href="#启动与停止-redis-后台启动方式" aria-hidden="true">#</a> 启动与停止 Redis(后台启动方式)</h3><p>  作为在前台运行 Redis 的替代方案，也可以使用 launchd 在后台启动进程。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>brew services start redis     <span class="token comment"># 后台启动Redis</span>
brew services info redis      <span class="token comment"># 检查Redis运行状态</span>
brew services stop redis      <span class="token comment"># 停止Redis</span>
</code></pre></div><p><strong>终端命令执行演示</strong>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>% brew services start redis <span class="token comment"># 启动</span>
<span class="token operator">==</span><span class="token operator">&gt;</span> Successfully started <span class="token variable"><span class="token variable">\`</span>redis<span class="token variable">\`</span></span> <span class="token punctuation">(</span>label: homebrew.mxcl.redis<span class="token punctuation">)</span>

% brew services info redis <span class="token comment"># 状态查看</span>
redis <span class="token punctuation">(</span>homebrew.mxcl.redis<span class="token punctuation">)</span>
Running: ✔
Loaded: ✔
Schedulable: ✘
User: zhangxiaojun
PID: <span class="token number">63122</span>

% brew services stop redis <span class="token comment"># 停止</span>
Stopping <span class="token variable"><span class="token variable">\`</span>redis<span class="token variable">\`</span></span><span class="token punctuation">..</span>. <span class="token punctuation">(</span>might take a <span class="token keyword">while</span><span class="token punctuation">)</span>
<span class="token operator">==</span><span class="token operator">&gt;</span> Successfully stopped <span class="token variable"><span class="token variable">\`</span>redis<span class="token variable">\`</span></span> <span class="token punctuation">(</span>label: homebrew.mxcl.redis<span class="token punctuation">)</span>
</code></pre></div><h2 id="连接-redis" tabindex="-1"><a class="header-anchor" href="#连接-redis" aria-hidden="true">#</a> 连接 Redis</h2><p>输入<code>redis-cli</code>连接到本机的 Redis，再打开的客户端中，尝试输入一些命令</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lpush demos redis-macOS-demo
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> rpop demos
<span class="token string">&quot;redis-macOS-demo&quot;</span>
</code></pre></div><p><strong>连接 Redis</strong>：</p><blockquote><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>redis-cli                 <span class="token comment"># 进入 Redis 控制台，在默认端口</span>
redis-cli <span class="token parameter variable">-p</span> <span class="token number">6380</span>         <span class="token comment"># 进入 Redis 控制台，在指定端口</span>
</code></pre></div></blockquote><h2 id="关闭" tabindex="-1"><a class="header-anchor" href="#关闭" aria-hidden="true">#</a> 关闭</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 单实例</span>
redis-cli <span class="token parameter variable">-a</span> <span class="token function">passwd</span> <span class="token function">shutdown</span>

<span class="token comment"># 多实例（指定端口）</span>
redis-cli <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-a</span> <span class="token function">passwd</span> <span class="token parameter variable">-p</span> <span class="token number">6379</span> <span class="token function">shutdown</span>
</code></pre></div><blockquote><p>注意：完整的格式：<code>redis-cli -h 127.0.0.1 -p 6379</code></p></blockquote><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>  终端输入命令行<code>brew list redis</code>可以得到 Redis 的安装路径，查看<code>homebrew.mxcl.redis.plist</code>文件信息，可以获取 redis.conf 配置文件的路径。</p><h3 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置" aria-hidden="true">#</a> 基本配置</h3><p><strong>重要参数说明</strong>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>daemonize no                <span class="token comment"># 守护线程，打开后启动 Redis 控制台不提示</span>
protected-mode <span class="token function">yes</span>          <span class="token comment"># 安全模式(如果需要其他主机连接Redis改为 no)</span>
databases <span class="token number">16</span>                <span class="token comment"># 存储区域数量</span>
port <span class="token number">6379</span>                   <span class="token comment"># 端口号</span>
<span class="token builtin class-name">bind</span> <span class="token number">127.0</span>.0.1 ::1          <span class="token comment"># 绑定(注释或者改为本机IP地址，否则影响远程IP连接)</span>
requirepass your_password   <span class="token comment"># 添加redis密码</span>
<span class="token comment"># 使用客户端连接：redis-cli -h 127.0.0.1 -p 6379 -a your_password</span>
</code></pre></div><blockquote><p>上面的配置启动 Redis 数据库时默认加载；若修改配置文件，需要重启！</p></blockquote><h3 id="日志配置" tabindex="-1"><a class="header-anchor" href="#日志配置" aria-hidden="true">#</a> 日志配置</h3><p>  Redis 总共支持四个日志级别：debug / verbose / notice / warning ，从前往后日志记录信息逐渐减少。通常情况下开发环境设为 verbose ，生产环境设为 notice 。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>loglevel verbose                 <span class="token comment"># 日志级别</span>
logfile <span class="token number">6379</span>.log                 <span class="token comment"># 日志文件名</span>
</code></pre></div><h3 id="持久化配置" tabindex="-1"><a class="header-anchor" href="#持久化配置" aria-hidden="true">#</a> 持久化配置</h3><p>默认使用 RDB 方式持久化数据，相关配置如下：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>save <span class="token number">900</span> <span class="token number">1</span>            <span class="token comment"># 自动同步数据条件，900s 内变更 1 个 key 值则持久化</span>
save <span class="token number">300</span> <span class="token number">10</span>           <span class="token comment"># 自动同步数据条件，300s 内变更 10 个 key 值则持久化</span>

rdbcompression <span class="token function">yes</span>    <span class="token comment"># 是否压缩数据，压缩后节省空间但读取较慢</span>
rdbchecksum <span class="token function">yes</span>       <span class="token comment"># 是否格式校验（默认开启），校验降低文件损坏风险但读取较慢</span>

dbfilename dump.rdb   <span class="token comment"># 保存文件名</span>
<span class="token function">dir</span> ./                <span class="token comment"># 保存文件位置</span>
</code></pre></div><p>可以在配置文件中改用 AOF 方式持久化数据，刷新文件条件有三种类型： always / everysec / no</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>appendonly <span class="token function">yes</span>            <span class="token comment"># 选用 AOF 方式持久化</span>
appendsync everysec       <span class="token comment"># 刷新文件条件，每秒更新一次操作日志</span>
</code></pre></div><h3 id="容量配置" tabindex="-1"><a class="header-anchor" href="#容量配置" aria-hidden="true">#</a> 容量配置</h3><p>对 Redis 数据库占用空间和客户链接做出限制。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>maxclients <span class="token number">100</span>                    <span class="token comment"># 客户连接数上限，超出后拒绝客户访问，为 0 表示不限制</span>
<span class="token function">timeout</span> <span class="token number">300</span>                       <span class="token comment"># 客户闲置时长，超出后关闭连接，为 0 表示不关闭</span>

maxmemory <span class="token number">50</span>                      <span class="token comment"># Redis 最大占用内存比例，为 0 表示全部可用</span>
maxmemory-samples                 <span class="token comment"># Redis 随机选取数据数量</span>
maxmemery-policy volatile-lru     <span class="token comment"># Redis 逐出策略</span>
</code></pre></div><h3 id="多机配置" tabindex="-1"><a class="header-anchor" href="#多机配置" aria-hidden="true">#</a> 多机配置</h3><p>如果我们要设置集群，则需要进行以下配置：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>cluster enabled <span class="token function">yes</span>                <span class="token comment"># 开启集群</span>
cluster-config-file nodes.conf     <span class="token comment"># 集群配置文件</span>
</code></pre></div><p>如果我们要设置主从服务器，则需要进行以下配置：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 主服务器</span>
requirepass <span class="token number">123456</span>                    <span class="token comment"># 主服务器设置密码（可选）</span>
repl-backlog-size 1mb                 <span class="token comment"># 缓冲区大小</span>

<span class="token comment"># 从服务器</span>
slaveof <span class="token number">127.0</span>.0.1 <span class="token number">6379</span>                <span class="token comment"># 主服务器套接字，设置后自动连接</span>
masterauth <span class="token number">123456</span>                     <span class="token comment"># 主服务器密码</span>
slave-serve-stale-data no             <span class="token comment"># 同步数据时是否允许读数据</span>
</code></pre></div><h2 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>brew uninstall redis
</code></pre></div>`,52);function h(u,k){const n=o("ExternalLinkIcon");return t(),p("div",null,[a("p",null,[s("  笔者处于学习阶段，使用的系统为 M1 的 macOS，故参考使用 Homebrew 在本地安装 Redis。安装参考地址："),a("a",i,[s("https://redis.io/docs/getting-started/installation/install-redis-on-mac-os/"),c(n)]),s("，在这里你也可以找到自己系统的安装方式，或者你也可以从其它地方学习如何安装。")]),m])}const g=e(l,[["render",h],["__file","install_and_config.html.vue"]]);export{g as default};
