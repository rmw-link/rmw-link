import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.87d927ab.js";const a={},o=r('<h1 id="vuepress-build-blog" tabindex="-1"><a class="header-anchor" href="#vuepress-build-blog" aria-hidden="true">#</a> vuepress build blog</h1><p>He construido un blog est\xE1tico basado en <a href="https://v2.vuepress.vuejs.org" target="_blank" rel="noopener noreferrer">vuepress 2.</a> 0 como sitio web oficial de rmw.link.</p><p>El c\xF3digo base est\xE1 en <a href="https://github.com/rmw-link/blog-vuepress2" target="_blank" rel="noopener noreferrer">github.com/rmw-link/blog-vuepress2</a></p><p>La personalizaci\xF3n es la siguiente:</p><ul><li><p>Utilice <a href="https://github.com/harttle/md-padding" target="_blank" rel="noopener noreferrer">md-padding</a> y <a href="https://github.com/rmw-link/blog-vuepress2/blob/master/.direnv/git/hooks/pre-commit" target="_blank" rel="noopener noreferrer">git hooks</a> para <a href="https://github.com/rmw-link/blog-vuepress2/blob/ce966b52f0a06bf2748af36f539f50eadc9eea3c/script/hook.coffee#L46" target="_blank" rel="noopener noreferrer">a\xF1adir autom\xE1ticamente espacios entre el chino y el ingl\xE9s</a></p><p><code>git clone</code> Despu\xE9s de eso, vaya al directorio y escriba <code>direnv allow</code>y <a href="https://github.com/rmw-link/blog-vuepress2/blob/master/.envrc" target="_blank" rel="noopener noreferrer">.envrc</a> instalar\xE1 autom\xE1ticamente los ganchos git.</p><p><a href="https://direnv.net" target="_blank" rel="noopener noreferrer">direnv</a> es la herramienta de autocarga del entorno. <a href="https://cloud.tencent.com/developer/article/1615495" target="_blank" rel="noopener noreferrer">Haga clic aqu\xED para ver un tutorial</a>.</p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/translate.coffee" target="_blank" rel="noopener noreferrer">Traducir autom\xE1ticamente los blogs a varios idiomas</a></p><p>Ver <a href="/log/2021-12-09-markdown-translate">herramientas de traducci\xF3n de markdown</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/cleanup.coffee" target="_blank" rel="noopener noreferrer">Limpiar autom\xE1ticamente los archivos antiguos en otros idiomas despu\xE9s de renombrar el nombre del archivo del idioma principal</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/i18n.coffee" target="_blank" rel="noopener noreferrer">Traducir los scripts para la configuraci\xF3n del tema</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/dev.sh" target="_blank" rel="noopener noreferrer">Supervisar los cambios y compilar los estilos de stylus y los scripts de coffeescript para</a> <a href="https://github.com/rmw-link/blog-vuepress2/blob/master/dev.sh" target="_blank" rel="noopener noreferrer"><code>site/.vuepress</code></a></p><p>Esto utiliza una peque\xF1a herramienta llamada <a href="https://www.npmjs.com/package/concurrently" target="_blank" rel="noopener noreferrer">concurrentemente</a> para ejecutar m\xFAltiples tareas de l\xEDnea de comandos de forma concurrente. El par\xE1metro <code>--kill-others</code> asegura que s\xF3lo se ejecuta un script a la vez.</p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/tree/master/styl" target="_blank" rel="noopener noreferrer">Modificar las fuentes chinas para</a> <a href="https://github.com/rmw-link/blog-vuepress2/tree/master/styl" target="_blank" rel="noopener noreferrer"><code>Noto Sans SC</code></a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/styl/font/download.xsh" target="_blank" rel="noopener noreferrer">Script de descarga por lotes de fuentes en archivos css</a></p><p>Basado en <a href="https://xon.sh" target="_blank" rel="noopener noreferrer">xonsh</a>, <code>./download.xsh code.css</code> esto descargar\xE1 las fuentes de los archivos css y generar\xE1 el estilete correspondiente.</p><p>xonsh es una combinaci\xF3n muy \xFAtil de python y bash.</p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/clientAppEnhance.coffee" target="_blank" rel="noopener noreferrer">El idioma por defecto del navegador se cambia autom\xE1ticamente al visitar la p\xE1gina de inicio</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/file_url.coffee" target="_blank" rel="noopener noreferrer">Los directorios escaneados se asignan autom\xE1ticamente a las URL</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/script/sitemap.coffee" target="_blank" rel="noopener noreferrer">se genera el sitemap.xml</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/cbca993f56327dc4a55afc7a33690c80903f3774/styl/index.styl#L17" target="_blank" rel="noopener noreferrer">Estilos de citaci\xF3n embellecidos</a></p><p>A continuaci\xF3n se muestra el estilo de citaci\xF3n</p><p><a href="https://www.ruanyifeng.com/blog/2009/11/why_i_love_piratebay.html" target="_blank" rel="noopener noreferrer">Yifeng Ruan: &quot;\xBFPor qu\xE9 me gusta The Pirate Bay?</a>:</p><blockquote><p>Algunos podr\xEDan argumentar que sin derechos de autor, la gente no estar\xEDa motivada para innovar.<br> El \xE9xito del movimiento del software libre es la prueba de que este argumento no es cierto.<br> El hecho es que el intercambio gratuito tambi\xE9n puede producir un gran trabajo y ganar dinero con el servicio.<br> &quot;Richard Stallman, el &#39;padre del software libre&#39;, dijo: <strong>&#39;\xA1Nunca utilizar\xE9 mi vida para construir una prisi\xF3n para encarcelar a otros!</strong><br> As\xED que, por favor, no vuelvas a decir que &quot;los derechos de autor fomentan la originalidad&quot;, es una cortina de humo capitalista y una afrenta a la creatividad humana.<br> Los verdaderos grandes inventos se hacen por afici\xF3n o con fines nobles como &quot;promover el bienestar de la humanidad&quot;, \xA1no por dinero!</p></blockquote></li><li><p><a href="/404">Versi\xF3n fantasma de la p\xE1gina 404</a></p></li><li><p><a href="https://github.com/rmw-link/blog-vuepress2/blob/f74fdffa4b22c06ade6a5451ad34111ddb7bf60a/coffee/markdown-it-plugin.coffee#L13" target="_blank" rel="noopener noreferrer">A\xF1adiendo gumlet.io cdn a las im\xE1genes en la cama de github</a>, <a href="https://www.gumlet.com/blog/worlds-first-service-to-provide-avif-support/" target="_blank" rel="noopener noreferrer">Gumlet reconoce el navegador y convierte autom\xE1ticamente los png a webp o avif para ahorrar ancho de banda y mejorar la velocidad de carga de la p\xE1gina</a>.</p></li></ul><h2 id="personalizacion-de-la-reduccion-del-precio" tabindex="-1"><a class="header-anchor" href="#personalizacion-de-la-reduccion-del-precio" aria-hidden="true">#</a> personalizaci\xF3n de la reducci\xF3n del precio</h2><ul><li><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/plugin.coffee" target="_blank" rel="noopener noreferrer">Soporte de comentarios a pie de p\xE1gina</a></li><li><a href="https://github.com/rmw-link/blog-vuepress2/blob/master/coffee/plugin.coffee" target="_blank" rel="noopener noreferrer">Posibilidad de citar archivos externos con la sintaxis <code>#inculde xx.txt</code></a></li><li><a href="https://github.com/rmw-link/blog-vuepress2/blob/cbca993f56327dc4a55afc7a33690c80903f3774/coffee/config.coffee#L18" target="_blank" rel="noopener noreferrer">Soporte para la salida de una sola l\xEDnea de alimentaci\xF3n a html</a> <a href="https://github.com/rmw-link/blog-vuepress2/blob/cbca993f56327dc4a55afc7a33690c80903f3774/coffee/config.coffee#L18" target="_blank" rel="noopener noreferrer"><code>&lt;br&gt;</code></a></li></ul>',7);function t(n,l){return o}var c=e(a,[["render",t],["__file","2020-11-29-vuepress.html.vue"]]);export{c as default};