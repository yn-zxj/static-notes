import{_ as s,M as a,Y as n,a2 as e}from"./framework-0d8205ef.js";const p={},t=e(`<h2 id="_1-子查询" tabindex="-1"><a class="header-anchor" href="#_1-子查询" aria-hidden="true">#</a> 1.子查询</h2><h3 id="_1-1-子查询的基本使用" tabindex="-1"><a class="header-anchor" href="#_1-1-子查询的基本使用" aria-hidden="true">#</a> 1.1 子查询的基本使用</h3><p><strong>基本语法结构</strong>:</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> select_list
<span class="token keyword">FROM</span> <span class="token keyword">table</span>
<span class="token keyword">WHERE</span> expr operator <span class="token punctuation">(</span><span class="token keyword">SELECT</span> select_list <span class="token keyword">FROM</span> <span class="token keyword">table</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><blockquote><p>子查询(内查询)在主查询之前一次执行完成<br> 子查询的结果被主查询(外查询)使用</p></blockquote><div class="hint-container warning"><p class="hint-container-title">注意</p><p>(1) 子查询要包含在括号内<br> (2) 将子查询放在比较条件的右侧<br> (3) 单行操作符对应单行子查询，多行操作符对应多行子查询</p></div><h3 id="_1-2-子查询的分类" tabindex="-1"><a class="header-anchor" href="#_1-2-子查询的分类" aria-hidden="true">#</a> 1.2 子查询的分类</h3><p><strong>分类一</strong>：<br> 按内查询的<mark>结果返回一条还是多条记录</mark>，将子查询分为<mark>单行子查询</mark>、<mark>多行子查询</mark>。</p><p><strong>分类二</strong>：<br> 按内查询<mark>是否被执行多次</mark>，将子查询划分为<mark>相关(或关联)子查询</mark>和<mark>不相关(或非关联)子查询</mark>。</p><h2 id="_2-单行子查询" tabindex="-1"><a class="header-anchor" href="#_2-单行子查询" aria-hidden="true">#</a> 2.单行子查询</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>单行比较操作符：<code>=、&gt;、&gt;=、&lt;、&lt;=、&lt;&gt;</code></p></div><p><strong>查询示例</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 题目一：查询工资大于149号员工工资的员工信息</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> salary <span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> salary <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> employee_id <span class="token operator">=</span> <span class="token string">&#39;149&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 题目二：返回job_id与员工141号员工相同，salary比143号员工多的员工姓名、job_id和工资</span>
<span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span> job_id<span class="token punctuation">,</span> salary
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> job_id <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> job_id <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> employee_id <span class="token operator">=</span> <span class="token string">&#39;141&#39;</span><span class="token punctuation">)</span>
<span class="token operator">AND</span> salary <span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> salary <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> employee_id <span class="token operator">=</span> <span class="token string">&#39;143&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 题目三：返回公司工资最少的员工的员工的last_name、job_id和salary</span>
<span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span> job_id<span class="token punctuation">,</span> salary
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> salary <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">FROM</span> employees<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><div class="highlight-line"> </div></div></div><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/*
题目四：查询与141号或174号员工的manager_id和
department_id相同的其他员工的employee_id、manager_id、department_id
*/</span>

<span class="token comment"># 不成对比较</span>
<span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> manager_id<span class="token punctuation">,</span> department_id
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> manager_id <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> manager_id <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> employee_id <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">141</span><span class="token punctuation">,</span> <span class="token number">174</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">AND</span> department_id <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> department_id <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> employee_id <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">141</span><span class="token punctuation">,</span> <span class="token number">174</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">AND</span> employee_id <span class="token operator">NOT</span> <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">141</span><span class="token punctuation">,</span> <span class="token number">171</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 成对比较</span>
<span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> manager_id<span class="token punctuation">,</span> department_id
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> <span class="token punctuation">(</span>manager_id<span class="token punctuation">,</span> department_id<span class="token punctuation">)</span> <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> manager_id<span class="token punctuation">,</span>department_id <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> employee_id <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">141</span><span class="token punctuation">,</span> <span class="token number">174</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">AND</span> employee_id <span class="token operator">NOT</span> <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">141</span><span class="token punctuation">,</span> <span class="token number">171</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><br></div></div><h3 id="_2-1-having-中的子查询" tabindex="-1"><a class="header-anchor" href="#_2-1-having-中的子查询" aria-hidden="true">#</a> 2.1 HAVING 中的子查询</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 查询最低工资大于50号部门最低工资的部门id和其最低工资</span>
<span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> employees
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
<span class="token keyword">HAVING</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> <span class="token string">&#39;50&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div></div></div><h3 id="_2-2-case-中的子查询" tabindex="-1"><a class="header-anchor" href="#_2-2-case-中的子查询" aria-hidden="true">#</a> 2.2 CASE 中的子查询</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/*
显示员工的employee_id,last_name和grade
salary &gt;= 10000 grade = &#39;A&#39;
5000 &gt;= salary &gt; 10000 grade = &#39;B&#39;
salary &lt; 5000 grade = &#39;C&#39;
*/</span>
<span class="token keyword">SELECT</span>
  employee_id<span class="token punctuation">,</span>
  last_name<span class="token punctuation">,</span>
  <span class="token keyword">CASE</span>
      <span class="token keyword">WHEN</span> salary <span class="token operator">&gt;=</span> <span class="token number">10000</span> <span class="token keyword">THEN</span> <span class="token string">&#39;A&#39;</span>
      <span class="token keyword">WHEN</span> salary <span class="token operator">&gt;=</span> <span class="token number">5000</span> <span class="token operator">AND</span> salary <span class="token operator">&lt;</span> <span class="token number">10000</span> <span class="token keyword">THEN</span> <span class="token string">&#39;B&#39;</span>
      <span class="token keyword">WHEN</span> salary <span class="token operator">&lt;</span> <span class="token number">5000</span> <span class="token keyword">THEN</span> <span class="token string">&#39;C&#39;</span>
  <span class="token keyword">END</span> <span class="token string">&#39;grade&#39;</span>
<span class="token keyword">FROM</span>
  employees<span class="token punctuation">;</span>
</code></pre></div><h3 id="_2-3-子查询中的空值问题" tabindex="-1"><a class="header-anchor" href="#_2-3-子查询中的空值问题" aria-hidden="true">#</a> 2.3 子查询中的空值问题</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 查询工资大于149号员工工资的员工信息</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> salary <span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> salary <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> employee_id <span class="token operator">=</span> <span class="token string">&#39;666&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><blockquote><p>由于没有员工的员工编号为 666，所以返回的记录数为 0（子查询不返回任何行）</p></blockquote><h3 id="_2-4-非法使用子查询" tabindex="-1"><a class="header-anchor" href="#_2-4-非法使用子查询" aria-hidden="true">#</a> 2.4 非法使用子查询</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> salary <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">FROM</span> employees <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><blockquote><p>子查询返回多行，但是比较符确是单行比较符，此时 salary 无法决策与子查询返回的那个值相等，故错误</p></blockquote><h2 id="_3-多行子查询" tabindex="-1"><a class="header-anchor" href="#_3-多行子查询" aria-hidden="true">#</a> 3.多行子查询</h2><h3 id="_3-1-多行子查询操作符" tabindex="-1"><a class="header-anchor" href="#_3-1-多行子查询操作符" aria-hidden="true">#</a> 3.1 多行子查询操作符</h3><p>多行子查询也称集合比较子查询，内查询返回多行，使用多行比较操作符。</p><table><thead><tr><th>操作符</th><th>含义</th></tr></thead><tbody><tr><td><code>IN</code></td><td>等于列表中的<mark>任意一个</mark></td></tr><tr><td><code>ANY</code></td><td>需要和单行比较操作符一起使用，和子查询返回的<mark>某一个</mark>值比较</td></tr><tr><td><code>ALL</code></td><td>需要和单行比较操作符一起使用，和子查询返回的<mark>所有</mark>值比较</td></tr><tr><td><code>SOME</code></td><td>实际上是 ANY 的别名，作用相同，一般常使用 ANY</td></tr></tbody></table><h3 id="查询示例" tabindex="-1"><a class="header-anchor" href="#查询示例" aria-hidden="true">#</a> 查询示例</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 题目一：查询入职日期比10部门任意一个员工晚的员工姓名、入职日期，不包括10部门员工</span>
<span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span> hire_date
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> hire_date <span class="token operator">&gt;</span><span class="token keyword">ANY</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> hire_date <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token operator">AND</span> department_id <span class="token operator">&lt;&gt;</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token comment"># 题目二：查询入职日期比20部门所有员工晚的员工姓名、入职日期，不包括10部门员工</span>
<span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span> hire_date
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> hire_date <span class="token operator">&gt;</span><span class="token keyword">ALL</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> hire_date <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">)</span>
<span class="token operator">AND</span> department_id <span class="token operator">&lt;&gt;</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token comment"># 题目三：查询职位和50部门任意一个员工职位相同的员工姓名，职位，不包括20部门员工</span>
<span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span> job_id
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> job_id <span class="token operator">=</span><span class="token keyword">ANY</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> job_id <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">)</span>
<span class="token operator">AND</span> department_id <span class="token operator">&lt;&gt;</span> <span class="token number">20</span><span class="token punctuation">;</span>

<span class="token comment"># 或</span>
<span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span> job_id
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> job_id <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> job_id <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">)</span>
<span class="token operator">AND</span> department_id <span class="token operator">&lt;&gt;</span> <span class="token number">20</span><span class="token punctuation">;</span>

<span class="token comment"># 题目四：返回其它job_id中比job_id为&#39;IT_PROG&#39;部门任一工资低的员工的员工号、姓名、job_id以及salary</span>
<span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> job_id<span class="token punctuation">,</span> salary
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> salary <span class="token operator">&lt;</span><span class="token keyword">ANY</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> salary <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> job_id <span class="token operator">=</span> <span class="token string">&#39;IT_PROG&#39;</span><span class="token punctuation">)</span>
<span class="token operator">AND</span> job_id <span class="token operator">&lt;&gt;</span> <span class="token string">&#39;IT_PROG&#39;</span><span class="token punctuation">;</span>

<span class="token comment"># 题目五：返回其它job_id中比job_id为&#39;IT_PROG&#39;部门所有工资都低的员工的员工号、姓名、job_id以及salary</span>
<span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> job_id<span class="token punctuation">,</span> salary
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> salary <span class="token operator">&lt;</span><span class="token keyword">ALL</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> salary <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> job_id <span class="token operator">=</span> <span class="token string">&#39;IT_PROG&#39;</span><span class="token punctuation">)</span>
<span class="token operator">AND</span> job_id <span class="token operator">&lt;&gt;</span> <span class="token string">&#39;IT_PROG&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><br></div></div><h3 id="_3-2-空值问题" tabindex="-1"><a class="header-anchor" href="#_3-2-空值问题" aria-hidden="true">#</a> 3.2 空值问题</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 内查询有NULL值</span>
<span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> job_id<span class="token punctuation">,</span> salary<span class="token punctuation">,</span> employee_id
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> employee_id <span class="token operator">NOT</span> <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> manager_id <span class="token keyword">FROM</span> employees<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="_4-相关子查询" tabindex="-1"><a class="header-anchor" href="#_4-相关子查询" aria-hidden="true">#</a> 4.相关子查询</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 查询员工中工资大于本部门平均工资的员工的lase_name，salary和其department_id</span>
<span class="token comment">-- 方式一：使用相关子查询</span>
<span class="token keyword">SELECT</span> a<span class="token punctuation">.</span>last_name<span class="token punctuation">,</span> a<span class="token punctuation">.</span>salary<span class="token punctuation">,</span> a<span class="token punctuation">.</span>department_id
<span class="token keyword">FROM</span> employees a
<span class="token keyword">WHERE</span> a<span class="token punctuation">.</span>salary <span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> a<span class="token punctuation">.</span>department_id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 方式二：在FROM中作为一个表</span>
<span class="token keyword">SELECT</span> a<span class="token punctuation">.</span>last_name<span class="token punctuation">,</span> a<span class="token punctuation">.</span>salary<span class="token punctuation">,</span> a<span class="token punctuation">.</span>department_id
<span class="token keyword">FROM</span> employees a<span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span><span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token string">&#39;salary&#39;</span>
<span class="token keyword">FROM</span> employees
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id<span class="token punctuation">)</span> b
<span class="token keyword">WHERE</span> a<span class="token punctuation">.</span>department_id <span class="token operator">=</span> b<span class="token punctuation">.</span>department_id
<span class="token operator">AND</span> a<span class="token punctuation">.</span>salary <span class="token operator">&gt;</span> b<span class="token punctuation">.</span>salary<span class="token punctuation">;</span>
</code></pre></div><h2 id="_5-思考题" tabindex="-1"><a class="header-anchor" href="#_5-思考题" aria-hidden="true">#</a> 5.思考题</h2>`,35),o=[t];function l(c,r){return a(),n("div",null,o)}const d=s(p,[["render",l],["__file","mysql_basic_09.html.vue"]]);export{d as default};
