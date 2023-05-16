const l=JSON.parse('{"key":"v-78973560","path":"/backend/database/advanced/install_and_uninstall.html","title":"卸载与安装","lang":"zh-CN","frontmatter":{"title":"卸载与安装","icon":"earth","order":1,"author":"Mr.Zhang","editLink":false,"category":["数据库"],"tag":["MySQL"],"date":"2023-04-19T00:00:00.000Z","description":"1.安装前说明 1.1 Linux 系统及工具准备 CentOS6 和 CentOS7 在 MySQL 的使用中的区别： CentOS6 CentOS7 -------- -------- --------- 防火墙 iptables firewalld 启动服务 service systemctl 1.2 查看是否安装过 MySQL MySQL 版本...","head":[["meta",{"property":"og:url","content":"https://doc.bt66.cn/backend/database/advanced/install_and_uninstall.html"}],["meta",{"property":"og:title","content":"卸载与安装"}],["meta",{"property":"og:description","content":"1.安装前说明 1.1 Linux 系统及工具准备 CentOS6 和 CentOS7 在 MySQL 的使用中的区别： CentOS6 CentOS7 -------- -------- --------- 防火墙 iptables firewalld 启动服务 service systemctl 1.2 查看是否安装过 MySQL MySQL 版本..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T14:51:37.000Z"}],["meta",{"property":"article:author","content":"Mr.Zhang"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2023-04-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T14:51:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"卸载与安装\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-19T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T14:51:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Zhang\\"}]}"]]},"headers":[{"level":2,"title":"1.安装前说明","slug":"_1-安装前说明","link":"#_1-安装前说明","children":[{"level":3,"title":"1.1 Linux 系统及工具准备","slug":"_1-1-linux-系统及工具准备","link":"#_1-1-linux-系统及工具准备","children":[]},{"level":3,"title":"1.2 查看是否安装过 MySQL","slug":"_1-2-查看是否安装过-mysql","link":"#_1-2-查看是否安装过-mysql","children":[]},{"level":3,"title":"1.3 MySQL 的卸载","slug":"_1-3-mysql-的卸载","link":"#_1-3-mysql-的卸载","children":[]}]},{"level":2,"title":"2.MySQL 的 Linux 版的安装","slug":"_2-mysql-的-linux-版的安装","link":"#_2-mysql-的-linux-版的安装","children":[{"level":3,"title":"2.1 下载 MySQL 指定版本","slug":"_2-1-下载-mysql-指定版本","link":"#_2-1-下载-mysql-指定版本","children":[]},{"level":3,"title":"2.2 Linux 系统下安装 MySQL 的几种方式","slug":"_2-2-linux-系统下安装-mysql-的几种方式","link":"#_2-2-linux-系统下安装-mysql-的几种方式","children":[]},{"level":3,"title":"2.3 CentOS7 下检查 MySQL 依赖","slug":"_2-3-centos7-下检查-mysql-依赖","link":"#_2-3-centos7-下检查-mysql-依赖","children":[]},{"level":3,"title":"2.4 安装过程","slug":"_2-4-安装过程","link":"#_2-4-安装过程","children":[]}]},{"level":2,"title":"3.MySQL 登录","slug":"_3-mysql-登录","link":"#_3-mysql-登录","children":[{"level":3,"title":"3.1 首次登录","slug":"_3-1-首次登录","link":"#_3-1-首次登录","children":[]},{"level":3,"title":"3.2 修改密码","slug":"_3-2-修改密码","link":"#_3-2-修改密码","children":[]},{"level":3,"title":"3.3 设置远程登录","slug":"_3-3-设置远程登录","link":"#_3-3-设置远程登录","children":[]}]},{"level":2,"title":"4.MySQL 8 的密码轻度评估(了解)","slug":"_4-mysql-8-的密码轻度评估-了解","link":"#_4-mysql-8-的密码轻度评估-了解","children":[{"level":3,"title":"4.1 MySQL 不同版本设置密码(可能出现)","slug":"_4-1-mysql-不同版本设置密码-可能出现","link":"#_4-1-mysql-不同版本设置密码-可能出现","children":[]},{"level":3,"title":"4.2 MySQL 8 之前的安全策略","slug":"_4-2-mysql-8-之前的安全策略","link":"#_4-2-mysql-8-之前的安全策略","children":[]},{"level":3,"title":"4.3 MySQL 8 的安全策略","slug":"_4-3-mysql-8-的安全策略","link":"#_4-3-mysql-8-的安全策略","children":[]},{"level":3,"title":"4.4 卸载插件或组件","slug":"_4-4-卸载插件或组件","link":"#_4-4-卸载插件或组件","children":[]}]},{"level":2,"title":"5.字符集的相关操作","slug":"_5-字符集的相关操作","link":"#_5-字符集的相关操作","children":[{"level":3,"title":"5.1 修改 MySQL 5.7 字符集","slug":"_5-1-修改-mysql-5-7-字符集","link":"#_5-1-修改-mysql-5-7-字符集","children":[]},{"level":3,"title":"5.2 各级别的字符集","slug":"_5-2-各级别的字符集","link":"#_5-2-各级别的字符集","children":[]},{"level":3,"title":"5.3 字符集与比较规则(了解)","slug":"_5-3-字符集与比较规则-了解","link":"#_5-3-字符集与比较规则-了解","children":[]},{"level":3,"title":"5.4 请求到响应过程中字符集的变化","slug":"_5-4-请求到响应过程中字符集的变化","link":"#_5-4-请求到响应过程中字符集的变化","children":[]}]},{"level":2,"title":"6.SQL 大小写规范","slug":"_6-sql-大小写规范","link":"#_6-sql-大小写规范","children":[{"level":3,"title":"6.1 Windows 和 Linux 平台区别","slug":"_6-1-windows-和-linux-平台区别","link":"#_6-1-windows-和-linux-平台区别","children":[]},{"level":3,"title":"6.2 Linux 下大小写规则设置","slug":"_6-2-linux-下大小写规则设置","link":"#_6-2-linux-下大小写规则设置","children":[]},{"level":3,"title":"6.3 SQL 编写建议","slug":"_6-3-sql-编写建议","link":"#_6-3-sql-编写建议","children":[]}]},{"level":2,"title":"7.sql_mode 的合理设置","slug":"_7-sql-mode-的合理设置","link":"#_7-sql-mode-的合理设置","children":[{"level":3,"title":"7.1 宽松模式与严格模式","slug":"_7-1-宽松模式与严格模式","link":"#_7-1-宽松模式与严格模式","children":[]},{"level":3,"title":"7.2 模式查看和设置","slug":"_7-2-模式查看和设置","link":"#_7-2-模式查看和设置","children":[]}]}],"git":{"createdTime":1682002365000,"updatedTime":1683125497000,"contributors":[{"name":"ynzxj","email":"ynzxj@qq.com","commits":4}]},"readingTime":{"minutes":22.26,"words":6677},"filePathRelative":"backend/database/advanced/install_and_uninstall.md","localizedDate":"2023年4月19日","autoDesc":true}');export{l as data};