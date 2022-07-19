import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as n}from"./app.2a6a1bd2.js";const t={},r=n(`<h1 id="electron-perfect-drag-and-drop-une-mise-en-\u0153uvre-plus-elegante-que-electron-drag" tabindex="-1"><a class="header-anchor" href="#electron-perfect-drag-and-drop-une-mise-en-\u0153uvre-plus-elegante-que-electron-drag" aria-hidden="true">#</a> electron perfect drag and drop : une mise en \u0153uvre plus \xE9l\xE9gante que electron-drag</h1><p>Le chef de produit a demand\xE9 que la barre d&#39;outils sous la fen\xEAtre \xE9lectronique bloque le bouton droit de la souris.</p><p>Le glisser-d\xE9poser natif dans l&#39;\xE9lectron sous la fen\xEAtre ( <code>app-region:drag</code>) consomme l&#39;\xE9v\xE9nement de clic et il n&#39;y a aucun moyen de bloquer le clic droit. Vous devez mettre en \u0153uvre le glisser-d\xE9poser manuellement.</p><p>Si vous utilisez l&#39;\xE9v\xE9nement mousemove pour mettre en \u0153uvre cette exigence, lorsque la souris se d\xE9place rapidement, elle sort du champ de la fen\xEAtre et la fen\xEAtre ne suit plus la souris.</p><p>J&#39;ai mis en \u0153uvre cette exigence en me basant sur l&#39;\xE9v\xE9nement du pointeur, en utilisant <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/setPointerCapture" target="_blank" rel="noopener noreferrer">setPointerCapture</a> pour capturer la position de la souris en dehors de la BrowserWindow, et cela fonctionne parfaitement.</p><p>Cette solution est meilleure que la solution electron-drag : elle a des d\xE9pendances binaires d\xE9pendantes de la plateforme et peut \xEAtre une douleur \xE0 mettre \xE0 jour et \xE0 empaqueter.</p><p>J&#39;ai constat\xE9 que personne n&#39;avait encore mentionn\xE9 cette solution sur le web, alors j&#39;en parle sur mon blog et je la partage.</p><p>Les diff\xE9rences de code entre les impl\xE9mentations sont \xE9num\xE9r\xE9es ci-dessous \xE0 titre de r\xE9f\xE9rence uniquement. Le code de base est <code>web/src/lib/drag.coffee</code> et <code>main/ipc/drag.coffee</code>.</p><h2 id="web-src-lib-drag-coffee" tabindex="-1"><a class="header-anchor" href="#web-src-lib-drag-coffee" aria-hidden="true">#</a> web/src/lib/drag.coffee</h2><div class="language-coffee ext-coffee"><pre class="language-coffee"><code>import $on from &#39;~/lib/on.coffee&#39;
import ipc from &#39;~/lib/ipc.coffee&#39;
import platform from &#39;@/config/platform.mjs&#39;

{drag:{setBounds,getBounds}} = ipc
pointermove = &#39;pointermove&#39;
IGNORE = new Set(&#39;SELECT BUTTON A INPUT TEXTAREA&#39;.split &#39; &#39;)
{round} = Math
export default main = (elem)=&gt;
  if platform!=&#39;win32&#39;
    return

  elem.style.appRegion = &#39;no-drag&#39;

  moving = false

  init_w = init_h = init_x = init_y = init_top = init_left = undefined

  _move = (e)=&gt;
    {screenX,screenY} = e
    setBounds(
      round screenX-init_x+init_left
      round screenY-init_y+init_top
      init_w
      init_h
    )
    return

  down = (e)=&gt;
    if moving
      return
    if e.button!=0 # \u9F20\u6807\u5DE6\u952E
      return
    {target} = e
    p = e.target
    loop
      {nodeName} = p
      if IGNORE.has nodeName
        return
      if nodeName == &#39;BODY&#39;
        break
      p = p.parentNode
    moving = true
    {screenX:init_x,screenY:init_y} = e

    elem.setPointerCapture e.pointerId
    elem.addEventListener pointermove,_move

    {
      x:init_left
      y:init_top
      height:init_h
      width:init_w
    } = await getBounds()

    console.log  await getBounds()
    return

  up = (e)=&gt;
    if moving
      await _move(e)
      elem.releasePointerCapture e.pointerId
      elem.removeEventListener pointermove,_move
      moving = false
    return

  $on elem,{
    lostpointercapture:up
    pointercancel:up
    pointerdown:down
    pointerup:up
  }

  return
</code></pre></div><h2 id="main-ipc-drag-coffee" tabindex="-1"><a class="header-anchor" href="#main-ipc-drag-coffee" aria-hidden="true">#</a> main/ipc/drag.coffee</h2><div class="language-coffee ext-coffee"><pre class="language-coffee"><code>export getBounds = -&gt;
  @sender.getOwnerBrowserWindow().getBounds()

export setBounds = (x,y,width,height)-&gt;
  win = @sender.getOwnerBrowserWindow()
  # \u4E0D\u7528 setPosition \u662F\u56E0\u4E3A https://github.com/electron/electron/issues/9477 browserWindow.setPosition(x,y) changed window size (windows/linux) with non default scaleLevel (125% for example)
  win.setBounds {
    x:Math.round(x)
    y:Math.round(y)
    width
    height
  }
  return
</code></pre></div><h2 id="principal-ipc-coffee" tabindex="-1"><a class="header-anchor" href="#principal-ipc-coffee" aria-hidden="true">#</a> principal/ipc.coffee</h2><div class="language-coffee ext-coffee"><pre class="language-coffee"><code>\`export * as drag from &#39;./ipc/drag.coffee&#39;\`
</code></pre></div><h2 id="web-src-page-recbar-vue" tabindex="-1"><a class="header-anchor" href="#web-src-page-recbar-vue" aria-hidden="true">#</a> web/src/page/recbar.vue</h2><div class="language-pug ext-pug"><pre class="language-pug"><code>&lt;template lang=&quot;pug&quot;&gt;
-nav(:class=&quot;{ pause }&quot;)
nav(:class=&quot;{ pause }&quot; ref=&quot;nav&quot;)
&lt;/template&gt;
</code></pre></div><div class="language-coffee ext-coffee"><pre class="language-coffee"><code>&lt;script lang=&quot;coffee&quot;&gt;
import drag from &#39;~/lib/drag.coffee&#39;
nav = shallowRef()
export default {
setup: =&gt;
  onMounted =&gt;
    drag(nav.value)
    return
  {
    nav
  }
}
&lt;/script&gt;
</code></pre></div><h2 id="main-boot-coffee" tabindex="-1"><a class="header-anchor" href="#main-boot-coffee" aria-hidden="true">#</a> main/boot.coffee</h2><div class="language-coffee ext-coffee"><pre class="language-coffee"><code>_handle = (k, v)=&gt;
  if v instanceof Function
    ipcMain.handle k.join(&#39;.&#39;), (e,args)=&gt;
      v.apply(e,args)

  for [name,func] from Object.entries v
    _handle [...k, name], func

  return

for [k,v] from Object.entries ipc
  _handle([k], v)

</code></pre></div><h2 id="web-src-lib-on-coffee" tabindex="-1"><a class="header-anchor" href="#web-src-lib-on-coffee" aria-hidden="true">#</a> web/src/lib/_on.coffee</h2><div class="language-coffee ext-coffee"><pre class="language-coffee"><code>export default (elem, dict)=&gt;
  for event,func of dict
    elem.addEventListener(event, func)
  =&gt;
    for event,func of dict
      elem.removeEventListener(event, func)

</code></pre></div><h2 id="web-src-lib-on-coffee-1" tabindex="-1"><a class="header-anchor" href="#web-src-lib-on-coffee-1" aria-hidden="true">#</a> web/src/lib/on.coffee</h2><div class="language-coffee ext-coffee"><pre class="language-coffee"><code>import $on from &#39;./_on.coffee&#39;
export default (elem, dict)=&gt;
  unbind = $on elem, dict
  onUnmounted unbind
  unbind
</code></pre></div>`,23);function o(a,i){return r}var s=e(t,[["render",o],["__file","2022-03-14.electron-drag.html.vue"]]);export{s as default};
