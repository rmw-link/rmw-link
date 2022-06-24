import{_ as o,r as p,o as e,c,a as n,b as t,F as i,d as a,e as r}from"./app.8d0bec44.js";const l={},u=n("h1",{id:"tiny-captcha-rust-lightweight-captcha-generator-kompilovatelny-do-wasm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tiny-captcha-rust-lightweight-captcha-generator-kompilovatelny-do-wasm","aria-hidden":"true"},"#"),a(" tiny_captcha : rust lightweight captcha generator, kompilovate\u013En\xFD do wasm")],-1),k={href:"https://docs.rs/tiny_captcha",target:"_blank",rel:"noopener noreferrer"},h=a("Projektov\xE1 dokument\xE1cia"),m=n("p",null,"Od\u013Eah\u010Den\xFD gener\xE1tor CAPTCHA, ktor\xFD sa spolieha len na rand a gif a ktor\xFD mo\u017Eno skompilova\u0165 do wasm.",-1),g=a("Zalo\u017Een\xE9 na "),_={href:"http://brokestream.com/captcha.html",target:"_blank",rel:"noopener noreferrer"},d=a("kni\u017Enici CAPTCHA od Ivana Tichonova"),f=a(", prep\xEDsan\xE9 v "),w={href:"https://c2rust.com",target:"_blank",rel:"noopener noreferrer"},y=a("c2rust"),b=a("."),v=a("S\xFAbor p\xEDsma je z adresy "),x={href:"https://github.com/ITikhonov/captcha/blob/master/font.h",target:"_blank",rel:"noopener noreferrer"},I=a("https://github.com/ITikhonov/captcha/blob/master/font.h"),C=a(" a je to umeleck\xE9 dielo ASCII, ktor\xE9 sa vytvorilo a potom vygenerovalo do po\u013Ea pomocou funkcie unfont."),T=r(`<p>Pou\u017Eite demo :</p><div class="language-rust ext-rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">anyhow<span class="token punctuation">::</span></span><span class="token class-name">Result</span><span class="token punctuation">;</span>
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
</code></pre></div><p>V\xFDstup je zobrazen\xFD :</p><p><img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/1.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/2.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/3.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/4.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/5.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/6.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/7.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/8.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/9.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/10.gif" alt=""></p>`,4);function j(A,V){const s=p("ExternalLinkIcon");return e(),c(i,null,[u,n("p",null,[n("a",k,[h,t(s)])]),m,n("p",null,[g,n("a",_,[d,t(s)]),f,n("a",w,[y,t(s)]),b]),n("p",null,[v,n("a",x,[I,t(s)]),C]),T],64)}var F=o(l,[["render",j],["__file","2022-06-24_tiny_captcha.html.vue"]]);export{F as default};
