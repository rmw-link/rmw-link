import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.87d927ab.js";const r={},t=a('<h1 id="vuepress-ehitada-blogi" tabindex="-1"><a class="header-anchor" href="#vuepress-ehitada-blogi" aria-hidden="true">#</a> vuepress ehitada blogi</h1><p>Olen ehitanud <a href="https://v2.vuepress.vuejs.org" target="_blank" rel="noopener noreferrer">vuepress 2.0</a> -l p\xF5hineva staatilise blogi rmw.linki ametlikuks veebisaidiks.</p><p>Koodibaas on aadressil <a href="https://github.com/rmw-link/blog-vuepress2" target="_blank" rel="noopener noreferrer">github.com/rmw-link/blog-vuepress2</a></p><p>Kohandamine on j\xE4rgmine :</p><ul><li><p>Kasutage <a href="https://github.com/harttle/md-padding" target="_blank" rel="noopener noreferrer">md-padding</a> ja <a href="https://github.com/rmw-link/blog-vuepress2/blob/master/.direnv/git/hooks/pre-commit" target="_blank" rel="noopener noreferrer">git hooks</a>, et <a href="https://github.com/rmw-link/blog-vuepress2/blob/ce966b52f0a06bf2748af36f539f50eadc9eea3c/script/hook.coffee#L46" target="_blank" rel="noopener noreferrer">lisada automaatselt t\xFChikuid hiina ja inglise keele vahele</a>.</p><p><code>git clone</code> P\xE4rast seda minge kataloogi ja kirjutage <code>direnv allow</code>ning <a href="https://github.com/rmw-link/blog-vuepress2/blob/master/.envrc" target="_blank" rel="noopener noreferrer">.envrc</a> installib automaatselt git-hookid.</p><p><a href="https://direnv.net" target="_blank" rel="noopener noreferrer">direnv</a> on keskkonna automaatne laadimisvahend <a href="https://direnv.net" target="_blank" rel="noopener noreferrer">.</a><a href="https://cloud.tencent.com/developer/article/1615495" target="_blank" rel="noopener noreferrer">Kl\xF5psake siin \xF5petuse jaoks.</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/translate.coffee" target="_blank" rel="noopener noreferrer">T\xF5lgi blogid automaatselt mitmesse keelde</a></p><p>Vaata <a href="/log/2021-12-09-markdown-translate">markdown t\xF5lkevahendeid</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/cleanup.coffee" target="_blank" rel="noopener noreferrer">Puhastab automaatselt vanad failid teistes keeltes p\xE4rast p\xF5hikeele faili nime \xFCmbernimetamist</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/i18n.coffee" target="_blank" rel="noopener noreferrer">T\xF5lge skriptid teema seadistamiseks</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/dev.sh" target="_blank" rel="noopener noreferrer">J\xE4lgida muudatusi ja koostada stiilide ja coffeescript skriptide kompileerimist, et</a> <a href="https://github.com/rmw-link/blog-vuepress2/blob/master/dev.sh" target="_blank" rel="noopener noreferrer"><code>site/.vuepress</code></a></p><p>See kasutab v\xE4ikest vahendit nimega <a href="https://www.npmjs.com/package/concurrently" target="_blank" rel="noopener noreferrer">concurrently</a>, et k\xE4ivitada mitu k\xE4surea \xFClesannet samaaegselt. Parameeter <code>--kill-others</code> tagab, et korraga t\xF6\xF6tab ainult \xFCks skript.</p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/tree/master/styl" target="_blank" rel="noopener noreferrer">Muuda hiina kirjat\xFC\xFCpe nii, et</a> <a href="https://github.com/rmw-link/blog-vuepress2/tree/master/styl" target="_blank" rel="noopener noreferrer"><code>Noto Sans SC</code></a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/styl/font/download.xsh" target="_blank" rel="noopener noreferrer">Partii allalaadimise skript css-failide kirjat\xFC\xFCpide jaoks</a></p><p>P\xF5hineb <a href="https://xon.sh" target="_blank" rel="noopener noreferrer">xonshil</a>, <code>./download.xsh code.css</code> see laeb fondid css-failidest alla ja genereerib vastavad stiilid.</p><p>xonsh on v\xE4ga kasulik kombinatsioon pythonist ja bashist.</p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/clientAppEnhance.coffee" target="_blank" rel="noopener noreferrer">Brauseri vaikimisi keel l\xFClitub automaatselt \xFCmber, kui k\xFClastate kodulehte</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/file_url.coffee" target="_blank" rel="noopener noreferrer">Skaneeritud kataloogid kaardistatakse automaatselt URL-deks</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/sitemap.coffee" target="_blank" rel="noopener noreferrer">genereeritakse sitemap.xml</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/cbca993f56327dc4a55afc7a33690c80903f3774/styl/index.styl#L17" target="_blank" rel="noopener noreferrer">Kaunistatud tsiteerimisstiilid</a></p><p>Allpool on n\xE4idatud tsitaatimisstiili</p><p><a href="https://www.ruanyifeng.com/blog/2009/11/why_i_love_piratebay.html" target="_blank" rel="noopener noreferrer">Yifeng Ruan: &quot;Miks mulle meeldib The Pirate Bay?</a>:</p><blockquote><p>M\xF5ned v\xF5ivad v\xE4ita, et ilma autori\xF5iguseta ei oleks inimesed motiveeritud uuendusi tegema.<br> Vaba tarkvara liikumise edu t\xF5estab, et see v\xE4ide ei vasta t\xF5ele.<br> Fakt on see, et tasuta jagamine v\xF5ib toota ka suurep\xE4rast t\xF6\xF6d ja teenida teenusega raha.<br> &quot;Richard Stallman, &quot;vaba tarkvara isa&quot;, \xFCtles: &quot; <strong>Ma ei kasuta oma elu kunagi selleks, et ehitada vangla, kuhu teisi vangistada!</strong><br> Nii et palun \xE4rge enam kunagi \xF6elge, et &quot;autori\xF5igus soodustab originaalsust&quot;, see on kapitalistlik suitsukate ja solvab inimloomingut.<br> T\xF5eliselt suuri leiutisi tehakse hobi korras v\xF5i \xF5ilsatel eesm\xE4rkidel, nagu n\xE4iteks &quot;inimkonna heaolu edendamine&quot;, mitte raha eest!</p></blockquote></li><li><p><a href="/404">Hover kummitus versioon 404 lehek\xFClg</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/f74fdffa4b22c06ade6a5451ad34111ddb7bf60a/coffee/markdown-it-plugin.coffee#L13" target="_blank" rel="noopener noreferrer">Lisades gumlet.io cdn pilte githubi voodis</a>, <a href="https://www.gumlet.com/blog/worlds-first-service-to-provide-avif-support/" target="_blank" rel="noopener noreferrer">Gumlet tunneb brauseri \xE4ra ja teisendab png automaatselt webp- v\xF5i avif-formaadiks, et s\xE4\xE4sta ribalaiust ja parandada lehe laadimiskiirust</a>.</p></li></ul><h2 id="markdown-kohandamine" tabindex="-1"><a class="header-anchor" href="#markdown-kohandamine" aria-hidden="true">#</a> markdown kohandamine</h2><ul><li><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/plugin.coffee" target="_blank" rel="noopener noreferrer">Jalapealse kommentaari tugi</a></li><li><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/plugin.coffee" target="_blank" rel="noopener noreferrer">V\xF5imalus tsiteerida v\xE4liseid faile <code>#inculde xx.txt</code> s\xFCntaksiga</a></li><li><a href="https://github.com/rmw-link/blog-vuepress2/blob/cbca993f56327dc4a55afc7a33690c80903f3774/coffee/config.coffee#L18" target="_blank" rel="noopener noreferrer">Toetus \xFChe rea s\xF6\xF6da v\xE4ljundile html-ile</a> <a href="https://github.com/rmw-link/blog-vuepress2/blob/cbca993f56327dc4a55afc7a33690c80903f3774/coffee/config.coffee#L18" target="_blank" rel="noopener noreferrer"><code>&lt;br&gt;</code></a></li></ul>',7);function i(o,l){return t}var p=e(r,[["render",i],["__file","2020-11-29-vuepress.html.vue"]]);export{p as default};
