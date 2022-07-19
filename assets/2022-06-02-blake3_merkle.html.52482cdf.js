import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.040d9bb0.js";const r={},n=a(`<h1 id="arbore-merkle-bazat-pe-blake3" tabindex="-1"><a class="header-anchor" href="#arbore-merkle-bazat-pe-blake3" aria-hidden="true">#</a> Arbore Merkle bazat pe blake3</h1><p><a href="https://github.com/BLAKE3-team/BLAKE3" target="_blank" rel="noopener noreferrer">blake3</a> se bazeaz\u0103 pe un arbore Merkle, dar interfa\u021Ba expus\u0103 nu export\u0103 arborele Merkle.</p><p><a href="https://github.com/oconnor663/bao" target="_blank" rel="noopener noreferrer">bao</a> implementeaz\u0103 validarea de streaming blake3, dar nu poate redimensiona <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">buc\u0103\u021Bile</a> subiacente (a se vedea <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">suportul pentru &quot;grupuri de buc\u0103\u021Bi&quot; mai mari pentru reducerea spa\u021Biului</a> ).</p><p>Acest lucru \xEEnseamn\u0103 c\u0103 bao consum\u0103 6% spa\u021Biu de stocare suplimentar pentru a \xEEnregistra arborele Merkle, ceea ce reprezint\u0103 un cost suplimentar semnificativ pentru un index de con\u021Binut distribuit.</p><p>A\u0219adar, am implementat <a href="https://github.com/rmw-lib/blake3_merkle" target="_blank" rel="noopener noreferrer">blake3_merkle</a> pentru a ob\u021Bine 32 de octe\u021Bi de hash pentru 1 MB de con\u021Binut, cu un cost suplimentar de stocare de 0,3\u2031.</p><p>Arborele Merkle genereaz\u0103 ha\u0219uri care sunt \xEEn concordan\u021B\u0103 cu blake3.</p><p>Atunci c\xE2nd con\u021Binutul este mai mic sau egal cu 1 MB, arborele Merkle are un singur nod, iar hash-ul acestui nod este egal cu hash-ul lui blake3.</p><p><code>./examples/main.rs</code> Dup\u0103 cum urmeaz\u0103 :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use blake3_merkle::Merkle;

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
</code></pre></div><p>Rula\u021Bi <code>./example.main.sh</code>\u0219i rezultatul este urm\u0103torul</p><div class="language-text ext-text"><pre class="language-text"><code>[examples/main.rs:14] &amp;merkle.li = [
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
</code></pre></div>`,11);function t(l,o){return n}var s=e(r,[["render",t],["__file","2022-06-02-blake3_merkle.html.vue"]]);export{s as default};
