import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as l,a as e,b as r,w as a,F as d,d as t,e as i,r as c}from"./app.2a6a1bd2.js";const p={},u=e("h1",{id:"libmdbx-\u7684-rust-\u5C01\u88C5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#libmdbx-\u7684-rust-\u5C01\u88C5","aria-hidden":"true"},"#"),t(" libmdbx \u7684 rust \u5C01\u88C5")],-1),h=e("p",null,[e("a",{href:"https://github.com/erthink/libmdbx",target:"_blank",rel:"noopener noreferrer"},"libmdbx"),t(" \u6570\u636E\u5E93\u7684 "),e("code",null,"rust"),t(" \u5C01\u88C5\u3002")],-1),g=e("hr",null,null,-1),b=e("p",null,"\u76EE\u5F55 :",-1),m={class:"table-of-contents"},_=t("\u5F15\u5B50"),f=t("libmdbx \u662F\u4EC0\u4E48\uFF1F"),x=t("\u4F7F\u7528\u6559\u7A0B"),v=t("\u5982\u4F55\u8FD0\u884C\u793A\u4F8B"),k=t("\u793A\u4F8B 1 : \u5199 set(key,val) \u548C \u8BFB .get(key)"),E=t("\u4EE3\u7801"),y=t("\u8FD0\u884C\u8F93\u51FA"),B=t("\u4EE3\u7801\u8BF4\u660E"),D=t("env_rw! \u5B9A\u4E49\u6570\u636E\u5E93"),w=t("\u5B8F\u5C55\u5F00"),q=t("anyhow \u548C lazy_static"),T=t("\u5B8F mdbx!"),M=t("\u7EBF\u7A0B\u4E0E\u4E8B\u52A1"),R=t("\u8BFB\u5199\u4E8C\u8FDB\u5236\u6570\u636E"),S=t("\u793A\u4F8B 2 : \u6570\u636E\u7C7B\u578B\u3001\u6570\u636E\u5E93\u6807\u5FD7 \u3001\u5220\u9664\u3001\u904D\u5386"),X=t("\u4EE3\u7801"),C=t("\u8FD0\u884C\u8F93\u51FA"),A=t("\u5FEB\u6377\u8BFB\u5199"),N=t("\u6570\u636E\u7C7B\u578B"),P=t("\u9884\u7F6E\u6570\u636E\u7C7B\u578B"),O=t("\u6570\u636E\u5E93\u6807\u5FD7"),U=t("DUPSORT : \u4E00\u4E2A\u952E\u5BF9\u5E94\u591A\u4E2A\u503C"),F=t(".dup(key) \u8FD4\u56DE\u67D0\u952E\u6240\u6709\u5BF9\u5E94\u7684\u503C\u7684\u8FED\u4EE3\u5668"),z=t("\u9ED8\u8BA4\u81EA\u52A8\u8FFD\u52A0\u7684\u6570\u636E\u5E93\u6807\u5FD7"),I=t("\u5220\u9664\u6570\u636E"),L=t(".del(key) \u5220\u9664\u952E"),V=t(".del_val(key,val) \u7CBE\u786E\u5339\u914D\u7684\u5220\u9664"),Y=t("\u904D\u5386"),$=t("\u987A\u5E8F\u904D\u5386"),G=t(".rev() \u5012\u5E8F\u904D\u5386"),K=t("\u6392\u5E8F\u65B9\u5F0F"),W=t("\u533A\u95F4\u8FED\u4EE3\u5668"),j=t("\u8FD0\u884C\u8F93\u51FA"),H=t(".range(begin..end) \u533A\u95F4\u8FED\u4EE3"),J=t(".rev_range \u5012\u5E8F\u533A\u95F4"),Q=t("\u81EA\u5B9A\u4E49\u6570\u636E\u7C7B\u578B"),Z=t("\u7528\u5C5E\u6027\u5F0F\u5B8F\u7B80\u5316\u81EA\u5B9A\u4E49\u7C7B\u578B"),ee=t("\u4F7F\u7528\u6CE8\u610F"),te=t("\u952E\u7684\u957F\u5EA6"),ne=t("\u811A\u6CE8"),re=i(`<hr><h2 id="\u5F15\u5B50" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5B50" aria-hidden="true">#</a> \u5F15\u5B50</h2><p>\u5728\u5199\u300E<a href="https://rmw.link" target="_blank" rel="noopener noreferrer">\u4EBA\u6C11\u7F51\u7EDC</a>\u300F\u7684\u65F6\u5019\uFF0C\u611F\u89C9\u81EA\u5DF1\u9700\u8981\u4E00\u4E2A\u5D4C\u5165\u5F0F\u6570\u636E\u5E93\u3002</p><p>\u56E0\u4E3A\u6D89\u53CA\u5230\u7F51\u7EDC\u541E\u5410\u7684\u8BB0\u5F55\uFF0C\u8BFB\u5199\u9891\u7E41\uFF0C<code>sqlite3</code> \u592A\u9AD8\u7EA7\u6027\u80FD\u582A\u5FE7\u3002</p><p>\u6240\u4EE5\u7528\u66F4\u5E95\u5C42\u7684\u952E\u503C\u6570\u636E\u5E93\u66F4\u4E3A\u5408\u9002\uFF08<a href="https://discourse.world/h/2020/06/05/Shine-and-poverty-key-value-database-LMDB-in-applications-for-iOS" target="_blank" rel="noopener noreferrer">lmdb \u6BD4 sqlite \u5FEB 10 \u500D</a>\uFF09\u3002</p><p><img src="//irmw.gumlet.io/yxZV8x.jpg" alt=""></p><p>\u6700\u7EC8\uFF0C\u6211\u9009\u62E9\u4E86 <code>lmdb</code> \u7684\u9B54\u6539\u7248 \u2014\u2014 <code>mdbx</code> \u3002</p><p>\u76EE\u524D\uFF0C\u73B0\u6709\u7684 <code>mdbx</code> \u7684 <code>rust</code> \u5C01\u88C5 <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">mdbx-rs(mdbx-sys)\u4E0D\u652F\u6301 windows</a>\uFF0C\u4E8E\u662F\u6211\u81EA\u5DF1\u52A8\u624B\u5C01\u88C5\u4E00\u4E2A\u652F\u6301 windows \u7684\u7248\u672C\u3002</p><p>\u652F\u6301\u5B58\u50A8\u81EA\u5B9A\u4E49 rust \u7C7B\u578B\u3002 \u652F\u6301\u591A\u7EBF\u7A0B\u8BBF\u95EE\u3002</p><p>\u53EF\u4EE5\u4E00\u4E2A\u6A21\u5757\u4E2D\u7528 <code>lazy_static</code> \u5B9A\u4E49\u597D\u6570\u636E\u5E93\uFF0C\u7136\u540E\u7528\u7B80\u5355\u5F15\u5165\u5E76\u4F7F\u7528\uFF0C\u6BD4\u5982:</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
</code></pre></div><h2 id="libmdbx-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#libmdbx-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> libmdbx \u662F\u4EC0\u4E48\uFF1F</h2><p><a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">mdbx</a> \u662F\u57FA\u4E8E lmdb \u4E8C\u6B21\u5F00\u53D1\u7684\u6570\u636E\u5E93 \uFF0C\u4F5C\u8005\u662F\u4FC4\u7F57\u65AF\u4EBA <a href="https://vk.com/erthink" target="_blank" rel="noopener noreferrer">\u041B\u0435\u043E\u043D\u0438\u0434 \u042E\u0440\u044C\u0435\u0432 (Leonid Yuriev)</a>\u3002</p><p><a href="https://en.wikipedia.org/wiki/Lightning_Memory-Mapped_Database" target="_blank" rel="noopener noreferrer">lmdb</a> \u662F\u4E00\u4E2A\u8D85\u7EA7\u5FEB\u7684\u5D4C\u5165\u5F0F\u952E\u503C\u6570\u636E\u5E93\u3002</p><p>\u5168\u6587\u641C\u7D22\u5F15\u64CE <a href="https://docs.meilisearch.com/reference/under_the_hood/storage.html#measured-disk-usage" target="_blank" rel="noopener noreferrer">MeiliSearch</a> \u5C31\u662F\u57FA\u4E8E lmdb \u5F00\u53D1\u7684\u3002</p><p><a href="https://docs.nvidia.com/deeplearning/dali/user-guide/docs/examples/general/data_loading/dataloading_lmdb.html" target="_blank" rel="noopener noreferrer">\u6DF1\u5EA6\u5B66\u4E60\u6846\u67B6 caffe \u4E5F\u7528 lmdb \u4F5C\u4E3A\u6570\u636E\u5B58\u50A8</a>\u3002</p><p><a href="https://github.com/erthink/libmdbx#added-features" target="_blank" rel="noopener noreferrer">mdbx \u5728\u5D4C\u5165\u5F0F\u6027\u80FD\u6D4B\u8BD5\u57FA\u51C6 ioarena \u4E2D lmdb \u8FD8\u8981\u5FEB 30%</a> \u3002</p><p><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-1.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-3.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-4.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-5.png" alt=""></p><p>\u4E0E\u6B64\u540C\u65F6\uFF0C<a href="https://github.com/erthink/libmdbx#improvements-beyond-lmdb" target="_blank" rel="noopener noreferrer">mdbx \u6539\u8FDB\u4E86\u4E0D\u5C11 lmdb \u7684\u7F3A\u61BE</a>\uFF0C\u56E0\u6B64 Erigon\uFF08\u4E0B\u4E00\u4EE3\u4EE5\u592A\u574A\u5BA2\u6237\u7AEF\uFF09\u6700\u8FD1\u4ECE LMDB \u5207\u6362\u5230\u4E86 MDBX <sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> \u3002</p><h2 id="\u4F7F\u7528\u6559\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6559\u7A0B" aria-hidden="true">#</a> \u4F7F\u7528\u6559\u7A0B</h2><h3 id="\u5982\u4F55\u8FD0\u884C\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u8FD0\u884C\u793A\u4F8B" aria-hidden="true">#</a> \u5982\u4F55\u8FD0\u884C\u793A\u4F8B</h3><p>\u9996\u5148\u514B\u9686\u4EE3\u7801\u5E93 <code>git clone git@github.com:rmw-lib/mdbx.git --depth=1 &amp;&amp; cd mdbx</code></p><p>\u7136\u540E\u8FD0\u884C <code>cargo run --example 01</code> \uFF0C\u5C31\u8FD0\u884C\u4E86 <code>examples/01.rs</code></p><p>\u5982\u679C\u662F\u81EA\u5DF1\u7684\u9879\u76EE\uFF0C\u8BF7\u5148\u8FD0\u884C :</p><div class="language-bash ext-sh"><pre class="language-bash"><code>cargo install cargo-edit
cargo add mdbx lazy_static ctor paste
</code></pre></div><h3 id="\u793A\u4F8B-1-\u5199-set-key-val-\u548C-\u8BFB-get-key" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-1-\u5199-set-key-val-\u548C-\u8BFB-get-key" aria-hidden="true">#</a> \u793A\u4F8B 1 : \u5199 <code>set(key,val)</code> \u548C \u8BFB <code>.get(key)</code></h3><p>\u6211\u4EEC\u5148\u6765\u770B\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50 <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/01.rs" target="_blank" rel="noopener noreferrer">examples/01.rs</a></p><h4 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use anyhow::{Ok, Result};
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
  MDBX // \u6570\u636E\u5E93 Env \u7684\u53D8\u91CF\u540D
  Test // \u6570\u636E\u5E93 Test
}

fn main() -&gt; Result&lt;()&gt; {
  // \u8F93\u51FAlibmdbx\u7684\u7248\u672C\u53F7
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // \u591A\u7EBF\u7A0B\u8BFB\u5199
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
</code></pre></div><h4 id="\u8FD0\u884C\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u8F93\u51FA" aria-hidden="true">#</a> \u8FD0\u884C\u8F93\u51FA</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/01.mdb
mdbx version https://github.com/erthink/libmdbx/releases/tag/v0.11.2
test1 get Ok(Some(Bin([6])))
[6]
</code></pre></div><h4 id="\u4EE3\u7801\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u8BF4\u660E" aria-hidden="true">#</a> \u4EE3\u7801\u8BF4\u660E</h4><h5 id="env-rw-\u5B9A\u4E49\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#env-rw-\u5B9A\u4E49\u6570\u636E\u5E93" aria-hidden="true">#</a> <code>env_rw!</code> \u5B9A\u4E49\u6570\u636E\u5E93</h5><p>\u4EE3\u7801\u4E00\u5F00\u59CB\u4F7F\u7528\u4E86\u4E00\u4E2A\u5B8F env_rw\uFF0C\u8FD9\u4E2A\u5B8F\u6709 4 \u4E2A\u53C2\u6570\u3002</p><ol><li><p>\u6570\u636E\u5E93\u73AF\u5883\u7684\u53D8\u91CF\u540D</p></li><li><p>\u8FD4\u56DE\u4E00\u4E2A \u5BF9\u8C61\uFF0C<a href="https://docs.rs/mdbx/latest/src/mdbx/env.rs.html#27-35" target="_blank" rel="noopener noreferrer">mdbx:: env:: Config</a> \u3002</p><p>\u6211\u4EEC\u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u56E0\u4E3A <code>Env</code> \u5B9E\u73B0\u4E86 <code>From&lt;Into&lt;PathBuf&gt;&gt;</code>\uFF0C\u6240\u4EE5\u6570\u636E\u5E93\u8DEF\u5F84 <code>into()</code> \u5373\u53EF\uFF0C\u9ED8\u8BA4\u914D\u7F6E\u5982\u4E0B\u3002</p><div class="language-rust ext-rs"><pre class="language-rust"><code>#[derive(Clone, Debug)]
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
    sync_period : 65536, // \u4EE5 1/65536 \u79D2\u4E3A\u5355\u4F4D
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
</code></pre></div><p><code>max_db</code> \u662F\u6700\u5927\u7684\u6570\u636E\u5E93\u4E2A\u6570\uFF0C<a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">\u6700\u591A 32765 \u4E2A\u6570\u636E\u5E93</a>\uFF0C\u8FD9\u4E2A\u8BBE\u7F6E\u53EF\u4EE5\u5728\u6BCF\u6B21\u6253\u5F00\u6570\u636E\u5E93\u65F6\u91CD\u8BBE\uFF0C\u8BBE\u7F6E\u592A\u5927\u4F1A\u5F71\u54CD\u6027\u80FD\uFF0C\u6309\u9700\u8BBE\u7F6E\u5373\u53EF\u3002</p><p>\u5176\u4ED6\u53C2\u6570\u542B\u4E49\u53C2\u89C1 <a href="https://erthink.github.io/libmdbx/group__c__opening.html#ga9138119a904355d245777c4119534061" target="_blank" rel="noopener noreferrer">libmdbx \u7684\u6587\u6863</a> \u3002</p></li><li><p>\u6570\u636E\u5E93\u8BFB\u4E8B\u52A1\u5B8F\u7684\u540D\u79F0\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>r</code></p></li><li><p>\u6570\u636E\u5E93\u5199\u4E8B\u52A1\u5B8F\u7684\u540D\u79F0\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>w</code></p></li></ol><p>\u5176\u4E2D 3\u30014 \u53C2\u6570\u53EF\u4EE5\u7701\u7565\u4F7F\u7528\u9ED8\u8BA4\u503C\u3002</p><h5 id="\u5B8F\u5C55\u5F00" tabindex="-1"><a class="header-anchor" href="#\u5B8F\u5C55\u5F00" aria-hidden="true">#</a> \u5B8F\u5C55\u5F00</h5><p>\u5982\u679C\u60F3\u770B\u770B\u5B8F\u9B54\u6CD5\u5230\u5E95\u5E72\u4E86\u4EC0\u4E48\uFF0C\u53EF\u4EE5\u7528 <code>cargo expand --example 01</code> \u5B8F\u5C55\u5F00\uFF0C\u6B64\u6307\u4EE4\u9700\u8981\u5148\u5B89\u88C5 <code>cargo install cargo-expand</code></p><p>\u5C55\u5F00\u540E\u7684\u4EE3\u7801\u622A\u56FE\u5982\u4E0B\uFF1A</p><p><img src="//irmw.gumlet.io/PDzEtT.png" alt="PDzEtT"></p><h5 id="anyhow-\u548C-lazy-static" tabindex="-1"><a class="header-anchor" href="#anyhow-\u548C-lazy-static" aria-hidden="true">#</a> anyhow \u548C lazy_static</h5><p>\u4ECE\u5C55\u5F00\u540E\u7684\u622A\u56FE\uFF0C\u53EF\u4EE5\u770B\u5230\uFF0C\u4F7F\u7528\u4E86 <code>lazy_static</code> \u548C <code>anyhow</code>\u3002</p><p><a href="https://rustmagazine.github.io/rust_magazine_2021/chapter_2/rust_error_handle.html#thiserror--anyhow" target="_blank" rel="noopener noreferrer">anyhow</a> \u662F rust \u7684\u9519\u8BEF\u5904\u7406\u5E93\u3002</p><p><a href="https://juejin.cn/post/7007336922817232927" target="_blank" rel="noopener noreferrer">lazy_static</a> \u662F\u5EF6\u8FDF\u521D\u59CB\u5316\u7684\u9759\u6001\u53D8\u91CF\u3002</p><p>\u8FD9\u4E24\u4E2A\u5E93\u5F88\u5E38\u89C1\uFF0C\u6211\u4E0D\u8D58\u8A00\u3002</p><h5 id="\u5B8F-mdbx" tabindex="-1"><a class="header-anchor" href="#\u5B8F-mdbx" aria-hidden="true">#</a> \u5B8F mdbx!</h5><p><a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html" target="_blank" rel="noopener noreferrer"><code>mdbx!</code></a> \u662F\u4E00\u4E2A <a href="https://mp.weixin.qq.com/s/YT_HNFDCQ_IyocvBkRNJnA" target="_blank" rel="noopener noreferrer">\u8FC7\u7A0B\u5B8F</a>\u3002</p><div class="language-rust ext-rs"><pre class="language-rust"><code>mdbx! {
 MDBX // \u6570\u636E\u5E93 Env \u7684\u53D8\u91CF\u540D
 Test // \u6570\u636E\u5E93 Test
}
</code></pre></div><p>\u7B2C\u4E00\u884C\u53C2\u6570\u662F\u6570\u636E\u5E93\u73AF\u5883\u7684\u53D8\u91CF\u540D</p><p>\u7B2C\u4E8C\u884C\u662F\u6570\u636E\u5E93\u7684\u540D\u79F0</p><p>\u6570\u636E\u5E93\u53EF\u6709\u591A\u4E2A\uFF0C\u6BCF\u4E2A\u4E00\u884C</p><h5 id="\u7EBF\u7A0B\u4E0E\u4E8B\u52A1" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u7A0B\u4E0E\u4E8B\u52A1" aria-hidden="true">#</a> \u7EBF\u7A0B\u4E0E\u4E8B\u52A1</h5><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\u6F14\u793A\u4E86\u591A\u7EBF\u7A0B\u8BFB\u5199\u3002</p><p>\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C<strong>\u540C\u4E00\u7EBF\u7A0B\u540C\u4E00\u65F6\u95F4\u53EA\u80FD\u6709\u4E00\u4E2A\u4E8B\u52A1\uFF0C\u5982\u679C\u67D0\u7EBF\u7A0B\u6253\u5F00\u4E86\u591A\u4E2A\u4E8B\u52A1\u4F1A\u7A0B\u5E8F\u4F1A\u5D29\u6E83</strong>\u3002</p><p>\u4E8B\u52A1\u4F1A\u5728\u4F5C\u7528\u57DF\u7ED3\u675F\u65F6\u63D0\u4EA4\u3002</p><h5 id="\u8BFB\u5199\u4E8C\u8FDB\u5236\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u8BFB\u5199\u4E8C\u8FDB\u5236\u6570\u636E" aria-hidden="true">#</a> \u8BFB\u5199\u4E8C\u8FDB\u5236\u6570\u636E</h5><div class="language-rust ext-rs"><pre class="language-rust"><code>let tx = w!();
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
</code></pre></div><p><code>set</code> \u662F\u5199\uFF0C<code>get</code> \u662F\u8BFB\uFF0C\u4EFB\u4F55\u5B9E\u73B0\u4E86 <a href="https://doc.rust-lang.org/std/convert/trait.AsRef.html" target="_blank" rel="noopener noreferrer"><code>AsRef&lt;[u8]&gt;</code></a> \u7684\u5BF9\u8C61\u90FD\u53EF\u4EE5\u5199\u5165\u6570\u636E\u5E93\u3002</p><p><code>get</code> \u51FA\u6765\u7684\u4E1C\u897F\u662F <code>Ok(Some(Bin([6])))</code>\uFF0C\u53EF\u4EE5\u8F6C\u4E3A <code>&amp;[u8]</code>\u3002</p><h3 id="\u793A\u4F8B-2-\u6570\u636E\u7C7B\u578B\u3001\u6570\u636E\u5E93\u6807\u5FD7-\u3001\u5220\u9664\u3001\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-2-\u6570\u636E\u7C7B\u578B\u3001\u6570\u636E\u5E93\u6807\u5FD7-\u3001\u5220\u9664\u3001\u904D\u5386" aria-hidden="true">#</a> \u793A\u4F8B 2 : \u6570\u636E\u7C7B\u578B\u3001\u6570\u636E\u5E93\u6807\u5FD7 \u3001\u5220\u9664\u3001\u904D\u5386</h3><p>\u6211\u4EEC\u6765\u770B\u7B2C\u4E8C\u4E2A\u4F8B\u5B50 <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a> :</p><p>\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C<code>env_rw!</code> \u7701\u7565\u4E86\uFF0C\u7B2C\u4E09\u3001\u7B2C\u56DB\u4E2A\u53C2\u6570\uFF08<code>r</code>, <code>w</code>\uFF09\u3002</p><h4 id="\u4EE3\u7801-1" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801-1" aria-hidden="true">#</a> \u4EE3\u7801</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use anyhow::{Ok, Result};
use mdbx::prelude::*;

env_rw!(MDBX, {
  let mut db_path = std::env::current_exe().unwrap();
  db_path.set_extension(&quot;mdb&quot;);
  println!(&quot;mdbx file path {}&quot;, db_path.display());
  db_path.into()
});

mdbx! {
  MDBX // \u6570\u636E\u5E93ENV\u7684\u53D8\u91CF\u540D
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
  // \u5FEB\u6377\u5199\u5165
  w!(Test1.set [2, 3],[4, 5]);

  // \u5FEB\u6377\u8BFB\u53D6
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

  // \u5728\u540C\u4E00\u4E2A\u4E8B\u52A1\u4E2D\u5BF9\u591A\u4E2A\u6570\u636E\u5E93\u8FDB\u884C\u591A\u4E2A\u64CD\u4F5C
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

    // \u4E8B\u52A1\u4F1A\u5728\u4F5C\u7528\u57DF\u7684\u7ED3\u5C3E\u63D0\u4EA4
  }

  Ok(())
}
</code></pre></div><h4 id="\u8FD0\u884C\u8F93\u51FA-1" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u8F93\u51FA-1" aria-hidden="true">#</a> \u8FD0\u884C\u8F93\u51FA</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/02.mdb

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
</code></pre></div><h4 id="\u5FEB\u6377\u8BFB\u5199" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u6377\u8BFB\u5199" aria-hidden="true">#</a> \u5FEB\u6377\u8BFB\u5199</h4><p>\u82E5\u53EA\u662F\u60F3\u7B80\u5355\u7684\u8BFB\u53D6\u6216\u5199\u5165\u5355\u884C\u6570\u636E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7528\u5B8F\u7684\u8BED\u6CD5\u7CD6\u3002</p><p>\u8BFB\u6570\u636E</p><div class="language-text ext-text"><pre class="language-text"><code>r!(Test1.get [2, 3])
</code></pre></div><p>\u5199\u6570\u636E</p><div class="language-rust ext-rs"><pre class="language-rust"><code>w!(Test1.set [2, 3],[4, 5])
</code></pre></div><p>\u90FD\u4E00\u884C\u641E\u5B9A\uFF0C \u6B63\u5982 <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a> \u5199\u7684\u90A3\u6837\u3002</p><h4 id="\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u6570\u636E\u7C7B\u578B</h4><p>\u5728 <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a> \u4E2D\uFF0C\u6570\u636E\u5E93\u5B9A\u4E49\u662F\u8FD9\u6837\u7684 :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>Test2
  key Str
  val Str
Test3
  key i32
  val u64
Test4
  key u64
  val u16
  flag DUPSORT
</code></pre></div><p>\u5176\u4E2D <code>key</code> \u548C <code>val</code> \u5206\u522B\u5B9A\u4E49\u4E86\u952E\u548C\u503C\u7684\u6570\u636E\u7C7B\u578B\u3002</p><p>\u5982\u679C\u8BD5\u56FE\u5199\u5165\u7684\u6570\u636E\u7C7B\u578B\u548C\u5B9A\u4E49\u7684\u4E0D\u5339\u914D\uFF0C\u4F1A\u62A5\u9519\uFF0C\u622A\u56FE\u5982\u4E0B :</p><p><img src="//irmw.gumlet.io/4rFTC6.png" alt=""></p><p>\u9ED8\u8BA4\u7684\u6570\u636E\u7C7B\u578B\u662F <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Bin.html" target="_blank" rel="noopener noreferrer"><code>Bin</code></a> \uFF0C\u4EFB\u4F55\u5B9E\u73B0\u4E86 <code>AsRef&lt;[u8]&gt;</code> \u7684\u6570\u636E\u90FD\u53EF\u4EE5\u5199\u5165\u3002</p><p>\u5982\u679C\u952E\u6216\u503C\u662F <code>utf8</code> \u5B57\u7B26\u4E32\uFF0C\u53EF\u8BBE\u7F6E\u6570\u636E\u7C7B\u578B\u4E3A <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Str.html" target="_blank" rel="noopener noreferrer"><code>Str</code></a> \u3002</p><p>\u5BF9 <code>Str</code> <a href="https://doc.rust-lang.org/std/ops/trait.Deref.html" target="_blank" rel="noopener noreferrer">\u89E3\u5F15\u7528</a> \u4F1A\u8FD4\u56DE\u5B57\u7B26\u4E32\uFF0C\u7C7B\u4F3C <code>let k:&amp;str = &amp;k;</code>\u3002</p><p>\u6B64\u5916\uFF0C<code>Str</code> \u8FD8\u5B9E\u73B0\u4E86 <a href="https://doc.rust-lang.org/std/fmt/trait.Display.html" target="_blank" rel="noopener noreferrer"><code>std::fmt::Display</code></a>\uFF0C<code>println!(&quot;{}&quot;,k)</code> \u65F6\u5C06\u8F93\u51FA\u53EF\u8BFB\u7684\u5B57\u7B26\u4E32\u3002</p><h5 id="\u9884\u7F6E\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u9884\u7F6E\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u9884\u7F6E\u6570\u636E\u7C7B\u578B</h5><p>\u9664\u4E86 <code>Str</code> \u548C <code>Bin</code> \uFF0C\u5C01\u88C5\u8FD8\u81EA\u5E26\u4E86\u5BF9 <a href="https://docs.rs/mdbx/latest/src/mdbx/type.rs.html#48" target="_blank" rel="noopener noreferrer">usize, u128, u64, u32, u16, u8, isize, i128, i64, i32, i16, i8, f32, f64</a> \u7684\u6570\u636E\u652F\u6301\u3002</p><h4 id="\u6570\u636E\u5E93\u6807\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93\u6807\u5FD7" aria-hidden="true">#</a> \u6570\u636E\u5E93\u6807\u5FD7</h4><p>\u53EF\u4EE5\u770B\u5230 <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a> \u4E2D <code>Test4</code> \u6570\u636E\u52A0\u4E0A\u4E86\u6570\u636E\u5E93\u6807\u5FD7 <code>flag DUPSORT</code></p><p>libmdbx \u6570\u636E\u5E93\u6709\u5F88\u591A\u6807\u5FD7( <a href="https://erthink.github.io/libmdbx/group__c__dbi.html#gafe3bddb297b3ab0d828a487c5726f76a" target="_blank" rel="noopener noreferrer"><code>MDBX_db_flags_t</code></a> ) \u53EF\u4EE5\u8BBE\u7F6E\u3002</p><ul><li>REVERSEKEY \u5BF9\u952E\u4F7F\u7528\u53CD\u5411\u5B57\u7B26\u4E32\u6BD4\u8F83\u3002\uFF08\u5F53\u4F7F\u7528\u5C0F\u7AEF\u7F16\u7801\u6570\u5B57\u4F5C\u4E3A\u952E\u7684\u65F6\u5019\u5F88\u6709\u7528\uFF09</li><li>DUPSORT \u4F7F\u7528\u6392\u5E8F\u7684\u91CD\u590D\u9879\uFF0C\u5373\u5141\u8BB8\u4E00\u4E2A\u952E\u6709\u591A\u4E2A\u503C\u3002</li><li>INTEGERKEY \u672C\u673A\u5B57\u8282\u987A\u5E8F\u7684\u6570\u5B57\u952E uint32_t \u6216 uint64_t\u3002\u952E\u7684\u5927\u5C0F\u5FC5\u987B\u76F8\u540C\uFF0C\u5E76\u4E14\u5728\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u65F6\u5FC5\u987B\u5BF9\u9F50\u3002</li><li>DUPFIXED \u4F7F\u7528 DUPSORT \u7684\u60C5\u51B5\u4E0B\uFF0C\u6570\u636E\u503C\u7684\u5927\u5C0F\u5FC5\u987B\u76F8\u540C\uFF08\u53EF\u4EE5\u5FEB\u901F\u7EDF\u8BA1\u503C\u7684\u4E2A\u6570\uFF09\u3002</li><li>INTEGERDUP \u9700\u4F7F\u7528 DUPSORT \u548C DUPFIXED\uFF1B\u503C\u662F\u6574\u6570\uFF08\u7C7B\u4F3C INTEGERKEY\uFF09\u3002\u6570\u636E\u503C\u5FC5\u987B\u5168\u90E8\u5177\u6709\u76F8\u540C\u7684\u5927\u5C0F\uFF0C\u5E76\u4E14\u5728\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u65F6\u5FC5\u987B\u5BF9\u9F50\u3002</li><li>REVERSEDUP \u4F7F\u7528 DUPSORT\uFF1B\u5BF9\u6570\u636E\u503C\u4F7F\u7528\u53CD\u5411\u5B57\u7B26\u4E32\u6BD4\u8F83\u3002</li><li>CREATE \u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219\u521B\u5EFA DB \uFF08\u9ED8\u8BA4\u5DF2\u52A0\u4E0A\uFF09\u3002</li><li>DB_ACCEDE \u6253\u5F00\u4F7F\u7528\u672A\u77E5\u6807\u5FD7\u521B\u5EFA\u7684\u73B0\u6709\u5B50\u6570\u636E\u5E93\u3002<br> \u8BE5 DB_ACCEDE \u6807\u5FD7\u65E8\u5728\u6253\u5F00\u4F7F\u7528\u672A\u77E5\u6807\u5FD7\uFF08REVERSEKEY\u3001DUPSORT\u3001INTEGERKEY\u3001DUPFIXED\u3001INTEGERDUP \u548C REVERSEDUP\uFF09\u521B\u5EFA\u7684\u73B0\u6709\u5B50\u6570\u636E\u5E93\u3002<br> \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5B50\u6570\u636E\u5E93\u4E0D\u4F1A\u8FD4\u56DE INCOMPATIBLE \u9519\u8BEF\uFF0C\u800C\u662F\u4F7F\u7528\u521B\u5EFA\u5B83\u7684\u6807\u5FD7\u6253\u5F00\uFF0C\u7136\u540E\u5E94\u7528\u7A0B\u5E8F\u53EF\u4EE5\u901A\u8FC7 mdbx_dbi_flags()\u786E\u5B9A\u5B9E\u9645\u6807\u5FD7\u3002</li></ul><h5 id="dupsort-\u4E00\u4E2A\u952E\u5BF9\u5E94\u591A\u4E2A\u503C" tabindex="-1"><a class="header-anchor" href="#dupsort-\u4E00\u4E2A\u952E\u5BF9\u5E94\u591A\u4E2A\u503C" aria-hidden="true">#</a> DUPSORT : \u4E00\u4E2A\u952E\u5BF9\u5E94\u591A\u4E2A\u503C</h5><p><code>DUPSORT</code>\uFF0C\u610F\u5473\u7740\u4E00\u4E2A\u952E\u53EF\u4EE5\u5BF9\u5E94\u591A\u4E2A\u503C\u3002</p><p>\u5982\u679C\u8981\u8BBE\u7F6E\u591A\u4E2A\u6807\u5FD7\uFF0C\u5199\u6CD5\u5982 <code>flag DUPSORT | DUPFIXED</code></p><h5 id="dup-key-\u8FD4\u56DE\u67D0\u952E\u6240\u6709\u5BF9\u5E94\u7684\u503C\u7684\u8FED\u4EE3\u5668" tabindex="-1"><a class="header-anchor" href="#dup-key-\u8FD4\u56DE\u67D0\u952E\u6240\u6709\u5BF9\u5E94\u7684\u503C\u7684\u8FED\u4EE3\u5668" aria-hidden="true">#</a> <code>.dup(key)</code> \u8FD4\u56DE\u67D0\u952E\u6240\u6709\u5BF9\u5E94\u7684\u503C\u7684\u8FED\u4EE3\u5668</h5><p>\u53EA\u6709\u6807\u8BB0\u4E86 <code>DUPSORT</code> \u4E00\u4E2A\u952E\u53EF\u4EE5\u5BF9\u5E94\u591A\u4E2A\u503C\u7684\u6570\u636E\u5E93\uFF0C\u624D\u6709\u8FD9\u4E2A\u51FD\u6570\u3002</p><p>\u5BF9\u4E8E <code>DUPSORT</code> \u6570\u636E\u5E93\uFF0C<code>get</code> \u53EA\u8FD4\u56DE\u6B64\u952E\u7684\u7B2C\u4E00\u4E2A\u503C\u3002\u60F3\u83B7\u53D6\u6240\u6709\u503C\uFF0C\u8BF7\u7528 <code>dup</code>\u3002</p><h5 id="\u9ED8\u8BA4\u81EA\u52A8\u8FFD\u52A0\u7684\u6570\u636E\u5E93\u6807\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u81EA\u52A8\u8FFD\u52A0\u7684\u6570\u636E\u5E93\u6807\u5FD7" aria-hidden="true">#</a> \u9ED8\u8BA4\u81EA\u52A8\u8FFD\u52A0\u7684\u6570\u636E\u5E93\u6807\u5FD7</h5><p>\u5F53\u6570\u636E\u7C7B\u578B\u4E3A <code>u32</code> / <code>u64</code> / <code>usize</code> \u7684\u65F6\u5019\uFF0C \u4F1A\u81EA\u52A8\u52A0\u4E0A\u6570\u636E\u5E93\u6807\u5FD7 <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#105" target="_blank" rel="noopener noreferrer"><code>INTEGERKEY</code></a>\u3002</p><p>\u5728\u5C0F\u7AEF\u7F16\u7801\u7684\u673A\u5668\u4E0A\uFF0C\u5176\u4ED6\u6570\u5B57\u7C7B\u578B\u4F1A\u81EA\u52A8\u52A0\u4E0A <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#108" target="_blank" rel="noopener noreferrer"><code>REVERSEKEY</code></a>\u3002</p><h4 id="\u5220\u9664\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u6570\u636E" aria-hidden="true">#</a> \u5220\u9664\u6570\u636E</h4><h5 id="del-key-\u5220\u9664\u952E" tabindex="-1"><a class="header-anchor" href="#del-key-\u5220\u9664\u952E" aria-hidden="true">#</a> <code>.del(key)</code> \u5220\u9664\u952E</h5><p><code>.del(val)</code> \u4F1A\u5220\u9664\u67D0\u4E2A\u952E\u5BF9\u5E94\u7684\u503C\u3002</p><p>\u5982\u679C\u6570\u636E\u5E93\u6709\u6807\u5FD7 <code>DUPSORT</code>\uFF0C\u5C06\u4F1A\u5220\u9664\u8FD9\u4E2A\u952E\u4E0B\u7684\u6240\u6709\u503C\u3002</p><p>\u5982\u679C\u6709\u6570\u636E\u88AB\u5220\u9664\u7684\u65F6\u5019\u8FD4\u56DE <code>true</code>\uFF0C\u53CD\u4E4B\u8FD4\u56DE <code>false</code>\u3002</p><h5 id="del-val-key-val-\u7CBE\u786E\u5339\u914D\u7684\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#del-val-key-val-\u7CBE\u786E\u5339\u914D\u7684\u5220\u9664" aria-hidden="true">#</a> <code>.del_val(key,val)</code> \u7CBE\u786E\u5339\u914D\u7684\u5220\u9664</h5><p><code>.del_val(key,val)</code> \u4F1A\u5220\u9664\u548C\u8F93\u5165\u53C2\u6570\u5B8C\u5168\u4E00\u81F4\u952E\u503C\u5BF9\u3002</p><p>\u5982\u679C\u6709\u6570\u636E\u88AB\u5220\u9664\u7684\u65F6\u5019\u8FD4\u56DE <code>true</code>\uFF0C\u53CD\u4E4B\u8FD4\u56DE <code>false</code>\u3002</p><h4 id="\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386" aria-hidden="true">#</a> \u904D\u5386</h4><h5 id="\u987A\u5E8F\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u987A\u5E8F\u904D\u5386" aria-hidden="true">#</a> \u987A\u5E8F\u904D\u5386</h5><p>\u56E0\u4E3A\u5B9E\u73B0\u4E86 <a href="https://doc.rust-lang.org/std/iter/trait.IntoIterator.html" target="_blank" rel="noopener noreferrer"><code>std::iter::IntoIterator</code></a> \uFF0C\u53EF\u4EE5\u76F4\u63A5\u5982\u4E0B\u904D\u5386 :</p><p><code>for (k, v) in test1</code></p><h5 id="rev-\u5012\u5E8F\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#rev-\u5012\u5E8F\u904D\u5386" aria-hidden="true">#</a> <code>.rev()</code> \u5012\u5E8F\u904D\u5386</h5><p><code>for (k, v) in test4.rev()</code></p><h5 id="\u6392\u5E8F\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6392\u5E8F\u65B9\u5F0F" aria-hidden="true">#</a> \u6392\u5E8F\u65B9\u5F0F</h5><p>libmdbx \u7684\u952E\u503C\u90FD\u662F\u6309 <a href="https://zh.wikipedia.org/wiki/%E5%AD%97%E5%85%B8%E5%BA%8F" target="_blank" rel="noopener noreferrer">\u5B57\u5178\u5E8F</a> \u6392\u5217\u7684\u3002</p><ul><li><p>\u5BF9\u4E8E\u65E0\u7B26\u53F7\u6570\u5B57</p><p>\u56E0\u4E3A\u81EA\u52A8\u52A0\u4E0A\u4E86\u6570\u636E\u5E93\u6807\u5FD7\uFF08 <code>u32</code>/<code>u64</code>/<code>usize</code> \u4F1A\u52A0\u4E0A <code>INTEGERKEY</code>\uFF0C\u5176\u4ED6\u6839\u636E\u673A\u5668\u7F16\u7801\u81EA\u52A8\u5224\u65AD\u662F\u5426\u52A0\u4E0A <code>REVERSEKEY</code> \uFF09 \uFF0C\u4F1A\u6309\u6570\u5B57\u4ECE\u5C0F\u5230\u5927\u7684\u987A\u5E8F\u6392\u5217\u3002</p></li><li><p>\u5BF9\u4E8E\u6709\u7B26\u53F7\u6570\u5B57</p><p>\u987A\u5E8F\u662F\uFF1A0 \u5728\u7B2C\u4E00\u4E2A\uFF0C\u7136\u540E\u4ECE\u5C0F\u5230\u5927\u904D\u5386\u6240\u6709\u6B63\u6570\uFF0C\u7136\u540E\u4ECE\u5C0F\u5230\u5927\u904D\u5386\u6240\u6709\u8D1F\u6570\u3002</p></li></ul><h3 id="\u533A\u95F4\u8FED\u4EE3\u5668" tabindex="-1"><a class="header-anchor" href="#\u533A\u95F4\u8FED\u4EE3\u5668" aria-hidden="true">#</a> \u533A\u95F4\u8FED\u4EE3\u5668</h3><div class="language-rust ext-rs"><pre class="language-rust"><code>use anyhow::Result;
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
</code></pre></div><h4 id="\u8FD0\u884C\u8F93\u51FA-2" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u8F93\u51FA-2" aria-hidden="true">#</a> \u8FD0\u884C\u8F93\u51FA</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/range.mdb

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
</code></pre></div><h4 id="range-begin-end-\u533A\u95F4\u8FED\u4EE3" tabindex="-1"><a class="header-anchor" href="#range-begin-end-\u533A\u95F4\u8FED\u4EE3" aria-hidden="true">#</a> <code>.range(begin..end)</code> \u533A\u95F4\u8FED\u4EE3</h4><p>\u5BF9\u4E8E\u6570\u5B57\u6765\u8BF4\uFF0C\u533A\u95F4\u5C31\u662F\u6570\u5B57\u533A\u95F4\u3002</p><p>\u5BF9\u4E8E\u4E8C\u8FDB\u5236\u6765\u8BF4\uFF0C\u4E00\u6837\u53EF\u4EE5\u6784\u5EFA\u533A\u95F4\uFF0C\u5982\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>let begin : &amp;[u8] = &amp;[1,1];
for (k,v) in test0.range(begin..=&amp;[2]) {}
</code></pre></div><p>\u5982\u679C <code>begin</code> \u5927\u4E8E <code>end</code>\uFF0C\u5C06\u4F1A\u5012\u5E8F\u8FED\u4EE3\u3002</p><p>\u6BD4\u5982 <code>test1.range(5..2)</code> \u8F93\u51FA\u5982\u4E0B :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>(5, 8)
(5, 3)
(3, 8)
(3, 0)
</code></pre></div><p>\u533A\u95F4\u8FED\u4EE3\u4E0D\u652F\u6301 <a href="https://doc.rust-lang.org/std/ops/struct.RangeFull.html" target="_blank" rel="noopener noreferrer"><code>RangeFull</code></a>\uFF0C\u4E5F\u5C31\u662F\u4E0D\u652F\u6301\u7528 <code>..</code>\uFF0C\u8BF7\u6539\u7528\u4E0A\u6587\u63D0\u5230\u7684 <a href="#%E9%81%8D%E5%8E%86">\u904D\u5386</a> \u3002</p><h4 id="rev-range-\u5012\u5E8F\u533A\u95F4" tabindex="-1"><a class="header-anchor" href="#rev-range-\u5012\u5E8F\u533A\u95F4" aria-hidden="true">#</a> <code>.rev_range</code> \u5012\u5E8F\u533A\u95F4</h4><p>\u5982\u679C\u60F3\u83B7\u53D6\u5C0F\u4E8E\u7B49\u4E8E\u67D0\u4E2A\u503C\u7684\u5012\u5E8F\u533A\u95F4\uFF0C\u53EF\u4EE5\u8FD9\u6837</p><div class="language-text ext-text"><pre class="language-text"><code>test2.rev_range(2..)
</code></pre></div><p>\u5C06\u8F93\u51FA</p><div class="language-text ext-text"><pre class="language-text"><code>(2, 4)
(1, 5)
(0, 0)
</code></pre></div><p>\u5012\u5E8F\u533A\u95F4\u7684 <code>begin</code> \u6216 <code>end</code> \u5FC5\u987B\u6709\u4E00\u4E2A\u4E0D\u8BBE\u7F6E\uFF1B\u56E0\u4E3A\u5982\u679C\u540C\u65F6\u8BBE\u7F6E\uFF0C\u4F60\u603B\u662F\u53EF\u4EE5\u7528 <code>range(end..begin)</code> \u6765\u5B9E\u73B0\u540C\u6837\u7684\u6548\u679C\u3002</p><h3 id="\u81EA\u5B9A\u4E49\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u6570\u636E\u7C7B\u578B</h3><p>\u6F14\u793A\u4EE3\u7801\u89C1 <a href="https://github.com/rmw-lib/mdbx-example/blob/master/01/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/01</a></p><div class="language-rust ext-rs"><pre class="language-rust"><code>use anyhow::Result;
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
</code></pre></div><p>\u8F93\u51FA\u5982\u4E0B</p><div class="language-text ext-text"><pre class="language-text"><code>Some(City { name: &quot;BeiJing&quot;, lnglat: (11640, 3990) })
</code></pre></div><p>\u5728\u81EA\u5B9A\u4E49\u7C7B\u578B\u7684\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528 <a href="https://github.com/koute/speedy" target="_blank" rel="noopener noreferrer"><code>speedy</code></a> \u505A\u5E8F\u5217\u5316\uFF08<a href="https://github.com/djkoloski/rust_serialization_benchmark" target="_blank" rel="noopener noreferrer"><code>speedy</code> \u6027\u80FD\u8BC4\u6D4B</a>\uFF09\u3002</p><p>\u81EA\u5B9A\u4E49\u7C7B\u578B\u5B9E\u73B0 <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.FromMdbx.html" target="_blank" rel="noopener noreferrer"><code>FromMdbx</code></a> \u548C <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.ToAsRef.html" target="_blank" rel="noopener noreferrer"><code>ToAsRef</code></a> \u540E\u5C31\u53EF\u4EE5\u88AB\u5B58\u5165 <code>mdbx</code> \u4E86\u3002</p><p>\u5982\u679C\u4F60\u4F7F\u7528\u67D0\u79CD\u7279\u5B9A\u7684\u5E8F\u5217\u5316\u5E93\uFF0C\u8FD8\u53EF\u4EE5\u81EA\u5B9A\u4E49 <a href="https://blog.logrocket.com/macros-in-rust-a-tutorial-with-examples/" target="_blank" rel="noopener noreferrer">\u5C5E\u6027\u5F0F\u5B8F</a> \u6765\u7B80\u5316\u6574\u4E2A\u6D41\u7A0B\u3002</p><h4 id="\u7528\u5C5E\u6027\u5F0F\u5B8F\u7B80\u5316\u81EA\u5B9A\u4E49\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7528\u5C5E\u6027\u5F0F\u5B8F\u7B80\u5316\u81EA\u5B9A\u4E49\u7C7B\u578B" aria-hidden="true">#</a> \u7528\u5C5E\u6027\u5F0F\u5B8F\u7B80\u5316\u81EA\u5B9A\u4E49\u7C7B\u578B</h4><p>\u5B9E\u73B0\u4E00\u4E2A\u5C5E\u6027\u5B8F\u5F88\u7B80\u5355\uFF0C\u6BD4\u5982 <a href="https://crates.io/crates/mdbx_speedy" target="_blank" rel="noopener noreferrer"><code>mdbx_speedy</code></a> \u5C5E\u6027\u5F0F\u5B8F\u4EE3\u7801\u5982\u4E0B :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>extern crate proc_macro;
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
</code></pre></div><p>\u5728\u81EA\u5DF1\u7684\u9879\u76EE\u4E2D\u5148 <code>cargo add mdbx-speedy</code>\uFF0C \u7136\u540E\u5C31\u53EF\u4EE5\u5FEB\u901F\u81EA\u5B9A\u4E49\u7C7B\u578B\u4E86 ( \u6F14\u793A\u4EE3\u7801\u89C1 <a href="https://github.com/rmw-lib/mdbx-example/blob/master/02/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/02</a> )\u3002</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use anyhow::Result;
use mdbx::prelude::*;
use mdbx_speedy::MdbxSpeedy;
use speedy::{Readable, Writable};

#[derive(PartialEq, Debug, Readable, Writable, MdbxSpeedy)]
pub struct City {
  name: String,
  lnglat: (u32, u32),
}
</code></pre></div><p>\u5F53\u7136\u91CD\u590D\u5199 <code>#[derive(PartialEq, Debug, Readable, Writable, MdbxSpeedy)]</code> \u8FD8\u662F\u5F88\u70E6\u4EBA\uFF0C\u53EF\u4EE5\u7528 <a href="https://docs.rs/derive-alias/0.1.0/derive_alias" target="_blank" rel="noopener noreferrer"><code>derive_alias</code></a> \u8FDB\u4E00\u6B65\u7B80\u5316\u4EE3\u7801\u3002</p><h2 id="\u4F7F\u7528\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6CE8\u610F" aria-hidden="true">#</a> \u4F7F\u7528\u6CE8\u610F</h2><h3 id="\u952E\u7684\u957F\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u952E\u7684\u957F\u5EA6" aria-hidden="true">#</a> \u952E\u7684\u957F\u5EA6</h3><ul><li>\u6700\u5C0F 0\uFF0C\u6700\u5927\u2248\xBD\u9875\u5927\u5C0F\uFF08\u9ED8\u8BA4 4K \u9875\u952E\u6700\u5927\u5927\u5C0F\u4E3A 2022 \u5B57\u8282\uFF09\uFF0C\u521D\u59CB\u5316\u6570\u636E\u5E93\u65F6\u8BBE\u7F6E <code>pagesize</code> \u53EF\u4EE5\u914D\u7F6E\uFF0C\u4E0D\u8D85\u8FC7 <code>65536</code>\uFF0C\u9700\u8981\u662F 2 \u7684\u5E42\u500D\u6570\u3002</li></ul><h2 id="\u811A\u6CE8" tabindex="-1"><a class="header-anchor" href="#\u811A\u6CE8" aria-hidden="true">#</a> \u811A\u6CE8</h2><p>\u4ED6\u4EEC\u5217\u4E3E\u4E86\u4ECE LMDB \u8FC7\u6E21\u5230 MDBX \u7684\u597D\u5904\uFF1A</p><blockquote><p>Erigon \u5F00\u59CB\u4F7F\u7528 BoltDB \u6570\u636E\u5E93\u540E\u7AEF\uFF0C\u7136\u540E\u589E\u52A0\u4E86\u5BF9 BadgerDB \u7684\u652F\u6301\uFF0C\u6700\u540E\u5B8C\u5168\u8FC1\u79FB\u5230 LMDB\u3002\u5728\u67D0\u4E9B\u65F6\u5019\uFF0C\u6211\u4EEC\u9047\u5230\u4E86\u7A33\u5B9A\u6027\u95EE\u9898\uFF0C\u8FD9\u4E9B\u95EE\u9898\u662F\u7531\u6211\u4EEC\u5BF9 LMDB \u7684\u4F7F\u7528\u5F15\u8D77\u7684\uFF0C\u800C\u8FD9\u4E9B\u95EE\u9898\u662F\u521B\u9020\u8005\u6CA1\u6709\u9884\u6599\u5230\u7684\u3002\u4ECE\u90A3\u65F6\u8D77\uFF0C\u6211\u4EEC\u4E00\u76F4\u5728\u5173\u6CE8\u4E00\u4E2A\u652F\u6301\u826F\u597D\u7684 LMDB \u7684\u884D\u751F\u4EA7\u54C1\uFF0C\u79F0\u4E3A MDBX\uFF0C\u5E76\u5E0C\u671B\u4F7F\u7528\u4ED6\u4EEC\u7684\u7A33\u5B9A\u6027\u6539\u8FDB\uFF0C\u5E76\u6709\u53EF\u80FD\u5728\u672A\u6765\u8FDB\u884C\u66F4\u591A\u7684\u5408\u4F5C\u3002MDBX \u7684\u6574\u5408\u5DF2\u7ECF\u5B8C\u6210\uFF0C\u73B0\u5728\u662F\u65F6\u5019\u8FDB\u884C\u66F4\u591A\u7684\u6D4B\u8BD5\u548C\u8BB0\u5F55\u4E86\u3002</p><p>\u4ECE LMDB \u8FC7\u6E21\u5230 MDBX \u7684\u597D\u5904\uFF1A</p><ol><li><p>\u6570\u636E\u5E93\u6587\u4EF6\u7684\u589E\u957F &quot;\u7A7A\u95F4(geometry)&quot; \u5DE5\u4F5C\u6B63\u5E38\u3002\u8FD9\u4E00\u70B9\u5F88\u91CD\u8981\uFF0C\u5C24\u5176\u662F\u5728 Windows \u4E0A\u3002\u5728 LMDB \u4E2D\uFF0C\u4EBA\u4EEC\u5FC5\u987B\u4E8B\u5148\u6307\u5B9A\u4E00\u6B21\u5185\u5B58\u6620\u5C04\u5927\u5C0F\uFF08\u76EE\u524D\u6211\u4EEC\u9ED8\u8BA4\u4F7F\u7528 2Tb\uFF09\uFF0C\u5982\u679C\u6570\u636E\u5E93\u6587\u4EF6\u7684\u589E\u957F\u8D85\u8FC7\u8FD9\u4E2A\u9650\u5236\uFF0C\u5C31\u5FC5\u987B\u91CD\u65B0\u542F\u52A8\u8FD9\u4E2A\u8FC7\u7A0B\u3002\u5728 Windows \u4E0A\uFF0C\u5C06\u5185\u5B58\u6620\u5C04\u5927\u5C0F\u8BBE\u7F6E\u4E3A 2Tb \u4F1A\u4F7F\u6570\u636E\u5E93\u6587\u4EF6\u4E00\u5F00\u59CB\u5C31\u6709 2Tb \u5927\uFF0C\u8FD9\u4E0D\u662F\u5F88\u65B9\u4FBF\u3002\u5728 MDBX \u4E2D\uFF0C\u5185\u5B58\u6620\u5C04\u5927\u5C0F\u662F\u4EE5 2Gb \u4E3A\u5355\u4F4D\u9012\u589E\u7684\u3002\u8FD9\u610F\u5473\u7740\u5076\u5C14\u7684\u91CD\u65B0\u6620\u5C04\uFF0C\u4F46\u4F1A\u5E26\u6765\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C\u3002</p></li><li><p>MDBX \u5BF9\u4E8B\u52A1\u5904\u7406\u7684\u5E76\u53D1\u4F7F\u7528\u6709\u66F4\u4E25\u683C\u7684\u68C0\u67E5\uFF0C\u4EE5\u53CA\u5728\u540C\u4E00\u6267\u884C\u7EBF\u7A0B\u4E2D\u7684\u91CD\u53E0\u8BFB\u5199\u4E8B\u52A1\u3002\u8FD9\u4F7F\u6211\u4EEC\u80FD\u591F\u53D1\u73B0\u4E00\u4E9B\u975E\u660E\u663E\u7684\u9519\u8BEF\uFF0C\u5E76\u4F7F\u884C\u4E3A\u66F4\u53EF\u9884\u6D4B\u3002<br> \u5728\u8D85\u8FC7 5 \u5E74\u7684\u65F6\u95F4\u91CC\uFF08\u81EA\u4ECE\u5B83\u4ECE LMDB \u4E2D\u5206\u79BB\u51FA\u6765\uFF09\uFF0CMDBX \u79EF\u7D2F\u4E86\u5927\u91CF\u7684\u5B89\u5168\u4FEE\u590D\u548C heisenbug \u4FEE\u590D\uFF0C\u636E\u6211\u4EEC\u6240\u77E5\uFF0C\u8FD9\u4E9B\u4FEE\u590D\u4ECD\u7136\u5B58\u5728\u4E8E LMDB \u4E2D\u3002\u5176\u4E2D\u4E00\u4E9B\u662F\u6211\u4EEC\u5728\u6D4B\u8BD5\u8FC7\u7A0B\u4E2D\u53D1\u73B0\u7684\uFF0C\u800C MDBX \u7684\u7EF4\u62A4\u8005\u4E5F\u8BA4\u771F\u5BF9\u5F85\uFF0C\u5E76\u53CA\u65F6\u8FDB\u884C\u4E86\u4FEE\u590D\u3002</p></li><li><p>\u5F53\u6D89\u53CA\u5230\u4E0D\u65AD\u4FEE\u6539\u6570\u636E\u7684\u6570\u636E\u5E93\u65F6\uFF0C\u5B83\u4EEC\u4F1A\u4EA7\u751F\u76F8\u5F53\u591A\u7684\u53EF\u56DE\u6536\u7A7A\u95F4\uFF08\u5728 LMDB \u672F\u8BED\u4E2D\u4E5F\u88AB\u79F0\u4E3A &quot;freelist&quot;\uFF09\u3002\u6211\u4EEC\u4E0D\u5F97\u4E0D\u7ED9 LMDB \u6253\u4E0A\u8865\u4E01\uFF0C\u4EE5\u4FEE\u590D\u5728\u5904\u7406\u53EF\u56DE\u6536\u7A7A\u95F4\u65F6\u6700\u4E25\u91CD\u7684\u7F3A\u70B9 <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide" target="_blank" rel="noopener noreferrer">\uFF08\u5206\u6790\uFF09</a> \u3002<a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide%EF%BC%89%E3%80%82MDBX%E5%AF%B9%E5%8F%AF%E5%9B%9E%E6%94%B6%E7%A9%BA%E9%97%B4%E7%9A%84%E6%9C%89%E6%95%88%E5%A4%84%E7%90%86%E8%BF%9B%E8%A1%8C%E4%BA%86%E7%89%B9%E5%88%AB%E7%9A%84%E5%85%B3%E6%B3%A8%EF%BC%8C%E5%88%B0%E7%9B%AE%E5%89%8D%E4%B8%BA%E6%AD%A2%EF%BC%8C%E8%BF%98%E4%B8%8D%E9%9C%80%E8%A6%81%E6%89%93%E8%A1%A5%E4%B8%81%E3%80%82" target="_blank" rel="noopener noreferrer">MDBX \u5BF9\u53EF\u56DE\u6536\u7A7A\u95F4\u7684\u6709\u6548\u5904\u7406\u8FDB\u884C\u4E86\u7279\u522B\u7684\u5173\u6CE8\uFF0C\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u8FD8\u4E0D\u9700\u8981\u6253\u8865\u4E01\u3002</a></p></li><li><p>\u6839\u636E\u6211\u4EEC\u7684\u6D4B\u8BD5\uFF0CMDBX \u5728\u6211\u4EEC\u7684\u5DE5\u4F5C\u8D1F\u8F7D\u4E0A\u8868\u73B0\u5F97\u7A0D\u5FAE\u597D\u4E00\u4E9B\u3002</p></li><li><p>MDBX \u66B4\u9732\u4E86\u66F4\u591A\u7684\u5185\u90E8\u9065\u6D4B\u6570\u636E \u2014 \u66F4\u591A\u5173\u4E8E\u6570\u636E\u5E93\u5185\u90E8\u53D1\u751F\u7684\u6307\u6807\u3002\u800C\u6211\u4EEC\u5728 Grafana \u4E2D\u62E5\u6709\u8FD9\u4E9B\u6570\u636E \u2014 \u4EE5\u4FBF\u5728\u5E94\u7528\u8BBE\u8BA1\u4E0A\u505A\u51FA\u66F4\u597D\u7684\u51B3\u5B9A\u3002\u4F8B\u5982\uFF0C\u5728\u5B8C\u5168\u8FC7\u6E21\u5230 MDBX \u4E4B\u540E\uFF08\u79FB\u9664\u5BF9 LMDB \u7684\u652F\u6301\uFF09\uFF0C\u6211\u4EEC\u5C06\u5B9E\u65BD &quot;\u63D0\u4EA4\u534A\u6EE1\u4E8B\u52A1 &quot; \u7B56\u7565\uFF0C\u4EE5\u907F\u514D\u6EA2\u51FA/\u672A\u6EA2\u51FA\u7684\u78C1\u76D8\u63A5\u89E6\u3002\u8FD9\u5C06\u8FDB\u4E00\u6B65\u7B80\u5316\u6211\u4EEC\u7684\u4EE3\u7801\uFF0C\u800C\u4E0D\u5F71\u54CD\u6027\u80FD\u3002</p></li><li><p>MDBX \u652F\u6301 &quot;Exclusive open &quot; \u6A21\u5F0F--\u6211\u4EEC\u5C06\u5176\u7528\u4E8E\u6570\u636E\u5E93\u8FC1\u79FB\uFF0C\u4EE5\u9632\u6B62\u4EFB\u4F55\u5176\u4ED6\u8BFB\u8005\u5728\u6570\u636E\u5E93\u8FC1\u79FB\u8FC7\u7A0B\u4E2D\u8BBF\u95EE\u6570\u636E\u5E93\u3002</p></li></ol></blockquote><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p><a href="https://github.com/ledgerwatch/erigon/wiki/Criteria-for-transitioning-from-Alpha-to-Beta#switch-from-lmdb-to-mdbx" target="_blank" rel="noopener noreferrer">Erigon\uFF08\u4E0B\u4E00\u4EE3\u4EE5\u592A\u574A\u5BA2\u6237\u7AEF\uFF09\u6700\u8FD1\u4ECE LMDB \u5207\u6362\u5230\u4E86 MDBX\u3002</a> <a href="#fnref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,155);function ae(oe,se){const n=c("RouterLink");return s(),l(d,null,[u,h,g,b,e("nav",m,[e("ul",null,[e("li",null,[r(n,{to:"#\u5F15\u5B50"},{default:a(()=>[_]),_:1})]),e("li",null,[r(n,{to:"#libmdbx-\u662F\u4EC0\u4E48"},{default:a(()=>[f]),_:1})]),e("li",null,[r(n,{to:"#\u4F7F\u7528\u6559\u7A0B"},{default:a(()=>[x]),_:1}),e("ul",null,[e("li",null,[r(n,{to:"#\u5982\u4F55\u8FD0\u884C\u793A\u4F8B"},{default:a(()=>[v]),_:1})]),e("li",null,[r(n,{to:"#\u793A\u4F8B-1-\u5199-set-key-val-\u548C-\u8BFB-get-key"},{default:a(()=>[k]),_:1}),e("ul",null,[e("li",null,[r(n,{to:"#\u4EE3\u7801"},{default:a(()=>[E]),_:1})]),e("li",null,[r(n,{to:"#\u8FD0\u884C\u8F93\u51FA"},{default:a(()=>[y]),_:1})]),e("li",null,[r(n,{to:"#\u4EE3\u7801\u8BF4\u660E"},{default:a(()=>[B]),_:1}),e("ul",null,[e("li",null,[r(n,{to:"#env-rw-\u5B9A\u4E49\u6570\u636E\u5E93"},{default:a(()=>[D]),_:1})]),e("li",null,[r(n,{to:"#\u5B8F\u5C55\u5F00"},{default:a(()=>[w]),_:1})]),e("li",null,[r(n,{to:"#anyhow-\u548C-lazy-static"},{default:a(()=>[q]),_:1})]),e("li",null,[r(n,{to:"#\u5B8F-mdbx"},{default:a(()=>[T]),_:1})]),e("li",null,[r(n,{to:"#\u7EBF\u7A0B\u4E0E\u4E8B\u52A1"},{default:a(()=>[M]),_:1})]),e("li",null,[r(n,{to:"#\u8BFB\u5199\u4E8C\u8FDB\u5236\u6570\u636E"},{default:a(()=>[R]),_:1})])])])])]),e("li",null,[r(n,{to:"#\u793A\u4F8B-2-\u6570\u636E\u7C7B\u578B\u3001\u6570\u636E\u5E93\u6807\u5FD7-\u3001\u5220\u9664\u3001\u904D\u5386"},{default:a(()=>[S]),_:1}),e("ul",null,[e("li",null,[r(n,{to:"#\u4EE3\u7801-1"},{default:a(()=>[X]),_:1})]),e("li",null,[r(n,{to:"#\u8FD0\u884C\u8F93\u51FA-1"},{default:a(()=>[C]),_:1})]),e("li",null,[r(n,{to:"#\u5FEB\u6377\u8BFB\u5199"},{default:a(()=>[A]),_:1})]),e("li",null,[r(n,{to:"#\u6570\u636E\u7C7B\u578B"},{default:a(()=>[N]),_:1}),e("ul",null,[e("li",null,[r(n,{to:"#\u9884\u7F6E\u6570\u636E\u7C7B\u578B"},{default:a(()=>[P]),_:1})])])]),e("li",null,[r(n,{to:"#\u6570\u636E\u5E93\u6807\u5FD7"},{default:a(()=>[O]),_:1}),e("ul",null,[e("li",null,[r(n,{to:"#dupsort-\u4E00\u4E2A\u952E\u5BF9\u5E94\u591A\u4E2A\u503C"},{default:a(()=>[U]),_:1})]),e("li",null,[r(n,{to:"#dup-key-\u8FD4\u56DE\u67D0\u952E\u6240\u6709\u5BF9\u5E94\u7684\u503C\u7684\u8FED\u4EE3\u5668"},{default:a(()=>[F]),_:1})]),e("li",null,[r(n,{to:"#\u9ED8\u8BA4\u81EA\u52A8\u8FFD\u52A0\u7684\u6570\u636E\u5E93\u6807\u5FD7"},{default:a(()=>[z]),_:1})])])]),e("li",null,[r(n,{to:"#\u5220\u9664\u6570\u636E"},{default:a(()=>[I]),_:1}),e("ul",null,[e("li",null,[r(n,{to:"#del-key-\u5220\u9664\u952E"},{default:a(()=>[L]),_:1})]),e("li",null,[r(n,{to:"#del-val-key-val-\u7CBE\u786E\u5339\u914D\u7684\u5220\u9664"},{default:a(()=>[V]),_:1})])])]),e("li",null,[r(n,{to:"#\u904D\u5386"},{default:a(()=>[Y]),_:1}),e("ul",null,[e("li",null,[r(n,{to:"#\u987A\u5E8F\u904D\u5386"},{default:a(()=>[$]),_:1})]),e("li",null,[r(n,{to:"#rev-\u5012\u5E8F\u904D\u5386"},{default:a(()=>[G]),_:1})]),e("li",null,[r(n,{to:"#\u6392\u5E8F\u65B9\u5F0F"},{default:a(()=>[K]),_:1})])])])])]),e("li",null,[r(n,{to:"#\u533A\u95F4\u8FED\u4EE3\u5668"},{default:a(()=>[W]),_:1}),e("ul",null,[e("li",null,[r(n,{to:"#\u8FD0\u884C\u8F93\u51FA-2"},{default:a(()=>[j]),_:1})]),e("li",null,[r(n,{to:"#range-begin-end-\u533A\u95F4\u8FED\u4EE3"},{default:a(()=>[H]),_:1})]),e("li",null,[r(n,{to:"#rev-range-\u5012\u5E8F\u533A\u95F4"},{default:a(()=>[J]),_:1})])])]),e("li",null,[r(n,{to:"#\u81EA\u5B9A\u4E49\u6570\u636E\u7C7B\u578B"},{default:a(()=>[Q]),_:1}),e("ul",null,[e("li",null,[r(n,{to:"#\u7528\u5C5E\u6027\u5F0F\u5B8F\u7B80\u5316\u81EA\u5B9A\u4E49\u7C7B\u578B"},{default:a(()=>[Z]),_:1})])])])])]),e("li",null,[r(n,{to:"#\u4F7F\u7528\u6CE8\u610F"},{default:a(()=>[ee]),_:1}),e("ul",null,[e("li",null,[r(n,{to:"#\u952E\u7684\u957F\u5EA6"},{default:a(()=>[te]),_:1})])])]),e("li",null,[r(n,{to:"#\u811A\u6CE8"},{default:a(()=>[ne]),_:1})])])]),re],64)}var ie=o(p,[["render",ae],["__file","2021-12-21-mdbx.html.vue"]]);export{ie as default};
