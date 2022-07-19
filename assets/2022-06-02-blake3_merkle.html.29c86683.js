import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.87d927ab.js";const n={},r=a(`<h1 id="drzewo-merkle-a-na-podstawie-blake3" tabindex="-1"><a class="header-anchor" href="#drzewo-merkle-a-na-podstawie-blake3" aria-hidden="true">#</a> Drzewo Merkle&#39;a na podstawie blake3</h1><p><a href="https://github.com/BLAKE3-team/BLAKE3" target="_blank" rel="noopener noreferrer">blake3</a> jest oparty na drzewie merkle&#39;a, ale interfejs nie eksportuje drzewa merkle&#39;a.</p><p><a href="https://github.com/oconnor663/bao" target="_blank" rel="noopener noreferrer">bao</a> implementuje walidacj\u0119 strumieniow\u0105 blake3, ale nie mo\u017Ce zmienia\u0107 rozmiaru le\u017C\u0105cych u jej podstaw <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">jednostek</a> (patrz <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">Obs\u0142uga wi\u0119kszych &quot;grup jednostek&quot; w celu zmniejszenia narzutu przestrzeni</a> ).</p><p>Oznacza to, \u017Ce bao zu\u017Cywa 6% dodatkowej przestrzeni dyskowej na zapisanie drzewa merkle&#39;a, co jest znacz\u0105cym narzutem w przypadku rozproszonego indeksu tre\u015Bci.</p><p>Zaimplementowa\u0142em wi\u0119c <a href="https://github.com/rmw-lib/blake3_merkle" target="_blank" rel="noopener noreferrer">blake3_merkle</a>, aby uzyska\u0107 32 bajty hasha na 1 MB zawarto\u015Bci z dodatkowym narzutem pami\u0119ci 0,3\u2031.</p><p>Drzewo merkle&#39;a generuje hasze, kt\xF3re s\u0105 zgodne z blake3.</p><p>Gdy zawarto\u015B\u0107 jest mniejsza lub r\xF3wna 1 MB, w drzewie merkle&#39;a znajduje si\u0119 tylko jeden w\u0119ze\u0142, a warto\u015B\u0107 skr\xF3tu tego w\u0119z\u0142a jest r\xF3wna warto\u015Bci skr\xF3tu w\u0119z\u0142a blake3.</p><p><code>./examples/main.rs</code> W nast\u0119puj\u0105cy spos\xF3b :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use blake3_merkle::Merkle;

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
</code></pre></div><p>Uruchom stron\u0119 <code>./example.main.sh</code>, a wynik b\u0119dzie nast\u0119puj\u0105cy</p><div class="language-text ext-text"><pre class="language-text"><code>[examples/main.rs:14] &amp;merkle.li = [
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
</code></pre></div>`,11);function t(o,s){return r}var d=e(n,[["render",t],["__file","2022-06-02-blake3_merkle.html.vue"]]);export{d as default};
