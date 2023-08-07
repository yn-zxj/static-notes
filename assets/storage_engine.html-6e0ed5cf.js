const e=JSON.parse('{"key":"v-5fe5bd26","path":"/backend/database/advanced/storage_engine.html","title":"存储引擎","lang":"zh-CN","frontmatter":{"title":"存储引擎","icon":"storage","order":5,"author":"Mr.Zhang","editLink":false,"category":["数据库"],"tag":["MySQL"],"date":"2023-06-28T00:00:00.000Z","description":"查看存储引擎 查看存储引擎.png 设置系统默认的存储引擎 ① 查看默认的存储引擎 ② 修改默认的存储引擎 设置表的存储引擎 创建表时指定存储引擎 如果建表之前没指定存储引擎，就是使用默认的存储引擎。如果需要显示的指定表的存储引擎，如下： 修改表的存储引擎 引擎介绍 InnoDB 引擎：具备外键支持功能的事务存储引擎 &#8195;① MySQL 从 ...","head":[["meta",{"property":"og:url","content":"https://doc.bt66.cn/backend/database/advanced/storage_engine.html"}],["meta",{"property":"og:title","content":"存储引擎"}],["meta",{"property":"og:description","content":"查看存储引擎 查看存储引擎.png 设置系统默认的存储引擎 ① 查看默认的存储引擎 ② 修改默认的存储引擎 设置表的存储引擎 创建表时指定存储引擎 如果建表之前没指定存储引擎，就是使用默认的存储引擎。如果需要显示的指定表的存储引擎，如下： 修改表的存储引擎 引擎介绍 InnoDB 引擎：具备外键支持功能的事务存储引擎 &#8195;① MySQL 从 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-23T06:49:19.000Z"}],["meta",{"property":"article:author","content":"Mr.Zhang"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2023-06-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-23T06:49:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"存储引擎\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-28T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-23T06:49:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Zhang\\"}]}"]]},"headers":[{"level":2,"title":"查看存储引擎","slug":"查看存储引擎","link":"#查看存储引擎","children":[]},{"level":2,"title":"设置系统默认的存储引擎","slug":"设置系统默认的存储引擎","link":"#设置系统默认的存储引擎","children":[]},{"level":2,"title":"设置表的存储引擎","slug":"设置表的存储引擎","link":"#设置表的存储引擎","children":[{"level":3,"title":"创建表时指定存储引擎","slug":"创建表时指定存储引擎","link":"#创建表时指定存储引擎","children":[]},{"level":3,"title":"修改表的存储引擎","slug":"修改表的存储引擎","link":"#修改表的存储引擎","children":[]}]},{"level":2,"title":"引擎介绍","slug":"引擎介绍","link":"#引擎介绍","children":[{"level":3,"title":"InnoDB 引擎：具备外键支持功能的事务存储引擎","slug":"innodb-引擎-具备外键支持功能的事务存储引擎","link":"#innodb-引擎-具备外键支持功能的事务存储引擎","children":[]},{"level":3,"title":"MyISAM 引擎：主要的非事务处理存储引擎","slug":"myisam-引擎-主要的非事务处理存储引擎","link":"#myisam-引擎-主要的非事务处理存储引擎","children":[]},{"level":3,"title":"Archive 引擎：用于数据存档","slug":"archive-引擎-用于数据存档","link":"#archive-引擎-用于数据存档","children":[]},{"level":3,"title":"Blackhole 引擎：丢弃写操作，读操作会返回空内容","slug":"blackhole-引擎-丢弃写操作-读操作会返回空内容","link":"#blackhole-引擎-丢弃写操作-读操作会返回空内容","children":[]},{"level":3,"title":"CSV 引擎：存储数据时，以逗号分隔各个数据项","slug":"csv-引擎-存储数据时-以逗号分隔各个数据项","link":"#csv-引擎-存储数据时-以逗号分隔各个数据项","children":[]},{"level":3,"title":"Memory 引擎：置于内存的表","slug":"memory-引擎-置于内存的表","link":"#memory-引擎-置于内存的表","children":[]},{"level":3,"title":"Federated 引擎：访问远程表","slug":"federated-引擎-访问远程表","link":"#federated-引擎-访问远程表","children":[]},{"level":3,"title":"Merge 引擎：管理多个 MyISAM 表构成的表集合","slug":"merge-引擎-管理多个-myisam-表构成的表集合","link":"#merge-引擎-管理多个-myisam-表构成的表集合","children":[]},{"level":3,"title":"NDM 引擎：MySQL 集群专用存储引擎","slug":"ndm-引擎-mysql-集群专用存储引擎","link":"#ndm-引擎-mysql-集群专用存储引擎","children":[]},{"level":3,"title":"引擎对比","slug":"引擎对比","link":"#引擎对比","children":[]}]},{"level":2,"title":"MyISAM 和 InnoDB","slug":"myisam-和-innodb","link":"#myisam-和-innodb","children":[]},{"level":2,"title":"扩展","slug":"扩展","link":"#扩展","children":[]},{"level":2,"title":"课外补充","slug":"课外补充","link":"#课外补充","children":[{"level":3,"title":"InnoDB 表优势","slug":"innodb-表优势","link":"#innodb-表优势","children":[]},{"level":3,"title":"InnoDB 和 ACID 模型","slug":"innodb-和-acid-模型","link":"#innodb-和-acid-模型","children":[]},{"level":3,"title":"InnoDB 架构","slug":"innodb-架构","link":"#innodb-架构","children":[]}]}],"git":{"createdTime":1687790575000,"updatedTime":1690094959000,"contributors":[{"name":"ynzxj","email":"ynzxj@qq.com","commits":4}]},"readingTime":{"minutes":14.92,"words":4477},"filePathRelative":"backend/database/advanced/storage_engine.md","localizedDate":"2023年6月28日","autoDesc":true}');export{e as data};