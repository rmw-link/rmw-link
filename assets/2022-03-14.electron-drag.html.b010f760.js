import{_ as e,o as t,c as p,a as n,b as o,F as c,d as a,e as r,r as l}from"./app.2533875a.js";const i={},u=n("h1",{id:"electron-perfect-drag-and-drop-elegantnejsa-izvedba-kot-electron-drag",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#electron-perfect-drag-and-drop-elegantnejsa-izvedba-kot-electron-drag","aria-hidden":"true"},"#"),a(" electron perfect drag and drop : elegantnej\u0161a izvedba kot electron-drag")],-1),k=n("p",null,"Vodja izdelka je zahteval, da orodna vrstica pod oknom electron blokira desni mi\u0161kin gumb.",-1),d=n("p",null,[a("Naravni na\u010Din vle\u010Denja in spu\u0161\u010Danja v elektronu pod oknom ( "),n("code",null,"app-region:drag"),a(") poje dogodek klika in ni na\u010Dina za blokiranje desnega klika. Funkcijo povleci in spusti morate izvajati ro\u010Dno.")],-1),f=n("p",null,"\u010Ce za izvajanje zahteve uporabite dogodek mousemove, mi\u0161ka ob hitrem premiku zapusti obmo\u010Dje okna in okno ne sledi ve\u010D mi\u0161ki.",-1),g=a("To zahtevo sem izvedel na podlagi dogodka kazalca, pri \u010Demer sem za zajem polo\u017Eaja mi\u0161ke zunaj okna BrowserWindow uporabil "),m={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/setPointerCapture",target:"_blank",rel:"noopener noreferrer"},v=a("setPointerCapture"),h=a(", in deluje odli\u010Dno."),w=r(`<p>Ta re\u0161itev je bolj\u0161a od re\u0161itve electron-drag: ima binarne odvisnosti, ki so odvisne od platforme, nadgradnja in pakiranje pa sta lahko te\u017Eavna.</p><p>Ugotovil sem, da te re\u0161itve na spletu \u0161e nih\u010De ni omenil, zato o njej pi\u0161em na blogu in jo delim z drugimi.</p><p>Razlike v kodi med izvedbami so spodaj navedene samo za referenco. Osnovna koda je <code>web/src/lib/drag.coffee</code> in <code>main/ipc/drag.coffee</code>.</p><h2 id="web-src-lib-drag-coffee" tabindex="-1"><a class="header-anchor" href="#web-src-lib-drag-coffee" aria-hidden="true">#</a> web/src/lib/drag.coffee</h2><div class="language-coffee ext-coffee"><pre class="language-coffee"><code>import $<span class="token keyword">on</span> from <span class="token string">&#39;~/lib/on.coffee&#39;</span>
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
</code></pre></div>`,18);function b(y,_){const s=l("ExternalLinkIcon");return t(),p(c,null,[u,k,d,f,n("p",null,[g,n("a",m,[v,o(s)]),h]),w],64)}var j=e(i,[["render",b],["__file","2022-03-14.electron-drag.html.vue"]]);export{j as default};
