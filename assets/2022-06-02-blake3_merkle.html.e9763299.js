import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.2a6a1bd2.js";const n={},o=a(`<h1 id="merkleho-strom-zalozeny-na-blake3" tabindex="-1"><a class="header-anchor" href="#merkleho-strom-zalozeny-na-blake3" aria-hidden="true">#</a> Merkleho strom zalo\u017Een\xFD na blake3</h1><p><a href="https://github.com/BLAKE3-team/BLAKE3" target="_blank" rel="noopener noreferrer">blake3</a> je zalo\u017Een\xFD na merkleovom strome, ale vystaven\xE9 rozhranie nedok\xE1\u017Ee exportova\u0165 merkleov strom.</p><p><a href="https://github.com/oconnor663/bao" target="_blank" rel="noopener noreferrer">bao</a> implementuje overovanie pr\xFAdenia blake3, ale nedok\xE1\u017Ee meni\u0165 ve\u013Ekos\u0165 z\xE1kladn\xFDch <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">chunkov</a> (pozri <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">podporu v\xE4\u010D\u0161\xEDch &quot;chunk groups&quot; pre zn\xED\u017Eenie priestorovej r\xE9\u017Eie</a> ).</p><p>To znamen\xE1, \u017Ee bao spotrebuje 6 % \xFAlo\u017En\xE9ho priestoru navy\u0161e na zaznamenanie merkleovho stromu, \u010Do je pre distribuovan\xFD index obsahu v\xFDznamn\xE1 r\xE9\u017Eia.</p><p>Preto som implementoval <a href="https://github.com/rmw-lib/blake3_merkle" target="_blank" rel="noopener noreferrer">blake3_merkle</a> na z\xEDskanie 32 bajtov hash na 1 MB obsahu s dodato\u010Dnou r\xE9\u017Eiou ukladania 0,3\u2031.</p><p>Merkleho strom generuje hashe, ktor\xE9 s\xFA v s\xFAlade s blake3.</p><p>Ak je obsah men\u0161\xED alebo rovn\xFD 1 MB, merkleov strom m\xE1 len jeden uzol a hash tohto uzla sa rovn\xE1 hashu blake3.</p><p><code>./examples/main.rs</code> Takto :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use blake3_merkle::Merkle;

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
</code></pre></div><p>Spustite str\xE1nku <code>./example.main.sh</code>a v\xFDstup je nasledovn\xFD</p><div class="language-text ext-text"><pre class="language-text"><code>[examples/main.rs:14] &amp;merkle.li = [
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
</code></pre></div>`,11);function r(t,l){return o}var p=e(n,[["render",r],["__file","2022-06-02-blake3_merkle.html.vue"]]);export{p as default};
