import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as n}from"./app.2a6a1bd2.js";const a={},o=n(`<h1 id="drag-and-drop-perfeito-de-electroes-uma-implementacao-mais-elegante-do-que-o-arrastamento-de-electroes" tabindex="-1"><a class="header-anchor" href="#drag-and-drop-perfeito-de-electroes-uma-implementacao-mais-elegante-do-que-o-arrastamento-de-electroes" aria-hidden="true">#</a> drag and drop perfeito de electr\xF5es : uma implementa\xE7\xE3o mais elegante do que o arrastamento de electr\xF5es</h1><p>O gestor do produto solicitou que a barra de ferramentas sob a janela de electr\xF5es bloqueasse o bot\xE3o direito do rato.</p><p>O arrastar e largar do electr\xE3o nativo sob janela ( <code>app-region:drag</code>) come o evento do clique e n\xE3o h\xE1 maneira de fazer o bloqueio do clique direito. \xC9 necess\xE1rio implementar o arrastar e largar manualmente.</p><p>Se utilizar o evento mousemove para implementar o requisito, quando o rato se move rapidamente, ele sai do alcance da janela e a janela j\xE1 n\xE3o segue o rato.</p><p>Implementei este requisito com base no evento ponteiro, utilizando <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/setPointerCapture" target="_blank" rel="noopener noreferrer">setPointerCapture</a> para capturar a posi\xE7\xE3o do rato fora da janela do BrowserWindow, e funciona perfeitamente.</p><p>Esta solu\xE7\xE3o \xE9 melhor do que a solu\xE7\xE3o de arrastamento de electr\xF5es: tem depend\xEAncias bin\xE1rias dependentes da plataforma e pode ser um inc\xF3modo para actualizar e embalar.</p><p>Descobri que ainda ningu\xE9m mencionou esta solu\xE7\xE3o na web, por isso estou a fazer um blogue sobre ela e a partilh\xE1-la.</p><p>As diferen\xE7as de c\xF3digo entre as implementa\xE7\xF5es s\xE3o listadas abaixo apenas para refer\xEAncia. O c\xF3digo central \xE9 <code>web/src/lib/drag.coffee</code> e <code>main/ipc/drag.coffee</code>.</p><h2 id="web-src-lib-drag-coffee" tabindex="-1"><a class="header-anchor" href="#web-src-lib-drag-coffee" aria-hidden="true">#</a> web/src/lib/drag.coffee</h2><div class="language-coffee ext-coffee"><pre class="language-coffee"><code>import $on from &#39;~/lib/on.coffee&#39;
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
</code></pre></div><h2 id="cafe-main-ipc-coffee" tabindex="-1"><a class="header-anchor" href="#cafe-main-ipc-coffee" aria-hidden="true">#</a> caf\xE9 main/ipc.coffee</h2><div class="language-coffee ext-coffee"><pre class="language-coffee"><code>\`export * as drag from &#39;./ipc/drag.coffee&#39;\`
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
</code></pre></div>`,23);function r(t,i){return o}var s=e(a,[["render",r],["__file","2022-03-14.electron-drag.html.vue"]]);export{s as default};
