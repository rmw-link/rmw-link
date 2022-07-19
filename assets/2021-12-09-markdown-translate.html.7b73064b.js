import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.2a6a1bd2.js";const t={},o=r('<h1 id="outils-de-traduction-markdown" tabindex="-1"><a class="header-anchor" href="#outils-de-traduction-markdown" aria-hidden="true">#</a> outils de traduction markdown</h1><p>Les outils de traduction markdown disponibles sur le march\xE9 sont probl\xE9matiques et ne fonctionnent pas bien.</p><p>Par exemple, si vous utilisez <a href="https://github.com/menthays/markdown-translator" target="_blank" rel="noopener noreferrer">menthays/markdown-translator</a> pour traduire du texte markdown, il traduit</p><p><code>\u5BF9 [libmdbx](https://github.com/erthink/libmdbx) \u7684 rust \u5C01\u88C5</code></p><p>en</p><p><code>Right [libmdbx](https://github.com/erthink/libmdbx) The rust package of</code>La raison en est que cela divise le texte en</p><p>La raison en est qu&#39;il divise le texte en <code>{ text: &#39;\u5BF9 &#39; },{ text: &#39;libmdbx&#39; },{ text: &#39; \u7684 rust \u5C01\u88C5&#39; }</code>pour le traduire s\xE9par\xE9ment.</p><p>L&#39;utilisation de quelque chose d&#39;autre, comme <a href="https://github.com/zjp-CN/bilingual/issues/22" target="_blank" rel="noopener noreferrer">bilingue</a>, ne permet pas de conserver le style du lien.</p><p>J&#39;ai \xE9crit <code>@rmw/deepl-markdown-translate</code> pour r\xE9soudre un certain nombre de probl\xE8mes et pour supporter</p><ul><li>Traduction du texte de commentaire du code <code>rust</code></li><li>non traduction des champs de configuration dans <a href="https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html#prev" target="_blank" rel="noopener noreferrer">vuepress</a></li><li>Mise en cache ligne par ligne pour \xE9conomiser les co\xFBts de traduction</li></ul><p>Pour le texte suivant</p><p><img src="//irmw.gumlet.io/nc10t5.png" alt=""></p><p>La traduction fonctionne comme suit</p><p><img src="//irmw.gumlet.io/CytFEw.png" alt=""></p><p>La traduction n\xE9cessite le <a href="https://www.deepl.com/pro-api" target="_blank" rel="noopener noreferrer">site <code>api key</code> de deepl,</a> veuillez en faire la demande au pr\xE9alable. (Une carte de cr\xE9dit am\xE9ricaine est n\xE9cessaire pour l&#39;ouverture, vous pouvez envoyer un courriel \xE0 <code>i@rmw.link</code> pour vous aider \xE0 le faire si vous en avez besoin).</p><p>Voir la <a href="https://www.npmjs.com/package/@rmw/deepl-markdown-translate" target="_blank" rel="noopener noreferrer">documentation du code</a> pour plus de d\xE9tails</p>',16);function a(n,i){return o}var l=e(t,[["render",a],["__file","2021-12-09-markdown-translate.html.vue"]]);export{l as default};
