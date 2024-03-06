import{_ as e,l as o,o as p,c,g as s,k as n,i as l,a}from"./app-d03vcbw6.js";const r={},i=a(`<h2 id="帮助命令" tabindex="-1"><a class="header-anchor" href="#帮助命令" aria-hidden="true">#</a> 帮助命令</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>systemctl start <span class="token function">docker</span> <span class="token comment"># 启动docker</span>
systemctl stop <span class="token function">docker</span>  <span class="token comment"># 关闭docker</span>
systemctl restart <span class="token function">docker</span> <span class="token comment"># 重启docker</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>  <span class="token comment"># docker设置随服务启动而自启动</span>
systemctl status <span class="token function">docker</span>  <span class="token comment"># 查看docker 运行状态</span>
</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> version  <span class="token comment"># 显示docker版本信息</span>
<span class="token function">docker</span> info     <span class="token comment"># 显示docker系统信息，包括镜像和容器数</span>

<span class="token function">docker</span> <span class="token parameter variable">--help</span>          <span class="token comment"># 显示帮助信息</span>
<span class="token function">docker</span> COMMAND <span class="token parameter variable">--help</span>  <span class="token comment"># 显示命令的帮助信息</span>

<span class="token comment"># 例如：</span>
<span class="token function">docker</span> images <span class="token parameter variable">--help</span>
<span class="token function">docker</span> container <span class="token parameter variable">--help</span>
</code></pre></div>`,3),u=s("strong",null,"帮助命令地址",-1),k={href:"https://docs.docker.com/reference/",target:"_blank",rel:"noopener noreferrer"},d=a(`<h2 id="镜像的基本命令" tabindex="-1"><a class="header-anchor" href="#镜像的基本命令" aria-hidden="true">#</a> 镜像的基本命令</h2><h3 id="docker-images" tabindex="-1"><a class="header-anchor" href="#docker-images" aria-hidden="true">#</a> docker images</h3><p><strong>作用</strong>：显示本地主机上的镜像</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker images [OPTIONS] [REPOSITORY[:TAG]]</span>

ubuntu@root:~$ <span class="token function">docker</span> images
REPOSITORY                 TAG       IMAGE ID       CREATED        SIZE
neosmemo/memos             <span class="token number">0.18</span>.2    80a11a64ffad   <span class="token number">8</span> days ago     <span class="token number">61</span>.1MB
jc21/nginx-proxy-manager   <span class="token number">2.10</span>.4    27b3e4961f08   <span class="token number">2</span> weeks ago    843MB
shuiche/mind-map           latest    4b4390822c54   <span class="token number">2</span> months ago   <span class="token number">25</span>.5MB
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
</code></pre></div><p><strong>参数说明</strong>：<br><code>--name=&quot;container_name&quot;</code>：容器名字<br><code>-d</code>：后台运行<br><code>-it</code>：使用交互方式运行，进入容器查看内容<br><code>-p</code>：指定容器的端口<br><code>-P</code>：随机指定端口<br><code>-v</code>：将我们主机的目录与容器内的目录进行映射<br><code>-e</code>：设置环境变量<br><code>--network=&quot;host&quot;</code>：将我们容器连接到主机上<br><code>--network=&quot;bridge&quot;</code>：桥接网络</p><h3 id="docker-ps" tabindex="-1"><a class="header-anchor" href="#docker-ps" aria-hidden="true">#</a> docker ps</h3><p><strong>作用</strong>：查看当前所有运行的容器</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>
</code></pre></div><p><strong>参数说明</strong>：<br><code>-a</code>：显示所有的容器，包括未运行的<br><code>-l</code>：显示最近创建的容器<br><code>-n</code>：显示最近 n 个创建的容器<br><code>--no-trunc</code>：不截断输出<br><code>-q</code>：静默模式，只显示容器编号</p><div class="hint-container tip"><p class="hint-container-title">docker ps 发现容器停止了</p><p>常见的坑：docker 容器后台运行，必须有一个前台进程，否则会自动停止</p></div><h3 id="docker-rm" tabindex="-1"><a class="header-anchor" href="#docker-rm" aria-hidden="true">#</a> docker rm</h3><p><strong>作用</strong>：删除一个或多少容器</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER <span class="token punctuation">[</span>CONTAINER<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-aq</span><span class="token variable">)</span></span>     <span class="token comment"># 删除所有容器</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span> <span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">docker</span> <span class="token function">rm</span>  <span class="token comment"># 删除所有容器</span>
</code></pre></div><p><strong>参数说明</strong>：<br><code>-f, --force</code>：强制删除正在运行的容器（使用 SIGKILL）<br><code>-l, --link</code>：删除指定的链接<br><code>-v, --volumes</code>：删除与容器关联的匿名卷</p><h3 id="docker-start" tabindex="-1"><a class="header-anchor" href="#docker-start" aria-hidden="true">#</a> docker start</h3><p><strong>作用</strong>：启动容器</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> start <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER <span class="token punctuation">[</span>CONTAINER<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre></div><h3 id="docker-restart" tabindex="-1"><a class="header-anchor" href="#docker-restart" aria-hidden="true">#</a> docker restart</h3><p><strong>作用</strong>：重启容器</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> restart <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER <span class="token punctuation">[</span>CONTAINER<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre></div><h3 id="docker-stop" tabindex="-1"><a class="header-anchor" href="#docker-stop" aria-hidden="true">#</a> docker stop</h3><p><strong>作用</strong>：停止容器</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stop <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER <span class="token punctuation">[</span>CONTAINER<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">退出容器</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">exit</span>         <span class="token comment"># 直接退出容器</span>
Ctr + P + Q  <span class="token comment"># 容器不停止退出</span>
</code></pre></div></div><h3 id="docker-kill" tabindex="-1"><a class="header-anchor" href="#docker-kill" aria-hidden="true">#</a> docker kill</h3><p><strong>作用</strong>：强制停止容器</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">kill</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER <span class="token punctuation">[</span>CONTAINER<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre></div><h2 id="其它命令" tabindex="-1"><a class="header-anchor" href="#其它命令" aria-hidden="true">#</a> 其它命令</h2><h3 id="docker-logs" tabindex="-1"><a class="header-anchor" href="#docker-logs" aria-hidden="true">#</a> docker logs</h3><p><strong>作用</strong>：查看容器日志</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> logs <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER

<span class="token comment"># 查看容器自2024-01-01之后的最新10条日志</span>
<span class="token function">docker</span> logs <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token string">&quot;2024-01-01&quot;</span> <span class="token parameter variable">--tail</span><span class="token operator">=</span><span class="token number">10</span> nginx
</code></pre></div><p><strong>参数说明</strong>：<br><code>--details</code>：显示额外的日志详细信息<br><code>-f, --follow</code>：跟踪日志输出<br><code>--since string</code>：显示某个开始时间的所有日志(e.g. 2013-01-02T13:23:37Z or 42m for 42 minutes)<br><code>-n, --tail string</code>：仅列出最新 N 条容器日志<br><code>-t, --timestamps</code>：显示时间戳<br><code>--until string</code>：显示时间戳或相对时间戳之前的日志</p><h3 id="docker-top" tabindex="-1"><a class="header-anchor" href="#docker-top" aria-hidden="true">#</a> docker top</h3><p><strong>作用</strong>：查看容器中运行的进程</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">top</span> CONTAINER <span class="token punctuation">[</span>ps OPTIONS<span class="token punctuation">]</span>

ubuntu@root:~$ <span class="token function">docker</span> <span class="token function">top</span> a89556ea948b
<span class="token environment constant">UID</span>                 PID                 <span class="token environment constant">PPID</span>                C                   STIME               TTY                 TIME                CMD
root                <span class="token number">426706</span>              <span class="token number">426685</span>              <span class="token number">0</span>                   Jan19               ?                   00:00:41            ./memos
</code></pre></div><h3 id="docker-inspect" tabindex="-1"><a class="header-anchor" href="#docker-inspect" aria-hidden="true">#</a> docker inspect</h3><p><strong>作用</strong>：查看容器/镜像的元数据</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> inspect <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> NAME<span class="token operator">|</span>ID <span class="token punctuation">[</span>NAME<span class="token operator">|</span>ID<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre></div><p><strong>参数说明</strong>：<br><code>-f, --format string</code>：格式化输出（eg: json）<br><code>-s, --size</code>：如果类型为容器，则显示总文件大小<br><code>--type string</code>：返回指定类型的 JSON</p><details class="hint-container details"><summary>docker inspect 示例</summary><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ubuntu@root:~$ <span class="token function">docker</span> inspect 80a11a64ffad
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;Id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;sha256:80a11a64ffadd5f08423a018bdbae1379554c91c31c918bc97a0e00e249c6917&quot;</span>,
        <span class="token string">&quot;RepoTags&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;neosmemo/memos:0.18.2&quot;</span>
        <span class="token punctuation">]</span>,
        <span class="token string">&quot;RepoDigests&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;neosmemo/memos@sha256:84fe8465d1ec9ab729a37a7c6b93fd8efa1f1d190ed08dcc4a0b53f43530d64e&quot;</span>
        <span class="token punctuation">]</span>,
        <span class="token string">&quot;Parent&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;Comment&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;buildkit.dockerfile.v0&quot;</span>,
        <span class="token string">&quot;Created&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2024-01-19T10:11:06.768332925Z&quot;</span>,
        <span class="token string">&quot;Container&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;ContainerConfig&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Hostname&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;Domainname&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;User&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;AttachStdin&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;AttachStdout&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;AttachStderr&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Tty&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;OpenStdin&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;StdinOnce&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Env&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;Cmd&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;Image&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;Volumes&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;WorkingDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;Entrypoint&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;OnBuild&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;Labels&quot;</span><span class="token builtin class-name">:</span> null
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;DockerVersion&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;Author&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;Config&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Hostname&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;Domainname&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;User&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;AttachStdin&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;AttachStdout&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;AttachStderr&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;ExposedPorts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;5230/tcp&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;Tty&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;OpenStdin&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;StdinOnce&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Env&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin&quot;</span>,
                <span class="token string">&quot;TZ=UTC&quot;</span>,
                <span class="token string">&quot;MEMOS_MODE=prod&quot;</span>,
                <span class="token string">&quot;MEMOS_PORT=5230&quot;</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;Cmd&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;Image&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;Volumes&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;/var/opt/memos&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;WorkingDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/usr/local/memos&quot;</span>,
            <span class="token string">&quot;Entrypoint&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;./memos&quot;</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;OnBuild&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;Labels&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;org.opencontainers.image.created&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2024-01-19T10:08:39.159Z&quot;</span>,
                <span class="token string">&quot;org.opencontainers.image.description&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;An open source, lightweight note-taking service. Easily capture and share your great thoughts.&quot;</span>,
                <span class="token string">&quot;org.opencontainers.image.licenses&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;MIT&quot;</span>,
                <span class="token string">&quot;org.opencontainers.image.revision&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ec4884ea04c866e4d74e54854b2e3d1be7f369f6&quot;</span>,
                <span class="token string">&quot;org.opencontainers.image.source&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;https://github.com/usememos/memos&quot;</span>,
                <span class="token string">&quot;org.opencontainers.image.title&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;memos&quot;</span>,
                <span class="token string">&quot;org.opencontainers.image.url&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;https://github.com/usememos/memos&quot;</span>,
                <span class="token string">&quot;org.opencontainers.image.version&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;0.18.2&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;Architecture&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;amd64&quot;</span>,
        <span class="token string">&quot;Os&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;linux&quot;</span>,
        <span class="token string">&quot;Size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">61059980</span>,
        <span class="token string">&quot;VirtualSize&quot;</span><span class="token builtin class-name">:</span> <span class="token number">61059980</span>,
        <span class="token string">&quot;GraphDriver&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Data&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;LowerDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/d7e85c6e128f8b7c78ddc67f519d9c795d79a469ec5864ece25f26205f5e1e87/diff:/var/lib/docker/overlay2/6bf575f8568767e585ea5ed0a1d8300c59b202d6c251c596bb7d110f8cd4bc32/diff:/var/lib/docker/overlay2/d024069c2b185e68bfcb580f88e8f7e7112273e1c181ee4e7272eab755ef3403/diff:/var/lib/docker/overlay2/d2a6052a734eec404473d62cb3ec056b9d1d12c8faa45961f19f91b2507198a7/diff:/var/lib/docker/overlay2/2c88425e76d360adc6e614fe2e37f5b82f87527319b3308f9fbc879c901aebb5/diff&quot;</span>,
                <span class="token string">&quot;MergedDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/6c4e8fb99a5112068b3fbddd933fb5c849eaed7b66ba5f6380a94915e089021d/merged&quot;</span>,
                <span class="token string">&quot;UpperDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/6c4e8fb99a5112068b3fbddd933fb5c849eaed7b66ba5f6380a94915e089021d/diff&quot;</span>,
                <span class="token string">&quot;WorkDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/6c4e8fb99a5112068b3fbddd933fb5c849eaed7b66ba5f6380a94915e089021d/work&quot;</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;overlay2&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;RootFS&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;layers&quot;</span>,
            <span class="token string">&quot;Layers&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;sha256:5af4f8f59b764c64c6def53f52ada809fe38d528441d08d01c206dfb3fc3b691&quot;</span>,
                <span class="token string">&quot;sha256:dcff3711ebbd22ab6a88e76f7c645866bf96ff9e62861f8c5b04d7773bee3093&quot;</span>,
                <span class="token string">&quot;sha256:ca3b593e3da9624bc9dc4896f98a8e6f74540522b9cf8bb51877686d9bdaaf70&quot;</span>,
                <span class="token string">&quot;sha256:8c755c1a43cdcfe9df8652adfe9d7a3fd970c4265d10b3c65d8c798b8c854407&quot;</span>,
                <span class="token string">&quot;sha256:c47f2324c205a5a03b3e6a99eab4d8c290efd78dc0f4a64f9c8601f31b965bef&quot;</span>,
                <span class="token string">&quot;sha256:b78430cb14fc071ccd7760ce2377ccae9e46c93cb841cbb5ded9881dfc79a02a&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;Metadata&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;LastTagTime&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;0001-01-01T00:00:00Z&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div></details><h3 id="docker-attach" tabindex="-1"><a class="header-anchor" href="#docker-attach" aria-hidden="true">#</a> docker attach</h3><p><strong>作用</strong>：连接到正在运行中的容器</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> attach <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER
</code></pre></div><h3 id="docker-exec" tabindex="-1"><a class="header-anchor" href="#docker-exec" aria-hidden="true">#</a> docker exec</h3><p><strong>作用</strong>：在运行中的容器中执行命令</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER COMMAND <span class="token punctuation">[</span>ARG<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre></div><details class="hint-container details"><summary>示例</summary><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ubuntu@root:~$ <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 185caa2b4f47 /bin/bash
 _   _       _            ____                      __  __
<span class="token operator">|</span> <span class="token punctuation">\\</span> <span class="token operator">|</span> <span class="token operator">|</span> __ _<span class="token punctuation">(</span>_<span class="token punctuation">)</span>_ __ __  _<span class="token operator">|</span>  _ <span class="token punctuation">\\</span> _ __ _____  ___   _<span class="token operator">|</span>  <span class="token punctuation">\\</span>/  <span class="token operator">|</span> __ _ _ __   __ _  __ _  ___ _ __
<span class="token operator">|</span>  <span class="token punctuation">\\</span><span class="token operator">|</span> <span class="token operator">|</span>/ _<span class="token variable"><span class="token variable">\`</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token string">&#39;_ \\\\ \\/ / |_) | &#39;</span>__/ _ <span class="token punctuation">\\</span> <span class="token punctuation">\\</span>/ / <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span><span class="token punctuation">\\</span>/<span class="token operator">|</span> <span class="token operator">|</span>/ _<span class="token variable">\`</span></span> <span class="token operator">|</span> <span class="token string">&#39;_ \\ / _\` |/ _\` |/ _ \\ &#39;</span>__<span class="token operator">|</span>
<span class="token operator">|</span> <span class="token operator">|</span><span class="token punctuation">\\</span>  <span class="token operator">|</span> <span class="token punctuation">(</span>_<span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span><span class="token operator">&gt;</span>  <span class="token operator">&lt;</span><span class="token operator">|</span>  __/<span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token punctuation">(</span>_<span class="token punctuation">)</span> <span class="token operator">&gt;</span>  <span class="token operator">&lt;</span><span class="token operator">|</span> <span class="token operator">|</span>_<span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span>  <span class="token operator">|</span> <span class="token operator">|</span> <span class="token punctuation">(</span>_<span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token punctuation">(</span>_<span class="token operator">|</span> <span class="token operator">|</span> <span class="token punctuation">(</span>_<span class="token operator">|</span> <span class="token operator">|</span>  __/ <span class="token operator">|</span>
<span class="token operator">|</span>_<span class="token operator">|</span> <span class="token punctuation">\\</span>_<span class="token operator">|</span><span class="token punctuation">\\</span>__, <span class="token operator">|</span>_<span class="token operator">|</span>_<span class="token operator">|</span> <span class="token operator">|</span>_/_/<span class="token punctuation">\\</span>_<span class="token punctuation">\\</span>_<span class="token operator">|</span>   <span class="token operator">|</span>_<span class="token operator">|</span>  <span class="token punctuation">\\</span>___/_/<span class="token punctuation">\\</span>_<span class="token punctuation">\\</span><span class="token punctuation">\\</span>__, <span class="token operator">|</span>_<span class="token operator">|</span>  <span class="token operator">|</span>_<span class="token operator">|</span><span class="token punctuation">\\</span>__,_<span class="token operator">|</span>_<span class="token operator">|</span> <span class="token operator">|</span>_<span class="token operator">|</span><span class="token punctuation">\\</span>__,_<span class="token operator">|</span><span class="token punctuation">\\</span>__, <span class="token operator">|</span><span class="token punctuation">\\</span>___<span class="token operator">|</span>_<span class="token operator">|</span>
       <span class="token operator">|</span>___/                                  <span class="token operator">|</span>___/                          <span class="token operator">|</span>___/
Version <span class="token number">2.10</span>.4 <span class="token punctuation">(</span>1c498f8<span class="token punctuation">)</span> <span class="token number">2024</span>-01-08 00:21:20 UTC, OpenResty <span class="token number">1.21</span>.4.2, debian <span class="token number">10</span> <span class="token punctuation">(</span>buster<span class="token punctuation">)</span>, Certbot certbot <span class="token number">2.5</span>.0
Base: debian:buster-slim, linux/amd64
Certbot: jc21/nginx-full:latest, linux/amd64
Node: jc21/nginx-full:certbot, linux/amd64

<span class="token punctuation">[</span>root@docker-185caa2b4f47:/app<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre></div></details><div class="hint-container tip"><p class="hint-container-title">docker attach 和 docker exec 的区别</p><p><code>docker exec</code>进入容器后开启一个新的终端，可以在里面操作(常用)<br><code>docker attach</code>进入容器正在执行的终端，不会启动新的进程(只是附着到容器上)</p><p>  如果 Docker 容器是使用<code>/bin/bash</code>命令启动的，则可以使用 attach 来访问它，如果不是，则需要在容器内创建一个 bash 实例。</p></div><h3 id="docker-cp" tabindex="-1"><a class="header-anchor" href="#docker-cp" aria-hidden="true">#</a> docker cp</h3><p><strong>作用</strong>：命令用于在容器和主机之间复制文件</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 复制文件到主机(docker cp container_id:src_path dest_path)</span>
<span class="token function">docker</span> <span class="token function">cp</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER:SRC_PATH DEST_PATH<span class="token operator">|</span>-

<span class="token comment"># 复制文件到容器(docker cp src_path container_id:dest_path)</span>
<span class="token function">docker</span> <span class="token function">cp</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> SRC_PATH<span class="token operator">|</span>- CONTAINER:DEST_PATH
</code></pre></div><details class="hint-container details"><summary>docker cp 示例</summary><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 主机复制文件进容器</span>
ubuntu@root:~$ <span class="token builtin class-name">pwd</span> <span class="token comment"># 主机路径</span>
/home/ubuntu
ubuntu@root:~$ <span class="token function">ls</span> <span class="token comment"># 当前路径下存在的测试文件</span>
cp_test.txt
ubuntu@root:~$ <span class="token function">docker</span> <span class="token function">ps</span> <span class="token comment"># 正在运行的容器</span>
CONTAINER ID   IMAGE                             COMMAND                  CREATED       STATUS                 PORTS                                                                                                               NAMES
e7c34de37a97   ghcr.io/wg-easy/wg-easy:latest    <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   <span class="token number">5</span> days ago    Up <span class="token number">5</span> days              <span class="token number">0.0</span>.0.0:51820-<span class="token operator">&gt;</span><span class="token number">51820</span>/udp, :::51820-<span class="token operator">&gt;</span><span class="token number">51820</span>/udp, <span class="token number">0.0</span>.0.0:51821-<span class="token operator">&gt;</span><span class="token number">51821</span>/tcp, :::51821-<span class="token operator">&gt;</span><span class="token number">51821</span>/tcp                        WireGuard

ubuntu@root:~$ <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> e7c34de37a97 /bin/bash
3f765b569163:/app<span class="token comment"># pwd # 容器内路径</span>
/app
3f765b569163:/app<span class="token comment"># ls # 容器内路径下的文件</span>
config.js           lib                 package-lock.json   package.json        server.js           services            tailwind.config.js  www
3f765b569163:/app<span class="token comment"># exit # 退出容器</span>
<span class="token builtin class-name">exit</span>
ubuntu@root:~$ <span class="token function">docker</span> <span class="token function">cp</span> cp_test.txt e7c34de37a97:/app <span class="token comment"># 将主机上的测试文件复制到容器内的/app路径下</span>
Successfully copied <span class="token number">1</span>.54kB to e7c34de37a97:/app

ubuntu@root:~$ <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> e7c34de37a97 /bin/bash <span class="token comment"># 进入容器查看(文件成功复制)</span>
3f765b569163:/app<span class="token comment"># ls</span>
config.js           cp_test.txt         lib                 package-lock.json   package.json        server.js           services            tailwind.config.js  www
3f765b569163:/app<span class="token comment">#</span>

<span class="token comment"># 容器文件复制进主机</span>
ubuntu@root:~$ <span class="token function">docker</span> <span class="token function">cp</span> e7c34de37a97:/app/server.js /home/ubuntu <span class="token comment"># 将容器内存在server.js复制到主机</span>
Successfully copied <span class="token number">2</span>.05kB to /home/ubuntu
ubuntu@root:~$ <span class="token function">ls</span> <span class="token comment"># 主机路径下文件查看(成功复制)</span>
cp_test.txt  server.js
</code></pre></div></details>`,67);function b(m,g){const t=o("ExternalLinkIcon");return p(),c("div",null,[i,s("p",null,[u,n("："),s("a",k,[n("https://docs.docker.com/reference/"),l(t)])]),d])}const f=e(r,[["render",b],["__file","basic.html.vue"]]);export{f as default};
