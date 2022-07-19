import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as n}from"./app.87d927ab.js";const a={},t=n(`<h1 id="electron-perfect-drag-and-drop-egy-elegansabb-megvalositas-mint-az-electron-drag" tabindex="-1"><a class="header-anchor" href="#electron-perfect-drag-and-drop-egy-elegansabb-megvalositas-mint-az-electron-drag" aria-hidden="true">#</a> electron perfect drag and drop : egy eleg\xE1nsabb megval\xF3s\xEDt\xE1s, mint az electron-drag</h1><p>A term\xE9kmenedzser k\xE9rte, hogy az elektron ablak alatti eszk\xF6zt\xE1r blokkolja a jobb eg\xE9rgombot.</p><p>A nat\xEDv drag and drop az elektronban az ablak alatt ( <code>app-region:drag</code>) megeszi a kattint\xE1si esem\xE9nyt, \xE9s nincs m\xF3d a jobb klikk blokkol\xE1s\xE1ra. A drag and dropot k\xE9zzel kell v\xE9grehajtania.</p><p>Ha a mousemove esem\xE9nyt haszn\xE1lja a k\xF6vetelm\xE9ny megval\xF3s\xEDt\xE1s\xE1hoz, akkor az eg\xE9r gyors mozg\xE1sa eset\xE9n az eg\xE9r kiker\xFCl az ablak hat\xF3k\xF6r\xE9b\u0151l, \xE9s az ablak m\xE1r nem k\xF6veti az egeret.</p><p>Ezt a k\xF6vetelm\xE9nyt a mutat\xF3 esem\xE9ny alapj\xE1n val\xF3s\xEDtottam meg, a <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/setPointerCapture" target="_blank" rel="noopener noreferrer">setPointerCapture</a> haszn\xE1lat\xE1val a BrowserWindow-n k\xEDv\xFCli eg\xE9rpoz\xEDci\xF3 r\xF6gz\xEDt\xE9s\xE9re, \xE9s t\xF6k\xE9letesen m\u0171k\xF6dik.</p><p>Ez a megold\xE1s jobb, mint az electron-drag megold\xE1s: platformf\xFCgg\u0151 bin\xE1ris f\xFCgg\u0151s\xE9gekkel rendelkezik, \xE9s a friss\xEDt\xE9s \xE9s a csomagol\xE1s is f\xE1jdalmas lehet.</p><p>\xDAgy tal\xE1ltam, hogy ezt a megold\xE1st m\xE9g senki sem eml\xEDtette a vil\xE1gh\xE1l\xF3n, ez\xE9rt blogot \xEDrok r\xF3la \xE9s megosztom.</p><p>A megval\xF3s\xEDt\xE1sok k\xF6z\xF6tti k\xF3dbeli k\xFCl\xF6nbs\xE9geket az al\xE1bbiakban csak referenciak\xE9nt soroljuk fel. Az alapk\xF3d a <code>web/src/lib/drag.coffee</code> \xE9s a <code>main/ipc/drag.coffee</code>.</p><h2 id="web-src-lib-drag-coffee" tabindex="-1"><a class="header-anchor" href="#web-src-lib-drag-coffee" aria-hidden="true">#</a> web/src/lib/drag.coffee</h2><div class="language-coffee ext-coffee"><pre class="language-coffee"><code>import $on from &#39;~/lib/on.coffee&#39;
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
</code></pre></div>`,23);function o(r,i){return t}var d=e(a,[["render",o],["__file","2022-03-14.electron-drag.html.vue"]]);export{d as default};
