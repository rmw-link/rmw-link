import{_ as p,o as e,c as o,a as n,b as t,F as c,d as a,e as i,r}from"./app.278ef889.js";const l={},u=n("h1",{id:"tiny-captcha-generatore-di-captcha-rust-e-leggero-compilabile-con-wasm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tiny-captcha-generatore-di-captcha-rust-e-leggero-compilabile-con-wasm","aria-hidden":"true"},"#"),a(" tiny_captcha : generatore di captcha rust e leggero, compilabile con wasm")],-1),k={href:"https://docs.rs/tiny_captcha",target:"_blank",rel:"noopener noreferrer"},h=a("Documentazione del progetto"),m=n("p",null,"Generatore leggero di CAPTCHA, basato solo su rand e gif, che pu\xF2 essere compilato in wasm.",-1),g=a("Basato sulla "),_={href:"http://brokestream.com/captcha.html",target:"_blank",rel:"noopener noreferrer"},d=a("libreria CAPTCHA di Ivan Tikhonov"),f=a(", riscritta in "),w={href:"https://c2rust.com",target:"_blank",rel:"noopener noreferrer"},y=a("c2rust"),b=a("."),x=a("Il file di font proviene da "),v={href:"https://github.com/ITikhonov/captcha/blob/master/font.h",target:"_blank",rel:"noopener noreferrer"},I=a("https://github.com/ITikhonov/captcha/blob/master/font.h"),C=a(" ed \xE8 un'opera d'arte ASCII, realizzata e poi generata in un array usando unfont."),T=i(`<p>Utilizzare la demo :</p><div class="language-rust ext-rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">anyhow<span class="token punctuation">::</span></span><span class="token class-name">Result</span><span class="token punctuation">;</span>
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
</code></pre></div><p>L&#39;uscita \xE8 mostrata :</p><p><img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/1.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/2.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/3.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/4.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/5.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/6.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/7.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/8.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/9.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/10.gif" alt=""></p>`,4);function z(A,q){const s=r("ExternalLinkIcon");return e(),o(c,null,[u,n("p",null,[n("a",k,[h,t(s)])]),m,n("p",null,[g,n("a",_,[d,t(s)]),f,n("a",w,[y,t(s)]),b]),n("p",null,[x,n("a",v,[I,t(s)]),C]),T],64)}var F=p(l,[["render",z],["__file","2022-06-24_tiny_captcha.html.vue"]]);export{F as default};
