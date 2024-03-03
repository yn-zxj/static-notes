import{_ as p,l,o as r,c as i,i as d,w as n,a as t,g as a,k as s}from"./app-uKx7KVXM.js";const m="/assets/operation-AR-4gANY.png",u="/assets/anonymous_mount-11_fXGy9.png",v="/assets/named_mount-3rIvTZAO.png",k="/assets/path_mount-_XoNZ6IG.png",b="/assets/delete_volume-9Yth_Y8-.png",g={},h=t(`<h2 id="什么是容器数据卷" tabindex="-1"><a class="header-anchor" href="#什么是容器数据卷" aria-hidden="true">#</a> 什么是容器数据卷</h2><p>  如果数据都在容器中，假如容器删除数据就会丢失，这显然不是我们希望的，所以需要将数据持久化到本地。此外假如有一个配置，在多个容器中使用到了，假如某个地方需要修改，不使用数据卷就需要一个一个容器的去修改，期间可能还会涉及镜像重新构建与部署，使用数据卷就可以很好的解决这个问题。</p><p>  卷的本质是文件或者目录，存在一个或者多个容器中，有 Docker 挂载到容器，但不属于联合文件系统。卷的概念不仅解决了数据持久化的问题，还解决了容器间共享数据的问题。</p><div class="hint-container tip"><p class="hint-container-title">总结</p><p>① 数据的持久化，当容器重启后保证数据不丢失；<br> ② 如果数据存储于镜像中，主机上的其它进程不方便访问这些数据，数据卷解决了容器间数据共享问题。</p></div><p><strong>容器卷有哪些特点</strong>：<br>  ① 数据卷可在容器之间共享或重用数据<br>  ② 数据卷中的更改不会包含在镜像的更新中<br>  ③ 卷中的更改可以直接生效<br>  ④ 数据卷的生命周期一直持续到没有容器使用它为止</p><h2 id="卷的操作" tabindex="-1"><a class="header-anchor" href="#卷的操作" aria-hidden="true">#</a> 卷的操作</h2><h3 id="挂载数据卷" tabindex="-1"><a class="header-anchor" href="#挂载数据卷" aria-hidden="true">#</a> 挂载数据卷</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> memos <span class="token parameter variable">-p</span> <span class="token number">5230</span>:5230 <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> /opt/apps/memos:/var/opt/memos neosmemo/memos:stable
</code></pre></div><p>查看挂载是否成功：<br><code>docker inspect container_id</code></p>`,9),_=a("div",{class:"language-bash","data-ext":"sh"},[a("pre",{shell:"",":no-line-numbers":"",class:"language-bash"},[a("code",null,[a("span",{class:"token punctuation"},"{"),s(`
    `),a("span",{class:"token string"},'"Mounts"'),a("span",{class:"token builtin class-name"},":"),s(),a("span",{class:"token punctuation"},"["),s(`
        `),a("span",{class:"token punctuation"},"{"),s(`
            `),a("span",{class:"token string"},'"Type"'),a("span",{class:"token builtin class-name"},":"),s(),a("span",{class:"token string"},'"bind"'),s(`,
            `),a("span",{class:"token string"},'"Source"'),a("span",{class:"token builtin class-name"},":"),s(),a("span",{class:"token string"},'"/opt/apps/memos"'),s(", "),a("span",{class:"token comment"},"# 宿主机目录"),s(`
            `),a("span",{class:"token string"},'"Destination"'),a("span",{class:"token builtin class-name"},":"),s(),a("span",{class:"token string"},'"/var/opt/memos"'),s(", "),a("span",{class:"token comment"},"# 容器内的目录"),s(`
            `),a("span",{class:"token string"},'"Mode"'),a("span",{class:"token builtin class-name"},":"),s(),a("span",{class:"token string"},'"rw"'),s(`,
            `),a("span",{class:"token string"},'"RW"'),a("span",{class:"token builtin class-name"},":"),s(` true,
            `),a("span",{class:"token string"},'"Propagation"'),a("span",{class:"token builtin class-name"},":"),s(),a("span",{class:"token string"},'"rprivate"'),s(`
        `),a("span",{class:"token punctuation"},"}"),s(`
    `),a("span",{class:"token punctuation"},"]"),s(`
`),a("span",{class:"token punctuation"},"}"),s(`
`)])]),a("div",{class:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{class:"highlight-line"}," "),a("div",{class:"highlight-line"}," "),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")])],-1),f=t(`<h3 id="管理-volume" tabindex="-1"><a class="header-anchor" href="#管理-volume" aria-hidden="true">#</a> 管理 volume</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> volume COMMAND

Commands:
  create      创建一个 volume
  inspect     显示一个或多个 volume 的详细信息
  <span class="token function">ls</span>          列出 volume
  prune       移除本地没用到的 volume
  <span class="token function">rm</span>          移除一个或多个 volume
</code></pre></div><h4 id="创建-volume" tabindex="-1"><a class="header-anchor" href="#创建-volume" aria-hidden="true">#</a> 创建 volume</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ① 创建volume</span>
<span class="token function">docker</span> volume create vol_test

<span class="token comment"># ② 列出volume</span>
<span class="token function">docker</span> volume <span class="token function">ls</span>

<span class="token comment"># ③ 查看volume</span>
<span class="token function">docker</span> volume inspect vol_test
</code></pre></div><figure><img src="`+m+`" alt="操作卷.png" width="700" tabindex="0" loading="lazy"><figcaption>操作卷.png</figcaption></figure><blockquote><p>  上图中使用命令<code>docker volume inspect volume_name</code>，查看了指定卷的详细信息，<code>Mountpoint</code>展示的是挂载的路径，<u class="under-dash">所有的 Docker 容器内的卷，没有指定目录的情况下都是存放在其安装的<code>docker/volume/xxx/_data</code>下，例如：<code>/var/lib/docker/volume/(volume_name)/_data</code></u>；在此路径下，如果没有指定挂载卷的名字，就会随机生成一个名字(<u class="under-wave">挂载时只写了容器内的路径，没有写容器外的路径</u>)，例如<code>7c33f...a3d3</code>、<code>7cad...f909</code>这样的也被称为<strong>匿名挂载</strong>，而我们创建的<code>vol_test</code>因为有自己的名字被称为<strong>具名挂载</strong>。</p></blockquote><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 匿名挂载</span>
<span class="token parameter variable">-v</span> 容器内路径
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> memos <span class="token parameter variable">-p</span> <span class="token number">5230</span>:5230 <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> /var/opt/memos neosmemo/memos:stable

<span class="token comment"># 具名挂载</span>
<span class="token parameter variable">-v</span> 卷名:容器内路径
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> memos <span class="token parameter variable">-p</span> <span class="token number">5230</span>:5230 <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> memos_data:/var/opt/memos neosmemo/memos:stable

<span class="token comment"># 指定路径挂载</span>
<span class="token parameter variable">-v</span> 宿主机路径:容器内路径
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> memos <span class="token parameter variable">-p</span> <span class="token number">5230</span>:5230 <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> /opt/apps/memos:/var/opt/memos neosmemo/memos:stable

<span class="token comment"># 详细对比下方案例说明 👇🏻</span>
</code></pre></div><p><strong>案例说明</strong>：匿名挂载、具名挂载、指定路径挂载三者区别 ?</p>`,8),x=a("figure",null,[a("img",{src:u,alt:"匿名挂载.png",tabindex:"0",loading:"lazy"}),a("figcaption",null,"匿名挂载.png")],-1),w=a("figure",null,[a("img",{src:v,alt:"具名挂载.png",tabindex:"0",loading:"lazy"}),a("figcaption",null,"具名挂载.png")],-1),y=a("figure",null,[a("img",{src:k,alt:"指定路径挂载.png",tabindex:"0",loading:"lazy"}),a("figcaption",null,"指定路径挂载.png")],-1),z=t(`<p><strong>总结</strong>：<br>  ① 具名挂载和匿名挂载，都是挂载到<code>/var/lib/docker/volume/(volume_name)/_data</code>下，具名挂载可以指定卷的名字；匿名挂载没有指定卷的名字，随机生成一个名字；<br>  ② 指定路径挂载顾名思义，因为指定了路径，所以使用<code>docker volume ls</code>，没有挂载的信息，其数据存放指向已经改变；与匿名挂载和具名挂载不同，使用命令<code>docker inspect -f &quot;{{json .Mounts}}&quot; container_id</code>，返回的<code>Type</code>类型不同；<br>  ③ 具名挂载和指定根路径挂载，注意挂载命令<code>-v /docker_data/memos_data:/var/opt/memos</code>，前面有<code>/</code>的是指定路径，否则就是具名挂载；<br>  ④ 使用具名挂载，案例如下；如果用户不执行第一条命令而直接执行第二条命令，Docker 会代替用户来创建一个名为<code>vol_simple</code>的 volume，并将其挂载到<code>/_data</code>目录下；</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> volume create vol_simple
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> memos <span class="token parameter variable">-p</span> <span class="token number">5230</span>:5230 <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> vol_simple:/var/opt/memos neosmemo/memos:stable
</code></pre></div><p> ⑤ 指定路径挂载，文件夹必须使用<strong>绝对路径</strong>，如果宿主机中不存在该路径，Docker 会自动创建；<br>  ⑥ 创建新容器时，可以使用多个<code>-v</code>标签为容器添加多个 volume，例如：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> vol_muti <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /host_folder_1:/container_folder_1 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /host_folder_2:/container_folder_2:ro <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /host_file:/container_file centos
</code></pre></div><p> ⑦ volume 挂载时使用<code>z</code>和<code>Z</code>来指定该 volume 的权限，默认是<code>z</code>代表共享该 volume，<code>Z</code>该 volume 为私有卷；此外还有<code>ro</code>、<code>rw</code>；</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ro read only   只读（只能通过宿主机来操作，容器内部无法操作）</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> vol_ro <span class="token parameter variable">-v</span> /host_folder:/container_folder:ro centos
<span class="token comment"># rw read write  可读可写</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> vol_rw <span class="token parameter variable">-v</span> /host_folder:/container_folder:rw centos
<span class="token comment"># z 共享卷</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> vol_z <span class="token parameter variable">-v</span> /host_folder:/container_folder:z centos
<span class="token comment"># Z 私有卷</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> vol_Z <span class="token parameter variable">-v</span> /host_folder:/container_folder:Z centos
</code></pre></div><h4 id="删除-volume" tabindex="-1"><a class="header-anchor" href="#删除-volume" aria-hidden="true">#</a> 删除 volume</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> volume <span class="token function">rm</span> vol_test
</code></pre></div><figure><img src="`+b+'" alt="删除卷.png" width="700" tabindex="0" loading="lazy"><figcaption>删除卷.png</figcaption></figure>',9);function A(N,Z){const c=l("Tabs");return r(),i("div",null,[h,_,f,d(c,{id:"48",data:[{id:"匿名挂载"},{id:"具名挂载"},{id:"指定路径挂载"}]},{title0:n(({value:e,isActive:o})=>[s("匿名挂载")]),title1:n(({value:e,isActive:o})=>[s("具名挂载")]),title2:n(({value:e,isActive:o})=>[s("指定路径挂载")]),tab0:n(({value:e,isActive:o})=>[x]),tab1:n(({value:e,isActive:o})=>[w]),tab2:n(({value:e,isActive:o})=>[y]),_:1}),z])}const M=p(g,[["render",A],["__file","data_volume.html.vue"]]);export{M as default};
