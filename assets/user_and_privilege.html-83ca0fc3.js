const e=JSON.parse('{"key":"v-36af50b7","path":"/backend/database/advanced/user_and_privilege.html","title":"用户与权限管理","lang":"zh-CN","frontmatter":{"title":"用户与权限管理","icon":"people","order":3,"author":"Mr.Zhang","editLink":false,"category":["数据库"],"tag":["MySQL"],"date":"2023-05-29T00:00:00.000Z","description":"用户管理 登录 MySQL 服务器 启动 MySQL 服务器后，可以通过 mysql 命令来登录 MySQL 服务器，命令如下： 命令中参数说明： &#8195;-h hostname|hostIP：连接主机，hostname 为主机，hostIP 为主机 IP &#8195;-P port：端口，默认 3306，不使用该参数则自动连接 3306 &#...","head":[["meta",{"property":"og:url","content":"https://doc.bt66.cn/backend/database/advanced/user_and_privilege.html"}],["meta",{"property":"og:title","content":"用户与权限管理"}],["meta",{"property":"og:description","content":"用户管理 登录 MySQL 服务器 启动 MySQL 服务器后，可以通过 mysql 命令来登录 MySQL 服务器，命令如下： 命令中参数说明： &#8195;-h hostname|hostIP：连接主机，hostname 为主机，hostIP 为主机 IP &#8195;-P port：端口，默认 3306，不使用该参数则自动连接 3306 &#..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-23T06:49:19.000Z"}],["meta",{"property":"article:author","content":"Mr.Zhang"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2023-05-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-23T06:49:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"用户与权限管理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-29T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-23T06:49:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Zhang\\"}]}"]]},"headers":[{"level":2,"title":"用户管理","slug":"用户管理","link":"#用户管理","children":[{"level":3,"title":"登录 MySQL 服务器","slug":"登录-mysql-服务器","link":"#登录-mysql-服务器","children":[]},{"level":3,"title":"查看用户","slug":"查看用户","link":"#查看用户","children":[]},{"level":3,"title":"创建用户","slug":"创建用户","link":"#创建用户","children":[]},{"level":3,"title":"修改用户","slug":"修改用户","link":"#修改用户","children":[]},{"level":3,"title":"删除用户","slug":"删除用户","link":"#删除用户","children":[]},{"level":3,"title":"设置当前用户密码","slug":"设置当前用户密码","link":"#设置当前用户密码","children":[]},{"level":3,"title":"修改其它用户密码","slug":"修改其它用户密码","link":"#修改其它用户密码","children":[]},{"level":3,"title":"MySQL 8 密码管理(了解)","slug":"mysql-8-密码管理-了解","link":"#mysql-8-密码管理-了解","children":[]}]},{"level":2,"title":"权限管理","slug":"权限管理","link":"#权限管理","children":[{"level":3,"title":"权限列表","slug":"权限列表","link":"#权限列表","children":[]},{"level":3,"title":"授予权限的原则","slug":"授予权限的原则","link":"#授予权限的原则","children":[]},{"level":3,"title":"授予权限","slug":"授予权限","link":"#授予权限","children":[]},{"level":3,"title":"查看权限","slug":"查看权限","link":"#查看权限","children":[]},{"level":3,"title":"收回权限","slug":"收回权限","link":"#收回权限","children":[]}]},{"level":2,"title":"权限表","slug":"权限表","link":"#权限表","children":[{"level":3,"title":"user 表","slug":"user-表","link":"#user-表","children":[]},{"level":3,"title":"db 表","slug":"db-表","link":"#db-表","children":[]},{"level":3,"title":"tables_priv 表和 columns_priv 表","slug":"tables-priv-表和-columns-priv-表","link":"#tables-priv-表和-columns-priv-表","children":[]},{"level":3,"title":"procs_priv 表","slug":"procs-priv-表","link":"#procs-priv-表","children":[]}]},{"level":2,"title":"访问控制(了解)","slug":"访问控制-了解","link":"#访问控制-了解","children":[{"level":3,"title":"连接核实阶段","slug":"连接核实阶段","link":"#连接核实阶段","children":[]},{"level":3,"title":"请求核实阶段","slug":"请求核实阶段","link":"#请求核实阶段","children":[]}]},{"level":2,"title":"角色管理(MySQL 8)","slug":"角色管理-mysql-8","link":"#角色管理-mysql-8","children":[{"level":3,"title":"角色的理解","slug":"角色的理解","link":"#角色的理解","children":[]},{"level":3,"title":"创建角色","slug":"创建角色","link":"#创建角色","children":[]},{"level":3,"title":"给角色赋予权限","slug":"给角色赋予权限","link":"#给角色赋予权限","children":[]},{"level":3,"title":"查看角色的权限","slug":"查看角色的权限","link":"#查看角色的权限","children":[]},{"level":3,"title":"回收角色的权限","slug":"回收角色的权限","link":"#回收角色的权限","children":[]},{"level":3,"title":"删除角色","slug":"删除角色","link":"#删除角色","children":[]},{"level":3,"title":"给用户赋予角色","slug":"给用户赋予角色","link":"#给用户赋予角色","children":[]},{"level":3,"title":"激活角色","slug":"激活角色","link":"#激活角色","children":[]},{"level":3,"title":"撤销用户的角色","slug":"撤销用户的角色","link":"#撤销用户的角色","children":[]},{"level":3,"title":"设置强制角色(mandatory role)","slug":"设置强制角色-mandatory-role","link":"#设置强制角色-mandatory-role","children":[]},{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]}]}],"git":{"createdTime":1683129573000,"updatedTime":1690094959000,"contributors":[{"name":"ynzxj","email":"ynzxj@qq.com","commits":9}]},"readingTime":{"minutes":17.83,"words":5349},"filePathRelative":"backend/database/advanced/user_and_privilege.md","localizedDate":"2023年5月29日","autoDesc":true}');export{e as data};