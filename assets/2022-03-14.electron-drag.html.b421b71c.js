import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as n}from"./app.87d927ab.js";const o={},r=n(`<h1 id="electron-perfect-drag-and-drop-electron-drag-\u3088\u308A\u3082\u30A8\u30EC\u30AB\u3099\u30F3\u30C8\u306A\u5B9F\u88C5\u3002" tabindex="-1"><a class="header-anchor" href="#electron-perfect-drag-and-drop-electron-drag-\u3088\u308A\u3082\u30A8\u30EC\u30AB\u3099\u30F3\u30C8\u306A\u5B9F\u88C5\u3002" aria-hidden="true">#</a> electron perfect drag and drop : electron-drag \u3088\u308A\u3082\u30A8\u30EC\u30AC\u30F3\u30C8\u306A\u5B9F\u88C5\u3002</h1><p>\u30D7\u30ED\u30C0\u30AF\u30C8\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC\u304B\u3089\u3001\u30A8\u30EC\u30AF\u30C8\u30ED\u30F3\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u4E0B\u306B\u3042\u308B\u30C4\u30FC\u30EB\u30D0\u30FC\u3067\u30DE\u30A6\u30B9\u306E\u53F3\u30DC\u30BF\u30F3\u3092\u30D6\u30ED\u30C3\u30AF\u3057\u3066\u307B\u3057\u3044\u3068\u3044\u3046\u8981\u671B\u304C\u3042\u308A\u307E\u3057\u305F\u3002</p><p>electron under window (<code>app-region:drag</code>) \u306E\u30CD\u30A4\u30C6\u30A3\u30D6\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7\u306F\u30AF\u30EA\u30C3\u30AF\u30A4\u30D9\u30F3\u30C8\u3092\u98DF\u3079\u308B\u306E\u3067\u3001\u53F3\u30AF\u30EA\u30C3\u30AF\u30D6\u30ED\u30C3\u30AF\u3092\u3059\u308B\u65B9\u6CD5\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7\u3092\u624B\u52D5\u3067\u5B9F\u88C5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002</p><p>mousemove\u30A4\u30D9\u30F3\u30C8\u3092\u4F7F\u3063\u3066\u8981\u4EF6\u3092\u5B9F\u88C5\u3059\u308B\u3068\u3001\u30DE\u30A6\u30B9\u304C\u7D20\u65E9\u304F\u52D5\u304F\u3068\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u7BC4\u56F2\u5916\u306B\u51FA\u3066\u3057\u307E\u3044\u3001\u30A6\u30A3\u30F3\u30C9\u30A6\u304C\u30DE\u30A6\u30B9\u306B\u8FFD\u5F93\u3057\u306A\u304F\u306A\u308A\u307E\u3059\u3002</p><p>\u3053\u306E\u8981\u4EF6\u3092\u6E80\u305F\u3059\u305F\u3081\u306B\u3001\u30DD\u30A4\u30F3\u30BF\u30A4\u30D9\u30F3\u30C8\u3092\u30D9\u30FC\u30B9\u306B\u3001 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/setPointerCapture" target="_blank" rel="noopener noreferrer">setPointerCapture\u3092\u4F7F\u3063\u3066</a> BrowserWindow\u5916\u306E\u30DE\u30A6\u30B9\u4F4D\u7F6E\u3092\u6355\u6349\u3059\u308B\u3088\u3046\u306B\u5B9F\u88C5\u3057\u305F\u3068\u3053\u308D\u3001\u5B8C\u74A7\u306B\u52D5\u4F5C\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002</p><p>\u3053\u306E\u89E3\u6C7A\u7B56\u306F\u3001electron-drag \u306E\u89E3\u6C7A\u7B56\u3088\u308A\u3082\u512A\u308C\u3066\u3044\u307E\u3059\u3002\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u306B\u4F9D\u5B58\u3059\u308B\u30D0\u30A4\u30CA\u30EA\u4F9D\u5B58\u6027\u304C\u3042\u308A\u3001\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u3084\u30D1\u30C3\u30B1\u30FC\u30B8\u30F3\u30B0\u306B\u624B\u9593\u304C\u304B\u304B\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002</p><p>\u3053\u306E\u89E3\u6C7A\u7B56\u306B\u3064\u3044\u3066\u306F\u3001\u307E\u3060\u30A6\u30A7\u30D6\u4E0A\u3067\u8AB0\u3082\u8A00\u53CA\u3057\u3066\u3044\u306A\u3044\u3053\u3068\u304C\u308F\u304B\u308A\u307E\u3057\u305F\u306E\u3067\u3001\u30D6\u30ED\u30B0\u3067\u7D39\u4ECB\u3057\u3001\u5171\u6709\u3057\u307E\u3059\u3002</p><p>\u4EE5\u4E0B\u3001\u53C2\u8003\u307E\u3067\u306B\u5B9F\u88C5\u306E\u9055\u3044\u306B\u3088\u308B\u30B3\u30FC\u30C9\u306E\u9055\u3044\u3092\u5217\u6319\u3057\u307E\u3059\u3002\u30B3\u30A2\u30B3\u30FC\u30C9\u306F\u3001 <code>web/src/lib/drag.coffee</code> \u3001 <code>main/ipc/drag.coffee</code>\u3002</p><h2 id="web-src-lib-drag-coffee" tabindex="-1"><a class="header-anchor" href="#web-src-lib-drag-coffee" aria-hidden="true">#</a> web/src/lib/drag.coffee</h2><div class="language-coffee ext-coffee"><pre class="language-coffee"><code>import $on from &#39;~/lib/on.coffee&#39;
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
</code></pre></div><h2 id="\u30E1\u30A4\u30F3-ipc-coffee" tabindex="-1"><a class="header-anchor" href="#\u30E1\u30A4\u30F3-ipc-coffee" aria-hidden="true">#</a> \u30E1\u30A4\u30F3/ipc.coffee</h2><div class="language-coffee ext-coffee"><pre class="language-coffee"><code>\`export * as drag from &#39;./ipc/drag.coffee&#39;\`
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
</code></pre></div>`,23);function t(a,i){return r}var f=e(o,[["render",t],["__file","2022-03-14.electron-drag.html.vue"]]);export{f as default};
