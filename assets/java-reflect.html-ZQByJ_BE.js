import{_ as l,l as u,o as i,c as r,g as n,i as p,w as a,a as o,k as s}from"./app-uKx7KVXM.js";const k="/assets/reflect_to_do-iDuohHZc.png",d={},m=o('<h2 id="反射的概述" tabindex="-1"><a class="header-anchor" href="#反射的概述" aria-hidden="true">#</a> 反射的概述</h2><p>  在 Java 中的反射机制是指在运行状态中，对于任意一个类都能够知道这个类所有的属性和方法；并且对于任意一个对象，都能够调用它的任意一个方法；这种动态获取信息以及动态调用对象方法的功能称为 Java 语言的反射机制。</p><blockquote><p>反射允许对封装类的字段、方法和构造函数的信息进行编程访问。</p><figure><img src="'+k+`" alt="反射能干的事.png" width="600" tabindex="0" loading="lazy"><figcaption>反射能干的事.png</figcaption></figure></blockquote><h2 id="反射机制的相关类在哪个包下" tabindex="-1"><a class="header-anchor" href="#反射机制的相关类在哪个包下" aria-hidden="true">#</a> 反射机制的相关类在哪个包下？</h2><p><code>java.lang.reflect.*;</code></p><hr><details class="hint-container details"><summary>演示用的 Person 类</summary><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">cn<span class="token punctuation">.</span>test<span class="token punctuation">.</span>reflect</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> gender<span class="token punctuation">;</span>

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

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Eating！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> name <span class="token operator">+</span> <span class="token string">&quot; - eating!&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getGender</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> gender<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setGender</span><span class="token punctuation">(</span><span class="token class-name">String</span> gender<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Name:&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;Age:&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;Gender:&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>gender<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></details><h2 id="获取-class-对象的三种方式" tabindex="-1"><a class="header-anchor" href="#获取-class-对象的三种方式" aria-hidden="true">#</a> 获取 Class 对象的三种方式</h2><p>① <code>Class.forName(&quot;全类名&quot;)</code><mark>源代码阶段</mark></p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;cn.test.reflect.Person&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><blockquote><p>最为常用</p></blockquote><p>② <code>类名.class</code><mark>加载阶段</mark></p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
</code></pre></div><blockquote><p>一般更多的是当做参数进行传递</p></blockquote><p>③ <code>对象.getClass()</code><mark>运行阶段</mark></p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Class</span> clazz <span class="token operator">=</span> person<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><blockquote><p>当我们已经有了这个类的对象时，才能使用</p></blockquote><h2 id="反射获取构造方法-constructor" tabindex="-1"><a class="header-anchor" href="#反射获取构造方法-constructor" aria-hidden="true">#</a> 反射获取构造方法(Constructor)</h2><p><strong>Class 类中用于获取构造方法的方法</strong>：</p><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td><code>Constructor&lt;?&gt;[] getConstructors()</code></td><td>返回所有 <mark>公共(public)</mark> 构造方法对象的数组</td></tr><tr><td><code>Constructor&lt;?&gt;[] getDeclaredConstructors()</code></td><td>返回所有构造方法对象的数组</td></tr><tr><td><code>Constructor&lt;T&gt; getConstructor(Class&lt;?&gt;... parameterTypes)</code></td><td>返回单个 <mark>公共(public)</mark> 构造方法对象</td></tr><tr><td><code>Constructor&lt;T&gt; getDeclaredConstructor(Class&lt;?&gt;... parameterTypes)</code></td><td>返回单个构造方法对象</td></tr></tbody></table><p><strong>创建对象的方法</strong>：</p><blockquote><p>① 通过 Class 类的 newInstance()方法<br> ② 通过 Constructor 的 newInstance(Object[] args)方法</p></blockquote><p><strong>Constructor 类中其他几个常用方法</strong>：</p><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td><code>int getModifiers()</code></td><td>返回构造函数的修饰符 ①</td></tr><tr><td><code>int getParameterCount()</code></td><td>返回构造函数的参数数量</td></tr><tr><td><code>Parameter[] getParameters()</code></td><td>返回构造函数参数数组(在类<code>Executable</code>中)</td></tr><tr><td><code>Class&lt;?&gt;[] getParameterTypes()</code></td><td>返回构造函数参数类型数组(Class)②</td></tr><tr><td><code>Type[] getGenericParameterTypes()</code></td><td>返回构造函数参数类型数组(Type)</td></tr></tbody></table><blockquote><p>① 返回的修饰符一般配合<code>Modifier</code>类的<code>String toString(int mod)</code>使用<br> ② 结果集一般配合<code>Class</code>类的<code>String getSimpleName()</code>方法使用</p></blockquote><hr><p><strong>示例代码</strong>：</p>`,27),g={class:"hint-container details"},f=n("summary",null,"展开查看",-1),h=n("div",{class:"language-java","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},`/**
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
person_constructor`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"eat"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"张三"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 8.2 使用 Class 类的 newInstance() 方法"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---8.2 使用 Class 类的 newInstance() 方法--------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Person"),s(" person_class "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Person"),n("span",{class:"token punctuation"},")"),s(" clazz_1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"newInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
person_class`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"eat"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"李四"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),v=n("div",{class:"language-text","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`---1.获取Class对象---------------------------
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
declaredConstructor = public cn.test.reflect.Person(java.lang.String)
declaredConstructor = protected cn.test.reflect.Person(int)

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
`)])],-1),b=o('<h2 id="反射获取成员变量-field" tabindex="-1"><a class="header-anchor" href="#反射获取成员变量-field" aria-hidden="true">#</a> 反射获取成员变量(Field)</h2><p><strong>Class 类中获取成员变量的方法</strong>：</p><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td><code>Field[] getFields()</code></td><td>返回所有 <mark>公共</mark> 变量对象的数组</td></tr><tr><td><code>Field getField(String name)</code></td><td>返回单个 <mark>公共</mark> 成员变量对象</td></tr><tr><td><code>Field[] getDeclaredFields()</code></td><td>返回所有成员变量对象的数组</td></tr><tr><td><code>Field getDeclaredField(String name)</code></td><td>返回单个成员变量对象</td></tr></tbody></table><p><strong>Field 类中其它几个常用方法</strong>:</p><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td><code>Class&lt;?&gt; getType()</code></td><td>返回属性类型 ①</td></tr><tr><td><code>String getName()</code></td><td>返回属性名名</td></tr><tr><td><code>int getModifiers()</code></td><td>返回属性修饰符 ②</td></tr><tr><td><code>void set(Object obj, Object value)</code></td><td>设置属性值</td></tr><tr><td><code>Object get(Object obj)</code></td><td>读取属性值</td></tr></tbody></table><blockquote><p>① 一般配合<code>Class</code>类的<code>String getSimpleName()</code>方法使用<br> ② 返回的修饰符一般配合<code>Modifier</code>类的<code>String toString(int mod)</code>使用</p></blockquote><hr><p><strong>示例代码</strong>：</p>',8),y={class:"hint-container details"},S=n("summary",null,"展开查看",-1),C=n("div",{class:"language-java","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},`/**
 * 1.先获取classes字节码文件对象
 * 使用 Class 类中的 forName() 静态方法
 */`),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---1.获取Class对象---------------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Class"),s(" clazz_1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Class"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"cn.test.reflect.Person"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"clazz_1 = "'),s(),n("span",{class:"token operator"},"+"),s(" clazz_1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 2.1 获取所有公共成员变量数组"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---2.1.获取所有公共成员变量数组--------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Field"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" fields "),n("span",{class:"token operator"},"="),s(" clazz_1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getFields"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Field"),s(" field "),n("span",{class:"token operator"},":"),s(" fields"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"field = "'),s(),n("span",{class:"token operator"},"+"),s(" field"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// 2.2 获取单个公共成员变量对象"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---2.2.获取单个公共成员变量对象--------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Field"),s(" gender "),n("span",{class:"token operator"},"="),s(" clazz_1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getField"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"gender"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"getField = "'),s(),n("span",{class:"token operator"},"+"),s(" gender"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 2.3 获取所有成员变量对象数组"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---2.3.获取所有成员变量对象数组------------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Field"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" declaredFields "),n("span",{class:"token operator"},"="),s(" clazz_1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getDeclaredFields"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Field"),s(" declaredField "),n("span",{class:"token operator"},":"),s(" declaredFields"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"declaredField = "'),s(),n("span",{class:"token operator"},"+"),s(" declaredField"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// 2.4 获取单个成员变量对象"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---2.4.获取单个成员变量对象-------------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Field"),s(" name "),n("span",{class:"token operator"},"="),s(" clazz_1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getDeclaredField"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"getDeclaredField = "'),s(),n("span",{class:"token operator"},"+"),s(" name"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 3.获取变量类型"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---3.获取变量类型----------------------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Class"),s(" type "),n("span",{class:"token operator"},"="),s(" name"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getType"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name_type = "'),s(),n("span",{class:"token operator"},"+"),s(" type"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// 4.获取变量名字"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---4.获取变量名字----------------------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"String"),s(" parameterName "),n("span",{class:"token operator"},"="),s(" name"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"parameterName = "'),s(),n("span",{class:"token operator"},"+"),s(" parameterName"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// 5.获取变量修饰符"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---5.获取变量修饰符----------------------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"int"),s(" modifiers "),n("span",{class:"token operator"},"="),s(" name"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getModifiers"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"modifiers = "'),s(),n("span",{class:"token operator"},"+"),s(" modifiers"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 6.获取成员变量记录的值"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---6.获取成员变量记录的值------------------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Person"),s(" person "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Person"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"LiHua"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
name`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setAccessible"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Object"),s(" o "),n("span",{class:"token operator"},"="),s(" name"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("person"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"o = "'),s(),n("span",{class:"token operator"},"+"),s(" o"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 7.修改对象里面记录的值"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---7.修改对象里面记录的值------------------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
name`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("person"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Zhang"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),s("person"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),_=n("div",{class:"language-text","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`---1.获取Class对象---------------------------
clazz_1 = class cn.test.reflect.Person

---2.1.获取所有公共成员变量数组--------------------
field = public java.lang.String cn.test.reflect.Person.gender

---2.2.获取单个公共成员变量对象--------------------
getField = public java.lang.String cn.test.reflect.Person.gender

---2.3.获取所有成员变量对象数组------------------------
declaredField = private java.lang.String cn.test.reflect.Person.name
declaredField = private int cn.test.reflect.Person.age
declaredField = public java.lang.String cn.test.reflect.Person.gender

---2.4.获取单个成员变量对象-------------------------
getDeclaredField = private java.lang.String cn.test.reflect.Person.name

---3.获取变量类型----------------------------------
name_type = class java.lang.String

---4.获取变量名字----------------------------------
parameterName = name

---5.获取变量修饰符----------------------------------
modifiers = 2

---6.获取成员变量记录的值------------------------------
o = LiHua

---7.修改对象里面记录的值------------------------------
Name:Zhang,Age:0,Gender:null
`)])],-1),j=o('<h2 id="反射获取成员方法-method" tabindex="-1"><a class="header-anchor" href="#反射获取成员方法-method" aria-hidden="true">#</a> 反射获取成员方法(Method)</h2><p><strong>Class 类中获取成员变量的方法</strong>：</p><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td><code>Method[] getMethods()</code></td><td>返回所有 <mark>公共</mark> 方法对象数组(包括继承的)</td></tr><tr><td><code>Method getMethod(String name, Class&lt;?&gt;... parameterTypes)</code></td><td>返回单个 <mark>公共</mark> 方法对象</td></tr><tr><td><code>Method[] getDeclaredMethods()</code></td><td>返回所有成员方法对象对象数组</td></tr><tr><td><code>Method getDeclaredMethod(String name, Class&lt;?&gt;... parameterTypes)</code></td><td>返回单个成员方法对象</td></tr></tbody></table><p><strong>Method 类中其它几个常用方法</strong>:</p><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td><code>int getModifiers()</code></td><td>返回方法的修饰符 ①</td></tr><tr><td><code>Class&lt;?&gt; getReturnType()</code></td><td>返回方法的返回类型 ②</td></tr><tr><td><code>int getParameterCount()</code></td><td>返回方法的形参数量</td></tr><tr><td><code>Class&lt;?&gt;[] getParameterTypes()</code></td><td>返回方法的形参类型数组 ③</td></tr><tr><td><code>Parameter[] getParameters()</code></td><td>返回方法的形参数组(在类<code>Executable</code>中)</td></tr><tr><td><code>String getName()</code></td><td>返回方法名</td></tr><tr><td><code>Class&lt;?&gt;[] getExceptionTypes()</code></td><td>返回异常类型列表</td></tr><tr><td><code>Object invoke(Object obj, Object... args)</code></td><td>调用方法</td></tr></tbody></table><blockquote><p>① 返回的修饰符一般配合<code>Modifier</code>类的<code>String toString(int mod)</code>使用<br> ② 一般配合<code>Class</code>类的<code>String getSimpleName()</code>方法使用<br> ③ 结果集一般配合<code>Class</code>类的<code>String getSimpleName()</code>方法使用</p></blockquote><hr><p><strong>示例代码</strong>：</p>',8),w={class:"hint-container details"},P=n("summary",null,"展开查看",-1),z=n("div",{class:"language-java","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},`/**
 * 1.先获取classes字节码文件对象
 * 使用 Class 类中的 forName() 静态方法
 */`),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---1.获取Class对象---------------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Class"),s(" clazz_1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Class"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"cn.test.reflect.Person"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"clazz_1 = "'),s(),n("span",{class:"token operator"},"+"),s(" clazz_1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 2.1 获取所有公共方法对象数组(包括继承的)"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---2.1.获取所有公共方法对象数组(包括继承的)--------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Method"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" methods "),n("span",{class:"token operator"},"="),s(" clazz_1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getMethods"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Method"),s(" method "),n("span",{class:"token operator"},":"),s(" methods"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"method = "'),s(),n("span",{class:"token operator"},"+"),s(" method"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// 2.2 获取单个公共方法对象"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---2.2.获取单个公共方法对象--------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Method"),s(" method "),n("span",{class:"token operator"},"="),s(" clazz_1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getMethod"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"setName"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"class"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"method = "'),s(),n("span",{class:"token operator"},"+"),s(" method"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 3.1 获取所有成员方法对象对象数组"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---3.1.获取所有成员方法对象对象数组------------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Method"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" declaredMethods "),n("span",{class:"token operator"},"="),s(" clazz_1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getDeclaredMethods"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Method"),s(" declaredMethod "),n("span",{class:"token operator"},":"),s(" declaredMethods"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"declaredMethod = "'),s(),n("span",{class:"token operator"},"+"),s(" declaredMethod"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// 3.2 获取单个成员方法对象"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---3.2.获取单个成员方法对象-------------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Method"),s(" declaredMethod "),n("span",{class:"token operator"},"="),s(" clazz_1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getDeclaredMethod"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"eat"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"class"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"declaredMethod = "'),s(),n("span",{class:"token operator"},"+"),s(" declaredMethod"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 4.获取成员方法的修饰符"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---4.获取成员方法的修饰符----------------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"int"),s(" modifiers "),n("span",{class:"token operator"},"="),s(" declaredMethod"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getModifiers"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"modifiers = "'),s(),n("span",{class:"token operator"},"+"),s(" modifiers"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 5.获取成员方法的返回类型"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---5.获取成员方法的返回类型----------------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Class"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},">")]),s(" returnType "),n("span",{class:"token operator"},"="),s(" declaredMethod"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getReturnType"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"returnType = "'),s(),n("span",{class:"token operator"},"+"),s(" returnType"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 6.获取成员方法的形参数量"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---6.获取成员方法的形参数量----------------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"int"),s(" parameterCount "),n("span",{class:"token operator"},"="),s(" declaredMethod"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getParameterCount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"parameterCount = "'),s(),n("span",{class:"token operator"},"+"),s(" parameterCount"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 7.获取成员方法的参数类型列表"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---7.获取成员方法的参数类型列表--------------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Class"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" parameterTypes "),n("span",{class:"token operator"},"="),s(" declaredMethod"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getParameterTypes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Class"),s(" parameterType "),n("span",{class:"token operator"},":"),s(" parameterTypes"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"parameterType = "'),s(),n("span",{class:"token operator"},"+"),s(" parameterType"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// 8.获取成员方法的形参"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---8.获取成员方法的形参-------------------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Parameter"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" parameters "),n("span",{class:"token operator"},"="),s(" declaredMethod"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getParameters"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Parameter"),s(" parameter "),n("span",{class:"token operator"},":"),s(" parameters"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"String"),s(" name "),n("span",{class:"token operator"},"="),s(" parameter"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"parameter = "'),s(),n("span",{class:"token operator"},"+"),s(" parameter"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// 9.获取成员方法名"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---9.获取成员方法名-----------------------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"String"),s(" name "),n("span",{class:"token operator"},"="),s(" declaredMethod"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name = "'),s(),n("span",{class:"token operator"},"+"),s(" name"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/**
 * 10.调用方法
 * 参数一：表示方法的调用者
 * 参数二：表示在调用方法时传递的实际参数
 */`),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"---10.调用方法----------------------------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Person"),s(" person "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Person"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"Object"),s(" invoke "),n("span",{class:"token operator"},"="),s(" declaredMethod"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"invoke"),n("span",{class:"token punctuation"},"("),s("person"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"张三"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"invoke = "'),s(),n("span",{class:"token operator"},"+"),s(" invoke"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),M=n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`---1.获取Class对象---------------------------
clazz_1 = class cn.test.reflect.Person

---2.1.获取所有公共方法对象数组(包括继承的)--------------------
method = public void cn.test.reflect.Person.setGender(java.lang.String)
method = public java.lang.String cn.test.reflect.Person.getGender()
method = public int cn.test.reflect.Person.getAge()
method = public void cn.test.reflect.Person.setAge(int)
method = public java.lang.String cn.test.reflect.Person.eat(java.lang.String)
method = public java.lang.String cn.test.reflect.Person.toString()
method = public java.lang.String cn.test.reflect.Person.getName()
method = public void cn.test.reflect.Person.setName(java.lang.String)
method = public final void java.lang.Object.wait(long,int) throws java.lang.InterruptedException
method = public final native void java.lang.Object.wait(long) throws java.lang.InterruptedException
method = public final void java.lang.Object.wait() throws java.lang.InterruptedException
method = public boolean java.lang.Object.equals(java.lang.Object)
method = public native int java.lang.Object.hashCode()
method = public final native java.lang.Class java.lang.Object.getClass()
method = public final native void java.lang.Object.notify()
method = public final native void java.lang.Object.notifyAll()

---2.2.获取单个公共方法对象--------------------
method = public void cn.test.reflect.Person.setName(java.lang.String)

---3.1.获取所有成员方法对象对象数组------------------------
declaredMethod = public void cn.test.reflect.Person.setGender(java.lang.String)
declaredMethod = public java.lang.String cn.test.reflect.Person.getGender()
declaredMethod = public int cn.test.reflect.Person.getAge()
declaredMethod = public void cn.test.reflect.Person.setAge(int)
declaredMethod = public java.lang.String cn.test.reflect.Person.eat(java.lang.String)
declaredMethod = public java.lang.String cn.test.reflect.Person.toString()
declaredMethod = public java.lang.String cn.test.reflect.Person.getName()
declaredMethod = public void cn.test.reflect.Person.setName(java.lang.String)

---3.2.获取单个成员方法对象-------------------------
declaredMethod = public java.lang.String cn.test.reflect.Person.eat(java.lang.String)

---4.获取成员方法的修饰符----------------------------
modifiers = 1

---5.获取成员方法的返回类型----------------------------
returnType = class java.lang.String

---6.获取成员方法的形参数量----------------------------
parameterCount = 1

---7.获取成员方法的参数类型列表--------------------------
parameterType = class java.lang.String

---8.获取成员方法的形参-------------------------------
parameter = java.lang.String arg0

---9.获取成员方法名-----------------------------------
name = eat

---10.调用方法----------------------------------------
Eating！
invoke = 张三 - eating!
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=o('<h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><h3 id="反射的作用" tabindex="-1"><a class="header-anchor" href="#反射的作用" aria-hidden="true">#</a> 反射的作用</h3><p>① 获取任意一个类中的所有信息<br> ② 结合配置文件动态创建对象</p><h3 id="获取-class-字节码文件对象的三种方式" tabindex="-1"><a class="header-anchor" href="#获取-class-字节码文件对象的三种方式" aria-hidden="true">#</a> 获取 class 字节码文件对象的三种方式</h3><p>① Class.forName(&quot;全类名&quot;);<br> ② 类名.class;<br> ③ 对象.getClass();</p><h3 id="如何获取构造方法、成员方法、成员变量" tabindex="-1"><a class="header-anchor" href="#如何获取构造方法、成员方法、成员变量" aria-hidden="true">#</a> 如何获取构造方法、成员方法、成员变量</h3><table><thead><tr><th>方法简记</th><th>说明</th><th></th><th>方法简记</th><th>说明</th></tr></thead><tbody><tr><td>get</td><td>获取</td><td></td><td>set</td><td>设置</td></tr><tr><td>Constructor</td><td>构造方法</td><td></td><td>Parameter</td><td>参数</td></tr><tr><td>Field</td><td>成员变量</td><td></td><td>Modifiers</td><td>修饰符</td></tr><tr><td>Method</td><td>方法</td><td></td><td>Declared</td><td>私有的</td></tr></tbody></table>',7);function x(q,N){const c=u("CodeTabs");return i(),r("div",null,[m,n("details",g,[f,p(c,{id:"181",data:[{id:"App.java"},{id:"输出"}]},{title0:a(({value:t,isActive:e})=>[s("App.java")]),title1:a(({value:t,isActive:e})=>[s("输出")]),tab0:a(({value:t,isActive:e})=>[h]),tab1:a(({value:t,isActive:e})=>[v]),_:1},8,["data"])]),b,n("details",y,[S,p(c,{id:"309",data:[{id:"App.java"},{id:"输出"}]},{title0:a(({value:t,isActive:e})=>[s("App.java")]),title1:a(({value:t,isActive:e})=>[s("输出")]),tab0:a(({value:t,isActive:e})=>[C]),tab1:a(({value:t,isActive:e})=>[_]),_:1},8,["data"])]),j,n("details",w,[P,p(c,{id:"461",data:[{id:"App.java"},{id:"输出"}]},{title0:a(({value:t,isActive:e})=>[s("App.java")]),title1:a(({value:t,isActive:e})=>[s("输出")]),tab0:a(({value:t,isActive:e})=>[z]),tab1:a(({value:t,isActive:e})=>[M]),_:1},8,["data"])]),T])}const A=l(d,[["render",x],["__file","java-reflect.html.vue"]]);export{A as default};
