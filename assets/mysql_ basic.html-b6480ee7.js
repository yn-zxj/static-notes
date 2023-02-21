import{_ as a,x as s,X as n,a1 as e}from"./framework-13dd6df4.js";const t={},c=e(`<h2 id="_1-mysql-登录" tabindex="-1"><a class="header-anchor" href="#_1-mysql-登录" aria-hidden="true">#</a> 1.MySQL 登录</h2><h3 id="_1-1-服务的启动与停止" tabindex="-1"><a class="header-anchor" href="#_1-1-服务的启动与停止" aria-hidden="true">#</a> 1.1 服务的启动与停止</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动 MySQL 服务命令</span>
net start MySQL服务名

<span class="token comment"># 停止 MySQL 服务命令</span>
net stop MySQL服务名
</code></pre></div><h3 id="_1-2-登录与退出" tabindex="-1"><a class="header-anchor" href="#_1-2-登录与退出" aria-hidden="true">#</a> 1.2 登录与退出</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-h</span> 主机名 <span class="token parameter variable">-P</span> 端口号 <span class="token parameter variable">-u</span> 用户名 -p密码
<span class="token comment"># eg: mysql -h locahost -P 3306 -u root -pabc123</span>

<span class="token comment"># 退出登录</span>
quit 或 <span class="token builtin class-name">exit</span>

<span class="token comment"># 版本查看</span>
mysql <span class="token parameter variable">-V</span> 或 mysql <span class="token parameter variable">--version</span>
<span class="token comment"># 登录后也可使用如下查询</span>
<span class="token keyword">select</span> version<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>① <code>-p</code>与密码之间不能有空格，其他参数空格可有可无<br> ② 密码建议在下一行输入，保证安全</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-h</span> locahost <span class="token parameter variable">-P</span> <span class="token number">3306</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
Enter password:****
</code></pre></div><p>③ 客户端和服务器在同一台机器上，由于是本机连接，可省略<code>-h</code>参数；若端口号也未修改，则<code>-P 3306</code>也可省略，简写为<code>mysql -u root -p</code></p></div><h3 id="_1-3-mysql-演示使用" tabindex="-1"><a class="header-anchor" href="#_1-3-mysql-演示使用" aria-hidden="true">#</a> 1.3 MySQL 演示使用</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看数据库</span>
show databases<span class="token punctuation">;</span>

<span class="token comment"># 创建数据库</span>
create database dbtest<span class="token punctuation">;</span>
<span class="token comment"># 使用数据库</span>
use dbtest<span class="token punctuation">;</span>
<span class="token comment"># 查看数据库表</span>
show tables<span class="token punctuation">;</span>
<span class="token comment"># 创建表</span>
create 
</code></pre></div>`,8),o=[c];function p(l,r){return s(),n("div",null,o)}const d=a(t,[["render",p],["__file","mysql_ basic.html.vue"]]);export{d as default};
