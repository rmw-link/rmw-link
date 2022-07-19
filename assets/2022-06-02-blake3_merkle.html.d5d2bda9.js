import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.040d9bb0.js";const a={},t=r(`<h1 id="merkle-trad-baserat-pa-blake3" tabindex="-1"><a class="header-anchor" href="#merkle-trad-baserat-pa-blake3" aria-hidden="true">#</a> Merkle-tr\xE4d baserat p\xE5 blake3</h1><p><a href="https://github.com/BLAKE3-team/BLAKE3" target="_blank" rel="noopener noreferrer">blake3</a> bygger p\xE5 ett merkle-tr\xE4d, men det exponerade gr\xE4nssnittet exporterar inte merkle-tr\xE4det.</p><p><a href="https://github.com/oconnor663/bao" target="_blank" rel="noopener noreferrer">bao</a> implementerar blake3-str\xF6mningsvalidering, men kan inte \xE4ndra storleken p\xE5 de underliggande <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">chunks</a> (se <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">st\xF6d f\xF6r st\xF6rre &quot;chunkgrupper&quot; f\xF6r att minska utrymmes\xF6verskottet</a> ).</p><p>Detta inneb\xE4r att bao f\xF6rbrukar 6 % extra lagringsutrymme f\xF6r att registrera Merkle-tr\xE4det, vilket \xE4r en betydande \xF6verkostnad f\xF6r ett distribuerat inneh\xE5llsindex.</p><p>S\xE5 jag implementerade <a href="https://github.com/rmw-lib/blake3_merkle" target="_blank" rel="noopener noreferrer">blake3_merkle</a> f\xF6r att f\xE5 fram 32 bytes hash per 1 MB inneh\xE5ll med en extra lagrings\xF6verskottstid p\xE5 0,3\u2031.</p><p>Merkle-tr\xE4det genererar hash-koder som \xE4r f\xF6renliga med blake3.</p><p>N\xE4r inneh\xE5llet \xE4r mindre \xE4n eller lika med 1 MB har Merkle-tr\xE4det endast en nod och hashv\xE4rdet f\xF6r denna nod \xE4r lika med hashv\xE4rdet f\xF6r blake3.</p><p><code>./examples/main.rs</code> F\xF6ljande g\xE4ller:</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use blake3_merkle::Merkle;

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
</code></pre></div><p>K\xF6r <code>./example.main.sh</code>och resultatet \xE4r f\xF6ljande</p><div class="language-text ext-text"><pre class="language-text"><code>[examples/main.rs:14] &amp;merkle.li = [
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
