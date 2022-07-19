import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as l,a as t,b as s,w as a,F as u,d as n,e as d,r as i}from"./app.040d9bb0.js";const p={},g=t("h1",{id:"\u043F\u0430\u043A\u0435\u0442-rust-\u0434\u043B\u044F-libmdbx",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u043F\u0430\u043A\u0435\u0442-rust-\u0434\u043B\u044F-libmdbx","aria-hidden":"true"},"#"),n(" \u041F\u0430\u043A\u0435\u0442 rust \u0434\u043B\u044F libmdbx")],-1),b=t("p",null,[n("\u041E\u0431\u0435\u0440\u0442\u043A\u0430 "),t("code",null,"rust"),n(" \u0434\u043B\u044F \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 "),t("a",{href:"https://github.com/erthink/libmdbx",target:"_blank",rel:"noopener noreferrer"},"libmdbx"),n(".")],-1),m=t("hr",null,null,-1),_=t("p",null,"\u041A\u0430\u0442\u0430\u043B\u043E\u0433",-1),h={class:"table-of-contents"},c=n("\u0426\u0438\u0442\u0430\u0442\u044B"),f=n("\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 libmdbx?"),x=n("\u0423\u0447\u0435\u0431\u043D\u0438\u043A\u0438"),q=n("\u041A\u0430\u043A \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u0440"),v=n("\u041F\u0440\u0438\u043C\u0435\u0440 1: \u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 set(key,val) \u0438 \u0447\u0442\u0435\u043D\u0438\u0435 .get(key)"),k=n("\u041A\u043E\u0434"),y=n("\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0432\u044B\u0432\u043E\u0434"),D=n("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043A\u043E\u0434\u0430"),E=n("env_rw! \u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445"),w=n("\u041C\u0430\u043A\u0440\u043E\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435"),B=n("\u0442\u0430\u043A \u0438\u043B\u0438 \u0438\u043D\u0430\u0447\u0435 \u0438 lazy_static"),T=n("\u041C\u0430\u043A\u0440\u043E\u0441 mdbx!"),M=n("\u041F\u043E\u0442\u043E\u043A\u0438 \u0438 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438"),N=n("\u0427\u0442\u0435\u043D\u0438\u0435 \u0438 \u0437\u0430\u043F\u0438\u0441\u044C \u0434\u0432\u043E\u0438\u0447\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"),S=n("\u041F\u0440\u0438\u043C\u0435\u0440 2: \u0422\u0438\u043F\u044B \u0434\u0430\u043D\u043D\u044B\u0445, \u0444\u043B\u0430\u0433\u0438 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445, \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435, \u043E\u0431\u0445\u043E\u0434"),X=n("\u041A\u043E\u0434"),R=n("\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0432\u044B\u0432\u043E\u0434"),O=n("\u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u0447\u0442\u0435\u043D\u0438\u0435 \u0438 \u0437\u0430\u043F\u0438\u0441\u044C"),C=n("\u0422\u0438\u043F\u044B \u0434\u0430\u043D\u043D\u044B\u0445"),V=n("\u041F\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0442\u0438\u043F\u044B \u0434\u0430\u043D\u043D\u044B\u0445"),U=n("\u0424\u043B\u0430\u0433\u0438 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445"),I=n("DUPSORT : \u041E\u0434\u0438\u043D \u043A\u043B\u044E\u0447 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C \u043E\u0434\u043D\u043E\u043C\u0443 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044E"),A=n(".dup(key) \u0438\u0442\u0435\u0440\u0430\u0442\u043E\u0440, \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u044E\u0449\u0438\u0439 \u0432\u0441\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u043A\u043B\u044E\u0447\u0443"),L=n("\u0424\u043B\u0430\u0433\u0438 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445, \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C\u044B\u0435 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E"),P=n("\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0445"),F=n(".del(key) \u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438"),z=n(".del_val(key,val) \u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u044F"),$=n("\u041E\u0431\u0445\u043E\u0434"),Y=n("\u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043E\u0431\u0445\u043E\u0434"),j=n(".rev() \u041E\u0431\u0445\u043E\u0434 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0433\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0430"),G=n("\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430"),H=n("\u0418\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u0442\u0435\u0440\u0430\u0442\u043E\u0440\u044B"),W=n("\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0432\u044B\u0432\u043E\u0434"),K=n(".range(begin..end) \u0418\u043D\u0442\u0435\u0440\u0432\u0430\u043B \u0418\u0442\u0435\u0440\u0430\u0446\u0438\u044F"),J=n(".rev_range \u0418\u043D\u0432\u0435\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044B"),Q=n("\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0442\u0438\u043F\u043E\u0432 \u0434\u0430\u043D\u043D\u044B\u0445"),Z=n("\u0423\u043F\u0440\u043E\u0449\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u0442\u0438\u043F\u043E\u0432 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043C\u0430\u043A\u0440\u043E\u0441\u043E\u0432 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043E\u0432"),tt=n("\u041F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u0435 \u043F\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044E"),nt=n("\u0414\u043B\u0438\u043D\u0430 \u043A\u043B\u044E\u0447\u0430"),et=n("\u0421\u043D\u043E\u0441\u043A\u0438"),st=d(`<hr><h2 id="\u0446\u0438\u0442\u0430\u0442\u044B" tabindex="-1"><a class="header-anchor" href="#\u0446\u0438\u0442\u0430\u0442\u044B" aria-hidden="true">#</a> \u0426\u0438\u0442\u0430\u0442\u044B</h2><p>\u0412\u043E \u0432\u0440\u0435\u043C\u044F \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u044F <a href="https://rmw.link" target="_blank" rel="noopener noreferrer">&#39;rmw.link</a> &#39; \u044F \u043F\u043E\u0447\u0443\u0432\u0441\u0442\u0432\u043E\u0432\u0430\u043B, \u0447\u0442\u043E \u043C\u043D\u0435 \u043D\u0443\u0436\u043D\u0430 \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u0431\u0430\u0437\u0430 \u0434\u0430\u043D\u043D\u044B\u0445.</p><p>\u0418\u0437-\u0437\u0430 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u043D\u043E\u0439 \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u0438 \u0441\u0435\u0442\u0438, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u043E\u0439 \u0441 \u0447\u0430\u0441\u0442\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u044C\u044E, \u0447\u0442\u0435\u043D\u0438\u0435\u043C \u0438 \u0437\u0430\u043F\u0438\u0441\u044C\u044E, <code>sqlite3</code> \u0431\u044B\u043B \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442 \u0434\u043B\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438.</p><p>\u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u0431\u043E\u043B\u0435\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0435\u0439 \u0431\u044B\u043B\u0430 \u0431\u0430\u0437\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441 \u043A\u043B\u044E\u0447\u0430\u043C\u0438-\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F\u043C\u0438 \u0431\u043E\u043B\u0435\u0435 \u043D\u0438\u0437\u043A\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F <a href="https://discourse.world/h/2020/06/05/Shine-and-poverty-key-value-database-LMDB-in-applications-for-iOS" target="_blank" rel="noopener noreferrer">(lmdb \u0432 10 \u0440\u0430\u0437 \u0431\u044B\u0441\u0442\u0440\u0435\u0435 sqlite</a> ).</p><p><img src="//irmw.gumlet.io/yxZV8x.jpg" alt=""></p><p>\u0412 \u0438\u0442\u043E\u0433\u0435 \u044F \u0432\u044B\u0431\u0440\u0430\u043B \u043C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E <code>lmdb</code> - <code>mdbx</code>.</p><p>\u0412 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 <code>rust</code> \u043F\u0430\u043A\u0435\u0442 <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">mdbx-rs (mdbx-sys)</a> \u0438\u0437 <code>mdbx</code> <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">\u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 windows</a>, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u044F \u0432\u0437\u044F\u043B \u043D\u0430 \u0441\u0435\u0431\u044F \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0443\u043F\u0430\u043A\u043E\u0432\u0430\u0442\u044C \u0432\u0435\u0440\u0441\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442.</p><p>\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u0442\u0438\u043F\u043E\u0432 \u0440\u0436\u0430\u0432\u0447\u0438\u043D\u044B. \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043C\u043D\u043E\u0433\u043E\u043F\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F.</p><p>\u0411\u0430\u0437\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0430 \u0432 \u043C\u043E\u0434\u0443\u043B\u0435 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E <code>lazy_static</code>, \u0430 \u0437\u0430\u0442\u0435\u043C \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0430 \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0430 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0447\u0435\u0433\u043E-\u0442\u043E \u0432\u0440\u043E\u0434\u0435 :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
</code></pre></div><h2 id="\u0447\u0442\u043E-\u0442\u0430\u043A\u043E\u0435-libmdbx" tabindex="-1"><a class="header-anchor" href="#\u0447\u0442\u043E-\u0442\u0430\u043A\u043E\u0435-libmdbx" aria-hidden="true">#</a> \u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 libmdbx?</h2><p><a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">mdbx</a> - \u044D\u0442\u043E \u0432\u0442\u043E\u0440\u0438\u0447\u043D\u0430\u044F \u0431\u0430\u0437\u0430 \u0434\u0430\u043D\u043D\u044B\u0445, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u043D\u0430 lmdb, \u0430\u0432\u0442\u043E\u0440\u043E\u043C \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0440\u0443\u0441\u0441\u043A\u0438\u0439 <a href="https://vk.com/erthink" target="_blank" rel="noopener noreferrer">\u041B\u0435\u043E\u043D\u0438\u0434 \u042E\u0440\u044C\u0435\u0432 (\u041B\u0435\u043E\u043D\u0438\u0434 \u042E\u0440\u044C\u0435\u0432)</a>.</p><p><a href="https://en.wikipedia.org/wiki/Lightning_Memory-Mapped_Database" target="_blank" rel="noopener noreferrer">lmdb</a> - \u044D\u0442\u043E \u0441\u0432\u0435\u0440\u0445\u0431\u044B\u0441\u0442\u0440\u0430\u044F \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u0431\u0430\u0437\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u043A\u043B\u044E\u0447\u0435\u0439-\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439.</p><p>\u041F\u043E\u043B\u043D\u043E\u0442\u0435\u043A\u0441\u0442\u043E\u0432\u0430\u044F \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 <a href="https://docs.meilisearch.com/reference/under_the_hood/storage.html#measured-disk-usage" target="_blank" rel="noopener noreferrer">MeiliSearch</a> \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0430 \u043D\u0430 lmdb.</p><p><a href="https://docs.nvidia.com/deeplearning/dali/user-guide/docs/examples/general/data_loading/dataloading_lmdb.html" target="_blank" rel="noopener noreferrer">\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0433\u043B\u0443\u0431\u043E\u043A\u043E\u0433\u043E \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F caffe \u0442\u0430\u043A\u0436\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 lmdb \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0430 \u0434\u0430\u043D\u043D\u044B\u0445</a>.</p><p><a href="https://github.com/erthink/libmdbx#added-features" target="_blank" rel="noopener noreferrer">mdbx \u043D\u0430 30% \u0431\u044B\u0441\u0442\u0440\u0435\u0435 lmdb \u0432 \u0442\u0435\u0441\u0442\u0435 \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 ioarena</a>.</p><p><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-1.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-3.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-4.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-5.png" alt=""></p><p>\u0412 \u0442\u043E \u0436\u0435 \u0432\u0440\u0435\u043C\u044F mdbx <a href="https://github.com/erthink/libmdbx#improvements-beyond-lmdb" target="_blank" rel="noopener noreferrer">\u0443\u043B\u0443\u0447\u0448\u0430\u0435\u0442 \u043C\u043D\u043E\u0433\u0438\u0435 \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043A\u0438</a> lmdb, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 Erigon (\u043A\u043B\u0438\u0435\u043D\u0442 ethereum \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u044F) \u043D\u0435\u0434\u0430\u0432\u043D\u043E \u043F\u0435\u0440\u0435\u0448\u0435\u043B \u0441 LMDB \u043D\u0430 MDBX <sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>.</p><h2 id="\u0443\u0447\u0435\u0431\u043D\u0438\u043A\u0438" tabindex="-1"><a class="header-anchor" href="#\u0443\u0447\u0435\u0431\u043D\u0438\u043A\u0438" aria-hidden="true">#</a> \u0423\u0447\u0435\u0431\u043D\u0438\u043A\u0438</h2><h3 id="\u043A\u0430\u043A-\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C-\u043F\u0440\u0438\u043C\u0435\u0440" tabindex="-1"><a class="header-anchor" href="#\u043A\u0430\u043A-\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C-\u043F\u0440\u0438\u043C\u0435\u0440" aria-hidden="true">#</a> \u041A\u0430\u043A \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u0440</h3><p>\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043A\u043B\u043E\u043D\u0438\u0440\u0443\u0439\u0442\u0435 \u043A\u043E\u0434\u043E\u0432\u0443\u044E \u0431\u0430\u0437\u0443 <code>git clone git@github.com:rmw-lib/mdbx.git --depth=1 &amp;&amp; cd mdbx</code></p><p>\u0417\u0430\u0442\u0435\u043C \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 <code>cargo run --example 01</code> \u0438 \u043E\u043D \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442 <code>examples/01.rs</code></p><p>\u0415\u0441\u043B\u0438 \u044D\u0442\u043E \u0432\u0430\u0448 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0435\u0433\u043E \u0441\u043D\u0430\u0447\u0430\u043B\u0430:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>cargo install cargo-edit
cargo add mdbx lazy_static ctor paste
</code></pre></div><h3 id="\u043F\u0440\u0438\u043C\u0435\u0440-1-\u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435-set-key-val-\u0438-\u0447\u0442\u0435\u043D\u0438\u0435-get-key" tabindex="-1"><a class="header-anchor" href="#\u043F\u0440\u0438\u043C\u0435\u0440-1-\u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435-set-key-val-\u0438-\u0447\u0442\u0435\u043D\u0438\u0435-get-key" aria-hidden="true">#</a> \u041F\u0440\u0438\u043C\u0435\u0440 1: \u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 <code>set(key,val)</code> \u0438 \u0447\u0442\u0435\u043D\u0438\u0435 <code>.get(key)</code></h3><p>\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0438\u043C \u043F\u0440\u043E\u0441\u0442\u043E\u0439 <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/01.rs" target="_blank" rel="noopener noreferrer">\u043F\u0440\u0438\u043C\u0435\u0440/01.rs</a></p><h4 id="\u043A\u043E\u0434" tabindex="-1"><a class="header-anchor" href="#\u043A\u043E\u0434" aria-hidden="true">#</a> \u041A\u043E\u0434</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(
  MDBX,
  {
    let mut db_path = std::env::current_exe().unwrap();
    db_path.set_extension(&quot;mdb&quot;);
    println!(&quot;mdbx file path {}&quot;, db_path.display());
    db_path.into()
  },
  r,
  w
);

mdbx! {
  MDBX // \u0418\u043C\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 Env
  Test // \u0422\u0435\u0441\u0442 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0412\u044B\u0432\u0435\u0441\u0442\u0438 \u043D\u043E\u043C\u0435\u0440 \u0432\u0435\u0440\u0441\u0438\u0438 libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u041C\u043D\u043E\u0433\u043E\u043F\u043E\u0442\u043E\u0447\u043D\u043E\u0435 \u0447\u0442\u0435\u043D\u0438\u0435 \u0438 \u0437\u0430\u043F\u0438\u0441\u044C
  let t = std::thread::spawn(|| {
    let tx = w!();
    let test = tx | Test;
    test.set([1, 2], [6])?;
    println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

    match test.get([1, 2])? {
      Some(val) =&gt; {
        let t: &amp;[u8] = &amp;val;
        println!(&quot;{:?}&quot;, t);
      }
      None =&gt; unreachable!(),
    }
    Ok(())
  });

  t.join().unwrap()?;

  Ok(())
}
</code></pre></div><h4 id="\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435-\u0432\u044B\u0432\u043E\u0434" tabindex="-1"><a class="header-anchor" href="#\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435-\u0432\u044B\u0432\u043E\u0434" aria-hidden="true">#</a> \u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0432\u044B\u0432\u043E\u0434</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/01.mdb
mdbx version https://github.com/erthink/libmdbx/releases/tag/v0.11.2
test1 get Ok(Some(Bin([6])))
[6]
</code></pre></div><h4 id="\u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435-\u043A\u043E\u0434\u0430" tabindex="-1"><a class="header-anchor" href="#\u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435-\u043A\u043E\u0434\u0430" aria-hidden="true">#</a> \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043A\u043E\u0434\u0430</h4><h5 id="env-rw-\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435-\u0431\u0430\u0437\u044B-\u0434\u0430\u043D\u043D\u044B\u0445" tabindex="-1"><a class="header-anchor" href="#env-rw-\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435-\u0431\u0430\u0437\u044B-\u0434\u0430\u043D\u043D\u044B\u0445" aria-hidden="true">#</a> <code>env_rw!</code> \u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445</h5><p>\u041A\u043E\u0434 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441 \u043C\u0430\u043A\u0440\u043E\u0441\u0430 env_rw, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0438\u043C\u0435\u0435\u0442 4 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430.</p><ol><li><p>\u0418\u043C\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0441\u0440\u0435\u0434\u044B \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445</p></li><li><p>\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043E\u0431\u044A\u0435\u043A\u0442, <a href="https://docs.rs/mdbx/latest/src/mdbx/env.rs.html#27-35" target="_blank" rel="noopener noreferrer">mdbx:: env:: Config</a>.</p></li></ol><p>\u041C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E, \u0442\u0430\u043A \u043A\u0430\u043A <code>Env</code> \u0440\u0435\u0430\u043B\u0438\u0437\u0443\u0435\u0442 <code>From&lt;Into&lt;PathBuf&gt;&gt;</code>, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043F\u043E\u0434\u043E\u0439\u0434\u0435\u0442 \u043F\u0443\u0442\u044C \u043A \u0431\u0430\u0437\u0435 \u0434\u0430\u043D\u043D\u044B\u0445 <code>into()</code>, \u0430 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0432\u044B\u0433\u043B\u044F\u0434\u0438\u0442 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(
MDBX,
{
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
},
r,
w
);

mdbx! {
MDBX // \u0418\u043C\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 Env
Test // \u0422\u0435\u0441\u0442 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445
}

fn main() -&gt; Result&lt;()&gt; {
// \u0412\u044B\u0432\u0435\u0441\u0442\u0438 \u043D\u043E\u043C\u0435\u0440 \u0432\u0435\u0440\u0441\u0438\u0438 libmdbx
unsafe {
  println!(
    &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
    mdbx_version.major, mdbx_version.minor, mdbx_version.release
  );
}

// \u041C\u043D\u043E\u0433\u043E\u043F\u043E\u0442\u043E\u0447\u043D\u043E\u0435 \u0447\u0442\u0435\u043D\u0438\u0435 \u0438 \u0437\u0430\u043F\u0438\u0441\u044C
let t = std::thread::spawn(|| {
  let tx = w!();
  let test = tx | Test;
  test.set([1, 2], [6])?;
  println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

  match test.get([1, 2])? {
    Some(val) =&gt; {
      let t: &amp;[u8] = &amp;val;
      println!(&quot;{:?}&quot;, t);
    }
    None =&gt; unreachable!(),
  }
  Ok(())
});

t.join().unwrap()?;

Ok(())
}
#[derive(Clone, Debug)]
pub struct Config {
  path: PathBuf,
  mode: ffi::mdbx_mode_t,
  flag: flag::ENV,
  sync_period: u64,
  sync_bytes: u64,
  max_db: u64,
  pagesize: isize,
}

lazy_static! {
  pub static ref ENV_CONFIG_DEFAULT: Config = Config {
    path:PathBuf::new(),
    mode: 0o600,
    //https://github.com/erthink/libmdbx/issues/248
    sync_period : 65536, // \u0417\u0430 1/65536 \u0441\u0435\u043A\u0443\u043D\u0434\u044B
    sync_bytes : 65536,
    max_db : 256,
    flag : (
        flag::ENV::MDBX_EXCLUSIVE
      | flag::ENV::MDBX_LIFORECLAIM
      | flag::ENV::MDBX_COALESCE
      | flag::ENV::MDBX_NOMEMINIT
      | flag::ENV::MDBX_NOSUBDIR
      | flag::ENV::MDBX_SAFE_NOSYNC
      // | flag::ENV::MDBX_SYNC_DURABLE
    ),
    pagesize:-1
  };
}
</code></pre></div><p><code>max_db</code> \u042D\u0442\u043E\u0442 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \u043C\u043E\u0436\u043D\u043E \u0441\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u0442\u044C \u043A\u0430\u0436\u0434\u044B\u0439 \u0440\u0430\u0437 <a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">\u043F\u0440\u0438</a> \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0438 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445, \u043D\u043E \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0441\u0438\u043B\u044C\u043D\u0430\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043F\u043E\u0432\u043B\u0438\u044F\u0435\u0442 \u043D\u0430 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0439\u0442\u0435 \u0435\u0433\u043E \u043F\u043E \u043C\u0435\u0440\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438.</p><p>\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0434\u0440\u0443\u0433\u0438\u0445 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0432 <a href="https://erthink.github.io/libmdbx/group__c__opening.html#ga9138119a904355d245777c4119534061" target="_blank" rel="noopener noreferrer">\u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 libmdbx</a>.</p><ol start="3"><li><p>\u0418\u043C\u044F \u043C\u0430\u043A\u0440\u043E\u0441\u0430 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438 \u0447\u0442\u0435\u043D\u0438\u044F \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445, \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E - <code>r</code></p></li><li><p>\u0418\u043C\u044F \u043C\u0430\u043A\u0440\u043E\u0441\u0430 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438 \u0437\u0430\u043F\u0438\u0441\u0438 \u0432 \u0431\u0430\u0437\u0443 \u0434\u0430\u043D\u043D\u044B\u0445, \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E - <code>w</code></p></li></ol><p>\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B 3 \u0438 4 \u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E.</p><h5 id="\u043C\u0430\u043A\u0440\u043E\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435" tabindex="-1"><a class="header-anchor" href="#\u043C\u0430\u043A\u0440\u043E\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435" aria-hidden="true">#</a> \u041C\u0430\u043A\u0440\u043E\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435</h5><p>\u0415\u0441\u043B\u0438 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C, \u0447\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442 \u043C\u0430\u0433\u0438\u044F \u043C\u0430\u043A\u0440\u043E\u0441\u0430, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043C\u0430\u043A\u0440\u043E\u0441 <code>cargo expand --example 01</code> \u0434\u043B\u044F \u0435\u0433\u043E \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C. <code>cargo install cargo-expand</code></p><p>\u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u043E\u0433\u043E \u043A\u043E\u0434\u0430 \u043F\u043E\u043A\u0430\u0437\u0430\u043D \u043D\u0438\u0436\u0435.</p><p><img src="//irmw.gumlet.io/PDzEtT.png" alt="PDzEtT"></p><h5 id="\u0442\u0430\u043A-\u0438\u043B\u0438-\u0438\u043D\u0430\u0447\u0435-\u0438-lazy-static" tabindex="-1"><a class="header-anchor" href="#\u0442\u0430\u043A-\u0438\u043B\u0438-\u0438\u043D\u0430\u0447\u0435-\u0438-lazy-static" aria-hidden="true">#</a> \u0442\u0430\u043A \u0438\u043B\u0438 \u0438\u043D\u0430\u0447\u0435 \u0438 lazy_static</h5><p>\u0418\u0437 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u043D\u0438\u043C\u043A\u0430 \u044D\u043A\u0440\u0430\u043D\u0430 \u0432\u0438\u0434\u043D\u043E, \u0447\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F <code>lazy_static</code> \u0438 <code>anyhow</code>.</p><p><a href="https://rustmagazine.github.io/rust_magazine_2021/chapter_2/rust_error_handle.html#thiserror--anyhow" target="_blank" rel="noopener noreferrer">anyhow</a> - \u044D\u0442\u043E \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043E\u0448\u0438\u0431\u043E\u043A \u0434\u043B\u044F rust.</p><p><a href="https://juejin.cn/post/7007336922817232927" target="_blank" rel="noopener noreferrer">lazy_static</a> - \u044D\u0442\u043E \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u0441 \u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0439 \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0435\u0439.</p><p>\u042D\u0442\u0438 \u0434\u0432\u0435 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 \u043E\u0447\u0435\u043D\u044C \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u044B, \u0438 \u044F \u043D\u0435 \u0431\u0443\u0434\u0443 \u0443\u0433\u043B\u0443\u0431\u043B\u044F\u0442\u044C\u0441\u044F \u0432 \u043D\u0438\u0445.</p><h5 id="\u043C\u0430\u043A\u0440\u043E\u0441-mdbx" tabindex="-1"><a class="header-anchor" href="#\u043C\u0430\u043A\u0440\u043E\u0441-mdbx" aria-hidden="true">#</a> \u041C\u0430\u043A\u0440\u043E\u0441 mdbx!</h5><p><a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html" target="_blank" rel="noopener noreferrer"><code>mdbx!</code></a> \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F <a href="https://mp.weixin.qq.com/s/YT_HNFDCQ_IyocvBkRNJnA" target="_blank" rel="noopener noreferrer">\u043C\u0430\u043A\u0440\u043E\u0441\u043E\u043C \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u044B</a>.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(
  MDBX,
  {
    let mut db_path = std::env::current_exe().unwrap();
    db_path.set_extension(&quot;mdb&quot;);
    println!(&quot;mdbx file path {}&quot;, db_path.display());
    db_path.into()
  },
  r,
  w
);

mdbx! {
  MDBX // \u0418\u043C\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 Env
  Test // \u0422\u0435\u0441\u0442 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0412\u044B\u0432\u0435\u0441\u0442\u0438 \u043D\u043E\u043C\u0435\u0440 \u0432\u0435\u0440\u0441\u0438\u0438 libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u041C\u043D\u043E\u0433\u043E\u043F\u043E\u0442\u043E\u0447\u043D\u043E\u0435 \u0447\u0442\u0435\u043D\u0438\u0435 \u0438 \u0437\u0430\u043F\u0438\u0441\u044C
  let t = std::thread::spawn(|| {
    let tx = w!();
    let test = tx | Test;
    test.set([1, 2], [6])?;
    println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

    match test.get([1, 2])? {
      Some(val) =&gt; {
        let t: &amp;[u8] = &amp;val;
        println!(&quot;{:?}&quot;, t);
      }
      None =&gt; unreachable!(),
    }
    Ok(())
  });

  t.join().unwrap()?;

  Ok(())
}
  #[derive(Clone, Debug)]
  pub struct Config {
    path: PathBuf,
    mode: ffi::mdbx_mode_t,
    flag: flag::ENV,
    sync_period: u64,
    sync_bytes: u64,
    max_db: u64,
    pagesize: isize,
  }
  
  lazy_static! {
    pub static ref ENV_CONFIG_DEFAULT: Config = Config {
      path:PathBuf::new(),
      mode: 0o600,
      //https://github.com/erthink/libmdbx/issues/248
      sync_period : 65536, // \u0417\u0430 1/65536 \u0441\u0435\u043A\u0443\u043D\u0434\u044B
      sync_bytes : 65536,
      max_db : 256,
      flag : (
          flag::ENV::MDBX_EXCLUSIVE
        | flag::ENV::MDBX_LIFORECLAIM
        | flag::ENV::MDBX_COALESCE
        | flag::ENV::MDBX_NOMEMINIT
        | flag::ENV::MDBX_NOSUBDIR
        | flag::ENV::MDBX_SAFE_NOSYNC
        // | flag::ENV::MDBX_SYNC_DURABLE
      ),
      pagesize:-1
    };
  }
mdbx! {
 MDBX // \u0418\u043C\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 Env
 Test // \u0422\u0435\u0441\u0442 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445
}
</code></pre></div><p>\u041F\u0435\u0440\u0432\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 - \u044D\u0442\u043E \u0438\u043C\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0441\u0440\u0435\u0434\u044B \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445</p><p>\u0412\u0442\u043E\u0440\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 - \u044D\u0442\u043E \u0438\u043C\u044F \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445</p><p>\u041C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u0435\u0435 \u043E\u0434\u043D\u043E\u0439 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445, \u043F\u043E \u043E\u0434\u043D\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u0435 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0439</p><h5 id="\u043F\u043E\u0442\u043E\u043A\u0438-\u0438-\u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438" tabindex="-1"><a class="header-anchor" href="#\u043F\u043E\u0442\u043E\u043A\u0438-\u0438-\u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438" aria-hidden="true">#</a> \u041F\u043E\u0442\u043E\u043A\u0438 \u0438 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438</h5><p>\u041F\u0440\u0438\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0439 \u0432\u044B\u0448\u0435 \u043A\u043E\u0434 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442 \u043C\u043D\u043E\u0433\u043E\u043F\u043E\u0442\u043E\u0447\u043D\u043E\u0435 \u0447\u0442\u0435\u043D\u0438\u0435 \u0438 \u0437\u0430\u043F\u0438\u0441\u044C.</p><p>\u0412\u0430\u0436\u043D\u043E \u043E\u0442\u043C\u0435\u0442\u0438\u0442\u044C, \u0447\u0442\u043E <strong>\u0432 \u043E\u0434\u043D\u043E\u043C \u043F\u043E\u0442\u043E\u043A\u0435</strong> \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043C\u043E\u0436\u0435\u0442 <strong>\u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0434\u043D\u0430 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u044F, \u0435\u0441\u043B\u0438 \u0432 \u043F\u043E\u0442\u043E\u043A\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u043E \u0431\u043E\u043B\u0435\u0435 \u043E\u0434\u043D\u043E\u0439 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438, \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0441\u044F \u0430\u0432\u0430\u0440\u0438\u0439\u043D\u043E</strong>.</p><p>\u0421\u0434\u0435\u043B\u043A\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0430 \u0432 \u043A\u043E\u043D\u0446\u0435 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430.</p><h5 id="\u0447\u0442\u0435\u043D\u0438\u0435-\u0438-\u0437\u0430\u043F\u0438\u0441\u044C-\u0434\u0432\u043E\u0438\u0447\u043D\u044B\u0445-\u0434\u0430\u043D\u043D\u044B\u0445" tabindex="-1"><a class="header-anchor" href="#\u0447\u0442\u0435\u043D\u0438\u0435-\u0438-\u0437\u0430\u043F\u0438\u0441\u044C-\u0434\u0432\u043E\u0438\u0447\u043D\u044B\u0445-\u0434\u0430\u043D\u043D\u044B\u0445" aria-hidden="true">#</a> \u0427\u0442\u0435\u043D\u0438\u0435 \u0438 \u0437\u0430\u043F\u0438\u0441\u044C \u0434\u0432\u043E\u0438\u0447\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445</h5><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(
  MDBX,
  {
    let mut db_path = std::env::current_exe().unwrap();
    db_path.set_extension(&quot;mdb&quot;);
    println!(&quot;mdbx file path {}&quot;, db_path.display());
    db_path.into()
  },
  r,
  w
);

mdbx! {
  MDBX // \u0418\u043C\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 Env
  Test // \u0422\u0435\u0441\u0442 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0412\u044B\u0432\u0435\u0441\u0442\u0438 \u043D\u043E\u043C\u0435\u0440 \u0432\u0435\u0440\u0441\u0438\u0438 libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u041C\u043D\u043E\u0433\u043E\u043F\u043E\u0442\u043E\u0447\u043D\u043E\u0435 \u0447\u0442\u0435\u043D\u0438\u0435 \u0438 \u0437\u0430\u043F\u0438\u0441\u044C
  let t = std::thread::spawn(|| {
    let tx = w!();
    let test = tx | Test;
    test.set([1, 2], [6])?;
    println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

    match test.get([1, 2])? {
      Some(val) =&gt; {
        let t: &amp;[u8] = &amp;val;
        println!(&quot;{:?}&quot;, t);
      }
      None =&gt; unreachable!(),
    }
    Ok(())
  });

  t.join().unwrap()?;

  Ok(())
}
  #[derive(Clone, Debug)]
  pub struct Config {
    path: PathBuf,
    mode: ffi::mdbx_mode_t,
    flag: flag::ENV,
    sync_period: u64,
    sync_bytes: u64,
    max_db: u64,
    pagesize: isize,
  }
  
  lazy_static! {
    pub static ref ENV_CONFIG_DEFAULT: Config = Config {
      path:PathBuf::new(),
      mode: 0o600,
      //https://github.com/erthink/libmdbx/issues/248
      sync_period : 65536, // \u0417\u0430 1/65536 \u0441\u0435\u043A\u0443\u043D\u0434\u044B
      sync_bytes : 65536,
      max_db : 256,
      flag : (
          flag::ENV::MDBX_EXCLUSIVE
        | flag::ENV::MDBX_LIFORECLAIM
        | flag::ENV::MDBX_COALESCE
        | flag::ENV::MDBX_NOMEMINIT
        | flag::ENV::MDBX_NOSUBDIR
        | flag::ENV::MDBX_SAFE_NOSYNC
        // | flag::ENV::MDBX_SYNC_DURABLE
      ),
      pagesize:-1
    };
  }
mdbx! {
 MDBX // \u0418\u043C\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 Env
 Test // \u0422\u0435\u0441\u0442 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445
}
let tx = w!();
let test = tx | Test;
test.set([1, 2], [6])?;
println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

match test.get([1, 2])? {
 Some(val) =&gt; {
  let t:&amp;[u8] = &amp;val;
  println!(&quot;{:?}&quot;,t);
 },
 None =&gt; unreachable!()
}
</code></pre></div><p><code>set</code> \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0437\u0430\u043F\u0438\u0441\u044C\u044E, <code>get</code> - \u0447\u0442\u0435\u043D\u0438\u0435\u043C, \u0438 \u043B\u044E\u0431\u043E\u0439 \u043E\u0431\u044A\u0435\u043A\u0442, \u0440\u0435\u0430\u043B\u0438\u0437\u0443\u044E\u0449\u0438\u0439 <a href="https://doc.rust-lang.org/std/convert/trait.AsRef.html" target="_blank" rel="noopener noreferrer"><code>AsRef&lt;[u8]&gt;</code></a> \u043E\u0431\u044A\u0435\u043A\u0442 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u0432 \u0431\u0430\u0437\u0443 \u0434\u0430\u043D\u043D\u044B\u0445.</p><p><code>get</code> \u0412 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0441\u044F <code>Ok(Some(Bin([6])))</code>, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u044C \u0432 <code>&amp;[u8]</code>.</p><h3 id="\u043F\u0440\u0438\u043C\u0435\u0440-2-\u0442\u0438\u043F\u044B-\u0434\u0430\u043D\u043D\u044B\u0445-\u0444\u043B\u0430\u0433\u0438-\u0431\u0430\u0437\u044B-\u0434\u0430\u043D\u043D\u044B\u0445-\u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435-\u043E\u0431\u0445\u043E\u0434" tabindex="-1"><a class="header-anchor" href="#\u043F\u0440\u0438\u043C\u0435\u0440-2-\u0442\u0438\u043F\u044B-\u0434\u0430\u043D\u043D\u044B\u0445-\u0444\u043B\u0430\u0433\u0438-\u0431\u0430\u0437\u044B-\u0434\u0430\u043D\u043D\u044B\u0445-\u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435-\u043E\u0431\u0445\u043E\u0434" aria-hidden="true">#</a> \u041F\u0440\u0438\u043C\u0435\u0440 2: \u0422\u0438\u043F\u044B \u0434\u0430\u043D\u043D\u044B\u0445, \u0444\u043B\u0430\u0433\u0438 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445, \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435, \u043E\u0431\u0445\u043E\u0434</h3><p>\u0420\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0438\u043C \u0432\u0442\u043E\u0440\u043E\u0439 \u043F\u0440\u0438\u043C\u0435\u0440 <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">example/02.rs</a>:</p><p>\u0412 \u044D\u0442\u043E\u043C \u043F\u0440\u0438\u043C\u0435\u0440\u0435 <code>env_rw!</code> \u043E\u043F\u0443\u0449\u0435\u043D, \u0430 \u0442\u0440\u0435\u0442\u0438\u0439 \u0438 \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u044B\u0439 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u044B ( <code>r</code>, <code>w</code>) \u043E\u043F\u0443\u0449\u0435\u043D\u044B.</p><h4 id="\u043A\u043E\u0434-1" tabindex="-1"><a class="header-anchor" href="#\u043A\u043E\u0434-1" aria-hidden="true">#</a> \u041A\u043E\u0434</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(
  MDBX,
  {
    let mut db_path = std::env::current_exe().unwrap();
    db_path.set_extension(&quot;mdb&quot;);
    println!(&quot;mdbx file path {}&quot;, db_path.display());
    db_path.into()
  },
  r,
  w
);

mdbx! {
  MDBX // \u0418\u043C\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 Env
  Test // \u0422\u0435\u0441\u0442 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0412\u044B\u0432\u0435\u0441\u0442\u0438 \u043D\u043E\u043C\u0435\u0440 \u0432\u0435\u0440\u0441\u0438\u0438 libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u041C\u043D\u043E\u0433\u043E\u043F\u043E\u0442\u043E\u0447\u043D\u043E\u0435 \u0447\u0442\u0435\u043D\u0438\u0435 \u0438 \u0437\u0430\u043F\u0438\u0441\u044C
  let t = std::thread::spawn(|| {
    let tx = w!();
    let test = tx | Test;
    test.set([1, 2], [6])?;
    println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

    match test.get([1, 2])? {
      Some(val) =&gt; {
        let t: &amp;[u8] = &amp;val;
        println!(&quot;{:?}&quot;, t);
      }
      None =&gt; unreachable!(),
    }
    Ok(())
  });

  t.join().unwrap()?;

  Ok(())
}
  #[derive(Clone, Debug)]
  pub struct Config {
    path: PathBuf,
    mode: ffi::mdbx_mode_t,
    flag: flag::ENV,
    sync_period: u64,
    sync_bytes: u64,
    max_db: u64,
    pagesize: isize,
  }
  
  lazy_static! {
    pub static ref ENV_CONFIG_DEFAULT: Config = Config {
      path:PathBuf::new(),
      mode: 0o600,
      //https://github.com/erthink/libmdbx/issues/248
      sync_period : 65536, // \u0417\u0430 1/65536 \u0441\u0435\u043A\u0443\u043D\u0434\u044B
      sync_bytes : 65536,
      max_db : 256,
      flag : (
          flag::ENV::MDBX_EXCLUSIVE
        | flag::ENV::MDBX_LIFORECLAIM
        | flag::ENV::MDBX_COALESCE
        | flag::ENV::MDBX_NOMEMINIT
        | flag::ENV::MDBX_NOSUBDIR
        | flag::ENV::MDBX_SAFE_NOSYNC
        // | flag::ENV::MDBX_SYNC_DURABLE
      ),
      pagesize:-1
    };
  }
mdbx! {
 MDBX // \u0418\u043C\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 Env
 Test // \u0422\u0435\u0441\u0442 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445
}
let tx = w!();
let test = tx | Test;
test.set([1, 2], [6])?;
println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

match test.get([1, 2])? {
 Some(val) =&gt; {
  let t:&amp;[u8] = &amp;val;
  println!(&quot;{:?}&quot;,t);
 },
 None =&gt; unreachable!()
}
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
});

mdbx! {
  MDBX // \u0418\u043C\u0435\u043D\u0430 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 ENV
  Test1
  Test2
    key Str
    val Str
  Test3
    key i32
    val u64
  Test4
    key u64
    val u16
    flag DUPSORT
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0411\u044B\u0441\u0442\u0440\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C
  w!(Test1.set [2, 3],[4, 5]);

  // \u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u0447\u0442\u0435\u043D\u0438\u0435
  match r!(Test1.get [2, 3]) {
    Some(r) =&gt; {
      println!(
        &quot;\\nu16::from_le_bytes({:?}) = {}&quot;,
        r,
        u16::from_le_bytes((*r).try_into()?)
      );
    }
    None =&gt; unreachable!(),
  }

  // \u041C\u043D\u043E\u0433\u043E\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u043D\u0430\u0434 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u043C\u0438 \u0431\u0430\u0437\u0430\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u043E\u0434\u043D\u043E\u0439 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438
  {
    let tx = w!();
    let test1 = tx | Test1;

    test1.set(&amp;[9], &amp;[10, 12])?;
    test1.set([8, 1], [9])?;
    test1.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test1.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;

    println!(&quot;\\n-- loop test1&quot;);
    for (k, v) in test1 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    dbg!(test1.del_val([8, 1], [3])?);
    dbg!(test1.get([8, 1])?.unwrap());
    dbg!(test1.del_val([8, 1], [9])?);
    dbg!(test1.get([8, 1])?);

    dbg!(test1.del([9])?);
    dbg!(test1.get([9])?);
    dbg!(test1.del([9])?);

    let test2 = tx | Test2;
    test2.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test2.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;
    println!(&quot;\\n-- loop test2&quot;);
    for (k, v) in test2 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    let test3 = tx | Test3;

    test3.set(13, 32)?;
    test3.set(16, 32)?;
    test3.set(-15, 6)?;
    test3.set(-10, 6)?;
    test3.set(-12, 6)?;
    test3.set(0, 6)?;
    test3.set(10, 5)?;

    println!(&quot;\\n-- loop test3&quot;);
    for (k, v) in test3 {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    let test4 = tx | Test4;
    test4.set(10, 5)?;
    test4.set(10, 0)?;
    test4.set(13, 32)?;
    test4.set(16, 2)?;
    test4.set(16, 1)?;
    test4.set(16, 3)?;
    test4.set(0, 6)?;
    test4.set(10, 5)?;
    test4.set(0, 2)?;

    dbg!(test4.del_val(0, 2)?);
    dbg!(test4.del_val(0, 2)?);

    println!(&quot;\\n-- loop test4 rev&quot;);
    for (k, v) in test4.rev() {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    for i in test4.dup(16) {
      println!(&quot;dup(16) {:?}&quot;, i);
    }

    // \u0421\u0434\u0435\u043B\u043A\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0430 \u0432 \u043A\u043E\u043D\u0446\u0435 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430
  }

  Ok(())
}
</code></pre></div><h4 id="\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435-\u0432\u044B\u0432\u043E\u0434-1" tabindex="-1"><a class="header-anchor" href="#\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435-\u0432\u044B\u0432\u043E\u0434-1" aria-hidden="true">#</a> \u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0432\u044B\u0432\u043E\u0434</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/02.mdb

u16::from_le_bytes(Bin([4, 5])) = 1284

-- loop test1
[2] = [3]
[2, 3] = [4, 5]
[8, 1] = [9]
[9] = [10, 12]
[97, 98, 99] = [48, 49, 50]
[114, 109, 119, 46, 108, 105, 110, 107] = [68, 111, 119, 110, 32, 119, 105, 116, 104, 32, 68, 97, 116, 97, 32, 72, 101, 103, 101, 109, 111, 110, 121]
[examples/02.rs:57] test1.del_val([8, 1], [3])? = false
[examples/02.rs:58] test1.get([8, 1])?.unwrap() = Bin(
    [
        9,
    ],
)
[examples/02.rs:59] test1.del_val([8, 1], [9])? = true
[examples/02.rs:60] test1.get([8, 1])? = None
[examples/02.rs:62] test1.del([9])? = true
[examples/02.rs:63] test1.get([9])? = None
[examples/02.rs:64] test1.del([9])? = false

-- loop test2
abc = 012
rmw.link = Down with Data Hegemony

-- loop test3
0 = 6
10 = 5
13 = 32
16 = 32
-15 = 6
-12 = 6
-10 = 6
[examples/02.rs:100] test4.del_val(0, 2)? = true
[examples/02.rs:101] test4.del_val(0, 2)? = false

-- loop test4 rev
16 = 3
16 = 2
16 = 1
13 = 32
10 = 5
10 = 0
0 = 6
dup(16) 1
dup(16) 2
dup(16) 3
</code></pre></div><h4 id="\u0431\u044B\u0441\u0442\u0440\u043E\u0435-\u0447\u0442\u0435\u043D\u0438\u0435-\u0438-\u0437\u0430\u043F\u0438\u0441\u044C" tabindex="-1"><a class="header-anchor" href="#\u0431\u044B\u0441\u0442\u0440\u043E\u0435-\u0447\u0442\u0435\u043D\u0438\u0435-\u0438-\u0437\u0430\u043F\u0438\u0441\u044C" aria-hidden="true">#</a> \u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u0447\u0442\u0435\u043D\u0438\u0435 \u0438 \u0437\u0430\u043F\u0438\u0441\u044C</h4><p>\u0415\u0441\u043B\u0438 \u043C\u044B \u0445\u043E\u0442\u0438\u043C \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0438\u043B\u0438 \u0437\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043E\u0434\u043D\u0443 \u0441\u0442\u0440\u043E\u043A\u0443 \u0434\u0430\u043D\u043D\u044B\u0445, \u043C\u044B \u043C\u043E\u0436\u0435\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u0430\u0445\u0430\u0440 \u043C\u0430\u043A\u0440\u043E\u0441\u0430.</p><p>\u0421\u0447\u0438\u0442\u044B\u0432\u0430\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0445</p><div class="language-text ext-text"><pre class="language-text"><code>r!(Test1.get [2, 3])
</code></pre></div><p>\u0417\u0430\u043F\u0438\u0441\u044C \u0434\u0430\u043D\u043D\u044B\u0445</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(
  MDBX,
  {
    let mut db_path = std::env::current_exe().unwrap();
    db_path.set_extension(&quot;mdb&quot;);
    println!(&quot;mdbx file path {}&quot;, db_path.display());
    db_path.into()
  },
  r,
  w
);

mdbx! {
  MDBX // \u0418\u043C\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 Env
  Test // \u0422\u0435\u0441\u0442 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0412\u044B\u0432\u0435\u0441\u0442\u0438 \u043D\u043E\u043C\u0435\u0440 \u0432\u0435\u0440\u0441\u0438\u0438 libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u041C\u043D\u043E\u0433\u043E\u043F\u043E\u0442\u043E\u0447\u043D\u043E\u0435 \u0447\u0442\u0435\u043D\u0438\u0435 \u0438 \u0437\u0430\u043F\u0438\u0441\u044C
  let t = std::thread::spawn(|| {
    let tx = w!();
    let test = tx | Test;
    test.set([1, 2], [6])?;
    println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

    match test.get([1, 2])? {
      Some(val) =&gt; {
        let t: &amp;[u8] = &amp;val;
        println!(&quot;{:?}&quot;, t);
      }
      None =&gt; unreachable!(),
    }
    Ok(())
  });

  t.join().unwrap()?;

  Ok(())
}
  #[derive(Clone, Debug)]
  pub struct Config {
    path: PathBuf,
    mode: ffi::mdbx_mode_t,
    flag: flag::ENV,
    sync_period: u64,
    sync_bytes: u64,
    max_db: u64,
    pagesize: isize,
  }
  
  lazy_static! {
    pub static ref ENV_CONFIG_DEFAULT: Config = Config {
      path:PathBuf::new(),
      mode: 0o600,
      //https://github.com/erthink/libmdbx/issues/248
      sync_period : 65536, // \u0417\u0430 1/65536 \u0441\u0435\u043A\u0443\u043D\u0434\u044B
      sync_bytes : 65536,
      max_db : 256,
      flag : (
          flag::ENV::MDBX_EXCLUSIVE
        | flag::ENV::MDBX_LIFORECLAIM
        | flag::ENV::MDBX_COALESCE
        | flag::ENV::MDBX_NOMEMINIT
        | flag::ENV::MDBX_NOSUBDIR
        | flag::ENV::MDBX_SAFE_NOSYNC
        // | flag::ENV::MDBX_SYNC_DURABLE
      ),
      pagesize:-1
    };
  }
mdbx! {
 MDBX // \u0418\u043C\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 Env
 Test // \u0422\u0435\u0441\u0442 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445
}
let tx = w!();
let test = tx | Test;
test.set([1, 2], [6])?;
println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

match test.get([1, 2])? {
 Some(val) =&gt; {
  let t:&amp;[u8] = &amp;val;
  println!(&quot;{:?}&quot;,t);
 },
 None =&gt; unreachable!()
}
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
});

mdbx! {
  MDBX // \u0418\u043C\u0435\u043D\u0430 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 ENV
  Test1
  Test2
    key Str
    val Str
  Test3
    key i32
    val u64
  Test4
    key u64
    val u16
    flag DUPSORT
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0411\u044B\u0441\u0442\u0440\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C
  w!(Test1.set [2, 3],[4, 5]);

  // \u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u0447\u0442\u0435\u043D\u0438\u0435
  match r!(Test1.get [2, 3]) {
    Some(r) =&gt; {
      println!(
        &quot;\\nu16::from_le_bytes({:?}) = {}&quot;,
        r,
        u16::from_le_bytes((*r).try_into()?)
      );
    }
    None =&gt; unreachable!(),
  }

  // \u041C\u043D\u043E\u0433\u043E\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u043D\u0430\u0434 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u043C\u0438 \u0431\u0430\u0437\u0430\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u043E\u0434\u043D\u043E\u0439 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438
  {
    let tx = w!();
    let test1 = tx | Test1;

    test1.set(&amp;[9], &amp;[10, 12])?;
    test1.set([8, 1], [9])?;
    test1.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test1.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;

    println!(&quot;\\n-- loop test1&quot;);
    for (k, v) in test1 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    dbg!(test1.del_val([8, 1], [3])?);
    dbg!(test1.get([8, 1])?.unwrap());
    dbg!(test1.del_val([8, 1], [9])?);
    dbg!(test1.get([8, 1])?);

    dbg!(test1.del([9])?);
    dbg!(test1.get([9])?);
    dbg!(test1.del([9])?);

    let test2 = tx | Test2;
    test2.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test2.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;
    println!(&quot;\\n-- loop test2&quot;);
    for (k, v) in test2 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    let test3 = tx | Test3;

    test3.set(13, 32)?;
    test3.set(16, 32)?;
    test3.set(-15, 6)?;
    test3.set(-10, 6)?;
    test3.set(-12, 6)?;
    test3.set(0, 6)?;
    test3.set(10, 5)?;

    println!(&quot;\\n-- loop test3&quot;);
    for (k, v) in test3 {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    let test4 = tx | Test4;
    test4.set(10, 5)?;
    test4.set(10, 0)?;
    test4.set(13, 32)?;
    test4.set(16, 2)?;
    test4.set(16, 1)?;
    test4.set(16, 3)?;
    test4.set(0, 6)?;
    test4.set(10, 5)?;
    test4.set(0, 2)?;

    dbg!(test4.del_val(0, 2)?);
    dbg!(test4.del_val(0, 2)?);

    println!(&quot;\\n-- loop test4 rev&quot;);
    for (k, v) in test4.rev() {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    for i in test4.dup(16) {
      println!(&quot;dup(16) {:?}&quot;, i);
    }

    // \u0421\u0434\u0435\u043B\u043A\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0430 \u0432 \u043A\u043E\u043D\u0446\u0435 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
</code></pre></div><p>\u0412\u0441\u0435 \u0432 \u043E\u0434\u043D\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u0435, \u043A\u0430\u043A \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u0432 <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a>.</p><h4 id="\u0442\u0438\u043F\u044B-\u0434\u0430\u043D\u043D\u044B\u0445" tabindex="-1"><a class="header-anchor" href="#\u0442\u0438\u043F\u044B-\u0434\u0430\u043D\u043D\u044B\u0445" aria-hidden="true">#</a> \u0422\u0438\u043F\u044B \u0434\u0430\u043D\u043D\u044B\u0445</h4><p>\u0412 \u0444\u0430\u0439\u043B\u0435 examples/02 <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">.rs</a> \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 \u0432\u044B\u0433\u043B\u044F\u0434\u0438\u0442 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(
  MDBX,
  {
    let mut db_path = std::env::current_exe().unwrap();
    db_path.set_extension(&quot;mdb&quot;);
    println!(&quot;mdbx file path {}&quot;, db_path.display());
    db_path.into()
  },
  r,
  w
);

mdbx! {
  MDBX // \u0418\u043C\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 Env
  Test // \u0422\u0435\u0441\u0442 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0412\u044B\u0432\u0435\u0441\u0442\u0438 \u043D\u043E\u043C\u0435\u0440 \u0432\u0435\u0440\u0441\u0438\u0438 libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u041C\u043D\u043E\u0433\u043E\u043F\u043E\u0442\u043E\u0447\u043D\u043E\u0435 \u0447\u0442\u0435\u043D\u0438\u0435 \u0438 \u0437\u0430\u043F\u0438\u0441\u044C
  let t = std::thread::spawn(|| {
    let tx = w!();
    let test = tx | Test;
    test.set([1, 2], [6])?;
    println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

    match test.get([1, 2])? {
      Some(val) =&gt; {
        let t: &amp;[u8] = &amp;val;
        println!(&quot;{:?}&quot;, t);
      }
      None =&gt; unreachable!(),
    }
    Ok(())
  });

  t.join().unwrap()?;

  Ok(())
}
  #[derive(Clone, Debug)]
  pub struct Config {
    path: PathBuf,
    mode: ffi::mdbx_mode_t,
    flag: flag::ENV,
    sync_period: u64,
    sync_bytes: u64,
    max_db: u64,
    pagesize: isize,
  }
  
  lazy_static! {
    pub static ref ENV_CONFIG_DEFAULT: Config = Config {
      path:PathBuf::new(),
      mode: 0o600,
      //https://github.com/erthink/libmdbx/issues/248
      sync_period : 65536, // \u0417\u0430 1/65536 \u0441\u0435\u043A\u0443\u043D\u0434\u044B
      sync_bytes : 65536,
      max_db : 256,
      flag : (
          flag::ENV::MDBX_EXCLUSIVE
        | flag::ENV::MDBX_LIFORECLAIM
        | flag::ENV::MDBX_COALESCE
        | flag::ENV::MDBX_NOMEMINIT
        | flag::ENV::MDBX_NOSUBDIR
        | flag::ENV::MDBX_SAFE_NOSYNC
        // | flag::ENV::MDBX_SYNC_DURABLE
      ),
      pagesize:-1
    };
  }
mdbx! {
 MDBX // \u0418\u043C\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 Env
 Test // \u0422\u0435\u0441\u0442 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445
}
let tx = w!();
let test = tx | Test;
test.set([1, 2], [6])?;
println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

match test.get([1, 2])? {
 Some(val) =&gt; {
  let t:&amp;[u8] = &amp;val;
  println!(&quot;{:?}&quot;,t);
 },
 None =&gt; unreachable!()
}
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
});

mdbx! {
  MDBX // \u0418\u043C\u0435\u043D\u0430 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 ENV
  Test1
  Test2
    key Str
    val Str
  Test3
    key i32
    val u64
  Test4
    key u64
    val u16
    flag DUPSORT
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0411\u044B\u0441\u0442\u0440\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C
  w!(Test1.set [2, 3],[4, 5]);

  // \u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u0447\u0442\u0435\u043D\u0438\u0435
  match r!(Test1.get [2, 3]) {
    Some(r) =&gt; {
      println!(
        &quot;\\nu16::from_le_bytes({:?}) = {}&quot;,
        r,
        u16::from_le_bytes((*r).try_into()?)
      );
    }
    None =&gt; unreachable!(),
  }

  // \u041C\u043D\u043E\u0433\u043E\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u043D\u0430\u0434 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u043C\u0438 \u0431\u0430\u0437\u0430\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u043E\u0434\u043D\u043E\u0439 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438
  {
    let tx = w!();
    let test1 = tx | Test1;

    test1.set(&amp;[9], &amp;[10, 12])?;
    test1.set([8, 1], [9])?;
    test1.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test1.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;

    println!(&quot;\\n-- loop test1&quot;);
    for (k, v) in test1 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    dbg!(test1.del_val([8, 1], [3])?);
    dbg!(test1.get([8, 1])?.unwrap());
    dbg!(test1.del_val([8, 1], [9])?);
    dbg!(test1.get([8, 1])?);

    dbg!(test1.del([9])?);
    dbg!(test1.get([9])?);
    dbg!(test1.del([9])?);

    let test2 = tx | Test2;
    test2.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test2.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;
    println!(&quot;\\n-- loop test2&quot;);
    for (k, v) in test2 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    let test3 = tx | Test3;

    test3.set(13, 32)?;
    test3.set(16, 32)?;
    test3.set(-15, 6)?;
    test3.set(-10, 6)?;
    test3.set(-12, 6)?;
    test3.set(0, 6)?;
    test3.set(10, 5)?;

    println!(&quot;\\n-- loop test3&quot;);
    for (k, v) in test3 {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    let test4 = tx | Test4;
    test4.set(10, 5)?;
    test4.set(10, 0)?;
    test4.set(13, 32)?;
    test4.set(16, 2)?;
    test4.set(16, 1)?;
    test4.set(16, 3)?;
    test4.set(0, 6)?;
    test4.set(10, 5)?;
    test4.set(0, 2)?;

    dbg!(test4.del_val(0, 2)?);
    dbg!(test4.del_val(0, 2)?);

    println!(&quot;\\n-- loop test4 rev&quot;);
    for (k, v) in test4.rev() {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    for i in test4.dup(16) {
      println!(&quot;dup(16) {:?}&quot;, i);
    }

    // \u0421\u0434\u0435\u043B\u043A\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0430 \u0432 \u043A\u043E\u043D\u0446\u0435 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
Test2
  key Str
  val Str
Test3
  key i32
  val u64
Test4
  key u64
  val u16
  flag DUPSORT
</code></pre></div><p>\u0433\u0434\u0435 <code>key</code> \u0438 <code>val</code> \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u044E\u0442 \u0442\u0438\u043F\u044B \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u043A\u043B\u044E\u0447\u0435\u0439 \u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E.</p><p>\u0415\u0441\u043B\u0438 \u0432\u044B \u043F\u043E\u043F\u044B\u0442\u0430\u0435\u0442\u0435\u0441\u044C \u0437\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0442\u0438\u043F \u0434\u0430\u043D\u043D\u044B\u0445, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u043C\u0443, \u0431\u0443\u0434\u0435\u0442 \u0432\u044B\u0434\u0430\u043D\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0435, \u043A\u0430\u043A \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u043E \u043D\u0430 \u0441\u043A\u0440\u0438\u043D\u0448\u043E\u0442\u0435 \u043D\u0438\u0436\u0435:</p><p><img src="//irmw.gumlet.io/4rFTC6.png" alt=""></p><p>\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0442\u0438\u043F \u0434\u0430\u043D\u043D\u044B\u0445 <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Bin.html" target="_blank" rel="noopener noreferrer"><code>Bin</code></a> \u041C\u043E\u0436\u043D\u043E \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C \u043B\u044E\u0431\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u0440\u0435\u0430\u043B\u0438\u0437\u0443\u044E\u0449\u0438\u0435 <code>AsRef&lt;[u8]&gt;</code>.</p><p>\u0415\u0441\u043B\u0438 \u043A\u043B\u044E\u0447 \u0438\u043B\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0440\u043E\u043A\u043E\u0439 <code>utf8</code>, \u0442\u0438\u043F \u0434\u0430\u043D\u043D\u044B\u0445 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u043D\u0430 <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Str.html" target="_blank" rel="noopener noreferrer"><code>Str</code></a> .</p><p><a href="https://doc.rust-lang.org/std/ops/trait.Deref.html" target="_blank" rel="noopener noreferrer">\u0420\u0430\u0437\u044B\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435</a> <code>Str</code> \u0432\u0435\u0440\u043D\u0435\u0442 \u0441\u0442\u0440\u043E\u043A\u0443, \u0430\u043D\u0430\u043B\u043E\u0433\u0438\u0447\u043D\u0443\u044E <code>let k:&amp;str = &amp;k;</code>.</p><p>\u041A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E, \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 <code>Str</code> \u0442\u0430\u043A\u0436\u0435 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u044B <a href="https://doc.rust-lang.org/std/fmt/trait.Display.html" target="_blank" rel="noopener noreferrer"><code>std::fmt::Display</code></a> , <code>println!(&quot;{}&quot;,k)</code> \u0432\u044B\u0432\u0435\u0434\u0435\u0442 \u0447\u0438\u0442\u0430\u0435\u043C\u0443\u044E \u0441\u0442\u0440\u043E\u043A\u0443.</p><h5 id="\u043F\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0435-\u0442\u0438\u043F\u044B-\u0434\u0430\u043D\u043D\u044B\u0445" tabindex="-1"><a class="header-anchor" href="#\u043F\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0435-\u0442\u0438\u043F\u044B-\u0434\u0430\u043D\u043D\u044B\u0445" aria-hidden="true">#</a> \u041F\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0442\u0438\u043F\u044B \u0434\u0430\u043D\u043D\u044B\u0445</h5><p>\u0412 \u0434\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043A <code>Str</code> \u0438 <code>Bin</code>, \u043E\u0431\u0435\u0440\u0442\u043A\u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F <a href="https://docs.rs/mdbx/latest/src/mdbx/type.rs.html#48" target="_blank" rel="noopener noreferrer">usize, u128, u64, u32, u16, u8, isize, i128, i64, i32, i16, i8, f32, f64</a>.</p><h4 id="\u0444\u043B\u0430\u0433\u0438-\u0431\u0430\u0437\u044B-\u0434\u0430\u043D\u043D\u044B\u0445" tabindex="-1"><a class="header-anchor" href="#\u0444\u043B\u0430\u0433\u0438-\u0431\u0430\u0437\u044B-\u0434\u0430\u043D\u043D\u044B\u0445" aria-hidden="true">#</a> \u0424\u043B\u0430\u0433\u0438 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445</h4><p>\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0444\u043B\u0430\u0433\u0438 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445, \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u043A \u0434\u0430\u043D\u043D\u044B\u043C \u0432 \u0444\u0430\u0439\u043B\u0435 <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a> \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 <code>Test4</code>. <code>flag DUPSORT</code></p><p>\u0411\u0430\u0437\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 libmdbx \u0438\u043C\u0435\u0435\u0442 \u0440\u044F\u0434 \u0444\u043B\u0430\u0433\u043E\u0432 ( <a href="https://erthink.github.io/libmdbx/group__c__dbi.html#gafe3bddb297b3ab0d828a487c5726f76a" target="_blank" rel="noopener noreferrer"><code>MDBX_db_flags_t</code></a> ), \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u044B.</p><ul><li>REVERSEKEY \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0435 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u0441\u0442\u0440\u043E\u043A \u0434\u043B\u044F \u043A\u043B\u044E\u0447\u0435\u0439. (\u043F\u043E\u043B\u0435\u0437\u043D\u043E \u043F\u0440\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u043A\u043E\u043D\u0435\u0447\u043D\u044B\u0445 \u043A\u043E\u0434\u043E\u0432\u044B\u0445 \u0447\u0438\u0441\u0435\u043B \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043A\u043B\u044E\u0447\u0435\u0439)</li><li>DUPSORT \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u043E\u0442\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0434\u0443\u0431\u043B\u0438\u043A\u0430\u0442\u044B, \u0442.\u0435. \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0434\u043B\u044F \u043A\u043B\u044E\u0447\u0430.</li><li>INTEGERKEY \u0420\u043E\u0434\u043D\u043E\u0439 \u0443\u043F\u043E\u0440\u044F\u0434\u043E\u0447\u0435\u043D\u043D\u044B\u0439 \u043F\u043E \u0431\u0430\u0439\u0442\u0430\u043C \u0447\u0438\u0441\u043B\u043E\u0432\u043E\u0439 \u043A\u043B\u044E\u0447 uint32_t \u0438\u043B\u0438 uint64_t. \u041A\u043B\u044E\u0447\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u043E\u0433\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0432\u044B\u0440\u043E\u0432\u043D\u0435\u043D\u044B \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u043E\u0432.</li><li>DUPFIXED \u0420\u0430\u0437\u043C\u0435\u0440 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u043C, \u0435\u0441\u043B\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F DUPSORT (\u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0431\u044B\u0441\u0442\u0440\u043E \u043F\u043E\u0434\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439).</li><li>DUPSORT \u0438 DUPFIXED \u0442\u0440\u0435\u0431\u0443\u044E\u0442\u0441\u044F \u0434\u043B\u044F INTEGERDUP; \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0446\u0435\u043B\u044B\u043C\u0438 \u0447\u0438\u0441\u043B\u0430\u043C\u0438 (\u0430\u043D\u0430\u043B\u043E\u0433\u0438\u0447\u043D\u043E INTEGERKEY). \u0412\u0441\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043E\u043B\u0436\u043D\u044B \u0438\u043C\u0435\u0442\u044C \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0432\u044B\u0440\u043E\u0432\u043D\u0435\u043D\u044B \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432.</li><li>REVERSEDUP \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 DUPSORT; \u0434\u043B\u044F \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0435 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u0441\u0442\u0440\u043E\u043A.</li><li>CREATE \u0441\u043E\u0437\u0434\u0430\u0435\u0442 \u0411\u0414, \u0435\u0441\u043B\u0438 \u043E\u043D\u0430 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 (\u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E).</li><li>DB_ACCEDE \u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0443\u044E \u043F\u043E\u0434\u0431\u0430\u0437\u0443 \u0434\u0430\u043D\u043D\u044B\u0445, \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u0443\u044E \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0444\u043B\u0430\u0433\u0430 \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E\u0441\u0442\u0438.<br> \u042D\u0442\u043E\u0442 \u0444\u043B\u0430\u0433 DB_ACCEDE \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0434\u043B\u044F \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u044F \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u043F\u043E\u0434\u0431\u0430\u0437 \u0434\u0430\u043D\u043D\u044B\u0445, \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u044B\u0445 \u0441 \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u043C\u0438 \u0444\u043B\u0430\u0433\u0430\u043C\u0438 (REVERSEKEY, DUPSORT, INTEGERKEY, DUPFIXED, INTEGERDUP \u0438 REVERSEDUP).<br> \u0412 \u044D\u0442\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u043F\u043E\u0434\u0431\u0430\u0437\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u043D\u0435 \u0432\u0435\u0440\u043D\u0435\u0442 \u043E\u0448\u0438\u0431\u043A\u0443 INCOMPATIBLE, \u0430 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043A\u0440\u044B\u0442\u0430 \u0441 \u0444\u043B\u0430\u0433\u0430\u043C\u0438, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u043C\u0438 \u0434\u043B\u044F \u0435\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F, \u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0441\u043C\u043E\u0436\u0435\u0442 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0444\u043B\u0430\u0433\u0438 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E mdbx_dbi_flags().</li></ul><h5 id="dupsort-\u043E\u0434\u0438\u043D-\u043A\u043B\u044E\u0447-\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442-\u0431\u043E\u043B\u0435\u0435-\u0447\u0435\u043C-\u043E\u0434\u043D\u043E\u043C\u0443-\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044E" tabindex="-1"><a class="header-anchor" href="#dupsort-\u043E\u0434\u0438\u043D-\u043A\u043B\u044E\u0447-\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442-\u0431\u043E\u043B\u0435\u0435-\u0447\u0435\u043C-\u043E\u0434\u043D\u043E\u043C\u0443-\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044E" aria-hidden="true">#</a> DUPSORT : \u041E\u0434\u0438\u043D \u043A\u043B\u044E\u0447 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C \u043E\u0434\u043D\u043E\u043C\u0443 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044E</h5><p><code>DUPSORT</code>\u042D\u0442\u043E \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u043A\u043B\u044E\u0447 \u043C\u043E\u0436\u0435\u0442 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C \u043E\u0434\u043D\u043E\u043C\u0443 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044E.</p><p>\u0415\u0441\u043B\u0438 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0444\u043B\u0430\u0433\u043E\u0432, \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C <code>flag DUPSORT | DUPFIXED</code></p><h5 id="dup-key-\u0438\u0442\u0435\u0440\u0430\u0442\u043E\u0440-\u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u044E\u0449\u0438\u0438-\u0432\u0441\u0435-\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F-\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435-\u043A\u043B\u044E\u0447\u0443" tabindex="-1"><a class="header-anchor" href="#dup-key-\u0438\u0442\u0435\u0440\u0430\u0442\u043E\u0440-\u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u044E\u0449\u0438\u0438-\u0432\u0441\u0435-\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F-\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435-\u043A\u043B\u044E\u0447\u0443" aria-hidden="true">#</a> <code>.dup(key)</code> \u0438\u0442\u0435\u0440\u0430\u0442\u043E\u0440, \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u044E\u0449\u0438\u0439 \u0432\u0441\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u043A\u043B\u044E\u0447\u0443</h5><p>\u042D\u0442\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0431\u0430\u0437 \u0434\u0430\u043D\u043D\u044B\u0445, \u043F\u043E\u043C\u0435\u0447\u0435\u043D\u043D\u044B\u0445 <code>DUPSORT</code>, \u0433\u0434\u0435 \u043A\u043B\u044E\u0447 \u043C\u043E\u0436\u0435\u0442 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C \u043E\u0434\u043D\u043E\u043C\u0443 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044E.</p><p>\u0414\u043B\u044F \u0431\u0430\u0437 \u0434\u0430\u043D\u043D\u044B\u0445 <code>DUPSORT</code>, <code>get</code> \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0435\u0440\u0432\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043A\u043B\u044E\u0447\u0430. \u0427\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0432\u0441\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 <code>dup</code>.</p><h5 id="\u0444\u043B\u0430\u0433\u0438-\u0431\u0430\u0437\u044B-\u0434\u0430\u043D\u043D\u044B\u0445-\u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438-\u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C\u044B\u0435-\u043F\u043E-\u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E" tabindex="-1"><a class="header-anchor" href="#\u0444\u043B\u0430\u0433\u0438-\u0431\u0430\u0437\u044B-\u0434\u0430\u043D\u043D\u044B\u0445-\u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438-\u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C\u044B\u0435-\u043F\u043E-\u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E" aria-hidden="true">#</a> \u0424\u043B\u0430\u0433\u0438 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445, \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C\u044B\u0435 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E</h5><p>\u0415\u0441\u043B\u0438 \u0442\u0438\u043F \u0434\u0430\u043D\u043D\u044B\u0445 <code>u32</code> / <code>u64</code> / <code>usize</code>, \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0444\u043B\u0430\u0433 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#105" target="_blank" rel="noopener noreferrer"><code>INTEGERKEY</code></a> .</p><p>\u041D\u0430 \u043C\u0430\u0448\u0438\u043D\u0430\u0445 \u0441 \u043A\u043E\u0434\u0438\u0440\u043E\u0432\u043A\u043E\u0439 \u043C\u0430\u043B\u043E\u0433\u043E \u043A\u043E\u043D\u0446\u0430 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0434\u0440\u0443\u0433\u0438\u0435 \u0442\u0438\u043F\u044B \u0446\u0438\u0444\u0440 <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#108" target="_blank" rel="noopener noreferrer"><code>REVERSEKEY</code></a> \u0424\u043B\u0430\u0433 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F, \u0435\u0441\u043B\u0438 \u0442\u0438\u043F \u0434\u0430\u043D\u043D\u044B\u0445 - / / .</p><h4 id="\u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435-\u0434\u0430\u043D\u043D\u044B\u0445" tabindex="-1"><a class="header-anchor" href="#\u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435-\u0434\u0430\u043D\u043D\u044B\u0445" aria-hidden="true">#</a> \u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0445</h4><h5 id="del-key-\u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435-\u043A\u043B\u0430\u0432\u0438\u0448\u0438" tabindex="-1"><a class="header-anchor" href="#del-key-\u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435-\u043A\u043B\u0430\u0432\u0438\u0448\u0438" aria-hidden="true">#</a> <code>.del(key)</code> \u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438</h5><p><code>.del(val)</code> \u0423\u0434\u0430\u043B\u044F\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0435 \u043A\u043B\u044E\u0447\u0443.</p><p>\u0415\u0441\u043B\u0438 \u0431\u0430\u0437\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u043C\u0435\u0435\u0442 \u0444\u043B\u0430\u0433 <code>DUPSORT</code>, \u0432\u0441\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043F\u043E\u0434 \u044D\u0442\u0438\u043C \u043A\u043B\u044E\u0447\u043E\u043C \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B.</p><p>\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 <code>true</code>, \u0435\u0441\u043B\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u044B, \u0438 <code>false</code>, \u0435\u0441\u043B\u0438 \u043D\u0435\u0442.</p><h5 id="del-val-key-val-\u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435-\u0442\u043E\u0447\u043D\u043E\u0433\u043E-\u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u044F" tabindex="-1"><a class="header-anchor" href="#del-val-key-val-\u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435-\u0442\u043E\u0447\u043D\u043E\u0433\u043E-\u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u044F" aria-hidden="true">#</a> <code>.del_val(key,val)</code> \u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u044F</h5><p><code>.del_val(key,val)</code> \u0423\u0434\u0430\u043B\u044F\u0435\u0442 \u043F\u0430\u0440\u044B \u043A\u043B\u044E\u0447-\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0442\u043E\u0447\u043D\u043E \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u0432\u0445\u043E\u0434\u043D\u044B\u043C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430\u043C.</p><p>\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 <code>true</code>, \u0435\u0441\u043B\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u044B, \u0438 <code>false</code>, \u0435\u0441\u043B\u0438 \u043D\u0435\u0442.</p><h4 id="\u043E\u0431\u0445\u043E\u0434" tabindex="-1"><a class="header-anchor" href="#\u043E\u0431\u0445\u043E\u0434" aria-hidden="true">#</a> \u041E\u0431\u0445\u043E\u0434</h4><h5 id="\u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0438-\u043E\u0431\u0445\u043E\u0434" tabindex="-1"><a class="header-anchor" href="#\u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0438-\u043E\u0431\u0445\u043E\u0434" aria-hidden="true">#</a> \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043E\u0431\u0445\u043E\u0434</h5><p>\u0412 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0435\u0439 <a href="https://doc.rust-lang.org/std/iter/trait.IntoIterator.html" target="_blank" rel="noopener noreferrer"><code>std::iter::IntoIterator</code></a> . \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u043E\u0439\u0442\u0438 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C:</p><p><code>for (k, v) in test1</code></p><h5 id="rev-\u043E\u0431\u0445\u043E\u0434-\u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0433\u043E-\u043F\u043E\u0440\u044F\u0434\u043A\u0430" tabindex="-1"><a class="header-anchor" href="#rev-\u043E\u0431\u0445\u043E\u0434-\u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0433\u043E-\u043F\u043E\u0440\u044F\u0434\u043A\u0430" aria-hidden="true">#</a> <code>.rev()</code> \u041E\u0431\u0445\u043E\u0434 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0433\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0430</h5><p><code>for (k, v) in test4.rev()</code></p><h5 id="\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430" tabindex="-1"><a class="header-anchor" href="#\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430" aria-hidden="true">#</a> \u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430</h5><p>\u041A\u043B\u044E\u0447\u0438 libmdbx \u0441\u043E\u0440\u0442\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0432 <a href="https://zh.wikipedia.org/wiki/%E5%AD%97%E5%85%B8%E5%BA%8F" target="_blank" rel="noopener noreferrer">\u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u0441\u043B\u043E\u0432\u0430\u0440\u044F</a>.</p><ul><li><p>\u0414\u043B\u044F \u0431\u0435\u0437\u0437\u043D\u0430\u043A\u043E\u0432\u044B\u0445 \u0447\u0438\u0441\u0435\u043B</p><p>\u0441\u043E\u0440\u0442\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u043E\u0442 \u043D\u0430\u0438\u043C\u0435\u043D\u044C\u0448\u0435\u0433\u043E \u043A \u043D\u0430\u0438\u0431\u043E\u043B\u044C\u0448\u0435\u043C\u0443, \u043F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u0444\u043B\u0430\u0433\u0438 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 ( <code>u32</code>/ <code>u64</code>/ <code>usize</code> \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043A <code>INTEGERKEY</code>, \u0434\u0440\u0443\u0433\u0438\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043A <code>REVERSEKEY</code> \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u043C\u0430\u0448\u0438\u043D\u043D\u043E\u0433\u043E \u043A\u043E\u0434\u0430).</p></li><li><p>\u0414\u043B\u044F \u0437\u043D\u0430\u043A\u043E\u0432\u044B\u0445 \u0447\u0438\u0441\u0435\u043B</p><p>\u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439: \u0441\u043D\u0430\u0447\u0430\u043B\u0430 0, \u0437\u0430\u0442\u0435\u043C \u0432\u0441\u0435 \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0447\u0438\u0441\u043B\u0430 \u043E\u0442 \u043D\u0430\u0438\u043C\u0435\u043D\u044C\u0448\u0435\u0433\u043E \u0434\u043E \u043D\u0430\u0438\u0431\u043E\u043B\u044C\u0448\u0435\u0433\u043E, \u0437\u0430\u0442\u0435\u043C \u0432\u0441\u0435 \u043E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0447\u0438\u0441\u043B\u0430 \u043E\u0442 \u043D\u0430\u0438\u043C\u0435\u043D\u044C\u0448\u0435\u0433\u043E \u0434\u043E \u043D\u0430\u0438\u0431\u043E\u043B\u044C\u0448\u0435\u0433\u043E.</p></li></ul><h3 id="\u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044C\u043D\u044B\u0435-\u0438\u0442\u0435\u0440\u0430\u0442\u043E\u0440\u044B" tabindex="-1"><a class="header-anchor" href="#\u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044C\u043D\u044B\u0435-\u0438\u0442\u0435\u0440\u0430\u0442\u043E\u0440\u044B" aria-hidden="true">#</a> \u0418\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u0442\u0435\u0440\u0430\u0442\u043E\u0440\u044B</h3><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(
  MDBX,
  {
    let mut db_path = std::env::current_exe().unwrap();
    db_path.set_extension(&quot;mdb&quot;);
    println!(&quot;mdbx file path {}&quot;, db_path.display());
    db_path.into()
  },
  r,
  w
);

mdbx! {
  MDBX // \u0418\u043C\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 Env
  Test // \u0422\u0435\u0441\u0442 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0412\u044B\u0432\u0435\u0441\u0442\u0438 \u043D\u043E\u043C\u0435\u0440 \u0432\u0435\u0440\u0441\u0438\u0438 libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u041C\u043D\u043E\u0433\u043E\u043F\u043E\u0442\u043E\u0447\u043D\u043E\u0435 \u0447\u0442\u0435\u043D\u0438\u0435 \u0438 \u0437\u0430\u043F\u0438\u0441\u044C
  let t = std::thread::spawn(|| {
    let tx = w!();
    let test = tx | Test;
    test.set([1, 2], [6])?;
    println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

    match test.get([1, 2])? {
      Some(val) =&gt; {
        let t: &amp;[u8] = &amp;val;
        println!(&quot;{:?}&quot;, t);
      }
      None =&gt; unreachable!(),
    }
    Ok(())
  });

  t.join().unwrap()?;

  Ok(())
}
  #[derive(Clone, Debug)]
  pub struct Config {
    path: PathBuf,
    mode: ffi::mdbx_mode_t,
    flag: flag::ENV,
    sync_period: u64,
    sync_bytes: u64,
    max_db: u64,
    pagesize: isize,
  }
  
  lazy_static! {
    pub static ref ENV_CONFIG_DEFAULT: Config = Config {
      path:PathBuf::new(),
      mode: 0o600,
      //https://github.com/erthink/libmdbx/issues/248
      sync_period : 65536, // \u0417\u0430 1/65536 \u0441\u0435\u043A\u0443\u043D\u0434\u044B
      sync_bytes : 65536,
      max_db : 256,
      flag : (
          flag::ENV::MDBX_EXCLUSIVE
        | flag::ENV::MDBX_LIFORECLAIM
        | flag::ENV::MDBX_COALESCE
        | flag::ENV::MDBX_NOMEMINIT
        | flag::ENV::MDBX_NOSUBDIR
        | flag::ENV::MDBX_SAFE_NOSYNC
        // | flag::ENV::MDBX_SYNC_DURABLE
      ),
      pagesize:-1
    };
  }
mdbx! {
 MDBX // \u0418\u043C\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 Env
 Test // \u0422\u0435\u0441\u0442 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445
}
let tx = w!();
let test = tx | Test;
test.set([1, 2], [6])?;
println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

match test.get([1, 2])? {
 Some(val) =&gt; {
  let t:&amp;[u8] = &amp;val;
  println!(&quot;{:?}&quot;,t);
 },
 None =&gt; unreachable!()
}
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
});

mdbx! {
  MDBX // \u0418\u043C\u0435\u043D\u0430 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 ENV
  Test1
  Test2
    key Str
    val Str
  Test3
    key i32
    val u64
  Test4
    key u64
    val u16
    flag DUPSORT
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0411\u044B\u0441\u0442\u0440\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C
  w!(Test1.set [2, 3],[4, 5]);

  // \u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u0447\u0442\u0435\u043D\u0438\u0435
  match r!(Test1.get [2, 3]) {
    Some(r) =&gt; {
      println!(
        &quot;\\nu16::from_le_bytes({:?}) = {}&quot;,
        r,
        u16::from_le_bytes((*r).try_into()?)
      );
    }
    None =&gt; unreachable!(),
  }

  // \u041C\u043D\u043E\u0433\u043E\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u043D\u0430\u0434 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u043C\u0438 \u0431\u0430\u0437\u0430\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u043E\u0434\u043D\u043E\u0439 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438
  {
    let tx = w!();
    let test1 = tx | Test1;

    test1.set(&amp;[9], &amp;[10, 12])?;
    test1.set([8, 1], [9])?;
    test1.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test1.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;

    println!(&quot;\\n-- loop test1&quot;);
    for (k, v) in test1 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    dbg!(test1.del_val([8, 1], [3])?);
    dbg!(test1.get([8, 1])?.unwrap());
    dbg!(test1.del_val([8, 1], [9])?);
    dbg!(test1.get([8, 1])?);

    dbg!(test1.del([9])?);
    dbg!(test1.get([9])?);
    dbg!(test1.del([9])?);

    let test2 = tx | Test2;
    test2.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test2.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;
    println!(&quot;\\n-- loop test2&quot;);
    for (k, v) in test2 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    let test3 = tx | Test3;

    test3.set(13, 32)?;
    test3.set(16, 32)?;
    test3.set(-15, 6)?;
    test3.set(-10, 6)?;
    test3.set(-12, 6)?;
    test3.set(0, 6)?;
    test3.set(10, 5)?;

    println!(&quot;\\n-- loop test3&quot;);
    for (k, v) in test3 {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    let test4 = tx | Test4;
    test4.set(10, 5)?;
    test4.set(10, 0)?;
    test4.set(13, 32)?;
    test4.set(16, 2)?;
    test4.set(16, 1)?;
    test4.set(16, 3)?;
    test4.set(0, 6)?;
    test4.set(10, 5)?;
    test4.set(0, 2)?;

    dbg!(test4.del_val(0, 2)?);
    dbg!(test4.del_val(0, 2)?);

    println!(&quot;\\n-- loop test4 rev&quot;);
    for (k, v) in test4.rev() {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    for i in test4.dup(16) {
      println!(&quot;dup(16) {:?}&quot;, i);
    }

    // \u0421\u0434\u0435\u043B\u043A\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0430 \u0432 \u043A\u043E\u043D\u0446\u0435 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
Test2
  key Str
  val Str
Test3
  key i32
  val u64
Test4
  key u64
  val u16
  flag DUPSORT
use anyhow::Result;
use mdbx::prelude::*;

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
});

mdbx! {
  MDBX
  Test0
  Test1
    key u16
    val u64
    flag DUPSORT
  Test2
    key u32
    val u64
}

macro_rules! range_rev {
  ($var:ident, $range:expr) =&gt; {
    println!(&quot;\\n# {}.rev_range({:?})&quot;, stringify!($var), $range);
    for i in $var.range_rev($range) {
      println!(&quot;{:?}&quot;, i);
    }
  };
}

macro_rules! range {
  ($var:ident, $range:expr) =&gt; {
    println!(&quot;\\n# {}.range({:?})&quot;, stringify!($var), $range);
    for i in $var.range($range) {
      println!(&quot;{:?}&quot;, i);
    }
  };
}

fn main() -&gt; Result&lt;()&gt; {
  {
    println!(&quot;\\n&gt; Test0&quot;);
    let tx = &amp;MDBX.w()?;
    let test0 = tx | Test0;
    test0.set([0], [0, 1])?;
    test0.set([1], [1, 2])?;
    test0.set([2], [2, 3])?;
    test0.set([1, 1], [1, 3])?;
    test0.set([1, 2], [1, 3])?;
    test0.set([3], [])?;

    range!(test0, [1]..);
    let begin: &amp;[u8] = &amp;[1, 1];
    range!(test0, begin..=&amp;[2]);
  }

  {
    let tx = &amp;MDBX.w()?;

    let test1 = tx | Test1;
    test1.set(2, 9)?;
    test1.set(2, 4)?;
    test1.set(9, 7)?;
    test1.set(3, 0)?;
    test1.set(3, 8)?;
    test1.set(5, 3)?;
    test1.set(5, 8)?;
    test1.set(9, 1)?;
    println!(&quot;-- all&quot;);
    for i in test1 {
      println!(&quot;{:?}&quot;, i);
    }
    range!(test1, 1..3);
    range!(test1, 5..2);
    range!(test1, 1..=3);
    range!(test1, ..3);
    range!(test1, 3..);
    range_rev!(test1, ..1);
    range_rev!(test1, ..=1);
  }

  {
    println!(&quot;\\n&gt; Test2&quot;);
    let tx = &amp;MDBX.w()?;
    let test2 = tx | Test2;
    test2.set(2, 9)?;
    test2.set(1, 2)?;
    test2.set(2, 4)?;
    test2.set(1, 5)?;
    test2.set(9, 7)?;
    test2.set(9, 1)?;
    test2.set(0, 0)?;

    range!(test2, 1..3);
    range!(test2, 1..=3);
    range!(test2, ..3);
    range!(test2, 2..);
    range_rev!(test2, ..1);
    range_rev!(test2, 2..);
    range_rev!(test2, ..=1);
  }

  Ok(())
}
</code></pre></div><h4 id="\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435-\u0432\u044B\u0432\u043E\u0434-2" tabindex="-1"><a class="header-anchor" href="#\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435-\u0432\u044B\u0432\u043E\u0434-2" aria-hidden="true">#</a> \u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0432\u044B\u0432\u043E\u0434</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/range.mdb

&gt; Test0

# test0.range([1]..)
(Bin([1]), Bin([1, 2]))
(Bin([1, 1]), Bin([1, 3]))
(Bin([1, 2]), Bin([1, 3]))
(Bin([2]), Bin([2, 3]))
(Bin([3]), Bin([]))

# test0.range([1, 1]..=[2])
(Bin([1, 1]), Bin([1, 3]))
(Bin([1, 2]), Bin([1, 3]))
(Bin([2]), Bin([2, 3]))
-- all
(2, 4)
(2, 9)
(3, 0)
(3, 8)
(5, 3)
(5, 8)
(9, 1)
(9, 2)
(9, 7)

# test1.range(1..3)
(2, 4)
(2, 9)

# test1.range(5..2)
(5, 8)
(5, 3)
(3, 8)
(3, 0)

# test1.range(1..=3)
(2, 4)
(2, 9)
(3, 0)
(3, 8)

# test1.range(..3)
(2, 4)
(2, 9)

# test1.range(3..)
(3, 0)
(3, 8)
(5, 3)
(5, 8)
(9, 1)
(9, 2)
(9, 7)

# test1.rev_range(..1)
(9, 7)
(9, 2)
(9, 1)
(5, 8)
(5, 3)
(3, 8)
(3, 0)
(2, 9)
(2, 4)

# test1.rev_range(..=1)
(9, 7)
(9, 2)
(9, 1)
(5, 8)
(5, 3)
(3, 8)
(3, 0)
(2, 9)
(2, 4)

&gt; Test2

# test2.range(1..3)
(1, 5)
(2, 4)

# test2.range(1..=3)
(1, 5)
(2, 4)

# test2.range(..3)
(0, 0)
(1, 5)
(2, 4)

# test2.range(2..)
(2, 4)
(9, 1)

# test2.rev_range(..1)
(9, 1)
(2, 4)

# test2.rev_range(2..)
(2, 4)
(1, 5)
(0, 0)

# test2.rev_range(..=1)
(9, 1)
(2, 4)
(1, 5)
</code></pre></div><h4 id="range-begin-end-\u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B-\u0438\u0442\u0435\u0440\u0430\u0446\u0438\u044F" tabindex="-1"><a class="header-anchor" href="#range-begin-end-\u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B-\u0438\u0442\u0435\u0440\u0430\u0446\u0438\u044F" aria-hidden="true">#</a> <code>.range(begin..end)</code> \u0418\u043D\u0442\u0435\u0440\u0432\u0430\u043B \u0418\u0442\u0435\u0440\u0430\u0446\u0438\u044F</h4><p>\u0414\u043B\u044F \u0447\u0438\u0441\u0435\u043B \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B - \u044D\u0442\u043E \u0447\u0438\u0441\u043B\u043E\u0432\u043E\u0439 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B.</p><p>\u0414\u043B\u044F \u0434\u0432\u043E\u0438\u0447\u043D\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0442\u0430\u043A\u043E\u0439 \u0436\u0435 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440</p><div class="language-text ext-text"><pre class="language-text"><code>let begin : &amp;[u8] = &amp;[1,1];
for (k,v) in test0.range(begin..=&amp;[2]) {}
</code></pre></div><p>\u0415\u0441\u043B\u0438 <code>begin</code> \u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C <code>end</code>, \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0441\u044F \u0432 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435.</p><p>\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, <code>test1.range(5..2)</code> \u0432\u044B\u0432\u0435\u0434\u0435\u0442 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(
  MDBX,
  {
    let mut db_path = std::env::current_exe().unwrap();
    db_path.set_extension(&quot;mdb&quot;);
    println!(&quot;mdbx file path {}&quot;, db_path.display());
    db_path.into()
  },
  r,
  w
);

mdbx! {
  MDBX // \u0418\u043C\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 Env
  Test // \u0422\u0435\u0441\u0442 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0412\u044B\u0432\u0435\u0441\u0442\u0438 \u043D\u043E\u043C\u0435\u0440 \u0432\u0435\u0440\u0441\u0438\u0438 libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u041C\u043D\u043E\u0433\u043E\u043F\u043E\u0442\u043E\u0447\u043D\u043E\u0435 \u0447\u0442\u0435\u043D\u0438\u0435 \u0438 \u0437\u0430\u043F\u0438\u0441\u044C
  let t = std::thread::spawn(|| {
    let tx = w!();
    let test = tx | Test;
    test.set([1, 2], [6])?;
    println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

    match test.get([1, 2])? {
      Some(val) =&gt; {
        let t: &amp;[u8] = &amp;val;
        println!(&quot;{:?}&quot;, t);
      }
      None =&gt; unreachable!(),
    }
    Ok(())
  });

  t.join().unwrap()?;

  Ok(())
}
  #[derive(Clone, Debug)]
  pub struct Config {
    path: PathBuf,
    mode: ffi::mdbx_mode_t,
    flag: flag::ENV,
    sync_period: u64,
    sync_bytes: u64,
    max_db: u64,
    pagesize: isize,
  }
  
  lazy_static! {
    pub static ref ENV_CONFIG_DEFAULT: Config = Config {
      path:PathBuf::new(),
      mode: 0o600,
      //https://github.com/erthink/libmdbx/issues/248
      sync_period : 65536, // \u0417\u0430 1/65536 \u0441\u0435\u043A\u0443\u043D\u0434\u044B
      sync_bytes : 65536,
      max_db : 256,
      flag : (
          flag::ENV::MDBX_EXCLUSIVE
        | flag::ENV::MDBX_LIFORECLAIM
        | flag::ENV::MDBX_COALESCE
        | flag::ENV::MDBX_NOMEMINIT
        | flag::ENV::MDBX_NOSUBDIR
        | flag::ENV::MDBX_SAFE_NOSYNC
        // | flag::ENV::MDBX_SYNC_DURABLE
      ),
      pagesize:-1
    };
  }
mdbx! {
 MDBX // \u0418\u043C\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 Env
 Test // \u0422\u0435\u0441\u0442 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445
}
let tx = w!();
let test = tx | Test;
test.set([1, 2], [6])?;
println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

match test.get([1, 2])? {
 Some(val) =&gt; {
  let t:&amp;[u8] = &amp;val;
  println!(&quot;{:?}&quot;,t);
 },
 None =&gt; unreachable!()
}
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
});

mdbx! {
  MDBX // \u0418\u043C\u0435\u043D\u0430 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 ENV
  Test1
  Test2
    key Str
    val Str
  Test3
    key i32
    val u64
  Test4
    key u64
    val u16
    flag DUPSORT
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0411\u044B\u0441\u0442\u0440\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C
  w!(Test1.set [2, 3],[4, 5]);

  // \u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u0447\u0442\u0435\u043D\u0438\u0435
  match r!(Test1.get [2, 3]) {
    Some(r) =&gt; {
      println!(
        &quot;\\nu16::from_le_bytes({:?}) = {}&quot;,
        r,
        u16::from_le_bytes((*r).try_into()?)
      );
    }
    None =&gt; unreachable!(),
  }

  // \u041C\u043D\u043E\u0433\u043E\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u043D\u0430\u0434 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u043C\u0438 \u0431\u0430\u0437\u0430\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u043E\u0434\u043D\u043E\u0439 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438
  {
    let tx = w!();
    let test1 = tx | Test1;

    test1.set(&amp;[9], &amp;[10, 12])?;
    test1.set([8, 1], [9])?;
    test1.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test1.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;

    println!(&quot;\\n-- loop test1&quot;);
    for (k, v) in test1 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    dbg!(test1.del_val([8, 1], [3])?);
    dbg!(test1.get([8, 1])?.unwrap());
    dbg!(test1.del_val([8, 1], [9])?);
    dbg!(test1.get([8, 1])?);

    dbg!(test1.del([9])?);
    dbg!(test1.get([9])?);
    dbg!(test1.del([9])?);

    let test2 = tx | Test2;
    test2.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test2.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;
    println!(&quot;\\n-- loop test2&quot;);
    for (k, v) in test2 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    let test3 = tx | Test3;

    test3.set(13, 32)?;
    test3.set(16, 32)?;
    test3.set(-15, 6)?;
    test3.set(-10, 6)?;
    test3.set(-12, 6)?;
    test3.set(0, 6)?;
    test3.set(10, 5)?;

    println!(&quot;\\n-- loop test3&quot;);
    for (k, v) in test3 {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    let test4 = tx | Test4;
    test4.set(10, 5)?;
    test4.set(10, 0)?;
    test4.set(13, 32)?;
    test4.set(16, 2)?;
    test4.set(16, 1)?;
    test4.set(16, 3)?;
    test4.set(0, 6)?;
    test4.set(10, 5)?;
    test4.set(0, 2)?;

    dbg!(test4.del_val(0, 2)?);
    dbg!(test4.del_val(0, 2)?);

    println!(&quot;\\n-- loop test4 rev&quot;);
    for (k, v) in test4.rev() {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    for i in test4.dup(16) {
      println!(&quot;dup(16) {:?}&quot;, i);
    }

    // \u0421\u0434\u0435\u043B\u043A\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0430 \u0432 \u043A\u043E\u043D\u0446\u0435 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
Test2
  key Str
  val Str
Test3
  key i32
  val u64
Test4
  key u64
  val u16
  flag DUPSORT
use anyhow::Result;
use mdbx::prelude::*;

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
});

mdbx! {
  MDBX
  Test0
  Test1
    key u16
    val u64
    flag DUPSORT
  Test2
    key u32
    val u64
}

macro_rules! range_rev {
  ($var:ident, $range:expr) =&gt; {
    println!(&quot;\\n# {}.rev_range({:?})&quot;, stringify!($var), $range);
    for i in $var.range_rev($range) {
      println!(&quot;{:?}&quot;, i);
    }
  };
}

macro_rules! range {
  ($var:ident, $range:expr) =&gt; {
    println!(&quot;\\n# {}.range({:?})&quot;, stringify!($var), $range);
    for i in $var.range($range) {
      println!(&quot;{:?}&quot;, i);
    }
  };
}

fn main() -&gt; Result&lt;()&gt; {
  {
    println!(&quot;\\n&gt; Test0&quot;);
    let tx = &amp;MDBX.w()?;
    let test0 = tx | Test0;
    test0.set([0], [0, 1])?;
    test0.set([1], [1, 2])?;
    test0.set([2], [2, 3])?;
    test0.set([1, 1], [1, 3])?;
    test0.set([1, 2], [1, 3])?;
    test0.set([3], [])?;

    range!(test0, [1]..);
    let begin: &amp;[u8] = &amp;[1, 1];
    range!(test0, begin..=&amp;[2]);
  }

  {
    let tx = &amp;MDBX.w()?;

    let test1 = tx | Test1;
    test1.set(2, 9)?;
    test1.set(2, 4)?;
    test1.set(9, 7)?;
    test1.set(3, 0)?;
    test1.set(3, 8)?;
    test1.set(5, 3)?;
    test1.set(5, 8)?;
    test1.set(9, 1)?;
    println!(&quot;-- all&quot;);
    for i in test1 {
      println!(&quot;{:?}&quot;, i);
    }
    range!(test1, 1..3);
    range!(test1, 5..2);
    range!(test1, 1..=3);
    range!(test1, ..3);
    range!(test1, 3..);
    range_rev!(test1, ..1);
    range_rev!(test1, ..=1);
  }

  {
    println!(&quot;\\n&gt; Test2&quot;);
    let tx = &amp;MDBX.w()?;
    let test2 = tx | Test2;
    test2.set(2, 9)?;
    test2.set(1, 2)?;
    test2.set(2, 4)?;
    test2.set(1, 5)?;
    test2.set(9, 7)?;
    test2.set(9, 1)?;
    test2.set(0, 0)?;

    range!(test2, 1..3);
    range!(test2, 1..=3);
    range!(test2, ..3);
    range!(test2, 2..);
    range_rev!(test2, ..1);
    range_rev!(test2, 2..);
    range_rev!(test2, ..=1);
  }

  Ok(())
}
(5, 8)
(5, 3)
(3, 8)
(3, 0)
</code></pre></div><p>\u0418\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044C\u043D\u0430\u044F \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u044F \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F <a href="https://doc.rust-lang.org/std/ops/struct.RangeFull.html" target="_blank" rel="noopener noreferrer"><code>RangeFull</code></a> \u0442.\u0435. \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 <code>..</code>\u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F, \u0432\u043C\u0435\u0441\u0442\u043E \u043D\u0435\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0432\u044B\u0448\u0435\u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 <a href="#%E9%81%8D%E5%8E%86">\u043E\u0431\u0445\u043E\u0434</a>.</p><h4 id="rev-range-\u0438\u043D\u0432\u0435\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435-\u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044B" tabindex="-1"><a class="header-anchor" href="#rev-range-\u0438\u043D\u0432\u0435\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435-\u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044B" aria-hidden="true">#</a> <code>.rev_range</code> \u0418\u043D\u0432\u0435\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044B</h4><p>\u0415\u0441\u043B\u0438 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0438\u043D\u0432\u0435\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043C\u0435\u043D\u044C\u0448\u0435 \u0438\u043B\u0438 \u0440\u0430\u0432\u0435\u043D \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044E, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435</p><div class="language-text ext-text"><pre class="language-text"><code>test2.rev_range(2..)
</code></pre></div><p>\u041F\u043E\u043C\u0435\u0441\u0442\u0438\u0442\u0435 \u0432\u044B\u0445\u043E\u0434</p><div class="language-text ext-text"><pre class="language-text"><code>(2, 4)
(1, 5)
(0, 0)
</code></pre></div><p>\u041E\u0434\u0438\u043D \u0438\u0437 <code>begin</code> \u0438\u043B\u0438 <code>end</code> \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u0434\u043B\u044F \u0438\u043D\u0432\u0435\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u0430; \u043F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E \u0435\u0441\u043B\u0438 \u043E\u0431\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u044B, \u0432\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C <code>range(end..begin)</code> \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F \u0442\u043E\u0433\u043E \u0436\u0435 \u044D\u0444\u0444\u0435\u043A\u0442\u0430.</p><h3 id="\u043D\u0430\u0441\u0442\u0440\u043E\u0438\u043A\u0430-\u0442\u0438\u043F\u043E\u0432-\u0434\u0430\u043D\u043D\u044B\u0445" tabindex="-1"><a class="header-anchor" href="#\u043D\u0430\u0441\u0442\u0440\u043E\u0438\u043A\u0430-\u0442\u0438\u043F\u043E\u0432-\u0434\u0430\u043D\u043D\u044B\u0445" aria-hidden="true">#</a> \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0442\u0438\u043F\u043E\u0432 \u0434\u0430\u043D\u043D\u044B\u0445</h3><p>\u041A\u043E\u0434 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u043D\u0430 <a href="https://github.com/rmw-lib/mdbx-example/blob/master/01/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/01</a></p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(
  MDBX,
  {
    let mut db_path = std::env::current_exe().unwrap();
    db_path.set_extension(&quot;mdb&quot;);
    println!(&quot;mdbx file path {}&quot;, db_path.display());
    db_path.into()
  },
  r,
  w
);

mdbx! {
  MDBX // \u0418\u043C\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 Env
  Test // \u0422\u0435\u0441\u0442 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0412\u044B\u0432\u0435\u0441\u0442\u0438 \u043D\u043E\u043C\u0435\u0440 \u0432\u0435\u0440\u0441\u0438\u0438 libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u041C\u043D\u043E\u0433\u043E\u043F\u043E\u0442\u043E\u0447\u043D\u043E\u0435 \u0447\u0442\u0435\u043D\u0438\u0435 \u0438 \u0437\u0430\u043F\u0438\u0441\u044C
  let t = std::thread::spawn(|| {
    let tx = w!();
    let test = tx | Test;
    test.set([1, 2], [6])?;
    println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

    match test.get([1, 2])? {
      Some(val) =&gt; {
        let t: &amp;[u8] = &amp;val;
        println!(&quot;{:?}&quot;, t);
      }
      None =&gt; unreachable!(),
    }
    Ok(())
  });

  t.join().unwrap()?;

  Ok(())
}
  #[derive(Clone, Debug)]
  pub struct Config {
    path: PathBuf,
    mode: ffi::mdbx_mode_t,
    flag: flag::ENV,
    sync_period: u64,
    sync_bytes: u64,
    max_db: u64,
    pagesize: isize,
  }
  
  lazy_static! {
    pub static ref ENV_CONFIG_DEFAULT: Config = Config {
      path:PathBuf::new(),
      mode: 0o600,
      //https://github.com/erthink/libmdbx/issues/248
      sync_period : 65536, // \u0417\u0430 1/65536 \u0441\u0435\u043A\u0443\u043D\u0434\u044B
      sync_bytes : 65536,
      max_db : 256,
      flag : (
          flag::ENV::MDBX_EXCLUSIVE
        | flag::ENV::MDBX_LIFORECLAIM
        | flag::ENV::MDBX_COALESCE
        | flag::ENV::MDBX_NOMEMINIT
        | flag::ENV::MDBX_NOSUBDIR
        | flag::ENV::MDBX_SAFE_NOSYNC
        // | flag::ENV::MDBX_SYNC_DURABLE
      ),
      pagesize:-1
    };
  }
mdbx! {
 MDBX // \u0418\u043C\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 Env
 Test // \u0422\u0435\u0441\u0442 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445
}
let tx = w!();
let test = tx | Test;
test.set([1, 2], [6])?;
println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

match test.get([1, 2])? {
 Some(val) =&gt; {
  let t:&amp;[u8] = &amp;val;
  println!(&quot;{:?}&quot;,t);
 },
 None =&gt; unreachable!()
}
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
});

mdbx! {
  MDBX // \u0418\u043C\u0435\u043D\u0430 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 ENV
  Test1
  Test2
    key Str
    val Str
  Test3
    key i32
    val u64
  Test4
    key u64
    val u16
    flag DUPSORT
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0411\u044B\u0441\u0442\u0440\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C
  w!(Test1.set [2, 3],[4, 5]);

  // \u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u0447\u0442\u0435\u043D\u0438\u0435
  match r!(Test1.get [2, 3]) {
    Some(r) =&gt; {
      println!(
        &quot;\\nu16::from_le_bytes({:?}) = {}&quot;,
        r,
        u16::from_le_bytes((*r).try_into()?)
      );
    }
    None =&gt; unreachable!(),
  }

  // \u041C\u043D\u043E\u0433\u043E\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u043D\u0430\u0434 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u043C\u0438 \u0431\u0430\u0437\u0430\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u043E\u0434\u043D\u043E\u0439 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438
  {
    let tx = w!();
    let test1 = tx | Test1;

    test1.set(&amp;[9], &amp;[10, 12])?;
    test1.set([8, 1], [9])?;
    test1.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test1.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;

    println!(&quot;\\n-- loop test1&quot;);
    for (k, v) in test1 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    dbg!(test1.del_val([8, 1], [3])?);
    dbg!(test1.get([8, 1])?.unwrap());
    dbg!(test1.del_val([8, 1], [9])?);
    dbg!(test1.get([8, 1])?);

    dbg!(test1.del([9])?);
    dbg!(test1.get([9])?);
    dbg!(test1.del([9])?);

    let test2 = tx | Test2;
    test2.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test2.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;
    println!(&quot;\\n-- loop test2&quot;);
    for (k, v) in test2 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    let test3 = tx | Test3;

    test3.set(13, 32)?;
    test3.set(16, 32)?;
    test3.set(-15, 6)?;
    test3.set(-10, 6)?;
    test3.set(-12, 6)?;
    test3.set(0, 6)?;
    test3.set(10, 5)?;

    println!(&quot;\\n-- loop test3&quot;);
    for (k, v) in test3 {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    let test4 = tx | Test4;
    test4.set(10, 5)?;
    test4.set(10, 0)?;
    test4.set(13, 32)?;
    test4.set(16, 2)?;
    test4.set(16, 1)?;
    test4.set(16, 3)?;
    test4.set(0, 6)?;
    test4.set(10, 5)?;
    test4.set(0, 2)?;

    dbg!(test4.del_val(0, 2)?);
    dbg!(test4.del_val(0, 2)?);

    println!(&quot;\\n-- loop test4 rev&quot;);
    for (k, v) in test4.rev() {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    for i in test4.dup(16) {
      println!(&quot;dup(16) {:?}&quot;, i);
    }

    // \u0421\u0434\u0435\u043B\u043A\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0430 \u0432 \u043A\u043E\u043D\u0446\u0435 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
Test2
  key Str
  val Str
Test3
  key i32
  val u64
Test4
  key u64
  val u16
  flag DUPSORT
use anyhow::Result;
use mdbx::prelude::*;

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
});

mdbx! {
  MDBX
  Test0
  Test1
    key u16
    val u64
    flag DUPSORT
  Test2
    key u32
    val u64
}

macro_rules! range_rev {
  ($var:ident, $range:expr) =&gt; {
    println!(&quot;\\n# {}.rev_range({:?})&quot;, stringify!($var), $range);
    for i in $var.range_rev($range) {
      println!(&quot;{:?}&quot;, i);
    }
  };
}

macro_rules! range {
  ($var:ident, $range:expr) =&gt; {
    println!(&quot;\\n# {}.range({:?})&quot;, stringify!($var), $range);
    for i in $var.range($range) {
      println!(&quot;{:?}&quot;, i);
    }
  };
}

fn main() -&gt; Result&lt;()&gt; {
  {
    println!(&quot;\\n&gt; Test0&quot;);
    let tx = &amp;MDBX.w()?;
    let test0 = tx | Test0;
    test0.set([0], [0, 1])?;
    test0.set([1], [1, 2])?;
    test0.set([2], [2, 3])?;
    test0.set([1, 1], [1, 3])?;
    test0.set([1, 2], [1, 3])?;
    test0.set([3], [])?;

    range!(test0, [1]..);
    let begin: &amp;[u8] = &amp;[1, 1];
    range!(test0, begin..=&amp;[2]);
  }

  {
    let tx = &amp;MDBX.w()?;

    let test1 = tx | Test1;
    test1.set(2, 9)?;
    test1.set(2, 4)?;
    test1.set(9, 7)?;
    test1.set(3, 0)?;
    test1.set(3, 8)?;
    test1.set(5, 3)?;
    test1.set(5, 8)?;
    test1.set(9, 1)?;
    println!(&quot;-- all&quot;);
    for i in test1 {
      println!(&quot;{:?}&quot;, i);
    }
    range!(test1, 1..3);
    range!(test1, 5..2);
    range!(test1, 1..=3);
    range!(test1, ..3);
    range!(test1, 3..);
    range_rev!(test1, ..1);
    range_rev!(test1, ..=1);
  }

  {
    println!(&quot;\\n&gt; Test2&quot;);
    let tx = &amp;MDBX.w()?;
    let test2 = tx | Test2;
    test2.set(2, 9)?;
    test2.set(1, 2)?;
    test2.set(2, 4)?;
    test2.set(1, 5)?;
    test2.set(9, 7)?;
    test2.set(9, 1)?;
    test2.set(0, 0)?;

    range!(test2, 1..3);
    range!(test2, 1..=3);
    range!(test2, ..3);
    range!(test2, 2..);
    range_rev!(test2, ..1);
    range_rev!(test2, 2..);
    range_rev!(test2, ..=1);
  }

  Ok(())
}
(5, 8)
(5, 3)
(3, 8)
(3, 0)
use anyhow::Result;
use mdbx::prelude::*;
use speedy::{Readable, Writable};

#[derive(PartialEq, Debug, Readable, Writable)]
pub struct City {
  name: String,
  lnglat: (u32, u32),
}

impl FromMdbx for City {
  fn from_mdbx(_: PtrTx, val: MDBX_val) -&gt; Self {
    Self::read_from_buffer(val_bytes!(val)).unwrap()
  }
}

impl ToAsRef&lt;City, Vec&lt;u8&gt;&gt; for City {
  fn to_as_ref(&amp;self) -&gt; Vec&lt;u8&gt; {
    self.write_to_vec().unwrap()
  }
}

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  db_path.into()
});

mdbx! {
  MDBX
  Test
    key u16
    val City
}

fn main() -&gt; Result&lt;()&gt; {
  let city = City {
    name: &quot;BeiJing&quot;.into(),
    lnglat: (11640, 3990),
  };

  let tx = w!();
  let test = tx | Test;
  test.set(1, city)?;
  println!(&quot;{:?}&quot;, test.get(1)?);

  Ok(())
}
</code></pre></div><p>\u041D\u0430 \u0432\u044B\u0445\u043E\u0434\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0441\u044F \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435</p><div class="language-text ext-text"><pre class="language-text"><code>Some(City { name: &quot;BeiJing&quot;, lnglat: (11640, 3990) })
</code></pre></div><p>\u0412 \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u0441 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u0442\u0438\u043F\u043E\u043C \u043C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C <a href="https://github.com/koute/speedy" target="_blank" rel="noopener noreferrer"><code>speedy</code></a> \u0434\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0441\u0435\u0440\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 <a href="https://github.com/djkoloski/rust_serialization_benchmark" target="_blank" rel="noopener noreferrer">( <code>speedy</code> performance review</a> ).</p><p>\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0442\u0438\u043F\u0430 <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.FromMdbx.html" target="_blank" rel="noopener noreferrer"><code>FromMdbx</code></a> \u0438 <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.ToAsRef.html" target="_blank" rel="noopener noreferrer"><code>ToAsRef</code></a> \u043C\u043E\u0436\u043D\u043E \u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 <code>mdbx</code>.</p><p>\u0415\u0441\u043B\u0438 \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u0443\u044E \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0443 \u0441\u0435\u0440\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438, \u0432\u044B \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C <a href="https://blog.logrocket.com/macros-in-rust-a-tutorial-with-examples/" target="_blank" rel="noopener noreferrer">\u043C\u0430\u043A\u0440\u043E\u0441\u044B</a> \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043E\u0432 \u0434\u043B\u044F \u0443\u043F\u0440\u043E\u0449\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430.</p><h4 id="\u0443\u043F\u0440\u043E\u0449\u0435\u043D\u0438\u0435-\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445-\u0442\u0438\u043F\u043E\u0432-\u0441-\u043F\u043E\u043C\u043E\u0449\u044C\u044E-\u043C\u0430\u043A\u0440\u043E\u0441\u043E\u0432-\u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043E\u0432" tabindex="-1"><a class="header-anchor" href="#\u0443\u043F\u0440\u043E\u0449\u0435\u043D\u0438\u0435-\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445-\u0442\u0438\u043F\u043E\u0432-\u0441-\u043F\u043E\u043C\u043E\u0449\u044C\u044E-\u043C\u0430\u043A\u0440\u043E\u0441\u043E\u0432-\u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043E\u0432" aria-hidden="true">#</a> \u0423\u043F\u0440\u043E\u0449\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u0442\u0438\u043F\u043E\u0432 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043C\u0430\u043A\u0440\u043E\u0441\u043E\u0432 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043E\u0432</h4><p>\u0420\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u043C\u0430\u043A\u0440\u043E\u0441 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 \u0442\u0430\u043A \u0436\u0435 \u043F\u0440\u043E\u0441\u0442\u043E, \u043A\u0430\u043A \u0438 <a href="https://crates.io/crates/mdbx_speedy" target="_blank" rel="noopener noreferrer"><code>mdbx_speedy</code></a> \u041C\u0430\u043A\u0440\u043E\u043A\u043E\u0434 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 \u0432\u044B\u0433\u043B\u044F\u0434\u0438\u0442 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(
  MDBX,
  {
    let mut db_path = std::env::current_exe().unwrap();
    db_path.set_extension(&quot;mdb&quot;);
    println!(&quot;mdbx file path {}&quot;, db_path.display());
    db_path.into()
  },
  r,
  w
);

mdbx! {
  MDBX // \u0418\u043C\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 Env
  Test // \u0422\u0435\u0441\u0442 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0412\u044B\u0432\u0435\u0441\u0442\u0438 \u043D\u043E\u043C\u0435\u0440 \u0432\u0435\u0440\u0441\u0438\u0438 libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u041C\u043D\u043E\u0433\u043E\u043F\u043E\u0442\u043E\u0447\u043D\u043E\u0435 \u0447\u0442\u0435\u043D\u0438\u0435 \u0438 \u0437\u0430\u043F\u0438\u0441\u044C
  let t = std::thread::spawn(|| {
    let tx = w!();
    let test = tx | Test;
    test.set([1, 2], [6])?;
    println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

    match test.get([1, 2])? {
      Some(val) =&gt; {
        let t: &amp;[u8] = &amp;val;
        println!(&quot;{:?}&quot;, t);
      }
      None =&gt; unreachable!(),
    }
    Ok(())
  });

  t.join().unwrap()?;

  Ok(())
}
  #[derive(Clone, Debug)]
  pub struct Config {
    path: PathBuf,
    mode: ffi::mdbx_mode_t,
    flag: flag::ENV,
    sync_period: u64,
    sync_bytes: u64,
    max_db: u64,
    pagesize: isize,
  }
  
  lazy_static! {
    pub static ref ENV_CONFIG_DEFAULT: Config = Config {
      path:PathBuf::new(),
      mode: 0o600,
      //https://github.com/erthink/libmdbx/issues/248
      sync_period : 65536, // \u0417\u0430 1/65536 \u0441\u0435\u043A\u0443\u043D\u0434\u044B
      sync_bytes : 65536,
      max_db : 256,
      flag : (
          flag::ENV::MDBX_EXCLUSIVE
        | flag::ENV::MDBX_LIFORECLAIM
        | flag::ENV::MDBX_COALESCE
        | flag::ENV::MDBX_NOMEMINIT
        | flag::ENV::MDBX_NOSUBDIR
        | flag::ENV::MDBX_SAFE_NOSYNC
        // | flag::ENV::MDBX_SYNC_DURABLE
      ),
      pagesize:-1
    };
  }
mdbx! {
 MDBX // \u0418\u043C\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 Env
 Test // \u0422\u0435\u0441\u0442 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445
}
let tx = w!();
let test = tx | Test;
test.set([1, 2], [6])?;
println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

match test.get([1, 2])? {
 Some(val) =&gt; {
  let t:&amp;[u8] = &amp;val;
  println!(&quot;{:?}&quot;,t);
 },
 None =&gt; unreachable!()
}
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
});

mdbx! {
  MDBX // \u0418\u043C\u0435\u043D\u0430 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 ENV
  Test1
  Test2
    key Str
    val Str
  Test3
    key i32
    val u64
  Test4
    key u64
    val u16
    flag DUPSORT
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0411\u044B\u0441\u0442\u0440\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C
  w!(Test1.set [2, 3],[4, 5]);

  // \u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u0447\u0442\u0435\u043D\u0438\u0435
  match r!(Test1.get [2, 3]) {
    Some(r) =&gt; {
      println!(
        &quot;\\nu16::from_le_bytes({:?}) = {}&quot;,
        r,
        u16::from_le_bytes((*r).try_into()?)
      );
    }
    None =&gt; unreachable!(),
  }

  // \u041C\u043D\u043E\u0433\u043E\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u043D\u0430\u0434 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u043C\u0438 \u0431\u0430\u0437\u0430\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u043E\u0434\u043D\u043E\u0439 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438
  {
    let tx = w!();
    let test1 = tx | Test1;

    test1.set(&amp;[9], &amp;[10, 12])?;
    test1.set([8, 1], [9])?;
    test1.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test1.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;

    println!(&quot;\\n-- loop test1&quot;);
    for (k, v) in test1 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    dbg!(test1.del_val([8, 1], [3])?);
    dbg!(test1.get([8, 1])?.unwrap());
    dbg!(test1.del_val([8, 1], [9])?);
    dbg!(test1.get([8, 1])?);

    dbg!(test1.del([9])?);
    dbg!(test1.get([9])?);
    dbg!(test1.del([9])?);

    let test2 = tx | Test2;
    test2.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test2.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;
    println!(&quot;\\n-- loop test2&quot;);
    for (k, v) in test2 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    let test3 = tx | Test3;

    test3.set(13, 32)?;
    test3.set(16, 32)?;
    test3.set(-15, 6)?;
    test3.set(-10, 6)?;
    test3.set(-12, 6)?;
    test3.set(0, 6)?;
    test3.set(10, 5)?;

    println!(&quot;\\n-- loop test3&quot;);
    for (k, v) in test3 {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    let test4 = tx | Test4;
    test4.set(10, 5)?;
    test4.set(10, 0)?;
    test4.set(13, 32)?;
    test4.set(16, 2)?;
    test4.set(16, 1)?;
    test4.set(16, 3)?;
    test4.set(0, 6)?;
    test4.set(10, 5)?;
    test4.set(0, 2)?;

    dbg!(test4.del_val(0, 2)?);
    dbg!(test4.del_val(0, 2)?);

    println!(&quot;\\n-- loop test4 rev&quot;);
    for (k, v) in test4.rev() {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    for i in test4.dup(16) {
      println!(&quot;dup(16) {:?}&quot;, i);
    }

    // \u0421\u0434\u0435\u043B\u043A\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0430 \u0432 \u043A\u043E\u043D\u0446\u0435 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
Test2
  key Str
  val Str
Test3
  key i32
  val u64
Test4
  key u64
  val u16
  flag DUPSORT
use anyhow::Result;
use mdbx::prelude::*;

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
});

mdbx! {
  MDBX
  Test0
  Test1
    key u16
    val u64
    flag DUPSORT
  Test2
    key u32
    val u64
}

macro_rules! range_rev {
  ($var:ident, $range:expr) =&gt; {
    println!(&quot;\\n# {}.rev_range({:?})&quot;, stringify!($var), $range);
    for i in $var.range_rev($range) {
      println!(&quot;{:?}&quot;, i);
    }
  };
}

macro_rules! range {
  ($var:ident, $range:expr) =&gt; {
    println!(&quot;\\n# {}.range({:?})&quot;, stringify!($var), $range);
    for i in $var.range($range) {
      println!(&quot;{:?}&quot;, i);
    }
  };
}

fn main() -&gt; Result&lt;()&gt; {
  {
    println!(&quot;\\n&gt; Test0&quot;);
    let tx = &amp;MDBX.w()?;
    let test0 = tx | Test0;
    test0.set([0], [0, 1])?;
    test0.set([1], [1, 2])?;
    test0.set([2], [2, 3])?;
    test0.set([1, 1], [1, 3])?;
    test0.set([1, 2], [1, 3])?;
    test0.set([3], [])?;

    range!(test0, [1]..);
    let begin: &amp;[u8] = &amp;[1, 1];
    range!(test0, begin..=&amp;[2]);
  }

  {
    let tx = &amp;MDBX.w()?;

    let test1 = tx | Test1;
    test1.set(2, 9)?;
    test1.set(2, 4)?;
    test1.set(9, 7)?;
    test1.set(3, 0)?;
    test1.set(3, 8)?;
    test1.set(5, 3)?;
    test1.set(5, 8)?;
    test1.set(9, 1)?;
    println!(&quot;-- all&quot;);
    for i in test1 {
      println!(&quot;{:?}&quot;, i);
    }
    range!(test1, 1..3);
    range!(test1, 5..2);
    range!(test1, 1..=3);
    range!(test1, ..3);
    range!(test1, 3..);
    range_rev!(test1, ..1);
    range_rev!(test1, ..=1);
  }

  {
    println!(&quot;\\n&gt; Test2&quot;);
    let tx = &amp;MDBX.w()?;
    let test2 = tx | Test2;
    test2.set(2, 9)?;
    test2.set(1, 2)?;
    test2.set(2, 4)?;
    test2.set(1, 5)?;
    test2.set(9, 7)?;
    test2.set(9, 1)?;
    test2.set(0, 0)?;

    range!(test2, 1..3);
    range!(test2, 1..=3);
    range!(test2, ..3);
    range!(test2, 2..);
    range_rev!(test2, ..1);
    range_rev!(test2, 2..);
    range_rev!(test2, ..=1);
  }

  Ok(())
}
(5, 8)
(5, 3)
(3, 8)
(3, 0)
use anyhow::Result;
use mdbx::prelude::*;
use speedy::{Readable, Writable};

#[derive(PartialEq, Debug, Readable, Writable)]
pub struct City {
  name: String,
  lnglat: (u32, u32),
}

impl FromMdbx for City {
  fn from_mdbx(_: PtrTx, val: MDBX_val) -&gt; Self {
    Self::read_from_buffer(val_bytes!(val)).unwrap()
  }
}

impl ToAsRef&lt;City, Vec&lt;u8&gt;&gt; for City {
  fn to_as_ref(&amp;self) -&gt; Vec&lt;u8&gt; {
    self.write_to_vec().unwrap()
  }
}

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  db_path.into()
});

mdbx! {
  MDBX
  Test
    key u16
    val City
}

fn main() -&gt; Result&lt;()&gt; {
  let city = City {
    name: &quot;BeiJing&quot;.into(),
    lnglat: (11640, 3990),
  };

  let tx = w!();
  let test = tx | Test;
  test.set(1, city)?;
  println!(&quot;{:?}&quot;, test.get(1)?);

  Ok(())
}
extern crate proc_macro;
extern crate syn;
#[macro_use]
extern crate quote;

use proc_macro::TokenStream;

#[proc_macro_derive(MdbxSpeedy)]
pub fn mdbx_speedy(ts: TokenStream) -&gt; TokenStream {
  let ast: syn::DeriveInput = syn::parse(ts).unwrap();
  let name = &amp;ast.ident;
  quote! {
    impl mdbx::prelude::FromMdbx for #name {
      fn from_mdbx(_: mdbx::prelude::PtrTx, val: mdbx::prelude::MDBX_val) -&gt; Self {
        Self::read_from_buffer(val_bytes!(val)).unwrap()
      }
    }

    impl mdbx::prelude::ToAsRef&lt;#name, Vec&lt;u8&gt;&gt; for #name {
      fn to_as_ref(&amp;self) -&gt; Vec&lt;u8&gt; {
        self.write_to_vec().unwrap()
      }
    }

  }
  .into()
}
</code></pre></div><p>\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0441 <code>cargo add mdbx-speedy</code>\u0432 \u0441\u0432\u043E\u0435\u043C \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u0435, \u0438 \u0442\u043E\u0433\u0434\u0430 \u0432\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u0431\u044B\u0441\u0442\u0440\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0442\u0438\u043F (\u0441\u043C. \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043A\u043E\u0434 \u043D\u0430 <a href="https://github.com/rmw-lib/mdbx-example/blob/master/02/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/02</a> ).</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(
  MDBX,
  {
    let mut db_path = std::env::current_exe().unwrap();
    db_path.set_extension(&quot;mdb&quot;);
    println!(&quot;mdbx file path {}&quot;, db_path.display());
    db_path.into()
  },
  r,
  w
);

mdbx! {
  MDBX // \u0418\u043C\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 Env
  Test // \u0422\u0435\u0441\u0442 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0412\u044B\u0432\u0435\u0441\u0442\u0438 \u043D\u043E\u043C\u0435\u0440 \u0432\u0435\u0440\u0441\u0438\u0438 libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u041C\u043D\u043E\u0433\u043E\u043F\u043E\u0442\u043E\u0447\u043D\u043E\u0435 \u0447\u0442\u0435\u043D\u0438\u0435 \u0438 \u0437\u0430\u043F\u0438\u0441\u044C
  let t = std::thread::spawn(|| {
    let tx = w!();
    let test = tx | Test;
    test.set([1, 2], [6])?;
    println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

    match test.get([1, 2])? {
      Some(val) =&gt; {
        let t: &amp;[u8] = &amp;val;
        println!(&quot;{:?}&quot;, t);
      }
      None =&gt; unreachable!(),
    }
    Ok(())
  });

  t.join().unwrap()?;

  Ok(())
}
  #[derive(Clone, Debug)]
  pub struct Config {
    path: PathBuf,
    mode: ffi::mdbx_mode_t,
    flag: flag::ENV,
    sync_period: u64,
    sync_bytes: u64,
    max_db: u64,
    pagesize: isize,
  }
  
  lazy_static! {
    pub static ref ENV_CONFIG_DEFAULT: Config = Config {
      path:PathBuf::new(),
      mode: 0o600,
      //https://github.com/erthink/libmdbx/issues/248
      sync_period : 65536, // \u0417\u0430 1/65536 \u0441\u0435\u043A\u0443\u043D\u0434\u044B
      sync_bytes : 65536,
      max_db : 256,
      flag : (
          flag::ENV::MDBX_EXCLUSIVE
        | flag::ENV::MDBX_LIFORECLAIM
        | flag::ENV::MDBX_COALESCE
        | flag::ENV::MDBX_NOMEMINIT
        | flag::ENV::MDBX_NOSUBDIR
        | flag::ENV::MDBX_SAFE_NOSYNC
        // | flag::ENV::MDBX_SYNC_DURABLE
      ),
      pagesize:-1
    };
  }
mdbx! {
 MDBX // \u0418\u043C\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 Env
 Test // \u0422\u0435\u0441\u0442 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445
}
let tx = w!();
let test = tx | Test;
test.set([1, 2], [6])?;
println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

match test.get([1, 2])? {
 Some(val) =&gt; {
  let t:&amp;[u8] = &amp;val;
  println!(&quot;{:?}&quot;,t);
 },
 None =&gt; unreachable!()
}
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
});

mdbx! {
  MDBX // \u0418\u043C\u0435\u043D\u0430 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 ENV
  Test1
  Test2
    key Str
    val Str
  Test3
    key i32
    val u64
  Test4
    key u64
    val u16
    flag DUPSORT
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0411\u044B\u0441\u0442\u0440\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C
  w!(Test1.set [2, 3],[4, 5]);

  // \u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u0447\u0442\u0435\u043D\u0438\u0435
  match r!(Test1.get [2, 3]) {
    Some(r) =&gt; {
      println!(
        &quot;\\nu16::from_le_bytes({:?}) = {}&quot;,
        r,
        u16::from_le_bytes((*r).try_into()?)
      );
    }
    None =&gt; unreachable!(),
  }

  // \u041C\u043D\u043E\u0433\u043E\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u043D\u0430\u0434 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u043C\u0438 \u0431\u0430\u0437\u0430\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u043E\u0434\u043D\u043E\u0439 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438
  {
    let tx = w!();
    let test1 = tx | Test1;

    test1.set(&amp;[9], &amp;[10, 12])?;
    test1.set([8, 1], [9])?;
    test1.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test1.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;

    println!(&quot;\\n-- loop test1&quot;);
    for (k, v) in test1 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    dbg!(test1.del_val([8, 1], [3])?);
    dbg!(test1.get([8, 1])?.unwrap());
    dbg!(test1.del_val([8, 1], [9])?);
    dbg!(test1.get([8, 1])?);

    dbg!(test1.del([9])?);
    dbg!(test1.get([9])?);
    dbg!(test1.del([9])?);

    let test2 = tx | Test2;
    test2.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test2.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;
    println!(&quot;\\n-- loop test2&quot;);
    for (k, v) in test2 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    let test3 = tx | Test3;

    test3.set(13, 32)?;
    test3.set(16, 32)?;
    test3.set(-15, 6)?;
    test3.set(-10, 6)?;
    test3.set(-12, 6)?;
    test3.set(0, 6)?;
    test3.set(10, 5)?;

    println!(&quot;\\n-- loop test3&quot;);
    for (k, v) in test3 {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    let test4 = tx | Test4;
    test4.set(10, 5)?;
    test4.set(10, 0)?;
    test4.set(13, 32)?;
    test4.set(16, 2)?;
    test4.set(16, 1)?;
    test4.set(16, 3)?;
    test4.set(0, 6)?;
    test4.set(10, 5)?;
    test4.set(0, 2)?;

    dbg!(test4.del_val(0, 2)?);
    dbg!(test4.del_val(0, 2)?);

    println!(&quot;\\n-- loop test4 rev&quot;);
    for (k, v) in test4.rev() {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    for i in test4.dup(16) {
      println!(&quot;dup(16) {:?}&quot;, i);
    }

    // \u0421\u0434\u0435\u043B\u043A\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0430 \u0432 \u043A\u043E\u043D\u0446\u0435 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
Test2
  key Str
  val Str
Test3
  key i32
  val u64
Test4
  key u64
  val u16
  flag DUPSORT
use anyhow::Result;
use mdbx::prelude::*;

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
});

mdbx! {
  MDBX
  Test0
  Test1
    key u16
    val u64
    flag DUPSORT
  Test2
    key u32
    val u64
}

macro_rules! range_rev {
  ($var:ident, $range:expr) =&gt; {
    println!(&quot;\\n# {}.rev_range({:?})&quot;, stringify!($var), $range);
    for i in $var.range_rev($range) {
      println!(&quot;{:?}&quot;, i);
    }
  };
}

macro_rules! range {
  ($var:ident, $range:expr) =&gt; {
    println!(&quot;\\n# {}.range({:?})&quot;, stringify!($var), $range);
    for i in $var.range($range) {
      println!(&quot;{:?}&quot;, i);
    }
  };
}

fn main() -&gt; Result&lt;()&gt; {
  {
    println!(&quot;\\n&gt; Test0&quot;);
    let tx = &amp;MDBX.w()?;
    let test0 = tx | Test0;
    test0.set([0], [0, 1])?;
    test0.set([1], [1, 2])?;
    test0.set([2], [2, 3])?;
    test0.set([1, 1], [1, 3])?;
    test0.set([1, 2], [1, 3])?;
    test0.set([3], [])?;

    range!(test0, [1]..);
    let begin: &amp;[u8] = &amp;[1, 1];
    range!(test0, begin..=&amp;[2]);
  }

  {
    let tx = &amp;MDBX.w()?;

    let test1 = tx | Test1;
    test1.set(2, 9)?;
    test1.set(2, 4)?;
    test1.set(9, 7)?;
    test1.set(3, 0)?;
    test1.set(3, 8)?;
    test1.set(5, 3)?;
    test1.set(5, 8)?;
    test1.set(9, 1)?;
    println!(&quot;-- all&quot;);
    for i in test1 {
      println!(&quot;{:?}&quot;, i);
    }
    range!(test1, 1..3);
    range!(test1, 5..2);
    range!(test1, 1..=3);
    range!(test1, ..3);
    range!(test1, 3..);
    range_rev!(test1, ..1);
    range_rev!(test1, ..=1);
  }

  {
    println!(&quot;\\n&gt; Test2&quot;);
    let tx = &amp;MDBX.w()?;
    let test2 = tx | Test2;
    test2.set(2, 9)?;
    test2.set(1, 2)?;
    test2.set(2, 4)?;
    test2.set(1, 5)?;
    test2.set(9, 7)?;
    test2.set(9, 1)?;
    test2.set(0, 0)?;

    range!(test2, 1..3);
    range!(test2, 1..=3);
    range!(test2, ..3);
    range!(test2, 2..);
    range_rev!(test2, ..1);
    range_rev!(test2, 2..);
    range_rev!(test2, ..=1);
  }

  Ok(())
}
(5, 8)
(5, 3)
(3, 8)
(3, 0)
use anyhow::Result;
use mdbx::prelude::*;
use speedy::{Readable, Writable};

#[derive(PartialEq, Debug, Readable, Writable)]
pub struct City {
  name: String,
  lnglat: (u32, u32),
}

impl FromMdbx for City {
  fn from_mdbx(_: PtrTx, val: MDBX_val) -&gt; Self {
    Self::read_from_buffer(val_bytes!(val)).unwrap()
  }
}

impl ToAsRef&lt;City, Vec&lt;u8&gt;&gt; for City {
  fn to_as_ref(&amp;self) -&gt; Vec&lt;u8&gt; {
    self.write_to_vec().unwrap()
  }
}

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  db_path.into()
});

mdbx! {
  MDBX
  Test
    key u16
    val City
}

fn main() -&gt; Result&lt;()&gt; {
  let city = City {
    name: &quot;BeiJing&quot;.into(),
    lnglat: (11640, 3990),
  };

  let tx = w!();
  let test = tx | Test;
  test.set(1, city)?;
  println!(&quot;{:?}&quot;, test.get(1)?);

  Ok(())
}
extern crate proc_macro;
extern crate syn;
#[macro_use]
extern crate quote;

use proc_macro::TokenStream;

#[proc_macro_derive(MdbxSpeedy)]
pub fn mdbx_speedy(ts: TokenStream) -&gt; TokenStream {
  let ast: syn::DeriveInput = syn::parse(ts).unwrap();
  let name = &amp;ast.ident;
  quote! {
    impl mdbx::prelude::FromMdbx for #name {
      fn from_mdbx(_: mdbx::prelude::PtrTx, val: mdbx::prelude::MDBX_val) -&gt; Self {
        Self::read_from_buffer(val_bytes!(val)).unwrap()
      }
    }

    impl mdbx::prelude::ToAsRef&lt;#name, Vec&lt;u8&gt;&gt; for #name {
      fn to_as_ref(&amp;self) -&gt; Vec&lt;u8&gt; {
        self.write_to_vec().unwrap()
      }
    }

  }
  .into()
}
use anyhow::Result;
use mdbx::prelude::*;
use mdbx_speedy::MdbxSpeedy;
use speedy::{Readable, Writable};

#[derive(PartialEq, Debug, Readable, Writable, MdbxSpeedy)]
pub struct City {
  name: String,
  lnglat: (u32, u32),
}
</code></pre></div><p>\u041A\u043E\u043D\u0435\u0447\u043D\u043E, \u0432\u0441\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437\u0434\u0440\u0430\u0436\u0430\u0435\u0442 \u043C\u043D\u043E\u0433\u043E\u043A\u0440\u0430\u0442\u043D\u043E\u0435 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 <code>#[derive(PartialEq, Debug, Readable, Writable, MdbxSpeedy)]</code>, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C <a href="https://docs.rs/derive-alias/0.1.0/derive_alias" target="_blank" rel="noopener noreferrer"><code>derive_alias</code></a> \u0434\u043B\u044F \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u0433\u043E \u0443\u043F\u0440\u043E\u0449\u0435\u043D\u0438\u044F \u043A\u043E\u0434\u0430.</p><h2 id="\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u0435-\u043F\u043E-\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044E" tabindex="-1"><a class="header-anchor" href="#\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u0435-\u043F\u043E-\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044E" aria-hidden="true">#</a> \u041F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u0435 \u043F\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044E</h2><h3 id="\u0434\u043B\u0438\u043D\u0430-\u043A\u043B\u044E\u0447\u0430" tabindex="-1"><a class="header-anchor" href="#\u0434\u043B\u0438\u043D\u0430-\u043A\u043B\u044E\u0447\u0430" aria-hidden="true">#</a> \u0414\u043B\u0438\u043D\u0430 \u043A\u043B\u044E\u0447\u0430</h3><ul><li>\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 0, \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u2248 \xBD \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B (\u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E 4\u041A \u0441\u0442\u0440\u0430\u043D\u0438\u0446, \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u043A\u043B\u044E\u0447\u0430 2022 \u0431\u0430\u0439\u0442), \u0437\u0430\u0434\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 <code>pagesize</code> \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C \u043D\u0430 <code>65536</code>\u0438 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0440\u0430\u0432\u0435\u043D \u0441\u0442\u0435\u043F\u0435\u043D\u0438 2.</li></ul><h2 id="\u0441\u043D\u043E\u0441\u043A\u0438" tabindex="-1"><a class="header-anchor" href="#\u0441\u043D\u043E\u0441\u043A\u0438" aria-hidden="true">#</a> \u0421\u043D\u043E\u0441\u043A\u0438</h2><p>\u041E\u043D\u0438 \u043F\u0440\u0438\u0432\u043E\u0434\u044F\u0442 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430 \u0441 LMDB \u043D\u0430 MDBX.</p><blockquote><p>Erigon \u043D\u0430\u0447\u0438\u043D\u0430\u043B \u0441 \u0431\u044D\u043A\u0435\u043D\u0434\u0430 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 BoltDB, \u0437\u0430\u0442\u0435\u043C \u0434\u043E\u0431\u0430\u0432\u0438\u043B \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443 BadgerDB, \u0438, \u043D\u0430\u043A\u043E\u043D\u0435\u0446, \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043F\u0435\u0440\u0435\u0448\u0435\u043B \u043D\u0430 LMDB. \u0412 \u043A\u0430\u043A\u043E\u0439-\u0442\u043E \u043C\u043E\u043C\u0435\u043D\u0442 \u043C\u044B \u0441\u0442\u043E\u043B\u043A\u043D\u0443\u043B\u0438\u0441\u044C \u0441 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430\u043C\u0438 \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u0438, \u0432\u044B\u0437\u0432\u0430\u043D\u043D\u044B\u043C\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C LMDB, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435 \u0431\u044B\u043B\u0438 \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u044B \u0441\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044F\u043C\u0438. \u0421 \u0442\u0435\u0445 \u043F\u043E\u0440 \u043C\u044B \u0441\u043C\u043E\u0442\u0440\u0438\u043C \u043D\u0430 \u0445\u043E\u0440\u043E\u0448\u043E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u0443\u044E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u0443\u044E LMDB \u043F\u043E\u0434 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\u043C MDBX \u0438 \u043D\u0430\u0434\u0435\u0435\u043C\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0438\u0445 \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0438 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0430\u0442\u044C \u0441 \u043D\u0438\u043C\u0438 \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043C. \u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F MDBX \u0442\u0435\u043F\u0435\u0440\u044C \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430, \u0438 \u043F\u0440\u0438\u0448\u043B\u043E \u0432\u0440\u0435\u043C\u044F \u0434\u043B\u044F \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u0433\u043E \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F.</p><p>\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430 \u0441 LMDB \u043D\u0430 MDBX.</p><ol><li><p>\u0420\u043E\u0441\u0442 &quot;\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430 (\u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u0438)&quot; \u0444\u0430\u0439\u043B\u043E\u0432 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E. \u042D\u0442\u043E \u0432\u0430\u0436\u043D\u043E, \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u0432 Windows. \u0412 LMDB \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043E\u0434\u0438\u043D \u0440\u0430\u0437 \u0437\u0430\u0440\u0430\u043D\u0435\u0435 \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440 \u043A\u0430\u0440\u0442\u044B \u043F\u0430\u043C\u044F\u0442\u0438 (\u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u043C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C 2 \u0422\u0431), \u0438 \u0435\u0441\u043B\u0438 \u0444\u0430\u0439\u043B \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 \u0432\u044B\u0440\u0430\u0441\u0442\u0435\u0442 \u0441\u0432\u0435\u0440\u0445 \u044D\u0442\u043E\u0433\u043E \u043F\u0440\u0435\u0434\u0435\u043B\u0430, \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C. \u0412 Windows \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u043A\u0430\u0440\u0442\u044B \u043F\u0430\u043C\u044F\u0442\u0438 \u0432 2 \u0422\u0431 \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043A \u0442\u043E\u043C\u0443, \u0447\u0442\u043E \u0444\u0430\u0439\u043B \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u0437\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440 2 \u0422\u0431, \u0447\u0442\u043E \u043D\u0435 \u043E\u0447\u0435\u043D\u044C \u0443\u0434\u043E\u0431\u043D\u043E. \u0412 MDBX \u0440\u0430\u0437\u043C\u0435\u0440 \u043A\u0430\u0440\u0442\u044B \u043F\u0430\u043C\u044F\u0442\u0438 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0441 \u0448\u0430\u0433\u043E\u043C \u0432 2 \u0413\u0431. \u042D\u0442\u043E \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442 \u043F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435, \u043D\u043E \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u043F\u043E\u0432\u044B\u0448\u0430\u0435\u0442\u0441\u044F \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F.</p></li><li><p>MDBX \u0438\u043C\u0435\u0435\u0442 \u0431\u043E\u043B\u0435\u0435 \u0441\u0442\u0440\u043E\u0433\u0438\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043D\u0430 \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439 \u0438 \u043F\u0435\u0440\u0435\u043A\u0440\u044B\u0442\u0438\u0435 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439 \u0447\u0442\u0435\u043D\u0438\u044F \u0438 \u0437\u0430\u043F\u0438\u0441\u0438 \u0432 \u043E\u0434\u043D\u043E\u043C \u043F\u043E\u0442\u043E\u043A\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F. \u042D\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043D\u0430\u043C \u0432\u044B\u044F\u0432\u0438\u0442\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435\u043E\u0447\u0435\u0432\u0438\u0434\u043D\u044B\u0435 \u043E\u0448\u0438\u0431\u043A\u0438 \u0438 \u0434\u0435\u043B\u0430\u0435\u0442 \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0431\u043E\u043B\u0435\u0435 \u043F\u0440\u0435\u0434\u0441\u043A\u0430\u0437\u0443\u0435\u043C\u044B\u043C.<br> \u0417\u0430 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C 5 \u043B\u0435\u0442 (\u0441 \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u043E\u0442\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u043E\u0442 LMDB) MDBX \u043D\u0430\u043A\u043E\u043F\u0438\u043B \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0438 heisenbug, \u043A\u043E\u0442\u043E\u0440\u044B\u0435, \u043D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043C \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E, \u0432\u0441\u0435 \u0435\u0449\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0442 \u0432 LMDB. \u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0438\u0437 \u043D\u0438\u0445 \u0431\u044B\u043B\u0438 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u044B \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u043D\u0430\u0448\u0435\u0433\u043E \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u0438 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0430\u044E\u0449\u0438\u0435 MDBX \u043E\u0442\u043D\u0435\u0441\u043B\u0438\u0441\u044C \u043A \u043D\u0438\u043C \u0441\u0435\u0440\u044C\u0435\u0437\u043D\u043E \u0438 \u0431\u044B\u0441\u0442\u0440\u043E \u0438\u0441\u043F\u0440\u0430\u0432\u0438\u043B\u0438 \u0438\u0445.</p></li><li><p>\u041A\u043E\u0433\u0434\u0430 \u0440\u0435\u0447\u044C \u0438\u0434\u0435\u0442 \u043E \u0431\u0430\u0437\u0430\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u043C\u043E\u0434\u0438\u0444\u0438\u0446\u0438\u0440\u0443\u044E\u0442 \u0434\u0430\u043D\u043D\u044B\u0435, \u043E\u043D\u0438 \u0441\u043E\u0437\u0434\u0430\u044E\u0442 \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C\u043E\u0433\u043E \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430 (\u0442\u0430\u043A\u0436\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E\u0433\u043E \u043A\u0430\u043A &quot;freelist&quot; \u0432 \u0442\u0435\u0440\u043C\u0438\u043D\u043E\u043B\u043E\u0433\u0438\u0438 LMDB). \u041D\u0430\u043C \u043F\u0440\u0438\u0448\u043B\u043E\u0441\u044C \u0432\u043D\u0435\u0441\u0442\u0438 \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0432 LMDB, \u0447\u0442\u043E\u0431\u044B \u0438\u0441\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0441\u0435\u0440\u044C\u0435\u0437\u043D\u044B\u0435 \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043A\u0438 \u0432 \u0440\u0430\u0431\u043E\u0442\u0435 \u0441 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C\u044B\u043C \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E\u043C <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide" target="_blank" rel="noopener noreferrer">(\u0430\u043D\u0430\u043B\u0438\u0437)</a>. MDBX \u0443\u0434\u0435\u043B\u0438\u043B <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide%EF%BC%89%E3%80%82MDBX%E5%AF%B9%E5%8F%AF%E5%9B%9E%E6%94%B6%E7%A9%BA%E9%97%B4%E7%9A%84%E6%9C%89%E6%95%88%E5%A4%84%E7%90%86%E8%BF%9B%E8%A1%8C%E4%BA%86%E7%89%B9%E5%88%AB%E7%9A%84%E5%85%B3%E6%B3%A8%EF%BC%8C%E5%88%B0%E7%9B%AE%E5%89%8D%E4%B8%BA%E6%AD%A2%EF%BC%8C%E8%BF%98%E4%B8%8D%E9%9C%80%E8%A6%81%E6%89%93%E8%A1%A5%E4%B8%81%E3%80%82" target="_blank" rel="noopener noreferrer">\u043E\u0441\u043E\u0431\u043E\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u0435 \u0441 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C\u044B\u043C \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E\u043C \u0438 \u0434\u043E \u0441\u0438\u0445 \u043F\u043E\u0440 \u043D\u0435 \u043D\u0443\u0436\u0434\u0430\u043B\u0441\u044F \u0432 \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F\u0445</a>.</p></li><li><p>\u041F\u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u043C \u043D\u0430\u0448\u0435\u0433\u043E \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, MDBX \u043F\u043E\u043A\u0430\u0437\u0430\u043B \u0441\u0435\u0431\u044F \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u043B\u0443\u0447\u0448\u0435 \u043D\u0430 \u043D\u0430\u0448\u0438\u0445 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u0445.</p></li><li><p>MDBX \u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0431\u043E\u043B\u044C\u0448\u0435 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0439 \u0442\u0435\u043B\u0435\u043C\u0435\u0442\u0440\u0438\u0438 - \u0431\u043E\u043B\u044C\u0448\u0435 \u043C\u0435\u0442\u0440\u0438\u043A \u043E \u0442\u043E\u043C, \u0447\u0442\u043E \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0432\u043D\u0443\u0442\u0440\u0438 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445. \u0418 \u0443 \u043D\u0430\u0441 \u0435\u0441\u0442\u044C \u044D\u0442\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u0432 Grafana - \u0434\u043B\u044F \u043F\u0440\u0438\u043D\u044F\u0442\u0438\u044F \u043B\u0443\u0447\u0448\u0438\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u043F\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430 \u043D\u0430 MDBX (\u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 LMDB), \u043C\u044B \u0432\u043D\u0435\u0434\u0440\u0438\u043C \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0443 &quot;\u0444\u0438\u043A\u0441\u0430\u0446\u0438\u0438 \u043D\u0430\u043F\u043E\u043B\u043E\u0432\u0438\u043D\u0443 \u043F\u043E\u043B\u043D\u043E\u0439 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438&quot;, \u0447\u0442\u043E\u0431\u044B \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044C \u043F\u0435\u0440\u0435\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F/\u043D\u0435\u0434\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0434\u0438\u0441\u043A\u043E\u0432\u044B\u0445 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0432. \u042D\u0442\u043E \u0435\u0449\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u0443\u043F\u0440\u043E\u0441\u0442\u0438\u0442 \u043D\u0430\u0448 \u043A\u043E\u0434 \u0431\u0435\u0437 \u0443\u0449\u0435\u0440\u0431\u0430 \u0434\u043B\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438.</p></li><li><p>MDBX \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0440\u0435\u0436\u0438\u043C &quot;Exclusive open&quot; - \u043C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0435\u0433\u043E \u0434\u043B\u044F \u043C\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u0431\u0430\u0437 \u0434\u0430\u043D\u043D\u044B\u0445, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0442\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0431\u0430\u0437\u0435 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u0440\u0443\u0433\u0438\u0445 \u0447\u0438\u0442\u0430\u0442\u0435\u043B\u0435\u0439 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430 \u043C\u0438\u0433\u0440\u0430\u0446\u0438\u0438.</p></li></ol></blockquote><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p><a href="https://github.com/ledgerwatch/erigon/wiki/Criteria-for-transitioning-from-Alpha-to-Beta#switch-from-lmdb-to-mdbx" target="_blank" rel="noopener noreferrer">Erigon (\u043A\u043B\u0438\u0435\u043D\u0442 Ethernet \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u044F) \u043D\u0435\u0434\u0430\u0432\u043D\u043E \u043F\u0435\u0440\u0435\u0448\u0435\u043B \u0441 LMDB \u043D\u0430 MDBX</a>. <a href="#fnref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,160);function at(rt,ot){const e=i("RouterLink");return o(),l(u,null,[g,b,m,_,t("nav",h,[t("ul",null,[t("li",null,[s(e,{to:"#\u0446\u0438\u0442\u0430\u0442\u044B"},{default:a(()=>[c]),_:1})]),t("li",null,[s(e,{to:"#\u0447\u0442\u043E-\u0442\u0430\u043A\u043E\u0435-libmdbx"},{default:a(()=>[f]),_:1})]),t("li",null,[s(e,{to:"#\u0443\u0447\u0435\u0431\u043D\u0438\u043A\u0438"},{default:a(()=>[x]),_:1}),t("ul",null,[t("li",null,[s(e,{to:"#\u043A\u0430\u043A-\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C-\u043F\u0440\u0438\u043C\u0435\u0440"},{default:a(()=>[q]),_:1})]),t("li",null,[s(e,{to:"#\u043F\u0440\u0438\u043C\u0435\u0440-1-\u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435-set-key-val-\u0438-\u0447\u0442\u0435\u043D\u0438\u0435-get-key"},{default:a(()=>[v]),_:1}),t("ul",null,[t("li",null,[s(e,{to:"#\u043A\u043E\u0434"},{default:a(()=>[k]),_:1})]),t("li",null,[s(e,{to:"#\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435-\u0432\u044B\u0432\u043E\u0434"},{default:a(()=>[y]),_:1})]),t("li",null,[s(e,{to:"#\u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435-\u043A\u043E\u0434\u0430"},{default:a(()=>[D]),_:1}),t("ul",null,[t("li",null,[s(e,{to:"#env-rw-\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435-\u0431\u0430\u0437\u044B-\u0434\u0430\u043D\u043D\u044B\u0445"},{default:a(()=>[E]),_:1})]),t("li",null,[s(e,{to:"#\u043C\u0430\u043A\u0440\u043E\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435"},{default:a(()=>[w]),_:1})]),t("li",null,[s(e,{to:"#\u0442\u0430\u043A-\u0438\u043B\u0438-\u0438\u043D\u0430\u0447\u0435-\u0438-lazy-static"},{default:a(()=>[B]),_:1})]),t("li",null,[s(e,{to:"#\u043C\u0430\u043A\u0440\u043E\u0441-mdbx"},{default:a(()=>[T]),_:1})]),t("li",null,[s(e,{to:"#\u043F\u043E\u0442\u043E\u043A\u0438-\u0438-\u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438"},{default:a(()=>[M]),_:1})]),t("li",null,[s(e,{to:"#\u0447\u0442\u0435\u043D\u0438\u0435-\u0438-\u0437\u0430\u043F\u0438\u0441\u044C-\u0434\u0432\u043E\u0438\u0447\u043D\u044B\u0445-\u0434\u0430\u043D\u043D\u044B\u0445"},{default:a(()=>[N]),_:1})])])])])]),t("li",null,[s(e,{to:"#\u043F\u0440\u0438\u043C\u0435\u0440-2-\u0442\u0438\u043F\u044B-\u0434\u0430\u043D\u043D\u044B\u0445-\u0444\u043B\u0430\u0433\u0438-\u0431\u0430\u0437\u044B-\u0434\u0430\u043D\u043D\u044B\u0445-\u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435-\u043E\u0431\u0445\u043E\u0434"},{default:a(()=>[S]),_:1}),t("ul",null,[t("li",null,[s(e,{to:"#\u043A\u043E\u0434-1"},{default:a(()=>[X]),_:1})]),t("li",null,[s(e,{to:"#\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435-\u0432\u044B\u0432\u043E\u0434-1"},{default:a(()=>[R]),_:1})]),t("li",null,[s(e,{to:"#\u0431\u044B\u0441\u0442\u0440\u043E\u0435-\u0447\u0442\u0435\u043D\u0438\u0435-\u0438-\u0437\u0430\u043F\u0438\u0441\u044C"},{default:a(()=>[O]),_:1})]),t("li",null,[s(e,{to:"#\u0442\u0438\u043F\u044B-\u0434\u0430\u043D\u043D\u044B\u0445"},{default:a(()=>[C]),_:1}),t("ul",null,[t("li",null,[s(e,{to:"#\u043F\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0435-\u0442\u0438\u043F\u044B-\u0434\u0430\u043D\u043D\u044B\u0445"},{default:a(()=>[V]),_:1})])])]),t("li",null,[s(e,{to:"#\u0444\u043B\u0430\u0433\u0438-\u0431\u0430\u0437\u044B-\u0434\u0430\u043D\u043D\u044B\u0445"},{default:a(()=>[U]),_:1}),t("ul",null,[t("li",null,[s(e,{to:"#dupsort-\u043E\u0434\u0438\u043D-\u043A\u043B\u044E\u0447-\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442-\u0431\u043E\u043B\u0435\u0435-\u0447\u0435\u043C-\u043E\u0434\u043D\u043E\u043C\u0443-\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044E"},{default:a(()=>[I]),_:1})]),t("li",null,[s(e,{to:"#dup-key-\u0438\u0442\u0435\u0440\u0430\u0442\u043E\u0440-\u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u044E\u0449\u0438\u0438-\u0432\u0441\u0435-\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F-\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435-\u043A\u043B\u044E\u0447\u0443"},{default:a(()=>[A]),_:1})]),t("li",null,[s(e,{to:"#\u0444\u043B\u0430\u0433\u0438-\u0431\u0430\u0437\u044B-\u0434\u0430\u043D\u043D\u044B\u0445-\u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438-\u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C\u044B\u0435-\u043F\u043E-\u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E"},{default:a(()=>[L]),_:1})])])]),t("li",null,[s(e,{to:"#\u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435-\u0434\u0430\u043D\u043D\u044B\u0445"},{default:a(()=>[P]),_:1}),t("ul",null,[t("li",null,[s(e,{to:"#del-key-\u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435-\u043A\u043B\u0430\u0432\u0438\u0448\u0438"},{default:a(()=>[F]),_:1})]),t("li",null,[s(e,{to:"#del-val-key-val-\u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435-\u0442\u043E\u0447\u043D\u043E\u0433\u043E-\u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u044F"},{default:a(()=>[z]),_:1})])])]),t("li",null,[s(e,{to:"#\u043E\u0431\u0445\u043E\u0434"},{default:a(()=>[$]),_:1}),t("ul",null,[t("li",null,[s(e,{to:"#\u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0438-\u043E\u0431\u0445\u043E\u0434"},{default:a(()=>[Y]),_:1})]),t("li",null,[s(e,{to:"#rev-\u043E\u0431\u0445\u043E\u0434-\u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0433\u043E-\u043F\u043E\u0440\u044F\u0434\u043A\u0430"},{default:a(()=>[j]),_:1})]),t("li",null,[s(e,{to:"#\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430"},{default:a(()=>[G]),_:1})])])])])]),t("li",null,[s(e,{to:"#\u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044C\u043D\u044B\u0435-\u0438\u0442\u0435\u0440\u0430\u0442\u043E\u0440\u044B"},{default:a(()=>[H]),_:1}),t("ul",null,[t("li",null,[s(e,{to:"#\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435-\u0432\u044B\u0432\u043E\u0434-2"},{default:a(()=>[W]),_:1})]),t("li",null,[s(e,{to:"#range-begin-end-\u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B-\u0438\u0442\u0435\u0440\u0430\u0446\u0438\u044F"},{default:a(()=>[K]),_:1})]),t("li",null,[s(e,{to:"#rev-range-\u0438\u043D\u0432\u0435\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435-\u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044B"},{default:a(()=>[J]),_:1})])])]),t("li",null,[s(e,{to:"#\u043D\u0430\u0441\u0442\u0440\u043E\u0438\u043A\u0430-\u0442\u0438\u043F\u043E\u0432-\u0434\u0430\u043D\u043D\u044B\u0445"},{default:a(()=>[Q]),_:1}),t("ul",null,[t("li",null,[s(e,{to:"#\u0443\u043F\u0440\u043E\u0449\u0435\u043D\u0438\u0435-\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445-\u0442\u0438\u043F\u043E\u0432-\u0441-\u043F\u043E\u043C\u043E\u0449\u044C\u044E-\u043C\u0430\u043A\u0440\u043E\u0441\u043E\u0432-\u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043E\u0432"},{default:a(()=>[Z]),_:1})])])])])]),t("li",null,[s(e,{to:"#\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u0435-\u043F\u043E-\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044E"},{default:a(()=>[tt]),_:1}),t("ul",null,[t("li",null,[s(e,{to:"#\u0434\u043B\u0438\u043D\u0430-\u043A\u043B\u044E\u0447\u0430"},{default:a(()=>[nt]),_:1})])])]),t("li",null,[s(e,{to:"#\u0441\u043D\u043E\u0441\u043A\u0438"},{default:a(()=>[et]),_:1})])])]),st],64)}var dt=r(p,[["render",at],["__file","2021-12-21-mdbx.html.vue"]]);export{dt as default};
