import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.040d9bb0.js";const n={},o=a(`<h1 id="merkleho-strom-zalozeny-na-blake3" tabindex="-1"><a class="header-anchor" href="#merkleho-strom-zalozeny-na-blake3" aria-hidden="true">#</a> Merkleho strom zalo\u017Een\xFD na blake3</h1><p><a href="https://github.com/BLAKE3-team/BLAKE3" target="_blank" rel="noopener noreferrer">blake3</a> je zalo\u017Een na merklov\u011B stromu, ale vystaven\xE9 rozhran\xED neum\xED exportovat merkl\u016Fv strom.</p><p><a href="https://github.com/oconnor663/bao" target="_blank" rel="noopener noreferrer">bao</a> implementuje ov\u011B\u0159ov\xE1n\xED datov\xFDch tok\u016F blake3, ale nem\u016F\u017Ee m\u011Bnit velikost podkladov\xFDch <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">chunk\u016F</a> (viz <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">podpora v\u011Bt\u0161\xEDch &quot;skupin chunk\u016F&quot; pro sn\xED\u017Een\xED prostorov\xE9 re\u017Eie</a> ).</p><p>To znamen\xE1, \u017Ee bao spot\u0159ebuje 6 % \xFAlo\u017En\xE9ho prostoru nav\xEDc na z\xE1znam merkleova stromu, co\u017E je u distribuovan\xE9ho indexu obsahu zna\u010Dn\xE1 re\u017Eie.</p><p>Proto jsem implementoval <a href="https://github.com/rmw-lib/blake3_merkle" target="_blank" rel="noopener noreferrer">blake3_merkle</a>, aby bylo mo\u017En\xE9 z\xEDskat 32 bajt\u016F hashe na 1 MB obsahu s dodate\u010Dnou re\u017Ei\xED ukl\xE1d\xE1n\xED 0,3\u2031.</p><p>Merkleho strom generuje hashe, kter\xE9 jsou v souladu s blake3.</p><p>Pokud je obsah men\u0161\xED nebo roven 1 MB, m\xE1 merkl\u016Fv strom pouze jeden uzel a hash tohoto uzlu se rovn\xE1 hashi blake3.</p><p><code>./examples/main.rs</code> N\xE1sleduj\xEDc\xED :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use blake3_merkle::Merkle;

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
</code></pre></div><p>Spus\u0165te <code>./example.main.sh</code>a v\xFDstup je n\xE1sleduj\xEDc\xED</p><div class="language-text ext-text"><pre class="language-text"><code>[examples/main.rs:14] &amp;merkle.li = [
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
</code></pre></div>`,11);function r(t,l){return o}var c=e(n,[["render",r],["__file","2022-06-02-blake3_merkle.html.vue"]]);export{c as default};
