import{_ as e,o as t,c as a,a as d}from"./app-bXqFKZAm.js";const r={},s=d(`<h2 id="web" tabindex="-1"><a class="header-anchor" href="#web" aria-hidden="true">#</a> Web</h2><h3 id="c-s-与-b-s-区别" tabindex="-1"><a class="header-anchor" href="#c-s-与-b-s-区别" aria-hidden="true">#</a> C/S 与 B/S 区别</h3><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>B/S:(Browser-Server，浏览器-服务器)         C/S:(Client-Server，客户机-服务器)

(1)C/S是建立在局域网的基础上，B/S是建立在广域网的基础上，但并不是说B/S结构不能在局域网上使用。
(2)B/S业务拓展简单方便，通过增加页面即可增加服务器功能。C/S的客户端还需要安装专用的客户端软件，不利于拓展。
(3)B/S维护简单方便。开发、维护等几乎所有工作也都集中在服务器端，当企业对网络应用进行升级时，只需要更新服务器端的软件就可以，这就减轻了异地用户系统维护与升级的成本。
(4)B/S的响应速度不及C/S。
</code></pre></div><h3 id="说一下-tomcat-目录结构" tabindex="-1"><a class="header-anchor" href="#说一下-tomcat-目录结构" aria-hidden="true">#</a> 说一下 tomcat 目录结构?</h3><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>-bin:放启动/关闭tomcat服务器的相关脚本命令
-conf:tomcat的一些配置文件
-lib:tomcat软件依赖的jar包
-logs:日志文件存放位置
-temp:存放tomcat运行时产生的临时数据
-webapps:项目默认发布位置
-work:所有的jsp资源编译存放位置
</code></pre></div><h3 id="说一下-web-项目目录结构" tabindex="-1"><a class="header-anchor" href="#说一下-web-项目目录结构" aria-hidden="true">#</a> 说一下 web 项目目录结构?</h3><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>-MATE-INF:项目的元数据存放目录
-WEB-INF:项目资源主要存放目录
  --lib:项目运行依赖的jar包
  --classes:src目录下所有java文件编译后放的位置(web项目的类路径)
  --web.xml:项目的配置文件
  --[xxx.jsp:页面]
-index.jsp:首页
-[xxx.jsp:页面]
</code></pre></div><h3 id="什么是-servlet" tabindex="-1"><a class="header-anchor" href="#什么是-servlet" aria-hidden="true">#</a> 什么是 Servlet ?</h3><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>Servlet是运行在Web服务器上的程序，它通过超文本传输协议(Http)来接收并响应来自Web客户机的请求。
</code></pre></div><h3 id="如何创建一个-servlet" tabindex="-1"><a class="header-anchor" href="#如何创建一个-servlet" aria-hidden="true">#</a> 如何创建一个 Servlet?</h3><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>① 通过实现Servlet接口;
② 继承GenericServlet类; /dʒəˈnerɪk/
③ 继承HttpServlet类;
</code></pre></div><h3 id="servlet-生命周期" tabindex="-1"><a class="header-anchor" href="#servlet-生命周期" aria-hidden="true">#</a> Servlet 生命周期?</h3><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>① 通过调用init()方法进行初始化;
② 通过调用service()方法来处理客户端的请求;
③ 通过调用destroy()方法从容器中销毁。
</code></pre></div><h3 id="servlet-9-大内置对象是什么" tabindex="-1"><a class="header-anchor" href="#servlet-9-大内置对象是什么" aria-hidden="true">#</a> Servlet 9 大内置对象是什么?</h3><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>pageContext:JSP页面容器
request:客户端向服务器发送的请求信息
response:服务器向客户端的响应信息
session:客户端与服务器端的一次会话
application:可存放全局变量，实现用户间数据的共享
config:服务器配置信息，可以取得初始化参数
out:向客户端输出内容
page:当前JSP页面本身，类似于Java类中的this关键字
exception:当一个页面在运行过程中发生异常时，就会产生这个对象。
</code></pre></div><h3 id="什么-session-对象-session-对象作用" tabindex="-1"><a class="header-anchor" href="#什么-session-对象-session-对象作用" aria-hidden="true">#</a> 什么 session 对象，session 对象作用?</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>session 通常被翻译为&quot;会话&quot;。一个会话是指用户通过浏览器(客户端)与服务器之间进行的一系列的交互过程，交互期间可以包含浏览器与服务器之间的多次请求、响应。</p><p>Session 常见的作用:实现网页之间数据传递，保存用户的各种信息</p></div><h3 id="页面转发与页面重定向的区别" tabindex="-1"><a class="header-anchor" href="#页面转发与页面重定向的区别" aria-hidden="true">#</a> 页面转发与页面重定向的区别?</h3><table><thead><tr><th></th><th>请求转发(forward())</th><th>重定向(redirect())</th></tr></thead><tbody><tr><td>请求服务器次数</td><td>1 次</td><td>2 次</td></tr><tr><td>是否保留第一次请求时 request 范围中的属性</td><td>保留</td><td>不保留</td></tr><tr><td>地址栏 URL，是否改变</td><td>不变</td><td>改变</td></tr></tbody></table><h3 id="什么是-cookie-cookie-能做什么" tabindex="-1"><a class="header-anchor" href="#什么是-cookie-cookie-能做什么" aria-hidden="true">#</a> 什么是 Cookie? Cookie 能做什么?</h3><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>Cookie是浏览器支持的一种本地存储机制。一般由服务端设置生成，在响应请求时被自动存储在浏览器中。
记住密码、商城购物车等等。
</code></pre></div><h3 id="附加-session-与-cookie-的区别" tabindex="-1"><a class="header-anchor" href="#附加-session-与-cookie-的区别" aria-hidden="true">#</a> 附加:session 与 cookie 的区别</h3><table><thead><tr><th></th><th>Cookie</th><th>session</th></tr></thead><tbody><tr><td>保存信息的位置</td><td>客户端</td><td>服务器端</td></tr><tr><td>保存的内容</td><td>字符串</td><td>对象</td></tr><tr><td>安全性</td><td>不安全</td><td>安全</td></tr></tbody></table><h3 id="附加-jsp-作用域" tabindex="-1"><a class="header-anchor" href="#附加-jsp-作用域" aria-hidden="true">#</a> 附加:JSP 作用域</h3><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>pageContext--request--session--application (作用范围:小→大)
</code></pre></div><h3 id="解释一下-mvvm" tabindex="-1"><a class="header-anchor" href="#解释一下-mvvm" aria-hidden="true">#</a> 解释一下 MVVM?</h3><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>MVVM(Model View ViewModel)
</code></pre></div><h3 id="vue-生命周期" tabindex="-1"><a class="header-anchor" href="#vue-生命周期" aria-hidden="true">#</a> Vue 生命周期</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>创建与初始化--挂载--[更新]--销毁<br> beforeCreate--created--beforeMount--mounted--[beforeUpdate--updated]--beforeDestroy--destroyed</p><p><code>created</code>：ajax 与服务器通信获取数据</p><p><code>mounted</code>：操作 DOM</p></div>`,29),n=[s];function i(o,c){return t(),a("div",null,n)}const l=e(r,[["render",i],["__file","java-web.html.vue"]]);export{l as default};
