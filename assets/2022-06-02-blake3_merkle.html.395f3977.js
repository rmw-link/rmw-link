import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.040d9bb0.js";const n={},r=a(`<h1 id="merklio-medis-pagal-blake3" tabindex="-1"><a class="header-anchor" href="#merklio-medis-pagal-blake3" aria-hidden="true">#</a> Merklio medis pagal blake3</h1><p><a href="https://github.com/BLAKE3-team/BLAKE3" target="_blank" rel="noopener noreferrer">blake3</a> remiasi Merkle&#39;io med\u017Eiu, ta\u010Diau atveriama s\u0105saja neeksportuoja Merkle&#39;io med\u017Eio.</p><p><a href="https://github.com/oconnor663/bao" target="_blank" rel="noopener noreferrer">bao</a> \u012Fgyvendina blake3 srautin\u012F patvirtinim\u0105, ta\u010Diau negali keisti pagrindini\u0173 <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">gabal\u0173</a> dyd\u017Eio (\u017Er. <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">didesni\u0173 &quot;gabal\u0173 grupi\u0173&quot; palaikym\u0105, kad suma\u017E\u0117t\u0173 vietos s\u0105naudos</a> ).</p><p>Tai rei\u0161kia, kad bao sunaudoja 6 % papildomos vietos Merkle&#39;io med\u017Eiui \u012Fra\u0161yti, o tai paskirstytam turinio indeksui yra reik\u0161mingos prid\u0117tin\u0117s i\u0161laidos.</p><p>Taigi, \u012Fdiegiau <a href="https://github.com/rmw-lib/blake3_merkle" target="_blank" rel="noopener noreferrer">blake3_merkle</a>, kad i\u0161 1 MB turinio b\u016Bt\u0173 i\u0161vesta 32 baitai hash, o papildoma saugojimo na\u0161ta b\u016Bt\u0173 0,3\u2031.</p><p>Merklio medis generuoja blake3 atitinkan\u010Dias hashes.</p><p>Kai turinys yra ma\u017Eesnis arba lygus 1 MB, Merkle medis turi tik vien\u0105 mazg\u0105, o \u0161io mazgo hash yra lygus blake3 hash.</p><p><code>./examples/main.rs</code> Taip:</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use blake3_merkle::Merkle;

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
</code></pre></div><p>Paleiskite <code>./example.main.sh</code>ir gaukite toki\u0105 i\u0161vest\u012F</p><div class="language-text ext-text"><pre class="language-text"><code>[examples/main.rs:14] &amp;merkle.li = [
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
</code></pre></div>`,11);function t(i,o){return r}var d=e(n,[["render",t],["__file","2022-06-02-blake3_merkle.html.vue"]]);export{d as default};
