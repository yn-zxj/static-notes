import{_ as a,H as n,Y as s,a2 as e}from"./framework-96bec801.js";const t={},o=e(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p><mark>多表查询</mark>，也称为关联查询，指两个或更多个表一起完成查询操作。<br><strong>前提条件</strong>：这些一起查询的表之间是有关系的(一对一、一对多)，它们之间一定是有关联字段，这个关联字段可能建立了外键，也可能没有建立外键。</p></div><h2 id="_1-笛卡尔积" tabindex="-1"><a class="header-anchor" href="#_1-笛卡尔积" aria-hidden="true">#</a> 1.笛卡尔积</h2><p>  如果连接条件无效或者遗漏，其结果就是一个笛卡尔积，其中所有行的组合都被显示出来，即第一个表中的所有行连接到第二个表中的所有行。<br>   笛卡尔积会产生大量的行，例如第一个表中有 100 条记录，第二个表中有 200 条记录，使用笛卡尔积，结果就是两者相乘的 20000 条记录。一般来说这样的数据没有什么用，所以要避免此类情况出现。</p><h2 id="_2-等值-非等值连接" tabindex="-1"><a class="header-anchor" href="#_2-等值-非等值连接" aria-hidden="true">#</a> 2.等值 / 非等值连接</h2><h3 id="_2-1-等值连接" tabindex="-1"><a class="header-anchor" href="#_2-1-等值连接" aria-hidden="true">#</a> 2.1 等值连接</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  table1<span class="token punctuation">.</span><span class="token keyword">column</span><span class="token punctuation">,</span> table2<span class="token punctuation">.</span><span class="token keyword">column</span>
<span class="token keyword">FROM</span>
  table1<span class="token punctuation">,</span> table2
<span class="token keyword">WHERE</span>
  table1<span class="token punctuation">.</span>column1 <span class="token operator">=</span> table2<span class="token punctuation">.</span>column2<span class="token punctuation">;</span>
</code></pre></div><p>  在多表连接查询的 SELECT 子句中，字段名前面用表名可以使语义清楚，并且加快数据库访问，提高性能；<mark>如果相同的字段名出现在多个表中，字段名必须加表名，否则会引起冲突。</mark> 为了将 N 个表连接在一起，至少需要 N-1 个连接条件。</p><h3 id="_2-2-非等值连接" tabindex="-1"><a class="header-anchor" href="#_2-2-非等值连接" aria-hidden="true">#</a> 2.2 非等值连接</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  e<span class="token punctuation">.</span>last_name<span class="token punctuation">,</span> e<span class="token punctuation">.</span>salary<span class="token punctuation">,</span> j<span class="token punctuation">.</span>grade_level
<span class="token keyword">FROM</span>
  employees e<span class="token punctuation">,</span> job_grades j
<span class="token keyword">WHERE</span>
  e<span class="token punctuation">.</span>salary <span class="token operator">BETWEEN</span> j<span class="token punctuation">.</span>lowest_sal <span class="token operator">AND</span> j<span class="token punctuation">.</span>highest_sal<span class="token punctuation">;</span>
</code></pre></div><h2 id="_3-表别名" tabindex="-1"><a class="header-anchor" href="#_3-表别名" aria-hidden="true">#</a> 3.表别名</h2><p>  为了提高性能、避免字段名冲突，在多表连接查询的 SELECT 子句中，应该以<code>表名.字段名</code>的方式命名。不过这么写比较繁琐，可以使用表别名解决。<br>   表别名就是给表起了另外一个名字，不过字段别名通常是为了显示字段标题易于理解而起，而表别名是为了让 SQL 语句简单、易读。<mark>注意给表取别名后则不能使用&quot;表名.字段名&quot;的形式了，而需要使用&quot;表别名.字段名&quot;。</mark></p><p><strong>示例</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 将表table1 取别名a，并将表table2 取别名b</span>
<span class="token keyword">SELECT</span>
  a<span class="token punctuation">.</span><span class="token keyword">column</span><span class="token punctuation">,</span> b<span class="token punctuation">.</span><span class="token keyword">column</span>
<span class="token keyword">FROM</span>
  table1 a<span class="token punctuation">,</span> table2 b
<span class="token keyword">WHERE</span>
  a<span class="token punctuation">.</span>column1 <span class="token operator">=</span> b<span class="token punctuation">.</span>column2<span class="token punctuation">;</span>
</code></pre></div>`,13),p=[o];function c(l,r){return n(),s("div",null,p)}const i=a(t,[["render",c],["__file","mysql_basic_06.html.vue"]]);export{i as default};
