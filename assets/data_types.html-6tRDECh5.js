import{_ as o,l as p,o as r,c as l,g as n,k as s,i as t,a as e}from"./app-udH3LXWk.js";const c="/assets/linked_list-ZsBuJdsg.png",u="/assets/bitmap-1a53ZRfO.png",i={},k={href:"https://redis.io/docs/data-types/",target:"_blank",rel:"noopener noreferrer"},d=n("br",null,null,-1),m={href:"https://mrjokersince1997.github.io/My-Notes/#/%E5%85%B6%E5%AE%83/%E6%95%B0%E6%8D%AE%E5%BA%93/Redis",target:"_blank",rel:"noopener noreferrer"},h=n("br",null,null,-1),b={href:"https://www.runoob.com/redis/redis-tutorial.html",target:"_blank",rel:"noopener noreferrer"},g=e(`<h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2><p>① 在 Redis 中单个指令都是原子性操作，通过指令操作 Redis 数据时无需担心线程安全问题。<br> ② Redis 以 key-value 的形式保存数据：key 值一定为 string 类型，而 value 值支持多种类型。</p><h3 id="存储区域" tabindex="-1"><a class="header-anchor" href="#存储区域" aria-hidden="true">#</a> 存储区域</h3><p>  Redis 将数据存储分为多个相互独立的区域，将 Redis 操作局限在自己的存储区域内。通常划分为 16 个（编号 0-15），默认使用编号 0 。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">select</span> <span class="token number">1</span>          <span class="token comment"># 改用 1 号存储区域</span>

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
</code></pre></div><h2 id="字符串-string" tabindex="-1"><a class="header-anchor" href="#字符串-string" aria-hidden="true">#</a> 字符串(String)</h2><p>  string 是 redis 最基本的数据类型，一个 key 对应一个 value。它是二进制安全的，意思是 redis 的 string 可以包含任何数据，比如 jpg 图片或者序列化对象等；一个 redis 中字符串 value 最多可以是 512M。</p><h3 id="汇总" tabindex="-1"><a class="header-anchor" href="#汇总" aria-hidden="true">#</a> 汇总</h3>`,18),_=n("thead",null,[n("tr",null,[n("th",null,"命令"),n("th",null,"描述")])],-1),q={href:"https://www.runoob.com/redis/strings-set.html",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"SET key value",-1),y=n("td",null,"设置指定 key 的值",-1),w={href:"https://www.runoob.com/redis/strings-get.html",target:"_blank",rel:"noopener noreferrer"},T=n("code",null,"GET key",-1),E=n("td",null,"获取指定 key 的值",-1),v={href:"https://www.runoob.com/redis/strings-getrange.html",target:"_blank",rel:"noopener noreferrer"},S=n("code",null,"GETRANGE key start end",-1),R=n("td",null,"返回 key 中字符串值的子字符",-1),x={href:"https://www.runoob.com/redis/strings-getset.html",target:"_blank",rel:"noopener noreferrer"},O=n("code",null,"GETSET key value",-1),I=n("td",null,"将给定 key 的值设为 value ，并返回 key 的旧值(old value)",-1),H={href:"https://www.runoob.com/redis/strings-getbit.html",target:"_blank",rel:"noopener noreferrer"},N=n("code",null,"GETBIT key offset",-1),z=n("td",null,"对 key 所储存的字符串值，获取指定偏移量上的位(bit)",-1),L={href:"https://www.runoob.com/redis/strings-mget.html",target:"_blank",rel:"noopener noreferrer"},M=n("code",null,"MGET key1 [key2..]",-1),A=n("td",null,"获取所有(一个或多个)给定 key 的值",-1),D={href:"https://www.runoob.com/redis/strings-setbit.html",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"SETBIT key offset value",-1),Z=n("td",null,"对 key 所储存的字符串值，设置或清除指定偏移量上的位(bit)",-1),P={href:"https://www.runoob.com/redis/strings-setex.html",target:"_blank",rel:"noopener noreferrer"},X=n("code",null,"SETEX key seconds value",-1),B=n("td",null,"将值 value 关联到 key ，并将 key 的过期时间设为 seconds (以秒为单位)",-1),G={href:"https://www.runoob.com/redis/strings-setnx.html",target:"_blank",rel:"noopener noreferrer"},K=n("code",null,"SETNX key value",-1),U=n("td",null,"只有在 key 不存在时设置 key 的值",-1),F={href:"https://www.runoob.com/redis/strings-setrange.html",target:"_blank",rel:"noopener noreferrer"},Y=n("code",null,"SETRANGE key offset value",-1),W=n("td",null,"用 value 参数覆写给定 key 所储存的字符串值，从偏移量 offset 开始",-1),V={href:"https://www.runoob.com/redis/strings-strlen.html",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"STRLEN key",-1),Q=n("td",null,"返回 key 所储存的字符串值的长度",-1),J={href:"https://www.runoob.com/redis/strings-mset.html",target:"_blank",rel:"noopener noreferrer"},$=n("code",null,"MSET key value [key value ...]",-1),nn=n("td",null,"同时设置一个或多个 key-value 对",-1),sn={href:"https://www.runoob.com/redis/strings-msetnx.html",target:"_blank",rel:"noopener noreferrer"},an=n("code",null,"MSETNX key value [key value ...]",-1),tn=n("td",null,"同时设置一个或多个 key-value 对，当且仅当所有给定 key 都不存在",-1),en={href:"https://www.runoob.com/redis/strings-psetex.html",target:"_blank",rel:"noopener noreferrer"},on=n("code",null,"PSETEX key milliseconds value",-1),pn=n("td",null,"这个命令和 SETEX 命令相似，但它以毫秒为单位设置 key 的生存时间，而不是像 SETEX 命令那样，以秒为单位",-1),rn={href:"https://www.runoob.com/redis/strings-incr.html",target:"_blank",rel:"noopener noreferrer"},ln=n("code",null,"INCR key",-1),cn=n("td",null,"将 key 中储存的数字值增一",-1),un={href:"https://www.runoob.com/redis/strings-incrby.html",target:"_blank",rel:"noopener noreferrer"},kn=n("code",null,"INCRBY key increment",-1),dn=n("td",null,"将 key 所储存的值加上给定的增量值（increment）",-1),mn={href:"https://www.runoob.com/redis/strings-incrbyfloat.html",target:"_blank",rel:"noopener noreferrer"},hn=n("code",null,"INCRBYFLOAT key increment",-1),bn=n("td",null,"将 key 所储存的值加上给定的浮点增量值（increment）",-1),gn={href:"https://www.runoob.com/redis/strings-decr.html",target:"_blank",rel:"noopener noreferrer"},_n=n("code",null,"DECR key",-1),qn=n("td",null,"将 key 中储存的数字值减一",-1),fn={href:"https://www.runoob.com/redis/strings-decrby.html",target:"_blank",rel:"noopener noreferrer"},yn=n("code",null,"DECRBY key decrement",-1),wn=n("td",null,"key 所储存的值减去给定的减量值（decrement）",-1),Tn={href:"https://www.runoob.com/redis/strings-append.html",target:"_blank",rel:"noopener noreferrer"},En=n("code",null,"APPEND key value",-1),vn=n("td",null,"如果 key 已经存在并且是一个字符串， APPEND 命令将指定的 value 追加到该 key 原来值（value）的末尾",-1),Sn=e(`<h4 id="最常用" tabindex="-1"><a class="header-anchor" href="#最常用" aria-hidden="true">#</a> 最常用</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>SET key value <span class="token punctuation">[</span>NX <span class="token operator">|</span> XX<span class="token punctuation">]</span> <span class="token punctuation">[</span>GET<span class="token punctuation">]</span> <span class="token punctuation">[</span>EX seconds <span class="token operator">|</span> PX milliseconds <span class="token operator">|</span>
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
</code></pre></div><h2 id="列表-list" tabindex="-1"><a class="header-anchor" href="#列表-list" aria-hidden="true">#</a> 列表(List)</h2><p>  列表是简单的字符串列表(单值多 value)，按照插入顺序排列。你可以添加一个元素到列表的头部(左边)或者尾部(右边)。它的底层实际是个双端链表，最多可以包含 2<sup>32</sup>-1 个元素(4294967295，每个列表超过 40 亿个元素)。主要功能有 pop/push 等，一般用在栈、队列、消息队列等场景。<br>   所谓的双端就是它的左侧和右侧都可以插入添加，如果键不存在，则创建新的链表，如果键已经存在，则新增内容，如果值全移除，对应的键也就消失了。对两端的操作性能很高，通过索引下标的操作中间的节点性能会较差。</p><figure><img src="`+c+'" alt="双端链表.png" width="400" tabindex="0" loading="lazy"><figcaption>双端链表.png</figcaption></figure><h3 id="汇总-1" tabindex="-1"><a class="header-anchor" href="#汇总-1" aria-hidden="true">#</a> 汇总</h3>',24),Rn=n("thead",null,[n("tr",null,[n("th",null,"命令"),n("th",null,"描述")])],-1),xn={href:"https://www.runoob.com/redis/lists-blpop.html",target:"_blank",rel:"noopener noreferrer"},On=n("code",null,"BLPOP key1 [key2 ] timeout",-1),In=n("td",null,"移出并获取列表的第一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止",-1),Hn={href:"https://www.runoob.com/redis/lists-brpop.html",target:"_blank",rel:"noopener noreferrer"},Nn=n("code",null,"BRPOP key1 [key2 ] timeout",-1),zn=n("td",null,"移出并获取列表的最后一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止",-1),Ln={href:"https://www.runoob.com/redis/lists-brpoplpush.html",target:"_blank",rel:"noopener noreferrer"},Mn=n("code",null,"BRPOPLPUSH source destination timeout",-1),An=n("td",null,"从列表中弹出一个值，将弹出的元素插入到另外一个列表中并返回它； 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止",-1),Dn={href:"https://www.runoob.com/redis/lists-lindex.html",target:"_blank",rel:"noopener noreferrer"},Cn=n("code",null,"LINDEX key index",-1),Zn=n("td",null,"通过索引获取列表中的元素",-1),Pn={href:"https://www.runoob.com/redis/lists-linsert.html",target:"_blank",rel:"noopener noreferrer"},Xn=n("code",null,"LINSERT key BEFORE",-1),Bn=n("td",null,"在列表的元素前或者后插入元素",-1),Gn={href:"https://www.runoob.com/redis/lists-llen.html",target:"_blank",rel:"noopener noreferrer"},Kn=n("code",null,"LLEN key",-1),Un=n("td",null,"获取列表长度",-1),Fn={href:"https://www.runoob.com/redis/lists-lpop.html",target:"_blank",rel:"noopener noreferrer"},Yn=n("code",null,"LPOP key",-1),Wn=n("td",null,"移出并获取列表的第一个元素",-1),Vn={href:"https://www.runoob.com/redis/lists-lpush.html",target:"_blank",rel:"noopener noreferrer"},jn=n("code",null,"LPUSH key value1 [value2]",-1),Qn=n("td",null,"将一个或多个值插入到列表头部",-1),Jn={href:"https://www.runoob.com/redis/lists-lpushx.html",target:"_blank",rel:"noopener noreferrer"},$n=n("code",null,"LPUSHX key value",-1),ns=n("td",null,"将一个值插入到已存在的列表头部",-1),ss={href:"https://www.runoob.com/redis/lists-lrange.html",target:"_blank",rel:"noopener noreferrer"},as=n("code",null,"LRANGE key start stop",-1),ts=n("td",null,"获取列表指定范围内的元素",-1),es={href:"https://www.runoob.com/redis/lists-lrem.html",target:"_blank",rel:"noopener noreferrer"},os=n("code",null,"LREM key count value",-1),ps=n("td",null,"移除列表元素",-1),rs={href:"https://www.runoob.com/redis/lists-lset.html",target:"_blank",rel:"noopener noreferrer"},ls=n("code",null,"LSET key index value",-1),cs=n("td",null,"通过索引设置列表元素的值",-1),us={href:"https://www.runoob.com/redis/lists-ltrim.html",target:"_blank",rel:"noopener noreferrer"},is=n("code",null,"LTRIM key start stop",-1),ks=n("td",null,"对一个列表进行修剪(trim)，就是说，让列表只保留指定区间内的元素，不在指定区间之内的元素都将被删除",-1),ds={href:"https://www.runoob.com/redis/lists-rpop.html",target:"_blank",rel:"noopener noreferrer"},ms=n("code",null,"RPOP key",-1),hs=n("td",null,"移除列表的最后一个元素，返回值为移除的元素",-1),bs={href:"https://www.runoob.com/redis/lists-rpoplpush.html",target:"_blank",rel:"noopener noreferrer"},gs=n("code",null,"RPOPLPUSH source destination",-1),_s=n("td",null,"移除列表的最后一个元素，并将该元素添加到另一个列表并返回",-1),qs={href:"https://www.runoob.com/redis/lists-rpush.html",target:"_blank",rel:"noopener noreferrer"},fs=n("code",null,"RPUSH key value1 [value2]",-1),ys=n("td",null,"在列表中添加一个或多个值到列表尾部",-1),ws={href:"https://www.runoob.com/redis/lists-rpushx.html",target:"_blank",rel:"noopener noreferrer"},Ts=n("code",null,"RPUSHX key value",-1),Es=n("td",null,"为已存在的列表添加值",-1),vs=e(`<h4 id="lpush-rpush-lrange" tabindex="-1"><a class="header-anchor" href="#lpush-rpush-lrange" aria-hidden="true">#</a> LPUSH / RPUSH / LRANGE</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
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
</code></pre></div><h2 id="哈希表-hash" tabindex="-1"><a class="header-anchor" href="#哈希表-hash" aria-hidden="true">#</a> 哈希表(Hash)</h2><p>  redis hash 是一个 string 类型的 field(字段)和 value(值)的映射表(KV 模式不变，但 V 是一个键值对，即 Map&lt;String, Map&lt;Object, Object&gt;&gt;)，hash 特别适合用于存储对象。redis 中每个 hash 可以存储 2<sup>32</sup>-1 键值对(40 多亿)。</p><h3 id="汇总-2" tabindex="-1"><a class="header-anchor" href="#汇总-2" aria-hidden="true">#</a> 汇总</h3>`,21),Ss=n("thead",null,[n("tr",null,[n("th",null,"命令"),n("th",null,"描述")])],-1),Rs={href:"https://www.runoob.com/redis/hashes-hdel.html",target:"_blank",rel:"noopener noreferrer"},xs=n("code",null,"HDEL key field1 [field2]",-1),Os=n("td",null,"删除一个或多个哈希表字段",-1),Is={href:"https://www.runoob.com/redis/hashes-hexists.html",target:"_blank",rel:"noopener noreferrer"},Hs=n("code",null,"HEXISTS key field",-1),Ns=n("td",null,"查看哈希表 key 中，指定的字段是否存在",-1),zs={href:"https://www.runoob.com/redis/hashes-hget.html",target:"_blank",rel:"noopener noreferrer"},Ls=n("code",null,"HGET key field",-1),Ms=n("td",null,"获取存储在哈希表中指定字段的值",-1),As={href:"https://www.runoob.com/redis/hashes-hgetall.html",target:"_blank",rel:"noopener noreferrer"},Ds=n("code",null,"HGETALL key",-1),Cs=n("td",null,"获取在哈希表中指定 key 的所有字段和值",-1),Zs={href:"https://www.runoob.com/redis/hashes-hincrby.html",target:"_blank",rel:"noopener noreferrer"},Ps=n("code",null,"HINCRBY key field increment",-1),Xs=n("td",null,"为哈希表 key 中的指定字段的整数值加上增量 increment",-1),Bs={href:"https://www.runoob.com/redis/hashes-hincrbyfloat.html",target:"_blank",rel:"noopener noreferrer"},Gs=n("code",null,"HINCRBYFLOAT key field increment",-1),Ks=n("td",null,"为哈希表 key 中的指定字段的浮点数值加上增量 increment",-1),Us={href:"https://www.runoob.com/redis/hashes-hkeys.html",target:"_blank",rel:"noopener noreferrer"},Fs=n("code",null,"HKEYS key",-1),Ys=n("td",null,"获取哈希表中的所有字段",-1),Ws={href:"https://www.runoob.com/redis/hashes-hlen.html",target:"_blank",rel:"noopener noreferrer"},Vs=n("code",null,"HLEN key",-1),js=n("td",null,"获取哈希表中字段的数量",-1),Qs={href:"https://www.runoob.com/redis/hashes-hmget.html",target:"_blank",rel:"noopener noreferrer"},Js=n("code",null,"HMGET key field1 [field2]",-1),$s=n("td",null,"获取所有给定字段的值",-1),na={href:"https://www.runoob.com/redis/hashes-hmset.html",target:"_blank",rel:"noopener noreferrer"},sa=n("code",null,"HMSET key field1 value1 [field2 value2 ]",-1),aa=n("td",null,"同时将多个 field-value (域-值)对设置到哈希表 key 中",-1),ta={href:"https://www.runoob.com/redis/hashes-hset.html",target:"_blank",rel:"noopener noreferrer"},ea=n("code",null,"HSET key field value",-1),oa=n("td",null,"将哈希表 key 中的字段 field 的值设为 value",-1),pa={href:"https://www.runoob.com/redis/hashes-hsetnx.html",target:"_blank",rel:"noopener noreferrer"},ra=n("code",null,"HSETNX key field value",-1),la=n("td",null,"只有在字段 field 不存在时，设置哈希表字段的值",-1),ca={href:"https://www.runoob.com/redis/hashes-hvals.html",target:"_blank",rel:"noopener noreferrer"},ua=n("code",null,"HVALS key",-1),ia=n("td",null,"获取哈希表中所有值",-1),ka={href:"https://www.runoob.com/redis/hashes-hscan.html",target:"_blank",rel:"noopener noreferrer"},da=n("code",null,"HSCAN key cursor [MATCH pattern] [COUNT count]",-1),ma=n("td",null,"迭代哈希表中的键值对",-1),ha=e(`<h4 id="hset-hget-hmset-hmget-hgetall-hdel" tabindex="-1"><a class="header-anchor" href="#hset-hget-hmset-hmget-hgetall-hdel" aria-hidden="true">#</a> HSET / HGET / HMSET / HMGET / HGETALL / HDEL</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
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
</code></pre></div>`,2),ba={class:"hint-container tip"},ga=n("p",{class:"hint-container-title"},"HSET / HMSET 都可以设置多个键值对，有什么区别？",-1),_a={href:"https://redis.io/commands/hmset/",target:"_blank",rel:"noopener noreferrer"},qa=e(`<h4 id="hlen" tabindex="-1"><a class="header-anchor" href="#hlen" aria-hidden="true">#</a> HLEN</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
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
</code></pre></div><h2 id="集合-set" tabindex="-1"><a class="header-anchor" href="#集合-set" aria-hidden="true">#</a> 集合(Set)</h2><p>  redis 的 Set 是 String 类型的无序集合。集合成员是唯一的，这就意味着集合中不能出现重复的数据。集合对象的编码可以是 intset 或者 hashtable。</p><p>  redis 中集合是通过哈希表实现的，所以添加，删除，查找的复杂度都是 O(1)。集合中最大的成员数为 2<sup>32</sup>-1 (每个集合可存储 40 多亿个成员)。</p><h3 id="汇总-3" tabindex="-1"><a class="header-anchor" href="#汇总-3" aria-hidden="true">#</a> 汇总</h3>`,14),fa=n("thead",null,[n("tr",null,[n("th",null,"命令"),n("th",null,"描述")])],-1),ya={href:"https://www.runoob.com/redis/sets-sadd.html",target:"_blank",rel:"noopener noreferrer"},wa=n("code",null,"SADD key member1 [member2]",-1),Ta=n("td",null,"向集合添加一个或多个成员",-1),Ea={href:"https://www.runoob.com/redis/sets-scard.html",target:"_blank",rel:"noopener noreferrer"},va=n("code",null,"SCARD key",-1),Sa=n("td",null,"获取集合的成员数",-1),Ra={href:"https://www.runoob.com/redis/sets-sdiff.html",target:"_blank",rel:"noopener noreferrer"},xa=n("code",null,"SDIFF key1 [key2]",-1),Oa=n("td",null,"返回第一个集合与其他集合之间的差异",-1),Ia={href:"https://www.runoob.com/redis/sets-sdiffstore.html",target:"_blank",rel:"noopener noreferrer"},Ha=n("code",null,"SDIFFSTORE destination key1 [key2]",-1),Na=n("td",null,"返回给定所有集合的差集并存储在 destination 中",-1),za={href:"https://www.runoob.com/redis/sets-sinter.html",target:"_blank",rel:"noopener noreferrer"},La=n("code",null,"SINTER key1 [key2]",-1),Ma=n("td",null,"返回给定所有集合的交集",-1),Aa={href:"https://www.runoob.com/redis/sets-sinterstore.html",target:"_blank",rel:"noopener noreferrer"},Da=n("code",null,"SINTERSTORE destination key1 [key2]",-1),Ca=n("td",null,"返回给定所有集合的交集并存储在 destination 中",-1),Za={href:"https://www.runoob.com/redis/sets-sismember.html",target:"_blank",rel:"noopener noreferrer"},Pa=n("code",null,"SISMEMBER key member",-1),Xa=n("td",null,"判断 member 元素是否是集合 key 的成员",-1),Ba={href:"https://www.runoob.com/redis/sets-smembers.html",target:"_blank",rel:"noopener noreferrer"},Ga=n("code",null,"SMEMBERS key",-1),Ka=n("td",null,"返回集合中的所有成员",-1),Ua={href:"https://www.runoob.com/redis/sets-smove.html",target:"_blank",rel:"noopener noreferrer"},Fa=n("code",null,"SMOVE source destination member",-1),Ya=n("td",null,"将 member 元素从 source 集合移动到 destination 集合",-1),Wa={href:"https://www.runoob.com/redis/sets-spop.html",target:"_blank",rel:"noopener noreferrer"},Va=n("code",null,"SPOP key",-1),ja=n("td",null,"移除并返回集合中的一个随机元素",-1),Qa={href:"https://www.runoob.com/redis/sets-srandmember.html",target:"_blank",rel:"noopener noreferrer"},Ja=n("code",null,"SRANDMEMBER key [count]",-1),$a=n("td",null,"返回集合中一个或多个随机数",-1),nt={href:"https://www.runoob.com/redis/sets-srem.html",target:"_blank",rel:"noopener noreferrer"},st=n("code",null,"SREM key member1 [member2]",-1),at=n("td",null,"移除集合中一个或多个成员",-1),tt={href:"https://www.runoob.com/redis/sets-sunion.html",target:"_blank",rel:"noopener noreferrer"},et=n("code",null,"SUNION key1 [key2]",-1),ot=n("td",null,"返回所有给定集合的并集",-1),pt={href:"https://www.runoob.com/redis/sets-sunionstore.html",target:"_blank",rel:"noopener noreferrer"},rt=n("code",null,"SUNIONSTORE destination key1 [key2]",-1),lt=n("td",null,"所有给定集合的并集存储在 destination 集合中",-1),ct={href:"https://www.runoob.com/redis/sets-sscan.html",target:"_blank",rel:"noopener noreferrer"},ut=n("code",null,"SSCAN key cursor [MATCH pattern] [COUNT count]",-1),it=n("td",null,"迭代集合中的元素",-1),kt=e(`<h4 id="sadd-smembers" tabindex="-1"><a class="header-anchor" href="#sadd-smembers" aria-hidden="true">#</a> SADD / SMEMBERS</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
SADD key member <span class="token punctuation">[</span>member <span class="token punctuation">..</span>.<span class="token punctuation">]</span>  <span class="token comment"># 向集合中添加一个或多个成员，如果 key 不存在，则创建</span>
SMEMBERS key                  <span class="token comment"># 返回集合中的所有成员</span>
SREM key member <span class="token punctuation">[</span>member <span class="token punctuation">..</span>.<span class="token punctuation">]</span>  <span class="token comment"># 移除集合中的一个或多个成员</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> sadd <span class="token builtin class-name">set</span> One Two Two One Three  --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
redis<span class="token operator">&gt;</span> smembers <span class="token builtin class-name">set</span>  <span class="token comment"># 重复元素无法被添加进去</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;One&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;Two&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;Three&quot;</span>

redis<span class="token operator">&gt;</span> srem <span class="token builtin class-name">set</span> One                   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span> <span class="token comment"># 移除元素 One</span>
redis<span class="token operator">&gt;</span> smembers <span class="token builtin class-name">set</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;Two&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;Three&quot;</span>
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
SDIFF key <span class="token punctuation">[</span>key <span class="token punctuation">..</span>.<span class="token punctuation">]</span>                             <span class="token comment"># 返回多个集合的差值（差集）</span>
SUNION key <span class="token punctuation">[</span>key <span class="token punctuation">..</span>.<span class="token punctuation">]</span>                            <span class="token comment"># 返回所有给定集合的并集</span>
SINTER key <span class="token punctuation">[</span>key <span class="token punctuation">..</span>.<span class="token punctuation">]</span>                            <span class="token comment"># 返回多个集合的交集</span>
SINTERCARD numkeys key <span class="token punctuation">[</span>key <span class="token punctuation">..</span>.<span class="token punctuation">]</span> <span class="token punctuation">[</span>LIMIT limit<span class="token punctuation">]</span>  <span class="token comment"># 返回多个集合的交集的成员数</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> sadd set:1 a b c <span class="token number">1</span> <span class="token number">2</span>          --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">5</span>   <span class="token comment"># A 的初始值</span>
redis<span class="token operator">&gt;</span> sadd set:2 <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> a x          --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">5</span>   <span class="token comment"># B 的初始值</span>

<span class="token comment"># 差集</span>
redis<span class="token operator">&gt;</span> <span class="token function">sdiff</span> set:1 set:2 <span class="token comment"># set:1 有，但 set:2 没有的</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;b&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;c&quot;</span>
redis<span class="token operator">&gt;</span> <span class="token function">sdiff</span> set:2 set:1 <span class="token comment"># set:2 有，但在 set:1 没有的</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;x&quot;</span>

<span class="token comment"># 并集</span>
redis<span class="token operator">&gt;</span> sunion set:1 set:2
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;a&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;b&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;c&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">6</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">7</span><span class="token punctuation">)</span> <span class="token string">&quot;x&quot;</span>

<span class="token comment"># 交集</span>
redis<span class="token operator">&gt;</span> sinter set:1 set:2
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;a&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>

<span class="token comment"># 只有两个set 写3报错</span>
redis<span class="token operator">&gt;</span> sintercard <span class="token number">3</span> set:1 set:2           --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> ERR Number of keys can&#39;t be greater than number of args
redis<span class="token operator">&gt;</span> sintercard <span class="token number">2</span> set:1 set:2           --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span> <span class="token comment"># set:1 与 set:2 交集的个数</span>
redis<span class="token operator">&gt;</span> sintercard <span class="token number">2</span> set:1 set:2 LIMIT <span class="token number">1</span>   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span> <span class="token comment"># 限制返回一个</span>
redis<span class="token operator">&gt;</span> sintercard <span class="token number">2</span> set:1 set:2 LIMIT <span class="token number">2</span>   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span> <span class="token comment"># 限制返回两个</span>
redis<span class="token operator">&gt;</span> sintercard <span class="token number">2</span> set:1 set:2 LIMIT <span class="token number">3</span>   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span> <span class="token comment"># 限制返回三个</span>
redis<span class="token operator">&gt;</span> sintercard <span class="token number">2</span> set:1 set:2 LIMIT <span class="token number">4</span>   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span> <span class="token comment"># 限制返回四个(但是最多只有3个，因此为3)</span>
</code></pre></div><h5 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h5><p><strong>抽奖</strong>：</p><table><thead><tr><th>说明</th><th>命令</th></tr></thead><tbody><tr><td>用户 ID，立即参与按钮</td><td><code>sadd key 用户ID</code></td></tr><tr><td>显示有多少人参与</td><td><code>scard key</code></td></tr><tr><td>抽奖(从 set 中随机选取 N 个人中奖)</td><td><code>srandmember key 2</code> 随机抽两个，元素不删除<br><code>spop key 3</code> 随机抽三个，元素删除</td></tr></tbody></table><p><strong>微信朋友圈点赞</strong>：</p><table><thead><tr><th>说明</th><th>命令</th></tr></thead><tbody><tr><td>新增点赞</td><td><code>sadd pub:msgID 点赞用户ID1 点赞用户ID2 ... [点赞用户IDn]</code></td></tr><tr><td>取消点赞</td><td><code>srem pub:msgID 点赞用户ID1</code></td></tr><tr><td>展示所有点赞过的用户</td><td><code>smember pub:msgID</code></td></tr><tr><td>点赞用户数统计</td><td><code>scard pub:msgID</code></td></tr><tr><td>判断某个朋友是否对楼主点赞过</td><td><code>sismember pub:msgID 用户ID</code></td></tr></tbody></table><p><strong>QQ 可能认识的人</strong>：差集<br><strong>QQ 共同好友</strong>：并集</p><h2 id="有序集合-zset" tabindex="-1"><a class="header-anchor" href="#有序集合-zset" aria-hidden="true">#</a> 有序集合(ZSet)</h2><p>  Redis 有序集合和集合一样也是 string 类型元素的集合，且不允许重复。不同的是每个元素都会关联一个 double 类型的分数。Redis 正是通过分数来为集合中的成员进行从小到大的排序。<br>   有序集合的成员是唯一的，但分数(score)缺可以重复。<br>   集合是通过哈希表实现的，所以添加、删除、查找的复杂度都是 O(1)。集合中最大的成员数为 2<sup>32</sup>-1 (每个集合可以存放 40 多亿个成员)。</p><h3 id="汇总-4" tabindex="-1"><a class="header-anchor" href="#汇总-4" aria-hidden="true">#</a> 汇总</h3>`,23),dt=n("thead",null,[n("tr",null,[n("th",null,"命令"),n("th",null,"描述")])],-1),mt={href:"https://www.runoob.com/redis/sorted-sets-zadd.html",target:"_blank",rel:"noopener noreferrer"},ht=n("code",null,"ZADD key score1 member1 [score2 member2]",-1),bt=n("td",null,"向有序集合添加一个或多个成员，或者更新已存在成员的分数",-1),gt={href:"https://www.runoob.com/redis/sorted-sets-zcard.html",target:"_blank",rel:"noopener noreferrer"},_t=n("code",null,"ZCARD key",-1),qt=n("td",null,"获取有序集合的成员数",-1),ft={href:"https://www.runoob.com/redis/sorted-sets-zcount.html",target:"_blank",rel:"noopener noreferrer"},yt=n("code",null,"ZCOUNT key min max",-1),wt=n("td",null,"计算在有序集合中指定区间分数的成员数",-1),Tt={href:"https://www.runoob.com/redis/sorted-sets-zincrby.html",target:"_blank",rel:"noopener noreferrer"},Et=n("code",null,"ZINCRBY key increment member",-1),vt=n("td",null,"有序集合中对指定成员的分数加上增量 increment",-1),St={href:"https://www.runoob.com/redis/sorted-sets-zinterstore.html",target:"_blank",rel:"noopener noreferrer"},Rt=n("code",null,"ZINTERSTORE destination numkeys key [key ...]",-1),xt=n("td",null,"计算给定的一个或多个有序集的交集并将结果集存储在新的有序集合 destination 中",-1),Ot={href:"https://www.runoob.com/redis/sorted-sets-zlexcount.html",target:"_blank",rel:"noopener noreferrer"},It=n("code",null,"ZLEXCOUNT key min max",-1),Ht=n("td",null,"在有序集合中计算指定字典区间内成员数量",-1),Nt={href:"https://www.runoob.com/redis/sorted-sets-zrange.html",target:"_blank",rel:"noopener noreferrer"},zt=n("code",null,"ZRANGE key start stop [WITHSCORES]",-1),Lt=n("td",null,"通过索引区间返回有序集合指定区间内的成员",-1),Mt={href:"https://www.runoob.com/redis/sorted-sets-zrangebylex.html",target:"_blank",rel:"noopener noreferrer"},At=n("code",null,"ZRANGEBYLEX key min max [LIMIT offset count]",-1),Dt=n("td",null,"通过字典区间返回有序集合的成员",-1),Ct={href:"https://www.runoob.com/redis/sorted-sets-zrangebyscore.html",target:"_blank",rel:"noopener noreferrer"},Zt=n("code",null,"ZRANGEBYSCORE key min max [WITHSCORES] [LIMIT]",-1),Pt=n("td",null,"通过分数返回有序集合指定区间内的成员",-1),Xt={href:"https://www.runoob.com/redis/sorted-sets-zrank.html",target:"_blank",rel:"noopener noreferrer"},Bt=n("code",null,"ZRANK key member",-1),Gt=n("td",null,"返回有序集合中指定成员的索引",-1),Kt={href:"https://www.runoob.com/redis/sorted-sets-zrem.html",target:"_blank",rel:"noopener noreferrer"},Ut=n("code",null,"ZREM key member [member ...]",-1),Ft=n("td",null,"移除有序集合中的一个或多个成员",-1),Yt={href:"https://www.runoob.com/redis/sorted-sets-zremrangebylex.html",target:"_blank",rel:"noopener noreferrer"},Wt=n("code",null,"ZREMRANGEBYLEX key min max",-1),Vt=n("td",null,"移除有序集合中给定的字典区间的所有成员",-1),jt={href:"https://www.runoob.com/redis/sorted-sets-zremrangebyrank.html",target:"_blank",rel:"noopener noreferrer"},Qt=n("code",null,"ZREMRANGEBYRANK key start stop",-1),Jt=n("td",null,"移除有序集合中给定的排名区间的所有成员",-1),$t={href:"https://www.runoob.com/redis/sorted-sets-zremrangebyscore.html",target:"_blank",rel:"noopener noreferrer"},ne=n("code",null,"ZREMRANGEBYSCORE key min max",-1),se=n("td",null,"移除有序集合中给定的分数区间的所有成员",-1),ae={href:"https://www.runoob.com/redis/sorted-sets-zrevrange.html",target:"_blank",rel:"noopener noreferrer"},te=n("code",null,"ZREVRANGE key start stop [WITHSCORES]",-1),ee=n("td",null,"返回有序集中指定区间内的成员，通过索引，分数从高到低",-1),oe={href:"https://www.runoob.com/redis/sorted-sets-zrevrangebyscore.html",target:"_blank",rel:"noopener noreferrer"},pe=n("code",null,"ZREVRANGEBYSCORE key max min [WITHSCORES]",-1),re=n("td",null,"返回有序集中指定分数区间内的成员，分数从高到低排序",-1),le={href:"https://www.runoob.com/redis/sorted-sets-zrevrank.html",target:"_blank",rel:"noopener noreferrer"},ce=n("code",null,"ZREVRANK key member",-1),ue=n("td",null,"返回有序集合中指定成员的排名，有序集成员按分数值递减(从大到小)排序",-1),ie={href:"https://www.runoob.com/redis/sorted-sets-zscore.html",target:"_blank",rel:"noopener noreferrer"},ke=n("code",null,"ZSCORE key member",-1),de=n("td",null,"返回有序集中，成员的分数值",-1),me={href:"https://www.runoob.com/redis/sorted-sets-zunionstore.html",target:"_blank",rel:"noopener noreferrer"},he=n("code",null,"ZUNIONSTORE destination numkeys key [key ...]",-1),be=n("td",null,"计算给定的一个或多个有序集的并集，并存储在新的 key 中",-1),ge={href:"https://www.runoob.com/redis/sorted-sets-zscan.html",target:"_blank",rel:"noopener noreferrer"},_e=n("code",null,"ZSCAN key cursor [MATCH pattern] [COUNT count]",-1),qe=n("td",null,"迭代有序集合中的元素（包括元素成员和元素分值）",-1),fe=e(`<h4 id="zadd-zrem-zrange" tabindex="-1"><a class="header-anchor" href="#zadd-zrem-zrange" aria-hidden="true">#</a> ZADD / ZREM / ZRANGE</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
<span class="token comment"># 向有序集合添加一个或多个成员，或者更新已存在成员的分数</span>
ZADD key <span class="token punctuation">[</span>NX<span class="token operator">|</span>XX<span class="token punctuation">]</span> <span class="token punctuation">[</span>GT<span class="token operator">|</span>LT<span class="token punctuation">]</span> <span class="token punctuation">[</span>CH<span class="token punctuation">]</span> <span class="token punctuation">[</span>INCR<span class="token punctuation">]</span> score member <span class="token punctuation">[</span>score member <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
ZREM key member <span class="token punctuation">[</span>member <span class="token punctuation">..</span>.<span class="token punctuation">]</span>  <span class="token comment"># 移除有序集合中的一个或多个成员</span>
<span class="token comment"># 返回索引范围内已排序集合中的成员</span>
ZRANGE key start stop <span class="token punctuation">[</span>BYSCORE<span class="token operator">|</span>BYLEX<span class="token punctuation">]</span> <span class="token punctuation">[</span>REV<span class="token punctuation">]</span> <span class="token punctuation">[</span>LIMIT offset count<span class="token punctuation">]</span> <span class="token punctuation">[</span>WITHSCORES<span class="token punctuation">]</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> zadd zset:1 <span class="token number">10</span> v1 <span class="token number">20</span> v2 <span class="token number">30</span> v3 <span class="token number">40</span> v4 <span class="token number">50</span> v5 <span class="token number">50</span> v6  --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">6</span>
redis<span class="token operator">&gt;</span> zrem zset:1 v3                                   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span> <span class="token comment"># 移除元素 v3</span>
redis<span class="token operator">&gt;</span> zrange zset:1 <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;v1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;v2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;v4&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;v5&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;v6&quot;</span>

redis<span class="token operator">&gt;</span> zrange zset:1 <span class="token number">0</span> <span class="token parameter variable">-1</span> withscores <span class="token comment"># 带着分数返回</span>
 <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;v1&quot;</span>
 <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;10&quot;</span>
 <span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;v2&quot;</span>
 <span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;20&quot;</span>
 <span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;v4&quot;</span>
 <span class="token number">6</span><span class="token punctuation">)</span> <span class="token string">&quot;40&quot;</span>
 <span class="token number">7</span><span class="token punctuation">)</span> <span class="token string">&quot;v5&quot;</span>
 <span class="token number">8</span><span class="token punctuation">)</span> <span class="token string">&quot;50&quot;</span>
 <span class="token number">9</span><span class="token punctuation">)</span> <span class="token string">&quot;v6&quot;</span>
<span class="token number">10</span><span class="token punctuation">)</span> <span class="token string">&quot;50&quot;</span>
</code></pre></div><h4 id="zrevrange" tabindex="-1"><a class="header-anchor" href="#zrevrange" aria-hidden="true">#</a> ZREVRANGE</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
ZREVRANGE key start stop <span class="token punctuation">[</span>WITHSCORES<span class="token punctuation">]</span> <span class="token comment"># 返回有序集中指定区间内的成员，分数从高到低</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> zadd zset:1 <span class="token number">10</span> v1 <span class="token number">30</span> v2 <span class="token number">20</span> v3 <span class="token number">40</span> v4 <span class="token number">70</span> v5 <span class="token number">50</span> v6  --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">6</span>
redis<span class="token operator">&gt;</span> zrevrange zset:1 <span class="token number">0</span> <span class="token parameter variable">-1</span> withscores
 <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;v5&quot;</span>
 <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;70&quot;</span>
 <span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;v6&quot;</span>
 <span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;50&quot;</span>
 <span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;v4&quot;</span>
 <span class="token number">6</span><span class="token punctuation">)</span> <span class="token string">&quot;40&quot;</span>
 <span class="token number">7</span><span class="token punctuation">)</span> <span class="token string">&quot;v2&quot;</span>
 <span class="token number">8</span><span class="token punctuation">)</span> <span class="token string">&quot;30&quot;</span>
 <span class="token number">9</span><span class="token punctuation">)</span> <span class="token string">&quot;v3&quot;</span>
<span class="token number">10</span><span class="token punctuation">)</span> <span class="token string">&quot;20&quot;</span>
<span class="token number">11</span><span class="token punctuation">)</span> <span class="token string">&quot;v1&quot;</span>
<span class="token number">12</span><span class="token punctuation">)</span> <span class="token string">&quot;10&quot;</span>
</code></pre></div><h4 id="zrangebyscore" tabindex="-1"><a class="header-anchor" href="#zrangebyscore" aria-hidden="true">#</a> ZRANGEBYSCORE</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
<span class="token comment"># 通过分数返回有序集合指定区间内的成员</span>
ZRANGEBYSCORE key min max <span class="token punctuation">[</span>WITHSCORES<span class="token punctuation">]</span> <span class="token punctuation">[</span>LIMIT offset count<span class="token punctuation">]</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> zadd zset:1 <span class="token number">1</span> One <span class="token number">2</span> Two <span class="token number">3</span> Three <span class="token number">4</span> Four    --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
redis<span class="token operator">&gt;</span> zrange zset:1 <span class="token number">0</span> <span class="token parameter variable">-1</span> <span class="token comment"># 返回全部元素</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;One&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;Two&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;Three&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;Four&quot;</span>
redis<span class="token operator">&gt;</span> zrangebyscore zset:1 <span class="token parameter variable">-inf</span> +inf <span class="token comment"># 返回全部元素</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;One&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;Two&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;Three&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;Four&quot;</span>

redis<span class="token operator">&gt;</span> zrangebyscore zset:1 <span class="token number">1</span> <span class="token number">3</span>  <span class="token comment"># 返回 1 &lt;= score &lt;= 3 的元素</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;One&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;Two&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;Three&quot;</span>
redis<span class="token operator">&gt;</span> zrangebyscore zset:1 <span class="token punctuation">(</span><span class="token number">1</span> <span class="token punctuation">(</span><span class="token number">3</span> <span class="token comment"># 返回 1 &lt; score &lt; 3 的元素</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;Two&quot;</span>

<span class="token comment"># limit 类似于分页</span>
redis<span class="token operator">&gt;</span> zrangebyscore zset:1 <span class="token number">1</span> <span class="token number">4</span> limit <span class="token number">0</span> <span class="token number">2</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;One&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;Two&quot;</span>
redis<span class="token operator">&gt;</span> zrangebyscore zset:1 <span class="token number">1</span> <span class="token number">4</span> limit <span class="token number">2</span> <span class="token number">2</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;Three&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;Four&quot;</span>
</code></pre></div><h4 id="zscore" tabindex="-1"><a class="header-anchor" href="#zscore" aria-hidden="true">#</a> ZSCORE</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
ZSCORE key member <span class="token comment"># 返回排序集中的成员的分数</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> zadd zset:1 <span class="token number">1</span> One <span class="token number">2</span> Two <span class="token number">3</span> Three <span class="token number">4</span> Four   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
redis<span class="token operator">&gt;</span> zscore zset:1 Two                        --<span class="token operator">&gt;</span> <span class="token string">&quot;2&quot;</span>
</code></pre></div><h4 id="zcard" tabindex="-1"><a class="header-anchor" href="#zcard" aria-hidden="true">#</a> ZCARD</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
ZCARD key   <span class="token comment"># 返回排序集中的成员数</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> zadd zset:1 <span class="token number">1</span> One <span class="token number">2</span> Two <span class="token number">3</span> Three <span class="token number">4</span> Four   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
redis<span class="token operator">&gt;</span> zcard zset:1                             --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
</code></pre></div><h4 id="zincrby" tabindex="-1"><a class="header-anchor" href="#zincrby" aria-hidden="true">#</a> ZINCRBY</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
ZINCRBY key increment member   <span class="token comment"># 递增排序集中成员的分数</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> zadd zset:1 <span class="token number">1</span> One <span class="token number">2</span> Two <span class="token number">3</span> Three <span class="token number">4</span> Four   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
redis<span class="token operator">&gt;</span> zincrby zset:1 <span class="token number">10</span> Two                    --<span class="token operator">&gt;</span> <span class="token string">&quot;12&quot;</span>  <span class="token comment"># 给 Two 分数递增 10</span>
redis<span class="token operator">&gt;</span> zrange zset:1 <span class="token number">0</span> <span class="token parameter variable">-1</span> withscores
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;One&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;Three&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;Four&quot;</span>
<span class="token number">6</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
<span class="token number">7</span><span class="token punctuation">)</span> <span class="token string">&quot;Two&quot;</span>
<span class="token number">8</span><span class="token punctuation">)</span> <span class="token string">&quot;12&quot;</span>
</code></pre></div><h4 id="zcount" tabindex="-1"><a class="header-anchor" href="#zcount" aria-hidden="true">#</a> ZCOUNT</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
ZCOUNT key min max  <span class="token comment"># 返回指定分数范围内的元素个数</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> zadd zset:1 <span class="token number">1</span> One <span class="token number">2</span> Two <span class="token number">3</span> Three <span class="token number">4</span> Four   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
redis<span class="token operator">&gt;</span> zcount zset:1 <span class="token number">1</span> <span class="token number">3</span>                        --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span> <span class="token comment"># 1 &lt;= score &lt;= 3 的元素个数</span>
</code></pre></div><h4 id="zmpop" tabindex="-1"><a class="header-anchor" href="#zmpop" aria-hidden="true">#</a> ZMPOP</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
ZMPOP numkeys key <span class="token punctuation">[</span>key <span class="token punctuation">..</span>.<span class="token punctuation">]</span> MIN<span class="token operator">|</span>MAX <span class="token punctuation">[</span>COUNT count<span class="token punctuation">]</span> <span class="token comment"># 从键名列表中的第一个非空排序中弹出一个或多个元素，它们是成员分数对</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> zadd zset:1 <span class="token number">1</span> One <span class="token number">2</span> Two <span class="token number">3</span> Three <span class="token number">4</span> Four   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>

redis<span class="token operator">&gt;</span> zmpop <span class="token number">1</span> zset:1 min count <span class="token number">2</span>   <span class="token comment"># 弹出最小的两个</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;zset:1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;One&quot;</span>
      <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
   <span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;Two&quot;</span>
      <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
redis<span class="token operator">&gt;</span> zrange zset:1 <span class="token number">0</span> <span class="token parameter variable">-1</span> withscores
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;Three&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;Four&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
</code></pre></div><h4 id="zrank" tabindex="-1"><a class="header-anchor" href="#zrank" aria-hidden="true">#</a> ZRANK</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
ZRANK key member <span class="token punctuation">[</span>WITHSCORE<span class="token punctuation">]</span> <span class="token comment"># 返回按分数升序排列的排序集中成员的索引</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> zadd zset:1 <span class="token number">1</span> One <span class="token number">2</span> Two <span class="token number">3</span> Three <span class="token number">4</span> Four    --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
redis<span class="token operator">&gt;</span> zrank zset:1 Two                          --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
redis<span class="token operator">&gt;</span> zrank zset:1 One                          --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
</code></pre></div><h4 id="zrevrank" tabindex="-1"><a class="header-anchor" href="#zrevrank" aria-hidden="true">#</a> ZREVRANK</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
ZREVRANK key member <span class="token punctuation">[</span>WITHSCORE<span class="token punctuation">]</span> <span class="token comment"># 返回按分数降序排列的排序集中成员的索引</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> zadd zset:1 <span class="token number">1</span> One <span class="token number">2</span> Two <span class="token number">3</span> Three <span class="token number">4</span> Four    --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
redis<span class="token operator">&gt;</span> zrank zset:1 Two                          --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
redis<span class="token operator">&gt;</span> zrank zset:1 One                          --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
</code></pre></div><h4 id="应用场景-1" tabindex="-1"><a class="header-anchor" href="#应用场景-1" aria-hidden="true">#</a> 应用场景</h4><p>根据商品销售对商品进行排序显示</p><table><thead><tr><th>说明</th><th>命令</th></tr></thead><tbody><tr><td>商品编号 1001 的销量是 9，1002 是 15</td><td><code>zadd goods:sellsort 9 1001 15 1002</code></td></tr><tr><td>有一个客户又买了两件 1001 商品</td><td><code>zincrby goods:sellsort 2 1001</code></td></tr><tr><td>求商品销量前十名</td><td><code>zrange goods:sellsort 0 9 withscores</code></td></tr></tbody></table><h2 id="位图-bitmap" tabindex="-1"><a class="header-anchor" href="#位图-bitmap" aria-hidden="true">#</a> 位图(bitmap)</h2><p>  Bitmap，即位图，是一串连续的二进制数组（0 和 1），可以通过偏移量（offset）定位元素。它是基于 string 数据类型的按位的操作。bitmap 支持的最大位数是 2<sup>32</sup>位，它可以极大的节省存储空间，使用 512M 内存就可以存储多达 42.9 亿的字节信息。</p><h3 id="汇总-5" tabindex="-1"><a class="header-anchor" href="#汇总-5" aria-hidden="true">#</a> 汇总</h3>`,26),ye=n("thead",null,[n("tr",null,[n("th",null,"命令"),n("th",null,"描述")])],-1),we=n("tr",null,[n("td",null,[n("code",null,"SETBIT key offset value")]),n("td",null,"设置或清除字符串值偏移处的位")],-1),Te=n("tr",null,[n("td",null,[n("code",null,"GETBIT key offset")]),n("td",null,"按偏移量返回位值")],-1),Ee=n("tr",null,[n("td",null,[n("code",null,"STRLEN key")]),n("td",null,"返回字符串值的长度")],-1),ve=n("tr",null,[n("td",null,[n("code",null,"BITCOUNT key [start end [BYTE| BIT]]")]),n("td",null,"对字符串中设置的位数 (填充计数) 进行计数")],-1),Se=n("tr",null,[n("td",null,[n("code",null,"BITOP AND|OR|XOR|NOT destkey key [key ...]")]),n("td",null,"对多个字符串执行按位运算，并存储结果")],-1),Re={href:"https://redis.io/commands/bitfield/",target:"_blank",rel:"noopener noreferrer"},xe=n("code",null,"BITFIELD",-1),Oe=n("td",null,"对字符串执行任意位字段整数运算",-1),Ie={href:"https://redis.io/commands/bitfield_ro/",target:"_blank",rel:"noopener noreferrer"},He=n("code",null,"BITFIELD_RO",-1),Ne=n("td",null,"对字符串执行任意只读位字段整数运算",-1),ze=n("blockquote",null,[n("p",null,"偏移量（offset）下标从 0 开始")],-1),Le=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{sh:"",":no-line-numbers":"",class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 示例"),s(`
redis`),n("span",{class:"token operator"},">"),s(" setbit bit:1 "),n("span",{class:"token number"},"0"),s(),n("span",{class:"token number"},"1"),s("   --"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"("),s("integer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token comment"},"# 第一位置 1"),s(`
redis`),n("span",{class:"token operator"},">"),s(" setbit bit:1 "),n("span",{class:"token number"},"1"),s(),n("span",{class:"token number"},"1"),s("   --"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"("),s("integer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token comment"},"# 第二位置 1"),s(`
redis`),n("span",{class:"token operator"},">"),s(" setbit bit:1 "),n("span",{class:"token number"},"2"),s(),n("span",{class:"token number"},"0"),s("   --"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"("),s("integer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token comment"},"# 第三位置 0"),s(`

redis`),n("span",{class:"token operator"},">"),s(" getbit bit:1 "),n("span",{class:"token number"},"0"),s("     --"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"("),s("integer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token comment"},"# 获取第一位的值"),s(`
redis`),n("span",{class:"token operator"},">"),s(" getbit bit:1 "),n("span",{class:"token number"},"1"),s("     --"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"("),s("integer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token comment"},"# 获取第二位的值"),s(`
redis`),n("span",{class:"token operator"},">"),s(" getbit bit:1 "),n("span",{class:"token number"},"2"),s("     --"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"("),s("integer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token comment"},"# 获取第三位的值"),s(`
redis`),n("span",{class:"token operator"},">"),s(" getbit bit:1 "),n("span",{class:"token number"},"3"),s("     --"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"("),s("integer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token comment"},"# 获取第四位的值"),s(`

`),n("span",{class:"token comment"},"# 每8位一个字节 大于则 +1 （数据见下图）"),s(`
redis`),n("span",{class:"token operator"},">"),s(" setbit bit:1 "),n("span",{class:"token number"},"0"),s(),n("span",{class:"token number"},"1"),s("   --"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"("),s("integer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"0"),s(`
redis`),n("span",{class:"token operator"},">"),s(" setbit bit:1 "),n("span",{class:"token number"},"1"),s(),n("span",{class:"token number"},"1"),s("   --"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"("),s("integer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"0"),s(`
redis`),n("span",{class:"token operator"},">"),s(" setbit bit:1 "),n("span",{class:"token number"},"2"),s(),n("span",{class:"token number"},"0"),s("   --"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"("),s("integer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"0"),s(`
redis`),n("span",{class:"token operator"},">"),s(" setbit bit:1 "),n("span",{class:"token number"},"3"),s(),n("span",{class:"token number"},"0"),s("   --"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"("),s("integer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"0"),s(`
redis`),n("span",{class:"token operator"},">"),s(" setbit bit:1 "),n("span",{class:"token number"},"4"),s(),n("span",{class:"token number"},"1"),s("   --"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"("),s("integer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"0"),s(`
redis`),n("span",{class:"token operator"},">"),s(" strlen bit:1       --"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"("),s("integer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"1"),s(`
redis`),n("span",{class:"token operator"},">"),s(" setbit bit:1 "),n("span",{class:"token number"},"5"),s(),n("span",{class:"token number"},"1"),s("   --"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"("),s("integer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"0"),s(`
redis`),n("span",{class:"token operator"},">"),s(" setbit bit:1 "),n("span",{class:"token number"},"6"),s(),n("span",{class:"token number"},"0"),s("   --"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"("),s("integer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"0"),s(`
redis`),n("span",{class:"token operator"},">"),s(" setbit bit:1 "),n("span",{class:"token number"},"7"),s(),n("span",{class:"token number"},"0"),s("   --"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"("),s("integer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"0"),s(`
redis`),n("span",{class:"token operator"},">"),s(" strlen bit:1       --"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"("),s("integer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"1"),s(`
redis`),n("span",{class:"token operator"},">"),s(" setbit bit:1 "),n("span",{class:"token number"},"8"),s(),n("span",{class:"token number"},"1"),s("   --"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"("),s("integer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"0"),s(`
redis`),n("span",{class:"token operator"},">"),s(" strlen bit:1       --"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"("),s("integer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"2"),s(`

redis`),n("span",{class:"token operator"},">"),s(" bitcount bit:1     --"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"("),s("integer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"5"),s(),n("span",{class:"token comment"},"# 下图中填充了5个1"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br")])],-1),Me=e('<figure><img src="'+u+`" alt="bitmap.png" width="300" tabindex="0" loading="lazy"><figcaption>bitmap.png</figcaption></figure><p><strong>BITOP</strong>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> key1 <span class="token string">&quot;foobar&quot;</span>            --<span class="token operator">&gt;</span> OK
redis<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> key2 <span class="token string">&quot;abcdef&quot;</span>            --<span class="token operator">&gt;</span> OK
redis<span class="token operator">&gt;</span> bitop and dest key1 key2     --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">6</span>
redis<span class="token operator">&gt;</span> get dest                     --<span class="token operator">&gt;</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token function">bc</span><span class="token variable">\`</span></span>ab&quot;</span>
</code></pre></div><h3 id="应用场景-2" tabindex="-1"><a class="header-anchor" href="#应用场景-2" aria-hidden="true">#</a> 应用场景</h3><p>每日签到</p><h2 id="基数统计-hyperloglog" tabindex="-1"><a class="header-anchor" href="#基数统计-hyperloglog" aria-hidden="true">#</a> 基数统计(HyperLogLog)</h2><p>  Redis 在 2.8.9 版本中添加了 HyperLogLog 结构。它是用来做基数统计的算法，其优点是在输入元素的数量或者体积非常非常大时，计算基数所需的空间总是固定的，并且是很小的。<br>   在 Redis 中，每个 HyperLogLog 键只需花 12KB 内存，就可以计算接近 2<sup>64</sup>个不同元素的基数，这和计算基数时，元素越多耗费内存就越多的集合形成鲜明对比。但是，因为 HyperLogLog 只会根据输入元素来计算基数，而不会存储输入元素本身，所以 HyperLogLog 不能像集合那样，返回输入的各个元素。</p><h3 id="汇总-6" tabindex="-1"><a class="header-anchor" href="#汇总-6" aria-hidden="true">#</a> 汇总</h3>`,8),Ae=n("thead",null,[n("tr",null,[n("th",null,"命令"),n("th",null,"描述")])],-1),De={href:"https://www.runoob.com/redis/hyperloglog-pfadd.html",target:"_blank",rel:"noopener noreferrer"},Ce=n("code",null,"PFADD key element [element ...]",-1),Ze=n("td",null,"添加指定元素到 HyperLogLog 中。",-1),Pe={href:"https://www.runoob.com/redis/hyperloglog-pfcount.html",target:"_blank",rel:"noopener noreferrer"},Xe=n("code",null,"PFCOUNT key [key ...]",-1),Be=n("td",null,"返回给定 HyperLogLog 的基数估算值。",-1),Ge={href:"https://www.runoob.com/redis/hyperloglog-pfmerge.html",target:"_blank",rel:"noopener noreferrer"},Ke=n("code",null,"PFMERGE destkey sourcekey [sourcekey ...]",-1),Ue=n("td",null,"将多个 HyperLogLog 合并为一个 HyperLogLog",-1),Fe=e(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> pfadd hyper1 <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">4</span> <span class="token number">1</span>   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
redis<span class="token operator">&gt;</span> pfadd hyper2 <span class="token number">2</span> <span class="token number">3</span> <span class="token number">8</span> <span class="token number">9</span> <span class="token number">0</span> <span class="token number">1</span> <span class="token number">1</span>   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
redis<span class="token operator">&gt;</span> pfcount hyper1               --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">5</span> <span class="token comment"># 7个元素4和1重复，即7-2=5</span>
redis<span class="token operator">&gt;</span> pfcount hyper2               --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">6</span> <span class="token comment"># 7个元素1重复，即7-1=6</span>

redis<span class="token operator">&gt;</span> pfmerge megreResult hyper1 hyper2   --<span class="token operator">&gt;</span> OK
redis<span class="token operator">&gt;</span> pfcount megreResult                 --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">8</span> <span class="token comment"># 去重后剩下8个:1 2 3 4 5 8 9 0</span>
</code></pre></div><p><strong>扩展</strong>:<br> ① UV：Unique View（独立访客），需要去重<br> ② PV：Page View（页面浏览量），不需要去重<br> ③ DAU：Daily Active User（日活跃用户量）<br> ④ MAU：Monthly Active User（月活跃用户量）</p><h2 id="地理空间-geo" tabindex="-1"><a class="header-anchor" href="#地理空间-geo" aria-hidden="true">#</a> 地理空间(GEO)</h2><p>  Redis GEO 主要用于存储地理位置信息，并对存储的信息进行操作。</p><h3 id="汇总-7" tabindex="-1"><a class="header-anchor" href="#汇总-7" aria-hidden="true">#</a> 汇总</h3>`,5),Ye=n("thead",null,[n("tr",null,[n("th",null,"命令"),n("th",null,"描述")])],-1),We={href:"https://redis.io/commands/geoadd/",target:"_blank",rel:"noopener noreferrer"},Ve=n("code",null,"GEOADD",-1),je=n("td",null,"添加地理位置的坐标",-1),Qe={href:"https://redis.io/commands/geopos/",target:"_blank",rel:"noopener noreferrer"},Je=n("code",null,"GEOPOS",-1),$e=n("td",null,"获取地理位置的坐标",-1),no={href:"https://redis.io/commands/geodist/",target:"_blank",rel:"noopener noreferrer"},so=n("code",null,"GEODIST",-1),ao=n("td",null,"计算两个位置之间的距离",-1),to={href:"https://redis.io/commands/georadius/",target:"_blank",rel:"noopener noreferrer"},eo=n("code",null,"GEORADIUS",-1),oo=n("td",null,"根据用户给定的经纬度坐标来获取指定范围内的地理位置集合",-1),po={href:"https://redis.io/commands/georadiusbymember/",target:"_blank",rel:"noopener noreferrer"},ro=n("code",null,"GEORADIUSBYMEMBER",-1),lo=n("td",null,"根据储存在位置集合里面的某个地点获取指定范围内的地理位置集合",-1),co={href:"https://redis.io/commands/geohash/",target:"_blank",rel:"noopener noreferrer"},uo=n("code",null,"GEOHASH",-1),io=n("td",null,"返回一个或多个位置对象的 geohash 值",-1),ko=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{sh:"",":no-line-numbers":"",class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 示例"),s(`
`),n("span",{class:"token comment"},"# GEOADD key [NX|XX] [CH] longitude latitude member [longitude latitude member ...]"),s(`
redis`),n("span",{class:"token operator"},">"),s(" geoadd ShenZhen "),n("span",{class:"token number"},"113.959995"),s(),n("span",{class:"token number"},"22.535688"),s(" company           --"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"("),s("integer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"1"),s(`
redis`),n("span",{class:"token operator"},">"),s(" geoadd ShenZhen "),n("span",{class:"token number"},"113.843305"),s(),n("span",{class:"token number"},"22.593597"),s(" home              --"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"("),s("integer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"1"),s(`
redis`),n("span",{class:"token operator"},">"),s(" geoadd ShenZhen "),n("span",{class:"token number"},"113.820172"),s(),n("span",{class:"token number"},"22.631136"),s(" airport           --"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"("),s("integer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"1"),s(`
redis`),n("span",{class:"token operator"},">"),s(" geoadd ShenZhen "),n("span",{class:"token number"},"114.035576"),s(),n("span",{class:"token number"},"22.615275"),s(),n("span",{class:"token string"},'"north station"'),s("   --"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"("),s("integer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"1"),s(`

redis`),n("span",{class:"token operator"},">"),s(),n("span",{class:"token builtin class-name"},"type"),s(" ShenZhen    --"),n("span",{class:"token operator"},">"),s(" zset "),n("span",{class:"token comment"},"# 类型 zset"),s(`
redis`),n("span",{class:"token operator"},">"),s(" zrange ShenZhen "),n("span",{class:"token number"},"0"),s(),n("span",{class:"token parameter variable"},"-1"),s(` withscores
`),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"company"'),s(`
`),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"4046431705582669"'),s(`
`),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"home"'),s(`
`),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"4046523336514764"'),s(`
`),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"airport"'),s(`
`),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"4046523391439367"'),s(`
`),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"shenzhen north station"'),s(`
`),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"4046615756675492"'),s(`

`),n("span",{class:"token comment"},"# GEOPOS key [member [member ...]]"),s(`
redis`),n("span",{class:"token operator"},">"),s(" geopos ShenZhen company "),n("span",{class:"token comment"},"# 获取坐标"),s(`
`),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"113.95999342203140259"'),s(`
   `),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"22.53568747720552778"'),s(`

`),n("span",{class:"token comment"},"# GEOHASH key [member [member ...]]"),s(`
redis`),n("span",{class:"token operator"},">"),s(` geohash ShenZhen company home
`),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"ws101nrpuk0"'),s(`
`),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"ws0bw941jr0"'),s(`

`),n("span",{class:"token comment"},"# GEODIST key member1 member2 [M|KM|FT|MI] （FT:英尺 MI:英里）"),s(`
redis`),n("span",{class:"token operator"},">"),s(" geodist ShenZhen company home KM   --"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token string"},'"13.6063"'),s(),n("span",{class:"token comment"},"# 13.6063 公里"),s(`

`),n("span",{class:"token comment"},"# GEORADIUS key longitude latitude radius M|KM|FT|MI \\"),s(`
`),n("span",{class:"token comment"},"#   [WITHCOORD] [WITHDIST] [WITHHASH] [COUNT count [ANY]] \\"),s(`
`),n("span",{class:"token comment"},"#   [ASC|DESC] [STORE key|STOREDIST key]"),s(`
`),n("span",{class:"token comment"},"# 返回指定坐标方圆10KM在ShenZhen的坐标集合"),s(`
redis`),n("span",{class:"token operator"},">"),s(" georadius ShenZhen "),n("span",{class:"token number"},"113.888645"),s(),n("span",{class:"token number"},"22.550112"),s(),n("span",{class:"token number"},"10"),s(" KM WITHCOORD WITHDIST COUNT "),n("span",{class:"token number"},"5"),s(` DESC
`),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"company"'),s(`
   `),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"7.5030"'),s(`
   `),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"113.95999342203140259"'),s(`
      `),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"22.53568747720552778"'),s(`
`),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"home"'),s(`
   `),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"6.7140"'),s(`
   `),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"113.84330660104751587"'),s(`
      `),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"22.59359825153294565"'),s(`

`),n("span",{class:"token comment"},"#  GEORADIUSBYMEMBER key member radius M|KM|FT|MI \\"),s(`
`),n("span",{class:"token comment"},"#     [WITHCOORD] [WITHDIST] [WITHHASH] [COUNT count [ANY]] \\"),s(`
`),n("span",{class:"token comment"},"#     [ASC|DESC] [STORE key|STOREDIST key]"),s(`
`),n("span",{class:"token comment"},"# 已存储点方圆10KM的坐标集合"),s(`
redis`),n("span",{class:"token operator"},">"),s(" georadiusbymember ShenZhen home "),n("span",{class:"token number"},"10"),s(" KM WITHCOORD WITHDIST COUNT "),n("span",{class:"token number"},"5"),s(` DESC 
`),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"airport"'),s(`
   `),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"4.8036"'),s(`
   `),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"113.82016986608505249"'),s(`
      `),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"22.6311349371815993"'),s(`
`),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"home"'),s(`
   `),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"0.0000"'),s(`
   `),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"113.84330660104751587"'),s(`
      `),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"22.59359825153294565"'),s(`

`),n("span",{class:"token comment"},"# GEOSEARCH key FROMMEMBER member|FROMLONLAT longitude latitude \\"),s(`
`),n("span",{class:"token comment"},"#     BYRADIUS radius M|KM|FT|MI|BYBOX width height M|KM|FT|MI [ASC|DESC] \\"),s(`
`),n("span",{class:"token comment"},"#     [COUNT count [ANY]] [WITHCOORD] [WITHDIST] [WITHHASH]"),s(`
redis`),n("span",{class:"token operator"},">"),s(" geosearch ShenZhen frommember home byradius "),n("span",{class:"token number"},"10"),s(` KM ASC WITHCOORD WITHDIST WITHHASH
`),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"home"'),s(`
   `),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"0.0000"'),s(`
   `),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"("),s("integer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"4046523336514764"),s(`
   `),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"113.84330660104751587"'),s(`
      `),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"22.59359825153294565"'),s(`
`),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"airport"'),s(`
   `),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"4.8036"'),s(`
   `),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"("),s("integer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"4046523391439367"),s(`
   `),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"113.82016986608505249"'),s(`
      `),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"22.6311349371815993"'),s(`

redis`),n("span",{class:"token operator"},">"),s(" geosearch ShenZhen fromlonlat "),n("span",{class:"token number"},"113.888645"),s(),n("span",{class:"token number"},"22.550112"),s(" bybox "),n("span",{class:"token number"},"10"),s(),n("span",{class:"token number"},"10"),s(` KM ASC WITHCOORD WITHDIST WITHHASH
`),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"home"'),s(`
   `),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"6.7140"'),s(`
   `),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"("),s("integer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"4046523336514764"),s(`
   `),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"113.84330660104751587"'),s(`
      `),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token string"},'"22.59359825153294565"'),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")])],-1),mo=e('<blockquote><p>中文乱码解决：<code>redis-cli --raw</code></p></blockquote><h3 id="应用场景-3" tabindex="-1"><a class="header-anchor" href="#应用场景-3" aria-hidden="true">#</a> 应用场景</h3><p>例如：打车软件，附近的网约车；地图上附近的核酸点......</p><h2 id="位域-bitfield" tabindex="-1"><a class="header-anchor" href="#位域-bitfield" aria-hidden="true">#</a> 位域(bitfield)</h2><h2 id="流-stream" tabindex="-1"><a class="header-anchor" href="#流-stream" aria-hidden="true">#</a> 流(Stream)</h2>',5);function ho(bo,go){const a=p("ExternalLinkIcon");return r(),l("div",null,[n("p",null,[s("  数据类型参考(官方)："),n("a",k,[s("https://redis.io/docs/data-types/"),t(a)]),d,s("   Java 学习笔记："),n("a",m,[s("https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis"),t(a)]),h,s("   Redis 教程(Runoob)："),n("a",b,[s("https://www.runoob.com/redis/redis-tutorial.html"),t(a)])]),g,n("table",null,[_,n("tbody",null,[n("tr",null,[n("td",null,[n("a",q,[f,t(a)])]),y]),n("tr",null,[n("td",null,[n("a",w,[T,t(a)])]),E]),n("tr",null,[n("td",null,[n("a",v,[S,t(a)])]),R]),n("tr",null,[n("td",null,[n("a",x,[O,t(a)])]),I]),n("tr",null,[n("td",null,[n("a",H,[N,t(a)])]),z]),n("tr",null,[n("td",null,[n("a",L,[M,t(a)])]),A]),n("tr",null,[n("td",null,[n("a",D,[C,t(a)])]),Z]),n("tr",null,[n("td",null,[n("a",P,[X,t(a)])]),B]),n("tr",null,[n("td",null,[n("a",G,[K,t(a)])]),U]),n("tr",null,[n("td",null,[n("a",F,[Y,t(a)])]),W]),n("tr",null,[n("td",null,[n("a",V,[j,t(a)])]),Q]),n("tr",null,[n("td",null,[n("a",J,[$,t(a)])]),nn]),n("tr",null,[n("td",null,[n("a",sn,[an,t(a)])]),tn]),n("tr",null,[n("td",null,[n("a",en,[on,t(a)])]),pn]),n("tr",null,[n("td",null,[n("a",rn,[ln,t(a)])]),cn]),n("tr",null,[n("td",null,[n("a",un,[kn,t(a)])]),dn]),n("tr",null,[n("td",null,[n("a",mn,[hn,t(a)])]),bn]),n("tr",null,[n("td",null,[n("a",gn,[_n,t(a)])]),qn]),n("tr",null,[n("td",null,[n("a",fn,[yn,t(a)])]),wn]),n("tr",null,[n("td",null,[n("a",Tn,[En,t(a)])]),vn])])]),Sn,n("table",null,[Rn,n("tbody",null,[n("tr",null,[n("td",null,[n("a",xn,[On,t(a)])]),In]),n("tr",null,[n("td",null,[n("a",Hn,[Nn,t(a)])]),zn]),n("tr",null,[n("td",null,[n("a",Ln,[Mn,t(a)])]),An]),n("tr",null,[n("td",null,[n("a",Dn,[Cn,t(a)])]),Zn]),n("tr",null,[n("td",null,[n("a",Pn,[Xn,t(a)])]),Bn]),n("tr",null,[n("td",null,[n("a",Gn,[Kn,t(a)])]),Un]),n("tr",null,[n("td",null,[n("a",Fn,[Yn,t(a)])]),Wn]),n("tr",null,[n("td",null,[n("a",Vn,[jn,t(a)])]),Qn]),n("tr",null,[n("td",null,[n("a",Jn,[$n,t(a)])]),ns]),n("tr",null,[n("td",null,[n("a",ss,[as,t(a)])]),ts]),n("tr",null,[n("td",null,[n("a",es,[os,t(a)])]),ps]),n("tr",null,[n("td",null,[n("a",rs,[ls,t(a)])]),cs]),n("tr",null,[n("td",null,[n("a",us,[is,t(a)])]),ks]),n("tr",null,[n("td",null,[n("a",ds,[ms,t(a)])]),hs]),n("tr",null,[n("td",null,[n("a",bs,[gs,t(a)])]),_s]),n("tr",null,[n("td",null,[n("a",qs,[fs,t(a)])]),ys]),n("tr",null,[n("td",null,[n("a",ws,[Ts,t(a)])]),Es])])]),vs,n("table",null,[Ss,n("tbody",null,[n("tr",null,[n("td",null,[n("a",Rs,[xs,t(a)])]),Os]),n("tr",null,[n("td",null,[n("a",Is,[Hs,t(a)])]),Ns]),n("tr",null,[n("td",null,[n("a",zs,[Ls,t(a)])]),Ms]),n("tr",null,[n("td",null,[n("a",As,[Ds,t(a)])]),Cs]),n("tr",null,[n("td",null,[n("a",Zs,[Ps,t(a)])]),Xs]),n("tr",null,[n("td",null,[n("a",Bs,[Gs,t(a)])]),Ks]),n("tr",null,[n("td",null,[n("a",Us,[Fs,t(a)])]),Ys]),n("tr",null,[n("td",null,[n("a",Ws,[Vs,t(a)])]),js]),n("tr",null,[n("td",null,[n("a",Qs,[Js,t(a)])]),$s]),n("tr",null,[n("td",null,[n("a",na,[sa,t(a)])]),aa]),n("tr",null,[n("td",null,[n("a",ta,[ea,t(a)])]),oa]),n("tr",null,[n("td",null,[n("a",pa,[ra,t(a)])]),la]),n("tr",null,[n("td",null,[n("a",ca,[ua,t(a)])]),ia]),n("tr",null,[n("td",null,[n("a",ka,[da,t(a)])]),ma])])]),ha,n("div",ba,[ga,n("p",null,[s("  开始 HSET 仅支持设置单个键值对，如果想设置多个就需要使用 HMSET；但是现在根据"),n("a",_a,[s("官方文档"),t(a)]),s("，HMSET 自 Redis 4.0.0 开始弃用，如果需要设置多个键值对可以使用 HSET 代替。")])]),qa,n("table",null,[fa,n("tbody",null,[n("tr",null,[n("td",null,[n("a",ya,[wa,t(a)])]),Ta]),n("tr",null,[n("td",null,[n("a",Ea,[va,t(a)])]),Sa]),n("tr",null,[n("td",null,[n("a",Ra,[xa,t(a)])]),Oa]),n("tr",null,[n("td",null,[n("a",Ia,[Ha,t(a)])]),Na]),n("tr",null,[n("td",null,[n("a",za,[La,t(a)])]),Ma]),n("tr",null,[n("td",null,[n("a",Aa,[Da,t(a)])]),Ca]),n("tr",null,[n("td",null,[n("a",Za,[Pa,t(a)])]),Xa]),n("tr",null,[n("td",null,[n("a",Ba,[Ga,t(a)])]),Ka]),n("tr",null,[n("td",null,[n("a",Ua,[Fa,t(a)])]),Ya]),n("tr",null,[n("td",null,[n("a",Wa,[Va,t(a)])]),ja]),n("tr",null,[n("td",null,[n("a",Qa,[Ja,t(a)])]),$a]),n("tr",null,[n("td",null,[n("a",nt,[st,t(a)])]),at]),n("tr",null,[n("td",null,[n("a",tt,[et,t(a)])]),ot]),n("tr",null,[n("td",null,[n("a",pt,[rt,t(a)])]),lt]),n("tr",null,[n("td",null,[n("a",ct,[ut,t(a)])]),it])])]),kt,n("table",null,[dt,n("tbody",null,[n("tr",null,[n("td",null,[n("a",mt,[ht,t(a)])]),bt]),n("tr",null,[n("td",null,[n("a",gt,[_t,t(a)])]),qt]),n("tr",null,[n("td",null,[n("a",ft,[yt,t(a)])]),wt]),n("tr",null,[n("td",null,[n("a",Tt,[Et,t(a)])]),vt]),n("tr",null,[n("td",null,[n("a",St,[Rt,t(a)])]),xt]),n("tr",null,[n("td",null,[n("a",Ot,[It,t(a)])]),Ht]),n("tr",null,[n("td",null,[n("a",Nt,[zt,t(a)])]),Lt]),n("tr",null,[n("td",null,[n("a",Mt,[At,t(a)])]),Dt]),n("tr",null,[n("td",null,[n("a",Ct,[Zt,t(a)])]),Pt]),n("tr",null,[n("td",null,[n("a",Xt,[Bt,t(a)])]),Gt]),n("tr",null,[n("td",null,[n("a",Kt,[Ut,t(a)])]),Ft]),n("tr",null,[n("td",null,[n("a",Yt,[Wt,t(a)])]),Vt]),n("tr",null,[n("td",null,[n("a",jt,[Qt,t(a)])]),Jt]),n("tr",null,[n("td",null,[n("a",$t,[ne,t(a)])]),se]),n("tr",null,[n("td",null,[n("a",ae,[te,t(a)])]),ee]),n("tr",null,[n("td",null,[n("a",oe,[pe,t(a)])]),re]),n("tr",null,[n("td",null,[n("a",le,[ce,t(a)])]),ue]),n("tr",null,[n("td",null,[n("a",ie,[ke,t(a)])]),de]),n("tr",null,[n("td",null,[n("a",me,[he,t(a)])]),be]),n("tr",null,[n("td",null,[n("a",ge,[_e,t(a)])]),qe])])]),fe,n("table",null,[ye,n("tbody",null,[we,Te,Ee,ve,Se,n("tr",null,[n("td",null,[n("a",Re,[xe,t(a)])]),Oe]),n("tr",null,[n("td",null,[n("a",Ie,[He,t(a)])]),Ne])])]),ze,Le,Me,n("table",null,[Ae,n("tbody",null,[n("tr",null,[n("td",null,[n("a",De,[Ce,t(a)])]),Ze]),n("tr",null,[n("td",null,[n("a",Pe,[Xe,t(a)])]),Be]),n("tr",null,[n("td",null,[n("a",Ge,[Ke,t(a)])]),Ue])])]),Fe,n("table",null,[Ye,n("tbody",null,[n("tr",null,[n("td",null,[n("a",We,[Ve,t(a)])]),je]),n("tr",null,[n("td",null,[n("a",Qe,[Je,t(a)])]),$e]),n("tr",null,[n("td",null,[n("a",no,[so,t(a)])]),ao]),n("tr",null,[n("td",null,[n("a",to,[eo,t(a)])]),oo]),n("tr",null,[n("td",null,[n("a",po,[ro,t(a)])]),lo]),n("tr",null,[n("td",null,[n("a",co,[uo,t(a)])]),io])])]),ko,mo])}const qo=o(i,[["render",ho],["__file","data_types.html.vue"]]);export{qo as default};
