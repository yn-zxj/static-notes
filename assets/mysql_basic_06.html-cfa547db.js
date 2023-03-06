import{_ as n,H as a,Y as s,a2 as e}from"./framework-96bec801.js";const t="/assets/data_of_table-db6cdd17.png",p="/assets/result_of_demo-627003e3.png",o="/assets/left_join-376d6809.png",c="/assets/right_join-8c787070.png",l={},d=e(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p><mark>多表查询</mark>，也称为关联查询，指两个或更多个表一起完成查询操作。<br><strong>前提条件</strong>：这些一起查询的表之间是有关系的(一对一、一对多)，它们之间一定是有关联字段，这个关联字段可能建立了外键，也可能没有建立外键。</p></div><h2 id="_1-笛卡尔积" tabindex="-1"><a class="header-anchor" href="#_1-笛卡尔积" aria-hidden="true">#</a> 1.笛卡尔积</h2><p>  如果连接条件无效或者遗漏，其结果就是一个笛卡尔积，其中所有行的组合都被显示出来，即第一个表中的所有行连接到第二个表中的所有行。<br>   笛卡尔积会产生大量的行，例如第一个表中有 100 条记录，第二个表中有 200 条记录，使用笛卡尔积，结果就是两者相乘的 20000 条记录。一般来说这样的数据没有什么用，所以要避免此类情况出现。</p><h2 id="_2-等值-非等值连接" tabindex="-1"><a class="header-anchor" href="#_2-等值-非等值连接" aria-hidden="true">#</a> 2.等值 / 非等值连接</h2><h3 id="_2-1-等值连接" tabindex="-1"><a class="header-anchor" href="#_2-1-等值连接" aria-hidden="true">#</a> 2.1 等值连接</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  table1<span class="token punctuation">.</span><span class="token keyword">column</span><span class="token punctuation">,</span> table2<span class="token punctuation">.</span><span class="token keyword">column</span>
<span class="token keyword">FROM</span>
  table1<span class="token punctuation">,</span> table2
<span class="token keyword">WHERE</span>
  table1<span class="token punctuation">.</span>column1 <span class="token operator">=</span> table2<span class="token punctuation">.</span>column1<span class="token punctuation">;</span>
</code></pre></div><p>  在多表连接查询的 SELECT 子句中，字段名前面用表名可以使语义清楚，并且加快数据库访问，提高性能；<mark>如果相同的字段名出现在多个表中，字段名必须加表名，否则会引起冲突。</mark> 为了将 N 个表连接在一起，至少需要 N-1 个连接条件。</p><h3 id="_2-2-多表等值连接" tabindex="-1"><a class="header-anchor" href="#_2-2-多表等值连接" aria-hidden="true">#</a> 2.2 多表等值连接</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  table1<span class="token punctuation">.</span><span class="token keyword">column</span><span class="token punctuation">,</span> table2<span class="token punctuation">.</span><span class="token keyword">column</span><span class="token punctuation">,</span> table3<span class="token punctuation">.</span><span class="token keyword">column</span>
<span class="token keyword">FROM</span>
  table1<span class="token punctuation">,</span> table2<span class="token punctuation">,</span> table3
<span class="token keyword">WHERE</span>
  table1<span class="token punctuation">.</span>column1 <span class="token operator">=</span> table2<span class="token punctuation">.</span>column1
  <span class="token operator">AND</span> table1<span class="token punctuation">.</span>column2 <span class="token operator">=</span> table3<span class="token punctuation">.</span>column2<span class="token punctuation">;</span>
</code></pre></div><p>  在 SQL 语句中的<code>WHERE</code>子句里，用<code>AND</code>将两个连接条件结合起来，像这样的连接称为多表的等值查询。其核心表是<code>table1</code>，分别通过<code>column1</code>与表<code>table2</code>关联，通过<code>column2</code>与表<code>table3</code>关联。</p><h3 id="_2-3-非等值连接" tabindex="-1"><a class="header-anchor" href="#_2-3-非等值连接" aria-hidden="true">#</a> 2.3 非等值连接</h3><figure><img src="`+t+`" alt="表数据.png" tabindex="0" loading="lazy"><figcaption>表数据.png</figcaption></figure><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  e<span class="token punctuation">.</span>last_name<span class="token punctuation">,</span> e<span class="token punctuation">.</span>salary<span class="token punctuation">,</span> j<span class="token punctuation">.</span>grade_level
<span class="token keyword">FROM</span>
  employees e<span class="token punctuation">,</span> job_grades j
<span class="token keyword">WHERE</span>
  e<span class="token punctuation">.</span>salary <span class="token operator">BETWEEN</span> j<span class="token punctuation">.</span>lowest_sal <span class="token operator">AND</span> j<span class="token punctuation">.</span>highest_sal<span class="token punctuation">;</span>
</code></pre></div><figure><img src="`+p+`" alt="查询结果.png" width="300" tabindex="0" loading="lazy"><figcaption>查询结果.png</figcaption></figure><h2 id="_3-表别名" tabindex="-1"><a class="header-anchor" href="#_3-表别名" aria-hidden="true">#</a> 3.表别名</h2><p>  为了提高性能、避免字段名冲突，在多表连接查询的 SELECT 子句中，应该以<code>表名.字段名</code>的方式命名。不过这么写比较繁琐，可以使用表别名解决。<br>   表别名就是给表起了另外一个名字，不过字段别名通常是为了显示字段标题易于理解而起，而表别名是为了让 SQL 语句简单、易读。<mark>注意给表取别名后则不能使用&quot;表名.字段名&quot;的形式了，而需要使用&quot;表别名.字段名&quot;。</mark></p><p><strong>示例</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 将表table1 取别名a，并将表table2 取别名b</span>
<span class="token keyword">SELECT</span>
  a<span class="token punctuation">.</span><span class="token keyword">column</span><span class="token punctuation">,</span> b<span class="token punctuation">.</span><span class="token keyword">column</span>
<span class="token keyword">FROM</span>
  table1 a<span class="token punctuation">,</span> table2 b
<span class="token keyword">WHERE</span>
  a<span class="token punctuation">.</span>column1 <span class="token operator">=</span> b<span class="token punctuation">.</span>column2<span class="token punctuation">;</span>
</code></pre></div><h2 id="_4-自连接-自关联" tabindex="-1"><a class="header-anchor" href="#_4-自连接-自关联" aria-hidden="true">#</a> 4.自连接(自关联)</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 查询员工编号，员工姓名及其对应管理者的编号和姓名</span>
<span class="token keyword">SELECT</span>
  a<span class="token punctuation">.</span>employee_id <span class="token string">&#39;员工编号&#39;</span><span class="token punctuation">,</span>
  a<span class="token punctuation">.</span>first_name <span class="token string">&#39;员工名&#39;</span><span class="token punctuation">,</span>
  a<span class="token punctuation">.</span>last_name <span class="token string">&#39;员工姓&#39;</span><span class="token punctuation">,</span>
  b<span class="token punctuation">.</span>employee_id <span class="token string">&#39;管理者编号&#39;</span><span class="token punctuation">,</span>
  b<span class="token punctuation">.</span>first_name <span class="token string">&#39;管理者名&#39;</span><span class="token punctuation">,</span>
  b<span class="token punctuation">.</span>last_name <span class="token string">&#39;管理者姓&#39;</span>
<span class="token keyword">FROM</span>
  employees a<span class="token punctuation">,</span>
  employees b
<span class="token keyword">WHERE</span>
  a<span class="token punctuation">.</span>manager_id <span class="token operator">=</span> b<span class="token punctuation">.</span>employee_id<span class="token punctuation">;</span>
</code></pre></div><p>  将同一张<code>employees</code>表通过别名看成了两张不同的表；将别名 a 的表看成员工表，别名 b 的表看成领导表，在将两表进行连接。</p><h2 id="_5-内连接" tabindex="-1"><a class="header-anchor" href="#_5-内连接" aria-hidden="true">#</a> 5.内连接</h2><p><strong>内连接</strong>：在标准 SQL 中，将多个表连接，仅返回匹配条件的行的连接。简单来说，就是查询出来的结果在两个或多个表里都有与之匹配的记录。</p><p><strong>SQL92 语法</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/*
说明：employees 共107条记录，其中last_name = &#39;Grant&#39;的员工没有部门
这条记录在部门表不匹配，所以内连接应该返回106条记录
*/</span>
<span class="token comment"># 查询员工及其对应的部门信息</span>
<span class="token keyword">SELECT</span>
  e<span class="token punctuation">.</span>last_name<span class="token punctuation">,</span>
  d<span class="token punctuation">.</span>department_name
<span class="token keyword">FROM</span>
  employees e<span class="token punctuation">,</span>
  departments d
<span class="token keyword">WHERE</span>
  e<span class="token punctuation">.</span>department_id <span class="token operator">=</span> d<span class="token punctuation">.</span>department_id<span class="token punctuation">;</span>
</code></pre></div><p><strong>SQL99 语法</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/*
说明：employees 共107条记录，其中last_name = &#39;Grant&#39;的员工没有部门
这条记录在部门表不匹配，所以内连接应该返回106条记录
*/</span>
<span class="token comment"># 查询员工及其对应的部门信息</span>
<span class="token keyword">SELECT</span>
  e<span class="token punctuation">.</span>last_name<span class="token punctuation">,</span>
  d<span class="token punctuation">.</span>department_name
<span class="token keyword">FROM</span>
  employees e
  <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> departments d <span class="token keyword">ON</span> e<span class="token punctuation">.</span>department_id <span class="token operator">=</span> d<span class="token punctuation">.</span>department_id<span class="token punctuation">;</span>
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>① <code>INNER</code>可以省略！</p><p>② <strong>自然连接</strong>：如果两个表中，<mark>有相同的字段名且字段的数据类型相同</mark>，则可以使用自然连接实现两个表之间的等值连接，自然连接是一种特殊的等值连接。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  e<span class="token punctuation">.</span>last_name<span class="token punctuation">,</span>
  d<span class="token punctuation">.</span>department_name
<span class="token keyword">FROM</span>
  employees e
  <span class="token keyword">NATURAL</span> <span class="token keyword">JOIN</span> departments d<span class="token punctuation">;</span>
</code></pre></div><p>③ <strong>USING 子句</strong>：上面的 SQL，除了可以使用自然连接，还可以使用<code>USING</code>子句来明确指定连接字段。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  e<span class="token punctuation">.</span>last_name<span class="token punctuation">,</span>
  d<span class="token punctuation">.</span>department_name
<span class="token keyword">FROM</span>
  employees e
  <span class="token keyword">JOIN</span> departments d <span class="token keyword">USING</span><span class="token punctuation">(</span>department_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></div><h2 id="_6-外连接" tabindex="-1"><a class="header-anchor" href="#_6-外连接" aria-hidden="true">#</a> 6.外连接</h2><p><strong>外连接</strong>：合并具有同一列的两个及以上的表的行，结果集中除了包含一个表与另一个表匹配的行之外，还查询出了左表或右表中不匹配的行。</p><p><strong>外连接的分类</strong>：左外连接(<code>LEFT [OUTER] JOIN ... ON</code>)、右外连接(<code>RIGHT [OUTER] JOIN ... ON</code>)、全外连接(<code>FULL [OUTER] JOIN ... ON</code>)，但是<mark>MySQL 在 SQL99 语法中不支持全外连接(满外连接)</mark>。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>MySQL 不支持 SQL92 语法中外连接的写法(<mark>使用+</mark>)，但是 Oracle 中这样的写法可以！MySQL 支持 SQL99 语法中使用<code>JOIN ... ON</code>的方式实现多表的查询。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/*
说明：employees 共107条记录，其中last_name = &#39;Grant&#39;的员工没有部门
这条记录在部门表不匹配，左连接后应该全部返回
*/</span>
<span class="token comment"># 查询所有员工编号，员工姓名及其对应管理者的编号和姓名【左连接】</span>
<span class="token keyword">SELECT</span>
  e<span class="token punctuation">.</span>last_name<span class="token punctuation">,</span>
  d<span class="token punctuation">.</span>department_name
<span class="token keyword">FROM</span>
  employees e<span class="token punctuation">,</span>
  departments d
<span class="token keyword">WHERE</span>
  e<span class="token punctuation">.</span>department_id <span class="token operator">=</span> d<span class="token punctuation">.</span>department_id<span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></div><h3 id="_6-1-左外连接" tabindex="-1"><a class="header-anchor" href="#_6-1-左外连接" aria-hidden="true">#</a> 6.1 左外连接</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/*
说明：employees 共107条记录，其中last_name = &#39;Grant&#39;的员工没有部门
这条记录在部门表不匹配，左连接后应该全部返回
*/</span>
<span class="token comment"># 查询员工及其对应的部门信息</span>
<span class="token keyword">SELECT</span>
  e<span class="token punctuation">.</span>last_name<span class="token punctuation">,</span>
  d<span class="token punctuation">.</span>department_name
<span class="token keyword">FROM</span>
  employees e
  <span class="token keyword">LEFT</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span> departments d <span class="token keyword">ON</span> e<span class="token punctuation">.</span>department_id <span class="token operator">=</span> d<span class="token punctuation">.</span>department_id<span class="token punctuation">;</span>
</code></pre></div><blockquote><p>左表匹配数据全部展示，右表不匹配的数据展示为 NULL</p></blockquote><figure><img src="`+o+`" alt="左外连接.png" width="250" tabindex="0" loading="lazy"><figcaption>左外连接.png</figcaption></figure><h3 id="_6-2-右外连接" tabindex="-1"><a class="header-anchor" href="#_6-2-右外连接" aria-hidden="true">#</a> 6.2 右外连接</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/*
说明：employees 共107条记录，其中last_name = &#39;Grant&#39;的员工没有部门
departments 表中27条记录，其中16个部门没有员工
采用右连接后应该返回 106 + 16 = 122 条记录
*/</span>
<span class="token comment"># 查询员工及其对应的部门信息</span>
<span class="token keyword">SELECT</span>
  e<span class="token punctuation">.</span>last_name<span class="token punctuation">,</span>
  d<span class="token punctuation">.</span>department_name
<span class="token keyword">FROM</span>
  employees e
  <span class="token keyword">RIGHT</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span> departments d <span class="token keyword">ON</span> e<span class="token punctuation">.</span>department_id <span class="token operator">=</span> d<span class="token punctuation">.</span>department_id<span class="token punctuation">;</span>
</code></pre></div><blockquote><p>右表匹配数据全部展示，左表不匹配的数据展示为 NULL</p></blockquote><figure><img src="`+c+'" alt="右外连接.png" width="250" tabindex="0" loading="lazy"><figcaption>右外连接.png</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">提示</p><p>① <code>OUTER</code>可以省略！</p><p>② 有相同的字段名且字段的数据类型相同可以使用<code>USING</code>子句。</p></div><h2 id="_7-sql-joins" tabindex="-1"><a class="header-anchor" href="#_7-sql-joins" aria-hidden="true">#</a> 7.SQL JOINS</h2>',42),r=[d];function i(u,k){return a(),s("div",null,r)}const g=n(l,[["render",i],["__file","mysql_basic_06.html.vue"]]);export{g as default};
