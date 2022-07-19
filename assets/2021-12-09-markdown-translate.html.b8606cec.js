import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.2a6a1bd2.js";const t={},a=r('<h1 id="instrumente-de-traducere-markdown" tabindex="-1"><a class="header-anchor" href="#instrumente-de-traducere-markdown" aria-hidden="true">#</a> instrumente de traducere markdown</h1><p>Instrumentele de traducere markdown de pe pia\u021B\u0103 sunt problematice \u0219i nu func\u021Bioneaz\u0103 bine.</p><p>De exemplu, dac\u0103 folosi\u021Bi <a href="https://github.com/menthays/markdown-translator" target="_blank" rel="noopener noreferrer">menthays/markdown-translator</a> pentru a traduce textul markdown, acesta traduce</p><p><code>\u5BF9 [libmdbx](https://github.com/erthink/libmdbx) \u7684 rust \u5C01\u88C5</code></p><p>\xEEn</p><p><code>Right [libmdbx](https://github.com/erthink/libmdbx) The rust package of</code>Motivul pentru aceasta este c\u0103 \xEEmparte textul \xEEn</p><p>Motivul este c\u0103 acesta \xEEmparte textul \xEEn <code>{ text: &#39;\u5BF9 &#39; },{ text: &#39;libmdbx&#39; },{ text: &#39; \u7684 rust \u5C01\u88C5&#39; }</code>pentru a-l traduce separat.</p><p>Dac\u0103 se folose\u0219te altceva, cum ar fi <a href="https://github.com/zjp-CN/bilingual/issues/22" target="_blank" rel="noopener noreferrer">bilingv</a>, nu se p\u0103streaz\u0103 stilul de leg\u0103tur\u0103.</p><p>Am scris <code>@rmw/deepl-markdown-translate</code> pentru a rezolva o serie de probleme \u0219i pentru a sprijini</p><ul><li>Traducerea textului comentariilor din codul <code>rust</code></li><li>nu se traduc c\xE2mpurile de configurare \xEEn <a href="https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html#prev" target="_blank" rel="noopener noreferrer">vuepress</a></li><li>Caching linie cu linie pentru a economisi costurile de traducere</li></ul><p>Pentru urm\u0103torul text</p><p><img src="//irmw.gumlet.io/nc10t5.png" alt=""></p><p>Traducerea func\u021Bioneaz\u0103 dup\u0103 cum urmeaz\u0103</p><p><img src="//irmw.gumlet.io/CytFEw.png" alt=""></p><p>Traducerea necesit\u0103 <a href="https://www.deepl.com/pro-api" target="_blank" rel="noopener noreferrer"><code>api key</code></a>, v\u0103 rug\u0103m s\u0103 o solicita\u021Bi \xEEn prealabil. (Este necesar un card de credit din SUA pentru a deschide, pute\u021Bi trimite un e-mail la <code>i@rmw.link</code> pentru a v\u0103 ajuta cu acest lucru dac\u0103 ave\u021Bi nevoie).</p><p>Consulta\u021Bi <a href="https://www.npmjs.com/package/@rmw/deepl-markdown-translate" target="_blank" rel="noopener noreferrer">documenta\u021Bia codului</a> pentru mai multe detalii</p>',16);function n(i,o){return a}var l=e(t,[["render",n],["__file","2021-12-09-markdown-translate.html.vue"]]);export{l as default};
