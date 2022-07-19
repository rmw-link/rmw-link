import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as n}from"./app.2a6a1bd2.js";const a={},o=n(`<h1 id="electron-perfect-drag-and-drop-elegantaka-implementacija-neka-electron-drag" tabindex="-1"><a class="header-anchor" href="#electron-perfect-drag-and-drop-elegantaka-implementacija-neka-electron-drag" aria-hidden="true">#</a> electron perfect drag and drop : elegant\u0101ka implement\u0101cija nek\u0101 electron-drag</h1><p>Produkta vad\u012Bt\u0101js piepras\u012Bja, lai r\u012Bkjosla zem elektronu loga blo\u0137\u0113tu peles labo pogu.</p><p>Dzimt\u0101 vilk\u0161ana un nome\u0161ana elektrona log\u0101 ( <code>app-region:drag</code>) ap\u0113d klik\u0161\u0137a notikumu, un nav iesp\u0113jams blo\u0137\u0113t klik\u0161\u0137i ar peles labo pogu. Vilk\u0161ana un nome\u0161ana ir j\u0101\u012Bsteno manu\u0101li.</p><p>Ja \u0161\u012Bs pras\u012Bbas izpildei tiek izmantots mousemove notikums, tad, pelei strauji p\u0101rvietojoties, t\u0101 iziet \u0101rpus loga darb\u012Bbas zonas un logs vairs neseko peles kust\u012Bbai.</p><p>Esmu \u012Bstenojis \u0161o pras\u012Bbu, pamatojoties uz r\u0101d\u012Bt\u0101ja notikumu, izmantojot <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/setPointerCapture" target="_blank" rel="noopener noreferrer">setPointerCapture</a>, lai fiks\u0113tu peles poz\u012Bciju \u0101rpus p\u0101rl\u016Bka loga, un tas darbojas perfekti.</p><p>\u0160is risin\u0101jums ir lab\u0101ks nek\u0101 electron-drag risin\u0101jums: tam ir no platformas atkar\u012Bgas bin\u0101ro komponentu atkar\u012Bbas, un t\u0101 atjaunin\u0101\u0161ana un pakot\u0146u izveide var sag\u0101d\u0101t gr\u016Bt\u012Bbas.</p><p>Es atkl\u0101ju, ka \u0161o risin\u0101jumu t\u012Bmekl\u012B v\u0113l neviens nav piemin\u0113jis, t\u0101p\u0113c es par to rakstu blog\u0101 un dalos ar to.</p><p>T\u0101l\u0101k ir uzskait\u012Btas kodu at\u0161\u0137ir\u012Bbas starp implement\u0101cij\u0101m tikai atsauces nol\u016Bkos. Kods ir <code>web/src/lib/drag.coffee</code> un <code>main/ipc/drag.coffee</code>.</p><h2 id="web-src-lib-drag-coffee" tabindex="-1"><a class="header-anchor" href="#web-src-lib-drag-coffee" aria-hidden="true">#</a> web/src/lib/drag.coffee</h2><div class="language-coffee ext-coffee"><pre class="language-coffee"><code>import $on from &#39;~/lib/on.coffee&#39;
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
</code></pre></div>`,23);function t(r,i){return o}var d=e(a,[["render",t],["__file","2022-03-14.electron-drag.html.vue"]]);export{d as default};
