import{j as U,d as ae,k as te,l as Y,u as se,P as le,t as re,m as ne,n as C,p as H,q as ie,v as G,h as t,x as ce,R as O,y as ue,z as de,A as oe,C as ve,B as he,s as pe,b as be,D as me,E as ye,F as ge,G as ke,H as T,I as $,J as fe,K as j,L as _e}from"./app-TSzvgc1g.js";const we=["/","/backend/","/frontend/","/guide/","/interview/","/nav/","/others/pve.html","/snippet/Git.html","/snippet/JavaScript.html","/snippet/","/backend/arthas/","/backend/arthas/command.html","/backend/arthas/guide.html","/backend/arthas/introduce.html","/backend/database/","/backend/docker/","/backend/docker/basic.html","/backend/docker/data_volume.html","/backend/docker/dockerfile.html","/backend/docker/image.html","/backend/java/","/backend/java/java-reflect.html","/backend/java/lambda.html","/backend/java/syntactic-sugar.html","/backend/redis/","/backend/redis/data_types.html","/backend/redis/install_and_config.html","/frontend/css/","/frontend/css/flex.html","/frontend/typescript/","/frontend/typescript/base_type.html","/frontend/typescript/compilation_options.html","/frontend/typescript/intro.html","/frontend/typescript/object_oriented.html","/frontend/typescript/practice.html","/frontend/typescript/webpack_packing.html","/frontend/vue/","/frontend/vue/base_vue.html","/frontend/vue/component_programming.html","/frontend/vue/intro.html","/frontend/vue/vue_cli.html","/interview/java/java-database.html","/interview/java/java-foundation.html","/interview/java/java-frame.html","/interview/java/java-tech_points.html","/interview/java/java-web.html","/backend/database/advanced/","/backend/database/advanced/data_structure_of_index.html","/backend/database/advanced/dir_of_mysql.html","/backend/database/advanced/innodb_data_strore_structure.html","/backend/database/advanced/install_and_uninstall.html","/backend/database/advanced/logical_architecture.html","/backend/database/advanced/storage_engine.html","/backend/database/advanced/user_and_privilege.html","/backend/database/base/","/backend/database/base/aggregate_function.html","/backend/database/base/constraint.html","/backend/database/base/create_management_table.html","/backend/database/base/data_processing.html","/backend/database/base/data_query.html","/backend/database/base/data_type.html","/backend/database/base/database_overview.html","/backend/database/base/environment_building.html","/backend/database/base/multi_table_query.html","/backend/database/base/new_features.html","/backend/database/base/one_line_function.html","/backend/database/base/operator.html","/backend/database/base/procedure_and_function.html","/backend/database/base/sorting_paging.html","/backend/database/base/subquery.html","/backend/database/base/trigger.html","/backend/database/base/variable_flow_cursor.html","/backend/database/base/view.html","/404.html","/others/","/interview/java/","/category/","/category/%E5%85%B6%E5%AE%83/","/category/git/","/category/%E5%89%8D%E7%AB%AF/","/category/%E5%90%8E%E7%AB%AF/","/category/%E6%95%B0%E6%8D%AE%E5%BA%93/","/tag/","/tag/redis/","/tag/%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5/","/tag/git/","/tag/javascript/","/tag/arthas/","/tag/docker/","/tag/java/","/tag/css/","/tag/typescript/","/tag/vue/","/tag/%E9%9D%A2%E8%AF%95/","/tag/mysql/","/article/","/star/","/timeline/"],Ee="SEARCH_PRO_QUERY_HISTORY",y=U(Ee,[]),He=()=>{const{queryHistoryCount:s}=j,l=s>0;return{enabled:l,queryHistory:y,addQueryHistory:r=>{l&&(y.value=Array.from(new Set([r,...y.value.slice(0,s-1)])))},removeQueryHistory:r=>{y.value=[...y.value.slice(0,r),...y.value.slice(r+1)]}}},L=s=>we[s.id]+("anchor"in s?`#${s.anchor}`:""),je="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:I}=j,g=U(je,[]),Re=()=>{const s=I>0;return{enabled:s,resultHistory:g,addResultHistory:l=>{if(s){const r={link:L(l),display:l.display};"header"in l&&(r.header=l.header),g.value=[r,...g.value.slice(0,I-1)]}},removeResultHistory:l=>{g.value=[...g.value.slice(0,l),...g.value.slice(l+1)]}}},qe=s=>{const l=ve(),r=Y(),R=he(),i=C(0),_=H(()=>i.value>0),p=pe([]);return be(()=>{const{search:b,terminate:q}=me(),k=fe(d=>{const f=d.join(" "),{searchFilter:A=h=>h,splitWord:x,suggestionsFilter:B,...m}=l.value;f?(i.value+=1,b(d.join(" "),r.value,m).then(h=>A(h,f,r.value,R.value)).then(h=>{i.value-=1,p.value=h}).catch(h=>{console.warn(h),i.value-=1,i.value||(p.value=[])})):p.value=[]},j.searchDelay-j.suggestDelay);G([s,r],([d])=>k(d),{immediate:!0}),ye(()=>{q()})}),{isSearching:_,results:p}};var xe=ae({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:l}){const r=te(),R=Y(),i=se(le),{enabled:_,addQueryHistory:p,queryHistory:b,removeQueryHistory:q}=He(),{enabled:k,resultHistory:d,addResultHistory:f,removeResultHistory:A}=Re(),x=_||k,B=re(s,"queries"),{results:m,isSearching:h}=qe(B),n=ne({isQuery:!0,index:0}),o=C(0),v=C(0),F=H(()=>x&&(b.value.length>0||d.value.length>0)),Q=H(()=>m.value.length>0),S=H(()=>m.value[o.value]||null),J=()=>{const{isQuery:e,index:a}=n;a===0?(n.isQuery=!e,n.index=e?d.value.length-1:b.value.length-1):n.index=a-1},M=()=>{const{isQuery:e,index:a}=n;a===(e?b.value.length-1:d.value.length-1)?(n.isQuery=!e,n.index=0):n.index=a+1},z=()=>{o.value=o.value>0?o.value-1:m.value.length-1,v.value=S.value.contents.length-1},K=()=>{o.value=o.value<m.value.length-1?o.value+1:0,v.value=0},V=()=>{v.value<S.value.contents.length-1?v.value+=1:K()},N=()=>{v.value>0?v.value-=1:z()},D=e=>e.map(a=>_e(a)?a:t(a[0],a[1])),W=e=>{if(e.type==="customField"){const a=ge[e.index]||"$content",[c,E=""]=ke(a)?a[R.value].split("$content"):a.split("$content");return e.display.map(u=>t("div",D([c,...u,E])))}return e.display.map(a=>t("div",D(a)))},w=()=>{o.value=0,v.value=0,l("updateQuery",""),l("close")},X=()=>_?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.queryHistory),b.value.map((e,a)=>t("div",{class:["search-pro-result-item",{active:n.isQuery&&n.index===a}],onClick:()=>{l("updateQuery",e)}},[t(T,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:c=>{c.preventDefault(),c.stopPropagation(),q(a)}})]))])):null,Z=()=>k?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.resultHistory),d.value.map((e,a)=>t(O,{to:e.link,class:["search-pro-result-item",{active:!n.isQuery&&n.index===a}],onClick:()=>{w()}},()=>[t(T,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(c=>D(c)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:c=>{c.preventDefault(),c.stopPropagation(),A(a)}})]))])):null;return ie("keydown",e=>{if(s.isFocusing){if(Q.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const a=S.value.contents[v.value];p(s.queries.join(" ")),f(a),r.push(L(a)),w()}}else if(k){if(e.key==="ArrowUp")J();else if(e.key==="ArrowDown")M();else if(e.key==="Enter"){const{index:a}=n;n.isQuery?(l("updateQuery",b.value[a]),e.preventDefault()):(r.push(d.value[a].link),w())}}}}),G([o,v],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:s.queries.length?!Q.value:!F.value}],id:"search-pro-results"},s.queries.length?h.value?t(ce,{hint:i.value.searching}):Q.value?t("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:a},c)=>{const E=o.value===c;return t("li",{class:["search-pro-result-list-item",{active:E}]},[t("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),a.map((u,ee)=>{const P=E&&v.value===ee;return t(O,{to:L(u),class:["search-pro-result-item",{active:P,"aria-selected":P}],onClick:()=>{p(s.queries.join(" ")),f(u),w()}},()=>[u.type==="text"?null:t(u.type==="title"?ue:u.type==="heading"?de:oe,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[u.type==="text"&&u.header?t("div",{class:"content-header"},u.header):null,t("div",W(u))])])})])})):i.value.emptyResult:x?F.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{xe as default};