import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.2a6a1bd2.js";const a={},t=r(`<h1 id="merkle-tr\xE6-baseret-pa-blake3" tabindex="-1"><a class="header-anchor" href="#merkle-tr\xE6-baseret-pa-blake3" aria-hidden="true">#</a> Merkle-tr\xE6 baseret p\xE5 blake3</h1><p><a href="https://github.com/BLAKE3-team/BLAKE3" target="_blank" rel="noopener noreferrer">blake3</a> er baseret p\xE5 et merkle-tr\xE6, men den eksponerede gr\xE6nseflade eksporterer ikke merkle-tr\xE6et.</p><p><a href="https://github.com/oconnor663/bao" target="_blank" rel="noopener noreferrer">bao</a> implementerer blake3-streamingvalidering, men kan ikke \xE6ndre st\xF8rrelsen p\xE5 de underliggende <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">chunks</a> (se <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">underst\xF8ttelse af st\xF8rre &quot;chunk-grupper&quot; for at reducere pladsoverhead</a> ).</p><p>Det betyder, at bao bruger 6 % ekstra lagerplads til at registrere merkle-tr\xE6et, hvilket er et betydeligt overhead for et distribueret indholdsindeks.</p><p>S\xE5 jeg implementerede <a href="https://github.com/rmw-lib/blake3_merkle" target="_blank" rel="noopener noreferrer">blake3_merkle</a> til at udlede 32 bytes hash pr. 1 MB indhold med et ekstra lageroverhead p\xE5 0,3\u2031.</p><p>Merkle-tr\xE6et genererer hashes, der er i overensstemmelse med blake3.</p><p>N\xE5r indholdet er mindre end eller lig med 1 MB, har merkle-tr\xE6et kun \xE9n knude, og hash-koden for denne knude er lig med hash-koden for blake3.</p><p><code>./examples/main.rs</code> Som f\xF8lger :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use blake3_merkle::Merkle;

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
</code></pre></div><p>K\xF8r <code>./example.main.sh</code>, og resultatet er som f\xF8lger</p><div class="language-text ext-text"><pre class="language-text"><code>[examples/main.rs:14] &amp;merkle.li = [
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
</code></pre></div>`,11);function n(l,d){return t}var p=e(a,[["render",n],["__file","2022-06-02-blake3_merkle.html.vue"]]);export{p as default};
