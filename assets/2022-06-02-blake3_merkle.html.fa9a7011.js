import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.2a6a1bd2.js";const n={},r=a(`<h1 id="merkle-baum-auf-der-grundlage-von-blake3" tabindex="-1"><a class="header-anchor" href="#merkle-baum-auf-der-grundlage-von-blake3" aria-hidden="true">#</a> Merkle-Baum auf der Grundlage von Blake3</h1><p><a href="https://github.com/BLAKE3-team/BLAKE3" target="_blank" rel="noopener noreferrer">blake3</a> basiert auf einem Merkle-Baum, aber die exponierte Schnittstelle exportiert den Merkle-Baum nicht.</p><p><a href="https://github.com/oconnor663/bao" target="_blank" rel="noopener noreferrer">bao</a> implementiert die Blake3-Streaming-Validierung, kann aber die Gr\xF6\xDFe der zugrundeliegenden <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">Chunks</a> nicht \xE4ndern (siehe <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">Unterst\xFCtzung gr\xF6\xDFerer &quot;Chunk-Gruppen&quot; f\xFCr geringeren Platzbedarf</a> ).</p><p>Das bedeutet, dass bao 6 % zus\xE4tzlichen Speicherplatz f\xFCr die Aufzeichnung des Merkle-Baums verbraucht, was f\xFCr einen verteilten Inhaltsindex einen erheblichen Overhead darstellt.</p><p>Also habe ich <a href="https://github.com/rmw-lib/blake3_merkle" target="_blank" rel="noopener noreferrer">blake3_merkle</a> implementiert, um 32 Byte Hash pro 1 MB Inhalt mit einem zus\xE4tzlichen Speicher-Overhead von 0,3\u2031 abzuleiten.</p><p>Der Merkle-Baum erzeugt Hashes, die mit blake3 \xFCbereinstimmen.</p><p>Wenn der Inhalt kleiner oder gleich 1 MB ist, hat der Merkle-Baum nur einen Knoten und der Hash dieses Knotens ist gleich dem Hash von blake3.</p><p><code>./examples/main.rs</code> Wie folgt:</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use blake3_merkle::Merkle;

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
</code></pre></div><p>F\xFChren Sie <code>./example.main.sh</code>aus, und die Ausgabe lautet wie folgt</p><div class="language-text ext-text"><pre class="language-text"><code>[examples/main.rs:14] &amp;merkle.li = [
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
</code></pre></div>`,11);function t(l,o){return r}var s=e(n,[["render",t],["__file","2022-06-02-blake3_merkle.html.vue"]]);export{s as default};
