import{_ as t,o as p,c as o,a,b as e,F as c,d as n,e as l,r as u}from"./app.30fd0c1f.js";const k={},r=a("h1",{id:"drzewo-merkle-a-na-podstawie-blake3",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#drzewo-merkle-a-na-podstawie-blake3","aria-hidden":"true"},"#"),n(" Drzewo Merkle'a na podstawie blake3")],-1),i={href:"https://github.com/BLAKE3-team/BLAKE3",target:"_blank",rel:"noopener noreferrer"},d=n("blake3"),m=n(" jest oparty na drzewie merkle'a, ale interfejs nie eksportuje drzewa merkle'a."),h={href:"https://github.com/oconnor663/bao",target:"_blank",rel:"noopener noreferrer"},b=n("bao"),f=n(" implementuje walidacj\u0119 strumieniow\u0105 blake3, ale nie mo\u017Ce zmienia\u0107 rozmiaru le\u017C\u0105cych u jej podstaw "),_={href:"https://github.com/oconnor663/bao/issues/34",target:"_blank",rel:"noopener noreferrer"},w=n("jednostek"),z=n(" (patrz "),y={href:"https://github.com/oconnor663/bao/issues/34",target:"_blank",rel:"noopener noreferrer"},g=n('Obs\u0142uga wi\u0119kszych "grup jednostek" w celu zmniejszenia narzutu przestrzeni'),j=n(" )."),x=a("p",null,"Oznacza to, \u017Ce bao zu\u017Cywa 6% dodatkowej przestrzeni dyskowej na zapisanie drzewa merkle'a, co jest znacz\u0105cym narzutem w przypadku rozproszonego indeksu tre\u015Bci.",-1),q=n("Zaimplementowa\u0142em wi\u0119c "),H={href:"https://github.com/rmw-lib/blake3_merkle",target:"_blank",rel:"noopener noreferrer"},v=n("blake3_merkle"),B=n(", aby uzyska\u0107 32 bajty hasha na 1 MB zawarto\u015Bci z dodatkowym narzutem pami\u0119ci 0,3\u2031."),E=l(`<p>Drzewo merkle&#39;a generuje hasze, kt\xF3re s\u0105 zgodne z blake3.</p><p>Gdy zawarto\u015B\u0107 jest mniejsza lub r\xF3wna 1 MB, w drzewie merkle&#39;a znajduje si\u0119 tylko jeden w\u0119ze\u0142, a warto\u015B\u0107 skr\xF3tu tego w\u0119z\u0142a jest r\xF3wna warto\u015Bci skr\xF3tu w\u0119z\u0142a blake3.</p><p><code>./examples/main.rs</code> W nast\u0119puj\u0105cy spos\xF3b :</p><div class="language-rust ext-rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">blake3_merkle<span class="token punctuation">::</span></span><span class="token class-name">Merkle</span><span class="token punctuation">;</span>

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
</code></pre></div><p>Uruchom stron\u0119 <code>./example.main.sh</code>, a wynik b\u0119dzie nast\u0119puj\u0105cy</p><div class="language-text ext-text"><pre class="language-text"><code>[examples/main.rs:14] &amp;merkle.li = [
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
</code></pre></div>`,6);function D(F,M){const s=u("ExternalLinkIcon");return p(),o(c,null,[r,a("p",null,[a("a",i,[d,e(s)]),m]),a("p",null,[a("a",h,[b,e(s)]),f,a("a",_,[w,e(s)]),z,a("a",y,[g,e(s)]),j]),x,a("p",null,[q,a("a",H,[v,e(s)]),B]),E],64)}var N=t(k,[["render",D],["__file","2022-06-02-blake3_merkle.html.vue"]]);export{N as default};
