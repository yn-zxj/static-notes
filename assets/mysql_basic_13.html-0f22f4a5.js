import{_ as n,M as s,Y as a,a2 as p}from"./framework-0d8205ef.js";const t={},o=p(`<h2 id="_1-约束-constraint-概述" tabindex="-1"><a class="header-anchor" href="#_1-约束-constraint-概述" aria-hidden="true">#</a> 1.约束(constraint)概述</h2><h3 id="_1-1-为什么需要约束" tabindex="-1"><a class="header-anchor" href="#_1-1-为什么需要约束" aria-hidden="true">#</a> 1.1 为什么需要约束</h3><p>  数据完整性(Data Integrity)是指数据的精确性(Accuracy)和可靠性(Reliability)。它是<mark>防止数据库中存在不符合语义规定的数据</mark>和<mark>防止因错误信息的输入输出造成无效操作和错误信息</mark>而提出的。</p><p>为了保证数据的完整性，SQL 规范以约束的方式对表数据进行额外的条件限制。从下面四个方面考虑：<br> ① <code>实体完整性(Entity Integrity)</code>：例如，同一个表中，不能存在两条完全相同无法区分的记录<br> ② <code>域完整性(Domain Integrity)</code>：例如：年龄范围 0-120，性别范围&quot;男/女&quot;<br> ③ <code>引用完整性(Referential Integrity)</code>：例如：员工所在部门，在部门表中要能找到这个部门<br> ④ <code>用户自定义完整性(User-defined Integrity)</code>：例如：用户名唯一、密码不能为空等</p><h3 id="_1-2-什么叫约束" tabindex="-1"><a class="header-anchor" href="#_1-2-什么叫约束" aria-hidden="true">#</a> 1.2 什么叫约束?</h3><p>  约束简单来说就是对表中字段的限制，约束可以在创建表时通过<code>CREATE TABLE</code>语句，或者在表创建之后通过<code>ALTER TABLE</code>语句定义。</p><h3 id="_1-3-约束的分类" tabindex="-1"><a class="header-anchor" href="#_1-3-约束的分类" aria-hidden="true">#</a> 1.3 约束的分类</h3><p><strong>角度一</strong>：数据列的限制<br> 单列约束 ：每个约束只约束一列<br> 多列约束 ：每个约束可约束多列数据</p><p><strong>角度二</strong>：作用范围<br> 列级约束 ：只能作用在一个列上，跟在列的定义后面<br> 表级约束 ：可以作用在多个列上，不与列一起，而是单独定义</p><p><strong>角度三</strong>：功能作用</p><table><thead><tr><th>约束</th><th>说明</th></tr></thead><tbody><tr><td><code>NOT NULL</code></td><td>非空约束，规定某个字段不能为空</td></tr><tr><td><code>UNIQUE</code></td><td>唯一约束，规定某个字段在整个表中是唯一的</td></tr><tr><td><code>PRIMARY KEY</code></td><td>主键(非空且唯一)约束</td></tr><tr><td><code>FOREIGN KEY</code></td><td>外键约束</td></tr><tr><td><code>CHECK</code></td><td>检查约束</td></tr><tr><td><code>DEFAULT</code></td><td>默认值约束</td></tr></tbody></table><blockquote><p>注意： MySQL 不支持 CHECK 约束，但可以使用 CHECK 约束，而没有任何效果</p></blockquote><p>查看某个表已有的约束：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># information_schema数据库名（系统库）</span>
<span class="token comment"># table_constraints表名称（专门存储各个表的约束）</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> information_schema<span class="token punctuation">.</span>table_constraints <span class="token keyword">WHERE</span> table_name <span class="token operator">=</span> <span class="token string">&#39;表名称&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p>创建表时定义约束的语法：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token punctuation">[</span><span class="token keyword">schema</span><span class="token punctuation">.</span><span class="token punctuation">]</span>table_name <span class="token punctuation">(</span>
  col1 type1 <span class="token punctuation">[</span>DEFAULT1<span class="token punctuation">]</span> <span class="token punctuation">[</span>col1_constraint<span class="token punctuation">]</span><span class="token punctuation">,</span>
  col2 type2 <span class="token punctuation">[</span>DEFAULT2<span class="token punctuation">]</span> <span class="token punctuation">[</span>col2_constraint<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
  <span class="token punctuation">[</span>table_constraint<span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="_2-非空约束" tabindex="-1"><a class="header-anchor" href="#_2-非空约束" aria-hidden="true">#</a> 2.非空约束</h2><p><strong>作用</strong>：限制某个字段/某列的值不允许为空<br><strong>关键字</strong>：<code>NOT NULL</code><br><strong>特点</strong>：<br>  ① 默认，所有的类型的值都可以是<code>NULL</code>，包括<code>INT</code>、<code>FLOAT</code>等数据类型<br>  ② 非空约束只能出现在表对象的列上，只能某个列单独限定非空，不能组合非空<br>  ③ 一个表可以有很多列都分别限定了非空<br>  ④ 空字符串<code>&#39;&#39;</code>不等于<code>NULL</code>， 0 也不等于<code>NULL</code></p><h3 id="_2-1-添加非空约束" tabindex="-1"><a class="header-anchor" href="#_2-1-添加非空约束" aria-hidden="true">#</a> 2.1 添加非空约束</h3><p><strong>建表时</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名称 <span class="token punctuation">(</span>
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
</code></pre></div><h3 id="_2-2-删除非空约束" tabindex="-1"><a class="header-anchor" href="#_2-2-删除非空约束" aria-hidden="true">#</a> 2.2 删除非空约束</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 去掉NOT</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">MODIFY</span> 字段名 数据类型 <span class="token boolean">NULL</span><span class="token punctuation">;</span>
<span class="token comment">-- 去掉NOT NULL</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">MODIFY</span> 字段名 数据类型<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student <span class="token keyword">MODIFY</span> sname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student <span class="token keyword">MODIFY</span> sname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="_3-唯一性约束" tabindex="-1"><a class="header-anchor" href="#_3-唯一性约束" aria-hidden="true">#</a> 3.唯一性约束</h2><p><strong>作用</strong>：限制某个字段/某列的值不能重复 <strong>关键字</strong>：<code>UNIQUE</code><br><strong>特点</strong>：<br>  ① 同一个表可以有多个唯一约束<br>  ② 唯一约束可以是某一个列，也可以是多个列组合的值唯一<br>  ③ 唯一约束允许列值为空<br>  ④ 在创建唯一约束的时候，如果不给唯一约束命名，就默认和列名相同<br>  ⑤ Mysql 会给唯一约束的列默认创建一个唯一索引</p><h3 id="_3-1-添加唯一索引" tabindex="-1"><a class="header-anchor" href="#_3-1-添加唯一索引" aria-hidden="true">#</a> 3.1 添加唯一索引</h3><p><strong>建表时</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 列级约束</span>
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
</code></pre></div><h3 id="_3-2-复合唯一约束" tabindex="-1"><a class="header-anchor" href="#_3-2-复合唯一约束" aria-hidden="true">#</a> 3.2 复合唯一约束</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 建表前</span>
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
</code></pre></div><h3 id="_3-3-删除唯一约束" tabindex="-1"><a class="header-anchor" href="#_3-3-删除唯一约束" aria-hidden="true">#</a> 3.3 删除唯一约束</h3><p>① 添加唯一约束的列会自动创建唯一索引<br> ② 唯一约束只能通过删除唯一索引的方式删除<br> ③ 删除时需要指定索引名，唯一索引名就和唯一约束名一样<br> ④ 如果创建唯一索引未指定名称，如果是单列，默认就和列名想同；如果是组合列，那么默认和括号<code>()</code>中排在第一个的列名相同，也可以自定义唯一约束的约束名</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 方式一</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 <span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> 索引名<span class="token punctuation">;</span>

<span class="token comment"># 方式二</span>
<span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> 索引名 <span class="token keyword">ON</span> 表名<span class="token punctuation">;</span>

<span class="token comment"># 查看表索引</span>
<span class="token keyword">show</span> <span class="token keyword">index</span> <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token comment"># 删除索引</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student <span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> u_sid<span class="token punctuation">;</span>
<span class="token comment"># 或</span>
<span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> u_sid <span class="token keyword">ON</span> student<span class="token punctuation">;</span>
</code></pre></div><h2 id="_4-primary-key-约束" tabindex="-1"><a class="header-anchor" href="#_4-primary-key-约束" aria-hidden="true">#</a> 4.PRIMARY KEY 约束</h2><p><strong>作用</strong>：唯一标识表中的一行记录<br><strong>关键字</strong>：<code>PRIMARY KEY</code><br><strong>特点</strong>：<br>  ① 主键约束相当于<code>唯一约束 + 非空约束</code>的组合，主键约束列不允许重复，也不允许出现空值<br>  ② 一个表最多只能有一个主键约束，建立主键约束可以在列级别创建，也可以在表级别上创建<br>  ③ 主键约束对应着表中的一列或者多列（复合主键）<br>  ④ 如果是多列组合的复合主键约束，那么这些列都不允许为空值，并且组合的值不允许重复<br>  ⑤ <mark>MySQL 的主键名总是 PRIMARY ，就算自己命名了主键约束名也没用</mark><br>  ⑥ 当创建主键约束时，系统默认会在所在的列或列组合上建立对应的<code>主键索引</code>；如果删除主键约束，主键索引就会一起被删除</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>主键是数据记录的唯一标识，如果修改了主键的值，就有可能会破坏数据的完整性。</p></div><h3 id="_4-1-添加主键约束" tabindex="-1"><a class="header-anchor" href="#_4-1-添加主键约束" aria-hidden="true">#</a> 4.1 添加主键约束</h3><p><strong>建表时</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 列级约束</span>
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
</code></pre></div><h3 id="_4-2-复合主键约束" tabindex="-1"><a class="header-anchor" href="#_4-2-复合主键约束" aria-hidden="true">#</a> 4.2 复合主键约束</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 建表前</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名称 <span class="token punctuation">(</span>
  字段名 数据类型<span class="token punctuation">,</span>
  字段名 数据类型<span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token keyword">constraint</span><span class="token punctuation">]</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>字段列表<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 建表后</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">ADD</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>字段列表<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_4-3-删除主键约束" tabindex="-1"><a class="header-anchor" href="#_4-3-删除主键约束" aria-hidden="true">#</a> 4.3 删除主键约束</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">DROP</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">;</span>

<span class="token comment"># 删除student表的主键</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student <span class="token keyword">DROP</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="_5-自增列" tabindex="-1"><a class="header-anchor" href="#_5-自增列" aria-hidden="true">#</a> 5.自增列</h2><p><strong>作用</strong>：某个字段的值自增<br><strong>关键字</strong>：<code>AUTO_INCREMENT</code><br><strong>特点</strong>：<br>  ① 一个表最多只能有一个自增长(zhǎng)列<br>  ② 当需要产生唯一标识符或顺序值时，可设置自增长<br>  ③ 自增长列约束的列必须是键列==(主键列，唯一键列)==<br>  ④ <mark>自增约束的列的数据类型必须是整数类型</mark><br>  ⑤ 如果自增列指定了 0 和 null，会在当前最大值的基础上自增；如果自增列手动指定了具体值，直接赋值为具体值</p><h3 id="_5-1-添加自增列" tabindex="-1"><a class="header-anchor" href="#_5-1-添加自增列" aria-hidden="true">#</a> 5.1 添加自增列</h3><p><strong>建表前</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 数据类型必须是整数类型</span>
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
</code></pre></div><h3 id="_5-2-删除自增列" tabindex="-1"><a class="header-anchor" href="#_5-2-删除自增列" aria-hidden="true">#</a> 5.2 删除自增列</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 去掉AUTO_INCREMENT</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">MODIFY</span> 字段名 数据类型<span class="token punctuation">;</span>
</code></pre></div><h3 id="_5-3-mysql-8-0-新特性—自增变量的持久化" tabindex="-1"><a class="header-anchor" href="#_5-3-mysql-8-0-新特性—自增变量的持久化" aria-hidden="true">#</a> 5.3 MySQL 8.0 新特性—自增变量的持久化</h3><p>  在 MySQL 8.0 之前，自增主键<code>AUTO_INCREMENT</code>的值如果大于<code>max(primary key) + 1</code>，在 MySQL 重启后，会重置<code>AUTO_INCREMENT = max(primary key) + 1</code>，这种现象在某些情况下会导致业务主键冲突或者其他难以发现的问题。</p><p>在 MySQL 5.7 中测试如下：</p><p>1️⃣ 建表</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> test_auto_increment<span class="token punctuation">(</span>
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
</code></pre></div><p>  从结果来看说明自增变量做了持久化。MySQL 8.0 将自增主键的计数器持久化到<code>重做日志(Redo Log)</code>中。每次计数器发生改变，都会将其写入重做日志中。如果数据库重启，InnoDB 会根据重做日志中的信息来初始化计数器的内存值。</p>`,90),e=[o];function c(l,k){return s(),a("div",null,e)}const u=n(t,[["render",c],["__file","mysql_basic_13.html.vue"]]);export{u as default};
