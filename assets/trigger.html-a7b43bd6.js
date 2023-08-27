import{_ as s,o as a,c as n,a as e}from"./app-cc209437.js";const p={},t=e(`<h2 id="触发器概述" tabindex="-1"><a class="header-anchor" href="#触发器概述" aria-hidden="true">#</a> 触发器概述</h2><p>  触发器是一个数据库对象，是一个特殊的过程，当特定的事件发生时隐式地执行。</p><p>  MySQL 从 5.0.2 版本开始支持触发器。它的触发器和存储过程一样，都是嵌入到 MySQL 服务器的一段程序。</p><p>  触发器是由事件来触发某个操作，这些事件包括 INSERT、UPDATE、DELETE 事件。所谓事件就是指用户的动作或者触发某项行为。如果定义了触发程序，当数据库执行这些语句时候，就相当于事件发生了，就会自动激发触发器执行相应的操作。</p><p>  当对数据表中的数据执行插入、更新和删除操作，需要自动执行一些数据库逻辑时，可以使用触发器来实现。</p><h2 id="触发器的创建" tabindex="-1"><a class="header-anchor" href="#触发器的创建" aria-hidden="true">#</a> 触发器的创建</h2><p>语法结构：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span>
    <span class="token punctuation">[</span><span class="token keyword">DEFINER</span> <span class="token operator">=</span> <span class="token keyword">user</span><span class="token punctuation">]</span>
    <span class="token keyword">TRIGGER</span> trigger_name
    trigger_time trigger_event
    <span class="token keyword">ON</span> tbl_name <span class="token keyword">FOR EACH ROW</span>
    <span class="token punctuation">[</span>trigger_order<span class="token punctuation">]</span>
    trigger_body

<span class="token comment"># 参数说明</span>
trigger_time: { BEFORE <span class="token operator">|</span> <span class="token keyword">AFTER</span> }
trigger_event: { <span class="token keyword">INSERT</span> <span class="token operator">|</span> <span class="token keyword">UPDATE</span> <span class="token operator">|</span> <span class="token keyword">DELETE</span> }
trigger_order: { FOLLOWS <span class="token operator">|</span> PRECEDES } other_trigger_name
</code></pre></div><hr><p>示例一：创建名称为 before_insert 的触发器，向 test_trigger 数据表插入数据之前，向 test_trigger_log 数据表中插入 before_insert 的日志信息</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> before_insert
BEFORE <span class="token keyword">INSERT</span> <span class="token keyword">ON</span> test_trigger <span class="token keyword">FOR EACH ROW</span>
<span class="token keyword">BEGIN</span>
  <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> test_trigger_log<span class="token punctuation">(</span>t_log<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">&#39;before_insert&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span> <span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre></div><p>示例二：定义触发器 salary_check_trigger，基于员工表 employees 的 INSERT 事件，在 INSERT 之前检查将要添加的新员工薪资是否大于他领导的薪资，如果大于领导薪资，则报 sqlstate_value 为’HY000’的错误，从而使得添加失败</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> salary_check_trigger
BEFORE <span class="token keyword">INSERT</span> <span class="token keyword">ON</span> employees <span class="token keyword">FOR EACH ROW</span>
<span class="token keyword">BEGIN</span>
  <span class="token keyword">DECLARE</span> mar_sal <span class="token keyword">DOUBLE</span><span class="token punctuation">;</span>
  <span class="token keyword">SELECT</span> salary <span class="token keyword">INTO</span> mgr_sal <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> employee_id <span class="token operator">=</span> NEW<span class="token punctuation">.</span>manager_id<span class="token punctuation">;</span>

  <span class="token keyword">IF</span> NEW<span class="token punctuation">.</span>salary <span class="token operator">&gt;</span> mar_sal <span class="token keyword">THEN</span>
    SIGNAL SQLSTATE <span class="token string">&#39;HY000&#39;</span> <span class="token keyword">SET</span> MESSAGE_TEXT <span class="token operator">=</span> <span class="token string">&#39;错误：薪资高于领导薪资&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>

<span class="token keyword">END</span> <span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>上面触发器声明过程中的 NEW 关键字代表 INSERT 添加语句的新记录。</p></div><h2 id="查看、删除触发器" tabindex="-1"><a class="header-anchor" href="#查看、删除触发器" aria-hidden="true">#</a> 查看、删除触发器</h2><h3 id="查看触发器" tabindex="-1"><a class="header-anchor" href="#查看触发器" aria-hidden="true">#</a> 查看触发器</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 查看当前数据库定义的所有触发器</span>
<span class="token keyword">SHOW</span> TRIGGERS<span class="token punctuation">;</span>

<span class="token comment"># 查看当前数据库中某个触发器的定义</span>
<span class="token keyword">SHOW</span> <span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> trigger_name<span class="token punctuation">;</span>

<span class="token comment"># 从系统库information_schema的TRIGGERS表中查询触发器的信息</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> information_schema<span class="token punctuation">.</span>TRIGGERS<span class="token punctuation">;</span>
</code></pre></div><h3 id="删除触发器" tabindex="-1"><a class="header-anchor" href="#删除触发器" aria-hidden="true">#</a> 删除触发器</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TRIGGER</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> trigger_name<span class="token punctuation">;</span>
</code></pre></div><h2 id="触发器的优缺点" tabindex="-1"><a class="header-anchor" href="#触发器的优缺点" aria-hidden="true">#</a> 触发器的优缺点</h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><p>(1) 触发器可以确保数据的完整性；</p><p>(2) 触发器可以帮助我们记录操作日志；</p><p>(3) 触发器可以用在操作数据前，对数据进行合法性检查。</p><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><p>(1) 可读性差；</p><p>(2) 相关数据的变更，可能会导致触发器出错。</p><h3 id="注意点" tabindex="-1"><a class="header-anchor" href="#注意点" aria-hidden="true">#</a> 注意点</h3><p>  如果在子表中定义了外键约束，并且外键指定了 ON UPDATE/DELETE CASCADE/SET NULL 子句，此时修改父表被引用的键值或删除父表被引用的记录行时，也会引起子表的修改和删除操作，此时基于子表的 UPDATE 和 DELETE 语句定义的触发器并不会被激活。</p><p>例如：<br>   基于子表员工表（t_employee）的 DELETE 语句定义了触发器 t1，而子表的部门编号（did）字段定义了外键约束引用了父表部门表（t_department）的主键列部门编号（did），并且该外键加了&quot;ON DELETE SET NULL&quot;子句，那么如果此时删除父表部门表（t_department）在子表员工表（t_employee）有匹配记录的部门记录时，会引起子表员工表（t_employee）匹配记录的部门编号（did）修改为 NULL，但是此时不会激活触发器 t1。只有直接对子表员工表（t_employee）执行 DELETE 语句时才会激活触发器 t1。</p>`,30),o=[t];function r(c,l){return a(),n("div",null,o)}const d=s(p,[["render",r],["__file","trigger.html.vue"]]);export{d as default};
