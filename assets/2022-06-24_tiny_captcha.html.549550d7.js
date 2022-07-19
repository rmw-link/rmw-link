import{_ as p,o,c,a as n,b as t,F as e,d as s,e as i,r as u}from"./app.30fd0c1f.js";const r={},l=n("h1",{id:"tiny-captcha-wasm-\u306B\u30B3\u30F3\u30CF\u309A\u30A4\u30EB\u53EF\u80FD\u306A-rust-\u8EFD\u91CF\u30AD\u30E3\u30D5\u309A\u30C1\u30E3\u30B7\u3099\u30A7\u30CD\u30EC\u30FC\u30BF",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tiny-captcha-wasm-\u306B\u30B3\u30F3\u30CF\u309A\u30A4\u30EB\u53EF\u80FD\u306A-rust-\u8EFD\u91CF\u30AD\u30E3\u30D5\u309A\u30C1\u30E3\u30B7\u3099\u30A7\u30CD\u30EC\u30FC\u30BF","aria-hidden":"true"},"#"),s(" tiny_captcha : wasm \u306B\u30B3\u30F3\u30D1\u30A4\u30EB\u53EF\u80FD\u306A rust \u8EFD\u91CF\u30AD\u30E3\u30D7\u30C1\u30E3\u30B8\u30A7\u30CD\u30EC\u30FC\u30BF")],-1),k={href:"https://docs.rs/tiny_captcha",target:"_blank",rel:"noopener noreferrer"},h=s("\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"),m=n("p",null,"rand \u3068 gif \u306B\u306E\u307F\u4F9D\u5B58\u3059\u308B\u8EFD\u91CF\u306A CAPTCHA \u30B8\u30A7\u30CD\u30EC\u30FC\u30BF\u3067\u3001wasm \u306B\u30B3\u30F3\u30D1\u30A4\u30EB\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",-1),_={href:"http://brokestream.com/captcha.html",target:"_blank",rel:"noopener noreferrer"},g=s("Ivan Tikhonov\u6C0F\u306ECAPTCHA"),f=s(" \u30E9\u30A4\u30D6\u30E9\u30EA\u3092\u30D9\u30FC\u30B9\u306B\u3001 "),d={href:"https://c2rust.com",target:"_blank",rel:"noopener noreferrer"},w=s("c2rust\u3067"),y=s(" \u66F8\u304D\u76F4\u3057\u305F\u3082\u306E\u3067\u3059\u3002"),b=s("\u30D5\u30A9\u30F3\u30C8\u30D5\u30A1\u30A4\u30EB\u306F "),x={href:"https://github.com/ITikhonov/captcha/blob/master/font.h",target:"_blank",rel:"noopener noreferrer"},v=s("https://github.com/ITikhonov/captcha/blob/master/font.h"),I=s(" \u306E\u3082\u306E\u3067\u3001ASCII\u30A2\u30FC\u30C8\u30EF\u30FC\u30AF\u3092\u4F5C\u6210\u3057\u3001unfont\u3092\u4F7F\u3063\u3066\u914D\u5217\u306B\u751F\u6210\u3057\u305F\u3082\u306E\u3067\u3059\u3002"),C=i(`<p>\u30C7\u30E2\u3092\u3054\u5229\u7528\u304F\u3060\u3055\u3044\u3002</p><div class="language-rust ext-rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">anyhow<span class="token punctuation">::</span></span><span class="token class-name">Result</span><span class="token punctuation">;</span>
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
</code></pre></div><p>\u51FA\u529B\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059\u3002</p><p><img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/1.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/2.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/3.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/4.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/5.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/6.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/7.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/8.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/9.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/10.gif" alt=""></p>`,4);function T(A,q){const a=u("ExternalLinkIcon");return o(),c(e,null,[l,n("p",null,[n("a",k,[h,t(a)])]),m,n("p",null,[n("a",_,[g,t(a)]),f,n("a",d,[w,t(a)]),y]),n("p",null,[b,n("a",x,[v,t(a)]),I]),C],64)}var N=p(r,[["render",T],["__file","2022-06-24_tiny_captcha.html.vue"]]);export{N as default};
