import{_ as a,o as n,c as s,a as e}from"./app-2b18ce90.js";const t={},p=e(`<h2 id="git-基本配置" tabindex="-1"><a class="header-anchor" href="#git-基本配置" aria-hidden="true">#</a> git 基本配置</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 生成密钥对</span>
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
</code></pre></div><h2 id="批量删除分支" tabindex="-1"><a class="header-anchor" href="#批量删除分支" aria-hidden="true">#</a> 批量删除分支</h2><p><strong>示例</strong>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ① 查找需要删除的分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-r</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;master|test|release&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/origin\\///g&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print &quot;:&quot;$1}&#39;</span>

<span class="token comment"># ② 删除远程分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-r</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;master|test|release&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/origin\\///g&#39;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-I</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token function">git</span> push origin :<span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment"># ③ 删除本地分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;master|test|release&#39;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">git</span> branch <span class="token parameter variable">-D</span>
</code></pre></div><hr><p><strong>命令浅析</strong>：</p><p><code>git branch -r</code>：查看远程分支</p><p><code>git branch -a</code>：查看所有分支(包括本地、远程)</p><p><code>git -v -E &#39;master|test|release&#39;</code>：排除 master、test、release 分支（<mark>适自己情况而定</mark>）<br>  <code>-v</code>：排除<br>  <code>-E</code>：使用正则表达式</p><p><code>sed &#39;s/origin\\///g&#39;</code>：分支开头过滤得到实际分支名，如：<code>origin/A -&gt; A</code></p><p><code>awk &#39;{print &quot;:&quot;$1}&#39;</code>：打印对应的分支名，如：<code>:A</code></p><p><code>xargs -I {} git push origin :{}</code>：将 A 这个分支作为参数传给下一个命令，<code>-l {}</code>使用占位符来构造后面的命令，也就是接收上面命令的执行结果 A，然后执行<code>git push origin :A</code></p><p><code>xargs git branch -D</code>：强制删除本地分支，如：<code>git branch -D A</code></p><blockquote><p>核心命令<code>|</code>和<code>xargs</code>：</p><p><code>|</code>：把前一个命令的输出作为后一个命令的输入</p><p><code>xargs</code>：把输出作为后一个命令的参数</p></blockquote><h2 id="批量删除标签" tabindex="-1"><a class="header-anchor" href="#批量删除标签" aria-hidden="true">#</a> 批量删除标签</h2><p><strong>示例</strong>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ① 查找标签</span>
<span class="token function">git</span> tag <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;/^2/{print}&#39;</span>

<span class="token comment"># ② 删除标签</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> tag <span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> tag <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;/^2/{print}&#39;</span><span class="token variable">)</span></span>

<span class="token comment"># ③ 删除本地标签</span>
<span class="token function">git</span> tag <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">git</span> tag <span class="token parameter variable">-d</span>
<span class="token function">git</span> fetch origin <span class="token parameter variable">--prune</span>
<span class="token function">git</span> fetch origin <span class="token parameter variable">--tags</span>
</code></pre></div><blockquote><p>步骤 ② 后远程 tag 删除了，但是本地项目的 tag 还存在，如果 push 这个 tag 到远程，那么此 tag 将永远不会被删除，是为了避免这种情况出现，需要执行步骤 ③</p></blockquote><hr><p><strong>命令浅析</strong>：</p><p><code>git tag -l</code>：列出标签</p><p><code>awk &#39;/^2/{print}&#39;</code>：打印符合条件的标签</p><p><code>git push origin --delete tag</code>：删除远程标签</p><p><code>git push origin --delete tag $(git tag -l | awk &#39;/^2/{print}&#39;)</code>：删除符合条件的远程标签</p><p><code>git tag -l | xargs git tag -d</code>：删除本地所有标签</p><p><code>git fetch origin --prune</code>：从远程拉取所有信息</p><p><code>git fetch origin --tags</code>：同步远程标签到本地</p><h2 id="取消文件跟踪" tabindex="-1"><a class="header-anchor" href="#取消文件跟踪" aria-hidden="true">#</a> 取消文件跟踪</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看文件状态</span>
<span class="token function">git</span> status

<span class="token comment"># 移除文件跟踪，但文件保留在本地</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> /java/OrderManage.java

<span class="token comment"># 移除文件跟踪，同时删除本地文件</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--f</span> /java/OrderManage.java
</code></pre></div>`,44),o=[p];function c(r,l){return n(),s("div",null,o)}const g=a(t,[["render",c],["__file","Git.html.vue"]]);export{g as default};
