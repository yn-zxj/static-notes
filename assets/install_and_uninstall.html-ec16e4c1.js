import{_ as c,N as l,Z as r,a1 as s,a2 as a,$ as e,a0 as i,a3 as n,E as p}from"./framework-85a1943c.js";const d="/assets/running_status-4eee8135.png",k="/assets/download_page-e6fd377e.png",u="/assets/rpm_package-c83f855b.png",m="/assets/error_install-18fa6956.png",g="/assets/rpm_mysql_lib-0595b56a.png",h="/assets/password_mysql-ff04039e.png",y="/assets/mysqld_status-87ea02e5.png",_="/assets/mysqld_process-ff581f98.png",v="/assets/mysql_login-1379afed.png",b="/assets/set_password_1-ca85c831.png",f="/assets/set_password_2-56f37b19.png",q="/assets/validate_password-58641dd3.png",w={},x=n(`<h2 id="_1-安装前说明" tabindex="-1"><a class="header-anchor" href="#_1-安装前说明" aria-hidden="true">#</a> 1.安装前说明</h2><h3 id="_1-1-linux-系统及工具准备" tabindex="-1"><a class="header-anchor" href="#_1-1-linux-系统及工具准备" aria-hidden="true">#</a> 1.1 Linux 系统及工具准备</h3><p>CentOS6 和 CentOS7 在 MySQL 的使用中的区别：</p><table><thead><tr><th></th><th>CentOS6</th><th>CentOS7</th></tr></thead><tbody><tr><td>防火墙</td><td>iptables</td><td>firewalld</td></tr><tr><td>启动服务</td><td>service</td><td>systemctl</td></tr></tbody></table><h3 id="_1-2-查看是否安装过-mysql" tabindex="-1"><a class="header-anchor" href="#_1-2-查看是否安装过-mysql" aria-hidden="true">#</a> 1.2 查看是否安装过 MySQL</h3><p>MySQL 版本查看：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">--version</span>
</code></pre></div><p>如果你是用 rpm 安装，检查一下 rpm package：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> mysql <span class="token comment"># -i 忽略大小写</span>
</code></pre></div><p>检查 mysql service：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>systemctl status mysqld.service
</code></pre></div><figure><img src="`+d+`" alt="运行状态.png" tabindex="0" loading="lazy"><figcaption>运行状态.png</figcaption></figure><h3 id="_1-3-mysql-的卸载" tabindex="-1"><a class="header-anchor" href="#_1-3-mysql-的卸载" aria-hidden="true">#</a> 1.3 MySQL 的卸载</h3><p>① 关闭 mysql 服务</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>systemctl stop mysqld.service
</code></pre></div><p>② 查看当前 mysql 安装状态</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> mysql
<span class="token comment"># 或</span>
yum list installed <span class="token operator">|</span> <span class="token function">grep</span> mysql
</code></pre></div><p>③ 卸载上述命令查询出的已安装程序</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>yum remove mysql-xxx mysql-xxx
</code></pre></div><p>④ 删除 mysql 相关文件</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查找相关文件</span>
<span class="token function">find</span> / <span class="token parameter variable">-name</span> mysql

<span class="token comment"># 删除</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> xxx
</code></pre></div><p>⑤ 删除<code>my.cnf</code></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/my.cnf
</code></pre></div><h2 id="_2-mysql-的-linux-版的安装" tabindex="-1"><a class="header-anchor" href="#_2-mysql-的-linux-版的安装" aria-hidden="true">#</a> 2.MySQL 的 Linux 版的安装</h2><div class="hint-container tip"><p class="hint-container-title">MySQL 的四大版本</p><p><strong>MySQL Community Server 社区版本</strong>，开源免费，自由下载，但不提供官方技术支持，适用于大多数普通用户。</p><p><strong>MySQL Enterprise Edition 企业版本</strong>，需付费，不能在线下载，可以试用 30 天。提供了更多的功能和更完备的技术支持，更适合于对数据库的功能和可靠性要求较高的企业客户。</p><p><strong>MySQL Cluster 集群版</strong>，开源免费。用于架设集群服务器，可将几个 MySQL Server 封装成一个 Server。需要在社区版或企业版的基础上使用。</p><p><strong>MySQL Cluster CGE 高级集群版</strong>，需付费。</p></div><h3 id="_2-1-下载-mysql-指定版本" tabindex="-1"><a class="header-anchor" href="#_2-1-下载-mysql-指定版本" aria-hidden="true">#</a> 2.1 下载 MySQL 指定版本</h3>`,26),L={href:"https://dev.mysql.com/downloads/",target:"_blank",rel:"noopener noreferrer"},S=n('<p>② 点击<code>MySQL Community Server</code></p><p>③ 在<code>General Availability(GA) Releases</code>中选择适合的版本</p><figure><img src="'+k+'" alt="Dowload Page.png" tabindex="0" loading="lazy"><figcaption>Dowload Page.png</figcaption></figure><h3 id="_2-2-linux-系统下安装-mysql-的几种方式" tabindex="-1"><a class="header-anchor" href="#_2-2-linux-系统下安装-mysql-的几种方式" aria-hidden="true">#</a> 2.2 Linux 系统下安装 MySQL 的几种方式</h3><h4 id="rpm-命令" tabindex="-1"><a class="header-anchor" href="#rpm-命令" aria-hidden="true">#</a> rpm 命令</h4><p>使用 rpm 命令安装扩展名为<code>.rpm</code>的软件包，其包的格式一般如下：</p><figure><img src="'+u+`" alt="RPM包格式.png" tabindex="0" loading="lazy"><figcaption>RPM包格式.png</figcaption></figure><hr><h4 id="yum-命令" tabindex="-1"><a class="header-anchor" href="#yum-命令" aria-hidden="true">#</a> yum 命令</h4><p>需联网，从 互联网获取 的 yum 源，直接使用 yum 命令安装</p><hr><h4 id="编译安装源码包" tabindex="-1"><a class="header-anchor" href="#编译安装源码包" aria-hidden="true">#</a> 编译安装源码包</h4><p>针对<code>tar.gz</code>这样的压缩格式，要用<code>tar</code>命令来解压；如果是其它压缩格式，就使用其它命令</p><h3 id="_2-3-centos7-下检查-mysql-依赖" tabindex="-1"><a class="header-anchor" href="#_2-3-centos7-下检查-mysql-依赖" aria-hidden="true">#</a> 2.3 CentOS7 下检查 MySQL 依赖</h3><p>① 检查<code>/tmp</code>临时目录权限(必不可少)</p><p>由于安装过程中，会通过 mysql 用户在/tmp 目录下新建 tmp_db 文件，所以需要给它设置较大的权限，执行：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /tmp
</code></pre></div><p>② 安装前检查依赖，不存在则需要安装</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> libaio
<span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> net-tools
</code></pre></div><h3 id="_2-4-安装过程" tabindex="-1"><a class="header-anchor" href="#_2-4-安装过程" aria-hidden="true">#</a> 2.4 安装过程</h3><p>① 将安装程序拷贝到<code>/opt</code>目录下</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 以抽离出来的mysql8为例，使用rpm安装</span>
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-community-common-8.0.25-1.el7.x86_64.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-community-client-plugins-8.0.25-1.el7.x86_64.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-community-libs-8.0.25-1.el7.x86_64.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-community-client-8.0.25-1.el7.x86_64.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-community-server-8.0.25-1.el7.x86_64.rpm
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>① 必须按照上面顺序执行<br> ② 如果没有检查 mysql 依赖环境，在安装 mysql-community-server 会报错<br> ③ 命令说明</p><blockquote><p>rpm：Redhat Package Manage，通过 RPM 的管理，用户可以把源代码包装成以 rpm 为扩展名的文件形式，易于安装<br> -i：--install，安装软件包<br> -v：--verbose，提供更多的详细信息输出<br> -h：--hash，软件包安装的时候列出哈希标记，展示进度条</p></blockquote><p>④ 可能遇到的报错，使用<code>yum remove mysql-libs</code>，清除之前安装过的依赖即可</p><figure><img src="`+m+`" alt="报错.png" tabindex="0" loading="lazy"><figcaption>报错.png</figcaption></figure></div><p>② 查看 MySQL 版本</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看版本</span>
mysql <span class="token parameter variable">--version</span>

<span class="token comment"># 查看是否安装成功</span>
<span class="token function">rpm</span> -qa<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-i</span> mysql
</code></pre></div><figure><img src="`+g+`" alt="安装验证.png" width="500" tabindex="0" loading="lazy"><figcaption>安装验证.png</figcaption></figure><p>③ 服务的初始化</p><p>为了保证数据库目录与文件的所有者为 mysql 登录用户，如果你是以 root 身份运行 mysql 服务，需要执 行下面的命令初始化：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>mysqld <span class="token parameter variable">--initialize</span> <span class="token parameter variable">--user</span><span class="token operator">=</span>mysql
</code></pre></div><blockquote><p>说明： <code>--initialize</code> 选项默认以&quot;安全&quot;模式来初始化，则会为 root 用户生成一个密码并将 该密码标记为过期，登录后你需要设置一个新的密码。生成的 临时密码 会往日志中记录一份</p></blockquote><p>查看密码：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># root@localhost: 后面就是初始化的密码</span>
<span class="token function">cat</span> /var/log/mysqld.log
</code></pre></div><figure><img src="`+h+`" alt="查看密码.png" tabindex="0" loading="lazy"><figcaption>查看密码.png</figcaption></figure><p>④ 启动 MySQL，查看状态</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># .service后缀可以省略</span>
<span class="token comment"># 启动</span>
systemctl start mysqld.service
<span class="token comment"># 关闭</span>
systemctl stop mysqld.service
<span class="token comment"># 重启</span>
systemctl restart mysqld.service
<span class="token comment"># 查看状态</span>
systemctl status mysqld.service
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>mysqld 这个可执行文件就代表着 MySQL 服务器程序，运行这个可执行文件就可以直接启动一个服务器进程</p><figure><img src="`+y+'" alt="启动状态.png" tabindex="0" loading="lazy"><figcaption>启动状态.png</figcaption></figure><p>查看进程：<code>ps -ef | grep mysqld</code></p><figure><img src="'+_+`" alt="查看进程.png" tabindex="0" loading="lazy"><figcaption>查看进程.png</figcaption></figure></div><p>⑤ 查看服务是否自启动</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>systemctl list-unit-files<span class="token operator">|</span><span class="token function">grep</span> mysqld.service
</code></pre></div><blockquote><p>默认是 enable，如果不是可以运行下面命令进行设置：</p></blockquote><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 开启自启动</span>
systemctl <span class="token builtin class-name">enable</span> mysqld.service
<span class="token comment"># 关闭自启动</span>
systemctl disable mysqld.service
</code></pre></div><h2 id="_3-mysql-登录" tabindex="-1"><a class="header-anchor" href="#_3-mysql-登录" aria-hidden="true">#</a> 3.MySQL 登录</h2><h3 id="_3-1-首次登录" tabindex="-1"><a class="header-anchor" href="#_3-1-首次登录" aria-hidden="true">#</a> 3.1 首次登录</h3><p>通过命令<code>mysql -hlocalhost -P3306 -uroot -p</code>进行登录，在<code>Enter password:</code>输入初始化密码(上面 mysqld.log 中获取的密码)</p><figure><img src="`+v+`" alt="登录.png" tabindex="0" loading="lazy"><figcaption>登录.png</figcaption></figure><h3 id="_3-2-修改密码" tabindex="-1"><a class="header-anchor" href="#_3-2-修改密码" aria-hidden="true">#</a> 3.2 修改密码</h3><p>因为初始化密码默认是过期的，所以查看数据库会报错，修改密码：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">USER</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;localhost&#39;</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;new_password&#39;</span><span class="token punctuation">;</span>
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>5.7 版本之后（不含 5.7），mysql 加入了全新的密码安全机制，设置新密码太简单会报错。</p><figure><img src="`+b+'" alt="密码设置.png" tabindex="0" loading="lazy"><figcaption>密码设置.png</figcaption></figure><p>改为更复杂的密码规则之后，设置成功，可以正常使用数据库了</p><figure><img src="'+f+`" alt="密码设置.png" tabindex="0" loading="lazy"><figcaption>密码设置.png</figcaption></figure></div><h3 id="_3-3-设置远程登录" tabindex="-1"><a class="header-anchor" href="#_3-3-设置远程登录" aria-hidden="true">#</a> 3.3 设置远程登录</h3><p>在远程连接 MySQL 数据库时，可能会遇到连接不上的情况，需要进行问题排查。</p><hr><h4 id="_1-确认网络" tabindex="-1"><a class="header-anchor" href="#_1-确认网络" aria-hidden="true">#</a> ① <u>确认网络</u></h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 检查与远程主机网络是否通畅</span>
<span class="token function">ping</span> ip_addr

<span class="token comment"># 检查远程主机端口是否开放</span>
telnet ip_addr port
</code></pre></div><p><strong>关闭防火墙或开放端口</strong>：</p><p>方式一：关闭防火墙</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># CentOS6</span>
<span class="token function">service</span> iptables stop

<span class="token comment"># CentOS7</span>
systemctl status firewalld.service <span class="token comment"># 查看状态</span>
systemctl start firewalld.service <span class="token comment"># 开启</span>
systemctl stop firewalld.service <span class="token comment"># 关闭</span>
systemctl <span class="token builtin class-name">enable</span> firewalld.service <span class="token comment">#设置开机启用防火墙</span>
systemctl disable firewalld.service <span class="token comment">#设置开机禁用防火墙</span>
</code></pre></div><p>方式二：开放端口</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看开放的端口号</span>
firewall-cmd --list-all

<span class="token comment"># 设置开放的端口号</span>
firewall-cmd --add-service<span class="token operator">=</span>http <span class="token parameter variable">--permanent</span>
firewall-cmd --add-port<span class="token operator">=</span><span class="token number">3306</span>/tcp <span class="token parameter variable">--permanent</span>

<span class="token comment"># 重启防火墙</span>
firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre></div><h4 id="_2-linux-下修改配置" tabindex="-1"><a class="header-anchor" href="#_2-linux-下修改配置" aria-hidden="true">#</a> ② <u>Linux 下修改配置</u></h4><p>在 Linux 系统 MySQL 下测试，可以看到 root 用户的当前主机配置信息为 localhost</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">use</span> mysql<span class="token punctuation">;</span>
<span class="token keyword">select</span> Host<span class="token punctuation">,</span><span class="token keyword">User</span> <span class="token keyword">from</span> <span class="token keyword">user</span><span class="token punctuation">;</span>

<span class="token operator">+</span><span class="token comment">-----------+---------------+</span>
<span class="token operator">|</span> Host      <span class="token operator">|</span> <span class="token keyword">User</span>          <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------+---------------+</span>
<span class="token operator">|</span> localhost <span class="token operator">|</span> mysql<span class="token punctuation">.</span><span class="token keyword">session</span> <span class="token operator">|</span>
<span class="token operator">|</span> localhost <span class="token operator">|</span> mysql<span class="token punctuation">.</span>sys     <span class="token operator">|</span>
<span class="token operator">|</span> localhost <span class="token operator">|</span> root          <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------+---------------+</span>
<span class="token number">3</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">修改 Host 为通配符%</p><p>  Host 列指定了允许用户登录所使用的 IP，比如<code>user=root Host=192.168.1.1</code>，表示 root 用户只能通过 192.168.1.1 的客户端去访问。 <code>user=root Host=localhost</code>表示只能通过本机客户端去访问。而<code>%</code>是个通配符，如果<code>Host=192.168.1.%</code>，就表示只要 IP 地址前缀是<code>192.168.1.</code>的客户端都可以连接。如果<code>Host=%</code>，表示所有 IP 都有连接权限。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">update</span> <span class="token keyword">user</span> <span class="token keyword">set</span> host <span class="token operator">=</span> <span class="token string">&#39;%&#39;</span> <span class="token keyword">where</span> <span class="token keyword">user</span> <span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># 刷新权限</span>
flush <span class="token keyword">privileges</span><span class="token punctuation">;</span>
</code></pre></div><p><mark>注意：在生产环境下不能为了省事将 host 设置为%，这样做会存在安全问题，具体的设置可以根据生产环境的 IP 进行设置</mark>。</p></div>`,62),E=s("code",null,"'caching_sha2_password' cannot be loaded",-1),M=n(`<h2 id="_4-mysql-8-的密码轻度评估-了解" tabindex="-1"><a class="header-anchor" href="#_4-mysql-8-的密码轻度评估-了解" aria-hidden="true">#</a> 4.MySQL 8 的密码轻度评估(了解)</h2><h3 id="_4-1-mysql-不同版本设置密码-可能出现" tabindex="-1"><a class="header-anchor" href="#_4-1-mysql-不同版本设置密码-可能出现" aria-hidden="true">#</a> 4.1 MySQL 不同版本设置密码(可能出现)</h3><p>MySQL5.7 中：成功</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">alter</span> <span class="token keyword">user</span> <span class="token string">&#39;root&#39;</span> identified <span class="token keyword">by</span> <span class="token string">&#39;abcd1234&#39;</span><span class="token punctuation">;</span>
Query OK<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token keyword">rows</span> affected <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre></div><p>MySQL8.0 中：失败</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">alter</span> <span class="token keyword">user</span> <span class="token string">&#39;root&#39;</span> identified <span class="token keyword">by</span> <span class="token string">&#39;abcd1234&#39;</span><span class="token punctuation">;</span>
ERROR <span class="token number">1819</span> <span class="token punctuation">(</span>HY000<span class="token punctuation">)</span>: Your password does <span class="token operator">not</span> satisfy the <span class="token keyword">current</span> policy requirements
</code></pre></div><h3 id="_4-2-mysql-8-之前的安全策略" tabindex="-1"><a class="header-anchor" href="#_4-2-mysql-8-之前的安全策略" aria-hidden="true">#</a> 4.2 MySQL 8 之前的安全策略</h3><p>在 MySQL 8.0 之前，MySQL 使用的是 validate_password 插件检测、验证账号密码强度，保障账号的安全性。</p><h4 id="方式一-在参数文件-my-cnf-中添加参数" tabindex="-1"><a class="header-anchor" href="#方式一-在参数文件-my-cnf-中添加参数" aria-hidden="true">#</a> 方式一：在参数文件 my.cnf 中添加参数</h4><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
plugin<span class="token operator">-</span><span class="token keyword">load</span><span class="token operator">-</span><span class="token keyword">add</span><span class="token operator">=</span>validate_password<span class="token punctuation">.</span>so
<span class="token comment"># ON/OFF/FORCE/FORCE_PLUS_PERMANENT: 是否使用该插件(及强制/永久强制使用)</span>
validate<span class="token operator">-</span>password<span class="token operator">=</span>FORCE_PLUS_PERMANENT
</code></pre></div><blockquote><p>① plugin library 中的 validate_password 文件名的后缀名根据平台不同有所差异。 对于 Unix 和 Unix-like 系统而言，它的文件后缀名是<code>.so</code>，对于 Windows 系统而言，它的文件后缀名是<code>.dll</code></p><p>② 修改参数后必须重启 MySQL 服务才能生效</p><p>③ 参数 FORCE_PLUS_PERMANENT 是为了防止插件在 MySQL 运行时的时候被卸载。当你卸载插件时就会报错。如下所示：</p></blockquote><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">SELECT</span> PLUGIN_NAME<span class="token punctuation">,</span> PLUGIN_LIBRARY<span class="token punctuation">,</span> PLUGIN_STATUS<span class="token punctuation">,</span> LOAD_OPTION
       <span class="token keyword">FROM</span> INFORMATION_SCHEMA<span class="token punctuation">.</span>PLUGINS
       <span class="token keyword">WHERE</span> PLUGIN_NAME <span class="token operator">=</span> <span class="token string">&#39;validate_password&#39;</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-------------------+----------------------+---------------+----------------------+</span>
<span class="token operator">|</span> PLUGIN_NAME       <span class="token operator">|</span> PLUGIN_LIBRARY       <span class="token operator">|</span> PLUGIN_STATUS <span class="token operator">|</span> LOAD_OPTION          <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------------------+----------------------+---------------+----------------------+</span>
<span class="token operator">|</span> validate_password <span class="token operator">|</span> validate_password<span class="token punctuation">.</span>so <span class="token operator">|</span> ACTIVE        <span class="token operator">|</span> FORCE_PLUS_PERMANENT <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------------------+----------------------+---------------+----------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> UNINSTALL PLUGIN validate_password<span class="token punctuation">;</span>
ERROR <span class="token number">1702</span> <span class="token punctuation">(</span>HY000<span class="token punctuation">)</span>: Plugin <span class="token string">&#39;validate_password&#39;</span> <span class="token operator">is</span> force_plus_permanent <span class="token operator">and</span> can <span class="token operator">not</span> be unloaded
</code></pre></div><h4 id="方式二-运行时命令安装" tabindex="-1"><a class="header-anchor" href="#方式二-运行时命令安装" aria-hidden="true">#</a> 方式二：运行时命令安装</h4><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>INSTALL PLUGIN validate_password <span class="token keyword">SONAME</span> <span class="token string">&#39;validate_password.so&#39;</span><span class="token punctuation">;</span>
</code></pre></div><blockquote><p>此方法也会注册到元数据，也就是 mysql.plugin 表中，所以不用担心 MySQL 重启后插件会失效</p></blockquote><h3 id="_4-3-mysql-8-的安全策略" tabindex="-1"><a class="header-anchor" href="#_4-3-mysql-8-的安全策略" aria-hidden="true">#</a> 4.3 MySQL 8 的安全策略</h3><h4 id="_1-validate-password-说明" tabindex="-1"><a class="header-anchor" href="#_1-validate-password-说明" aria-hidden="true">#</a> 1. validate_password 说明</h4><p>  MySQL 8.0 引入了服务器组件（Components）这个特性，validate_password 插件已用服务器组件重新实现。8.0.25 版本的数据库中，默认自动安装 validate_password 组件。</p><p><mark>未安装插件前，执行如下两个指令</mark>，执行效果：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token string">&#39;validate_password%&#39;</span><span class="token punctuation">;</span>
Empty <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.02</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> mysql<span class="token punctuation">.</span>component<span class="token punctuation">;</span>
ERROR <span class="token number">1146</span> <span class="token punctuation">(</span><span class="token number">42</span>S02<span class="token punctuation">)</span>: <span class="token keyword">Table</span> <span class="token string">&#39;mysql.component&#39;</span> doesn&#39;t exist
</code></pre></div><p><mark>安装插件后，执行如下两个指令</mark>，执行效果：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">&#39;validate_password%&#39;</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">--------------------------------------+--------+</span>
<span class="token operator">|</span> Variable_name                        <span class="token operator">|</span> <span class="token keyword">Value</span>  <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------------------------------------+--------+</span>
<span class="token operator">|</span> validate_password<span class="token punctuation">.</span>check_user_name    <span class="token operator">|</span> <span class="token keyword">ON</span>     <span class="token operator">|</span>
<span class="token operator">|</span> validate_password<span class="token punctuation">.</span>dictionary_file    <span class="token operator">|</span>        <span class="token operator">|</span>
<span class="token operator">|</span> validate_password<span class="token punctuation">.</span>length             <span class="token operator">|</span> <span class="token number">8</span>      <span class="token operator">|</span>
<span class="token operator">|</span> validate_password<span class="token punctuation">.</span>mixed_case_count   <span class="token operator">|</span> <span class="token number">1</span>      <span class="token operator">|</span>
<span class="token operator">|</span> validate_password<span class="token punctuation">.</span>number_count       <span class="token operator">|</span> <span class="token number">1</span>      <span class="token operator">|</span>
<span class="token operator">|</span> validate_password<span class="token punctuation">.</span>policy             <span class="token operator">|</span> MEDIUM <span class="token operator">|</span>
<span class="token operator">|</span> validate_password<span class="token punctuation">.</span>special_char_count <span class="token operator">|</span> <span class="token number">1</span>      <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------------------------------------+--------+</span>

mysql<span class="token operator">&gt;</span> <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> mysql<span class="token punctuation">.</span>component<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">--------------+--------------------+------------------------------------+</span>
<span class="token operator">|</span> component_id <span class="token operator">|</span> component_group_id <span class="token operator">|</span> component_urn                      <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------------+--------------------+------------------------------------+</span>
<span class="token operator">|</span> <span class="token number">1</span>            <span class="token operator">|</span> <span class="token number">1</span>                  <span class="token operator">|</span> <span class="token keyword">file</span>:<span class="token comment">//component_validate_password |</span>
<span class="token operator">+</span><span class="token comment">--------------+--------------------+------------------------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre></div><p>关于<code>validate_password</code>组件对应的系统变量说明：</p><figure><img src="`+q+`" alt="参数说明.png" tabindex="0" loading="lazy"><figcaption>参数说明.png</figcaption></figure><blockquote><p>提示：组件和插件的默认值可能有所不同。例如，MySQL 5.7. validate_password_check_user_name 的默认值为 OFF。</p></blockquote><h4 id="_2-修改安全策略" tabindex="-1"><a class="header-anchor" href="#_2-修改安全策略" aria-hidden="true">#</a> 2. 修改安全策略</h4><p>修改密码验证安全强度：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> validate_password_policy <span class="token operator">=</span> LOW<span class="token punctuation">;</span>
<span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> validate_password_policy <span class="token operator">=</span> MEDIUM<span class="token punctuation">;</span>
<span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> validate_password_policy <span class="token operator">=</span> STRONG<span class="token punctuation">;</span>
<span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> validate_password_policy <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment"># For LOW</span>
<span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> validate_password_policy <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment"># For MEDIUM</span>
<span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> validate_password_policy <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment"># For HIGH</span>

<span class="token comment"># 注意：如果是插件的话，SQL为set global validate_password_policy = LOW</span>
</code></pre></div><p>此外，还可以修改密码中字符的长度：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> validate_password_length <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="_3-密码强度测试" tabindex="-1"><a class="header-anchor" href="#_3-密码强度测试" aria-hidden="true">#</a> 3. 密码强度测试</h4><p>  如果你创建密码是遇到<code>Your password does not satisfy the current policy requirements</code>，可以通过函数组件去检测密码是否满足条件： 0-100。当评估在 100 时就是说明使用上了最基本的规则：大写+小写+特殊字符+数字组成的 8 位以上密码</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">SELECT</span> VALIDATE_PASSWORD_STRENGTH<span class="token punctuation">(</span><span class="token string">&#39;weak&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">------------------------------------+</span>
<span class="token operator">|</span> VALIDATE_PASSWORD_STRENGTH<span class="token punctuation">(</span><span class="token string">&#39;weak&#39;</span><span class="token punctuation">)</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------------------------------------+</span>
<span class="token operator">|</span>                                 <span class="token number">25</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------------------------------------+</span>
</code></pre></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果没有安装 validate_password 组件或插件的话，那么这个函数永远都返回 0。 关于密码复杂度对应的密码复杂度策略。如下表格所示：</p><table><thead><tr><th>Password Test Return</th><th>Value</th></tr></thead><tbody><tr><td>Length &lt; 4</td><td>0</td></tr><tr><td>Length ≥ 4 and &lt; validate_password.length</td><td>25</td></tr><tr><td>Satisfies policy 1 (LOW)</td><td>50</td></tr><tr><td>Satisfies policy 2 (MEDIUM)</td><td>75</td></tr><tr><td>Satisfies policy 3 (STRONG)</td><td>100</td></tr></tbody></table></div><h3 id="_4-4-卸载插件或组件" tabindex="-1"><a class="header-anchor" href="#_4-4-卸载插件或组件" aria-hidden="true">#</a> 4.4 卸载插件或组件</h3><p><strong>卸载插件</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>UNINSTALL PLUGIN plugin_name
<span class="token comment"># 例如</span>
UNINSTALL PLUGIN validate_password<span class="token punctuation">;</span>
</code></pre></div><p><strong>卸载组件</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>UNINSTALL COMPONENT component_name <span class="token punctuation">[</span><span class="token punctuation">,</span> component_name <span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token comment"># 例如</span>
UNINSTALL COMPONENT <span class="token string">&#39;file://component_validate_password&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,39);function N(O,R){const t=p("ExternalLinkIcon"),o=p("RouterLink");return l(),r("div",null,[x,s("p",null,[a("① 下载地址："),s("a",L,[a("https://dev.mysql.com/downloads/"),e(t)])]),S,s("p",null,[a("  进行上面排查后，重新进行连接，如果连接报错"),E,a("，分析是 MySQL 密码加密方法变了。解决方法参考："),e(o,{to:"/backend/database/base/environment_building.html#_3-3-authentication-plugin-caching-sha2-password-cannot-be-loaded"},{default:i(()=>[a("基础篇环境搭建-3.3")]),_:1})]),M])}const I=c(w,[["render",N],["__file","install_and_uninstall.html.vue"]]);export{I as default};
