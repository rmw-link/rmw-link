import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,c as l,a as t,b as s,w as a,F as u,d as n,e as i,o as d}from"./app.87d927ab.js";const p={},g=t("h1",{id:"\u03C4\u03BF-\u03C0\u03B1\u03BA\u03B5\u03C4\u03BF-rust-\u03B3\u03B9\u03B1-\u03C4\u03BF-libmdbx",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u03C4\u03BF-\u03C0\u03B1\u03BA\u03B5\u03C4\u03BF-rust-\u03B3\u03B9\u03B1-\u03C4\u03BF-libmdbx","aria-hidden":"true"},"#"),n(" \u03A4\u03BF \u03C0\u03B1\u03BA\u03AD\u03C4\u03BF rust \u03B3\u03B9\u03B1 \u03C4\u03BF libmdbx")],-1),b=t("p",null,[n("\u03A4\u03BF \u03C0\u03B5\u03C1\u03B9\u03C4\u03CD\u03BB\u03B9\u03B3\u03BC\u03B1 "),t("code",null,"rust"),n(" \u03B3\u03B9\u03B1 \u03C4\u03B7 \u03B2\u03AC\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD "),t("a",{href:"https://github.com/erthink/libmdbx",target:"_blank",rel:"noopener noreferrer"},"libmdbx"),n(".")],-1),m=t("hr",null,null,-1),_=t("p",null,"\u039A\u03B1\u03C4\u03AC\u03BB\u03BF\u03B3\u03BF\u03C2 :",-1),h={class:"table-of-contents"},c=n("\u0391\u03C0\u03BF\u03C3\u03C0\u03AC\u03C3\u03BC\u03B1\u03C4\u03B1"),f=n("\u03A4\u03B9 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B7 libmdbx;"),x=n("\u03A3\u03B5\u03BC\u03B9\u03BD\u03AC\u03C1\u03B9\u03B1"),q=n("\u03A0\u03CE\u03C2 \u03BD\u03B1 \u03B5\u03BA\u03C4\u03B5\u03BB\u03AD\u03C3\u03B5\u03C4\u03B5 \u03C4\u03BF \u03C0\u03B1\u03C1\u03AC\u03B4\u03B5\u03B9\u03B3\u03BC\u03B1"),v=n("\u03A0\u03B1\u03C1\u03AC\u03B4\u03B5\u03B9\u03B3\u03BC\u03B1 1 : \u0393\u03C1\u03AC\u03C6\u03BF\u03BD\u03C4\u03B1\u03C2 set(key,val) \u03BA\u03B1\u03B9 \u03B4\u03B9\u03B1\u03B2\u03AC\u03B6\u03BF\u03BD\u03C4\u03B1\u03C2 .get(key)"),k=n("\u039A\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2"),y=n("\u0395\u03BA\u03C4\u03B5\u03BB\u03AD\u03C3\u03C4\u03B5 \u03C4\u03B7\u03BD \u03AD\u03BE\u03BF\u03B4\u03BF"),D=n("\u03A0\u03B5\u03C1\u03B9\u03B3\u03C1\u03B1\u03C6\u03AE \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03CD"),w=n("env_rw! \u039F\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD"),E=n("\u039C\u03B1\u03BA\u03C1\u03BF\u03C3\u03BA\u03BF\u03C0\u03B9\u03BA\u03AE \u03B5\u03C0\u03AD\u03BA\u03C4\u03B1\u03C3\u03B7"),B=n("anyhow \u03BA\u03B1\u03B9 lazy_static"),T=n("\u0397 \u03BC\u03B1\u03BA\u03C1\u03BF\u03B5\u03BD\u03C4\u03BF\u03BB\u03AE mdbx!"),M=n("\u039D\u03AE\u03BC\u03B1\u03C4\u03B1 \u03BA\u03B1\u03B9 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AD\u03C2"),N=n("\u0391\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7 \u03BA\u03B1\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE \u03B4\u03C5\u03B1\u03B4\u03B9\u03BA\u03CE\u03BD \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD"),S=n("\u03A0\u03B1\u03C1\u03AC\u03B4\u03B5\u03B9\u03B3\u03BC\u03B1 2: \u03A4\u03CD\u03C0\u03BF\u03B9 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD, \u03C3\u03B7\u03BC\u03B1\u03AF\u03B5\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD, \u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE, \u03B4\u03B9\u03AC\u03C3\u03C7\u03B9\u03C3\u03B7"),X=n("\u039A\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2"),R=n("\u0395\u03BA\u03C4\u03B5\u03BB\u03AD\u03C3\u03C4\u03B5 \u03C4\u03B7\u03BD \u03AD\u03BE\u03BF\u03B4\u03BF"),O=n("\u0393\u03C1\u03AE\u03B3\u03BF\u03C1\u03B5\u03C2 \u03B1\u03BD\u03B1\u03B3\u03BD\u03CE\u03C3\u03B5\u03B9\u03C2 \u03BA\u03B1\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AD\u03C2"),C=n("\u03A4\u03CD\u03C0\u03BF\u03B9 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD"),V=n("\u03A0\u03C1\u03BF\u03BA\u03B1\u03B8\u03BF\u03C1\u03B9\u03C3\u03BC\u03AD\u03BD\u03BF\u03B9 \u03C4\u03CD\u03C0\u03BF\u03B9 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD"),U=n("\u03A3\u03B7\u03BC\u03B1\u03AF\u03B5\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD"),I=n("DUPSORT : \u0388\u03BD\u03B1 \u03BA\u03BB\u03B5\u03B9\u03B4\u03AF \u03B1\u03BD\u03C4\u03B9\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF \u03C3\u03B5 \u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03B5\u03C2 \u03B1\u03C0\u03CC \u03BC\u03AF\u03B1 \u03C4\u03B9\u03BC\u03AD\u03C2"),A=n(".dup(key) iterator \u03C0\u03BF\u03C5 \u03B5\u03C0\u03B9\u03C3\u03C4\u03C1\u03AD\u03C6\u03B5\u03B9 \u03CC\u03BB\u03B5\u03C2 \u03C4\u03B9\u03C2 \u03C4\u03B9\u03BC\u03AD\u03C2 \u03C0\u03BF\u03C5 \u03B1\u03BD\u03C4\u03B9\u03C3\u03C4\u03BF\u03B9\u03C7\u03BF\u03CD\u03BD \u03C3\u03B5 \u03AD\u03BD\u03B1 \u03BA\u03BB\u03B5\u03B9\u03B4\u03AF"),L=n("\u03A0\u03C1\u03BF\u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03B5\u03C2 \u03C3\u03B7\u03BC\u03B1\u03AF\u03B5\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03C0\u03BF\u03C5 \u03C0\u03C1\u03BF\u03C3\u03B1\u03C1\u03C4\u03CE\u03BD\u03C4\u03B1\u03B9 \u03B1\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03B1"),P=n("\u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD"),F=n(".del(key) \u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03B5\u03BD\u03CC\u03C2 \u03C0\u03BB\u03AE\u03BA\u03C4\u03C1\u03BF\u03C5"),z=n(".del_val(key,val) \u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03B1\u03BA\u03C1\u03B9\u03B2\u03BF\u03CD\u03C2 \u03B1\u03BD\u03C4\u03B9\u03C3\u03C4\u03BF\u03B9\u03C7\u03AF\u03B1\u03C2"),$=n("\u0394\u03B9\u03B1\u03B4\u03C1\u03BF\u03BC\u03AE"),Y=n("\u03B4\u03B9\u03B1\u03B4\u03BF\u03C7\u03B9\u03BA\u03AE \u03B4\u03B9\u03AC\u03C3\u03C7\u03B9\u03C3\u03B7"),j=n(".rev() \u0391\u03BD\u03C4\u03AF\u03C3\u03C4\u03C1\u03BF\u03C6\u03B7 \u03B4\u03B9\u03AC\u03C3\u03C7\u03B9\u03C3\u03B7 \u03C3\u03B5\u03B9\u03C1\u03AC\u03C2"),G=n("\u03A4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7"),H=n("\u0395\u03C0\u03B1\u03BD\u03B1\u03BB\u03AE\u03C0\u03C4\u03B5\u03C2 \u03B4\u03B9\u03B1\u03C3\u03C4\u03AE\u03BC\u03B1\u03C4\u03BF\u03C2"),W=n("\u0395\u03BA\u03C4\u03B5\u03BB\u03AD\u03C3\u03C4\u03B5 \u03C4\u03B7\u03BD \u03AD\u03BE\u03BF\u03B4\u03BF \u03C4\u03BF\u03C5"),K=n(".range(begin..end) \u0394\u03B9\u03AC\u03C3\u03C4\u03B7\u03BC\u03B1 \u03B5\u03C0\u03B1\u03BD\u03AC\u03BB\u03B7\u03C8\u03B7\u03C2"),J=n(".rev_range \u0391\u03BD\u03C4\u03B5\u03C3\u03C4\u03C1\u03B1\u03BC\u03BC\u03AD\u03BD\u03B1 \u03B4\u03B9\u03B1\u03C3\u03C4\u03AE\u03BC\u03B1\u03C4\u03B1"),Q=n("\u03A0\u03C1\u03BF\u03C3\u03B1\u03C1\u03BC\u03BF\u03B3\u03AE \u03C4\u03CD\u03C0\u03C9\u03BD \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD"),Z=n("\u0391\u03C0\u03BB\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 \u03C0\u03C1\u03BF\u03C3\u03B1\u03C1\u03BC\u03BF\u03C3\u03BC\u03AD\u03BD\u03C9\u03BD \u03C4\u03CD\u03C0\u03C9\u03BD \u03BC\u03B5 \u03BC\u03B1\u03BA\u03C1\u03BF\u03B5\u03BD\u03C4\u03BF\u03BB\u03AD\u03C2 \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03B7\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CE\u03BD"),tt=n("\u03A3\u03B7\u03BC\u03B5\u03AF\u03C9\u03C3\u03B7 \u03C3\u03C7\u03B5\u03C4\u03B9\u03BA\u03AC \u03BC\u03B5 \u03C4\u03B7 \u03C7\u03C1\u03AE\u03C3\u03B7 \u03C4\u03B7\u03C2"),nt=n("\u03A4\u03BF \u03BC\u03AE\u03BA\u03BF\u03C2 \u03C4\u03BF\u03C5 \u03BA\u03BB\u03B5\u03B9\u03B4\u03B9\u03BF\u03CD"),et=n("\u03A5\u03C0\u03BF\u03C3\u03B7\u03BC\u03B5\u03B9\u03CE\u03C3\u03B5\u03B9\u03C2"),st=i(`<hr><h2 id="\u03B1\u03C0\u03BF\u03C3\u03C0\u03B1\u03C3\u03BC\u03B1\u03C4\u03B1" tabindex="-1"><a class="header-anchor" href="#\u03B1\u03C0\u03BF\u03C3\u03C0\u03B1\u03C3\u03BC\u03B1\u03C4\u03B1" aria-hidden="true">#</a> \u0391\u03C0\u03BF\u03C3\u03C0\u03AC\u03C3\u03BC\u03B1\u03C4\u03B1</h2><p>\u039A\u03B1\u03B8\u03CE\u03C2 \u03AD\u03B3\u03C1\u03B1\u03C6\u03B1 \u03C4\u03BF <a href="https://rmw.link" target="_blank" rel="noopener noreferrer">&#39;rmw.link</a> &#39;, \u03AD\u03BD\u03B9\u03C9\u03C3\u03B1 \u03CC\u03C4\u03B9 \u03C7\u03C1\u03B5\u03B9\u03B1\u03B6\u03CC\u03BC\u03BF\u03C5\u03BD \u03BC\u03B9\u03B1 \u03B5\u03BD\u03C3\u03C9\u03BC\u03B1\u03C4\u03C9\u03BC\u03AD\u03BD\u03B7 \u03B2\u03AC\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD.</p><p>\u039B\u03CC\u03B3\u03C9 \u03C4\u03B7\u03C2 \u03C4\u03B1\u03C7\u03CD\u03C4\u03B7\u03C4\u03B1\u03C2 \u03BC\u03B5\u03C4\u03AC\u03B4\u03BF\u03C3\u03B7\u03C2 \u03B4\u03B9\u03BA\u03C4\u03CD\u03BF\u03C5 \u03C0\u03BF\u03C5 \u03C3\u03C5\u03BD\u03B5\u03C0\u03AC\u03B3\u03B5\u03C4\u03B1\u03B9 \u03B7 \u03C3\u03C5\u03C7\u03BD\u03AE \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE, \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7 \u03BA\u03B1\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE, \u03C4\u03BF <code>sqlite3</code> \u03AE\u03C4\u03B1\u03BD \u03C0\u03BF\u03BB\u03CD \u03C0\u03C1\u03BF\u03B7\u03B3\u03BC\u03AD\u03BD\u03BF \u03B3\u03B9\u03B1 \u03BB\u03CC\u03B3\u03BF\u03C5\u03C2 \u03B1\u03C0\u03CC\u03B4\u03BF\u03C3\u03B7\u03C2.</p><p>\u0388\u03C4\u03C3\u03B9, \u03BC\u03B9\u03B1 \u03B2\u03AC\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03BA\u03BB\u03B5\u03B9\u03B4\u03B9\u03CE\u03BD-\u03C4\u03B9\u03BC\u03CE\u03BD \u03C7\u03B1\u03BC\u03B7\u03BB\u03CC\u03C4\u03B5\u03C1\u03BF\u03C5 \u03B5\u03C0\u03B9\u03C0\u03AD\u03B4\u03BF\u03C5 \u03AE\u03C4\u03B1\u03BD \u03C0\u03B9\u03BF \u03BA\u03B1\u03C4\u03AC\u03BB\u03BB\u03B7\u03BB\u03B7 <a href="https://discourse.world/h/2020/06/05/Shine-and-poverty-key-value-database-LMDB-in-applications-for-iOS" target="_blank" rel="noopener noreferrer">(\u03B7 lmdb \u03B5\u03AF\u03BD\u03B1\u03B9 10 \u03C6\u03BF\u03C1\u03AD\u03C2 \u03C4\u03B1\u03C7\u03CD\u03C4\u03B5\u03C1\u03B7 \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD sqlite</a> ) <a href="https://discourse.world/h/2020/06/05/Shine-and-poverty-key-value-database-LMDB-in-applications-for-iOS" target="_blank" rel="noopener noreferrer">.</a></p><p><img src="//irmw.gumlet.io/yxZV8x.jpg" alt=""></p><p>\u03A4\u03B5\u03BB\u03B9\u03BA\u03AC, \u03B5\u03C0\u03AD\u03BB\u03B5\u03BE\u03B1 \u03C4\u03B7 \u03BC\u03B1\u03B3\u03B9\u03BA\u03AE \u03B5\u03BA\u03B4\u03BF\u03C7\u03AE \u03C4\u03BF\u03C5 <code>lmdb</code> - <code>mdbx</code>.</p><p>\u0395\u03C0\u03AF \u03C4\u03BF\u03C5 \u03C0\u03B1\u03C1\u03CC\u03BD\u03C4\u03BF\u03C2, \u03C4\u03BF \u03C5\u03C0\u03AC\u03C1\u03C7\u03BF\u03BD \u03C0\u03B1\u03BA\u03AD\u03C4\u03BF <code>rust</code> \u03C4\u03BF\u03C5 <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">mdbx-rs (mdbx-sys)</a> \u03B1\u03C0\u03CC \u03C4\u03BF <code>mdbx</code> <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">\u03B4\u03B5\u03BD \u03C5\u03C0\u03BF\u03C3\u03C4\u03B7\u03C1\u03AF\u03B6\u03B5\u03B9 \u03C4\u03B1 Windows</a>, \u03BF\u03C0\u03CC\u03C4\u03B5 \u03B1\u03BD\u03AD\u03BB\u03B1\u03B2\u03B1 \u03BD\u03B1 \u03B2\u03AC\u03BB\u03C9 \u03C3\u03B5 \u03C0\u03B1\u03BA\u03AD\u03C4\u03BF \u03BC\u03B9\u03B1 \u03AD\u03BA\u03B4\u03BF\u03C3\u03B7 \u03BC\u03B5 \u03C5\u03C0\u03BF\u03C3\u03C4\u03AE\u03C1\u03B9\u03BE\u03B7 \u03B3\u03B9\u03B1 \u03C4\u03B1 Windows.</p><p>\u03A5\u03C0\u03BF\u03C3\u03C4\u03AE\u03C1\u03B9\u03BE\u03B7 \u03B3\u03B9\u03B1 \u03C4\u03B7\u03BD \u03B1\u03C0\u03BF\u03B8\u03AE\u03BA\u03B5\u03C5\u03C3\u03B7 \u03C0\u03C1\u03BF\u03C3\u03B1\u03C1\u03BC\u03BF\u03C3\u03BC\u03AD\u03BD\u03C9\u03BD \u03C4\u03CD\u03C0\u03C9\u03BD \u03C3\u03BA\u03BF\u03C5\u03C1\u03B9\u03AC\u03C2. \u03A5\u03C0\u03BF\u03C3\u03C4\u03B7\u03C1\u03AF\u03B6\u03B5\u03B9 \u03C0\u03BF\u03BB\u03C5\u03BD\u03B7\u03BC\u03B1\u03C4\u03B9\u03BA\u03AE \u03C0\u03C1\u03CC\u03C3\u03B2\u03B1\u03C3\u03B7.</p><p>\u0397 \u03B2\u03AC\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03BF\u03C1\u03B9\u03C3\u03C4\u03B5\u03AF \u03C3\u03B5 \u03BC\u03B9\u03B1 \u03B5\u03BD\u03CC\u03C4\u03B7\u03C4\u03B1 \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03CE\u03BD\u03C4\u03B1\u03C2 \u03C4\u03BF <code>lazy_static</code> \u03BA\u03B1\u03B9 \u03C3\u03C4\u03B7 \u03C3\u03C5\u03BD\u03AD\u03C7\u03B5\u03B9\u03B1 \u03BD\u03B1 \u03B5\u03B9\u03C3\u03B1\u03C7\u03B8\u03B5\u03AF \u03BA\u03B1\u03B9 \u03BD\u03B1 \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03B7\u03B8\u03B5\u03AF \u03BC\u03B5 \u03BA\u03AC\u03C4\u03B9 \u03C3\u03B1\u03BD :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
</code></pre></div><h2 id="\u03C4\u03B9-\u03B5\u03B9\u03BD\u03B1\u03B9-\u03B7-libmdbx" tabindex="-1"><a class="header-anchor" href="#\u03C4\u03B9-\u03B5\u03B9\u03BD\u03B1\u03B9-\u03B7-libmdbx" aria-hidden="true">#</a> \u03A4\u03B9 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B7 libmdbx;</h2><p>\u03A4\u03BF <a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">mdbx</a> \u03B5\u03AF\u03BD\u03B1\u03B9 \u03BC\u03B9\u03B1 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03B5\u03CD\u03BF\u03C5\u03C3\u03B1 \u03B2\u03AC\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03B2\u03B1\u03C3\u03B9\u03C3\u03BC\u03AD\u03BD\u03B7 \u03C3\u03C4\u03BF lmdb, \u03C4\u03BF\u03C5 \u03A1\u03CE\u03C3\u03BF\u03C5 <a href="https://vk.com/erthink" target="_blank" rel="noopener noreferrer">\u041B\u0435\u043E\u043D\u0438\u0434 \u042E\u0440\u044C\u0435\u0432 (Leonid Yuriev</a> ).</p><p>\u0397 <a href="https://en.wikipedia.org/wiki/Lightning_Memory-Mapped_Database" target="_blank" rel="noopener noreferrer">lmdb</a> \u03B5\u03AF\u03BD\u03B1\u03B9 \u03BC\u03B9\u03B1 \u03B5\u03BE\u03B1\u03B9\u03C1\u03B5\u03C4\u03B9\u03BA\u03AC \u03B3\u03C1\u03AE\u03B3\u03BF\u03C1\u03B7 \u03B5\u03BD\u03C3\u03C9\u03BC\u03B1\u03C4\u03C9\u03BC\u03AD\u03BD\u03B7 \u03B2\u03AC\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03BA\u03BB\u03B5\u03B9\u03B4\u03B9\u03CE\u03BD-\u03C4\u03B9\u03BC\u03CE\u03BD.</p><p>\u0397 \u03BC\u03B7\u03C7\u03B1\u03BD\u03AE \u03B1\u03BD\u03B1\u03B6\u03AE\u03C4\u03B7\u03C3\u03B7\u03C2 \u03C0\u03BB\u03AE\u03C1\u03BF\u03C5\u03C2 \u03BA\u03B5\u03B9\u03BC\u03AD\u03BD\u03BF\u03C5 <a href="https://docs.meilisearch.com/reference/under_the_hood/storage.html#measured-disk-usage" target="_blank" rel="noopener noreferrer">MeiliSearch</a> \u03B2\u03B1\u03C3\u03AF\u03B6\u03B5\u03C4\u03B1\u03B9 \u03C3\u03C4\u03B7\u03BD lmdb.</p><p><a href="https://docs.nvidia.com/deeplearning/dali/user-guide/docs/examples/general/data_loading/dataloading_lmdb.html" target="_blank" rel="noopener noreferrer">\u03A4\u03BF \u03C0\u03BB\u03B1\u03AF\u03C3\u03B9\u03BF \u03B2\u03B1\u03B8\u03B9\u03AC\u03C2 \u03BC\u03AC\u03B8\u03B7\u03C3\u03B7\u03C2 caffe \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03B5\u03AF \u03B5\u03C0\u03AF\u03C3\u03B7\u03C2 \u03C4\u03BF lmdb \u03C9\u03C2 \u03C7\u03CE\u03C1\u03BF \u03B1\u03C0\u03BF\u03B8\u03AE\u03BA\u03B5\u03C5\u03C3\u03B7\u03C2</a> \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD.</p><p>\u03A4\u03BF <a href="https://github.com/erthink/libmdbx#added-features" target="_blank" rel="noopener noreferrer">mdbx \u03B5\u03AF\u03BD\u03B1\u03B9 30% \u03C4\u03B1\u03C7\u03CD\u03C4\u03B5\u03C1\u03BF \u03B1\u03C0\u03CC \u03C4\u03BF lmdb \u03C3\u03C4\u03BF \u03B5\u03BD\u03C3\u03C9\u03BC\u03B1\u03C4\u03C9\u03BC\u03AD\u03BD\u03BF \u03C4\u03B5\u03C3\u03C4 \u03B1\u03C0\u03CC\u03B4\u03BF\u03C3\u03B7\u03C2 ioarena</a>.</p><p><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-1.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-3.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-4.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-5.png" alt=""></p><p>\u03A4\u03B1\u03C5\u03C4\u03CC\u03C7\u03C1\u03BF\u03BD\u03B1, \u03C4\u03BF mdbx <a href="https://github.com/erthink/libmdbx#improvements-beyond-lmdb" target="_blank" rel="noopener noreferrer">\u03B2\u03B5\u03BB\u03C4\u03B9\u03CE\u03BD\u03B5\u03B9 \u03C0\u03BF\u03BB\u03BB\u03AD\u03C2 \u03B1\u03C0\u03CC \u03C4\u03B9\u03C2 \u03B1\u03B4\u03C5\u03BD\u03B1\u03BC\u03AF\u03B5\u03C2 \u03C4\u03BF\u03C5</a> lmdb, \u03BF\u03C0\u03CC\u03C4\u03B5 \u03C4\u03BF Erigon (\u03BF \u03C0\u03B5\u03BB\u03AC\u03C4\u03B7\u03C2 ethereum \u03B5\u03C0\u03CC\u03BC\u03B5\u03BD\u03B7\u03C2 \u03B3\u03B5\u03BD\u03B9\u03AC\u03C2) \u03BC\u03B5\u03C4\u03B1\u03C0\u03AE\u03B4\u03B7\u03C3\u03B5 \u03C0\u03C1\u03CC\u03C3\u03C6\u03B1\u03C4\u03B1 \u03B1\u03C0\u03CC \u03C4\u03BF LMDB \u03C3\u03C4\u03BF MDBX <sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>.</p><h2 id="\u03C3\u03B5\u03BC\u03B9\u03BD\u03B1\u03C1\u03B9\u03B1" tabindex="-1"><a class="header-anchor" href="#\u03C3\u03B5\u03BC\u03B9\u03BD\u03B1\u03C1\u03B9\u03B1" aria-hidden="true">#</a> \u03A3\u03B5\u03BC\u03B9\u03BD\u03AC\u03C1\u03B9\u03B1</h2><h3 id="\u03C0\u03C9\u03C2-\u03BD\u03B1-\u03B5\u03BA\u03C4\u03B5\u03BB\u03B5\u03C3\u03B5\u03C4\u03B5-\u03C4\u03BF-\u03C0\u03B1\u03C1\u03B1\u03B4\u03B5\u03B9\u03B3\u03BC\u03B1" tabindex="-1"><a class="header-anchor" href="#\u03C0\u03C9\u03C2-\u03BD\u03B1-\u03B5\u03BA\u03C4\u03B5\u03BB\u03B5\u03C3\u03B5\u03C4\u03B5-\u03C4\u03BF-\u03C0\u03B1\u03C1\u03B1\u03B4\u03B5\u03B9\u03B3\u03BC\u03B1" aria-hidden="true">#</a> \u03A0\u03CE\u03C2 \u03BD\u03B1 \u03B5\u03BA\u03C4\u03B5\u03BB\u03AD\u03C3\u03B5\u03C4\u03B5 \u03C4\u03BF \u03C0\u03B1\u03C1\u03AC\u03B4\u03B5\u03B9\u03B3\u03BC\u03B1</h3><p>\u03A0\u03C1\u03CE\u03C4\u03B1 \u03BA\u03BB\u03C9\u03BD\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03C4\u03B5 \u03C4\u03B7\u03BD \u03B2\u03AC\u03C3\u03B7 \u03BA\u03CE\u03B4\u03B9\u03BA\u03B1 <code>git clone git@github.com:rmw-lib/mdbx.git --depth=1 &amp;&amp; cd mdbx</code></p><p>\u03A3\u03C4\u03B7 \u03C3\u03C5\u03BD\u03AD\u03C7\u03B5\u03B9\u03B1, \u03B5\u03BA\u03C4\u03B5\u03BB\u03AD\u03C3\u03C4\u03B5 \u03C4\u03BF <code>cargo run --example 01</code> \u03BA\u03B1\u03B9 \u03B8\u03B1 \u03C4\u03C1\u03AD\u03BE\u03B5\u03B9 <code>examples/01.rs</code></p><p>\u0395\u03AC\u03BD \u03C0\u03C1\u03CC\u03BA\u03B5\u03B9\u03C4\u03B1\u03B9 \u03B3\u03B9\u03B1 \u03C4\u03BF \u03B4\u03B9\u03BA\u03CC \u03C3\u03B1\u03C2 \u03AD\u03C1\u03B3\u03BF, \u03C0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03BF\u03CD\u03BC\u03B5 \u03BD\u03B1 \u03C4\u03BF \u03B5\u03BA\u03C4\u03B5\u03BB\u03AD\u03C3\u03B5\u03C4\u03B5 \u03C0\u03C1\u03CE\u03C4\u03B1 :</p><div class="language-bash ext-sh"><pre class="language-bash"><code>cargo install cargo-edit
cargo add mdbx lazy_static ctor paste
</code></pre></div><h3 id="\u03C0\u03B1\u03C1\u03B1\u03B4\u03B5\u03B9\u03B3\u03BC\u03B1-1-\u03B3\u03C1\u03B1\u03C6\u03BF\u03BD\u03C4\u03B1\u03C2-set-key-val-\u03BA\u03B1\u03B9-\u03B4\u03B9\u03B1\u03B2\u03B1\u03B6\u03BF\u03BD\u03C4\u03B1\u03C2-get-key" tabindex="-1"><a class="header-anchor" href="#\u03C0\u03B1\u03C1\u03B1\u03B4\u03B5\u03B9\u03B3\u03BC\u03B1-1-\u03B3\u03C1\u03B1\u03C6\u03BF\u03BD\u03C4\u03B1\u03C2-set-key-val-\u03BA\u03B1\u03B9-\u03B4\u03B9\u03B1\u03B2\u03B1\u03B6\u03BF\u03BD\u03C4\u03B1\u03C2-get-key" aria-hidden="true">#</a> \u03A0\u03B1\u03C1\u03AC\u03B4\u03B5\u03B9\u03B3\u03BC\u03B1 1 : \u0393\u03C1\u03AC\u03C6\u03BF\u03BD\u03C4\u03B1\u03C2 <code>set(key,val)</code> \u03BA\u03B1\u03B9 \u03B4\u03B9\u03B1\u03B2\u03AC\u03B6\u03BF\u03BD\u03C4\u03B1\u03C2 <code>.get(key)</code></h3><p>\u0391\u03C2 \u03B4\u03BF\u03CD\u03BC\u03B5 \u03AD\u03BD\u03B1 \u03B1\u03C0\u03BB\u03CC <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/01.rs" target="_blank" rel="noopener noreferrer">\u03C0\u03B1\u03C1\u03AC\u03B4\u03B5\u03B9\u03B3\u03BC\u03B1/01.rs</a></p><h4 id="\u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C2" tabindex="-1"><a class="header-anchor" href="#\u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C2" aria-hidden="true">#</a> \u039A\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // \u038C\u03BD\u03BF\u03BC\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03AE\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD Env
  Test // \u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0395\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE \u03C4\u03BF\u03C5 \u03B1\u03C1\u03B9\u03B8\u03BC\u03BF\u03CD \u03AD\u03BA\u03B4\u03BF\u03C3\u03B7\u03C2 \u03C4\u03B7\u03C2 libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u03A0\u03BF\u03BB\u03C5\u03BD\u03B7\u03BC\u03B1\u03C4\u03B9\u03BA\u03AE \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7 \u03BA\u03B1\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE
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
</code></pre></div><h4 id="\u03B5\u03BA\u03C4\u03B5\u03BB\u03B5\u03C3\u03C4\u03B5-\u03C4\u03B7\u03BD-\u03B5\u03BE\u03BF\u03B4\u03BF" tabindex="-1"><a class="header-anchor" href="#\u03B5\u03BA\u03C4\u03B5\u03BB\u03B5\u03C3\u03C4\u03B5-\u03C4\u03B7\u03BD-\u03B5\u03BE\u03BF\u03B4\u03BF" aria-hidden="true">#</a> \u0395\u03BA\u03C4\u03B5\u03BB\u03AD\u03C3\u03C4\u03B5 \u03C4\u03B7\u03BD \u03AD\u03BE\u03BF\u03B4\u03BF</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/01.mdb
mdbx version https://github.com/erthink/libmdbx/releases/tag/v0.11.2
test1 get Ok(Some(Bin([6])))
[6]
</code></pre></div><h4 id="\u03C0\u03B5\u03C1\u03B9\u03B3\u03C1\u03B1\u03C6\u03B7-\u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C5" tabindex="-1"><a class="header-anchor" href="#\u03C0\u03B5\u03C1\u03B9\u03B3\u03C1\u03B1\u03C6\u03B7-\u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C5" aria-hidden="true">#</a> \u03A0\u03B5\u03C1\u03B9\u03B3\u03C1\u03B1\u03C6\u03AE \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03CD</h4><h5 id="env-rw-\u03BF\u03C1\u03B9\u03C3\u03BC\u03BF\u03C2-\u03C4\u03B7\u03C2-\u03B2\u03B1\u03C3\u03B7\u03C2-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD" tabindex="-1"><a class="header-anchor" href="#env-rw-\u03BF\u03C1\u03B9\u03C3\u03BC\u03BF\u03C2-\u03C4\u03B7\u03C2-\u03B2\u03B1\u03C3\u03B7\u03C2-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD" aria-hidden="true">#</a> <code>env_rw!</code> \u039F\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD</h5><p>\u039F \u03BA\u03CE\u03B4\u03B9\u03BA\u03B1\u03C2 \u03BE\u03B5\u03BA\u03B9\u03BD\u03AC \u03BC\u03B5 \u03BC\u03B9\u03B1 \u03BC\u03B1\u03BA\u03C1\u03BF\u03B5\u03BD\u03C4\u03BF\u03BB\u03AE env_rw, \u03B7 \u03BF\u03C0\u03BF\u03AF\u03B1 \u03AD\u03C7\u03B5\u03B9 4 \u03C0\u03B1\u03C1\u03B1\u03BC\u03AD\u03C4\u03C1\u03BF\u03C5\u03C2.</p><ol><li><p>\u03A4\u03BF \u03CC\u03BD\u03BF\u03BC\u03B1 \u03C4\u03B7\u03C2 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03AE\u03C2 \u03C4\u03BF\u03C5 \u03C0\u03B5\u03C1\u03B9\u03B2\u03AC\u03BB\u03BB\u03BF\u03BD\u03C4\u03BF\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD</p></li><li><p>\u0395\u03C0\u03B9\u03C3\u03C4\u03C1\u03AD\u03C6\u03B5\u03B9 \u03AD\u03BD\u03B1 \u03B1\u03BD\u03C4\u03B9\u03BA\u03B5\u03AF\u03BC\u03B5\u03BD\u03BF, <a href="https://docs.rs/mdbx/latest/src/mdbx/env.rs.html#27-35" target="_blank" rel="noopener noreferrer">mdbx:: env:: Config</a>.</p></li></ol><p>\u03A7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03BF\u03CD\u03BC\u03B5 \u03C4\u03B7\u03BD \u03C0\u03C1\u03BF\u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03B7 \u03B4\u03B9\u03B1\u03BC\u03CC\u03C1\u03C6\u03C9\u03C3\u03B7, \u03BA\u03B1\u03B8\u03CE\u03C2 \u03C4\u03BF <code>Env</code> \u03C5\u03BB\u03BF\u03C0\u03BF\u03B9\u03B5\u03AF \u03C4\u03BF <code>From&lt;Into&lt;PathBuf&gt;&gt;</code>, \u03BF\u03C0\u03CC\u03C4\u03B5 \u03B1\u03C1\u03BA\u03B5\u03AF \u03B7 \u03B4\u03B9\u03B1\u03B4\u03C1\u03BF\u03BC\u03AE \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD <code>into()</code>, \u03BA\u03B1\u03B9 \u03B7 \u03C0\u03C1\u03BF\u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03B7 \u03B4\u03B9\u03B1\u03BC\u03CC\u03C1\u03C6\u03C9\u03C3\u03B7 \u03AD\u03C7\u03B5\u03B9 \u03C9\u03C2 \u03B5\u03BE\u03AE\u03C2.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
MDBX // \u038C\u03BD\u03BF\u03BC\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03AE\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD Env
Test // \u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD
}

fn main() -&gt; Result&lt;()&gt; {
// \u0395\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE \u03C4\u03BF\u03C5 \u03B1\u03C1\u03B9\u03B8\u03BC\u03BF\u03CD \u03AD\u03BA\u03B4\u03BF\u03C3\u03B7\u03C2 \u03C4\u03B7\u03C2 libmdbx
unsafe {
  println!(
    &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
    mdbx_version.major, mdbx_version.minor, mdbx_version.release
  );
}

// \u03A0\u03BF\u03BB\u03C5\u03BD\u03B7\u03BC\u03B1\u03C4\u03B9\u03BA\u03AE \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7 \u03BA\u03B1\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE
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
    sync_period : 65536, // \u03A3\u03B5 1/65536 \u03C4\u03BF\u03C5 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03BF\u03BB\u03AD\u03C0\u03C4\u03BF\u03C5
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
</code></pre></div><p><code>max_db</code> \u0391\u03C5\u03C4\u03AE \u03B7 \u03C1\u03CD\u03B8\u03BC\u03B9\u03C3\u03B7 \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03BC\u03B7\u03B4\u03B5\u03BD\u03B9\u03C3\u03C4\u03B5\u03AF \u03BA\u03AC\u03B8\u03B5 \u03C6\u03BF\u03C1\u03AC <a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">\u03C0\u03BF\u03C5</a> \u03B1\u03BD\u03BF\u03AF\u03B3\u03B5\u03B9 \u03B7 \u03B2\u03AC\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD, \u03B1\u03BB\u03BB\u03AC \u03B7 \u03C5\u03C0\u03B5\u03C1\u03B2\u03BF\u03BB\u03B9\u03BA\u03AE \u03C1\u03CD\u03B8\u03BC\u03B9\u03C3\u03B7 \u03B8\u03B1 \u03B5\u03C0\u03B7\u03C1\u03B5\u03AC\u03C3\u03B5\u03B9 \u03C4\u03B7\u03BD \u03B1\u03C0\u03CC\u03B4\u03BF\u03C3\u03B7, \u03B1\u03C0\u03BB\u03AC \u03C1\u03C5\u03B8\u03BC\u03AF\u03C3\u03C4\u03B5 \u03C4\u03B7\u03BD \u03CC\u03C0\u03C9\u03C2 \u03B1\u03C0\u03B1\u03B9\u03C4\u03B5\u03AF\u03C4\u03B1\u03B9.</p><p>\u0391\u03BD\u03B1\u03C4\u03C1\u03AD\u03BE\u03C4\u03B5 <a href="https://erthink.github.io/libmdbx/group__c__opening.html#ga9138119a904355d245777c4119534061" target="_blank" rel="noopener noreferrer">\u03C3\u03C4\u03B7\u03BD \u03C4\u03B5\u03BA\u03BC\u03B7\u03C1\u03AF\u03C9\u03C3\u03B7 \u03C4\u03B7\u03C2 libmdbx</a> \u03B3\u03B9\u03B1 \u03C4\u03B7 \u03C3\u03B7\u03BC\u03B1\u03C3\u03AF\u03B1 \u03C4\u03C9\u03BD \u03AC\u03BB\u03BB\u03C9\u03BD \u03C0\u03B1\u03C1\u03B1\u03BC\u03AD\u03C4\u03C1\u03C9\u03BD.</p><ol start="3"><li><p>\u03A4\u03BF \u03CC\u03BD\u03BF\u03BC\u03B1 \u03C4\u03B7\u03C2 \u03BC\u03B1\u03BA\u03C1\u03BF\u03B5\u03BD\u03C4\u03BF\u03BB\u03AE\u03C2 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE\u03C2 \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD, \u03B7 \u03C0\u03C1\u03BF\u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03B7 \u03C4\u03B9\u03BC\u03AE \u03B5\u03AF\u03BD\u03B1\u03B9 <code>r</code></p></li><li><p>\u03A4\u03BF \u03CC\u03BD\u03BF\u03BC\u03B1 \u03C4\u03B7\u03C2 \u03BC\u03B1\u03BA\u03C1\u03BF\u03B5\u03BD\u03C4\u03BF\u03BB\u03AE\u03C2 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE\u03C2 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD, \u03B7 \u03C0\u03C1\u03BF\u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03B7 \u03C4\u03B9\u03BC\u03AE \u03B5\u03AF\u03BD\u03B1\u03B9 <code>w</code></p></li></ol><p>\u039F\u03B9 \u03C0\u03B1\u03C1\u03AC\u03BC\u03B5\u03C4\u03C1\u03BF\u03B9 3 \u03BA\u03B1\u03B9 4 \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 \u03C0\u03B1\u03C1\u03B1\u03BB\u03B5\u03B9\u03C6\u03B8\u03BF\u03CD\u03BD \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03B7\u03B8\u03BF\u03CD\u03BD \u03BF\u03B9 \u03C0\u03C1\u03BF\u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03B5\u03C2 \u03C4\u03B9\u03BC\u03AD\u03C2.</p><h5 id="\u03BC\u03B1\u03BA\u03C1\u03BF\u03C3\u03BA\u03BF\u03C0\u03B9\u03BA\u03B7-\u03B5\u03C0\u03B5\u03BA\u03C4\u03B1\u03C3\u03B7" tabindex="-1"><a class="header-anchor" href="#\u03BC\u03B1\u03BA\u03C1\u03BF\u03C3\u03BA\u03BF\u03C0\u03B9\u03BA\u03B7-\u03B5\u03C0\u03B5\u03BA\u03C4\u03B1\u03C3\u03B7" aria-hidden="true">#</a> \u039C\u03B1\u03BA\u03C1\u03BF\u03C3\u03BA\u03BF\u03C0\u03B9\u03BA\u03AE \u03B5\u03C0\u03AD\u03BA\u03C4\u03B1\u03C3\u03B7</h5><p>\u0391\u03BD \u03B8\u03AD\u03BB\u03B5\u03C4\u03B5 \u03BD\u03B1 \u03B4\u03B5\u03AF\u03C4\u03B5 \u03C4\u03B9 \u03BA\u03AC\u03BD\u03B5\u03B9 \u03B7 \u03BC\u03B1\u03B3\u03B9\u03BA\u03AE \u03BC\u03B1\u03BA\u03C1\u03BF\u03B5\u03BD\u03C4\u03BF\u03BB\u03AE, \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF\u03C4\u03B5 \u03BD\u03B1 \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03C4\u03B5 \u03C4\u03B7 \u03BC\u03B1\u03BA\u03C1\u03BF\u03B5\u03BD\u03C4\u03BF\u03BB\u03AE <code>cargo expand --example 01</code> \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03B7\u03BD \u03B5\u03C0\u03B5\u03BA\u03C4\u03B5\u03AF\u03BD\u03B5\u03C4\u03B5, \u03B7 \u03BF\u03C0\u03BF\u03AF\u03B1 \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03C0\u03C1\u03CE\u03C4\u03B1 \u03BD\u03B1 \u03B5\u03B3\u03BA\u03B1\u03C4\u03B1\u03C3\u03C4\u03B1\u03B8\u03B5\u03AF. <code>cargo install cargo-expand</code></p><p>\u0388\u03BD\u03B1 \u03C3\u03C4\u03B9\u03B3\u03BC\u03B9\u03CC\u03C4\u03C5\u03C0\u03BF \u03BF\u03B8\u03CC\u03BD\u03B7\u03C2 \u03C4\u03BF\u03C5 \u03B5\u03BA\u03C4\u03B5\u03C4\u03B1\u03BC\u03AD\u03BD\u03BF\u03C5 \u03BA\u03CE\u03B4\u03B9\u03BA\u03B1 \u03C0\u03B1\u03C1\u03BF\u03C5\u03C3\u03B9\u03AC\u03B6\u03B5\u03C4\u03B1\u03B9 \u03C0\u03B1\u03C1\u03B1\u03BA\u03AC\u03C4\u03C9.</p><p><img src="//irmw.gumlet.io/PDzEtT.png" alt="PDzEtT"></p><h5 id="anyhow-\u03BA\u03B1\u03B9-lazy-static" tabindex="-1"><a class="header-anchor" href="#anyhow-\u03BA\u03B1\u03B9-lazy-static" aria-hidden="true">#</a> anyhow \u03BA\u03B1\u03B9 lazy_static</h5><p>\u0391\u03C0\u03CC \u03C4\u03BF \u03B5\u03BA\u03C4\u03B5\u03C4\u03B1\u03BC\u03AD\u03BD\u03BF \u03C3\u03C4\u03B9\u03B3\u03BC\u03B9\u03CC\u03C4\u03C5\u03C0\u03BF \u03BF\u03B8\u03CC\u03BD\u03B7\u03C2, \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF\u03C4\u03B5 \u03BD\u03B1 \u03B4\u03B5\u03AF\u03C4\u03B5 \u03CC\u03C4\u03B9 \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03BF\u03CD\u03BD\u03C4\u03B1\u03B9 \u03BF\u03B9 \u03B4\u03B9\u03B5\u03C5\u03B8\u03CD\u03BD\u03C3\u03B5\u03B9\u03C2 <code>lazy_static</code> \u03BA\u03B1\u03B9 <code>anyhow</code>.</p><p><a href="https://rustmagazine.github.io/rust_magazine_2021/chapter_2/rust_error_handle.html#thiserror--anyhow" target="_blank" rel="noopener noreferrer">anyhow</a> \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B7 \u03B2\u03B9\u03B2\u03BB\u03B9\u03BF\u03B8\u03AE\u03BA\u03B7 \u03C7\u03B5\u03B9\u03C1\u03B9\u03C3\u03BC\u03BF\u03CD \u03C3\u03C6\u03B1\u03BB\u03BC\u03AC\u03C4\u03C9\u03BD \u03B3\u03B9\u03B1 \u03C4\u03B7\u03BD rust.</p><p>\u0397 <a href="https://juejin.cn/post/7007336922817232927" target="_blank" rel="noopener noreferrer">lazy_static</a> \u03B5\u03AF\u03BD\u03B1\u03B9 \u03BC\u03B9\u03B1 \u03C3\u03C4\u03B1\u03C4\u03B9\u03BA\u03AE \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03AE \u03BC\u03B5 \u03BA\u03B1\u03B8\u03C5\u03C3\u03C4\u03B5\u03C1\u03B7\u03BC\u03AD\u03BD\u03B7 \u03B1\u03C1\u03C7\u03B9\u03BA\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 <a href="https://juejin.cn/post/7007336922817232927" target="_blank" rel="noopener noreferrer">.</a></p><p>\u0391\u03C5\u03C4\u03AD\u03C2 \u03BF\u03B9 \u03B4\u03CD\u03BF \u03B2\u03B9\u03B2\u03BB\u03B9\u03BF\u03B8\u03AE\u03BA\u03B5\u03C2 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C0\u03BF\u03BB\u03CD \u03BA\u03BF\u03B9\u03BD\u03AD\u03C2 \u03BA\u03B1\u03B9 \u03B4\u03B5\u03BD \u03B8\u03B1 \u03B5\u03C0\u03B5\u03BA\u03C4\u03B1\u03B8\u03CE \u03C3\u03B5 \u03B1\u03C5\u03C4\u03AD\u03C2.</p><h5 id="\u03B7-\u03BC\u03B1\u03BA\u03C1\u03BF\u03B5\u03BD\u03C4\u03BF\u03BB\u03B7-mdbx" tabindex="-1"><a class="header-anchor" href="#\u03B7-\u03BC\u03B1\u03BA\u03C1\u03BF\u03B5\u03BD\u03C4\u03BF\u03BB\u03B7-mdbx" aria-hidden="true">#</a> \u0397 \u03BC\u03B1\u03BA\u03C1\u03BF\u03B5\u03BD\u03C4\u03BF\u03BB\u03AE mdbx!</h5><p><a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html" target="_blank" rel="noopener noreferrer"><code>mdbx!</code></a> \u03B5\u03AF\u03BD\u03B1\u03B9 \u03BC\u03B9\u03B1 <a href="https://mp.weixin.qq.com/s/YT_HNFDCQ_IyocvBkRNJnA" target="_blank" rel="noopener noreferrer">\u03BC\u03B1\u03BA\u03C1\u03BF\u03B5\u03BD\u03C4\u03BF\u03BB\u03AE \u03B4\u03B9\u03B1\u03B4\u03B9\u03BA\u03B1\u03C3\u03AF\u03B1\u03C2</a>.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // \u038C\u03BD\u03BF\u03BC\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03AE\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD Env
  Test // \u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0395\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE \u03C4\u03BF\u03C5 \u03B1\u03C1\u03B9\u03B8\u03BC\u03BF\u03CD \u03AD\u03BA\u03B4\u03BF\u03C3\u03B7\u03C2 \u03C4\u03B7\u03C2 libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u03A0\u03BF\u03BB\u03C5\u03BD\u03B7\u03BC\u03B1\u03C4\u03B9\u03BA\u03AE \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7 \u03BA\u03B1\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE
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
      sync_period : 65536, // \u03A3\u03B5 1/65536 \u03C4\u03BF\u03C5 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03BF\u03BB\u03AD\u03C0\u03C4\u03BF\u03C5
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
 MDBX // \u038C\u03BD\u03BF\u03BC\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03AE\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD Env
 Test // \u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD
}
</code></pre></div><p>\u0397 \u03C0\u03C1\u03CE\u03C4\u03B7 \u03B3\u03C1\u03B1\u03BC\u03BC\u03AE \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C4\u03BF \u03CC\u03BD\u03BF\u03BC\u03B1 \u03C4\u03B7\u03C2 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03AE\u03C2 \u03C4\u03BF\u03C5 \u03C0\u03B5\u03C1\u03B9\u03B2\u03AC\u03BB\u03BB\u03BF\u03BD\u03C4\u03BF\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD</p><p>\u0397 \u03B4\u03B5\u03CD\u03C4\u03B5\u03C1\u03B7 \u03B3\u03C1\u03B1\u03BC\u03BC\u03AE \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C4\u03BF \u03CC\u03BD\u03BF\u03BC\u03B1 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD</p><p>\u039C\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 \u03C5\u03C0\u03AC\u03C1\u03C7\u03BF\u03C5\u03BD \u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03B5\u03C2 \u03B1\u03C0\u03CC \u03BC\u03AF\u03B1 \u03B2\u03AC\u03C3\u03B5\u03B9\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD, \u03BC\u03AF\u03B1 \u03B3\u03C1\u03B1\u03BC\u03BC\u03AE \u03B3\u03B9\u03B1 \u03BA\u03AC\u03B8\u03B5</p><h5 id="\u03BD\u03B7\u03BC\u03B1\u03C4\u03B1-\u03BA\u03B1\u03B9-\u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03B5\u03C2" tabindex="-1"><a class="header-anchor" href="#\u03BD\u03B7\u03BC\u03B1\u03C4\u03B1-\u03BA\u03B1\u03B9-\u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03B5\u03C2" aria-hidden="true">#</a> \u039D\u03AE\u03BC\u03B1\u03C4\u03B1 \u03BA\u03B1\u03B9 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AD\u03C2</h5><p>\u039F \u03C0\u03B1\u03C1\u03B1\u03C0\u03AC\u03BD\u03C9 \u03BA\u03CE\u03B4\u03B9\u03BA\u03B1\u03C2 \u03B5\u03C0\u03B9\u03B4\u03B5\u03B9\u03BA\u03BD\u03CD\u03B5\u03B9 \u03C4\u03B7\u03BD \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7 \u03BA\u03B1\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE \u03BC\u03B5 \u03C0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AC \u03BD\u03AE\u03BC\u03B1\u03C4\u03B1.</p><p>\u0395\u03AF\u03BD\u03B1\u03B9 \u03C3\u03B7\u03BC\u03B1\u03BD\u03C4\u03B9\u03BA\u03CC \u03BD\u03B1 \u03C3\u03B7\u03BC\u03B5\u03B9\u03C9\u03B8\u03B5\u03AF \u03CC\u03C4\u03B9 \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 <strong>\u03BC\u03CC\u03BD\u03BF \u03BC\u03AF\u03B1 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE \u03C3\u03C4\u03BF \u03AF\u03B4\u03B9\u03BF \u03BD\u03AE\u03BC\u03B1 \u03B1\u03BD\u03AC \u03C0\u03AC\u03C3\u03B1 \u03C3\u03C4\u03B9\u03B3\u03BC\u03AE, \u03B5\u03AC\u03BD \u03AD\u03BD\u03B1 \u03BD\u03AE\u03BC\u03B1 \u03AD\u03C7\u03B5\u03B9 \u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03B5\u03C2 \u03B1\u03C0\u03CC \u03BC\u03AF\u03B1 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AD\u03C2 \u03B1\u03BD\u03BF\u03B9\u03C7\u03C4\u03AD\u03C2, \u03C4\u03BF \u03C0\u03C1\u03CC\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1 \u03B8\u03B1 \u03BA\u03B1\u03C4\u03B1\u03C1\u03C1\u03B5\u03CD\u03C3\u03B5\u03B9</strong>.</p><p>\u0397 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE \u03B8\u03B1 \u03B4\u03B5\u03C3\u03BC\u03B5\u03C5\u03C4\u03B5\u03AF \u03C3\u03C4\u03BF \u03C4\u03AD\u03BB\u03BF\u03C2 \u03C4\u03BF\u03C5 \u03C0\u03B5\u03B4\u03AF\u03BF\u03C5 \u03B5\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03AE\u03C2.</p><h5 id="\u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C3\u03B7-\u03BA\u03B1\u03B9-\u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03B7-\u03B4\u03C5\u03B1\u03B4\u03B9\u03BA\u03C9\u03BD-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD" tabindex="-1"><a class="header-anchor" href="#\u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C3\u03B7-\u03BA\u03B1\u03B9-\u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03B7-\u03B4\u03C5\u03B1\u03B4\u03B9\u03BA\u03C9\u03BD-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD" aria-hidden="true">#</a> \u0391\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7 \u03BA\u03B1\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE \u03B4\u03C5\u03B1\u03B4\u03B9\u03BA\u03CE\u03BD \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD</h5><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // \u038C\u03BD\u03BF\u03BC\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03AE\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD Env
  Test // \u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0395\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE \u03C4\u03BF\u03C5 \u03B1\u03C1\u03B9\u03B8\u03BC\u03BF\u03CD \u03AD\u03BA\u03B4\u03BF\u03C3\u03B7\u03C2 \u03C4\u03B7\u03C2 libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u03A0\u03BF\u03BB\u03C5\u03BD\u03B7\u03BC\u03B1\u03C4\u03B9\u03BA\u03AE \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7 \u03BA\u03B1\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE
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
      sync_period : 65536, // \u03A3\u03B5 1/65536 \u03C4\u03BF\u03C5 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03BF\u03BB\u03AD\u03C0\u03C4\u03BF\u03C5
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
 MDBX // \u038C\u03BD\u03BF\u03BC\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03AE\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD Env
 Test // \u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD
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
</code></pre></div><p><code>set</code> \u03B5\u03AF\u03BD\u03B1\u03B9 \u03BC\u03B9\u03B1 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE, <code>get</code> \u03B5\u03AF\u03BD\u03B1\u03B9 \u03BC\u03B9\u03B1 \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7, \u03BA\u03B1\u03B9 \u03BA\u03AC\u03B8\u03B5 \u03B1\u03BD\u03C4\u03B9\u03BA\u03B5\u03AF\u03BC\u03B5\u03BD\u03BF \u03C0\u03BF\u03C5 \u03C5\u03BB\u03BF\u03C0\u03BF\u03B9\u03B5\u03AF \u03C4\u03BF <a href="https://doc.rust-lang.org/std/convert/trait.AsRef.html" target="_blank" rel="noopener noreferrer"><code>AsRef&lt;[u8]&gt;</code></a> \u03B1\u03BD\u03C4\u03B9\u03BA\u03B5\u03AF\u03BC\u03B5\u03BD\u03BF \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF \u03C3\u03C4\u03B7 \u03B2\u03AC\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD.</p><p><code>get</code> \u0391\u03C5\u03C4\u03CC \u03C0\u03BF\u03C5 \u03B2\u03B3\u03B1\u03AF\u03BD\u03B5\u03B9 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C4\u03BF <code>Ok(Some(Bin([6])))</code>\u03C4\u03BF \u03BF\u03C0\u03BF\u03AF\u03BF \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03BC\u03B5\u03C4\u03B1\u03C4\u03C1\u03B1\u03C0\u03B5\u03AF \u03C3\u03B5 <code>&amp;[u8]</code>.</p><h3 id="\u03C0\u03B1\u03C1\u03B1\u03B4\u03B5\u03B9\u03B3\u03BC\u03B1-2-\u03C4\u03C5\u03C0\u03BF\u03B9-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD-\u03C3\u03B7\u03BC\u03B1\u03B9\u03B5\u03C2-\u03B2\u03B1\u03C3\u03B7\u03C2-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD-\u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03B7-\u03B4\u03B9\u03B1\u03C3\u03C7\u03B9\u03C3\u03B7" tabindex="-1"><a class="header-anchor" href="#\u03C0\u03B1\u03C1\u03B1\u03B4\u03B5\u03B9\u03B3\u03BC\u03B1-2-\u03C4\u03C5\u03C0\u03BF\u03B9-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD-\u03C3\u03B7\u03BC\u03B1\u03B9\u03B5\u03C2-\u03B2\u03B1\u03C3\u03B7\u03C2-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD-\u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03B7-\u03B4\u03B9\u03B1\u03C3\u03C7\u03B9\u03C3\u03B7" aria-hidden="true">#</a> \u03A0\u03B1\u03C1\u03AC\u03B4\u03B5\u03B9\u03B3\u03BC\u03B1 2: \u03A4\u03CD\u03C0\u03BF\u03B9 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD, \u03C3\u03B7\u03BC\u03B1\u03AF\u03B5\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD, \u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE, \u03B4\u03B9\u03AC\u03C3\u03C7\u03B9\u03C3\u03B7</h3><p>\u0391\u03C2 \u03B4\u03BF\u03CD\u03BC\u03B5 \u03C4\u03BF \u03B4\u03B5\u03CD\u03C4\u03B5\u03C1\u03BF \u03C0\u03B1\u03C1\u03AC\u03B4\u03B5\u03B9\u03B3\u03BC\u03B1 <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a>:</p><p>\u03A3\u03B5 \u03B1\u03C5\u03C4\u03CC \u03C4\u03BF \u03C0\u03B1\u03C1\u03AC\u03B4\u03B5\u03B9\u03B3\u03BC\u03B1, \u03C4\u03BF <code>env_rw!</code> \u03C0\u03B1\u03C1\u03B1\u03BB\u03B5\u03AF\u03C0\u03B5\u03C4\u03B1\u03B9 \u03BA\u03B1\u03B9 \u03C4\u03BF \u03C4\u03C1\u03AF\u03C4\u03BF \u03BA\u03B1\u03B9 \u03C4\u03BF \u03C4\u03AD\u03C4\u03B1\u03C1\u03C4\u03BF \u03CC\u03C1\u03B9\u03C3\u03BC\u03B1 ( <code>r</code>, <code>w</code>) \u03C0\u03B1\u03C1\u03B1\u03BB\u03B5\u03AF\u03C0\u03BF\u03BD\u03C4\u03B1\u03B9.</p><h4 id="\u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C2-1" tabindex="-1"><a class="header-anchor" href="#\u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C2-1" aria-hidden="true">#</a> \u039A\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // \u038C\u03BD\u03BF\u03BC\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03AE\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD Env
  Test // \u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0395\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE \u03C4\u03BF\u03C5 \u03B1\u03C1\u03B9\u03B8\u03BC\u03BF\u03CD \u03AD\u03BA\u03B4\u03BF\u03C3\u03B7\u03C2 \u03C4\u03B7\u03C2 libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u03A0\u03BF\u03BB\u03C5\u03BD\u03B7\u03BC\u03B1\u03C4\u03B9\u03BA\u03AE \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7 \u03BA\u03B1\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE
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
      sync_period : 65536, // \u03A3\u03B5 1/65536 \u03C4\u03BF\u03C5 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03BF\u03BB\u03AD\u03C0\u03C4\u03BF\u03C5
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
 MDBX // \u038C\u03BD\u03BF\u03BC\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03AE\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD Env
 Test // \u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD
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
  MDBX // \u039F\u03BD\u03CC\u03BC\u03B1\u03C4\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03CE\u03BD \u03B3\u03B9\u03B1 \u03C4\u03B7 \u03B2\u03AC\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD ENV
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
  // \u0393\u03C1\u03AE\u03B3\u03BF\u03C1\u03B7 \u03B3\u03C1\u03B1\u03C6\u03AE
  w!(Test1.set [2, 3],[4, 5]);

  // \u0393\u03C1\u03AE\u03B3\u03BF\u03C1\u03B7 \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7
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

  // \u03A0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AD\u03C2 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B5\u03C2 \u03C3\u03B5 \u03C0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AD\u03C2 \u03B2\u03AC\u03C3\u03B5\u03B9\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03C3\u03C4\u03B7\u03BD \u03AF\u03B4\u03B9\u03B1 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE
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

    // \u0397 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE \u03B8\u03B1 \u03B4\u03B5\u03C3\u03BC\u03B5\u03C5\u03C4\u03B5\u03AF \u03C3\u03C4\u03BF \u03C4\u03AD\u03BB\u03BF\u03C2 \u03C4\u03BF\u03C5 \u03C0\u03B5\u03B4\u03AF\u03BF\u03C5 \u03B5\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03AE\u03C2
  }

  Ok(())
}
</code></pre></div><h4 id="\u03B5\u03BA\u03C4\u03B5\u03BB\u03B5\u03C3\u03C4\u03B5-\u03C4\u03B7\u03BD-\u03B5\u03BE\u03BF\u03B4\u03BF-1" tabindex="-1"><a class="header-anchor" href="#\u03B5\u03BA\u03C4\u03B5\u03BB\u03B5\u03C3\u03C4\u03B5-\u03C4\u03B7\u03BD-\u03B5\u03BE\u03BF\u03B4\u03BF-1" aria-hidden="true">#</a> \u0395\u03BA\u03C4\u03B5\u03BB\u03AD\u03C3\u03C4\u03B5 \u03C4\u03B7\u03BD \u03AD\u03BE\u03BF\u03B4\u03BF</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/02.mdb

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
</code></pre></div><h4 id="\u03B3\u03C1\u03B7\u03B3\u03BF\u03C1\u03B5\u03C2-\u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C3\u03B5\u03B9\u03C2-\u03BA\u03B1\u03B9-\u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03B5\u03C2" tabindex="-1"><a class="header-anchor" href="#\u03B3\u03C1\u03B7\u03B3\u03BF\u03C1\u03B5\u03C2-\u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C3\u03B5\u03B9\u03C2-\u03BA\u03B1\u03B9-\u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03B5\u03C2" aria-hidden="true">#</a> \u0393\u03C1\u03AE\u03B3\u03BF\u03C1\u03B5\u03C2 \u03B1\u03BD\u03B1\u03B3\u03BD\u03CE\u03C3\u03B5\u03B9\u03C2 \u03BA\u03B1\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AD\u03C2</h4><p>\u0391\u03BD \u03B8\u03AD\u03BB\u03BF\u03C5\u03BC\u03B5 \u03B1\u03C0\u03BB\u03CE\u03C2 \u03BD\u03B1 \u03B4\u03B9\u03B1\u03B2\u03AC\u03C3\u03BF\u03C5\u03BC\u03B5 \u03AE \u03BD\u03B1 \u03B3\u03C1\u03AC\u03C8\u03BF\u03C5\u03BC\u03B5 \u03BC\u03B9\u03B1 \u03BC\u03CC\u03BD\u03BF \u03B3\u03C1\u03B1\u03BC\u03BC\u03AE \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD, \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BC\u03B5 \u03BD\u03B1 \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03BF\u03C5\u03BC\u03B5 \u03C4\u03B7 \u03C3\u03C5\u03BD\u03C4\u03B1\u03BA\u03C4\u03B9\u03BA\u03AE \u03B6\u03AC\u03C7\u03B1\u03C1\u03B7 \u03BC\u03B9\u03B1\u03C2 \u03BC\u03B1\u03BA\u03C1\u03BF\u03B5\u03BD\u03C4\u03BF\u03BB\u03AE\u03C2.</p><p>\u0394\u03B9\u03B1\u03B2\u03AC\u03C3\u03C4\u03B5 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1</p><div class="language-text ext-text"><pre class="language-text"><code>r!(Test1.get [2, 3])
</code></pre></div><p>\u0393\u03C1\u03AC\u03C6\u03BF\u03BD\u03C4\u03B1\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // \u038C\u03BD\u03BF\u03BC\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03AE\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD Env
  Test // \u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0395\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE \u03C4\u03BF\u03C5 \u03B1\u03C1\u03B9\u03B8\u03BC\u03BF\u03CD \u03AD\u03BA\u03B4\u03BF\u03C3\u03B7\u03C2 \u03C4\u03B7\u03C2 libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u03A0\u03BF\u03BB\u03C5\u03BD\u03B7\u03BC\u03B1\u03C4\u03B9\u03BA\u03AE \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7 \u03BA\u03B1\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE
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
      sync_period : 65536, // \u03A3\u03B5 1/65536 \u03C4\u03BF\u03C5 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03BF\u03BB\u03AD\u03C0\u03C4\u03BF\u03C5
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
 MDBX // \u038C\u03BD\u03BF\u03BC\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03AE\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD Env
 Test // \u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD
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
  MDBX // \u039F\u03BD\u03CC\u03BC\u03B1\u03C4\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03CE\u03BD \u03B3\u03B9\u03B1 \u03C4\u03B7 \u03B2\u03AC\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD ENV
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
  // \u0393\u03C1\u03AE\u03B3\u03BF\u03C1\u03B7 \u03B3\u03C1\u03B1\u03C6\u03AE
  w!(Test1.set [2, 3],[4, 5]);

  // \u0393\u03C1\u03AE\u03B3\u03BF\u03C1\u03B7 \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7
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

  // \u03A0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AD\u03C2 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B5\u03C2 \u03C3\u03B5 \u03C0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AD\u03C2 \u03B2\u03AC\u03C3\u03B5\u03B9\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03C3\u03C4\u03B7\u03BD \u03AF\u03B4\u03B9\u03B1 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE
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

    // \u0397 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE \u03B8\u03B1 \u03B4\u03B5\u03C3\u03BC\u03B5\u03C5\u03C4\u03B5\u03AF \u03C3\u03C4\u03BF \u03C4\u03AD\u03BB\u03BF\u03C2 \u03C4\u03BF\u03C5 \u03C0\u03B5\u03B4\u03AF\u03BF\u03C5 \u03B5\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03AE\u03C2
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
</code></pre></div><p>\u038C\u03BB\u03B1 \u03C3\u03B5 \u03BC\u03AF\u03B1 \u03B3\u03C1\u03B1\u03BC\u03BC\u03AE, \u03CC\u03C0\u03C9\u03C2 \u03B3\u03C1\u03AC\u03C6\u03B5\u03C4\u03B1\u03B9 \u03C3\u03C4\u03BF <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a>.</p><h4 id="\u03C4\u03C5\u03C0\u03BF\u03B9-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD" tabindex="-1"><a class="header-anchor" href="#\u03C4\u03C5\u03C0\u03BF\u03B9-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD" aria-hidden="true">#</a> \u03A4\u03CD\u03C0\u03BF\u03B9 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD</h4><p>\u03A3\u03C4\u03BF examples/02 <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">.</a> rs, \u03BF \u03BF\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03AD\u03C7\u03B5\u03B9 \u03C4\u03B7\u03BD \u03B5\u03BE\u03AE\u03C2 \u03BC\u03BF\u03C1\u03C6\u03AE :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // \u038C\u03BD\u03BF\u03BC\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03AE\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD Env
  Test // \u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0395\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE \u03C4\u03BF\u03C5 \u03B1\u03C1\u03B9\u03B8\u03BC\u03BF\u03CD \u03AD\u03BA\u03B4\u03BF\u03C3\u03B7\u03C2 \u03C4\u03B7\u03C2 libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u03A0\u03BF\u03BB\u03C5\u03BD\u03B7\u03BC\u03B1\u03C4\u03B9\u03BA\u03AE \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7 \u03BA\u03B1\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE
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
      sync_period : 65536, // \u03A3\u03B5 1/65536 \u03C4\u03BF\u03C5 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03BF\u03BB\u03AD\u03C0\u03C4\u03BF\u03C5
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
 MDBX // \u038C\u03BD\u03BF\u03BC\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03AE\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD Env
 Test // \u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD
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
  MDBX // \u039F\u03BD\u03CC\u03BC\u03B1\u03C4\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03CE\u03BD \u03B3\u03B9\u03B1 \u03C4\u03B7 \u03B2\u03AC\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD ENV
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
  // \u0393\u03C1\u03AE\u03B3\u03BF\u03C1\u03B7 \u03B3\u03C1\u03B1\u03C6\u03AE
  w!(Test1.set [2, 3],[4, 5]);

  // \u0393\u03C1\u03AE\u03B3\u03BF\u03C1\u03B7 \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7
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

  // \u03A0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AD\u03C2 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B5\u03C2 \u03C3\u03B5 \u03C0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AD\u03C2 \u03B2\u03AC\u03C3\u03B5\u03B9\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03C3\u03C4\u03B7\u03BD \u03AF\u03B4\u03B9\u03B1 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE
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

    // \u0397 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE \u03B8\u03B1 \u03B4\u03B5\u03C3\u03BC\u03B5\u03C5\u03C4\u03B5\u03AF \u03C3\u03C4\u03BF \u03C4\u03AD\u03BB\u03BF\u03C2 \u03C4\u03BF\u03C5 \u03C0\u03B5\u03B4\u03AF\u03BF\u03C5 \u03B5\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03AE\u03C2
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
</code></pre></div><p>\u03CC\u03C0\u03BF\u03C5 <code>key</code> \u03BA\u03B1\u03B9 <code>val</code> \u03BF\u03C1\u03AF\u03B6\u03BF\u03C5\u03BD \u03C4\u03BF\u03C5\u03C2 \u03C4\u03CD\u03C0\u03BF\u03C5\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03B3\u03B9\u03B1 \u03C4\u03B1 \u03BA\u03BB\u03B5\u03B9\u03B4\u03B9\u03AC \u03BA\u03B1\u03B9 \u03C4\u03B9\u03C2 \u03C4\u03B9\u03BC\u03AD\u03C2 \u03B1\u03BD\u03C4\u03AF\u03C3\u03C4\u03BF\u03B9\u03C7\u03B1.</p><p>\u0391\u03BD \u03C0\u03C1\u03BF\u03C3\u03C0\u03B1\u03B8\u03AE\u03C3\u03B5\u03C4\u03B5 \u03BD\u03B1 \u03B3\u03C1\u03AC\u03C8\u03B5\u03C4\u03B5 \u03AD\u03BD\u03B1\u03BD \u03C4\u03CD\u03C0\u03BF \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03C0\u03BF\u03C5 \u03B4\u03B5\u03BD \u03C4\u03B1\u03B9\u03C1\u03B9\u03AC\u03B6\u03B5\u03B9 \u03BC\u03B5 \u03C4\u03BF\u03BD \u03C4\u03CD\u03C0\u03BF \u03C0\u03BF\u03C5 \u03AD\u03C7\u03B5\u03B9 \u03BF\u03C1\u03B9\u03C3\u03C4\u03B5\u03AF, \u03B8\u03B1 \u03B1\u03BD\u03B1\u03C6\u03B5\u03C1\u03B8\u03B5\u03AF \u03AD\u03BD\u03B1 \u03C3\u03C6\u03AC\u03BB\u03BC\u03B1, \u03CC\u03C0\u03C9\u03C2 \u03C6\u03B1\u03AF\u03BD\u03B5\u03C4\u03B1\u03B9 \u03C3\u03C4\u03BF \u03C0\u03B1\u03C1\u03B1\u03BA\u03AC\u03C4\u03C9 \u03C3\u03C4\u03B9\u03B3\u03BC\u03B9\u03CC\u03C4\u03C5\u03C0\u03BF :</p><p><img src="//irmw.gumlet.io/4rFTC6.png" alt=""></p><p>\u039F \u03C0\u03C1\u03BF\u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03BF\u03C2 \u03C4\u03CD\u03C0\u03BF\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03B5\u03AF\u03BD\u03B1\u03B9 <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Bin.html" target="_blank" rel="noopener noreferrer"><code>Bin</code></a> , \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03BF\u03CD\u03BD \u03BF\u03C0\u03BF\u03B9\u03B1\u03B4\u03AE\u03C0\u03BF\u03C4\u03B5 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03C0\u03BF\u03C5 \u03C5\u03BB\u03BF\u03C0\u03BF\u03B9\u03BF\u03CD\u03BD \u03C4\u03BF <code>AsRef&lt;[u8]&gt;</code>.</p><p>\u0395\u03AC\u03BD \u03C4\u03BF \u03BA\u03BB\u03B5\u03B9\u03B4\u03AF \u03AE \u03B7 \u03C4\u03B9\u03BC\u03AE \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC <code>utf8</code>, \u03BF \u03C4\u03CD\u03C0\u03BF\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03BF\u03C1\u03B9\u03C3\u03C4\u03B5\u03AF \u03C3\u03B5 <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Str.html" target="_blank" rel="noopener noreferrer"><code>Str</code></a> .</p><p>\u0397 <a href="https://doc.rust-lang.org/std/ops/trait.Deref.html" target="_blank" rel="noopener noreferrer">\u03B1\u03C0\u03BF\u03B4\u03AD\u03C3\u03BC\u03B5\u03C5\u03C3\u03B7 \u03C4\u03BF\u03C5</a> <code>Str</code> \u03B8\u03B1 \u03B5\u03C0\u03B9\u03C3\u03C4\u03C1\u03AD\u03C8\u03B5\u03B9 \u03AD\u03BD\u03B1 \u03B1\u03BB\u03C6\u03B1\u03C1\u03B9\u03B8\u03BC\u03B7\u03C4\u03B9\u03BA\u03CC, \u03C0\u03B1\u03C1\u03CC\u03BC\u03BF\u03B9\u03BF \u03BC\u03B5 \u03C4\u03BF <code>let k:&amp;str = &amp;k;</code>.</p><p>\u0395\u03C0\u03B9\u03C0\u03BB\u03AD\u03BF\u03BD, \u03C4\u03BF <code>Str</code> \u03B5\u03C6\u03B1\u03C1\u03BC\u03CC\u03B6\u03B5\u03B9 \u03B5\u03C0\u03AF\u03C3\u03B7\u03C2 <a href="https://doc.rust-lang.org/std/fmt/trait.Display.html" target="_blank" rel="noopener noreferrer"><code>std::fmt::Display</code></a> , \u03C4\u03BF <code>println!(&quot;{}&quot;,k)</code> \u03B8\u03B1 \u03B5\u03BE\u03AC\u03B3\u03B5\u03B9 \u03BC\u03B9\u03B1 \u03B1\u03BD\u03B1\u03B3\u03BD\u03CE\u03C3\u03B9\u03BC\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC.</p><h5 id="\u03C0\u03C1\u03BF\u03BA\u03B1\u03B8\u03BF\u03C1\u03B9\u03C3\u03BC\u03B5\u03BD\u03BF\u03B9-\u03C4\u03C5\u03C0\u03BF\u03B9-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD" tabindex="-1"><a class="header-anchor" href="#\u03C0\u03C1\u03BF\u03BA\u03B1\u03B8\u03BF\u03C1\u03B9\u03C3\u03BC\u03B5\u03BD\u03BF\u03B9-\u03C4\u03C5\u03C0\u03BF\u03B9-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD" aria-hidden="true">#</a> \u03A0\u03C1\u03BF\u03BA\u03B1\u03B8\u03BF\u03C1\u03B9\u03C3\u03BC\u03AD\u03BD\u03BF\u03B9 \u03C4\u03CD\u03C0\u03BF\u03B9 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD</h5><p>\u0395\u03BA\u03C4\u03CC\u03C2 \u03B1\u03C0\u03CC \u03C4\u03B1 <code>Str</code> \u03BA\u03B1\u03B9 <code>Bin</code>, \u03C4\u03BF \u03C0\u03B5\u03C1\u03B9\u03C4\u03CD\u03BB\u03B9\u03B3\u03BC\u03B1 \u03B4\u03B9\u03B1\u03B8\u03AD\u03C4\u03B5\u03B9 \u03B5\u03C0\u03AF\u03C3\u03B7\u03C2 \u03C5\u03C0\u03BF\u03C3\u03C4\u03AE\u03C1\u03B9\u03BE\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03B3\u03B9\u03B1 <a href="https://docs.rs/mdbx/latest/src/mdbx/type.rs.html#48" target="_blank" rel="noopener noreferrer">usize, u128, u64, u32, u16, u8, isize, i128, i64, i32, i16, i8, f32, f64</a>.</p><h4 id="\u03C3\u03B7\u03BC\u03B1\u03B9\u03B5\u03C2-\u03B2\u03B1\u03C3\u03B7\u03C2-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD" tabindex="-1"><a class="header-anchor" href="#\u03C3\u03B7\u03BC\u03B1\u03B9\u03B5\u03C2-\u03B2\u03B1\u03C3\u03B7\u03C2-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD" aria-hidden="true">#</a> \u03A3\u03B7\u03BC\u03B1\u03AF\u03B5\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD</h4><p>\u039C\u03C0\u03BF\u03C1\u03B5\u03AF\u03C4\u03B5 \u03BD\u03B1 \u03B4\u03B5\u03AF\u03C4\u03B5 \u03C4\u03B9\u03C2 \u03C3\u03B7\u03BC\u03B1\u03AF\u03B5\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03C0\u03BF\u03C5 \u03C0\u03C1\u03BF\u03C3\u03C4\u03AF\u03B8\u03B5\u03BD\u03C4\u03B1\u03B9 \u03C3\u03C4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03C3\u03C4\u03BF <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a> \u03C3\u03C4\u03B7 \u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 <code>Test4</code>. <code>flag DUPSORT</code></p><p>\u0397 \u03B2\u03AC\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD libmdbx \u03AD\u03C7\u03B5\u03B9 \u03BC\u03B9\u03B1 \u03C3\u03B5\u03B9\u03C1\u03AC \u03B1\u03C0\u03CC \u03C3\u03B7\u03BC\u03B1\u03AF\u03B5\u03C2 ( <a href="https://erthink.github.io/libmdbx/group__c__dbi.html#gafe3bddb297b3ab0d828a487c5726f76a" target="_blank" rel="noopener noreferrer"><code>MDBX_db_flags_t</code></a> ) \u03C0\u03BF\u03C5 \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 \u03BF\u03C1\u03B9\u03C3\u03C4\u03BF\u03CD\u03BD.</p><ul><li>\u03A4\u03BF REVERSEKEY \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03B5\u03AF \u03B1\u03BD\u03C4\u03AF\u03C3\u03C4\u03C1\u03BF\u03C6\u03B7 \u03C3\u03CD\u03B3\u03BA\u03C1\u03B9\u03C3\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03CE\u03BD \u03B3\u03B9\u03B1 \u03C4\u03B1 \u03BA\u03BB\u03B5\u03B9\u03B4\u03B9\u03AC. (\u03C7\u03C1\u03AE\u03C3\u03B9\u03BC\u03BF \u03CC\u03C4\u03B1\u03BD \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03BF\u03CD\u03BD\u03C4\u03B1\u03B9 \u03BC\u03B9\u03BA\u03C1\u03BF\u03AF \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C0\u03BF\u03B9\u03B7\u03BC\u03AD\u03BD\u03BF\u03B9 \u03B1\u03C1\u03B9\u03B8\u03BC\u03BF\u03AF \u03C9\u03C2 \u03BA\u03BB\u03B5\u03B9\u03B4\u03B9\u03AC)</li><li>\u03A4\u03BF DUPSORT \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03B5\u03AF \u03C4\u03B1\u03BE\u03B9\u03BD\u03BF\u03BC\u03B7\u03BC\u03AD\u03BD\u03B1 \u03B1\u03BD\u03C4\u03AF\u03B3\u03C1\u03B1\u03C6\u03B1, \u03B4\u03B7\u03BB\u03B1\u03B4\u03AE \u03B5\u03C0\u03B9\u03C4\u03C1\u03AD\u03C0\u03B5\u03B9 \u03C0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AD\u03C2 \u03C4\u03B9\u03BC\u03AD\u03C2 \u03B3\u03B9\u03B1 \u03AD\u03BD\u03B1 \u03BA\u03BB\u03B5\u03B9\u03B4\u03AF.</li><li>INTEGERKEY \u039C\u03B7\u03C4\u03C1\u03B9\u03BA\u03CC \u03B1\u03C1\u03B9\u03B8\u03BC\u03B7\u03C4\u03B9\u03BA\u03CC \u03BA\u03BB\u03B5\u03B9\u03B4\u03AF \u03C3\u03B5 \u03B4\u03B9\u03AC\u03C4\u03B1\u03BE\u03B7 byte uint32_t \u03AE uint64_t. \u03A4\u03B1 \u03BA\u03BB\u03B5\u03B9\u03B4\u03B9\u03AC \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03AD\u03C7\u03BF\u03C5\u03BD \u03C4\u03BF \u03AF\u03B4\u03B9\u03BF \u03BC\u03AD\u03B3\u03B5\u03B8\u03BF\u03C2 \u03BA\u03B1\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B5\u03C5\u03B8\u03C5\u03B3\u03C1\u03B1\u03BC\u03BC\u03B9\u03C3\u03BC\u03AD\u03BD\u03B1 \u03CC\u03C4\u03B1\u03BD \u03C0\u03B5\u03C1\u03BD\u03BF\u03CD\u03BD \u03C9\u03C2 \u03BF\u03C1\u03AF\u03C3\u03BC\u03B1\u03C4\u03B1.</li><li>DUPFIXED \u03A4\u03BF \u03BC\u03AD\u03B3\u03B5\u03B8\u03BF\u03C2 \u03C4\u03C9\u03BD \u03C4\u03B9\u03BC\u03CE\u03BD \u03C4\u03C9\u03BD \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C4\u03BF \u03AF\u03B4\u03B9\u03BF \u03B5\u03AC\u03BD \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03B5\u03AF\u03C4\u03B1\u03B9 DUPSORT (\u03B5\u03C0\u03B9\u03C4\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BC\u03B9\u03B1 \u03B3\u03C1\u03AE\u03B3\u03BF\u03C1\u03B7 \u03BA\u03B1\u03C4\u03B1\u03BC\u03AD\u03C4\u03C1\u03B7\u03C3\u03B7 \u03C4\u03BF\u03C5 \u03B1\u03C1\u03B9\u03B8\u03BC\u03BF\u03CD \u03C4\u03C9\u03BD \u03C4\u03B9\u03BC\u03CE\u03BD).</li><li>\u039F\u03B9 DUPSORT \u03BA\u03B1\u03B9 DUPFIXED \u03B1\u03C0\u03B1\u03B9\u03C4\u03BF\u03CD\u03BD\u03C4\u03B1\u03B9 \u03B3\u03B9\u03B1 \u03C4\u03B7\u03BD INTEGERDUP- \u03BF\u03B9 \u03C4\u03B9\u03BC\u03AD\u03C2 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03BA\u03AD\u03C1\u03B1\u03B9\u03BF\u03B9 \u03B1\u03C1\u03B9\u03B8\u03BC\u03BF\u03AF (\u03C0\u03B1\u03C1\u03CC\u03BC\u03BF\u03B9\u03B5\u03C2 \u03BC\u03B5 \u03C4\u03B7\u03BD INTEGERKEY). \u039F\u03B9 \u03C4\u03B9\u03BC\u03AD\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03AD\u03C7\u03BF\u03C5\u03BD \u03CC\u03BB\u03B5\u03C2 \u03C4\u03BF \u03AF\u03B4\u03B9\u03BF \u03BC\u03AD\u03B3\u03B5\u03B8\u03BF\u03C2 \u03BA\u03B1\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B5\u03C5\u03B8\u03C5\u03B3\u03C1\u03B1\u03BC\u03BC\u03B9\u03C3\u03BC\u03AD\u03BD\u03B5\u03C2 \u03CC\u03C4\u03B1\u03BD \u03C0\u03B5\u03C1\u03BD\u03BF\u03CD\u03BD \u03C9\u03C2 \u03C0\u03B1\u03C1\u03AC\u03BC\u03B5\u03C4\u03C1\u03BF\u03B9.</li><li>\u03A4\u03BF REVERSEDUP \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03B5\u03AF \u03C4\u03BF DUPSORT- \u03B7 \u03B1\u03BD\u03C4\u03AF\u03C3\u03C4\u03C1\u03BF\u03C6\u03B7 \u03C3\u03CD\u03B3\u03BA\u03C1\u03B9\u03C3\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03CE\u03BD \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03B5\u03AF\u03C4\u03B1\u03B9 \u03B3\u03B9\u03B1 \u03C4\u03B9\u03C2 \u03C4\u03B9\u03BC\u03AD\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD.</li><li>\u0397 CREATE \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03B5\u03AF \u03C4\u03B7 \u0392\u0394 \u03B1\u03BD \u03B4\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 (\u03C0\u03C1\u03BF\u03C3\u03C4\u03AF\u03B8\u03B5\u03C4\u03B1\u03B9 \u03B1\u03C0\u03CC \u03C0\u03C1\u03BF\u03B5\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE).</li><li>DB_ACCEDE \u0391\u03BD\u03BF\u03AF\u03B3\u03B5\u03B9 \u03BC\u03B9\u03B1 \u03C5\u03C0\u03AC\u03C1\u03C7\u03BF\u03C5\u03C3\u03B1 \u03C5\u03C0\u03BF-\u03B2\u03AC\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03C0\u03BF\u03C5 \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AE\u03B8\u03B7\u03BA\u03B5 \u03BC\u03B5 \u03C4\u03B7 \u03C7\u03C1\u03AE\u03C3\u03B7 \u03C4\u03B7\u03C2 \u03C3\u03B7\u03BC\u03B1\u03AF\u03B1\u03C2 unknown.<br> \u0391\u03C5\u03C4\u03AE \u03B7 \u03C3\u03B7\u03BC\u03B1\u03AF\u03B1 DB_ACCEDE \u03C0\u03C1\u03BF\u03BF\u03C1\u03AF\u03B6\u03B5\u03C4\u03B1\u03B9 \u03B3\u03B9\u03B1 \u03C4\u03BF \u03AC\u03BD\u03BF\u03B9\u03B3\u03BC\u03B1 \u03C5\u03C6\u03B9\u03C3\u03C4\u03AC\u03BC\u03B5\u03BD\u03C9\u03BD \u03C5\u03C0\u03BF-\u03B2\u03AC\u03C3\u03B5\u03C9\u03BD \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03C0\u03BF\u03C5 \u03AD\u03C7\u03BF\u03C5\u03BD \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03B7\u03B8\u03B5\u03AF \u03BC\u03B5 \u03AC\u03B3\u03BD\u03C9\u03C3\u03C4\u03B5\u03C2 \u03C3\u03B7\u03BC\u03B1\u03AF\u03B5\u03C2 (REVERSEKEY, DUPSORT, INTEGERKEY, DUPFIXED, INTEGERDUP \u03BA\u03B1\u03B9 REVERSEDUP).<br> \u03A3\u03B5 \u03B1\u03C5\u03C4\u03AE \u03C4\u03B7\u03BD \u03C0\u03B5\u03C1\u03AF\u03C0\u03C4\u03C9\u03C3\u03B7, \u03B7 \u03C5\u03C0\u03BF\u03B2\u03AC\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03B4\u03B5\u03BD \u03B8\u03B1 \u03B5\u03C0\u03B9\u03C3\u03C4\u03C1\u03AD\u03C8\u03B5\u03B9 \u03C3\u03C6\u03AC\u03BB\u03BC\u03B1 INCOMPATIBLE, \u03B1\u03BB\u03BB\u03AC \u03B8\u03B1 \u03B1\u03BD\u03BF\u03AF\u03BE\u03B5\u03B9 \u03BC\u03B5 \u03C4\u03B9\u03C2 \u03C3\u03B7\u03BC\u03B1\u03AF\u03B5\u03C2 \u03C0\u03BF\u03C5 \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03AE\u03B8\u03B7\u03BA\u03B1\u03BD \u03B3\u03B9\u03B1 \u03C4\u03B7 \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 \u03C4\u03B7\u03C2 \u03BA\u03B1\u03B9 \u03B7 \u03B5\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03AE \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03C3\u03C4\u03B7 \u03C3\u03C5\u03BD\u03AD\u03C7\u03B5\u03B9\u03B1 \u03BD\u03B1 \u03C0\u03C1\u03BF\u03C3\u03B4\u03B9\u03BF\u03C1\u03AF\u03C3\u03B5\u03B9 \u03C4\u03B9\u03C2 \u03C0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03B9\u03BA\u03AD\u03C2 \u03C3\u03B7\u03BC\u03B1\u03AF\u03B5\u03C2 \u03BC\u03B5 \u03C4\u03B7\u03BD mdbx_dbi_flags().</li></ul><h5 id="dupsort-\u03B5\u03BD\u03B1-\u03BA\u03BB\u03B5\u03B9\u03B4\u03B9-\u03B1\u03BD\u03C4\u03B9\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03B9-\u03C3\u03B5-\u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03BF\u03C4\u03B5\u03C1\u03B5\u03C2-\u03B1\u03C0\u03BF-\u03BC\u03B9\u03B1-\u03C4\u03B9\u03BC\u03B5\u03C2" tabindex="-1"><a class="header-anchor" href="#dupsort-\u03B5\u03BD\u03B1-\u03BA\u03BB\u03B5\u03B9\u03B4\u03B9-\u03B1\u03BD\u03C4\u03B9\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03B9-\u03C3\u03B5-\u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03BF\u03C4\u03B5\u03C1\u03B5\u03C2-\u03B1\u03C0\u03BF-\u03BC\u03B9\u03B1-\u03C4\u03B9\u03BC\u03B5\u03C2" aria-hidden="true">#</a> DUPSORT : \u0388\u03BD\u03B1 \u03BA\u03BB\u03B5\u03B9\u03B4\u03AF \u03B1\u03BD\u03C4\u03B9\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF \u03C3\u03B5 \u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03B5\u03C2 \u03B1\u03C0\u03CC \u03BC\u03AF\u03B1 \u03C4\u03B9\u03BC\u03AD\u03C2</h5><p><code>DUPSORT</code>\u03C3\u03B7\u03BC\u03B1\u03AF\u03BD\u03B5\u03B9 \u03CC\u03C4\u03B9 \u03AD\u03BD\u03B1 \u03BA\u03BB\u03B5\u03B9\u03B4\u03AF \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03B1\u03BD\u03C4\u03B9\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF \u03C3\u03B5 \u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03B5\u03C2 \u03B1\u03C0\u03CC \u03BC\u03AF\u03B1 \u03C4\u03B9\u03BC\u03AD\u03C2.</p><p>\u0391\u03BD \u03B8\u03AD\u03BB\u03B5\u03C4\u03B5 \u03BD\u03B1 \u03BF\u03C1\u03AF\u03C3\u03B5\u03C4\u03B5 \u03C0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AD\u03C2 \u03C3\u03B7\u03BC\u03B1\u03AF\u03B5\u03C2, \u03B3\u03C1\u03AC\u03C8\u03C4\u03B5 \u03C9\u03C2 \u03B5\u03BE\u03AE\u03C2 <code>flag DUPSORT | DUPFIXED</code></p><h5 id="dup-key-iterator-\u03C0\u03BF\u03C5-\u03B5\u03C0\u03B9\u03C3\u03C4\u03C1\u03B5\u03C6\u03B5\u03B9-\u03BF\u03BB\u03B5\u03C2-\u03C4\u03B9\u03C2-\u03C4\u03B9\u03BC\u03B5\u03C2-\u03C0\u03BF\u03C5-\u03B1\u03BD\u03C4\u03B9\u03C3\u03C4\u03BF\u03B9\u03C7\u03BF\u03C5\u03BD-\u03C3\u03B5-\u03B5\u03BD\u03B1-\u03BA\u03BB\u03B5\u03B9\u03B4\u03B9" tabindex="-1"><a class="header-anchor" href="#dup-key-iterator-\u03C0\u03BF\u03C5-\u03B5\u03C0\u03B9\u03C3\u03C4\u03C1\u03B5\u03C6\u03B5\u03B9-\u03BF\u03BB\u03B5\u03C2-\u03C4\u03B9\u03C2-\u03C4\u03B9\u03BC\u03B5\u03C2-\u03C0\u03BF\u03C5-\u03B1\u03BD\u03C4\u03B9\u03C3\u03C4\u03BF\u03B9\u03C7\u03BF\u03C5\u03BD-\u03C3\u03B5-\u03B5\u03BD\u03B1-\u03BA\u03BB\u03B5\u03B9\u03B4\u03B9" aria-hidden="true">#</a> <code>.dup(key)</code> iterator \u03C0\u03BF\u03C5 \u03B5\u03C0\u03B9\u03C3\u03C4\u03C1\u03AD\u03C6\u03B5\u03B9 \u03CC\u03BB\u03B5\u03C2 \u03C4\u03B9\u03C2 \u03C4\u03B9\u03BC\u03AD\u03C2 \u03C0\u03BF\u03C5 \u03B1\u03BD\u03C4\u03B9\u03C3\u03C4\u03BF\u03B9\u03C7\u03BF\u03CD\u03BD \u03C3\u03B5 \u03AD\u03BD\u03B1 \u03BA\u03BB\u03B5\u03B9\u03B4\u03AF</h5><p>\u0397 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 \u03B1\u03C5\u03C4\u03AE \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B4\u03B9\u03B1\u03B8\u03AD\u03C3\u03B9\u03BC\u03B7 \u03BC\u03CC\u03BD\u03BF \u03B3\u03B9\u03B1 \u03B2\u03AC\u03C3\u03B5\u03B9\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03BC\u03B5 \u03C4\u03B7\u03BD \u03AD\u03BD\u03B4\u03B5\u03B9\u03BE\u03B7 <code>DUPSORT</code>, \u03CC\u03C0\u03BF\u03C5 \u03AD\u03BD\u03B1 \u03BA\u03BB\u03B5\u03B9\u03B4\u03AF \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03B1\u03BD\u03C4\u03B9\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF \u03C3\u03B5 \u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03B5\u03C2 \u03B1\u03C0\u03CC \u03BC\u03AF\u03B1 \u03C4\u03B9\u03BC\u03AD\u03C2.</p><p>\u0393\u03B9\u03B1 \u03C4\u03B9\u03C2 \u03B2\u03AC\u03C3\u03B5\u03B9\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD <code>DUPSORT</code>, \u03C4\u03BF <code>get</code> \u03B5\u03C0\u03B9\u03C3\u03C4\u03C1\u03AD\u03C6\u03B5\u03B9 \u03BC\u03CC\u03BD\u03BF \u03C4\u03B7\u03BD \u03C0\u03C1\u03CE\u03C4\u03B7 \u03C4\u03B9\u03BC\u03AE \u03B3\u03B9\u03B1 \u03B1\u03C5\u03C4\u03CC \u03C4\u03BF \u03BA\u03BB\u03B5\u03B9\u03B4\u03AF. \u0393\u03B9\u03B1 \u03BD\u03B1 \u03BB\u03AC\u03B2\u03B5\u03C4\u03B5 \u03CC\u03BB\u03B5\u03C2 \u03C4\u03B9\u03C2 \u03C4\u03B9\u03BC\u03AD\u03C2, \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03C4\u03B5 \u03C4\u03BF <code>dup</code>.</p><h5 id="\u03C0\u03C1\u03BF\u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03B5\u03BD\u03B5\u03C2-\u03C3\u03B7\u03BC\u03B1\u03B9\u03B5\u03C2-\u03B2\u03B1\u03C3\u03B7\u03C2-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD-\u03C0\u03BF\u03C5-\u03C0\u03C1\u03BF\u03C3\u03B1\u03C1\u03C4\u03C9\u03BD\u03C4\u03B1\u03B9-\u03B1\u03C5\u03C4\u03BF\u03BC\u03B1\u03C4\u03B1" tabindex="-1"><a class="header-anchor" href="#\u03C0\u03C1\u03BF\u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03B5\u03BD\u03B5\u03C2-\u03C3\u03B7\u03BC\u03B1\u03B9\u03B5\u03C2-\u03B2\u03B1\u03C3\u03B7\u03C2-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD-\u03C0\u03BF\u03C5-\u03C0\u03C1\u03BF\u03C3\u03B1\u03C1\u03C4\u03C9\u03BD\u03C4\u03B1\u03B9-\u03B1\u03C5\u03C4\u03BF\u03BC\u03B1\u03C4\u03B1" aria-hidden="true">#</a> \u03A0\u03C1\u03BF\u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03B5\u03C2 \u03C3\u03B7\u03BC\u03B1\u03AF\u03B5\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03C0\u03BF\u03C5 \u03C0\u03C1\u03BF\u03C3\u03B1\u03C1\u03C4\u03CE\u03BD\u03C4\u03B1\u03B9 \u03B1\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03B1</h5><p>\u038C\u03C4\u03B1\u03BD \u03BF \u03C4\u03CD\u03C0\u03BF\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03B5\u03AF\u03BD\u03B1\u03B9 <code>u32</code> / <code>u64</code> / <code>usize</code>, \u03B7 \u03C3\u03B7\u03BC\u03B1\u03AF\u03B1 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03C0\u03C1\u03BF\u03C3\u03C4\u03AF\u03B8\u03B5\u03C4\u03B1\u03B9 \u03B1\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03B1. <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#105" target="_blank" rel="noopener noreferrer"><code>INTEGERKEY</code></a> .</p><p>\u03A3\u03B5 \u03BC\u03B7\u03C7\u03B1\u03BD\u03AE\u03BC\u03B1\u03C4\u03B1 \u03BC\u03B5 \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 \u03BC\u03B9\u03BA\u03C1\u03BF\u03CD \u03AC\u03BA\u03C1\u03BF\u03C5, \u03C0\u03C1\u03BF\u03C3\u03C4\u03AF\u03B8\u03B5\u03BD\u03C4\u03B1\u03B9 \u03B1\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03B1 \u03AC\u03BB\u03BB\u03BF\u03B9 \u03B1\u03C1\u03B9\u03B8\u03BC\u03B7\u03C4\u03B9\u03BA\u03BF\u03AF \u03C4\u03CD\u03C0\u03BF\u03B9 <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#108" target="_blank" rel="noopener noreferrer"><code>REVERSEKEY</code></a> \u0397 \u03C3\u03B7\u03BC\u03B1\u03AF\u03B1 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03C0\u03C1\u03BF\u03C3\u03C4\u03AF\u03B8\u03B5\u03C4\u03B1\u03B9 \u03B1\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03B1 \u03CC\u03C4\u03B1\u03BD \u03BF \u03C4\u03CD\u03C0\u03BF\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03B5\u03AF\u03BD\u03B1\u03B9 / / .</p><h4 id="\u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03B7-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD" tabindex="-1"><a class="header-anchor" href="#\u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03B7-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD" aria-hidden="true">#</a> \u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD</h4><h5 id="del-key-\u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03B7-\u03B5\u03BD\u03BF\u03C2-\u03C0\u03BB\u03B7\u03BA\u03C4\u03C1\u03BF\u03C5" tabindex="-1"><a class="header-anchor" href="#del-key-\u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03B7-\u03B5\u03BD\u03BF\u03C2-\u03C0\u03BB\u03B7\u03BA\u03C4\u03C1\u03BF\u03C5" aria-hidden="true">#</a> <code>.del(key)</code> \u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03B5\u03BD\u03CC\u03C2 \u03C0\u03BB\u03AE\u03BA\u03C4\u03C1\u03BF\u03C5</h5><p><code>.del(val)</code> \u0394\u03B9\u03B1\u03B3\u03C1\u03AC\u03C6\u03B5\u03B9 \u03C4\u03B7\u03BD \u03C4\u03B9\u03BC\u03AE \u03C0\u03BF\u03C5 \u03B1\u03BD\u03C4\u03B9\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF \u03C3\u03B5 \u03AD\u03BD\u03B1 \u03BA\u03BB\u03B5\u03B9\u03B4\u03AF.</p><p>\u0395\u03AC\u03BD \u03B7 \u03B2\u03AC\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03AD\u03C7\u03B5\u03B9 \u03C4\u03B7 \u03C3\u03B7\u03BC\u03B1\u03AF\u03B1 <code>DUPSORT</code>, \u03CC\u03BB\u03B5\u03C2 \u03BF\u03B9 \u03C4\u03B9\u03BC\u03AD\u03C2 \u03BA\u03AC\u03C4\u03C9 \u03B1\u03C0\u03CC \u03B1\u03C5\u03C4\u03CC \u03C4\u03BF \u03BA\u03BB\u03B5\u03B9\u03B4\u03AF \u03B8\u03B1 \u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03BF\u03CD\u03BD.</p><p>\u0395\u03C0\u03B9\u03C3\u03C4\u03C1\u03AD\u03C6\u03B5\u03B9 <code>true</code>\u03B5\u03AC\u03BD \u03AD\u03C7\u03BF\u03C5\u03BD \u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03BA\u03B1\u03B9 <code>false</code>\u03B5\u03AC\u03BD \u03CC\u03C7\u03B9.</p><h5 id="del-val-key-val-\u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03B7-\u03B1\u03BA\u03C1\u03B9\u03B2\u03BF\u03C5\u03C2-\u03B1\u03BD\u03C4\u03B9\u03C3\u03C4\u03BF\u03B9\u03C7\u03B9\u03B1\u03C2" tabindex="-1"><a class="header-anchor" href="#del-val-key-val-\u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03B7-\u03B1\u03BA\u03C1\u03B9\u03B2\u03BF\u03C5\u03C2-\u03B1\u03BD\u03C4\u03B9\u03C3\u03C4\u03BF\u03B9\u03C7\u03B9\u03B1\u03C2" aria-hidden="true">#</a> <code>.del_val(key,val)</code> \u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03B1\u03BA\u03C1\u03B9\u03B2\u03BF\u03CD\u03C2 \u03B1\u03BD\u03C4\u03B9\u03C3\u03C4\u03BF\u03B9\u03C7\u03AF\u03B1\u03C2</h5><p><code>.del_val(key,val)</code> \u0394\u03B9\u03B1\u03B3\u03C1\u03AC\u03C6\u03B5\u03B9 \u03B6\u03B5\u03CD\u03B3\u03B7 \u03BA\u03BB\u03B5\u03B9\u03B4\u03B9\u03CE\u03BD-\u03C4\u03B9\u03BC\u03CE\u03BD \u03C0\u03BF\u03C5 \u03C4\u03B1\u03B9\u03C1\u03B9\u03AC\u03B6\u03BF\u03C5\u03BD \u03B1\u03BA\u03C1\u03B9\u03B2\u03CE\u03C2 \u03BC\u03B5 \u03C4\u03B9\u03C2 \u03C0\u03B1\u03C1\u03B1\u03BC\u03AD\u03C4\u03C1\u03BF\u03C5\u03C2 \u03B5\u03B9\u03C3\u03CC\u03B4\u03BF\u03C5.</p><p>\u0395\u03C0\u03B9\u03C3\u03C4\u03C1\u03AD\u03C6\u03B5\u03B9 <code>true</code>\u03B5\u03AC\u03BD \u03AD\u03C7\u03BF\u03C5\u03BD \u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03BA\u03B1\u03B9 <code>false</code>\u03B5\u03AC\u03BD \u03CC\u03C7\u03B9.</p><h4 id="\u03B4\u03B9\u03B1\u03B4\u03C1\u03BF\u03BC\u03B7" tabindex="-1"><a class="header-anchor" href="#\u03B4\u03B9\u03B1\u03B4\u03C1\u03BF\u03BC\u03B7" aria-hidden="true">#</a> \u0394\u03B9\u03B1\u03B4\u03C1\u03BF\u03BC\u03AE</h4><h5 id="\u03B4\u03B9\u03B1\u03B4\u03BF\u03C7\u03B9\u03BA\u03B7-\u03B4\u03B9\u03B1\u03C3\u03C7\u03B9\u03C3\u03B7" tabindex="-1"><a class="header-anchor" href="#\u03B4\u03B9\u03B1\u03B4\u03BF\u03C7\u03B9\u03BA\u03B7-\u03B4\u03B9\u03B1\u03C3\u03C7\u03B9\u03C3\u03B7" aria-hidden="true">#</a> \u03B4\u03B9\u03B1\u03B4\u03BF\u03C7\u03B9\u03BA\u03AE \u03B4\u03B9\u03AC\u03C3\u03C7\u03B9\u03C3\u03B7</h5><p>\u039B\u03CC\u03B3\u03C9 \u03C4\u03B7\u03C2 \u03B5\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03AE\u03C2 \u03C4\u03BF\u03C5 <a href="https://doc.rust-lang.org/std/iter/trait.IntoIterator.html" target="_blank" rel="noopener noreferrer"><code>std::iter::IntoIterator</code></a> . \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF\u03C4\u03B5 \u03BD\u03B1 \u03B4\u03B9\u03B1\u03C3\u03C7\u03AF\u03C3\u03B5\u03C4\u03B5 \u03B1\u03C0\u03B5\u03C5\u03B8\u03B5\u03AF\u03B1\u03C2 \u03C9\u03C2 \u03B5\u03BE\u03AE\u03C2 :</p><p><code>for (k, v) in test1</code></p><h5 id="rev-\u03B1\u03BD\u03C4\u03B9\u03C3\u03C4\u03C1\u03BF\u03C6\u03B7-\u03B4\u03B9\u03B1\u03C3\u03C7\u03B9\u03C3\u03B7-\u03C3\u03B5\u03B9\u03C1\u03B1\u03C2" tabindex="-1"><a class="header-anchor" href="#rev-\u03B1\u03BD\u03C4\u03B9\u03C3\u03C4\u03C1\u03BF\u03C6\u03B7-\u03B4\u03B9\u03B1\u03C3\u03C7\u03B9\u03C3\u03B7-\u03C3\u03B5\u03B9\u03C1\u03B1\u03C2" aria-hidden="true">#</a> <code>.rev()</code> \u0391\u03BD\u03C4\u03AF\u03C3\u03C4\u03C1\u03BF\u03C6\u03B7 \u03B4\u03B9\u03AC\u03C3\u03C7\u03B9\u03C3\u03B7 \u03C3\u03B5\u03B9\u03C1\u03AC\u03C2</h5><p><code>for (k, v) in test4.rev()</code></p><h5 id="\u03C4\u03B1\u03BE\u03B9\u03BD\u03BF\u03BC\u03B7\u03C3\u03B7" tabindex="-1"><a class="header-anchor" href="#\u03C4\u03B1\u03BE\u03B9\u03BD\u03BF\u03BC\u03B7\u03C3\u03B7" aria-hidden="true">#</a> \u03A4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7</h5><p>\u03A4\u03B1 \u03BA\u03BB\u03B5\u03B9\u03B4\u03B9\u03AC \u03C4\u03B7\u03C2 libmdbx \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C4\u03B1\u03BE\u03B9\u03BD\u03BF\u03BC\u03B7\u03BC\u03AD\u03BD\u03B1 <a href="https://zh.wikipedia.org/wiki/%E5%AD%97%E5%85%B8%E5%BA%8F" target="_blank" rel="noopener noreferrer">\u03BA\u03B1\u03C4\u03AC \u03C3\u03B5\u03B9\u03C1\u03AC \u03BB\u03B5\u03BE\u03B9\u03BA\u03BF\u03CD</a>.</p><ul><li><p>\u0393\u03B9\u03B1 \u03B1\u03C1\u03B9\u03B8\u03BC\u03BF\u03CD\u03C2 \u03C7\u03C9\u03C1\u03AF\u03C2 \u03C0\u03C1\u03CC\u03C3\u03B7\u03BC\u03BF</p><p>\u03C4\u03B1\u03BE\u03B9\u03BD\u03BF\u03BC\u03BF\u03CD\u03BD\u03C4\u03B1\u03B9 \u03B1\u03C0\u03CC \u03C4\u03BF \u03BC\u03B9\u03BA\u03C1\u03CC\u03C4\u03B5\u03C1\u03BF \u03C0\u03C1\u03BF\u03C2 \u03C4\u03BF \u03BC\u03B5\u03B3\u03B1\u03BB\u03CD\u03C4\u03B5\u03C1\u03BF, \u03B5\u03C0\u03B5\u03B9\u03B4\u03AE \u03BF\u03B9 \u03C3\u03B7\u03BC\u03B1\u03AF\u03B5\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03C0\u03C1\u03BF\u03C3\u03C4\u03AF\u03B8\u03B5\u03BD\u03C4\u03B1\u03B9 \u03B1\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03B1 ( <code>u32</code>/ <code>u64</code>/ <code>usize</code> \u03C0\u03C1\u03BF\u03C3\u03C4\u03AF\u03B8\u03B5\u03BD\u03C4\u03B1\u03B9 \u03C3\u03C4\u03BF <code>INTEGERKEY</code>, \u03B5\u03BD\u03CE \u03AC\u03BB\u03BB\u03B5\u03C2 \u03C0\u03C1\u03BF\u03C3\u03C4\u03AF\u03B8\u03B5\u03BD\u03C4\u03B1\u03B9 \u03C3\u03C4\u03BF <code>REVERSEKEY</code> \u03B1\u03BD\u03AC\u03BB\u03BF\u03B3\u03B1 \u03BC\u03B5 \u03C4\u03BF\u03BD \u03BA\u03CE\u03B4\u03B9\u03BA\u03B1 \u03BC\u03B7\u03C7\u03B1\u03BD\u03AE\u03C2).</p></li><li><p>\u0393\u03B9\u03B1 \u03C0\u03C1\u03BF\u03C3\u03B7\u03BC\u03B1\u03C3\u03BC\u03AD\u03BD\u03BF\u03C5\u03C2 \u03B1\u03C1\u03B9\u03B8\u03BC\u03BF\u03CD\u03C2</p><p>\u03B7 \u03C3\u03B5\u03B9\u03C1\u03AC \u03B5\u03AF\u03BD\u03B1\u03B9: \u03C0\u03C1\u03CE\u03C4\u03B1 \u03C4\u03BF 0, \u03BC\u03B5\u03C4\u03AC \u03CC\u03BB\u03BF\u03B9 \u03BF\u03B9 \u03B8\u03B5\u03C4\u03B9\u03BA\u03BF\u03AF \u03B1\u03C1\u03B9\u03B8\u03BC\u03BF\u03AF \u03B1\u03C0\u03CC \u03C4\u03BF\u03BD \u03BC\u03B9\u03BA\u03C1\u03CC\u03C4\u03B5\u03C1\u03BF \u03C0\u03C1\u03BF\u03C2 \u03C4\u03BF\u03BD \u03BC\u03B5\u03B3\u03B1\u03BB\u03CD\u03C4\u03B5\u03C1\u03BF, \u03BC\u03B5\u03C4\u03AC \u03CC\u03BB\u03BF\u03B9 \u03BF\u03B9 \u03B1\u03C1\u03BD\u03B7\u03C4\u03B9\u03BA\u03BF\u03AF \u03B1\u03C1\u03B9\u03B8\u03BC\u03BF\u03AF \u03B1\u03C0\u03CC \u03C4\u03BF\u03BD \u03BC\u03B9\u03BA\u03C1\u03CC\u03C4\u03B5\u03C1\u03BF \u03C0\u03C1\u03BF\u03C2 \u03C4\u03BF\u03BD \u03BC\u03B5\u03B3\u03B1\u03BB\u03CD\u03C4\u03B5\u03C1\u03BF.</p></li></ul><h3 id="\u03B5\u03C0\u03B1\u03BD\u03B1\u03BB\u03B7\u03C0\u03C4\u03B5\u03C2-\u03B4\u03B9\u03B1\u03C3\u03C4\u03B7\u03BC\u03B1\u03C4\u03BF\u03C2" tabindex="-1"><a class="header-anchor" href="#\u03B5\u03C0\u03B1\u03BD\u03B1\u03BB\u03B7\u03C0\u03C4\u03B5\u03C2-\u03B4\u03B9\u03B1\u03C3\u03C4\u03B7\u03BC\u03B1\u03C4\u03BF\u03C2" aria-hidden="true">#</a> \u0395\u03C0\u03B1\u03BD\u03B1\u03BB\u03AE\u03C0\u03C4\u03B5\u03C2 \u03B4\u03B9\u03B1\u03C3\u03C4\u03AE\u03BC\u03B1\u03C4\u03BF\u03C2</h3><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // \u038C\u03BD\u03BF\u03BC\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03AE\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD Env
  Test // \u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0395\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE \u03C4\u03BF\u03C5 \u03B1\u03C1\u03B9\u03B8\u03BC\u03BF\u03CD \u03AD\u03BA\u03B4\u03BF\u03C3\u03B7\u03C2 \u03C4\u03B7\u03C2 libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u03A0\u03BF\u03BB\u03C5\u03BD\u03B7\u03BC\u03B1\u03C4\u03B9\u03BA\u03AE \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7 \u03BA\u03B1\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE
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
      sync_period : 65536, // \u03A3\u03B5 1/65536 \u03C4\u03BF\u03C5 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03BF\u03BB\u03AD\u03C0\u03C4\u03BF\u03C5
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
 MDBX // \u038C\u03BD\u03BF\u03BC\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03AE\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD Env
 Test // \u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD
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
  MDBX // \u039F\u03BD\u03CC\u03BC\u03B1\u03C4\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03CE\u03BD \u03B3\u03B9\u03B1 \u03C4\u03B7 \u03B2\u03AC\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD ENV
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
  // \u0393\u03C1\u03AE\u03B3\u03BF\u03C1\u03B7 \u03B3\u03C1\u03B1\u03C6\u03AE
  w!(Test1.set [2, 3],[4, 5]);

  // \u0393\u03C1\u03AE\u03B3\u03BF\u03C1\u03B7 \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7
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

  // \u03A0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AD\u03C2 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B5\u03C2 \u03C3\u03B5 \u03C0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AD\u03C2 \u03B2\u03AC\u03C3\u03B5\u03B9\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03C3\u03C4\u03B7\u03BD \u03AF\u03B4\u03B9\u03B1 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE
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

    // \u0397 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE \u03B8\u03B1 \u03B4\u03B5\u03C3\u03BC\u03B5\u03C5\u03C4\u03B5\u03AF \u03C3\u03C4\u03BF \u03C4\u03AD\u03BB\u03BF\u03C2 \u03C4\u03BF\u03C5 \u03C0\u03B5\u03B4\u03AF\u03BF\u03C5 \u03B5\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03AE\u03C2
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
</code></pre></div><h4 id="\u03B5\u03BA\u03C4\u03B5\u03BB\u03B5\u03C3\u03C4\u03B5-\u03C4\u03B7\u03BD-\u03B5\u03BE\u03BF\u03B4\u03BF-\u03C4\u03BF\u03C5" tabindex="-1"><a class="header-anchor" href="#\u03B5\u03BA\u03C4\u03B5\u03BB\u03B5\u03C3\u03C4\u03B5-\u03C4\u03B7\u03BD-\u03B5\u03BE\u03BF\u03B4\u03BF-\u03C4\u03BF\u03C5" aria-hidden="true">#</a> \u0395\u03BA\u03C4\u03B5\u03BB\u03AD\u03C3\u03C4\u03B5 \u03C4\u03B7\u03BD \u03AD\u03BE\u03BF\u03B4\u03BF \u03C4\u03BF\u03C5</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/range.mdb

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
</code></pre></div><h4 id="range-begin-end-\u03B4\u03B9\u03B1\u03C3\u03C4\u03B7\u03BC\u03B1-\u03B5\u03C0\u03B1\u03BD\u03B1\u03BB\u03B7\u03C8\u03B7\u03C2" tabindex="-1"><a class="header-anchor" href="#range-begin-end-\u03B4\u03B9\u03B1\u03C3\u03C4\u03B7\u03BC\u03B1-\u03B5\u03C0\u03B1\u03BD\u03B1\u03BB\u03B7\u03C8\u03B7\u03C2" aria-hidden="true">#</a> <code>.range(begin..end)</code> \u0394\u03B9\u03AC\u03C3\u03C4\u03B7\u03BC\u03B1 \u03B5\u03C0\u03B1\u03BD\u03AC\u03BB\u03B7\u03C8\u03B7\u03C2</h4><p>\u0393\u03B9\u03B1 \u03C4\u03BF\u03C5\u03C2 \u03B1\u03C1\u03B9\u03B8\u03BC\u03BF\u03CD\u03C2, \u03AD\u03BD\u03B1 \u03B4\u03B9\u03AC\u03C3\u03C4\u03B7\u03BC\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03AD\u03BD\u03B1 \u03B1\u03C1\u03B9\u03B8\u03BC\u03B7\u03C4\u03B9\u03BA\u03CC \u03B4\u03B9\u03AC\u03C3\u03C4\u03B7\u03BC\u03B1.</p><p>\u0393\u03B9\u03B1 \u03C4\u03BF \u03B4\u03C5\u03B1\u03B4\u03B9\u03BA\u03CC \u03C3\u03CD\u03C3\u03C4\u03B7\u03BC\u03B1, \u03C4\u03BF \u03AF\u03B4\u03B9\u03BF \u03B4\u03B9\u03AC\u03C3\u03C4\u03B7\u03BC\u03B1 \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03BA\u03B1\u03C4\u03B1\u03C3\u03BA\u03B5\u03C5\u03B1\u03C3\u03C4\u03B5\u03AF, \u03C0.\u03C7.</p><div class="language-text ext-text"><pre class="language-text"><code>let begin : &amp;[u8] = &amp;[1,1];
for (k,v) in test0.range(begin..=&amp;[2]) {}
</code></pre></div><p>\u0395\u03AC\u03BD \u03C4\u03BF <code>begin</code> \u03B5\u03AF\u03BD\u03B1\u03B9 \u03BC\u03B5\u03B3\u03B1\u03BB\u03CD\u03C4\u03B5\u03C1\u03BF \u03B1\u03C0\u03CC \u03C4\u03BF <code>end</code>, \u03B8\u03B1 \u03B3\u03AF\u03BD\u03B5\u03B9 \u03B5\u03C0\u03B1\u03BD\u03AC\u03BB\u03B7\u03C8\u03B7 \u03C0\u03C1\u03BF\u03C2 \u03C4\u03B1 \u03C0\u03AF\u03C3\u03C9.</p><p>\u0393\u03B9\u03B1 \u03C0\u03B1\u03C1\u03AC\u03B4\u03B5\u03B9\u03B3\u03BC\u03B1, \u03C4\u03BF <code>test1.range(5..2)</code> \u03B8\u03B1 \u03B2\u03B3\u03AC\u03BB\u03B5\u03B9 \u03C4\u03B1 \u03B5\u03BE\u03AE\u03C2 :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // \u038C\u03BD\u03BF\u03BC\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03AE\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD Env
  Test // \u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0395\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE \u03C4\u03BF\u03C5 \u03B1\u03C1\u03B9\u03B8\u03BC\u03BF\u03CD \u03AD\u03BA\u03B4\u03BF\u03C3\u03B7\u03C2 \u03C4\u03B7\u03C2 libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u03A0\u03BF\u03BB\u03C5\u03BD\u03B7\u03BC\u03B1\u03C4\u03B9\u03BA\u03AE \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7 \u03BA\u03B1\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE
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
      sync_period : 65536, // \u03A3\u03B5 1/65536 \u03C4\u03BF\u03C5 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03BF\u03BB\u03AD\u03C0\u03C4\u03BF\u03C5
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
 MDBX // \u038C\u03BD\u03BF\u03BC\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03AE\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD Env
 Test // \u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD
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
  MDBX // \u039F\u03BD\u03CC\u03BC\u03B1\u03C4\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03CE\u03BD \u03B3\u03B9\u03B1 \u03C4\u03B7 \u03B2\u03AC\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD ENV
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
  // \u0393\u03C1\u03AE\u03B3\u03BF\u03C1\u03B7 \u03B3\u03C1\u03B1\u03C6\u03AE
  w!(Test1.set [2, 3],[4, 5]);

  // \u0393\u03C1\u03AE\u03B3\u03BF\u03C1\u03B7 \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7
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

  // \u03A0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AD\u03C2 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B5\u03C2 \u03C3\u03B5 \u03C0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AD\u03C2 \u03B2\u03AC\u03C3\u03B5\u03B9\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03C3\u03C4\u03B7\u03BD \u03AF\u03B4\u03B9\u03B1 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE
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

    // \u0397 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE \u03B8\u03B1 \u03B4\u03B5\u03C3\u03BC\u03B5\u03C5\u03C4\u03B5\u03AF \u03C3\u03C4\u03BF \u03C4\u03AD\u03BB\u03BF\u03C2 \u03C4\u03BF\u03C5 \u03C0\u03B5\u03B4\u03AF\u03BF\u03C5 \u03B5\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03AE\u03C2
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
</code></pre></div><p>\u0394\u03B5\u03BD \u03C5\u03C0\u03BF\u03C3\u03C4\u03B7\u03C1\u03AF\u03B6\u03B5\u03C4\u03B1\u03B9 \u03B7 \u03B4\u03B9\u03B1\u03BB\u03B5\u03B9\u03BC\u03BC\u03B1\u03C4\u03B9\u03BA\u03AE \u03B5\u03C0\u03B1\u03BD\u03AC\u03BB\u03B7\u03C8\u03B7 <a href="https://doc.rust-lang.org/std/ops/struct.RangeFull.html" target="_blank" rel="noopener noreferrer"><code>RangeFull</code></a> , \u03B4\u03B7\u03BB. \u03B7 \u03C7\u03C1\u03AE\u03C3\u03B7 \u03C4\u03BF\u03C5 <code>..</code>\u03B4\u03B5\u03BD \u03C5\u03C0\u03BF\u03C3\u03C4\u03B7\u03C1\u03AF\u03B6\u03B5\u03C4\u03B1\u03B9, \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03C4\u03B5 \u03B1\u03BD\u03C4&#39; \u03B1\u03C5\u03C4\u03BF\u03CD \u03C4\u03B7\u03BD \u03C0\u03C1\u03BF\u03B1\u03BD\u03B1\u03C6\u03B5\u03C1\u03B8\u03B5\u03AF\u03C3\u03B1 <a href="#%E9%81%8D%E5%8E%86">\u03B1\u03BD\u03C4\u03B9\u03C3\u03C4\u03C1\u03BF\u03C6\u03AE</a>.</p><h4 id="rev-range-\u03B1\u03BD\u03C4\u03B5\u03C3\u03C4\u03C1\u03B1\u03BC\u03BC\u03B5\u03BD\u03B1-\u03B4\u03B9\u03B1\u03C3\u03C4\u03B7\u03BC\u03B1\u03C4\u03B1" tabindex="-1"><a class="header-anchor" href="#rev-range-\u03B1\u03BD\u03C4\u03B5\u03C3\u03C4\u03C1\u03B1\u03BC\u03BC\u03B5\u03BD\u03B1-\u03B4\u03B9\u03B1\u03C3\u03C4\u03B7\u03BC\u03B1\u03C4\u03B1" aria-hidden="true">#</a> <code>.rev_range</code> \u0391\u03BD\u03C4\u03B5\u03C3\u03C4\u03C1\u03B1\u03BC\u03BC\u03AD\u03BD\u03B1 \u03B4\u03B9\u03B1\u03C3\u03C4\u03AE\u03BC\u03B1\u03C4\u03B1</h4><p>\u0391\u03BD \u03B8\u03AD\u03BB\u03B5\u03C4\u03B5 \u03BD\u03B1 \u03BB\u03AC\u03B2\u03B5\u03C4\u03B5 \u03AD\u03BD\u03B1 \u03B1\u03BD\u03B5\u03C3\u03C4\u03C1\u03B1\u03BC\u03BC\u03AD\u03BD\u03BF \u03B4\u03B9\u03AC\u03C3\u03C4\u03B7\u03BC\u03B1 \u03C0\u03BF\u03C5 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03BC\u03B9\u03BA\u03C1\u03CC\u03C4\u03B5\u03C1\u03BF \u03AE \u03AF\u03C3\u03BF \u03B1\u03C0\u03CC \u03BC\u03B9\u03B1 \u03C4\u03B9\u03BC\u03AE, \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF\u03C4\u03B5 \u03BD\u03B1 \u03BA\u03AC\u03BD\u03B5\u03C4\u03B5 \u03C4\u03BF \u03B5\u03BE\u03AE\u03C2</p><div class="language-text ext-text"><pre class="language-text"><code>test2.rev_range(2..)
</code></pre></div><p>\u0397 \u03AD\u03BE\u03BF\u03B4\u03BF\u03C2 \u03B8\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9</p><div class="language-text ext-text"><pre class="language-text"><code>(2, 4)
(1, 5)
(0, 0)
</code></pre></div><p>\u0388\u03BD\u03B1 \u03B1\u03C0\u03CC \u03C4\u03B1 <code>begin</code> \u03AE <code>end</code> \u03B4\u03B5\u03BD \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03BF\u03C1\u03B9\u03C3\u03C4\u03B5\u03AF \u03B3\u03B9\u03B1 \u03C4\u03BF \u03B1\u03BD\u03B5\u03C3\u03C4\u03C1\u03B1\u03BC\u03BC\u03AD\u03BD\u03BF \u03B4\u03B9\u03AC\u03C3\u03C4\u03B7\u03BC\u03B1, \u03B4\u03B9\u03CC\u03C4\u03B9 \u03B1\u03BD \u03BF\u03C1\u03B9\u03C3\u03C4\u03BF\u03CD\u03BD \u03BA\u03B1\u03B9 \u03C4\u03B1 \u03B4\u03CD\u03BF, \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF\u03C4\u03B5 \u03C0\u03AC\u03BD\u03C4\u03B1 \u03BD\u03B1 \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03C4\u03B5 \u03C4\u03BF <code>range(end..begin)</code> \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03B5\u03C0\u03B9\u03C4\u03CD\u03C7\u03B5\u03C4\u03B5 \u03C4\u03BF \u03AF\u03B4\u03B9\u03BF \u03B1\u03C0\u03BF\u03C4\u03AD\u03BB\u03B5\u03C3\u03BC\u03B1.</p><h3 id="\u03C0\u03C1\u03BF\u03C3\u03B1\u03C1\u03BC\u03BF\u03B3\u03B7-\u03C4\u03C5\u03C0\u03C9\u03BD-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD" tabindex="-1"><a class="header-anchor" href="#\u03C0\u03C1\u03BF\u03C3\u03B1\u03C1\u03BC\u03BF\u03B3\u03B7-\u03C4\u03C5\u03C0\u03C9\u03BD-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD" aria-hidden="true">#</a> \u03A0\u03C1\u03BF\u03C3\u03B1\u03C1\u03BC\u03BF\u03B3\u03AE \u03C4\u03CD\u03C0\u03C9\u03BD \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD</h3><p>\u039F \u03BA\u03CE\u03B4\u03B9\u03BA\u03B1\u03C2 \u03B5\u03C0\u03AF\u03B4\u03B5\u03B9\u03BE\u03B7\u03C2 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B4\u03B9\u03B1\u03B8\u03AD\u03C3\u03B9\u03BC\u03BF\u03C2 \u03C3\u03C4\u03B7 \u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 <a href="https://github.com/rmw-lib/mdbx-example/blob/master/01/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/01</a></p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // \u038C\u03BD\u03BF\u03BC\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03AE\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD Env
  Test // \u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0395\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE \u03C4\u03BF\u03C5 \u03B1\u03C1\u03B9\u03B8\u03BC\u03BF\u03CD \u03AD\u03BA\u03B4\u03BF\u03C3\u03B7\u03C2 \u03C4\u03B7\u03C2 libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u03A0\u03BF\u03BB\u03C5\u03BD\u03B7\u03BC\u03B1\u03C4\u03B9\u03BA\u03AE \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7 \u03BA\u03B1\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE
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
      sync_period : 65536, // \u03A3\u03B5 1/65536 \u03C4\u03BF\u03C5 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03BF\u03BB\u03AD\u03C0\u03C4\u03BF\u03C5
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
 MDBX // \u038C\u03BD\u03BF\u03BC\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03AE\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD Env
 Test // \u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD
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
  MDBX // \u039F\u03BD\u03CC\u03BC\u03B1\u03C4\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03CE\u03BD \u03B3\u03B9\u03B1 \u03C4\u03B7 \u03B2\u03AC\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD ENV
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
  // \u0393\u03C1\u03AE\u03B3\u03BF\u03C1\u03B7 \u03B3\u03C1\u03B1\u03C6\u03AE
  w!(Test1.set [2, 3],[4, 5]);

  // \u0393\u03C1\u03AE\u03B3\u03BF\u03C1\u03B7 \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7
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

  // \u03A0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AD\u03C2 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B5\u03C2 \u03C3\u03B5 \u03C0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AD\u03C2 \u03B2\u03AC\u03C3\u03B5\u03B9\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03C3\u03C4\u03B7\u03BD \u03AF\u03B4\u03B9\u03B1 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE
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

    // \u0397 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE \u03B8\u03B1 \u03B4\u03B5\u03C3\u03BC\u03B5\u03C5\u03C4\u03B5\u03AF \u03C3\u03C4\u03BF \u03C4\u03AD\u03BB\u03BF\u03C2 \u03C4\u03BF\u03C5 \u03C0\u03B5\u03B4\u03AF\u03BF\u03C5 \u03B5\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03AE\u03C2
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
</code></pre></div><p>\u0397 \u03AD\u03BE\u03BF\u03B4\u03BF\u03C2 \u03AD\u03C7\u03B5\u03B9 \u03C9\u03C2 \u03B5\u03BE\u03AE\u03C2</p><div class="language-text ext-text"><pre class="language-text"><code>Some(City { name: &quot;BeiJing&quot;, lnglat: (11640, 3990) })
</code></pre></div><p>\u03A3\u03C4\u03BF \u03C0\u03B1\u03C1\u03AC\u03B4\u03B5\u03B9\u03B3\u03BC\u03B1 \u03C0\u03C1\u03BF\u03C3\u03B1\u03C1\u03BC\u03BF\u03C3\u03BC\u03AD\u03BD\u03BF\u03C5 \u03C4\u03CD\u03C0\u03BF\u03C5, \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03BF\u03CD\u03BC\u03B5 <a href="https://github.com/koute/speedy" target="_blank" rel="noopener noreferrer"><code>speedy</code></a> \u03BD\u03B1 \u03BA\u03AC\u03BD\u03B5\u03B9 \u03C4\u03B7 \u03C3\u03B5\u03B9\u03C1\u03BF\u03B8\u03AD\u03C4\u03B7\u03C3\u03B7 <a href="https://github.com/djkoloski/rust_serialization_benchmark" target="_blank" rel="noopener noreferrer">( <code>speedy</code> \u03B5\u03C0\u03B1\u03BD\u03B5\u03BE\u03AD\u03C4\u03B1\u03C3\u03B7 \u03B5\u03C0\u03B9\u03B4\u03CC\u03C3\u03B5\u03C9\u03BD</a> ) <a href="https://github.com/djkoloski/rust_serialization_benchmark" target="_blank" rel="noopener noreferrer">.</a></p><p>\u0395\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03AE \u03C0\u03C1\u03BF\u03C3\u03B1\u03C1\u03BC\u03BF\u03C3\u03BC\u03AD\u03BD\u03BF\u03C5 \u03C4\u03CD\u03C0\u03BF\u03C5 <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.FromMdbx.html" target="_blank" rel="noopener noreferrer"><code>FromMdbx</code></a> \u03BA\u03B1\u03B9 <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.ToAsRef.html" target="_blank" rel="noopener noreferrer"><code>ToAsRef</code></a> \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03C3\u03C4\u03B7 \u03C3\u03C5\u03BD\u03AD\u03C7\u03B5\u03B9\u03B1 \u03BD\u03B1 \u03B1\u03C0\u03BF\u03B8\u03B7\u03BA\u03B5\u03C5\u03C4\u03B5\u03AF \u03C3\u03C4\u03B7 \u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 <code>mdbx</code>.</p><p>\u0395\u03AC\u03BD \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03B5\u03AF\u03C4\u03B5 \u03BC\u03B9\u03B1 \u03C3\u03C5\u03B3\u03BA\u03B5\u03BA\u03C1\u03B9\u03BC\u03AD\u03BD\u03B7 \u03B2\u03B9\u03B2\u03BB\u03B9\u03BF\u03B8\u03AE\u03BA\u03B7 \u03C3\u03B5\u03B9\u03C1\u03B9\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7\u03C2, \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF\u03C4\u03B5 \u03B5\u03C0\u03AF\u03C3\u03B7\u03C2 \u03BD\u03B1 \u03C0\u03C1\u03BF\u03C3\u03B1\u03C1\u03BC\u03CC\u03C3\u03B5\u03C4\u03B5 \u03C4\u03B9\u03C2 <a href="https://blog.logrocket.com/macros-in-rust-a-tutorial-with-examples/" target="_blank" rel="noopener noreferrer">\u03BC\u03B1\u03BA\u03C1\u03BF\u03B5\u03BD\u03C4\u03BF\u03BB\u03AD\u03C2</a> \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03B7\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CE\u03BD \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03B1\u03C0\u03BB\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03C4\u03B5 \u03C4\u03B7 \u03B4\u03B9\u03B1\u03B4\u03B9\u03BA\u03B1\u03C3\u03AF\u03B1.</p><h4 id="\u03B1\u03C0\u03BB\u03BF\u03C0\u03BF\u03B9\u03B7\u03C3\u03B7-\u03C0\u03C1\u03BF\u03C3\u03B1\u03C1\u03BC\u03BF\u03C3\u03BC\u03B5\u03BD\u03C9\u03BD-\u03C4\u03C5\u03C0\u03C9\u03BD-\u03BC\u03B5-\u03BC\u03B1\u03BA\u03C1\u03BF\u03B5\u03BD\u03C4\u03BF\u03BB\u03B5\u03C2-\u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03B7\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03C9\u03BD" tabindex="-1"><a class="header-anchor" href="#\u03B1\u03C0\u03BB\u03BF\u03C0\u03BF\u03B9\u03B7\u03C3\u03B7-\u03C0\u03C1\u03BF\u03C3\u03B1\u03C1\u03BC\u03BF\u03C3\u03BC\u03B5\u03BD\u03C9\u03BD-\u03C4\u03C5\u03C0\u03C9\u03BD-\u03BC\u03B5-\u03BC\u03B1\u03BA\u03C1\u03BF\u03B5\u03BD\u03C4\u03BF\u03BB\u03B5\u03C2-\u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03B7\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03C9\u03BD" aria-hidden="true">#</a> \u0391\u03C0\u03BB\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 \u03C0\u03C1\u03BF\u03C3\u03B1\u03C1\u03BC\u03BF\u03C3\u03BC\u03AD\u03BD\u03C9\u03BD \u03C4\u03CD\u03C0\u03C9\u03BD \u03BC\u03B5 \u03BC\u03B1\u03BA\u03C1\u03BF\u03B5\u03BD\u03C4\u03BF\u03BB\u03AD\u03C2 \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03B7\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CE\u03BD</h4><p>\u0397 \u03C5\u03BB\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 \u03BC\u03B9\u03B1\u03C2 \u03BC\u03B1\u03BA\u03C1\u03BF\u03B5\u03BD\u03C4\u03BF\u03BB\u03AE\u03C2 \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03B7\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CE\u03BD \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C4\u03CC\u03C3\u03BF \u03B1\u03C0\u03BB\u03AE \u03CC\u03C3\u03BF <a href="https://crates.io/crates/mdbx_speedy" target="_blank" rel="noopener noreferrer"><code>mdbx_speedy</code></a> \u039F \u03BA\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2 \u03C4\u03B7\u03C2 \u03BC\u03B1\u03BA\u03C1\u03BF\u03B5\u03BD\u03C4\u03BF\u03BB\u03AE\u03C2 \u03AD\u03C7\u03B5\u03B9 \u03C9\u03C2 \u03B5\u03BE\u03AE\u03C2 :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // \u038C\u03BD\u03BF\u03BC\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03AE\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD Env
  Test // \u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0395\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE \u03C4\u03BF\u03C5 \u03B1\u03C1\u03B9\u03B8\u03BC\u03BF\u03CD \u03AD\u03BA\u03B4\u03BF\u03C3\u03B7\u03C2 \u03C4\u03B7\u03C2 libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u03A0\u03BF\u03BB\u03C5\u03BD\u03B7\u03BC\u03B1\u03C4\u03B9\u03BA\u03AE \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7 \u03BA\u03B1\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE
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
      sync_period : 65536, // \u03A3\u03B5 1/65536 \u03C4\u03BF\u03C5 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03BF\u03BB\u03AD\u03C0\u03C4\u03BF\u03C5
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
 MDBX // \u038C\u03BD\u03BF\u03BC\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03AE\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD Env
 Test // \u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD
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
  MDBX // \u039F\u03BD\u03CC\u03BC\u03B1\u03C4\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03CE\u03BD \u03B3\u03B9\u03B1 \u03C4\u03B7 \u03B2\u03AC\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD ENV
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
  // \u0393\u03C1\u03AE\u03B3\u03BF\u03C1\u03B7 \u03B3\u03C1\u03B1\u03C6\u03AE
  w!(Test1.set [2, 3],[4, 5]);

  // \u0393\u03C1\u03AE\u03B3\u03BF\u03C1\u03B7 \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7
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

  // \u03A0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AD\u03C2 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B5\u03C2 \u03C3\u03B5 \u03C0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AD\u03C2 \u03B2\u03AC\u03C3\u03B5\u03B9\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03C3\u03C4\u03B7\u03BD \u03AF\u03B4\u03B9\u03B1 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE
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

    // \u0397 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE \u03B8\u03B1 \u03B4\u03B5\u03C3\u03BC\u03B5\u03C5\u03C4\u03B5\u03AF \u03C3\u03C4\u03BF \u03C4\u03AD\u03BB\u03BF\u03C2 \u03C4\u03BF\u03C5 \u03C0\u03B5\u03B4\u03AF\u03BF\u03C5 \u03B5\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03AE\u03C2
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
</code></pre></div><p>\u039E\u03B5\u03BA\u03B9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03C4\u03BF <code>cargo add mdbx-speedy</code>\u03C3\u03C4\u03BF \u03B4\u03B9\u03BA\u03CC \u03C3\u03B1\u03C2 \u03AD\u03C1\u03B3\u03BF \u03BA\u03B1\u03B9 \u03C3\u03C4\u03B7 \u03C3\u03C5\u03BD\u03AD\u03C7\u03B5\u03B9\u03B1 \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF\u03C4\u03B5 \u03BD\u03B1 \u03C0\u03C1\u03BF\u03C3\u03B1\u03C1\u03BC\u03CC\u03C3\u03B5\u03C4\u03B5 \u03B3\u03C1\u03AE\u03B3\u03BF\u03C1\u03B1 \u03C4\u03BF\u03BD \u03C4\u03CD\u03C0\u03BF (\u03B4\u03B5\u03AF\u03C4\u03B5 <a href="https://github.com/rmw-lib/mdbx-example/blob/master/02/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/02</a> \u03B3\u03B9\u03B1 \u03BA\u03CE\u03B4\u03B9\u03BA\u03B1 \u03B5\u03C0\u03AF\u03B4\u03B5\u03B9\u03BE\u03B7\u03C2) <a href="https://github.com/rmw-lib/mdbx-example/blob/master/02/src/main.rs" target="_blank" rel="noopener noreferrer">.</a></p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // \u038C\u03BD\u03BF\u03BC\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03AE\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD Env
  Test // \u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD
}

fn main() -&gt; Result&lt;()&gt; {
  // \u0395\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE \u03C4\u03BF\u03C5 \u03B1\u03C1\u03B9\u03B8\u03BC\u03BF\u03CD \u03AD\u03BA\u03B4\u03BF\u03C3\u03B7\u03C2 \u03C4\u03B7\u03C2 libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u03A0\u03BF\u03BB\u03C5\u03BD\u03B7\u03BC\u03B1\u03C4\u03B9\u03BA\u03AE \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7 \u03BA\u03B1\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE
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
      sync_period : 65536, // \u03A3\u03B5 1/65536 \u03C4\u03BF\u03C5 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03BF\u03BB\u03AD\u03C0\u03C4\u03BF\u03C5
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
 MDBX // \u038C\u03BD\u03BF\u03BC\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03AE\u03C2 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD Env
 Test // \u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD
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
  MDBX // \u039F\u03BD\u03CC\u03BC\u03B1\u03C4\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BB\u03B7\u03C4\u03CE\u03BD \u03B3\u03B9\u03B1 \u03C4\u03B7 \u03B2\u03AC\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD ENV
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
  // \u0393\u03C1\u03AE\u03B3\u03BF\u03C1\u03B7 \u03B3\u03C1\u03B1\u03C6\u03AE
  w!(Test1.set [2, 3],[4, 5]);

  // \u0393\u03C1\u03AE\u03B3\u03BF\u03C1\u03B7 \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7
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

  // \u03A0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AD\u03C2 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B5\u03C2 \u03C3\u03B5 \u03C0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AD\u03C2 \u03B2\u03AC\u03C3\u03B5\u03B9\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03C3\u03C4\u03B7\u03BD \u03AF\u03B4\u03B9\u03B1 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE
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

    // \u0397 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE \u03B8\u03B1 \u03B4\u03B5\u03C3\u03BC\u03B5\u03C5\u03C4\u03B5\u03AF \u03C3\u03C4\u03BF \u03C4\u03AD\u03BB\u03BF\u03C2 \u03C4\u03BF\u03C5 \u03C0\u03B5\u03B4\u03AF\u03BF\u03C5 \u03B5\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03AE\u03C2
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
</code></pre></div><p>\u03A6\u03C5\u03C3\u03B9\u03BA\u03AC, \u03B5\u03BE\u03B1\u03BA\u03BF\u03BB\u03BF\u03C5\u03B8\u03B5\u03AF \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B5\u03BD\u03BF\u03C7\u03BB\u03B7\u03C4\u03B9\u03BA\u03CC \u03BD\u03B1 \u03B3\u03C1\u03AC\u03C6\u03B5\u03C4\u03B5 \u03C4\u03BF <code>#[derive(PartialEq, Debug, Readable, Writable, MdbxSpeedy)]</code> \u03B5\u03C0\u03B1\u03BD\u03B5\u03B9\u03BB\u03B7\u03BC\u03BC\u03AD\u03BD\u03B1, \u03BF\u03C0\u03CC\u03C4\u03B5 \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF\u03C4\u03B5 \u03BD\u03B1 \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03C4\u03B5 \u03C4\u03BF <a href="https://docs.rs/derive-alias/0.1.0/derive_alias" target="_blank" rel="noopener noreferrer"><code>derive_alias</code></a> \u03B3\u03B9\u03B1 \u03C0\u03B5\u03C1\u03B1\u03B9\u03C4\u03AD\u03C1\u03C9 \u03B1\u03C0\u03BB\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 \u03C4\u03BF\u03C5 \u03BA\u03CE\u03B4\u03B9\u03BA\u03B1.</p><h2 id="\u03C3\u03B7\u03BC\u03B5\u03B9\u03C9\u03C3\u03B7-\u03C3\u03C7\u03B5\u03C4\u03B9\u03BA\u03B1-\u03BC\u03B5-\u03C4\u03B7-\u03C7\u03C1\u03B7\u03C3\u03B7-\u03C4\u03B7\u03C2" tabindex="-1"><a class="header-anchor" href="#\u03C3\u03B7\u03BC\u03B5\u03B9\u03C9\u03C3\u03B7-\u03C3\u03C7\u03B5\u03C4\u03B9\u03BA\u03B1-\u03BC\u03B5-\u03C4\u03B7-\u03C7\u03C1\u03B7\u03C3\u03B7-\u03C4\u03B7\u03C2" aria-hidden="true">#</a> \u03A3\u03B7\u03BC\u03B5\u03AF\u03C9\u03C3\u03B7 \u03C3\u03C7\u03B5\u03C4\u03B9\u03BA\u03AC \u03BC\u03B5 \u03C4\u03B7 \u03C7\u03C1\u03AE\u03C3\u03B7 \u03C4\u03B7\u03C2</h2><h3 id="\u03C4\u03BF-\u03BC\u03B7\u03BA\u03BF\u03C2-\u03C4\u03BF\u03C5-\u03BA\u03BB\u03B5\u03B9\u03B4\u03B9\u03BF\u03C5" tabindex="-1"><a class="header-anchor" href="#\u03C4\u03BF-\u03BC\u03B7\u03BA\u03BF\u03C2-\u03C4\u03BF\u03C5-\u03BA\u03BB\u03B5\u03B9\u03B4\u03B9\u03BF\u03C5" aria-hidden="true">#</a> \u03A4\u03BF \u03BC\u03AE\u03BA\u03BF\u03C2 \u03C4\u03BF\u03C5 \u03BA\u03BB\u03B5\u03B9\u03B4\u03B9\u03BF\u03CD</h3><ul><li>\u0395\u03BB\u03AC\u03C7\u03B9\u03C3\u03C4\u03BF 0, \u03BC\u03AD\u03B3\u03B9\u03C3\u03C4\u03BF \u2248 \xBD \u03BC\u03AD\u03B3\u03B5\u03B8\u03BF\u03C2 \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1\u03C2 (\u03C0\u03C1\u03BF\u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03BF \u03BC\u03AD\u03B3\u03B5\u03B8\u03BF\u03C2 \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1\u03C2 4\u039A \u03C4\u03BF \u03BC\u03AD\u03B3\u03B9\u03C3\u03C4\u03BF \u03BC\u03AD\u03B3\u03B5\u03B8\u03BF\u03C2 \u03BA\u03BB\u03B5\u03B9\u03B4\u03B9\u03BF\u03CD \u03B5\u03AF\u03BD\u03B1\u03B9 2022 bytes), \u03BF\u03C1\u03AF\u03B6\u03B5\u03C4\u03B1\u03B9 \u03BA\u03B1\u03C4\u03AC \u03C4\u03B7\u03BD \u03B1\u03C1\u03C7\u03B9\u03BA\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD <code>pagesize</code> \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03C1\u03C5\u03B8\u03BC\u03B9\u03C3\u03C4\u03B5\u03AF \u03C3\u03B5 \u03CC\u03C7\u03B9 \u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03BF \u03B1\u03C0\u03CC <code>65536</code>\u03BA\u03B1\u03B9 \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B4\u03CD\u03BD\u03B1\u03BC\u03B7 \u03C4\u03BF\u03C5 2.</li></ul><h2 id="\u03C5\u03C0\u03BF\u03C3\u03B7\u03BC\u03B5\u03B9\u03C9\u03C3\u03B5\u03B9\u03C2" tabindex="-1"><a class="header-anchor" href="#\u03C5\u03C0\u03BF\u03C3\u03B7\u03BC\u03B5\u03B9\u03C9\u03C3\u03B5\u03B9\u03C2" aria-hidden="true">#</a> \u03A5\u03C0\u03BF\u03C3\u03B7\u03BC\u03B5\u03B9\u03CE\u03C3\u03B5\u03B9\u03C2</h2><p>\u0391\u03BD\u03B1\u03C6\u03AD\u03C1\u03BF\u03C5\u03BD \u03C4\u03B1 \u03C0\u03BB\u03B5\u03BF\u03BD\u03B5\u03BA\u03C4\u03AE\u03BC\u03B1\u03C4\u03B1 \u03C4\u03B7\u03C2 \u03BC\u03B5\u03C4\u03AC\u03B2\u03B1\u03C3\u03B7\u03C2 \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD LMDB \u03C3\u03C4\u03B7\u03BD MDBX.</p><blockquote><p>\u0397 Erigon \u03BE\u03B5\u03BA\u03AF\u03BD\u03B7\u03C3\u03B5 \u03BC\u03B5 \u03AD\u03BD\u03B1 backend \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD BoltDB, \u03C3\u03C4\u03B7 \u03C3\u03C5\u03BD\u03AD\u03C7\u03B5\u03B9\u03B1 \u03C0\u03C1\u03CC\u03C3\u03B8\u03B5\u03C3\u03B5 \u03C5\u03C0\u03BF\u03C3\u03C4\u03AE\u03C1\u03B9\u03BE\u03B7 \u03B3\u03B9\u03B1 BadgerDB \u03BA\u03B1\u03B9 \u03C4\u03B5\u03BB\u03B9\u03BA\u03AC \u03BC\u03B5\u03C4\u03B1\u03C6\u03AD\u03C1\u03B8\u03B7\u03BA\u03B5 \u03C0\u03BB\u03AE\u03C1\u03C9\u03C2 \u03C3\u03B5 LMDB.\u03A3\u03B5 \u03BA\u03AC\u03C0\u03BF\u03B9\u03BF \u03C3\u03B7\u03BC\u03B5\u03AF\u03BF \u03B1\u03BD\u03C4\u03B9\u03BC\u03B5\u03C4\u03C9\u03C0\u03AF\u03C3\u03B1\u03BC\u03B5 \u03C0\u03C1\u03BF\u03B2\u03BB\u03AE\u03BC\u03B1\u03C4\u03B1 \u03C3\u03C4\u03B1\u03B8\u03B5\u03C1\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2 \u03C0\u03BF\u03C5 \u03C0\u03C1\u03BF\u03BA\u03BB\u03AE\u03B8\u03B7\u03BA\u03B1\u03BD \u03B1\u03C0\u03CC \u03C4\u03B7 \u03C7\u03C1\u03AE\u03C3\u03B7 \u03C4\u03B7\u03C2 LMDB \u03BA\u03B1\u03B9 \u03C4\u03B1 \u03BF\u03C0\u03BF\u03AF\u03B1 \u03B4\u03B5\u03BD \u03B5\u03AF\u03C7\u03B1\u03BD \u03C0\u03C1\u03BF\u03B2\u03BB\u03B5\u03C6\u03B8\u03B5\u03AF \u03B1\u03C0\u03CC \u03C4\u03BF\u03C5\u03C2 \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD\u03C2 \u03C4\u03B7\u03C2. \u0391\u03C0\u03CC \u03C4\u03CC\u03C4\u03B5 \u03B5\u03BE\u03B5\u03C4\u03AC\u03B6\u03BF\u03C5\u03BC\u03B5 \u03AD\u03BD\u03B1 \u03BA\u03B1\u03BB\u03AC \u03C5\u03C0\u03BF\u03C3\u03C4\u03B7\u03C1\u03B9\u03B6\u03CC\u03BC\u03B5\u03BD\u03BF \u03C0\u03B1\u03C1\u03AC\u03B3\u03C9\u03B3\u03BF \u03C4\u03B7\u03C2 LMDB \u03C0\u03BF\u03C5 \u03BF\u03BD\u03BF\u03BC\u03AC\u03B6\u03B5\u03C4\u03B1\u03B9 MDBX \u03BA\u03B1\u03B9 \u03B5\u03BB\u03C0\u03AF\u03B6\u03BF\u03C5\u03BC\u03B5 \u03BD\u03B1 \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03BF\u03C5\u03BC\u03B5 \u03C4\u03B9\u03C2 \u03B2\u03B5\u03BB\u03C4\u03B9\u03CE\u03C3\u03B5\u03B9\u03C2 \u03C3\u03C4\u03B1\u03B8\u03B5\u03C1\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2 \u03BA\u03B1\u03B9 \u03B5\u03BD\u03B4\u03B5\u03C7\u03BF\u03BC\u03AD\u03BD\u03C9\u03C2 \u03BD\u03B1 \u03C3\u03C5\u03BD\u03B5\u03C1\u03B3\u03B1\u03C3\u03C4\u03BF\u03CD\u03BC\u03B5 \u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03BF \u03C3\u03C4\u03BF \u03BC\u03AD\u03BB\u03BB\u03BF\u03BD.\u0397 \u03B5\u03BD\u03C3\u03C9\u03BC\u03AC\u03C4\u03C9\u03C3\u03B7 \u03C4\u03BF\u03C5 MDBX \u03AD\u03C7\u03B5\u03B9 \u03C0\u03BB\u03AD\u03BF\u03BD \u03BF\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03C9\u03B8\u03B5\u03AF \u03BA\u03B1\u03B9 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03BA\u03B1\u03B9\u03C1\u03CC\u03C2 \u03B3\u03B9\u03B1 \u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03B5\u03C2 \u03B4\u03BF\u03BA\u03B9\u03BC\u03AD\u03C2 \u03BA\u03B1\u03B9 \u03C4\u03B5\u03BA\u03BC\u03B7\u03C1\u03AF\u03C9\u03C3\u03B7.</p><p>\u039F\u03C6\u03AD\u03BB\u03B7 \u03B1\u03C0\u03CC \u03C4\u03B7 \u03BC\u03B5\u03C4\u03AC\u03B2\u03B1\u03C3\u03B7 \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD LMDB \u03C3\u03C4\u03B7\u03BD MDBX.</p><ol><li><p>\u0397 \u03B1\u03BD\u03AC\u03C0\u03C4\u03C5\u03BE\u03B7 \u03C4\u03BF\u03C5 &quot;\u03C7\u03CE\u03C1\u03BF\u03C5 (\u03B3\u03B5\u03C9\u03BC\u03B5\u03C4\u03C1\u03AF\u03B1)&quot; \u03C4\u03C9\u03BD \u03B1\u03C1\u03C7\u03B5\u03AF\u03C9\u03BD \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03B5\u03AF \u03C3\u03C9\u03C3\u03C4\u03AC. \u0391\u03C5\u03C4\u03CC \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C3\u03B7\u03BC\u03B1\u03BD\u03C4\u03B9\u03BA\u03CC, \u03B5\u03B9\u03B4\u03B9\u03BA\u03AC \u03C3\u03C4\u03B1 Windows. \u03A3\u03C4\u03B7\u03BD LMDB \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03BA\u03B1\u03B8\u03BF\u03C1\u03AF\u03C3\u03B5\u03C4\u03B5 \u03C4\u03BF \u03BC\u03AD\u03B3\u03B5\u03B8\u03BF\u03C2 \u03C4\u03BF\u03C5 \u03C7\u03AC\u03C1\u03C4\u03B7 \u03BC\u03BD\u03AE\u03BC\u03B7\u03C2 \u03BC\u03AF\u03B1 \u03C6\u03BF\u03C1\u03AC \u03B5\u03BA \u03C4\u03C9\u03BD \u03C0\u03C1\u03BF\u03C4\u03AD\u03C1\u03C9\u03BD (\u03B5\u03C0\u03AF \u03C4\u03BF\u03C5 \u03C0\u03B1\u03C1\u03CC\u03BD\u03C4\u03BF\u03C2 \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03BF\u03CD\u03BC\u03B5 2Tb \u03B1\u03C0\u03CC \u03C0\u03C1\u03BF\u03B5\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE) \u03BA\u03B1\u03B9 \u03B1\u03BD \u03C4\u03BF \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03BC\u03B5\u03B3\u03B1\u03BB\u03CE\u03C3\u03B5\u03B9 \u03C0\u03AD\u03C1\u03B1 \u03B1\u03C0\u03CC \u03B1\u03C5\u03C4\u03CC \u03C4\u03BF \u03CC\u03C1\u03B9\u03BF, \u03B7 \u03B4\u03B9\u03B1\u03B4\u03B9\u03BA\u03B1\u03C3\u03AF\u03B1 \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03C0\u03B1\u03BD\u03B5\u03BA\u03BA\u03B9\u03BD\u03AE\u03C3\u03B5\u03B9. \u03A3\u03C4\u03B1 Windows, \u03BF \u03BF\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03C4\u03BF\u03C5 \u03BC\u03B5\u03B3\u03AD\u03B8\u03BF\u03C5\u03C2 \u03C4\u03BF\u03C5 \u03C7\u03AC\u03C1\u03C4\u03B7 \u03BC\u03BD\u03AE\u03BC\u03B7\u03C2 \u03C3\u03B5 2 TB \u03B8\u03B1 \u03AD\u03BA\u03B1\u03BD\u03B5 \u03C4\u03BF \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03B5\u03BE\u03B1\u03C1\u03C7\u03AE\u03C2 \u03BC\u03B5\u03B3\u03AC\u03BB\u03BF \u03BA\u03B1\u03C4\u03AC 2 TB, \u03C0\u03C1\u03AC\u03B3\u03BC\u03B1 \u03C0\u03BF\u03C5 \u03B4\u03B5\u03BD \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C0\u03BF\u03BB\u03CD \u03B2\u03BF\u03BB\u03B9\u03BA\u03CC. \u03A3\u03C4\u03BF MDBX, \u03C4\u03BF \u03BC\u03AD\u03B3\u03B5\u03B8\u03BF\u03C2 \u03C4\u03BF\u03C5 \u03C7\u03AC\u03C1\u03C4\u03B7 \u03BC\u03BD\u03AE\u03BC\u03B7\u03C2 \u03B1\u03C5\u03BE\u03AC\u03BD\u03B5\u03C4\u03B1\u03B9 \u03C3\u03B5 \u03B2\u03AE\u03BC\u03B1\u03C4\u03B1 \u03C4\u03C9\u03BD 2 Gb. \u0391\u03C5\u03C4\u03CC \u03C3\u03B7\u03BC\u03B1\u03AF\u03BD\u03B5\u03B9 \u03C0\u03B5\u03C1\u03B9\u03C3\u03C4\u03B1\u03C3\u03B9\u03B1\u03BA\u03AE \u03B5\u03C0\u03B1\u03BD\u03B1\u03C0\u03C1\u03BF\u03C3\u03B4\u03B9\u03BF\u03C1\u03B9\u03C3\u03BC\u03CC, \u03B1\u03BB\u03BB\u03AC \u03AD\u03C7\u03B5\u03B9 \u03C9\u03C2 \u03B1\u03C0\u03BF\u03C4\u03AD\u03BB\u03B5\u03C3\u03BC\u03B1 \u03BA\u03B1\u03BB\u03CD\u03C4\u03B5\u03C1\u03B7 \u03B5\u03BC\u03C0\u03B5\u03B9\u03C1\u03AF\u03B1 \u03B3\u03B9\u03B1 \u03C4\u03BF\u03BD \u03C7\u03C1\u03AE\u03C3\u03C4\u03B7.</p></li><li><p>\u03A4\u03BF MDBX \u03B4\u03B9\u03B1\u03B8\u03AD\u03C4\u03B5\u03B9 \u03B1\u03C5\u03C3\u03C4\u03B7\u03C1\u03CC\u03C4\u03B5\u03C1\u03BF\u03C5\u03C2 \u03B5\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5\u03C2 \u03B3\u03B9\u03B1 \u03C4\u03B7\u03BD \u03C4\u03B1\u03C5\u03C4\u03CC\u03C7\u03C1\u03BF\u03BD\u03B7 \u03C7\u03C1\u03AE\u03C3\u03B7 \u03C4\u03B7\u03C2 \u03B5\u03C0\u03B5\u03BE\u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1\u03C2 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03CE\u03BD \u03BA\u03B1\u03B9 \u03C4\u03B7\u03BD \u03B5\u03C0\u03B9\u03BA\u03AC\u03BB\u03C5\u03C8\u03B7 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03CE\u03BD \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7\u03C2 \u03BA\u03B1\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE\u03C2 \u03C3\u03C4\u03BF \u03AF\u03B4\u03B9\u03BF \u03BD\u03AE\u03BC\u03B1 \u03B5\u03BA\u03C4\u03AD\u03BB\u03B5\u03C3\u03B7\u03C2. \u0391\u03C5\u03C4\u03CC \u03BC\u03B1\u03C2 \u03B5\u03C0\u03B9\u03C4\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03BD\u03C4\u03BF\u03C0\u03AF\u03C3\u03BF\u03C5\u03BC\u03B5 \u03BF\u03C1\u03B9\u03C3\u03BC\u03AD\u03BD\u03B1 \u03BC\u03B7 \u03C0\u03C1\u03BF\u03C6\u03B1\u03BD\u03AE \u03C3\u03C6\u03AC\u03BB\u03BC\u03B1\u03C4\u03B1 \u03BA\u03B1\u03B9 \u03BA\u03B1\u03B8\u03B9\u03C3\u03C4\u03AC \u03C4\u03B7 \u03C3\u03C5\u03BC\u03C0\u03B5\u03C1\u03B9\u03C6\u03BF\u03C1\u03AC \u03C0\u03B9\u03BF \u03C0\u03C1\u03BF\u03B2\u03BB\u03AD\u03C8\u03B9\u03BC\u03B7.<br> \u03A3\u03B5 \u03C0\u03AC\u03BD\u03C9 \u03B1\u03C0\u03CC 5 \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1 (\u03B1\u03C0\u03CC \u03C4\u03CC\u03C4\u03B5 \u03C0\u03BF\u03C5 \u03B4\u03B9\u03B1\u03C7\u03C9\u03C1\u03AF\u03C3\u03C4\u03B7\u03BA\u03B5 \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD LMDB), \u03C4\u03BF MDBX \u03AD\u03C7\u03B5\u03B9 \u03C3\u03C5\u03C3\u03C3\u03C9\u03C1\u03B5\u03CD\u03C3\u03B5\u03B9 \u03AD\u03BD\u03B1 \u03BC\u03B5\u03B3\u03AC\u03BB\u03BF \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC \u03B4\u03B9\u03BF\u03C1\u03B8\u03CE\u03C3\u03B5\u03C9\u03BD \u03B1\u03C3\u03C6\u03B1\u03BB\u03B5\u03AF\u03B1\u03C2 \u03BA\u03B1\u03B9 \u03B4\u03B9\u03BF\u03C1\u03B8\u03CE\u03C3\u03B5\u03C9\u03BD heisenbug \u03C0\u03BF\u03C5, \u03B1\u03C0&#39; \u03CC\u03C3\u03BF \u03B3\u03BD\u03C9\u03C1\u03AF\u03B6\u03BF\u03C5\u03BC\u03B5, \u03B5\u03BE\u03B1\u03BA\u03BF\u03BB\u03BF\u03C5\u03B8\u03BF\u03CD\u03BD \u03BD\u03B1 \u03C5\u03C0\u03AC\u03C1\u03C7\u03BF\u03C5\u03BD \u03C3\u03C4\u03B7\u03BD LMDB. \u039F\u03C1\u03B9\u03C3\u03BC\u03AD\u03BD\u03B1 \u03B1\u03C0\u03CC \u03B1\u03C5\u03C4\u03AC \u03B1\u03BD\u03B1\u03BA\u03B1\u03BB\u03CD\u03C6\u03B8\u03B7\u03BA\u03B1\u03BD \u03BA\u03B1\u03C4\u03AC \u03C4\u03B7 \u03B4\u03B9\u03AC\u03C1\u03BA\u03B5\u03B9\u03B1 \u03C4\u03C9\u03BD \u03B4\u03BF\u03BA\u03B9\u03BC\u03CE\u03BD \u03BC\u03B1\u03C2, \u03BA\u03B1\u03B9 \u03BF\u03B9 \u03C3\u03C5\u03BD\u03C4\u03B7\u03C1\u03B7\u03C4\u03AD\u03C2 \u03C4\u03BF\u03C5 MDBX \u03C4\u03B1 \u03C0\u03AE\u03C1\u03B1\u03BD \u03C3\u03BF\u03B2\u03B1\u03C1\u03AC \u03C5\u03C0\u03CC\u03C8\u03B7 \u03C4\u03BF\u03C5\u03C2 \u03BA\u03B1\u03B9 \u03C4\u03B1 \u03B4\u03B9\u03CC\u03C1\u03B8\u03C9\u03C3\u03B1\u03BD \u03B1\u03BC\u03AD\u03C3\u03C9\u03C2.</p></li><li><p>\u038C\u03C4\u03B1\u03BD \u03C0\u03C1\u03CC\u03BA\u03B5\u03B9\u03C4\u03B1\u03B9 \u03B3\u03B9\u03B1 \u03B2\u03AC\u03C3\u03B5\u03B9\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03C0\u03BF\u03C5 \u03C4\u03C1\u03BF\u03C0\u03BF\u03C0\u03BF\u03B9\u03BF\u03CD\u03BD \u03B4\u03B9\u03B1\u03C1\u03BA\u03CE\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1, \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD\u03BD \u03B1\u03C1\u03BA\u03B5\u03C4\u03CC \u03B1\u03BD\u03B1\u03BA\u03C4\u03AE\u03C3\u03B9\u03BC\u03BF \u03C7\u03CE\u03C1\u03BF (\u03B5\u03C0\u03AF\u03C3\u03B7\u03C2 \u03B3\u03BD\u03C9\u03C3\u03C4\u03CC \u03C9\u03C2 &quot;freelist&quot; \u03C3\u03C4\u03B7\u03BD \u03BF\u03C1\u03BF\u03BB\u03BF\u03B3\u03AF\u03B1 \u03C4\u03B7\u03C2 LMDB). \u03A7\u03C1\u03B5\u03B9\u03AC\u03C3\u03C4\u03B7\u03BA\u03B5 \u03BD\u03B1 \u03B5\u03C0\u03B9\u03B4\u03B9\u03BF\u03C1\u03B8\u03CE\u03C3\u03BF\u03C5\u03BC\u03B5 \u03C4\u03BF LMDB \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03B4\u03B9\u03BF\u03C1\u03B8\u03CE\u03C3\u03BF\u03C5\u03BC\u03B5 \u03C4\u03B9\u03C2 \u03C0\u03B9\u03BF \u03C3\u03BF\u03B2\u03B1\u03C1\u03AD\u03C2 \u03B5\u03BB\u03BB\u03B5\u03AF\u03C8\u03B5\u03B9\u03C2 \u03C3\u03C4\u03BF \u03C7\u03B5\u03B9\u03C1\u03B9\u03C3\u03BC\u03CC \u03C4\u03BF\u03C5 \u03B1\u03BD\u03B1\u03BA\u03C4\u03AE\u03C3\u03B9\u03BC\u03BF\u03C5 \u03C7\u03CE\u03C1\u03BF\u03C5 <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide" target="_blank" rel="noopener noreferrer">(\u03B1\u03BD\u03AC\u03BB\u03C5\u03C3\u03B7)</a>. \u03A4\u03BF MDBX \u03AD\u03C7\u03B5\u03B9 \u03B4\u03CE\u03C3\u03B5\u03B9 <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide%EF%BC%89%E3%80%82MDBX%E5%AF%B9%E5%8F%AF%E5%9B%9E%E6%94%B6%E7%A9%BA%E9%97%B4%E7%9A%84%E6%9C%89%E6%95%88%E5%A4%84%E7%90%86%E8%BF%9B%E8%A1%8C%E4%BA%86%E7%89%B9%E5%88%AB%E7%9A%84%E5%85%B3%E6%B3%A8%EF%BC%8C%E5%88%B0%E7%9B%AE%E5%89%8D%E4%B8%BA%E6%AD%A2%EF%BC%8C%E8%BF%98%E4%B8%8D%E9%9C%80%E8%A6%81%E6%89%93%E8%A1%A5%E4%B8%81%E3%80%82" target="_blank" rel="noopener noreferrer">\u03B9\u03B4\u03B9\u03B1\u03AF\u03C4\u03B5\u03C1\u03B7 \u03C0\u03C1\u03BF\u03C3\u03BF\u03C7\u03AE \u03C3\u03C4\u03BF\u03BD \u03B1\u03C0\u03BF\u03C4\u03B5\u03BB\u03B5\u03C3\u03BC\u03B1\u03C4\u03B9\u03BA\u03CC \u03C7\u03B5\u03B9\u03C1\u03B9\u03C3\u03BC\u03CC \u03C4\u03BF\u03C5 \u03B1\u03BD\u03B1\u03BA\u03C4\u03AE\u03C3\u03B9\u03BC\u03BF\u03C5 \u03C7\u03CE\u03C1\u03BF\u03C5 \u03BA\u03B1\u03B9, \u03BC\u03AD\u03C7\u03C1\u03B9 \u03C3\u03C4\u03B9\u03B3\u03BC\u03AE\u03C2, \u03B4\u03B5\u03BD \u03AD\u03C7\u03B5\u03B9 \u03C7\u03C1\u03B5\u03B9\u03B1\u03C3\u03C4\u03B5\u03AF \u03BD\u03B1 \u03B5\u03C0\u03B9\u03B4\u03B9\u03BF\u03C1\u03B8\u03C9\u03B8\u03B5\u03AF</a>.</p></li><li><p>\u0392\u03AC\u03C3\u03B5\u03B9 \u03C4\u03C9\u03BD \u03B4\u03BF\u03BA\u03B9\u03BC\u03CE\u03BD \u03BC\u03B1\u03C2, \u03C4\u03BF MDBX \u03B5\u03AF\u03C7\u03B5 \u03B5\u03BB\u03B1\u03C6\u03C1\u03CE\u03C2 \u03BA\u03B1\u03BB\u03CD\u03C4\u03B5\u03C1\u03B5\u03C2 \u03B5\u03C0\u03B9\u03B4\u03CC\u03C3\u03B5\u03B9\u03C2 \u03C3\u03C4\u03BF\u03C5\u03C2 \u03C6\u03CC\u03C1\u03C4\u03BF\u03C5\u03C2 \u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1\u03C2 \u03BC\u03B1\u03C2.</p></li><li><p>\u03A4\u03BF MDBX \u03B1\u03C0\u03BF\u03BA\u03B1\u03BB\u03CD\u03C0\u03C4\u03B5\u03B9 \u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03B1 \u03B5\u03C3\u03C9\u03C4\u03B5\u03C1\u03B9\u03BA\u03AC \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03C4\u03B7\u03BB\u03B5\u03BC\u03B5\u03C4\u03C1\u03AF\u03B1\u03C2 - \u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03B5\u03C2 \u03BC\u03B5\u03C4\u03C1\u03AE\u03C3\u03B5\u03B9\u03C2 \u03C3\u03C7\u03B5\u03C4\u03B9\u03BA\u03AC \u03BC\u03B5 \u03C4\u03BF \u03C4\u03B9 \u03C3\u03C5\u03BC\u03B2\u03B1\u03AF\u03BD\u03B5\u03B9 \u03C3\u03C4\u03BF \u03B5\u03C3\u03C9\u03C4\u03B5\u03C1\u03B9\u03BA\u03CC \u03C4\u03B7\u03C2 \u03B2\u03AC\u03C3\u03B7\u03C2 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD. \u039A\u03B1\u03B9 \u03AD\u03C7\u03BF\u03C5\u03BC\u03B5 \u03B1\u03C5\u03C4\u03AC \u03C4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03C3\u03C4\u03BF Grafana - \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03BB\u03B1\u03BC\u03B2\u03AC\u03BD\u03BF\u03C5\u03BC\u03B5 \u03BA\u03B1\u03BB\u03CD\u03C4\u03B5\u03C1\u03B5\u03C2 \u03B1\u03C0\u03BF\u03C6\u03AC\u03C3\u03B5\u03B9\u03C2 \u03C3\u03C7\u03B5\u03C4\u03B9\u03BA\u03AC \u03BC\u03B5 \u03C4\u03BF \u03C3\u03C7\u03B5\u03B4\u03B9\u03B1\u03C3\u03BC\u03CC \u03B5\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03CE\u03BD. \u0393\u03B9\u03B1 \u03C0\u03B1\u03C1\u03AC\u03B4\u03B5\u03B9\u03B3\u03BC\u03B1, \u03BC\u03B5\u03C4\u03AC \u03C4\u03B7\u03BD \u03C0\u03BB\u03AE\u03C1\u03B7 \u03BC\u03B5\u03C4\u03AC\u03B2\u03B1\u03C3\u03B7 \u03C3\u03C4\u03BF MDBX (\u03BA\u03B1\u03C4\u03B1\u03C1\u03B3\u03CE\u03BD\u03C4\u03B1\u03C2 \u03C4\u03B7\u03BD \u03C5\u03C0\u03BF\u03C3\u03C4\u03AE\u03C1\u03B9\u03BE\u03B7 \u03C4\u03B7\u03C2 LMDB), \u03B8\u03B1 \u03B5\u03C6\u03B1\u03C1\u03BC\u03CC\u03C3\u03BF\u03C5\u03BC\u03B5 \u03BC\u03B9\u03B1 \u03C0\u03BF\u03BB\u03B9\u03C4\u03B9\u03BA\u03AE &quot;\u03B4\u03AD\u03C3\u03BC\u03B5\u03C5\u03C3\u03B7\u03C2 \u03BC\u03B9\u03C3\u03BF\u03B3\u03B5\u03BC\u03AC\u03C4\u03B7\u03C2 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE\u03C2&quot; \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03B1\u03C0\u03BF\u03C6\u03CD\u03B3\u03BF\u03C5\u03BC\u03B5 \u03C4\u03B9\u03C2 \u03B5\u03C0\u03B1\u03C6\u03AD\u03C2 \u03C5\u03C0\u03B5\u03C1\u03C7\u03B5\u03AF\u03BB\u03B9\u03C3\u03B7\u03C2/\u03B1\u03C0\u03BF\u03C3\u03C5\u03BC\u03C0\u03AF\u03B5\u03C3\u03B7\u03C2 \u03C4\u03BF\u03C5 \u03B4\u03AF\u03C3\u03BA\u03BF\u03C5. \u0391\u03C5\u03C4\u03CC \u03B8\u03B1 \u03B1\u03C0\u03BB\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03B9 \u03C0\u03B5\u03C1\u03B1\u03B9\u03C4\u03AD\u03C1\u03C9 \u03C4\u03BF\u03BD \u03BA\u03CE\u03B4\u03B9\u03BA\u03AC \u03BC\u03B1\u03C2 \u03C7\u03C9\u03C1\u03AF\u03C2 \u03BD\u03B1 \u03B5\u03C0\u03B7\u03C1\u03B5\u03AC\u03C3\u03B5\u03B9 \u03C4\u03B7\u03BD \u03B1\u03C0\u03CC\u03B4\u03BF\u03C3\u03B7.</p></li><li><p>\u03A4\u03BF MDBX \u03C5\u03C0\u03BF\u03C3\u03C4\u03B7\u03C1\u03AF\u03B6\u03B5\u03B9 \u03C4\u03B7 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 &quot;\u0391\u03C0\u03BF\u03BA\u03BB\u03B5\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC \u03AC\u03BD\u03BF\u03B9\u03B3\u03BC\u03B1&quot; - \u03C4\u03B7 \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03BF\u03CD\u03BC\u03B5 \u03B3\u03B9\u03B1 \u03BC\u03B5\u03C4\u03B1\u03BD\u03B1\u03C3\u03C4\u03B5\u03CD\u03C3\u03B5\u03B9\u03C2 \u03B2\u03AC\u03C3\u03B5\u03C9\u03BD \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03B1\u03C0\u03BF\u03C4\u03C1\u03AD\u03C8\u03BF\u03C5\u03BC\u03B5 \u03C4\u03B7\u03BD \u03C0\u03C1\u03CC\u03C3\u03B2\u03B1\u03C3\u03B7 \u03AC\u03BB\u03BB\u03C9\u03BD \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C3\u03C4\u03CE\u03BD \u03C3\u03C4\u03B7 \u03B2\u03AC\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03BA\u03B1\u03C4\u03AC \u03C4\u03B7 \u03B4\u03B9\u03AC\u03C1\u03BA\u03B5\u03B9\u03B1 \u03C4\u03B7\u03C2 \u03B4\u03B9\u03B1\u03B4\u03B9\u03BA\u03B1\u03C3\u03AF\u03B1\u03C2 \u03BC\u03B5\u03C4\u03AC\u03B2\u03B1\u03C3\u03B7\u03C2.</p></li></ol></blockquote><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p><a href="https://github.com/ledgerwatch/erigon/wiki/Criteria-for-transitioning-from-Alpha-to-Beta#switch-from-lmdb-to-mdbx" target="_blank" rel="noopener noreferrer">\u03A4\u03BF Erigon (\u03BF \u03C0\u03B5\u03BB\u03AC\u03C4\u03B7\u03C2 Ethernet \u03B5\u03C0\u03CC\u03BC\u03B5\u03BD\u03B7\u03C2 \u03B3\u03B5\u03BD\u03B9\u03AC\u03C2) \u03AC\u03BB\u03BB\u03B1\u03BE\u03B5 \u03C0\u03C1\u03CC\u03C3\u03C6\u03B1\u03C4\u03B1 \u03B1\u03C0\u03CC LMDB \u03C3\u03B5 MDBX.</a> <a href="#fnref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,160);function at(rt,ot){const e=o("RouterLink");return d(),l(u,null,[g,b,m,_,t("nav",h,[t("ul",null,[t("li",null,[s(e,{to:"#\u03B1\u03C0\u03BF\u03C3\u03C0\u03B1\u03C3\u03BC\u03B1\u03C4\u03B1"},{default:a(()=>[c]),_:1})]),t("li",null,[s(e,{to:"#\u03C4\u03B9-\u03B5\u03B9\u03BD\u03B1\u03B9-\u03B7-libmdbx"},{default:a(()=>[f]),_:1})]),t("li",null,[s(e,{to:"#\u03C3\u03B5\u03BC\u03B9\u03BD\u03B1\u03C1\u03B9\u03B1"},{default:a(()=>[x]),_:1}),t("ul",null,[t("li",null,[s(e,{to:"#\u03C0\u03C9\u03C2-\u03BD\u03B1-\u03B5\u03BA\u03C4\u03B5\u03BB\u03B5\u03C3\u03B5\u03C4\u03B5-\u03C4\u03BF-\u03C0\u03B1\u03C1\u03B1\u03B4\u03B5\u03B9\u03B3\u03BC\u03B1"},{default:a(()=>[q]),_:1})]),t("li",null,[s(e,{to:"#\u03C0\u03B1\u03C1\u03B1\u03B4\u03B5\u03B9\u03B3\u03BC\u03B1-1-\u03B3\u03C1\u03B1\u03C6\u03BF\u03BD\u03C4\u03B1\u03C2-set-key-val-\u03BA\u03B1\u03B9-\u03B4\u03B9\u03B1\u03B2\u03B1\u03B6\u03BF\u03BD\u03C4\u03B1\u03C2-get-key"},{default:a(()=>[v]),_:1}),t("ul",null,[t("li",null,[s(e,{to:"#\u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C2"},{default:a(()=>[k]),_:1})]),t("li",null,[s(e,{to:"#\u03B5\u03BA\u03C4\u03B5\u03BB\u03B5\u03C3\u03C4\u03B5-\u03C4\u03B7\u03BD-\u03B5\u03BE\u03BF\u03B4\u03BF"},{default:a(()=>[y]),_:1})]),t("li",null,[s(e,{to:"#\u03C0\u03B5\u03C1\u03B9\u03B3\u03C1\u03B1\u03C6\u03B7-\u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C5"},{default:a(()=>[D]),_:1}),t("ul",null,[t("li",null,[s(e,{to:"#env-rw-\u03BF\u03C1\u03B9\u03C3\u03BC\u03BF\u03C2-\u03C4\u03B7\u03C2-\u03B2\u03B1\u03C3\u03B7\u03C2-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD"},{default:a(()=>[w]),_:1})]),t("li",null,[s(e,{to:"#\u03BC\u03B1\u03BA\u03C1\u03BF\u03C3\u03BA\u03BF\u03C0\u03B9\u03BA\u03B7-\u03B5\u03C0\u03B5\u03BA\u03C4\u03B1\u03C3\u03B7"},{default:a(()=>[E]),_:1})]),t("li",null,[s(e,{to:"#anyhow-\u03BA\u03B1\u03B9-lazy-static"},{default:a(()=>[B]),_:1})]),t("li",null,[s(e,{to:"#\u03B7-\u03BC\u03B1\u03BA\u03C1\u03BF\u03B5\u03BD\u03C4\u03BF\u03BB\u03B7-mdbx"},{default:a(()=>[T]),_:1})]),t("li",null,[s(e,{to:"#\u03BD\u03B7\u03BC\u03B1\u03C4\u03B1-\u03BA\u03B1\u03B9-\u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03B5\u03C2"},{default:a(()=>[M]),_:1})]),t("li",null,[s(e,{to:"#\u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C3\u03B7-\u03BA\u03B1\u03B9-\u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03B7-\u03B4\u03C5\u03B1\u03B4\u03B9\u03BA\u03C9\u03BD-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD"},{default:a(()=>[N]),_:1})])])])])]),t("li",null,[s(e,{to:"#\u03C0\u03B1\u03C1\u03B1\u03B4\u03B5\u03B9\u03B3\u03BC\u03B1-2-\u03C4\u03C5\u03C0\u03BF\u03B9-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD-\u03C3\u03B7\u03BC\u03B1\u03B9\u03B5\u03C2-\u03B2\u03B1\u03C3\u03B7\u03C2-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD-\u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03B7-\u03B4\u03B9\u03B1\u03C3\u03C7\u03B9\u03C3\u03B7"},{default:a(()=>[S]),_:1}),t("ul",null,[t("li",null,[s(e,{to:"#\u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C2-1"},{default:a(()=>[X]),_:1})]),t("li",null,[s(e,{to:"#\u03B5\u03BA\u03C4\u03B5\u03BB\u03B5\u03C3\u03C4\u03B5-\u03C4\u03B7\u03BD-\u03B5\u03BE\u03BF\u03B4\u03BF-1"},{default:a(()=>[R]),_:1})]),t("li",null,[s(e,{to:"#\u03B3\u03C1\u03B7\u03B3\u03BF\u03C1\u03B5\u03C2-\u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C3\u03B5\u03B9\u03C2-\u03BA\u03B1\u03B9-\u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03B5\u03C2"},{default:a(()=>[O]),_:1})]),t("li",null,[s(e,{to:"#\u03C4\u03C5\u03C0\u03BF\u03B9-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD"},{default:a(()=>[C]),_:1}),t("ul",null,[t("li",null,[s(e,{to:"#\u03C0\u03C1\u03BF\u03BA\u03B1\u03B8\u03BF\u03C1\u03B9\u03C3\u03BC\u03B5\u03BD\u03BF\u03B9-\u03C4\u03C5\u03C0\u03BF\u03B9-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD"},{default:a(()=>[V]),_:1})])])]),t("li",null,[s(e,{to:"#\u03C3\u03B7\u03BC\u03B1\u03B9\u03B5\u03C2-\u03B2\u03B1\u03C3\u03B7\u03C2-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD"},{default:a(()=>[U]),_:1}),t("ul",null,[t("li",null,[s(e,{to:"#dupsort-\u03B5\u03BD\u03B1-\u03BA\u03BB\u03B5\u03B9\u03B4\u03B9-\u03B1\u03BD\u03C4\u03B9\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03B9-\u03C3\u03B5-\u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03BF\u03C4\u03B5\u03C1\u03B5\u03C2-\u03B1\u03C0\u03BF-\u03BC\u03B9\u03B1-\u03C4\u03B9\u03BC\u03B5\u03C2"},{default:a(()=>[I]),_:1})]),t("li",null,[s(e,{to:"#dup-key-iterator-\u03C0\u03BF\u03C5-\u03B5\u03C0\u03B9\u03C3\u03C4\u03C1\u03B5\u03C6\u03B5\u03B9-\u03BF\u03BB\u03B5\u03C2-\u03C4\u03B9\u03C2-\u03C4\u03B9\u03BC\u03B5\u03C2-\u03C0\u03BF\u03C5-\u03B1\u03BD\u03C4\u03B9\u03C3\u03C4\u03BF\u03B9\u03C7\u03BF\u03C5\u03BD-\u03C3\u03B5-\u03B5\u03BD\u03B1-\u03BA\u03BB\u03B5\u03B9\u03B4\u03B9"},{default:a(()=>[A]),_:1})]),t("li",null,[s(e,{to:"#\u03C0\u03C1\u03BF\u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03B5\u03BD\u03B5\u03C2-\u03C3\u03B7\u03BC\u03B1\u03B9\u03B5\u03C2-\u03B2\u03B1\u03C3\u03B7\u03C2-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD-\u03C0\u03BF\u03C5-\u03C0\u03C1\u03BF\u03C3\u03B1\u03C1\u03C4\u03C9\u03BD\u03C4\u03B1\u03B9-\u03B1\u03C5\u03C4\u03BF\u03BC\u03B1\u03C4\u03B1"},{default:a(()=>[L]),_:1})])])]),t("li",null,[s(e,{to:"#\u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03B7-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD"},{default:a(()=>[P]),_:1}),t("ul",null,[t("li",null,[s(e,{to:"#del-key-\u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03B7-\u03B5\u03BD\u03BF\u03C2-\u03C0\u03BB\u03B7\u03BA\u03C4\u03C1\u03BF\u03C5"},{default:a(()=>[F]),_:1})]),t("li",null,[s(e,{to:"#del-val-key-val-\u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03B7-\u03B1\u03BA\u03C1\u03B9\u03B2\u03BF\u03C5\u03C2-\u03B1\u03BD\u03C4\u03B9\u03C3\u03C4\u03BF\u03B9\u03C7\u03B9\u03B1\u03C2"},{default:a(()=>[z]),_:1})])])]),t("li",null,[s(e,{to:"#\u03B4\u03B9\u03B1\u03B4\u03C1\u03BF\u03BC\u03B7"},{default:a(()=>[$]),_:1}),t("ul",null,[t("li",null,[s(e,{to:"#\u03B4\u03B9\u03B1\u03B4\u03BF\u03C7\u03B9\u03BA\u03B7-\u03B4\u03B9\u03B1\u03C3\u03C7\u03B9\u03C3\u03B7"},{default:a(()=>[Y]),_:1})]),t("li",null,[s(e,{to:"#rev-\u03B1\u03BD\u03C4\u03B9\u03C3\u03C4\u03C1\u03BF\u03C6\u03B7-\u03B4\u03B9\u03B1\u03C3\u03C7\u03B9\u03C3\u03B7-\u03C3\u03B5\u03B9\u03C1\u03B1\u03C2"},{default:a(()=>[j]),_:1})]),t("li",null,[s(e,{to:"#\u03C4\u03B1\u03BE\u03B9\u03BD\u03BF\u03BC\u03B7\u03C3\u03B7"},{default:a(()=>[G]),_:1})])])])])]),t("li",null,[s(e,{to:"#\u03B5\u03C0\u03B1\u03BD\u03B1\u03BB\u03B7\u03C0\u03C4\u03B5\u03C2-\u03B4\u03B9\u03B1\u03C3\u03C4\u03B7\u03BC\u03B1\u03C4\u03BF\u03C2"},{default:a(()=>[H]),_:1}),t("ul",null,[t("li",null,[s(e,{to:"#\u03B5\u03BA\u03C4\u03B5\u03BB\u03B5\u03C3\u03C4\u03B5-\u03C4\u03B7\u03BD-\u03B5\u03BE\u03BF\u03B4\u03BF-\u03C4\u03BF\u03C5"},{default:a(()=>[W]),_:1})]),t("li",null,[s(e,{to:"#range-begin-end-\u03B4\u03B9\u03B1\u03C3\u03C4\u03B7\u03BC\u03B1-\u03B5\u03C0\u03B1\u03BD\u03B1\u03BB\u03B7\u03C8\u03B7\u03C2"},{default:a(()=>[K]),_:1})]),t("li",null,[s(e,{to:"#rev-range-\u03B1\u03BD\u03C4\u03B5\u03C3\u03C4\u03C1\u03B1\u03BC\u03BC\u03B5\u03BD\u03B1-\u03B4\u03B9\u03B1\u03C3\u03C4\u03B7\u03BC\u03B1\u03C4\u03B1"},{default:a(()=>[J]),_:1})])])]),t("li",null,[s(e,{to:"#\u03C0\u03C1\u03BF\u03C3\u03B1\u03C1\u03BC\u03BF\u03B3\u03B7-\u03C4\u03C5\u03C0\u03C9\u03BD-\u03B4\u03B5\u03B4\u03BF\u03BC\u03B5\u03BD\u03C9\u03BD"},{default:a(()=>[Q]),_:1}),t("ul",null,[t("li",null,[s(e,{to:"#\u03B1\u03C0\u03BB\u03BF\u03C0\u03BF\u03B9\u03B7\u03C3\u03B7-\u03C0\u03C1\u03BF\u03C3\u03B1\u03C1\u03BC\u03BF\u03C3\u03BC\u03B5\u03BD\u03C9\u03BD-\u03C4\u03C5\u03C0\u03C9\u03BD-\u03BC\u03B5-\u03BC\u03B1\u03BA\u03C1\u03BF\u03B5\u03BD\u03C4\u03BF\u03BB\u03B5\u03C2-\u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03B7\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03C9\u03BD"},{default:a(()=>[Z]),_:1})])])])])]),t("li",null,[s(e,{to:"#\u03C3\u03B7\u03BC\u03B5\u03B9\u03C9\u03C3\u03B7-\u03C3\u03C7\u03B5\u03C4\u03B9\u03BA\u03B1-\u03BC\u03B5-\u03C4\u03B7-\u03C7\u03C1\u03B7\u03C3\u03B7-\u03C4\u03B7\u03C2"},{default:a(()=>[tt]),_:1}),t("ul",null,[t("li",null,[s(e,{to:"#\u03C4\u03BF-\u03BC\u03B7\u03BA\u03BF\u03C2-\u03C4\u03BF\u03C5-\u03BA\u03BB\u03B5\u03B9\u03B4\u03B9\u03BF\u03C5"},{default:a(()=>[nt]),_:1})])])]),t("li",null,[s(e,{to:"#\u03C5\u03C0\u03BF\u03C3\u03B7\u03BC\u03B5\u03B9\u03C9\u03C3\u03B5\u03B9\u03C2"},{default:a(()=>[et]),_:1})])])]),st],64)}var it=r(p,[["render",at],["__file","2021-12-21-mdbx.html.vue"]]);export{it as default};
