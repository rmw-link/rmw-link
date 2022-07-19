import{_ as e,o as p,c as o,a,b as t,F as c,d as n,e as l,r as k}from"./app.278ef889.js";const u={},r=a("h1",{id:"merkle-fa-a-blake3-alapjan",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#merkle-fa-a-blake3-alapjan","aria-hidden":"true"},"#"),n(" Merkle-fa a blake3 alapj\xE1n")],-1),i=n("A "),d={href:"https://github.com/BLAKE3-team/BLAKE3",target:"_blank",rel:"noopener noreferrer"},m=n("blake3"),h=n(" egy merkle-f\xE1n alapul, de az expon\xE1lt interf\xE9sz nem tudja export\xE1lni a merkle-f\xE1t."),b=n("A "),f={href:"https://github.com/oconnor663/bao",target:"_blank",rel:"noopener noreferrer"},_=n("bao"),g=n(" megval\xF3s\xEDtja a blake3 streaming \xE9rv\xE9nyes\xEDt\xE9st, de nem tudja \xE1tm\xE9retezni az alapul szolg\xE1l\xF3 "),y={href:"https://github.com/oconnor663/bao/issues/34",target:"_blank",rel:"noopener noreferrer"},x=n("darabokat"),z=n(" (l\xE1sd a "),w={href:"https://github.com/oconnor663/bao/issues/34",target:"_blank",rel:"noopener noreferrer"},j=n('nagyobb "darabcsoportok" t\xE1mogat\xE1s\xE1t a kisebb helyig\xE9ny \xE9rdek\xE9ben'),q=n(" )."),v=a("p",null,"Ez azt jelenti, hogy a bao 6% extra t\xE1rhelyet ig\xE9nyel a merkle-fa r\xF6gz\xEDt\xE9s\xE9hez, ami jelent\u0151s t\xF6bbletk\xF6lts\xE9get jelent egy elosztott tartalomindex eset\xE9ben.",-1),H=n("Ez\xE9rt a "),B={href:"https://github.com/rmw-lib/blake3_merkle",target:"_blank",rel:"noopener noreferrer"},E=n("blake3_merkle-t"),A=n(" \xFAgy implement\xE1ltam, hogy 1 MB tartalomra 32 b\xE1jt hash-t sz\xE1rmaztassak, 0,3\u2031 tov\xE1bbi t\xE1rol\xE1si t\xF6bbletk\xF6lts\xE9ggel."),F=l(`<p>A merkle-fa a blake3-nak megfelel\u0151 hash-eket gener\xE1l.</p><p>Ha a tartalom legfeljebb 1 MB m\xE9ret\u0171, a merkle-fa csak egy csom\xF3pontot tartalmaz, \xE9s ennek a csom\xF3pontnak a hash-ja megegyezik a blake3 hash-j\xE1val.</p><p><code>./examples/main.rs</code> Az al\xE1bbiak szerint:</p><div class="language-rust ext-rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">blake3_merkle<span class="token punctuation">::</span></span><span class="token class-name">Merkle</span><span class="token punctuation">;</span>

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
</code></pre></div><p>Futtassa a <code>./example.main.sh</code>c\xEDmet, \xE9s a kimenet a k\xF6vetkez\u0151</p><div class="language-text ext-text"><pre class="language-text"><code>[examples/main.rs:14] &amp;merkle.li = [
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
</code></pre></div>`,6);function M(D,L){const s=k("ExternalLinkIcon");return p(),o(c,null,[r,a("p",null,[i,a("a",d,[m,t(s)]),h]),a("p",null,[b,a("a",f,[_,t(s)]),g,a("a",y,[x,t(s)]),z,a("a",w,[j,t(s)]),q]),v,a("p",null,[H,a("a",B,[E,t(s)]),A]),F],64)}var V=e(u,[["render",M],["__file","2022-06-02-blake3_merkle.html.vue"]]);export{V as default};
