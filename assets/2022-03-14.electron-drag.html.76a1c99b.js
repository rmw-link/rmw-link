import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as n}from"./app.040d9bb0.js";const o={},a=n(`<h1 id="electron-perfect-drag-and-drop-elegantnejsia-implementacia-ako-electron-drag" tabindex="-1"><a class="header-anchor" href="#electron-perfect-drag-and-drop-elegantnejsia-implementacia-ako-electron-drag" aria-hidden="true">#</a> electron perfect drag and drop : elegantnej\u0161ia implement\xE1cia ako electron-drag</h1><p>Mana\u017E\xE9r produktu po\u017Eiadal, aby panel n\xE1strojov pod oknom elektr\xF3nu blokoval prav\xE9 tla\u010Didlo my\u0161i.</p><p>Pri nat\xEDvnom \u0165ahan\xED a p\xFA\u0161\u0165an\xED v elektr\xF3ne pod oknom ( <code>app-region:drag</code>) sa udalos\u0165 kliknutia spotrebuje a neexistuje sp\xF4sob, ako blokova\u0165 kliknutie prav\xFDm tla\u010Didlom my\u0161i. Presunutie mus\xEDte vykona\u0165 ru\u010Dne.</p><p>Ak na implement\xE1ciu tejto po\u017Eiadavky pou\u017Eijete udalos\u0165 mousemove, pri r\xFDchlom pohybe my\u0161i sa t\xE1to dostane mimo dosahu okna a okno u\u017E nebude sledova\u0165 my\u0161.</p><p>T\xFAto po\u017Eiadavku som implementoval na z\xE1klade udalosti ukazovate\u013Ea pomocou funkcie <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/setPointerCapture" target="_blank" rel="noopener noreferrer">setPointerCapture</a> na zachytenie polohy my\u0161i mimo okna BrowserWindow a funguje to dokonale.</p><p>Toto rie\u0161enie je lep\u0161ie ako rie\u0161enie electron-drag: m\xE1 bin\xE1rne z\xE1vislosti z\xE1visl\xE9 od platformy a jeho aktualiz\xE1cia a balenie m\xF4\u017Ee by\u0165 nepr\xEDjemn\xE9.</p><p>Zistil som, \u017Ee toto rie\u0161enie na webe e\u0161te nikto nespom\xEDnal, preto o \u0148om p\xED\u0161em na blogu a zdie\u013Eam ho.</p><p>Rozdiely v k\xF3de medzi jednotliv\xFDmi implement\xE1ciami s\xFA uveden\xE9 ni\u017E\u0161ie len na porovnanie. Z\xE1kladn\xFD k\xF3d je <code>web/src/lib/drag.coffee</code> a <code>main/ipc/drag.coffee</code>.</p><h2 id="web-src-lib-drag-coffee" tabindex="-1"><a class="header-anchor" href="#web-src-lib-drag-coffee" aria-hidden="true">#</a> web/src/lib/drag.coffee</h2><div class="language-coffee ext-coffee"><pre class="language-coffee"><code>import $on from &#39;~/lib/on.coffee&#39;
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
</code></pre></div>`,23);function t(i,r){return a}var l=e(o,[["render",t],["__file","2022-03-14.electron-drag.html.vue"]]);export{l as default};
