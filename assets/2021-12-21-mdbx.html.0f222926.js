import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{e as n}from"./app.87d927ab.js";const e={},s=n(`<h1 id="libmdbx-\u7528\u306E-rust-\u30CF\u309A\u30C3\u30B1\u30FC\u30B7\u3099" tabindex="-1"><a class="header-anchor" href="#libmdbx-\u7528\u306E-rust-\u30CF\u309A\u30C3\u30B1\u30FC\u30B7\u3099" aria-hidden="true">#</a> libmdbx \u7528\u306E rust \u30D1\u30C3\u30B1\u30FC\u30B8</h1><p><a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">libmdbx</a> \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E <code>rust</code> \u30E9\u30C3\u30D1\u30FC\u3067\u3059\u3002</p><hr><p>\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA :</p><p>[[toc]]\u3067\u3059\u3002</p><hr><h2 id="\u5F15\u7528\u5143" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528\u5143" aria-hidden="true">#</a> \u5F15\u7528\u5143</h2><p><a href="https://rmw.link" target="_blank" rel="noopener noreferrer">rmw.link</a>\u300D\u3092\u66F8\u3044\u3066\u3044\u308B\u3068\u304D\u306B\u3001\u7D44\u307F\u8FBC\u307F\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u5FC5\u8981\u3060\u3068\u611F\u3058\u307E\u3057\u305F\u3002</p><p>\u983B\u7E41\u306B\u8A18\u9332\u3001\u8AAD\u307F\u8FBC\u307F\u3001\u66F8\u304D\u8FBC\u307F\u3092\u884C\u3046\u306B\u306F\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30B9\u30EB\u30FC\u30D7\u30C3\u30C8\u304C\u5FC5\u8981\u306A\u305F\u3081\u3001<code>sqlite3</code> \u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u3092\u91CD\u8996\u3059\u308B\u3068\u5148\u9032\u7684\u3059\u304E\u308B\u306E\u3060\u3002</p><p>\u305D\u306E\u305F\u3081\u3001\u4F4E\u30EC\u30D9\u30EB\u306E\u30AD\u30FC\u30FB\u30D0\u30EA\u30E5\u30FC\u30FB\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u3088\u308A\u9069\u5207\u3067\u3057\u305F<a href="https://discourse.world/h/2020/06/05/Shine-and-poverty-key-value-database-LMDB-in-applications-for-iOS" target="_blank" rel="noopener noreferrer">\uFF08lmdb\u306Fsqlite\u306E10\u500D\u9AD8\u901F</a>\u3067\u3059\uFF09\u3002</p><p><img src="//irmw.gumlet.io/yxZV8x.jpg" alt=""></p><p>\u7D50\u5C40\u3001\u9B54\u6CD5\u7248\u300C <code>lmdb</code> \u300D <code>mdbx</code> \u3092\u9078\u3073\u307E\u3057\u305F\u3002</p><p><code>mdbx</code> \u73FE\u5728\u3001\u65E2\u5B58\u306E <code>rust</code> \u306E <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">mdbx-rs (mdbx-sys)</a>\u306E\u30D1\u30C3\u30B1\u30FC\u30B8\u306F\u3001 <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">Windows \u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066</a>\u3044\u306A\u3044\u306E\u3067\u3001Windows \u3092\u30B5\u30DD\u30FC\u30C8\u3057\u305F\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u30D1\u30C3\u30B1\u30FC\u30B8\u5316\u3059\u308B\u3053\u3068\u3092\u81EA\u3089\u306B\u8AB2\u3057\u305F\u306E\u3067\u3059\u3002</p><p>\u30AB\u30B9\u30BF\u30E0Rust\u30BF\u30A4\u30D7\u306E\u4FDD\u5B58\u306B\u5BFE\u5FDC\u3002 \u30DE\u30EB\u30C1\u30B9\u30EC\u30C3\u30C9\u30A2\u30AF\u30BB\u30B9\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002</p><p>\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306F <code>lazy_static</code> \u3092\u4F7F\u3063\u3066\u30E2\u30B8\u30E5\u30FC\u30EB\u3067\u5B9A\u7FA9\u3057\u3001.NET Framework \u306E\u3088\u3046\u306A\u3082\u306E\u3067\u7C21\u5358\u306B\u5C0E\u5165\u30FB\u5229\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
</code></pre></div><h2 id="libmdbx\u3068\u306F" tabindex="-1"><a class="header-anchor" href="#libmdbx\u3068\u306F" aria-hidden="true">#</a> libmdbx\u3068\u306F\uFF1F</h2><p><a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">mdbx\u306F</a> \u3001\u30ED\u30B7\u30A2\u306E <a href="https://vk.com/erthink" target="_blank" rel="noopener noreferrer">\u041B\u0435\u043E\u043D\u0438\u0434 \u042E\u0440\u044C\u0435\u0432 (Leonid Yuriev)</a>\u306B\u3088\u308Blmdb\u3092\u30D9\u30FC\u30B9\u3068\u3057\u305F\u4E8C\u6B21\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3067\u3059\u3002</p><p><a href="https://en.wikipedia.org/wiki/Lightning_Memory-Mapped_Database" target="_blank" rel="noopener noreferrer">lmdb\u306F</a> \u8D85\u9AD8\u901F\u306E\u7D44\u307F\u8FBC\u307F\u578B\u30AD\u30FC\u30FB\u30D0\u30EA\u30E5\u30FC\u30FB\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3067\u3059\u3002</p><p>\u5168\u6587\u691C\u7D22\u30A8\u30F3\u30B8\u30F3 <a href="https://docs.meilisearch.com/reference/under_the_hood/storage.html#measured-disk-usage" target="_blank" rel="noopener noreferrer">MeiliSearch\u306F</a> lmdb\u3092\u30D9\u30FC\u30B9\u306B\u3057\u3066\u3044\u307E\u3059\u3002</p><p><a href="https://docs.nvidia.com/deeplearning/dali/user-guide/docs/examples/general/data_loading/dataloading_lmdb.html" target="_blank" rel="noopener noreferrer">\u6DF1\u5C64\u5B66\u7FD2\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u306Ecaffe\u3082\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u3068\u3057\u3066lmdb\u3092\u4F7F\u7528\u3057\u3066</a>\u3044\u307E\u3059\u3002</p><p><a href="https://github.com/erthink/libmdbx#added-features" target="_blank" rel="noopener noreferrer">mdbx\u306F\u3001\u7D44\u307F\u8FBC\u307F\u6027\u80FD\u30C6\u30B9\u30C8\u30D9\u30F3\u30C1\u30DE\u30FC\u30AFioarena\u306B\u304A\u3044\u3066\u3001lmdb\u3088\u308A30%\u9AD8\u901F</a> \u3067\u3059\u3002</p><p><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-1.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-3.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-4.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-5.png" alt=""></p><p>\u540C\u6642\u306B\u3001mdbx\u306F<a href="https://github.com/erthink/libmdbx#improvements-beyond-lmdb" target="_blank" rel="noopener noreferrer">lmdb\u306E\u6B20\u70B9\u306E\u591A\u304F\u3092\u6539\u5584\u3057\u3066</a>\u3044\u308B\u305F\u3081\u3001Erigon\uFF08\u6B21\u4E16\u4EE3\u30A4\u30FC\u30B5\u30EA\u30A2\u30E0\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\uFF09\u306F\u6700\u8FD1LMDB\u304B\u3089MDBX\u306B\u5909\u66F4\u3057\u307E\u3057\u305F<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>\u3002</p><h2 id="\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB" tabindex="-1"><a class="header-anchor" href="#\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB" aria-hidden="true">#</a> \u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB</h2><h3 id="\u30B5\u30F3\u30D5\u309A\u30EB\u306E\u5B9F\u884C\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u30B5\u30F3\u30D5\u309A\u30EB\u306E\u5B9F\u884C\u65B9\u6CD5" aria-hidden="true">#</a> \u30B5\u30F3\u30D7\u30EB\u306E\u5B9F\u884C\u65B9\u6CD5</h3><p>\u307E\u305A\u3001\u30B3\u30FC\u30C9\u30D9\u30FC\u30B9\u3092\u30AF\u30ED\u30FC\u30F3\u3057\u307E\u3059\u3002 <code>git clone git@github.com:rmw-lib/mdbx.git --depth=1 &amp;&amp; cd mdbx</code></p><p>\u305D\u306E\u5F8C\u3001 <code>cargo run --example 01</code> \u3001\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002 <code>examples/01.rs</code></p><p>\u81EA\u5206\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u3042\u308C\u3070\u3001\u307E\u305A\u305D\u308C\u3092\u5B9F\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>cargo install cargo-edit
cargo add mdbx lazy_static ctor paste
</code></pre></div><h3 id="\u4F8B1-set-key-val-\u3092\u66F8\u304D\u3001\u8AAD\u3080-get-key" tabindex="-1"><a class="header-anchor" href="#\u4F8B1-set-key-val-\u3092\u66F8\u304D\u3001\u8AAD\u3080-get-key" aria-hidden="true">#</a> \u4F8B1 : <code>set(key,val)</code> \u3092\u66F8\u304D\u3001\u8AAD\u3080 <code>.get(key)</code></h3><p>\u7C21\u5358\u306A\u4F8B\u3092\u898B\u3066\u307F\u307E\u3057\u3087\u3046 <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/01.rs" target="_blank" rel="noopener noreferrer">/01.rs</a></p><h4 id="\u30B3\u30FC\u30C8\u3099" tabindex="-1"><a class="header-anchor" href="#\u30B3\u30FC\u30C8\u3099" aria-hidden="true">#</a> \u30B3\u30FC\u30C9</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(
  MDBX,
  {
    let mut db_path = std::env::current_exe().unwrap();
    db_path.set_extension(&quot;mdb&quot;);
    println!(&quot;mdbx file path {}&quot;, db_path.display());
    db_path.into()
  },
  r,
  w
);

mdbx! {
  MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5909\u6570\u540D Env
  Test // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30B9\u30C8
}

fn main() -&gt; Result&lt;()&gt; {
  // libmdbx \u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u756A\u53F7\u3092\u51FA\u529B\u3057\u307E\u3059\u3002
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u30DE\u30EB\u30C1\u30B9\u30EC\u30C3\u30C9\u3067\u306E\u8AAD\u307F\u66F8\u304D\u304C\u53EF\u80FD
  let t = std::thread::spawn(|| {
    let tx = w!();
    let test = tx | Test;
    test.set([1, 2], [6])?;
    println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

    match test.get([1, 2])? {
      Some(val) =&gt; {
        let t: &amp;[u8] = &amp;val;
        println!(&quot;{:?}&quot;, t);
      }
      None =&gt; unreachable!(),
    }
    Ok(())
  });

  t.join().unwrap()?;

  Ok(())
}
</code></pre></div><h4 id="\u51FA\u529B\u306E\u5B9F\u884C" tabindex="-1"><a class="header-anchor" href="#\u51FA\u529B\u306E\u5B9F\u884C" aria-hidden="true">#</a> \u51FA\u529B\u306E\u5B9F\u884C</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/01.mdb
mdbx version https://github.com/erthink/libmdbx/releases/tag/v0.11.2
test1 get Ok(Some(Bin([6])))
[6]
</code></pre></div><h4 id="\u30B3\u30FC\u30C8\u3099\u306E\u8AAC\u660E" tabindex="-1"><a class="header-anchor" href="#\u30B3\u30FC\u30C8\u3099\u306E\u8AAC\u660E" aria-hidden="true">#</a> \u30B3\u30FC\u30C9\u306E\u8AAC\u660E</h4><h5 id="env-rw-\u30C6\u3099\u30FC\u30BF\u30D8\u3099\u30FC\u30B9\u306E\u5B9A\u7FA9" tabindex="-1"><a class="header-anchor" href="#env-rw-\u30C6\u3099\u30FC\u30BF\u30D8\u3099\u30FC\u30B9\u306E\u5B9A\u7FA9" aria-hidden="true">#</a> <code>env_rw!</code> \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5B9A\u7FA9</h5><p>\u30B3\u30FC\u30C9\u306F\u30DE\u30AF\u30ED env_rw \u3067\u59CB\u307E\u308A\u30014\u3064\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u6301\u3061\u307E\u3059\u3002</p><ol><li><p>\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u74B0\u5883\u306E\u5909\u6570\u540D</p></li><li><p><a href="https://docs.rs/mdbx/latest/src/mdbx/env.rs.html#27-35" target="_blank" rel="noopener noreferrer">mdbx:: env:: Config</a> \u3068\u3044\u3046\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002</p></li></ol><p><code>Env</code> \u306F <code>From&lt;Into&lt;PathBuf&gt;&gt;</code>\u3092\u5B9F\u88C5\u3057\u3066\u3044\u308B\u306E\u3067\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30D1\u30B9\u306F <code>into()</code> \u3067\u826F\u3044\u3068\u3057\u3066\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u69CB\u6210\u3092\u6B21\u306E\u3088\u3046\u306B\u3057\u307E\u3059\u3002</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(
MDBX,
{
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
},
r,
w
);

mdbx! {
MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5909\u6570\u540D Env
Test // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30B9\u30C8
}

fn main() -&gt; Result&lt;()&gt; {
// libmdbx \u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u756A\u53F7\u3092\u51FA\u529B\u3057\u307E\u3059\u3002
unsafe {
  println!(
    &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
    mdbx_version.major, mdbx_version.minor, mdbx_version.release
  );
}

// \u30DE\u30EB\u30C1\u30B9\u30EC\u30C3\u30C9\u3067\u306E\u8AAD\u307F\u66F8\u304D\u304C\u53EF\u80FD
let t = std::thread::spawn(|| {
  let tx = w!();
  let test = tx | Test;
  test.set([1, 2], [6])?;
  println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

  match test.get([1, 2])? {
    Some(val) =&gt; {
      let t: &amp;[u8] = &amp;val;
      println!(&quot;{:?}&quot;, t);
    }
    None =&gt; unreachable!(),
  }
  Ok(())
});

t.join().unwrap()?;

Ok(())
}
#[derive(Clone, Debug)]
pub struct Config {
  path: PathBuf,
  mode: ffi::mdbx_mode_t,
  flag: flag::ENV,
  sync_period: u64,
  sync_bytes: u64,
  max_db: u64,
  pagesize: isize,
}

lazy_static! {
  pub static ref ENV_CONFIG_DEFAULT: Config = Config {
    path:PathBuf::new(),
    mode: 0o600,
    //https://github.com/erthink/libmdbx/issues/248
    sync_period : 65536, // 1/65536\u79D2\u306E\u9593\u306B
    sync_bytes : 65536,
    max_db : 256,
    flag : (
        flag::ENV::MDBX_EXCLUSIVE
      | flag::ENV::MDBX_LIFORECLAIM
      | flag::ENV::MDBX_COALESCE
      | flag::ENV::MDBX_NOMEMINIT
      | flag::ENV::MDBX_NOSUBDIR
      | flag::ENV::MDBX_SAFE_NOSYNC
      // | flag::ENV::MDBX_SYNC_DURABLE
    ),
    pagesize:-1
  };
}
</code></pre></div><p><code>max_db</code> \u3053\u306E\u8A2D\u5B9A\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092<a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">\u958B\u304F</a>\u305F\u3073\u306B\u30EA\u30BB\u30C3\u30C8\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u304C\u3001\u3042\u307E\u308A\u8A2D\u5B9A\u3057\u3059\u304E\u308B\u3068\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306B\u5F71\u97FF\u304C\u51FA\u308B\u306E\u3067\u3001\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p><p>\u4ED6\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u610F\u5473\u306B\u3064\u3044\u3066\u306F\u3001 <a href="https://erthink.github.io/libmdbx/group__c__opening.html#ga9138119a904355d245777c4119534061" target="_blank" rel="noopener noreferrer">libmdbx\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092</a> \u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p><ol start="3"><li><p>\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u8AAD\u307F\u53D6\u308A\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u30DE\u30AF\u30ED\u306E\u540D\u524D\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u306F <code>r</code></p></li><li><p>\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u66F8\u304D\u8FBC\u307F\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u30DE\u30AF\u30ED\u306E\u540D\u524D\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u306F <code>w</code></p></li></ol><p>3,4\u30D1\u30E9\u30E1\u30FC\u30BF\u306F\u7701\u7565\u53EF\u80FD\u3067\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002</p><h5 id="\u30DE\u30AF\u30ED\u306E\u62E1\u5927" tabindex="-1"><a class="header-anchor" href="#\u30DE\u30AF\u30ED\u306E\u62E1\u5927" aria-hidden="true">#</a> \u30DE\u30AF\u30ED\u306E\u62E1\u5927</h5><p>\u30DE\u30AF\u30ED\u30DE\u30B8\u30C3\u30AF\u304C\u4F55\u3092\u3057\u3066\u3044\u308B\u306E\u304B\u898B\u305F\u3044\u5834\u5408\u306F\u3001 <code>cargo expand --example 01</code> \u30DE\u30AF\u30ED\u3067\u5C55\u958B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u306E\u3067\u3001\u5148\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u304A\u304F\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 <code>cargo install cargo-expand</code></p><p>\u5C55\u958B\u3055\u308C\u305F\u30B3\u30FC\u30C9\u306E\u753B\u9762\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059\u3002</p><p><img src="//irmw.gumlet.io/PDzEtT.png" alt="PDzEtT"></p><h5 id="\u3068\u306B\u304B\u304F\u3001\u305D\u3057\u3066-lazy-static" tabindex="-1"><a class="header-anchor" href="#\u3068\u306B\u304B\u304F\u3001\u305D\u3057\u3066-lazy-static" aria-hidden="true">#</a> \u3068\u306B\u304B\u304F\u3001\u305D\u3057\u3066 lazy_static</h5><p>\u62E1\u5927\u3057\u305F\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8\u304B\u3089\u3001 <code>lazy_static</code> \u3068 <code>anyhow</code>\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u304C\u308F\u304B\u308A\u307E\u3059\u3002</p><p><a href="https://rustmagazine.github.io/rust_magazine_2021/chapter_2/rust_error_handle.html#thiserror--anyhow" target="_blank" rel="noopener noreferrer">anyhow\u306F</a> \u3001Rust\u306E\u30A8\u30E9\u30FC\u51E6\u7406\u30E9\u30A4\u30D6\u30E9\u30EA\u3067\u3059\u3002</p><p><a href="https://juejin.cn/post/7007336922817232927" target="_blank" rel="noopener noreferrer">lazy_static</a> \u306F\u3001\u521D\u671F\u5316\u3092\u9045\u5EF6\u3055\u305B\u305F\u9759\u7684\u5909\u6570\u3067\u3059\u3002</p><p>\u3053\u306E2\u3064\u306E\u30E9\u30A4\u30D6\u30E9\u30EA\u306F\u3054\u304F\u4E00\u822C\u7684\u306A\u3082\u306E\u306A\u306E\u3067\u3001\u3053\u3053\u3067\u306F\u5272\u611B\u3057\u307E\u3059\u3002</p><h5 id="\u30DE\u30AF\u30ED\u306Emdbx" tabindex="-1"><a class="header-anchor" href="#\u30DE\u30AF\u30ED\u306Emdbx" aria-hidden="true">#</a> \u30DE\u30AF\u30ED\u306Emdbx!</h5><p><a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html" target="_blank" rel="noopener noreferrer"><code>mdbx!</code></a> \u306F <a href="https://mp.weixin.qq.com/s/YT_HNFDCQ_IyocvBkRNJnA" target="_blank" rel="noopener noreferrer">\u30D7\u30ED\u30B7\u30FC\u30B8\u30E3\u30DE\u30AF\u30ED</a>\u3067\u3059\u3002</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(
  MDBX,
  {
    let mut db_path = std::env::current_exe().unwrap();
    db_path.set_extension(&quot;mdb&quot;);
    println!(&quot;mdbx file path {}&quot;, db_path.display());
    db_path.into()
  },
  r,
  w
);

mdbx! {
  MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5909\u6570\u540D Env
  Test // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30B9\u30C8
}

fn main() -&gt; Result&lt;()&gt; {
  // libmdbx \u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u756A\u53F7\u3092\u51FA\u529B\u3057\u307E\u3059\u3002
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u30DE\u30EB\u30C1\u30B9\u30EC\u30C3\u30C9\u3067\u306E\u8AAD\u307F\u66F8\u304D\u304C\u53EF\u80FD
  let t = std::thread::spawn(|| {
    let tx = w!();
    let test = tx | Test;
    test.set([1, 2], [6])?;
    println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

    match test.get([1, 2])? {
      Some(val) =&gt; {
        let t: &amp;[u8] = &amp;val;
        println!(&quot;{:?}&quot;, t);
      }
      None =&gt; unreachable!(),
    }
    Ok(())
  });

  t.join().unwrap()?;

  Ok(())
}
  #[derive(Clone, Debug)]
  pub struct Config {
    path: PathBuf,
    mode: ffi::mdbx_mode_t,
    flag: flag::ENV,
    sync_period: u64,
    sync_bytes: u64,
    max_db: u64,
    pagesize: isize,
  }
  
  lazy_static! {
    pub static ref ENV_CONFIG_DEFAULT: Config = Config {
      path:PathBuf::new(),
      mode: 0o600,
      //https://github.com/erthink/libmdbx/issues/248
      sync_period : 65536, // 1/65536\u79D2\u306E\u9593\u306B
      sync_bytes : 65536,
      max_db : 256,
      flag : (
          flag::ENV::MDBX_EXCLUSIVE
        | flag::ENV::MDBX_LIFORECLAIM
        | flag::ENV::MDBX_COALESCE
        | flag::ENV::MDBX_NOMEMINIT
        | flag::ENV::MDBX_NOSUBDIR
        | flag::ENV::MDBX_SAFE_NOSYNC
        // | flag::ENV::MDBX_SYNC_DURABLE
      ),
      pagesize:-1
    };
  }
mdbx! {
 MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5909\u6570\u540D Env
 Test // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30B9\u30C8
}
</code></pre></div><p>1\u884C\u76EE\u306F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u74B0\u5883\u306E\u5909\u6570\u540D</p><p>2\u884C\u76EE\u306F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u540D\u524D</p><p>\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306F\u8907\u6570\u3042\u3063\u3066\u3082\u3088\u304F\u3001\u305D\u308C\u305E\u308C\u306B1\u884C\u305A\u3064</p><h5 id="\u30B9\u30EC\u30C3\u30C8\u3099\u3068\u30C8\u30E9\u30F3\u30B5\u3099\u30AF\u30B7\u30E7\u30F3" tabindex="-1"><a class="header-anchor" href="#\u30B9\u30EC\u30C3\u30C8\u3099\u3068\u30C8\u30E9\u30F3\u30B5\u3099\u30AF\u30B7\u30E7\u30F3" aria-hidden="true">#</a> \u30B9\u30EC\u30C3\u30C9\u3068\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3</h5><p>\u4E0A\u8A18\u306E\u30B3\u30FC\u30C9\u3067\u306F\u3001\u30DE\u30EB\u30C1\u30B9\u30EC\u30C3\u30C9\u306B\u3088\u308B\u8AAD\u307F\u66F8\u304D\u3092\u5B9F\u6F14\u3057\u3066\u3044\u307E\u3059\u3002</p><p><strong>\u30B9\u30EC\u30C3\u30C9\u304C\u8907\u6570\u306E\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u3092\u958B\u3044\u3066\u3044\u308B\u5834\u5408\u3001\u30D7\u30ED\u30B0\u30E9\u30E0\u306F\u30AF\u30E9\u30C3\u30B7\u30E5\u3057\u307E\u3059</strong>\u3002</p><p>\u30B9\u30B3\u30FC\u30D7\u306E\u7D42\u4E86\u6642\u306B\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u304C\u30B3\u30DF\u30C3\u30C8\u3055\u308C\u307E\u3059\u3002</p><h5 id="\u30CF\u3099\u30A4\u30CA\u30EA\u30C6\u3099\u30FC\u30BF\u306E\u8AAD\u307F\u51FA\u3057\u3068\u66F8\u304D\u8FBC\u307F" tabindex="-1"><a class="header-anchor" href="#\u30CF\u3099\u30A4\u30CA\u30EA\u30C6\u3099\u30FC\u30BF\u306E\u8AAD\u307F\u51FA\u3057\u3068\u66F8\u304D\u8FBC\u307F" aria-hidden="true">#</a> \u30D0\u30A4\u30CA\u30EA\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u51FA\u3057\u3068\u66F8\u304D\u8FBC\u307F</h5><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(
  MDBX,
  {
    let mut db_path = std::env::current_exe().unwrap();
    db_path.set_extension(&quot;mdb&quot;);
    println!(&quot;mdbx file path {}&quot;, db_path.display());
    db_path.into()
  },
  r,
  w
);

mdbx! {
  MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5909\u6570\u540D Env
  Test // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30B9\u30C8
}

fn main() -&gt; Result&lt;()&gt; {
  // libmdbx \u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u756A\u53F7\u3092\u51FA\u529B\u3057\u307E\u3059\u3002
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u30DE\u30EB\u30C1\u30B9\u30EC\u30C3\u30C9\u3067\u306E\u8AAD\u307F\u66F8\u304D\u304C\u53EF\u80FD
  let t = std::thread::spawn(|| {
    let tx = w!();
    let test = tx | Test;
    test.set([1, 2], [6])?;
    println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

    match test.get([1, 2])? {
      Some(val) =&gt; {
        let t: &amp;[u8] = &amp;val;
        println!(&quot;{:?}&quot;, t);
      }
      None =&gt; unreachable!(),
    }
    Ok(())
  });

  t.join().unwrap()?;

  Ok(())
}
  #[derive(Clone, Debug)]
  pub struct Config {
    path: PathBuf,
    mode: ffi::mdbx_mode_t,
    flag: flag::ENV,
    sync_period: u64,
    sync_bytes: u64,
    max_db: u64,
    pagesize: isize,
  }
  
  lazy_static! {
    pub static ref ENV_CONFIG_DEFAULT: Config = Config {
      path:PathBuf::new(),
      mode: 0o600,
      //https://github.com/erthink/libmdbx/issues/248
      sync_period : 65536, // 1/65536\u79D2\u306E\u9593\u306B
      sync_bytes : 65536,
      max_db : 256,
      flag : (
          flag::ENV::MDBX_EXCLUSIVE
        | flag::ENV::MDBX_LIFORECLAIM
        | flag::ENV::MDBX_COALESCE
        | flag::ENV::MDBX_NOMEMINIT
        | flag::ENV::MDBX_NOSUBDIR
        | flag::ENV::MDBX_SAFE_NOSYNC
        // | flag::ENV::MDBX_SYNC_DURABLE
      ),
      pagesize:-1
    };
  }
mdbx! {
 MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5909\u6570\u540D Env
 Test // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30B9\u30C8
}
let tx = w!();
let test = tx | Test;
test.set([1, 2], [6])?;
println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

match test.get([1, 2])? {
 Some(val) =&gt; {
  let t:&amp;[u8] = &amp;val;
  println!(&quot;{:?}&quot;,t);
 },
 None =&gt; unreachable!()
}
</code></pre></div><p><code>set</code> \u306F\u66F8\u304D\u8FBC\u307F\uFF0C<code>get</code> \u306F\u8AAD\u307F\u51FA\u3057\u3067\u3042\u308B\u3002 <a href="https://doc.rust-lang.org/std/convert/trait.AsRef.html" target="_blank" rel="noopener noreferrer"><code>AsRef&lt;[u8]&gt;</code></a> \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u66F8\u304D\u8FBC\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p><p><code>get</code> \u51FA\u3066\u304F\u308B\u306E\u306F <code>Ok(Some(Bin([6])))</code>\u3001 <code>&amp;[u8]</code>\u306B\u5909\u63DB\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p><h3 id="\u4F8B2-\u30C6\u3099\u30FC\u30BF\u578B\u3001\u30C6\u3099\u30FC\u30BF\u30D8\u3099\u30FC\u30B9\u30D5\u30E9\u30AF\u3099\u3001\u524A\u9664\u3001\u30C8\u30E9\u30CF\u3099\u30FC\u30B5\u30EB" tabindex="-1"><a class="header-anchor" href="#\u4F8B2-\u30C6\u3099\u30FC\u30BF\u578B\u3001\u30C6\u3099\u30FC\u30BF\u30D8\u3099\u30FC\u30B9\u30D5\u30E9\u30AF\u3099\u3001\u524A\u9664\u3001\u30C8\u30E9\u30CF\u3099\u30FC\u30B5\u30EB" aria-hidden="true">#</a> \u4F8B2\uFF1A\u30C7\u30FC\u30BF\u578B\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30D5\u30E9\u30B0\u3001\u524A\u9664\u3001\u30C8\u30E9\u30D0\u30FC\u30B5\u30EB</h3><p>2\u756A\u76EE\u306E\u4F8B\u3092\u898B\u3066\u307F\u307E\u3057\u3087\u3046 <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">/02.rs</a> \u3002</p><p>\u3053\u306E\u4F8B\u3067\u306F\u3001<code>env_rw!</code> \u304C\u7701\u7565\u3055\u308C\u3001\u7B2C3\u3001\u7B2C4\u5F15\u6570\uFF08<code>r</code>, <code>w</code>\uFF09\u304C\u7701\u7565\u3055\u308C\u3066\u3044\u307E\u3059\u3002</p><h4 id="\u30B3\u30FC\u30C8\u3099-1" tabindex="-1"><a class="header-anchor" href="#\u30B3\u30FC\u30C8\u3099-1" aria-hidden="true">#</a> \u30B3\u30FC\u30C9</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(
  MDBX,
  {
    let mut db_path = std::env::current_exe().unwrap();
    db_path.set_extension(&quot;mdb&quot;);
    println!(&quot;mdbx file path {}&quot;, db_path.display());
    db_path.into()
  },
  r,
  w
);

mdbx! {
  MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5909\u6570\u540D Env
  Test // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30B9\u30C8
}

fn main() -&gt; Result&lt;()&gt; {
  // libmdbx \u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u756A\u53F7\u3092\u51FA\u529B\u3057\u307E\u3059\u3002
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u30DE\u30EB\u30C1\u30B9\u30EC\u30C3\u30C9\u3067\u306E\u8AAD\u307F\u66F8\u304D\u304C\u53EF\u80FD
  let t = std::thread::spawn(|| {
    let tx = w!();
    let test = tx | Test;
    test.set([1, 2], [6])?;
    println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

    match test.get([1, 2])? {
      Some(val) =&gt; {
        let t: &amp;[u8] = &amp;val;
        println!(&quot;{:?}&quot;, t);
      }
      None =&gt; unreachable!(),
    }
    Ok(())
  });

  t.join().unwrap()?;

  Ok(())
}
  #[derive(Clone, Debug)]
  pub struct Config {
    path: PathBuf,
    mode: ffi::mdbx_mode_t,
    flag: flag::ENV,
    sync_period: u64,
    sync_bytes: u64,
    max_db: u64,
    pagesize: isize,
  }
  
  lazy_static! {
    pub static ref ENV_CONFIG_DEFAULT: Config = Config {
      path:PathBuf::new(),
      mode: 0o600,
      //https://github.com/erthink/libmdbx/issues/248
      sync_period : 65536, // 1/65536\u79D2\u306E\u9593\u306B
      sync_bytes : 65536,
      max_db : 256,
      flag : (
          flag::ENV::MDBX_EXCLUSIVE
        | flag::ENV::MDBX_LIFORECLAIM
        | flag::ENV::MDBX_COALESCE
        | flag::ENV::MDBX_NOMEMINIT
        | flag::ENV::MDBX_NOSUBDIR
        | flag::ENV::MDBX_SAFE_NOSYNC
        // | flag::ENV::MDBX_SYNC_DURABLE
      ),
      pagesize:-1
    };
  }
mdbx! {
 MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5909\u6570\u540D Env
 Test // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30B9\u30C8
}
let tx = w!();
let test = tx | Test;
test.set([1, 2], [6])?;
println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

match test.get([1, 2])? {
 Some(val) =&gt; {
  let t:&amp;[u8] = &amp;val;
  println!(&quot;{:?}&quot;,t);
 },
 None =&gt; unreachable!()
}
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
});

mdbx! {
  MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9ENV\u306E\u5909\u6570\u540D
  Test1
  Test2
    key Str
    val Str
  Test3
    key i32
    val u64
  Test4
    key u64
    val u16
    flag DUPSORT
}

fn main() -&gt; Result&lt;()&gt; {
  // \u30AF\u30A4\u30C3\u30AF\u30E9\u30A4\u30C8
  w!(Test1.set [2, 3],[4, 5]);

  // \u30AF\u30A4\u30C3\u30AF\u30EA\u30FC\u30C9
  match r!(Test1.get [2, 3]) {
    Some(r) =&gt; {
      println!(
        &quot;\\nu16::from_le_bytes({:?}) = {}&quot;,
        r,
        u16::from_le_bytes((*r).try_into()?)
      );
    }
    None =&gt; unreachable!(),
  }

  // \u540C\u4E00\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u5185\u3067\u8907\u6570\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u5BFE\u3057\u3066\u8907\u6570\u306E\u64CD\u4F5C\u3092\u884C\u3046\u3053\u3068\u304C\u53EF\u80FD
  {
    let tx = w!();
    let test1 = tx | Test1;

    test1.set(&amp;[9], &amp;[10, 12])?;
    test1.set([8, 1], [9])?;
    test1.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test1.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;

    println!(&quot;\\n-- loop test1&quot;);
    for (k, v) in test1 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    dbg!(test1.del_val([8, 1], [3])?);
    dbg!(test1.get([8, 1])?.unwrap());
    dbg!(test1.del_val([8, 1], [9])?);
    dbg!(test1.get([8, 1])?);

    dbg!(test1.del([9])?);
    dbg!(test1.get([9])?);
    dbg!(test1.del([9])?);

    let test2 = tx | Test2;
    test2.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test2.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;
    println!(&quot;\\n-- loop test2&quot;);
    for (k, v) in test2 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    let test3 = tx | Test3;

    test3.set(13, 32)?;
    test3.set(16, 32)?;
    test3.set(-15, 6)?;
    test3.set(-10, 6)?;
    test3.set(-12, 6)?;
    test3.set(0, 6)?;
    test3.set(10, 5)?;

    println!(&quot;\\n-- loop test3&quot;);
    for (k, v) in test3 {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    let test4 = tx | Test4;
    test4.set(10, 5)?;
    test4.set(10, 0)?;
    test4.set(13, 32)?;
    test4.set(16, 2)?;
    test4.set(16, 1)?;
    test4.set(16, 3)?;
    test4.set(0, 6)?;
    test4.set(10, 5)?;
    test4.set(0, 2)?;

    dbg!(test4.del_val(0, 2)?);
    dbg!(test4.del_val(0, 2)?);

    println!(&quot;\\n-- loop test4 rev&quot;);
    for (k, v) in test4.rev() {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    for i in test4.dup(16) {
      println!(&quot;dup(16) {:?}&quot;, i);
    }

    // \u30B9\u30B3\u30FC\u30D7\u7D42\u4E86\u6642\u306B\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u304C\u30B3\u30DF\u30C3\u30C8\u3055\u308C\u307E\u3059
  }

  Ok(())
}
</code></pre></div><h4 id="\u51FA\u529B\u306E\u5B9F\u884C-1" tabindex="-1"><a class="header-anchor" href="#\u51FA\u529B\u306E\u5B9F\u884C-1" aria-hidden="true">#</a> \u51FA\u529B\u306E\u5B9F\u884C</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/02.mdb

u16::from_le_bytes(Bin([4, 5])) = 1284

-- loop test1
[2] = [3]
[2, 3] = [4, 5]
[8, 1] = [9]
[9] = [10, 12]
[97, 98, 99] = [48, 49, 50]
[114, 109, 119, 46, 108, 105, 110, 107] = [68, 111, 119, 110, 32, 119, 105, 116, 104, 32, 68, 97, 116, 97, 32, 72, 101, 103, 101, 109, 111, 110, 121]
[examples/02.rs:57] test1.del_val([8, 1], [3])? = false
[examples/02.rs:58] test1.get([8, 1])?.unwrap() = Bin(
    [
        9,
    ],
)
[examples/02.rs:59] test1.del_val([8, 1], [9])? = true
[examples/02.rs:60] test1.get([8, 1])? = None
[examples/02.rs:62] test1.del([9])? = true
[examples/02.rs:63] test1.get([9])? = None
[examples/02.rs:64] test1.del([9])? = false

-- loop test2
abc = 012
rmw.link = Down with Data Hegemony

-- loop test3
0 = 6
10 = 5
13 = 32
16 = 32
-15 = 6
-12 = 6
-10 = 6
[examples/02.rs:100] test4.del_val(0, 2)? = true
[examples/02.rs:101] test4.del_val(0, 2)? = false

-- loop test4 rev
16 = 3
16 = 2
16 = 1
13 = 32
10 = 5
10 = 0
0 = 6
dup(16) 1
dup(16) 2
dup(16) 3
</code></pre></div><h4 id="\u30AF\u30A4\u30C3\u30AF\u30EA\u30FC\u30C8\u3099-\u30E9\u30A4\u30C8" tabindex="-1"><a class="header-anchor" href="#\u30AF\u30A4\u30C3\u30AF\u30EA\u30FC\u30C8\u3099-\u30E9\u30A4\u30C8" aria-hidden="true">#</a> \u30AF\u30A4\u30C3\u30AF\u30EA\u30FC\u30C9\uFF06\u30E9\u30A4\u30C8</h4><p>\u5358\u7D14\u306B1\u884C\u306E\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u66F8\u304D\u3057\u305F\u3044\u5834\u5408\u306F\u3001\u30DE\u30AF\u30ED\u306E\u69CB\u6587\u7CD6\u3092\u5229\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3002</p><p>\u30C7\u30FC\u30BF\u3092\u8AAD\u3080</p><div class="language-text ext-text"><pre class="language-text"><code>r!(Test1.get [2, 3])
</code></pre></div><p>\u66F8\u304D\u8FBC\u307F\u30C7\u30FC\u30BF</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(
  MDBX,
  {
    let mut db_path = std::env::current_exe().unwrap();
    db_path.set_extension(&quot;mdb&quot;);
    println!(&quot;mdbx file path {}&quot;, db_path.display());
    db_path.into()
  },
  r,
  w
);

mdbx! {
  MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5909\u6570\u540D Env
  Test // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30B9\u30C8
}

fn main() -&gt; Result&lt;()&gt; {
  // libmdbx \u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u756A\u53F7\u3092\u51FA\u529B\u3057\u307E\u3059\u3002
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u30DE\u30EB\u30C1\u30B9\u30EC\u30C3\u30C9\u3067\u306E\u8AAD\u307F\u66F8\u304D\u304C\u53EF\u80FD
  let t = std::thread::spawn(|| {
    let tx = w!();
    let test = tx | Test;
    test.set([1, 2], [6])?;
    println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

    match test.get([1, 2])? {
      Some(val) =&gt; {
        let t: &amp;[u8] = &amp;val;
        println!(&quot;{:?}&quot;, t);
      }
      None =&gt; unreachable!(),
    }
    Ok(())
  });

  t.join().unwrap()?;

  Ok(())
}
  #[derive(Clone, Debug)]
  pub struct Config {
    path: PathBuf,
    mode: ffi::mdbx_mode_t,
    flag: flag::ENV,
    sync_period: u64,
    sync_bytes: u64,
    max_db: u64,
    pagesize: isize,
  }
  
  lazy_static! {
    pub static ref ENV_CONFIG_DEFAULT: Config = Config {
      path:PathBuf::new(),
      mode: 0o600,
      //https://github.com/erthink/libmdbx/issues/248
      sync_period : 65536, // 1/65536\u79D2\u306E\u9593\u306B
      sync_bytes : 65536,
      max_db : 256,
      flag : (
          flag::ENV::MDBX_EXCLUSIVE
        | flag::ENV::MDBX_LIFORECLAIM
        | flag::ENV::MDBX_COALESCE
        | flag::ENV::MDBX_NOMEMINIT
        | flag::ENV::MDBX_NOSUBDIR
        | flag::ENV::MDBX_SAFE_NOSYNC
        // | flag::ENV::MDBX_SYNC_DURABLE
      ),
      pagesize:-1
    };
  }
mdbx! {
 MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5909\u6570\u540D Env
 Test // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30B9\u30C8
}
let tx = w!();
let test = tx | Test;
test.set([1, 2], [6])?;
println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

match test.get([1, 2])? {
 Some(val) =&gt; {
  let t:&amp;[u8] = &amp;val;
  println!(&quot;{:?}&quot;,t);
 },
 None =&gt; unreachable!()
}
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
});

mdbx! {
  MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9ENV\u306E\u5909\u6570\u540D
  Test1
  Test2
    key Str
    val Str
  Test3
    key i32
    val u64
  Test4
    key u64
    val u16
    flag DUPSORT
}

fn main() -&gt; Result&lt;()&gt; {
  // \u30AF\u30A4\u30C3\u30AF\u30E9\u30A4\u30C8
  w!(Test1.set [2, 3],[4, 5]);

  // \u30AF\u30A4\u30C3\u30AF\u30EA\u30FC\u30C9
  match r!(Test1.get [2, 3]) {
    Some(r) =&gt; {
      println!(
        &quot;\\nu16::from_le_bytes({:?}) = {}&quot;,
        r,
        u16::from_le_bytes((*r).try_into()?)
      );
    }
    None =&gt; unreachable!(),
  }

  // \u540C\u4E00\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u5185\u3067\u8907\u6570\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u5BFE\u3057\u3066\u8907\u6570\u306E\u64CD\u4F5C\u3092\u884C\u3046\u3053\u3068\u304C\u53EF\u80FD
  {
    let tx = w!();
    let test1 = tx | Test1;

    test1.set(&amp;[9], &amp;[10, 12])?;
    test1.set([8, 1], [9])?;
    test1.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test1.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;

    println!(&quot;\\n-- loop test1&quot;);
    for (k, v) in test1 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    dbg!(test1.del_val([8, 1], [3])?);
    dbg!(test1.get([8, 1])?.unwrap());
    dbg!(test1.del_val([8, 1], [9])?);
    dbg!(test1.get([8, 1])?);

    dbg!(test1.del([9])?);
    dbg!(test1.get([9])?);
    dbg!(test1.del([9])?);

    let test2 = tx | Test2;
    test2.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test2.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;
    println!(&quot;\\n-- loop test2&quot;);
    for (k, v) in test2 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    let test3 = tx | Test3;

    test3.set(13, 32)?;
    test3.set(16, 32)?;
    test3.set(-15, 6)?;
    test3.set(-10, 6)?;
    test3.set(-12, 6)?;
    test3.set(0, 6)?;
    test3.set(10, 5)?;

    println!(&quot;\\n-- loop test3&quot;);
    for (k, v) in test3 {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    let test4 = tx | Test4;
    test4.set(10, 5)?;
    test4.set(10, 0)?;
    test4.set(13, 32)?;
    test4.set(16, 2)?;
    test4.set(16, 1)?;
    test4.set(16, 3)?;
    test4.set(0, 6)?;
    test4.set(10, 5)?;
    test4.set(0, 2)?;

    dbg!(test4.del_val(0, 2)?);
    dbg!(test4.del_val(0, 2)?);

    println!(&quot;\\n-- loop test4 rev&quot;);
    for (k, v) in test4.rev() {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    for i in test4.dup(16) {
      println!(&quot;dup(16) {:?}&quot;, i);
    }

    // \u30B9\u30B3\u30FC\u30D7\u7D42\u4E86\u6642\u306B\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u304C\u30B3\u30DF\u30C3\u30C8\u3055\u308C\u307E\u3059
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
</code></pre></div><p>\u5168\u3066\u306F <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs\u306B</a> \u66F8\u304B\u308C\u3066\u3044\u308B\u3088\u3046\u306B\u3001\u4E00\u884C\u3067\u3002</p><h4 id="\u30C6\u3099\u30FC\u30BF\u578B" tabindex="-1"><a class="header-anchor" href="#\u30C6\u3099\u30FC\u30BF\u578B" aria-hidden="true">#</a> \u30C7\u30FC\u30BF\u578B</h4><p>examples/02 <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">.rs\u3067\u306F</a> \u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5B9A\u7FA9\u306F\u6B21\u306E\u3088\u3046\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(
  MDBX,
  {
    let mut db_path = std::env::current_exe().unwrap();
    db_path.set_extension(&quot;mdb&quot;);
    println!(&quot;mdbx file path {}&quot;, db_path.display());
    db_path.into()
  },
  r,
  w
);

mdbx! {
  MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5909\u6570\u540D Env
  Test // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30B9\u30C8
}

fn main() -&gt; Result&lt;()&gt; {
  // libmdbx \u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u756A\u53F7\u3092\u51FA\u529B\u3057\u307E\u3059\u3002
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u30DE\u30EB\u30C1\u30B9\u30EC\u30C3\u30C9\u3067\u306E\u8AAD\u307F\u66F8\u304D\u304C\u53EF\u80FD
  let t = std::thread::spawn(|| {
    let tx = w!();
    let test = tx | Test;
    test.set([1, 2], [6])?;
    println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

    match test.get([1, 2])? {
      Some(val) =&gt; {
        let t: &amp;[u8] = &amp;val;
        println!(&quot;{:?}&quot;, t);
      }
      None =&gt; unreachable!(),
    }
    Ok(())
  });

  t.join().unwrap()?;

  Ok(())
}
  #[derive(Clone, Debug)]
  pub struct Config {
    path: PathBuf,
    mode: ffi::mdbx_mode_t,
    flag: flag::ENV,
    sync_period: u64,
    sync_bytes: u64,
    max_db: u64,
    pagesize: isize,
  }
  
  lazy_static! {
    pub static ref ENV_CONFIG_DEFAULT: Config = Config {
      path:PathBuf::new(),
      mode: 0o600,
      //https://github.com/erthink/libmdbx/issues/248
      sync_period : 65536, // 1/65536\u79D2\u306E\u9593\u306B
      sync_bytes : 65536,
      max_db : 256,
      flag : (
          flag::ENV::MDBX_EXCLUSIVE
        | flag::ENV::MDBX_LIFORECLAIM
        | flag::ENV::MDBX_COALESCE
        | flag::ENV::MDBX_NOMEMINIT
        | flag::ENV::MDBX_NOSUBDIR
        | flag::ENV::MDBX_SAFE_NOSYNC
        // | flag::ENV::MDBX_SYNC_DURABLE
      ),
      pagesize:-1
    };
  }
mdbx! {
 MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5909\u6570\u540D Env
 Test // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30B9\u30C8
}
let tx = w!();
let test = tx | Test;
test.set([1, 2], [6])?;
println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

match test.get([1, 2])? {
 Some(val) =&gt; {
  let t:&amp;[u8] = &amp;val;
  println!(&quot;{:?}&quot;,t);
 },
 None =&gt; unreachable!()
}
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
});

mdbx! {
  MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9ENV\u306E\u5909\u6570\u540D
  Test1
  Test2
    key Str
    val Str
  Test3
    key i32
    val u64
  Test4
    key u64
    val u16
    flag DUPSORT
}

fn main() -&gt; Result&lt;()&gt; {
  // \u30AF\u30A4\u30C3\u30AF\u30E9\u30A4\u30C8
  w!(Test1.set [2, 3],[4, 5]);

  // \u30AF\u30A4\u30C3\u30AF\u30EA\u30FC\u30C9
  match r!(Test1.get [2, 3]) {
    Some(r) =&gt; {
      println!(
        &quot;\\nu16::from_le_bytes({:?}) = {}&quot;,
        r,
        u16::from_le_bytes((*r).try_into()?)
      );
    }
    None =&gt; unreachable!(),
  }

  // \u540C\u4E00\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u5185\u3067\u8907\u6570\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u5BFE\u3057\u3066\u8907\u6570\u306E\u64CD\u4F5C\u3092\u884C\u3046\u3053\u3068\u304C\u53EF\u80FD
  {
    let tx = w!();
    let test1 = tx | Test1;

    test1.set(&amp;[9], &amp;[10, 12])?;
    test1.set([8, 1], [9])?;
    test1.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test1.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;

    println!(&quot;\\n-- loop test1&quot;);
    for (k, v) in test1 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    dbg!(test1.del_val([8, 1], [3])?);
    dbg!(test1.get([8, 1])?.unwrap());
    dbg!(test1.del_val([8, 1], [9])?);
    dbg!(test1.get([8, 1])?);

    dbg!(test1.del([9])?);
    dbg!(test1.get([9])?);
    dbg!(test1.del([9])?);

    let test2 = tx | Test2;
    test2.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test2.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;
    println!(&quot;\\n-- loop test2&quot;);
    for (k, v) in test2 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    let test3 = tx | Test3;

    test3.set(13, 32)?;
    test3.set(16, 32)?;
    test3.set(-15, 6)?;
    test3.set(-10, 6)?;
    test3.set(-12, 6)?;
    test3.set(0, 6)?;
    test3.set(10, 5)?;

    println!(&quot;\\n-- loop test3&quot;);
    for (k, v) in test3 {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    let test4 = tx | Test4;
    test4.set(10, 5)?;
    test4.set(10, 0)?;
    test4.set(13, 32)?;
    test4.set(16, 2)?;
    test4.set(16, 1)?;
    test4.set(16, 3)?;
    test4.set(0, 6)?;
    test4.set(10, 5)?;
    test4.set(0, 2)?;

    dbg!(test4.del_val(0, 2)?);
    dbg!(test4.del_val(0, 2)?);

    println!(&quot;\\n-- loop test4 rev&quot;);
    for (k, v) in test4.rev() {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    for i in test4.dup(16) {
      println!(&quot;dup(16) {:?}&quot;, i);
    }

    // \u30B9\u30B3\u30FC\u30D7\u7D42\u4E86\u6642\u306B\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u304C\u30B3\u30DF\u30C3\u30C8\u3055\u308C\u307E\u3059
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
Test2
  key Str
  val Str
Test3
  key i32
  val u64
Test4
  key u64
  val u16
  flag DUPSORT
</code></pre></div><p>\u3053\u3053\u3067\u3001 <code>key</code> \u3068 <code>val</code> \u306F\u305D\u308C\u305E\u308C\u30AD\u30FC\u3068\u5024\u306E\u30C7\u30FC\u30BF\u578B\u3092\u5B9A\u7FA9\u3059\u308B\u3002</p><p>\u5B9A\u7FA9\u3055\u308C\u305F\u30C7\u30FC\u30BF\u578B\u3068\u4E00\u81F4\u3057\u306A\u3044\u30C7\u30FC\u30BF\u578B\u3092\u66F8\u3053\u3046\u3068\u3059\u308B\u3068\u3001\u4EE5\u4E0B\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8\u306B\u793A\u3059\u3088\u3046\u306B\u30A8\u30E9\u30FC\u304C\u5831\u544A\u3055\u308C\u307E\u3059\u3002</p><p><img src="//irmw.gumlet.io/4rFTC6.png" alt=""></p><p>\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30C7\u30FC\u30BF\u578B\u306F <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Bin.html" target="_blank" rel="noopener noreferrer"><code>Bin</code></a> \u3092\u5B9F\u88C5\u3057\u3066\u3044\u308B\u30C7\u30FC\u30BF\u3067\u3042\u308C\u3070\u3001 <code>AsRef&lt;[u8]&gt;</code> \u306B\u66F8\u304D\u8FBC\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p><p>\u30AD\u30FC\u307E\u305F\u306F\u5024\u304C <code>utf8</code> \u306E\u6587\u5B57\u5217\u3067\u3042\u308B\u5834\u5408\u3001\u30C7\u30FC\u30BF\u578B\u306F\u6B21\u306E\u3088\u3046\u306B\u8A2D\u5B9A\u3067\u304D\u308B\u3002 <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Str.html" target="_blank" rel="noopener noreferrer"><code>Str</code></a> .</p><p><code>Str</code> \u3092 <a href="https://doc.rust-lang.org/std/ops/trait.Deref.html" target="_blank" rel="noopener noreferrer">\u30A2\u30F3\u30AF\u30A9\u30FC\u30C8</a> \u3059\u308B\u3068\u3001 <code>let k:&amp;str = &amp;k;</code>\u3068\u540C\u69D8\u306E\u6587\u5B57\u5217\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002</p><p>\u3055\u3089\u306B\u3001<code>Str</code> \u3082\u5B9F\u88C5\u3057\u3066\u3044\u307E\u3059\u3002 <a href="https://doc.rust-lang.org/std/fmt/trait.Display.html" target="_blank" rel="noopener noreferrer"><code>std::fmt::Display</code></a>,<code>println!(&quot;{}&quot;,k)</code> \u306F\u3001\u8AAD\u307F\u3084\u3059\u3044\u6587\u5B57\u5217\u3092\u51FA\u529B\u3057\u307E\u3059\u3002</p><h5 id="\u30D5\u309A\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u305F\u30C6\u3099\u30FC\u30BF\u578B" tabindex="-1"><a class="header-anchor" href="#\u30D5\u309A\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u305F\u30C6\u3099\u30FC\u30BF\u578B" aria-hidden="true">#</a> \u30D7\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u305F\u30C7\u30FC\u30BF\u578B</h5><p><code>Str</code>, <code>Bin</code> \u306B\u52A0\u3048\u3001 <a href="https://docs.rs/mdbx/latest/src/mdbx/type.rs.html#48" target="_blank" rel="noopener noreferrer">usize, u128, u64, u32, u16, u8, isize, i128, i64, i32, i16, i8, f32, f64</a> \u306E\u30C7\u30FC\u30BF\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u30E9\u30C3\u30D1\u30FC\u304C\u4ED8\u5C5E\u3057\u3066\u3044\u307E\u3059\u3002</p><h4 id="\u30C6\u3099\u30FC\u30BF\u30D8\u3099\u30FC\u30B9\u30D5\u30E9\u30AF\u3099" tabindex="-1"><a class="header-anchor" href="#\u30C6\u3099\u30FC\u30BF\u30D8\u3099\u30FC\u30B9\u30D5\u30E9\u30AF\u3099" aria-hidden="true">#</a> \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30D5\u30E9\u30B0</h4><p><a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a> \u306E\u30C7\u30FC\u30BF\u306B\u8FFD\u52A0\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30D5\u30E9\u30B0\u306F\u3001 <code>Test4</code> \u3067\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002 <code>flag DUPSORT</code></p><p>libmdbx \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306F\u3001\u3044\u304F\u3064\u304B\u306E\u30D5\u30E9\u30B0( <a href="https://erthink.github.io/libmdbx/group__c__dbi.html#gafe3bddb297b3ab0d828a487c5726f76a" target="_blank" rel="noopener noreferrer"><code>MDBX_db_flags_t</code></a> ) \u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3002</p><ul><li>REVERSEKEY \u306F\u3001\u30AD\u30FC\u306B\u5BFE\u3057\u3066\u9006\u6587\u5B57\u5217\u6BD4\u8F03\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002(\u672B\u3064\u304C\u308A\u6570\u5B57\uFF09</li><li>DUPSORT\u306F\u30BD\u30FC\u30C8\u3055\u308C\u305F\u91CD\u8907\u3092\u4F7F\u7528\u3059\u308B\u3002\u3064\u307E\u308A\u30011\u3064\u306E\u30AD\u30FC\u306B\u5BFE\u3057\u3066\u8907\u6570\u306E\u5024\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3002</li><li>INTEGERKEY \u30D0\u30A4\u30C8\u30AA\u30FC\u30C0\u30FC\u306E\u6570\u5024\u30AD\u30FC uint32_t \u307E\u305F\u306F uint64_t \u30CD\u30A4\u30C6\u30A3\u30D6\u3002\u30AD\u30FC\u306F\u540C\u3058\u30B5\u30A4\u30BA\u3067\u306A\u3051\u308C\u3070\u306A\u3089\u305A\u3001\u5F15\u6570\u3068\u3057\u3066\u6E21\u3059\u3068\u304D\u306F\u30A2\u30E9\u30A4\u30E1\u30F3\u30C8\u3055\u308C\u3066\u3044\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\u3002</li><li>DUPFIXED DUPSORT\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u30C7\u30FC\u30BF\u5024\u306E\u30B5\u30A4\u30BA\u306F\u540C\u3058\u3067\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\uFF08\u5024\u306E\u6570\u3092\u7D20\u65E9\u304F\u30AB\u30A6\u30F3\u30C8\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\uFF09\u3002</li><li>DUPSORT\u3068DUPFIXED\u306FINTEGERDUP\u306B\u5FC5\u8981\u3067\u3001\u5024\u306F\u6574\u6570\uFF08INTEGERKEY\u3068\u540C\u69D8\uFF09\u3067\u3042\u308B\u3002\u30C7\u30FC\u30BF\u5024\u306F\u3059\u3079\u3066\u540C\u3058\u30B5\u30A4\u30BA\u3067\u306A\u3051\u308C\u3070\u306A\u3089\u305A\u3001\u30D1\u30E9\u30E1\u30FC\u30BF\u3068\u3057\u3066\u6E21\u3059\u5834\u5408\u306F\u30A2\u30E9\u30A4\u30E1\u30F3\u30C8\u3092\u3068\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002</li><li>REVERSEDUP\u306FDUPSORT\u3092\u4F7F\u7528\u3057\u3001\u30C7\u30FC\u30BF\u5024\u306B\u306F\u9006\u6587\u5B57\u5217\u6BD4\u8F03\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002</li><li>CREATE\u306FDB\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\uFF08\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u8FFD\u52A0\u3055\u308C\u308B\uFF09\u3001\u4F5C\u6210\u3057\u307E\u3059\u3002</li><li>DB_ACCEDE unknown\u30D5\u30E9\u30B0\u3067\u4F5C\u6210\u3057\u305F\u65E2\u5B58\u306E\u30B5\u30D6\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u30AA\u30FC\u30D7\u30F3\u3057\u307E\u3059\u3002<br> \u3053\u306EDB_ACCEDE\u30D5\u30E9\u30B0\u306F\u3001\u672A\u77E5\u306E\u30D5\u30E9\u30B0\uFF08REVERSEKEY\u3001DUPSORT\u3001INTEGERKEY\u3001DUPFIXED\u3001INTEGERDUP\u3001REVERSEDUP\uFF09\u3067\u4F5C\u6210\u3057\u305F\u65E2\u5B58\u306E\u30B5\u30D6\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u30AA\u30FC\u30D7\u30F3\u3059\u308B\u305F\u3081\u306E\u3082\u306E\u3067\u3042\u308B\u3002<br> \u3053\u306E\u5834\u5408\u3001\u30B5\u30D6\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306F INCOMPATIBLE \u30A8\u30E9\u30FC\u3092\u8FD4\u3055\u305A\u3001\u4F5C\u6210\u306B\u4F7F\u308F\u308C\u305F\u30D5\u30E9\u30B0\u3067\u958B\u304B\u308C\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F mdbx_dbi_flags() \u3067\u5B9F\u969B\u306E\u30D5\u30E9\u30B0\u3092\u6C7A\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</li></ul><h5 id="dupsort-1\u3064\u306E\u30AD\u30FC\u304B\u30992\u3064\u4EE5\u4E0A\u306E\u5024\u306B\u5BFE\u5FDC\u3059\u308B\u3002" tabindex="-1"><a class="header-anchor" href="#dupsort-1\u3064\u306E\u30AD\u30FC\u304B\u30992\u3064\u4EE5\u4E0A\u306E\u5024\u306B\u5BFE\u5FDC\u3059\u308B\u3002" aria-hidden="true">#</a> DUPSORT : 1\u3064\u306E\u30AD\u30FC\u304C2\u3064\u4EE5\u4E0A\u306E\u5024\u306B\u5BFE\u5FDC\u3059\u308B\u3002</h5><p><code>DUPSORT</code>\u306F\u30011\u3064\u306E\u30AD\u30FC\u304C\u8907\u6570\u306E\u5024\u306B\u5BFE\u5FDC\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3053\u3068\u3092\u610F\u5473\u3059\u308B\u3002</p><p>\u8907\u6570\u306E\u30D5\u30E9\u30B0\u3092\u8A2D\u5B9A\u3057\u305F\u3044\u5834\u5408\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u8A18\u8FF0\u3057\u307E\u3059\u3002 <code>flag DUPSORT | DUPFIXED</code></p><h5 id="dup-key-\u30AD\u30FC\u306B\u5BFE\u5FDC\u3059\u308B\u3059\u3078\u3099\u3066\u306E\u5024\u3092\u8FD4\u3059\u30A4\u30C6\u30EC\u30FC\u30BF" tabindex="-1"><a class="header-anchor" href="#dup-key-\u30AD\u30FC\u306B\u5BFE\u5FDC\u3059\u308B\u3059\u3078\u3099\u3066\u306E\u5024\u3092\u8FD4\u3059\u30A4\u30C6\u30EC\u30FC\u30BF" aria-hidden="true">#</a> <code>.dup(key)</code> \u30AD\u30FC\u306B\u5BFE\u5FDC\u3059\u308B\u3059\u3079\u3066\u306E\u5024\u3092\u8FD4\u3059\u30A4\u30C6\u30EC\u30FC\u30BF</h5><p>\u3053\u306E\u6A5F\u80FD\u306F\u30011\u3064\u306E\u30AD\u30FC\u304C\u8907\u6570\u306E\u5024\u306B\u5BFE\u5FDC\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3001 <code>DUPSORT</code> \u306E\u30DE\u30FC\u30AF\u304C\u4ED8\u3044\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3067\u306E\u307F\u5229\u7528\u53EF\u80FD\u3067\u3059\u3002</p><p><code>DUPSORT</code> \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5834\u5408\u3001<code>get</code> \u306F\u3053\u306E\u30AD\u30FC\u306E\u6700\u521D\u306E\u5024\u306E\u307F\u3092\u8FD4\u3057\u307E\u3059\u3002\u3059\u3079\u3066\u306E\u5024\u3092\u53D6\u5F97\u3059\u308B\u306B\u306F\u3001 <code>dup</code>\u3002</p><h5 id="\u81EA\u52D5\u7684\u306B\u4ED8\u52A0\u3055\u308C\u308B\u30C6\u3099\u30D5\u30A9\u30EB\u30C8\u306E\u30C6\u3099\u30FC\u30BF\u30D8\u3099\u30FC\u30B9\u30D5\u30E9\u30AF\u3099" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52D5\u7684\u306B\u4ED8\u52A0\u3055\u308C\u308B\u30C6\u3099\u30D5\u30A9\u30EB\u30C8\u306E\u30C6\u3099\u30FC\u30BF\u30D8\u3099\u30FC\u30B9\u30D5\u30E9\u30AF\u3099" aria-hidden="true">#</a> \u81EA\u52D5\u7684\u306B\u4ED8\u52A0\u3055\u308C\u308B\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30D5\u30E9\u30B0</h5><p>\u30C7\u30FC\u30BF\u578B\u304C <code>u32</code> / <code>u64</code> / <code>usize</code> \u306E\u5834\u5408\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30D5\u30E9\u30B0\u304C\u81EA\u52D5\u7684\u306B\u4ED8\u52A0\u3055\u308C\u307E\u3059\u3002 <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#105" target="_blank" rel="noopener noreferrer"><code>INTEGERKEY</code></a>.</p><p>\u30B9\u30E2\u30FC\u30EB\u30A8\u30F3\u30C9\u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u642D\u8F09\u6A5F\u3067\u306F\u3001\u4ED6\u306E\u6570\u5024\u578B\u3082\u81EA\u52D5\u7684\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3059 <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#108" target="_blank" rel="noopener noreferrer"><code>REVERSEKEY</code></a>\u30C7\u30FC\u30BF\u578B\u304C / / \u306E\u5834\u5408\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30D5\u30E9\u30B0\u304C\u81EA\u52D5\u7684\u306B\u4ED8\u52A0\u3055\u308C\u308B\u3002</p><h4 id="\u30C6\u3099\u30FC\u30BF\u306E\u524A\u9664" tabindex="-1"><a class="header-anchor" href="#\u30C6\u3099\u30FC\u30BF\u306E\u524A\u9664" aria-hidden="true">#</a> \u30C7\u30FC\u30BF\u306E\u524A\u9664</h4><h5 id="del-key-\u30AD\u30FC\u3092\u524A\u9664\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#del-key-\u30AD\u30FC\u3092\u524A\u9664\u3059\u308B" aria-hidden="true">#</a> <code>.del(key)</code> \u30AD\u30FC\u3092\u524A\u9664\u3059\u308B</h5><p><code>.del(val)</code> \u30AD\u30FC\u306B\u5BFE\u5FDC\u3059\u308B\u5024\u3092\u524A\u9664\u3059\u308B\u3002</p><p>\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u30D5\u30E9\u30B0\uFF08 <code>DUPSORT</code>\uFF09\u304C\u3042\u308B\u5834\u5408\u3001\u3053\u306E\u30AD\u30FC\u306E\u4E0B\u306B\u3042\u308B\u3059\u3079\u3066\u306E\u5024\u304C\u524A\u9664\u3055\u308C\u307E\u3059\u3002</p><p>\u30C7\u30FC\u30BF\u304C\u524A\u9664\u3055\u308C\u305F\u5834\u5408\u306F <code>true</code>\u3092\u3001\u524A\u9664\u3055\u308C\u306A\u304B\u3063\u305F\u5834\u5408\u306F <code>false</code>\u3092\u8FD4\u3059\u3002</p><h5 id="del-val-key-val-\u5B8C\u5168\u4E00\u81F4\u524A\u9664" tabindex="-1"><a class="header-anchor" href="#del-val-key-val-\u5B8C\u5168\u4E00\u81F4\u524A\u9664" aria-hidden="true">#</a> <code>.del_val(key,val)</code> \u5B8C\u5168\u4E00\u81F4\u524A\u9664</h5><p><code>.del_val(key,val)</code> \u5165\u529B\u3055\u308C\u305F\u30D1\u30E9\u30E1\u30FC\u30BF\u3068\u5B8C\u5168\u306B\u4E00\u81F4\u3059\u308BKey-Value\u30DA\u30A2\u3092\u524A\u9664\u3059\u308B\u3002</p><p>\u30C7\u30FC\u30BF\u304C\u524A\u9664\u3055\u308C\u305F\u5834\u5408\u306F <code>true</code>\u3092\u3001\u524A\u9664\u3055\u308C\u306A\u304B\u3063\u305F\u5834\u5408\u306F <code>false</code>\u3092\u8FD4\u3059\u3002</p><h4 id="\u30C8\u30E9\u30CF\u3099\u30FC\u30B5\u30EB" tabindex="-1"><a class="header-anchor" href="#\u30C8\u30E9\u30CF\u3099\u30FC\u30B5\u30EB" aria-hidden="true">#</a> \u30C8\u30E9\u30D0\u30FC\u30B5\u30EB</h4><h5 id="\u3057\u3099\u3085\u3093\u3057\u3099\u3087\u3068\u3046\u304B\u3044" tabindex="-1"><a class="header-anchor" href="#\u3057\u3099\u3085\u3093\u3057\u3099\u3087\u3068\u3046\u304B\u3044" aria-hidden="true">#</a> \u3058\u3085\u3093\u3058\u3087\u3068\u3046\u304B\u3044</h5><p>\u3092\u5B9F\u88C5\u3057\u3066\u3044\u308B\u305F\u3081 <a href="https://doc.rust-lang.org/std/iter/trait.IntoIterator.html" target="_blank" rel="noopener noreferrer"><code>std::iter::IntoIterator</code></a> .\u6B21\u306E\u3088\u3046\u306B\u76F4\u63A5\u30C8\u30E9\u30D0\u30FC\u30B9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p><p><code>for (k, v) in test1</code></p><h5 id="rev-\u9006\u9806\u30C8\u30E9\u30CF\u3099\u30FC\u30B5\u30EB" tabindex="-1"><a class="header-anchor" href="#rev-\u9006\u9806\u30C8\u30E9\u30CF\u3099\u30FC\u30B5\u30EB" aria-hidden="true">#</a> <code>.rev()</code> \u9006\u9806\u30C8\u30E9\u30D0\u30FC\u30B5\u30EB</h5><p><code>for (k, v) in test4.rev()</code></p><h5 id="\u30BD\u30FC\u30C8" tabindex="-1"><a class="header-anchor" href="#\u30BD\u30FC\u30C8" aria-hidden="true">#</a> \u30BD\u30FC\u30C8</h5><p>libmdbx\u306E\u30AD\u30FC\u306F <a href="https://zh.wikipedia.org/wiki/%E5%AD%97%E5%85%B8%E5%BA%8F" target="_blank" rel="noopener noreferrer">\u8F9E\u66F8</a> \u9806\u306B\u30BD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\u3002</p><ul><li><p>\u7B26\u53F7\u306A\u3057\u6570\u5024\u306E\u5834\u5408</p><p>\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30D5\u30E9\u30B0\u304C\u81EA\u52D5\u7684\u306B\u4ED8\u52A0\u3055\u308C\u308B\u305F\u3081\u3001\u5C0F\u3055\u3044\u3082\u306E\u304B\u3089\u9806\u306B\u30BD\u30FC\u30C8\u3055\u308C\u307E\u3059 ( <code>u32</code>/<code>u64</code>/<code>usize</code> \u306F <code>INTEGERKEY</code>\u306B\u3001\u305D\u306E\u4ED6\u306F\u30DE\u30B7\u30F3\u30B3\u30FC\u30C9\u306B\u3088\u3063\u3066 <code>REVERSEKEY</code> \u306B\u4ED8\u52A0\u3055\u308C\u307E\u3059)\u3002</p></li><li><p>\u7B26\u53F7\u4ED8\u304D\u6570\u5024\u306E\u5834\u5408</p><p>\u306F\u30010\u3092\u5148\u982D\u306B\u3001\u5C0F\u3055\u3044\u65B9\u304B\u3089\u5927\u304D\u3044\u65B9\u307E\u3067\u3059\u3079\u3066\u306E\u6B63\u306E\u6570\u3001\u5C0F\u3055\u3044\u65B9\u304B\u3089\u5927\u304D\u3044\u65B9\u307E\u3067\u3059\u3079\u3066\u306E\u8CA0\u306E\u6570\u306E\u9806\u3068\u306A\u308A\u307E\u3059\u3002</p></li></ul><h3 id="\u533A\u9593\u30A4\u30C6\u30EC\u30FC\u30BF" tabindex="-1"><a class="header-anchor" href="#\u533A\u9593\u30A4\u30C6\u30EC\u30FC\u30BF" aria-hidden="true">#</a> \u533A\u9593\u30A4\u30C6\u30EC\u30FC\u30BF</h3><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(
  MDBX,
  {
    let mut db_path = std::env::current_exe().unwrap();
    db_path.set_extension(&quot;mdb&quot;);
    println!(&quot;mdbx file path {}&quot;, db_path.display());
    db_path.into()
  },
  r,
  w
);

mdbx! {
  MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5909\u6570\u540D Env
  Test // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30B9\u30C8
}

fn main() -&gt; Result&lt;()&gt; {
  // libmdbx \u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u756A\u53F7\u3092\u51FA\u529B\u3057\u307E\u3059\u3002
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u30DE\u30EB\u30C1\u30B9\u30EC\u30C3\u30C9\u3067\u306E\u8AAD\u307F\u66F8\u304D\u304C\u53EF\u80FD
  let t = std::thread::spawn(|| {
    let tx = w!();
    let test = tx | Test;
    test.set([1, 2], [6])?;
    println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

    match test.get([1, 2])? {
      Some(val) =&gt; {
        let t: &amp;[u8] = &amp;val;
        println!(&quot;{:?}&quot;, t);
      }
      None =&gt; unreachable!(),
    }
    Ok(())
  });

  t.join().unwrap()?;

  Ok(())
}
  #[derive(Clone, Debug)]
  pub struct Config {
    path: PathBuf,
    mode: ffi::mdbx_mode_t,
    flag: flag::ENV,
    sync_period: u64,
    sync_bytes: u64,
    max_db: u64,
    pagesize: isize,
  }
  
  lazy_static! {
    pub static ref ENV_CONFIG_DEFAULT: Config = Config {
      path:PathBuf::new(),
      mode: 0o600,
      //https://github.com/erthink/libmdbx/issues/248
      sync_period : 65536, // 1/65536\u79D2\u306E\u9593\u306B
      sync_bytes : 65536,
      max_db : 256,
      flag : (
          flag::ENV::MDBX_EXCLUSIVE
        | flag::ENV::MDBX_LIFORECLAIM
        | flag::ENV::MDBX_COALESCE
        | flag::ENV::MDBX_NOMEMINIT
        | flag::ENV::MDBX_NOSUBDIR
        | flag::ENV::MDBX_SAFE_NOSYNC
        // | flag::ENV::MDBX_SYNC_DURABLE
      ),
      pagesize:-1
    };
  }
mdbx! {
 MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5909\u6570\u540D Env
 Test // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30B9\u30C8
}
let tx = w!();
let test = tx | Test;
test.set([1, 2], [6])?;
println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

match test.get([1, 2])? {
 Some(val) =&gt; {
  let t:&amp;[u8] = &amp;val;
  println!(&quot;{:?}&quot;,t);
 },
 None =&gt; unreachable!()
}
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
});

mdbx! {
  MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9ENV\u306E\u5909\u6570\u540D
  Test1
  Test2
    key Str
    val Str
  Test3
    key i32
    val u64
  Test4
    key u64
    val u16
    flag DUPSORT
}

fn main() -&gt; Result&lt;()&gt; {
  // \u30AF\u30A4\u30C3\u30AF\u30E9\u30A4\u30C8
  w!(Test1.set [2, 3],[4, 5]);

  // \u30AF\u30A4\u30C3\u30AF\u30EA\u30FC\u30C9
  match r!(Test1.get [2, 3]) {
    Some(r) =&gt; {
      println!(
        &quot;\\nu16::from_le_bytes({:?}) = {}&quot;,
        r,
        u16::from_le_bytes((*r).try_into()?)
      );
    }
    None =&gt; unreachable!(),
  }

  // \u540C\u4E00\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u5185\u3067\u8907\u6570\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u5BFE\u3057\u3066\u8907\u6570\u306E\u64CD\u4F5C\u3092\u884C\u3046\u3053\u3068\u304C\u53EF\u80FD
  {
    let tx = w!();
    let test1 = tx | Test1;

    test1.set(&amp;[9], &amp;[10, 12])?;
    test1.set([8, 1], [9])?;
    test1.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test1.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;

    println!(&quot;\\n-- loop test1&quot;);
    for (k, v) in test1 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    dbg!(test1.del_val([8, 1], [3])?);
    dbg!(test1.get([8, 1])?.unwrap());
    dbg!(test1.del_val([8, 1], [9])?);
    dbg!(test1.get([8, 1])?);

    dbg!(test1.del([9])?);
    dbg!(test1.get([9])?);
    dbg!(test1.del([9])?);

    let test2 = tx | Test2;
    test2.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test2.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;
    println!(&quot;\\n-- loop test2&quot;);
    for (k, v) in test2 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    let test3 = tx | Test3;

    test3.set(13, 32)?;
    test3.set(16, 32)?;
    test3.set(-15, 6)?;
    test3.set(-10, 6)?;
    test3.set(-12, 6)?;
    test3.set(0, 6)?;
    test3.set(10, 5)?;

    println!(&quot;\\n-- loop test3&quot;);
    for (k, v) in test3 {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    let test4 = tx | Test4;
    test4.set(10, 5)?;
    test4.set(10, 0)?;
    test4.set(13, 32)?;
    test4.set(16, 2)?;
    test4.set(16, 1)?;
    test4.set(16, 3)?;
    test4.set(0, 6)?;
    test4.set(10, 5)?;
    test4.set(0, 2)?;

    dbg!(test4.del_val(0, 2)?);
    dbg!(test4.del_val(0, 2)?);

    println!(&quot;\\n-- loop test4 rev&quot;);
    for (k, v) in test4.rev() {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    for i in test4.dup(16) {
      println!(&quot;dup(16) {:?}&quot;, i);
    }

    // \u30B9\u30B3\u30FC\u30D7\u7D42\u4E86\u6642\u306B\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u304C\u30B3\u30DF\u30C3\u30C8\u3055\u308C\u307E\u3059
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
Test2
  key Str
  val Str
Test3
  key i32
  val u64
Test4
  key u64
  val u16
  flag DUPSORT
use anyhow::Result;
use mdbx::prelude::*;

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
});

mdbx! {
  MDBX
  Test0
  Test1
    key u16
    val u64
    flag DUPSORT
  Test2
    key u32
    val u64
}

macro_rules! range_rev {
  ($var:ident, $range:expr) =&gt; {
    println!(&quot;\\n# {}.rev_range({:?})&quot;, stringify!($var), $range);
    for i in $var.range_rev($range) {
      println!(&quot;{:?}&quot;, i);
    }
  };
}

macro_rules! range {
  ($var:ident, $range:expr) =&gt; {
    println!(&quot;\\n# {}.range({:?})&quot;, stringify!($var), $range);
    for i in $var.range($range) {
      println!(&quot;{:?}&quot;, i);
    }
  };
}

fn main() -&gt; Result&lt;()&gt; {
  {
    println!(&quot;\\n&gt; Test0&quot;);
    let tx = &amp;MDBX.w()?;
    let test0 = tx | Test0;
    test0.set([0], [0, 1])?;
    test0.set([1], [1, 2])?;
    test0.set([2], [2, 3])?;
    test0.set([1, 1], [1, 3])?;
    test0.set([1, 2], [1, 3])?;
    test0.set([3], [])?;

    range!(test0, [1]..);
    let begin: &amp;[u8] = &amp;[1, 1];
    range!(test0, begin..=&amp;[2]);
  }

  {
    let tx = &amp;MDBX.w()?;

    let test1 = tx | Test1;
    test1.set(2, 9)?;
    test1.set(2, 4)?;
    test1.set(9, 7)?;
    test1.set(3, 0)?;
    test1.set(3, 8)?;
    test1.set(5, 3)?;
    test1.set(5, 8)?;
    test1.set(9, 1)?;
    println!(&quot;-- all&quot;);
    for i in test1 {
      println!(&quot;{:?}&quot;, i);
    }
    range!(test1, 1..3);
    range!(test1, 5..2);
    range!(test1, 1..=3);
    range!(test1, ..3);
    range!(test1, 3..);
    range_rev!(test1, ..1);
    range_rev!(test1, ..=1);
  }

  {
    println!(&quot;\\n&gt; Test2&quot;);
    let tx = &amp;MDBX.w()?;
    let test2 = tx | Test2;
    test2.set(2, 9)?;
    test2.set(1, 2)?;
    test2.set(2, 4)?;
    test2.set(1, 5)?;
    test2.set(9, 7)?;
    test2.set(9, 1)?;
    test2.set(0, 0)?;

    range!(test2, 1..3);
    range!(test2, 1..=3);
    range!(test2, ..3);
    range!(test2, 2..);
    range_rev!(test2, ..1);
    range_rev!(test2, 2..);
    range_rev!(test2, ..=1);
  }

  Ok(())
}
</code></pre></div><h4 id="\u306E\u51FA\u529B\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002" tabindex="-1"><a class="header-anchor" href="#\u306E\u51FA\u529B\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002" aria-hidden="true">#</a> \u306E\u51FA\u529B\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/range.mdb

&gt; Test0

# test0.range([1]..)
(Bin([1]), Bin([1, 2]))
(Bin([1, 1]), Bin([1, 3]))
(Bin([1, 2]), Bin([1, 3]))
(Bin([2]), Bin([2, 3]))
(Bin([3]), Bin([]))

# test0.range([1, 1]..=[2])
(Bin([1, 1]), Bin([1, 3]))
(Bin([1, 2]), Bin([1, 3]))
(Bin([2]), Bin([2, 3]))
-- all
(2, 4)
(2, 9)
(3, 0)
(3, 8)
(5, 3)
(5, 8)
(9, 1)
(9, 2)
(9, 7)

# test1.range(1..3)
(2, 4)
(2, 9)

# test1.range(5..2)
(5, 8)
(5, 3)
(3, 8)
(3, 0)

# test1.range(1..=3)
(2, 4)
(2, 9)
(3, 0)
(3, 8)

# test1.range(..3)
(2, 4)
(2, 9)

# test1.range(3..)
(3, 0)
(3, 8)
(5, 3)
(5, 8)
(9, 1)
(9, 2)
(9, 7)

# test1.rev_range(..1)
(9, 7)
(9, 2)
(9, 1)
(5, 8)
(5, 3)
(3, 8)
(3, 0)
(2, 9)
(2, 4)

# test1.rev_range(..=1)
(9, 7)
(9, 2)
(9, 1)
(5, 8)
(5, 3)
(3, 8)
(3, 0)
(2, 9)
(2, 4)

&gt; Test2

# test2.range(1..3)
(1, 5)
(2, 4)

# test2.range(1..=3)
(1, 5)
(2, 4)

# test2.range(..3)
(0, 0)
(1, 5)
(2, 4)

# test2.range(2..)
(2, 4)
(9, 1)

# test2.rev_range(..1)
(9, 1)
(2, 4)

# test2.rev_range(2..)
(2, 4)
(1, 5)
(0, 0)

# test2.rev_range(..=1)
(9, 1)
(2, 4)
(1, 5)
</code></pre></div><h4 id="range-begin-end-\u30A4\u30F3\u30BF\u30FC\u30CF\u3099\u30EB-\u30A4\u30C6\u30EC\u30FC\u30B7\u30E7\u30F3" tabindex="-1"><a class="header-anchor" href="#range-begin-end-\u30A4\u30F3\u30BF\u30FC\u30CF\u3099\u30EB-\u30A4\u30C6\u30EC\u30FC\u30B7\u30E7\u30F3" aria-hidden="true">#</a> <code>.range(begin..end)</code> \u30A4\u30F3\u30BF\u30FC\u30D0\u30EB \u30A4\u30C6\u30EC\u30FC\u30B7\u30E7\u30F3</h4><p>\u6570\u5024\u306E\u5834\u5408\u3001\u30A4\u30F3\u30BF\u30FC\u30D0\u30EB\u306F\u6570\u5024\u306E\u533A\u9593\u3067\u3059\u3002</p><p>\u30D0\u30A4\u30CA\u30EA\u3067\u306F\u3001\u4F8B\u3048\u3070\u540C\u3058\u533A\u9593\u3092\u69CB\u7BC9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>let begin : &amp;[u8] = &amp;[1,1];
for (k,v) in test0.range(begin..=&amp;[2]) {}
</code></pre></div><p><code>begin</code> \u304C <code>end</code>\u3088\u308A\u3082\u5927\u304D\u3044\u5834\u5408\u3001\u9006\u65B9\u5411\u3078\u53CD\u5FA9\u3059\u308B\u3002</p><p>\u4F8B\u3048\u3070\u3001 <code>test1.range(5..2)</code> \u306F\u6B21\u306E\u3088\u3046\u306B\u51FA\u529B\u3057\u307E\u3059\u3002</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(
  MDBX,
  {
    let mut db_path = std::env::current_exe().unwrap();
    db_path.set_extension(&quot;mdb&quot;);
    println!(&quot;mdbx file path {}&quot;, db_path.display());
    db_path.into()
  },
  r,
  w
);

mdbx! {
  MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5909\u6570\u540D Env
  Test // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30B9\u30C8
}

fn main() -&gt; Result&lt;()&gt; {
  // libmdbx \u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u756A\u53F7\u3092\u51FA\u529B\u3057\u307E\u3059\u3002
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u30DE\u30EB\u30C1\u30B9\u30EC\u30C3\u30C9\u3067\u306E\u8AAD\u307F\u66F8\u304D\u304C\u53EF\u80FD
  let t = std::thread::spawn(|| {
    let tx = w!();
    let test = tx | Test;
    test.set([1, 2], [6])?;
    println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

    match test.get([1, 2])? {
      Some(val) =&gt; {
        let t: &amp;[u8] = &amp;val;
        println!(&quot;{:?}&quot;, t);
      }
      None =&gt; unreachable!(),
    }
    Ok(())
  });

  t.join().unwrap()?;

  Ok(())
}
  #[derive(Clone, Debug)]
  pub struct Config {
    path: PathBuf,
    mode: ffi::mdbx_mode_t,
    flag: flag::ENV,
    sync_period: u64,
    sync_bytes: u64,
    max_db: u64,
    pagesize: isize,
  }
  
  lazy_static! {
    pub static ref ENV_CONFIG_DEFAULT: Config = Config {
      path:PathBuf::new(),
      mode: 0o600,
      //https://github.com/erthink/libmdbx/issues/248
      sync_period : 65536, // 1/65536\u79D2\u306E\u9593\u306B
      sync_bytes : 65536,
      max_db : 256,
      flag : (
          flag::ENV::MDBX_EXCLUSIVE
        | flag::ENV::MDBX_LIFORECLAIM
        | flag::ENV::MDBX_COALESCE
        | flag::ENV::MDBX_NOMEMINIT
        | flag::ENV::MDBX_NOSUBDIR
        | flag::ENV::MDBX_SAFE_NOSYNC
        // | flag::ENV::MDBX_SYNC_DURABLE
      ),
      pagesize:-1
    };
  }
mdbx! {
 MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5909\u6570\u540D Env
 Test // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30B9\u30C8
}
let tx = w!();
let test = tx | Test;
test.set([1, 2], [6])?;
println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

match test.get([1, 2])? {
 Some(val) =&gt; {
  let t:&amp;[u8] = &amp;val;
  println!(&quot;{:?}&quot;,t);
 },
 None =&gt; unreachable!()
}
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
});

mdbx! {
  MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9ENV\u306E\u5909\u6570\u540D
  Test1
  Test2
    key Str
    val Str
  Test3
    key i32
    val u64
  Test4
    key u64
    val u16
    flag DUPSORT
}

fn main() -&gt; Result&lt;()&gt; {
  // \u30AF\u30A4\u30C3\u30AF\u30E9\u30A4\u30C8
  w!(Test1.set [2, 3],[4, 5]);

  // \u30AF\u30A4\u30C3\u30AF\u30EA\u30FC\u30C9
  match r!(Test1.get [2, 3]) {
    Some(r) =&gt; {
      println!(
        &quot;\\nu16::from_le_bytes({:?}) = {}&quot;,
        r,
        u16::from_le_bytes((*r).try_into()?)
      );
    }
    None =&gt; unreachable!(),
  }

  // \u540C\u4E00\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u5185\u3067\u8907\u6570\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u5BFE\u3057\u3066\u8907\u6570\u306E\u64CD\u4F5C\u3092\u884C\u3046\u3053\u3068\u304C\u53EF\u80FD
  {
    let tx = w!();
    let test1 = tx | Test1;

    test1.set(&amp;[9], &amp;[10, 12])?;
    test1.set([8, 1], [9])?;
    test1.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test1.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;

    println!(&quot;\\n-- loop test1&quot;);
    for (k, v) in test1 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    dbg!(test1.del_val([8, 1], [3])?);
    dbg!(test1.get([8, 1])?.unwrap());
    dbg!(test1.del_val([8, 1], [9])?);
    dbg!(test1.get([8, 1])?);

    dbg!(test1.del([9])?);
    dbg!(test1.get([9])?);
    dbg!(test1.del([9])?);

    let test2 = tx | Test2;
    test2.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test2.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;
    println!(&quot;\\n-- loop test2&quot;);
    for (k, v) in test2 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    let test3 = tx | Test3;

    test3.set(13, 32)?;
    test3.set(16, 32)?;
    test3.set(-15, 6)?;
    test3.set(-10, 6)?;
    test3.set(-12, 6)?;
    test3.set(0, 6)?;
    test3.set(10, 5)?;

    println!(&quot;\\n-- loop test3&quot;);
    for (k, v) in test3 {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    let test4 = tx | Test4;
    test4.set(10, 5)?;
    test4.set(10, 0)?;
    test4.set(13, 32)?;
    test4.set(16, 2)?;
    test4.set(16, 1)?;
    test4.set(16, 3)?;
    test4.set(0, 6)?;
    test4.set(10, 5)?;
    test4.set(0, 2)?;

    dbg!(test4.del_val(0, 2)?);
    dbg!(test4.del_val(0, 2)?);

    println!(&quot;\\n-- loop test4 rev&quot;);
    for (k, v) in test4.rev() {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    for i in test4.dup(16) {
      println!(&quot;dup(16) {:?}&quot;, i);
    }

    // \u30B9\u30B3\u30FC\u30D7\u7D42\u4E86\u6642\u306B\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u304C\u30B3\u30DF\u30C3\u30C8\u3055\u308C\u307E\u3059
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
Test2
  key Str
  val Str
Test3
  key i32
  val u64
Test4
  key u64
  val u16
  flag DUPSORT
use anyhow::Result;
use mdbx::prelude::*;

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
});

mdbx! {
  MDBX
  Test0
  Test1
    key u16
    val u64
    flag DUPSORT
  Test2
    key u32
    val u64
}

macro_rules! range_rev {
  ($var:ident, $range:expr) =&gt; {
    println!(&quot;\\n# {}.rev_range({:?})&quot;, stringify!($var), $range);
    for i in $var.range_rev($range) {
      println!(&quot;{:?}&quot;, i);
    }
  };
}

macro_rules! range {
  ($var:ident, $range:expr) =&gt; {
    println!(&quot;\\n# {}.range({:?})&quot;, stringify!($var), $range);
    for i in $var.range($range) {
      println!(&quot;{:?}&quot;, i);
    }
  };
}

fn main() -&gt; Result&lt;()&gt; {
  {
    println!(&quot;\\n&gt; Test0&quot;);
    let tx = &amp;MDBX.w()?;
    let test0 = tx | Test0;
    test0.set([0], [0, 1])?;
    test0.set([1], [1, 2])?;
    test0.set([2], [2, 3])?;
    test0.set([1, 1], [1, 3])?;
    test0.set([1, 2], [1, 3])?;
    test0.set([3], [])?;

    range!(test0, [1]..);
    let begin: &amp;[u8] = &amp;[1, 1];
    range!(test0, begin..=&amp;[2]);
  }

  {
    let tx = &amp;MDBX.w()?;

    let test1 = tx | Test1;
    test1.set(2, 9)?;
    test1.set(2, 4)?;
    test1.set(9, 7)?;
    test1.set(3, 0)?;
    test1.set(3, 8)?;
    test1.set(5, 3)?;
    test1.set(5, 8)?;
    test1.set(9, 1)?;
    println!(&quot;-- all&quot;);
    for i in test1 {
      println!(&quot;{:?}&quot;, i);
    }
    range!(test1, 1..3);
    range!(test1, 5..2);
    range!(test1, 1..=3);
    range!(test1, ..3);
    range!(test1, 3..);
    range_rev!(test1, ..1);
    range_rev!(test1, ..=1);
  }

  {
    println!(&quot;\\n&gt; Test2&quot;);
    let tx = &amp;MDBX.w()?;
    let test2 = tx | Test2;
    test2.set(2, 9)?;
    test2.set(1, 2)?;
    test2.set(2, 4)?;
    test2.set(1, 5)?;
    test2.set(9, 7)?;
    test2.set(9, 1)?;
    test2.set(0, 0)?;

    range!(test2, 1..3);
    range!(test2, 1..=3);
    range!(test2, ..3);
    range!(test2, 2..);
    range_rev!(test2, ..1);
    range_rev!(test2, 2..);
    range_rev!(test2, ..=1);
  }

  Ok(())
}
(5, 8)
(5, 3)
(3, 8)
(3, 0)
</code></pre></div><p>\u30A4\u30F3\u30BF\u30FC\u30D0\u30EB\u30FB\u30A4\u30C6\u30EC\u30FC\u30B7\u30E7\u30F3\u306F\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u305B\u3093 <a href="https://doc.rust-lang.org/std/ops/struct.RangeFull.html" target="_blank" rel="noopener noreferrer"><code>RangeFull</code></a>\u3064\u307E\u308A\u3001 <code>..</code>\u306E\u4F7F\u7528\u306F\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u306E\u3067\u3001\u4EE3\u308F\u308A\u306B\u4E0A\u8A18\u306E <a href="#%E9%81%8D%E5%8E%86">\u30C8\u30E9\u30D0\u30FC\u30B5\u30EB\u3092</a> \u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p><h4 id="rev-range-\u53CD\u8EE2\u30A4\u30F3\u30BF\u30FC\u30CF\u3099\u30EB" tabindex="-1"><a class="header-anchor" href="#rev-range-\u53CD\u8EE2\u30A4\u30F3\u30BF\u30FC\u30CF\u3099\u30EB" aria-hidden="true">#</a> <code>.rev_range</code> \u53CD\u8EE2\u30A4\u30F3\u30BF\u30FC\u30D0\u30EB</h4><p>\u4EE5\u4E0B\u3067\u3042\u308B\u53CD\u8EE2\u533A\u9593\u3092\u53D6\u5F97\u3057\u305F\u3044\u5834\u5408\u306F\u3001\u6B21\u306E\u3088\u3046\u306B\u3057\u307E\u3059\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>test2.rev_range(2..)
</code></pre></div><p>\u3092\u51FA\u529B\u3057\u307E\u3059\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>(2, 4)
(1, 5)
(0, 0)
</code></pre></div><p><code>begin</code> \u3001 <code>end</code> \u306E\u3044\u305A\u308C\u304B\u3092\u53CD\u8EE2\u3057\u305F\u9593\u9694\u306B\u8A2D\u5B9A\u3057\u3066\u306F\u306A\u3089\u306A\u3044\u3002\u4E21\u65B9\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u5E38\u306B <code>range(end..begin)</code> \u3092\u4F7F\u7528\u3057\u3066\u540C\u3058\u52B9\u679C\u3092\u5F97\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u304B\u3089\u3067\u3042\u308B\u3002</p><h3 id="\u30C6\u3099\u30FC\u30BF\u578B\u306E\u30AB\u30B9\u30BF\u30DE\u30A4\u30B9\u3099" tabindex="-1"><a class="header-anchor" href="#\u30C6\u3099\u30FC\u30BF\u578B\u306E\u30AB\u30B9\u30BF\u30DE\u30A4\u30B9\u3099" aria-hidden="true">#</a> \u30C7\u30FC\u30BF\u578B\u306E\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA</h3><p>\u30C7\u30E2\u30B3\u30FC\u30C9\u306F <a href="https://github.com/rmw-lib/mdbx-example/blob/master/01/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/01</a>\u3067\u516C\u958B\u3055\u308C\u3066\u3044\u307E\u3059\u3002</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(
  MDBX,
  {
    let mut db_path = std::env::current_exe().unwrap();
    db_path.set_extension(&quot;mdb&quot;);
    println!(&quot;mdbx file path {}&quot;, db_path.display());
    db_path.into()
  },
  r,
  w
);

mdbx! {
  MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5909\u6570\u540D Env
  Test // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30B9\u30C8
}

fn main() -&gt; Result&lt;()&gt; {
  // libmdbx \u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u756A\u53F7\u3092\u51FA\u529B\u3057\u307E\u3059\u3002
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u30DE\u30EB\u30C1\u30B9\u30EC\u30C3\u30C9\u3067\u306E\u8AAD\u307F\u66F8\u304D\u304C\u53EF\u80FD
  let t = std::thread::spawn(|| {
    let tx = w!();
    let test = tx | Test;
    test.set([1, 2], [6])?;
    println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

    match test.get([1, 2])? {
      Some(val) =&gt; {
        let t: &amp;[u8] = &amp;val;
        println!(&quot;{:?}&quot;, t);
      }
      None =&gt; unreachable!(),
    }
    Ok(())
  });

  t.join().unwrap()?;

  Ok(())
}
  #[derive(Clone, Debug)]
  pub struct Config {
    path: PathBuf,
    mode: ffi::mdbx_mode_t,
    flag: flag::ENV,
    sync_period: u64,
    sync_bytes: u64,
    max_db: u64,
    pagesize: isize,
  }
  
  lazy_static! {
    pub static ref ENV_CONFIG_DEFAULT: Config = Config {
      path:PathBuf::new(),
      mode: 0o600,
      //https://github.com/erthink/libmdbx/issues/248
      sync_period : 65536, // 1/65536\u79D2\u306E\u9593\u306B
      sync_bytes : 65536,
      max_db : 256,
      flag : (
          flag::ENV::MDBX_EXCLUSIVE
        | flag::ENV::MDBX_LIFORECLAIM
        | flag::ENV::MDBX_COALESCE
        | flag::ENV::MDBX_NOMEMINIT
        | flag::ENV::MDBX_NOSUBDIR
        | flag::ENV::MDBX_SAFE_NOSYNC
        // | flag::ENV::MDBX_SYNC_DURABLE
      ),
      pagesize:-1
    };
  }
mdbx! {
 MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5909\u6570\u540D Env
 Test // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30B9\u30C8
}
let tx = w!();
let test = tx | Test;
test.set([1, 2], [6])?;
println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

match test.get([1, 2])? {
 Some(val) =&gt; {
  let t:&amp;[u8] = &amp;val;
  println!(&quot;{:?}&quot;,t);
 },
 None =&gt; unreachable!()
}
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
});

mdbx! {
  MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9ENV\u306E\u5909\u6570\u540D
  Test1
  Test2
    key Str
    val Str
  Test3
    key i32
    val u64
  Test4
    key u64
    val u16
    flag DUPSORT
}

fn main() -&gt; Result&lt;()&gt; {
  // \u30AF\u30A4\u30C3\u30AF\u30E9\u30A4\u30C8
  w!(Test1.set [2, 3],[4, 5]);

  // \u30AF\u30A4\u30C3\u30AF\u30EA\u30FC\u30C9
  match r!(Test1.get [2, 3]) {
    Some(r) =&gt; {
      println!(
        &quot;\\nu16::from_le_bytes({:?}) = {}&quot;,
        r,
        u16::from_le_bytes((*r).try_into()?)
      );
    }
    None =&gt; unreachable!(),
  }

  // \u540C\u4E00\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u5185\u3067\u8907\u6570\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u5BFE\u3057\u3066\u8907\u6570\u306E\u64CD\u4F5C\u3092\u884C\u3046\u3053\u3068\u304C\u53EF\u80FD
  {
    let tx = w!();
    let test1 = tx | Test1;

    test1.set(&amp;[9], &amp;[10, 12])?;
    test1.set([8, 1], [9])?;
    test1.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test1.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;

    println!(&quot;\\n-- loop test1&quot;);
    for (k, v) in test1 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    dbg!(test1.del_val([8, 1], [3])?);
    dbg!(test1.get([8, 1])?.unwrap());
    dbg!(test1.del_val([8, 1], [9])?);
    dbg!(test1.get([8, 1])?);

    dbg!(test1.del([9])?);
    dbg!(test1.get([9])?);
    dbg!(test1.del([9])?);

    let test2 = tx | Test2;
    test2.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test2.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;
    println!(&quot;\\n-- loop test2&quot;);
    for (k, v) in test2 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    let test3 = tx | Test3;

    test3.set(13, 32)?;
    test3.set(16, 32)?;
    test3.set(-15, 6)?;
    test3.set(-10, 6)?;
    test3.set(-12, 6)?;
    test3.set(0, 6)?;
    test3.set(10, 5)?;

    println!(&quot;\\n-- loop test3&quot;);
    for (k, v) in test3 {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    let test4 = tx | Test4;
    test4.set(10, 5)?;
    test4.set(10, 0)?;
    test4.set(13, 32)?;
    test4.set(16, 2)?;
    test4.set(16, 1)?;
    test4.set(16, 3)?;
    test4.set(0, 6)?;
    test4.set(10, 5)?;
    test4.set(0, 2)?;

    dbg!(test4.del_val(0, 2)?);
    dbg!(test4.del_val(0, 2)?);

    println!(&quot;\\n-- loop test4 rev&quot;);
    for (k, v) in test4.rev() {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    for i in test4.dup(16) {
      println!(&quot;dup(16) {:?}&quot;, i);
    }

    // \u30B9\u30B3\u30FC\u30D7\u7D42\u4E86\u6642\u306B\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u304C\u30B3\u30DF\u30C3\u30C8\u3055\u308C\u307E\u3059
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
Test2
  key Str
  val Str
Test3
  key i32
  val u64
Test4
  key u64
  val u16
  flag DUPSORT
use anyhow::Result;
use mdbx::prelude::*;

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
});

mdbx! {
  MDBX
  Test0
  Test1
    key u16
    val u64
    flag DUPSORT
  Test2
    key u32
    val u64
}

macro_rules! range_rev {
  ($var:ident, $range:expr) =&gt; {
    println!(&quot;\\n# {}.rev_range({:?})&quot;, stringify!($var), $range);
    for i in $var.range_rev($range) {
      println!(&quot;{:?}&quot;, i);
    }
  };
}

macro_rules! range {
  ($var:ident, $range:expr) =&gt; {
    println!(&quot;\\n# {}.range({:?})&quot;, stringify!($var), $range);
    for i in $var.range($range) {
      println!(&quot;{:?}&quot;, i);
    }
  };
}

fn main() -&gt; Result&lt;()&gt; {
  {
    println!(&quot;\\n&gt; Test0&quot;);
    let tx = &amp;MDBX.w()?;
    let test0 = tx | Test0;
    test0.set([0], [0, 1])?;
    test0.set([1], [1, 2])?;
    test0.set([2], [2, 3])?;
    test0.set([1, 1], [1, 3])?;
    test0.set([1, 2], [1, 3])?;
    test0.set([3], [])?;

    range!(test0, [1]..);
    let begin: &amp;[u8] = &amp;[1, 1];
    range!(test0, begin..=&amp;[2]);
  }

  {
    let tx = &amp;MDBX.w()?;

    let test1 = tx | Test1;
    test1.set(2, 9)?;
    test1.set(2, 4)?;
    test1.set(9, 7)?;
    test1.set(3, 0)?;
    test1.set(3, 8)?;
    test1.set(5, 3)?;
    test1.set(5, 8)?;
    test1.set(9, 1)?;
    println!(&quot;-- all&quot;);
    for i in test1 {
      println!(&quot;{:?}&quot;, i);
    }
    range!(test1, 1..3);
    range!(test1, 5..2);
    range!(test1, 1..=3);
    range!(test1, ..3);
    range!(test1, 3..);
    range_rev!(test1, ..1);
    range_rev!(test1, ..=1);
  }

  {
    println!(&quot;\\n&gt; Test2&quot;);
    let tx = &amp;MDBX.w()?;
    let test2 = tx | Test2;
    test2.set(2, 9)?;
    test2.set(1, 2)?;
    test2.set(2, 4)?;
    test2.set(1, 5)?;
    test2.set(9, 7)?;
    test2.set(9, 1)?;
    test2.set(0, 0)?;

    range!(test2, 1..3);
    range!(test2, 1..=3);
    range!(test2, ..3);
    range!(test2, 2..);
    range_rev!(test2, ..1);
    range_rev!(test2, 2..);
    range_rev!(test2, ..=1);
  }

  Ok(())
}
(5, 8)
(5, 3)
(3, 8)
(3, 0)
use anyhow::Result;
use mdbx::prelude::*;
use speedy::{Readable, Writable};

#[derive(PartialEq, Debug, Readable, Writable)]
pub struct City {
  name: String,
  lnglat: (u32, u32),
}

impl FromMdbx for City {
  fn from_mdbx(_: PtrTx, val: MDBX_val) -&gt; Self {
    Self::read_from_buffer(val_bytes!(val)).unwrap()
  }
}

impl ToAsRef&lt;City, Vec&lt;u8&gt;&gt; for City {
  fn to_as_ref(&amp;self) -&gt; Vec&lt;u8&gt; {
    self.write_to_vec().unwrap()
  }
}

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  db_path.into()
});

mdbx! {
  MDBX
  Test
    key u16
    val City
}

fn main() -&gt; Result&lt;()&gt; {
  let city = City {
    name: &quot;BeiJing&quot;.into(),
    lnglat: (11640, 3990),
  };

  let tx = w!();
  let test = tx | Test;
  test.set(1, city)?;
  println!(&quot;{:?}&quot;, test.get(1)?);

  Ok(())
}
</code></pre></div><p>\u51FA\u529B\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>Some(City { name: &quot;BeiJing&quot;, lnglat: (11640, 3990) })
</code></pre></div><p>\u30AB\u30B9\u30BF\u30E0\u30BF\u30A4\u30D7\u306E\u4F8B\u3067\u306F <a href="https://github.com/koute/speedy" target="_blank" rel="noopener noreferrer"><code>speedy</code></a> \u3092\u9023\u8F09\u3059\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3057\u305F<a href="https://github.com/djkoloski/rust_serialization_benchmark" target="_blank" rel="noopener noreferrer">\uFF08<code>speedy</code> \u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u30EC\u30D3\u30E5\u30FC</a>\uFF09\u3002</p><p>\u30AB\u30B9\u30BF\u30E0\u30BF\u30A4\u30D7\u306E\u5B9F\u88C5 <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.FromMdbx.html" target="_blank" rel="noopener noreferrer"><code>FromMdbx</code></a> \u3068 <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.ToAsRef.html" target="_blank" rel="noopener noreferrer"><code>ToAsRef</code></a> \u306F\u3001 <code>mdbx</code> \u306B\u4FDD\u5B58\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p><p>\u7279\u5B9A\u306E\u30B7\u30EA\u30A2\u30E9\u30A4\u30BA\u30E9\u30A4\u30D6\u30E9\u30EA\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408\u306F\u3001\u5C5E\u6027 <a href="https://blog.logrocket.com/macros-in-rust-a-tutorial-with-examples/" target="_blank" rel="noopener noreferrer">\u30DE\u30AF\u30ED\u3092</a> \u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3057\u3066\u51E6\u7406\u3092\u7C21\u7565\u5316\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059\u3002</p><h4 id="\u5C5E\u6027\u30DE\u30AF\u30ED\u306B\u3088\u308B\u30AB\u30B9\u30BF\u30E0\u30BF\u30A4\u30D5\u309A\u306E\u7C21\u7565\u5316" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u30DE\u30AF\u30ED\u306B\u3088\u308B\u30AB\u30B9\u30BF\u30E0\u30BF\u30A4\u30D5\u309A\u306E\u7C21\u7565\u5316" aria-hidden="true">#</a> \u5C5E\u6027\u30DE\u30AF\u30ED\u306B\u3088\u308B\u30AB\u30B9\u30BF\u30E0\u30BF\u30A4\u30D7\u306E\u7C21\u7565\u5316</h4><p>\u30A2\u30C8\u30EA\u30D3\u30E5\u30FC\u30C8\u30DE\u30AF\u30ED\u306E\u5B9F\u88C5\u306F\u3001\u6B21\u306E\u3088\u3046\u306B\u7C21\u5358\u3067\u3059\u3002 <a href="https://crates.io/crates/mdbx_speedy" target="_blank" rel="noopener noreferrer"><code>mdbx_speedy</code></a> \u30A2\u30C8\u30EA\u30D3\u30E5\u30FC\u30C8\u30DE\u30AF\u30ED\u306E\u30B3\u30FC\u30C9\u306F\u6B21\u306E\u3068\u304A\u308A\u3067\u3059\u3002</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(
  MDBX,
  {
    let mut db_path = std::env::current_exe().unwrap();
    db_path.set_extension(&quot;mdb&quot;);
    println!(&quot;mdbx file path {}&quot;, db_path.display());
    db_path.into()
  },
  r,
  w
);

mdbx! {
  MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5909\u6570\u540D Env
  Test // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30B9\u30C8
}

fn main() -&gt; Result&lt;()&gt; {
  // libmdbx \u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u756A\u53F7\u3092\u51FA\u529B\u3057\u307E\u3059\u3002
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u30DE\u30EB\u30C1\u30B9\u30EC\u30C3\u30C9\u3067\u306E\u8AAD\u307F\u66F8\u304D\u304C\u53EF\u80FD
  let t = std::thread::spawn(|| {
    let tx = w!();
    let test = tx | Test;
    test.set([1, 2], [6])?;
    println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

    match test.get([1, 2])? {
      Some(val) =&gt; {
        let t: &amp;[u8] = &amp;val;
        println!(&quot;{:?}&quot;, t);
      }
      None =&gt; unreachable!(),
    }
    Ok(())
  });

  t.join().unwrap()?;

  Ok(())
}
  #[derive(Clone, Debug)]
  pub struct Config {
    path: PathBuf,
    mode: ffi::mdbx_mode_t,
    flag: flag::ENV,
    sync_period: u64,
    sync_bytes: u64,
    max_db: u64,
    pagesize: isize,
  }
  
  lazy_static! {
    pub static ref ENV_CONFIG_DEFAULT: Config = Config {
      path:PathBuf::new(),
      mode: 0o600,
      //https://github.com/erthink/libmdbx/issues/248
      sync_period : 65536, // 1/65536\u79D2\u306E\u9593\u306B
      sync_bytes : 65536,
      max_db : 256,
      flag : (
          flag::ENV::MDBX_EXCLUSIVE
        | flag::ENV::MDBX_LIFORECLAIM
        | flag::ENV::MDBX_COALESCE
        | flag::ENV::MDBX_NOMEMINIT
        | flag::ENV::MDBX_NOSUBDIR
        | flag::ENV::MDBX_SAFE_NOSYNC
        // | flag::ENV::MDBX_SYNC_DURABLE
      ),
      pagesize:-1
    };
  }
mdbx! {
 MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5909\u6570\u540D Env
 Test // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30B9\u30C8
}
let tx = w!();
let test = tx | Test;
test.set([1, 2], [6])?;
println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

match test.get([1, 2])? {
 Some(val) =&gt; {
  let t:&amp;[u8] = &amp;val;
  println!(&quot;{:?}&quot;,t);
 },
 None =&gt; unreachable!()
}
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
});

mdbx! {
  MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9ENV\u306E\u5909\u6570\u540D
  Test1
  Test2
    key Str
    val Str
  Test3
    key i32
    val u64
  Test4
    key u64
    val u16
    flag DUPSORT
}

fn main() -&gt; Result&lt;()&gt; {
  // \u30AF\u30A4\u30C3\u30AF\u30E9\u30A4\u30C8
  w!(Test1.set [2, 3],[4, 5]);

  // \u30AF\u30A4\u30C3\u30AF\u30EA\u30FC\u30C9
  match r!(Test1.get [2, 3]) {
    Some(r) =&gt; {
      println!(
        &quot;\\nu16::from_le_bytes({:?}) = {}&quot;,
        r,
        u16::from_le_bytes((*r).try_into()?)
      );
    }
    None =&gt; unreachable!(),
  }

  // \u540C\u4E00\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u5185\u3067\u8907\u6570\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u5BFE\u3057\u3066\u8907\u6570\u306E\u64CD\u4F5C\u3092\u884C\u3046\u3053\u3068\u304C\u53EF\u80FD
  {
    let tx = w!();
    let test1 = tx | Test1;

    test1.set(&amp;[9], &amp;[10, 12])?;
    test1.set([8, 1], [9])?;
    test1.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test1.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;

    println!(&quot;\\n-- loop test1&quot;);
    for (k, v) in test1 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    dbg!(test1.del_val([8, 1], [3])?);
    dbg!(test1.get([8, 1])?.unwrap());
    dbg!(test1.del_val([8, 1], [9])?);
    dbg!(test1.get([8, 1])?);

    dbg!(test1.del([9])?);
    dbg!(test1.get([9])?);
    dbg!(test1.del([9])?);

    let test2 = tx | Test2;
    test2.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test2.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;
    println!(&quot;\\n-- loop test2&quot;);
    for (k, v) in test2 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    let test3 = tx | Test3;

    test3.set(13, 32)?;
    test3.set(16, 32)?;
    test3.set(-15, 6)?;
    test3.set(-10, 6)?;
    test3.set(-12, 6)?;
    test3.set(0, 6)?;
    test3.set(10, 5)?;

    println!(&quot;\\n-- loop test3&quot;);
    for (k, v) in test3 {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    let test4 = tx | Test4;
    test4.set(10, 5)?;
    test4.set(10, 0)?;
    test4.set(13, 32)?;
    test4.set(16, 2)?;
    test4.set(16, 1)?;
    test4.set(16, 3)?;
    test4.set(0, 6)?;
    test4.set(10, 5)?;
    test4.set(0, 2)?;

    dbg!(test4.del_val(0, 2)?);
    dbg!(test4.del_val(0, 2)?);

    println!(&quot;\\n-- loop test4 rev&quot;);
    for (k, v) in test4.rev() {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    for i in test4.dup(16) {
      println!(&quot;dup(16) {:?}&quot;, i);
    }

    // \u30B9\u30B3\u30FC\u30D7\u7D42\u4E86\u6642\u306B\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u304C\u30B3\u30DF\u30C3\u30C8\u3055\u308C\u307E\u3059
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
Test2
  key Str
  val Str
Test3
  key i32
  val u64
Test4
  key u64
  val u16
  flag DUPSORT
use anyhow::Result;
use mdbx::prelude::*;

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
});

mdbx! {
  MDBX
  Test0
  Test1
    key u16
    val u64
    flag DUPSORT
  Test2
    key u32
    val u64
}

macro_rules! range_rev {
  ($var:ident, $range:expr) =&gt; {
    println!(&quot;\\n# {}.rev_range({:?})&quot;, stringify!($var), $range);
    for i in $var.range_rev($range) {
      println!(&quot;{:?}&quot;, i);
    }
  };
}

macro_rules! range {
  ($var:ident, $range:expr) =&gt; {
    println!(&quot;\\n# {}.range({:?})&quot;, stringify!($var), $range);
    for i in $var.range($range) {
      println!(&quot;{:?}&quot;, i);
    }
  };
}

fn main() -&gt; Result&lt;()&gt; {
  {
    println!(&quot;\\n&gt; Test0&quot;);
    let tx = &amp;MDBX.w()?;
    let test0 = tx | Test0;
    test0.set([0], [0, 1])?;
    test0.set([1], [1, 2])?;
    test0.set([2], [2, 3])?;
    test0.set([1, 1], [1, 3])?;
    test0.set([1, 2], [1, 3])?;
    test0.set([3], [])?;

    range!(test0, [1]..);
    let begin: &amp;[u8] = &amp;[1, 1];
    range!(test0, begin..=&amp;[2]);
  }

  {
    let tx = &amp;MDBX.w()?;

    let test1 = tx | Test1;
    test1.set(2, 9)?;
    test1.set(2, 4)?;
    test1.set(9, 7)?;
    test1.set(3, 0)?;
    test1.set(3, 8)?;
    test1.set(5, 3)?;
    test1.set(5, 8)?;
    test1.set(9, 1)?;
    println!(&quot;-- all&quot;);
    for i in test1 {
      println!(&quot;{:?}&quot;, i);
    }
    range!(test1, 1..3);
    range!(test1, 5..2);
    range!(test1, 1..=3);
    range!(test1, ..3);
    range!(test1, 3..);
    range_rev!(test1, ..1);
    range_rev!(test1, ..=1);
  }

  {
    println!(&quot;\\n&gt; Test2&quot;);
    let tx = &amp;MDBX.w()?;
    let test2 = tx | Test2;
    test2.set(2, 9)?;
    test2.set(1, 2)?;
    test2.set(2, 4)?;
    test2.set(1, 5)?;
    test2.set(9, 7)?;
    test2.set(9, 1)?;
    test2.set(0, 0)?;

    range!(test2, 1..3);
    range!(test2, 1..=3);
    range!(test2, ..3);
    range!(test2, 2..);
    range_rev!(test2, ..1);
    range_rev!(test2, 2..);
    range_rev!(test2, ..=1);
  }

  Ok(())
}
(5, 8)
(5, 3)
(3, 8)
(3, 0)
use anyhow::Result;
use mdbx::prelude::*;
use speedy::{Readable, Writable};

#[derive(PartialEq, Debug, Readable, Writable)]
pub struct City {
  name: String,
  lnglat: (u32, u32),
}

impl FromMdbx for City {
  fn from_mdbx(_: PtrTx, val: MDBX_val) -&gt; Self {
    Self::read_from_buffer(val_bytes!(val)).unwrap()
  }
}

impl ToAsRef&lt;City, Vec&lt;u8&gt;&gt; for City {
  fn to_as_ref(&amp;self) -&gt; Vec&lt;u8&gt; {
    self.write_to_vec().unwrap()
  }
}

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  db_path.into()
});

mdbx! {
  MDBX
  Test
    key u16
    val City
}

fn main() -&gt; Result&lt;()&gt; {
  let city = City {
    name: &quot;BeiJing&quot;.into(),
    lnglat: (11640, 3990),
  };

  let tx = w!();
  let test = tx | Test;
  test.set(1, city)?;
  println!(&quot;{:?}&quot;, test.get(1)?);

  Ok(())
}
extern crate proc_macro;
extern crate syn;
#[macro_use]
extern crate quote;

use proc_macro::TokenStream;

#[proc_macro_derive(MdbxSpeedy)]
pub fn mdbx_speedy(ts: TokenStream) -&gt; TokenStream {
  let ast: syn::DeriveInput = syn::parse(ts).unwrap();
  let name = &amp;ast.ident;
  quote! {
    impl mdbx::prelude::FromMdbx for #name {
      fn from_mdbx(_: mdbx::prelude::PtrTx, val: mdbx::prelude::MDBX_val) -&gt; Self {
        Self::read_from_buffer(val_bytes!(val)).unwrap()
      }
    }

    impl mdbx::prelude::ToAsRef&lt;#name, Vec&lt;u8&gt;&gt; for #name {
      fn to_as_ref(&amp;self) -&gt; Vec&lt;u8&gt; {
        self.write_to_vec().unwrap()
      }
    }

  }
  .into()
}
</code></pre></div><p>\u81EA\u5206\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067 <code>cargo add mdbx-speedy</code>\u304B\u3089\u59CB\u3081\u3066\u3001\u3059\u3050\u306B\u578B\u3092\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3067\u304D\u307E\u3059 (\u30C7\u30E2\u30B3\u30FC\u30C9\u306F <a href="https://github.com/rmw-lib/mdbx-example/blob/master/02/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/02</a> \u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044)\u3002</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(
  MDBX,
  {
    let mut db_path = std::env::current_exe().unwrap();
    db_path.set_extension(&quot;mdb&quot;);
    println!(&quot;mdbx file path {}&quot;, db_path.display());
    db_path.into()
  },
  r,
  w
);

mdbx! {
  MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5909\u6570\u540D Env
  Test // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30B9\u30C8
}

fn main() -&gt; Result&lt;()&gt; {
  // libmdbx \u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u756A\u53F7\u3092\u51FA\u529B\u3057\u307E\u3059\u3002
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u30DE\u30EB\u30C1\u30B9\u30EC\u30C3\u30C9\u3067\u306E\u8AAD\u307F\u66F8\u304D\u304C\u53EF\u80FD
  let t = std::thread::spawn(|| {
    let tx = w!();
    let test = tx | Test;
    test.set([1, 2], [6])?;
    println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

    match test.get([1, 2])? {
      Some(val) =&gt; {
        let t: &amp;[u8] = &amp;val;
        println!(&quot;{:?}&quot;, t);
      }
      None =&gt; unreachable!(),
    }
    Ok(())
  });

  t.join().unwrap()?;

  Ok(())
}
  #[derive(Clone, Debug)]
  pub struct Config {
    path: PathBuf,
    mode: ffi::mdbx_mode_t,
    flag: flag::ENV,
    sync_period: u64,
    sync_bytes: u64,
    max_db: u64,
    pagesize: isize,
  }
  
  lazy_static! {
    pub static ref ENV_CONFIG_DEFAULT: Config = Config {
      path:PathBuf::new(),
      mode: 0o600,
      //https://github.com/erthink/libmdbx/issues/248
      sync_period : 65536, // 1/65536\u79D2\u306E\u9593\u306B
      sync_bytes : 65536,
      max_db : 256,
      flag : (
          flag::ENV::MDBX_EXCLUSIVE
        | flag::ENV::MDBX_LIFORECLAIM
        | flag::ENV::MDBX_COALESCE
        | flag::ENV::MDBX_NOMEMINIT
        | flag::ENV::MDBX_NOSUBDIR
        | flag::ENV::MDBX_SAFE_NOSYNC
        // | flag::ENV::MDBX_SYNC_DURABLE
      ),
      pagesize:-1
    };
  }
mdbx! {
 MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5909\u6570\u540D Env
 Test // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30B9\u30C8
}
let tx = w!();
let test = tx | Test;
test.set([1, 2], [6])?;
println!(&quot;test1 get {:?}&quot;, test.get([1, 2]));

match test.get([1, 2])? {
 Some(val) =&gt; {
  let t:&amp;[u8] = &amp;val;
  println!(&quot;{:?}&quot;,t);
 },
 None =&gt; unreachable!()
}
use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
});

mdbx! {
  MDBX // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9ENV\u306E\u5909\u6570\u540D
  Test1
  Test2
    key Str
    val Str
  Test3
    key i32
    val u64
  Test4
    key u64
    val u16
    flag DUPSORT
}

fn main() -&gt; Result&lt;()&gt; {
  // \u30AF\u30A4\u30C3\u30AF\u30E9\u30A4\u30C8
  w!(Test1.set [2, 3],[4, 5]);

  // \u30AF\u30A4\u30C3\u30AF\u30EA\u30FC\u30C9
  match r!(Test1.get [2, 3]) {
    Some(r) =&gt; {
      println!(
        &quot;\\nu16::from_le_bytes({:?}) = {}&quot;,
        r,
        u16::from_le_bytes((*r).try_into()?)
      );
    }
    None =&gt; unreachable!(),
  }

  // \u540C\u4E00\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u5185\u3067\u8907\u6570\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u5BFE\u3057\u3066\u8907\u6570\u306E\u64CD\u4F5C\u3092\u884C\u3046\u3053\u3068\u304C\u53EF\u80FD
  {
    let tx = w!();
    let test1 = tx | Test1;

    test1.set(&amp;[9], &amp;[10, 12])?;
    test1.set([8, 1], [9])?;
    test1.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test1.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;

    println!(&quot;\\n-- loop test1&quot;);
    for (k, v) in test1 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    dbg!(test1.del_val([8, 1], [3])?);
    dbg!(test1.get([8, 1])?.unwrap());
    dbg!(test1.del_val([8, 1], [9])?);
    dbg!(test1.get([8, 1])?);

    dbg!(test1.del([9])?);
    dbg!(test1.get([9])?);
    dbg!(test1.del([9])?);

    let test2 = tx | Test2;
    test2.set(&quot;rmw.link&quot;, &quot;Down with Data Hegemony&quot;)?;
    test2.set(&amp;&quot;abc&quot;, &amp;&quot;012&quot;)?;
    println!(&quot;\\n-- loop test2&quot;);
    for (k, v) in test2 {
      println!(&quot;{} = {}&quot;, k, v);
    }

    let test3 = tx | Test3;

    test3.set(13, 32)?;
    test3.set(16, 32)?;
    test3.set(-15, 6)?;
    test3.set(-10, 6)?;
    test3.set(-12, 6)?;
    test3.set(0, 6)?;
    test3.set(10, 5)?;

    println!(&quot;\\n-- loop test3&quot;);
    for (k, v) in test3 {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    let test4 = tx | Test4;
    test4.set(10, 5)?;
    test4.set(10, 0)?;
    test4.set(13, 32)?;
    test4.set(16, 2)?;
    test4.set(16, 1)?;
    test4.set(16, 3)?;
    test4.set(0, 6)?;
    test4.set(10, 5)?;
    test4.set(0, 2)?;

    dbg!(test4.del_val(0, 2)?);
    dbg!(test4.del_val(0, 2)?);

    println!(&quot;\\n-- loop test4 rev&quot;);
    for (k, v) in test4.rev() {
      println!(&quot;{:?} = {:?}&quot;, k, v);
    }

    for i in test4.dup(16) {
      println!(&quot;dup(16) {:?}&quot;, i);
    }

    // \u30B9\u30B3\u30FC\u30D7\u7D42\u4E86\u6642\u306B\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u304C\u30B3\u30DF\u30C3\u30C8\u3055\u308C\u307E\u3059
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
Test2
  key Str
  val Str
Test3
  key i32
  val u64
Test4
  key u64
  val u16
  flag DUPSORT
use anyhow::Result;
use mdbx::prelude::*;

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
});

mdbx! {
  MDBX
  Test0
  Test1
    key u16
    val u64
    flag DUPSORT
  Test2
    key u32
    val u64
}

macro_rules! range_rev {
  ($var:ident, $range:expr) =&gt; {
    println!(&quot;\\n# {}.rev_range({:?})&quot;, stringify!($var), $range);
    for i in $var.range_rev($range) {
      println!(&quot;{:?}&quot;, i);
    }
  };
}

macro_rules! range {
  ($var:ident, $range:expr) =&gt; {
    println!(&quot;\\n# {}.range({:?})&quot;, stringify!($var), $range);
    for i in $var.range($range) {
      println!(&quot;{:?}&quot;, i);
    }
  };
}

fn main() -&gt; Result&lt;()&gt; {
  {
    println!(&quot;\\n&gt; Test0&quot;);
    let tx = &amp;MDBX.w()?;
    let test0 = tx | Test0;
    test0.set([0], [0, 1])?;
    test0.set([1], [1, 2])?;
    test0.set([2], [2, 3])?;
    test0.set([1, 1], [1, 3])?;
    test0.set([1, 2], [1, 3])?;
    test0.set([3], [])?;

    range!(test0, [1]..);
    let begin: &amp;[u8] = &amp;[1, 1];
    range!(test0, begin..=&amp;[2]);
  }

  {
    let tx = &amp;MDBX.w()?;

    let test1 = tx | Test1;
    test1.set(2, 9)?;
    test1.set(2, 4)?;
    test1.set(9, 7)?;
    test1.set(3, 0)?;
    test1.set(3, 8)?;
    test1.set(5, 3)?;
    test1.set(5, 8)?;
    test1.set(9, 1)?;
    println!(&quot;-- all&quot;);
    for i in test1 {
      println!(&quot;{:?}&quot;, i);
    }
    range!(test1, 1..3);
    range!(test1, 5..2);
    range!(test1, 1..=3);
    range!(test1, ..3);
    range!(test1, 3..);
    range_rev!(test1, ..1);
    range_rev!(test1, ..=1);
  }

  {
    println!(&quot;\\n&gt; Test2&quot;);
    let tx = &amp;MDBX.w()?;
    let test2 = tx | Test2;
    test2.set(2, 9)?;
    test2.set(1, 2)?;
    test2.set(2, 4)?;
    test2.set(1, 5)?;
    test2.set(9, 7)?;
    test2.set(9, 1)?;
    test2.set(0, 0)?;

    range!(test2, 1..3);
    range!(test2, 1..=3);
    range!(test2, ..3);
    range!(test2, 2..);
    range_rev!(test2, ..1);
    range_rev!(test2, 2..);
    range_rev!(test2, ..=1);
  }

  Ok(())
}
(5, 8)
(5, 3)
(3, 8)
(3, 0)
use anyhow::Result;
use mdbx::prelude::*;
use speedy::{Readable, Writable};

#[derive(PartialEq, Debug, Readable, Writable)]
pub struct City {
  name: String,
  lnglat: (u32, u32),
}

impl FromMdbx for City {
  fn from_mdbx(_: PtrTx, val: MDBX_val) -&gt; Self {
    Self::read_from_buffer(val_bytes!(val)).unwrap()
  }
}

impl ToAsRef&lt;City, Vec&lt;u8&gt;&gt; for City {
  fn to_as_ref(&amp;self) -&gt; Vec&lt;u8&gt; {
    self.write_to_vec().unwrap()
  }
}

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  db_path.into()
});

mdbx! {
  MDBX
  Test
    key u16
    val City
}

fn main() -&gt; Result&lt;()&gt; {
  let city = City {
    name: &quot;BeiJing&quot;.into(),
    lnglat: (11640, 3990),
  };

  let tx = w!();
  let test = tx | Test;
  test.set(1, city)?;
  println!(&quot;{:?}&quot;, test.get(1)?);

  Ok(())
}
extern crate proc_macro;
extern crate syn;
#[macro_use]
extern crate quote;

use proc_macro::TokenStream;

#[proc_macro_derive(MdbxSpeedy)]
pub fn mdbx_speedy(ts: TokenStream) -&gt; TokenStream {
  let ast: syn::DeriveInput = syn::parse(ts).unwrap();
  let name = &amp;ast.ident;
  quote! {
    impl mdbx::prelude::FromMdbx for #name {
      fn from_mdbx(_: mdbx::prelude::PtrTx, val: mdbx::prelude::MDBX_val) -&gt; Self {
        Self::read_from_buffer(val_bytes!(val)).unwrap()
      }
    }

    impl mdbx::prelude::ToAsRef&lt;#name, Vec&lt;u8&gt;&gt; for #name {
      fn to_as_ref(&amp;self) -&gt; Vec&lt;u8&gt; {
        self.write_to_vec().unwrap()
      }
    }

  }
  .into()
}
use anyhow::Result;
use mdbx::prelude::*;
use mdbx_speedy::MdbxSpeedy;
use speedy::{Readable, Writable};

#[derive(PartialEq, Debug, Readable, Writable, MdbxSpeedy)]
pub struct City {
  name: String,
  lnglat: (u32, u32),
}
</code></pre></div><p>\u3082\u3061\u308D\u3093\u3001 <code>#[derive(PartialEq, Debug, Readable, Writable, MdbxSpeedy)]</code> \u3092\u4F55\u5EA6\u3082\u66F8\u304F\u306E\u306F\u3084\u306F\u308A\u7169\u308F\u3057\u3044\u306E\u3067 <a href="https://docs.rs/derive-alias/0.1.0/derive_alias" target="_blank" rel="noopener noreferrer"><code>derive_alias</code></a> \u3092\u4F7F\u7528\u3057\u3066\u3001\u3055\u3089\u306B\u30B3\u30FC\u30C9\u3092\u7C21\u7565\u5316\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p><h2 id="\u306E\u4F7F\u7528\u306B\u95A2\u3059\u308B\u6CE8\u610F\u4E8B\u9805" tabindex="-1"><a class="header-anchor" href="#\u306E\u4F7F\u7528\u306B\u95A2\u3059\u308B\u6CE8\u610F\u4E8B\u9805" aria-hidden="true">#</a> \u306E\u4F7F\u7528\u306B\u95A2\u3059\u308B\u6CE8\u610F\u4E8B\u9805</h2><h3 id="\u9375\u306E\u9577\u3055" tabindex="-1"><a class="header-anchor" href="#\u9375\u306E\u9577\u3055" aria-hidden="true">#</a> \u9375\u306E\u9577\u3055</h3><ul><li><code>65536</code>\u6700\u5C0F0\u3001\u6700\u5927\u22481/2\u30DA\u30FC\u30B8\u30B5\u30A4\u30BA\uFF08\u30C7\u30D5\u30A9\u30EB\u30C84K\u30DA\u30FC\u30B8\u30AD\u30FC\u6700\u5927\u30B5\u30A4\u30BA\u306F2022\u30D0\u30A4\u30C8\uFF09\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u521D\u671F\u5316\u6642\u306B\u8A2D\u5B9A <code>pagesize</code> \u4EE5\u4E0B\u3067\u8A2D\u5B9A\u53EF\u80FD\u30012\u306E\u3079\u304D\u4E57\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002</li></ul><h2 id="\u811A\u6CE8" tabindex="-1"><a class="header-anchor" href="#\u811A\u6CE8" aria-hidden="true">#</a> \u811A\u6CE8</h2><p>LMDB\u304B\u3089MDBX\u306B\u79FB\u884C\u3059\u308B\u30E1\u30EA\u30C3\u30C8\u3092\u6319\u3052\u3066\u3044\u308B\u3002</p><blockquote><p>Erigon \u306F BoltDB \u3092\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u3068\u3057\u3001\u305D\u306E\u5F8C BadgerDB \u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u3001\u6700\u7D42\u7684\u306B LMDB \u306B\u5B8C\u5168\u306B\u79FB\u884C\u3057\u307E\u3057\u305F\u3002\u3042\u308B\u6642\u70B9\u3067\u3001LMDB \u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u767A\u751F\u3057\u305F\u3001\u958B\u767A\u8005\u304C\u4E88\u671F\u3057\u3066\u3044\u306A\u304B\u3063\u305F\u5B89\u5B9A\u6027\u306E\u554F\u984C\u306B\u76F4\u9762\u3057\u307E\u3057\u305F\u3002\u305D\u308C\u4EE5\u6765\u3001\u79C1\u305F\u3061\u306F MDBX \u3068\u547C\u3070\u308C\u308B LMDB \u306E\u3088\u304F\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u305F\u6D3E\u751F\u7269\u306B\u6CE8\u76EE\u3057\u3001\u305D\u306E\u5B89\u5B9A\u6027\u306E\u5411\u4E0A\u3092\u5229\u7528\u3057\u3001\u5C06\u6765\u7684\u306B\u306F\u3088\u308A\u591A\u304F\u306E\u30B3\u30E9\u30DC\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u884C\u3046\u3053\u3068\u3092\u5E0C\u671B\u3057\u3066\u3044\u307E\u3059\u3002</p><p>LMDB\u304B\u3089MDBX\u3078\u306E\u79FB\u884C\u306E\u30E1\u30EA\u30C3\u30C8\u3002</p><ol><li><p>\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30D5\u30A1\u30A4\u30EB\u306E\u6210\u9577\u300C\u7A7A\u9593\uFF08\u30B8\u30AA\u30E1\u30C8\u30EA\u30FC\uFF09\u300D\u306F\u6B63\u5E38\u306B\u52D5\u4F5C\u3057\u307E\u3059\u3002\u3053\u308C\u306F\u7279\u306BWindows\u3067\u306F\u91CD\u8981\u306A\u3053\u3068\u3067\u3059\u3002LMDB\u3067\u306F\u3001\u4E8B\u524D\u306B\u4E00\u5EA6\u3060\u3051\u30E1\u30E2\u30EA\u30DE\u30C3\u30D7\u306E\u30B5\u30A4\u30BA\u3092\u6307\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\uFF08\u73FE\u5728\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u30672Tb\u3092\u4F7F\u7528\uFF09\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30D5\u30A1\u30A4\u30EB\u304C\u3053\u306E\u5236\u9650\u3092\u8D85\u3048\u3066\u5927\u304D\u304F\u306A\u3063\u305F\u5834\u5408\u3001\u30D7\u30ED\u30BB\u30B9\u3092\u518D\u8D77\u52D5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002Windows\u3067\u306F\u3001\u30E1\u30E2\u30EA\u30DE\u30C3\u30D7\u30B5\u30A4\u30BA\u30922Tb\u306B\u8A2D\u5B9A\u3059\u308B\u3068\u3001\u305D\u3082\u305D\u3082\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30D5\u30A1\u30A4\u30EB\u304C2Tb\u306E\u5927\u304D\u3055\u306B\u306A\u308A\u3001\u3042\u307E\u308A\u4FBF\u5229\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002MDBX\u3067\u306F\u3001\u30E1\u30E2\u30EA\u30DE\u30C3\u30D7\u30B5\u30A4\u30BA\u306F2Gb\u5358\u4F4D\u3067\u30A4\u30F3\u30AF\u30EA\u30E1\u30F3\u30C8\u3055\u308C\u307E\u3059\u3002\u305D\u306E\u305F\u3081\u3001\u6642\u3005\u30EA\u30DE\u30C3\u30D7\u3092\u884C\u3046\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u304C\u3001\u7D50\u679C\u7684\u306B\u30E6\u30FC\u30B6\u30FC\u30A8\u30AF\u30B9\u30DA\u30EA\u30A8\u30F3\u30B9\u3092\u5411\u4E0A\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p></li><li><p>MDBX\u3067\u306F\u3001\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u51E6\u7406\u306E\u540C\u6642\u4F7F\u7528\u3084\u3001\u540C\u3058\u5B9F\u884C\u30B9\u30EC\u30C3\u30C9\u3067\u306E\u8AAD\u307F\u53D6\u308A\u3068\u66F8\u304D\u8FBC\u307F\u306E\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u306E\u91CD\u8907\u306B\u3064\u3044\u3066\u3001\u3088\u308A\u53B3\u3057\u3044\u30C1\u30A7\u30C3\u30AF\u304C\u884C\u308F\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u308A\u3001\u660E\u3089\u304B\u3067\u306A\u3044\u30A8\u30E9\u30FC\u3082\u767A\u898B\u3067\u304D\u3001\u52D5\u4F5C\u3082\u3088\u308A\u4E88\u6E2C\u3057\u3084\u3059\u304F\u306A\u308A\u307E\u3059\u3002<br> 5\u5E74\u4EE5\u4E0A\uFF08LMDB\u304B\u3089\u5206\u96E2\u3057\u3066\uFF09\u306E\u9593\u306B\u3001MDBX\u306F\u5927\u91CF\u306E\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u4FEE\u6B63\u3068\u30CF\u30A4\u30BC\u30F3\u30D0\u30B0\u306E\u4FEE\u6B63\u3092\u84C4\u7A4D\u3057\u3066\u304D\u307E\u3057\u305F\u304C\u3001\u79C1\u305F\u3061\u306E\u77E5\u308B\u9650\u308A\u3001LMDB\u306B\u306F\u307E\u3060\u5B58\u5728\u3057\u3066\u3044\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u4E2D\u306B\u306F\u3001\u79C1\u305F\u3061\u306E\u30C6\u30B9\u30C8\u4E2D\u306B\u767A\u898B\u3055\u308C\u305F\u3082\u306E\u3082\u3042\u308A\u307E\u3057\u305F\u304C\u3001MDBX\u306E\u30E1\u30F3\u30C6\u30CA\u306F\u305D\u308C\u3092\u771F\u646F\u306B\u53D7\u3051\u6B62\u3081\u3001\u8FC5\u901F\u306B\u4FEE\u6B63\u3057\u307E\u3057\u305F\u3002</p></li><li><p>\u5E38\u306B\u30C7\u30FC\u30BF\u3092\u66F4\u65B0\u3057\u3066\u3044\u308B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u95A2\u3057\u3066\u306F\u3001\u304B\u306A\u308A\u306E\u91CF\u306E\u518D\u5229\u7528\u53EF\u80FD\u9818\u57DF\uFF08LMDB\u7528\u8A9E\u3067\u306F\u300C\u30D5\u30EA\u30FC\u30EA\u30B9\u30C8\u300D\u3068\u3082\u547C\u3070\u308C\u308B\uFF09\u304C\u4F5C\u6210\u3055\u308C\u308B\u3002LMDB\u3067\u306F\u3001\u518D\u5229\u7528\u53EF\u80FD\u306A\u9818\u57DF\u306E\u53D6\u308A\u6271\u3044\u306B\u95A2\u3059\u308B\u6700\u3082\u6DF1\u523B\u306A\u6B20\u70B9 <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide" target="_blank" rel="noopener noreferrer">\uFF08\u89E3\u6790</a> \uFF09\u3092\u4FEE\u6B63\u3059\u308B\u305F\u3081\u306B\u30D1\u30C3\u30C1\u3092\u9069\u7528\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002 MDBX\u3067\u306F\u3001<a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide%EF%BC%89%E3%80%82MDBX%E5%AF%B9%E5%8F%AF%E5%9B%9E%E6%94%B6%E7%A9%BA%E9%97%B4%E7%9A%84%E6%9C%89%E6%95%88%E5%A4%84%E7%90%86%E8%BF%9B%E8%A1%8C%E4%BA%86%E7%89%B9%E5%88%AB%E7%9A%84%E5%85%B3%E6%B3%A8%EF%BC%8C%E5%88%B0%E7%9B%AE%E5%89%8D%E4%B8%BA%E6%AD%A2%EF%BC%8C%E8%BF%98%E4%B8%8D%E9%9C%80%E8%A6%81%E6%89%93%E8%A1%A5%E4%B8%81%E3%80%82" target="_blank" rel="noopener noreferrer">\u518D\u5229\u7528\u53EF\u80FD\u306A\u9818\u57DF\u306E\u52B9\u7387\u7684\u306A\u53D6\u308A\u6271\u3044\u306B\u7279\u306B\u6CE8\u610F\u3092\u6255\u3063\u3066\u304A\u308A\u3001\u3053\u308C\u307E\u3067\u306E\u3068\u3053\u308D\u30D1\u30C3\u30C1\u306E\u9069\u7528\u306F\u5FC5\u8981</a>\u3042\u308A\u307E\u305B\u3093\u3002</p></li><li><p>\u6211\u3005\u306E\u30C6\u30B9\u30C8\u306B\u3088\u308B\u3068\u3001MDBX\u306F\u6211\u3005\u306E\u30EF\u30FC\u30AF\u30ED\u30FC\u30C9\u3067\u308F\u305A\u304B\u306B\u512A\u308C\u305F\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u3092\u767A\u63EE\u3057\u307E\u3057\u305F\u3002</p></li><li><p>MDBX\u306F\u3001\u3088\u308A\u591A\u304F\u306E\u5185\u90E8\u9060\u9694\u6E2C\u5B9A\u30C7\u30FC\u30BF\u3001\u3064\u307E\u308A\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u5185\u90E8\u3067\u8D77\u3053\u3063\u3066\u3044\u308B\u3053\u3068\u306B\u95A2\u3059\u308B\u3088\u308A\u591A\u304F\u306E\u6307\u6A19\u3092\u516C\u958B\u3057\u307E\u3059\u3002\u305D\u3057\u3066\u3001\u3053\u306E\u30C7\u30FC\u30BF\u3092Grafana\u3067\u7BA1\u7406\u3059\u308B\u3053\u3068\u3067\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u8A2D\u8A08\u306B\u95A2\u3059\u308B\u3088\u308A\u826F\u3044\u610F\u601D\u6C7A\u5B9A\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u4F8B\u3048\u3070\u3001MDBX\u3078\u306E\u5B8C\u5168\u79FB\u884C\uFF08LMDB\u306E\u30B5\u30DD\u30FC\u30C8\u7D42\u4E86\uFF09\u5F8C\u306F\u3001\u30C7\u30A3\u30B9\u30AF\u306E\u30AA\u30FC\u30D0\u30FC\u30D5\u30ED\u30FC/\u30A2\u30F3\u30D5\u30ED\u30FC\u3092\u907F\u3051\u308B\u305F\u3081\u306B\u3001\u300Ccommit half full transaction\u300D\u30DD\u30EA\u30B7\u30FC\u3092\u5B9F\u88C5\u3059\u308B\u4E88\u5B9A\u3067\u3059\u3002\u3053\u308C\u306B\u3088\u308A\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306B\u5F71\u97FF\u3092\u4E0E\u3048\u308B\u3053\u3068\u306A\u304F\u3001\u30B3\u30FC\u30C9\u3092\u3055\u3089\u306B\u7C21\u7D20\u5316\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p></li><li><p>MDBX\u306F &quot;Exclusive open &quot;\u30E2\u30FC\u30C9\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u304A\u308A\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u79FB\u884C\u6642\u306B\u3001\u79FB\u884C\u30D7\u30ED\u30BB\u30B9\u4E2D\u306B\u4ED6\u306E\u8AAD\u8005\u304C\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u306E\u3092\u9632\u3050\u305F\u3081\u306B\u3001\u3053\u306E\u30E2\u30FC\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002</p></li></ol></blockquote><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p><a href="https://github.com/ledgerwatch/erigon/wiki/Criteria-for-transitioning-from-Alpha-to-Beta#switch-from-lmdb-to-mdbx" target="_blank" rel="noopener noreferrer">Erigon (\u6B21\u4E16\u4EE3\u30A4\u30FC\u30B5\u30CD\u30C3\u30C8\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8) \u306F\u6700\u8FD1 LMDB \u304B\u3089 MDBX</a>\u3078\u3068\u79FB\u884C\u3057\u307E\u3057\u305F\u3002 <a href="#fnref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,165);function a(r,o){return s}var i=t(e,[["render",a],["__file","2021-12-21-mdbx.html.vue"]]);export{i as default};
