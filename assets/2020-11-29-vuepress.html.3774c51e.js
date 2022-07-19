import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.87d927ab.js";const a={},t=r('<h1 id="vuepress-construi-blog" tabindex="-1"><a class="header-anchor" href="#vuepress-construi-blog" aria-hidden="true">#</a> vuepress construi blog</h1><p>Am construit un blog static bazat pe <a href="https://v2.vuepress.vuejs.org" target="_blank" rel="noopener noreferrer">vuepress 2.0</a> ca site oficial pentru rmw.link.</p><p>Baza de cod este la <a href="https://github.com/rmw-link/blog-vuepress2" target="_blank" rel="noopener noreferrer">github.com/rmw-link/blog-vuepress2</a></p><p>Personalizarea este dup\u0103 cum urmeaz\u0103 :</p><ul><li><p>Utiliza\u021Bi <a href="https://github.com/harttle/md-padding" target="_blank" rel="noopener noreferrer">md-padding</a> \u0219i <a href="https://github.com/rmw-link/blog-vuepress2/blob/master/.direnv/git/hooks/pre-commit" target="_blank" rel="noopener noreferrer">git hooks</a> pentru a <a href="https://github.com/rmw-link/blog-vuepress2/blob/ce966b52f0a06bf2748af36f539f50eadc9eea3c/script/hook.coffee#L46" target="_blank" rel="noopener noreferrer">ad\u0103uga automat spa\u021Bii \xEEntre chinez\u0103 \u0219i englez\u0103</a></p><p><code>git clone</code> Dup\u0103 aceea, accesa\u021Bi directorul \u0219i tasta\u021Bi <code>direnv allow</code>\u0219i <a href="https://github.com/rmw-link/blog-vuepress2/blob/master/.envrc" target="_blank" rel="noopener noreferrer">.envrc</a> va instala automat c\xE2rligele git.</p><p><a href="https://direnv.net" target="_blank" rel="noopener noreferrer">direnv</a> este un instrument de autoloader de mediu. <a href="https://cloud.tencent.com/developer/article/1615495" target="_blank" rel="noopener noreferrer">Face\u021Bi clic aici pentru un tutorial</a>.</p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/translate.coffee" target="_blank" rel="noopener noreferrer">Traduce\u021Bi automat blogurile \xEEn mai multe limbi</a></p><p>Vezi <a href="/log/2021-12-09-markdown-translate">instrumente de traducere markdown</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/cleanup.coffee" target="_blank" rel="noopener noreferrer">Cur\u0103\u021Ba\u021Bi automat fi\u0219ierele vechi \xEEn alte limbi dup\u0103 redenumirea numelui fi\u0219ierului \xEEn limba principal\u0103</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/i18n.coffee" target="_blank" rel="noopener noreferrer">Traducere scripturi pentru configurarea temei</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/dev.sh" target="_blank" rel="noopener noreferrer">Monitoriza\u021Bi modific\u0103rile \u0219i compila\u021Bi stiluri de stylus \u0219i scripturi coffeescript pentru a</a> <a href="https://github.com/rmw-link/blog-vuepress2/blob/master/dev.sh" target="_blank" rel="noopener noreferrer"><code>site/.vuepress</code></a></p><p>Aceasta utilizeaz\u0103 un mic instrument numit <a href="https://www.npmjs.com/package/concurrently" target="_blank" rel="noopener noreferrer">concurrently</a> pentru a rula simultan mai multe sarcini \xEEn linie de comand\u0103. Parametrul <code>--kill-others</code> asigur\u0103 c\u0103 se execut\u0103 doar un singur script \xEEn acela\u0219i timp.</p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/tree/master/styl" target="_blank" rel="noopener noreferrer">Modifica\u021Bi fonturile chineze\u0219ti pentru a</a> <a href="https://github.com/rmw-link/blog-vuepress2/tree/master/styl" target="_blank" rel="noopener noreferrer"><code>Noto Sans SC</code></a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/styl/font/download.xsh" target="_blank" rel="noopener noreferrer">Script de desc\u0103rcare pe loturi pentru fonturi \xEEn fi\u0219iere css</a></p><p>Bazat pe <a href="https://xon.sh" target="_blank" rel="noopener noreferrer">xonsh</a>, <code>./download.xsh code.css</code>, acesta va desc\u0103rca fonturile din fi\u0219ierele css \u0219i va genera stiloul corespunz\u0103tor.</p><p>xonsh este o combina\u021Bie foarte util\u0103 de python \u0219i bash.</p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/clientAppEnhance.coffee" target="_blank" rel="noopener noreferrer">Limba implicit\u0103 a browserului este schimbat\u0103 automat atunci c\xE2nd se viziteaz\u0103 pagina de pornire.</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/file_url.coffee" target="_blank" rel="noopener noreferrer">Anuarele scanate sunt automat mapate \xEEn URL-uri</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/sitemap.coffee" target="_blank" rel="noopener noreferrer">sitemap.xml este generat</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/cbca993f56327dc4a55afc7a33690c80903f3774/styl/index.styl#L17" target="_blank" rel="noopener noreferrer">Stiluri de citare \xEEnfrumuse\u021Bate</a></p><p>Stilul de citare este demonstrat mai jos</p><p><a href="https://www.ruanyifeng.com/blog/2009/11/why_i_love_piratebay.html" target="_blank" rel="noopener noreferrer">Yifeng Ruan: &quot;De ce \xEEmi place The Pirate Bay?</a>:</p><blockquote><p>Unii ar putea sus\u021Bine c\u0103, f\u0103r\u0103 drepturile de autor, oamenii nu ar fi motiva\u021Bi s\u0103 inoveze.<br> Succesul mi\u0219c\u0103rii pentru software liber este o dovad\u0103 c\u0103 acest argument nu este adev\u0103rat.<br> Adev\u0103rul este c\u0103 partajarea gratuit\u0103 poate produce, de asemenea, o munc\u0103 excelent\u0103 \u0219i poate face bani din acest serviciu.<br> &quot;Richard Stallman, &quot;p\u0103rintele software-ului liber&quot;, a declarat: &quot; <strong>Nu-mi voi folosi niciodat\u0103 via\u021Ba pentru a construi o \xEEnchisoare pentru a-i \xEEncarcera pe al\u021Bii!</strong><br> A\u0219a c\u0103 v\u0103 rog s\u0103 nu mai spune\u021Bi niciodat\u0103 c\u0103 &quot;drepturile de autor \xEEncurajeaz\u0103 originalitatea&quot;, este o perdea de fum capitalist\u0103 \u0219i un afront adus creativit\u0103\u021Bii umane.<br> Inven\u021Biile cu adev\u0103rat m\u0103re\u021Be sunt f\u0103cute pentru hobby-uri sau pentru scopuri nobile, cum ar fi &quot;promovarea bun\u0103st\u0103rii omenirii&quot;, nu pentru bani!</p></blockquote></li><li><p><a href="/404">Versiunea hover ghost a paginii 404</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/f74fdffa4b22c06ade6a5451ad34111ddb7bf60a/coffee/markdown-it-plugin.coffee#L13" target="_blank" rel="noopener noreferrer">Ad\u0103ug\xE2nd gumlet.io cdn la imaginile din patul github</a>, <a href="https://www.gumlet.com/blog/worlds-first-service-to-provide-avif-support/" target="_blank" rel="noopener noreferrer">Gumlet recunoa\u0219te browserul \u0219i converte\u0219te automat png \xEEn webp sau avif pentru a economisi l\u0103\u021Bimea de band\u0103 \u0219i a \xEEmbun\u0103t\u0103\u021Bi viteza de \xEEnc\u0103rcare a paginii</a>.</p></li></ul><h2 id="personalizare-markdown" tabindex="-1"><a class="header-anchor" href="#personalizare-markdown" aria-hidden="true">#</a> personalizare markdown</h2><ul><li><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/plugin.coffee" target="_blank" rel="noopener noreferrer">Suport pentru comentarii \xEEn subsol</a></li><li><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/plugin.coffee" target="_blank" rel="noopener noreferrer">Posibilitatea de a cita fi\u0219iere externe cu sintaxa <code>#inculde xx.txt</code></a></li><li><a href="https://github.com/rmw-link/blog-vuepress2/blob/cbca993f56327dc4a55afc7a33690c80903f3774/coffee/config.coffee#L18" target="_blank" rel="noopener noreferrer">Suport pentru o singur\u0103 linie de ie\u0219ire feed la html</a> <a href="https://github.com/rmw-link/blog-vuepress2/blob/cbca993f56327dc4a55afc7a33690c80903f3774/coffee/config.coffee#L18" target="_blank" rel="noopener noreferrer"><code>&lt;br&gt;</code></a></li></ul>',7);function i(o,n){return t}var p=e(a,[["render",i],["__file","2020-11-29-vuepress.html.vue"]]);export{p as default};
