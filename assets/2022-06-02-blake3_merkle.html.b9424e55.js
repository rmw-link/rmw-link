import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.87d927ab.js";const n={},t=a(`<h1 id="merkle-puu-pohineb-blake3" tabindex="-1"><a class="header-anchor" href="#merkle-puu-pohineb-blake3" aria-hidden="true">#</a> Merkle puu p\xF5hineb blake3</h1><p><a href="https://github.com/BLAKE3-team/BLAKE3" target="_blank" rel="noopener noreferrer">blake3</a> p\xF5hineb merkle-puul, kuid avalikustatud liides ei ekspordi merkle-puud.</p><p><a href="https://github.com/oconnor663/bao" target="_blank" rel="noopener noreferrer">bao</a> rakendab blake3 voogedastuse valideerimist, kuid ei saa muuta aluseks olevate <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">t\xFCkkide</a> suurust (vt <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">suuremate &quot;t\xFCkkide r\xFChmade&quot; toetamine, et v\xE4hendada ruumi koormust</a> ).</p><p>See t\xE4hendab, et bao kulutab Merkle-puu salvestamiseks 6% lisam\xE4luruumi, mis on jaotatud sisuindeksi puhul m\xE4rkimisv\xE4\xE4rne lisakulu.</p><p>Seega rakendasin <a href="https://github.com/rmw-lib/blake3_merkle" target="_blank" rel="noopener noreferrer">blake3_merkle&#39;i</a>, et tuletada 32 baiti hashi 1 MB sisu kohta, mille t\xE4iendav salvestuskoormus on 0,3\u2031.</p><p>Merkle-puu genereerib hashed, mis on koosk\xF5las blake3-ga.</p><p>Kui sisu on v\xE4iksem v\xF5i v\xF5rdne 1MB, on Merkle-puul ainult \xFCks s\xF5lm ja selle s\xF5lme hash on v\xF5rdne blake3 hashiga.</p><p><code>./examples/main.rs</code> J\xE4rgnevalt :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use blake3_merkle::Merkle;

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
</code></pre></div><p>K\xE4ivita <code>./example.main.sh</code>ja v\xE4ljund on j\xE4rgmine</p><div class="language-text ext-text"><pre class="language-text"><code>[examples/main.rs:14] &amp;merkle.li = [
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
</code></pre></div>`,11);function r(l,s){return t}var i=e(n,[["render",r],["__file","2022-06-02-blake3_merkle.html.vue"]]);export{i as default};
