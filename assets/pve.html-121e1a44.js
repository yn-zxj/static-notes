import{_ as r,j as i,o as s,c as d,f as e,i as t,g as o,a as n}from"./app-01570e4a.js";const p="/assets/pve_download-6032ac2f.png",c="/assets/balenaEtcher_1-730ba0a9.png",l="/assets/balenaEtcher_2-d4f45718.png",h="/assets/balenaEtcher_3-ab3ee650.png",g="/assets/Virtualization_Technology-614d20d7.png",u="/assets/uefi_boot-8db285cb.png",_="/assets/pve_install_1-12939574.png",b="/assets/pve_install_2-476d586a.png",f={},m=e("h2",{id:"pve-镜像下载",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pve-镜像下载","aria-hidden":"true"},"#"),t(" PVE 镜像下载")],-1),v={href:"https://www.proxmox.com/en/downloads",target:"_blank",rel:"noopener noreferrer"},x=e("figure",null,[e("img",{src:p,alt:"官网下载页.png",tabindex:"0",loading:"lazy"}),e("figcaption",null,"官网下载页.png")],-1),k=e("h2",{id:"制作-pve-的-u-盘启动盘",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#制作-pve-的-u-盘启动盘","aria-hidden":"true"},"#"),t(" 制作 PVE 的 U 盘启动盘")],-1),E=e("p",null,"① 准备一个容量大于 2GB 的 U 盘，并对其进行格式化",-1),P={href:"https://github.com/balena-io/etcher/releases",target:"_blank",rel:"noopener noreferrer"},w=n('<p>③ 选择镜像 → 选择烧录的 U 盘 → 开始烧录</p><figure><img src="'+c+'" alt="启动盘烧录_1.png" width="450" tabindex="0" loading="lazy"><figcaption>启动盘烧录_1.png</figcaption></figure><figure><img src="'+l+'" alt="启动盘烧录_2.png" width="450" tabindex="0" loading="lazy"><figcaption>启动盘烧录_2.png</figcaption></figure><figure><img src="'+h+'" alt="启动盘烧录_3.png" width="450" tabindex="0" loading="lazy"><figcaption>启动盘烧录_3.png</figcaption></figure><h2 id="开启主机虚拟化功能" tabindex="-1"><a class="header-anchor" href="#开启主机虚拟化功能" aria-hidden="true">#</a> 开启主机虚拟化功能</h2><blockquote><p>  开启<strong>虚拟化</strong>功能的作用是让 CPU 的虚拟化技术能应用在 PVE 系统上，其实在 intel 4 代 CPU 后基本上都支持该技术，特别老的可能不支持，请根据自己的硬件进行判别。另外一点是<strong>硬件直通</strong>功能，也是需要硬件支持的。</p></blockquote><p>① 主机<u class="under-dot">关机</u>的情况下插入 U 盘，接着开机，进入 BIOS 设置界面，一般就是开机过程中连续按 <kbd>Delete</kbd> 键，每个电脑主板可能不同，视情况而定；</p><p>② 进入 BIOS 后， 进入<code>Advanced</code>选项，找到 CPU 相关的内容，将虚拟化和硬件直通打开选择<code>Enabled</code>使能；</p><figure><img src="'+g+'" alt="开启虚拟化.png" width="500" tabindex="0" loading="lazy"><figcaption>开启虚拟化.png</figcaption></figure><p>③ 更改启动项</p><figure><img src="'+u+'" alt="更改启动项.png" width="500" tabindex="0" loading="lazy"><figcaption>更改启动项.png</figcaption></figure><blockquote><p>  Mac 系统制作 U 盘启动盘不建议在虚拟机里操作，制作出来的启动盘可能存在问题。如果你是 Win 系统可以使用 balenaEtcher 或者 UltraISO，建议使用前者，它支持 Win 和 Mac 并且操作更简单！</p></blockquote><h2 id="安装-pve-系统" tabindex="-1"><a class="header-anchor" href="#安装-pve-系统" aria-hidden="true">#</a> 安装 PVE 系统</h2><blockquote><p>注意：此时启动主机时，需要保持插入 U 盘，并且主机 HDMI 接显示器。</p></blockquote><p>① 选择 <code>Install Proxmox VE (Graphical)</code> ，使用图形化的方式安装；</p><figure><img src="'+_+`" alt="PVE安装_1.png" width="600" tabindex="0" loading="lazy"><figcaption>PVE安装_1.png</figcaption></figure><p>② 选择安装的硬盘，点击<code>Options</code>可设置大小(hsize = 64)；</p><p>③ 本地时区选择，<code>Country → China</code>、<code>Time zone → Asia/Shanghai</code>、<code>Keyboard Layout → U.S. English</code>；</p><p>④ 设置密码和邮箱地址，邮箱地址可以随便设置，但是格式得对；</p><p>⑤ 网络配置</p><blockquote><p>笔者是将此当做是旁路由使用，所以下面配置仅供参考：</p><table><thead><tr><th>配置项</th><th>参数</th><th>备注</th></tr></thead><tbody><tr><td>Management Interface</td><td>enp2s0</td><td>网卡选择，视自己情况而定</td></tr><tr><td>Hostname(FQDN)</td><td>pve.me</td><td>按格式随意</td></tr><tr><td>IP Address</td><td>192.168.8.187/24</td><td>主路由下闲置的 IP</td></tr><tr><td>Gateway</td><td>192.168.8.1</td><td>网关，主路由</td></tr><tr><td>DNS Server</td><td>192.168.8.1</td><td>DNS 服务器，主路由</td></tr></tbody></table></blockquote><p>⑥ 确认配置开始安装，当安装完毕，界面显示如下内容，说明安装完成</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>----------------------------------------------------------------------------
Welcome to the Proxmox Virtual Environment. Please use your web browser to
configure this server - connect to:
  https://192.168.8.187:8006/
----------------------------------------------------------------------------
pve login:
</code></pre></div><blockquote><p>web 访问的地址就是前面网络配置分配的 IP 地址，注意是 <u class="under-dash"><strong>https</strong></u></p></blockquote><p>⑦ web 管理界面</p><p>  此时给主机相应网口接上网线，使用任意同一局域网的设备，浏览器输入 web 管理地址，并输入用户名和密码，登录后如下，此后我们的所有管理操作都是再此进行。</p><figure><img src="`+b+'" alt="web 管理界面.png" tabindex="0" loading="lazy"><figcaption>web 管理界面.png</figcaption></figure><h2 id="pve-一键优化脚本" tabindex="-1"><a class="header-anchor" href="#pve-一键优化脚本" aria-hidden="true">#</a> PVE 一键优化脚本</h2>',28),V={href:"https://github.com/ivanhao/pvetools",target:"_blank",rel:"noopener noreferrer"},y=n(`<p>① 删除企业源</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> /etc/apt/sources.list.d/pve-enterprise.list
</code></pre></div><p>② 安装优化工具</p><blockquote><p>可以参考优化脚本地址里教程中的安装方式，由于我存在网络不通的问题，故下载 zip 放服务器下，手动执行<code>./pvetools.sh</code>进行相关优化。</p></blockquote><hr><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,6),z={href:"https://zhuanlan.zhihu.com/p/614820460",target:"_blank",rel:"noopener noreferrer"};function q(I,U){const a=i("ExternalLinkIcon");return s(),d("div",null,[m,e("p",null,[t("  本次使用的 PVE 镜像为最新的 8.0，下载地址："),e("a",v,[t("Proxmox VE 8.0-2"),o(a)])]),x,k,E,e("p",null,[t("② 打开烧录工具 "),e("a",P,[t("balenaEtcher"),o(a)])]),w,e("p",null,[t("PVE 一键优化脚本可以做一些简单的优化和辅助设置，教程参考："),e("a",V,[t("https://github.com/ivanhao/pvetools"),o(a)])]),y,e("p",null,[t("① "),e("a",z,[t("PVE 的简单使用教程、调优、常见问题汇总"),o(a)])])])}const N=r(f,[["render",q],["__file","pve.html.vue"]]);export{N as default};
