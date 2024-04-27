import{d,u as m,s as g,b as v,X as h,h as i,o as k,c as b,e,f as y,g as f,i as n,a as _,_ as x}from"./app-BhJnf_CU.js";var w={"/":{copy:"复制代码",copied:"已复制"}};let p;const j='<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#06a35a"><path d="M822.812 824.618c-83.076 81.992-188.546 124.614-316.05 127.865-122.085-3.251-223.943-45.873-305.935-127.865S76.213 640.406 72.962 518.682c3.251-127.503 45.873-232.973 127.865-316.05 81.992-83.075 184.211-126.058 305.936-129.309 127.503 3.251 232.973 46.234 316.049 129.31 83.076 83.076 126.059 188.546 129.31 316.05-2.89 121.723-46.234 223.943-129.31 305.935zM432.717 684.111c3.973 3.974 8.307 5.78 13.364 6.14 5.057.362 9.753-1.444 13.365-5.417l292.57-287.515c3.974-3.973 5.78-8.307 5.78-13.364s-1.806-9.753-5.78-13.365l1.807 1.806c-3.973-3.973-8.669-5.779-14.087-6.14-5.418-.361-10.475 1.445-14.809 5.418L460.529 592.006c-3.973 3.25-8.669 4.695-14.448 4.695-5.78 0-10.836-1.445-15.531-3.973l-94.273-72.962c-4.335-3.251-9.392-4.335-14.448-3.973s-9.392 3.25-12.642 7.585l-2.89 3.973c-3.25 4.334-4.334 9.391-3.973 14.81.722 5.417 2.528 10.113 5.779 14.086L432.717 684.11z"/></svg>',C=d({name:"IconDisplay",props:{link:{type:String,required:!0},iconPrefix:{type:String,default:"icon-"}},setup(c){const r=m(w),l=g([]),u=s=>{const a=document.getSelection(),o=a&&a.rangeCount>0?a.getRangeAt(0):!1,t=document.createElement("textarea");t.value=s,t.setAttribute("readonly",""),t.style.position="absolute",t.style.top="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),p.pop(`${j}<span>${r.value.copied} 🎉</span>`),document.body.removeChild(t),o&&a&&(a.removeAllRanges(),a.addRange(o))};return v(()=>{const s=new RegExp(`\\n\\.(${c.iconPrefix}.*?):before`,"g");p=new h,fetch(c.link).then(a=>a.text()).then(a=>{const o=[];let t;for(;t=s.exec(a);)o.push(t[1].replace(c.iconPrefix,""));return o}).then(a=>{l.value=a.sort((o,t)=>o.localeCompare(t))})}),()=>i("div",{class:"icon-display-wrapper"},l.value.map(s=>i("div",{class:"icon",onClick:()=>u(s)},[i("div",{class:["iconfont",c.iconPrefix+s]}),i("div",{class:"text"},s)])))}}),z=e("h2",{id:"代码片段",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#代码片段"},[e("span",null,"代码片段")])],-1),T=e("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[e("pre",{java:"",class:"language-java"},[e("code",null,[e("span",{class:"token keyword"},"public"),n(),e("span",{class:"token keyword"},"class"),n(),e("span",{class:"token class-name"},"Test"),n(),e("span",{class:"token punctuation"},"{"),n(`
    `),e("span",{class:"token keyword"},"public"),n(),e("span",{class:"token keyword"},"static"),n(),e("span",{class:"token keyword"},"void"),n(),e("span",{class:"token function"},"main"),e("span",{class:"token punctuation"},"("),e("span",{class:"token class-name"},"String"),e("span",{class:"token punctuation"},"["),e("span",{class:"token punctuation"},"]"),n(" args"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),n(`
        `),e("span",{class:"token keyword"},"int"),n(" i "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},";"),n(`
        `),e("span",{class:"token class-name"},"System"),e("span",{class:"token punctuation"},"."),n("out"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"println"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"i="'),n(),e("span",{class:"token operator"},"+"),n(" i"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`
    `),e("span",{class:"token punctuation"},"}"),n(`
`),e("span",{class:"token punctuation"},"}"),n(`
`)])]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),E=_('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>① 行选中</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">java {3}</span>\n<span class="token code-block language-java language-java"><span class="token comment">// write your code here</span></span>\n<span class="token punctuation">```</span></span>\n\n行数范围: {5-8}\n多个单行: {4,7,9}\n组合: {4,7-13,16,23-27,40}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>② 不展示行号</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">java {3} :no-line-numbers</span>\n<span class="token code-block language-java language-java"><span class="token comment">// write your code here</span></span>\n<span class="token punctuation">```</span></span>\n</code></pre></div></div><h2 id="精选图标" tabindex="-1"><a class="header-anchor" href="#精选图标"><span>精选图标</span></a></h2>',2),S={class:"hint-container details"},N=e("summary",null,"展开查看图标",-1),R=d({__name:"index.html",setup(c){return(r,l)=>(k(),b("div",null,[z,T,E,e("details",S,[N,y(f(C),{link:"//at.alicdn.com/t/c/font_3946816_iezacjdyt4g.css",iconPrefix:"better-"})])]))}}),A=x(R,[["__file","index.html.vue"]]),L=JSON.parse('{"path":"/guide/","title":"文档库使用指南","lang":"zh-CN","frontmatter":{"title":"文档库使用指南","icon":"creative","order":1,"author":"Mr.Zhang","sidebar":false,"editLink":false,"contributors":false,"lastUpdated":false,"timeline":false,"article":false,"date":"2023-01-29T00:00:00.000Z","category":["其他"],"tag":["指南"],"description":"代码片段 提示 ① 行选中 ② 不展示行号 精选图标 展开查看图标","head":[["meta",{"property":"og:url","content":"https://doc.bt66.cn/guide/"}],["meta",{"property":"og:title","content":"文档库使用指南"}],["meta",{"property":"og:description","content":"代码片段 提示 ① 行选中 ② 不展示行号 精选图标 展开查看图标"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T15:31:28.000Z"}],["meta",{"property":"article:author","content":"Mr.Zhang"}],["meta",{"property":"article:tag","content":"指南"}],["meta",{"property":"article:published_time","content":"2023-01-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T15:31:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"文档库使用指南\\",\\"description\\":\\"代码片段 提示 ① 行选中 ② 不展示行号 精选图标 展开查看图标\\"}"]]},"headers":[{"level":2,"title":"代码片段","slug":"代码片段","link":"#代码片段","children":[]},{"level":2,"title":"精选图标","slug":"精选图标","link":"#精选图标","children":[]}],"git":{"createdTime":1675006950000,"updatedTime":1706196688000,"contributors":[{"name":"ynzxj","email":"ynzxj@qq.com","commits":4},{"name":"zhangxj_a_sc","email":"zhangxj_a_sc@si-tech.com.cn","commits":2}]},"readingTime":{"minutes":0.45,"words":136},"filePathRelative":"guide/README.md","localizedDate":"2023年1月29日","autoDesc":true}');export{A as comp,L as data};