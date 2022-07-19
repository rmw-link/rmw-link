import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.87d927ab.js";const t={},n=a(`<h1 id="merkle-fa-a-blake3-alapjan" tabindex="-1"><a class="header-anchor" href="#merkle-fa-a-blake3-alapjan" aria-hidden="true">#</a> Merkle-fa a blake3 alapj\xE1n</h1><p>A <a href="https://github.com/BLAKE3-team/BLAKE3" target="_blank" rel="noopener noreferrer">blake3</a> egy merkle-f\xE1n alapul, de az expon\xE1lt interf\xE9sz nem tudja export\xE1lni a merkle-f\xE1t.</p><p>A <a href="https://github.com/oconnor663/bao" target="_blank" rel="noopener noreferrer">bao</a> megval\xF3s\xEDtja a blake3 streaming \xE9rv\xE9nyes\xEDt\xE9st, de nem tudja \xE1tm\xE9retezni az alapul szolg\xE1l\xF3 <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">darabokat</a> (l\xE1sd a <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">nagyobb &quot;darabcsoportok&quot; t\xE1mogat\xE1s\xE1t a kisebb helyig\xE9ny \xE9rdek\xE9ben</a> ).</p><p>Ez azt jelenti, hogy a bao 6% extra t\xE1rhelyet ig\xE9nyel a merkle-fa r\xF6gz\xEDt\xE9s\xE9hez, ami jelent\u0151s t\xF6bbletk\xF6lts\xE9get jelent egy elosztott tartalomindex eset\xE9ben.</p><p>Ez\xE9rt a <a href="https://github.com/rmw-lib/blake3_merkle" target="_blank" rel="noopener noreferrer">blake3_merkle-t</a> \xFAgy implement\xE1ltam, hogy 1 MB tartalomra 32 b\xE1jt hash-t sz\xE1rmaztassak, 0,3\u2031 tov\xE1bbi t\xE1rol\xE1si t\xF6bbletk\xF6lts\xE9ggel.</p><p>A merkle-fa a blake3-nak megfelel\u0151 hash-eket gener\xE1l.</p><p>Ha a tartalom legfeljebb 1 MB m\xE9ret\u0171, a merkle-fa csak egy csom\xF3pontot tartalmaz, \xE9s ennek a csom\xF3pontnak a hash-ja megegyezik a blake3 hash-j\xE1val.</p><p><code>./examples/main.rs</code> Az al\xE1bbiak szerint:</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use blake3_merkle::Merkle;

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
</code></pre></div><p>Futtassa a <code>./example.main.sh</code>c\xEDmet, \xE9s a kimenet a k\xF6vetkez\u0151</p><div class="language-text ext-text"><pre class="language-text"><code>[examples/main.rs:14] &amp;merkle.li = [
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
</code></pre></div>`,11);function r(l,o){return n}var m=e(t,[["render",r],["__file","2022-06-02-blake3_merkle.html.vue"]]);export{m as default};
