import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as n}from"./app.87d927ab.js";const o={},a=n(`<h1 id="electron-perfect-drag-and-drop-elegantnejsi-implementace-nez-electron-drag" tabindex="-1"><a class="header-anchor" href="#electron-perfect-drag-and-drop-elegantnejsi-implementace-nez-electron-drag" aria-hidden="true">#</a> electron perfect drag and drop : elegantn\u011Bj\u0161\xED implementace ne\u017E electron-drag</h1><p>Spr\xE1vce produktu po\u017Eadoval, aby panel n\xE1stroj\u016F pod oknem electron blokoval prav\xE9 tla\u010D\xEDtko my\u0161i.</p><p>P\u0159i nativn\xEDm p\u0159etahov\xE1n\xED v Electronu pod oknem ( <code>app-region:drag</code>) se ud\xE1lost kliknut\xED vyhod\xED a nen\xED mo\u017En\xE9 blokovat kliknut\xED prav\xFDm tla\u010D\xEDtkem my\u0161i. P\u0159etahov\xE1n\xED je nutn\xE9 prov\xE9st ru\u010Dn\u011B.</p><p>Pokud k implementaci po\u017Eadavku pou\u017Eijete ud\xE1lost mousemove, p\u0159i rychl\xE9m pohybu my\u0161i se tato dostane mimo dosah okna a okno ji\u017E nebude sledovat my\u0161.</p><p>Tento po\u017Eadavek jsem implementoval na z\xE1klad\u011B ud\xE1losti ukazatele pomoc\xED <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/setPointerCapture" target="_blank" rel="noopener noreferrer">setPointerCapture</a> pro zachycen\xED polohy my\u0161i mimo okno BrowserWindow a funguje to perfektn\u011B.</p><p>Toto \u0159e\u0161en\xED je lep\u0161\xED ne\u017E \u0159e\u0161en\xED electron-drag: m\xE1 bin\xE1rn\xED z\xE1vislosti z\xE1visl\xE9 na platform\u011B a jeho aktualizace a bal\xED\u010Dkov\xE1n\xED m\u016F\u017Ee b\xFDt nep\u0159\xEDjemn\xE9.</p><p>Zjistil jsem, \u017Ee se o tomto \u0159e\u0161en\xED na webu zat\xEDm nikdo nezm\xEDnil, a tak o n\u011Bm p\xED\u0161u blog a sd\xEDl\xEDm ho.</p><p>Rozd\xEDly v k\xF3du mezi implementacemi jsou uvedeny n\xED\u017Ee pouze pro informaci. Z\xE1kladn\xED k\xF3d je <code>web/src/lib/drag.coffee</code> a <code>main/ipc/drag.coffee</code>.</p><h2 id="web-src-lib-drag-coffee" tabindex="-1"><a class="header-anchor" href="#web-src-lib-drag-coffee" aria-hidden="true">#</a> web/src/lib/drag.coffee</h2><div class="language-coffee ext-coffee"><pre class="language-coffee"><code>import $on from &#39;~/lib/on.coffee&#39;
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
</code></pre></div><h2 id="main-ipc-coffee" tabindex="-1"><a class="header-anchor" href="#main-ipc-coffee" aria-hidden="true">#</a> main/ipc.coffee</h2><div class="language-coffee ext-coffee"><pre class="language-coffee"><code>\`export * as drag from &#39;./ipc/drag.coffee&#39;\`
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
</code></pre></div>`,23);function t(r,i){return a}var l=e(o,[["render",t],["__file","2022-03-14.electron-drag.html.vue"]]);export{l as default};
