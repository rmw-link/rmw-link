import{_ as e,o as p,c as o,a as n,b as t,F as c,d as a,e as l,r as u}from"./app.30fd0c1f.js";const k={},r=n("h1",{id:"\u57FA\u4E8E-blake3-\u7684-merkle-tree",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u57FA\u4E8E-blake3-\u7684-merkle-tree","aria-hidden":"true"},"#"),a(" \u57FA\u4E8E blake3 \u7684 merkle tree")],-1),i={href:"https://github.com/BLAKE3-team/BLAKE3",target:"_blank",rel:"noopener noreferrer"},d=a("blake3"),m=a(" \u5E95\u5C42\u662F merkle tree \uFF0C\u4F46\u662F\u66B4\u9732\u7684\u63A5\u53E3\u65E0\u6CD5\u5BFC\u51FA merkle tree \u3002"),h={href:"https://github.com/oconnor663/bao",target:"_blank",rel:"noopener noreferrer"},b=a("bao"),f=a(" \u5B9E\u73B0\u4E86 blake3 \u6D41\u5F0F\u9A8C\u8BC1\uFF0C\u4F46\u65E0\u6CD5\u8C03\u6574\u5E95\u5C42\u5757\u5927\u5C0F (\u53C2\u89C1 "),_={href:"https://github.com/oconnor663/bao/issues/34",target:"_blank",rel:"noopener noreferrer"},g=a('support larger "chunk groups" for reduced space overhead'),y=a(" ) \u3002"),x=n("p",null,"\u4E5F\u5C31\u662F\u8BF4\uFF0Cbao \u4F1A\u6D88\u8017 6% \u7684\u989D\u5916\u5B58\u50A8\u7A7A\u95F4\u6765\u8BB0\u5F55 merkle tree\u3002\u5BF9\u4E8E\u5206\u5E03\u5F0F\u5185\u5BB9\u7D22\u5F15\u6765\u8BF4\uFF0C\u8FD9\u662F\u633A\u5927\u7684\u5F00\u9500\u3002",-1),w=a("\u4E8E\u662F\uFF0C\u6211\u5B9E\u73B0\u4E86 "),q={href:"https://github.com/rmw-lib/blake3_merkle",target:"_blank",rel:"noopener noreferrer"},H=a("blake3_merkle"),v=a(" \uFF0C\u6BCF 1MB \u5185\u5BB9\u5BFC\u51FA 32 \u5B57\u8282\u7684\u54C8\u5E0C\uFF0C\u989D\u5916\u5B58\u50A8\u5F00\u9500\u53EA\u6709 0.3\u2031 \u3002"),B=l(`<p>\u901A\u8FC7 merkle tree \u53EF\u4EE5\u751F\u6210\u548C blake3 \u4E00\u81F4\u7684\u54C8\u5E0C\u503C\u3002</p><p>\u5F53\u5185\u5BB9\u5C0F\u4E8E\u7B49\u4E8E 1MB \u65F6\uFF0Cmerkle tree \u53EA\u6709\u4E00\u4E2A\u8282\u70B9\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u8282\u70B9\u7684\u54C8\u5E0C\u503C\u7B49\u4E8E blake3 \u7684\u54C8\u5E0C\u503C\u3002</p><p><code>./examples/main.rs</code> \u5982\u4E0B :</p><div class="language-rust ext-rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">blake3_merkle<span class="token punctuation">::</span></span><span class="token class-name">Merkle</span><span class="token punctuation">;</span>

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
</code></pre></div><p>\u8FD0\u884C <code>./example.main.sh</code>\uFF0C\u8F93\u51FA\u5982\u4E0B</p><div class="language-text ext-text"><pre class="language-text"><code>[examples/main.rs:14] &amp;merkle.li = [
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
</code></pre></div>`,6);function E(F,D){const s=u("ExternalLinkIcon");return p(),o(c,null,[r,n("p",null,[n("a",i,[d,t(s)]),m]),n("p",null,[n("a",h,[b,t(s)]),f,n("a",_,[g,t(s)]),y]),x,n("p",null,[w,n("a",q,[H,t(s)]),v]),B],64)}var M=e(k,[["render",E],["__file","2022-06-02-blake3_merkle.html.vue"]]);export{M as default};
