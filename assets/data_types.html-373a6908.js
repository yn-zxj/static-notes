import{_ as o,j as p,o as l,c as r,f as n,i as e,g as a,a as t}from"./app-01570e4a.js";const c="/assets/linked_list-a090f665.png",u={},i={href:"https://redis.io/docs/data-types/",target:"_blank",rel:"noopener noreferrer"},k=n("br",null,null,-1),d={href:"https://mrjokersince1997.github.io/My-Notes/#/%E5%85%B6%E5%AE%83/%E6%95%B0%E6%8D%AE%E5%BA%93/Redis",target:"_blank",rel:"noopener noreferrer"},h=n("br",null,null,-1),m={href:"https://www.runoob.com/redis/redis-tutorial.html",target:"_blank",rel:"noopener noreferrer"},g=t(`<h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2><p>① 在 Redis 中单个指令都是原子性操作，通过指令操作 Redis 数据时无需担心线程安全问题。<br> ② Redis 以 key-value 的形式保存数据：key 值一定为 string 类型，而 value 值支持多种类型。</p><h3 id="存储区域" tabindex="-1"><a class="header-anchor" href="#存储区域" aria-hidden="true">#</a> 存储区域</h3><p>  Redis 将数据存储分为多个相互独立的区域，将 Redis 操作局限在自己的存储区域内。通常划分为 16 个（编号 0-15），默认使用编号 0 。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">select</span> <span class="token number">1</span>          <span class="token comment"># 改用 1 号存储区域</span>

dbsize            <span class="token comment"># 返回当前区域 key 数量</span>
move key <span class="token number">2</span>        <span class="token comment"># 将当前 key 迁移到 2 号存储区域</span>
flushdb           <span class="token comment"># 清空当前存储区域(慎重)</span>
flushall          <span class="token comment"># 清空全部存储区域(慎重)</span>
</code></pre></div><h3 id="key-操作" tabindex="-1"><a class="header-anchor" href="#key-操作" aria-hidden="true">#</a> key 操作</h3><h4 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作" aria-hidden="true">#</a> 基本操作</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>keys pattern            <span class="token comment"># 返回与匹配的所有键名</span>
del key                 <span class="token comment"># 删除 key</span>
exists key              <span class="token comment"># 判断是否存在 key</span>
<span class="token builtin class-name">type</span> key                <span class="token comment"># 返回 key 对应的 value 类型</span>

<span class="token function">rename</span> key newkey       <span class="token comment"># 重命名</span>
renamenx key newkey     <span class="token comment"># 重命名（返回 1），新名称已存在则失败（返回 0）</span>
<span class="token function">sort</span> key                <span class="token comment"># 对 key 排序</span>
</code></pre></div><h4 id="时效性操作" tabindex="-1"><a class="header-anchor" href="#时效性操作" aria-hidden="true">#</a> 时效性操作</h4><p>Redis 中可以为 key 设置有效期，key 过期后会由 Redis 执行删除策略回收内存空间。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>expire key <span class="token number">10</span>           <span class="token comment"># key 10s 内有效</span>
expireat key <span class="token number">1355292000</span> <span class="token comment"># key 截至时间戳有效</span>
persist key             <span class="token comment"># key 永久有效</span>

ttl key                 <span class="token comment"># 返回 key 剩余有效时间，若不存在返回 -2 ，永久返回 -1</span>
</code></pre></div><h4 id="查询操作" tabindex="-1"><a class="header-anchor" href="#查询操作" aria-hidden="true">#</a> 查询操作</h4><p>Redis 支持查询存储区域内含有的 key，且允许使用以下通配符：</p><p><code>-</code> 表示任意数量字符<br><code>?</code> 表示任意一个字符<br><code>[]</code> 表示一个指定字符</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>keys *                <span class="token comment"># 查询所有 key</span>
keys user:*           <span class="token comment"># 查询所有 user 的 key</span>
keys id:75??          <span class="token comment"># 查询 ID 为 7500-7599 的 key</span>
keys id:7<span class="token punctuation">[</span><span class="token number">2345</span><span class="token punctuation">]</span><span class="token number">55</span>     <span class="token comment"># 查询 ID 为 7255/7355/7455/7555 的 key</span>
</code></pre></div><h2 id="字符串-string" tabindex="-1"><a class="header-anchor" href="#字符串-string" aria-hidden="true">#</a> 字符串(String)</h2><p>  string 是 redis 最基本的数据类型，一个 key 对应一个 value。它是二进制安全的，意思是 redis 的 string 可以包含任何数据，比如 jpg 图片或者序列化对象等；一个 redis 中字符串 value 最多可以是 512M。</p><h3 id="汇总" tabindex="-1"><a class="header-anchor" href="#汇总" aria-hidden="true">#</a> 汇总</h3>`,18),b=n("thead",null,[n("tr",null,[n("th",null,"命令"),n("th",null,"描述")])],-1),_={href:"https://www.runoob.com/redis/strings-set.html",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"SET key value",-1),f=n("td",null,"设置指定 key 的值",-1),w={href:"https://www.runoob.com/redis/strings-get.html",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"GET key",-1),E=n("td",null,"获取指定 key 的值",-1),v={href:"https://www.runoob.com/redis/strings-getrange.html",target:"_blank",rel:"noopener noreferrer"},T=n("code",null,"GETRANGE key start end",-1),S=n("td",null,"返回 key 中字符串值的子字符",-1),x={href:"https://www.runoob.com/redis/strings-getset.html",target:"_blank",rel:"noopener noreferrer"},R=n("code",null,"GETSET key value",-1),H=n("td",null,"将给定 key 的值设为 value ，并返回 key 的旧值(old value)",-1),N={href:"https://www.runoob.com/redis/strings-getbit.html",target:"_blank",rel:"noopener noreferrer"},O=n("code",null,"GETBIT key offset",-1),L=n("td",null,"对 key 所储存的字符串值，获取指定偏移量上的位(bit)",-1),P={href:"https://www.runoob.com/redis/strings-mget.html",target:"_blank",rel:"noopener noreferrer"},M=n("code",null,"MGET key1 [key2..]",-1),X=n("td",null,"获取所有(一个或多个)给定 key 的值",-1),A={href:"https://www.runoob.com/redis/strings-setbit.html",target:"_blank",rel:"noopener noreferrer"},I=n("code",null,"SETBIT key offset value",-1),C=n("td",null,"对 key 所储存的字符串值，设置或清除指定偏移量上的位(bit)",-1),B={href:"https://www.runoob.com/redis/strings-setex.html",target:"_blank",rel:"noopener noreferrer"},G=n("code",null,"SETEX key seconds value",-1),Z=n("td",null,"将值 value 关联到 key ，并将 key 的过期时间设为 seconds (以秒为单位)",-1),D={href:"https://www.runoob.com/redis/strings-setnx.html",target:"_blank",rel:"noopener noreferrer"},z=n("code",null,"SETNX key value",-1),K=n("td",null,"只有在 key 不存在时设置 key 的值",-1),U={href:"https://www.runoob.com/redis/strings-setrange.html",target:"_blank",rel:"noopener noreferrer"},Y=n("code",null,"SETRANGE key offset value",-1),F=n("td",null,"用 value 参数覆写给定 key 所储存的字符串值，从偏移量 offset 开始",-1),V={href:"https://www.runoob.com/redis/strings-strlen.html",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"STRLEN key",-1),W=n("td",null,"返回 key 所储存的字符串值的长度",-1),J={href:"https://www.runoob.com/redis/strings-mset.html",target:"_blank",rel:"noopener noreferrer"},Q=n("code",null,"MSET key value [key value ...]",-1),$=n("td",null,"同时设置一个或多个 key-value 对",-1),nn={href:"https://www.runoob.com/redis/strings-msetnx.html",target:"_blank",rel:"noopener noreferrer"},sn=n("code",null,"MSETNX key value [key value ...]",-1),an=n("td",null,"同时设置一个或多个 key-value 对，当且仅当所有给定 key 都不存在",-1),en={href:"https://www.runoob.com/redis/strings-psetex.html",target:"_blank",rel:"noopener noreferrer"},tn=n("code",null,"PSETEX key milliseconds value",-1),on=n("td",null,"这个命令和 SETEX 命令相似，但它以毫秒为单位设置 key 的生存时间，而不是像 SETEX 命令那样，以秒为单位",-1),pn={href:"https://www.runoob.com/redis/strings-incr.html",target:"_blank",rel:"noopener noreferrer"},ln=n("code",null,"INCR key",-1),rn=n("td",null,"将 key 中储存的数字值增一",-1),cn={href:"https://www.runoob.com/redis/strings-incrby.html",target:"_blank",rel:"noopener noreferrer"},un=n("code",null,"INCRBY key increment",-1),kn=n("td",null,"将 key 所储存的值加上给定的增量值（increment）",-1),dn={href:"https://www.runoob.com/redis/strings-incrbyfloat.html",target:"_blank",rel:"noopener noreferrer"},hn=n("code",null,"INCRBYFLOAT key increment",-1),mn=n("td",null,"将 key 所储存的值加上给定的浮点增量值（increment）",-1),gn={href:"https://www.runoob.com/redis/strings-decr.html",target:"_blank",rel:"noopener noreferrer"},bn=n("code",null,"DECR key",-1),_n=n("td",null,"将 key 中储存的数字值减一",-1),qn={href:"https://www.runoob.com/redis/strings-decrby.html",target:"_blank",rel:"noopener noreferrer"},fn=n("code",null,"DECRBY key decrement",-1),wn=n("td",null,"key 所储存的值减去给定的减量值（decrement）",-1),yn={href:"https://www.runoob.com/redis/strings-append.html",target:"_blank",rel:"noopener noreferrer"},En=n("code",null,"APPEND key value",-1),vn=n("td",null,"如果 key 已经存在并且是一个字符串， APPEND 命令将指定的 value 追加到该 key 原来值（value）的末尾",-1),Tn=t(`<h4 id="最常用" tabindex="-1"><a class="header-anchor" href="#最常用" aria-hidden="true">#</a> 最常用</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>SET key value <span class="token punctuation">[</span>NX <span class="token operator">|</span> XX<span class="token punctuation">]</span> <span class="token punctuation">[</span>GET<span class="token punctuation">]</span> <span class="token punctuation">[</span>EX seconds <span class="token operator">|</span> PX milliseconds <span class="token operator">|</span>
  EXAT unix-time-seconds <span class="token operator">|</span> PXAT unix-time-milliseconds <span class="token operator">|</span> KEEPTTL<span class="token punctuation">]</span>
</code></pre></div><p><strong>参数说明</strong>：<br>  <code>EX seconds</code>：以秒为单位设置过期时间<br>  <code>PX milliseconds</code>：以毫秒为单位设置过期时间<br>  <code>EXAT unix-time-seconds</code>：设置以秒为单位的 UNIX 时间戳所对应的时间为过期时间<br>  <code>PXAT unix-time-milliseconds</code>：设置以毫秒为单位的 UNIX 时间戳所对应的时间为过期时间<br>  <code>KEEPTTL</code>：保留设置前指定键的生存时间<br>  <code>NX</code>：键不存在的时候设置键值<br>  <code>XX</code>：键存在的时候设置键值<br>  <code>GET</code>：返回指定键原本的值，若键不存在时返回<code>nil</code></p><blockquote><p><code>SET</code>命令使用 EX、PX、NX 参数，其效果等同于 SETEX、PSETEX、SETNX 命令。根据官方文档的描述，未来的版本中 SETEX、PSETEX、SETNX 命令可能会被淘汰。</p></blockquote><hr><p><strong>示例</strong>：</p><details class="hint-container details"><summary>展开查看</summary><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置name的值为 LiHua</span>
<span class="token builtin class-name">set</span> name LiHua            --<span class="token operator">&gt;</span> OK
<span class="token comment"># 获取name的值</span>
get name                  --<span class="token operator">&gt;</span> <span class="token string">&quot;LiHua&quot;</span>
<span class="token comment"># 若name不存在设置其值为Zhangsan(因为存在，返回为nil)</span>
<span class="token builtin class-name">set</span> name Zhangsan NX      --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>nil<span class="token punctuation">)</span>
<span class="token comment"># 若name存在设置其值为Zhangsan</span>
<span class="token builtin class-name">set</span> name Zhangsan XX      --<span class="token operator">&gt;</span> OK
<span class="token comment"># 获取name的值(修改成功)</span>
get name                  --<span class="token operator">&gt;</span> <span class="token string">&quot;Zhangsan&quot;</span>
<span class="token comment"># 设置age为23且30s后过期</span>
<span class="token builtin class-name">set</span> age <span class="token number">23</span> EX <span class="token number">30</span>          --<span class="token operator">&gt;</span> OK
<span class="token comment"># 查看剩余有效时间</span>
ttl age                   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">23</span>
<span class="token comment"># 查看剩余有效时间(-2 过期)</span>
ttl age                   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token parameter variable">-2</span>
<span class="token comment"># 设置age为20且300s后过期</span>
<span class="token builtin class-name">set</span> age <span class="token number">20</span> EX <span class="token number">300</span>         --<span class="token operator">&gt;</span> OK
<span class="token comment"># 查看剩余有效时间</span>
ttl age                   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">296</span>
<span class="token comment"># 若age存在设置其值为20</span>
<span class="token builtin class-name">set</span> age <span class="token number">20</span> XX             --<span class="token operator">&gt;</span> OK
<span class="token comment"># 查看剩余有效时间(-1 用不过期，原来的过期时间没了)</span>
ttl age                   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token parameter variable">-1</span>
<span class="token comment"># 若age存在设置其值为21(假设set age 20 EX 300，设置了300s过期)</span>
<span class="token builtin class-name">set</span> age <span class="token number">21</span> XX KEEPTTL     --<span class="token operator">&gt;</span> OK
<span class="token comment"># 查看剩余有效时间(前面设置的过期时间被保留)</span>
ttl age                   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">233</span>
</code></pre></div></details><h4 id="同时设置-获取多个键值" tabindex="-1"><a class="header-anchor" href="#同时设置-获取多个键值" aria-hidden="true">#</a> 同时设置/获取多个键值</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
MSET key value <span class="token punctuation">[</span>key value <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
MGET key <span class="token punctuation">[</span>key <span class="token punctuation">..</span>.<span class="token punctuation">]</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> mset k1 hello k2 world
OK
redis<span class="token operator">&gt;</span> mget k1 k2 k3
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;hello&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;world&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>nil<span class="token punctuation">)</span>

<span class="token comment"># 语法</span>
MSETNX key value <span class="token punctuation">[</span>key value <span class="token punctuation">..</span>.<span class="token punctuation">]</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> mset k1 hello k2 world
OK
redis<span class="token operator">&gt;</span> msetnx k1 hi k4 redis <span class="token comment"># k1 上面已经存在了</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span> <span class="token comment"># 失败</span>

redis<span class="token operator">&gt;</span> msetnx k3 learn k4 redis <span class="token comment"># k3 k4均不存在</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span> <span class="token comment"># 成功</span>
</code></pre></div><h4 id="获取指定区间范围内的值" tabindex="-1"><a class="header-anchor" href="#获取指定区间范围内的值" aria-hidden="true">#</a> 获取指定区间范围内的值</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
SETRANGE key offset value
GETRANGE key start end

redis<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> k1 <span class="token string">&quot;Hello World&quot;</span>
OK
redis<span class="token operator">&gt;</span> setrange k1 <span class="token number">6</span> Redis
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">11</span>
redis<span class="token operator">&gt;</span> get k1
<span class="token string">&quot;Hello Redis&quot;</span>

redis<span class="token operator">&gt;</span> getrange k1 <span class="token number">0</span> <span class="token parameter variable">-1</span> <span class="token comment"># 获取全部</span>
<span class="token string">&quot;Hello Redis&quot;</span>
redis<span class="token operator">&gt;</span> getrange k1 <span class="token number">0</span> <span class="token number">8</span> <span class="token comment"># 字符串截取</span>
<span class="token string">&quot;Hello Red&quot;</span>
</code></pre></div><h4 id="数值增减" tabindex="-1"><a class="header-anchor" href="#数值增减" aria-hidden="true">#</a> 数值增减</h4><blockquote><p>注意：一定要是数字才能进行加减<br> 应用场景：阅读数、点赞数等等</p></blockquote><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
INCR key                <span class="token comment"># 递增</span>
INCRBY key increment    <span class="token comment"># 增加指定的整数</span>
DECR key                <span class="token comment"># 递减</span>
DECRBY key decrement    <span class="token comment"># 减少指定的整数</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> num <span class="token number">3</span>      --<span class="token operator">&gt;</span> OK            <span class="token comment"># 给 num 初始值3</span>
redis<span class="token operator">&gt;</span> incr num       --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>   <span class="token comment"># 递增 num + 1</span>
redis<span class="token operator">&gt;</span> incr num       --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">5</span>   <span class="token comment"># 递增 num + 1</span>
redis<span class="token operator">&gt;</span> get num        --<span class="token operator">&gt;</span> <span class="token string">&quot;5&quot;</span>
redis<span class="token operator">&gt;</span> incrby num <span class="token number">10</span>  --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">15</span>  <span class="token comment"># 给 num + 10</span>
redis<span class="token operator">&gt;</span> get num        --<span class="token operator">&gt;</span> <span class="token string">&quot;15&quot;</span>
redis<span class="token operator">&gt;</span> decr num       --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">14</span>  <span class="token comment"># 递减 num - 1</span>
redis<span class="token operator">&gt;</span> decrby num <span class="token number">5</span>   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">9</span>   <span class="token comment"># 给 num - 5</span>
redis<span class="token operator">&gt;</span> get num        --<span class="token operator">&gt;</span> <span class="token string">&quot;9&quot;</span>
</code></pre></div><h4 id="获取字符串长度和内容追加" tabindex="-1"><a class="header-anchor" href="#获取字符串长度和内容追加" aria-hidden="true">#</a> 获取字符串长度和内容追加</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
STRLEN key
APPEND key value

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> str <span class="token string">&quot;Hello Redis&quot;</span> --<span class="token operator">&gt;</span> OK
redis<span class="token operator">&gt;</span> strlen str            --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">11</span>
redis<span class="token operator">&gt;</span> append str Good       --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">15</span>
redis<span class="token operator">&gt;</span> get str               --<span class="token operator">&gt;</span> <span class="token string">&quot;Hello RedisGood&quot;</span>
</code></pre></div><h4 id="分布式锁" tabindex="-1"><a class="header-anchor" href="#分布式锁" aria-hidden="true">#</a> 分布式锁</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>SETEX key value   <span class="token comment"># setex(set with expire)</span>
SETNX key value   <span class="token comment"># setnx(set if not exist)</span>
</code></pre></div><h4 id="getset-先-get-再-set" tabindex="-1"><a class="header-anchor" href="#getset-先-get-再-set" aria-hidden="true">#</a> getset(先 get 再 set)</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
GETSET key value  <span class="token comment"># 先返回之前的值在设置新的值</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> getset k1 Hello  --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>nil<span class="token punctuation">)</span>     <span class="token comment"># k1开始不存在所以返回 nil</span>
redis<span class="token operator">&gt;</span> get k1           --<span class="token operator">&gt;</span> <span class="token string">&quot;Hello&quot;</span>   <span class="token comment"># k1在上一步被设置为 Hello</span>
redis<span class="token operator">&gt;</span> getset k1 Redis  --<span class="token operator">&gt;</span> <span class="token string">&quot;Hello&quot;</span>   <span class="token comment"># 返回上一步的 Hello，然后设置其为 Redis</span>
redis<span class="token operator">&gt;</span> get k1           --<span class="token operator">&gt;</span> <span class="token string">&quot;Redis&quot;</span>   <span class="token comment"># 获取k1的值</span>
</code></pre></div><h2 id="列表-list" tabindex="-1"><a class="header-anchor" href="#列表-list" aria-hidden="true">#</a> 列表(List)</h2><p>  列表是简单的字符串列表(单值多 value)，按照插入顺序排列。你可以添加一个元素到列表的头部(左边)或者尾部(右边)。它的底层实际是个双端链表，最多可以包含 2<sup>32</sup>-1 个元素(4294967295，每个列表超过 40 亿个元素)。主要功能有 pop/push 等，一般用在栈、队列、消息队列等场景。<br>   所谓的双端就是它的左侧和右侧都可以插入添加，如果键不存在，则创建新的链表，如果键已经存在，则新增内容，如果值全移除，对应的键也就消失了。对两端的操作性能很高，通过索引下标的操作中间的节点性能会较差。</p><figure><img src="`+c+'" alt="双端链表.png" width="400" tabindex="0" loading="lazy"><figcaption>双端链表.png</figcaption></figure><h3 id="汇总-1" tabindex="-1"><a class="header-anchor" href="#汇总-1" aria-hidden="true">#</a> 汇总</h3>',24),Sn=n("thead",null,[n("tr",null,[n("th",null,"命令"),n("th",null,"描述")])],-1),xn={href:"https://www.runoob.com/redis/lists-blpop.html",target:"_blank",rel:"noopener noreferrer"},Rn=n("code",null,"BLPOP key1 [key2 ] timeout",-1),Hn=n("td",null,"移出并获取列表的第一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止",-1),Nn={href:"https://www.runoob.com/redis/lists-brpop.html",target:"_blank",rel:"noopener noreferrer"},On=n("code",null,"BRPOP key1 [key2 ] timeout",-1),Ln=n("td",null,"移出并获取列表的最后一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止",-1),Pn={href:"https://www.runoob.com/redis/lists-brpoplpush.html",target:"_blank",rel:"noopener noreferrer"},Mn=n("code",null,"BRPOPLPUSH source destination timeout",-1),Xn=n("td",null,"从列表中弹出一个值，将弹出的元素插入到另外一个列表中并返回它； 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止",-1),An={href:"https://www.runoob.com/redis/lists-lindex.html",target:"_blank",rel:"noopener noreferrer"},In=n("code",null,"LINDEX key index",-1),Cn=n("td",null,"通过索引获取列表中的元素",-1),Bn={href:"https://www.runoob.com/redis/lists-linsert.html",target:"_blank",rel:"noopener noreferrer"},Gn=n("code",null,"LINSERT key BEFORE",-1),Zn=n("td",null,"在列表的元素前或者后插入元素",-1),Dn={href:"https://www.runoob.com/redis/lists-llen.html",target:"_blank",rel:"noopener noreferrer"},zn=n("code",null,"LLEN key",-1),Kn=n("td",null,"获取列表长度",-1),Un={href:"https://www.runoob.com/redis/lists-lpop.html",target:"_blank",rel:"noopener noreferrer"},Yn=n("code",null,"LPOP key",-1),Fn=n("td",null,"移出并获取列表的第一个元素",-1),Vn={href:"https://www.runoob.com/redis/lists-lpush.html",target:"_blank",rel:"noopener noreferrer"},jn=n("code",null,"LPUSH key value1 [value2]",-1),Wn=n("td",null,"将一个或多个值插入到列表头部",-1),Jn={href:"https://www.runoob.com/redis/lists-lpushx.html",target:"_blank",rel:"noopener noreferrer"},Qn=n("code",null,"LPUSHX key value",-1),$n=n("td",null,"将一个值插入到已存在的列表头部",-1),ns={href:"https://www.runoob.com/redis/lists-lrange.html",target:"_blank",rel:"noopener noreferrer"},ss=n("code",null,"LRANGE key start stop",-1),as=n("td",null,"获取列表指定范围内的元素",-1),es={href:"https://www.runoob.com/redis/lists-lrem.html",target:"_blank",rel:"noopener noreferrer"},ts=n("code",null,"LREM key count value",-1),os=n("td",null,"移除列表元素",-1),ps={href:"https://www.runoob.com/redis/lists-lset.html",target:"_blank",rel:"noopener noreferrer"},ls=n("code",null,"LSET key index value",-1),rs=n("td",null,"通过索引设置列表元素的值",-1),cs={href:"https://www.runoob.com/redis/lists-ltrim.html",target:"_blank",rel:"noopener noreferrer"},us=n("code",null,"LTRIM key start stop",-1),is=n("td",null,"对一个列表进行修剪(trim)，就是说，让列表只保留指定区间内的元素，不在指定区间之内的元素都将被删除",-1),ks={href:"https://www.runoob.com/redis/lists-rpop.html",target:"_blank",rel:"noopener noreferrer"},ds=n("code",null,"RPOP key",-1),hs=n("td",null,"移除列表的最后一个元素，返回值为移除的元素",-1),ms={href:"https://www.runoob.com/redis/lists-rpoplpush.html",target:"_blank",rel:"noopener noreferrer"},gs=n("code",null,"RPOPLPUSH source destination",-1),bs=n("td",null,"移除列表的最后一个元素，并将该元素添加到另一个列表并返回",-1),_s={href:"https://www.runoob.com/redis/lists-rpush.html",target:"_blank",rel:"noopener noreferrer"},qs=n("code",null,"RPUSH key value1 [value2]",-1),fs=n("td",null,"在列表中添加一个或多个值到列表尾部",-1),ws={href:"https://www.runoob.com/redis/lists-rpushx.html",target:"_blank",rel:"noopener noreferrer"},ys=n("code",null,"RPUSHX key value",-1),Es=n("td",null,"为已存在的列表添加值",-1),vs=t(`<h4 id="lpush-rpush-lrange" tabindex="-1"><a class="header-anchor" href="#lpush-rpush-lrange" aria-hidden="true">#</a> LPUSH / RPUSH / LRANGE</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
LPUSH key element <span class="token punctuation">[</span>element <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
RPUSH key element <span class="token punctuation">[</span>element <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
LRANGE key start stop

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> lpush left_list <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">5</span> <span class="token comment"># 左侧插入</span>
redis<span class="token operator">&gt;</span> <span class="token builtin class-name">type</span> left_list              --<span class="token operator">&gt;</span> list
redis<span class="token operator">&gt;</span> lrange left_list <span class="token number">0</span> <span class="token parameter variable">-1</span>  <span class="token comment"># 遍历left_list的值</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;5&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>

redis<span class="token operator">&gt;</span> rpush right_list <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">5</span> <span class="token comment"># 右侧插入</span>
redis<span class="token operator">&gt;</span> lrange right_list <span class="token number">0</span> <span class="token parameter variable">-1</span> <span class="token comment"># 遍历right_list的值</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;5&quot;</span>
</code></pre></div><h4 id="lpop-rpop" tabindex="-1"><a class="header-anchor" href="#lpop-rpop" aria-hidden="true">#</a> LPOP / RPOP</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
LPOP key <span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token comment"># 返回列表中删除后的第一个元素。如果最后一个元素被弹出，则删除列表</span>
RPOP key <span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token comment"># 返回并删除列表的最后元素。如果最后一个元素被弹出，则删除列表</span>

<span class="token comment"># 示例</span>
<span class="token comment">## LPOP</span>
redis<span class="token operator">&gt;</span> lrange right_list <span class="token number">0</span> <span class="token parameter variable">-1</span>   <span class="token comment"># right_list 初始值设置如下</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;5&quot;</span>
redis<span class="token operator">&gt;</span> lpop right_list          --<span class="token operator">&gt;</span> <span class="token string">&quot;1&quot;</span>  <span class="token comment"># 弹出第一个元素</span>
redis<span class="token operator">&gt;</span> lrange right_list <span class="token number">0</span> <span class="token parameter variable">-1</span>  <span class="token comment"># 第一个元素 1 已经不在了</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;5&quot;</span>
redis<span class="token operator">&gt;</span> lpop right_list <span class="token number">2</span>       <span class="token comment"># 从左侧开始弹出两个元素</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
redis<span class="token operator">&gt;</span> lrange right_list <span class="token number">0</span> <span class="token parameter variable">-1</span>  <span class="token comment"># 2 3 被弹出 剩下 4 5</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;5&quot;</span>

<span class="token comment">## RPOP</span>
redis<span class="token operator">&gt;</span> lrange right_list <span class="token number">0</span> <span class="token parameter variable">-1</span>   <span class="token comment"># right_list 初始值设置如下</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;5&quot;</span>
redis<span class="token operator">&gt;</span> rpop right_list          --<span class="token operator">&gt;</span> <span class="token string">&quot;1&quot;</span>  <span class="token comment"># 弹出最后一个元素</span>
redis<span class="token operator">&gt;</span> lrange right_list <span class="token number">0</span> <span class="token parameter variable">-1</span>  <span class="token comment"># 最后一个元素 5 已经不在了</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
redis<span class="token operator">&gt;</span> rpop right_list <span class="token number">2</span>       <span class="token comment"># 从右侧开始弹出两个元素</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
redis<span class="token operator">&gt;</span> lrange right_list <span class="token number">0</span> <span class="token parameter variable">-1</span>  <span class="token comment"># 4 3 被弹出 剩下 1 2</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
</code></pre></div><h4 id="lindex" tabindex="-1"><a class="header-anchor" href="#lindex" aria-hidden="true">#</a> LINDEX</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>LINDEX key index <span class="token comment"># 按照索引下标获得元素(从上到下)</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> rpush list <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span>     --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
redis<span class="token operator">&gt;</span> lrange list <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>

redis<span class="token operator">&gt;</span> lindex list <span class="token number">3</span>          --<span class="token operator">&gt;</span> <span class="token string">&quot;4&quot;</span> <span class="token comment"># 返回下标为3的元素</span>
</code></pre></div><h4 id="llen" tabindex="-1"><a class="header-anchor" href="#llen" aria-hidden="true">#</a> LLEN</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>LLEN key <span class="token comment"># 获取列表中的元素个数</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> rpush list <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span>     --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
redis<span class="token operator">&gt;</span> llen list              --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>  <span class="token comment"># 4个元素</span>
</code></pre></div><h4 id="lrem" tabindex="-1"><a class="header-anchor" href="#lrem" aria-hidden="true">#</a> LREM</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>LREM key count element  <span class="token comment"># 从list中删除count个为element的元素</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> rpush list <span class="token number">1</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">6</span>
redis<span class="token operator">&gt;</span> lrem list <span class="token number">2</span> <span class="token number">1</span>            --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
redis<span class="token operator">&gt;</span> lrange list <span class="token number">0</span> <span class="token parameter variable">-1</span>         <span class="token comment"># 上一步删除了2个为1的元素，所以剩下 2 1 2 3</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
</code></pre></div><h4 id="ltrim" tabindex="-1"><a class="header-anchor" href="#ltrim" aria-hidden="true">#</a> LTRIM</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
LTRIM key start stop <span class="token comment"># 截取指定范围内的元素再复制给 key</span>

<span class="token comment">#示例</span>
redis<span class="token operator">&gt;</span> rpush list <span class="token number">1</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">6</span>  <span class="token comment"># 初始值</span>
redis<span class="token operator">&gt;</span> ltrim list <span class="token number">2</span> <span class="token number">4</span>           --<span class="token operator">&gt;</span> OK           <span class="token comment"># 截取第2至第4的元素</span>
redis<span class="token operator">&gt;</span> lrange list <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
</code></pre></div><h4 id="rpoplpush" tabindex="-1"><a class="header-anchor" href="#rpoplpush" aria-hidden="true">#</a> RPOPLPUSH</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
RPOPLPUSH <span class="token builtin class-name">source</span> destination  <span class="token comment"># 返回弹出列表最后一个元素并将其移到另一个列表的开始</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> rpush list:1 One Two Three      --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
redis<span class="token operator">&gt;</span> rpush list:2 <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>              --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
redis<span class="token operator">&gt;</span> rpoplpush list:1 list:2         --<span class="token operator">&gt;</span> <span class="token string">&quot;Three&quot;</span>
redis<span class="token operator">&gt;</span> lrange list:1 <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;One&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;Two&quot;</span>
redis<span class="token operator">&gt;</span> lrange list:2 <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;Three&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
</code></pre></div><h4 id="lset" tabindex="-1"><a class="header-anchor" href="#lset" aria-hidden="true">#</a> LSET</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
LSET key index element <span class="token comment"># 通过索引设置列表中元素的值</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> rpush list One Two Three   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
redis<span class="token operator">&gt;</span> lset list <span class="token number">1</span> <span class="token number">2</span>              --<span class="token operator">&gt;</span> OK  <span class="token comment"># 将 list 列表的第一个元素设置为 2</span>
redis<span class="token operator">&gt;</span> lrange list <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;One&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;Three&quot;</span>
</code></pre></div><h4 id="linsert" tabindex="-1"><a class="header-anchor" href="#linsert" aria-hidden="true">#</a> LINSERT</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
LINSERT key BEFORE<span class="token operator">|</span>AFTER pivot element <span class="token comment"># 在列表中的另一个元素之前或之后插入一个元素</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> rpush list One Two Three   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
redis<span class="token operator">&gt;</span> lrange list <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;One&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;Two&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;Three&quot;</span>
redis<span class="token operator">&gt;</span> linsert list before Two <span class="token number">2</span>  --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span> <span class="token comment"># 在列表 list 元素Two 前面插入 2</span>
redis<span class="token operator">&gt;</span> lrange list <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;One&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;Two&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;Three&quot;</span>
</code></pre></div><h2 id="哈希表-hash" tabindex="-1"><a class="header-anchor" href="#哈希表-hash" aria-hidden="true">#</a> 哈希表(Hash)</h2><p>  redis hash 是一个 string 类型的 field(字段)和 value(值)的映射表(KV 模式不变，但 V 是一个键值对，即 Map&lt;String, Map&lt;Object, Object&gt;&gt;)，hash 特别适合用于存储对象。redis 中每个 hash 可以存储 2<sup>32</sup>-1 键值对(40 多亿)。</p><h3 id="汇总-2" tabindex="-1"><a class="header-anchor" href="#汇总-2" aria-hidden="true">#</a> 汇总</h3>`,21),Ts=n("thead",null,[n("tr",null,[n("th",null,"命令"),n("th",null,"描述")])],-1),Ss={href:"https://www.runoob.com/redis/hashes-hdel.html",target:"_blank",rel:"noopener noreferrer"},xs=n("code",null,"HDEL key field1 [field2]",-1),Rs=n("td",null,"删除一个或多个哈希表字段",-1),Hs={href:"https://www.runoob.com/redis/hashes-hexists.html",target:"_blank",rel:"noopener noreferrer"},Ns=n("code",null,"HEXISTS key field",-1),Os=n("td",null,"查看哈希表 key 中，指定的字段是否存在",-1),Ls={href:"https://www.runoob.com/redis/hashes-hget.html",target:"_blank",rel:"noopener noreferrer"},Ps=n("code",null,"HGET key field",-1),Ms=n("td",null,"获取存储在哈希表中指定字段的值",-1),Xs={href:"https://www.runoob.com/redis/hashes-hgetall.html",target:"_blank",rel:"noopener noreferrer"},As=n("code",null,"HGETALL key",-1),Is=n("td",null,"获取在哈希表中指定 key 的所有字段和值",-1),Cs={href:"https://www.runoob.com/redis/hashes-hincrby.html",target:"_blank",rel:"noopener noreferrer"},Bs=n("code",null,"HINCRBY key field increment",-1),Gs=n("td",null,"为哈希表 key 中的指定字段的整数值加上增量 increment",-1),Zs={href:"https://www.runoob.com/redis/hashes-hincrbyfloat.html",target:"_blank",rel:"noopener noreferrer"},Ds=n("code",null,"HINCRBYFLOAT key field increment",-1),zs=n("td",null,"为哈希表 key 中的指定字段的浮点数值加上增量 increment",-1),Ks={href:"https://www.runoob.com/redis/hashes-hkeys.html",target:"_blank",rel:"noopener noreferrer"},Us=n("code",null,"HKEYS key",-1),Ys=n("td",null,"获取哈希表中的所有字段",-1),Fs={href:"https://www.runoob.com/redis/hashes-hlen.html",target:"_blank",rel:"noopener noreferrer"},Vs=n("code",null,"HLEN key",-1),js=n("td",null,"获取哈希表中字段的数量",-1),Ws={href:"https://www.runoob.com/redis/hashes-hmget.html",target:"_blank",rel:"noopener noreferrer"},Js=n("code",null,"HMGET key field1 [field2]",-1),Qs=n("td",null,"获取所有给定字段的值",-1),$s={href:"https://www.runoob.com/redis/hashes-hmset.html",target:"_blank",rel:"noopener noreferrer"},na=n("code",null,"HMSET key field1 value1 [field2 value2 ]",-1),sa=n("td",null,"同时将多个 field-value (域-值)对设置到哈希表 key 中",-1),aa={href:"https://www.runoob.com/redis/hashes-hset.html",target:"_blank",rel:"noopener noreferrer"},ea=n("code",null,"HSET key field value",-1),ta=n("td",null,"将哈希表 key 中的字段 field 的值设为 value",-1),oa={href:"https://www.runoob.com/redis/hashes-hsetnx.html",target:"_blank",rel:"noopener noreferrer"},pa=n("code",null,"HSETNX key field value",-1),la=n("td",null,"只有在字段 field 不存在时，设置哈希表字段的值",-1),ra={href:"https://www.runoob.com/redis/hashes-hvals.html",target:"_blank",rel:"noopener noreferrer"},ca=n("code",null,"HVALS key",-1),ua=n("td",null,"获取哈希表中所有值",-1),ia={href:"https://www.runoob.com/redis/hashes-hscan.html",target:"_blank",rel:"noopener noreferrer"},ka=n("code",null,"HSCAN key cursor [MATCH pattern] [COUNT count]",-1),da=n("td",null,"迭代哈希表中的键值对",-1),ha=t(`<h4 id="hset-hget-hmset-hmget-hgetall-hdel" tabindex="-1"><a class="header-anchor" href="#hset-hget-hmset-hmget-hgetall-hdel" aria-hidden="true">#</a> HSET / HGET / HMSET / HMGET / HGETALL / HDEL</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
HSET key field value <span class="token punctuation">[</span>field value <span class="token punctuation">..</span>.<span class="token punctuation">]</span>  <span class="token comment"># 创建或修改哈希表中字段的值</span>
HGET key field                          <span class="token comment"># 返回哈希表中指定字段的值</span>
HMSET key field value <span class="token punctuation">[</span>field value <span class="token punctuation">..</span>.<span class="token punctuation">]</span> <span class="token comment"># 同时将多个键值对设置到哈希表 key 中</span>
HMGET key field <span class="token punctuation">[</span>field <span class="token punctuation">..</span>.<span class="token punctuation">]</span>             <span class="token comment"># 获取所有给定字段的值</span>
HGETALL key                             <span class="token comment"># 获取在哈希表中指定 key 的所有字段和值</span>
HDEL key field <span class="token punctuation">[</span>field <span class="token punctuation">..</span>.<span class="token punctuation">]</span>              <span class="token comment"># 删除一个或多个哈希表字段</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> hset student:001 name LiHua age <span class="token number">20</span>      --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
redis<span class="token operator">&gt;</span> hget student:001 name                   --<span class="token operator">&gt;</span> <span class="token string">&quot;LiHua&quot;</span>
redis<span class="token operator">&gt;</span> hmget student:001 name age
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;LiHua&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;20&quot;</span>

redis<span class="token operator">&gt;</span> hmset student:001 name ZhangSan age <span class="token number">18</span>  --<span class="token operator">&gt;</span> OK
redis<span class="token operator">&gt;</span> hmget student:001 name age
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;ZhangSan&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;18&quot;</span>

redis<span class="token operator">&gt;</span> hgetall student:001
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;name&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;ZhangSan&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;age&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;18&quot;</span>
redis<span class="token operator">&gt;</span> hdel student:001 age                   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span> <span class="token comment"># 删除 age</span>
redis<span class="token operator">&gt;</span> hgetall student:001
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;name&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;ZhangSan&quot;</span>
</code></pre></div>`,2),ma={class:"hint-container tip"},ga=n("p",{class:"hint-container-title"},"HSET / HMSET 都可以设置多个键值对，有什么区别？",-1),ba={href:"https://redis.io/commands/hmset/",target:"_blank",rel:"noopener noreferrer"},_a=t(`<h4 id="hlen" tabindex="-1"><a class="header-anchor" href="#hlen" aria-hidden="true">#</a> HLEN</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
HLEN key <span class="token comment"># 获取哈希表中字段的数量</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> hgetall student:002
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;name&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;ZhangSan&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;age&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;18&quot;</span>
redis<span class="token operator">&gt;</span> hlen student:002      --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span> <span class="token comment"># 两组</span>
</code></pre></div><h4 id="hexists" tabindex="-1"><a class="header-anchor" href="#hexists" aria-hidden="true">#</a> HEXISTS</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
HEXISTS key field <span class="token comment"># 查看哈希表 key 中，指定的字段是否存在</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> hgetall student:002
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;name&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;ZhangSan&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;age&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;18&quot;</span>
redis<span class="token operator">&gt;</span> hexists student:002 nage  --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span> <span class="token comment"># 不存在 nage</span>
redis<span class="token operator">&gt;</span> hexists student:002 name  --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span> <span class="token comment"># 存在 name</span>
</code></pre></div><h4 id="hkeys-hvals" tabindex="-1"><a class="header-anchor" href="#hkeys-hvals" aria-hidden="true">#</a> HKEYS / HVALS</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
HKEYS key <span class="token comment"># 获取哈希表中的所有字段</span>
HVALS key <span class="token comment"># 获取哈希表中的所有值</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> hgetall student:002
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;name&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;ZhangSan&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;age&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;18&quot;</span>

redis<span class="token operator">&gt;</span> hkeys student:002
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;name&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;age&quot;</span>
redis<span class="token operator">&gt;</span> hvals student:002
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;ZhangSan&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;18&quot;</span>
</code></pre></div><h4 id="hincrby-hincrbyfloat" tabindex="-1"><a class="header-anchor" href="#hincrby-hincrbyfloat" aria-hidden="true">#</a> HINCRBY / HINCRBYFLOAT</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
HINCRBY key field increment       <span class="token comment"># 为哈希表 key 中的指定字段的整数值加上增量 increment</span>
HINCRBYFLOAT key field increment  <span class="token comment"># 为哈希表 key 中的指定字段的浮点数值加上增量 increment</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> hgetall student:002
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;name&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;ZhangSan&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;age&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;18&quot;</span>
redis<span class="token operator">&gt;</span> hincrby student:002 age <span class="token parameter variable">-3</span>         --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">15</span> <span class="token comment"># age - 3</span>
redis<span class="token operator">&gt;</span> hincrbyfloat student:002 age <span class="token number">2.5</span>   --<span class="token operator">&gt;</span> <span class="token string">&quot;17.5&quot;</span>       <span class="token comment"># age + 2.5</span>
redis<span class="token operator">&gt;</span> hgetall student:002
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;name&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;ZhangSan&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;age&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;17.5&quot;</span>
</code></pre></div><h4 id="hsetnx" tabindex="-1"><a class="header-anchor" href="#hsetnx" aria-hidden="true">#</a> HSETNX</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
HSETNX key field value <span class="token comment"># 仅当哈希中的字段不存在时设置该字段的值</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> hgetall student:001
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;name&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;ZhangSan&quot;</span>
redis<span class="token operator">&gt;</span> hsetnx student:001 name LiHua    --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>  <span class="token comment"># name 存在 修改不成功</span>
redis<span class="token operator">&gt;</span> hsetnx student:001 age <span class="token number">20</span>        --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>  <span class="token comment"># age 不存在 修改成功</span>
redis<span class="token operator">&gt;</span> hgetall student:001
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;name&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;ZhangSan&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;age&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;20&quot;</span>
</code></pre></div><h2 id="集合-set" tabindex="-1"><a class="header-anchor" href="#集合-set" aria-hidden="true">#</a> 集合(Set)</h2><p>  redis 的 Set 是 String 类型的无序集合。集合成员是唯一的，这就意味着集合中不能出现重复的数据。集合对象的编码可以是 intset 或者 hashtable。</p><p>  redis 中集合是通过哈希表实现的，所以添加，删除，查找的复杂度都是 O(1)。集合中最大的成员数为 2<sup>32</sup>-1 (每个集合可存储 40 多亿个成员)。</p><h3 id="汇总-3" tabindex="-1"><a class="header-anchor" href="#汇总-3" aria-hidden="true">#</a> 汇总</h3>`,14),qa=n("thead",null,[n("tr",null,[n("th",null,"命令"),n("th",null,"描述")])],-1),fa={href:"https://www.runoob.com/redis/sets-sadd.html",target:"_blank",rel:"noopener noreferrer"},wa=n("code",null,"SADD key member1 [member2]",-1),ya=n("td",null,"向集合添加一个或多个成员",-1),Ea={href:"https://www.runoob.com/redis/sets-scard.html",target:"_blank",rel:"noopener noreferrer"},va=n("code",null,"SCARD key",-1),Ta=n("td",null,"获取集合的成员数",-1),Sa={href:"https://www.runoob.com/redis/sets-sdiff.html",target:"_blank",rel:"noopener noreferrer"},xa=n("code",null,"SDIFF key1 [key2]",-1),Ra=n("td",null,"返回第一个集合与其他集合之间的差异",-1),Ha={href:"https://www.runoob.com/redis/sets-sdiffstore.html",target:"_blank",rel:"noopener noreferrer"},Na=n("code",null,"SDIFFSTORE destination key1 [key2]",-1),Oa=n("td",null,"返回给定所有集合的差集并存储在 destination 中",-1),La={href:"https://www.runoob.com/redis/sets-sinter.html",target:"_blank",rel:"noopener noreferrer"},Pa=n("code",null,"SINTER key1 [key2]",-1),Ma=n("td",null,"返回给定所有集合的交集",-1),Xa={href:"https://www.runoob.com/redis/sets-sinterstore.html",target:"_blank",rel:"noopener noreferrer"},Aa=n("code",null,"SINTERSTORE destination key1 [key2]",-1),Ia=n("td",null,"返回给定所有集合的交集并存储在 destination 中",-1),Ca={href:"https://www.runoob.com/redis/sets-sismember.html",target:"_blank",rel:"noopener noreferrer"},Ba=n("code",null,"SISMEMBER key member",-1),Ga=n("td",null,"判断 member 元素是否是集合 key 的成员",-1),Za={href:"https://www.runoob.com/redis/sets-smembers.html",target:"_blank",rel:"noopener noreferrer"},Da=n("code",null,"SMEMBERS key",-1),za=n("td",null,"返回集合中的所有成员",-1),Ka={href:"https://www.runoob.com/redis/sets-smove.html",target:"_blank",rel:"noopener noreferrer"},Ua=n("code",null,"SMOVE source destination member",-1),Ya=n("td",null,"将 member 元素从 source 集合移动到 destination 集合",-1),Fa={href:"https://www.runoob.com/redis/sets-spop.html",target:"_blank",rel:"noopener noreferrer"},Va=n("code",null,"SPOP key",-1),ja=n("td",null,"移除并返回集合中的一个随机元素",-1),Wa={href:"https://www.runoob.com/redis/sets-srandmember.html",target:"_blank",rel:"noopener noreferrer"},Ja=n("code",null,"SRANDMEMBER key [count]",-1),Qa=n("td",null,"返回集合中一个或多个随机数",-1),$a={href:"https://www.runoob.com/redis/sets-srem.html",target:"_blank",rel:"noopener noreferrer"},ne=n("code",null,"SREM key member1 [member2]",-1),se=n("td",null,"移除集合中一个或多个成员",-1),ae={href:"https://www.runoob.com/redis/sets-sunion.html",target:"_blank",rel:"noopener noreferrer"},ee=n("code",null,"SUNION key1 [key2]",-1),te=n("td",null,"返回所有给定集合的并集",-1),oe={href:"https://www.runoob.com/redis/sets-sunionstore.html",target:"_blank",rel:"noopener noreferrer"},pe=n("code",null,"SUNIONSTORE destination key1 [key2]",-1),le=n("td",null,"所有给定集合的并集存储在 destination 集合中",-1),re={href:"https://www.runoob.com/redis/sets-sscan.html",target:"_blank",rel:"noopener noreferrer"},ce=n("code",null,"SSCAN key cursor [MATCH pattern] [COUNT count]",-1),ue=n("td",null,"迭代集合中的元素",-1),ie=t(`<h4 id="sadd-smembers" tabindex="-1"><a class="header-anchor" href="#sadd-smembers" aria-hidden="true">#</a> SADD / SMEMBERS</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
SADD key member <span class="token punctuation">[</span>member <span class="token punctuation">..</span>.<span class="token punctuation">]</span>  <span class="token comment"># 向集合中添加一个或多个成员，如果 key 不存在，则创建</span>
SMEMBERS key                  <span class="token comment"># 返回集合中的所有成员</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> sadd <span class="token builtin class-name">set</span> One Two Two One Three  --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
redis<span class="token operator">&gt;</span> smembers <span class="token builtin class-name">set</span>  <span class="token comment"># 重复元素无法被添加进去</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;One&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;Two&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;Three&quot;</span>
</code></pre></div><h4 id="sismember" tabindex="-1"><a class="header-anchor" href="#sismember" aria-hidden="true">#</a> SISMEMBER</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
SISMEMBER key member <span class="token comment"># 判断 member 元素是否是集合 key 的成员</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> smembers <span class="token builtin class-name">set</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;One&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;Two&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;Three&quot;</span>

redis<span class="token operator">&gt;</span> sismember <span class="token builtin class-name">set</span> One   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>  <span class="token comment"># set 中存在 One</span>
redis<span class="token operator">&gt;</span> sismember <span class="token builtin class-name">set</span> Four  --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>  <span class="token comment"># set 中不存在 Four</span>
</code></pre></div><h4 id="scard" tabindex="-1"><a class="header-anchor" href="#scard" aria-hidden="true">#</a> SCARD</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
SCARD key <span class="token comment"># 返回集合中的成员数量</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> smembers <span class="token builtin class-name">set</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;One&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;Two&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;Three&quot;</span>

redis<span class="token operator">&gt;</span> scard <span class="token builtin class-name">set</span>  --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
</code></pre></div><h4 id="srandmember" tabindex="-1"><a class="header-anchor" href="#srandmember" aria-hidden="true">#</a> SRANDMEMBER</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
SRANDMEMBER key <span class="token punctuation">[</span>count<span class="token punctuation">]</span>  <span class="token comment"># 从集合中获取一个或多个随机成员</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> smembers <span class="token builtin class-name">set</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;One&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;Two&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;Three&quot;</span>

redis<span class="token operator">&gt;</span> srandmember <span class="token builtin class-name">set</span> <span class="token number">2</span>  <span class="token comment"># 随机返回集合中的两个成员</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;One&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;Three&quot;</span>
redis<span class="token operator">&gt;</span> srandmember <span class="token builtin class-name">set</span> <span class="token number">2</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;Two&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;Three&quot;</span>
redis<span class="token operator">&gt;</span> srandmember <span class="token builtin class-name">set</span> <span class="token number">2</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;Two&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;Three&quot;</span>
redis<span class="token operator">&gt;</span> srandmember <span class="token builtin class-name">set</span> <span class="token number">2</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;One&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;Two&quot;</span>
</code></pre></div><h4 id="spop" tabindex="-1"><a class="header-anchor" href="#spop" aria-hidden="true">#</a> SPOP</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
<span class="token comment"># 从集合中删除一个或多个随机成员后返回这些成员。如果弹出最后一个成员，则删除该集合。</span>
SPOP key <span class="token punctuation">[</span>count<span class="token punctuation">]</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> smembers <span class="token builtin class-name">set</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;One&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;Two&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;Three&quot;</span>

redis<span class="token operator">&gt;</span> spop <span class="token builtin class-name">set</span> <span class="token number">2</span>   <span class="token comment"># 随机移除两个成员</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;One&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;Two&quot;</span>
redis<span class="token operator">&gt;</span> smembers <span class="token builtin class-name">set</span> <span class="token comment"># 移除后剩下元素 Three</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;Three&quot;</span>
</code></pre></div><h4 id="smove" tabindex="-1"><a class="header-anchor" href="#smove" aria-hidden="true">#</a> SMOVE</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
SMOVE <span class="token builtin class-name">source</span> destination member <span class="token comment"># 将成员从一个集合移动到另一个集合</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> sadd set:1 One Two Three   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
redis<span class="token operator">&gt;</span> sadd set:2 <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>           --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
redis<span class="token operator">&gt;</span> smove set:1 set:2 Two      --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span> <span class="token comment"># 将 set:1 中的 Two 移动到 set:2</span>

redis<span class="token operator">&gt;</span> smembers set:1
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;One&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;Three&quot;</span>
redis<span class="token operator">&gt;</span> smembers set:2
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;Two&quot;</span>
</code></pre></div><h4 id="集合运算" tabindex="-1"><a class="header-anchor" href="#集合运算" aria-hidden="true">#</a> 集合运算</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>

<span class="token comment"># 示例</span>

</code></pre></div><h2 id="有序集合-zset" tabindex="-1"><a class="header-anchor" href="#有序集合-zset" aria-hidden="true">#</a> 有序集合(ZSet)</h2><h3 id="汇总-4" tabindex="-1"><a class="header-anchor" href="#汇总-4" aria-hidden="true">#</a> 汇总</h3>`,16),ke=n("thead",null,[n("tr",null,[n("th",null,"命令"),n("th",null,"描述")])],-1),de={href:"https://www.runoob.com/redis/sorted-sets-zadd.html",target:"_blank",rel:"noopener noreferrer"},he=n("code",null,"ZADD key score1 member1 [score2 member2]",-1),me=n("td",null,"向有序集合添加一个或多个成员，或者更新已存在成员的分数",-1),ge={href:"https://www.runoob.com/redis/sorted-sets-zcard.html",target:"_blank",rel:"noopener noreferrer"},be=n("code",null,"ZCARD key",-1),_e=n("td",null,"获取有序集合的成员数",-1),qe={href:"https://www.runoob.com/redis/sorted-sets-zcount.html",target:"_blank",rel:"noopener noreferrer"},fe=n("code",null,"ZCOUNT key min max",-1),we=n("td",null,"计算在有序集合中指定区间分数的成员数",-1),ye={href:"https://www.runoob.com/redis/sorted-sets-zincrby.html",target:"_blank",rel:"noopener noreferrer"},Ee=n("code",null,"ZINCRBY key increment member",-1),ve=n("td",null,"有序集合中对指定成员的分数加上增量 increment",-1),Te={href:"https://www.runoob.com/redis/sorted-sets-zinterstore.html",target:"_blank",rel:"noopener noreferrer"},Se=n("code",null,"ZINTERSTORE destination numkeys key [key ...]",-1),xe=n("td",null,"计算给定的一个或多个有序集的交集并将结果集存储在新的有序集合 destination 中",-1),Re={href:"https://www.runoob.com/redis/sorted-sets-zlexcount.html",target:"_blank",rel:"noopener noreferrer"},He=n("code",null,"ZLEXCOUNT key min max",-1),Ne=n("td",null,"在有序集合中计算指定字典区间内成员数量",-1),Oe={href:"https://www.runoob.com/redis/sorted-sets-zrange.html",target:"_blank",rel:"noopener noreferrer"},Le=n("code",null,"ZRANGE key start stop [WITHSCORES]",-1),Pe=n("td",null,"通过索引区间返回有序集合指定区间内的成员",-1),Me={href:"https://www.runoob.com/redis/sorted-sets-zrangebylex.html",target:"_blank",rel:"noopener noreferrer"},Xe=n("code",null,"ZRANGEBYLEX key min max [LIMIT offset count]",-1),Ae=n("td",null,"通过字典区间返回有序集合的成员",-1),Ie={href:"https://www.runoob.com/redis/sorted-sets-zrangebyscore.html",target:"_blank",rel:"noopener noreferrer"},Ce=n("code",null,"ZRANGEBYSCORE key min max [WITHSCORES] [LIMIT]",-1),Be=n("td",null,"通过分数返回有序集合指定区间内的成员",-1),Ge={href:"https://www.runoob.com/redis/sorted-sets-zrank.html",target:"_blank",rel:"noopener noreferrer"},Ze=n("code",null,"ZRANK key member",-1),De=n("td",null,"返回有序集合中指定成员的索引",-1),ze={href:"https://www.runoob.com/redis/sorted-sets-zrem.html",target:"_blank",rel:"noopener noreferrer"},Ke=n("code",null,"ZREM key member [member ...]",-1),Ue=n("td",null,"移除有序集合中的一个或多个成员",-1),Ye={href:"https://www.runoob.com/redis/sorted-sets-zremrangebylex.html",target:"_blank",rel:"noopener noreferrer"},Fe=n("code",null,"ZREMRANGEBYLEX key min max",-1),Ve=n("td",null,"移除有序集合中给定的字典区间的所有成员",-1),je={href:"https://www.runoob.com/redis/sorted-sets-zremrangebyrank.html",target:"_blank",rel:"noopener noreferrer"},We=n("code",null,"ZREMRANGEBYRANK key start stop",-1),Je=n("td",null,"移除有序集合中给定的排名区间的所有成员",-1),Qe={href:"https://www.runoob.com/redis/sorted-sets-zremrangebyscore.html",target:"_blank",rel:"noopener noreferrer"},$e=n("code",null,"ZREMRANGEBYSCORE key min max",-1),nt=n("td",null,"移除有序集合中给定的分数区间的所有成员",-1),st={href:"https://www.runoob.com/redis/sorted-sets-zrevrange.html",target:"_blank",rel:"noopener noreferrer"},at=n("code",null,"ZREVRANGE key start stop [WITHSCORES]",-1),et=n("td",null,"返回有序集中指定区间内的成员，通过索引，分数从高到低",-1),tt={href:"https://www.runoob.com/redis/sorted-sets-zrevrangebyscore.html",target:"_blank",rel:"noopener noreferrer"},ot=n("code",null,"ZREVRANGEBYSCORE key max min [WITHSCORES]",-1),pt=n("td",null,"返回有序集中指定分数区间内的成员，分数从高到低排序",-1),lt={href:"https://www.runoob.com/redis/sorted-sets-zrevrank.html",target:"_blank",rel:"noopener noreferrer"},rt=n("code",null,"ZREVRANK key member",-1),ct=n("td",null,"返回有序集合中指定成员的排名，有序集成员按分数值递减(从大到小)排序",-1),ut={href:"https://www.runoob.com/redis/sorted-sets-zscore.html",target:"_blank",rel:"noopener noreferrer"},it=n("code",null,"ZSCORE key member",-1),kt=n("td",null,"返回有序集中，成员的分数值",-1),dt={href:"https://www.runoob.com/redis/sorted-sets-zunionstore.html",target:"_blank",rel:"noopener noreferrer"},ht=n("code",null,"ZUNIONSTORE destination numkeys key [key ...]",-1),mt=n("td",null,"计算给定的一个或多个有序集的并集，并存储在新的 key 中",-1),gt={href:"https://www.runoob.com/redis/sorted-sets-zscan.html",target:"_blank",rel:"noopener noreferrer"},bt=n("code",null,"ZSCAN key cursor [MATCH pattern] [COUNT count]",-1),_t=n("td",null,"迭代有序集合中的元素（包括元素成员和元素分值）",-1),qt=t('<h2 id="地理空间-geo" tabindex="-1"><a class="header-anchor" href="#地理空间-geo" aria-hidden="true">#</a> 地理空间(GEO)</h2><h2 id="基数统计-hyperloglog" tabindex="-1"><a class="header-anchor" href="#基数统计-hyperloglog" aria-hidden="true">#</a> 基数统计(HyperLogLog)</h2><h3 id="汇总-5" tabindex="-1"><a class="header-anchor" href="#汇总-5" aria-hidden="true">#</a> 汇总</h3>',3),ft=n("thead",null,[n("tr",null,[n("th",null,"命令"),n("th",null,"描述")])],-1),wt={href:"https://www.runoob.com/redis/hyperloglog-pfadd.html",target:"_blank",rel:"noopener noreferrer"},yt=n("code",null,"PFADD key element [element ...]",-1),Et=n("td",null,"添加指定元素到 HyperLogLog 中。",-1),vt={href:"https://www.runoob.com/redis/hyperloglog-pfcount.html",target:"_blank",rel:"noopener noreferrer"},Tt=n("code",null,"PFCOUNT key [key ...]",-1),St=n("td",null,"返回给定 HyperLogLog 的基数估算值。",-1),xt={href:"https://www.runoob.com/redis/hyperloglog-pfmerge.html",target:"_blank",rel:"noopener noreferrer"},Rt=n("code",null,"PFMERGE destkey sourcekey [sourcekey ...]",-1),Ht=n("td",null,"将多个 HyperLogLog 合并为一个 HyperLogLog",-1),Nt=t('<h2 id="位图-bitmap" tabindex="-1"><a class="header-anchor" href="#位图-bitmap" aria-hidden="true">#</a> 位图(bitmap)</h2><h2 id="位域-bitfield" tabindex="-1"><a class="header-anchor" href="#位域-bitfield" aria-hidden="true">#</a> 位域(bitfield)</h2><h2 id="流-stream" tabindex="-1"><a class="header-anchor" href="#流-stream" aria-hidden="true">#</a> 流(Stream)</h2>',3);function Ot(Lt,Pt){const s=p("ExternalLinkIcon");return l(),r("div",null,[n("p",null,[e("  数据类型参考(官方)："),n("a",i,[e("https://redis.io/docs/data-types/"),a(s)]),k,e("   Java 学习笔记："),n("a",d,[e("https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis"),a(s)]),h,e("   Redis 教程(Runoob)："),n("a",m,[e("https://www.runoob.com/redis/redis-tutorial.html"),a(s)])]),g,n("table",null,[b,n("tbody",null,[n("tr",null,[n("td",null,[n("a",_,[q,a(s)])]),f]),n("tr",null,[n("td",null,[n("a",w,[y,a(s)])]),E]),n("tr",null,[n("td",null,[n("a",v,[T,a(s)])]),S]),n("tr",null,[n("td",null,[n("a",x,[R,a(s)])]),H]),n("tr",null,[n("td",null,[n("a",N,[O,a(s)])]),L]),n("tr",null,[n("td",null,[n("a",P,[M,a(s)])]),X]),n("tr",null,[n("td",null,[n("a",A,[I,a(s)])]),C]),n("tr",null,[n("td",null,[n("a",B,[G,a(s)])]),Z]),n("tr",null,[n("td",null,[n("a",D,[z,a(s)])]),K]),n("tr",null,[n("td",null,[n("a",U,[Y,a(s)])]),F]),n("tr",null,[n("td",null,[n("a",V,[j,a(s)])]),W]),n("tr",null,[n("td",null,[n("a",J,[Q,a(s)])]),$]),n("tr",null,[n("td",null,[n("a",nn,[sn,a(s)])]),an]),n("tr",null,[n("td",null,[n("a",en,[tn,a(s)])]),on]),n("tr",null,[n("td",null,[n("a",pn,[ln,a(s)])]),rn]),n("tr",null,[n("td",null,[n("a",cn,[un,a(s)])]),kn]),n("tr",null,[n("td",null,[n("a",dn,[hn,a(s)])]),mn]),n("tr",null,[n("td",null,[n("a",gn,[bn,a(s)])]),_n]),n("tr",null,[n("td",null,[n("a",qn,[fn,a(s)])]),wn]),n("tr",null,[n("td",null,[n("a",yn,[En,a(s)])]),vn])])]),Tn,n("table",null,[Sn,n("tbody",null,[n("tr",null,[n("td",null,[n("a",xn,[Rn,a(s)])]),Hn]),n("tr",null,[n("td",null,[n("a",Nn,[On,a(s)])]),Ln]),n("tr",null,[n("td",null,[n("a",Pn,[Mn,a(s)])]),Xn]),n("tr",null,[n("td",null,[n("a",An,[In,a(s)])]),Cn]),n("tr",null,[n("td",null,[n("a",Bn,[Gn,a(s)])]),Zn]),n("tr",null,[n("td",null,[n("a",Dn,[zn,a(s)])]),Kn]),n("tr",null,[n("td",null,[n("a",Un,[Yn,a(s)])]),Fn]),n("tr",null,[n("td",null,[n("a",Vn,[jn,a(s)])]),Wn]),n("tr",null,[n("td",null,[n("a",Jn,[Qn,a(s)])]),$n]),n("tr",null,[n("td",null,[n("a",ns,[ss,a(s)])]),as]),n("tr",null,[n("td",null,[n("a",es,[ts,a(s)])]),os]),n("tr",null,[n("td",null,[n("a",ps,[ls,a(s)])]),rs]),n("tr",null,[n("td",null,[n("a",cs,[us,a(s)])]),is]),n("tr",null,[n("td",null,[n("a",ks,[ds,a(s)])]),hs]),n("tr",null,[n("td",null,[n("a",ms,[gs,a(s)])]),bs]),n("tr",null,[n("td",null,[n("a",_s,[qs,a(s)])]),fs]),n("tr",null,[n("td",null,[n("a",ws,[ys,a(s)])]),Es])])]),vs,n("table",null,[Ts,n("tbody",null,[n("tr",null,[n("td",null,[n("a",Ss,[xs,a(s)])]),Rs]),n("tr",null,[n("td",null,[n("a",Hs,[Ns,a(s)])]),Os]),n("tr",null,[n("td",null,[n("a",Ls,[Ps,a(s)])]),Ms]),n("tr",null,[n("td",null,[n("a",Xs,[As,a(s)])]),Is]),n("tr",null,[n("td",null,[n("a",Cs,[Bs,a(s)])]),Gs]),n("tr",null,[n("td",null,[n("a",Zs,[Ds,a(s)])]),zs]),n("tr",null,[n("td",null,[n("a",Ks,[Us,a(s)])]),Ys]),n("tr",null,[n("td",null,[n("a",Fs,[Vs,a(s)])]),js]),n("tr",null,[n("td",null,[n("a",Ws,[Js,a(s)])]),Qs]),n("tr",null,[n("td",null,[n("a",$s,[na,a(s)])]),sa]),n("tr",null,[n("td",null,[n("a",aa,[ea,a(s)])]),ta]),n("tr",null,[n("td",null,[n("a",oa,[pa,a(s)])]),la]),n("tr",null,[n("td",null,[n("a",ra,[ca,a(s)])]),ua]),n("tr",null,[n("td",null,[n("a",ia,[ka,a(s)])]),da])])]),ha,n("div",ma,[ga,n("p",null,[e("  开始 HSET 仅支持设置单个键值对，如果想设置多个就需要使用 HMSET；但是现在根据"),n("a",ba,[e("官方文档"),a(s)]),e("，HMSET 自 Redis 4.0.0 开始弃用，如果需要设置多个键值对可以使用 HSET 代替。")])]),_a,n("table",null,[qa,n("tbody",null,[n("tr",null,[n("td",null,[n("a",fa,[wa,a(s)])]),ya]),n("tr",null,[n("td",null,[n("a",Ea,[va,a(s)])]),Ta]),n("tr",null,[n("td",null,[n("a",Sa,[xa,a(s)])]),Ra]),n("tr",null,[n("td",null,[n("a",Ha,[Na,a(s)])]),Oa]),n("tr",null,[n("td",null,[n("a",La,[Pa,a(s)])]),Ma]),n("tr",null,[n("td",null,[n("a",Xa,[Aa,a(s)])]),Ia]),n("tr",null,[n("td",null,[n("a",Ca,[Ba,a(s)])]),Ga]),n("tr",null,[n("td",null,[n("a",Za,[Da,a(s)])]),za]),n("tr",null,[n("td",null,[n("a",Ka,[Ua,a(s)])]),Ya]),n("tr",null,[n("td",null,[n("a",Fa,[Va,a(s)])]),ja]),n("tr",null,[n("td",null,[n("a",Wa,[Ja,a(s)])]),Qa]),n("tr",null,[n("td",null,[n("a",$a,[ne,a(s)])]),se]),n("tr",null,[n("td",null,[n("a",ae,[ee,a(s)])]),te]),n("tr",null,[n("td",null,[n("a",oe,[pe,a(s)])]),le]),n("tr",null,[n("td",null,[n("a",re,[ce,a(s)])]),ue])])]),ie,n("table",null,[ke,n("tbody",null,[n("tr",null,[n("td",null,[n("a",de,[he,a(s)])]),me]),n("tr",null,[n("td",null,[n("a",ge,[be,a(s)])]),_e]),n("tr",null,[n("td",null,[n("a",qe,[fe,a(s)])]),we]),n("tr",null,[n("td",null,[n("a",ye,[Ee,a(s)])]),ve]),n("tr",null,[n("td",null,[n("a",Te,[Se,a(s)])]),xe]),n("tr",null,[n("td",null,[n("a",Re,[He,a(s)])]),Ne]),n("tr",null,[n("td",null,[n("a",Oe,[Le,a(s)])]),Pe]),n("tr",null,[n("td",null,[n("a",Me,[Xe,a(s)])]),Ae]),n("tr",null,[n("td",null,[n("a",Ie,[Ce,a(s)])]),Be]),n("tr",null,[n("td",null,[n("a",Ge,[Ze,a(s)])]),De]),n("tr",null,[n("td",null,[n("a",ze,[Ke,a(s)])]),Ue]),n("tr",null,[n("td",null,[n("a",Ye,[Fe,a(s)])]),Ve]),n("tr",null,[n("td",null,[n("a",je,[We,a(s)])]),Je]),n("tr",null,[n("td",null,[n("a",Qe,[$e,a(s)])]),nt]),n("tr",null,[n("td",null,[n("a",st,[at,a(s)])]),et]),n("tr",null,[n("td",null,[n("a",tt,[ot,a(s)])]),pt]),n("tr",null,[n("td",null,[n("a",lt,[rt,a(s)])]),ct]),n("tr",null,[n("td",null,[n("a",ut,[it,a(s)])]),kt]),n("tr",null,[n("td",null,[n("a",dt,[ht,a(s)])]),mt]),n("tr",null,[n("td",null,[n("a",gt,[bt,a(s)])]),_t])])]),qt,n("table",null,[ft,n("tbody",null,[n("tr",null,[n("td",null,[n("a",wt,[yt,a(s)])]),Et]),n("tr",null,[n("td",null,[n("a",vt,[Tt,a(s)])]),St]),n("tr",null,[n("td",null,[n("a",xt,[Rt,a(s)])]),Ht])])]),Nt])}const Xt=o(u,[["render",Ot],["__file","data_types.html.vue"]]);export{Xt as default};
