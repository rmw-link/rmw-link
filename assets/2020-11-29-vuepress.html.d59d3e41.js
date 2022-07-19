import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.2a6a1bd2.js";const t={},o=r('<h1 id="vuepress-bygge-blog" tabindex="-1"><a class="header-anchor" href="#vuepress-bygge-blog" aria-hidden="true">#</a> vuepress bygge blog</h1><p>Jeg har bygget en statisk blog baseret p\xE5 <a href="https://v2.vuepress.vuejs.org" target="_blank" rel="noopener noreferrer">vuepress 2.0</a> som det officielle websted for rmw.link.</p><p>Kodebasen findes p\xE5 <a href="https://github.com/rmw-link/blog-vuepress2" target="_blank" rel="noopener noreferrer">github.com/rmw-link/blog-vuepress2</a></p><p>Tilpasningen er som f\xF8lger :</p><ul><li><p>Brug <a href="https://github.com/harttle/md-padding" target="_blank" rel="noopener noreferrer">md-padding</a> og <a href="https://github.com/rmw-link/blog-vuepress2/blob/master/.direnv/git/hooks/pre-commit" target="_blank" rel="noopener noreferrer">git hooks</a> til <a href="https://github.com/rmw-link/blog-vuepress2/blob/ce966b52f0a06bf2748af36f539f50eadc9eea3c/script/hook.coffee#L46" target="_blank" rel="noopener noreferrer">automatisk at tilf\xF8je mellemrum mellem kinesisk og engelsk</a></p><p><code>git clone</code> Derefter skal du g\xE5 til mappen og skrive <code>direnv allow</code>og <a href="https://github.com/rmw-link/blog-vuepress2/blob/master/.envrc" target="_blank" rel="noopener noreferrer">.envrc</a> vil automatisk installere git hooks.</p><p><a href="https://direnv.net" target="_blank" rel="noopener noreferrer">direnv</a> er v\xE6rkt\xF8jet til autoloader af milj\xF8. <a href="https://cloud.tencent.com/developer/article/1615495" target="_blank" rel="noopener noreferrer">Klik her for at f\xE5 en vejledning</a>.</p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/translate.coffee" target="_blank" rel="noopener noreferrer">Automatisk overs\xE6ttelse af blogs til flere sprog</a></p><p>Se <a href="/log/2021-12-09-markdown-translate">v\xE6rkt\xF8jer til overs\xE6ttelse af markdown</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/cleanup.coffee" target="_blank" rel="noopener noreferrer">Ryd automatisk op i gamle filer p\xE5 andre sprog efter omd\xF8bning af filnavnet p\xE5 hovedsproget</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/i18n.coffee" target="_blank" rel="noopener noreferrer">Overs\xE6t scripts til konfiguration af temaer</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/dev.sh" target="_blank" rel="noopener noreferrer">Overv\xE5g \xE6ndringer og kompil\xE9r stylus-stilarter og coffeescript-scripts til</a> <a href="https://github.com/rmw-link/blog-vuepress2/blob/master/dev.sh" target="_blank" rel="noopener noreferrer"><code>site/.vuepress</code></a></p><p>Dette bruger et lille v\xE6rkt\xF8j kaldet <a href="https://www.npmjs.com/package/concurrently" target="_blank" rel="noopener noreferrer">concurrently</a> til at k\xF8re flere kommandolinjeopgaver samtidigt. Parameteren <code>--kill-others</code> sikrer, at kun \xE9t script k\xF8rer ad gangen.</p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/tree/master/styl" target="_blank" rel="noopener noreferrer">\xC6ndre kinesiske skrifttyper til</a> <a href="https://github.com/rmw-link/blog-vuepress2/tree/master/styl" target="_blank" rel="noopener noreferrer"><code>Noto Sans SC</code></a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/styl/font/download.xsh" target="_blank" rel="noopener noreferrer">Script til batch-download af skrifttyper i css-filer</a></p><p>Baseret p\xE5 <a href="https://xon.sh" target="_blank" rel="noopener noreferrer">xonsh</a>, <code>./download.xsh code.css</code> vil dette hente skrifttyper fra css-filer og generere den tilsvarende stylus.</p><p>xonsh er en meget nyttig kombination af python og bash.</p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/clientAppEnhance.coffee" target="_blank" rel="noopener noreferrer">Browserens standardsprog skiftes automatisk, n\xE5r du bes\xF8ger hjemmesiden</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/file_url.coffee" target="_blank" rel="noopener noreferrer">Scannede mapper tilknyttes automatisk til URL&#39;er</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/sitemap.coffee" target="_blank" rel="noopener noreferrer">sitemap.xml er genereret</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/cbca993f56327dc4a55afc7a33690c80903f3774/styl/index.styl#L17" target="_blank" rel="noopener noreferrer">Forbedrede citationsstile</a></p><p>Nedenfor er vist, hvordan man citerer en tekst</p><p><a href="https://www.ruanyifeng.com/blog/2009/11/why_i_love_piratebay.html" target="_blank" rel="noopener noreferrer">Yifeng Ruan: &quot;Hvorfor kan jeg lide The Pirate Bay?</a>:</p><blockquote><p>Nogle vil m\xE5ske h\xE6vde, at uden ophavsret ville folk ikke v\xE6re motiveret til at innovere.<br> Fri software-bev\xE6gelsens succes er et bevis p\xE5, at dette argument ikke er sandt.<br> Faktum er, at gratis deling ogs\xE5 kan producere godt arbejde og tjene penge p\xE5 tjenesten.<br> &quot;Richard Stallman, &quot;faderen til fri software&quot;, sagde: <strong>&quot;Jeg vil aldrig bruge mit liv p\xE5 at bygge et f\xE6ngsel for at f\xE6ngsle andre!</strong><br> S\xE5 lad venligst v\xE6re med at sige &quot;ophavsret fremmer originalitet&quot; igen, det er et kapitalistisk r\xF8gsl\xF8r og en forn\xE6rmelse mod den menneskelige kreativitet.<br> Virkelig store opfindelser er lavet til hobbyer eller til \xE6dle form\xE5l som f.eks. at &quot;fremme menneskehedens velf\xE6rd&quot;, ikke for pengenes skyld!</p></blockquote></li><li><p><a href="/404">Version af 404-siden med sv\xE6vende sp\xF8gelse</a></p></li><li><p>Ved at <a href="https://github.com/rmw-link/blog-vuepress2/blob/f74fdffa4b22c06ade6a5451ad34111ddb7bf60a/coffee/markdown-it-plugin.coffee#L13" target="_blank" rel="noopener noreferrer">tilf\xF8je gumlet.io cdn til billeder i github-sengen</a><a href="https://www.gumlet.com/blog/worlds-first-service-to-provide-avif-support/" target="_blank" rel="noopener noreferrer">genkender Gumlet browseren og konverterer automatisk png til webp eller avif for at spare b\xE5ndbredde og forbedre indl\xE6sningshastigheden p\xE5 siden</a>.</p></li></ul><h2 id="tilpasning-af-markdown" tabindex="-1"><a class="header-anchor" href="#tilpasning-af-markdown" aria-hidden="true">#</a> tilpasning af markdown</h2><ul><li><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/plugin.coffee" target="_blank" rel="noopener noreferrer">St\xF8tte til kommentarer i sidefoden</a></li><li><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/plugin.coffee" target="_blank" rel="noopener noreferrer">Mulighed for at citere eksterne filer med <code>#inculde xx.txt</code> syntaks</a></li><li><a href="https://github.com/rmw-link/blog-vuepress2/blob/cbca993f56327dc4a55afc7a33690c80903f3774/coffee/config.coffee#L18" target="_blank" rel="noopener noreferrer">Underst\xF8ttelse af output af enkelt linje feed til html</a> <a href="https://github.com/rmw-link/blog-vuepress2/blob/cbca993f56327dc4a55afc7a33690c80903f3774/coffee/config.coffee#L18" target="_blank" rel="noopener noreferrer"><code>&lt;br&gt;</code></a></li></ul>',7);function a(n,l){return o}var p=e(t,[["render",a],["__file","2020-11-29-vuepress.html.vue"]]);export{p as default};
