import{_ as p,r as o,o as e,c,a as n,b as t,F as i,d as a,e as r}from"./app.8d0bec44.js";const l={},u=n("h1",{id:"tiny-captcha-generator-de-captcha-usor-compilabil-in-wasm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tiny-captcha-generator-de-captcha-usor-compilabil-in-wasm","aria-hidden":"true"},"#"),a(" tiny_captcha : generator de captcha u\u0219or, compilabil \xEEn wasm")],-1),k={href:"https://docs.rs/tiny_captcha",target:"_blank",rel:"noopener noreferrer"},h=a("Documenta\u021Bia proiectului"),m=n("p",null,"Generator CAPTCHA u\u0219or, bazat doar pe rand \u0219i gif, care poate fi compilat \xEEn wasm.",-1),_=a("Bazat pe "),g={href:"http://brokestream.com/captcha.html",target:"_blank",rel:"noopener noreferrer"},f=a("biblioteca CAPTCHA a lui Ivan Tikhonov"),d=a(", rescris\u0103 \xEEn "),w={href:"https://c2rust.com",target:"_blank",rel:"noopener noreferrer"},b=a("c2rust"),y=a("."),x=a("Fi\u0219ierul fontului este de la "),v={href:"https://github.com/ITikhonov/captcha/blob/master/font.h",target:"_blank",rel:"noopener noreferrer"},I=a("https://github.com/ITikhonov/captcha/blob/master/font.h"),C=a(" \u0219i este o lucrare ASCII, realizat\u0103 \u0219i apoi generat\u0103 \xEEntr-o matrice folosind unfont."),T=r(`<p>Utiliza\u021Bi demonstra\u021Bia :</p><div class="language-rust ext-rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">anyhow<span class="token punctuation">::</span></span><span class="token class-name">Result</span><span class="token punctuation">;</span>
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
</code></pre></div><p>Ie\u0219irea este prezentat\u0103 :</p><p><img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/1.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/2.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/3.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/4.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/5.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/6.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/7.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/8.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/9.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/10.gif" alt=""></p>`,4);function z(A,F){const s=o("ExternalLinkIcon");return e(),c(i,null,[u,n("p",null,[n("a",k,[h,t(s)])]),m,n("p",null,[_,n("a",g,[f,t(s)]),d,n("a",w,[b,t(s)]),y]),n("p",null,[x,n("a",v,[I,t(s)]),C]),T],64)}var B=p(l,[["render",z],["__file","2022-06-24_tiny_captcha.html.vue"]]);export{B as default};
