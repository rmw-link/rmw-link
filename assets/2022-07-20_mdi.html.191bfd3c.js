import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.2a6a1bd2.js";const i={},o=r('<h1 id="mdi-incorporare-il-codice-in-markdown-numero-di-versione-markdown" tabindex="-1"><a class="header-anchor" href="#mdi-incorporare-il-codice-in-markdown-numero-di-versione-markdown" aria-hidden="true">#</a> mdi : incorporare il codice in markdown / numero di versione / markdown ...</h1><h2 id="prefazione" tabindex="-1"><a class="header-anchor" href="#prefazione" aria-hidden="true">#</a> Prefazione</h2><p>\xC8 un requisito comune incorporare i numeri di versione e il codice demo in <code>readme.md</code>.</p><p>Esistono strumenti simili sul mercato, ma non funzionano bene. Cos\xEC ne ho scritto uno io stesso (dimensione del file eseguibile 256 KB).</p><p>La funzionalit\xE0 \xE8 tale che la scrittura di un&#39;istruzione come <code>&gt; ./demo.js</code> in markdown incorporer\xE0 il codice e il contenuto risultante \xE8 mostrato nella schermata sottostante:</p><p><img src="//irmw.gumlet.io/i9g9We.png" alt=""></p><p>In alternativa, con lo <a href="https://rmw.link/log/2021-12-09-markdown-translate" target="_blank" rel="noopener noreferrer">strumento di traduzione markdown</a> che ho scritto <a href="https://rmw.link/log/2021-12-09-markdown-translate" target="_blank" rel="noopener noreferrer">sulla base di deepl</a>, \xE8 possibile tradurre automaticamente dal cinese all&#39;inglese e presentarlo nello stesso file <code>readme.md</code>.</p><p>L&#39;esperienza dell&#39;utente sar\xE0 molto buona grazie a un punto di ancoraggio nel testo all&#39;inizio del readme di github (sotto), su cui si pu\xF2 cliccare per passare alle varie versioni linguistiche delle istruzioni.</p><p><img src="//irmw.gumlet.io/YQfKiS.png" alt=""></p><h2 id="installazione" tabindex="-1"><a class="header-anchor" href="#installazione" aria-hidden="true">#</a> Installazione</h2><p><a href="https://github.com/rmw-lib/mdi/releases" target="_blank" rel="noopener noreferrer">Scaricare da github</a> o <code>cargo install mdi</code></p><p><a href="https://github.com/rmw-lib/mdi" target="_blank" rel="noopener noreferrer">Indirizzo della base di codice</a></p><h2 id="utilizzo" tabindex="-1"><a class="header-anchor" href="#utilizzo" aria-hidden="true">#</a> Utilizzo</h2><p><code>mdi [dir]</code></p><p>Cercher\xE0 nella directory <code>xxx.mdi.md</code> e sostituir\xE0 <code>&gt; ./xxx.rs</code> con il contenuto del codice incorporato e lo invier\xE0 a <code>xxx.md</code>.</p><p>Se l&#39;embed \xE8 un file markdown, render\xE0 ricorsivamente i riferimenti ad esso.</p><p>Visualizza il file dimostrativo <a href="https://raw.githubusercontent.com/rmw-lib/mdi/master/readme.mdi.md" target="_blank" rel="noopener noreferrer">readme.mdi.md</a></p>',17);function a(n,t){return o}var s=e(i,[["render",a],["__file","2022-07-20_mdi.html.vue"]]);export{s as default};
