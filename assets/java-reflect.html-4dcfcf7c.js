import{_ as e,j as p,o as l,c as u,g as r,w as a,a as k,f as n,i as s}from"./app-db88340f.js";const i="/assets/reflect_to_do-0b16474d.png",d={},m=k('<h2 id="反射的概述" tabindex="-1"><a class="header-anchor" href="#反射的概述" aria-hidden="true">#</a> 反射的概述</h2><p>  在 Java 中的反射机制是指在运行状态中，对于任意一个类都能够知道这个类所有的属性和方法；并且对于任意一个对象，都能够调用它的任意一个方法；这种动态获取信息以及动态调用对象方法的功能称为 Java 语言的反射机制。</p><blockquote><p>反射允许对封装类的字段、方法和构造函数的信息进行编程访问。</p><figure><img src="'+i+`" alt="反射能干的事.png" width="600" tabindex="0" loading="lazy"><figcaption>反射能干的事.png</figcaption></figure></blockquote><h2 id="反射机制的相关类在哪个包下" tabindex="-1"><a class="header-anchor" href="#反射机制的相关类在哪个包下" aria-hidden="true">#</a> 反射机制的相关类在哪个包下？</h2><p><code>java.lang.reflect.*;</code></p><hr><details class="hint-container details"><summary>演示用的 Person 类</summary><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">cn<span class="token punctuation">.</span>test<span class="token punctuation">.</span>reflect</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 无参构造函数
     * 注意：当没有有参构造函数时，会隐式声明
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Eating！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Name:&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;Age:&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></details><h2 id="获取-class-对象的三种方式" tabindex="-1"><a class="header-anchor" href="#获取-class-对象的三种方式" aria-hidden="true">#</a> 获取 Class 对象的三种方式</h2><p>① <code>Class.forName(&quot;全类名&quot;)</code><mark>源代码阶段</mark></p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;cn.test.reflect.Person&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><blockquote><p>最为常用</p></blockquote><p>② <code>类名.class</code><mark>加载阶段</mark></p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
</code></pre></div><blockquote><p>一般更多的是当做参数进行传递</p></blockquote><p>③ <code>对象.getClass()</code><mark>运行阶段</mark></p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Class</span> clazz <span class="token operator">=</span> person<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><blockquote><p>当我们已经有了这个类的对象时，才能使用</p></blockquote><h2 id="反射获取构造方法" tabindex="-1"><a class="header-anchor" href="#反射获取构造方法" aria-hidden="true">#</a> 反射获取构造方法</h2><p><strong>Class 类中用于获取构造方法的方法</strong>：</p><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td><code>Constructor&lt;?&gt;[] getConstructors()</code></td><td>返回所有==公共(public)==构造方法对象的数组</td></tr><tr><td><code>Constructor&lt;?&gt;[] getDeclaredConstructors()</code></td><td>返回所有构造方法对象的数组</td></tr><tr><td><code>Constructor&lt;T&gt; getConstructor(Class&lt;?&gt;... parameterTypes)</code></td><td>返回单个==公共(public)==构造方法对象</td></tr><tr><td><code>Constructor&lt;T&gt; getDeclaredConstructor(Class&lt;?&gt;... parameterTypes)</code></td><td>返回单个构造方法对象</td></tr></tbody></table><p><strong>创建对象的方法</strong>：</p><blockquote><p>① 通过 Class 类的 newInstance()方法<br> ② 通过 Constructor 的 newInstance(Object[] args)方法</p></blockquote><p><strong>Constructor 类中其他几个常用方法</strong>：</p><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td><code>int getModifiers()</code></td><td>返回构造函数的修饰符</td></tr><tr><td><code>int getParameterCount()</code></td><td>返回构造函数的参数数量</td></tr><tr><td><code>Parameter[] getParameters()</code></td><td>返回构造函数参数数组</td></tr><tr><td><code>Class&lt;?&gt;[] getParameterTypes()</code></td><td>返回构造函数参数类型数组(Class)</td></tr><tr><td><code>Type[] getGenericParameterTypes()</code></td><td>返回构造函数参数类型数组(Type)</td></tr></tbody></table><hr><p><strong>示例代码</strong>：</p>`,26),g=n("div",{class:"language-java","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},`/**
 * 1.先获取classes字节码文件对象
 * 使用 Class 类中的 forName() 静态方法
 */`),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---1.获取Class对象---------------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Class"),s(" clazz_1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Class"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"cn.test.reflect.Person"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"clazz_1 = "'),s(),n("span",{class:"token operator"},"+"),s(" clazz_1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 2.1 获取所有公共的构造方法"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---2.1.获取所有公共的构造方法--------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Constructor"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" constructors "),n("span",{class:"token operator"},"="),s(" clazz_1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getConstructors"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Constructor"),s(" constructor "),n("span",{class:"token operator"},":"),s(" constructors"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"constructor = "'),s(),n("span",{class:"token operator"},"+"),s(" constructor"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// 2.2 获取单个公共的构造方法(无参)"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---2.2 获取单个公共的构造方法(无参)---------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Constructor"),s(" constructor_1 "),n("span",{class:"token operator"},"="),s(" clazz_1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getConstructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"constructor_1 = "'),s(),n("span",{class:"token operator"},"+"),s(" constructor_1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 2.3 获取单个公共的构造方法(有参)"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---2.3 获取单个公共的构造方法(有参)---------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Constructor"),s(" constructor_2 "),n("span",{class:"token operator"},"="),s(" clazz_1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getConstructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"class"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"constructor_2 = "'),s(),n("span",{class:"token operator"},"+"),s(" constructor_2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 3.1 获取所有的构造方法"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---3.1 获取所有的构造方法------------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Constructor"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" declaredConstructors "),n("span",{class:"token operator"},"="),s(" clazz_1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getDeclaredConstructors"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Constructor"),s(" declaredConstructor "),n("span",{class:"token operator"},":"),s(" declaredConstructors"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"declaredConstructor = "'),s(),n("span",{class:"token operator"},"+"),s(" declaredConstructor"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// 3.2 获取所有的构造方法(无参)"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---3.2 获取所有的构造方法(无参)---------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Constructor"),s(" declaredConstructor_1 "),n("span",{class:"token operator"},"="),s(" clazz_1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getDeclaredConstructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"declaredConstructor_1 = "'),s(),n("span",{class:"token operator"},"+"),s(" declaredConstructor_1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 3.3 获取所有的构造方法(有参)"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---3.3 获取所有的构造方法(有参)---------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Constructor"),s(" declaredConstructor_2 "),n("span",{class:"token operator"},"="),s(" clazz_1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getDeclaredConstructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"class"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"class"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"declaredConstructor_2 = "'),s(),n("span",{class:"token operator"},"+"),s(" declaredConstructor_2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 4.获取权限修饰符"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---4.获取权限修饰符--------------------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"int"),s(" modifiers "),n("span",{class:"token operator"},"="),s(" declaredConstructor_2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getModifiers"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"modifiers = "'),s(),n("span",{class:"token operator"},"+"),s(" modifiers"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 5.获取参数数量"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---5.获取参数数量----------------------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"int"),s(" parameterCount "),n("span",{class:"token operator"},"="),s(" declaredConstructor_2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getParameterCount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"parameterCount = "'),s(),n("span",{class:"token operator"},"+"),s(" parameterCount"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// 6.获取参数"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---6.获取参数--------------------------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Parameter"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" parameters "),n("span",{class:"token operator"},"="),s(" declaredConstructor_2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getParameters"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Parameter"),s(" parameter "),n("span",{class:"token operator"},":"),s(" parameters"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"parameter = "'),s(),n("span",{class:"token operator"},"+"),s(" parameter"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// 7.获取参数类型"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---7.获取参数类型------------------------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Class"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" parameterTypes "),n("span",{class:"token operator"},"="),s(" declaredConstructor_2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getParameterTypes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Class"),s(" parameterType "),n("span",{class:"token operator"},":"),s(" parameterTypes"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"parameterType = "'),s(),n("span",{class:"token operator"},"+"),s(" parameterType"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token class-name"},"Type"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" genericParameterTypes "),n("span",{class:"token operator"},"="),s(" declaredConstructor_2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getGenericParameterTypes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Type"),s(" genericParameterType "),n("span",{class:"token operator"},":"),s(" genericParameterTypes"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"genericParameterType = "'),s(),n("span",{class:"token operator"},"+"),s(" genericParameterType"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// 8.1 使用 Constructor 的 newInstance(Object ... initargs) 方法创建对象"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---8.1 使用 Constructor 的 newInstance(Object ... initargs) 方法创建对象----"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Person"),s(" person_constructor "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Person"),n("span",{class:"token punctuation"},")"),s(" declaredConstructor_1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"newInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
person_constructor`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"eat"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 8.2 使用 Class 类的 newInstance() 方法"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---8.2 使用 Class 类的 newInstance() 方法--------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Person"),s(" person_class "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Person"),n("span",{class:"token punctuation"},")"),s(" clazz_1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"newInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
person_class`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"eat"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),y=n("div",{class:"language-text","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`---1.获取Class对象---------------------------
clazz_1 = class cn.test.reflect.Person
---2.1.获取所有公共的构造方法--------------------
constructor = public cn.test.reflect.Person()
constructor = public cn.test.reflect.Person(java.lang.String)
---2.2 获取单个公共的构造方法(无参)---------------
constructor_1 = public cn.test.reflect.Person()
---2.3 获取单个公共的构造方法(有参)---------------
constructor_2 = public cn.test.reflect.Person(java.lang.String)
---3.1 获取所有的构造方法------------------------
declaredConstructor = public cn.test.reflect.Person()
declaredConstructor = private cn.test.reflect.Person(java.lang.String,int)
declaredConstructor = protected cn.test.reflect.Person(int)
declaredConstructor = public cn.test.reflect.Person(java.lang.String)
---3.2 获取所有的构造方法(无参)---------------------
declaredConstructor_1 = public cn.test.reflect.Person()
---3.3 获取所有的构造方法(有参)---------------------
declaredConstructor_2 = private cn.test.reflect.Person(java.lang.String,int)
---4.获取权限修饰符--------------------------------
modifiers = 2
---5.获取参数数量----------------------------------
parameterCount = 2
---6.获取参数--------------------------------------
parameter = java.lang.String arg0
parameter = int arg1
---7.获取参数类型------------------------------------
parameterType = class java.lang.String
parameterType = int
genericParameterType = class java.lang.String
genericParameterType = int
---8.1 使用 Constructor 的 newInstance(Object ... initargs) 方法创建对象----
Eating！
---8.2 使用 Class 类的 newInstance() 方法--------------
Eating！
`)])],-1),f=n("h2",{id:"反射获取成员变量",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#反射获取成员变量","aria-hidden":"true"},"#"),s(" 反射获取成员变量")],-1),C=n("h2",{id:"反射获取成员方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#反射获取成员方法","aria-hidden":"true"},"#"),s(" 反射获取成员方法")],-1);function h(_,w){const c=p("CodeTabs");return l(),u("div",null,[m,r(c,{id:"175",data:[{id:"App.java"},{id:"输出"}]},{title0:a(({value:t,isActive:o})=>[s("App.java")]),title1:a(({value:t,isActive:o})=>[s("输出")]),tab0:a(({value:t,isActive:o})=>[g]),tab1:a(({value:t,isActive:o})=>[y]),_:1},8,["data"]),f,C])}const b=e(d,[["render",h],["__file","java-reflect.html.vue"]]);export{b as default};
