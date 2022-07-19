import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.2a6a1bd2.js";const t={},n=a(`<h1 id="blake3-een-perustuva-merkle-puu" tabindex="-1"><a class="header-anchor" href="#blake3-een-perustuva-merkle-puu" aria-hidden="true">#</a> Blake3:een perustuva Merkle-puu</h1><p><a href="https://github.com/BLAKE3-team/BLAKE3" target="_blank" rel="noopener noreferrer">blake3</a> perustuu merkle-puuhun, mutta paljastettu k\xE4ytt\xF6liittym\xE4 ei vie merkle-puuta.</p><p><a href="https://github.com/oconnor663/bao" target="_blank" rel="noopener noreferrer">bao</a> toteuttaa blake3-suoratoistovarmennuksen, mutta ei pysty muuttamaan taustalla olevien <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">lohkojen</a> kokoa (katso <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">tuki suuremmille &quot;lohkoryhmille&quot;, jotta tilank\xE4ytt\xF6 v\xE4henisi</a> ).</p><p>T\xE4m\xE4 tarkoittaa, ett\xE4 bao kuluttaa 6 % ylim\xE4\xE4r\xE4ist\xE4 tallennustilaa merkle-puun tallentamiseen, mik\xE4 on merkitt\xE4v\xE4 yleiskustannus hajautetulle sis\xE4lt\xF6indeksille.</p><p>Niinp\xE4 toteutin <a href="https://github.com/rmw-lib/blake3_merkle" target="_blank" rel="noopener noreferrer">blake3_merkle-toiminnon</a>, jonka avulla saadaan 32 tavua hashia 1 Mt:n sis\xE4lt\xF6\xE4 kohti, ja ylim\xE4\xE4r\xE4inen tallennuskustannus on 0,3\u2031.</p><p>Merkle-puu tuottaa hasheja, jotka ovat yhdenmukaisia blake3:n kanssa.</p><p>Kun sis\xE4lt\xF6 on enint\xE4\xE4n 1MB, merkle-puussa on vain yksi solmu, ja t\xE4m\xE4n solmun hash on yht\xE4 suuri kuin blake3:n hash.</p><p><code>./examples/main.rs</code> seuraavasti :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use blake3_merkle::Merkle;

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
</code></pre></div><p>Suorita <code>./example.main.sh</code>ja tuloste on seuraava</p><div class="language-text ext-text"><pre class="language-text"><code>[examples/main.rs:14] &amp;merkle.li = [
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
</code></pre></div>`,11);function r(l,o){return n}var i=e(t,[["render",r],["__file","2022-06-02-blake3_merkle.html.vue"]]);export{i as default};
