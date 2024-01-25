import{_ as o,l as c,o as t,c as r,g as a,k as e,i as d,a as n}from"./app-W1SSS1tO.js";const p={},l=n(`<h2 id="帮助命令" tabindex="-1"><a class="header-anchor" href="#帮助命令" aria-hidden="true">#</a> 帮助命令</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> version  <span class="token comment"># 显示docker版本信息</span>
<span class="token function">docker</span> info     <span class="token comment"># 显示docker系统信息，包括镜像和容器数</span>

<span class="token function">docker</span> <span class="token parameter variable">--help</span>          <span class="token comment"># 显示帮助信息</span>
<span class="token function">docker</span> COMMAND <span class="token parameter variable">--help</span>  <span class="token comment"># 显示命令的帮助信息</span>

<span class="token comment"># 例如：</span>
<span class="token function">docker</span> images <span class="token parameter variable">--help</span>
<span class="token function">docker</span> container <span class="token parameter variable">--help</span>
</code></pre></div>`,2),i=a("strong",null,"帮助命令地址",-1),m={href:"https://docs.docker.com/reference/",target:"_blank",rel:"noopener noreferrer"},k=n(`<h2 id="镜像的基本命令" tabindex="-1"><a class="header-anchor" href="#镜像的基本命令" aria-hidden="true">#</a> 镜像的基本命令</h2><h3 id="docker-images" tabindex="-1"><a class="header-anchor" href="#docker-images" aria-hidden="true">#</a> docker images</h3><p><strong>作用</strong>：显示本地主机上的镜像</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker images [OPTIONS] [REPOSITORY[:TAG]]</span>
<span class="token function">docker</span> images
REPOSITORY  TAG     IMAGE ID        CREATED     SIZE
nginx       alpine  e08a7adafd85    <span class="token number">2</span> years ago <span class="token number">22</span>.1MB
</code></pre></div><p><strong>解释</strong>：<br><code>REPOSITORY</code>：镜像的仓库源<br><code>TAG</code>：镜像的标签<br><code>IMAGE ID</code>：镜像的 ID<br><code>CREATED</code>：镜像的创建时间<br><code>SIZE</code>：镜像的大小</p><p><strong>可选项</strong>：<br><code>-a, --all</code>：列出所有镜像<br><code>-q, --quiet</code>：只显示镜像的 ID</p><h3 id="docker-search" tabindex="-1"><a class="header-anchor" href="#docker-search" aria-hidden="true">#</a> docker search</h3><p><strong>作用</strong>：搜索 Docker Hub 中的镜像</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker search [OPTIONS] TERM</span>
<span class="token function">docker</span> search nginx                     <span class="token comment"># 搜索nginx镜像</span>
<span class="token function">docker</span> search nginx <span class="token parameter variable">--filter</span><span class="token operator">=</span>STARS<span class="token operator">=</span><span class="token number">500</span>  <span class="token comment"># 搜索STARS大于500的nginx镜像（过滤）</span>
</code></pre></div><h3 id="docker-pull" tabindex="-1"><a class="header-anchor" href="#docker-pull" aria-hidden="true">#</a> docker pull</h3><p><strong>作用</strong>：从镜像仓库下载镜像</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker pull [OPTIONS] NAME[:TAG|@DIGEST]</span>
<span class="token function">docker</span> pull nginx         <span class="token comment"># 下载nginx镜像</span>
<span class="token function">docker</span> pull nginx:latest  <span class="token comment"># 下载nginx最新的镜像</span>

<span class="token comment"># 例如</span>
root@learn ~ % <span class="token function">docker</span> pull neosmemo/memos
Using default tag: latest <span class="token comment"># 不写tag，默认下载最新版</span>
latest: Pulling from neosmemo/memos
c30352492317: Already exists  <span class="token comment"># 分层下载（存在即共用）</span>
d8ae814ab1c6: Pull complete
3fb4c2928579: Pull complete
53656755af84: Pull complete
ebf1d6d6b0e4: Pull complete
6a2cef4ab53d: Pull complete
Digest: sha256:84fe8465d1ec9ab729a37a7c6b93fd8efa1f1d190ed08dcc4a0b53f43530d64e
Status: Downloaded newer image <span class="token keyword">for</span> neosmemo/memos:latest
docker.io/neosmemo/memos:latest <span class="token comment"># 真实地址</span>
</code></pre></div><h3 id="docker-rmi" tabindex="-1"><a class="header-anchor" href="#docker-rmi" aria-hidden="true">#</a> docker rmi</h3><p><strong>作用</strong>：删除镜像</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker rmi [OPTIONS] IMAGE [IMAGE...]</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> images_id                       <span class="token comment"># 强制删除指定镜像</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> images_id, images_id, images_id <span class="token comment"># 强制删除多个镜像</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> images_name:tag                 <span class="token comment"># 删除指定标签镜像</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token parameter variable">-aq</span><span class="token variable">)</span></span>            <span class="token comment"># 删除所有镜像</span>

<span class="token comment"># 例如</span>
root@learn ~ % <span class="token function">docker</span> rmi neosmemo/memos
Untagged: neosmemo/memos:latest
Untagged: neosmemo/memos@sha256:84fe8465d1ec9ab729a37a7c6b93fd8efa1f1d190ed08dcc4a0b53f43530d64e
Deleted: sha256:30b4d6be60366d1fe75b3f091d9cd973c18e92da49e9d2967bb30b30ba89e19a
Deleted: sha256:03adeca7d9a71bde2730b239dfc8511d7f64b8b6462e06531d48f614bc8aea0e
Deleted: sha256:230df41bf772b3df3bbcb80bda3049b66425bd273d71a2d5bd114ff645b0ebe4
Deleted: sha256:93b49e860ee0767578592c72f8b4fb3de89831fefb2fd0fd2d3b7fd882492fb0
Deleted: sha256:0666208f764a4e2e1a7b2d5fe8993a1e1049097ab0a83fb8d6dc4aa185c31de4
Deleted: sha256:f1f76bf1c651aeb5f83266c1b08917bca0f58d0723a6630b4e1ac476d6145db8
</code></pre></div><h2 id="容器的基本命令" tabindex="-1"><a class="header-anchor" href="#容器的基本命令" aria-hidden="true">#</a> 容器的基本命令</h2><h3 id="docker-run" tabindex="-1"><a class="header-anchor" href="#docker-run" aria-hidden="true">#</a> docker run</h3><p><strong>作用</strong>：创建并启动一个容器</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> IMAGE <span class="token punctuation">[</span>COMMAND<span class="token punctuation">]</span> <span class="token punctuation">[</span>ARG<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre></div><p><strong>参数说明</strong>：<br><code>--name=&quot;container_name&quot;</code>：容器名字<br><code>-d</code>：后台运行<br><code>-it</code>：使用交互方式运行，进入容器查看内容<br><code>-p</code>：指定容器的端口<br><code>-P</code>：随机指定端口<br><code>-v</code>：将我们主机的目录与容器内的目录进行映射<br><code>-e</code>：设置环境变量<br><code>--network=&quot;host&quot;</code>：将我们容器连接到主机上<br><code>--network=&quot;bridge&quot;</code>：桥接网络</p>`,20);function b(h,u){const s=c("ExternalLinkIcon");return t(),r("div",null,[l,a("p",null,[i,e("："),a("a",m,[e("https://docs.docker.com/reference/"),d(s)])]),k])}const g=o(p,[["render",b],["__file","basic.html.vue"]]);export{g as default};
