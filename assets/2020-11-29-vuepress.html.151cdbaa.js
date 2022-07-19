import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.87d927ab.js";const t={},a=r('<h1 id="vuepress-epit-blog" tabindex="-1"><a class="header-anchor" href="#vuepress-epit-blog" aria-hidden="true">#</a> vuepress \xE9p\xEDt blog</h1><p>\xC9p\xEDtettem egy statikus blogot a <a href="https://v2.vuepress.vuejs.org" target="_blank" rel="noopener noreferrer">vuepress 2.0</a> alapj\xE1n, mint az rmw.link hivatalos weboldal\xE1t.</p><p>A k\xF3db\xE1zis a <a href="https://github.com/rmw-link/blog-vuepress2" target="_blank" rel="noopener noreferrer">github.com/rmw-link/blog-vuepress2</a> oldalon tal\xE1lhat\xF3.</p><p>Az egy\xE9ni tartalom a k\xF6vetkez\u0151:</p><ul><li><p>Az <a href="https://github.com/harttle/md-padding" target="_blank" rel="noopener noreferrer">md-padding</a> \xE9s a <a href="https://github.com/rmw-link/blog-vuepress2/blob/master/.direnv/git/hooks/pre-commit" target="_blank" rel="noopener noreferrer">git hooks</a> haszn\xE1lata a <a href="https://github.com/rmw-link/blog-vuepress2/blob/ce966b52f0a06bf2748af36f539f50eadc9eea3c/script/hook.coffee#L46" target="_blank" rel="noopener noreferrer">k\xEDnai \xE9s angol nyelvek k\xF6z\xF6tti sz\xF3k\xF6z\xF6k automatikus hozz\xE1ad\xE1s\xE1hoz</a></p><p><code>git clone</code> Ezut\xE1n menj a k\xF6nyvt\xE1rba, \xE9s \xEDrd be a <code>direnv allow</code>c\xEDmet, \xE9s az <a href="https://github.com/rmw-link/blog-vuepress2/blob/master/.envrc" target="_blank" rel="noopener noreferrer">.envrc</a> automatikusan telep\xEDti a git hooks-t.</p><p>A <a href="https://direnv.net" target="_blank" rel="noopener noreferrer">direnv</a> a k\xF6rnyezet automatikus bet\xF6lt\u0151 eszk\xF6ze. <a href="https://cloud.tencent.com/developer/article/1615495" target="_blank" rel="noopener noreferrer">Kattintson ide a bemutat\xF3\xE9rt.</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/translate.coffee" target="_blank" rel="noopener noreferrer">Automatikusan leford\xEDtja a blogokat t\xF6bb nyelvre</a></p><p>L\xE1sd <a href="/log/2021-12-09-markdown-translate">markdown ford\xEDt\xE1si eszk\xF6z\xF6k</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/cleanup.coffee" target="_blank" rel="noopener noreferrer">A f\u0151 nyelvi f\xE1jln\xE9v \xE1tnevez\xE9se ut\xE1n automatikusan megtiszt\xEDtja a r\xE9gi, m\xE1s nyelv\u0171 f\xE1jlokat.</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/i18n.coffee" target="_blank" rel="noopener noreferrer">Ford\xEDtson szkripteket a t\xE9ma konfigur\xE1ci\xF3j\xE1hoz</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/dev.sh" target="_blank" rel="noopener noreferrer">A v\xE1ltoz\xE1sok nyomon k\xF6vet\xE9se \xE9s a stylus st\xEDlusok \xE9s coffeescript szkriptek leford\xEDt\xE1sa a k\xF6vetkez\u0151kh\xF6z</a> <a href="https://github.com/rmw-link/blog-vuepress2/blob/master/dev.sh" target="_blank" rel="noopener noreferrer"><code>site/.vuepress</code></a></p><p>Ez egy <a href="https://www.npmjs.com/package/concurrently" target="_blank" rel="noopener noreferrer">concurrently</a> nev\u0171 kis eszk\xF6zt haszn\xE1l t\xF6bb parancssori feladat egyidej\u0171 futtat\xE1s\xE1ra. A <code>--kill-others</code> param\xE9ter biztos\xEDtja, hogy egyszerre csak egy szkript fut.</p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/tree/master/styl" target="_blank" rel="noopener noreferrer">M\xF3dos\xEDtsa a k\xEDnai bet\u0171t\xEDpusokat</a> <a href="https://github.com/rmw-link/blog-vuepress2/tree/master/styl" target="_blank" rel="noopener noreferrer"><code>Noto Sans SC</code></a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/styl/font/download.xsh" target="_blank" rel="noopener noreferrer">Batch let\xF6lt\xE9si szkript a css f\xE1jlokban l\xE9v\u0151 bet\u0171t\xEDpusokhoz</a></p><p>A <a href="https://xon.sh" target="_blank" rel="noopener noreferrer">xonsh</a>, <code>./download.xsh code.css</code> alapj\xE1n ez let\xF6lti a bet\u0171t\xEDpusokat a css f\xE1jlokb\xF3l, \xE9s l\xE9trehozza a megfelel\u0151 stylusokat.</p><p>A xonsh a python \xE9s a bash nagyon hasznos kombin\xE1ci\xF3ja.</p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/clientAppEnhance.coffee" target="_blank" rel="noopener noreferrer">A b\xF6ng\xE9sz\u0151 alap\xE9rtelmezett nyelve automatikusan \xE1tv\xE1lt a kezd\u0151lap l\xE1togat\xE1sakor.</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/file_url.coffee" target="_blank" rel="noopener noreferrer">A beolvasott k\xF6nyvt\xE1rak automatikusan URL-c\xEDmekhez ker\xFClnek hozz\xE1rendel\xE9sre.</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/sitemap.coffee" target="_blank" rel="noopener noreferrer">sitemap.xml gener\xE1l\xF3dik</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/cbca993f56327dc4a55afc7a33690c80903f3774/styl/index.styl#L17" target="_blank" rel="noopener noreferrer">Sz\xE9p\xEDtett id\xE9z\xE9si st\xEDlusok</a></p><p>Az id\xE9z\xE9si st\xEDlus az al\xE1bbiakban l\xE1that\xF3</p><p><a href="https://www.ruanyifeng.com/blog/2009/11/why_i_love_piratebay.html" target="_blank" rel="noopener noreferrer">Yifeng Ruan: &quot;Mi\xE9rt szeretem a The Pirate Bayt?</a>:</p><blockquote><p>Egyesek azzal \xE9rvelhetnek, hogy szerz\u0151i jog n\xE9lk\xFCl az emberek nem lenn\xE9nek motiv\xE1ltak az innov\xE1ci\xF3ra.<br> A szabad szoftver mozgalom sikere bizony\xEDtja, hogy ez az \xE9rv nem igaz.<br> T\xE9ny, hogy az ingyenes megoszt\xE1s is k\xE9pes nagyszer\u0171 munk\xE1t v\xE9gezni \xE9s p\xE9nzt keresni a szolg\xE1ltat\xE1ssal.<br> &quot;Richard Stallman, a &quot;szabad szoftverek atyja&quot; azt mondta: &quot; <strong>Soha nem fogom az \xE9letemet azzal t\xF6lteni, hogy b\xF6rt\xF6n\xF6ket \xE9p\xEDtek, hogy m\xE1sokat beb\xF6rt\xF6n\xF6zzek!</strong><br> Teh\xE1t k\xE9rem, soha t\xF6bb\xE9 ne mondja azt, hogy &quot;a szerz\u0151i jog \xF6szt\xF6nzi az eredetis\xE9get&quot;, ez egy kapitalista \xE1lca \xE9s az emberi kreativit\xE1s megs\xE9rt\xE9se.<br> Az igaz\xE1n nagyszer\u0171 tal\xE1lm\xE1nyokat hobbib\xF3l vagy nemes c\xE9llal, p\xE9ld\xE1ul &quot;az emberis\xE9g j\xF3l\xE9t\xE9nek el\u0151mozd\xEDt\xE1sa&quot; \xE9rdek\xE9ben k\xE9sz\xEDtik, nem pedig p\xE9nz\xE9rt!</p></blockquote></li><li><p><a href="/404">A 404-es oldal lebeg\u0151 szellem verzi\xF3ja</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/f74fdffa4b22c06ade6a5451ad34111ddb7bf60a/coffee/markdown-it-plugin.coffee#L13" target="_blank" rel="noopener noreferrer">A gumlet.io cdn hozz\xE1ad\xE1sa a github \xE1gyban l\xE9v\u0151 k\xE9pekhez</a>, <a href="https://www.gumlet.com/blog/worlds-first-service-to-provide-avif-support/" target="_blank" rel="noopener noreferrer">a Gumlet felismeri a b\xF6ng\xE9sz\u0151t \xE9s automatikusan \xE1talak\xEDtja a png-t webp-v\xE9 vagy avif-v\xE9, hogy megtakar\xEDtsa a s\xE1vsz\xE9less\xE9get \xE9s jav\xEDtsa az oldal bet\xF6lt\xE9si sebess\xE9g\xE9t.</a></p></li></ul><h2 id="markdown-testreszabas" tabindex="-1"><a class="header-anchor" href="#markdown-testreszabas" aria-hidden="true">#</a> markdown testreszab\xE1s</h2><ul><li><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/plugin.coffee" target="_blank" rel="noopener noreferrer">L\xE1bl\xE9c megjegyz\xE9s t\xE1mogat\xE1sa</a></li><li><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/plugin.coffee" target="_blank" rel="noopener noreferrer">K\xFCls\u0151 f\xE1jlok id\xE9z\xE9s\xE9nek lehet\u0151s\xE9ge a <code>#inculde xx.txt</code> szintaxissal</a></li><li><a href="https://github.com/rmw-link/blog-vuepress2/blob/cbca993f56327dc4a55afc7a33690c80903f3774/coffee/config.coffee#L18" target="_blank" rel="noopener noreferrer">Egysoros feed kimenet t\xE1mogat\xE1sa html-ben</a> <a href="https://github.com/rmw-link/blog-vuepress2/blob/cbca993f56327dc4a55afc7a33690c80903f3774/coffee/config.coffee#L18" target="_blank" rel="noopener noreferrer"><code>&lt;br&gt;</code></a></li></ul>',7);function o(l,s){return a}var p=e(t,[["render",o],["__file","2020-11-29-vuepress.html.vue"]]);export{p as default};
