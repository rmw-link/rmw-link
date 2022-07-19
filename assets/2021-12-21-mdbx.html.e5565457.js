import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{o as l,c as o,a as t,b as a,w as s,F as i,d as e,e as d,r as u}from"./app.2a6a1bd2.js";const p={},g=t("h1",{id:"a-libmdbx-rozsda-csomagja",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#a-libmdbx-rozsda-csomagja","aria-hidden":"true"},"#"),e(" A libmdbx rozsda csomagja")],-1),b=t("p",null,[e("A "),t("code",null,"rust"),e(" wrapper a "),t("a",{href:"https://github.com/erthink/libmdbx",target:"_blank",rel:"noopener noreferrer"},"libmdbx"),e(" adatb\xE1zishoz.")],-1),m=t("hr",null,null,-1),h=t("p",null,"C\xEDmt\xE1r :",-1),k={class:"table-of-contents"},c=e("Id\xE9zetek"),v=e("Mi az a libmdbx?"),_=e("Tutorials"),z=e("A p\xE9lda futtat\xE1sa"),f=e("P\xE9lda 1 : A set(key,val) \xE9s az olvas\xE1s \xEDr\xE1sa .get(key)"),x=e("K\xF3d:"),q=e("Futtassa a kimenetet"),y=e("K\xF3dle\xEDr\xE1s"),E=e("env_rw! Az adatb\xE1zis defini\xE1l\xE1sa"),D=e("Makro b\u0151v\xEDt\xE9s"),w=e("anyhow \xE9s lazy_static"),B=e("A makr\xF3 mdbx!"),T=e("Sz\xE1lak \xE9s tranzakci\xF3k"),A=e("Bin\xE1ris adatok olvas\xE1sa \xE9s \xEDr\xE1sa"),M=e("P\xE9lda 2: Adatt\xEDpusok, adatb\xE1zis-jelz\u0151k, t\xF6rl\xE9s, \xE1tj\xE1r\xE1s"),N=e("K\xF3d:"),S=e("Futtassa a kimenetet"),j=e("Gyors olvas\xE1s \xE9s \xEDr\xE1s"),X=e("Adatt\xEDpusok"),C=e("El\u0151re be\xE1ll\xEDtott adatt\xEDpusok"),R=e("Adatb\xE1zis-jelz\u0151k"),O=e("DUPSORT : Egy kulcs egyn\xE9l t\xF6bb \xE9rt\xE9knek felel meg"),V=e(".dup(key) iter\xE1tor, amely visszaadja az \xF6sszes \xE9rt\xE9ket, amely egy kulcsnak megfelel."),U=e("Alap\xE9rtelmezett, automatikusan csatolt adatb\xE1zis-jelz\u0151k"),I=e("Adatok t\xF6rl\xE9se"),L=e(".del(key) Kulcs t\xF6rl\xE9se"),F=e(".del_val(key,val) Pontos egyez\xE9s t\xF6rl\xE9se"),P=e("Traversal"),$=e("szekvenci\xE1lis \xE1tj\xE1r\xE1s"),G=e(".rev() Ford\xEDtott sorrendben t\xF6rt\xE9n\u0151 \xE1tj\xE1r\xE1s"),Y=e("Rendez\xE9s"),H=e("Intervallum iter\xE1torok"),K=e("Futtassa a"),W=e(".range(begin..end) Intervallum Iter\xE1ci\xF3"),J=e(".rev_range Invert\xE1lt intervallumok"),Q=e("Adatt\xEDpusok testreszab\xE1sa"),Z=e("Egy\xE9ni t\xEDpusok egyszer\u0171s\xEDt\xE9se attrib\xFAtummakr\xF3kkal"),tt=e("Megjegyz\xE9s a"),et=e("A kulcs hossza"),nt=e("L\xE1bjegyzetek"),at=d(`<hr><h2 id="idezetek" tabindex="-1"><a class="header-anchor" href="#idezetek" aria-hidden="true">#</a> Id\xE9zetek</h2><p>Az <a href="https://rmw.link" target="_blank" rel="noopener noreferrer">&#39;rmw.link</a> &#39; \xEDr\xE1sakor \xFAgy \xE9reztem, hogy sz\xFCks\xE9gem van egy be\xE1gyazott adatb\xE1zisra.</p><p>A gyakori r\xF6gz\xEDt\xE9s, olvas\xE1s \xE9s \xEDr\xE1s h\xE1l\xF3zati \xE1tviteli teljes\xEDtm\xE9nye miatt a <code>sqlite3</code> t\xFAls\xE1gosan fejlett volt a teljes\xEDtm\xE9ny szempontj\xE1b\xF3l.</p><p>\xCDgy egy alacsonyabb szint\u0171 kulcs-\xE9rt\xE9k adatb\xE1zis volt a megfelel\u0151bb <a href="https://discourse.world/h/2020/06/05/Shine-and-poverty-key-value-database-LMDB-in-applications-for-iOS" target="_blank" rel="noopener noreferrer">(az lmdb 10-szer gyorsabb, mint az sqlite</a> ) <a href="https://discourse.world/h/2020/06/05/Shine-and-poverty-key-value-database-LMDB-in-applications-for-iOS" target="_blank" rel="noopener noreferrer">.</a></p><p><img src="//irmw.gumlet.io/yxZV8x.jpg" alt=""></p><p>V\xE9g\xFCl a <code>lmdb</code> - <code>mdbx</code> - var\xE1zslatos v\xE1ltozata mellett d\xF6nt\xF6ttem.</p><p>Jelenleg az <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">mdbx-rs (mdbx-sys)</a> megl\xE9v\u0151 <code>rust</code> csomagja ( <code>mdbx</code> ) <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">nem t\xE1mogatja a Windows-t</a>, ez\xE9rt magamra v\xE1llaltam egy Windows-t\xE1mogat\xE1s\xFA verzi\xF3 elk\xE9sz\xEDt\xE9s\xE9t.</p><p>Egyedi rozsdat\xEDpusok t\xE1rol\xE1s\xE1nak t\xE1mogat\xE1sa. T\xE1mogatja a t\xF6bbsz\xE1l\xFA hozz\xE1f\xE9r\xE9st.</p><p>Az adatb\xE1zis defini\xE1lhat\xF3 egy modulban a <code>lazy_static</code> seg\xEDts\xE9g\xE9vel, majd egyszer\u0171en bevezethet\u0151 \xE9s haszn\xE1lhat\xF3 a :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
</code></pre></div><h2 id="mi-az-a-libmdbx" tabindex="-1"><a class="header-anchor" href="#mi-az-a-libmdbx" aria-hidden="true">#</a> Mi az a libmdbx?</h2><p>Az <a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">mdbx</a> egy m\xE1sodlagos adatb\xE1zis, amely az orosz <a href="https://vk.com/erthink" target="_blank" rel="noopener noreferrer">\u041B\u0435\u043E\u043D\u0438\u0434 \u042E\u0440\u044C\u0435\u0432 (Leonid Yuriev</a> ) \xE1ltal k\xE9sz\xEDtett lmdb-n alapul.</p><p>Az <a href="https://en.wikipedia.org/wiki/Lightning_Memory-Mapped_Database" target="_blank" rel="noopener noreferrer">lmdb</a> egy szupergyors be\xE1gyazott kulcs-\xE9rt\xE9k adatb\xE1zis.</p><p>A <a href="https://docs.meilisearch.com/reference/under_the_hood/storage.html#measured-disk-usage" target="_blank" rel="noopener noreferrer">MeiliSearch</a> teljes sz\xF6veges keres\u0151motor az lmdb-n alapul.</p><p><a href="https://docs.nvidia.com/deeplearning/dali/user-guide/docs/examples/general/data_loading/dataloading_lmdb.html" target="_blank" rel="noopener noreferrer">A caffe m\xE9lytanul\xE1si keretrendszer szint\xE9n az lmdb-t haszn\xE1lja adatt\xE1rol\xF3k\xE9nt</a>.</p><p>Az <a href="https://github.com/erthink/libmdbx#added-features" target="_blank" rel="noopener noreferrer">mdbx 30%-kal gyorsabb, mint az lmdb a be\xE1gyazott teljes\xEDtm\xE9nyt vizsg\xE1l\xF3 ioarena benchmarkban.</a></p><p><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-1.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-3.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-4.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-5.png" alt=""></p><p>Ugyanakkor az mdbx <a href="https://github.com/erthink/libmdbx#improvements-beyond-lmdb" target="_blank" rel="noopener noreferrer">jav\xEDtja</a> az lmdb <a href="https://github.com/erthink/libmdbx#improvements-beyond-lmdb" target="_blank" rel="noopener noreferrer">sz\xE1mos hi\xE1nyoss\xE1g\xE1t</a>, \xEDgy az Erigon (a k\xF6vetkez\u0151 gener\xE1ci\xF3s ethereum kliens) nemr\xE9g v\xE1ltott LMDB-r\u0151l MDBX-re <sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>.</p><h2 id="tutorials" tabindex="-1"><a class="header-anchor" href="#tutorials" aria-hidden="true">#</a> Tutorials</h2><h3 id="a-pelda-futtatasa" tabindex="-1"><a class="header-anchor" href="#a-pelda-futtatasa" aria-hidden="true">#</a> A p\xE9lda futtat\xE1sa</h3><p>El\u0151sz\xF6r kl\xF3nozza a k\xF3db\xE1zist <code>git clone git@github.com:rmw-lib/mdbx.git --depth=1 &amp;&amp; cd mdbx</code></p><p>Ezut\xE1n futtassa a <code>cargo run --example 01</code> \xE9s a k\xF6vetkez\u0151 futni fog <code>examples/01.rs</code></p><p>Ha ez a saj\xE1t projektje, k\xE9rj\xFCk, el\u0151sz\xF6r futtassa le:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>cargo install cargo-edit
cargo add mdbx lazy_static ctor paste
</code></pre></div><h3 id="pelda-1-a-set-key-val-es-az-olvasas-irasa-get-key" tabindex="-1"><a class="header-anchor" href="#pelda-1-a-set-key-val-es-az-olvasas-irasa-get-key" aria-hidden="true">#</a> P\xE9lda 1 : A <code>set(key,val)</code> \xE9s az olvas\xE1s \xEDr\xE1sa <code>.get(key)</code></h3><p>N\xE9zz\xFCnk egy egyszer\u0171 <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/01.rs" target="_blank" rel="noopener noreferrer">p\xE9ld\xE1t/01.rs</a></p><h4 id="kod" tabindex="-1"><a class="header-anchor" href="#kod" aria-hidden="true">#</a> K\xF3d:</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Az adatb\xE1zis v\xE1ltoz\xF3 neve Env
  Test // Adatb\xE1zis teszt
}

fn main() -&gt; Result&lt;()&gt; {
  // A libmdbx verzi\xF3sz\xE1m\xE1nak kimenete
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // T\xF6bbsz\xE1l\xFA olvas\xE1s \xE9s \xEDr\xE1s
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
</code></pre></div><h4 id="futtassa-a-kimenetet" tabindex="-1"><a class="header-anchor" href="#futtassa-a-kimenetet" aria-hidden="true">#</a> Futtassa a kimenetet</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/01.mdb
mdbx version https://github.com/erthink/libmdbx/releases/tag/v0.11.2
test1 get Ok(Some(Bin([6])))
[6]
</code></pre></div><h4 id="kodleiras" tabindex="-1"><a class="header-anchor" href="#kodleiras" aria-hidden="true">#</a> K\xF3dle\xEDr\xE1s</h4><h5 id="env-rw-az-adatbazis-definialasa" tabindex="-1"><a class="header-anchor" href="#env-rw-az-adatbazis-definialasa" aria-hidden="true">#</a> <code>env_rw!</code> Az adatb\xE1zis defini\xE1l\xE1sa</h5><p>A k\xF3d egy env_rw makr\xF3val kezd\u0151dik, amelynek 4 param\xE9tere van.</p><ol><li><p>Az adatb\xE1zis-k\xF6rnyezet v\xE1ltoz\xF3 neve</p></li><li><p>Visszaad egy objektumot, <a href="https://docs.rs/mdbx/latest/src/mdbx/env.rs.html#27-35" target="_blank" rel="noopener noreferrer">mdbx:: env:: Config</a>.</p></li></ol><p>Az alap\xE9rtelmezett konfigur\xE1ci\xF3t haszn\xE1ljuk, mivel a <code>Env</code> a <code>From&lt;Into&lt;PathBuf&gt;&gt;</code>c\xEDmet val\xF3s\xEDtja meg, \xEDgy az adatb\xE1zis el\xE9r\xE9si \xFAtja <code>into()</code>, \xE9s az alap\xE9rtelmezett konfigur\xE1ci\xF3 a k\xF6vetkez\u0151.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
MDBX // Az adatb\xE1zis v\xE1ltoz\xF3 neve Env
Test // Adatb\xE1zis teszt
}

fn main() -&gt; Result&lt;()&gt; {
// A libmdbx verzi\xF3sz\xE1m\xE1nak kimenete
unsafe {
  println!(
    &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
    mdbx_version.major, mdbx_version.minor, mdbx_version.release
  );
}

// T\xF6bbsz\xE1l\xFA olvas\xE1s \xE9s \xEDr\xE1s
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
    sync_period : 65536, // 1/65536 m\xE1sodperc alatt
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
</code></pre></div><p><code>max_db</code> Ez a be\xE1ll\xEDt\xE1s az adatb\xE1zis minden egyes <a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">megnyit\xE1sakor</a> vissza\xE1ll\xEDthat\xF3, de a t\xFAl nagy be\xE1ll\xEDt\xE1sa befoly\xE1solja a teljes\xEDtm\xE9nyt, csak sz\xFCks\xE9g szerint \xE1ll\xEDtsa be.</p><p>A t\xF6bbi param\xE9ter jelent\xE9s\xE9t l\xE1sd <a href="https://erthink.github.io/libmdbx/group__c__opening.html#ga9138119a904355d245777c4119534061" target="_blank" rel="noopener noreferrer">a libmdbx dokument\xE1ci\xF3j\xE1ban</a>.</p><ol start="3"><li><p>Az adatb\xE1zis olvas\xE1si tranzakci\xF3 makr\xF3j\xE1nak neve, az alap\xE9rtelmezett \xE9rt\xE9k <code>r</code></p></li><li><p>Az adatb\xE1zis-\xEDr\xE1si tranzakci\xF3 makr\xF3 neve, az alap\xE9rtelmezett \xE9rt\xE9k <code>w</code></p></li></ol><p>A 3. \xE9s 4. param\xE9terek elhagyhat\xF3k az alap\xE9rtelmezett \xE9rt\xE9kek haszn\xE1lat\xE1hoz.</p><h5 id="makro-bovites" tabindex="-1"><a class="header-anchor" href="#makro-bovites" aria-hidden="true">#</a> Makro b\u0151v\xEDt\xE9s</h5><p>Ha l\xE1tni szeretn\xE9, hogy mit csin\xE1l a makr\xF3 var\xE1zslat, akkor a <code>cargo expand --example 01</code> makr\xF3val b\u0151v\xEDtheti ki, amelyet el\u0151sz\xF6r telep\xEDteni kell. <code>cargo install cargo-expand</code></p><p>A kib\u0151v\xEDtett k\xF3d k\xE9perny\u0151k\xE9p\xE9t az al\xE1bbiakban mutatjuk be.</p><p><img src="//irmw.gumlet.io/PDzEtT.png" alt="PDzEtT"></p><h5 id="anyhow-es-lazy-static" tabindex="-1"><a class="header-anchor" href="#anyhow-es-lazy-static" aria-hidden="true">#</a> anyhow \xE9s lazy_static</h5><p>A kib\u0151v\xEDtett k\xE9perny\u0151k\xE9pen l\xE1that\xF3, hogy a <code>lazy_static</code> \xE9s a <code>anyhow</code>c\xEDmet haszn\xE1lj\xE1k.</p><p><a href="https://rustmagazine.github.io/rust_magazine_2021/chapter_2/rust_error_handle.html#thiserror--anyhow" target="_blank" rel="noopener noreferrer">anyhow</a> a hibakezel\u0151 k\xF6nyvt\xE1r a rozsda sz\xE1m\xE1ra.</p><p>A <a href="https://juejin.cn/post/7007336922817232927" target="_blank" rel="noopener noreferrer">lazy_static</a> egy statikus v\xE1ltoz\xF3 k\xE9sleltetett inicializ\xE1l\xE1ssal.</p><p>Ez a k\xE9t k\xF6nyvt\xE1r nagyon gyakori, ez\xE9rt nem fogok r\xE1juk kit\xE9rni.</p><h5 id="a-makro-mdbx" tabindex="-1"><a class="header-anchor" href="#a-makro-mdbx" aria-hidden="true">#</a> A makr\xF3 mdbx!</h5><p><a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html" target="_blank" rel="noopener noreferrer"><code>mdbx!</code></a> egy <a href="https://mp.weixin.qq.com/s/YT_HNFDCQ_IyocvBkRNJnA" target="_blank" rel="noopener noreferrer">elj\xE1r\xE1s makr\xF3</a>.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Az adatb\xE1zis v\xE1ltoz\xF3 neve Env
  Test // Adatb\xE1zis teszt
}

fn main() -&gt; Result&lt;()&gt; {
  // A libmdbx verzi\xF3sz\xE1m\xE1nak kimenete
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // T\xF6bbsz\xE1l\xFA olvas\xE1s \xE9s \xEDr\xE1s
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
      sync_period : 65536, // 1/65536 m\xE1sodperc alatt
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
 MDBX // Az adatb\xE1zis v\xE1ltoz\xF3 neve Env
 Test // Adatb\xE1zis teszt
}
</code></pre></div><p>Az els\u0151 sor az adatb\xE1zis-k\xF6rnyezet v\xE1ltoz\xF3j\xE1nak neve</p><p>A m\xE1sodik sor az adatb\xE1zis neve</p><p>Egyn\xE9l t\xF6bb adatb\xE1zis is lehet, egy-egy sor minden egyes adatb\xE1zishoz.</p><h5 id="szalak-es-tranzakciok" tabindex="-1"><a class="header-anchor" href="#szalak-es-tranzakciok" aria-hidden="true">#</a> Sz\xE1lak \xE9s tranzakci\xF3k</h5><p>A fenti k\xF3d a t\xF6bbsz\xE1l\xFA olvas\xE1st \xE9s \xEDr\xE1st mutatja be.</p><p>Fontos megjegyezni, hogy <strong>egy sz\xE1lban egyszerre csak egy tranzakci\xF3 lehet, ha egy sz\xE1lban egyn\xE9l t\xF6bb tranzakci\xF3 van nyitva, a program \xF6sszeomlik</strong>.</p><p>A tranzakci\xF3 a hat\xF3k\xF6r v\xE9g\xE9n ker\xFCl lek\xF6t\xE9sre.</p><h5 id="binaris-adatok-olvasasa-es-irasa" tabindex="-1"><a class="header-anchor" href="#binaris-adatok-olvasasa-es-irasa" aria-hidden="true">#</a> Bin\xE1ris adatok olvas\xE1sa \xE9s \xEDr\xE1sa</h5><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Az adatb\xE1zis v\xE1ltoz\xF3 neve Env
  Test // Adatb\xE1zis teszt
}

fn main() -&gt; Result&lt;()&gt; {
  // A libmdbx verzi\xF3sz\xE1m\xE1nak kimenete
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // T\xF6bbsz\xE1l\xFA olvas\xE1s \xE9s \xEDr\xE1s
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
      sync_period : 65536, // 1/65536 m\xE1sodperc alatt
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
 MDBX // Az adatb\xE1zis v\xE1ltoz\xF3 neve Env
 Test // Adatb\xE1zis teszt
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
</code></pre></div><p><code>set</code> egy \xEDr\xE1s, a <code>get</code> egy olvas\xE1s, \xE9s minden olyan objektum, amely a <a href="https://doc.rust-lang.org/std/convert/trait.AsRef.html" target="_blank" rel="noopener noreferrer"><code>AsRef&lt;[u8]&gt;</code></a> objektum \xEDrhat\xF3 az adatb\xE1zisba.</p><p><code>get</code> Ami kij\xF6n, az a <code>Ok(Some(Bin([6])))</code>, amely \xE1talak\xEDthat\xF3 <code>&amp;[u8]</code>.</p><h3 id="pelda-2-adattipusok-adatbazis-jelzok-torles-atjaras" tabindex="-1"><a class="header-anchor" href="#pelda-2-adattipusok-adatbazis-jelzok-torles-atjaras" aria-hidden="true">#</a> P\xE9lda 2: Adatt\xEDpusok, adatb\xE1zis-jelz\u0151k, t\xF6rl\xE9s, \xE1tj\xE1r\xE1s</h3><p>N\xE9zz\xFCk a m\xE1sodik <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">p\xE9ld\xE1t/02.rs</a>:</p><p>Ebben a p\xE9ld\xE1ban a <code>env_rw!</code>, valamint a harmadik \xE9s negyedik argumentum ( <code>r</code>, <code>w</code>) elmarad.</p><h4 id="kod-1" tabindex="-1"><a class="header-anchor" href="#kod-1" aria-hidden="true">#</a> K\xF3d:</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Az adatb\xE1zis v\xE1ltoz\xF3 neve Env
  Test // Adatb\xE1zis teszt
}

fn main() -&gt; Result&lt;()&gt; {
  // A libmdbx verzi\xF3sz\xE1m\xE1nak kimenete
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // T\xF6bbsz\xE1l\xFA olvas\xE1s \xE9s \xEDr\xE1s
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
      sync_period : 65536, // 1/65536 m\xE1sodperc alatt
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
 MDBX // Az adatb\xE1zis v\xE1ltoz\xF3 neve Env
 Test // Adatb\xE1zis teszt
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
  MDBX // Az adatb\xE1zis v\xE1ltoz\xF3inak nevei ENV
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
  // Gyors \xEDr\xE1s
  w!(Test1.set [2, 3],[4, 5]);

  // Gyors olvas\xE1s
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

  // T\xF6bb m\u0171velet t\xF6bb adatb\xE1zison egyazon tranzakci\xF3ban
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

    // A tranzakci\xF3 a hat\xF3k\xF6r v\xE9g\xE9n ker\xFCl lek\xF6t\xE9sre.
  }

  Ok(())
}
</code></pre></div><h4 id="futtassa-a-kimenetet-1" tabindex="-1"><a class="header-anchor" href="#futtassa-a-kimenetet-1" aria-hidden="true">#</a> Futtassa a kimenetet</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/02.mdb

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
</code></pre></div><h4 id="gyors-olvasas-es-iras" tabindex="-1"><a class="header-anchor" href="#gyors-olvasas-es-iras" aria-hidden="true">#</a> Gyors olvas\xE1s \xE9s \xEDr\xE1s</h4><p>Ha egyszer\u0171en csak egyetlen adatsort akarunk beolvasni vagy ki\xEDrni, haszn\xE1lhatjuk a makr\xF3 szintaktikai cukrot.</p><p>Adatok olvas\xE1sa</p><div class="language-text ext-text"><pre class="language-text"><code>r!(Test1.get [2, 3])
</code></pre></div><p>Adatok \xEDr\xE1sa</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Az adatb\xE1zis v\xE1ltoz\xF3 neve Env
  Test // Adatb\xE1zis teszt
}

fn main() -&gt; Result&lt;()&gt; {
  // A libmdbx verzi\xF3sz\xE1m\xE1nak kimenete
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // T\xF6bbsz\xE1l\xFA olvas\xE1s \xE9s \xEDr\xE1s
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
      sync_period : 65536, // 1/65536 m\xE1sodperc alatt
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
 MDBX // Az adatb\xE1zis v\xE1ltoz\xF3 neve Env
 Test // Adatb\xE1zis teszt
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
  MDBX // Az adatb\xE1zis v\xE1ltoz\xF3inak nevei ENV
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
  // Gyors \xEDr\xE1s
  w!(Test1.set [2, 3],[4, 5]);

  // Gyors olvas\xE1s
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

  // T\xF6bb m\u0171velet t\xF6bb adatb\xE1zison egyazon tranzakci\xF3ban
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

    // A tranzakci\xF3 a hat\xF3k\xF6r v\xE9g\xE9n ker\xFCl lek\xF6t\xE9sre.
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
</code></pre></div><p>Mindezt egy sorban, ahogyan a <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs-ben</a> meg van \xEDrva.</p><h4 id="adattipusok" tabindex="-1"><a class="header-anchor" href="#adattipusok" aria-hidden="true">#</a> Adatt\xEDpusok</h4><p>Az examples/02 <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">.</a> rs-ben az adatb\xE1zis defin\xEDci\xF3ja \xEDgy n\xE9z ki:</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Az adatb\xE1zis v\xE1ltoz\xF3 neve Env
  Test // Adatb\xE1zis teszt
}

fn main() -&gt; Result&lt;()&gt; {
  // A libmdbx verzi\xF3sz\xE1m\xE1nak kimenete
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // T\xF6bbsz\xE1l\xFA olvas\xE1s \xE9s \xEDr\xE1s
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
      sync_period : 65536, // 1/65536 m\xE1sodperc alatt
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
 MDBX // Az adatb\xE1zis v\xE1ltoz\xF3 neve Env
 Test // Adatb\xE1zis teszt
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
  MDBX // Az adatb\xE1zis v\xE1ltoz\xF3inak nevei ENV
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
  // Gyors \xEDr\xE1s
  w!(Test1.set [2, 3],[4, 5]);

  // Gyors olvas\xE1s
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

  // T\xF6bb m\u0171velet t\xF6bb adatb\xE1zison egyazon tranzakci\xF3ban
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

    // A tranzakci\xF3 a hat\xF3k\xF6r v\xE9g\xE9n ker\xFCl lek\xF6t\xE9sre.
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
</code></pre></div><p>ahol <code>key</code> \xE9s <code>val</code> hat\xE1rozza meg a kulcsok \xE9s az \xE9rt\xE9kek adatt\xEDpusait.</p><p>Ha olyan adatt\xEDpust pr\xF3b\xE1l \xEDrni, amely nem felel meg a defini\xE1ltnak, hiba\xFCzenet jelenik meg, ahogy az al\xE1bbi k\xE9perny\u0151k\xE9pen l\xE1that\xF3 :</p><p><img src="//irmw.gumlet.io/4rFTC6.png" alt=""></p><p>Az alap\xE9rtelmezett adatt\xEDpus <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Bin.html" target="_blank" rel="noopener noreferrer"><code>Bin</code></a> , b\xE1rmilyen adat, amely megval\xF3s\xEDtja a <code>AsRef&lt;[u8]&gt;</code> c\xEDmet, \xEDrhat\xF3.</p><p>Ha a kulcs vagy az \xE9rt\xE9k egy <code>utf8</code> karakterl\xE1nc, az adatt\xEDpus be\xE1ll\xEDthat\xF3 a k\xF6vetkez\u0151re <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Str.html" target="_blank" rel="noopener noreferrer"><code>Str</code></a> .</p><p>A <code>Str</code> <a href="https://doc.rust-lang.org/std/ops/trait.Deref.html" target="_blank" rel="noopener noreferrer">kvantifik\xE1ci\xF3 felold\xE1sa</a> egy sztringet ad vissza, hasonl\xF3an a <code>let k:&amp;str = &amp;k;</code>-hoz.</p><p>Ezen k\xEDv\xFCl a <code>Str</code> a k\xF6vetkez\u0151ket is megval\xF3s\xEDtja <a href="https://doc.rust-lang.org/std/fmt/trait.Display.html" target="_blank" rel="noopener noreferrer"><code>std::fmt::Display</code></a> , a <code>println!(&quot;{}&quot;,k)</code> egy olvashat\xF3 karakterl\xE1ncot ad ki.</p><h5 id="elore-beallitott-adattipusok" tabindex="-1"><a class="header-anchor" href="#elore-beallitott-adattipusok" aria-hidden="true">#</a> El\u0151re be\xE1ll\xEDtott adatt\xEDpusok</h5><p>A <code>Str</code> \xE9s <code>Bin</code> mellett a wrapper a k\xF6vetkez\u0151 adatok t\xE1mogat\xE1s\xE1val is rendelkezik: <a href="https://docs.rs/mdbx/latest/src/mdbx/type.rs.html#48" target="_blank" rel="noopener noreferrer">usize, u128, u64, u32, u16, u8, isize, i128, i64, i32, i16, i8, f32, f64</a>.</p><h4 id="adatbazis-jelzok" tabindex="-1"><a class="header-anchor" href="#adatbazis-jelzok" aria-hidden="true">#</a> Adatb\xE1zis-jelz\u0151k</h4><p>Az <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a> f\xE1jlban az adatokhoz hozz\xE1adott adatb\xE1zis-jelz\u0151ket a <code>Test4</code> c\xEDmen l\xE1thatja. <code>flag DUPSORT</code></p><p>A libmdbx adatb\xE1zisnak sz\xE1mos flagje van ( <a href="https://erthink.github.io/libmdbx/group__c__dbi.html#gafe3bddb297b3ab0d828a487c5726f76a" target="_blank" rel="noopener noreferrer"><code>MDBX_db_flags_t</code></a> ), amelyek be\xE1ll\xEDthat\xF3k.</p><ul><li>A REVERSEKEY ford\xEDtott karakterl\xE1nc-\xF6sszehasonl\xEDt\xE1st haszn\xE1l a kulcsokhoz. (hasznos, ha kis v\xE9gk\xF3d\xFA sz\xE1mokat haszn\xE1lunk kulcsk\xE9nt)</li><li>A DUPSORT rendezett duplik\xE1tumokat haszn\xE1l, azaz egy kulcshoz t\xF6bb \xE9rt\xE9ket is megenged.</li><li>INTEGERKEY Nat\xEDv b\xE1jtrendez\xE9s\u0171 numerikus kulcs uint32_t vagy uint64_t. A kulcsoknak azonos m\xE9ret\u0171nek kell lenni\xFCk, \xE9s az argumentumk\xE9nt val\xF3 \xE1tad\xE1skor igaz\xEDtani kell \u0151ket.</li><li>DUPFIXED Az adat\xE9rt\xE9kek m\xE9ret\xE9nek azonosnak kell lennie, ha DUPSORT-ot haszn\xE1l (lehet\u0151v\xE9 teszi az \xE9rt\xE9kek sz\xE1m\xE1nak gyors megsz\xE1ml\xE1l\xE1s\xE1t).</li><li>Az INTEGERDUP eset\xE9ben DUPSORT \xE9s DUPFIXED sz\xFCks\xE9ges; az \xE9rt\xE9kek eg\xE9sz sz\xE1mok (az INTEGERKEY-hez hasonl\xF3an). Az adat\xE9rt\xE9keknek azonos m\xE9ret\u0171nek kell lenni\xFCk, \xE9s param\xE9terk\xE9nt \xE1tadva igazodniuk kell egym\xE1shoz.</li><li>A REVERSEDUP a DUPSORT-ot haszn\xE1lja; a ford\xEDtott karakterl\xE1nc-\xF6sszehasonl\xEDt\xE1s az adat\xE9rt\xE9kekn\xE9l haszn\xE1latos.</li><li>A CREATE l\xE9trehozza a DB-t, ha az nem l\xE9tezik (alap\xE9rtelmez\xE9s szerint hozz\xE1adva).</li><li>DB_ACCEDE Megnyit egy megl\xE9v\u0151, az ismeretlen jelz\u0151vel l\xE9trehozott al-adatb\xE1zist.<br> Ez a DB_ACCEDE flag ismeretlen flagekkel (REVERSEKEY, DUPSORT, INTEGERKEY, DUPFIXED, INTEGERDUP \xE9s REVERSEDUP) l\xE9trehozott megl\xE9v\u0151 al-adatb\xE1zisok megnyit\xE1s\xE1ra szolg\xE1l.<br> Ebben az esetben az aladatb\xE1zis nem ad vissza INCOMPATIBLE hib\xE1t, hanem a l\xE9trehoz\xE1s\xE1hoz haszn\xE1lt z\xE1szl\xF3kkal ny\xEDlik meg, \xE9s az alkalmaz\xE1s az mdbx_dbi_flags() seg\xEDts\xE9g\xE9vel meghat\xE1rozhatja a t\xE9nyleges z\xE1szl\xF3kat.</li></ul><h5 id="dupsort-egy-kulcs-egynel-tobb-erteknek-felel-meg" tabindex="-1"><a class="header-anchor" href="#dupsort-egy-kulcs-egynel-tobb-erteknek-felel-meg" aria-hidden="true">#</a> DUPSORT : Egy kulcs egyn\xE9l t\xF6bb \xE9rt\xE9knek felel meg</h5><p><code>DUPSORT</code>, ami azt jelenti, hogy egy kulcs t\xF6bb \xE9rt\xE9knek is megfelelhet.</p><p>Ha t\xF6bb z\xE1szl\xF3t akar be\xE1ll\xEDtani, \xEDrja a k\xF6vetkez\u0151ket <code>flag DUPSORT | DUPFIXED</code></p><h5 id="dup-key-iterator-amely-visszaadja-az-osszes-erteket-amely-egy-kulcsnak-megfelel" tabindex="-1"><a class="header-anchor" href="#dup-key-iterator-amely-visszaadja-az-osszes-erteket-amely-egy-kulcsnak-megfelel" aria-hidden="true">#</a> <code>.dup(key)</code> iter\xE1tor, amely visszaadja az \xF6sszes \xE9rt\xE9ket, amely egy kulcsnak megfelel.</h5><p>Ez a funkci\xF3 csak a <code>DUPSORT</code> c\xEDmmel jel\xF6lt adatb\xE1zisok eset\xE9ben \xE9rhet\u0151 el, ahol egy kulcs egyn\xE9l t\xF6bb \xE9rt\xE9knek felelhet meg.</p><p>A <code>DUPSORT</code> adatb\xE1zisok eset\xE9ben a <code>get</code> csak a kulcs els\u0151 \xE9rt\xE9k\xE9t adja vissza. Ha az \xF6sszes \xE9rt\xE9ket szeretn\xE9 megkapni, haszn\xE1lja a <code>dup</code>c\xEDmet.</p><h5 id="alapertelmezett-automatikusan-csatolt-adatbazis-jelzok" tabindex="-1"><a class="header-anchor" href="#alapertelmezett-automatikusan-csatolt-adatbazis-jelzok" aria-hidden="true">#</a> Alap\xE9rtelmezett, automatikusan csatolt adatb\xE1zis-jelz\u0151k</h5><p>Ha az adatt\xEDpus <code>u32</code> / <code>u64</code> / <code>usize</code>, az adatb\xE1zis-jelz\u0151 automatikusan hozz\xE1ad\xE1sra ker\xFCl. <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#105" target="_blank" rel="noopener noreferrer"><code>INTEGERKEY</code></a> .</p><p>A kis v\xE9g\u0171 k\xF3dol\xE1ssal rendelkez\u0151 g\xE9peken az egy\xE9b sz\xE1mt\xEDpusok automatikusan hozz\xE1ad\xF3dnak. <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#108" target="_blank" rel="noopener noreferrer"><code>REVERSEKEY</code></a> Az adatb\xE1zis-jelz\u0151 automatikusan hozz\xE1ad\xE1sra ker\xFCl, ha az adatt\xEDpus / / .</p><h4 id="adatok-torlese" tabindex="-1"><a class="header-anchor" href="#adatok-torlese" aria-hidden="true">#</a> Adatok t\xF6rl\xE9se</h4><h5 id="del-key-kulcs-torlese" tabindex="-1"><a class="header-anchor" href="#del-key-kulcs-torlese" aria-hidden="true">#</a> <code>.del(key)</code> Kulcs t\xF6rl\xE9se</h5><p><code>.del(val)</code> T\xF6rli a kulcsnak megfelel\u0151 \xE9rt\xE9ket.</p><p>Ha az adatb\xE1zisban szerepel a <code>DUPSORT</code>jelz\u0151, akkor a kulcs alatt tal\xE1lhat\xF3 \xF6sszes \xE9rt\xE9k t\xF6rl\xE9sre ker\xFCl.</p><p>Visszaadja a <code>true</code>\xE9rt\xE9ket, ha b\xE1rmilyen adat t\xF6rl\u0151d\xF6tt, \xE9s a <code>false</code>\xE9rt\xE9ket, ha nem.</p><h5 id="del-val-key-val-pontos-egyezes-torlese" tabindex="-1"><a class="header-anchor" href="#del-val-key-val-pontos-egyezes-torlese" aria-hidden="true">#</a> <code>.del_val(key,val)</code> Pontos egyez\xE9s t\xF6rl\xE9se</h5><p><code>.del_val(key,val)</code> T\xF6rli azokat a kulcs-\xE9rt\xE9k p\xE1rokat, amelyek pontosan megfelelnek a bemeneti param\xE9tereknek.</p><p>Visszaadja a <code>true</code>\xE9rt\xE9ket, ha b\xE1rmilyen adat t\xF6rl\u0151d\xF6tt, \xE9s a <code>false</code>\xE9rt\xE9ket, ha nem.</p><h4 id="traversal" tabindex="-1"><a class="header-anchor" href="#traversal" aria-hidden="true">#</a> Traversal</h4><h5 id="szekvencialis-atjaras" tabindex="-1"><a class="header-anchor" href="#szekvencialis-atjaras" aria-hidden="true">#</a> szekvenci\xE1lis \xE1tj\xE1r\xE1s</h5><p>Az al\xE1bbiak v\xE9grehajt\xE1sa miatt <a href="https://doc.rust-lang.org/std/iter/trait.IntoIterator.html" target="_blank" rel="noopener noreferrer"><code>std::iter::IntoIterator</code></a> . k\xF6zvetlen\xFCl a k\xF6vetkez\u0151k szerint haladhatsz \xE1t :</p><p><code>for (k, v) in test1</code></p><h5 id="rev-forditott-sorrendben-torteno-atjaras" tabindex="-1"><a class="header-anchor" href="#rev-forditott-sorrendben-torteno-atjaras" aria-hidden="true">#</a> <code>.rev()</code> Ford\xEDtott sorrendben t\xF6rt\xE9n\u0151 \xE1tj\xE1r\xE1s</h5><p><code>for (k, v) in test4.rev()</code></p><h5 id="rendezes" tabindex="-1"><a class="header-anchor" href="#rendezes" aria-hidden="true">#</a> Rendez\xE9s</h5><p>A libmdbx kulcsok <a href="https://zh.wikipedia.org/wiki/%E5%AD%97%E5%85%B8%E5%BA%8F" target="_blank" rel="noopener noreferrer">sz\xF3t\xE1ri sorrendbe</a> vannak rendezve.</p><ul><li><p>El\u0151jel n\xE9lk\xFCli sz\xE1mok eset\xE9n</p><p>a legkisebbt\u0151l a legnagyobb fel\xE9 vannak rendezve, mivel az adatb\xE1zis-jelz\u0151k automatikusan hozz\xE1ad\xF3dnak (a <code>u32</code>/ <code>u64</code>/ <code>usize</code> a <code>INTEGERKEY</code>-hoz, a t\xF6bbi a <code>REVERSEKEY</code> -hez ad\xF3dik a g\xE9pi k\xF3dt\xF3l f\xFCgg\u0151en).</p></li><li><p>El\u0151jeles sz\xE1mok eset\xE9n</p><p>a sorrend: el\u0151sz\xF6r 0, majd az \xF6sszes pozit\xEDv sz\xE1m a legkisebbt\u0151l a legnagyobbig, majd az \xF6sszes negat\xEDv sz\xE1m a legkisebbt\u0151l a legnagyobbig.</p></li></ul><h3 id="intervallum-iteratorok" tabindex="-1"><a class="header-anchor" href="#intervallum-iteratorok" aria-hidden="true">#</a> Intervallum iter\xE1torok</h3><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Az adatb\xE1zis v\xE1ltoz\xF3 neve Env
  Test // Adatb\xE1zis teszt
}

fn main() -&gt; Result&lt;()&gt; {
  // A libmdbx verzi\xF3sz\xE1m\xE1nak kimenete
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // T\xF6bbsz\xE1l\xFA olvas\xE1s \xE9s \xEDr\xE1s
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
      sync_period : 65536, // 1/65536 m\xE1sodperc alatt
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
 MDBX // Az adatb\xE1zis v\xE1ltoz\xF3 neve Env
 Test // Adatb\xE1zis teszt
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
  MDBX // Az adatb\xE1zis v\xE1ltoz\xF3inak nevei ENV
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
  // Gyors \xEDr\xE1s
  w!(Test1.set [2, 3],[4, 5]);

  // Gyors olvas\xE1s
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

  // T\xF6bb m\u0171velet t\xF6bb adatb\xE1zison egyazon tranzakci\xF3ban
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

    // A tranzakci\xF3 a hat\xF3k\xF6r v\xE9g\xE9n ker\xFCl lek\xF6t\xE9sre.
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
</code></pre></div><h4 id="futtassa-a" tabindex="-1"><a class="header-anchor" href="#futtassa-a" aria-hidden="true">#</a> Futtassa a</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/range.mdb

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
</code></pre></div><h4 id="range-begin-end-intervallum-iteracio" tabindex="-1"><a class="header-anchor" href="#range-begin-end-intervallum-iteracio" aria-hidden="true">#</a> <code>.range(begin..end)</code> Intervallum Iter\xE1ci\xF3</h4><p>A sz\xE1mok eset\xE9ben az intervallum egy numerikus intervallum.</p><p>A bin\xE1ris \xE9rt\xE9kek eset\xE9ben ugyanez az intervallum konstru\xE1lhat\xF3, pl.</p><div class="language-text ext-text"><pre class="language-text"><code>let begin : &amp;[u8] = &amp;[1,1];
for (k,v) in test0.range(begin..=&amp;[2]) {}
</code></pre></div><p>Ha a <code>begin</code> nagyobb, mint a <code>end</code>, akkor visszafel\xE9 halad.</p><p>A <code>test1.range(5..2)</code> p\xE9ld\xE1ul a k\xF6vetkez\u0151t adja ki:</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Az adatb\xE1zis v\xE1ltoz\xF3 neve Env
  Test // Adatb\xE1zis teszt
}

fn main() -&gt; Result&lt;()&gt; {
  // A libmdbx verzi\xF3sz\xE1m\xE1nak kimenete
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // T\xF6bbsz\xE1l\xFA olvas\xE1s \xE9s \xEDr\xE1s
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
      sync_period : 65536, // 1/65536 m\xE1sodperc alatt
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
 MDBX // Az adatb\xE1zis v\xE1ltoz\xF3 neve Env
 Test // Adatb\xE1zis teszt
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
  MDBX // Az adatb\xE1zis v\xE1ltoz\xF3inak nevei ENV
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
  // Gyors \xEDr\xE1s
  w!(Test1.set [2, 3],[4, 5]);

  // Gyors olvas\xE1s
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

  // T\xF6bb m\u0171velet t\xF6bb adatb\xE1zison egyazon tranzakci\xF3ban
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

    // A tranzakci\xF3 a hat\xF3k\xF6r v\xE9g\xE9n ker\xFCl lek\xF6t\xE9sre.
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
</code></pre></div><p>Az intervallumos iter\xE1ci\xF3 nem t\xE1mogatott <a href="https://doc.rust-lang.org/std/ops/struct.RangeFull.html" target="_blank" rel="noopener noreferrer"><code>RangeFull</code></a> , azaz a <code>..</code>haszn\xE1lata nem t\xE1mogatott, k\xE9rj\xFCk, haszn\xE1lja helyette a fent eml\xEDtett <a href="#%E9%81%8D%E5%8E%86">traverz\xE1l\xE1st</a>.</p><h4 id="rev-range-invertalt-intervallumok" tabindex="-1"><a class="header-anchor" href="#rev-range-invertalt-intervallumok" aria-hidden="true">#</a> <code>.rev_range</code> Invert\xE1lt intervallumok</h4><p>Ha olyan invert\xE1lt intervallumot szeretne kapni, amely kisebb vagy egyenl\u0151 egy \xE9rt\xE9kkel, akkor a k\xF6vetkez\u0151 m\xF3don j\xE1rhat el</p><div class="language-text ext-text"><pre class="language-text"><code>test2.rev_range(2..)
</code></pre></div><p>A kimenet a k\xF6vetkez\u0151 lesz</p><div class="language-text ext-text"><pre class="language-text"><code>(2, 4)
(1, 5)
(0, 0)
</code></pre></div><p>A <code>begin</code> vagy a <code>end</code> k\xF6z\xFCl az egyiket nem szabad be\xE1ll\xEDtani az invert\xE1lt intervallumhoz; mert ha mindkett\u0151 be van \xE1ll\xEDtva, akkor a <code>range(end..begin)</code> haszn\xE1lat\xE1val mindig ugyanazt a hat\xE1st \xE9rheti el.</p><h3 id="adattipusok-testreszabasa" tabindex="-1"><a class="header-anchor" href="#adattipusok-testreszabasa" aria-hidden="true">#</a> Adatt\xEDpusok testreszab\xE1sa</h3><p>A dem\xF3 k\xF3d el\xE9rhet\u0151 a <a href="https://github.com/rmw-lib/mdbx-example/blob/master/01/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/01</a> oldalon.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Az adatb\xE1zis v\xE1ltoz\xF3 neve Env
  Test // Adatb\xE1zis teszt
}

fn main() -&gt; Result&lt;()&gt; {
  // A libmdbx verzi\xF3sz\xE1m\xE1nak kimenete
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // T\xF6bbsz\xE1l\xFA olvas\xE1s \xE9s \xEDr\xE1s
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
      sync_period : 65536, // 1/65536 m\xE1sodperc alatt
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
 MDBX // Az adatb\xE1zis v\xE1ltoz\xF3 neve Env
 Test // Adatb\xE1zis teszt
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
  MDBX // Az adatb\xE1zis v\xE1ltoz\xF3inak nevei ENV
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
  // Gyors \xEDr\xE1s
  w!(Test1.set [2, 3],[4, 5]);

  // Gyors olvas\xE1s
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

  // T\xF6bb m\u0171velet t\xF6bb adatb\xE1zison egyazon tranzakci\xF3ban
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

    // A tranzakci\xF3 a hat\xF3k\xF6r v\xE9g\xE9n ker\xFCl lek\xF6t\xE9sre.
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
</code></pre></div><p>A kimenet a k\xF6vetkez\u0151</p><div class="language-text ext-text"><pre class="language-text"><code>Some(City { name: &quot;BeiJing&quot;, lnglat: (11640, 3990) })
</code></pre></div><p>Az egy\xE9ni t\xEDpus p\xE9ld\xE1ban a <a href="https://github.com/koute/speedy" target="_blank" rel="noopener noreferrer"><code>speedy</code></a> a sorsz\xE1moz\xE1s elv\xE9gz\xE9s\xE9hez <a href="https://github.com/djkoloski/rust_serialization_benchmark" target="_blank" rel="noopener noreferrer">( <code>speedy</code> teljes\xEDtm\xE9ny\xE9rt\xE9kel\xE9s</a> ) <a href="https://github.com/djkoloski/rust_serialization_benchmark" target="_blank" rel="noopener noreferrer">.</a></p><p>Egy\xE9ni t\xEDpus implement\xE1ci\xF3 <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.FromMdbx.html" target="_blank" rel="noopener noreferrer"><code>FromMdbx</code></a> \xE9s <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.ToAsRef.html" target="_blank" rel="noopener noreferrer"><code>ToAsRef</code></a> ezut\xE1n a <code>mdbx</code> c\xEDmen t\xE1rolhat\xF3.</p><p>Ha egy adott szerializ\xE1ci\xF3s k\xF6nyvt\xE1rat haszn\xE1l, akkor az attrib\xFAtum <a href="https://blog.logrocket.com/macros-in-rust-a-tutorial-with-examples/" target="_blank" rel="noopener noreferrer">makr\xF3kat</a> is testre szabhatja a folyamat egyszer\u0171s\xEDt\xE9se \xE9rdek\xE9ben.</p><h4 id="egyeni-tipusok-egyszerusitese-attributummakrokkal" tabindex="-1"><a class="header-anchor" href="#egyeni-tipusok-egyszerusitese-attributummakrokkal" aria-hidden="true">#</a> Egy\xE9ni t\xEDpusok egyszer\u0171s\xEDt\xE9se attrib\xFAtummakr\xF3kkal</h4><p>Egy attrib\xFAtum makr\xF3 implement\xE1l\xE1sa olyan egyszer\u0171, mint a <a href="https://crates.io/crates/mdbx_speedy" target="_blank" rel="noopener noreferrer"><code>mdbx_speedy</code></a> Az attrib\xFAtum makr\xF3 k\xF3dja a k\xF6vetkez\u0151 :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Az adatb\xE1zis v\xE1ltoz\xF3 neve Env
  Test // Adatb\xE1zis teszt
}

fn main() -&gt; Result&lt;()&gt; {
  // A libmdbx verzi\xF3sz\xE1m\xE1nak kimenete
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // T\xF6bbsz\xE1l\xFA olvas\xE1s \xE9s \xEDr\xE1s
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
      sync_period : 65536, // 1/65536 m\xE1sodperc alatt
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
 MDBX // Az adatb\xE1zis v\xE1ltoz\xF3 neve Env
 Test // Adatb\xE1zis teszt
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
  MDBX // Az adatb\xE1zis v\xE1ltoz\xF3inak nevei ENV
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
  // Gyors \xEDr\xE1s
  w!(Test1.set [2, 3],[4, 5]);

  // Gyors olvas\xE1s
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

  // T\xF6bb m\u0171velet t\xF6bb adatb\xE1zison egyazon tranzakci\xF3ban
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

    // A tranzakci\xF3 a hat\xF3k\xF6r v\xE9g\xE9n ker\xFCl lek\xF6t\xE9sre.
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
</code></pre></div><p>Kezdje a <code>cargo add mdbx-speedy</code>c\xEDmmel a saj\xE1t projektj\xE9ben, majd gyorsan testre szabhatja a t\xEDpust (l\xE1sd a <a href="https://github.com/rmw-lib/mdbx-example/blob/master/02/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/02</a> dem\xF3k\xF3dot).</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Az adatb\xE1zis v\xE1ltoz\xF3 neve Env
  Test // Adatb\xE1zis teszt
}

fn main() -&gt; Result&lt;()&gt; {
  // A libmdbx verzi\xF3sz\xE1m\xE1nak kimenete
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // T\xF6bbsz\xE1l\xFA olvas\xE1s \xE9s \xEDr\xE1s
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
      sync_period : 65536, // 1/65536 m\xE1sodperc alatt
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
 MDBX // Az adatb\xE1zis v\xE1ltoz\xF3 neve Env
 Test // Adatb\xE1zis teszt
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
  MDBX // Az adatb\xE1zis v\xE1ltoz\xF3inak nevei ENV
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
  // Gyors \xEDr\xE1s
  w!(Test1.set [2, 3],[4, 5]);

  // Gyors olvas\xE1s
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

  // T\xF6bb m\u0171velet t\xF6bb adatb\xE1zison egyazon tranzakci\xF3ban
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

    // A tranzakci\xF3 a hat\xF3k\xF6r v\xE9g\xE9n ker\xFCl lek\xF6t\xE9sre.
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
</code></pre></div><p>Persze m\xE9g mindig bosszant\xF3 a <code>#[derive(PartialEq, Debug, Readable, Writable, MdbxSpeedy)]</code> t\xF6bbsz\xF6ri meg\xEDr\xE1sa, ez\xE9rt haszn\xE1lhatod a <a href="https://docs.rs/derive-alias/0.1.0/derive_alias" target="_blank" rel="noopener noreferrer"><code>derive_alias</code></a> a k\xF3d tov\xE1bbi egyszer\u0171s\xEDt\xE9se \xE9rdek\xE9ben.</p><h2 id="megjegyzes-a" tabindex="-1"><a class="header-anchor" href="#megjegyzes-a" aria-hidden="true">#</a> Megjegyz\xE9s a</h2><h3 id="a-kulcs-hossza" tabindex="-1"><a class="header-anchor" href="#a-kulcs-hossza" aria-hidden="true">#</a> A kulcs hossza</h3><ul><li>Minimum 0, maximum \u2248 \xBD lapm\xE9ret (alap\xE9rtelmezett 4K lapkulcs maxim\xE1lis m\xE9rete 2022 b\xE1jt), az adatb\xE1zis inicializ\xE1l\xE1sakor \xE1ll\xEDthat\xF3 be <code>pagesize</code> legfeljebb <code>65536</code>lehet, \xE9s 2 hatv\xE1ny\xE1nak kell lennie.</li></ul><h2 id="labjegyzetek" tabindex="-1"><a class="header-anchor" href="#labjegyzetek" aria-hidden="true">#</a> L\xE1bjegyzetek</h2><p>Az LMDB-r\u0151l az MDBX-re val\xF3 \xE1tt\xE9r\xE9s el\u0151nyeire hivatkoznak.</p><blockquote><p>Az Erigon egy BoltDB adatb\xE1zis h\xE1tt\xE9rrendszerrel kezdte, majd hozz\xE1adta a BadgerDB t\xE1mogat\xE1s\xE1t, \xE9s v\xE9g\xFCl teljesen \xE1tt\xE9rt az LMDB-re. egy bizonyos ponton olyan stabilit\xE1si probl\xE9m\xE1kba \xFCtk\xF6zt\xFCnk, amelyeket az LMDB haszn\xE1lata okozott, \xE9s amelyekre a k\xE9sz\xEDt\u0151k nem sz\xE1m\xEDtottak. Az\xF3ta megn\xE9zt\xFCk az LMDB egy j\xF3l t\xE1mogatott sz\xE1rmaz\xE9k\xE1t, az MDBX-et, \xE9s rem\xE9lj\xFCk, hogy kihaszn\xE1lhatjuk a stabilit\xE1si javul\xE1saikat, \xE9s a j\xF6v\u0151ben potenci\xE1lisan t\xF6bbet fogunk <a href="http://xn--egyttmkdni-kcb1e22g.Az" target="_blank" rel="noopener noreferrer">egy\xFCttm\u0171k\xF6dni.Az</a> MDBX integr\xE1ci\xF3ja mostanra befejez\u0151d\xF6tt, \xE9s itt az ideje a tov\xE1bbi tesztel\xE9snek \xE9s dokument\xE1ci\xF3nak.</p><p>Az LMDB-r\u0151l az MDBX-re val\xF3 \xE1tt\xE9r\xE9s el\u0151nyei.</p><ol><li><p>Az adatb\xE1zis-f\xE1jlok &quot;t\xE9r (geometria)&quot; n\xF6veked\xE9se megfelel\u0151en m\u0171k\xF6dik. Ez fontos, k\xFCl\xF6n\xF6sen Windows alatt. Az LMDB-ben egyszer el\u0151re meg kell adni a mem\xF3riat\xE9rk\xE9p m\xE9ret\xE9t (jelenleg alap\xE9rtelmez\xE9s szerint 2 TB-ot haszn\xE1lunk), \xE9s ha az adatb\xE1zis f\xE1jl t\xFAln\u0151 ezen a hat\xE1ron, a folyamatot \xFAjra kell ind\xEDtani. Windowson a mem\xF3riat\xE9rk\xE9p m\xE9ret\xE9nek 2 TB-ra val\xF3 be\xE1ll\xEDt\xE1sa az adatb\xE1zisf\xE1jlt eleve 2 TB-os m\xE9ret\u0171v\xE9 tenn\xE9, ami nem t\xFAl k\xE9nyelmes. Az MDBX-ben a mem\xF3riat\xE9rk\xE9p m\xE9rete 2 GB-os l\xE9p\xE9sekben n\xF6vekszik. Ez id\u0151nk\xE9nti \xFAjratelep\xEDt\xE9st jelent, de jobb felhaszn\xE1l\xF3i \xE9lm\xE9nyt eredm\xE9nyez.</p></li><li><p>Az MDBX szigor\xFAbban ellen\u0151rzi a tranzakci\xF3-feldolgoz\xE1s egyidej\u0171 haszn\xE1lat\xE1t \xE9s az egyazon v\xE9grehajt\xE1si sz\xE1lon bel\xFCli olvas\xE1si \xE9s \xEDr\xE1si tranzakci\xF3k \xE1tfed\xE9s\xE9t. Ez lehet\u0151v\xE9 teszi sz\xE1munkra, hogy \xE9szrevegy\xFCnk n\xE9h\xE1ny nem nyilv\xE1nval\xF3 hib\xE1t, \xE9s kisz\xE1m\xEDthat\xF3bb\xE1 teszi a viselked\xE9st.<br> Az MDBX t\xF6bb mint 5 \xE9v alatt (mi\xF3ta lev\xE1lasztott\xE1k az LMDB-r\u0151l) nagysz\xE1m\xFA biztons\xE1gi jav\xEDt\xE1st \xE9s heisenbug jav\xEDt\xE1st halmozott fel, amelyek tudom\xE1sunk szerint m\xE9g mindig l\xE9teznek az LMDB-ben. Ezek k\xF6z\xFCl n\xE9h\xE1nyat a tesztel\xE9s\xFCnk sor\xE1n fedezt\xFCnk fel, \xE9s az MDBX karbantart\xF3i komolyan vett\xE9k \xE9s azonnal jav\xEDtott\xE1k \u0151ket.</p></li><li><p>Amikor az adatokat folyamatosan m\xF3dos\xEDt\xF3 adatb\xE1zisokr\xF3l van sz\xF3, akkor azok meglehet\u0151sen sok visszanyerhet\u0151 helyet hoznak l\xE9tre (az LMDB terminol\xF3gi\xE1j\xE1ban &quot;freelist&quot;-nek is nevezik). Az LMDB-t jav\xEDtanunk kellett, hogy kijav\xEDtsuk a legs\xFAlyosabb hi\xE1nyoss\xE1gokat a visszanyerhet\u0151 hely kezel\xE9s\xE9ben <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide" target="_blank" rel="noopener noreferrer">(elemz\xE9s</a> ). Az MDBX <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide%EF%BC%89%E3%80%82MDBX%E5%AF%B9%E5%8F%AF%E5%9B%9E%E6%94%B6%E7%A9%BA%E9%97%B4%E7%9A%84%E6%9C%89%E6%95%88%E5%A4%84%E7%90%86%E8%BF%9B%E8%A1%8C%E4%BA%86%E7%89%B9%E5%88%AB%E7%9A%84%E5%85%B3%E6%B3%A8%EF%BC%8C%E5%88%B0%E7%9B%AE%E5%89%8D%E4%B8%BA%E6%AD%A2%EF%BC%8C%E8%BF%98%E4%B8%8D%E9%9C%80%E8%A6%81%E6%89%93%E8%A1%A5%E4%B8%81%E3%80%82" target="_blank" rel="noopener noreferrer">k\xFCl\xF6n\xF6s figyelmet</a> ford\xEDtott a <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide%EF%BC%89%E3%80%82MDBX%E5%AF%B9%E5%8F%AF%E5%9B%9E%E6%94%B6%E7%A9%BA%E9%97%B4%E7%9A%84%E6%9C%89%E6%95%88%E5%A4%84%E7%90%86%E8%BF%9B%E8%A1%8C%E4%BA%86%E7%89%B9%E5%88%AB%E7%9A%84%E5%85%B3%E6%B3%A8%EF%BC%8C%E5%88%B0%E7%9B%AE%E5%89%8D%E4%B8%BA%E6%AD%A2%EF%BC%8C%E8%BF%98%E4%B8%8D%E9%9C%80%E8%A6%81%E6%89%93%E8%A1%A5%E4%B8%81%E3%80%82" target="_blank" rel="noopener noreferrer">visszanyerhet\u0151 hely hat\xE9kony kezel\xE9s\xE9re, \xE9s eddig nem volt sz\xFCks\xE9g jav\xEDt\xE1sra</a>.</p></li><li><p>Tesztjeink alapj\xE1n az MDBX valamivel jobban teljes\xEDtett a munkaterhel\xE9seken.</p></li><li><p>Az MDBX t\xF6bb bels\u0151 telemetriai adatot tesz k\xF6zz\xE9 - t\xF6bb m\xE9r\u0151sz\xE1mot arr\xF3l, hogy mi t\xF6rt\xE9nik az adatb\xE1zisban. \xC9s ezek az adatok a Grafan\xE1ban vannak - hogy jobb d\xF6nt\xE9seket hozhassunk az alkalmaz\xE1sok tervez\xE9s\xE9vel kapcsolatban. P\xE9ld\xE1ul az MDBX-re val\xF3 teljes \xE1t\xE1ll\xE1s ut\xE1n (az LMDB t\xE1mogat\xE1s\xE1nak megsz\xFCntet\xE9se) a &quot;f\xE9lig teljes tranzakci\xF3 \xE1tad\xE1sa&quot; politik\xE1t fogjuk bevezetni, hogy elker\xFClj\xFCk a t\xFAlcsordul\xF3/nem t\xFAlcsordul\xF3 lemezkapcsolatokat. Ez tov\xE1bb egyszer\u0171s\xEDti a k\xF3dunkat an\xE9lk\xFCl, hogy befoly\xE1soln\xE1 a teljes\xEDtm\xE9nyt.</p></li><li><p>Az MDBX t\xE1mogatja az &quot;Exclusive open&quot; m\xF3dot - ezt haszn\xE1ljuk az adatb\xE1zis-migr\xE1ci\xF3kn\xE1l, hogy megakad\xE1lyozzuk, hogy m\xE1s olvas\xF3k hozz\xE1f\xE9rjenek az adatb\xE1zishoz a migr\xE1ci\xF3s folyamat sor\xE1n.</p></li></ol></blockquote><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p><a href="https://github.com/ledgerwatch/erigon/wiki/Criteria-for-transitioning-from-Alpha-to-Beta#switch-from-lmdb-to-mdbx" target="_blank" rel="noopener noreferrer">Az Erigon (a k\xF6vetkez\u0151 gener\xE1ci\xF3s Ethernet kliens) nemr\xE9g v\xE1ltott az LMDB-r\u0151l MDBX-re.</a> <a href="#fnref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,160);function st(rt,lt){const n=u("RouterLink");return l(),o(i,null,[g,b,m,h,t("nav",k,[t("ul",null,[t("li",null,[a(n,{to:"#idezetek"},{default:s(()=>[c]),_:1})]),t("li",null,[a(n,{to:"#mi-az-a-libmdbx"},{default:s(()=>[v]),_:1})]),t("li",null,[a(n,{to:"#tutorials"},{default:s(()=>[_]),_:1}),t("ul",null,[t("li",null,[a(n,{to:"#a-pelda-futtatasa"},{default:s(()=>[z]),_:1})]),t("li",null,[a(n,{to:"#pelda-1-a-set-key-val-es-az-olvasas-irasa-get-key"},{default:s(()=>[f]),_:1}),t("ul",null,[t("li",null,[a(n,{to:"#kod"},{default:s(()=>[x]),_:1})]),t("li",null,[a(n,{to:"#futtassa-a-kimenetet"},{default:s(()=>[q]),_:1})]),t("li",null,[a(n,{to:"#kodleiras"},{default:s(()=>[y]),_:1}),t("ul",null,[t("li",null,[a(n,{to:"#env-rw-az-adatbazis-definialasa"},{default:s(()=>[E]),_:1})]),t("li",null,[a(n,{to:"#makro-bovites"},{default:s(()=>[D]),_:1})]),t("li",null,[a(n,{to:"#anyhow-es-lazy-static"},{default:s(()=>[w]),_:1})]),t("li",null,[a(n,{to:"#a-makro-mdbx"},{default:s(()=>[B]),_:1})]),t("li",null,[a(n,{to:"#szalak-es-tranzakciok"},{default:s(()=>[T]),_:1})]),t("li",null,[a(n,{to:"#binaris-adatok-olvasasa-es-irasa"},{default:s(()=>[A]),_:1})])])])])]),t("li",null,[a(n,{to:"#pelda-2-adattipusok-adatbazis-jelzok-torles-atjaras"},{default:s(()=>[M]),_:1}),t("ul",null,[t("li",null,[a(n,{to:"#kod-1"},{default:s(()=>[N]),_:1})]),t("li",null,[a(n,{to:"#futtassa-a-kimenetet-1"},{default:s(()=>[S]),_:1})]),t("li",null,[a(n,{to:"#gyors-olvasas-es-iras"},{default:s(()=>[j]),_:1})]),t("li",null,[a(n,{to:"#adattipusok"},{default:s(()=>[X]),_:1}),t("ul",null,[t("li",null,[a(n,{to:"#elore-beallitott-adattipusok"},{default:s(()=>[C]),_:1})])])]),t("li",null,[a(n,{to:"#adatbazis-jelzok"},{default:s(()=>[R]),_:1}),t("ul",null,[t("li",null,[a(n,{to:"#dupsort-egy-kulcs-egynel-tobb-erteknek-felel-meg"},{default:s(()=>[O]),_:1})]),t("li",null,[a(n,{to:"#dup-key-iterator-amely-visszaadja-az-osszes-erteket-amely-egy-kulcsnak-megfelel"},{default:s(()=>[V]),_:1})]),t("li",null,[a(n,{to:"#alapertelmezett-automatikusan-csatolt-adatbazis-jelzok"},{default:s(()=>[U]),_:1})])])]),t("li",null,[a(n,{to:"#adatok-torlese"},{default:s(()=>[I]),_:1}),t("ul",null,[t("li",null,[a(n,{to:"#del-key-kulcs-torlese"},{default:s(()=>[L]),_:1})]),t("li",null,[a(n,{to:"#del-val-key-val-pontos-egyezes-torlese"},{default:s(()=>[F]),_:1})])])]),t("li",null,[a(n,{to:"#traversal"},{default:s(()=>[P]),_:1}),t("ul",null,[t("li",null,[a(n,{to:"#szekvencialis-atjaras"},{default:s(()=>[$]),_:1})]),t("li",null,[a(n,{to:"#rev-forditott-sorrendben-torteno-atjaras"},{default:s(()=>[G]),_:1})]),t("li",null,[a(n,{to:"#rendezes"},{default:s(()=>[Y]),_:1})])])])])]),t("li",null,[a(n,{to:"#intervallum-iteratorok"},{default:s(()=>[H]),_:1}),t("ul",null,[t("li",null,[a(n,{to:"#futtassa-a"},{default:s(()=>[K]),_:1})]),t("li",null,[a(n,{to:"#range-begin-end-intervallum-iteracio"},{default:s(()=>[W]),_:1})]),t("li",null,[a(n,{to:"#rev-range-invertalt-intervallumok"},{default:s(()=>[J]),_:1})])])]),t("li",null,[a(n,{to:"#adattipusok-testreszabasa"},{default:s(()=>[Q]),_:1}),t("ul",null,[t("li",null,[a(n,{to:"#egyeni-tipusok-egyszerusitese-attributummakrokkal"},{default:s(()=>[Z]),_:1})])])])])]),t("li",null,[a(n,{to:"#megjegyzes-a"},{default:s(()=>[tt]),_:1}),t("ul",null,[t("li",null,[a(n,{to:"#a-kulcs-hossza"},{default:s(()=>[et]),_:1})])])]),t("li",null,[a(n,{to:"#labjegyzetek"},{default:s(()=>[nt]),_:1})])])]),at],64)}var dt=r(p,[["render",st],["__file","2021-12-21-mdbx.html.vue"]]);export{dt as default};
