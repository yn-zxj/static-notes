import{_ as n,o as s,c as a,a as p}from"./app-uKx7KVXM.js";const t={},o=p(`<h2 id="约束-constraint-概述" tabindex="-1"><a class="header-anchor" href="#约束-constraint-概述" aria-hidden="true">#</a> 约束(constraint)概述</h2><h3 id="为什么需要约束" tabindex="-1"><a class="header-anchor" href="#为什么需要约束" aria-hidden="true">#</a> 为什么需要约束</h3><p>  数据完整性(Data Integrity)是指数据的精确性(Accuracy)和可靠性(Reliability)。它是<mark>防止数据库中存在不符合语义规定的数据</mark>和<mark>防止因错误信息的输入输出造成无效操作和错误信息</mark>而提出的。</p><p>为了保证数据的完整性，SQL 规范以约束的方式对表数据进行额外的条件限制。从下面四个方面考虑：<br> ① <code>实体完整性(Entity Integrity)</code>：例如，同一个表中，不能存在两条完全相同无法区分的记录<br> ② <code>域完整性(Domain Integrity)</code>：例如：年龄范围 0-120，性别范围&quot;男/女&quot;<br> ③ <code>引用完整性(Referential Integrity)</code>：例如：员工所在部门，在部门表中要能找到这个部门<br> ④ <code>用户自定义完整性(User-defined Integrity)</code>：例如：用户名唯一、密码不能为空等</p><h3 id="什么叫约束" tabindex="-1"><a class="header-anchor" href="#什么叫约束" aria-hidden="true">#</a> 什么叫约束?</h3><p>  约束简单来说就是对表中字段的限制，约束可以在创建表时通过<code>CREATE TABLE</code>语句，或者在表创建之后通过<code>ALTER TABLE</code>语句定义。</p><h3 id="约束的分类" tabindex="-1"><a class="header-anchor" href="#约束的分类" aria-hidden="true">#</a> 约束的分类</h3><p><strong>角度一</strong>：数据列的限制<br> 单列约束 ：每个约束只约束一列<br> 多列约束 ：每个约束可约束多列数据</p><p><strong>角度二</strong>：作用范围<br> 列级约束 ：只能作用在一个列上，跟在列的定义后面<br> 表级约束 ：可以作用在多个列上，不与列一起，而是单独定义</p><p><strong>角度三</strong>：功能作用</p><table><thead><tr><th>约束</th><th>说明</th></tr></thead><tbody><tr><td><code>NOT NULL</code></td><td>非空约束，规定某个字段不能为空</td></tr><tr><td><code>UNIQUE</code></td><td>唯一约束，规定某个字段在整个表中是唯一的</td></tr><tr><td><code>PRIMARY KEY</code></td><td>主键(非空且唯一)约束</td></tr><tr><td><code>FOREIGN KEY</code></td><td>外键约束</td></tr><tr><td><code>CHECK</code></td><td>检查约束</td></tr><tr><td><code>DEFAULT</code></td><td>默认值约束</td></tr></tbody></table><blockquote><p>注意： MySQL 不支持 CHECK 约束，但可以使用 CHECK 约束，而没有任何效果</p></blockquote><p>查看某个表已有的约束：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># information_schema数据库名（系统库）</span>
<span class="token comment"># table_constraints表名称（专门存储各个表的约束）</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> information_schema<span class="token punctuation">.</span>table_constraints <span class="token keyword">WHERE</span> table_name <span class="token operator">=</span> <span class="token string">&#39;表名称&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p>创建表时定义约束的语法：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token punctuation">[</span><span class="token keyword">schema</span><span class="token punctuation">.</span><span class="token punctuation">]</span>table_name <span class="token punctuation">(</span>
  col1 type1 <span class="token punctuation">[</span>DEFAULT1<span class="token punctuation">]</span> <span class="token punctuation">[</span>col1_constraint<span class="token punctuation">]</span><span class="token punctuation">,</span>
  col2 type2 <span class="token punctuation">[</span>DEFAULT2<span class="token punctuation">]</span> <span class="token punctuation">[</span>col2_constraint<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
  <span class="token punctuation">[</span>table_constraint<span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="非空约束" tabindex="-1"><a class="header-anchor" href="#非空约束" aria-hidden="true">#</a> 非空约束</h2><p><strong>作用</strong>：限制某个字段/某列的值不允许为空<br><strong>关键字</strong>：<code>NOT NULL</code><br><strong>特点</strong>：<br>  ① 默认，所有的类型的值都可以是<code>NULL</code>，包括<code>INT</code>、<code>FLOAT</code>等数据类型<br>  ② 非空约束只能出现在表对象的列上，只能某个列单独限定非空，不能组合非空<br>  ③ 一个表可以有很多列都分别限定了非空<br>  ④ 空字符串<code>&#39;&#39;</code>不等于<code>NULL</code>， 0 也不等于<code>NULL</code></p><h3 id="添加非空约束" tabindex="-1"><a class="header-anchor" href="#添加非空约束" aria-hidden="true">#</a> 添加非空约束</h3><p><strong>建表时</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名称 <span class="token punctuation">(</span>
  字段名 数据类型<span class="token punctuation">,</span>
  字段名 数据类型 <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  字段名 数据类型 <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 建表并设置sname和card_id为非空</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> student <span class="token punctuation">(</span>
  sid <span class="token keyword">INT</span><span class="token punctuation">,</span>
  sname <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  tel <span class="token keyword">CHAR</span> <span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  card_id <span class="token keyword">CHAR</span> <span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># sname 不能为空</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> student <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token boolean">null</span><span class="token punctuation">,</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;12321&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ERROR <span class="token number">1048</span> <span class="token punctuation">(</span><span class="token number">23000</span><span class="token punctuation">)</span>: <span class="token keyword">Column</span> <span class="token string">&#39;sname&#39;</span> cannot be <span class="token boolean">null</span>

<span class="token comment"># 修改后入库</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> student <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;LiHua&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;12321&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>建表后</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">MODIFY</span> 字段名 数据类型 <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>

<span class="token comment"># 设置sname为非空</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student <span class="token keyword">MODIFY</span> sname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="删除非空约束" tabindex="-1"><a class="header-anchor" href="#删除非空约束" aria-hidden="true">#</a> 删除非空约束</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 去掉NOT</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">MODIFY</span> 字段名 数据类型 <span class="token boolean">NULL</span><span class="token punctuation">;</span>
<span class="token comment">-- 去掉NOT NULL</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">MODIFY</span> 字段名 数据类型<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student <span class="token keyword">MODIFY</span> sname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student <span class="token keyword">MODIFY</span> sname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="唯一性约束" tabindex="-1"><a class="header-anchor" href="#唯一性约束" aria-hidden="true">#</a> 唯一性约束</h2><p><strong>作用</strong>：限制某个字段/某列的值不能重复<br><strong>关键字</strong>：<code>UNIQUE</code><br><strong>特点</strong>：<br>  ① 同一个表可以有多个唯一约束<br>  ② 唯一约束可以是某一个列，也可以是多个列组合的值唯一<br>  ③ 唯一约束允许列值为空<br>  ④ 在创建唯一约束的时候，如果不给唯一约束命名，就默认和列名相同<br>  ⑤ Mysql 会给唯一约束的列默认创建一个唯一索引</p><h3 id="添加唯一索引" tabindex="-1"><a class="header-anchor" href="#添加唯一索引" aria-hidden="true">#</a> 添加唯一索引</h3><p><strong>建表时</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 列级约束</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名称 <span class="token punctuation">(</span>
  字段名 数据类型<span class="token punctuation">,</span>
  字段名 数据类型 <span class="token keyword">UNIQUE</span><span class="token punctuation">,</span> <span class="token comment"># 不带KEY</span>
  字段名 数据类型 <span class="token keyword">UNIQUE</span> <span class="token keyword">KEY</span> <span class="token comment"># 带KEY</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 表级约束</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名称 <span class="token punctuation">(</span>
  字段名 数据类型<span class="token punctuation">,</span>
  字段名 数据类型<span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token keyword">constraint</span> 约束名<span class="token punctuation">]</span> <span class="token keyword">UNIQUE</span> <span class="token punctuation">[</span><span class="token keyword">KEY</span><span class="token punctuation">]</span> <span class="token punctuation">(</span>字段名<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment"># 约束名放前</span>
  <span class="token punctuation">[</span><span class="token keyword">constraint</span><span class="token punctuation">]</span> <span class="token keyword">UNIQUE</span> <span class="token punctuation">[</span><span class="token keyword">KEY</span><span class="token punctuation">]</span> 约束名 <span class="token punctuation">(</span>字段名<span class="token punctuation">)</span> <span class="token comment"># 约束名放后</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div></div><p><strong>示例</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 列级约束</span>
<span class="token comment"># 约束名和列名相同</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> student <span class="token punctuation">(</span>
  sid <span class="token keyword">INT</span> <span class="token keyword">UNIQUE</span><span class="token punctuation">,</span> <span class="token comment"># 省略关键字KEY</span>
  sname <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  tel <span class="token keyword">CHAR</span> <span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  card_id <span class="token keyword">CHAR</span> <span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span> <span class="token keyword">UNIQUE</span> <span class="token keyword">KEY</span> <span class="token comment"># 包含关键字KEY</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 表级约束</span>
<span class="token comment"># constraint 可以省略</span>
<span class="token comment"># 约束名可指定</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> student <span class="token punctuation">(</span>
  sid <span class="token keyword">INT</span><span class="token punctuation">,</span>
  sname <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  tel <span class="token keyword">CHAR</span> <span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  card_id <span class="token keyword">CHAR</span> <span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">CONSTRAINT</span> <span class="token keyword">UNIQUE</span> <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">\`</span>u_sid<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>sid<span class="token punctuation">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">UNIQUE</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>card_id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span> <span class="token comment"># 省略constraint、约束名及KEY这个关键字</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 表结构查看</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">desc</span> student<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">---------+-------------+------+-----+---------+-------+</span>
<span class="token operator">|</span> Field   <span class="token operator">|</span> <span class="token keyword">Type</span>        <span class="token operator">|</span> <span class="token boolean">Null</span> <span class="token operator">|</span> <span class="token keyword">Key</span> <span class="token operator">|</span> <span class="token keyword">Default</span> <span class="token operator">|</span> Extra <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------+-------------+------+-----+---------+-------+</span>
<span class="token operator">|</span> sid     <span class="token operator">|</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span>     <span class="token operator">|</span> YES  <span class="token operator">|</span> UNI <span class="token operator">|</span> <span class="token boolean">NULL</span>    <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">|</span> sname   <span class="token operator">|</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">|</span> YES  <span class="token operator">|</span>     <span class="token operator">|</span> <span class="token boolean">NULL</span>    <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">|</span> tel     <span class="token operator">|</span> <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span>    <span class="token operator">|</span> YES  <span class="token operator">|</span>     <span class="token operator">|</span> <span class="token boolean">NULL</span>    <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">|</span> card_id <span class="token operator">|</span> <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span>    <span class="token operator">|</span> YES  <span class="token operator">|</span> UNI <span class="token operator">|</span> <span class="token boolean">NULL</span>    <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------+-------------+------+-----+---------+-------+</span>
<span class="token number">4</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

<span class="token comment"># 建表语句查看</span>
<span class="token keyword">show</span> <span class="token keyword">create</span> <span class="token keyword">table</span> student<span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div><hr><p><strong>建表后</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 方式一：可以自定义约束名</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">ADD</span> <span class="token punctuation">[</span><span class="token keyword">CONSTRAINT</span> 约束名<span class="token punctuation">]</span> <span class="token keyword">UNIQUE</span> <span class="token punctuation">[</span><span class="token keyword">KEY</span><span class="token punctuation">]</span> <span class="token punctuation">(</span>字段列表<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 方式二</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">MODIFY</span> 字段名 字段类型 <span class="token keyword">UNIQUE</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>示例</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> student <span class="token punctuation">(</span>
  sid <span class="token keyword">INT</span><span class="token punctuation">,</span>
  sname <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  tel <span class="token keyword">CHAR</span> <span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  card_id <span class="token keyword">CHAR</span> <span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 给字段s_id创建约束，并定义约束名为u_sid</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student <span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> u_sid <span class="token keyword">UNIQUE</span> <span class="token punctuation">(</span>sid<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 给字段card_id创建约束，约束名默认为列名</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student <span class="token keyword">MODIFY</span> card_id <span class="token keyword">INT</span> <span class="token keyword">UNIQUE</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="复合唯一约束" tabindex="-1"><a class="header-anchor" href="#复合唯一约束" aria-hidden="true">#</a> 复合唯一约束</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 建表时</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名称 <span class="token punctuation">(</span>
  字段名 数据类型<span class="token punctuation">,</span>
  字段名 数据类型<span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token keyword">constraint</span> 约束名<span class="token punctuation">]</span> <span class="token keyword">UNIQUE</span> <span class="token punctuation">[</span><span class="token keyword">KEY</span><span class="token punctuation">]</span> <span class="token punctuation">(</span>字段列表<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment"># 约束名放前</span>
  <span class="token punctuation">[</span><span class="token keyword">constraint</span><span class="token punctuation">]</span> <span class="token keyword">UNIQUE</span> <span class="token punctuation">[</span><span class="token keyword">KEY</span><span class="token punctuation">]</span> 约束名 <span class="token punctuation">(</span>字段列表<span class="token punctuation">)</span> <span class="token comment"># 约束名放后</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> student <span class="token punctuation">(</span>
  sid <span class="token keyword">INT</span><span class="token punctuation">,</span>
  sname <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  tel <span class="token keyword">CHAR</span> <span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  card_id <span class="token keyword">CHAR</span> <span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">UNIQUE</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>sid<span class="token punctuation">\`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">\`</span>card_id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment"># 建表后</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">ADD</span> <span class="token punctuation">[</span><span class="token keyword">CONSTRAINT</span> 约束名<span class="token punctuation">]</span> <span class="token keyword">UNIQUE</span> <span class="token punctuation">[</span><span class="token keyword">KEY</span><span class="token punctuation">]</span> <span class="token punctuation">(</span>字段列表<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="删除唯一约束" tabindex="-1"><a class="header-anchor" href="#删除唯一约束" aria-hidden="true">#</a> 删除唯一约束</h3><p>① 添加唯一约束的列会自动创建唯一索引<br> ② 唯一约束只能通过删除唯一索引的方式删除<br> ③ 删除时需要指定索引名，唯一索引名就和唯一约束名一样<br> ④ 如果创建唯一索引未指定名称，如果是单列，默认就和列名相同；如果是组合列，那么默认和括号<code>()</code>中排在第一个的列名相同，也可以自定义唯一约束的约束名</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 方式一</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 <span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> 索引名<span class="token punctuation">;</span>

<span class="token comment"># 方式二</span>
<span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> 索引名 <span class="token keyword">ON</span> 表名<span class="token punctuation">;</span>

<span class="token comment"># 查看表索引</span>
<span class="token keyword">show</span> <span class="token keyword">index</span> <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token comment"># 删除索引</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student <span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> u_sid<span class="token punctuation">;</span>
<span class="token comment"># 或</span>
<span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> u_sid <span class="token keyword">ON</span> student<span class="token punctuation">;</span>
</code></pre></div><h2 id="primary-key-约束" tabindex="-1"><a class="header-anchor" href="#primary-key-约束" aria-hidden="true">#</a> PRIMARY KEY 约束</h2><p><strong>作用</strong>：唯一标识表中的一行记录<br><strong>关键字</strong>：<code>PRIMARY KEY</code><br><strong>特点</strong>：<br>  ① 主键约束相当于<code>唯一约束 + 非空约束</code>的组合，主键约束列不允许重复，也不允许出现空值<br>  ② 一个表最多只能有一个主键约束，建立主键约束可以在列级别创建，也可以在表级别上创建<br>  ③ 主键约束对应着表中的一列或者多列（复合主键）<br>  ④ 如果是多列组合的复合主键约束，那么这些列都不允许为空值，并且组合的值不允许重复<br>  ⑤ <mark>MySQL 的主键名总是 PRIMARY ，就算自己命名了主键约束名也没用</mark><br>  ⑥ 当创建主键约束时，系统默认会在所在的列或列组合上建立对应的<code>主键索引</code>；如果删除主键约束，主键索引就会一起被删除</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>主键是数据记录的唯一标识，如果修改了主键的值，就有可能会破坏数据的完整性。</p></div><h3 id="添加主键约束" tabindex="-1"><a class="header-anchor" href="#添加主键约束" aria-hidden="true">#</a> 添加主键约束</h3><p><strong>建表时</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 列级约束</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名称 <span class="token punctuation">(</span>
  字段名 数据类型<span class="token punctuation">,</span>
  字段名 数据类型 <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>
  字段名 数据类型
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 表级约束</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名称 <span class="token punctuation">(</span>
  字段名 数据类型<span class="token punctuation">,</span>
  字段名 数据类型<span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token keyword">constraint</span><span class="token punctuation">]</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>字段名<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>示例</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 列级约束</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> student <span class="token punctuation">(</span>
  sid <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>
  sname <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  tel <span class="token keyword">CHAR</span> <span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  card_id <span class="token keyword">CHAR</span> <span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 表级约束</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> student <span class="token punctuation">(</span>
  sid <span class="token keyword">INT</span><span class="token punctuation">,</span>
  sname <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  tel <span class="token keyword">CHAR</span> <span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  card_id <span class="token keyword">CHAR</span> <span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>sid<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

mysql<span class="token operator">&gt;</span> <span class="token keyword">desc</span> student<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">---------+-------------+------+-----+---------+-------+</span>
<span class="token operator">|</span> Field   <span class="token operator">|</span> <span class="token keyword">Type</span>        <span class="token operator">|</span> <span class="token boolean">Null</span> <span class="token operator">|</span> <span class="token keyword">Key</span> <span class="token operator">|</span> <span class="token keyword">Default</span> <span class="token operator">|</span> Extra <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------+-------------+------+-----+---------+-------+</span>
<span class="token operator">|</span> sid     <span class="token operator">|</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span>     <span class="token operator">|</span> <span class="token keyword">NO</span>   <span class="token operator">|</span> PRI <span class="token operator">|</span> <span class="token boolean">NULL</span>    <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">|</span> sname   <span class="token operator">|</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">|</span> YES  <span class="token operator">|</span>     <span class="token operator">|</span> <span class="token boolean">NULL</span>    <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">|</span> tel     <span class="token operator">|</span> <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span>    <span class="token operator">|</span> YES  <span class="token operator">|</span>     <span class="token operator">|</span> <span class="token boolean">NULL</span>    <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">|</span> card_id <span class="token operator">|</span> <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span>    <span class="token operator">|</span> YES  <span class="token operator">|</span>     <span class="token operator">|</span> <span class="token boolean">NULL</span>    <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------+-------------+------+-----+---------+-------+</span>
<span class="token number">4</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre></div><hr><p><strong>建表后</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">ADD</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>字段列表<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>示例</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> student <span class="token punctuation">(</span>
  sid <span class="token keyword">INT</span><span class="token punctuation">,</span>
  sname <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  tel <span class="token keyword">CHAR</span> <span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  card_id <span class="token keyword">CHAR</span> <span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 将字段sid设置为主键</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student <span class="token keyword">ADD</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>sid<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="复合主键约束" tabindex="-1"><a class="header-anchor" href="#复合主键约束" aria-hidden="true">#</a> 复合主键约束</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 建表时</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名称 <span class="token punctuation">(</span>
  字段名 数据类型<span class="token punctuation">,</span>
  字段名 数据类型<span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token keyword">constraint</span><span class="token punctuation">]</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>字段列表<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 建表后</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">ADD</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>字段列表<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="删除主键约束" tabindex="-1"><a class="header-anchor" href="#删除主键约束" aria-hidden="true">#</a> 删除主键约束</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">DROP</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">;</span>

<span class="token comment"># 删除student表的主键</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student <span class="token keyword">DROP</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="自增列" tabindex="-1"><a class="header-anchor" href="#自增列" aria-hidden="true">#</a> 自增列</h2><p><strong>作用</strong>：某个字段的值自增<br><strong>关键字</strong>：<code>AUTO_INCREMENT</code><br><strong>特点</strong>：<br>  ① 一个表最多只能有一个自增长(zhǎng)列<br>  ② 当需要产生唯一标识符或顺序值时，可设置自增长<br>  ③ 自增长列约束的列必须是键列 <mark>(主键列，唯一键列)</mark><br>  ④ <mark>自增约束的列的数据类型必须是整数类型</mark><br>  ⑤ 如果自增列指定了 0 和 null，会在当前最大值的基础上自增；如果自增列手动指定了具体值，直接赋值为具体值</p><h3 id="添加自增列" tabindex="-1"><a class="header-anchor" href="#添加自增列" aria-hidden="true">#</a> 添加自增列</h3><p><strong>建表时</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 数据类型必须是整数类型</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名称 <span class="token punctuation">(</span>
  字段名 数据类型 <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
  字段名 数据类型<span class="token punctuation">,</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名称 <span class="token punctuation">(</span>
  字段名 数据类型 <span class="token keyword">UNIQUE</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
  字段名 数据类型<span class="token punctuation">,</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><hr><p><strong>建表后</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">MODIFY</span> 字段名 数据类型 <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="删除自增列" tabindex="-1"><a class="header-anchor" href="#删除自增列" aria-hidden="true">#</a> 删除自增列</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 去掉AUTO_INCREMENT</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">MODIFY</span> 字段名 数据类型<span class="token punctuation">;</span>
</code></pre></div><h3 id="mysql-8-0-新特性—自增变量的持久化" tabindex="-1"><a class="header-anchor" href="#mysql-8-0-新特性—自增变量的持久化" aria-hidden="true">#</a> MySQL 8.0 新特性—自增变量的持久化</h3><p>  在 MySQL 8.0 之前，自增主键<code>AUTO_INCREMENT</code>的值如果大于<code>max(primary key) + 1</code>，在 MySQL 重启后，会重置<code>AUTO_INCREMENT = max(primary key) + 1</code>，这种现象在某些情况下会导致业务主键冲突或者其他难以发现的问题。</p><p>在 MySQL 5.7 中测试如下：</p><p>1️⃣ 建表</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> test_auto_increment<span class="token punctuation">(</span>
  id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>2️⃣ 插入 4 个空值</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> test_auto_increment <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>3️⃣ 查询数据</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> test_auto_increment<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">----+</span>
<span class="token operator">|</span> id <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+</span>
<span class="token operator">|</span> <span class="token number">1</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">3</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">4</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+</span>
<span class="token number">4</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre></div><p>4️⃣ 删除 id 为 4 的记录，并继续插入一个空值</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> test_auto_increment <span class="token keyword">WHERE</span> id <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> test_auto_increment <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>5️⃣ 此时表中数据如下，id 为 4 的记录在上一步被删除了，再次插入并没有重用删除的 4，而是重新分配了 5</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> test_auto_increment<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">----+</span>
<span class="token operator">|</span> id <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+</span>
<span class="token operator">|</span>  <span class="token number">1</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">2</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">3</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">5</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+</span>
<span class="token number">4</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre></div><p>6️⃣ 删除 id 为 5 的记录，并<mark>重启数据库</mark>，随后插入一个空值</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> test_auto_increment <span class="token keyword">WHERE</span> id <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> test_auto_increment <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>7️⃣ 查询当前数据库中的数据</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> test_auto_increment<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">----+</span>
<span class="token operator">|</span> id <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+</span>
<span class="token operator">|</span>  <span class="token number">1</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">2</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">3</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">4</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+</span>
<span class="token number">4</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre></div><p>  从结果中看出新插入的记录分配了 4，而根据前面分析的结论应该为 6。出现上述结果的主要原因是<mark>自增主键没有持久化</mark>。 在 MySQL 5.7 系统中，对于自增主键的分配规则，是由 InnoDB 数据字典内部一个<code>计数器</code>来决定的，而<mark>该计数器只在内存中维护，并不会持久化到磁盘中</mark>。当数据库重启时，该计数器会被初始化。</p><p>  我们在 MySQL 8.0 中重复上面的步骤，最后一步的结果如下：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> test_auto_increment<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">----+</span>
<span class="token operator">|</span> id <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+</span>
<span class="token operator">|</span>  <span class="token number">1</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">2</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">3</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">6</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+</span>
<span class="token number">4</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre></div><p>  从结果来看说明自增变量做了持久化。MySQL 8.0 将自增主键的计数器持久化到<code>重做日志(Redo Log)</code>中。每次计数器发生改变，都会将其写入重做日志中。如果数据库重启，InnoDB 会根据重做日志中的信息来初始化计数器的内存值。</p><h2 id="foreign-key-约束" tabindex="-1"><a class="header-anchor" href="#foreign-key-约束" aria-hidden="true">#</a> FOREIGN KEY 约束</h2><p><strong>作用</strong>：限定某个表的某个字段的引用完整性<br><strong>关键字</strong>：<code>FOREIGN KEY</code><br><strong>特点</strong>：<br>  ① 从表的外键列，必须引用/参考主表的主键或唯一约束的列(因为被依赖/参考的值必须是唯一的)<br>  ② 在创建外键约束时，如果不给外键约束命名，默认名不是列名，而是自动产生一个外键名，此外也可以自行指定<br>  ③ 创建表时就指定外键约束的话，先创建主表，再创建从表<br>  ④ 删除表时，先删除从表(或先删除外键约束)，再删除主表<br>  ⑤ 当主表的记录被从表参照时，主表的记录将不允许删除；如果要删除数据，需要先删除从表中的依赖该记录的数据，接着再删除主表的记录<br>  ⑥ 在&quot;从表&quot;中指定外键约束，并且一个表可以有多个外键约束<br>  ⑦ 从表的外键列和主表被参照的列名字可以不相同，但是<mark>数据类型必须一致</mark>。如果不一致，创建从表时出现<code>ERROR 1005 (HY000): Can&#39;t create table &#39;database.tablename&#39;(errno: 150)</code>错误<br>  ⑧ 当创建外键约束时，系统默认会在所在的列上建立对应的普通索引，但是索引名是外键的约束名<br>  ⑨ 删除外键约束后，必须手动删除对应的索引</p><div class="hint-container tip"><p class="hint-container-title">主表和从表 / 父表和子表</p><p>主表(父表)：被引用的表，被参考的表<br> 从表(子表)：引用别人的表，参考别人的表</p></div><h3 id="添加外键约束" tabindex="-1"><a class="header-anchor" href="#添加外键约束" aria-hidden="true">#</a> 添加外键约束</h3><p><strong>建表时</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 主表名<span class="token punctuation">(</span>
  字段<span class="token number">1</span> 字段类型 <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>
  字段<span class="token number">2</span> 字段类型
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 从表名<span class="token punctuation">(</span>
  字段<span class="token number">1</span> 数据类型<span class="token punctuation">,</span>
  字段<span class="token number">2</span> 数据类型<span class="token punctuation">,</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
  <span class="token punctuation">[</span><span class="token keyword">CONSTRAINT</span> 外键约束名<span class="token punctuation">]</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>从表某个字段<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> 主表名<span class="token punctuation">(</span>被参考字段<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>示例</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> dept <span class="token punctuation">(</span>
  did <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>
  dname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> empt <span class="token punctuation">(</span>
  eid <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>
  ename <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  edept_id <span class="token keyword">INT</span><span class="token punctuation">,</span>
  <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>edept_id<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> dept<span class="token punctuation">(</span>did<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 说明</span>
<span class="token comment">-- 主表需要先创建成功，才能创建从表并建立外键约束</span>
<span class="token comment">-- 删除表时，先删除从表，在删除主表</span>
</code></pre></div><hr><p><strong>建表后</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 从表名
<span class="token keyword">ADD</span> <span class="token punctuation">[</span><span class="token keyword">CONSTRAINT</span> 外键约束名<span class="token punctuation">]</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>从表某个字段<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> 主表名<span class="token punctuation">(</span>被参考字段<span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token keyword">ON</span> <span class="token keyword">DELETE</span> reference_option<span class="token punctuation">]</span> <span class="token comment"># 设置约束等级，下面有提到</span>
<span class="token punctuation">[</span><span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> reference_option<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment"># 例如(假设主表与从表同上面一样，但是从表创建时未建立外键约束)</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> empt <span class="token keyword">ADD</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>edept_id<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> dept<span class="token punctuation">(</span>did<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="约束等级" tabindex="-1"><a class="header-anchor" href="#约束等级" aria-hidden="true">#</a> 约束等级</h3><p><code>CASCADE</code>：在父表上 update/delete 记录时，同步 update/delete 掉子表的匹配记录</p><p><code>SET NULL</code>：在父表上 update/delete 记录时，将子表上匹配记录的列设为 null，但是要注意子表的外键列不能为 not null</p><p><code>NO ACTION</code>：如果子表中有匹配的记录，则不允许对父表对应候选键进行 update/delete 操作</p><p><code>RESTRICT</code>：同<code>NO ACTION</code>， 都是立即检查外键约束</p><p><code>SET DEFAULT</code>：父表有变更时，子表将外键列设置成一个默认的值，但 Innodb 不能识别</p><blockquote><p>如果没有指定等级，就相当于<code>RESTRICT</code>方式，建议使用下面搭配：<code>ON UPDATE CASCADE ON DELETE RESTRICT</code></p></blockquote><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token punctuation">[</span><span class="token keyword">CONSTRAINT</span> <span class="token punctuation">[</span>symbol<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span>
  <span class="token punctuation">[</span>index_name<span class="token punctuation">]</span> <span class="token punctuation">(</span>col_name<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
  <span class="token keyword">REFERENCES</span> tbl_name <span class="token punctuation">(</span>col_name<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
  <span class="token punctuation">[</span><span class="token keyword">ON</span> <span class="token keyword">DELETE</span> reference_option<span class="token punctuation">]</span>
  <span class="token punctuation">[</span><span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> reference_option<span class="token punctuation">]</span>

reference_option:
  <span class="token keyword">RESTRICT</span> <span class="token operator">|</span> <span class="token keyword">CASCADE</span> <span class="token operator">|</span> <span class="token keyword">SET</span> <span class="token boolean">NULL</span> <span class="token operator">|</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span> <span class="token operator">|</span> <span class="token keyword">SET</span> <span class="token keyword">DEFAULT</span>

<span class="token comment"># 例如</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> dept <span class="token punctuation">(</span>
  did <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>
  dname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> empt <span class="token punctuation">(</span>
  eid <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>
  ename <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  edept_id <span class="token keyword">INT</span><span class="token punctuation">,</span>
  <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>edept_id<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> dept<span class="token punctuation">(</span>did<span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CASCADE</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">RESTRICT</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="删除外键约束" tabindex="-1"><a class="header-anchor" href="#删除外键约束" aria-hidden="true">#</a> 删除外键约束</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 删除外键约束</span>
<span class="token comment"># 查询外键约束名</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> information_schema<span class="token punctuation">.</span>table_constraints <span class="token keyword">WHERE</span> table_name <span class="token operator">=</span> <span class="token string">&#39;表名称&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># 删除外键约束</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称<span class="token punctuation">(</span>从表<span class="token punctuation">)</span> <span class="token keyword">DROP</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> 外键约束名<span class="token punctuation">;</span>

<span class="token comment">-- 删除索引(手动)</span>
<span class="token comment"># 查看索引</span>
<span class="token keyword">SHOW</span> <span class="token keyword">INDEX</span> <span class="token keyword">FROM</span> 表名称<span class="token punctuation">(</span>从表<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># 删除索引</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称<span class="token punctuation">(</span>从表<span class="token punctuation">)</span> <span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> 索引名
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">开发场景</p><p>(1) 如果两个表之间有关系（一对一、一对多），比如：员工表和部门表（一对多），它们之间是否一定要建外键约束？（答：不是）</p><p>(2) 建和不建外键约束有什么区别？</p><ul><li>建外键约束，你的操作（创建表、删除表、添加、修改、删除）会受到限制，从语法层面受到限制。例如：在员工表中不可能添加一个员工信息，它的部门的值在部门表中找不到。</li><li>不建外键约束，你的操作（创建表、删除表、添加、修改、删除）不受限制，要保证数据的引用完整性，只能依靠程序员的自觉，或者是在 Java 程序中进行限定。例如：在员工表中，可以添加一个员工的信息，它的部门指定为一个完全不存在的部门。</li></ul><p>(3) 那么建和不建外键约束和查询有没有关系？（答：没有）</p><blockquote><p>在 MySQL 里，外键约束是有成本的，需要消耗系统资源。对于大并发的 SQL 操作，有可能会不适合。比如大型网站的中央数据库，可能会<mark>因为外键约束的系统开销而变得非常慢</mark>。所以， MySQL 允许你不使用系统自带的外键约束，在应用层面完成检查数据一致性的逻辑。也就是说，即使你不用外键约束，也要想办法通过应用层面的附加逻辑，来实现外键约束的功能，确保数据的一致性。</p></blockquote></div><blockquote><p>阿里规范：<br> 【<mark>强制</mark>】不得使用外键与级联，一切外键概念必须在应用层解决。<br> 说明：（概念解释）学生表中的 student_id 是主键，那么成绩表中的 student_id 则为外键。如果更新学生表中的 student_id，同时触发成绩表中的 student_id 更新，即为级联更新。外键与级联更新适用于单机低并发，不适合分布式、高并发集群；级联更新是强阻塞，存在数据库更新风暴的风险；外键影响数据库的插入速度。</p></blockquote><h2 id="check-约束" tabindex="-1"><a class="header-anchor" href="#check-约束" aria-hidden="true">#</a> CHECK 约束</h2><p><strong>作用</strong>：检查某个字段的值是否符合要求<br><strong>关键字</strong>：<code>CHECK</code></p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>在 MySQL 8.0.16 之前，CREATE TABLE 只允许以下有限版本的表 CHECK 约束语法，该语法被解析和忽略：<code>CHECK(exp)</code>，从 MySQL 8.0.16 支持<code>[CONSTRAINT [symbol]] CHECK (expr) [[NOT] ENFORCED]</code><br> 简单来说：MySQL 5.7 可以用 CHECK 但是没任何作用，而在 MySQL 8.0 后开始支持</p></div><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> t1
<span class="token punctuation">(</span>
  <span class="token keyword">CHECK</span> <span class="token punctuation">(</span>c1 <span class="token operator">&lt;&gt;</span> c2<span class="token punctuation">)</span><span class="token punctuation">,</span>
  c1 <span class="token keyword">INT</span> <span class="token keyword">CHECK</span> <span class="token punctuation">(</span>c1 <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  c2 <span class="token keyword">INT</span> <span class="token keyword">CONSTRAINT</span> c2_positive <span class="token keyword">CHECK</span> <span class="token punctuation">(</span>c2 <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  c3 <span class="token keyword">INT</span> <span class="token keyword">CHECK</span> <span class="token punctuation">(</span>c3 <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">CONSTRAINT</span> c1_nonzero <span class="token keyword">CHECK</span> <span class="token punctuation">(</span>c1 <span class="token operator">&lt;&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">CHECK</span> <span class="token punctuation">(</span>c1 <span class="token operator">&gt;</span> c3<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="default-约束" tabindex="-1"><a class="header-anchor" href="#default-约束" aria-hidden="true">#</a> DEFAULT 约束</h2><p><strong>作用</strong>：为列设置默认值，如果没有指定其它值，默认值将添加到所有新记录中<br><strong>关键字</strong>：<code>DEFAULT</code></p><h3 id="给字段设置默认值" tabindex="-1"><a class="header-anchor" href="#给字段设置默认值" aria-hidden="true">#</a> 给字段设置默认值</h3><p><strong>建表时</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名称 <span class="token punctuation">(</span>
  字段名 数据类型 <span class="token keyword">DEFAULT</span> 默认值<span class="token punctuation">,</span>
  字段名 数据类型<span class="token punctuation">,</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>示例</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> student <span class="token punctuation">(</span>
  sid <span class="token keyword">INT</span><span class="token punctuation">,</span>
  sname <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  tel <span class="token keyword">CHAR</span> <span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  card_id <span class="token keyword">CHAR</span> <span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  city <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;ShenZhen&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 未给city设置值</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> student <span class="token punctuation">(</span>sid<span class="token punctuation">,</span>sname<span class="token punctuation">,</span>tel<span class="token punctuation">,</span>card_id<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;LiHua&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;17589000&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;10001&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># 使用默认值</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> student<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-----+-------+----------+---------+----------+</span>
<span class="token operator">|</span> sid <span class="token operator">|</span> sname <span class="token operator">|</span> tel      <span class="token operator">|</span> card_id <span class="token operator">|</span> city     <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----+-------+----------+---------+----------+</span>
<span class="token operator">|</span>   <span class="token number">1</span> <span class="token operator">|</span> LiHua <span class="token operator">|</span> <span class="token number">17589000</span> <span class="token operator">|</span> <span class="token number">10001</span>   <span class="token operator">|</span> ShenZhen <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----+-------+----------+---------+----------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.04</span> sec<span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br></div></div><hr><p><strong>建表后</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 方式一：推荐</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">MODIFY</span> 字段名 数据类型 <span class="token keyword">DEFAULT</span> 默认值<span class="token punctuation">;</span>
<span class="token comment"># 方式二</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">ALTER</span> 字段名 <span class="token keyword">SET</span> <span class="token keyword">DEFAULT</span> 默认值<span class="token punctuation">;</span>
<span class="token comment"># 方式三</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 CHANGE <span class="token keyword">COLUMN</span> 字段名 字段名 数据类型 <span class="token keyword">DEFAULT</span> 默认值<span class="token punctuation">;</span>
</code></pre></div><p><strong>示例</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student <span class="token keyword">MODIFY</span> sname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;Sandnes&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student <span class="token keyword">ALTER</span> sname <span class="token keyword">SET</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;Sandnes&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student CHANGE <span class="token keyword">COLUMN</span> sname sname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;Sandnes&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br></div></div><h3 id="删除字段默认值" tabindex="-1"><a class="header-anchor" href="#删除字段默认值" aria-hidden="true">#</a> 删除字段默认值</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 方式一：推荐</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">MODIFY</span> 字段名 数据类型<span class="token punctuation">;</span>
<span class="token comment"># 方式二</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">ALTER</span> 字段名 <span class="token keyword">DROP</span> <span class="token keyword">DEFAULT</span><span class="token punctuation">;</span>
<span class="token comment"># 方式三</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 CHANGE <span class="token keyword">COLUMN</span> 字段名 字段名 数据类型 <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>示例</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student <span class="token keyword">MODIFY</span> sname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student <span class="token keyword">ALTER</span> sname <span class="token keyword">DROP</span> <span class="token keyword">DEFAULT</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student CHANGE <span class="token keyword">COLUMN</span> sname sname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br></div></div><h2 id="面试题" tabindex="-1"><a class="header-anchor" href="#面试题" aria-hidden="true">#</a> 面试题</h2><h3 id="为什么建表时-加not-null-default-或-default-0" tabindex="-1"><a class="header-anchor" href="#为什么建表时-加not-null-default-或-default-0" aria-hidden="true">#</a> 为什么建表时，加<code>NOT NULL DEFAULT &#39;&#39; 或 DEFAULT 0</code></h3><p>不想让表中出现<code>null</code>值</p><h3 id="为什么不想要null的值" tabindex="-1"><a class="header-anchor" href="#为什么不想要null的值" aria-hidden="true">#</a> 为什么不想要<code>null</code>的值</h3><p>① 不好比较。<code>null</code>是一种特殊值，比较时只能用专门的<code>is null</code>和<code>is not null</code>来比较。碰到运算符，通常返回<code>null</code>。<br> ② 效率不高。影响提高索引效果。因此，我们往往在建表时<code>not null default &#39;&#39; 或 default 0</code></p><h3 id="带auto-increment约束的字段值是从-1-开始的吗" tabindex="-1"><a class="header-anchor" href="#带auto-increment约束的字段值是从-1-开始的吗" aria-hidden="true">#</a> 带<code>AUTO_INCREMENT</code>约束的字段值是从 1 开始的吗?</h3><p>  在 MySQL 中，默认 AUTO_INCREMENT 的初始值是 1 ，每新增一条记录，字段值自动加 1 。设置自增属性（AUTO_INCREMENT）的时候，还可以指定第一条插入记录的自增字段的值，这样新插入的记录的自增字段值从初始值开始递增，如在表中插入第一条记录，同时指定 id 值为 5 ，则以后插入的记录的 id 值就会从 6 开始往上增加。添加主键约束时，往往需要设置字段自动增加属性。</p><h3 id="为什么说并不是每个表都可以任意选择存储引擎" tabindex="-1"><a class="header-anchor" href="#为什么说并不是每个表都可以任意选择存储引擎" aria-hidden="true">#</a> 为什么说并不是每个表都可以任意选择存储引擎?</h3><p>  外键约束（FOREIGN KEY）不能跨引擎使用。<br>   MySQL 支持多种存储引擎，每一个表都可以指定一个不同的存储引擎，需要注意的是：<mark>外键约束是用来保证数据的参照完整性的，如果表之间需要关联外键，却指定了不同的存储引擎，那么这些表之间是不能创建外键约束的</mark>。所以说，存储引擎的选择也不完全是随意的。</p>`,142),e=[o];function c(l,k){return s(),a("div",null,e)}const u=n(t,[["render",c],["__file","constraint.html.vue"]]);export{u as default};