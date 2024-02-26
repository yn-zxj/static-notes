import{_ as t,l as o,o as c,c as p,g as a,k as n,i as r,a as s}from"./app-bXqFKZAm.js";const l="/assets/source_download-GwpmcfS2.png",i="/assets/problem_of_8-lA3FjhaG.png",d="/assets/auth_method_of_8--2-NI5FQ.png",h={},u=s(`<h2 id="安装与卸载" tabindex="-1"><a class="header-anchor" href="#安装与卸载" aria-hidden="true">#</a> 安装与卸载</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>请自行百度！</p></div><h2 id="初识-mysql" tabindex="-1"><a class="header-anchor" href="#初识-mysql" aria-hidden="true">#</a> 初识 MySQL</h2><h3 id="服务的启动与停止" tabindex="-1"><a class="header-anchor" href="#服务的启动与停止" aria-hidden="true">#</a> 服务的启动与停止</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动 MySQL 服务命令</span>
net start MySQL服务名

<span class="token comment"># 停止 MySQL 服务命令</span>
net stop MySQL服务名
</code></pre></div><h3 id="登录与退出" tabindex="-1"><a class="header-anchor" href="#登录与退出" aria-hidden="true">#</a> 登录与退出</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-h</span> 主机名 <span class="token parameter variable">-P</span> 端口号 <span class="token parameter variable">-u</span> 用户名 -p密码
<span class="token comment"># eg: mysql -h locahost -P 3306 -u root -pabc123</span>

<span class="token comment"># 退出登录</span>
quit 或 <span class="token builtin class-name">exit</span>

<span class="token comment"># 版本查看</span>
mysql <span class="token parameter variable">-V</span> 或 mysql <span class="token parameter variable">--version</span>
<span class="token comment"># 登录后也可使用如下查询</span>
<span class="token keyword">select</span> version<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>① <code>-p</code>与密码之间不能有空格，其他参数空格可有可无<br> ② 密码建议在下一行输入，保证安全</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-h</span> locahost <span class="token parameter variable">-P</span> <span class="token number">3306</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
Enter password:****
</code></pre></div><p>③ 客户端和服务器在同一台机器上，由于是本机连接，可省略<code>-h</code>参数；若端口号也未修改，则<code>-P 3306</code>也可省略，简写为<code>mysql -u root -p</code></p></div><h3 id="mysql-演示使用" tabindex="-1"><a class="header-anchor" href="#mysql-演示使用" aria-hidden="true">#</a> MySQL 演示使用</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看数据库</span>
show databases<span class="token punctuation">;</span>

<span class="token comment"># 创建数据库</span>
create database dbtest<span class="token punctuation">;</span>
<span class="token comment"># 删除数据库</span>
drop database dbtest<span class="token punctuation">;</span>
<span class="token comment"># 使用数据库</span>
use dbtest<span class="token punctuation">;</span>
<span class="token comment"># 查看数据库表</span>
show tables<span class="token punctuation">;</span>
</code></pre></div><h3 id="mysql-的编码设置" tabindex="-1"><a class="header-anchor" href="#mysql-的编码设置" aria-hidden="true">#</a> MySQL 的编码设置</h3><p><strong>查看</strong>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看编码命令</span>
show variables like <span class="token string">&#39;character_%&#39;</span><span class="token punctuation">;</span>
show variables like <span class="token string">&#39;collation_%&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>修改</strong>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># MySQL数据目录下 my.ini 配置文件</span>
<span class="token punctuation">[</span>mysql<span class="token punctuation">]</span> <span class="token comment"># 大概63行左右，在其下添加</span>
<span class="token punctuation">..</span>.
default-character-set<span class="token operator">=</span>utf8 <span class="token comment"># 默认字符集</span>

<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span> <span class="token comment"># 大概76行左右，在其下添加</span>
<span class="token punctuation">..</span>.
character-set-server<span class="token operator">=</span>utf8
collation-server<span class="token operator">=</span>utf8_general-ci
</code></pre></div><h3 id="mysql-目录结构" tabindex="-1"><a class="header-anchor" href="#mysql-目录结构" aria-hidden="true">#</a> MySQL 目录结构</h3><p><strong>主要目录结构</strong>:</p><table><thead><tr><th>目录结构</th><th>说明</th></tr></thead><tbody><tr><td><code>bin</code>目录</td><td>所有 MySQL 的可执行文件</td></tr><tr><td>MySQLInstanceConfig.exe</td><td>数据库的配置向导，在安装时出现的内容</td></tr><tr><td><code>data</code>目录</td><td>系统数据库所在的目录</td></tr><tr><td><code>my.ini</code>文件</td><td>MySQL 的主要配置文件</td></tr><tr><td>c:\\ProgramData\\MySQL\\MySQL Server 8.0\\data\\</td><td>用户创建的数据库所在的目录(路径按自己实际而定)</td></tr></tbody></table><h3 id="mysql-源码" tabindex="-1"><a class="header-anchor" href="#mysql-源码" aria-hidden="true">#</a> MySQL 源码</h3>`,19),m={href:"https://downloads.mysql.com/archives/community/",target:"_blank",rel:"noopener noreferrer"},g=s('<figure><img src="'+l+`" alt="MySQL源码下载.png" tabindex="0" loading="lazy"><figcaption>MySQL源码下载.png</figcaption></figure><h2 id="常见问题解决" tabindex="-1"><a class="header-anchor" href="#常见问题解决" aria-hidden="true">#</a> 常见问题解决</h2><h3 id="错误-error-没有选择数据库就操作表格和数据" tabindex="-1"><a class="header-anchor" href="#错误-error-没有选择数据库就操作表格和数据" aria-hidden="true">#</a> 错误 ERROR:没有选择数据库就操作表格和数据</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>ERROR <span class="token number">1046</span> <span class="token punctuation">(</span><span class="token number">3</span>D000<span class="token punctuation">)</span>: <span class="token keyword">No</span> <span class="token keyword">database</span> selected

解决方案一：就是使用 <span class="token string">&quot;USE 数据库名;&quot;</span> 语句，这样接下来的语句就默认针对这个数据库进行操作
解决方案二：就是所有的表对象前面都加上<span class="token string">&quot;数据库.&quot;</span>
</code></pre></div><h3 id="命令行客户端的字符集问题" tabindex="-1"><a class="header-anchor" href="#命令行客户端的字符集问题" aria-hidden="true">#</a> 命令行客户端的字符集问题</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 表结构省略，重点在于下面的ERROR信息</span>
mysql<span class="token operator">&gt;</span> INSERT INTO dbtest VALUES<span class="token punctuation">(</span><span class="token number">1</span>, <span class="token string">&#39;张三&#39;</span>, <span class="token string">&#39;男&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ERROR <span class="token number">1366</span> <span class="token punctuation">(</span>HY000<span class="token punctuation">)</span>:Incorrect string value: <span class="token string">&#39;\\xD5\\xC5\\xC8\\xFD&#39;</span> <span class="token keyword">for</span> <span class="token function">column</span> <span class="token string">&#39;name&#39;</span> at row <span class="token number">1</span>
</code></pre></div><blockquote><p>MySQL 5.7 版本中无法存放中文，因为其默认字符集是<code>latin1</code>，而 MySQL 8.0 版本则默认为<code>utf8</code></p></blockquote><h3 id="authentication-plugin-caching-sha2-password-cannot-be-loaded" tabindex="-1"><a class="header-anchor" href="#authentication-plugin-caching-sha2-password-cannot-be-loaded" aria-hidden="true">#</a> Authentication plugin &#39;caching_sha2_password&#39; cannot be loaded</h3><p>  有些图形界面工具，特别是旧版本的图形界面工具，在连接 MySQL8 时出现<code>Authentication plugin &#39;caching_sha2_password&#39; cannot be loaded</code>错误</p><figure><img src="`+i+'" alt="MySQL8.0连接报错.png" tabindex="0" loading="lazy"><figcaption>MySQL8.0连接报错.png</figcaption></figure><p><strong>原因</strong>：<br>   MySQL 8 之前版本的传统加密规则为<code>mysql_native_password</code>，而 MySQL 8 之后提供了新的加密方式<code>caching_sha2_password</code></p><figure><img src="'+d+`" alt="MySQL 8 安装授权方式选择.png" width="650" tabindex="0" loading="lazy"><figcaption>MySQL 8 安装授权方式选择.png</figcaption></figure><p><strong>解决</strong>：<br> (1) 升级图形化工具使其支持<br> (2) 用户登录密码加密规则还原为<code>mysql_native_password</code></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用mysql数据库</span>
USE mysql<span class="token punctuation">;</span>

<span class="token comment"># 修改&#39;root&#39;@&#39;localhost&#39;用户的密码规则和密码（以自己实际修改）</span>
ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;abc123&#39;</span><span class="token punctuation">;</span>

<span class="token comment"># 刷新权限</span>
FLUSH PRIVILEGES<span class="token punctuation">;</span>
</code></pre></div>`,14);function k(b,y){const e=o("ExternalLinkIcon");return c(),p("div",null,[u,a("p",null,[n("下载地址："),a("a",m,[n("https://downloads.mysql.com/archives/community/"),r(e)])]),g])}const _=t(h,[["render",k],["__file","environment_building.html.vue"]]);export{_ as default};
