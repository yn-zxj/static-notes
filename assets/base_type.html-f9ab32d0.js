import{_ as n,x as s,X as a,a1 as t}from"./framework-13dd6df4.js";const p={},e=t(`<h2 id="_1-语法" tabindex="-1"><a class="header-anchor" href="#_1-语法" aria-hidden="true">#</a> 1.语法</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> 变量<span class="token operator">:</span>类型<span class="token punctuation">;</span>
<span class="token keyword">let</span> 变量<span class="token operator">:</span>类型 <span class="token operator">=</span> 值<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>参数<span class="token operator">:</span>类型<span class="token punctuation">,</span> 参数<span class="token operator">:</span>类型<span class="token punctuation">)</span><span class="token operator">:</span>类型 <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_2-自动类型判断" tabindex="-1"><a class="header-anchor" href="#_2-自动类型判断" aria-hidden="true">#</a> 2.自动类型判断</h2><p>TS 拥有自动的类型判断机制，当对变量的声明和赋值是同时进行的，TS 编译器会自动判断变量的类型，所以此情况下可以省略类型声明</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> 变量<span class="token operator">:</span>类型 <span class="token operator">=</span> 值<span class="token punctuation">;</span> <span class="token operator">=&gt;</span> <span class="token keyword">let</span> 变量 <span class="token operator">=</span> 值<span class="token punctuation">;</span>
</code></pre></div><h2 id="_3-类型" tabindex="-1"><a class="header-anchor" href="#_3-类型" aria-hidden="true">#</a> 3.类型</h2><table><thead><tr><th>类型</th><th>例子</th><th>描述</th></tr></thead><tbody><tr><td>number</td><td>1，-33，2.5</td><td>任意数字</td></tr><tr><td>string</td><td>&#39;Hi&#39;，&quot;Hi&quot;，\`h\`</td><td>任意字符串</td></tr><tr><td>boolean</td><td>true，false</td><td>布尔值</td></tr><tr><td>字面量<code>①</code></td><td>其本身</td><td>限制变量的值就是该字面量的值</td></tr><tr><td>any</td><td>*</td><td>任意类型（<mark>不建议使用</mark>）</td></tr><tr><td>unknown<code>②</code></td><td>*</td><td>类型安全的 any</td></tr><tr><td>viod</td><td>空值（undefined）</td><td>没有值（或 undefined）</td></tr><tr><td>never<code>③</code></td><td>没有值</td><td>不能是任何值（<mark>可以用来报错</mark>）</td></tr><tr><td>object<code>④</code></td><td>{name:&#39;孙悟空&#39;}</td><td>任意的 JS 对象（<mark>可以用来指定对象中可以包含哪些属性</mark>）</td></tr><tr><td>array<code>⑤</code></td><td>[1,2,3]</td><td>任意的 JS 数组</td></tr><tr><td>tuple<code>⑥</code></td><td>[4,5]</td><td>元素，TS 新增类型，固定长度数组</td></tr><tr><td>enum<code>⑦</code></td><td>enum Color {Red, Green, Blue};</td><td>枚举，TS 新增类型</td></tr></tbody></table><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>① 字面量
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
</code></pre></div><h2 id="_4-类型别名" tabindex="-1"><a class="header-anchor" href="#_4-类型别名" aria-hidden="true">#</a> 4.类型别名</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">myType</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> a<span class="token operator">:</span> myType<span class="token punctuation">;</span> <span class="token operator">=&gt;</span> 等价于<span class="token operator">:</span> <span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">speNum</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token operator">|</span><span class="token number">2</span><span class="token operator">|</span><span class="token number">3</span><span class="token operator">|</span><span class="token number">4</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b<span class="token operator">:</span> speNum<span class="token punctuation">;</span>
b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div>`,10),o=[e];function r(c,l){return s(),a("div",null,o)}const u=n(p,[["render",r],["__file","base_type.html.vue"]]);export{u as default};
