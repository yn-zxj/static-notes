import{_ as a,H as n,Y as s,a2 as t}from"./framework-96bec801.js";const e={},o=t(`<h2 id="git-基本配置" tabindex="-1"><a class="header-anchor" href="#git-基本配置" aria-hidden="true">#</a> git 基本配置</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 生成密钥对</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;youremail@example.com&quot;</span>

<span class="token comment"># 秘钥查看</span>
<span class="token function">cat</span> ~/.ssh/id_rsa.pub

<span class="token comment"># 查看配置信息</span>
<span class="token function">git</span> config <span class="token parameter variable">--list</span>

<span class="token comment"># 全局配置</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;你的名字&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;你的邮箱&quot;</span>

<span class="token comment"># 局部配置</span>
<span class="token function">git</span> config <span class="token parameter variable">--local</span> user.name <span class="token string">&quot;你的名字&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--local</span> user.email <span class="token string">&quot;你的邮箱&quot;</span>
</code></pre></div><h2 id="git-创建版本库" tabindex="-1"><a class="header-anchor" href="#git-创建版本库" aria-hidden="true">#</a> git 创建版本库</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init <span class="token comment"># 将本地文件夹变为一个git仓库</span>
<span class="token function">git</span> clone <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span> <span class="token comment"># 仓库克隆</span>
</code></pre></div><h2 id="git-修改与提交" tabindex="-1"><a class="header-anchor" href="#git-修改与提交" aria-hidden="true">#</a> git 修改与提交</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span> <span class="token comment"># 将单个文件从工作区添加到暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> <span class="token comment"># 将所有文件添加到暂存区</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;messenge&quot;</span> <span class="token comment"># 将暂存区文件提交到本地仓库</span>
<span class="token function">git</span> status <span class="token comment"># 查看工作区状态，显示有变更的文件</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token comment"># 比较文件的不同，即暂存区和工作区的差异</span>
</code></pre></div><h2 id="git-远程操作" tabindex="-1"><a class="header-anchor" href="#git-远程操作" aria-hidden="true">#</a> git 远程操作</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin master <span class="token comment"># 将本地的master分支推送到远程对应的分支</span>
<span class="token function">git</span> pull  <span class="token comment"># 下载远程代码并合并</span>
<span class="token function">git</span> fetch   <span class="token comment"># 从远程获取代码库，但不进行合并操作</span>

<span class="token function">git</span> remote <span class="token function">add</span> origin <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span> <span class="token comment"># 将远程仓库与本地仓库关联起来</span>
<span class="token function">git</span> remote <span class="token parameter variable">-v</span> <span class="token comment"># 查看远程库信息</span>
</code></pre></div><h2 id="git-分支管理" tabindex="-1"><a class="header-anchor" href="#git-分支管理" aria-hidden="true">#</a> git 分支管理</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span> <span class="token comment"># 创建分支</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span> <span class="token comment"># 切换分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span> <span class="token comment"># 创建并切换到新分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span> <span class="token comment"># 查看所有分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span> <span class="token comment"># 删除分支</span>
<span class="token function">git</span> merge <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span> <span class="token comment"># 合并某个分支到当前分支</span>
</code></pre></div><h2 id="git-移出跟踪" tabindex="-1"><a class="header-anchor" href="#git-移出跟踪" aria-hidden="true">#</a> git 移出跟踪</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> 文件名
</code></pre></div><h2 id="git-撤销提交-回滚版本" tabindex="-1"><a class="header-anchor" href="#git-撤销提交-回滚版本" aria-hidden="true">#</a> git 撤销提交/回滚版本</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD^ <span class="token comment"># 撤销上一次</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> <span class="token comment"># 强制推送到远程</span>

<span class="token comment"># 撤销某次提交,产生新的提交,代码向前</span>
<span class="token function">git</span> revert HEAD <span class="token comment"># 撤销最近一次</span>
<span class="token function">git</span> revert HEAD~1 <span class="token comment"># 撤销上上次,从0开始</span>
<span class="token function">git</span> revert 0ffaacc <span class="token comment"># 撤销0ffaacc这次提交</span>
</code></pre></div><h2 id="git-文件误删本地找回" tabindex="-1"><a class="header-anchor" href="#git-文件误删本地找回" aria-hidden="true">#</a> git 文件误删本地找回</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reflog <span class="token comment"># 找到要回退版本的commit id</span>

<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token operator">&lt;</span>commit id<span class="token operator">&gt;</span> <span class="token comment"># 版本回退</span>
<span class="token comment"># 或者</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>commit id<span class="token operator">&gt;</span> <span class="token comment"># 版本回退</span>
</code></pre></div>`,16),p=[o];function c(l,i){return n(),s("div",null,p)}const k=a(e,[["render",c],["__file","Git.html.vue"]]);export{k as default};
