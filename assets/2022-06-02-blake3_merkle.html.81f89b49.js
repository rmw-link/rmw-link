import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.040d9bb0.js";const r={},n=a(`<h1 id="arbre-de-merkle-base-sur-blake3" tabindex="-1"><a class="header-anchor" href="#arbre-de-merkle-base-sur-blake3" aria-hidden="true">#</a> Arbre de Merkle bas\xE9 sur blake3</h1><p><a href="https://github.com/BLAKE3-team/BLAKE3" target="_blank" rel="noopener noreferrer">blake3</a> est bas\xE9 sur un arbre de merkle, mais l&#39;interface expos\xE9e n&#39;exporte pas l&#39;arbre de merkle.</p><p><a href="https://github.com/oconnor663/bao" target="_blank" rel="noopener noreferrer">bao</a> met en \u0153uvre la validation de flux blake3, mais ne peut pas redimensionner les <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">morceaux</a> sous-jacents (voir le <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">support de plus grands &quot;groupes de morceaux&quot; pour r\xE9duire l&#39;encombrement</a> ).</p><p>Cela signifie que bao consomme 6 % d&#39;espace de stockage suppl\xE9mentaire pour enregistrer l&#39;arbre de merkle, ce qui repr\xE9sente une surcharge importante pour un index de contenu distribu\xE9.</p><p>J&#39;ai donc impl\xE9ment\xE9 <a href="https://github.com/rmw-lib/blake3_merkle" target="_blank" rel="noopener noreferrer">blake3_merkle</a> pour d\xE9river 32 octets de hachage par 1 Mo de contenu avec un surco\xFBt de stockage suppl\xE9mentaire de 0,3\u2031.</p><p>L&#39;arbre de merkle g\xE9n\xE8re des hachages qui sont coh\xE9rents avec blake3.</p><p>Lorsque le contenu est inf\xE9rieur ou \xE9gal \xE0 1 Mo, l&#39;arbre de merkle ne comporte qu&#39;un seul n\u0153ud et le hachage de ce n\u0153ud est \xE9gal au hachage de blake3.</p><p><code>./examples/main.rs</code> Comme suit :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use blake3_merkle::Merkle;

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
</code></pre></div><p>Ex\xE9cutez <code>./example.main.sh</code>et la sortie est la suivante</p><div class="language-text ext-text"><pre class="language-text"><code>[examples/main.rs:14] &amp;merkle.li = [
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
</code></pre></div>`,11);function t(o,s){return n}var d=e(r,[["render",t],["__file","2022-06-02-blake3_merkle.html.vue"]]);export{d as default};
