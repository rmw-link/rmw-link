import{_ as e,r as p,o,c,a,b as t,F as l,d as n,e as u}from"./app.525299a3.js";const k={},r=a("h1",{id:"merkle-fa-a-blake3-alapjan",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#merkle-fa-a-blake3-alapjan","aria-hidden":"true"},"#"),n(" Merkle-fa a blake3 alapj\xE1n")],-1),i=n("A "),d={href:"https://github.com/BLAKE3-team/BLAKE3",target:"_blank",rel:"noopener noreferrer"},m=n("blake3"),h=n(" egy merkle-fa implement\xE1ci\xF3n alapul, de a megjelen\xEDtett interf\xE9sz nem export\xE1l merkle-f\xE1kat."),b=n("A "),_={href:"https://github.com/oconnor663/bao",target:"_blank",rel:"noopener noreferrer"},f=n("bao"),g=n(" streaming blake3 \xE9rv\xE9nyes\xEDt\xE9st val\xF3s\xEDt meg, de nem "),y={href:"https://github.com/oconnor663/bao/issues/34",target:"_blank",rel:"noopener noreferrer"},x=n("t\xE1mogatja"),v=n(" az alapul szolg\xE1l\xF3 "),w={href:"https://github.com/oconnor663/bao/issues/34",target:"_blank",rel:"noopener noreferrer"},z=n("darabok"),q=n(" m\xE9ret\xE9nek megv\xE1ltoztat\xE1s\xE1t "),j={href:"https://github.com/oconnor663/bao/issues/34",target:"_blank",rel:"noopener noreferrer"},H=n('(nagyobb "darabcsoportok" t\xE1mogat\xE1sa a kisebb helyig\xE9ny \xE9rdek\xE9ben'),B=n(" )."),A=a("p",null,"A bao jelenlegi implement\xE1ci\xF3ja 6%-os extra t\xE1rhelyet ig\xE9nyel az \xE9rv\xE9nyes\xEDt\xE9si hashek r\xF6gz\xEDt\xE9s\xE9hez, ami jelent\u0151s t\xF6bbletk\xF6lts\xE9get jelent egy tartalomindexel\u0151 kiszolg\xE1l\xF3 sz\xE1m\xE1ra.",-1),E=n("A "),F={href:"https://github.com/rmw-lib/blake3_merkle",target:"_blank",rel:"noopener noreferrer"},L=n("blake3_merkle"),N=n(" implement\xE1ci\xF3m, ha a "),D=a("code",null,"BLOCK_CHUNK",-1),K=n(" 10-re van \xE1ll\xEDtva, minden (1 << 10)*1024 = 1MB ut\xE1n egy 32 b\xE1jtos hash-t ad ki, ami csak 0,3\u2031 tov\xE1bbi t\xF6bbletk\xF6lts\xE9get jelent."),M=u(`<p><code>./examples/main.rs</code> Az al\xE1bbiak szerint:</p><div class="language-rust ext-rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">blake3_merkle<span class="token punctuation">::</span></span><span class="token class-name">Merkle</span><span class="token punctuation">;</span>

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
</code></pre></div><p>A <code>./example.main.sh</code>futtat\xE1s\xE1val a kimenet \xEDgy fog kin\xE9zni</p><div class="language-text ext-text"><pre class="language-text"><code>[examples/main.rs:14] &amp;merkle.li = [
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
</code></pre></div>`,4);function V(C,I){const s=p("ExternalLinkIcon");return o(),c(l,null,[r,a("p",null,[i,a("a",d,[m,t(s)]),h]),a("p",null,[b,a("a",_,[f,t(s)]),g,a("a",y,[x,t(s)]),v,a("a",w,[z,t(s)]),q,a("a",j,[H,t(s)]),B]),A,a("p",null,[E,a("a",F,[L,t(s)]),N,D,K]),M],64)}var R=e(k,[["render",V],["__file","2022-06-02-blake3_merkle.html.vue"]]);export{R as default};
