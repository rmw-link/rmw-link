import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.2a6a1bd2.js";const n={},t=r('<h1 id="vuepress-build-blog" tabindex="-1"><a class="header-anchor" href="#vuepress-build-blog" aria-hidden="true">#</a> vuepress build blog</h1><p>Ich habe einen statischen Blog auf Basis von <a href="https://v2.vuepress.vuejs.org" target="_blank" rel="noopener noreferrer">vuepress 2.0</a> als offizielle Website f\xFCr rmw.link erstellt.</p><p>Die Codebasis befindet sich unter <a href="https://github.com/rmw-link/blog-vuepress2" target="_blank" rel="noopener noreferrer">github.com/rmw-link/blog-vuepress2</a></p><p>Die Anpassung erfolgt wie folgt:</p><ul><li><p>Verwenden Sie <a href="https://github.com/harttle/md-padding" target="_blank" rel="noopener noreferrer">md-padding</a> und <a href="https://github.com/rmw-link/blog-vuepress2/blob/master/.direnv/git/hooks/pre-commit" target="_blank" rel="noopener noreferrer">git hooks</a>, um <a href="https://github.com/rmw-link/blog-vuepress2/blob/ce966b52f0a06bf2748af36f539f50eadc9eea3c/script/hook.coffee#L46" target="_blank" rel="noopener noreferrer">automatisch Leerzeichen zwischen Chinesisch und Englisch einzuf\xFCgen</a></p><p><code>git clone</code> Danach gehen Sie in das Verzeichnis und geben Sie <code>direnv allow</code>ein und <a href="https://github.com/rmw-link/blog-vuepress2/blob/master/.envrc" target="_blank" rel="noopener noreferrer">.envrc</a> installiert automatisch die Git-Hooks.</p><p><a href="https://direnv.net" target="_blank" rel="noopener noreferrer">direnv</a> ist das Autoloader-Werkzeug f\xFCr die Umgebung. <a href="https://cloud.tencent.com/developer/article/1615495" target="_blank" rel="noopener noreferrer">Klicken Sie hier, um eine Anleitung</a> zu erhalten.</p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/translate.coffee" target="_blank" rel="noopener noreferrer">Automatisches \xDCbersetzen von Blogs in mehrere Sprachen</a></p><p>Siehe <a href="/log/2021-12-09-markdown-translate">Markdown-\xDCbersetzungstools</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/cleanup.coffee" target="_blank" rel="noopener noreferrer">Automatisches Bereinigen alter Dateien in anderen Sprachen nach dem Umbenennen des Dateinamens der Hauptsprache</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/i18n.coffee" target="_blank" rel="noopener noreferrer">Skripte f\xFCr die Themenkonfiguration \xFCbersetzen</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/dev.sh" target="_blank" rel="noopener noreferrer">\xDCberwachen Sie \xC4nderungen und kompilieren Sie Stylus Styles und Coffeescript-Skripte, um</a> <a href="https://github.com/rmw-link/blog-vuepress2/blob/master/dev.sh" target="_blank" rel="noopener noreferrer"><code>site/.vuepress</code></a></p><p>Dabei wird ein kleines Tool namens <a href="https://www.npmjs.com/package/concurrently" target="_blank" rel="noopener noreferrer">concurrently</a> verwendet, um mehrere Befehlszeilenaufgaben gleichzeitig auszuf\xFChren. Der Parameter <code>--kill-others</code> stellt sicher, dass jeweils nur ein Skript ausgef\xFChrt wird.</p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/tree/master/styl" target="_blank" rel="noopener noreferrer">\xC4ndern Sie chinesische Schriftarten zu</a> <a href="https://github.com/rmw-link/blog-vuepress2/tree/master/styl" target="_blank" rel="noopener noreferrer"><code>Noto Sans SC</code></a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/styl/font/download.xsh" target="_blank" rel="noopener noreferrer">Batch-Download-Skript f\xFCr Schriftarten in css-Dateien</a></p><p>Auf der Grundlage von <a href="https://xon.sh" target="_blank" rel="noopener noreferrer">xonsh</a>, <code>./download.xsh code.css</code>, werden Schriftarten aus css-Dateien heruntergeladen und die entsprechenden Stifte erzeugt.</p><p>xonsh ist eine sehr n\xFCtzliche Kombination aus Python und Bash.</p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/clientAppEnhance.coffee" target="_blank" rel="noopener noreferrer">Die Standardsprache des Browsers wird beim Besuch der Startseite automatisch umgeschaltet</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/file_url.coffee" target="_blank" rel="noopener noreferrer">Gescannte Verzeichnisse werden automatisch auf URLs abgebildet</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/sitemap.coffee" target="_blank" rel="noopener noreferrer">sitemap.xml wird erzeugt</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/cbca993f56327dc4a55afc7a33690c80903f3774/styl/index.styl#L17" target="_blank" rel="noopener noreferrer">Versch\xF6nerte Zitierweisen</a></p><p>Die Zitierweise wird im Folgenden dargestellt</p><p><a href="https://www.ruanyifeng.com/blog/2009/11/why_i_love_piratebay.html" target="_blank" rel="noopener noreferrer">Yifeng Ruan: &quot;Warum mag ich The Pirate Bay?</a>:</p><blockquote><p>Manche m\xF6gen argumentieren, dass die Menschen ohne das Urheberrecht nicht zu Innovationen motiviert w\xE4ren.<br> Der Erfolg der Bewegung f\xFCr freie Software ist der Beweis daf\xFCr, dass dieses Argument nicht zutrifft.<br> Tatsache ist, dass auch die kostenlose Weitergabe von Informationen gro\xDFartige Arbeit hervorbringen und Geld mit dem Dienst verdienen kann.<br> Richard Stallman, der &quot;Vater der freien Software&quot;, sagte: <strong>&quot;Ich werde mein Leben niemals dazu verwenden, ein Gef\xE4ngnis zu bauen, um andere einzusperren!</strong><br> Sagen Sie also bitte nie wieder: &quot;Das Urheberrecht f\xF6rdert die Originalit\xE4t&quot;, das ist eine kapitalistische Nebelkerze und ein Affront gegen die menschliche Kreativit\xE4t.<br> Wahrhaft gro\xDFe Erfindungen werden f\xFCr Hobbys oder f\xFCr edle Zwecke wie die &quot;F\xF6rderung des Wohlergehens der Menschheit&quot; gemacht, nicht f\xFCr Geld!</p></blockquote></li><li><p><a href="/404">Hover-Ghost-Version der 404-Seite</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/f74fdffa4b22c06ade6a5451ad34111ddb7bf60a/coffee/markdown-it-plugin.coffee#L13" target="_blank" rel="noopener noreferrer">Durch Hinzuf\xFCgen von gumlet.io cdn zu Bildern im Github-Bett</a><a href="https://www.gumlet.com/blog/worlds-first-service-to-provide-avif-support/" target="_blank" rel="noopener noreferrer">erkennt Gumlet den Browser und wandelt png automatisch in webp oder avif um, um Bandbreite zu sparen und die Ladegeschwindigkeit der Seite zu verbessern</a>.</p></li></ul><h2 id="anpassung-der-abschriften" tabindex="-1"><a class="header-anchor" href="#anpassung-der-abschriften" aria-hidden="true">#</a> Anpassung der Abschriften</h2><ul><li><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/plugin.coffee" target="_blank" rel="noopener noreferrer">Unterst\xFCtzung f\xFCr Kommentare in der Fu\xDFzeile</a></li><li><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/plugin.coffee" target="_blank" rel="noopener noreferrer">M\xF6glichkeit, externe Dateien mit der Syntax <code>#inculde xx.txt</code> zu zitieren</a></li><li><a href="https://github.com/rmw-link/blog-vuepress2/blob/cbca993f56327dc4a55afc7a33690c80903f3774/coffee/config.coffee#L18" target="_blank" rel="noopener noreferrer">Unterst\xFCtzung f\xFCr einzeilige Feed-Ausgabe in html</a> <a href="https://github.com/rmw-link/blog-vuepress2/blob/cbca993f56327dc4a55afc7a33690c80903f3774/coffee/config.coffee#L18" target="_blank" rel="noopener noreferrer"><code>&lt;br&gt;</code></a></li></ul>',7);function a(i,o){return t}var h=e(n,[["render",a],["__file","2020-11-29-vuepress.html.vue"]]);export{h as default};
