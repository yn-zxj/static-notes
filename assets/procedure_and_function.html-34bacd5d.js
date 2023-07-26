import{_ as t,j as c,o as l,c as k,f as n,i as s,g as e,w as o,a}from"./app-db88340f.js";const r={},d=a(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>MySQL 从 5.0 版本开始支持存储过程和函数。存储过程和函数能够将复杂的 SQL 逻辑封装在一起，应用程序无须关注存储过程和函数内部复杂的 SQL 逻辑，而只需要简单地调用存储过程和函数即可。</p></div><h2 id="存储过程概述" tabindex="-1"><a class="header-anchor" href="#存储过程概述" aria-hidden="true">#</a> 存储过程概述</h2><h3 id="理解" tabindex="-1"><a class="header-anchor" href="#理解" aria-hidden="true">#</a> 理解</h3><p><strong>含义</strong>：存储过程(Stored Procedure)，就是一组经过预先编译的 SQL 语句的封装。</p><p><strong>执行过程</strong>：存储过程预先存储在 MySQL 服务器上，需要执行的时候，客户端只需要向服务器端发出调用存储过程的命令，服务器端就可以把预先存储好的这一系列 SQL 语句全部执行。</p><p><strong>好处</strong>：<br>  ① 简化操作，提高了 SQL 语句的复用性，减少了开发人员的压力；<br>  ② 减少操作过程中的失误，提高效率；<br>  ③ 减少网络传输量(客户端不需要把所有的 SQL 语句通过网格发给服务器)；<br>  ④ 减少了 SQL 语句暴露在网上的风险，也提高了数据查询的安全性；</p><p><strong>与视图、函数的对比</strong>：<br>   它和视图有着同样的优点，清晰、安全，还可以减少网络传输量。不过它和视图不同，视图是<mark>虚拟表</mark>，通常不对底层数据表直接操作，而存储过程是程序化的 SQL，可以<mark>直接操作底层数据表</mark>，相比于面向集合的操作方式，能够实现一些更复杂的数据处理。</p><p>  一旦存储过程被创建出来，使用它就像使用函数一样简单，我们直接通过调用存储过程名即可。相较于函数，存储过程是<mark>没有返回值</mark>的。</p><h3 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h3><p>存储过程的参数类型可以是 IN、OUT 和 INOUT。根据这点分类如下：<br> ① 没有参数（无参数无返回）<br> ② 仅仅带 IN 类型（有参数无返回）<br> ③ 仅仅带 OUT 类型（无参数有返回）<br> ④ 既带 IN 又带 OUT（有参数有返回）<br> ⑤ 带 INOUT（有参数有返回）</p><blockquote><p>注意：IN、OUT、INOUT 都可以在一个存储过程中带多个。</p></blockquote><h2 id="存储过程的使用" tabindex="-1"><a class="header-anchor" href="#存储过程的使用" aria-hidden="true">#</a> 存储过程的使用</h2><h3 id="语法分析" tabindex="-1"><a class="header-anchor" href="#语法分析" aria-hidden="true">#</a> 语法分析</h3><p><strong>语法</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span>
    <span class="token punctuation">[</span><span class="token keyword">DEFINER</span> <span class="token operator">=</span> <span class="token keyword">user</span><span class="token punctuation">]</span>
    <span class="token keyword">PROCEDURE</span> sp_name <span class="token punctuation">(</span><span class="token punctuation">[</span>proc_parameter<span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">[</span>characteristic <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span> routine_body

<span class="token comment"># 参数说明</span>
proc_parameter:
    <span class="token punctuation">[</span> <span class="token operator">IN</span> <span class="token operator">|</span> <span class="token keyword">OUT</span> <span class="token operator">|</span> <span class="token keyword">INOUT</span> <span class="token punctuation">]</span> param_name <span class="token keyword">type</span>

<span class="token keyword">type</span>:
    <span class="token keyword">Any</span> valid MySQL <span class="token keyword">data</span> <span class="token keyword">type</span>

characteristic: {
    <span class="token keyword">COMMENT</span> <span class="token string">&#39;string&#39;</span>
  <span class="token operator">|</span> <span class="token keyword">LANGUAGE</span> <span class="token keyword">SQL</span>
  <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token operator">NOT</span><span class="token punctuation">]</span> <span class="token keyword">DETERMINISTIC</span>
  <span class="token operator">|</span> { <span class="token keyword">CONTAINS</span> <span class="token keyword">SQL</span> <span class="token operator">|</span> <span class="token keyword">NO</span> <span class="token keyword">SQL</span> <span class="token operator">|</span> <span class="token keyword">READS</span> <span class="token keyword">SQL</span> <span class="token keyword">DATA</span> <span class="token operator">|</span> <span class="token keyword">MODIFIES</span> <span class="token keyword">SQL</span> <span class="token keyword">DATA</span> }
  <span class="token operator">|</span> <span class="token keyword">SQL</span> SECURITY { <span class="token keyword">DEFINER</span> <span class="token operator">|</span> <span class="token keyword">INVOKER</span> }
}

routine_body:
    Valid <span class="token keyword">SQL</span> <span class="token keyword">routine</span> statement
</code></pre></div><hr><p><strong>说明</strong>：<br> (1) 参数名(param_name)前面的符号说明</p><blockquote><p><code>IN</code>：当前参数为输入参数，也可以叫入参；<br><code>OUT</code>：当前参数为输出参数，也可以叫出参；<br><code>INOUT</code>：当前参数既可以为输入参数，也可以为输出参数；</p></blockquote><p>(2) 形参类型(type)可以是 MySQL 数据类型中的任一类型；</p><p>(3) <code>characteristics</code>表示创建存储过程时指定的对存储过程的约束条件</p><blockquote><p>① <code>LANGUAGE SQL</code>：说明存储过程执行体是由 SQL 语句组成的，当前系统支持的语言为 SQL；<br> ② <code>[NOT] DETERMINISTIC</code>：指明存储过程执行的结果是否确定。每次执行存储过程，相同的输入会得到相同的输出，则表示结果是确定的(DETERMINISTIC)；反之则是不确定(NOT DETERMINISTIC)，如果没有指定默认为<code>NOT DETERMINISTIC</code>；<br> ③ <code>{ CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }</code>：指明子程序使用 SQL 语句的限制；默认情况下，系统会指定为<code>CONTAINS SQL</code>；</p><ul><li><code>CONTAINS SQL</code>：表示当前存储过程的子程序包含 SQL 语句，但是并不包含读写数据的 SQL 语句；</li><li><code>NO SQL</code>：表示当前存储过程的子程序中不包含任何 SQL 语句；</li><li><code>READS SQL DATA</code>：表示当前存储过程的子程序中包含读数据的 SQL 语句；</li><li><code>MODIFIES SQL DATA</code>：表示当前存储过程的子程序中包含写数据的 SQL 语句。</li></ul><p>④ <code>SQL SECURITY { DEFINER | INVOKER }</code>：执行当前存储过程的权限，即指明哪些用户能够执行当前存储过程；如果没有设置相关的值，则 MySQL 默认指定值为<code>DEFINER</code>；</p><ul><li><code>DEFINER</code>：表示只有当前存储过程的创建者或者定义者才能执行当前存储过程；</li><li><code>INVOKER</code>：表示拥有当前存储过程的访问权限的用户能够执行当前存储过程。</li></ul><p>⑤ <code>COMMENT &#39;string&#39;</code>：注释信息，可以用来描述存储过程。</p></blockquote><p>(4) 存储过程体中可以有多条 SQL 语句，如果仅仅一条 SQL 语句，则可以省略 BEGIN 和 END；复杂的可能包含下面内容：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">BEGIN</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token keyword">END</span> <span class="token comment"># 中间包含了多个语句，每个语句都以（;）号为结束符</span>
<span class="token keyword">DECLARE</span> <span class="token comment"># 用来声明变量</span>
<span class="token keyword">SET</span> <span class="token comment"># 赋值语句，用于对变量进行赋值</span>
<span class="token keyword">SELECT</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">INTO</span> <span class="token comment"># 把从数据表中查询的结果存放到变量中，也就是为变量赋值</span>
</code></pre></div><p>(5) 可能需要设置新的结束标记，因为 MySQL 默认的语句结束符号为分号<code>;</code>。为了避免与存储过程中 SQL 语句结束符相冲突，需要使用<code>DELIMITER</code>改变存储过程的结束符。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> 新的结束标记

<span class="token comment"># 示例</span>
<span class="token keyword">DELIMITER</span> $

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> 存储过程名<span class="token punctuation">(</span><span class="token operator">IN</span><span class="token operator">|</span><span class="token keyword">OUT</span><span class="token operator">|</span><span class="token keyword">INOUT</span> 参数名 参数类型<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span>characteristics <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
<span class="token keyword">BEGIN</span>
  <span class="token keyword">sql</span>语句<span class="token punctuation">;</span>
<span class="token keyword">END</span> $

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre></div><hr><h3 id="调用存储过程" tabindex="-1"><a class="header-anchor" href="#调用存储过程" aria-hidden="true">#</a> 调用存储过程</h3><p><strong>语法</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CALL</span> sp_name<span class="token punctuation">(</span><span class="token punctuation">[</span>parameter<span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">CALL</span> sp_name<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">如何调试?</p><p>  在 MySQL 中，存储过程不像普通的编程语言（比如 VC++、Java 等）那样有专门的集成开发环境。因此，你可以通过 SELECT 语句，把程序执行的中间结果查询出来，来调试一个 SQL 语句的正确性。调试成功之后，把 SELECT 语句后移到下一个 SQL 语句之后，再调试下一个 SQL 语句。这样<mark>逐步推进</mark>，就可以完成对存储过程中所有操作的调试了。当然，你也可以把存储过程中的 SQL 语句复制出来，逐段单独调试。</p></div><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><p>(1) 创建存储过程 select_all_data()，查看 emps 表的所有数据</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 无参无返回</span>
<span class="token keyword">DELIMITER</span> $

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> select_all_data<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">BEGIN</span>
    <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> emps<span class="token punctuation">;</span>
  <span class="token keyword">END</span> $

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre></div><p><strong>调用</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CALL</span> select_all_data<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><hr><p>(2) 创建存储过程 avg_employee_salary()，返回所有员工的平均工资</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 无参无返回</span>
<span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> avg_employee_salary<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">BEGIN</span>
    <span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">FROM</span> emps<span class="token punctuation">;</span>
  <span class="token keyword">END</span> <span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre></div><p><strong>调用</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CALL</span> avg_employee_salary<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><hr><p>(3) 创建存储过程 show_max_salary()，用来查看 emps 表的最高薪资值</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 无参无返回</span>
<span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> show_max_salary<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">LANGUAGE</span> <span class="token keyword">SQL</span>
  <span class="token operator">NOT</span> <span class="token keyword">DETERMINISTIC</span>
  <span class="token keyword">CONTAINS</span> <span class="token keyword">SQL</span>
  <span class="token keyword">SQL</span> SECURITY <span class="token keyword">DEFINER</span>
  <span class="token keyword">COMMENT</span> <span class="token string">&#39;查看最高薪资&#39;</span>
  <span class="token keyword">BEGIN</span>
    <span class="token keyword">SELECT</span> <span class="token function">MAX</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">FROM</span> emps<span class="token punctuation">;</span>
  <span class="token keyword">END</span> <span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre></div><p><strong>调用</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CALL</span> show_max_salary<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><hr><p>(4) 创建存储过程 show_min_salary()，查看 emps 表的最低薪资值，并将最低薪资通过 OUT 参数 ms 输出</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 无参有返回</span>
<span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> show_min_salary<span class="token punctuation">(</span><span class="token keyword">OUT</span> ms <span class="token keyword">DOUBLE</span><span class="token punctuation">)</span>
  <span class="token keyword">BEGIN</span>
    <span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">INTO</span> ms <span class="token keyword">FROM</span> emps<span class="token punctuation">;</span>
  <span class="token keyword">END</span> <span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre></div><p><strong>调用</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CALL</span> show_min_salary<span class="token punctuation">(</span><span class="token variable">@ms</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token variable">@ms</span><span class="token punctuation">;</span>
</code></pre></div><hr><p>(5) 创建存储过程 show_someone_salary()，查看 emps 表的某个员工的薪资，并用 IN 参数 empname 输入员工姓名</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 有参无返回</span>
<span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> show_someone_salary<span class="token punctuation">(</span><span class="token operator">IN</span> empname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">BEGIN</span>
    <span class="token keyword">SELECT</span> salary <span class="token keyword">FROM</span> emps <span class="token keyword">WHERE</span> ename <span class="token operator">=</span> empname<span class="token punctuation">;</span>
  <span class="token keyword">END</span> <span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre></div><p><strong>调用</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CALL</span> show_someone_salary<span class="token punctuation">(</span><span class="token string">&#39;Adel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># 或</span>
<span class="token keyword">SET</span> <span class="token variable">@empname</span> <span class="token operator">=</span> <span class="token string">&#39;Adel&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">CALL</span> show_someone_salary<span class="token punctuation">(</span><span class="token variable">@empname</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><hr><p>(6) 创建存储过程 show_someone_salary2()，查看 emps 表的某个员工的薪资，并用 IN 参数 empname 输入员工姓名，用 OUT 参数 empsalary 输出员工薪资</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 有参有返回</span>
<span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> show_someone_salary2<span class="token punctuation">(</span><span class="token operator">IN</span> empname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">OUT</span> empsalary <span class="token keyword">DOUBLE</span><span class="token punctuation">)</span>
  <span class="token keyword">BEGIN</span>
    <span class="token keyword">SELECT</span> salary <span class="token keyword">INTO</span> empsalary <span class="token keyword">FROM</span> emps <span class="token keyword">WHERE</span> ename <span class="token operator">=</span> empname<span class="token punctuation">;</span>
  <span class="token keyword">END</span> <span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre></div><p><strong>调用</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CALL</span> show_someone_salary2<span class="token punctuation">(</span><span class="token string">&#39;Adel&#39;</span><span class="token punctuation">,</span> <span class="token variable">@empsalary</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token variable">@empsalary</span><span class="token punctuation">;</span>
<span class="token comment"># 或</span>
<span class="token keyword">SET</span> <span class="token variable">@empname</span> <span class="token operator">=</span> <span class="token string">&#39;Adel&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">CALL</span> show_someone_salary2<span class="token punctuation">(</span><span class="token variable">@empname</span><span class="token punctuation">,</span> <span class="token variable">@empsalary</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token variable">@empsalary</span><span class="token punctuation">;</span>
</code></pre></div><hr><p>(7) 创建存储过程 show_mgr_name()，查询某个员工领导的姓名，并用 INOUT 参数 empname 输入员工姓名，输出领导的姓名</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 有参有返回</span>
<span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> show_mgr_name<span class="token punctuation">(</span><span class="token keyword">INOUT</span> empname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">BEGIN</span>
    <span class="token keyword">SELECT</span> ename <span class="token keyword">INTO</span> empname
    <span class="token keyword">FROM</span> emps
    <span class="token keyword">WHERE</span> eid <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> mid <span class="token keyword">FROM</span> emps <span class="token keyword">WHERE</span> ename <span class="token operator">=</span> empname<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">END</span> <span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre></div><p><strong>调用</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> <span class="token variable">@empname</span> <span class="token operator">=</span> <span class="token string">&#39;Adel&#39;</span>
<span class="token keyword">CALL</span> show_mgr_name<span class="token punctuation">(</span><span class="token variable">@empname</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token variable">@empname</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="存储函数的使用" tabindex="-1"><a class="header-anchor" href="#存储函数的使用" aria-hidden="true">#</a> 存储函数的使用</h2><h3 id="语法分析-1" tabindex="-1"><a class="header-anchor" href="#语法分析-1" aria-hidden="true">#</a> 语法分析</h3><p><strong>语法</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span>
    <span class="token punctuation">[</span><span class="token keyword">DEFINER</span> <span class="token operator">=</span> <span class="token keyword">user</span><span class="token punctuation">]</span>
    <span class="token keyword">FUNCTION</span> sp_name <span class="token punctuation">(</span><span class="token punctuation">[</span>func_parameter<span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">RETURNS</span> <span class="token keyword">type</span>
    <span class="token punctuation">[</span>characteristic <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span> routine_body

<span class="token comment"># 参数说明</span>
func_parameter:
    param_name <span class="token keyword">type</span>

<span class="token keyword">type</span>:
    <span class="token keyword">Any</span> valid MySQL <span class="token keyword">data</span> <span class="token keyword">type</span>

characteristic: {
    <span class="token keyword">COMMENT</span> <span class="token string">&#39;string&#39;</span>
  <span class="token operator">|</span> <span class="token keyword">LANGUAGE</span> <span class="token keyword">SQL</span>
  <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token operator">NOT</span><span class="token punctuation">]</span> <span class="token keyword">DETERMINISTIC</span>
  <span class="token operator">|</span> { <span class="token keyword">CONTAINS</span> <span class="token keyword">SQL</span> <span class="token operator">|</span> <span class="token keyword">NO</span> <span class="token keyword">SQL</span> <span class="token operator">|</span> <span class="token keyword">READS</span> <span class="token keyword">SQL</span> <span class="token keyword">DATA</span> <span class="token operator">|</span> <span class="token keyword">MODIFIES</span> <span class="token keyword">SQL</span> <span class="token keyword">DATA</span> }
  <span class="token operator">|</span> <span class="token keyword">SQL</span> SECURITY { <span class="token keyword">DEFINER</span> <span class="token operator">|</span> <span class="token keyword">INVOKER</span> }
}

routine_body:
    Valid <span class="token keyword">SQL</span> <span class="token keyword">routine</span> statement
</code></pre></div><hr><p><strong>说明</strong>：<br> (1) 参数列表：指定参数为<code>IN</code>、<code>OUT</code>或<code>INOUT</code>只对 PROCEDURE 是合法的，FUNCTION 中总是默认为<code>IN</code>参数；</p><p>(2) <code>RETURNS type</code>语句表示函数返回的数据的类型；</p><blockquote><p>RETURNS 子句只能对 FUNCTION 做指定，对函数而言这是强制的。它用来指定函数的返回类型，而且函数体必须包含一个<code>RETURN value</code>语句；</p></blockquote>`,73),u=n("code",null,"characteristic",-1),i=a(`<p>(4) 函数体也可以用<code>BEGIN...END</code>来表示 SQL 代码的开始和结束。如果函数体只有一条语句，也可以省略<code>BEGIN...END</code>。</p><hr><h3 id="调用存储函数" tabindex="-1"><a class="header-anchor" href="#调用存储函数" aria-hidden="true">#</a> 调用存储函数</h3><p>在 MySQL 中，存储函数的使用方法与 MySQL 内部函数的使用方法是一样的。换言之，用户自己定义的存储函数与 MySQL 内部函数是一个性质的。区别在于，存储函数是用户自己定义的，而内部函数是 MySQL 的开发者定义的。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 函数名<span class="token punctuation">(</span>实参列表<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h3><p>(1) 创建存储函数，名称为 email_by_name()，参数定义为空，该函数查询 Abel 的 email，并返回，数据类型为字符串型。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">FUNCTION</span> email_by_name<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">RETURNS</span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span>
<span class="token keyword">DETERMINISTIC</span>
<span class="token keyword">CONTAINS</span> <span class="token keyword">SQL</span>
<span class="token keyword">BEGIN</span>
  <span class="token keyword">RETURN</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> email <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> last_name <span class="token operator">=</span> <span class="token string">&#39;Abel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span> <span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre></div><p><strong>调用</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> email_by_name<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><hr><p>(2) 创建存储函数，名称为 email_by_id()，参数传入 emp_id，该函数查询 emp_id 的 email，并返回，数据类型为字符串型。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">FUNCTION</span> email_by_id<span class="token punctuation">(</span>emp_id <span class="token keyword">INT</span><span class="token punctuation">)</span>
<span class="token keyword">RETURNS</span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span>
<span class="token keyword">DETERMINISTIC</span>
<span class="token keyword">CONTAINS</span> <span class="token keyword">SQL</span>
<span class="token keyword">BEGIN</span>
  <span class="token keyword">RETURN</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> email <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> employee_id <span class="token operator">=</span> emp_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span> <span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre></div><p><strong>调用</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> <span class="token variable">@emp_id</span> <span class="token operator">=</span> <span class="token number">102</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> email_by_id<span class="token punctuation">(</span><span class="token variable">@emp_id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># 或</span>
<span class="token keyword">SELECT</span> email_by_id<span class="token punctuation">(</span><span class="token number">102</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><hr><p>(3) 创建存储函数 count_by_id()，参数传入 dept_id，该函数查询 dept_id 部门的员工人数，并返回，数据类型为整型。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">FUNCTION</span> count_by_id<span class="token punctuation">(</span>dept_id <span class="token keyword">INT</span><span class="token punctuation">)</span>
<span class="token keyword">RETURNS</span> <span class="token keyword">INT</span>
<span class="token keyword">LANGUAGE</span> <span class="token keyword">SQL</span>
<span class="token operator">NOT</span> <span class="token keyword">DETERMINISTIC</span>
<span class="token keyword">READS</span> <span class="token keyword">SQL</span> <span class="token keyword">DATA</span>
<span class="token keyword">SQL</span> SECURITY <span class="token keyword">DEFINER</span>
<span class="token keyword">COMMENT</span> <span class="token string">&#39;查询部门平均工资&#39;</span>
<span class="token keyword">BEGIN</span>
  <span class="token keyword">RETURN</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> departmant_id <span class="token operator">=</span> dept_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span> <span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre></div><p><strong>调用</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> <span class="token variable">@dept_id</span> <span class="token operator">=</span> <span class="token number">50</span> <span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> count_by_id<span class="token punctuation">(</span><span class="token variable">@dept_id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># 或</span>
<span class="token keyword">SELECT</span> count_by_id<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>若在创建存储函数中报错<code>you might want to use the less safe log_bin_trust_function_creators variable</code>，有两种处理方法：<br><strong>方式一</strong>：加上必要的函数特性<code>[NOT] DETERMINISTIC</code>和<code>{CONTAINS SQL | NO SQL | READS SQL DATA |MODIFIES SQL DATA}</code><br><strong>方式二</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> log_bin_trust_function_creators <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div></div><h2 id="对比存储函数和存储过程" tabindex="-1"><a class="header-anchor" href="#对比存储函数和存储过程" aria-hidden="true">#</a> 对比存储函数和存储过程</h2><table><thead><tr><th></th><th>关键字</th><th>调用语法</th><th>返回值</th></tr></thead><tbody><tr><td>存储过程</td><td><code>PROCEDURE</code></td><td><code>CALL 存储过程()</code></td><td>理解为有 0 个或多个</td></tr><tr><td>存储函数</td><td><code>FUNCTION</code></td><td><code>SELECT 函数()</code></td><td>只能是一个</td></tr></tbody></table><blockquote><p>此外，<mark>存储函数可以放在查询语句中使用，存储过程不行</mark>。反之，存储过程的功能更加强大，包括能够执行对表的操作（比如创建表，删除表等）和事务操作，这些功能是存储函数不具备的。</p></blockquote><h2 id="存储过程和函数的查看、修改和删除" tabindex="-1"><a class="header-anchor" href="#存储过程和函数的查看、修改和删除" aria-hidden="true">#</a> 存储过程和函数的查看、修改和删除</h2><h3 id="查看" tabindex="-1"><a class="header-anchor" href="#查看" aria-hidden="true">#</a> 查看</h3><p>(1) <code>SHOW CREATE</code>语句查看创建信息</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> <span class="token keyword">CREATE</span> { <span class="token keyword">PROCEDURE</span> <span class="token operator">|</span> <span class="token keyword">FUNCTION</span> } proc_name <span class="token operator">or</span> func_name<span class="token punctuation">;</span>

<span class="token comment"># 例如</span>
<span class="token keyword">SHOW</span> <span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> show_max_salary<span class="token punctuation">;</span>
<span class="token keyword">SHOW</span> <span class="token keyword">CREATE</span> <span class="token keyword">FUNCTION</span> email_by_id<span class="token punctuation">;</span>
</code></pre></div><p>(2) <code>SHOW STATUS</code>语句查看状态信息</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> { <span class="token keyword">PROCEDURE</span> <span class="token operator">|</span> <span class="token keyword">FUNCTION</span> } <span class="token keyword">STATUS</span> <span class="token punctuation">[</span><span class="token operator">LIKE</span> <span class="token string">&#39;pattern&#39;</span> <span class="token operator">|</span> <span class="token keyword">WHERE</span> expr<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment"># 例如</span>
<span class="token keyword">SHOW</span> <span class="token keyword">PROCEDURE</span> <span class="token keyword">STATUS</span> <span class="token operator">LIKE</span> <span class="token string">&#39;show%&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">SHOW</span> <span class="token keyword">FUNCTION</span> <span class="token keyword">STATUS</span> <span class="token operator">LIKE</span> <span class="token string">&#39;email_by_id%&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">SHOW</span> <span class="token keyword">PROCEDURE</span> <span class="token keyword">STATUS</span> <span class="token keyword">WHERE</span> Name <span class="token operator">=</span> <span class="token string">&#39;show_max_salary&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">SHOW</span> <span class="token keyword">FUNCTION</span> <span class="token keyword">STATUS</span> <span class="token keyword">WHERE</span> Name <span class="token operator">=</span> <span class="token string">&#39;email_by_id&#39;</span><span class="token punctuation">;</span>
</code></pre></div><blockquote><p>返回子程序的特征，如数据库、名字、类型、创建者及创建和修改日期。</p></blockquote><p>(3) 从<code>information_schema.Routines</code>查看</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> information_schema<span class="token punctuation">.</span>Routines
<span class="token keyword">WHERE</span> ROUTINE_NAME <span class="token operator">=</span> <span class="token string">&#39;proc_name or func_name&#39;</span> <span class="token punctuation">[</span><span class="token operator">AND</span> ROUTINE_TYPE <span class="token operator">=</span> { <span class="token string">&#39;PROCEDURE | FUNCTION&#39;</span> }<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment"># 例如</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> information_schema<span class="token punctuation">.</span>Routines <span class="token keyword">WHERE</span> ROUTINE_NAME <span class="token operator">=</span> <span class="token string">&#39;show_max_salary&#39;</span> <span class="token operator">AND</span> ROUTINE_TYPE <span class="token operator">=</span> <span class="token string">&#39;PROCEDURE&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> information_schema<span class="token punctuation">.</span>Routines <span class="token keyword">WHERE</span> ROUTINE_NAME <span class="token operator">=</span> <span class="token string">&#39;email_by_id&#39;</span> <span class="token operator">AND</span> ROUTINE_TYPE <span class="token operator">=</span> <span class="token string">&#39;FUNCTION&#39;</span><span class="token punctuation">;</span>
</code></pre></div><blockquote><p>MySQL 中存储过程和函数的信息存储在<code>information_schema</code>数据库下的<code>Routines</code>表中。可以通过查询该表的记录来查询存储过程和函数的信息。</p></blockquote><h3 id="修改" tabindex="-1"><a class="header-anchor" href="#修改" aria-hidden="true">#</a> 修改</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> { <span class="token keyword">PROCEDURE</span> proc_name <span class="token operator">|</span> <span class="token keyword">FUNCTION</span> func_name } <span class="token punctuation">[</span>characteristic <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>

<span class="token comment"># 参数说明</span>
characteristic: {
    <span class="token keyword">COMMENT</span> <span class="token string">&#39;string&#39;</span>
  <span class="token operator">|</span> <span class="token keyword">LANGUAGE</span> <span class="token keyword">SQL</span>
  <span class="token operator">|</span> { <span class="token keyword">CONTAINS</span> <span class="token keyword">SQL</span> <span class="token operator">|</span> <span class="token keyword">NO</span> <span class="token keyword">SQL</span> <span class="token operator">|</span> <span class="token keyword">READS</span> <span class="token keyword">SQL</span> <span class="token keyword">DATA</span> <span class="token operator">|</span> <span class="token keyword">MODIFIES</span> <span class="token keyword">SQL</span> <span class="token keyword">DATA</span> }
  <span class="token operator">|</span> <span class="token keyword">SQL</span> SECURITY { <span class="token keyword">DEFINER</span> <span class="token operator">|</span> <span class="token keyword">INVOKER</span> }
}
</code></pre></div>`,36),y=n("p",null,"修改存储过程或函数，不影响存储过程或函数功能，只是修改相关特性。如果需要对其参数和主体进行修改，需要先删除，然后在创建新的。",-1),E=a(`<hr><p><strong>示例</strong>：<br> (1) 修改存储过程 CountProc 的定义。将读写权限改为<code>MODIFIES SQL DATA</code>，并指明定义者可以执行；</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">PROCEDURE</span> CountProc
<span class="token keyword">MODIFIES</span> <span class="token keyword">SQL</span> <span class="token keyword">DATA</span>
<span class="token keyword">SQL</span> SECURITY <span class="token keyword">DEFINER</span><span class="token punctuation">;</span>
</code></pre></div><p>(2) 修改存储函数 CountProc 的定义。将读写权限改为<code>READS SQL DATA</code>，并加上注释信息<code>FIND NAME</code>。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">FUNCTION</span> CountProc
<span class="token keyword">READS</span> <span class="token keyword">SQL</span> <span class="token keyword">DATA</span>
<span class="token keyword">COMMENT</span> <span class="token string">&#39;FIND NAME&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h3><p>删除存储过程和函数，可以使用<code>DROP</code>语句，其语法结构如下：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> { <span class="token keyword">PROCEDURE</span> <span class="token operator">|</span> <span class="token keyword">FUNCTION</span> } <span class="token punctuation">[</span><span class="token keyword">IF</span> <span class="token keyword">EXISTS</span><span class="token punctuation">]</span> sp_name<span class="token punctuation">;</span>
</code></pre></div><p><strong>示例</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">PROCEDURE</span> CountProc<span class="token punctuation">;</span>
<span class="token keyword">DROP</span> <span class="token keyword">FUNCTION</span> CountProc<span class="token punctuation">;</span>
</code></pre></div><h2 id="关于存储过程使用的争议" tabindex="-1"><a class="header-anchor" href="#关于存储过程使用的争议" aria-hidden="true">#</a> 关于存储过程使用的争议</h2><p>  尽管存储过程有诸多优点，但是对于存储过程的使用，一直都存在着很多争议，比如有些公司对于大型项目要求使用存储过程，而有些公司在手册中明确禁止使用存储过程，为什么这些公司对存储过程的使用需求差别这么大呢？</p><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><p>(1) <strong>存储过程可以一次编译多次使用</strong><br> 存储过程只在创建时进行编译，之后的使用都不需要重新编译，这就提升了 SQL 的执行效率。</p><p>(2) <strong>可以减少开发工作量</strong><br> 将代码封装成模块，实际上是编程的核心思想之一，这样可以把复杂的问题拆解成不同的模块，然后模块之间可以重复使用，在减少开发工作量的同时，还能保证代码的结构清晰。</p><p>(3) <strong>存储过程的安全性强</strong><br> 我们在设定存储过程的时候可以设置对用户的使用权限，这样就和视图一样具有较强的安全性。</p><p>(4) <strong>可以减少网络传输量</strong><br> 因为代码封装到存储过程中，每次使用只需要调用存储过程即可，这样就减少了网络传输量。</p><p>(5) <strong>良好的封装性</strong><br> 在进行相对复杂的数据库操作时，原本需要使用一条一条的 SQL 语句，可能要连接多次数据库才能完成的操作，现在变成了一次存储过程，只需要连接一次即可。</p><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><p>基于上面这些优点，不少大公司都要求大型项目使用存储过程，比如微软、IBM 等公司。但是国内的阿里并不推荐开发人员使用存储过程，这是为什么呢？</p><blockquote><p>阿里开发规范<br> 【强制】禁止使用存储过程，存储过程难以调试和扩展，更没有移植性。</p></blockquote><p><u>存储过程虽然有诸如上面的好处，但缺点也是很明显</u>：</p><p>(1) <strong>可移植性差</strong><br> 存储过程不能跨数据库移植，比如在 MySQL、Oracle 和 SQL Server 里编写的存储过程，在换成其他数据库时都需要重新编写。</p><p>(2) <strong>调试困难</strong><br> 只有少数 DBMS 支持存储过程的调试。对于复杂的存储过程来说，开发和维护都不容易。虽然也有一些第三方工具可以对存储过程进行调试，但要收费。</p><p>(3) <strong>存储过程的版本管理很困难</strong><br> 比如数据表索引发生变化了，可能会导致存储过程失效。我们在开发软件的时候往往需要进行版本管理，但是存储过程本身没有版本控制，版本迭代更新的时候很麻烦。</p><p>(4) <strong>它不适合高并发的场景</strong><br> 高并发的场景需要减少数据库的压力，有时数据库会采用分库分表的方式，而且对可扩展性要求很高，在这种情况下，存储过程会变得难以维护，增加数据库的压力，显然就不适用了。</p><div class="hint-container tip"><p class="hint-container-title">小结</p><p>存储过程虽然方便，但也有一定的局限性。尽管不同的公司对存储过程的态度不一，但是对于我们开发人员来说，不论怎样，掌握存储过程都是必备的技能之一。</p></div>`,27);function w(m,g){const p=c("RouterLink");return l(),k("div",null,[d,n("p",null,[s("(3) "),u,s("创建函数时指定的对函数的约束。取值与创建存储过程时相同，可以看上面存储过程("),e(p,{to:"/backend/database/base/procedure_and_function.html#%E8%AF%AD%E6%B3%95%E5%88%86%E6%9E%90"},{default:o(()=>[s("2.1 语法分析")]),_:1}),s(")的说明；")]),i,n("blockquote",null,[y,n("p",null,[s("🐼 参数说明可以看("),e(p,{to:"/backend/database/base/procedure_and_function.html#%E8%AF%AD%E6%B3%95%E5%88%86%E6%9E%90"},{default:o(()=>[s("2.1 语法分析")]),_:1}),s(")中的说明的第三点")])]),E])}const I=t(r,[["render",w],["__file","procedure_and_function.html.vue"]]);export{I as default};
