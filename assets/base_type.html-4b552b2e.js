import{_ as t,o as p,c as e,a,f as n,i as s}from"./app-d934b0a3.js";const o={},l=a(`<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> 变量<span class="token operator">:</span>类型<span class="token punctuation">;</span>
<span class="token keyword">let</span> 变量<span class="token operator">:</span>类型 <span class="token operator">=</span> 值<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>参数<span class="token operator">:</span>类型<span class="token punctuation">,</span> 参数<span class="token operator">:</span>类型<span class="token punctuation">)</span><span class="token operator">:</span>类型 <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="自动类型判断" tabindex="-1"><a class="header-anchor" href="#自动类型判断" aria-hidden="true">#</a> 自动类型判断</h2><p>TS 拥有自动的类型判断机制，当对变量的声明和赋值是同时进行的，TS 编译器会自动判断变量的类型，所以此情况下可以省略类型声明</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> 变量<span class="token operator">:</span>类型 <span class="token operator">=</span> 值<span class="token punctuation">;</span> <span class="token operator">=&gt;</span> <span class="token keyword">let</span> 变量 <span class="token operator">=</span> 值<span class="token punctuation">;</span>
</code></pre></div><h2 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h2>`,6),c=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"类型"),n("th",null,"例子"),n("th",null,"描述")])]),n("tbody",null,[n("tr",null,[n("td",null,"number"),n("td",null,"1，-33，2.5"),n("td",null,"任意数字")]),n("tr",null,[n("td",null,"string"),n("td",null,"'Hi'，\"Hi\"，`h`"),n("td",null,"任意字符串")]),n("tr",null,[n("td",null,"boolean"),n("td",null,"true，false"),n("td",null,"布尔值")]),n("tr",null,[n("td",null,[s("字面量"),n("code",null,"①")]),n("td",null,"其本身"),n("td",null,"限制变量的值就是该字面量的值")]),n("tr",null,[n("td",null,"any"),n("td",null,"*"),n("td",null,[s("任意类型（"),n("mark",null,"不建议使用"),s("）")])]),n("tr",null,[n("td",null,[s("unknown"),n("code",null,"②")]),n("td",null,"*"),n("td",null,"类型安全的 any")]),n("tr",null,[n("td",null,"viod"),n("td",null,"空值（undefined）"),n("td",null,"没有值（或 undefined）")]),n("tr",null,[n("td",null,[s("never"),n("code",null,"③")]),n("td",null,"没有值"),n("td",null,[s("不能是任何值（"),n("mark",null,"可以用来报错"),s("）")])]),n("tr",null,[n("td",null,[s("object"),n("code",null,"④")]),n("td",{"name:孙悟空":""}),n("td",null,[s("任意的 JS 对象（"),n("mark",null,"可以用来指定对象中可以包含哪些属性"),s("）")])]),n("tr",null,[n("td",null,[s("array"),n("code",null,"⑤")]),n("td",null,"[1,2,3]"),n("td",null,"任意的 JS 数组")]),n("tr",null,[n("td",null,[s("tuple"),n("code",null,"⑥")]),n("td",null,"[4,5]"),n("td",null,"元素，TS 新增类型，固定长度数组")]),n("tr",null,[n("td",null,[s("enum"),n("code",null,"⑦")]),n("td",null,"enum Color {Red, Green, Blue};"),n("td",null,"枚举，TS 新增类型")])])],-1),r=a(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>① 字面量
<span class="token keyword">let</span> <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">;</span> <span class="token operator">=&gt;</span> 此时a只能赋值为<span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token string">&quot;male&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;female&quot;</span><span class="token punctuation">;</span> <span class="token operator">=&gt;</span> 此时b可以赋值male或者female<span class="token punctuation">;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>联合类型<span class="token punctuation">]</span>

② unknown
<span class="token comment">// unknown类型的变量，不能直接赋值给其他变量</span>
<span class="token keyword">let</span> <span class="token literal-property property">s</span><span class="token operator">:</span>unknown<span class="token punctuation">;</span>
<span class="token keyword">let</span> e <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> e <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 s <span class="token operator">=</span> e<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 或者类型断言 =&gt; 变量 as 类型 或者 &lt;string&gt;变量</span>
s <span class="token operator">=</span> e <span class="token keyword">as</span> string<span class="token punctuation">;</span>
s <span class="token operator">=</span> <span class="token operator">&lt;</span>string<span class="token operator">&gt;</span>e<span class="token punctuation">;</span>

③ never
<span class="token keyword">function</span> <span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>never <span class="token punctuation">{</span>
 <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;报错了！&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

④ object
<span class="token comment">// 语法：{属性名:属性类型,属性名?:属性类型, [propName: string]:any} =&gt; ?:代表可选属性,[]:代表任意类型的属性</span>
<span class="token keyword">let</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span>age<span class="token operator">?</span><span class="token operator">:</span>number<span class="token punctuation">}</span><span class="token punctuation">;</span>
b <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;孙悟空&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 设置函数结构的类型声名,语法：(形参:类型,形参:类型...)=&gt;返回值类型</span>
<span class="token keyword">let</span> <span class="token function-variable function">d</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span>number<span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span>number</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>number<span class="token punctuation">;</span>

⑤ array
<span class="token keyword">let</span> <span class="token literal-property property">e</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> 或 <span class="token keyword">let</span> <span class="token literal-property property">e</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span><span class="token punctuation">;</span> <span class="token comment">// 字符串数组</span>

⑥ tuple
<span class="token keyword">let</span> <span class="token literal-property property">h</span><span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">,</span> string<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 两个字符串数组</span>
h <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;hi&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

⑦ <span class="token keyword">enum</span>
<span class="token keyword">let</span> <span class="token keyword">enum</span> Gender <span class="token punctuation">{</span>
 Male<span class="token punctuation">,</span>
 Female
<span class="token punctuation">}</span>
</code></pre></div><h2 id="类型别名" tabindex="-1"><a class="header-anchor" href="#类型别名" aria-hidden="true">#</a> 类型别名</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">myType</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> a<span class="token operator">:</span> myType<span class="token punctuation">;</span> <span class="token operator">=&gt;</span> 等价于<span class="token operator">:</span> <span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">speNum</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token operator">|</span><span class="token number">2</span><span class="token operator">|</span><span class="token number">3</span><span class="token operator">|</span><span class="token number">4</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b<span class="token operator">:</span> speNum<span class="token punctuation">;</span>
b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div>`,3),u=[l,c,r];function k(i,d){return p(),e("div",null,u)}const m=t(o,[["render",k],["__file","base_type.html.vue"]]);export{m as default};
