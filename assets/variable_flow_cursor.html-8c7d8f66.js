import{_ as c,M as l,Y as k,a0 as s,a1 as n,Z as a,$ as r,a2 as e,C as o}from"./framework-0d8205ef.js";const u="/assets/system_variables-483616e8.png",d={},i=s("h2",{id:"_1-变量",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-变量","aria-hidden":"true"},"#"),n(" 1.变量")],-1),E=s("p",null,[n("  在 MySQL 数据库的存储过程和函数中，可以使用变量来存储查询或计算的中间结果数据，或者输出最终的结果数据。在 MySQL 数据库中，变量分为"),s("code",null,"系统变量"),n("以及用户"),s("code",null,"自定义变量"),n("。")],-1),m=s("h3",{id:"_1-1-系统变量",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-1-系统变量","aria-hidden":"true"},"#"),n(" 1.1 系统变量")],-1),y=s("p",null,"  变量由系统定义，不是用户定义，属于服务器层面。启动 MySQL 服务，生成 MySQL 服务实例期间，MySQL 将为 MySQL 服务器内存中的系统变量赋值，这些系统变量定义了当前 MySQL 服务实例的属性、特征。这些系统变量的值要么是编译 MySQL 时参数的默认值，要么是配置文件（例如 my.ini 等）中的参数值。",-1),w=s("br",null,null,-1),_={href:"https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html",target:"_blank",rel:"noopener noreferrer"},L=s("br",null,null,-1),S={href:"https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html",target:"_blank",rel:"noopener noreferrer"},g=e('<p>  系统变量分为<mark>全局系统变量</mark>（需要添加 global 关键字）以及<mark>会话系统变量</mark>（需要添加 session 关键字），<u>有时也把全局系统变量简称为全局变量，有时也把会话系统变量称为 local 变量</u>。 如果不写，<mark>默认会话级别</mark>。 静态变量（在 MySQL 服务实例运行期间它们的值不能使用 set 动态修改）属于特殊的全局系统变量。<br>   在 MySQL 中有些系统变量只能是全局的，例如<code>max_connections</code>用于限制服务器的最大连接数；有些系统变量作用域既可以是全局又可以是会话，例如 <code>character_set_client</code>用于设置客户端的字符集；有些系统变量的作用域只能是当前会话，例如<code>pseudo_thread_id</code>用于标记当前会话的 MySQL 连接 ID。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>每一个 MySQL 客户机成功连接 MySQL 服务器后，都会产生与之对应的会话。会话期间，MySQL 服务实例会在 MySQL 服务器内存中生成与该会话对应的会话系统变量，这些会话系统变量的初始值是全局系统变量值的复制。如下图：</p><figure><img src="'+u+`" alt="System Variables.png" width="450" tabindex="0" loading="lazy"><figcaption>System Variables.png</figcaption></figure><p>① 全局系统变量针对于所有会话(连接)有效，但<mark>不能跨重启</mark>；</p><p>② 会话 1 对某个全局系统变量值的修改会导致会话 2 中同一个全局系统变量值的修改。</p><p>③ 会话系统变量仅针对于当前会话(连接)有效。会话期间，当前会话对某个会话系统变量值的修改，不会影响其他会话同一个会话系统变量的值。</p></div><hr><p><strong>查看系统变量</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># GLOBAL：全局系统变量</span>
<span class="token comment"># SESSION：会话系统变量</span>
<span class="token keyword">SHOW</span> <span class="token punctuation">[</span><span class="token keyword">GLOBAL</span> <span class="token operator">|</span> <span class="token keyword">SESSION</span><span class="token punctuation">]</span> VARIABLES <span class="token punctuation">[</span><span class="token operator">LIKE</span> <span class="token string">&#39;pattern&#39;</span> <span class="token operator">|</span> <span class="token keyword">WHERE</span> expr<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment"># 省略[GLOBAL | SESSION]，默认查询会话变量</span>
<span class="token keyword">SHOW</span> VARIABLES<span class="token punctuation">;</span> <span class="token comment"># 查询所有的会话变量</span>

<span class="token comment"># 例如</span>
<span class="token keyword">SHOW</span> <span class="token keyword">GLOBAL</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">&#39;%size%&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">SHOW</span> <span class="token keyword">SESSION</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">&#39;max_join_size&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">SHOW</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">&#39;max_join_size&#39;</span><span class="token punctuation">;</span>
</code></pre></div><hr><p><strong>查看指定系统变量</strong>：</p><p>  作为 MySQL 编码规范，MySQL 中的系统变量以两个<code>@</code>开头，其中<code>@@GLOBAL</code>仅用于标记全局系统变量，<code>@@SESSION</code>仅用于标记会话系统变量。<code>@@</code>首先标记会话系统变量，如果会话系统变量不存在，则标记全局系统变量。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 查看全局系统变量或会话系统变量的值</span>
<span class="token keyword">SELECT</span> @@<span class="token punctuation">[</span><span class="token keyword">GLOBAL</span><span class="token punctuation">.</span> <span class="token operator">|</span> <span class="token keyword">SESSION</span><span class="token punctuation">.</span><span class="token punctuation">]</span> var_name<span class="token punctuation">;</span>

<span class="token comment"># 例如</span>
<span class="token keyword">SELECT</span> @<span class="token variable">@GLOBAL.innodb_data_file_path</span><span class="token punctuation">;</span> <span class="token comment"># 全局系统变量</span>
<span class="token keyword">SELECT</span> @<span class="token variable">@SESSION.max_join_size</span><span class="token punctuation">;</span> <span class="token comment"># 会话系统变量</span>
<span class="token keyword">SELECT</span> @<span class="token variable">@max_join_size</span><span class="token punctuation">;</span> <span class="token comment"># 会话系统变量</span>
</code></pre></div><hr><p><strong>修改系统变量的值</strong>：</p><p>方式一：修改 MySQL 配置文件，继而修改 MySQL 系统变量的值（该方法需要重启 MySQL 服务）；</p><p>方式二：在 MySQL 服务运行期间，使用<code>SET</code>命令重新设置系统变量的值：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 修改会话系统变量</span>
<span class="token keyword">SET</span> @<span class="token variable">@SESSION.var_name</span> <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span>
<span class="token keyword">SET</span> <span class="token keyword">SESSION</span> var_name <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span>
<span class="token keyword">SET</span> var_name <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span>
<span class="token keyword">SET</span> @<span class="token variable">@var_name</span> <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span>

<span class="token comment"># 修改全局系统变量</span>
<span class="token keyword">SET</span> @<span class="token variable">@GLOBAL.var_name</span> <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span>
<span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> var_name <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>示例</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 会话系统变量</span>
<span class="token keyword">SELECT</span> @<span class="token variable">@SESSION.auto_increment_offset</span><span class="token punctuation">;</span>

<span class="token keyword">SET</span> @<span class="token variable">@SESSION.auto_increment_offset</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">SET</span> <span class="token keyword">SESSION</span> auto_increment_offset <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">SET</span> auto_increment_offset <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
<span class="token keyword">SET</span> @<span class="token variable">@auto_increment_offset</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token comment"># 全局系统变量</span>
<span class="token keyword">SELECT</span> @<span class="token variable">@GLOBAL.auto_increment_offset</span><span class="token punctuation">;</span>

<span class="token keyword">SET</span> @<span class="token variable">@GLOBAL</span> auto_increment_offset <span class="token operator">=</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> auto_increment_offset <span class="token operator">=</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_1-2-用户变量" tabindex="-1"><a class="header-anchor" href="#_1-2-用户变量" aria-hidden="true">#</a> 1.2 用户变量</h3><p>  用户变量是用户自己定义的，作为 MySQL 编码规范，MySQL 中的用户变量以一个<code>@</code>开头。根据作用范围不同，又分为<mark>会话用户变量</mark>和<mark>局部变量</mark>。</p><blockquote><p>会话用户变量：作用域和会话变量一样，只对当前连接会话有效<br> 局部变量：只在<code>BEGIN</code>和<code>END</code>语句块中有效。<mark>局部变量只能在存储过程和函数中使用</mark></p></blockquote>`,19),T=s("br",null,null,-1),b={href:"https://dev.mysql.com/doc/refman/5.7/en/user-variables.html",target:"_blank",rel:"noopener noreferrer"},v=s("br",null,null,-1),h={href:"https://dev.mysql.com/doc/refman/8.0/en/user-variables.html",target:"_blank",rel:"noopener noreferrer"},N=e(`<h4 id="_1-2-1-用户会话变量" tabindex="-1"><a class="header-anchor" href="#_1-2-1-用户会话变量" aria-hidden="true">#</a> 1.2.1 用户会话变量</h4><p><strong>变量的定义</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 方式一： = 或 :=</span>
<span class="token keyword">SET</span> @用户变量 <span class="token operator">=</span> 值<span class="token punctuation">;</span>
<span class="token keyword">SET</span> @用户变量 :<span class="token operator">=</span> 值<span class="token punctuation">;</span>

<span class="token comment"># 方式二：:= 或 INTO关键字</span>
<span class="token keyword">SELECT</span> @用户变量 :<span class="token operator">=</span> 表达式 <span class="token punctuation">[</span><span class="token keyword">FROM</span> 等子句<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> 表达式 <span class="token keyword">INTO</span> @用户变量 <span class="token punctuation">[</span><span class="token keyword">FROM</span> 等子句<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>查看用户变量的值</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> @用户变量<span class="token punctuation">;</span>
</code></pre></div><hr><p><strong>示例</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> <span class="token variable">@a</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment"># 或 SET @a := 1;</span>
<span class="token keyword">SELECT</span> <span class="token variable">@a</span><span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> <span class="token variable">@num</span> :<span class="token operator">=</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> employees<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token variable">@num</span><span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">INTO</span> <span class="token variable">@avgsalary</span> <span class="token keyword">FROM</span> employees<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token variable">@avgsalary</span><span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> <span class="token variable">@big</span><span class="token punctuation">;</span> <span class="token comment"># 查看某个未声明的变量时，将得到NULL值</span>
</code></pre></div><h4 id="_1-2-2-局部变量" tabindex="-1"><a class="header-anchor" href="#_1-2-2-局部变量" aria-hidden="true">#</a> 1.2.2 局部变量</h4><p><strong>定义</strong>：可以使用<code>DECLARE</code>语句定义一个局部变量<br><strong>作用域</strong>：仅仅在定义它的<code>BEGIN...END</code>中有效<br><strong>位置</strong>：只能放在<code>BEGIN...END</code>中，并且只能放在第一句</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">BEGIN</span>
  <span class="token comment"># 声明局部变量</span>
  <span class="token keyword">DECLARE</span> var_name1 <span class="token punctuation">[</span><span class="token punctuation">,</span> var_name2<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">type</span> <span class="token punctuation">[</span><span class="token keyword">DEFAULT</span> <span class="token keyword">value</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment"># 为局部变量赋值</span>
  <span class="token keyword">SET</span> var_name1 <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span>
  <span class="token keyword">SELECT</span> <span class="token keyword">value</span> <span class="token keyword">INTO</span> var_name2 <span class="token punctuation">[</span><span class="token keyword">FROM</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment"># 查看局部变量</span>
  <span class="token keyword">SELECT</span> var_name1<span class="token punctuation">,</span> var_name2<span class="token punctuation">;</span>
<span class="token keyword">END</span>
</code></pre></div><hr><h5 id="定义变量" tabindex="-1"><a class="header-anchor" href="#定义变量" aria-hidden="true">#</a> 定义变量</h5><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DECLARE</span> var_name <span class="token punctuation">[</span><span class="token punctuation">,</span> var_name<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">type</span> <span class="token punctuation">[</span><span class="token keyword">DEFAULT</span> <span class="token keyword">value</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment"># 如果没有DEFAULT子句，初始值为NULL</span>

<span class="token comment"># 例如</span>
<span class="token keyword">DECLARE</span> emp_name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;Andy&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h5 id="变量赋值" tabindex="-1"><a class="header-anchor" href="#变量赋值" aria-hidden="true">#</a> 变量赋值</h5><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> var_name <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span>
<span class="token keyword">SET</span> var_name :<span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> exp<span class="token operator">|</span>col <span class="token keyword">INTO</span> var_name <span class="token keyword">FROM</span> table_name<span class="token punctuation">;</span>

<span class="token comment"># 例如</span>
<span class="token keyword">SET</span> emp_name <span class="token operator">=</span> <span class="token string">&#39;Andy&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">SET</span> emp_name :<span class="token operator">=</span> <span class="token string">&#39;Andy&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> last_name <span class="token keyword">INTO</span> emp_name <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> employee_id <span class="token operator">=</span> <span class="token number">101</span><span class="token punctuation">;</span>
</code></pre></div><h5 id="使用变量" tabindex="-1"><a class="header-anchor" href="#使用变量" aria-hidden="true">#</a> 使用变量</h5><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> var_name<span class="token punctuation">;</span>
</code></pre></div><hr><p><strong>示例</strong>：</p><p>(1) 声明局部变量，并分别赋值为 employees 表中 employee_id 为 102 的 last_name 和 salary</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> set_value<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">BEGIN</span>
    <span class="token keyword">DECLARE</span> emp_name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">DECLARE</span> sal <span class="token keyword">DOUBLE</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span> salary <span class="token keyword">INTO</span> emp_name<span class="token punctuation">,</span> sal
    <span class="token keyword">FROM</span> employees
    <span class="token keyword">WHERE</span> employee_id <span class="token operator">=</span> <span class="token number">102</span><span class="token punctuation">;</span>

    <span class="token keyword">SELECT</span> emp_name<span class="token punctuation">,</span> sal<span class="token punctuation">;</span>
  <span class="token keyword">END</span> <span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre></div><p>(2) 声明两个变量，求和并打印 （分别使用会话用户变量、局部变量的方式实现）</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 会话用户变量</span>
<span class="token keyword">SET</span> <span class="token variable">@a</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">SET</span> <span class="token variable">@b</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">SET</span> <span class="token variable">@sum</span> <span class="token operator">=</span> <span class="token variable">@a</span> <span class="token operator">+</span> <span class="token variable">@b</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token variable">@sum</span><span class="token punctuation">;</span>

<span class="token comment">-- 局部变量</span>
<span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> add_value<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">BEGIN</span>
    <span class="token keyword">DECLARE</span> a <span class="token keyword">INT</span> <span class="token keyword">DEFAULT</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">DECLARE</span> b <span class="token keyword">INT</span><span class="token punctuation">;</span>
    <span class="token keyword">DECLARE</span> sum <span class="token keyword">INT</span><span class="token punctuation">;</span>

    <span class="token keyword">SET</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">SET</span> sum <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>

    <span class="token keyword">SELECT</span> sum<span class="token punctuation">;</span>

  <span class="token keyword">END</span> <span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre></div><p>(3) 创建存储过程 different_salary 查询某员工和他领导的薪资差距，并用 IN 参数 emp_id 接收员工 id，用 OUT 参数 dif_salary 输出薪资差距结果</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> different_salary<span class="token punctuation">(</span><span class="token operator">IN</span> emp_id <span class="token keyword">INT</span><span class="token punctuation">,</span> <span class="token keyword">OUT</span> dif_salary <span class="token keyword">DOUBLE</span><span class="token punctuation">)</span>
  <span class="token keyword">BEGIN</span>
    <span class="token keyword">DECLARE</span> emp_sal<span class="token punctuation">,</span> mgr_sal <span class="token keyword">DOUBLE</span><span class="token punctuation">;</span>

    <span class="token keyword">SELECT</span> a<span class="token punctuation">.</span>salary<span class="token punctuation">,</span> b<span class="token punctuation">.</span>salary <span class="token keyword">INTO</span> emp_sal<span class="token punctuation">,</span> mgr_sal
    <span class="token keyword">FROM</span> employees a<span class="token punctuation">,</span> employees b
    <span class="token keyword">WHERE</span> a<span class="token punctuation">.</span>employee_id <span class="token operator">=</span> emp_id
    <span class="token operator">AND</span> a<span class="token punctuation">.</span>manager_id <span class="token operator">=</span> b<span class="token punctuation">.</span>employee_id<span class="token punctuation">;</span>

    <span class="token keyword">SET</span> dif_salary <span class="token operator">=</span> mgr_sal <span class="token operator">-</span> emp_sal<span class="token punctuation">;</span>
  <span class="token keyword">END</span> <span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>

<span class="token comment"># 调用</span>
<span class="token keyword">CALL</span> different_salary<span class="token punctuation">(</span><span class="token number">102</span><span class="token punctuation">,</span> <span class="token variable">@dif_sal</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 查看</span>
<span class="token keyword">SELECT</span> <span class="token variable">@dif_sal</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="_1-2-3-会话用户变量与局部变量对比" tabindex="-1"><a class="header-anchor" href="#_1-2-3-会话用户变量与局部变量对比" aria-hidden="true">#</a> 1.2.3 会话用户变量与局部变量对比</h4><table><thead><tr><th></th><th>作用域</th><th>定义位置</th><th>语法</th></tr></thead><tbody><tr><td>会话用户变量</td><td>当前会话</td><td>会话的任何地方</td><td>加符号<code>@</code>，不用指定类型</td></tr><tr><td>局部变量</td><td><code>BEGIN...END</code></td><td><code>BEGIN...END</code>第一句</td><td>一般不加<code>@</code>，需要指定类型</td></tr></tbody></table><h2 id="_2-定义条件与处理程序" tabindex="-1"><a class="header-anchor" href="#_2-定义条件与处理程序" aria-hidden="true">#</a> 2.定义条件与处理程序</h2><p>  <strong>定义条件</strong>是事先定义程序执行过程中可能遇到的问题，<strong>处理程序</strong>定义了在遇到问题时应当采取的处理方式，并且保证存储过程或函数在遇到警告或错误时能继续执行。这样可以增强存储程序处理问题的能力，避免程序异常停止运行。</p><h3 id="_2-1-案例分析" tabindex="-1"><a class="header-anchor" href="#_2-1-案例分析" aria-hidden="true">#</a> 2.1 案例分析</h3><p>(1) 创建一个名称为&quot;UpdateDataNoCondition&quot;的存储过程，代码如下：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> UpdateDataNoCondition<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
  <span class="token keyword">SET</span> <span class="token variable">@x</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">UPDATE</span> employees <span class="token keyword">SET</span> email <span class="token operator">=</span> <span class="token boolean">NULL</span> <span class="token keyword">WHERE</span> last_name <span class="token operator">=</span> <span class="token string">&#39;Abel&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">SET</span> <span class="token variable">@x</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">UPDATE</span> employees <span class="token keyword">SET</span> email <span class="token operator">=</span> <span class="token string">&#39;aabbel&#39;</span> <span class="token keyword">WHERE</span> last_name <span class="token operator">=</span> <span class="token string">&#39;Abel&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">SET</span> <span class="token variable">@x</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">END</span> <span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre></div><p>(2) 调用存储过程：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">CALL</span> UpdateDataNoCondition<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ERROR <span class="token number">1048</span> <span class="token punctuation">(</span><span class="token number">23000</span><span class="token punctuation">)</span>: <span class="token keyword">Column</span> <span class="token string">&#39;email&#39;</span> cannot be <span class="token boolean">null</span>

mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token variable">@x</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">------+</span>
<span class="token operator">|</span> <span class="token variable">@x</span>   <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------+</span>
<span class="token operator">|</span>    <span class="token number">1</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre></div><p>  可以看到，此时变量<code>@x = 1</code>。结合创建存储过程的 SQL 语句代码可以得出：在存储过程中未定义条件和处理程序，且当存储过程中执行的 SQL 语句报错时，MySQL 数据库就会抛出错误，并退出当前 SQL 逻辑，不在向下继续执行。</p><h3 id="_2-2-定义条件" tabindex="-1"><a class="header-anchor" href="#_2-2-定义条件" aria-hidden="true">#</a> 2.2 定义条件</h3><p>  定义条件就是给 MySQL 中的错误码命名，这有助于存储的程序代码更清晰。它将一个错误名字和指定的错误条件关联起来，这个名字随后被用在定义处理程序的<code>DECLARE HANDLER</code>语句中。</p><p>定义条件使用<code>DECLARE</code>语句，语法格式如下：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DECLARE</span> condition_name CONDITION <span class="token keyword">FOR</span> condition_value

condition_value: {
    mysql_error_code
  <span class="token operator">|</span> SQLSTATE <span class="token punctuation">[</span><span class="token keyword">VALUE</span><span class="token punctuation">]</span> sqlstate_value
}
</code></pre></div><p>说明：</p><p><code>mysql_error_code</code>和<code>sqlstate_value</code>都可以表示 MySQL 的错误</p><blockquote><p><code>mysql_error_code</code>：数值类型错误代码<br><code>sqlstate_value</code>：字符串类型错误代码(长度为 5)<br> 例如：ERROR 1048 (23000)中，1048 是 mysql_error_code，23000 是 sqlstate_value</p></blockquote><div class="hint-container warning"><p class="hint-container-title">注意</p><p><code>DECLARE</code>仅仅在定义它的<code>BEGIN...END</code>中有效，且只能放在第一句</p></div><p>示例一：定义&quot;Field_Not_Be_NULL&quot;错误名与 MySQL 中违反非空约束的错误类型是&quot;ERROR 1048 (23000)&quot;对应</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># mysql_error_code</span>
<span class="token keyword">DECLARE</span> Field_Not_Be_NULL CONDITION <span class="token keyword">FOR</span> <span class="token number">1048</span><span class="token punctuation">;</span>

<span class="token comment"># sqlstate_value</span>
<span class="token keyword">DECLARE</span> Field_Not_Be_NULL CONDITION <span class="token keyword">FOR</span> SQLSTATE <span class="token string">&#39;23000&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p>示例二：定义&quot;ERROR 1148(42000)&quot;错误，名称为&quot;command_not_allowed&quot;</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># mysql_error_code</span>
<span class="token keyword">DECLARE</span> command_not_allowed CONDITION <span class="token keyword">FOR</span> <span class="token number">1148</span><span class="token punctuation">;</span>

<span class="token comment"># sqlstate_value</span>
<span class="token keyword">DECLARE</span> command_not_allowed CONDITION <span class="token keyword">FOR</span> SQLSTATE <span class="token string">&#39;42000&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_2-3-定义处理程序" tabindex="-1"><a class="header-anchor" href="#_2-3-定义处理程序" aria-hidden="true">#</a> 2.3 定义处理程序</h3><p>可以为 SQL 执行过程中发生的某些类型的错误定义特殊的处理程序。定义处理程序时，可以使用<code>DECLARE</code>语句，语法如下：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DECLARE</span> handler_action <span class="token keyword">HANDLER</span>
    <span class="token keyword">FOR</span> condition_value <span class="token punctuation">[</span><span class="token punctuation">,</span> condition_value<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    statement <span class="token comment"># 处理语句</span>

<span class="token comment"># 处理方式</span>
handler_action: {
    <span class="token keyword">CONTINUE</span> <span class="token comment"># 遇到错误不处理，继续执行</span>
  <span class="token operator">|</span> <span class="token keyword">EXIT</span> <span class="token comment"># 遇到错误马上退出</span>
  <span class="token operator">|</span> UNDO <span class="token comment"># 遇到错误后撤回之前的操作(MySQL 不支持)</span>
}

<span class="token comment"># 错误类型(条件)</span>
condition_value: {
    mysql_error_code <span class="token comment"># 数值类型错误代码</span>
  <span class="token operator">|</span> SQLSTATE <span class="token punctuation">[</span><span class="token keyword">VALUE</span><span class="token punctuation">]</span> sqlstate_value <span class="token comment"># 字符串类型错误代码</span>
  <span class="token operator">|</span> condition_name <span class="token comment"># 错误条件名称</span>
  <span class="token operator">|</span> SQLWARNING <span class="token comment"># 匹配所有以 01 开头的 SQLSTATE 错误代码</span>
  <span class="token operator">|</span> <span class="token operator">NOT</span> FOUND <span class="token comment"># 匹配所有以 02 开头的 SQLSTATE 错误代码</span>
  <span class="token operator">|</span> SQLEXCEPTION <span class="token comment"># 匹配没有被 SQLWARNING 和 NOT FOUND 捕获的其他错误代码</span>
}
</code></pre></div><p>定义处理程序的几种方式，如下：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># mysql_error_code</span>
<span class="token keyword">DECLARE</span> <span class="token keyword">CONTINUE</span> <span class="token keyword">HANDLER</span> <span class="token keyword">FOR</span> <span class="token number">1146</span> <span class="token keyword">SET</span> <span class="token variable">@info</span> <span class="token operator">=</span> <span class="token string">&#39;NO_SUCH_TABLE&#39;</span><span class="token punctuation">;</span>

<span class="token comment"># sqlstate_value</span>
<span class="token keyword">DECLARE</span> <span class="token keyword">CONTINUE</span> <span class="token keyword">HANDLER</span> <span class="token keyword">FOR</span> SQLSTATE <span class="token string">&#39;42S02&#39;</span> <span class="token keyword">SET</span> <span class="token variable">@info</span> <span class="token operator">=</span> <span class="token string">&#39;NO_SUCH_TABLE&#39;</span><span class="token punctuation">;</span>

<span class="token comment"># condition_name</span>
<span class="token keyword">DECLARE</span> NO_SUCH_TABLE CONDITION <span class="token keyword">FOR</span> <span class="token number">1146</span><span class="token punctuation">;</span>
<span class="token keyword">DECLARE</span> <span class="token keyword">CONTINUE</span> <span class="token keyword">HANDLER</span> <span class="token keyword">FOR</span> NO_SUCH_TABLE <span class="token keyword">SET</span> <span class="token variable">@info</span> <span class="token operator">=</span> <span class="token string">&#39;NO_SUCH_TABLE&#39;</span><span class="token punctuation">;</span>

<span class="token comment"># SQLWARNING</span>
<span class="token keyword">DECLARE</span> <span class="token keyword">EXIT</span> <span class="token keyword">HANDLER</span> <span class="token keyword">FOR</span> SQLWARNING <span class="token keyword">SET</span> <span class="token variable">@info</span> <span class="token operator">=</span> <span class="token string">&#39;Warning&#39;</span><span class="token punctuation">;</span>

<span class="token comment"># NOT FOUND</span>
<span class="token keyword">DECLARE</span> <span class="token keyword">EXIT</span> <span class="token keyword">HANDLER</span> <span class="token keyword">FOR</span> <span class="token operator">NOT</span> FOUND <span class="token keyword">SET</span> <span class="token variable">@info</span> <span class="token operator">=</span> <span class="token string">&#39;Not Found&#39;</span><span class="token punctuation">;</span>

<span class="token comment"># SQLEXCEPTION</span>
<span class="token keyword">DECLARE</span> <span class="token keyword">EXIT</span> <span class="token keyword">HANDLER</span> <span class="token keyword">FOR</span> SQLEXCEPTION <span class="token keyword">SET</span> <span class="token variable">@info</span> <span class="token operator">=</span> <span class="token string">&#39;Other Exception&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_2-4-案例解决" tabindex="-1"><a class="header-anchor" href="#_2-4-案例解决" aria-hidden="true">#</a> 2.4 案例解决</h3><p>在存储过程中，定义处理程序，捕获 sqlstate_value 值，当遇到 mysql_error_code 值为 1048 时，执行 CONTINUE 操作，并且将@proc_value 的值设置为-1</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> UpdateDataNoCondition<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
  <span class="token comment"># 定义处理程序</span>
  <span class="token keyword">DECLARE</span> <span class="token keyword">CONTINUE</span> <span class="token keyword">HANDLER</span> <span class="token keyword">FOR</span> <span class="token number">1048</span> <span class="token keyword">SET</span> <span class="token variable">@proc_value</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token keyword">SET</span> <span class="token variable">@x</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">UPDATE</span> employees <span class="token keyword">SET</span> email <span class="token operator">=</span> <span class="token boolean">NULL</span> <span class="token keyword">WHERE</span> last_name <span class="token operator">=</span> <span class="token string">&#39;Abel&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">SET</span> <span class="token variable">@x</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">UPDATE</span> employees <span class="token keyword">SET</span> email <span class="token operator">=</span> <span class="token string">&#39;aabbel&#39;</span> <span class="token keyword">WHERE</span> last_name <span class="token operator">=</span> <span class="token string">&#39;Abel&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">SET</span> <span class="token variable">@x</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">END</span> <span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre></div><p>调用：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">CALL</span> UpdateDataNoCondition<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Query OK<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token keyword">rows</span> affected <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> <span class="token keyword">SELECT</span> <span class="token variable">@x</span><span class="token punctuation">,</span> <span class="token variable">@proc_value</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">------+-------------+</span>
<span class="token operator">|</span> <span class="token variable">@x</span>   <span class="token operator">|</span> <span class="token variable">@proc_value</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------+-------------+</span>
<span class="token operator">|</span>    <span class="token number">3</span> <span class="token operator">|</span>          <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------+-------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre></div><h2 id="_3-流程控制" tabindex="-1"><a class="header-anchor" href="#_3-流程控制" aria-hidden="true">#</a> 3.流程控制</h2><p>  解决复杂问题不可能通过一个 SQL 语句完成，我们需要执行多个 SQL 操作。流程控制语句的作用就是控制存储过程中 SQL 语句的执行顺序，我们完成复杂操作必不可少的一部分。</p><p>只要是执行的程序，流程就分为三大类：<br>  ① <strong>顺序结构</strong>：程序从上往下依次执行<br>  ② <strong>分支结构</strong>：程序按条件进行选择执行，从两条或多条路径中选择一条执行<br>  ③ <strong>循环结构</strong>：程序满足一定条件下，重复执行一组语句</p><p>针对于 MySQL 的流程控制语句主要有三类(<mark>注意：只能用于存储程序</mark>)：<br>  ① <strong>条件判断语句</strong>：IF 语句和 CASE 语句<br>  ② <strong>循环语句</strong>：LOOP、WHILE 和 REPEAT 语句<br>  ③ <strong>跳转语句</strong>：ITERATE 和 LEAVE 语句</p><h3 id="_3-1-分支结构-if" tabindex="-1"><a class="header-anchor" href="#_3-1-分支结构-if" aria-hidden="true">#</a> 3.1 分支结构(IF)</h3><p>语法结构：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">IF</span> search_condition <span class="token keyword">THEN</span> statement_list
    <span class="token punctuation">[</span><span class="token keyword">ELSEIF</span> search_condition <span class="token keyword">THEN</span> statement_list<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">[</span><span class="token keyword">ELSE</span> statement_list<span class="token punctuation">]</span>
<span class="token keyword">END</span> <span class="token keyword">IF</span>
</code></pre></div><p>示例：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">FUNCTION</span> SimpleCompare<span class="token punctuation">(</span>n <span class="token keyword">INT</span><span class="token punctuation">,</span> m <span class="token keyword">INT</span><span class="token punctuation">)</span>
  <span class="token keyword">RETURNS</span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>

  <span class="token keyword">BEGIN</span>
    <span class="token keyword">DECLARE</span> s <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">IF</span> n <span class="token operator">&gt;</span> m <span class="token keyword">THEN</span> <span class="token keyword">SET</span> s <span class="token operator">=</span> <span class="token string">&#39;&gt;&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">ELSEIF</span> n <span class="token operator">=</span> m <span class="token keyword">THEN</span> <span class="token keyword">SET</span> s <span class="token operator">=</span> <span class="token string">&#39;=&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">ELSE</span> <span class="token keyword">SET</span> s <span class="token operator">=</span> <span class="token string">&#39;&lt;&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>

    <span class="token keyword">SET</span> s <span class="token operator">=</span> CONCAT<span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> s<span class="token punctuation">,</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> m<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">RETURN</span> s<span class="token punctuation">;</span>
  <span class="token keyword">END</span> <span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>

mysql<span class="token operator">&gt;</span> <span class="token keyword">SELECT</span> SimpleCompare<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

mysql<span class="token operator">&gt;</span> <span class="token keyword">SELECT</span> SimpleCompare<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">---------------------+</span>
<span class="token operator">|</span> SimpleCompare<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------------+</span>
<span class="token operator">|</span> <span class="token number">1</span> <span class="token operator">&lt;</span> <span class="token number">5</span>               <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre></div><h3 id="_3-2-分支结构-case" tabindex="-1"><a class="header-anchor" href="#_3-2-分支结构-case" aria-hidden="true">#</a> 3.2 分支结构(CASE)</h3><p>语法结构：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 方式一</span>
<span class="token keyword">CASE</span> case_value
    <span class="token keyword">WHEN</span> when_value <span class="token keyword">THEN</span> statement_list
    <span class="token punctuation">[</span><span class="token keyword">WHEN</span> when_value <span class="token keyword">THEN</span> statement_list<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">[</span><span class="token keyword">ELSE</span> statement_list<span class="token punctuation">]</span>
<span class="token keyword">END</span> <span class="token keyword">CASE</span>

<span class="token comment"># 方式二</span>
<span class="token keyword">CASE</span>
    <span class="token keyword">WHEN</span> search_condition <span class="token keyword">THEN</span> statement_list
    <span class="token punctuation">[</span><span class="token keyword">WHEN</span> search_condition <span class="token keyword">THEN</span> statement_list<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">[</span><span class="token keyword">ELSE</span> statement_list<span class="token punctuation">]</span>
<span class="token keyword">END</span> <span class="token keyword">CASE</span>
</code></pre></div>`,70),R=s("code",null,"CASE",-1),C=s("code",null,"END",-1),A=s("code",null,"END CASE",-1),I=e(`<p>示例：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 方式一</span>
<span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> test_case<span class="token punctuation">(</span><span class="token operator">IN</span> num <span class="token keyword">INT</span><span class="token punctuation">)</span>
  <span class="token keyword">BEGIN</span>
    <span class="token keyword">CASE</span> num
      <span class="token keyword">WHEN</span> <span class="token number">1</span> <span class="token keyword">THEN</span> <span class="token keyword">SELECT</span> <span class="token string">&#39;MySQL&#39;</span><span class="token punctuation">;</span>
      <span class="token keyword">WHEN</span> <span class="token number">2</span> <span class="token keyword">THEN</span> <span class="token keyword">SELECT</span> <span class="token string">&#39;Java&#39;</span><span class="token punctuation">;</span>
      <span class="token keyword">ELSE</span> <span class="token keyword">SELECT</span> <span class="token string">&#39;Redis&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">END</span> <span class="token keyword">CASE</span><span class="token punctuation">;</span>
  <span class="token keyword">END</span> <span class="token comment">//</span>

<span class="token keyword">DELIMITER</span><span class="token punctuation">;</span>

<span class="token comment"># 调用</span>
<span class="token keyword">CALL</span> test_case<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 方式二</span>
<span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> test_case<span class="token punctuation">(</span><span class="token operator">IN</span> score <span class="token keyword">INT</span><span class="token punctuation">)</span>
  <span class="token keyword">BEGIN</span>
    <span class="token keyword">CASE</span>
      <span class="token keyword">WHEN</span> score <span class="token operator">&gt;=</span> <span class="token number">90</span>  <span class="token keyword">THEN</span> <span class="token keyword">SELECT</span> <span class="token string">&#39;优秀&#39;</span><span class="token punctuation">;</span>
      <span class="token keyword">WHEN</span> score <span class="token operator">&gt;</span> <span class="token number">60</span> <span class="token operator">AND</span> score <span class="token operator">&lt;</span> <span class="token number">90</span> <span class="token keyword">THEN</span> <span class="token keyword">SELECT</span> <span class="token string">&#39;良好&#39;</span><span class="token punctuation">;</span>
      <span class="token keyword">ELSE</span> <span class="token keyword">SELECT</span> <span class="token string">&#39;不及格&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">END</span> <span class="token keyword">CASE</span><span class="token punctuation">;</span>
  <span class="token keyword">END</span> <span class="token comment">//</span>

<span class="token keyword">DELIMITER</span><span class="token punctuation">;</span>

<span class="token comment"># 调用</span>
<span class="token keyword">CALL</span> test_case<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,2);function q(O,D){const p=o("ExternalLinkIcon"),t=o("RouterLink");return l(),k("div",null,[i,E,m,y,s("blockquote",null,[s("p",null,[n("系统变量官方文档："),w,n(" MySQL 5.7："),s("a",_,[n("https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html"),a(p)]),L,n(" MySQL 8.0："),s("a",S,[n("https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html"),a(p)])])]),g,s("p",null,[n("官方文档："),T,n(" MySQL 5.7："),s("a",b,[n("https://dev.mysql.com/doc/refman/5.7/en/user-variables.html"),a(p)]),v,n(" MySQL 8.0："),s("a",h,[n("https://dev.mysql.com/doc/refman/8.0/en/user-variables.html"),a(p)])]),N,s("blockquote",null,[s("p",null,[n("与"),a(t,{to:"/backend/database/base/one_line_function.html#_5-%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6%E5%87%BD%E6%95%B0"},{default:r(()=>[n("流程控制函数")]),_:1}),n("中的"),R,n("稍微有点区别：结尾一个为"),C,n("，一个为"),A])]),I])}const x=c(d,[["render",q],["__file","variable_flow_cursor.html.vue"]]);export{x as default};
