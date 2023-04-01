const e=JSON.parse(`{"key":"v-3bb5e744","path":"/backend/database/base/constraint.html","title":"约束","lang":"zh-CN","frontmatter":{"title":"约束","icon":"light","order":13,"author":"Mr.Zhang","editLink":false,"category":["数据库"],"tag":["MySQL"],"date":"2023-03-29T00:00:00.000Z","description":"1.约束(constraint)概述 1.1 为什么需要约束 &#8195;&#8195;数据完整性(Data Integrity)是指数据的精确性(Accuracy)和可靠性(Reliability)。它是==防止数据库中存在不符合语义规定的数据==和==防止因错误信息的输入输出造成无效操作和错误信息==而提出的。 为了保证数据的完整性，SQL 规范...","head":[["meta",{"property":"og:url","content":"https://doc.bt66.cn/backend/database/base/constraint.html"}],["meta",{"property":"og:title","content":"约束"}],["meta",{"property":"og:description","content":"1.约束(constraint)概述 1.1 为什么需要约束 &#8195;&#8195;数据完整性(Data Integrity)是指数据的精确性(Accuracy)和可靠性(Reliability)。它是==防止数据库中存在不符合语义规定的数据==和==防止因错误信息的输入输出造成无效操作和错误信息==而提出的。 为了保证数据的完整性，SQL 规范..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-29T15:51:47.000Z"}],["meta",{"property":"article:author","content":"Mr.Zhang"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2023-03-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-29T15:51:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"约束\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-29T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-29T15:51:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Zhang\\"}]}"]]},"headers":[{"level":2,"title":"1.约束(constraint)概述","slug":"_1-约束-constraint-概述","link":"#_1-约束-constraint-概述","children":[{"level":3,"title":"1.1 为什么需要约束","slug":"_1-1-为什么需要约束","link":"#_1-1-为什么需要约束","children":[]},{"level":3,"title":"1.2 什么叫约束?","slug":"_1-2-什么叫约束","link":"#_1-2-什么叫约束","children":[]},{"level":3,"title":"1.3 约束的分类","slug":"_1-3-约束的分类","link":"#_1-3-约束的分类","children":[]}]},{"level":2,"title":"2.非空约束","slug":"_2-非空约束","link":"#_2-非空约束","children":[{"level":3,"title":"2.1 添加非空约束","slug":"_2-1-添加非空约束","link":"#_2-1-添加非空约束","children":[]},{"level":3,"title":"2.2 删除非空约束","slug":"_2-2-删除非空约束","link":"#_2-2-删除非空约束","children":[]}]},{"level":2,"title":"3.唯一性约束","slug":"_3-唯一性约束","link":"#_3-唯一性约束","children":[{"level":3,"title":"3.1 添加唯一索引","slug":"_3-1-添加唯一索引","link":"#_3-1-添加唯一索引","children":[]},{"level":3,"title":"3.2 复合唯一约束","slug":"_3-2-复合唯一约束","link":"#_3-2-复合唯一约束","children":[]},{"level":3,"title":"3.3 删除唯一约束","slug":"_3-3-删除唯一约束","link":"#_3-3-删除唯一约束","children":[]}]},{"level":2,"title":"4.PRIMARY KEY 约束","slug":"_4-primary-key-约束","link":"#_4-primary-key-约束","children":[{"level":3,"title":"4.1 添加主键约束","slug":"_4-1-添加主键约束","link":"#_4-1-添加主键约束","children":[]},{"level":3,"title":"4.2 复合主键约束","slug":"_4-2-复合主键约束","link":"#_4-2-复合主键约束","children":[]},{"level":3,"title":"4.3 删除主键约束","slug":"_4-3-删除主键约束","link":"#_4-3-删除主键约束","children":[]}]},{"level":2,"title":"5.自增列","slug":"_5-自增列","link":"#_5-自增列","children":[{"level":3,"title":"5.1 添加自增列","slug":"_5-1-添加自增列","link":"#_5-1-添加自增列","children":[]},{"level":3,"title":"5.2 删除自增列","slug":"_5-2-删除自增列","link":"#_5-2-删除自增列","children":[]},{"level":3,"title":"5.3 MySQL 8.0 新特性—自增变量的持久化","slug":"_5-3-mysql-8-0-新特性—自增变量的持久化","link":"#_5-3-mysql-8-0-新特性—自增变量的持久化","children":[]}]},{"level":2,"title":"6.FOREIGN KEY 约束","slug":"_6-foreign-key-约束","link":"#_6-foreign-key-约束","children":[{"level":3,"title":"6.1 添加外键约束","slug":"_6-1-添加外键约束","link":"#_6-1-添加外键约束","children":[]},{"level":3,"title":"6.2 约束等级","slug":"_6-2-约束等级","link":"#_6-2-约束等级","children":[]},{"level":3,"title":"6.3 删除外键约束","slug":"_6-3-删除外键约束","link":"#_6-3-删除外键约束","children":[]}]},{"level":2,"title":"7.CHECK 约束","slug":"_7-check-约束","link":"#_7-check-约束","children":[]},{"level":2,"title":"8.DEFAULT 约束","slug":"_8-default-约束","link":"#_8-default-约束","children":[{"level":3,"title":"8.1 给字段设置默认值","slug":"_8-1-给字段设置默认值","link":"#_8-1-给字段设置默认值","children":[]},{"level":3,"title":"8.2 删除字段默认值","slug":"_8-2-删除字段默认值","link":"#_8-2-删除字段默认值","children":[]}]},{"level":2,"title":"9.面试题","slug":"_9-面试题","link":"#_9-面试题","children":[{"level":3,"title":"9.1 为什么建表时，加NOT NULL DEFAULT '' 或 DEFAULT 0","slug":"_9-1-为什么建表时-加not-null-default-或-default-0","link":"#_9-1-为什么建表时-加not-null-default-或-default-0","children":[]},{"level":3,"title":"9.2 为什么不想要null的值","slug":"_9-2-为什么不想要null的值","link":"#_9-2-为什么不想要null的值","children":[]},{"level":3,"title":"9.3 带AUTO_INCREMENT约束的字段值是从 1 开始的吗?","slug":"_9-3-带auto-increment约束的字段值是从-1-开始的吗","link":"#_9-3-带auto-increment约束的字段值是从-1-开始的吗","children":[]},{"level":3,"title":"9.4 为什么说并不是每个表都可以任意选择存储引擎?","slug":"_9-4-为什么说并不是每个表都可以任意选择存储引擎","link":"#_9-4-为什么说并不是每个表都可以任意选择存储引擎","children":[]}]}],"git":{"createdTime":1680105107000,"updatedTime":1680105107000,"contributors":[{"name":"ynzxj","email":"ynzxj@qq.com","commits":1}]},"readingTime":{"minutes":18.42,"words":5526},"filePathRelative":"backend/database/base/constraint.md","localizedDate":"2023年3月29日","autoDesc":true}`);export{e as data};
