import{_ as p,r as t,o as e,c as o,a as n,b as c,F as r,d as s,e as l}from"./app.dd3830d7.js";const u={},i=n("h1",{id:"electron-perfect-drag-and-drop-\u03BC\u03B9\u03B1-\u03C0\u03B9\u03BF-\u03BA\u03BF\u03BC\u03C8\u03B7-\u03C5\u03BB\u03BF\u03C0\u03BF\u03B9\u03B7\u03C3\u03B7-\u03B1\u03C0\u03BF-\u03C4\u03BF-electron-drag",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#electron-perfect-drag-and-drop-\u03BC\u03B9\u03B1-\u03C0\u03B9\u03BF-\u03BA\u03BF\u03BC\u03C8\u03B7-\u03C5\u03BB\u03BF\u03C0\u03BF\u03B9\u03B7\u03C3\u03B7-\u03B1\u03C0\u03BF-\u03C4\u03BF-electron-drag","aria-hidden":"true"},"#"),s(" electron perfect drag and drop : \u03BC\u03B9\u03B1 \u03C0\u03B9\u03BF \u03BA\u03BF\u03BC\u03C8\u03AE \u03C5\u03BB\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 \u03B1\u03C0\u03CC \u03C4\u03BF electron-drag")],-1),k=n("p",null,"\u039F \u03C5\u03C0\u03B5\u03CD\u03B8\u03C5\u03BD\u03BF\u03C2 \u03C0\u03C1\u03BF\u03CA\u03CC\u03BD\u03C4\u03BF\u03C2 \u03B6\u03AE\u03C4\u03B7\u03C3\u03B5 \u03B7 \u03B3\u03C1\u03B1\u03BC\u03BC\u03AE \u03B5\u03C1\u03B3\u03B1\u03BB\u03B5\u03AF\u03C9\u03BD \u03BA\u03AC\u03C4\u03C9 \u03B1\u03C0\u03CC \u03C4\u03BF \u03C0\u03B1\u03C1\u03AC\u03B8\u03C5\u03C1\u03BF electron \u03BD\u03B1 \u03BC\u03C0\u03BB\u03BF\u03BA\u03AC\u03C1\u03B5\u03B9 \u03C4\u03BF \u03B4\u03B5\u03BE\u03AF \u03BA\u03BF\u03C5\u03BC\u03C0\u03AF \u03C4\u03BF\u03C5 \u03C0\u03BF\u03BD\u03C4\u03B9\u03BA\u03B9\u03BF\u03CD.",-1),d=n("p",null,[s("\u0397 \u03B5\u03B3\u03B3\u03B5\u03BD\u03AE\u03C2 \u03BC\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC \u03BA\u03B1\u03B9 \u03B1\u03C0\u03CC\u03B8\u03B5\u03C3\u03B7 \u03C3\u03B5 \u03B7\u03BB\u03B5\u03BA\u03C4\u03C1\u03CC\u03BD\u03B9\u03BF \u03BA\u03AC\u03C4\u03C9 \u03B1\u03C0\u03CC \u03C4\u03BF \u03C0\u03B1\u03C1\u03AC\u03B8\u03C5\u03C1\u03BF ( "),n("code",null,"app-region:drag"),s(") \u03C4\u03C1\u03CE\u03B5\u03B9 \u03C4\u03BF \u03C3\u03C5\u03BC\u03B2\u03AC\u03BD \u03BA\u03BB\u03B9\u03BA \u03BA\u03B1\u03B9 \u03B4\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 \u03C4\u03C1\u03CC\u03C0\u03BF\u03C2 \u03BD\u03B1 \u03B3\u03AF\u03BD\u03B5\u03B9 \u03BC\u03C0\u03BB\u03BF\u03BA\u03AC\u03C1\u03B9\u03C3\u03BC\u03B1 \u03C4\u03BF\u03C5 \u03B4\u03B5\u03BE\u03B9\u03BF\u03CD \u03BA\u03BB\u03B9\u03BA. \u0398\u03B1 \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03C6\u03B1\u03C1\u03BC\u03CC\u03C3\u03B5\u03C4\u03B5 \u03C4\u03BF drag and drop \u03C7\u03B5\u03B9\u03C1\u03BF\u03BA\u03AF\u03BD\u03B7\u03C4\u03B1.")],-1),f=n("p",null,"\u0391\u03BD \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03C4\u03B5 \u03C4\u03BF \u03C3\u03C5\u03BC\u03B2\u03AC\u03BD mousemove \u03B3\u03B9\u03B1 \u03C4\u03B7\u03BD \u03C5\u03BB\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 \u03C4\u03B7\u03C2 \u03B1\u03C0\u03B1\u03AF\u03C4\u03B7\u03C3\u03B7\u03C2, \u03CC\u03C4\u03B1\u03BD \u03C4\u03BF \u03C0\u03BF\u03BD\u03C4\u03AF\u03BA\u03B9 \u03BC\u03B5\u03C4\u03B1\u03BA\u03B9\u03BD\u03B5\u03AF\u03C4\u03B1\u03B9 \u03B3\u03C1\u03AE\u03B3\u03BF\u03C1\u03B1, \u03B2\u03B3\u03B1\u03AF\u03BD\u03B5\u03B9 \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD \u03C0\u03B5\u03C1\u03B9\u03BF\u03C7\u03AE \u03C4\u03BF\u03C5 \u03C0\u03B1\u03C1\u03B1\u03B8\u03CD\u03C1\u03BF\u03C5 \u03BA\u03B1\u03B9 \u03C4\u03BF \u03C0\u03B1\u03C1\u03AC\u03B8\u03C5\u03C1\u03BF \u03B4\u03B5\u03BD \u03B1\u03BA\u03BF\u03BB\u03BF\u03C5\u03B8\u03B5\u03AF \u03C0\u03BB\u03AD\u03BF\u03BD \u03C4\u03BF \u03C0\u03BF\u03BD\u03C4\u03AF\u03BA\u03B9.",-1),g=s("\u0388\u03C7\u03C9 \u03C5\u03BB\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03B9 \u03B1\u03C5\u03C4\u03AE \u03C4\u03B7\u03BD \u03B1\u03C0\u03B1\u03AF\u03C4\u03B7\u03C3\u03B7 \u03BC\u03B5 \u03B2\u03AC\u03C3\u03B7 \u03C4\u03BF \u03C3\u03C5\u03BC\u03B2\u03AC\u03BD \u03C4\u03BF\u03C5 \u03B4\u03B5\u03AF\u03BA\u03C4\u03B7, \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03CE\u03BD\u03C4\u03B1\u03C2 "),m={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/setPointerCapture",target:"_blank",rel:"noopener noreferrer"},h=s("\u03C4\u03BF setPointerCapture"),w=s(" \u03B3\u03B9\u03B1 \u03C4\u03B7 \u03C3\u03CD\u03BB\u03BB\u03B7\u03C8\u03B7 \u03C4\u03B7\u03C2 \u03B8\u03AD\u03C3\u03B7\u03C2 \u03C4\u03BF\u03C5 \u03C0\u03BF\u03BD\u03C4\u03B9\u03BA\u03B9\u03BF\u03CD \u03B5\u03BA\u03C4\u03CC\u03C2 \u03C4\u03BF\u03C5 BrowserWindow, \u03BA\u03B1\u03B9 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03B5\u03AF \u03C4\u03AD\u03BB\u03B5\u03B9\u03B1."),v=l(`<p>\u0391\u03C5\u03C4\u03AE \u03B7 \u03BB\u03CD\u03C3\u03B7 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03BA\u03B1\u03BB\u03CD\u03C4\u03B5\u03C1\u03B7 \u03B1\u03C0\u03CC \u03C4\u03B7 \u03BB\u03CD\u03C3\u03B7 electron-drag: \u03AD\u03C7\u03B5\u03B9 \u03B5\u03BE\u03B1\u03C1\u03C4\u03CE\u03BC\u03B5\u03BD\u03B5\u03C2 \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD \u03C0\u03BB\u03B1\u03C4\u03C6\u03CC\u03C1\u03BC\u03B1 \u03B4\u03C5\u03B1\u03B4\u03B9\u03BA\u03AD\u03C2 \u03B5\u03BE\u03B1\u03C1\u03C4\u03AE\u03C3\u03B5\u03B9\u03C2 \u03BA\u03B1\u03B9 \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03BC\u03C0\u03B5\u03BB\u03AC\u03C2 \u03B7 \u03B1\u03BD\u03B1\u03B2\u03AC\u03B8\u03BC\u03B9\u03C3\u03B7 \u03BA\u03B1\u03B9 \u03B7 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03B1\u03C3\u03AF\u03B1.</p><p>\u0394\u03B9\u03B1\u03C0\u03AF\u03C3\u03C4\u03C9\u03C3\u03B1 \u03CC\u03C4\u03B9 \u03BA\u03B1\u03BD\u03B5\u03AF\u03C2 \u03B4\u03B5\u03BD \u03AD\u03C7\u03B5\u03B9 \u03B1\u03BD\u03B1\u03C6\u03B5\u03C1\u03B8\u03B5\u03AF \u03B1\u03BA\u03CC\u03BC\u03B7 \u03C3\u03B5 \u03B1\u03C5\u03C4\u03AE \u03C4\u03B7 \u03BB\u03CD\u03C3\u03B7 \u03C3\u03C4\u03BF \u03B4\u03B9\u03B1\u03B4\u03AF\u03BA\u03C4\u03C5\u03BF, \u03B3\u03B9&#39; \u03B1\u03C5\u03C4\u03CC \u03C4\u03B7\u03BD \u03B1\u03BD\u03B1\u03C6\u03AD\u03C1\u03C9 \u03C3\u03C4\u03BF blog \u03BA\u03B1\u03B9 \u03C4\u03B7\u03BD \u03BC\u03BF\u03B9\u03C1\u03AC\u03B6\u03BF\u03BC\u03B1\u03B9.</p><p>\u039F\u03B9 \u03B4\u03B9\u03B1\u03C6\u03BF\u03C1\u03AD\u03C2 \u03C3\u03C4\u03BF\u03BD \u03BA\u03CE\u03B4\u03B9\u03BA\u03B1 \u03BC\u03B5\u03C4\u03B1\u03BE\u03CD \u03C4\u03C9\u03BD \u03C5\u03BB\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03C9\u03BD \u03C0\u03B1\u03C1\u03B1\u03C4\u03AF\u03B8\u03B5\u03BD\u03C4\u03B1\u03B9 \u03C0\u03B1\u03C1\u03B1\u03BA\u03AC\u03C4\u03C9 \u03BC\u03CC\u03BD\u03BF \u03B3\u03B9\u03B1 \u03BB\u03CC\u03B3\u03BF\u03C5\u03C2 \u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC\u03C2. \u039F \u03B2\u03B1\u03C3\u03B9\u03BA\u03CC\u03C2 \u03BA\u03CE\u03B4\u03B9\u03BA\u03B1\u03C2 \u03B5\u03AF\u03BD\u03B1\u03B9 <code>web/src/lib/drag.coffee</code> \u03BA\u03B1\u03B9 <code>main/ipc/drag.coffee</code>.</p><h2 id="web-src-lib-drag-coffee" tabindex="-1"><a class="header-anchor" href="#web-src-lib-drag-coffee" aria-hidden="true">#</a> web/src/lib/drag.coffee</h2><div class="language-coffee ext-coffee"><pre class="language-coffee"><code>import $<span class="token keyword">on</span> from <span class="token string">&#39;~/lib/on.coffee&#39;</span>
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
</code></pre></div>`,18);function b(y,_){const a=t("ExternalLinkIcon");return e(),o(r,null,[i,k,d,f,n("p",null,[g,n("a",m,[h,c(a)]),w]),v],64)}var B=p(u,[["render",b],["__file","2022-03-14.electron-drag.html.vue"]]);export{B as default};
