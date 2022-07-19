import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.2a6a1bd2.js";const n={},d=r('<h1 id="mdi-indlejring-af-kode-i-markdown-versionsnummer-markdown" tabindex="-1"><a class="header-anchor" href="#mdi-indlejring-af-kode-i-markdown-versionsnummer-markdown" aria-hidden="true">#</a> mdi : indlejring af kode i markdown / versionsnummer / markdown ...</h1><h2 id="forord" tabindex="-1"><a class="header-anchor" href="#forord" aria-hidden="true">#</a> Forord</h2><p>Det er et almindeligt krav at indlejre versionsnumre og demokode i <code>readme.md</code>.</p><p>Der findes nogle lignende v\xE6rkt\xF8jer p\xE5 markedet, men de fungerer ikke godt. S\xE5 jeg skrev selv en (eksekverbar filst\xF8rrelse 256 KB).</p><p>Funktionaliteten er s\xE5dan, at hvis du skriver en erkl\xE6ring som <code>&gt; ./demo.js</code> i markdown, vil koden blive indlejret, og det resulterende indhold vises i sk\xE6rmbilledet nedenfor :</p><p><img src="//irmw.gumlet.io/i9g9We.png" alt=""></p><p>Alternativt kan man med det <a href="https://rmw.link/log/2021-12-09-markdown-translate" target="_blank" rel="noopener noreferrer">markdown-overs\xE6ttelsesv\xE6rkt\xF8j</a>, som jeg har skrevet <a href="https://rmw.link/log/2021-12-09-markdown-translate" target="_blank" rel="noopener noreferrer">baseret p\xE5 deepl</a>, automatisk overs\xE6tte og gengive kinesisk og engelsk i den samme <code>readme.md</code> -fil.</p><p>Brugeroplevelsen vil v\xE6re meget god med et ankerpunkt i teksten \xF8verst i github-l\xE6semidlet (nedenfor), som man kan klikke p\xE5 for at springe til de forskellige sprogversioner af vejledningen.</p><p><img src="//irmw.gumlet.io/YQfKiS.png" alt=""></p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p><a href="https://github.com/rmw-lib/mdi/releases" target="_blank" rel="noopener noreferrer">Download fra github</a> eller <code>cargo install mdi</code></p><p><a href="https://github.com/rmw-lib/mdi" target="_blank" rel="noopener noreferrer">Kodebase-adresse</a></p><h2 id="brug" tabindex="-1"><a class="header-anchor" href="#brug" aria-hidden="true">#</a> Brug</h2><p><code>mdi [dir]</code></p><p>Den vil s\xF8ge i mappen <code>xxx.mdi.md</code> og erstatte <code>&gt; ./xxx.rs</code> med den indlejrede kode og sende den til <code>xxx.md</code>.</p><p>Hvis indlejringen er en markdown-fil, vil den rekursivt gengive henvisninger til den.</p><p>Se demofilen <a href="https://raw.githubusercontent.com/rmw-lib/mdi/master/readme.mdi.md" target="_blank" rel="noopener noreferrer">readme.mdi.md</a></p>',17);function i(a,o){return d}var l=e(n,[["render",i],["__file","2022-07-20_mdi.html.vue"]]);export{l as default};
