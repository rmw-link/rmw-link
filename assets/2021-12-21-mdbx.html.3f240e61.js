import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as l,a as t,b as a,w as s,F as d,d as n,e as i,r as u}from"./app.2a6a1bd2.js";const p={},m=t("h1",{id:"balicek-rust-pro-libmdbx",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#balicek-rust-pro-libmdbx","aria-hidden":"true"},"#"),n(" Bal\xED\u010Dek rust pro libmdbx")],-1),b=t("p",null,[n("Obal "),t("code",null,"rust"),n(" pro datab\xE1zi "),t("a",{href:"https://github.com/erthink/libmdbx",target:"_blank",rel:"noopener noreferrer"},"libmdbx"),n(".")],-1),c=t("hr",null,null,-1),v=t("p",null,"Adres\xE1\u0159 :",-1),g={class:"table-of-contents"},h=n("Cit\xE1ty"),_=n("Co je libmdbx?"),k=n("V\xFDukov\xE9 programy"),f=n("Jak spustit p\u0159\xEDklad"),x=n("P\u0159\xEDklad 1 : Psan\xED set(key,val) a \u010Dten\xED .get(key)"),y=n("K\xF3d"),q=n("Spustit v\xFDstup"),z=n("Popis k\xF3du"),D=n("env_rw! Definice datab\xE1ze"),w=n("Roz\u0161\xED\u0159en\xED maker"),E=n("anyhow a lazy_static"),T=n("Makro mdbx!"),B=n("Vl\xE1kna a transakce"),j=n("\u010Cten\xED a z\xE1pis bin\xE1rn\xEDch dat"),N=n("P\u0159\xEDklad 2: Datov\xE9 typy, p\u0159\xEDznaky datab\xE1ze, maz\xE1n\xED, proch\xE1zen\xED"),M=n("K\xF3d"),S=n("Spustit v\xFDstup"),V=n("Rychl\xE9 \u010Dten\xED a psan\xED"),X=n("Datov\xE9 typy"),R=n("P\u0159ednastaven\xE9 datov\xE9 typy"),O=n("P\u0159\xEDznaky datab\xE1ze"),C=n("DUPSORT : jednomu kl\xED\u010Di odpov\xEDd\xE1 v\xEDce ne\u017E jedna hodnota"),P=n(".dup(key) iter\xE1tor, kter\xFD vrac\xED v\u0161echny hodnoty odpov\xEDdaj\xEDc\xED kl\xED\u010Di."),U=n("V\xFDchoz\xED automaticky p\u0159ipojen\xE9 p\u0159\xEDznaky datab\xE1ze"),I=n("Odstran\u011Bn\xED dat"),A=n(".del(key) Odstran\u011Bn\xED kl\xED\u010De"),L=n(".del_val(key,val) Odstran\u011Bn\xED p\u0159esn\xE9 shody"),F=n("Traverzov\xE1n\xED"),$=n("sekven\u010Dn\xED proch\xE1zen\xED"),Y=n(".rev() Obr\xE1cen\xE9 proch\xE1zen\xED po\u0159ad\xED"),G=n("T\u0159\xEDd\u011Bn\xED"),K=n("Intervalov\xE9 iter\xE1tory"),Z=n("Spus\u0165te v\xFDstup"),H=n(".range(begin..end) Intervalov\xE1 iterace"),W=n(".rev_range Obr\xE1cen\xE9 intervaly"),J=n("P\u0159izp\u016Fsoben\xED typ\u016F dat"),Q=n("Zjednodu\u0161en\xED vlastn\xEDch typ\u016F pomoc\xED atributov\xFDch maker"),tt=n("Pozn\xE1mka k pou\u017Eit\xED"),nt=n("D\xE9lka kl\xED\u010De"),et=n("Pozn\xE1mky pod \u010Darou"),at=i(`<hr><h2 id="citaty" tabindex="-1"><a class="header-anchor" href="#citaty" aria-hidden="true">#</a> Cit\xE1ty</h2><p>P\u0159i psan\xED <a href="https://rmw.link" target="_blank" rel="noopener noreferrer">&#39;rmw.link</a> &#39; jsem m\u011Bl pocit, \u017Ee pot\u0159ebuji vlo\u017Eenou datab\xE1zi.</p><p>Vzhledem k s\xED\u0165ov\xE9 propustnosti p\u0159i \u010Dast\xE9m nahr\xE1v\xE1n\xED, \u010Dten\xED a z\xE1pisu byla str\xE1nka <code>sqlite3</code> z hlediska v\xFDkonu p\u0159\xEDli\u0161 pokro\u010Dil\xE1.</p><p>Proto byla vhodn\u011Bj\u0161\xED datab\xE1ze kl\xED\u010D-hodnota ni\u017E\u0161\xED \xFArovn\u011B ( <a href="https://discourse.world/h/2020/06/05/Shine-and-poverty-key-value-database-LMDB-in-applications-for-iOS" target="_blank" rel="noopener noreferrer">lmdb je 10kr\xE1t rychlej\u0161\xED ne\u017E sqlite</a> ).</p><p><img src="//irmw.gumlet.io/yxZV8x.jpg" alt=""></p><p>Nakonec jsem se rozhodl pro kouzelnou verzi <code>lmdb</code> - <code>mdbx</code>.</p><p>V sou\u010Dasn\xE9 dob\u011B existuj\xEDc\xED bal\xED\u010Dek <code>rust</code> <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">mdbx-rs (mdbx-sys</a> ) z <code>mdbx</code> <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">nepodporuje Windows</a>, tak\u017Ee jsem si vzal za \xFAkol p\u0159ibalit verzi s podporou Windows.</p><p>Podpora ukl\xE1d\xE1n\xED vlastn\xEDch typ\u016F rzi. Podporuje v\xEDcevl\xE1knov\xFD p\u0159\xEDstup.</p><p>Datab\xE1zi lze definovat v modulu pomoc\xED <code>lazy_static</code> a pak ji jednodu\u0161e zav\xE9st a pou\u017E\xEDvat pomoc\xED n\u011B\u010Deho jako :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
</code></pre></div><h2 id="co-je-libmdbx" tabindex="-1"><a class="header-anchor" href="#co-je-libmdbx" aria-hidden="true">#</a> Co je libmdbx?</h2><p><a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">mdbx</a> je sekund\xE1rn\xED datab\xE1ze zalo\u017Een\xE1 na lmdb, jej\xEDm\u017E autorem je rusk\xFD <a href="https://vk.com/erthink" target="_blank" rel="noopener noreferrer">\u041B\u0435\u043E\u043D\u0438\u0434 \u042E\u0440\u044C\u0435\u0432 (Leonid Jurjev)</a>.</p><p><a href="https://en.wikipedia.org/wiki/Lightning_Memory-Mapped_Database" target="_blank" rel="noopener noreferrer">lmdb</a> je superrychl\xE1 vestav\u011Bn\xE1 datab\xE1ze kl\xED\u010D-hodnota.</p><p>Fulltextov\xFD vyhled\xE1va\u010D <a href="https://docs.meilisearch.com/reference/under_the_hood/storage.html#measured-disk-usage" target="_blank" rel="noopener noreferrer">MeiliSearch</a> je zalo\u017Een na lmdb.</p><p><a href="https://docs.nvidia.com/deeplearning/dali/user-guide/docs/examples/general/data_loading/dataloading_lmdb.html" target="_blank" rel="noopener noreferrer">Tak\xE9 framework pro hlubok\xE9 u\u010Den\xED caffe pou\u017E\xEDv\xE1 lmdb jako datov\xE9 \xFAlo\u017Ei\u0161t\u011B</a>.</p><p><a href="https://github.com/erthink/libmdbx#added-features" target="_blank" rel="noopener noreferrer">mdbx je o 30 % rychlej\u0161\xED ne\u017E lmdb v benchmarku ioarena pro testov\xE1n\xED v\xFDkonu vestav\u011Bn\xFDch aplikac\xED</a>.</p><p><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-1.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-3.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-4.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-5.png" alt=""></p><p>Z\xE1rove\u0148 mdbx <a href="https://github.com/erthink/libmdbx#improvements-beyond-lmdb" target="_blank" rel="noopener noreferrer">vylep\u0161uje mnoho nedostatk\u016F</a> lmdb, tak\u017Ee Erigon (klient nov\xE9 generace pro ethereum) ned\xE1vno p\u0159e\u0161el z LMDB na MDBX <sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>.</p><h2 id="vyukove-programy" tabindex="-1"><a class="header-anchor" href="#vyukove-programy" aria-hidden="true">#</a> V\xFDukov\xE9 programy</h2><h3 id="jak-spustit-priklad" tabindex="-1"><a class="header-anchor" href="#jak-spustit-priklad" aria-hidden="true">#</a> Jak spustit p\u0159\xEDklad</h3><p>Nejprve naklonujte k\xF3dovou z\xE1kladnu <code>git clone git@github.com:rmw-lib/mdbx.git --depth=1 &amp;&amp; cd mdbx</code></p><p>Pak spus\u0165te str\xE1nku <code>cargo run --example 01</code> a spust\xED se <code>examples/01.rs</code></p><p>Pokud se jedn\xE1 o v\xE1\u0161 vlastn\xED projekt, nejprve jej spus\u0165te:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>cargo install cargo-edit
cargo add mdbx lazy_static ctor paste
</code></pre></div><h3 id="priklad-1-psani-set-key-val-a-cteni-get-key" tabindex="-1"><a class="header-anchor" href="#priklad-1-psani-set-key-val-a-cteni-get-key" aria-hidden="true">#</a> P\u0159\xEDklad 1 : Psan\xED <code>set(key,val)</code> a \u010Dten\xED <code>.get(key)</code></h3><p>Pod\xEDvejme se na jednoduch\xFD <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/01.rs" target="_blank" rel="noopener noreferrer">p\u0159\xEDklad/01.rs</a></p><h4 id="kod" tabindex="-1"><a class="header-anchor" href="#kod" aria-hidden="true">#</a> K\xF3d</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // N\xE1zev prom\u011Bnn\xE9 datab\xE1ze Env
  Test // Test datab\xE1ze
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xFDpis \u010D\xEDsla verze libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // V\xEDcevl\xE1knov\xE9 \u010Dten\xED a z\xE1pis
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
</code></pre></div><h4 id="spustit-vystup" tabindex="-1"><a class="header-anchor" href="#spustit-vystup" aria-hidden="true">#</a> Spustit v\xFDstup</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/01.mdb
mdbx version https://github.com/erthink/libmdbx/releases/tag/v0.11.2
test1 get Ok(Some(Bin([6])))
[6]
</code></pre></div><h4 id="popis-kodu" tabindex="-1"><a class="header-anchor" href="#popis-kodu" aria-hidden="true">#</a> Popis k\xF3du</h4><h5 id="env-rw-definice-databaze" tabindex="-1"><a class="header-anchor" href="#env-rw-definice-databaze" aria-hidden="true">#</a> <code>env_rw!</code> Definice datab\xE1ze</h5><p>K\xF3d za\u010D\xEDn\xE1 makrem env_rw, kter\xE9 m\xE1 4 parametry.</p><ol><li><p>N\xE1zev prom\u011Bnn\xE9 prost\u0159ed\xED datab\xE1ze</p></li><li><p>Vrac\xED objekt, <a href="https://docs.rs/mdbx/latest/src/mdbx/env.rs.html#27-35" target="_blank" rel="noopener noreferrer">mdbx:: env:: Config</a>.</p></li></ol><p>Pou\u017Eijeme v\xFDchoz\xED konfiguraci, proto\u017Ee <code>Env</code> implementuje <code>From&lt;Into&lt;PathBuf&gt;&gt;</code>, tak\u017Ee n\xE1m posta\u010D\xED cesta k datab\xE1zi <code>into()</code> a v\xFDchoz\xED konfigurace je n\xE1sleduj\xEDc\xED.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
MDBX // N\xE1zev prom\u011Bnn\xE9 datab\xE1ze Env
Test // Test datab\xE1ze
}

fn main() -&gt; Result&lt;()&gt; {
// V\xFDpis \u010D\xEDsla verze libmdbx
unsafe {
  println!(
    &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
    mdbx_version.major, mdbx_version.minor, mdbx_version.release
  );
}

// V\xEDcevl\xE1knov\xE9 \u010Dten\xED a z\xE1pis
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
    sync_period : 65536, // Za 1/65536 sekundy
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
</code></pre></div><p><code>max_db</code> Toto nastaven\xED lze p\u0159i ka\u017Ed\xE9m <a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">otev\u0159en\xED</a> datab\xE1ze resetovat, ale jeho p\u0159\xEDli\u0161n\xE9 nastaven\xED ovlivn\xED v\xFDkon, nastavte jej podle pot\u0159eby.</p><p>V\xFDznam ostatn\xEDch parametr\u016F naleznete v <a href="https://erthink.github.io/libmdbx/group__c__opening.html#ga9138119a904355d245777c4119534061" target="_blank" rel="noopener noreferrer">dokumentaci k libmdbx</a>.</p><ol start="3"><li><p>N\xE1zev makra transakce \u010Dten\xED datab\xE1ze, v\xFDchoz\xED hodnota je <code>r</code></p></li><li><p>N\xE1zev makra transakce z\xE1pisu do datab\xE1ze, v\xFDchoz\xED hodnota je <code>w</code></p></li></ol><p>Parametry 3 a 4 lze vynechat a pou\u017E\xEDt v\xFDchoz\xED hodnoty.</p><h5 id="rozsireni-maker" tabindex="-1"><a class="header-anchor" href="#rozsireni-maker" aria-hidden="true">#</a> Roz\u0161\xED\u0159en\xED maker</h5><p>Pokud chcete vid\u011Bt, co tato magick\xE1 makra d\u011Blaj\xED, m\u016F\u017Eete je rozbalit pomoc\xED makra <code>cargo expand --example 01</code>, kter\xE9 je t\u0159eba nejprve nainstalovat. <code>cargo install cargo-expand</code></p><p>Sn\xEDmek obrazovky s roz\u0161\xED\u0159en\xFDm k\xF3dem je uveden n\xED\u017Ee.</p><p><img src="//irmw.gumlet.io/PDzEtT.png" alt="PDzEtT"></p><h5 id="anyhow-a-lazy-static" tabindex="-1"><a class="header-anchor" href="#anyhow-a-lazy-static" aria-hidden="true">#</a> anyhow a lazy_static</h5><p>Na roz\u0161\xED\u0159en\xE9m sn\xEDmku obrazovky vid\xEDte, \u017Ee jsou pou\u017Eity adresy <code>lazy_static</code> a <code>anyhow</code>.</p><p><a href="https://rustmagazine.github.io/rust_magazine_2021/chapter_2/rust_error_handle.html#thiserror--anyhow" target="_blank" rel="noopener noreferrer">anyhow</a> je knihovna pro zpracov\xE1n\xED chyb pro rust.</p><p><a href="https://juejin.cn/post/7007336922817232927" target="_blank" rel="noopener noreferrer">lazy_static</a> je statick\xE1 prom\u011Bnn\xE1 s odlo\u017Eenou inicializac\xED.</p><p>Tyto dv\u011B knihovny jsou velmi \u010Dast\xE9 a nebudu se jimi zab\xFDvat.</p><h5 id="makro-mdbx" tabindex="-1"><a class="header-anchor" href="#makro-mdbx" aria-hidden="true">#</a> Makro mdbx!</h5><p><a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html" target="_blank" rel="noopener noreferrer"><code>mdbx!</code></a> je <a href="https://mp.weixin.qq.com/s/YT_HNFDCQ_IyocvBkRNJnA" target="_blank" rel="noopener noreferrer">makro procedury</a>.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // N\xE1zev prom\u011Bnn\xE9 datab\xE1ze Env
  Test // Test datab\xE1ze
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xFDpis \u010D\xEDsla verze libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // V\xEDcevl\xE1knov\xE9 \u010Dten\xED a z\xE1pis
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
      sync_period : 65536, // Za 1/65536 sekundy
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
 MDBX // N\xE1zev prom\u011Bnn\xE9 datab\xE1ze Env
 Test // Test datab\xE1ze
}
</code></pre></div><p>Na prvn\xEDm \u0159\xE1dku je n\xE1zev prom\u011Bnn\xE9 prost\u0159ed\xED datab\xE1ze.</p><p>Druh\xFD \u0159\xE1dek je n\xE1zev datab\xE1ze</p><p>Datab\xE1z\xED m\u016F\u017Ee b\xFDt v\xEDce ne\u017E jedna, pro ka\u017Edou z nich jeden \u0159\xE1dek.</p><h5 id="vlakna-a-transakce" tabindex="-1"><a class="header-anchor" href="#vlakna-a-transakce" aria-hidden="true">#</a> Vl\xE1kna a transakce</h5><p>V\xFD\u0161e uveden\xFD k\xF3d demonstruje v\xEDcevl\xE1knov\xE9 \u010Dten\xED a z\xE1pis.</p><p>Je d\u016Fle\u017Eit\xE9 si uv\u011Bdomit, \u017Ee <strong>ve stejn\xE9m vl\xE1kn\u011B</strong> m\u016F\u017Ee b\xFDt v jednom okam\u017Eiku otev\u0159ena <strong>pouze jedna transakce, pokud je ve vl\xE1kn\u011B otev\u0159eno v\xEDce ne\u017E jedna transakce, program spadne</strong>.</p><p>Transakce bude zav\xE1z\xE1na na konci rozsahu.</p><h5 id="cteni-a-zapis-binarnich-dat" tabindex="-1"><a class="header-anchor" href="#cteni-a-zapis-binarnich-dat" aria-hidden="true">#</a> \u010Cten\xED a z\xE1pis bin\xE1rn\xEDch dat</h5><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // N\xE1zev prom\u011Bnn\xE9 datab\xE1ze Env
  Test // Test datab\xE1ze
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xFDpis \u010D\xEDsla verze libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // V\xEDcevl\xE1knov\xE9 \u010Dten\xED a z\xE1pis
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
      sync_period : 65536, // Za 1/65536 sekundy
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
 MDBX // N\xE1zev prom\u011Bnn\xE9 datab\xE1ze Env
 Test // Test datab\xE1ze
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
</code></pre></div><p><code>set</code> je z\xE1pis, <code>get</code> je \u010Dten\xED a ka\u017Ed\xFD objekt, kter\xFD implementuje <a href="https://doc.rust-lang.org/std/convert/trait.AsRef.html" target="_blank" rel="noopener noreferrer"><code>AsRef&lt;[u8]&gt;</code></a> lze objekt zapsat do datab\xE1ze.</p><p><code>get</code> Vznik\xE1 <code>Ok(Some(Bin([6])))</code>, kter\xFD lze p\u0159ev\xE9st na <code>&amp;[u8]</code>.</p><h3 id="priklad-2-datove-typy-priznaky-databaze-mazani-prochazeni" tabindex="-1"><a class="header-anchor" href="#priklad-2-datove-typy-priznaky-databaze-mazani-prochazeni" aria-hidden="true">#</a> P\u0159\xEDklad 2: Datov\xE9 typy, p\u0159\xEDznaky datab\xE1ze, maz\xE1n\xED, proch\xE1zen\xED</h3><p>Pod\xEDvejme se na druh\xFD <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">p\u0159\xEDklad/02.rs</a>:</p><p>V tomto p\u0159\xEDkladu je vynech\xE1na adresa <code>env_rw!</code> a t\u0159et\xED a \u010Dtvrt\xFD argument ( <code>r</code>, <code>w</code>) jsou vynech\xE1ny.</p><h4 id="kod-1" tabindex="-1"><a class="header-anchor" href="#kod-1" aria-hidden="true">#</a> K\xF3d</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // N\xE1zev prom\u011Bnn\xE9 datab\xE1ze Env
  Test // Test datab\xE1ze
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xFDpis \u010D\xEDsla verze libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // V\xEDcevl\xE1knov\xE9 \u010Dten\xED a z\xE1pis
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
      sync_period : 65536, // Za 1/65536 sekundy
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
 MDBX // N\xE1zev prom\u011Bnn\xE9 datab\xE1ze Env
 Test // Test datab\xE1ze
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
  MDBX // N\xE1zvy prom\u011Bnn\xFDch pro datab\xE1zi ENV
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
  // Rychl\xFD z\xE1pis
  w!(Test1.set [2, 3],[4, 5]);

  // Rychl\xE9 \u010Dten\xED
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

  // V\xEDce operac\xED s v\xEDce datab\xE1zemi v r\xE1mci jedn\xE9 transakce
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

    // Transakce bude zav\xE1z\xE1na na konci rozsahu.
  }

  Ok(())
}
</code></pre></div><h4 id="spustit-vystup-1" tabindex="-1"><a class="header-anchor" href="#spustit-vystup-1" aria-hidden="true">#</a> Spustit v\xFDstup</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/02.mdb

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
</code></pre></div><h4 id="rychle-cteni-a-psani" tabindex="-1"><a class="header-anchor" href="#rychle-cteni-a-psani" aria-hidden="true">#</a> Rychl\xE9 \u010Dten\xED a psan\xED</h4><p>Pokud chceme jednodu\u0161e p\u0159e\u010D\xEDst nebo zapsat jeden \u0159\xE1dek dat, m\u016F\u017Eeme pou\u017E\xEDt syntaktick\xFD cukr v podob\u011B makra.</p><p>P\u0159e\u010Dt\u011Bte si \xFAdaje</p><div class="language-text ext-text"><pre class="language-text"><code>r!(Test1.get [2, 3])
</code></pre></div><p>Z\xE1pis dat</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // N\xE1zev prom\u011Bnn\xE9 datab\xE1ze Env
  Test // Test datab\xE1ze
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xFDpis \u010D\xEDsla verze libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // V\xEDcevl\xE1knov\xE9 \u010Dten\xED a z\xE1pis
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
      sync_period : 65536, // Za 1/65536 sekundy
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
 MDBX // N\xE1zev prom\u011Bnn\xE9 datab\xE1ze Env
 Test // Test datab\xE1ze
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
  MDBX // N\xE1zvy prom\u011Bnn\xFDch pro datab\xE1zi ENV
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
  // Rychl\xFD z\xE1pis
  w!(Test1.set [2, 3],[4, 5]);

  // Rychl\xE9 \u010Dten\xED
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

  // V\xEDce operac\xED s v\xEDce datab\xE1zemi v r\xE1mci jedn\xE9 transakce
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

    // Transakce bude zav\xE1z\xE1na na konci rozsahu.
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
</code></pre></div><p>V\u0161e na jednom \u0159\xE1dku, jak je naps\xE1no v <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">p\u0159\xEDkladech/02.rs.</a></p><h4 id="datove-typy" tabindex="-1"><a class="header-anchor" href="#datove-typy" aria-hidden="true">#</a> Datov\xE9 typy</h4><p>V souboru examples/02. <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">rs</a> vypad\xE1 definice datab\xE1ze takto :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // N\xE1zev prom\u011Bnn\xE9 datab\xE1ze Env
  Test // Test datab\xE1ze
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xFDpis \u010D\xEDsla verze libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // V\xEDcevl\xE1knov\xE9 \u010Dten\xED a z\xE1pis
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
      sync_period : 65536, // Za 1/65536 sekundy
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
 MDBX // N\xE1zev prom\u011Bnn\xE9 datab\xE1ze Env
 Test // Test datab\xE1ze
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
  MDBX // N\xE1zvy prom\u011Bnn\xFDch pro datab\xE1zi ENV
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
  // Rychl\xFD z\xE1pis
  w!(Test1.set [2, 3],[4, 5]);

  // Rychl\xE9 \u010Dten\xED
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

  // V\xEDce operac\xED s v\xEDce datab\xE1zemi v r\xE1mci jedn\xE9 transakce
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

    // Transakce bude zav\xE1z\xE1na na konci rozsahu.
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
</code></pre></div><p>kde <code>key</code> a <code>val</code> definuj\xED datov\xE9 typy kl\xED\u010D\u016F a hodnot.</p><p>Pokud se pokus\xEDte zapsat datov\xFD typ, kter\xFD neodpov\xEDd\xE1 definovan\xE9mu typu, bude hl\xE1\u0161ena chyba, jak ukazuje obr\xE1zek n\xED\u017Ee :</p><p><img src="//irmw.gumlet.io/4rFTC6.png" alt=""></p><p>V\xFDchoz\xED datov\xFD typ je <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Bin.html" target="_blank" rel="noopener noreferrer"><code>Bin</code></a> , lze zapsat jak\xE1koli data, kter\xE1 implementuj\xED <code>AsRef&lt;[u8]&gt;</code>.</p><p>Pokud je kl\xED\u010Dem nebo hodnotou \u0159et\u011Bzec <code>utf8</code>, lze datov\xFD typ nastavit na hodnotu <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Str.html" target="_blank" rel="noopener noreferrer"><code>Str</code></a> .</p><p><a href="https://doc.rust-lang.org/std/ops/trait.Deref.html" target="_blank" rel="noopener noreferrer">Odcitov\xE1n\xED</a> <code>Str</code> vr\xE1t\xED \u0159et\u011Bzec, podobn\u011B jako <code>let k:&amp;str = &amp;k;</code>.</p><p>Krom\u011B toho <code>Str</code> implementuje tak\xE9 <a href="https://doc.rust-lang.org/std/fmt/trait.Display.html" target="_blank" rel="noopener noreferrer"><code>std::fmt::Display</code></a> , <code>println!(&quot;{}&quot;,k)</code> vyp\xED\u0161e \u010Diteln\xFD \u0159et\u011Bzec.</p><h5 id="prednastavene-datove-typy" tabindex="-1"><a class="header-anchor" href="#prednastavene-datove-typy" aria-hidden="true">#</a> P\u0159ednastaven\xE9 datov\xE9 typy</h5><p>Krom\u011B <code>Str</code> a <code>Bin</code> obsahuje wrapper tak\xE9 podporu dat <a href="https://docs.rs/mdbx/latest/src/mdbx/type.rs.html#48" target="_blank" rel="noopener noreferrer">usize, u128, u64, u32, u16, u8, isize, i128, i64, i32, i16, i8, f32, f64</a>.</p><h4 id="priznaky-databaze" tabindex="-1"><a class="header-anchor" href="#priznaky-databaze" aria-hidden="true">#</a> P\u0159\xEDznaky datab\xE1ze</h4><p>P\u0159\xEDznaky datab\xE1ze p\u0159idan\xE9 k dat\u016Fm v <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">souboru examples/02.rs</a> m\u016F\u017Eete vid\u011Bt na adrese <code>Test4</code>. <code>flag DUPSORT</code></p><p>Datab\xE1ze libmdbx m\xE1 \u0159adu p\u0159\xEDznak\u016F ( <a href="https://erthink.github.io/libmdbx/group__c__dbi.html#gafe3bddb297b3ab0d828a487c5726f76a" target="_blank" rel="noopener noreferrer"><code>MDBX_db_flags_t</code></a> ), kter\xE9 lze nastavit.</p><ul><li>REVERSEKEY pou\u017E\xEDv\xE1 pro kl\xED\u010De reverzn\xED porovn\xE1v\xE1n\xED \u0159et\u011Bzc\u016F. (u\u017Eite\u010Dn\xE9 p\u0159i pou\u017Eit\xED mal\xFDch \u010D\xEDsel s koncov\xFDm k\xF3dem jako kl\xED\u010D\u016F)</li><li>DUPSORT pou\u017E\xEDv\xE1 t\u0159\xEDd\u011Bn\xE9 duplik\xE1ty, tj. umo\u017E\u0148uje pro jeden kl\xED\u010D v\xEDce hodnot.</li><li>INTEGERKEY Nativn\xED \u010D\xEDseln\xFD kl\xED\u010D v bajtov\xE9m po\u0159ad\xED uint32_t nebo uint64_t. Kl\xED\u010De mus\xED m\xEDt stejnou velikost a p\u0159i p\u0159ed\xE1v\xE1n\xED jako argumenty mus\xED b\xFDt zarovnan\xE9.</li><li>DUPFIXED Velikost datov\xFDch hodnot mus\xED b\xFDt stejn\xE1, pokud je pou\u017Eit DUPSORT (umo\u017E\u0148uje rychl\xE9 spo\u010D\xEDt\xE1n\xED po\u010Dtu hodnot).</li><li>Pro INTEGERDUP jsou vy\u017Eadov\xE1ny DUPSORT a DUPFIXED; hodnoty jsou cel\xE1 \u010D\xEDsla (podobn\u011B jako u INTEGERKEY). V\u0161echny hodnoty dat mus\xED m\xEDt stejnou velikost a mus\xED b\xFDt zarovnan\xE9, pokud jsou p\u0159ed\xE1v\xE1ny jako parametry.</li><li>REVERSEDUP pou\u017E\xEDv\xE1 DUPSORT; pro hodnoty dat se pou\u017E\xEDv\xE1 obr\xE1cen\xE9 porovn\xE1v\xE1n\xED \u0159et\u011Bzc\u016F.</li><li>CREATE vytvo\u0159\xED DB, pokud neexistuje (p\u0159id\xE1na ve v\xFDchoz\xEDm nastaven\xED).</li><li>DB_ACCEDE Otev\u0159e existuj\xEDc\xED d\xEDl\u010D\xED datab\xE1zi vytvo\u0159enou pomoc\xED p\u0159\xEDznaku unknown.<br> Tento p\u0159\xEDznak DB_ACCEDE je ur\u010Den k otev\u0159en\xED existuj\xEDc\xEDch d\xEDl\u010D\xEDch datab\xE1z\xED vytvo\u0159en\xFDch s nezn\xE1m\xFDmi p\u0159\xEDznaky (REVERSEKEY, DUPSORT, INTEGERKEY, DUPFIXED, INTEGERDUP a REVERSEDUP).<br> V tomto p\u0159\xEDpad\u011B subdatab\xE1ze nevr\xE1t\xED chybu INCOMPATIBLE, ale otev\u0159e se s p\u0159\xEDznaky pou\u017Eit\xFDmi p\u0159i jej\xEDm vytvo\u0159en\xED a aplikace pak m\u016F\u017Ee zjistit skute\u010Dn\xE9 p\u0159\xEDznaky pomoc\xED funkce mdbx_dbi_flags().</li></ul><h5 id="dupsort-jednomu-klici-odpovida-vice-nez-jedna-hodnota" tabindex="-1"><a class="header-anchor" href="#dupsort-jednomu-klici-odpovida-vice-nez-jedna-hodnota" aria-hidden="true">#</a> DUPSORT : jednomu kl\xED\u010Di odpov\xEDd\xE1 v\xEDce ne\u017E jedna hodnota</h5><p><code>DUPSORT</code>, co\u017E znamen\xE1, \u017Ee jednomu kl\xED\u010Di m\u016F\u017Ee odpov\xEDdat v\xEDce ne\u017E jedna hodnota.</p><p>Pokud chcete nastavit v\xEDce p\u0159\xEDznak\u016F, napi\u0161te n\xE1sleduj\xEDc\xED p\u0159\xEDkaz. <code>flag DUPSORT | DUPFIXED</code></p><h5 id="dup-key-iterator-ktery-vraci-vsechny-hodnoty-odpovidajici-klici" tabindex="-1"><a class="header-anchor" href="#dup-key-iterator-ktery-vraci-vsechny-hodnoty-odpovidajici-klici" aria-hidden="true">#</a> <code>.dup(key)</code> iter\xE1tor, kter\xFD vrac\xED v\u0161echny hodnoty odpov\xEDdaj\xEDc\xED kl\xED\u010Di.</h5><p>Tato funkce je k dispozici pouze pro datab\xE1ze ozna\u010Den\xE9 <code>DUPSORT</code>, kde jednomu kl\xED\u010Di m\u016F\u017Ee odpov\xEDdat v\xEDce ne\u017E jedna hodnota.</p><p>Pro datab\xE1ze <code>DUPSORT</code> vrac\xED <code>get</code> pouze prvn\xED hodnotu tohoto kl\xED\u010De. Chcete-li z\xEDskat v\u0161echny hodnoty, pou\u017Eijte adresu <code>dup</code>.</p><h5 id="vychozi-automaticky-pripojene-priznaky-databaze" tabindex="-1"><a class="header-anchor" href="#vychozi-automaticky-pripojene-priznaky-databaze" aria-hidden="true">#</a> V\xFDchoz\xED automaticky p\u0159ipojen\xE9 p\u0159\xEDznaky datab\xE1ze</h5><p>Pokud je typ dat <code>u32</code> / <code>u64</code> / <code>usize</code>, p\u0159\xEDznak datab\xE1ze se p\u0159id\xE1 automaticky. <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#105" target="_blank" rel="noopener noreferrer"><code>INTEGERKEY</code></a> .</p><p>Na stroj\xEDch s mal\xFDm koncov\xFDm k\xF3dov\xE1n\xEDm se automaticky p\u0159id\xE1vaj\xED dal\u0161\xED \u010D\xEDseln\xE9 typy. <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#108" target="_blank" rel="noopener noreferrer"><code>REVERSEKEY</code></a> P\u0159\xEDznak datab\xE1ze je automaticky p\u0159id\xE1n, pokud je datov\xFD typ / / .</p><h4 id="odstraneni-dat" tabindex="-1"><a class="header-anchor" href="#odstraneni-dat" aria-hidden="true">#</a> Odstran\u011Bn\xED dat</h4><h5 id="del-key-odstraneni-klice" tabindex="-1"><a class="header-anchor" href="#del-key-odstraneni-klice" aria-hidden="true">#</a> <code>.del(key)</code> Odstran\u011Bn\xED kl\xED\u010De</h5><p><code>.del(val)</code> Odstran\xED hodnotu odpov\xEDdaj\xEDc\xED kl\xED\u010Di.</p><p>Pokud m\xE1 datab\xE1ze p\u0159\xEDznak <code>DUPSORT</code>, budou v\u0161echny hodnoty pod t\xEDmto kl\xED\u010Dem smaz\xE1ny.</p><p>Vrac\xED adresu <code>true</code>, pokud jsou n\u011Bjak\xE1 data smaz\xE1na, a <code>false</code>, pokud ne.</p><h5 id="del-val-key-val-odstraneni-presne-shody" tabindex="-1"><a class="header-anchor" href="#del-val-key-val-odstraneni-presne-shody" aria-hidden="true">#</a> <code>.del_val(key,val)</code> Odstran\u011Bn\xED p\u0159esn\xE9 shody</h5><p><code>.del_val(key,val)</code> Odstran\xED dvojice kl\xED\u010D-hodnota, kter\xE9 p\u0159esn\u011B odpov\xEDdaj\xED vstupn\xEDm parametr\u016Fm.</p><p>Vrac\xED adresu <code>true</code>, pokud jsou n\u011Bjak\xE1 data smaz\xE1na, a <code>false</code>, pokud ne.</p><h4 id="traverzovani" tabindex="-1"><a class="header-anchor" href="#traverzovani" aria-hidden="true">#</a> Traverzov\xE1n\xED</h4><h5 id="sekvencni-prochazeni" tabindex="-1"><a class="header-anchor" href="#sekvencni-prochazeni" aria-hidden="true">#</a> sekven\u010Dn\xED proch\xE1zen\xED</h5><p>Z d\u016Fvodu implementace <a href="https://doc.rust-lang.org/std/iter/trait.IntoIterator.html" target="_blank" rel="noopener noreferrer"><code>std::iter::IntoIterator</code></a> . m\u016F\u017Eete proch\xE1zet p\u0159\xEDmo takto :</p><p><code>for (k, v) in test1</code></p><h5 id="rev-obracene-prochazeni-poradi" tabindex="-1"><a class="header-anchor" href="#rev-obracene-prochazeni-poradi" aria-hidden="true">#</a> <code>.rev()</code> Obr\xE1cen\xE9 proch\xE1zen\xED po\u0159ad\xED</h5><p><code>for (k, v) in test4.rev()</code></p><h5 id="trideni" tabindex="-1"><a class="header-anchor" href="#trideni" aria-hidden="true">#</a> T\u0159\xEDd\u011Bn\xED</h5><p>Kl\xED\u010De libmdbx jsou se\u0159azeny ve <a href="https://zh.wikipedia.org/wiki/%E5%AD%97%E5%85%B8%E5%BA%8F" target="_blank" rel="noopener noreferrer">slovn\xEDkov\xE9m po\u0159ad\xED</a>.</p><ul><li><p>Pro \u010D\xEDsla bez znam\xE9nka</p><p>jsou se\u0159azeny od nejmen\u0161\xEDho po nejv\u011Bt\u0161\xED, proto\u017Ee p\u0159\xEDznaky datab\xE1ze jsou p\u0159id\xE1v\xE1ny automaticky ( <code>u32</code>/ <code>u64</code>/ <code>usize</code> jsou p\u0159id\xE1ny k <code>INTEGERKEY</code>, ostatn\xED jsou p\u0159id\xE1ny k <code>REVERSEKEY</code> v z\xE1vislosti na strojov\xE9m k\xF3du).</p></li><li><p>Pro \u010D\xEDsla se znam\xE9nkem</p><p>po\u0159ad\xED je n\xE1sleduj\xEDc\xED: nejprve 0, pak v\u0161echna kladn\xE1 \u010D\xEDsla od nejmen\u0161\xEDho po nejv\u011Bt\u0161\xED, pak v\u0161echna z\xE1porn\xE1 \u010D\xEDsla od nejmen\u0161\xEDho po nejv\u011Bt\u0161\xED.</p></li></ul><h3 id="intervalove-iteratory" tabindex="-1"><a class="header-anchor" href="#intervalove-iteratory" aria-hidden="true">#</a> Intervalov\xE9 iter\xE1tory</h3><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // N\xE1zev prom\u011Bnn\xE9 datab\xE1ze Env
  Test // Test datab\xE1ze
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xFDpis \u010D\xEDsla verze libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // V\xEDcevl\xE1knov\xE9 \u010Dten\xED a z\xE1pis
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
      sync_period : 65536, // Za 1/65536 sekundy
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
 MDBX // N\xE1zev prom\u011Bnn\xE9 datab\xE1ze Env
 Test // Test datab\xE1ze
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
  MDBX // N\xE1zvy prom\u011Bnn\xFDch pro datab\xE1zi ENV
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
  // Rychl\xFD z\xE1pis
  w!(Test1.set [2, 3],[4, 5]);

  // Rychl\xE9 \u010Dten\xED
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

  // V\xEDce operac\xED s v\xEDce datab\xE1zemi v r\xE1mci jedn\xE9 transakce
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

    // Transakce bude zav\xE1z\xE1na na konci rozsahu.
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
</code></pre></div><h4 id="spustte-vystup" tabindex="-1"><a class="header-anchor" href="#spustte-vystup" aria-hidden="true">#</a> Spus\u0165te v\xFDstup</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/range.mdb

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
</code></pre></div><h4 id="range-begin-end-intervalova-iterace" tabindex="-1"><a class="header-anchor" href="#range-begin-end-intervalova-iterace" aria-hidden="true">#</a> <code>.range(begin..end)</code> Intervalov\xE1 iterace</h4><p>U \u010D\xEDsel je intervalem \u010D\xEDseln\xFD interval.</p><p>Pro bin\xE1rn\xED interval lze sestrojit stejn\xFD interval, nap\u0159.</p><div class="language-text ext-text"><pre class="language-text"><code>let begin : &amp;[u8] = &amp;[1,1];
for (k,v) in test0.range(begin..=&amp;[2]) {}
</code></pre></div><p>Pokud je <code>begin</code> v\u011Bt\u0161\xED ne\u017E <code>end</code>, bude iterovat zp\u011Bt.</p><p>Nap\u0159\xEDklad <code>test1.range(5..2)</code> vyp\xED\u0161e n\xE1sleduj\xEDc\xED :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // N\xE1zev prom\u011Bnn\xE9 datab\xE1ze Env
  Test // Test datab\xE1ze
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xFDpis \u010D\xEDsla verze libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // V\xEDcevl\xE1knov\xE9 \u010Dten\xED a z\xE1pis
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
      sync_period : 65536, // Za 1/65536 sekundy
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
 MDBX // N\xE1zev prom\u011Bnn\xE9 datab\xE1ze Env
 Test // Test datab\xE1ze
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
  MDBX // N\xE1zvy prom\u011Bnn\xFDch pro datab\xE1zi ENV
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
  // Rychl\xFD z\xE1pis
  w!(Test1.set [2, 3],[4, 5]);

  // Rychl\xE9 \u010Dten\xED
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

  // V\xEDce operac\xED s v\xEDce datab\xE1zemi v r\xE1mci jedn\xE9 transakce
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

    // Transakce bude zav\xE1z\xE1na na konci rozsahu.
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
</code></pre></div><p>Intervalov\xE1 iterace nen\xED podporov\xE1na <a href="https://doc.rust-lang.org/std/ops/struct.RangeFull.html" target="_blank" rel="noopener noreferrer"><code>RangeFull</code></a> , tj. pou\u017Eit\xED adresy <code>..</code>nen\xED podporov\xE1no, pou\u017Eijte m\xEDsto toho v\xFD\u0161e uveden\xFD <a href="#%E9%81%8D%E5%8E%86">traverzovac\xED postup</a>.</p><h4 id="rev-range-obracene-intervaly" tabindex="-1"><a class="header-anchor" href="#rev-range-obracene-intervaly" aria-hidden="true">#</a> <code>.rev_range</code> Obr\xE1cen\xE9 intervaly</h4><p>Pokud chcete z\xEDskat p\u0159evr\xE1cen\xFD interval, kter\xFD je men\u0161\xED nebo roven n\u011Bjak\xE9 hodnot\u011B, m\u016F\u017Eete prov\xE9st n\xE1sleduj\xEDc\xED postup.</p><div class="language-text ext-text"><pre class="language-text"><code>test2.rev_range(2..)
</code></pre></div><p>V\xFDstupem bude</p><div class="language-text ext-text"><pre class="language-text"><code>(2, 4)
(1, 5)
(0, 0)
</code></pre></div><p>Pro invertovan\xFD interval nesm\xED b\xFDt nastavena jedna z mo\u017Enost\xED <code>begin</code> nebo <code>end</code>; pokud jsou toti\u017E nastaveny ob\u011B, m\u016F\u017Eete v\u017Edy pou\u017E\xEDt <code>range(end..begin)</code> pro dosa\u017Een\xED stejn\xE9ho efektu.</p><h3 id="prizpusobeni-typu-dat" tabindex="-1"><a class="header-anchor" href="#prizpusobeni-typu-dat" aria-hidden="true">#</a> P\u0159izp\u016Fsoben\xED typ\u016F dat</h3><p>Uk\xE1zkov\xFD k\xF3d je k dispozici na adrese <a href="https://github.com/rmw-lib/mdbx-example/blob/master/01/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/01</a>.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // N\xE1zev prom\u011Bnn\xE9 datab\xE1ze Env
  Test // Test datab\xE1ze
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xFDpis \u010D\xEDsla verze libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // V\xEDcevl\xE1knov\xE9 \u010Dten\xED a z\xE1pis
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
      sync_period : 65536, // Za 1/65536 sekundy
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
 MDBX // N\xE1zev prom\u011Bnn\xE9 datab\xE1ze Env
 Test // Test datab\xE1ze
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
  MDBX // N\xE1zvy prom\u011Bnn\xFDch pro datab\xE1zi ENV
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
  // Rychl\xFD z\xE1pis
  w!(Test1.set [2, 3],[4, 5]);

  // Rychl\xE9 \u010Dten\xED
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

  // V\xEDce operac\xED s v\xEDce datab\xE1zemi v r\xE1mci jedn\xE9 transakce
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

    // Transakce bude zav\xE1z\xE1na na konci rozsahu.
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
</code></pre></div><p>V\xFDstup je n\xE1sleduj\xEDc\xED</p><div class="language-text ext-text"><pre class="language-text"><code>Some(City { name: &quot;BeiJing&quot;, lnglat: (11640, 3990) })
</code></pre></div><p>V p\u0159\xEDkladu vlastn\xEDho typu pou\u017E\xEDv\xE1me <a href="https://github.com/koute/speedy" target="_blank" rel="noopener noreferrer"><code>speedy</code></a> prov\xE9st serializaci <a href="https://github.com/djkoloski/rust_serialization_benchmark" target="_blank" rel="noopener noreferrer">( <code>speedy</code> performance review</a> ).</p><p>Implementace vlastn\xEDho typu <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.FromMdbx.html" target="_blank" rel="noopener noreferrer"><code>FromMdbx</code></a> a <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.ToAsRef.html" target="_blank" rel="noopener noreferrer"><code>ToAsRef</code></a> pak lze ulo\u017Eit na adrese <code>mdbx</code>.</p><p>Pokud pou\u017E\xEDv\xE1te konkr\xE9tn\xED serializa\u010Dn\xED knihovnu, m\u016F\u017Eete si tak\xE9 p\u0159izp\u016Fsobit atributov\xE1 <a href="https://blog.logrocket.com/macros-in-rust-a-tutorial-with-examples/" target="_blank" rel="noopener noreferrer">makra</a>, abyste proces zjednodu\u0161ili.</p><h4 id="zjednoduseni-vlastnich-typu-pomoci-atributovych-maker" tabindex="-1"><a class="header-anchor" href="#zjednoduseni-vlastnich-typu-pomoci-atributovych-maker" aria-hidden="true">#</a> Zjednodu\u0161en\xED vlastn\xEDch typ\u016F pomoc\xED atributov\xFDch maker</h4><p>Implementace atributov\xE9ho makra je jednoduch\xE1 jako <a href="https://crates.io/crates/mdbx_speedy" target="_blank" rel="noopener noreferrer"><code>mdbx_speedy</code></a> K\xF3d makra atributu je n\xE1sleduj\xEDc\xED :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // N\xE1zev prom\u011Bnn\xE9 datab\xE1ze Env
  Test // Test datab\xE1ze
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xFDpis \u010D\xEDsla verze libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // V\xEDcevl\xE1knov\xE9 \u010Dten\xED a z\xE1pis
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
      sync_period : 65536, // Za 1/65536 sekundy
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
 MDBX // N\xE1zev prom\u011Bnn\xE9 datab\xE1ze Env
 Test // Test datab\xE1ze
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
  MDBX // N\xE1zvy prom\u011Bnn\xFDch pro datab\xE1zi ENV
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
  // Rychl\xFD z\xE1pis
  w!(Test1.set [2, 3],[4, 5]);

  // Rychl\xE9 \u010Dten\xED
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

  // V\xEDce operac\xED s v\xEDce datab\xE1zemi v r\xE1mci jedn\xE9 transakce
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

    // Transakce bude zav\xE1z\xE1na na konci rozsahu.
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
</code></pre></div><p>Za\u010Dn\u011Bte s <code>cargo add mdbx-speedy</code>ve vlastn\xEDm projektu a pak si m\u016F\u017Eete typ rychle p\u0159izp\u016Fsobit (uk\xE1zkov\xFD k\xF3d viz <a href="https://github.com/rmw-lib/mdbx-example/blob/master/02/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/02</a> ).</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // N\xE1zev prom\u011Bnn\xE9 datab\xE1ze Env
  Test // Test datab\xE1ze
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xFDpis \u010D\xEDsla verze libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // V\xEDcevl\xE1knov\xE9 \u010Dten\xED a z\xE1pis
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
      sync_period : 65536, // Za 1/65536 sekundy
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
 MDBX // N\xE1zev prom\u011Bnn\xE9 datab\xE1ze Env
 Test // Test datab\xE1ze
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
  MDBX // N\xE1zvy prom\u011Bnn\xFDch pro datab\xE1zi ENV
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
  // Rychl\xFD z\xE1pis
  w!(Test1.set [2, 3],[4, 5]);

  // Rychl\xE9 \u010Dten\xED
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

  // V\xEDce operac\xED s v\xEDce datab\xE1zemi v r\xE1mci jedn\xE9 transakce
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

    // Transakce bude zav\xE1z\xE1na na konci rozsahu.
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
</code></pre></div><p>Samoz\u0159ejm\u011B je st\xE1le nep\u0159\xEDjemn\xE9 opakovan\u011B ps\xE1t <code>#[derive(PartialEq, Debug, Readable, Writable, MdbxSpeedy)]</code>, tak\u017Ee m\u016F\u017Eete pou\u017E\xEDt. <a href="https://docs.rs/derive-alias/0.1.0/derive_alias" target="_blank" rel="noopener noreferrer"><code>derive_alias</code></a> k dal\u0161\xEDmu zjednodu\u0161en\xED k\xF3du.</p><h2 id="poznamka-k-pouziti" tabindex="-1"><a class="header-anchor" href="#poznamka-k-pouziti" aria-hidden="true">#</a> Pozn\xE1mka k pou\u017Eit\xED</h2><h3 id="delka-klice" tabindex="-1"><a class="header-anchor" href="#delka-klice" aria-hidden="true">#</a> D\xE9lka kl\xED\u010De</h3><ul><li>Minimum 0, maximum \u2248 \xBD velikosti str\xE1nky (v\xFDchoz\xED velikost kl\xED\u010De 4K je 2022 bajt\u016F), nastavuje se p\u0159i inicializaci datab\xE1ze <code>pagesize</code> m\u016F\u017Ee b\xFDt nastaveno nejv\xFD\u0161e na <code>65536</code>a mus\xED b\xFDt mocninou 2.</li></ul><h2 id="poznamky-pod-carou" tabindex="-1"><a class="header-anchor" href="#poznamky-pod-carou" aria-hidden="true">#</a> Pozn\xE1mky pod \u010Darou</h2><p>Uv\xE1d\u011Bj\xED v\xFDhody p\u0159echodu z LMDB na MDBX.</p><blockquote><p>Erigon za\u010Dal s datab\xE1zov\xFDm backendem BoltDB, pak p\u0159idal podporu BadgerDB a nakonec kompletn\u011B p\u0159e\u0161el na LMDB. v ur\u010Dit\xE9m okam\u017Eiku jsme narazili na probl\xE9my se stabilitou, kter\xE9 byly zp\u016Fsobeny pou\u017E\xEDv\xE1n\xEDm LMDB a kter\xE9 tv\u016Frci nep\u0159edpokl\xE1dali. Od t\xE9 doby se zab\xFDv\xE1me dob\u0159e podporovan\xFDm deriv\xE1tem LMDB s n\xE1zvem MDBX a douf\xE1me, \u017Ee vyu\u017Eijeme jejich vylep\u0161en\xED stability a p\u0159\xEDpadn\u011B budeme v budoucnu v\xEDce spolupracovat. integrace MDBX je nyn\xED dokon\u010Dena a je \u010Das na dal\u0161\xED testov\xE1n\xED a dokumentaci.</p><p>V\xFDhody p\u0159echodu z LMDB na MDBX.</p><ol><li><p>R\u016Fst &quot;prostoru (geometrie)&quot; datab\xE1zov\xFDch soubor\u016F funguje spr\xE1vn\u011B. To je d\u016Fle\u017Eit\xE9 zejm\xE9na v syst\xE9mu Windows. V LMDB je t\u0159eba jednou p\u0159edem zadat velikost pam\u011B\u0165ov\xE9 mapy (v sou\u010Dasn\xE9 dob\u011B pou\u017E\xEDv\xE1me standardn\u011B 2 Tb) a pokud datab\xE1zov\xFD soubor p\u0159es\xE1hne tento limit, je t\u0159eba proces restartovat. V syst\xE9mu Windows by nastaven\xED velikosti pam\u011B\u0165ov\xE9 mapy na 2 Tb zp\u016Fsobilo, \u017Ee by datab\xE1zov\xFD soubor byl na za\u010D\xE1tku velk\xFD 2 Tb, co\u017E nen\xED p\u0159\xEDli\u0161 vhodn\xE9. V MDBX se velikost pam\u011B\u0165ov\xE9 mapy zv\u011Bt\u0161uje po 2Gb. Znamen\xE1 to ob\u010Dasn\xE9 p\u0159emapov\xE1n\xED, ale v\xFDsledkem je lep\u0161\xED u\u017Eivatelsk\xFD z\xE1\u017Eitek.</p></li><li><p>MDBX p\u0159\xEDsn\u011Bji kontroluje soub\u011B\u017En\xE9 pou\u017E\xEDv\xE1n\xED zpracov\xE1n\xED transakc\xED a p\u0159ekr\xFDv\xE1n\xED transakc\xED \u010Dten\xED a z\xE1pisu ve stejn\xE9m vl\xE1kn\u011B prov\xE1d\u011Bn\xED. To n\xE1m umo\u017E\u0148uje odhalit n\u011Bkter\xE9 nezjevn\xE9 chyby a \u010Din\xED chov\xE1n\xED p\u0159edv\xEDdateln\u011Bj\u0161\xEDm.<br> Za v\xEDce ne\u017E 5 let (od odd\u011Blen\xED od LMDB) se v MDBX nashrom\xE1\u017Edilo velk\xE9 mno\u017Estv\xED bezpe\u010Dnostn\xEDch oprav a oprav chyb, kter\xE9 podle na\u0161ich znalost\xED st\xE1le existuj\xED v LMDB. N\u011Bkter\xE9 z nich byly objeveny b\u011Bhem na\u0161eho testov\xE1n\xED a spr\xE1vci MDBX je vzali v\xE1\u017En\u011B a okam\u017Eit\u011B je opravili.</p></li><li><p>Pokud jde o datab\xE1ze, kter\xE9 neust\xE1le modifikuj\xED data, vytv\xE1\u0159ej\xED pom\u011Brn\u011B velk\xE9 mno\u017Estv\xED regenerovateln\xE9ho prostoru (v terminologii LMDB zn\xE1m\xE9ho tak\xE9 jako &quot;freelist&quot;). Museli jsme opravit LMDB, abychom odstranili nejz\xE1va\u017En\u011Bj\u0161\xED nedostatky v zach\xE1zen\xED s regenerovateln\xFDm prostorem <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide" target="_blank" rel="noopener noreferrer">(anal\xFDza)</a>. MDBX v\u011Bnoval <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide%EF%BC%89%E3%80%82MDBX%E5%AF%B9%E5%8F%AF%E5%9B%9E%E6%94%B6%E7%A9%BA%E9%97%B4%E7%9A%84%E6%9C%89%E6%95%88%E5%A4%84%E7%90%86%E8%BF%9B%E8%A1%8C%E4%BA%86%E7%89%B9%E5%88%AB%E7%9A%84%E5%85%B3%E6%B3%A8%EF%BC%8C%E5%88%B0%E7%9B%AE%E5%89%8D%E4%B8%BA%E6%AD%A2%EF%BC%8C%E8%BF%98%E4%B8%8D%E9%9C%80%E8%A6%81%E6%89%93%E8%A1%A5%E4%B8%81%E3%80%82" target="_blank" rel="noopener noreferrer">efektivn\xEDmu zach\xE1zen\xED s regenerovateln\xFDm prostorem zvl\xE1\u0161tn\xED pozornost a zat\xEDm nebylo nutn\xE9 jej opravovat</a>.</p></li><li><p>Na z\xE1klad\u011B na\u0161eho testov\xE1n\xED si MDBX vedl o n\u011Bco l\xE9pe v na\u0161ich pracovn\xEDch z\xE1t\u011B\u017E\xEDch.</p></li><li><p>MDBX zp\u0159\xEDstup\u0148uje v\xEDce intern\xEDch telemetrick\xFDch dat - v\xEDce metrik o tom, co se d\u011Bje uvnit\u0159 datab\xE1ze. A my m\xE1me tato data v Grafan\u011B - abychom mohli l\xE9pe rozhodovat o n\xE1vrhu aplikac\xED. Nap\u0159\xEDklad po \xFApln\xE9m p\u0159echodu na MDBX (odstran\u011Bn\xED podpory pro LMDB) zavedeme politiku &quot;odevzd\xE1v\xE1n\xED nap\u016Fl pln\xFDch transakc\xED&quot;, abychom se vyhnuli p\u0159ete\u010Den\xED/odte\u010Den\xED kontakt\u016F na disku. T\xEDm se n\xE1\u0161 k\xF3d d\xE1le zjednodu\u0161\xED, ani\u017E by to m\u011Blo vliv na v\xFDkon.</p></li><li><p>MDBX podporuje re\u017Eim &quot;Exclusive open&quot; - ten pou\u017E\xEDv\xE1me p\u0159i migraci datab\xE1z\xED, abychom zabr\xE1nili jin\xFDm \u010Dten\xE1\u0159\u016Fm v p\u0159\xEDstupu k datab\xE1zi b\u011Bhem procesu migrace.</p></li></ol></blockquote><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p><a href="https://github.com/ledgerwatch/erigon/wiki/Criteria-for-transitioning-from-Alpha-to-Beta#switch-from-lmdb-to-mdbx" target="_blank" rel="noopener noreferrer">Erigon (nov\xE1 generace ethernetov\xE9ho klienta) ned\xE1vno p\u0159e\u0161el z LMDB na MDBX</a>. <a href="#fnref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,160);function st(ot,rt){const e=u("RouterLink");return r(),l(d,null,[m,b,c,v,t("nav",g,[t("ul",null,[t("li",null,[a(e,{to:"#citaty"},{default:s(()=>[h]),_:1})]),t("li",null,[a(e,{to:"#co-je-libmdbx"},{default:s(()=>[_]),_:1})]),t("li",null,[a(e,{to:"#vyukove-programy"},{default:s(()=>[k]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#jak-spustit-priklad"},{default:s(()=>[f]),_:1})]),t("li",null,[a(e,{to:"#priklad-1-psani-set-key-val-a-cteni-get-key"},{default:s(()=>[x]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#kod"},{default:s(()=>[y]),_:1})]),t("li",null,[a(e,{to:"#spustit-vystup"},{default:s(()=>[q]),_:1})]),t("li",null,[a(e,{to:"#popis-kodu"},{default:s(()=>[z]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#env-rw-definice-databaze"},{default:s(()=>[D]),_:1})]),t("li",null,[a(e,{to:"#rozsireni-maker"},{default:s(()=>[w]),_:1})]),t("li",null,[a(e,{to:"#anyhow-a-lazy-static"},{default:s(()=>[E]),_:1})]),t("li",null,[a(e,{to:"#makro-mdbx"},{default:s(()=>[T]),_:1})]),t("li",null,[a(e,{to:"#vlakna-a-transakce"},{default:s(()=>[B]),_:1})]),t("li",null,[a(e,{to:"#cteni-a-zapis-binarnich-dat"},{default:s(()=>[j]),_:1})])])])])]),t("li",null,[a(e,{to:"#priklad-2-datove-typy-priznaky-databaze-mazani-prochazeni"},{default:s(()=>[N]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#kod-1"},{default:s(()=>[M]),_:1})]),t("li",null,[a(e,{to:"#spustit-vystup-1"},{default:s(()=>[S]),_:1})]),t("li",null,[a(e,{to:"#rychle-cteni-a-psani"},{default:s(()=>[V]),_:1})]),t("li",null,[a(e,{to:"#datove-typy"},{default:s(()=>[X]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#prednastavene-datove-typy"},{default:s(()=>[R]),_:1})])])]),t("li",null,[a(e,{to:"#priznaky-databaze"},{default:s(()=>[O]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#dupsort-jednomu-klici-odpovida-vice-nez-jedna-hodnota"},{default:s(()=>[C]),_:1})]),t("li",null,[a(e,{to:"#dup-key-iterator-ktery-vraci-vsechny-hodnoty-odpovidajici-klici"},{default:s(()=>[P]),_:1})]),t("li",null,[a(e,{to:"#vychozi-automaticky-pripojene-priznaky-databaze"},{default:s(()=>[U]),_:1})])])]),t("li",null,[a(e,{to:"#odstraneni-dat"},{default:s(()=>[I]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#del-key-odstraneni-klice"},{default:s(()=>[A]),_:1})]),t("li",null,[a(e,{to:"#del-val-key-val-odstraneni-presne-shody"},{default:s(()=>[L]),_:1})])])]),t("li",null,[a(e,{to:"#traverzovani"},{default:s(()=>[F]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#sekvencni-prochazeni"},{default:s(()=>[$]),_:1})]),t("li",null,[a(e,{to:"#rev-obracene-prochazeni-poradi"},{default:s(()=>[Y]),_:1})]),t("li",null,[a(e,{to:"#trideni"},{default:s(()=>[G]),_:1})])])])])]),t("li",null,[a(e,{to:"#intervalove-iteratory"},{default:s(()=>[K]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#spustte-vystup"},{default:s(()=>[Z]),_:1})]),t("li",null,[a(e,{to:"#range-begin-end-intervalova-iterace"},{default:s(()=>[H]),_:1})]),t("li",null,[a(e,{to:"#rev-range-obracene-intervaly"},{default:s(()=>[W]),_:1})])])]),t("li",null,[a(e,{to:"#prizpusobeni-typu-dat"},{default:s(()=>[J]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#zjednoduseni-vlastnich-typu-pomoci-atributovych-maker"},{default:s(()=>[Q]),_:1})])])])])]),t("li",null,[a(e,{to:"#poznamka-k-pouziti"},{default:s(()=>[tt]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#delka-klice"},{default:s(()=>[nt]),_:1})])])]),t("li",null,[a(e,{to:"#poznamky-pod-carou"},{default:s(()=>[et]),_:1})])])]),at],64)}var it=o(p,[["render",st],["__file","2021-12-21-mdbx.html.vue"]]);export{it as default};
