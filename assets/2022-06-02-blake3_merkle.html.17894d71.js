import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.87d927ab.js";const r={},n=a(`<h1 id="arvore-merkle-baseada-em-blake3" tabindex="-1"><a class="header-anchor" href="#arvore-merkle-baseada-em-blake3" aria-hidden="true">#</a> \xC1rvore Merkle baseada em blake3</h1><p><a href="https://github.com/BLAKE3-team/BLAKE3" target="_blank" rel="noopener noreferrer">blake3</a> baseia-se numa merkle tree, mas a interface exposta n\xE3o exporta a merkle tree.</p><p><a href="https://github.com/oconnor663/bao" target="_blank" rel="noopener noreferrer">bao</a> implementa a valida\xE7\xE3o do fluxo blake3, mas n\xE3o pode redimensionar os <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">peda\xE7os</a> subjacentes (ver <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">apoio a &quot;grupos de peda\xE7os&quot; maiores para reduzir o espa\xE7o a\xE9reo</a> ).</p><p>Isto significa que a bao consome 6% de espa\xE7o de armazenamento extra para registar a \xE1rvore merkle, o que \xE9 uma sobrecarga significativa para um \xEDndice de conte\xFAdo distribu\xEDdo.</p><p>Assim, implementei <a href="https://github.com/rmw-lib/blake3_merkle" target="_blank" rel="noopener noreferrer">blake3_merkle</a> para derivar 32 bytes de hash por 1MB de conte\xFAdo com uma sobrecarga de armazenamento adicional de 0.3\u2031.</p><p>A \xE1rvore merkle gera hashes que s\xE3o consistentes com o blake3.</p><p>Quando o conte\xFAdo \xE9 inferior ou igual a 1MB, o merkle tree tem apenas um n\xF3 e o hash deste n\xF3 \xE9 igual ao hash do blake3.</p><p><code>./examples/main.rs</code> Como se segue :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use blake3_merkle::Merkle;

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
</code></pre></div><p>Corre <code>./example.main.sh</code>e a sa\xEDda \xE9 a seguinte</p><div class="language-text ext-text"><pre class="language-text"><code>[examples/main.rs:14] &amp;merkle.li = [
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
</code></pre></div>`,11);function o(t,s){return n}var c=e(r,[["render",o],["__file","2022-06-02-blake3_merkle.html.vue"]]);export{c as default};
