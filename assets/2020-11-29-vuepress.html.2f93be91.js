import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.87d927ab.js";const o={},a=r('<h1 id="vuepress-build-blog" tabindex="-1"><a class="header-anchor" href="#vuepress-build-blog" aria-hidden="true">#</a> vuepress build blog</h1><p>Vytvoril som statick\xFD blog zalo\u017Een\xFD na <a href="https://v2.vuepress.vuejs.org" target="_blank" rel="noopener noreferrer">vuepress 2.0</a> ako ofici\xE1lnu webov\xFA str\xE1nku pre rmw.link.</p><p>K\xF3dov\xE1 z\xE1klad\u0148a sa nach\xE1dza na adrese <a href="https://github.com/rmw-link/blog-vuepress2" target="_blank" rel="noopener noreferrer">github.com/rmw-link/blog-vuepress2</a></p><p>Prisp\xF4sobenie je nasledovn\xE9:</p><ul><li><p>Pou\u017E\xEDvanie <a href="https://github.com/harttle/md-padding" target="_blank" rel="noopener noreferrer">md-padding</a> a <a href="https://github.com/rmw-link/blog-vuepress2/blob/master/.direnv/git/hooks/pre-commit" target="_blank" rel="noopener noreferrer">h\xE1\u010Dikov git</a> na <a href="https://github.com/rmw-link/blog-vuepress2/blob/ce966b52f0a06bf2748af36f539f50eadc9eea3c/script/hook.coffee#L46" target="_blank" rel="noopener noreferrer">automatick\xE9 prid\xE1vanie medzier medzi \u010D\xEDn\u0161tinu a angli\u010Dtinu</a></p><p><code>git clone</code> Potom prejdite do adres\xE1ra a zadajte adresu <code>direnv allow</code>a <a href="https://github.com/rmw-link/blog-vuepress2/blob/master/.envrc" target="_blank" rel="noopener noreferrer">s\xFAbor .envrc</a> automaticky nain\u0161taluje h\xE1\u010Diky git.</p><p><a href="https://direnv.net" target="_blank" rel="noopener noreferrer">direnv</a> je n\xE1stroj na automatick\xE9 vytv\xE1ranie prostredia. <a href="https://cloud.tencent.com/developer/article/1615495" target="_blank" rel="noopener noreferrer">Kliknut\xEDm sem z\xEDskate n\xE1vod</a>.</p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/translate.coffee" target="_blank" rel="noopener noreferrer">Automatick\xFD preklad blogov do viacer\xFDch jazykov</a></p><p>Pozrite si <a href="/log/2021-12-09-markdown-translate">n\xE1stroje na preklad markdown</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/cleanup.coffee" target="_blank" rel="noopener noreferrer">Automatick\xE9 vy\u010Distenie star\xFDch s\xFAborov v in\xFDch jazykoch po premenovan\xED n\xE1zvu s\xFAboru hlavn\xE9ho jazyka</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/i18n.coffee" target="_blank" rel="noopener noreferrer">Prelo\u017Ei\u0165 skripty pre konfigur\xE1ciu t\xE9my</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/dev.sh" target="_blank" rel="noopener noreferrer">Monitorovanie zmien a kompil\xE1cia \u0161t\xFDlov stylus a skriptov coffeescript</a> <a href="https://github.com/rmw-link/blog-vuepress2/blob/master/dev.sh" target="_blank" rel="noopener noreferrer"><code>site/.vuepress</code></a></p><p>Na s\xFAbe\u017En\xE9 spustenie viacer\xFDch \xFAloh pr\xEDkazov\xE9ho riadka sa pou\u017E\xEDva mal\xFD n\xE1stroj s n\xE1zvom <a href="https://www.npmjs.com/package/concurrently" target="_blank" rel="noopener noreferrer">concurrently</a>. Parameter <code>--kill-others</code> zabezpe\u010Duje, aby bol v danom \u010Dase spusten\xFD iba jeden skript.</p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/tree/master/styl" target="_blank" rel="noopener noreferrer">\xDAprava \u010D\xEDnskych p\xEDsiem na</a> <a href="https://github.com/rmw-link/blog-vuepress2/tree/master/styl" target="_blank" rel="noopener noreferrer"><code>Noto Sans SC</code></a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/styl/font/download.xsh" target="_blank" rel="noopener noreferrer">Skript d\xE1vkov\xE9ho s\u0165ahovania pre p\xEDsma v s\xFAboroch css</a></p><p>Na z\xE1klade <a href="https://xon.sh" target="_blank" rel="noopener noreferrer">xonsh</a>, <code>./download.xsh code.css</code> to stiahne p\xEDsma zo s\xFAborov css a vygeneruje zodpovedaj\xFAce p\xEDsmo.</p><p>xonsh je ve\u013Emi u\u017Eito\u010Dn\xE1 kombin\xE1cia jazyka python a bash.</p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/clientAppEnhance.coffee" target="_blank" rel="noopener noreferrer">Pri n\xE1v\u0161teve domovskej str\xE1nky sa automaticky prepne predvolen\xFD jazyk prehliada\u010Da</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/file_url.coffee" target="_blank" rel="noopener noreferrer">Skenovan\xE9 adres\xE1re sa automaticky mapuj\xFA na adresy URL</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/sitemap.coffee" target="_blank" rel="noopener noreferrer">je vygenerovan\xE1 mapa str\xE1nky.xml</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/cbca993f56327dc4a55afc7a33690c80903f3774/styl/index.styl#L17" target="_blank" rel="noopener noreferrer">Skr\xE1\u0161len\xE9 \u0161t\xFDly citovania</a></p><p>\u0160t\xFDl citovania je uveden\xFD ni\u017E\u0161ie</p><p><a href="https://www.ruanyifeng.com/blog/2009/11/why_i_love_piratebay.html" target="_blank" rel="noopener noreferrer">Yifeng Ruan: &quot;Pre\u010Do m\xE1m r\xE1d The Pirate Bay?</a>:</p><blockquote><p>Niekto by mohol namieta\u0165, \u017Ee bez autorsk\xFDch pr\xE1v by \u013Eudia neboli motivovan\xED inovova\u0165.<br> \xDAspech hnutia slobodn\xE9ho softv\xE9ru je d\xF4kazom, \u017Ee tento argument nie je pravdiv\xFD.<br> Faktom je, \u017Ee aj bezplatn\xE9 zdie\u013Eanie m\xF4\u017Ee prinies\u0165 skvel\xFA pr\xE1cu a zarobi\u0165 na tejto slu\u017Ebe.<br> &quot;Richard Stallman, &quot;otec slobodn\xE9ho softv\xE9ru&quot;, povedal: <strong>&quot;Nikdy nebudem tr\xE1vi\u0165 svoj \u017Eivot budovan\xEDm v\xE4zn\xEDc na v\xE4znenie in\xFDch!</strong><br> Tak\u017Ee u\u017E nikdy nehovorte, \u017Ee &quot;autorsk\xE9 pr\xE1va podporuj\xFA originalitu&quot;, je to kapitalistick\xE1 dymov\xE1 clona a ur\xE1\u017Eka \u013Eudskej kreativity.<br> Skuto\u010Dne ve\u013Ek\xE9 vyn\xE1lezy sa robia pre kon\xED\u010Dky alebo na u\u0161\u013Eachtil\xE9 \xFA\u010Dely, ako je &quot;podpora blaha \u013Eudstva&quot;, nie pre peniaze!</p></blockquote></li><li><p><a href="/404">Hover ghost verzia str\xE1nky 404</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/f74fdffa4b22c06ade6a5451ad34111ddb7bf60a/coffee/markdown-it-plugin.coffee#L13" target="_blank" rel="noopener noreferrer">Pridan\xEDm gumlet.io cdn k obr\xE1zkom v l\xF4\u017Eku githubu</a><a href="https://www.gumlet.com/blog/worlds-first-service-to-provide-avif-support/" target="_blank" rel="noopener noreferrer">Gumlet rozpozn\xE1 prehliada\u010D a automaticky konvertuje png na webp alebo avif, aby sa u\u0161etrila \u0161\xEDrka p\xE1sma a zlep\u0161ila r\xFDchlos\u0165 na\u010D\xEDtania str\xE1nky</a>.</p></li></ul><h2 id="prisposobenie-markdown" tabindex="-1"><a class="header-anchor" href="#prisposobenie-markdown" aria-hidden="true">#</a> prisp\xF4sobenie markdown</h2><ul><li><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/plugin.coffee" target="_blank" rel="noopener noreferrer">Podpora koment\xE1rov v p\xE4ti\u010Dke</a></li><li><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/plugin.coffee" target="_blank" rel="noopener noreferrer">Mo\u017Enos\u0165 citova\u0165 extern\xE9 s\xFAbory pomocou syntaxe <code>#inculde xx.txt</code></a></li><li><a href="https://github.com/rmw-link/blog-vuepress2/blob/cbca993f56327dc4a55afc7a33690c80903f3774/coffee/config.coffee#L18" target="_blank" rel="noopener noreferrer">Podpora pre v\xFDstup jednoriadkov\xE9ho feedu do html</a> <a href="https://github.com/rmw-link/blog-vuepress2/blob/cbca993f56327dc4a55afc7a33690c80903f3774/coffee/config.coffee#L18" target="_blank" rel="noopener noreferrer"><code>&lt;br&gt;</code></a></li></ul>',7);function t(n,l){return a}var p=e(o,[["render",t],["__file","2020-11-29-vuepress.html.vue"]]);export{p as default};
