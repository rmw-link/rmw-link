import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.2a6a1bd2.js";const t={},r=a(`<h1 id="merkles-koks-pamatojoties-uz-blake3" tabindex="-1"><a class="header-anchor" href="#merkles-koks-pamatojoties-uz-blake3" aria-hidden="true">#</a> Merkles koks, pamatojoties uz blake3</h1><p><a href="https://github.com/BLAKE3-team/BLAKE3" target="_blank" rel="noopener noreferrer">blake3</a> ir balst\u012Bts uz merkles koku, ta\u010Du pieejamais interfeiss neeksport\u0113 merkles koku.</p><p><a href="https://github.com/oconnor663/bao" target="_blank" rel="noopener noreferrer">bao</a> \u012Bsteno blake3 straum\u0113\u0161anas valid\u0101ciju, bet nevar main\u012Bt pak\u0101rtoto <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">gabalu</a> lielumu (skatiet <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">atbalstu liel\u0101k\u0101m &quot;gabalu grup\u0101m&quot;, lai samazin\u0101tu pieskait\u0101mo vietu</a> ).</p><p>Tas noz\u012Bm\u0113, ka bao pat\u0113r\u0113 6 % papildu glab\u0101\u0161anas vietas, lai ierakst\u012Btu Merkles koku, kas ir noz\u012Bm\u012Bga sadales satura indeksa pieskait\u0101m\u0101 da\u013Ca.</p><p>T\u0101p\u0113c es ieviesu <a href="https://github.com/rmw-lib/blake3_merkle" target="_blank" rel="noopener noreferrer">blake3_merkle</a>, lai ieg\u016Btu 32 baitus hash uz 1 MB satura ar papildu 0,3 MB glab\u0101\u0161anas izmaks\u0101m.</p><p>Merkle koks \u0123ener\u0113 ha\u0161as, kas atbilst blake3.</p><p>Ja saturs ir maz\u0101ks vai vien\u0101ds ar 1 MB, Merkles kokam ir tikai viens mezgls, un \u0161\u012B mezgla hash ir vien\u0101ds ar blake3 hash.</p><p><code>./examples/main.rs</code> \u0160\u0101di:</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use blake3_merkle::Merkle;

use std::{env, error::Error, fs::File, io::copy};

fn main() -&gt; Result&lt;(), Box&lt;dyn Error&gt;&gt; {
  let fpath = env::current_dir()?.join(&quot;test.pdf&quot;);

  let mut blake3 = blake3::Hasher::new();
  copy(&amp;mut File::open(&amp;fpath)?, &amp;mut blake3)?;

  let mut merkle = Merkle::new();
  copy(&amp;mut File::open(&amp;fpath)?, &amp;mut merkle)?;
  merkle.finalize();
  dbg!(&amp;merkle.li);
  dbg!(merkle.blake3());
  dbg!(blake3.finalize());
  Ok(())
}
</code></pre></div><p>Palaidiet <code>./example.main.sh</code>, un izvades rezult\u0101ts ir \u0161\u0101ds.</p><div class="language-text ext-text"><pre class="language-text"><code>[examples/main.rs:14] &amp;merkle.li = [
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
</code></pre></div>`,11);function n(s,l){return r}var p=e(t,[["render",n],["__file","2022-06-02-blake3_merkle.html.vue"]]);export{p as default};
