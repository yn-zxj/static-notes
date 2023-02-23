import{_ as a,x as s,X as n,a1 as e}from"./framework-13dd6df4.js";const t={},c=e(`<h2 id="git-移出跟踪" tabindex="-1"><a class="header-anchor" href="#git-移出跟踪" aria-hidden="true">#</a> git 移出跟踪</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> 文件名
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
</code></pre></div>`,6),o=[c];function p(r,i){return s(),n("div",null,o)}const d=a(t,[["render",p],["__file","Git.html.vue"]]);export{d as default};
