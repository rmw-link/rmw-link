import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.87d927ab.js";const a={},t=r('<h1 id="vuepress-veidot-emuaru" tabindex="-1"><a class="header-anchor" href="#vuepress-veidot-emuaru" aria-hidden="true">#</a> vuepress veidot emu\u0101ru</h1><p>Esmu izveidojis statisku emu\u0101ru, kas balst\u012Bts uz <a href="https://v2.vuepress.vuejs.org" target="_blank" rel="noopener noreferrer">vuepress 2.0</a> k\u0101 rmw.link ofici\u0101lo t\u012Bmek\u013Ca vietni.</p><p>Kodb\u0101ze ir vietn\u0113 <a href="https://github.com/rmw-link/blog-vuepress2" target="_blank" rel="noopener noreferrer">github.com/rmw-link/blog-vuepress2</a>.</p><p>Piel\u0101go\u0161ana ir \u0161\u0101da:</p><ul><li><p>Izmantojiet <a href="https://github.com/harttle/md-padding" target="_blank" rel="noopener noreferrer">md-padding</a> un <a href="https://github.com/rmw-link/blog-vuepress2/blob/master/.direnv/git/hooks/pre-commit" target="_blank" rel="noopener noreferrer">git \u0101\u0137us</a>, lai <a href="https://github.com/rmw-link/blog-vuepress2/blob/ce966b52f0a06bf2748af36f539f50eadc9eea3c/script/hook.coffee#L46" target="_blank" rel="noopener noreferrer">autom\u0101tiski pievienotu atstarpes starp \u0137\u012Bnie\u0161u un ang\u013Cu valod\u0101m</a></p><p><code>git clone</code> P\u0113c tam dodieties uz direktoriju un ievadiet <code>direnv allow</code>un <a href="https://github.com/rmw-link/blog-vuepress2/blob/master/.envrc" target="_blank" rel="noopener noreferrer">.envrc</a> autom\u0101tiski instal\u0113s git \u0101\u0137us.</p><p><a href="https://direnv.net" target="_blank" rel="noopener noreferrer">direnv</a> ir vides autoloader r\u012Bks. <a href="https://cloud.tencent.com/developer/article/1615495" target="_blank" rel="noopener noreferrer">Spiediet \u0161eit, lai skat\u012Btu pam\u0101c\u012Bbu</a>.</p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/translate.coffee" target="_blank" rel="noopener noreferrer">Autom\u0101tiski tulkot emu\u0101rus vair\u0101k\u0101s valod\u0101s</a></p><p>Skatiet <a href="/log/2021-12-09-markdown-translate">mar\u0137\u0113\u0161anas tulko\u0161anas r\u012Bkus</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/cleanup.coffee" target="_blank" rel="noopener noreferrer">Autom\u0101tiska veco failu t\u012Br\u012B\u0161ana cit\u0101s valod\u0101s p\u0113c galven\u0101s valodas faila nosaukuma p\u0101rd\u0113v\u0113\u0161anas.</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/i18n.coffee" target="_blank" rel="noopener noreferrer">Tulkot t\u0113mas konfigur\u0101cijas skriptus</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/dev.sh" target="_blank" rel="noopener noreferrer">Uzraudz\u012Bt izmai\u0146as un kompil\u0113t stilu un coffeescript skriptus, lai</a> <a href="https://github.com/rmw-link/blog-vuepress2/blob/master/dev.sh" target="_blank" rel="noopener noreferrer"><code>site/.vuepress</code></a></p><p>Tas izmanto nelielu r\u012Bku, ko sauc par <a href="https://www.npmjs.com/package/concurrently" target="_blank" rel="noopener noreferrer">concurrently</a>, lai vienlaic\u012Bgi palaistu vair\u0101kus komandrindas uzdevumus. Parametrs <code>--kill-others</code> nodro\u0161ina, ka vienlaic\u012Bgi tiek palaists tikai viens skripts.</p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/tree/master/styl" target="_blank" rel="noopener noreferrer">Main\u012Bt \u0137\u012Bnie\u0161u fontus, lai</a> <a href="https://github.com/rmw-link/blog-vuepress2/tree/master/styl" target="_blank" rel="noopener noreferrer"><code>Noto Sans SC</code></a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/styl/font/download.xsh" target="_blank" rel="noopener noreferrer">Partijas lejupiel\u0101des skripts fontiem css failos</a></p><p>Pamatojoties uz <a href="https://xon.sh" target="_blank" rel="noopener noreferrer">xonsh</a>, <code>./download.xsh code.css</code> tas lejupiel\u0101d\u0113s fontus no css failiem un \u0123ener\u0113s atbilsto\u0161o rakst\u0101mpiederumu.</p><p>xonsh ir \u013Coti noder\u012Bga python un bash kombin\u0101cija.</p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/clientAppEnhance.coffee" target="_blank" rel="noopener noreferrer">P\u0101rl\u016Bkprogrammas noklus\u0113juma valoda tiek autom\u0101tiski p\u0101rsl\u0113gta, kad tiek apmekl\u0113ta s\u0101kuma lapa.</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/file_url.coffee" target="_blank" rel="noopener noreferrer">Sken\u0113tie direktoriji tiek autom\u0101tiski kart\u0113ti uz URL adres\u0101tiem.</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/sitemap.coffee" target="_blank" rel="noopener noreferrer">tiek \u0123ener\u0113ts sitemap.xml</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/cbca993f56327dc4a55afc7a33690c80903f3774/styl/index.styl#L17" target="_blank" rel="noopener noreferrer">Pilnveidoti cit\u0113\u0161anas stili</a></p><p>Cit\u0113\u0161anas stils ir par\u0101d\u012Bts turpm\u0101k</p><p><a href="https://www.ruanyifeng.com/blog/2009/11/why_i_love_piratebay.html" target="_blank" rel="noopener noreferrer">Yifeng Ruan: &quot;K\u0101p\u0113c man pat\u012Bk The Pirate Bay?</a>:</p><blockquote><p>Da\u017Ei var\u0113tu apgalvot, ka bez autorties\u012Bb\u0101m cilv\u0113ki neb\u016Btu motiv\u0113ti ieviest jaunin\u0101jumus.<br> Br\u012Bv\u0101s programmat\u016Bras kust\u012Bbas pan\u0101kumi ir pier\u0101d\u012Bjums tam, ka \u0161is arguments nav patiess.<br> Fakts ir t\u0101ds, ka ar\u012B bezmaksas koplieto\u0161ana var rad\u012Bt lieliskus darbus un peln\u012Bt naudu no pakalpojuma.<br> &quot;Br\u012Bv\u0101s programmat\u016Bras t\u0113vs&quot; Ri\u010Dards Stallmans (Richard Stallman) ir teicis: <strong>&quot;Es nekad neizmanto\u0161u savu dz\u012Bvi, lai b\u016Bv\u0113tu cietumu, kur\u0101 ieslodz\u012Bt citus!</strong><br> T\u0101p\u0113c, l\u016Bdzu, nekad vairs nesakiet, ka &quot;autorties\u012Bbas veicina ori\u0123inalit\u0101ti&quot;, jo t\u0101 ir kapit\u0101listiska d\u016Bmu aizsegs un cilv\u0113ka rado\u0161uma aizskar\u0161ana.<br> Patiesi lieliski izgudrojumi tiek rad\u012Bti va\u013Caspriekam vai t\u0101diem c\u0113liem m\u0113r\u0137iem k\u0101 &quot;cilv\u0113ces labkl\u0101j\u012Bbas veicin\u0101\u0161ana&quot;, nevis naudas d\u0113\u013C!</p></blockquote></li><li><p><a href="/404">Hover ghost 404 lapas versija</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/f74fdffa4b22c06ade6a5451ad34111ddb7bf60a/coffee/markdown-it-plugin.coffee#L13" target="_blank" rel="noopener noreferrer">Gumlet.io cdn pievieno\u0161ana att\u0113liem github gult\u0101</a>, <a href="https://www.gumlet.com/blog/worlds-first-service-to-provide-avif-support/" target="_blank" rel="noopener noreferrer">Gumlet atpaz\u012Bst p\u0101rl\u016Bkprogrammu un autom\u0101tiski konvert\u0113 png uz webp vai avif, lai ietaup\u012Btu joslas platumu un uzlabotu lapas iel\u0101des \u0101trumu</a>.</p></li></ul><h2 id="markdown-pielagosana" tabindex="-1"><a class="header-anchor" href="#markdown-pielagosana" aria-hidden="true">#</a> markdown piel\u0101go\u0161ana</h2><ul><li><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/plugin.coffee" target="_blank" rel="noopener noreferrer">Footer koment\u0101ru atbalsts</a></li><li><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/plugin.coffee" target="_blank" rel="noopener noreferrer">Iesp\u0113ja cit\u0113t \u0101r\u0113jos failus ar <code>#inculde xx.txt</code> sintaksi</a></li><li><a href="https://github.com/rmw-link/blog-vuepress2/blob/cbca993f56327dc4a55afc7a33690c80903f3774/coffee/config.coffee#L18" target="_blank" rel="noopener noreferrer">Atbalsts vienas rindas bar\u012Bbas izvadei uz html</a> <a href="https://github.com/rmw-link/blog-vuepress2/blob/cbca993f56327dc4a55afc7a33690c80903f3774/coffee/config.coffee#L18" target="_blank" rel="noopener noreferrer"><code>&lt;br&gt;</code></a></li></ul>',7);function o(i,s){return t}var p=e(a,[["render",o],["__file","2020-11-29-vuepress.html.vue"]]);export{p as default};
