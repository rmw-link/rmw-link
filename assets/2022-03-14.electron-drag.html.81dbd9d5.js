import{_ as p,o as t,c as e,a as n,b as o,F as c,d as s,e as r,r as l}from"./app.2533875a.js";const u={},i=n("h1",{id:"electron-perfect-drag-and-drop-\u043F\u043E-\u0435\u043B\u0435\u0433\u0430\u043D\u0442\u043D\u043E-\u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435-\u043E\u0442-electron-drag",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#electron-perfect-drag-and-drop-\u043F\u043E-\u0435\u043B\u0435\u0433\u0430\u043D\u0442\u043D\u043E-\u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435-\u043E\u0442-electron-drag","aria-hidden":"true"},"#"),s(" electron perfect drag and drop : \u043F\u043E-\u0435\u043B\u0435\u0433\u0430\u043D\u0442\u043D\u043E \u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435 \u043E\u0442 electron-drag")],-1),k=n("p",null,"\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u0438\u044F\u0442 \u043C\u0435\u043D\u0438\u0434\u0436\u044A\u0440 \u043F\u043E\u0438\u0441\u043A\u0430 \u043B\u0435\u043D\u0442\u0430\u0442\u0430 \u0441 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0438 \u043F\u043E\u0434 \u043F\u0440\u043E\u0437\u043E\u0440\u0435\u0446\u0430 \u043D\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0430 \u0434\u0430 \u0431\u043B\u043E\u043A\u0438\u0440\u0430 \u0434\u0435\u0441\u043D\u0438\u044F \u0431\u0443\u0442\u043E\u043D \u043D\u0430 \u043C\u0438\u0448\u043A\u0430\u0442\u0430.",-1),d=n("p",null,[s("\u041D\u0430\u0442\u0438\u0432\u043D\u043E\u0442\u043E \u043F\u043B\u044A\u0437\u0433\u0430\u043D\u0435 \u0438 \u043F\u0443\u0441\u043A\u0430\u043D\u0435 \u0432 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u044F \u043F\u0440\u043E\u0437\u043E\u0440\u0435\u0446 \u043F\u043E\u0434 \u043F\u0440\u043E\u0437\u043E\u0440\u0435\u0446\u0430 ( "),n("code",null,"app-region:drag"),s(") \u0438\u0437\u044F\u0436\u0434\u0430 \u0441\u044A\u0431\u0438\u0442\u0438\u0435\u0442\u043E \u0437\u0430 \u0449\u0440\u0430\u043A\u0432\u0430\u043D\u0435 \u0438 \u043D\u044F\u043C\u0430 \u043D\u0430\u0447\u0438\u043D \u0434\u0430 \u0441\u0435 \u0431\u043B\u043E\u043A\u0438\u0440\u0430 \u0449\u0440\u0430\u043A\u0432\u0430\u043D\u0435\u0442\u043E \u0441 \u0434\u0435\u0441\u043D\u0438\u044F \u0431\u0443\u0442\u043E\u043D \u043D\u0430 \u043C\u0438\u0448\u043A\u0430\u0442\u0430. \u0422\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u043F\u0440\u0438\u043B\u043E\u0436\u0438\u0442\u0435 \u043F\u043B\u044A\u0437\u0433\u0430\u043D\u0435\u0442\u043E \u0438 \u043F\u0443\u0441\u043A\u0430\u043D\u0435\u0442\u043E \u0440\u044A\u0447\u043D\u043E.")],-1),f=n("p",null,"\u0410\u043A\u043E \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0442\u0435 \u0441\u044A\u0431\u0438\u0442\u0438\u0435\u0442\u043E mousemove \u0437\u0430 \u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0430 \u0438\u0437\u0438\u0441\u043A\u0432\u0430\u043D\u0435\u0442\u043E, \u043A\u043E\u0433\u0430\u0442\u043E \u043C\u0438\u0448\u043A\u0430\u0442\u0430 \u0441\u0435 \u0434\u0432\u0438\u0436\u0438 \u0431\u044A\u0440\u0437\u043E, \u0442\u044F \u0438\u0437\u043B\u0438\u0437\u0430 \u043E\u0442 \u043E\u0431\u0445\u0432\u0430\u0442\u0430 \u043D\u0430 \u043F\u0440\u043E\u0437\u043E\u0440\u0435\u0446\u0430 \u0438 \u043F\u0440\u043E\u0437\u043E\u0440\u0435\u0446\u044A\u0442 \u0432\u0435\u0447\u0435 \u043D\u0435 \u0441\u043B\u0435\u0434\u0432\u0430 \u043C\u0438\u0448\u043A\u0430\u0442\u0430.",-1),g=s("\u0420\u0435\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u0445 \u0442\u043E\u0432\u0430 \u0438\u0437\u0438\u0441\u043A\u0432\u0430\u043D\u0435 \u0432\u044A\u0437 \u043E\u0441\u043D\u043E\u0432\u0430 \u043D\u0430 \u0441\u044A\u0431\u0438\u0442\u0438\u0435\u0442\u043E \u043D\u0430 \u043F\u043E\u043A\u0430\u0437\u0430\u043B\u0435\u0446\u0430, \u043A\u0430\u0442\u043E \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0445 "),m={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/setPointerCapture",target:"_blank",rel:"noopener noreferrer"},h=s("setPointerCapture"),w=s(" \u0437\u0430 \u0443\u043B\u0430\u0432\u044F\u043D\u0435 \u043D\u0430 \u043F\u043E\u0437\u0438\u0446\u0438\u044F\u0442\u0430 \u043D\u0430 \u043C\u0438\u0448\u043A\u0430\u0442\u0430 \u0438\u0437\u0432\u044A\u043D \u043F\u0440\u043E\u0437\u043E\u0440\u0435\u0446\u0430 BrowserWindow, \u0438 \u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0438 \u043F\u0435\u0440\u0444\u0435\u043A\u0442\u043D\u043E."),v=r(`<p>\u0422\u043E\u0432\u0430 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0435 \u043F\u043E-\u0434\u043E\u0431\u0440\u043E \u043E\u0442 \u0440\u0435\u0448\u0435\u043D\u0438\u0435\u0442\u043E electron-drag: \u0442\u043E \u0438\u043C\u0430 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435\u043D\u043E \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u0438 \u0434\u0432\u043E\u0438\u0447\u043D\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u0438 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0431\u044A\u0434\u0435 \u043D\u0435\u043F\u0440\u0438\u044F\u0442\u043D\u043E \u0437\u0430 \u043E\u0431\u043D\u043E\u0432\u044F\u0432\u0430\u043D\u0435 \u0438 \u043F\u0430\u043A\u0435\u0442\u0438\u0440\u0430\u043D\u0435.</p><p>\u041E\u0442\u043A\u0440\u0438\u0445, \u0447\u0435 \u043D\u0438\u043A\u043E\u0439 \u0432\u0441\u0435 \u043E\u0449\u0435 \u043D\u0435 \u0435 \u0441\u043F\u043E\u043C\u0435\u043D\u0430\u043B \u0442\u043E\u0432\u0430 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0432 \u043C\u0440\u0435\u0436\u0430\u0442\u0430, \u0437\u0430\u0442\u043E\u0432\u0430 \u043F\u0438\u0448\u0430 \u0437\u0430 \u043D\u0435\u0433\u043E \u0432 \u0431\u043B\u043E\u0433\u0430 \u0441\u0438 \u0438 \u0433\u043E \u0441\u043F\u043E\u0434\u0435\u043B\u044F\u043C.</p><p>\u0420\u0430\u0437\u043B\u0438\u043A\u0438\u0442\u0435 \u0432 \u043A\u043E\u0434\u0430 \u043D\u0430 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438\u0442\u0435 \u0441\u0430 \u0438\u0437\u0431\u0440\u043E\u0435\u043D\u0438 \u043F\u043E-\u0434\u043E\u043B\u0443 \u0441\u0430\u043C\u043E \u0437\u0430 \u0441\u043F\u0440\u0430\u0432\u043A\u0430. \u041E\u0441\u043D\u043E\u0432\u043D\u0438\u044F\u0442 \u043A\u043E\u0434 \u0435 <code>web/src/lib/drag.coffee</code> \u0438 <code>main/ipc/drag.coffee</code>.</p><h2 id="web-src-lib-drag-coffee" tabindex="-1"><a class="header-anchor" href="#web-src-lib-drag-coffee" aria-hidden="true">#</a> web/src/lib/drag.coffee</h2><div class="language-coffee ext-coffee"><pre class="language-coffee"><code>import $<span class="token keyword">on</span> from <span class="token string">&#39;~/lib/on.coffee&#39;</span>
import ipc from <span class="token string">&#39;~/lib/ipc.coffee&#39;</span>
import platform from <span class="token string">&#39;@/config/platform.mjs&#39;</span>

<span class="token punctuation">{</span><span class="token property">drag</span><span class="token operator">:</span><span class="token punctuation">{</span>setBounds<span class="token punctuation">,</span>getBounds<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">=</span> ipc
pointermove <span class="token operator">=</span> <span class="token string">&#39;pointermove&#39;</span>
<span class="token constant">IGNORE</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token string">&#39;SELECT BUTTON A INPUT TEXTAREA&#39;</span><span class="token punctuation">.</span>split <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>round<span class="token punctuation">}</span> <span class="token operator">=</span> Math
export default <span class="token function-variable function">main</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">elem</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>
  <span class="token keyword">if</span> platform<span class="token operator">!=</span><span class="token string">&#39;win32&#39;</span>
    <span class="token keyword">return</span>

  elem<span class="token punctuation">.</span>style<span class="token punctuation">.</span>appRegion <span class="token operator">=</span> <span class="token string">&#39;no-drag&#39;</span>

  moving <span class="token operator">=</span> <span class="token keyword">false</span>

  init_w <span class="token operator">=</span> init_h <span class="token operator">=</span> init_x <span class="token operator">=</span> init_y <span class="token operator">=</span> init_top <span class="token operator">=</span> init_left <span class="token operator">=</span> <span class="token keyword">undefined</span>

  <span class="token function-variable function">_move</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>screenX<span class="token punctuation">,</span>screenY<span class="token punctuation">}</span> <span class="token operator">=</span> e
    <span class="token function">setBounds</span><span class="token punctuation">(</span>
      round screenX<span class="token operator">-</span>init_x<span class="token operator">+</span>init_left
      round screenY<span class="token operator">-</span>init_y<span class="token operator">+</span>init_top
      init_w
      init_h
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span>

  <span class="token function-variable function">down</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>
    <span class="token keyword">if</span> moving
      <span class="token keyword">return</span>
    <span class="token keyword">if</span> e<span class="token punctuation">.</span>button<span class="token operator">!=</span><span class="token number">0</span> <span class="token comment"># \u9F20\u6807\u5DE6\u952E</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">{</span>target<span class="token punctuation">}</span> <span class="token operator">=</span> e
    p <span class="token operator">=</span> e<span class="token punctuation">.</span>target
    <span class="token keyword">loop</span>
      <span class="token punctuation">{</span>nodeName<span class="token punctuation">}</span> <span class="token operator">=</span> p
      <span class="token keyword">if</span> <span class="token constant">IGNORE</span><span class="token punctuation">.</span>has nodeName
        <span class="token keyword">return</span>
      <span class="token keyword">if</span> nodeName <span class="token operator">==</span> <span class="token string">&#39;BODY&#39;</span>
        <span class="token keyword">break</span>
      p <span class="token operator">=</span> p<span class="token punctuation">.</span>parentNode
    moving <span class="token operator">=</span> <span class="token keyword">true</span>
    <span class="token punctuation">{</span><span class="token property">screenX</span><span class="token operator">:</span>init_x<span class="token punctuation">,</span><span class="token property">screenY</span><span class="token operator">:</span>init_y<span class="token punctuation">}</span> <span class="token operator">=</span> e

    elem<span class="token punctuation">.</span>setPointerCapture e<span class="token punctuation">.</span>pointerId
    elem<span class="token punctuation">.</span>addEventListener pointermove<span class="token punctuation">,</span>_move

    <span class="token punctuation">{</span>
      <span class="token property">x</span><span class="token operator">:</span>init_left
      <span class="token property">y</span><span class="token operator">:</span>init_top
      <span class="token property">height</span><span class="token operator">:</span>init_h
      <span class="token property">width</span><span class="token operator">:</span>init_w
    <span class="token punctuation">}</span> <span class="token operator">=</span> await <span class="token function">getBounds</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    console<span class="token punctuation">.</span>log  await <span class="token function">getBounds</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>

  <span class="token function-variable function">up</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>
    <span class="token keyword">if</span> moving
      await <span class="token function">_move</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
      elem<span class="token punctuation">.</span>releasePointerCapture e<span class="token punctuation">.</span>pointerId
      elem<span class="token punctuation">.</span>removeEventListener pointermove<span class="token punctuation">,</span>_move
      moving <span class="token operator">=</span> <span class="token keyword">false</span>
    <span class="token keyword">return</span>

  $<span class="token keyword">on</span> elem<span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token property">lostpointercapture</span><span class="token operator">:</span>up
    <span class="token property">pointercancel</span><span class="token operator">:</span>up
    <span class="token property">pointerdown</span><span class="token operator">:</span>down
    <span class="token property">pointerup</span><span class="token operator">:</span>up
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span>
</code></pre></div><h2 id="main-ipc-drag-coffee" tabindex="-1"><a class="header-anchor" href="#main-ipc-drag-coffee" aria-hidden="true">#</a> main/ipc/drag.coffee</h2><div class="language-coffee ext-coffee"><pre class="language-coffee"><code>export getBounds <span class="token operator">=</span> <span class="token operator">-</span><span class="token operator">&gt;</span>
  <span class="token class-member variable">@sender</span><span class="token punctuation">.</span><span class="token function">getOwnerBrowserWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBounds</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

export setBounds <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>width<span class="token punctuation">,</span>height<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>
  win <span class="token operator">=</span> <span class="token class-member variable">@sender</span><span class="token punctuation">.</span><span class="token function">getOwnerBrowserWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment"># \u4E0D\u7528 setPosition \u662F\u56E0\u4E3A https://github.com/electron/electron/issues/9477 browserWindow.setPosition(x,y) changed window size (windows/linux) with non default scaleLevel (125% for example)</span>
  win<span class="token punctuation">.</span>setBounds <span class="token punctuation">{</span>
    <span class="token property">x</span><span class="token operator">:</span>Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
    <span class="token property">y</span><span class="token operator">:</span>Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>
    width
    height
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span>
</code></pre></div><h2 id="main-ipc-coffee" tabindex="-1"><a class="header-anchor" href="#main-ipc-coffee" aria-hidden="true">#</a> main/ipc.coffee</h2><div class="language-coffee ext-coffee"><pre class="language-coffee"><code><span class="token inline-javascript"><span class="token delimiter punctuation">\`</span><span class="token script language-javascript"><span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">as</span> drag <span class="token keyword">from</span> <span class="token string">&#39;./ipc/drag.coffee&#39;</span></span><span class="token delimiter punctuation">\`</span></span>
</code></pre></div><h2 id="web-src-page-recbar-vue" tabindex="-1"><a class="header-anchor" href="#web-src-page-recbar-vue" aria-hidden="true">#</a> web/src/page/recbar.vue</h2><div class="language-pug ext-pug"><pre class="language-pug"><code><span class="token markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pug<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">-</span><span class="token code"><span class="token function">nav</span><span class="token punctuation">(</span><span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;{ pause }&quot;</span><span class="token punctuation">)</span></span>
<span class="token tag">nav<span class="token attributes"><span class="token punctuation">(</span>:<span class="token attr-name">class</span><span class="token punctuation">=</span><span class="token attr-value"><span class="token string">&quot;{ pause }&quot;</span> ref<span class="token operator">=</span><span class="token string">&quot;nav&quot;</span></span><span class="token punctuation">)</span></span></span>
<span class="token markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
</code></pre></div><div class="language-coffee ext-coffee"><pre class="language-coffee"><code><span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;coffee&quot;</span><span class="token operator">&gt;</span>
import drag from <span class="token string">&#39;~/lib/drag.coffee&#39;</span>
nav <span class="token operator">=</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
export default <span class="token punctuation">{</span>
<span class="token property">setup</span><span class="token operator">:</span> <span class="token operator">=&gt;</span>
  <span class="token parameter">onMounted</span> <span class="token operator">=&gt;</span>
    <span class="token function">drag</span><span class="token punctuation">(</span>nav<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">{</span>
    nav
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><h2 id="main-boot-coffee" tabindex="-1"><a class="header-anchor" href="#main-boot-coffee" aria-hidden="true">#</a> main/boot.coffee</h2><div class="language-coffee ext-coffee"><pre class="language-coffee"><code><span class="token function-variable function">_handle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">k<span class="token punctuation">,</span> v</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>
  <span class="token keyword">if</span> v <span class="token keyword">instanceof</span> <span class="token class-name">Function</span>
    ipcMain<span class="token punctuation">.</span>handle k<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span>args</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>
      <span class="token function">v</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span>args<span class="token punctuation">)</span>

  <span class="token keyword">for</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span>func<span class="token punctuation">]</span> from Object<span class="token punctuation">.</span>entries v
    _handle <span class="token punctuation">[</span><span class="token operator">...</span>k<span class="token punctuation">,</span> name<span class="token punctuation">]</span><span class="token punctuation">,</span> func

  <span class="token keyword">return</span>

<span class="token keyword">for</span> <span class="token punctuation">[</span>k<span class="token punctuation">,</span>v<span class="token punctuation">]</span> from Object<span class="token punctuation">.</span>entries ipc
  <span class="token function">_handle</span><span class="token punctuation">(</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>

</code></pre></div><h2 id="web-src-lib-on-coffee" tabindex="-1"><a class="header-anchor" href="#web-src-lib-on-coffee" aria-hidden="true">#</a> web/src/lib/_on.coffee</h2><div class="language-coffee ext-coffee"><pre class="language-coffee"><code>export <span class="token function">default</span> <span class="token punctuation">(</span><span class="token parameter">elem<span class="token punctuation">,</span> dict</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>
  <span class="token keyword">for</span> event<span class="token punctuation">,</span>func <span class="token keyword">of</span> dict
    elem<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> func</span><span class="token punctuation">)</span>
  <span class="token operator">=&gt;</span>
    <span class="token keyword">for</span> event<span class="token punctuation">,</span>func <span class="token keyword">of</span> dict
      elem<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> func<span class="token punctuation">)</span>

</code></pre></div><h2 id="web-src-lib-on-coffee-1" tabindex="-1"><a class="header-anchor" href="#web-src-lib-on-coffee-1" aria-hidden="true">#</a> web/src/lib/on.coffee</h2><div class="language-coffee ext-coffee"><pre class="language-coffee"><code>import $<span class="token keyword">on</span> from <span class="token string">&#39;./_on.coffee&#39;</span>
export <span class="token function">default</span> <span class="token punctuation">(</span><span class="token parameter">elem<span class="token punctuation">,</span> dict</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>
  unbind <span class="token operator">=</span> $<span class="token keyword">on</span> elem<span class="token punctuation">,</span> dict
  onUnmounted unbind
  unbind
</code></pre></div>`,18);function y(b,_){const a=l("ExternalLinkIcon");return t(),e(c,null,[i,k,d,f,n("p",null,[g,n("a",m,[h,o(a)]),w]),v],64)}var B=p(u,[["render",y],["__file","2022-03-14.electron-drag.html.vue"]]);export{B as default};
