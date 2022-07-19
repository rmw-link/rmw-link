import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.87d927ab.js";const a={},o=r('<h1 id="mdi-inserir-codigo-em-markdown-numero-de-versao-markdown" tabindex="-1"><a class="header-anchor" href="#mdi-inserir-codigo-em-markdown-numero-de-versao-markdown" aria-hidden="true">#</a> mdi : inserir c\xF3digo em markdown / n\xFAmero de vers\xE3o / markdown ...</h1><h2 id="prefacio" tabindex="-1"><a class="header-anchor" href="#prefacio" aria-hidden="true">#</a> Pref\xE1cio</h2><p>Incorporar n\xFAmeros de vers\xE3o e c\xF3digo de demonstra\xE7\xE3o em <code>readme.md</code> \xE9 um requisito muito comum.</p><p>Existem algumas ferramentas semelhantes no mercado, mas n\xE3o funcionam bem. Assim, eu pr\xF3prio escrevi um (ficheiro execut\xE1vel tamanho 256 KB).</p><p>A funcionalidade \xE9 tal que escrever uma declara\xE7\xE3o como <code>&gt; ./demo.js</code> em markdown incorporar\xE1 o c\xF3digo, e o conte\xFAdo resultante \xE9 mostrado na imagem de ecr\xE3 abaixo :</p><p><img src="//irmw.gumlet.io/i9g9We.png" alt=""></p><p>Em alternativa, com a <a href="https://rmw.link/log/2021-12-09-markdown-translate" target="_blank" rel="noopener noreferrer">ferramenta de tradu\xE7\xE3o de markdown</a> que escrevi <a href="https://rmw.link/log/2021-12-09-markdown-translate" target="_blank" rel="noopener noreferrer">com base em deepl</a>, pode traduzir automaticamente do chin\xEAs para o ingl\xEAs e apresent\xE1-lo no mesmo ficheiro <code>readme.md</code>.</p><p>A experi\xEAncia do utilizador ser\xE1 muito boa com um ponto de \xE2ncora em texto no topo da leitura do github (em baixo), que pode ser clicado para saltar para as v\xE1rias vers\xF5es lingu\xEDsticas das instru\xE7\xF5es.</p><p><img src="//irmw.gumlet.io/YQfKiS.png" alt=""></p><h2 id="instalacao" tabindex="-1"><a class="header-anchor" href="#instalacao" aria-hidden="true">#</a> Instala\xE7\xE3o</h2><p><a href="https://github.com/rmw-lib/mdi/releases" target="_blank" rel="noopener noreferrer">Descarregar do github</a> ou <code>cargo install mdi</code></p><p><a href="https://github.com/rmw-lib/mdi" target="_blank" rel="noopener noreferrer">Endere\xE7o da base de c\xF3digo</a></p><h2 id="utilizacao" tabindex="-1"><a class="header-anchor" href="#utilizacao" aria-hidden="true">#</a> Utiliza\xE7\xE3o</h2><p><code>mdi [dir]</code></p><p>Pesquisar\xE1 o direct\xF3rio <code>xxx.mdi.md</code> e substituir\xE1 <code>&gt; ./xxx.rs</code> pelo conte\xFAdo do c\xF3digo incorporado e envi\xE1-lo-\xE1 para <code>xxx.md</code>.</p><p>Se a crava\xE7\xE3o for um ficheiro de remarca\xE7\xE3o para baixo, far\xE1 refer\xEAncias recorrentes ao mesmo.</p><p>Ver o ficheiro de demonstra\xE7\xE3o <a href="https://raw.githubusercontent.com/rmw-lib/mdi/master/readme.mdi.md" target="_blank" rel="noopener noreferrer">readme.mdi.md</a></p>',17);function i(d,t){return o}var c=e(a,[["render",i],["__file","2022-07-20_mdi.html.vue"]]);export{c as default};