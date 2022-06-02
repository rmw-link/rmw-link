import{_ as p,r as e,o,c,a as s,b as t,F as l,d as n,e as u}from"./app.cc5206ad.js";const k={},r=s("h1",{id:"blake3\u3092\u30D8\u3099\u30FC\u30B9\u306B\u3057\u305F\u30E1\u30EB\u30AF\u30EB\u6728",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#blake3\u3092\u30D8\u3099\u30FC\u30B9\u306B\u3057\u305F\u30E1\u30EB\u30AF\u30EB\u6728","aria-hidden":"true"},"#"),n(" blake3\u3092\u30D9\u30FC\u30B9\u306B\u3057\u305F\u30E1\u30EB\u30AF\u30EB\u6728")],-1),i={href:"https://github.com/BLAKE3-team/BLAKE3",target:"_blank",rel:"noopener noreferrer"},d=n("blake3\u306F"),m=n(" merkle tree\u3092\u4E0B\u6577\u304D\u306B\u3057\u3066\u3044\u307E\u3059\u304C\u3001\u516C\u958B\u3055\u308C\u3066\u3044\u308B\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3067\u306Fmerkle tree\u3092\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u305B\u3093\u3002"),h={href:"https://github.com/oconnor663/bao",target:"_blank",rel:"noopener noreferrer"},b=n("bao"),f=n(" \u306F blake3 \u30B9\u30C8\u30EA\u30FC\u30DF\u30F3\u30B0\u691C\u8A3C\u3092\u5B9F\u88C5\u3057\u3066\u3044\u307E\u3059\u304C\u3001\u57FA\u790E\u3068\u306A\u308B "),_={href:"https://github.com/oconnor663/bao/issues/34",target:"_blank",rel:"noopener noreferrer"},g=n("\u30C1\u30E3\u30F3\u30AF\u306E"),y=n(" \u30B5\u30A4\u30BA\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093 ( "),x={href:"https://github.com/oconnor663/bao/issues/34",target:"_blank",rel:"noopener noreferrer"},w=n('\u7A7A\u9593\u306E\u30AA\u30FC\u30D0\u30FC\u30D8\u30C3\u30C9\u3092\u6E1B\u3089\u3059\u305F\u3081\u306B\u3088\u308A\u5927\u304D\u306A "chunk group" \u3092\u30B5\u30DD\u30FC\u30C8'),q=n(" \u3059\u308B\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044)\u3002"),H=s("p",null,"\u3053\u308C\u306F\u3001bao\u304Cmerkle\u6728\u3092\u8A18\u9332\u3059\u308B\u305F\u3081\u306B6%\u306E\u4F59\u5206\u306A\u30B9\u30C8\u30EC\u30FC\u30B8\u30B9\u30DA\u30FC\u30B9\u3092\u6D88\u8CBB\u3059\u308B\u3053\u3068\u3092\u610F\u5473\u3057\u3001\u5206\u6563\u30B3\u30F3\u30C6\u30F3\u30C4\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306B\u3068\u3063\u3066\u306F\u5927\u304D\u306A\u30AA\u30FC\u30D0\u30FC\u30D8\u30C3\u30C9\u3068\u306A\u308B\u3002",-1),v=n("\u305D\u3053\u3067\u3001\u30B3\u30F3\u30C6\u30F3\u30C41MB\u3042\u305F\u308A32\u30D0\u30A4\u30C8\u306E\u30CF\u30C3\u30B7\u30E5\u3092\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u3059\u308B\u3088\u3046\u306B "),B={href:"https://github.com/rmw-lib/blake3_merkle",target:"_blank",rel:"noopener noreferrer"},E=n("blake3_merkle\u3092"),F=n(" \u5B9F\u88C5\u3057\u3001\u30B9\u30C8\u30EC\u30FC\u30B8\u306E\u30AA\u30FC\u30D0\u30FC\u30D8\u30C3\u30C9\u30920.3\u3318\u5897\u52A0\u3055\u305B\u307E\u3057\u305F\u3002"),D=u(`<p><code>./examples/main.rs</code> \u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059\u3002</p><div class="language-rust ext-rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">blake3_merkle<span class="token punctuation">::</span></span><span class="token class-name">Merkle</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span></span><span class="token punctuation">{</span>env<span class="token punctuation">,</span> <span class="token namespace">error<span class="token punctuation">::</span></span><span class="token class-name">Error</span><span class="token punctuation">,</span> <span class="token namespace">fs<span class="token punctuation">::</span></span><span class="token class-name">File</span><span class="token punctuation">,</span> <span class="token namespace">io<span class="token punctuation">::</span></span>copy<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token keyword">dyn</span> <span class="token class-name">Error</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> fpath <span class="token operator">=</span> <span class="token namespace">env<span class="token punctuation">::</span></span><span class="token function">current_dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;test.pdf&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> <span class="token keyword">mut</span> blake3 <span class="token operator">=</span> <span class="token namespace">blake3<span class="token punctuation">::</span></span><span class="token class-name">Hasher</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">copy</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">File</span><span class="token punctuation">::</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>fpath<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> blake3<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> <span class="token keyword">mut</span> merkle <span class="token operator">=</span> <span class="token class-name">Merkle</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">copy</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">File</span><span class="token punctuation">::</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>fpath<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> merkle<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">;</span>
  merkle<span class="token punctuation">.</span><span class="token function">finalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token macro property">dbg!</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>merkle<span class="token punctuation">.</span>li<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token macro property">dbg!</span><span class="token punctuation">(</span>merkle<span class="token punctuation">.</span><span class="token function">blake3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token macro property">dbg!</span><span class="token punctuation">(</span>blake3<span class="token punctuation">.</span><span class="token function">finalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Ok</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>./example.main.sh</code>\u3092\u5B9F\u884C\u3059\u308B\u3068\u3001\u6B21\u306E\u3088\u3046\u306A\u51FA\u529B\u304C\u5F97\u3089\u308C\u307E\u3059\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>[examples/main.rs:14] &amp;merkle.li = [
    HashDepth {
        hash: Hash(
            &quot;eb896f431b7ff8acb4749b54981d461359a01ded0261fa0da856dd28bf29d3b3&quot;,
        ),
        depth: 10,
    },
    HashDepth {
        hash: Hash(
            &quot;4a84cc85f03f47a7c32755f8d9d81c5d3f3e04548ee8129fd480cb71c7dbc5b4&quot;,
        ),
        depth: 10,
    },
    HashDepth {
        hash: Hash(
            &quot;fbfe78e550b355cb6775e324c4fed7eb987084b115dca599aaf40056bfb031c3&quot;,
        ),
        depth: 10,
    },
    HashDepth {
        hash: Hash(
            &quot;392878c3bdc9c315d6cc8a1721d8cd0a39e49ac8716f4cb8cdf6cf83fbb666f5&quot;,
        ),
        depth: 6,
    },
]
[examples/main.rs:15] merkle.blake3() = Hash(
    &quot;74a79d0bc37dcac64c493e872252f19e8bdb32dee306481a6827fa037b378c76&quot;,
)
[examples/main.rs:16] blake3.finalize() = Hash(
    &quot;74a79d0bc37dcac64c493e872252f19e8bdb32dee306481a6827fa037b378c76&quot;,
)
</code></pre></div>`,4);function L(N,V){const a=e("ExternalLinkIcon");return o(),c(l,null,[r,s("p",null,[s("a",i,[d,t(a)]),m]),s("p",null,[s("a",h,[b,t(a)]),f,s("a",_,[g,t(a)]),y,s("a",x,[w,t(a)]),q]),H,s("p",null,[v,s("a",B,[E,t(a)]),F]),D],64)}var M=p(k,[["render",L],["__file","2022-06-02-blake3_merkle.html.vue"]]);export{M as default};
