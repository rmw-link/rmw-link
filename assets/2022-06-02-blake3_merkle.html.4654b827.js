import{_ as e,r as p,o,c,a,b as t,F as l,d as n,e as u}from"./app.f05fb683.js";const k={},i=a("h1",{id:"blake3-een-perustuva-merkle-puu",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#blake3-een-perustuva-merkle-puu","aria-hidden":"true"},"#"),n(" Blake3:een perustuva Merkle-puu")],-1),r={href:"https://github.com/BLAKE3-team/BLAKE3",target:"_blank",rel:"noopener noreferrer"},m=n("blake3"),d=n(" perustuu merkle-puuhun, mutta paljastettu k\xE4ytt\xF6liittym\xE4 ei vie merkle-puuta."),h={href:"https://github.com/oconnor663/bao",target:"_blank",rel:"noopener noreferrer"},b=n("bao"),f=n(" toteuttaa blake3-suoratoistovarmennuksen, mutta ei pysty muuttamaan taustalla olevien "),_={href:"https://github.com/oconnor663/bao/issues/34",target:"_blank",rel:"noopener noreferrer"},y=n("lohkojen"),g=n(" kokoa (katso "),v={href:"https://github.com/oconnor663/bao/issues/34",target:"_blank",rel:"noopener noreferrer"},x=n('tuki suuremmille "lohkoryhmille", jotta tilank\xE4ytt\xF6 v\xE4henisi'),w=n(" )."),q=a("p",null,"T\xE4m\xE4 tarkoittaa, ett\xE4 bao kuluttaa 6 % ylim\xE4\xE4r\xE4ist\xE4 tallennustilaa merkle-puun tallentamiseen, mik\xE4 on merkitt\xE4v\xE4 yleiskustannus hajautetulle sis\xE4lt\xF6indeksille.",-1),j=n("Niinp\xE4 toteutin "),H={href:"https://github.com/rmw-lib/blake3_merkle",target:"_blank",rel:"noopener noreferrer"},B=n("blake3_merkle-toiminnon"),E=n(", jonka avulla saadaan 32 tavua hashia 1 Mt:n sis\xE4lt\xF6\xE4 kohti, ja ylim\xE4\xE4r\xE4inen tallennuskustannus on 0,3\u2031."),M=u(`<p>Merkle-puu tuottaa hasheja, jotka ovat yhdenmukaisia blake3:n kanssa.</p><p>Kun sis\xE4lt\xF6 on enint\xE4\xE4n 1MB, merkle-puussa on vain yksi solmu, ja t\xE4m\xE4n solmun hash on yht\xE4 suuri kuin blake3:n hash.</p><p><code>./examples/main.rs</code> seuraavasti :</p><div class="language-rust ext-rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">blake3_merkle<span class="token punctuation">::</span></span><span class="token class-name">Merkle</span><span class="token punctuation">;</span>

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
</code></pre></div><p>Suorita <code>./example.main.sh</code>ja tuloste on seuraava</p><div class="language-text ext-text"><pre class="language-text"><code>[examples/main.rs:14] &amp;merkle.li = [
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
</code></pre></div>`,6);function F(N,D){const s=p("ExternalLinkIcon");return o(),c(l,null,[i,a("p",null,[a("a",r,[m,t(s)]),d]),a("p",null,[a("a",h,[b,t(s)]),f,a("a",_,[y,t(s)]),g,a("a",v,[x,t(s)]),w]),q,a("p",null,[j,a("a",H,[B,t(s)]),E]),M],64)}var V=e(k,[["render",F],["__file","2022-06-02-blake3_merkle.html.vue"]]);export{V as default};
