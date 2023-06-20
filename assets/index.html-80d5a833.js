import{d as r,X as m,r as k,b as v,O as g,e as h,h as l,o as b,c as x,f as n,g as _,u as f,i as a,a as y,_ as w}from"./app-9046fa85.js";let p;const C='<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#06a35a"><path d="M822.812 824.618c-83.076 81.992-188.546 124.614-316.05 127.865-122.085-3.251-223.943-45.873-305.935-127.865S76.213 640.406 72.962 518.682c3.251-127.503 45.873-232.973 127.865-316.05 81.992-83.075 184.211-126.058 305.936-129.309 127.503 3.251 232.973 46.234 316.049 129.31 83.076 83.076 126.059 188.546 129.31 316.05-2.89 121.723-46.234 223.943-129.31 305.935zM432.717 684.111c3.973 3.974 8.307 5.78 13.364 6.14 5.057.362 9.753-1.444 13.365-5.417l292.57-287.515c3.974-3.973 5.78-8.307 5.78-13.364s-1.806-9.753-5.78-13.365l1.807 1.806c-3.973-3.973-8.669-5.779-14.087-6.14-5.418-.361-10.475 1.445-14.809 5.418L460.529 592.006c-3.973 3.25-8.669 4.695-14.448 4.695-5.78 0-10.836-1.445-15.531-3.973l-94.273-72.962c-4.335-3.251-9.392-4.335-14.448-3.973s-9.392 3.25-12.642 7.585l-2.89 3.973c-3.25 4.334-4.334 9.391-3.973 14.81.722 5.417 2.528 10.113 5.779 14.086L432.717 684.11z"/></svg>',j=r({name:"IconDisplay",props:{link:{type:String,required:!0},iconPrefix:{type:String,default:"icon-"}},setup(o){const d=m({"/":{copy:"复制代码",copied:"已复制",hint:"复制成功"}}),i=k([]),u=t=>{const s=document.getSelection(),c=s&&s.rangeCount>0?s.getRangeAt(0):!1,e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.top="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),p.pop(`${C}<span>${d.value.hint} 🎉</span>`),document.body.removeChild(e),c&&s&&(s.removeAllRanges(),s.addRange(c))};return v(()=>{const t=new RegExp(`\\n\\.(${o.iconPrefix}.*?):before`,"g");p=new g,h.get(o.link).then(({data:s})=>{const c=[];let e;for(;e=t.exec(s);)c.push(e[1].replace(o.iconPrefix,""));return c}).then(s=>{i.value=s.sort((c,e)=>c.localeCompare(e))})}),()=>l("div",{class:"icon-display-wrapper"},i.value.map(t=>l("div",{class:"icon",onClick:()=>u(t)},[l("div",{class:["iconfont",`${o.iconPrefix}${t}`]}),l("div",{class:"text"},t)])))}}),S=n("h2",{id:"代码片段",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#代码片段","aria-hidden":"true"},"#"),a(" 代码片段")],-1),E=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{java:"",class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),a(),n("span",{class:"token keyword"},"class"),a(),n("span",{class:"token class-name"},"Test"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"public"),a(),n("span",{class:"token keyword"},"static"),a(),n("span",{class:"token keyword"},"void"),a(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(" args"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"int"),a(" i "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),a("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"i="'),a(),n("span",{class:"token operator"},"+"),a(" i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=y('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>① 行选中</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">java {3}</span>\n<span class="token code-block language-java language-java"><span class="token comment">// write your code here</span></span>\n<span class="token punctuation">```</span></span>\n\n行数范围: {5-8}\n多个单行: {4,7,9}\n组合: {4,7-13,16,23-27,40}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>② 不展示行号</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">java {3} :no-line-numbers</span>\n<span class="token code-block language-java language-java"><span class="token comment">// write your code here</span></span>\n<span class="token punctuation">```</span></span>\n</code></pre></div></div><h2 id="精选图标" tabindex="-1"><a class="header-anchor" href="#精选图标" aria-hidden="true">#</a> 精选图标</h2>',2),P={class:"hint-container details"},R=n("summary",null,"展开查看图标",-1),$=r({__name:"index.html",setup(o){return(d,i)=>(b(),x("div",null,[S,E,N,n("details",P,[R,_(f(j),{link:"//at.alicdn.com/t/c/font_3946816_cuubr8xcwi4.css",iconPrefix:"better-"})])]))}}),B=w($,[["__file","index.html.vue"]]);export{B as default};
