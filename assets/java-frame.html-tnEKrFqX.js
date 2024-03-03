import{_ as a,o as n,c as s,a as e}from"./app-uKx7KVXM.js";const t="/assets/springmvc-0ei3VYGE.jpg",i={},p=e(`<h2 id="框架" tabindex="-1"><a class="header-anchor" href="#框架" aria-hidden="true">#</a> 框架</h2><h3 id="说一下-mybatis-工作原理" tabindex="-1"><a class="header-anchor" href="#说一下-mybatis-工作原理" aria-hidden="true">#</a> 说一下 mybatis 工作原理?</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 1.加载Mybatis的核心配置文件</span>
<span class="token class-name">String</span> resource <span class="token operator">=</span> <span class="token string">&quot;mybatis-config.xml&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> <span class="token class-name">Resources</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span>resource<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2.根据配置文件中的数据库连接信息，得到一个工厂对象</span>
<span class="token class-name">SqlSessionFactory</span> sqlSessionFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SqlSessionFactoryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3.通过工厂对象得到会话对象</span>
<span class="token class-name">SqlSession</span> session <span class="token operator">=</span> sqlSessionFactory<span class="token punctuation">.</span><span class="token function">openSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 4.通过session拿数据</span>
<span class="token class-name">User</span> user <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">selectOne</span><span class="token punctuation">(</span><span class="token string">&quot;us.get&quot;</span>， <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// namespace:映射文件必须配置 &lt;mapper namespace=&quot;us&quot;&gt;</span>
<span class="token comment">// 5.关闭对象</span>
session<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
inputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mybaits-核心配置文件中常见的配制有哪些" tabindex="-1"><a class="header-anchor" href="#mybaits-核心配置文件中常见的配制有哪些" aria-hidden="true">#</a> mybaits 核心配置文件中常见的配制有哪些?</h3><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>-configuration(配置)
 --properties(属性)
 --settings(设置)
 --typeAliases(类型别名)   alias/ˈeɪliəs/
 --typeHandlers(类型处理器)
 --objectFactory(对象工厂)
 --plugins(插件)
 --environments(环境配置)
  --environment(环境变量)
            --transactionManager(事务管理器)
            --dataSource(数据源)
 --databaseIdProvider(数据库厂商标识)
 --mappers(映射器)
</code></pre></div><h3 id="映射文件常用节点有哪些" tabindex="-1"><a class="header-anchor" href="#映射文件常用节点有哪些" aria-hidden="true">#</a> 映射文件常用节点有哪些?</h3><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>select、delete、insert、update
</code></pre></div><h3 id="映射文件中节点的常用属性有哪些" tabindex="-1"><a class="header-anchor" href="#映射文件中节点的常用属性有哪些" aria-hidden="true">#</a> 映射文件中节点的常用属性有哪些?</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>namespace</code>：mapper 文件路径</p><p><code>id</code>：在命名空间中的唯一标识符</p><p><code>parameterType</code>：将会传入这条语句的参数的类全限定名或别名 /pəˈræmɪtə(r)/</p><p><code>resultType</code>：期望从这条语句中返回结果的类全限定名或别名</p><p><code>resultMap</code>：对外部 resultMap 的命名引用</p></div><h3 id="什么是-ioc" tabindex="-1"><a class="header-anchor" href="#什么是-ioc" aria-hidden="true">#</a> 什么是 IOC?</h3><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>Inversion of Control--控制反转 (将对象创建的控制由用户转移给Spring框架的IOC容器实现)
</code></pre></div><h3 id="ioc-核心组件有哪些" tabindex="-1"><a class="header-anchor" href="#ioc-核心组件有哪些" aria-hidden="true">#</a> IOC 核心组件有哪些?</h3><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>BeanFactory、ApplicationContext
</code></pre></div><h3 id="什么是-aop" tabindex="-1"><a class="header-anchor" href="#什么是-aop" aria-hidden="true">#</a> 什么是 AOP?</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Aspect Oriented Program--面向切面编程 (面向切面编程解决的是将组件功能的扩展通过动态植入的方式添加进来。</p><p>AOP 是横向切割机制，将组件的非核心业务从核心业务中剥立出来，在需要时，动态植入(AOP 的原理利用的是动态代理模式)</p></div><h3 id="什么是连接点、切点、增强、切面" tabindex="-1"><a class="header-anchor" href="#什么是连接点、切点、增强、切面" aria-hidden="true">#</a> 什么是连接点、切点、增强、切面?</h3><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>连接点(joinpoint)  :类中所有能被增强(植入非核心业务)的方法都称为连接点
切点(pointcut)    :真正增强的方法称为切点
增强/通知(advice)  :植入的功能实现称为增强
  --前置增强
 --后置增强
 --最终增强
 --环绕增强
 --异常增强
切面(Aspect): 将增强植入到切入点的过程称为切面(切面 = 切点 + 增强)
</code></pre></div><h3 id="请说出你对-spring-框架的理解" tabindex="-1"><a class="header-anchor" href="#请说出你对-spring-框架的理解" aria-hidden="true">#</a> 请说出你对 spring 框架的理解?</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Spring 是一个轻量级的开源框架，是一个分层的一站式开发框架(持久层:JdbcTemplate 技术、业务层:IOC、表示层:Sprng MVC);</p><p>它的两个核心功能分别是 IOC 和 AOP：<br><code>IOC</code>：控制反转--将对象创建的控制由用户转移给 Spring 框架的 IOC 容器实现</p><p><code>AOP</code>：面向切面编程--将组件功能的扩展通过动态植入的方式添加进来</p></div><h3 id="在-spring-框架中-如何创建一个-bean-对象" tabindex="-1"><a class="header-anchor" href="#在-spring-框架中-如何创建一个-bean-对象" aria-hidden="true">#</a> 在 spring 框架中，如何创建一个 bean 对象?</h3><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>① 使用构造方法
② 使用静态工厂
③ 使用实例工厂
</code></pre></div><h3 id="说一下-bean-的作用域" tabindex="-1"><a class="header-anchor" href="#说一下-bean-的作用域" aria-hidden="true">#</a> 说一下 bean 的作用域?</h3><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>singleton、prototype、request、session、application、websocket
</code></pre></div><h3 id="spring-框架的常用注解" tabindex="-1"><a class="header-anchor" href="#spring-框架的常用注解" aria-hidden="true">#</a> spring 框架的常用注解?</h3><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>@Component:  将一个类注入spring框架
@Repository: 在数据访问层使用(dao层)   /rɪˈpɒzətri/
@Service:   在业务逻辑层使用(service层)
@Controller: 在展现层使用(Controller)
@Autowired:  根据类型注入
@Resource:  根据名称注入
</code></pre></div><h3 id="springmvc-的工作原理" tabindex="-1"><a class="header-anchor" href="#springmvc-的工作原理" aria-hidden="true">#</a> springmvc 的工作原理?</h3><figure><img src="`+t+`" alt="SpringMVC工作原理.jpg" width="600" tabindex="0" loading="lazy"><figcaption>SpringMVC工作原理.jpg</figcaption></figure><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>① 一个HTTP请求首先到达前端控制器(DispacherServlet)
② 前端控制器请求处理器映射器(HandlerMapping)来解析请求
③ 前端控制器拿到处理器映射器结果后，再次请求处理器适配器(HandlerAdapter)
④ 处理器适配器根据适配规则决定执行哪一个Handler
⑤ 处理器适配器将结果(ModelAndView)返回给前端控制器
⑥ 前端控制器接收到数据后，再次请求视图解析器(ViewResolver)，将数据解析为浏览器可识别的静态数据
⑦ 前端控制器将视图解析器解析的纯静态数据返回给用户(view)
</code></pre></div><h3 id="springmvc-方法的返回值有哪些" tabindex="-1"><a class="header-anchor" href="#springmvc-方法的返回值有哪些" aria-hidden="true">#</a> springmvc 方法的返回值有哪些?</h3><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>ModelAndView、String、void、JSON
</code></pre></div><h3 id="springmvc-如何得到一个-json-格式的数据" tabindex="-1"><a class="header-anchor" href="#springmvc-如何得到一个-json-格式的数据" aria-hidden="true">#</a> Springmvc 如何得到一个 JSON 格式的数据?</h3><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>@ResponseBody
</code></pre></div><h3 id="springmvc-如何向页面传数据" tabindex="-1"><a class="header-anchor" href="#springmvc-如何向页面传数据" aria-hidden="true">#</a> springmvc 如何向页面传数据?</h3><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>①给方法添加一个Model类型的参数
②给方法添加一个Map类型的参数
③给方法添加一个ModelMap类型的参数
- 以上参数将数据放到request域对象中
</code></pre></div><h3 id="附加-springmvc-如何接收参数值" tabindex="-1"><a class="header-anchor" href="#附加-springmvc-如何接收参数值" aria-hidden="true">#</a> 附加:Springmvc 如何接收参数值</h3><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>@RequestParam:接参数值
@PathVariable:RESTFUL风格URL获取参数值
</code></pre></div><h3 id="为什么在开发中大家都使用-springboot" tabindex="-1"><a class="header-anchor" href="#为什么在开发中大家都使用-springboot" aria-hidden="true">#</a> 为什么在开发中大家都使用 Springboot?</h3><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>① Springboot简化了Spring的开发过程，可以帮助开发者快速搭建项目框架;
② Springboot继承了原有Spring框架的优秀基因;
③ Springboot不需要过多配置文件的配置;
④ Springboot可以构建微服务，项目部署发布简单。
</code></pre></div><h3 id="springboot-工作原理" tabindex="-1"><a class="header-anchor" href="#springboot-工作原理" aria-hidden="true">#</a> SpringBoot 工作原理?</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>① 在 pom.xml 中父依赖下配置了大部分的第三方依赖包，在开发时只需导入相关的启动器(starter)依赖;</p><p>② 在启动类中@SpringBootApplication 在启动时会通过@EnableAutoConfiguration 去找到 META-INF/spring.factories 配置文件中的所有自动配置类，只有在 pom.xml 中配置了相应的启动器，该自动配置类才会生效并帮我们进行自动配置工作;</p><p>③ 启动类下 main()方法中，SpringApplication.run()方法，实例化后调用 run()启动项目;</p></div>`,40),c=[p];function o(r,d){return n(),s("div",null,c)}const u=a(i,[["render",o],["__file","java-frame.html.vue"]]);export{u as default};
