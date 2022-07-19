import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.87d927ab.js";const t={},a=r('<h1 id="strumenti-di-traduzione-markdown" tabindex="-1"><a class="header-anchor" href="#strumenti-di-traduzione-markdown" aria-hidden="true">#</a> strumenti di traduzione markdown</h1><p>Gli strumenti di traduzione markdown sul mercato sono problematici e non funzionano bene.</p><p>Per esempio, se usate <a href="https://github.com/menthays/markdown-translator" target="_blank" rel="noopener noreferrer">menthays/markdown-translator</a> per tradurre il testo markdown, esso traduce</p><p><code>\u5BF9 [libmdbx](https://github.com/erthink/libmdbx) \u7684 rust \u5C01\u88C5</code></p><p>in</p><p><code>Right [libmdbx](https://github.com/erthink/libmdbx) The rust package of</code>La ragione di questo \xE8 che divide il testo in</p><p>Il motivo \xE8 che divide il testo in <code>{ text: &#39;\u5BF9 &#39; },{ text: &#39;libmdbx&#39; },{ text: &#39; \u7684 rust \u5C01\u88C5&#39; }</code>per tradurlo separatamente.</p><p>Usare qualcos&#39;altro, come il <a href="https://github.com/zjp-CN/bilingual/issues/22" target="_blank" rel="noopener noreferrer">bilingue</a>, non mantiene lo stile del link.</p><p>Ho scritto <code>@rmw/deepl-markdown-translate</code> per risolvere una serie di problemi e per supportare</p><ul><li>Tradurre il testo di commento del codice <code>rust</code></li><li>non tradurre i campi di configurazione in <a href="https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html#prev" target="_blank" rel="noopener noreferrer">vuepress</a></li><li>Caching riga per riga per risparmiare i costi di traduzione</li></ul><p>Per il seguente testo</p><p><img src="//irmw.gumlet.io/nc10t5.png" alt=""></p><p>La traduzione funziona come segue</p><p><img src="//irmw.gumlet.io/CytFEw.png" alt=""></p><p>La traduzione richiede il <a href="https://www.deepl.com/pro-api" target="_blank" rel="noopener noreferrer"><code>api key</code></a> di deepl, richiedetelo prima. (Una carta di credito statunitense \xE8 necessaria per aprire, potete inviare un&#39;email a <code>i@rmw.link</code> per aiutarvi con questo se ne avete bisogno).</p><p>Vedere la <a href="https://www.npmjs.com/package/@rmw/deepl-markdown-translate" target="_blank" rel="noopener noreferrer">documentazione del codice</a> per maggiori dettagli</p>',16);function i(o,n){return a}var s=e(t,[["render",i],["__file","2021-12-09-markdown-translate.html.vue"]]);export{s as default};
