import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as n}from"./app.87d927ab.js";const i={},a=n(`<h1 id="electron-perfect-drag-and-drop-elegantiskesnis-igyvendinimas-nei-electron-drag" tabindex="-1"><a class="header-anchor" href="#electron-perfect-drag-and-drop-elegantiskesnis-igyvendinimas-nei-electron-drag" aria-hidden="true">#</a> electron perfect drag and drop : eleganti\u0161kesnis \u012Fgyvendinimas nei electron-drag</h1><p>Produkto vadybininkas papra\u0161\u0117, kad \u012Franki\u0173 juosta po elektroniniu langu blokuot\u0173 de\u0161in\u012Fj\u012F pel\u0117s klavi\u0161\u0105.</p><p>Gimtoji vilkimo ir nuleidimo funkcija elektronuose po langu ( <code>app-region:drag</code>) sunaudoja paspaudimo \u012Fvyk\u012F ir n\u0117ra galimyb\u0117s blokuoti de\u0161iniuoju pel\u0117s klavi\u0161u. Vilkimo ir nuleidimo funkcij\u0105 reikia \u012Fdiegti rankiniu b\u016Bdu.</p><p>Jei reikalavimui \u012Fgyvendinti naudojate mousemove \u012Fvyk\u012F, kai pel\u0117 greitai juda, ji i\u0161eina i\u0161 lango diapazono ir langas nebeseka paskui pel\u0119.</p><p>\u0160\u012F reikalavim\u0105 \u012Fgyvendinau pagal rodykl\u0117s \u012Fvyk\u012F, naudodamas <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/setPointerCapture" target="_blank" rel="noopener noreferrer">setPointerCapture</a>, kad u\u017Efiksuo\u010Diau pel\u0117s pad\u0117t\u012F u\u017E nar\u0161ykl\u0117s lango rib\u0173, ir tai puikiai veikia.</p><p>\u0160is sprendimas yra geresnis nei &quot;electron-drag&quot; sprendimas: jis turi nuo platformos priklausan\u010Di\u0173 dvejetaini\u0173 priklausomybi\u0173, tod\u0117l j\u012F gali b\u016Bti sunku atnaujinti ir pakuoti.</p><p>Pasteb\u0117jau, kad \u0161io sprendimo internete dar niekas nepamin\u0117jo, tod\u0117l ra\u0161au apie j\u012F tinklara\u0161tyje ir dalinuosi juo.</p><p>Kod\u0173 skirtumai tarp \u012Fgyvendinim\u0173 yra i\u0161vardyti toliau tik kaip nuoroda. Pagrindinis kodas yra <code>web/src/lib/drag.coffee</code> ir <code>main/ipc/drag.coffee</code>.</p><h2 id="web-src-lib-drag-coffee" tabindex="-1"><a class="header-anchor" href="#web-src-lib-drag-coffee" aria-hidden="true">#</a> web/src/lib/drag.coffee</h2><div class="language-coffee ext-coffee"><pre class="language-coffee"><code>import $on from &#39;~/lib/on.coffee&#39;
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
</code></pre></div>`,23);function o(r,t){return a}var s=e(i,[["render",o],["__file","2022-03-14.electron-drag.html.vue"]]);export{s as default};
