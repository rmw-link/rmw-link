import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as n}from"./app.87d927ab.js";const o={},r=n(`<h1 id="electron-\u5B8C\u7F8E\u62D6\u62FD-\u6BD4-electron-drag-\u66F4\u4F18\u96C5\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#electron-\u5B8C\u7F8E\u62D6\u62FD-\u6BD4-electron-drag-\u66F4\u4F18\u96C5\u7684\u5B9E\u73B0" aria-hidden="true">#</a> electron \u5B8C\u7F8E\u62D6\u62FD : \u6BD4 electron-drag \u66F4\u4F18\u96C5\u7684\u5B9E\u73B0</h1><p>\u4EA7\u54C1\u7ECF\u7406\u8981\u6C42 electron window \u4E0B\u7684\u5DE5\u5177\u6761\u5C4F\u853D\u9F20\u6807\u53F3\u952E\u3002</p><p>window \u4E0B electron \u7684\u539F\u751F\u62D6\u62FD(<code>app-region:drag</code>)\u4F1A\u5403\u6389\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u6CA1\u6CD5\u505A\u53F3\u952E\u5C4F\u853D\u3002\u5FC5\u987B\u81EA\u5DF1\u624B\u5DE5\u5B9E\u73B0\u62D6\u62FD\u624D\u884C\u3002</p><p>\u5982\u679C\u4F7F\u7528 mousemove \u4E8B\u4EF6\u5B9E\u73B0\u9700\u6C42 \uFF0C\u5728\u9F20\u6807\u5FEB\u901F\u79FB\u52A8\u7684\u65F6\u5019\uFF0C\u4F1A\u8D85\u51FA\u7A97\u4F53\u8303\u56F4\uFF0C\u5BFC\u81F4\u7A97\u4F53\u4E0D\u518D\u8DDF\u968F\u9F20\u6807\u79FB\u52A8\u3002</p><p>\u6211\u57FA\u4E8E pointer event \u5B9E\u73B0\u4E86\u8FD9\u4E2A\u9700\u6C42\uFF0C\u7528 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/setPointerCapture" target="_blank" rel="noopener noreferrer">setPointerCapture</a> \u53EF\u4EE5\u6355\u83B7 BrowserWindow \u4E4B\u5916\u7684\u9F20\u6807\u4F4D\u7F6E\uFF0C\u6548\u679C\u5F88\u5B8C\u7F8E\u3002</p><p>\u6B64\u65B9\u6848\u6BD4 electron-drag \u7684\u65B9\u6848\u66F4\u4F18 : \u5B83\u6709\u5E73\u53F0\u76F8\u5173\u7684\u4E8C\u8FDB\u5236\u4F9D\u8D56\uFF0C\u5347\u7EA7\u6253\u5305\u90FD\u4F1A\u53D8\u5F97\u9EBB\u70E6\u3002</p><p>\u6211\u53D1\u73B0\u7F51\u4E0A\u8FD8\u6CA1\u6709\u4EBA\u63D0\u8FC7\u8FD9\u79CD\u65B9\u6848\uFF0C\u6240\u4EE5\u5199\u535A\u5BA2\u8BB0\u5F55\u5E76\u5206\u4EAB\u4E00\u4E0B\u3002</p><p>\u5B9E\u73B0\u65B9\u6848\u7684\u4EE3\u7801\u5DEE\u5F02\u5982\u4E0B\uFF0C\u4EC5\u591F\u53C2\u8003\u3002\u6838\u5FC3\u4EE3\u7801\u662F <code>web/src/lib/drag.coffee</code> \u548C <code>main/ipc/drag.coffee</code>\u3002</p><h2 id="web-src-lib-drag-coffee" tabindex="-1"><a class="header-anchor" href="#web-src-lib-drag-coffee" aria-hidden="true">#</a> web/src/lib/drag.coffee</h2><div class="language-coffee ext-coffee"><pre class="language-coffee"><code>import $on from &#39;~/lib/on.coffee&#39;
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
</code></pre></div>`,23);function t(a,i){return r}var f=e(o,[["render",t],["__file","2022-03-14.electron-drag.html.vue"]]);export{f as default};
