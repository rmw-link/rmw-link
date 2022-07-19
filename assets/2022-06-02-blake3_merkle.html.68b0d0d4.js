import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.87d927ab.js";const n={},r=a(`<h1 id="\u03B4\u03B5\u03BD\u03C4\u03C1\u03BF-merkle-\u03BC\u03B5-\u03B2\u03B1\u03C3\u03B7-\u03C4\u03BF-blake3" tabindex="-1"><a class="header-anchor" href="#\u03B4\u03B5\u03BD\u03C4\u03C1\u03BF-merkle-\u03BC\u03B5-\u03B2\u03B1\u03C3\u03B7-\u03C4\u03BF-blake3" aria-hidden="true">#</a> \u0394\u03AD\u03BD\u03C4\u03C1\u03BF Merkle \u03BC\u03B5 \u03B2\u03AC\u03C3\u03B7 \u03C4\u03BF blake3</h1><p>\u03A4\u03BF <a href="https://github.com/BLAKE3-team/BLAKE3" target="_blank" rel="noopener noreferrer">blake3</a> \u03B2\u03B1\u03C3\u03AF\u03B6\u03B5\u03C4\u03B1\u03B9 \u03C3\u03B5 \u03AD\u03BD\u03B1 \u03B4\u03AD\u03BD\u03C4\u03C1\u03BF merkle, \u03B1\u03BB\u03BB\u03AC \u03B7 \u03B5\u03BA\u03C4\u03B5\u03B8\u03B5\u03B9\u03BC\u03AD\u03BD\u03B7 \u03B4\u03B9\u03B5\u03C0\u03B1\u03C6\u03AE \u03B4\u03B5\u03BD \u03B5\u03BE\u03AC\u03B3\u03B5\u03B9 \u03C4\u03BF \u03B4\u03AD\u03BD\u03C4\u03C1\u03BF merkle.</p><p><a href="https://github.com/oconnor663/bao" target="_blank" rel="noopener noreferrer">\u03A4\u03BF bao</a> \u03C5\u03BB\u03BF\u03C0\u03BF\u03B9\u03B5\u03AF \u03C4\u03B7\u03BD \u03B5\u03C0\u03B9\u03BA\u03CD\u03C1\u03C9\u03C3\u03B7 \u03C1\u03BF\u03AE\u03C2 blake3, \u03B1\u03BB\u03BB\u03AC \u03B4\u03B5\u03BD \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03B1\u03BB\u03BB\u03AC\u03BE\u03B5\u03B9 \u03C4\u03BF \u03BC\u03AD\u03B3\u03B5\u03B8\u03BF\u03C2 \u03C4\u03C9\u03BD \u03C5\u03C0\u03BF\u03BA\u03B5\u03AF\u03BC\u03B5\u03BD\u03C9\u03BD <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">\u03C4\u03B5\u03BC\u03B1\u03C7\u03AF\u03C9\u03BD</a> (\u03B2\u03BB. <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">\u03C5\u03C0\u03BF\u03C3\u03C4\u03AE\u03C1\u03B9\u03BE\u03B7 \u03BC\u03B5\u03B3\u03B1\u03BB\u03CD\u03C4\u03B5\u03C1\u03C9\u03BD &quot;\u03BF\u03BC\u03AC\u03B4\u03C9\u03BD \u03C4\u03B5\u03BC\u03B1\u03C7\u03AF\u03C9\u03BD&quot; \u03B3\u03B9\u03B1 \u03BC\u03B5\u03B9\u03C9\u03BC\u03AD\u03BD\u03B7 \u03B5\u03C0\u03B9\u03B2\u03AC\u03C1\u03C5\u03BD\u03C3\u03B7 \u03C7\u03CE\u03C1\u03BF\u03C5</a> ).</p><p>\u0391\u03C5\u03C4\u03CC \u03C3\u03B7\u03BC\u03B1\u03AF\u03BD\u03B5\u03B9 \u03CC\u03C4\u03B9 \u03C4\u03BF bao \u03BA\u03B1\u03C4\u03B1\u03BD\u03B1\u03BB\u03CE\u03BD\u03B5\u03B9 6% \u03B5\u03C0\u03B9\u03C0\u03BB\u03AD\u03BF\u03BD \u03B1\u03C0\u03BF\u03B8\u03B7\u03BA\u03B5\u03C5\u03C4\u03B9\u03BA\u03CC \u03C7\u03CE\u03C1\u03BF \u03B3\u03B9\u03B1 \u03C4\u03B7\u03BD \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03C4\u03BF\u03C5 \u03B4\u03AD\u03BD\u03C4\u03C1\u03BF\u03C5 merkle, \u03C4\u03BF \u03BF\u03C0\u03BF\u03AF\u03BF \u03B1\u03C0\u03BF\u03C4\u03B5\u03BB\u03B5\u03AF \u03C3\u03B7\u03BC\u03B1\u03BD\u03C4\u03B9\u03BA\u03AE \u03B5\u03C0\u03B9\u03B2\u03AC\u03C1\u03C5\u03BD\u03C3\u03B7 \u03B3\u03B9\u03B1 \u03AD\u03BD\u03B1 \u03BA\u03B1\u03C4\u03B1\u03BD\u03B5\u03BC\u03B7\u03BC\u03AD\u03BD\u03BF \u03B5\u03C5\u03C1\u03B5\u03C4\u03AE\u03C1\u03B9\u03BF \u03C0\u03B5\u03C1\u03B9\u03B5\u03C7\u03BF\u03BC\u03AD\u03BD\u03BF\u03C5.</p><p>\u0388\u03C4\u03C3\u03B9, \u03B5\u03C6\u03AC\u03C1\u03BC\u03BF\u03C3\u03B1 <a href="https://github.com/rmw-lib/blake3_merkle" target="_blank" rel="noopener noreferrer">\u03C4\u03BF blake3_merkle</a> \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C0\u03B1\u03C1\u03AC\u03B3\u03C9 32 bytes \u03BA\u03B1\u03C4\u03B1\u03BA\u03B5\u03C1\u03BC\u03B1\u03C4\u03B9\u03C3\u03BC\u03BF\u03CD \u03B1\u03BD\u03AC 1MB \u03C0\u03B5\u03C1\u03B9\u03B5\u03C7\u03BF\u03BC\u03AD\u03BD\u03BF\u03C5 \u03BC\u03B5 \u03AD\u03BD\u03B1 \u03C0\u03C1\u03CC\u03C3\u03B8\u03B5\u03C4\u03BF \u03BA\u03CC\u03C3\u03C4\u03BF\u03C2 \u03B1\u03C0\u03BF\u03B8\u03AE\u03BA\u03B5\u03C5\u03C3\u03B7\u03C2 0,3\u2031.</p><p>\u03A4\u03BF \u03B4\u03AD\u03BD\u03C4\u03C1\u03BF merkle \u03C0\u03B1\u03C1\u03AC\u03B3\u03B5\u03B9 \u03BA\u03B1\u03C4\u03B1\u03BA\u03B5\u03C1\u03BC\u03B1\u03C4\u03B9\u03C3\u03BC\u03BF\u03CD\u03C2 \u03C0\u03BF\u03C5 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C3\u03C5\u03BD\u03B5\u03C0\u03B5\u03AF\u03C2 \u03BC\u03B5 \u03C4\u03BF blake3.</p><p>\u038C\u03C4\u03B1\u03BD \u03C4\u03BF \u03C0\u03B5\u03C1\u03B9\u03B5\u03C7\u03CC\u03BC\u03B5\u03BD\u03BF \u03B5\u03AF\u03BD\u03B1\u03B9 \u03BC\u03B9\u03BA\u03C1\u03CC\u03C4\u03B5\u03C1\u03BF \u03AE \u03AF\u03C3\u03BF \u03C4\u03BF\u03C5 1MB, \u03C4\u03BF \u03B4\u03AD\u03BD\u03C4\u03C1\u03BF merkle \u03AD\u03C7\u03B5\u03B9 \u03BC\u03CC\u03BD\u03BF \u03AD\u03BD\u03B1\u03BD \u03BA\u03CC\u03BC\u03B2\u03BF \u03BA\u03B1\u03B9 \u03C4\u03BF hash \u03B1\u03C5\u03C4\u03BF\u03CD \u03C4\u03BF\u03C5 \u03BA\u03CC\u03BC\u03B2\u03BF\u03C5 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03AF\u03C3\u03BF \u03BC\u03B5 \u03C4\u03BF hash \u03C4\u03BF\u03C5 blake3.</p><p><code>./examples/main.rs</code> \u03A9\u03C2 \u03B5\u03BE\u03AE\u03C2 :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use blake3_merkle::Merkle;

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
</code></pre></div><p>\u0395\u03BA\u03C4\u03B5\u03BB\u03AD\u03C3\u03C4\u03B5 \u03C4\u03BF <code>./example.main.sh</code>\u03BA\u03B1\u03B9 \u03B7 \u03AD\u03BE\u03BF\u03B4\u03BF\u03C2 \u03AD\u03C7\u03B5\u03B9 \u03C9\u03C2 \u03B5\u03BE\u03AE\u03C2</p><div class="language-text ext-text"><pre class="language-text"><code>[examples/main.rs:14] &amp;merkle.li = [
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
