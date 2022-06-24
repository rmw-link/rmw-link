import{_ as p,r as o,o as c,c as e,a as n,b as t,F as i,d as s,e as r}from"./app.8d0bec44.js";const l={},u=n("h1",{id:"tiny-captcha-rust-lightweight-captcha-generator-compilable-to-wasm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tiny-captcha-rust-lightweight-captcha-generator-compilable-to-wasm","aria-hidden":"true"},"#"),s(" tiny_captcha : rust lightweight captcha generator, compilable to wasm")],-1),k={href:"https://docs.rs/tiny_captcha",target:"_blank",rel:"noopener noreferrer"},h=s("\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0430"),m=n("p",null,"\u041E\u043B\u0435\u043A\u043E\u0442\u0435\u043D \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u043D\u0430 CAPTCHA, \u0440\u0430\u0437\u0447\u0438\u0442\u0430\u0449 \u0441\u0430\u043C\u043E \u043D\u0430 rand \u0438 gif, \u043A\u043E\u0439\u0442\u043E \u043C\u043E\u0436\u0435 \u0434\u0430 \u0431\u044A\u0434\u0435 \u043A\u043E\u043C\u043F\u0438\u043B\u0438\u0440\u0430\u043D \u0432 wasm.",-1),_=s("\u0411\u0430\u0437\u0438\u0440\u0430\u043D\u0430 \u043D\u0430 "),g={href:"http://brokestream.com/captcha.html",target:"_blank",rel:"noopener noreferrer"},f=s("\u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430\u0442\u0430 CAPTCHA \u043D\u0430 \u0418\u0432\u0430\u043D \u0422\u0438\u0445\u043E\u043D\u043E\u0432"),d=s(", \u043F\u0440\u0435\u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0430 \u043D\u0430 "),w={href:"https://c2rust.com",target:"_blank",rel:"noopener noreferrer"},y=s("c2rust"),b=s("."),x=s("\u0424\u0430\u0439\u043B\u044A\u0442 \u0441 \u0448\u0440\u0438\u0444\u0442\u0430 \u0435 \u043E\u0442 "),v={href:"https://github.com/ITikhonov/captcha/blob/master/font.h",target:"_blank",rel:"noopener noreferrer"},C=s("https://github.com/ITikhonov/captcha/blob/master/font.h"),I=s(" \u0438 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0432\u0430 ASCII \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435, \u043D\u0430\u043F\u0440\u0430\u0432\u0435\u043D\u043E \u0438 \u0441\u043B\u0435\u0434 \u0442\u043E\u0432\u0430 \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0430\u043D\u043E \u0432 \u043C\u0430\u0441\u0438\u0432 \u0441 \u043F\u043E\u043C\u043E\u0449\u0442\u0430 \u043D\u0430 unfont."),A=r(`<p>\u0418\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0439\u0442\u0435 \u0434\u0435\u043C\u043E \u0432\u0435\u0440\u0441\u0438\u044F\u0442\u0430 :</p><div class="language-rust ext-rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">anyhow<span class="token punctuation">::</span></span><span class="token class-name">Result</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span></span><span class="token punctuation">{</span><span class="token namespace">env<span class="token punctuation">::</span></span>current_exe<span class="token punctuation">,</span> <span class="token namespace">fs<span class="token punctuation">::</span></span><span class="token class-name">File</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">tiny_captcha<span class="token punctuation">::</span></span>gif<span class="token punctuation">;</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token punctuation">..=</span><span class="token number">10</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> exe <span class="token operator">=</span> <span class="token function">current_exe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> gif_path <span class="token operator">=</span> exe<span class="token punctuation">.</span><span class="token function">parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token macro property">format!</span><span class="token punctuation">(</span><span class="token string">&quot;{}.gif&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> word <span class="token operator">=</span> <span class="token function">gif</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">File</span><span class="token punctuation">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>gif_path<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{} {}&quot;</span><span class="token punctuation">,</span> word<span class="token punctuation">,</span> gif_path<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token class-name">Ok</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u0418\u0437\u0445\u043E\u0434\u044A\u0442 \u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u043D :</p><p><img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/1.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/2.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/3.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/4.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/5.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/6.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/7.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/8.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/9.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/10.gif" alt=""></p>`,4);function T(q,F){const a=o("ExternalLinkIcon");return c(),e(i,null,[u,n("p",null,[n("a",k,[h,t(a)])]),m,n("p",null,[_,n("a",g,[f,t(a)]),d,n("a",w,[y,t(a)]),b]),n("p",null,[x,n("a",v,[C,t(a)]),I]),A],64)}var V=p(l,[["render",T],["__file","2022-06-24_tiny_captcha.html.vue"]]);export{V as default};
