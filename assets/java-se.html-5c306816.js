import{_ as o,x as l,X as i,Y as u,Z as a,$ as n,a0 as s,a1 as r,z as k}from"./framework-13dd6df4.js";const d="/assets/t-01-a2fd61f9.png",v={},m=n("h2",{id:"_1-如下代码的运行结果",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-如下代码的运行结果","aria-hidden":"true"},"#"),s(" 1.如下代码的运行结果:")],-1),b=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Test"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" args"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        i `),n("span",{class:"token operator"},"="),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" j "),n("span",{class:"token operator"},"="),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" k "),n("span",{class:"token operator"},"="),s(" i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token operator"},"++"),s("i "),n("span",{class:"token operator"},"*"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"i="'),s(),n("span",{class:"token operator"},"+"),s(" i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"j="'),s(),n("span",{class:"token operator"},"+"),s(" j"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"k="'),s(),n("span",{class:"token operator"},"+"),s(" k"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`i=4
j=1
k=11
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=r('<div class="hint-container tip"><p class="hint-container-title">解析</p><p><strong>行 4</strong>：先将 1 压入操作数栈，然后局部变量表中的 i 自增变为 2，最后操作树栈中的 1 赋值给 i，2 被覆盖；</p><figure><img src="'+d+`" alt="处理过程.png" tabindex="0" loading="lazy"><figcaption>处理过程.png</figcaption></figure><p><strong>总结</strong>：<br> ① 先赋值再自增、自减(i = i++ 、i = i--)，先自增、自减再赋值(i = ++i 、i = --i)<br> ② = 右边的从左到右加载值依次压入操作数栈<br> ③ 实际先算哪个，看运算符优先级<br> ④ 自增、自减操作都是<mark>直接修改变量的值，不经过操作数栈</mark><br> ⑤ 最后的赋值之前，临时结果也是存储在操作数栈中</p></div><h2 id="_2-单例设计模式" tabindex="-1"><a class="header-anchor" href="#_2-单例设计模式" aria-hidden="true">#</a> 2.单例设计模式</h2><div class="hint-container tip"><p class="hint-container-title">什么是 Singleton ?</p><p><strong>Singleton</strong> : 在 Java 中即指单例设计模式，它是软件开发中最常用的设计模式之一。单例设计模式，即某个类在整个系统中<mark>只能有一个实例对象</mark>可被获取和使用的代码模式。例如：代表 JVM 运行环境的 Runtime 类</p><p><strong>要点</strong>：</p><p>① 某个类只能有一个实例【构造器私有化】<br> ② 它必须自行创建这个实例【含有一个该类的静态变量来保存这个唯一的实例)】<br> ③ 它必须自行向整个系统提供这个实例【对外提供获取该实例对象的方式：(1)直接暴露 (2)用静态变量的 get 方法获取】</p></div><h3 id="饿汉式" tabindex="-1"><a class="header-anchor" href="#饿汉式" aria-hidden="true">#</a> 饿汉式</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 直接实例化(简洁直观)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Singleton</span> <span class="token constant">INSTANCE</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 枚举式(最简洁)</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
    <span class="token constant">INSTANCE</span>
<span class="token punctuation">}</span>

<span class="token comment">// 静态代码块(适合复杂实例化)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Singleton</span> <span class="token constant">INSTANCE</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token constant">INSTANCE</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用</span>
<span class="token class-name">Singleton</span> s <span class="token operator">=</span> <span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token constant">INSTANCE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在类初始化时直接创建实例对象，不管是否需要这个对象，不存在线程安全问题</p></blockquote><h3 id="懒汉式" tabindex="-1"><a class="header-anchor" href="#懒汉式" aria-hidden="true">#</a> 懒汉式</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 静态内部类形式(适用于多线程)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Inner</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Singleton</span> <span class="token constant">INSTANCE</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Inner</span><span class="token punctuation">.</span><span class="token constant">INSTANCE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用</span>
<span class="token class-name">Singleton</span> s <span class="token operator">=</span> <span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>延迟创建对象<br> 线程不安全(适用于单线程)、线程安全(适用于多线程)</p></blockquote>`,9);function w(y,S){const e=k("CodeTabs");return l(),i("div",null,[m,u(e,{id:"3",data:[{title:"代码"},{title:"输出结果"}]},{tab0:a(({title:t,value:c,isActive:p})=>[b]),tab1:a(({title:t,value:c,isActive:p})=>[g]),_:1}),h])}const f=o(v,[["render",w],["__file","java-se.html.vue"]]);export{f as default};
