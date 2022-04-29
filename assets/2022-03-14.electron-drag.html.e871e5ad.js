import{_ as t,r as p,o as e,c as o,a as n,b as c,F as r,d as s,e as l}from"./app.1e06b944.js";const u={},i=n("h1",{id:"electron-perfect-drag-and-drop-electron-drag-\u3088\u308A\u3082\u30A8\u30EC\u30AB\u3099\u30F3\u30C8\u306A\u5B9F\u88C5\u3002",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#electron-perfect-drag-and-drop-electron-drag-\u3088\u308A\u3082\u30A8\u30EC\u30AB\u3099\u30F3\u30C8\u306A\u5B9F\u88C5\u3002","aria-hidden":"true"},"#"),s(" electron perfect drag and drop : electron-drag \u3088\u308A\u3082\u30A8\u30EC\u30AC\u30F3\u30C8\u306A\u5B9F\u88C5\u3002")],-1),k=n("p",null,"\u30D7\u30ED\u30C0\u30AF\u30C8\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC\u304B\u3089\u3001\u30A8\u30EC\u30AF\u30C8\u30ED\u30F3\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u4E0B\u306B\u3042\u308B\u30C4\u30FC\u30EB\u30D0\u30FC\u3067\u30DE\u30A6\u30B9\u306E\u53F3\u30DC\u30BF\u30F3\u3092\u30D6\u30ED\u30C3\u30AF\u3057\u3066\u307B\u3057\u3044\u3068\u3044\u3046\u8981\u671B\u304C\u3042\u308A\u307E\u3057\u305F\u3002",-1),d=n("p",null,[s("electron under window ("),n("code",null,"app-region:drag"),s(") \u306E\u30CD\u30A4\u30C6\u30A3\u30D6\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7\u306F\u30AF\u30EA\u30C3\u30AF\u30A4\u30D9\u30F3\u30C8\u3092\u98DF\u3079\u308B\u306E\u3067\u3001\u53F3\u30AF\u30EA\u30C3\u30AF\u30D6\u30ED\u30C3\u30AF\u3092\u3059\u308B\u65B9\u6CD5\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7\u3092\u624B\u52D5\u3067\u5B9F\u88C5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002")],-1),f=n("p",null,"mousemove\u30A4\u30D9\u30F3\u30C8\u3092\u4F7F\u3063\u3066\u8981\u4EF6\u3092\u5B9F\u88C5\u3059\u308B\u3068\u3001\u30DE\u30A6\u30B9\u304C\u7D20\u65E9\u304F\u52D5\u304F\u3068\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u7BC4\u56F2\u5916\u306B\u51FA\u3066\u3057\u307E\u3044\u3001\u30A6\u30A3\u30F3\u30C9\u30A6\u304C\u30DE\u30A6\u30B9\u306B\u8FFD\u5F93\u3057\u306A\u304F\u306A\u308A\u307E\u3059\u3002",-1),g=s("\u3053\u306E\u8981\u4EF6\u3092\u6E80\u305F\u3059\u305F\u3081\u306B\u3001\u30DD\u30A4\u30F3\u30BF\u30A4\u30D9\u30F3\u30C8\u3092\u30D9\u30FC\u30B9\u306B\u3001 "),m={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/setPointerCapture",target:"_blank",rel:"noopener noreferrer"},h=s("setPointerCapture\u3092\u4F7F\u3063\u3066"),w=s(" BrowserWindow\u5916\u306E\u30DE\u30A6\u30B9\u4F4D\u7F6E\u3092\u6355\u6349\u3059\u308B\u3088\u3046\u306B\u5B9F\u88C5\u3057\u305F\u3068\u3053\u308D\u3001\u5B8C\u74A7\u306B\u52D5\u4F5C\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002"),v=l(`<p>\u3053\u306E\u89E3\u6C7A\u7B56\u306F\u3001electron-drag \u306E\u89E3\u6C7A\u7B56\u3088\u308A\u3082\u512A\u308C\u3066\u3044\u307E\u3059\u3002\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u306B\u4F9D\u5B58\u3059\u308B\u30D0\u30A4\u30CA\u30EA\u4F9D\u5B58\u6027\u304C\u3042\u308A\u3001\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u3084\u30D1\u30C3\u30B1\u30FC\u30B8\u30F3\u30B0\u306B\u624B\u9593\u304C\u304B\u304B\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002</p><p>\u3053\u306E\u89E3\u6C7A\u7B56\u306B\u3064\u3044\u3066\u306F\u3001\u307E\u3060\u30A6\u30A7\u30D6\u4E0A\u3067\u8AB0\u3082\u8A00\u53CA\u3057\u3066\u3044\u306A\u3044\u3053\u3068\u304C\u308F\u304B\u308A\u307E\u3057\u305F\u306E\u3067\u3001\u30D6\u30ED\u30B0\u3067\u7D39\u4ECB\u3057\u3001\u5171\u6709\u3057\u307E\u3059\u3002</p><p>\u4EE5\u4E0B\u3001\u53C2\u8003\u307E\u3067\u306B\u5B9F\u88C5\u306E\u9055\u3044\u306B\u3088\u308B\u30B3\u30FC\u30C9\u306E\u9055\u3044\u3092\u5217\u6319\u3057\u307E\u3059\u3002\u30B3\u30A2\u30B3\u30FC\u30C9\u306F\u3001 <code>web/src/lib/drag.coffee</code> \u3001 <code>main/ipc/drag.coffee</code>\u3002</p><h2 id="web-src-lib-drag-coffee" tabindex="-1"><a class="header-anchor" href="#web-src-lib-drag-coffee" aria-hidden="true">#</a> web/src/lib/drag.coffee</h2><div class="language-coffee ext-coffee"><pre class="language-coffee"><code>import $<span class="token keyword">on</span> from <span class="token string">&#39;~/lib/on.coffee&#39;</span>
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
</code></pre></div><h2 id="\u30E1\u30A4\u30F3-ipc-coffee" tabindex="-1"><a class="header-anchor" href="#\u30E1\u30A4\u30F3-ipc-coffee" aria-hidden="true">#</a> \u30E1\u30A4\u30F3/ipc.coffee</h2><div class="language-coffee ext-coffee"><pre class="language-coffee"><code><span class="token inline-javascript"><span class="token delimiter punctuation">\`</span><span class="token script language-javascript"><span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">as</span> drag <span class="token keyword">from</span> <span class="token string">&#39;./ipc/drag.coffee&#39;</span></span><span class="token delimiter punctuation">\`</span></span>
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
</code></pre></div>`,18);function y(b,_){const a=p("ExternalLinkIcon");return e(),o(r,null,[i,k,d,f,n("p",null,[g,n("a",m,[h,c(a)]),w]),v],64)}var B=t(u,[["render",y],["__file","2022-03-14.electron-drag.html.vue"]]);export{B as default};
