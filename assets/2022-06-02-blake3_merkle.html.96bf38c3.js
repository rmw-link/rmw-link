import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.2a6a1bd2.js";const n={},r=a(`<h1 id="drevo-merkle-ki-temelji-na-blake3" tabindex="-1"><a class="header-anchor" href="#drevo-merkle-ki-temelji-na-blake3" aria-hidden="true">#</a> Drevo Merkle, ki temelji na blake3</h1><p><a href="https://github.com/BLAKE3-team/BLAKE3" target="_blank" rel="noopener noreferrer">blake3</a> temelji na drevesu merkle, vendar izpostavljeni vmesnik ne izva\u017Ea drevesa merkle.</p><p><a href="https://github.com/oconnor663/bao" target="_blank" rel="noopener noreferrer">bao</a> izvaja preverjanje preto\u010Dnosti blake3, vendar ne more spreminjati velikosti osnovnih <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">kosov</a> (glejte <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">podporo ve\u010Djim &quot;skupinam kosov&quot; za zmanj\u0161anje re\u017Eijskega prostora</a> ).</p><p>To pomeni, da bao porabi 6 % dodatnega prostora za shranjevanje za zapisovanje drevesa merklov, kar je za porazdeljeni indeks vsebine precej\u0161en re\u017Eijski stro\u0161ek.</p><p>Zato sem uporabil <a href="https://github.com/rmw-lib/blake3_merkle" target="_blank" rel="noopener noreferrer">blake3_merkle</a>, da sem pridobil 32 bajtov hasha na 1 MB vsebine z dodatnimi stro\u0161ki shranjevanja v vi\u0161ini 0,3\u2031.</p><p>Merklovo drevo ustvari hashe, ki so skladni z blake3.</p><p>\u010Ce je vsebina manj\u0161a ali enaka 1 MB, ima drevo merklov samo eno vozli\u0161\u010De in hash tega vozli\u0161\u010Da je enak hashu blake3.</p><p><code>./examples/main.rs</code> Na naslednji na\u010Din :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use blake3_merkle::Merkle;

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
</code></pre></div><p>Za\u017Eenite <code>./example.main.sh</code>in rezultat je naslednji</p><div class="language-text ext-text"><pre class="language-text"><code>[examples/main.rs:14] &amp;merkle.li = [
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
</code></pre></div>`,11);function o(t,l){return r}var d=e(n,[["render",o],["__file","2022-06-02-blake3_merkle.html.vue"]]);export{d as default};
