import{_ as t,r as o,o as p,c,a,b as e,F as l,d as n,e as u}from"./app.525299a3.js";const r={},k=a("h1",{id:"arbol-de-merkle-basado-en-blake3",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#arbol-de-merkle-basado-en-blake3","aria-hidden":"true"},"#"),n(" \xC1rbol de Merkle basado en blake3")],-1),i={href:"https://github.com/BLAKE3-team/BLAKE3",target:"_blank",rel:"noopener noreferrer"},d=n("blake3"),m=n(" se basa en una implementaci\xF3n de \xE1rboles merkle, pero la interfaz expuesta no exporta \xE1rboles merkle."),h={href:"https://github.com/oconnor663/bao",target:"_blank",rel:"noopener noreferrer"},b=n("bao"),_=n(" implementa la validaci\xF3n de blake3 en streaming, pero no "),f={href:"https://github.com/oconnor663/bao/issues/34",target:"_blank",rel:"noopener noreferrer"},g=n("soporta"),y=n(" el redimensionamiento de los "),x={href:"https://github.com/oconnor663/bao/issues/34",target:"_blank",rel:"noopener noreferrer"},w=n("chunks"),q=n(" subyacentes "),v={href:"https://github.com/oconnor663/bao/issues/34",target:"_blank",rel:"noopener noreferrer"},H=n('(soporta "grupos de chunks" m\xE1s grandes para reducir la sobrecarga de espacio'),B=n(" )."),E=a("p",null,"La implementaci\xF3n actual de bao consume un 6% de espacio de almacenamiento adicional para registrar los hashes de validaci\xF3n, lo que supone una sobrecarga importante para un servidor de indexaci\xF3n de contenidos.",-1),L=n("Mi implementaci\xF3n de "),D={href:"https://github.com/rmw-lib/blake3_merkle",target:"_blank",rel:"noopener noreferrer"},F=n("blake3_merkle"),M=n(", cuando "),N=a("code",null,"BLOCK_CHUNK",-1),z=n(" se establece en 10, produce un hash de 32 bytes por cada (1 << 10)*1024 = 1MB, a\xF1adiendo s\xF3lo 0,3\u2031 de sobrecarga adicional."),K=u(`<p><code>./examples/main.rs</code> De la siguiente manera :</p><div class="language-rust ext-rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">blake3_merkle<span class="token punctuation">::</span></span><span class="token class-name">Merkle</span><span class="token punctuation">;</span>

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
</code></pre></div><p>Ejecute <code>./example.main.sh</code>y el resultado ser\xE1 el siguiente</p><div class="language-text ext-text"><pre class="language-text"><code>[examples/main.rs:14] &amp;merkle.li = [
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
</code></pre></div>`,4);function V(C,j){const s=o("ExternalLinkIcon");return p(),c(l,null,[k,a("p",null,[a("a",i,[d,e(s)]),m]),a("p",null,[a("a",h,[b,e(s)]),_,a("a",f,[g,e(s)]),y,a("a",x,[w,e(s)]),q,a("a",v,[H,e(s)]),B]),E,a("p",null,[L,a("a",D,[F,e(s)]),M,N,z]),K],64)}var I=t(r,[["render",V],["__file","2022-06-02-blake3_merkle.html.vue"]]);export{I as default};
