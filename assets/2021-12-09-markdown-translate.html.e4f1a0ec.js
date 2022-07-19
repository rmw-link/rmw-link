import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as t}from"./app.2a6a1bd2.js";const r={},a=t('<h1 id="markdown-vertaalhulpmiddelen" tabindex="-1"><a class="header-anchor" href="#markdown-vertaalhulpmiddelen" aria-hidden="true">#</a> markdown vertaalhulpmiddelen</h1><p>De markdown vertaalhulpmiddelen op de markt zijn problematisch en werken niet goed.</p><p>Bijvoorbeeld, als je <a href="https://github.com/menthays/markdown-translator" target="_blank" rel="noopener noreferrer">menthays/markdown-translator</a> gebruikt om markdown tekst te vertalen, vertaalt het</p><p><code>\u5BF9 [libmdbx](https://github.com/erthink/libmdbx) \u7684 rust \u5C01\u88C5</code></p><p>in</p><p><code>Right [libmdbx](https://github.com/erthink/libmdbx) The rust package of</code>De reden hiervoor is dat het de tekst splitst in</p><p>De reden hiervoor is dat de tekst wordt opgesplitst in <code>{ text: &#39;\u5BF9 &#39; },{ text: &#39;libmdbx&#39; },{ text: &#39; \u7684 rust \u5C01\u88C5&#39; }</code>om deze afzonderlijk te vertalen.</p><p>Iets anders gebruiken, zoals <a href="https://github.com/zjp-CN/bilingual/issues/22" target="_blank" rel="noopener noreferrer">tweetalig</a>, houdt de linkstijl niet in stand.</p><p>Ik schreef <code>@rmw/deepl-markdown-translate</code> om een aantal problemen op te lossen en om</p><ul><li>Het vertalen van de commentaar tekst van <code>rust</code> code</li><li>configuratievelden in <a href="https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html#prev" target="_blank" rel="noopener noreferrer">vuepress</a> worden niet vertaald</li><li>Caching regel voor regel om vertaalkosten te besparen</li></ul><p>Voor de volgende tekst</p><p><img src="//irmw.gumlet.io/nc10t5.png" alt=""></p><p>De vertaling werkt als volgt</p><p><img src="//irmw.gumlet.io/CytFEw.png" alt=""></p><p>De vertaling vereist <a href="https://www.deepl.com/pro-api" target="_blank" rel="noopener noreferrer">deepl&#39;s <code>api key</code>,</a> vraag het eerst aan. (Een Amerikaanse creditcard is vereist om te openen, u kunt een e-mail sturen naar <code>i@rmw.link</code> om u hiermee te helpen als dat nodig is).</p><p>Zie <a href="https://www.npmjs.com/package/@rmw/deepl-markdown-translate" target="_blank" rel="noopener noreferrer">de documentatie bij de code</a> voor meer details</p>',16);function n(o,l){return a}var s=e(r,[["render",n],["__file","2021-12-09-markdown-translate.html.vue"]]);export{s as default};
