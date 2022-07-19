import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.2a6a1bd2.js";const n={},r=a(`<h1 id="albero-di-merkle-basato-su-blake3" tabindex="-1"><a class="header-anchor" href="#albero-di-merkle-basato-su-blake3" aria-hidden="true">#</a> Albero di Merkle basato su blake3</h1><p><a href="https://github.com/BLAKE3-team/BLAKE3" target="_blank" rel="noopener noreferrer">blake3</a> si basa su un albero di merkle, ma l&#39;interfaccia esposta non esporta l&#39;albero di merkle.</p><p><a href="https://github.com/oconnor663/bao" target="_blank" rel="noopener noreferrer">bao</a> implementa la validazione dello streaming blake3, ma non pu\xF2 ridimensionare i <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">chunk</a> sottostanti (vedere il <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">supporto di &quot;gruppi di chunk&quot; pi\xF9 grandi per ridurre l&#39;overhead di spazio</a> ).</p><p>Ci\xF2 significa che bao consuma il 6% di spazio di archiviazione in pi\xF9 per registrare l&#39;albero di merkle, che \xE8 un overhead significativo per un indice di contenuti distribuito.</p><p>Ho quindi implementato <a href="https://github.com/rmw-lib/blake3_merkle" target="_blank" rel="noopener noreferrer">blake3_merkle</a> per ricavare 32 byte di hash per 1 MB di contenuto con un overhead di memorizzazione aggiuntivo di 0,3\u2031.</p><p>L&#39;albero di merkle genera hash coerenti con blake3.</p><p>Quando il contenuto \xE8 inferiore o uguale a 1 MB, l&#39;albero di Merkle ha un solo nodo e l&#39;hash di questo nodo \xE8 uguale all&#39;hash di blake3.</p><p><code>./examples/main.rs</code> Come segue :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use blake3_merkle::Merkle;

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
</code></pre></div><p>Eseguite <code>./example.main.sh</code>e l&#39;output \xE8 il seguente</p><div class="language-text ext-text"><pre class="language-text"><code>[examples/main.rs:14] &amp;merkle.li = [
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
</code></pre></div>`,11);function o(t,i){return r}var d=e(n,[["render",o],["__file","2022-06-02-blake3_merkle.html.vue"]]);export{d as default};
