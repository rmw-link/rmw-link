import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.87d927ab.js";const a={},n=r('<h1 id="mdi-badda-in-kod-i-markdown-versionsnummer-markdown" tabindex="-1"><a class="header-anchor" href="#mdi-badda-in-kod-i-markdown-versionsnummer-markdown" aria-hidden="true">#</a> mdi : b\xE4dda in kod i markdown / versionsnummer / markdown ...</h1><h2 id="forord" tabindex="-1"><a class="header-anchor" href="#forord" aria-hidden="true">#</a> F\xF6rord</h2><p>Att b\xE4dda in versionsnummer och demokod i <code>readme.md</code> \xE4r ett mycket vanligt krav.</p><p>Det finns n\xE5gra liknande verktyg p\xE5 marknaden, men de fungerar inte bra. S\xE5 jag skrev ett sj\xE4lv (storlek p\xE5 256 KB).</p><p>Funktionaliteten \xE4r s\xE5dan att om du skriver ett uttalande som <code>&gt; ./demo.js</code> i markdown kommer koden att b\xE4ddas in, och det resulterande inneh\xE5llet visas i sk\xE4rmdumpen nedan :</p><p><img src="//irmw.gumlet.io/i9g9We.png" alt=""></p><p>Med det <a href="https://rmw.link/log/2021-12-09-markdown-translate" target="_blank" rel="noopener noreferrer">deepl-baserade markdown-\xF6vers\xE4ttningsverktyg</a> som jag har skrivit \xE4r det dessutom m\xF6jligt att automatiskt \xF6vers\xE4tta och \xE5terge kinesiska och engelska i samma <code>readme.md</code> -fil.</p><p>Anv\xE4ndarupplevelsen kommer att bli mycket bra med en ankarpunkt i texten h\xF6gst upp i Githubs Readme (nedan), som man kan klicka p\xE5 f\xF6r att komma till de olika spr\xE5kversionerna av instruktionerna.</p><p><img src="//irmw.gumlet.io/YQfKiS.png" alt=""></p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p><a href="https://github.com/rmw-lib/mdi/releases" target="_blank" rel="noopener noreferrer">Ladda ner fr\xE5n github</a> eller <code>cargo install mdi</code></p><p><a href="https://github.com/rmw-lib/mdi" target="_blank" rel="noopener noreferrer">Adress till kodbasen</a></p><h2 id="anvand" tabindex="-1"><a class="header-anchor" href="#anvand" aria-hidden="true">#</a> Anv\xE4nd</h2><p><code>mdi [dir]</code></p><p>Den s\xF6ker i katalogen <code>xxx.mdi.md</code> och ers\xE4tter <code>&gt; ./xxx.rs</code> med det inb\xE4ddade kodinneh\xE5llet och skickar det till <code>xxx.md</code>.</p><p>Om inb\xE4ddningen \xE4r en markdown-fil kommer referenser till den att \xE5terges rekursivt.</p><p>Visa demofilen <a href="https://raw.githubusercontent.com/rmw-lib/mdi/master/readme.mdi.md" target="_blank" rel="noopener noreferrer">readme.mdi.md</a></p>',17);function d(t,i){return n}var s=e(a,[["render",d],["__file","2022-07-20_mdi.html.vue"]]);export{s as default};
