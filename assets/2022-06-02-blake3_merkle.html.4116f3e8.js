import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.040d9bb0.js";const t={},n=a(`<h1 id="merkle-tree-based-on-blake3" tabindex="-1"><a class="header-anchor" href="#merkle-tree-based-on-blake3" aria-hidden="true">#</a> merkle tree based on blake3</h1><p><a href="https://github.com/BLAKE3-team/BLAKE3" target="_blank" rel="noopener noreferrer">blake3</a> is based on merkle tree, but the exposed interface cannot export merkle tree.</p><p><a href="https://github.com/oconnor663/bao" target="_blank" rel="noopener noreferrer">bao</a> implements blake3 streaming validation, but cannot resize the underlying <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">chunks</a> (see <a href="https://github.com/oconnor663/bao/issues/34" target="_blank" rel="noopener noreferrer">support larger &quot;chunk groups&quot; for reduced space overhead</a> ).</p><p>That is, bao consumes 6% extra storage space to record the merkle tree, which is a significant overhead for a distributed content index.</p><p>So, I implemented <a href="https://github.com/rmw-lib/blake3_merkle" target="_blank" rel="noopener noreferrer">blake3_merkle</a> to derive a 32-byte hash for every 1MB of content with an additional storage overhead of 0.3\u2031.</p><p>The merkle tree can generate hash values consistent with blake3.</p><p>When the content is less than or equal to 1MB, the merkle tree has only one node and the hash value of this node is equal to the hash value of blake3.</p><p><code>./examples/main.rs</code> As follows :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use blake3_merkle::Merkle;

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
</code></pre></div><p>Run <code>./example.main.sh</code>and the output is as follows</p><div class="language-text ext-text"><pre class="language-text"><code>[examples/main.rs:14] &amp;merkle.li = [
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
</code></pre></div>`,11);function r(o,s){return n}var c=e(t,[["render",r],["__file","2022-06-02-blake3_merkle.html.vue"]]);export{c as default};
