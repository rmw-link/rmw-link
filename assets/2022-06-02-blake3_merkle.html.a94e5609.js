import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.040d9bb0.js";const n={},r=a(`<h1 id="arbol-de-merkle-basado-en-blake3" tabindex="-1"><a class="header-anchor" href="#arbol-de-merkle-basado-en-blake3" aria-hidden="true">#</a> \xC1rbol de Merkle basado en blake3</h1><p><a href="https://github.com/BLAKE3-team/BLAKE3" target="_blank" rel="noopener noreferrer">blake3</a> se basa en un \xE1rbol de merkle, pero la interfaz expuesta no exporta el \xE1rbol de merkle.</p><p><a href="https://github.com/oconnor663/bao" target="_blank" rel="noopener noreferrer">bao</a> implementa la validaci\xF3n de streaming de blake3, pero no puede redimensionar los <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">chunks</a> subyacentes (ver <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">soporte de &quot;grupos de chunk&quot; m\xE1s grandes para reducir la sobrecarga de espacio</a> ).</p><p>Esto significa que bao consume un 6% de espacio de almacenamiento adicional para registrar el \xE1rbol de merkle, lo que supone una sobrecarga importante para un \xEDndice de contenido distribuido.</p><p>As\xED que implement\xE9 <a href="https://github.com/rmw-lib/blake3_merkle" target="_blank" rel="noopener noreferrer">blake3_merkle</a> para derivar 32 bytes de hash por 1MB de contenido con una sobrecarga de almacenamiento adicional de 0,3\u2031.</p><p>El \xE1rbol merkle genera hashes que son consistentes con blake3.</p><p>Cuando el contenido es menor o igual a 1MB, el \xE1rbol de merkle s\xF3lo tiene un nodo y el hash de este nodo es igual al hash de blake3.</p><p><code>./examples/main.rs</code> De la siguiente manera :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use blake3_merkle::Merkle;

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
</code></pre></div><p>Ejecute <code>./example.main.sh</code>y el resultado es el siguiente</p><div class="language-text ext-text"><pre class="language-text"><code>[examples/main.rs:14] &amp;merkle.li = [
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
</code></pre></div>`,11);function o(t,l){return r}var c=e(n,[["render",o],["__file","2022-06-02-blake3_merkle.html.vue"]]);export{c as default};
