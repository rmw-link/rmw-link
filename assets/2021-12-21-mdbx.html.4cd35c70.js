import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as l,a as t,b as a,w as r,F as i,d as n,e as d,r as u}from"./app.040d9bb0.js";const p={},g=t("h1",{id:"rostpaketet-for-libmdbx",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#rostpaketet-for-libmdbx","aria-hidden":"true"},"#"),n(" Rostpaketet f\xF6r libmdbx")],-1),m=t("p",null,[t("code",null,"rust"),n(" -omslaget f\xF6r "),t("a",{href:"https://github.com/erthink/libmdbx",target:"_blank",rel:"noopener noreferrer"},"libmdbx-databasen"),n(".")],-1),b=t("hr",null,null,-1),h=t("p",null,"Katalog :",-1),c={class:"table-of-contents"},f=n("Citat"),v=n("Vad \xE4r libmdbx?"),_=n("Handledning"),k=n("Hur du k\xF6r exemplet"),x=n("Exempel 1: Skriva set(key,val) och l\xE4sa .get(key)"),q=n("Kod"),y=n("K\xF6r utdata"),D=n("Kodbeskrivning"),E=n("env_rw! Definiera databasen"),w=n("Makroexpansion"),B=n("hur som helst och lazy_static"),T=n("Makro mdbx!"),M=n("Tr\xE5dar och transaktioner"),N=n("L\xE4sa och skriva bin\xE4ra data"),S=n("Exempel 2: Datatyper, databasflaggor, radering, traversering"),X=n("Kod"),O=n("K\xF6r utdata"),V=n("Snabb l\xE4sning och skrivning"),R=n("Datatyper"),C=n("F\xF6rinst\xE4llda datatyper"),I=n("Flaggor i databasen"),U=n("DUPSORT : En nyckel motsvarar mer \xE4n ett v\xE4rde."),A=n(".dup(key) iterator som returnerar alla v\xE4rden som motsvarar en nyckel."),L=n("Automatiskt bifogade databasflaggor som standard"),F=n("Radera uppgifter"),P=n(".del(key) Ta bort en tangent"),z=n(".del_val(key,val) Radering med exakt matchning"),j=n("\xD6verg\xE5ng"),$=n("sekventiell genomg\xE5ng"),Y=n(".rev() Traversering i omv\xE4nd ordning"),K=n("Sortering"),H=n("Intervall iteratorer"),G=n("K\xF6r resultatet av"),W=n(".range(begin..end) Intervall Iteration"),J=n(".rev_range Inverterade intervaller"),Q=n("Anpassning av datatyper"),Z=n("F\xF6renkla anpassade typer med attributmakroer"),tt=n("Anm\xE4rkning om anv\xE4ndningen av"),nt=n("Nyckelns l\xE4ngd"),et=n("Fotnoter"),at=d(`<hr><h2 id="citat" tabindex="-1"><a class="header-anchor" href="#citat" aria-hidden="true">#</a> Citat</h2><p>N\xE4r jag skrev <a href="https://rmw.link" target="_blank" rel="noopener noreferrer">&quot;rmw.link</a> &quot; k\xE4nde jag att jag beh\xF6vde en inb\xE4ddad databas.</p><p>P\xE5 grund av den n\xE4tverksgenomstr\xF6mning som kr\xE4vs f\xF6r att spela in, l\xE4sa och skriva ofta var <code>sqlite3</code> f\xF6r avancerad f\xF6r att man skulle kunna ta h\xE4nsyn till prestandan.</p><p>D\xE4rf\xF6r var det l\xE4mpligare att anv\xE4nda en nyckelv\xE4rdesdatabas p\xE5 l\xE4gre niv\xE5 <a href="https://discourse.world/h/2020/06/05/Shine-and-poverty-key-value-database-LMDB-in-applications-for-iOS" target="_blank" rel="noopener noreferrer">(lmdb \xE4r 10 g\xE5nger snabbare \xE4n sqlite</a> ).</p><p><img src="//irmw.gumlet.io/yxZV8x.jpg" alt=""></p><p>Till slut valde jag den magiska versionen av <code>lmdb</code> - <code>mdbx</code>.</p><p>F\xF6r n\xE4rvarande har det befintliga <code>rust</code> -paketet av <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">mdbx-rs (mdbx-sys)</a> fr\xE5n <code>mdbx</code> <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">inte st\xF6d f\xF6r Windows</a>, s\xE5 jag tog p\xE5 mig att paketera en version med st\xF6d f\xF6r Windows.</p><p>St\xF6d f\xF6r lagring av egna rosttyper. St\xF6djer flertr\xE5dig \xE5tkomst.</p><p>Databasen kan definieras i en modul med hj\xE4lp av <code>lazy_static</code> och sedan introduceras och anv\xE4ndas med n\xE5got som :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
</code></pre></div><h2 id="vad-ar-libmdbx" tabindex="-1"><a class="header-anchor" href="#vad-ar-libmdbx" aria-hidden="true">#</a> Vad \xE4r libmdbx?</h2><p><a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">mdbx</a> \xE4r en sekund\xE4r databas baserad p\xE5 lmdb, av den ryske <a href="https://vk.com/erthink" target="_blank" rel="noopener noreferrer">\u041B\u0435\u043E\u043D\u0438\u0434 \u042E\u0440\u044C\u0435\u0432 (Leonid Yuriev)</a>.</p><p><a href="https://en.wikipedia.org/wiki/Lightning_Memory-Mapped_Database" target="_blank" rel="noopener noreferrer">lmdb</a> \xE4r en supersnabb inb\xE4ddad nyckelv\xE4rdesdatabas.</p><p>Fulltexts\xF6kmotorn <a href="https://docs.meilisearch.com/reference/under_the_hood/storage.html#measured-disk-usage" target="_blank" rel="noopener noreferrer">MeiliSearch</a> \xE4r baserad p\xE5 lmdb.</p><p><a href="https://docs.nvidia.com/deeplearning/dali/user-guide/docs/examples/general/data_loading/dataloading_lmdb.html" target="_blank" rel="noopener noreferrer">\xC4ven ramverket f\xF6r djupinl\xE4rning caffe anv\xE4nder lmdb som datalagret</a>.</p><p><a href="https://github.com/erthink/libmdbx#added-features" target="_blank" rel="noopener noreferrer">mdbx \xE4r 30 % snabbare \xE4n lmdb i det inbyggda prestandatestet ioarena</a>.</p><p><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-1.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-3.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-4.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-5.png" alt=""></p><p>Samtidigt <a href="https://github.com/erthink/libmdbx#improvements-beyond-lmdb" target="_blank" rel="noopener noreferrer">f\xF6rb\xE4ttrar</a> mdbx <a href="https://github.com/erthink/libmdbx#improvements-beyond-lmdb" target="_blank" rel="noopener noreferrer">m\xE5nga av bristerna i</a> lmdb, s\xE5 Erigon (n\xE4sta generations ethereumklient) bytte nyligen fr\xE5n LMDB till MDBX <sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>.</p><h2 id="handledning" tabindex="-1"><a class="header-anchor" href="#handledning" aria-hidden="true">#</a> Handledning</h2><h3 id="hur-du-kor-exemplet" tabindex="-1"><a class="header-anchor" href="#hur-du-kor-exemplet" aria-hidden="true">#</a> Hur du k\xF6r exemplet</h3><p>Klona f\xF6rst kodbasen <code>git clone git@github.com:rmw-lib/mdbx.git --depth=1 &amp;&amp; cd mdbx</code></p><p>K\xF6r sedan <code>cargo run --example 01</code> och den kommer att k\xF6ra <code>examples/01.rs</code></p><p>Om det \xE4r ditt eget projekt, k\xF6r det f\xF6rst:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>cargo install cargo-edit
cargo add mdbx lazy_static ctor paste
</code></pre></div><h3 id="exempel-1-skriva-set-key-val-och-lasa-get-key" tabindex="-1"><a class="header-anchor" href="#exempel-1-skriva-set-key-val-och-lasa-get-key" aria-hidden="true">#</a> Exempel 1: Skriva <code>set(key,val)</code> och l\xE4sa <code>.get(key)</code></h3><p>L\xE5t oss titta p\xE5 ett enkelt exempel <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/01.rs" target="_blank" rel="noopener noreferrer">exempel/01.rs</a></p><h4 id="kod" tabindex="-1"><a class="header-anchor" href="#kod" aria-hidden="true">#</a> Kod</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Variabelnamn f\xF6r databasen Env
  Test // Databastest
}

fn main() -&gt; Result&lt;()&gt; {
  // Ange versionsnumret f\xF6r libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // L\xE4sning och skrivning med flera tr\xE5dar
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
</code></pre></div><h4 id="kor-utdata" tabindex="-1"><a class="header-anchor" href="#kor-utdata" aria-hidden="true">#</a> K\xF6r utdata</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/01.mdb
mdbx version https://github.com/erthink/libmdbx/releases/tag/v0.11.2
test1 get Ok(Some(Bin([6])))
[6]
</code></pre></div><h4 id="kodbeskrivning" tabindex="-1"><a class="header-anchor" href="#kodbeskrivning" aria-hidden="true">#</a> Kodbeskrivning</h4><h5 id="env-rw-definiera-databasen" tabindex="-1"><a class="header-anchor" href="#env-rw-definiera-databasen" aria-hidden="true">#</a> <code>env_rw!</code> Definiera databasen</h5><p>Koden b\xF6rjar med ett makro env_rw, som har fyra parametrar.</p><ol><li><p>Variabelnamnet f\xF6r databasmilj\xF6n</p></li><li><p>Returnerar ett objekt, <a href="https://docs.rs/mdbx/latest/src/mdbx/env.rs.html#27-35" target="_blank" rel="noopener noreferrer">mdbx:: env:: Config</a>.</p></li></ol><p>Vi anv\xE4nder standardkonfigurationen, eftersom <code>Env</code> implementerar <code>From&lt;Into&lt;PathBuf&gt;&gt;</code>, s\xE5 databass\xF6kv\xE4gen <code>into()</code> r\xE4cker, och standardkonfigurationen \xE4r f\xF6ljande.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
MDBX // Variabelnamn f\xF6r databasen Env
Test // Databastest
}

fn main() -&gt; Result&lt;()&gt; {
// Ange versionsnumret f\xF6r libmdbx
unsafe {
  println!(
    &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
    mdbx_version.major, mdbx_version.minor, mdbx_version.release
  );
}

// L\xE4sning och skrivning med flera tr\xE5dar
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
    sync_period : 65536, // P\xE5 1/65536:e av en sekund
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
</code></pre></div><p><code>max_db</code> Den h\xE4r inst\xE4llningen kan \xE5terst\xE4llas varje g\xE5ng databasen \xF6ppnas, men om du st\xE4ller in den f\xF6r mycket kommer det att p\xE5verka prestandan, st\xE4ll bara in den efter behov.</p><p>Se <a href="https://erthink.github.io/libmdbx/group__c__opening.html#ga9138119a904355d245777c4119534061" target="_blank" rel="noopener noreferrer">libmdbx-dokumentationen</a> f\xF6r inneb\xF6rden av de andra parametrarna.</p><ol start="3"><li><p>Namnet p\xE5 makroet f\xF6r l\xE4stransaktion i databasen, standardv\xE4rdet \xE4r <code>r</code></p></li><li><p>Namnet p\xE5 makroet f\xF6r databasens skrivtransaktion, standardv\xE4rdet \xE4r <code>w</code></p></li></ol><p>Parametrarna 3 och 4 kan utel\xE4mnas f\xF6r att anv\xE4nda standardv\xE4rdena.</p><h5 id="makroexpansion" tabindex="-1"><a class="header-anchor" href="#makroexpansion" aria-hidden="true">#</a> Makroexpansion</h5><p>Om du vill se vad makromaginalen g\xF6r kan du anv\xE4nda makrot <code>cargo expand --example 01</code> f\xF6r att expandera den, vilket m\xE5ste installeras f\xF6rst. <code>cargo install cargo-expand</code></p><p>En sk\xE4rmdump av den ut\xF6kade koden visas nedan.</p><p><img src="//irmw.gumlet.io/PDzEtT.png" alt="PDzEtT"></p><h5 id="hur-som-helst-och-lazy-static" tabindex="-1"><a class="header-anchor" href="#hur-som-helst-och-lazy-static" aria-hidden="true">#</a> hur som helst och lazy_static</h5><p>I den ut\xF6kade sk\xE4rmbilden kan du se att <code>lazy_static</code> och <code>anyhow</code>anv\xE4nds.</p><p><a href="https://rustmagazine.github.io/rust_magazine_2021/chapter_2/rust_error_handle.html#thiserror--anyhow" target="_blank" rel="noopener noreferrer">anyhow</a> \xE4r felhanteringsbiblioteket f\xF6r rost.</p><p><a href="https://juejin.cn/post/7007336922817232927" target="_blank" rel="noopener noreferrer">lazy_static</a> \xE4r en statisk variabel med f\xF6rdr\xF6jd initialisering.</p><p>Dessa tv\xE5 bibliotek \xE4r mycket vanliga och jag kommer inte att g\xE5 in p\xE5 dem.</p><h5 id="makro-mdbx" tabindex="-1"><a class="header-anchor" href="#makro-mdbx" aria-hidden="true">#</a> Makro mdbx!</h5><p><a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html" target="_blank" rel="noopener noreferrer"><code>mdbx!</code></a> \xE4r ett <a href="https://mp.weixin.qq.com/s/YT_HNFDCQ_IyocvBkRNJnA" target="_blank" rel="noopener noreferrer">procedurmakro</a>.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Variabelnamn f\xF6r databasen Env
  Test // Databastest
}

fn main() -&gt; Result&lt;()&gt; {
  // Ange versionsnumret f\xF6r libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // L\xE4sning och skrivning med flera tr\xE5dar
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
      sync_period : 65536, // P\xE5 1/65536:e av en sekund
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
 MDBX // Variabelnamn f\xF6r databasen Env
 Test // Databastest
}
</code></pre></div><p>Den f\xF6rsta raden \xE4r variabelnamnet f\xF6r databasmilj\xF6n</p><p>Den andra raden \xE4r namnet p\xE5 databasen</p><p>Det kan finnas mer \xE4n en databas, en rad f\xF6r varje</p><h5 id="tradar-och-transaktioner" tabindex="-1"><a class="header-anchor" href="#tradar-och-transaktioner" aria-hidden="true">#</a> Tr\xE5dar och transaktioner</h5><p>Ovanst\xE5ende kod demonstrerar flertr\xE5dig l\xE4sning och skrivning.</p><p>Det \xE4r viktigt att notera att det <strong>bara</strong> kan finnas <strong>en transaktion i samma tr\xE5d samtidigt, om en tr\xE5d har mer \xE4n en transaktion \xF6ppen kommer programmet att krascha</strong>.</p><p>Transaktionen kommer att genomf\xF6ras i slutet av r\xE4ckvidden.</p><h5 id="lasa-och-skriva-binara-data" tabindex="-1"><a class="header-anchor" href="#lasa-och-skriva-binara-data" aria-hidden="true">#</a> L\xE4sa och skriva bin\xE4ra data</h5><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Variabelnamn f\xF6r databasen Env
  Test // Databastest
}

fn main() -&gt; Result&lt;()&gt; {
  // Ange versionsnumret f\xF6r libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // L\xE4sning och skrivning med flera tr\xE5dar
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
      sync_period : 65536, // P\xE5 1/65536:e av en sekund
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
 MDBX // Variabelnamn f\xF6r databasen Env
 Test // Databastest
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
</code></pre></div><p><code>set</code> \xE4r en skrivning, <code>get</code> \xE4r en l\xE4sning, och alla objekt som implementerar <a href="https://doc.rust-lang.org/std/convert/trait.AsRef.html" target="_blank" rel="noopener noreferrer"><code>AsRef&lt;[u8]&gt;</code></a> objektet kan skrivas till databasen.</p><p><code>get</code> Resultatet \xE4r <code>Ok(Some(Bin([6])))</code>som kan omvandlas till <code>&amp;[u8]</code>.</p><h3 id="exempel-2-datatyper-databasflaggor-radering-traversering" tabindex="-1"><a class="header-anchor" href="#exempel-2-datatyper-databasflaggor-radering-traversering" aria-hidden="true">#</a> Exempel 2: Datatyper, databasflaggor, radering, traversering</h3><p>L\xE5t oss titta p\xE5 det andra exemplet <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">exempel/02.rs</a>:</p><p>I detta exempel utel\xE4mnas <code>env_rw!</code> och det tredje och fj\xE4rde argumentet ( <code>r</code>, <code>w</code>) utel\xE4mnas.</p><h4 id="kod-1" tabindex="-1"><a class="header-anchor" href="#kod-1" aria-hidden="true">#</a> Kod</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Variabelnamn f\xF6r databasen Env
  Test // Databastest
}

fn main() -&gt; Result&lt;()&gt; {
  // Ange versionsnumret f\xF6r libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // L\xE4sning och skrivning med flera tr\xE5dar
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
      sync_period : 65536, // P\xE5 1/65536:e av en sekund
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
 MDBX // Variabelnamn f\xF6r databasen Env
 Test // Databastest
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
  MDBX // Variabelnamn f\xF6r databasen ENV
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
  // Snabbt skrivande
  w!(Test1.set [2, 3],[4, 5]);

  // Snabb l\xE4sning
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

  // Flera operationer p\xE5 flera databaser i samma transaktion
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

    // Transaktionen kommer att genomf\xF6ras i slutet av till\xE4mpningsomr\xE5det.
  }

  Ok(())
}
</code></pre></div><h4 id="kor-utdata-1" tabindex="-1"><a class="header-anchor" href="#kor-utdata-1" aria-hidden="true">#</a> K\xF6r utdata</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/02.mdb

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
</code></pre></div><h4 id="snabb-lasning-och-skrivning" tabindex="-1"><a class="header-anchor" href="#snabb-lasning-och-skrivning" aria-hidden="true">#</a> Snabb l\xE4sning och skrivning</h4><p>Om vi bara vill l\xE4sa eller skriva en enda datarad kan vi anv\xE4nda makroets syntaktiska socker.</p><p>L\xE4sa uppgifter</p><div class="language-text ext-text"><pre class="language-text"><code>r!(Test1.get [2, 3])
</code></pre></div><p>Skriva uppgifter</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Variabelnamn f\xF6r databasen Env
  Test // Databastest
}

fn main() -&gt; Result&lt;()&gt; {
  // Ange versionsnumret f\xF6r libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // L\xE4sning och skrivning med flera tr\xE5dar
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
      sync_period : 65536, // P\xE5 1/65536:e av en sekund
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
 MDBX // Variabelnamn f\xF6r databasen Env
 Test // Databastest
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
  MDBX // Variabelnamn f\xF6r databasen ENV
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
  // Snabbt skrivande
  w!(Test1.set [2, 3],[4, 5]);

  // Snabb l\xE4sning
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

  // Flera operationer p\xE5 flera databaser i samma transaktion
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

    // Transaktionen kommer att genomf\xF6ras i slutet av till\xE4mpningsomr\xE5det.
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
</code></pre></div><p>Allt p\xE5 en rad, som skrivet i <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a>.</p><h4 id="datatyper" tabindex="-1"><a class="header-anchor" href="#datatyper" aria-hidden="true">#</a> Datatyper</h4><p>I examples/02 <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">.</a> rs ser databasdefinitionen ut s\xE5 h\xE4r :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Variabelnamn f\xF6r databasen Env
  Test // Databastest
}

fn main() -&gt; Result&lt;()&gt; {
  // Ange versionsnumret f\xF6r libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // L\xE4sning och skrivning med flera tr\xE5dar
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
      sync_period : 65536, // P\xE5 1/65536:e av en sekund
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
 MDBX // Variabelnamn f\xF6r databasen Env
 Test // Databastest
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
  MDBX // Variabelnamn f\xF6r databasen ENV
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
  // Snabbt skrivande
  w!(Test1.set [2, 3],[4, 5]);

  // Snabb l\xE4sning
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

  // Flera operationer p\xE5 flera databaser i samma transaktion
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

    // Transaktionen kommer att genomf\xF6ras i slutet av till\xE4mpningsomr\xE5det.
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
</code></pre></div><p>d\xE4r <code>key</code> och <code>val</code> definierar datatyperna f\xF6r nycklar respektive v\xE4rden.</p><p>Om du f\xF6rs\xF6ker skriva en datatyp som inte matchar den definierade datatypen rapporteras ett fel, vilket visas i sk\xE4rmdumpen nedan :</p><p><img src="//irmw.gumlet.io/4rFTC6.png" alt=""></p><p>Standarddatatypen \xE4r <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Bin.html" target="_blank" rel="noopener noreferrer"><code>Bin</code></a> kan alla data som implementerar <code>AsRef&lt;[u8]&gt;</code> skrivas till.</p><p>Om nyckeln eller v\xE4rdet \xE4r en <code>utf8</code> str\xE4ng kan datatypen st\xE4llas in till <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Str.html" target="_blank" rel="noopener noreferrer"><code>Str</code></a> .</p><p>Om du <a href="https://doc.rust-lang.org/std/ops/trait.Deref.html" target="_blank" rel="noopener noreferrer">tar bort citering</a> av <code>Str</code> f\xE5r du tillbaka en str\xE4ng som liknar <code>let k:&amp;str = &amp;k;</code>.</p><p>Dessutom genomf\xF6r <code>Str</code> ocks\xE5 f\xF6ljande <a href="https://doc.rust-lang.org/std/fmt/trait.Display.html" target="_blank" rel="noopener noreferrer"><code>std::fmt::Display</code></a> , <code>println!(&quot;{}&quot;,k)</code> ger ut en l\xE4sbar str\xE4ng.</p><h5 id="forinstallda-datatyper" tabindex="-1"><a class="header-anchor" href="#forinstallda-datatyper" aria-hidden="true">#</a> F\xF6rinst\xE4llda datatyper</h5><p>F\xF6rutom <code>Str</code> och <code>Bin</code> har wrappern \xE4ven datast\xF6d f\xF6r <a href="https://docs.rs/mdbx/latest/src/mdbx/type.rs.html#48" target="_blank" rel="noopener noreferrer">usize, u128, u64, u32, u16, u8, isize, i128, i64, i32, i16, i8, f32, f64</a>.</p><h4 id="flaggor-i-databasen" tabindex="-1"><a class="header-anchor" href="#flaggor-i-databasen" aria-hidden="true">#</a> Flaggor i databasen</h4><p>Du kan se de databasflaggor som lagts till i data i <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a> p\xE5 <code>Test4</code>. <code>flag DUPSORT</code></p><p>Databasen libmdbx har ett antal flaggor ( <a href="https://erthink.github.io/libmdbx/group__c__dbi.html#gafe3bddb297b3ab0d828a487c5726f76a" target="_blank" rel="noopener noreferrer"><code>MDBX_db_flags_t</code></a> ) som kan st\xE4llas in.</p><ul><li>REVERSEKEY anv\xE4nder omv\xE4nd str\xE4ngj\xE4mf\xF6relse f\xF6r nycklar. (anv\xE4ndbart n\xE4r man anv\xE4nder sm\xE5 \xE4ndkodade nummer som nycklar).</li><li>DUPSORT anv\xE4nder sorterade dubbletter, dvs. till\xE5ter flera v\xE4rden f\xF6r en nyckel.</li><li>INTEGERKEY Nativ byte-ordnad numerisk nyckel uint32_t eller uint64_t. Nycklarna m\xE5ste ha samma storlek och m\xE5ste vara anpassade n\xE4r de skickas som argument.</li><li>DUPFIXED Storleken p\xE5 datav\xE4rdena m\xE5ste vara densamma om DUPSORT anv\xE4nds (m\xF6jligg\xF6r en snabb r\xE4kning av antalet v\xE4rden).</li><li>DUPSORT och DUPFIXED kr\xE4vs f\xF6r INTEGERDUP; v\xE4rdena \xE4r heltal (liknande INTEGERKEY). Datav\xE4rden m\xE5ste alla ha samma storlek och m\xE5ste vara anpassade n\xE4r de \xF6verf\xF6rs som parametrar.</li><li>REVERSEDUP anv\xE4nder DUPSORT; omv\xE4nd str\xE4ngj\xE4mf\xF6relse anv\xE4nds f\xF6r datav\xE4rden.</li><li>CREATE skapar databasen om den inte finns (l\xE4ggs till som standard).</li><li>DB_ACCEDE \xD6ppnar en befintlig underdatabas som skapats med flaggan unknown.<br> Denna DB_ACCEDE-flagga \xE4r avsedd att \xF6ppna befintliga underdatabaser som skapats med ok\xE4nda flaggor (REVERSEKEY, DUPSORT, INTEGERKEY, DUPFIXED, INTEGERDUP och REVERSEDUP).<br> I det h\xE4r fallet returnerar inte underdatabasen ett fel INCOMPATIBLE, utan \xF6ppnas med de flaggor som anv\xE4ndes f\xF6r att skapa den, och programmet kan sedan fastst\xE4lla de faktiska flaggorna med mdbx_dbi_flags().</li></ul><h5 id="dupsort-en-nyckel-motsvarar-mer-an-ett-varde" tabindex="-1"><a class="header-anchor" href="#dupsort-en-nyckel-motsvarar-mer-an-ett-varde" aria-hidden="true">#</a> DUPSORT : En nyckel motsvarar mer \xE4n ett v\xE4rde.</h5><p><code>DUPSORT</code>inneb\xE4r att en nyckel kan motsvara mer \xE4n ett v\xE4rde.</p><p>Om du vill st\xE4lla in flera flaggor skriver du s\xE5 h\xE4r <code>flag DUPSORT | DUPFIXED</code></p><h5 id="dup-key-iterator-som-returnerar-alla-varden-som-motsvarar-en-nyckel" tabindex="-1"><a class="header-anchor" href="#dup-key-iterator-som-returnerar-alla-varden-som-motsvarar-en-nyckel" aria-hidden="true">#</a> <code>.dup(key)</code> iterator som returnerar alla v\xE4rden som motsvarar en nyckel.</h5><p>Den h\xE4r funktionen \xE4r endast tillg\xE4nglig f\xF6r databaser som \xE4r markerade med <code>DUPSORT</code> d\xE4r en nyckel kan motsvara mer \xE4n ett v\xE4rde.</p><p>F\xF6r <code>DUPSORT</code> -databaser returnerar <code>get</code> endast det f\xF6rsta v\xE4rdet f\xF6r denna nyckel. F\xF6r att f\xE5 fram alla v\xE4rden anv\xE4nder du <code>dup</code>.</p><h5 id="automatiskt-bifogade-databasflaggor-som-standard" tabindex="-1"><a class="header-anchor" href="#automatiskt-bifogade-databasflaggor-som-standard" aria-hidden="true">#</a> Automatiskt bifogade databasflaggor som standard</h5><p>N\xE4r datatypen \xE4r <code>u32</code> / <code>u64</code> / <code>usize</code> l\xE4ggs databasflaggan automatiskt till. <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#105" target="_blank" rel="noopener noreferrer"><code>INTEGERKEY</code></a> .</p><p>P\xE5 maskiner med sm\xE5skalig kodning l\xE4ggs andra numeriska typer automatiskt till. <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#108" target="_blank" rel="noopener noreferrer"><code>REVERSEKEY</code></a> Databasflaggan l\xE4ggs automatiskt till n\xE4r datatypen \xE4r / / / .</p><h4 id="radera-uppgifter" tabindex="-1"><a class="header-anchor" href="#radera-uppgifter" aria-hidden="true">#</a> Radera uppgifter</h4><h5 id="del-key-ta-bort-en-tangent" tabindex="-1"><a class="header-anchor" href="#del-key-ta-bort-en-tangent" aria-hidden="true">#</a> <code>.del(key)</code> Ta bort en tangent</h5><p><code>.del(val)</code> Tar bort det v\xE4rde som motsvarar en nyckel.</p><p>Om databasen har flaggan <code>DUPSORT</code>raderas alla v\xE4rden under den h\xE4r nyckeln.</p><p>\xC5terger <code>true</code>om n\xE5gra data har tagits bort och <code>false</code>om inte.</p><h5 id="del-val-key-val-radering-med-exakt-matchning" tabindex="-1"><a class="header-anchor" href="#del-val-key-val-radering-med-exakt-matchning" aria-hidden="true">#</a> <code>.del_val(key,val)</code> Radering med exakt matchning</h5><p><code>.del_val(key,val)</code> Tar bort nyckelv\xE4rdespar som exakt motsvarar de inmatade parametrarna.</p><p>\xC5terger <code>true</code>om n\xE5gra data har tagits bort och <code>false</code>om inte.</p><h4 id="overgang" tabindex="-1"><a class="header-anchor" href="#overgang" aria-hidden="true">#</a> \xD6verg\xE5ng</h4><h5 id="sekventiell-genomgang" tabindex="-1"><a class="header-anchor" href="#sekventiell-genomgang" aria-hidden="true">#</a> sekventiell genomg\xE5ng</h5><p>P\xE5 grund av genomf\xF6randet av <a href="https://doc.rust-lang.org/std/iter/trait.IntoIterator.html" target="_blank" rel="noopener noreferrer"><code>std::iter::IntoIterator</code></a> . du kan g\xE5 direkt p\xE5 f\xF6ljande s\xE4tt :</p><p><code>for (k, v) in test1</code></p><h5 id="rev-traversering-i-omvand-ordning" tabindex="-1"><a class="header-anchor" href="#rev-traversering-i-omvand-ordning" aria-hidden="true">#</a> <code>.rev()</code> Traversering i omv\xE4nd ordning</h5><p><code>for (k, v) in test4.rev()</code></p><h5 id="sortering" tabindex="-1"><a class="header-anchor" href="#sortering" aria-hidden="true">#</a> Sortering</h5><p>Libmdbx-nycklarna sorteras i <a href="https://zh.wikipedia.org/wiki/%E5%AD%97%E5%85%B8%E5%BA%8F" target="_blank" rel="noopener noreferrer">ordboksordning</a>.</p><ul><li><p>F\xF6r oavskrivna tal</p><p>\xE4r sorterade fr\xE5n minsta till st\xF6rsta eftersom databasflaggorna automatiskt l\xE4ggs till ( <code>u32</code>/ <code>u64</code>/ <code>usize</code> l\xE4ggs till <code>INTEGERKEY</code>, andra l\xE4ggs till <code>REVERSEKEY</code> beroende p\xE5 maskinkod).</p></li><li><p>F\xF6r tecknade tal</p><p>Ordningen \xE4r: 0 f\xF6rst, sedan alla positiva tal fr\xE5n minsta till st\xF6rsta tal, sedan alla negativa tal fr\xE5n minsta till st\xF6rsta tal.</p></li></ul><h3 id="intervall-iteratorer" tabindex="-1"><a class="header-anchor" href="#intervall-iteratorer" aria-hidden="true">#</a> Intervall iteratorer</h3><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Variabelnamn f\xF6r databasen Env
  Test // Databastest
}

fn main() -&gt; Result&lt;()&gt; {
  // Ange versionsnumret f\xF6r libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // L\xE4sning och skrivning med flera tr\xE5dar
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
      sync_period : 65536, // P\xE5 1/65536:e av en sekund
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
 MDBX // Variabelnamn f\xF6r databasen Env
 Test // Databastest
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
  MDBX // Variabelnamn f\xF6r databasen ENV
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
  // Snabbt skrivande
  w!(Test1.set [2, 3],[4, 5]);

  // Snabb l\xE4sning
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

  // Flera operationer p\xE5 flera databaser i samma transaktion
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

    // Transaktionen kommer att genomf\xF6ras i slutet av till\xE4mpningsomr\xE5det.
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
</code></pre></div><h4 id="kor-resultatet-av" tabindex="-1"><a class="header-anchor" href="#kor-resultatet-av" aria-hidden="true">#</a> K\xF6r resultatet av</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/range.mdb

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
</code></pre></div><h4 id="range-begin-end-intervall-iteration" tabindex="-1"><a class="header-anchor" href="#range-begin-end-intervall-iteration" aria-hidden="true">#</a> <code>.range(begin..end)</code> Intervall Iteration</h4><p>F\xF6r tal \xE4r ett intervall ett numeriskt intervall.</p><p>F\xF6r bin\xE4ra v\xE4rden kan samma intervall konstrueras, t.ex.</p><div class="language-text ext-text"><pre class="language-text"><code>let begin : &amp;[u8] = &amp;[1,1];
for (k,v) in test0.range(begin..=&amp;[2]) {}
</code></pre></div><p>Om <code>begin</code> \xE4r st\xF6rre \xE4n <code>end</code>kommer den att g\xE5 bak\xE5t.</p><p>Till exempel kommer <code>test1.range(5..2)</code> att ge ut f\xF6ljande :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Variabelnamn f\xF6r databasen Env
  Test // Databastest
}

fn main() -&gt; Result&lt;()&gt; {
  // Ange versionsnumret f\xF6r libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // L\xE4sning och skrivning med flera tr\xE5dar
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
      sync_period : 65536, // P\xE5 1/65536:e av en sekund
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
 MDBX // Variabelnamn f\xF6r databasen Env
 Test // Databastest
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
  MDBX // Variabelnamn f\xF6r databasen ENV
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
  // Snabbt skrivande
  w!(Test1.set [2, 3],[4, 5]);

  // Snabb l\xE4sning
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

  // Flera operationer p\xE5 flera databaser i samma transaktion
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

    // Transaktionen kommer att genomf\xF6ras i slutet av till\xE4mpningsomr\xE5det.
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
</code></pre></div><p>Intervall iteration st\xF6ds inte <a href="https://doc.rust-lang.org/std/ops/struct.RangeFull.html" target="_blank" rel="noopener noreferrer"><code>RangeFull</code></a> , dvs. att <code>..</code>inte st\xF6ds, anv\xE4nd ist\xE4llet den <a href="#%E9%81%8D%E5%8E%86">traversal</a> som n\xE4mns ovan.</p><h4 id="rev-range-inverterade-intervaller" tabindex="-1"><a class="header-anchor" href="#rev-range-inverterade-intervaller" aria-hidden="true">#</a> <code>.rev_range</code> Inverterade intervaller</h4><p>Om du vill f\xE5 ett inverterat intervall som \xE4r mindre \xE4n eller lika med ett v\xE4rde kan du g\xF6ra s\xE5 h\xE4r</p><div class="language-text ext-text"><pre class="language-text"><code>test2.rev_range(2..)
</code></pre></div><p>Resultatet kommer att vara</p><div class="language-text ext-text"><pre class="language-text"><code>(2, 4)
(1, 5)
(0, 0)
</code></pre></div><p>En av <code>begin</code> eller <code>end</code> f\xE5r inte vara inst\xE4lld f\xF6r det inverterade intervallet, f\xF6r om b\xE5da \xE4r inst\xE4llda kan du alltid anv\xE4nda <code>range(end..begin)</code> f\xF6r att uppn\xE5 samma effekt.</p><h3 id="anpassning-av-datatyper" tabindex="-1"><a class="header-anchor" href="#anpassning-av-datatyper" aria-hidden="true">#</a> Anpassning av datatyper</h3><p>Demokoden finns p\xE5 <a href="https://github.com/rmw-lib/mdbx-example/blob/master/01/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/01</a></p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Variabelnamn f\xF6r databasen Env
  Test // Databastest
}

fn main() -&gt; Result&lt;()&gt; {
  // Ange versionsnumret f\xF6r libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // L\xE4sning och skrivning med flera tr\xE5dar
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
      sync_period : 65536, // P\xE5 1/65536:e av en sekund
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
 MDBX // Variabelnamn f\xF6r databasen Env
 Test // Databastest
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
  MDBX // Variabelnamn f\xF6r databasen ENV
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
  // Snabbt skrivande
  w!(Test1.set [2, 3],[4, 5]);

  // Snabb l\xE4sning
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

  // Flera operationer p\xE5 flera databaser i samma transaktion
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

    // Transaktionen kommer att genomf\xF6ras i slutet av till\xE4mpningsomr\xE5det.
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
</code></pre></div><p>Utmatningen ser ut p\xE5 f\xF6ljande s\xE4tt</p><div class="language-text ext-text"><pre class="language-text"><code>Some(City { name: &quot;BeiJing&quot;, lnglat: (11640, 3990) })
</code></pre></div><p>I exemplet med den anpassade typen anv\xE4nder vi <a href="https://github.com/koute/speedy" target="_blank" rel="noopener noreferrer"><code>speedy</code></a> f\xF6r att g\xF6ra serialiseringen <a href="https://github.com/djkoloski/rust_serialization_benchmark" target="_blank" rel="noopener noreferrer">( <code>speedy</code> resultatgranskning</a> ).</p><p>Implementering av anpassade typer <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.FromMdbx.html" target="_blank" rel="noopener noreferrer"><code>FromMdbx</code></a> och <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.ToAsRef.html" target="_blank" rel="noopener noreferrer"><code>ToAsRef</code></a> kan sedan lagras p\xE5 <code>mdbx</code>.</p><p>Om du anv\xE4nder ett specifikt serialiseringsbibliotek kan du ocks\xE5 anpassa <a href="https://blog.logrocket.com/macros-in-rust-a-tutorial-with-examples/" target="_blank" rel="noopener noreferrer">attributmakron</a> f\xF6r att f\xF6renkla processen.</p><h4 id="forenkla-anpassade-typer-med-attributmakroer" tabindex="-1"><a class="header-anchor" href="#forenkla-anpassade-typer-med-attributmakroer" aria-hidden="true">#</a> F\xF6renkla anpassade typer med attributmakroer</h4><p>Att implementera ett attributmakro \xE4r lika enkelt som att <a href="https://crates.io/crates/mdbx_speedy" target="_blank" rel="noopener noreferrer"><code>mdbx_speedy</code></a> Makrokoden f\xF6r attributet \xE4r f\xF6ljande :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Variabelnamn f\xF6r databasen Env
  Test // Databastest
}

fn main() -&gt; Result&lt;()&gt; {
  // Ange versionsnumret f\xF6r libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // L\xE4sning och skrivning med flera tr\xE5dar
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
      sync_period : 65536, // P\xE5 1/65536:e av en sekund
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
 MDBX // Variabelnamn f\xF6r databasen Env
 Test // Databastest
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
  MDBX // Variabelnamn f\xF6r databasen ENV
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
  // Snabbt skrivande
  w!(Test1.set [2, 3],[4, 5]);

  // Snabb l\xE4sning
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

  // Flera operationer p\xE5 flera databaser i samma transaktion
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

    // Transaktionen kommer att genomf\xF6ras i slutet av till\xE4mpningsomr\xE5det.
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
</code></pre></div><p>B\xF6rja med <code>cargo add mdbx-speedy</code>i ditt eget projekt s\xE5 kan du snabbt anpassa typen (se <a href="https://github.com/rmw-lib/mdbx-example/blob/master/02/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/02</a> f\xF6r demokod).</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Variabelnamn f\xF6r databasen Env
  Test // Databastest
}

fn main() -&gt; Result&lt;()&gt; {
  // Ange versionsnumret f\xF6r libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // L\xE4sning och skrivning med flera tr\xE5dar
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
      sync_period : 65536, // P\xE5 1/65536:e av en sekund
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
 MDBX // Variabelnamn f\xF6r databasen Env
 Test // Databastest
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
  MDBX // Variabelnamn f\xF6r databasen ENV
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
  // Snabbt skrivande
  w!(Test1.set [2, 3],[4, 5]);

  // Snabb l\xE4sning
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

  // Flera operationer p\xE5 flera databaser i samma transaktion
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

    // Transaktionen kommer att genomf\xF6ras i slutet av till\xE4mpningsomr\xE5det.
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
</code></pre></div><p>Naturligtvis \xE4r det fortfarande irriterande att skriva <code>#[derive(PartialEq, Debug, Readable, Writable, MdbxSpeedy)]</code> upprepade g\xE5nger, s\xE5 du kan anv\xE4nda <a href="https://docs.rs/derive-alias/0.1.0/derive_alias" target="_blank" rel="noopener noreferrer"><code>derive_alias</code></a> f\xF6r att f\xF6renkla koden ytterligare.</p><h2 id="anmarkning-om-anvandningen-av" tabindex="-1"><a class="header-anchor" href="#anmarkning-om-anvandningen-av" aria-hidden="true">#</a> Anm\xE4rkning om anv\xE4ndningen av</h2><h3 id="nyckelns-langd" tabindex="-1"><a class="header-anchor" href="#nyckelns-langd" aria-hidden="true">#</a> Nyckelns l\xE4ngd</h3><ul><li>Minsta 0, h\xF6gsta \u2248 \xBD sidstorlek (standard 4K sidnyckel maximal storlek \xE4r 2022 bytes), anges vid initialisering av databasen <code>pagesize</code> kan konfigureras till h\xF6gst <code>65536</code>och m\xE5ste vara en potens av 2.</li></ul><h2 id="fotnoter" tabindex="-1"><a class="header-anchor" href="#fotnoter" aria-hidden="true">#</a> Fotnoter</h2><p>De n\xE4mner f\xF6rdelarna med att \xF6verg\xE5 fr\xE5n LMDB till MDBX.</p><blockquote><p>Erigon b\xF6rjade med en BoltDB-databas, lade sedan till st\xF6d f\xF6r BadgerDB och migrerade slutligen helt till LMDB.Vid n\xE5gon tidpunkt fick vi stabilitetsproblem som orsakades av v\xE5r anv\xE4ndning av LMDB och som inte hade f\xF6rutsetts av skaparna. Sedan dess har vi tittat p\xE5 ett v\xE4lunderst\xF6dt derivat av LMDB som heter MDBX och hoppas kunna utnyttja deras stabilitetsf\xF6rb\xE4ttringar och eventuellt samarbeta mer i framtiden.Integrationen av MDBX \xE4r nu klar och det \xE4r dags f\xF6r mer testning och dokumentation.</p><p>F\xF6rdelar med \xF6verg\xE5ngen fr\xE5n LMDB till MDBX.</p><ol><li><p>Tillv\xE4xten &quot;utrymme (geometri)&quot; i databasfilerna fungerar korrekt. Detta \xE4r viktigt, s\xE4rskilt i Windows. I LMDB m\xE5ste man ange storleken p\xE5 minneskartan en g\xE5ng i f\xF6rv\xE4g (f\xF6r n\xE4rvarande anv\xE4nder vi 2 TB som standard) och om databasfilen v\xE4xer \xF6ver denna gr\xE4ns m\xE5ste processen startas om. Om du st\xE4ller in storleken p\xE5 minneskartan till 2 TB i Windows skulle databasfilen bli 2 TB stor fr\xE5n b\xF6rjan, vilket inte \xE4r s\xE4rskilt bekv\xE4mt. P\xE5 MDBX \xF6kas minnesmappstorleken i steg om 2 Gb. Det inneb\xE4r att du ibland m\xE5ste g\xF6ra om \xE4ndringar, men det ger en b\xE4ttre anv\xE4ndarupplevelse.</p></li><li><p>MDBX har str\xE4ngare kontroller av samtidig anv\xE4ndning av transaktionsbehandling och \xF6verlappande l\xE4s- och skrivtransaktioner i samma exekveringstr\xE5d. Detta g\xF6r det m\xF6jligt att uppt\xE4cka vissa icke uppenbara fel och g\xF6r beteendet mer f\xF6ruts\xE4gbart.<br> Under mer \xE4n fem \xE5r (sedan det separerades fr\xE5n LMDB) har MDBX samlat p\xE5 sig ett stort antal s\xE4kerhets- och felr\xE4ttningar som, s\xE5vitt vi vet, fortfarande finns i LMDB. N\xE5gra av dessa uppt\xE4cktes under v\xE5r testning, och MDBX-ansvariga tog dem p\xE5 allvar och r\xE4ttade dem snabbt.</p></li><li><p>N\xE4r det g\xE4ller databaser som st\xE4ndigt \xE4ndrar data skapar de en hel del utrymme som kan \xE5terkr\xE4vas (\xE4ven k\xE4nt som &quot;freelist&quot; i LMDB-terminologi). Vi har varit tvungna att korrigera LMDB f\xF6r att \xE5tg\xE4rda de allvarligaste bristerna i hanteringen av \xE5terkr\xE4vbart utrymme <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide" target="_blank" rel="noopener noreferrer">(analys)</a>. MDBX har \xE4gnat <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide%EF%BC%89%E3%80%82MDBX%E5%AF%B9%E5%8F%AF%E5%9B%9E%E6%94%B6%E7%A9%BA%E9%97%B4%E7%9A%84%E6%9C%89%E6%95%88%E5%A4%84%E7%90%86%E8%BF%9B%E8%A1%8C%E4%BA%86%E7%89%B9%E5%88%AB%E7%9A%84%E5%85%B3%E6%B3%A8%EF%BC%8C%E5%88%B0%E7%9B%AE%E5%89%8D%E4%B8%BA%E6%AD%A2%EF%BC%8C%E8%BF%98%E4%B8%8D%E9%9C%80%E8%A6%81%E6%89%93%E8%A1%A5%E4%B8%81%E3%80%82" target="_blank" rel="noopener noreferrer">s\xE4rskild uppm\xE4rksamhet \xE5t effektiv hantering av \xE5terkr\xE4vbart utrymme och har hittills inte beh\xF6vt korrigeras</a>.</p></li><li><p>Baserat p\xE5 v\xE5ra tester presterade MDBX n\xE5got b\xE4ttre p\xE5 v\xE5ra arbetsbelastningar.</p></li><li><p>MDBX exponerar fler interna telemetridata - mer information om vad som h\xE4nder i databasen. Och vi har dessa data i Grafana - f\xF6r att fatta b\xE4ttre beslut om programdesign. Efter den fullst\xE4ndiga \xF6verg\xE5ngen till MDBX (d\xE4r st\xF6det f\xF6r LMDB tas bort) kommer vi till exempel att inf\xF6ra en policy f\xF6r &quot;commit half full transaction&quot; f\xF6r att undvika diskkontakter med \xF6ver- och underfl\xF6de. Detta kommer att f\xF6renkla v\xE5r kod ytterligare utan att p\xE5verka prestandan.</p></li><li><p>MDBX st\xF6der l\xE4get &quot;Exclusive open&quot; (exklusivt \xF6ppet l\xE4ge) - vi anv\xE4nder detta vid databasmigreringar f\xF6r att f\xF6rhindra att andra l\xE4sare f\xE5r tillg\xE5ng till databasen under migreringen.</p></li></ol></blockquote><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p><a href="https://github.com/ledgerwatch/erigon/wiki/Criteria-for-transitioning-from-Alpha-to-Beta#switch-from-lmdb-to-mdbx" target="_blank" rel="noopener noreferrer">Erigon (n\xE4sta generations Ethernet-klient) har nyligen bytt fr\xE5n LMDB till MDBX</a>. <a href="#fnref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,160);function rt(st,ot){const e=u("RouterLink");return o(),l(i,null,[g,m,b,h,t("nav",c,[t("ul",null,[t("li",null,[a(e,{to:"#citat"},{default:r(()=>[f]),_:1})]),t("li",null,[a(e,{to:"#vad-ar-libmdbx"},{default:r(()=>[v]),_:1})]),t("li",null,[a(e,{to:"#handledning"},{default:r(()=>[_]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#hur-du-kor-exemplet"},{default:r(()=>[k]),_:1})]),t("li",null,[a(e,{to:"#exempel-1-skriva-set-key-val-och-lasa-get-key"},{default:r(()=>[x]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#kod"},{default:r(()=>[q]),_:1})]),t("li",null,[a(e,{to:"#kor-utdata"},{default:r(()=>[y]),_:1})]),t("li",null,[a(e,{to:"#kodbeskrivning"},{default:r(()=>[D]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#env-rw-definiera-databasen"},{default:r(()=>[E]),_:1})]),t("li",null,[a(e,{to:"#makroexpansion"},{default:r(()=>[w]),_:1})]),t("li",null,[a(e,{to:"#hur-som-helst-och-lazy-static"},{default:r(()=>[B]),_:1})]),t("li",null,[a(e,{to:"#makro-mdbx"},{default:r(()=>[T]),_:1})]),t("li",null,[a(e,{to:"#tradar-och-transaktioner"},{default:r(()=>[M]),_:1})]),t("li",null,[a(e,{to:"#lasa-och-skriva-binara-data"},{default:r(()=>[N]),_:1})])])])])]),t("li",null,[a(e,{to:"#exempel-2-datatyper-databasflaggor-radering-traversering"},{default:r(()=>[S]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#kod-1"},{default:r(()=>[X]),_:1})]),t("li",null,[a(e,{to:"#kor-utdata-1"},{default:r(()=>[O]),_:1})]),t("li",null,[a(e,{to:"#snabb-lasning-och-skrivning"},{default:r(()=>[V]),_:1})]),t("li",null,[a(e,{to:"#datatyper"},{default:r(()=>[R]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#forinstallda-datatyper"},{default:r(()=>[C]),_:1})])])]),t("li",null,[a(e,{to:"#flaggor-i-databasen"},{default:r(()=>[I]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#dupsort-en-nyckel-motsvarar-mer-an-ett-varde"},{default:r(()=>[U]),_:1})]),t("li",null,[a(e,{to:"#dup-key-iterator-som-returnerar-alla-varden-som-motsvarar-en-nyckel"},{default:r(()=>[A]),_:1})]),t("li",null,[a(e,{to:"#automatiskt-bifogade-databasflaggor-som-standard"},{default:r(()=>[L]),_:1})])])]),t("li",null,[a(e,{to:"#radera-uppgifter"},{default:r(()=>[F]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#del-key-ta-bort-en-tangent"},{default:r(()=>[P]),_:1})]),t("li",null,[a(e,{to:"#del-val-key-val-radering-med-exakt-matchning"},{default:r(()=>[z]),_:1})])])]),t("li",null,[a(e,{to:"#overgang"},{default:r(()=>[j]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#sekventiell-genomgang"},{default:r(()=>[$]),_:1})]),t("li",null,[a(e,{to:"#rev-traversering-i-omvand-ordning"},{default:r(()=>[Y]),_:1})]),t("li",null,[a(e,{to:"#sortering"},{default:r(()=>[K]),_:1})])])])])]),t("li",null,[a(e,{to:"#intervall-iteratorer"},{default:r(()=>[H]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#kor-resultatet-av"},{default:r(()=>[G]),_:1})]),t("li",null,[a(e,{to:"#range-begin-end-intervall-iteration"},{default:r(()=>[W]),_:1})]),t("li",null,[a(e,{to:"#rev-range-inverterade-intervaller"},{default:r(()=>[J]),_:1})])])]),t("li",null,[a(e,{to:"#anpassning-av-datatyper"},{default:r(()=>[Q]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#forenkla-anpassade-typer-med-attributmakroer"},{default:r(()=>[Z]),_:1})])])])])]),t("li",null,[a(e,{to:"#anmarkning-om-anvandningen-av"},{default:r(()=>[tt]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#nyckelns-langd"},{default:r(()=>[nt]),_:1})])])]),t("li",null,[a(e,{to:"#fotnoter"},{default:r(()=>[et]),_:1})])])]),at],64)}var dt=s(p,[["render",rt],["__file","2021-12-21-mdbx.html.vue"]]);export{dt as default};
