import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as l,a as t,b as a,w as s,F as o,d as e,e as u,r as d}from"./app.2a6a1bd2.js";const m={},p=t("h1",{id:"rooste-pakett-libmdbx-jaoks",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#rooste-pakett-libmdbx-jaoks","aria-hidden":"true"},"#"),e(" Rooste pakett libmdbx jaoks")],-1),b=t("p",null,[e("Andmebaasi "),t("a",{href:"https://github.com/erthink/libmdbx",target:"_blank",rel:"noopener noreferrer"},"libmdbx"),e(),t("code",null,"rust"),e(" \xFCmbris.")],-1),g=t("hr",null,null,-1),h=t("p",null,"Kataloog :",-1),k={class:"table-of-contents"},_=e("Tsitaadid"),v=e("Mis on libmdbx?"),c=e("Tutorials"),f=e("Kuidas k\xE4ivitada n\xE4ide"),x=e("N\xE4ide 1 : Kirjutamine set(key,val) ja lugemine .get(key)"),q=e("Kood"),y=e("K\xE4ivita v\xE4ljund"),j=e("Koodikirjeldus"),D=e("env_rw! Andmebaasi m\xE4\xE4ratlemine"),E=e("Makro laienemine"),w=e("anyhow ja lazy_static"),T=e("Makro mdbx!"),B=e("Niidid ja tehingud"),M=e("Binaarsete andmete lugemine ja kirjutamine"),N=e("N\xE4ide 2: Andmet\xFC\xFCbid, andmebaasi lipud, kustutamine, l\xE4bimine"),S=e("Kood"),X=e("K\xE4ivita v\xE4ljund"),A=e("Kiire lugemine ja kirjutamine"),R=e("Andmet\xFC\xFCbid"),O=e("Eelseadistatud andmet\xFC\xFCbid"),V=e("Andmebaasi lipud"),C=e("DUPSORT : \xFCks v\xF5ti vastab rohkem kui \xFChele v\xE4\xE4rtusele"),U=e(".dup(key) iteraator, mis tagastab k\xF5ik v\xF5tmele vastavad v\xE4\xE4rtused"),I=e("Vaikimisi automaatselt lisatud andmebaasi lipud"),L=e("Andmete kustutamine"),P=e(".del(key) Klahvi kustutamine"),F=e(".del_val(key,val) T\xE4pse vaste kustutamine"),K=e("Traversaal"),z=e("j\xE4rjestikune l\xE4bimine"),$=e(".rev() P\xF6\xF6ratud j\xE4rjestuse l\xE4bimine"),Y=e("Sorteerimine"),G=e("Intervall-iteraatorid"),H=e("K\xE4ivita v\xE4ljund"),W=e(".range(begin..end) Intervalli intervall Iteratsioon"),J=e(".rev_range \xDCmberp\xF6\xF6ratud intervallid"),Q=e("Andmet\xFC\xFCpide kohandamine"),Z=e("Kohandatud t\xFC\xFCpide lihtsustamine atribuutide makrode abil"),tt=e("M\xE4rkus j\xE4rgmiste ainete kasutamise kohta"),et=e("V\xF5tme pikkus"),nt=e("Joonealused m\xE4rkused"),at=u(`<hr><h2 id="tsitaadid" tabindex="-1"><a class="header-anchor" href="#tsitaadid" aria-hidden="true">#</a> Tsitaadid</h2><p>Kirjutades <a href="https://rmw.link" target="_blank" rel="noopener noreferrer">&#39;rmw.link</a> &#39;, tundsin, et vajan sisseehitatud andmebaasi.</p><p>Kuna salvestamine, lugemine ja kirjutamine on sageli seotud v\xF5rgu l\xE4bilaskev\xF5imega, oli <code>sqlite3</code> j\xF5udlusprobleemide t\xF5ttu liiga arenenud.</p><p>Seega oli madalama taseme v\xF5ti-v\xE4\xE4rtusandmebaas sobivam <a href="https://discourse.world/h/2020/06/05/Shine-and-poverty-key-value-database-LMDB-in-applications-for-iOS" target="_blank" rel="noopener noreferrer">(lmdb on 10 korda kiirem kui sqlite</a> ) <a href="https://discourse.world/h/2020/06/05/Shine-and-poverty-key-value-database-LMDB-in-applications-for-iOS" target="_blank" rel="noopener noreferrer">.</a></p><p><img src="//irmw.gumlet.io/yxZV8x.jpg" alt=""></p><p>L\xF5puks otsustasin ma valida maagilise versiooni <code>lmdb</code> - <code>mdbx</code>.</p><p>Praegu <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">ei toeta</a> olemasolev <code>rust</code> pakett <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">mdbx-rs (mdbx-sys)</a> aadressilt <code>mdbx</code> <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">windows&#39;i</a>, seega v\xF5tsin enda peale, et pakendada windows&#39;i toetusega versioon.</p><p>Toetus kohandatud roostet\xFC\xFCpide salvestamiseks. Toetab mitmikeelset juurdep\xE4\xE4su.</p><p>Andmebaasi saab defineerida moodulis, kasutades <code>lazy_static</code> ja seej\xE4rel lihtsalt kasutusele v\xF5tta ja kasutada midagi sellist nagu :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
</code></pre></div><h2 id="mis-on-libmdbx" tabindex="-1"><a class="header-anchor" href="#mis-on-libmdbx" aria-hidden="true">#</a> Mis on libmdbx?</h2><p><a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">mdbx</a> on vene <a href="https://vk.com/erthink" target="_blank" rel="noopener noreferrer">\u041B\u0435\u043E\u043D\u0438\u0434 \u042E\u0440\u044C\u0435\u0432 (Leonid Jurjev</a> ) lmdb-l p\xF5hinev sekundaarne andmebaas.</p><p><a href="https://en.wikipedia.org/wiki/Lightning_Memory-Mapped_Database" target="_blank" rel="noopener noreferrer">lmdb</a> on \xFClikiire sisseehitatud v\xF5ti-v\xE4\xE4rtusandmebaas.</p><p>T\xE4istekstiline otsingumootor <a href="https://docs.meilisearch.com/reference/under_the_hood/storage.html#measured-disk-usage" target="_blank" rel="noopener noreferrer">MeiliSearch</a> p\xF5hineb lmdb-l.</p><p><a href="https://docs.nvidia.com/deeplearning/dali/user-guide/docs/examples/general/data_loading/dataloading_lmdb.html" target="_blank" rel="noopener noreferrer">S\xFCgava \xF5ppimise raamistik caffe kasutab samuti andmehoidlana lmdb-d</a>.</p><p><a href="https://github.com/erthink/libmdbx#added-features" target="_blank" rel="noopener noreferrer">mdbx on 30% kiirem kui lmdb varjatud j\xF5udlustesti ioarena v\xF5rdlusuuringus.</a></p><p><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-1.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-3.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-4.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-5.png" alt=""></p><p>Samal ajal <a href="https://github.com/erthink/libmdbx#improvements-beyond-lmdb" target="_blank" rel="noopener noreferrer">parandab</a> mdbx <a href="https://github.com/erthink/libmdbx#improvements-beyond-lmdb" target="_blank" rel="noopener noreferrer">paljusid</a> lmdb <a href="https://github.com/erthink/libmdbx#improvements-beyond-lmdb" target="_blank" rel="noopener noreferrer">puudusi</a>, nii et Erigon (j\xE4rgmise p\xF5lvkonna ethereumi klient) l\xE4ks hiljuti LMDB-lt \xFCle MDBX-ile <sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> <a href="https://github.com/erthink/libmdbx#improvements-beyond-lmdb" target="_blank" rel="noopener noreferrer">.</a></p><h2 id="tutorials" tabindex="-1"><a class="header-anchor" href="#tutorials" aria-hidden="true">#</a> Tutorials</h2><h3 id="kuidas-kaivitada-naide" tabindex="-1"><a class="header-anchor" href="#kuidas-kaivitada-naide" aria-hidden="true">#</a> Kuidas k\xE4ivitada n\xE4ide</h3><p>Kloonige k\xF5igepealt koodibaas <code>git clone git@github.com:rmw-lib/mdbx.git --depth=1 &amp;&amp; cd mdbx</code></p><p>Seej\xE4rel k\xE4ivitage <code>cargo run --example 01</code> ja see k\xE4ivitub <code>examples/01.rs</code></p><p>Kui tegemist on teie enda projektiga, siis k\xE4ivitage see esmalt :</p><div class="language-bash ext-sh"><pre class="language-bash"><code>cargo install cargo-edit
cargo add mdbx lazy_static ctor paste
</code></pre></div><h3 id="naide-1-kirjutamine-set-key-val-ja-lugemine-get-key" tabindex="-1"><a class="header-anchor" href="#naide-1-kirjutamine-set-key-val-ja-lugemine-get-key" aria-hidden="true">#</a> N\xE4ide 1 : Kirjutamine <code>set(key,val)</code> ja lugemine <code>.get(key)</code></h3><p>Vaatame lihtsat <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/01.rs" target="_blank" rel="noopener noreferrer">n\xE4idet/01.rs</a></p><h4 id="kood" tabindex="-1"><a class="header-anchor" href="#kood" aria-hidden="true">#</a> Kood</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Andmebaasi muutuja nimi Env
  Test // Andmebaasi test
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xE4ljastada libmdbx&#39;i versiooni number
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Mitmesuunaline lugemine ja kirjutamine
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
</code></pre></div><h4 id="kaivita-valjund" tabindex="-1"><a class="header-anchor" href="#kaivita-valjund" aria-hidden="true">#</a> K\xE4ivita v\xE4ljund</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/01.mdb
mdbx version https://github.com/erthink/libmdbx/releases/tag/v0.11.2
test1 get Ok(Some(Bin([6])))
[6]
</code></pre></div><h4 id="koodikirjeldus" tabindex="-1"><a class="header-anchor" href="#koodikirjeldus" aria-hidden="true">#</a> Koodikirjeldus</h4><h5 id="env-rw-andmebaasi-maaratlemine" tabindex="-1"><a class="header-anchor" href="#env-rw-andmebaasi-maaratlemine" aria-hidden="true">#</a> <code>env_rw!</code> Andmebaasi m\xE4\xE4ratlemine</h5><p>Kood algab makroga env_rw, millel on 4 parameetrit.</p><ol><li><p>Andmebaasi keskkonna muutuja nimi</p></li><li><p>Tagastab objekti <a href="https://docs.rs/mdbx/latest/src/mdbx/env.rs.html#27-35" target="_blank" rel="noopener noreferrer">mdbx:: env:: Config</a>.</p></li></ol><p>Me kasutame vaikimisi konfiguratsiooni, kuna <code>Env</code> rakendab <code>From&lt;Into&lt;PathBuf&gt;&gt;</code>, seega piisab andmebaasi teekonnast <code>into()</code> ja vaikimisi konfiguratsioon on j\xE4rgmine.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
MDBX // Andmebaasi muutuja nimi Env
Test // Andmebaasi test
}

fn main() -&gt; Result&lt;()&gt; {
// V\xE4ljastada libmdbx&#39;i versiooni number
unsafe {
  println!(
    &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
    mdbx_version.major, mdbx_version.minor, mdbx_version.release
  );
}

// Mitmesuunaline lugemine ja kirjutamine
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
    sync_period : 65536, // 1/65536 sekundi jooksul
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
</code></pre></div><p><code>max_db</code> Seda seadistust saab nullida iga kord, <a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">kui</a> andmebaas avatakse, kuid selle liigne seadistamine m\xF5jutab j\xF5udlust, seadistage see lihtsalt vastavalt vajadusele.</p><p>Teiste parameetrite t\xE4henduse kohta vaata <a href="https://erthink.github.io/libmdbx/group__c__opening.html#ga9138119a904355d245777c4119534061" target="_blank" rel="noopener noreferrer">libmdbx dokumentatsiooni</a>.</p><ol start="3"><li><p>Andmebaasi lugemistehingu makro nimi, vaikimisi v\xE4\xE4rtus on <code>r</code></p></li><li><p>Andmebaasi kirjutamistehingu makro nimi, vaikimisi v\xE4\xE4rtus on <code>w</code></p></li></ol><p>Parameetrid 3 ja 4 v\xF5ib vaikev\xE4\xE4rtuste kasutamiseks \xE4ra j\xE4tta.</p><h5 id="makro-laienemine" tabindex="-1"><a class="header-anchor" href="#makro-laienemine" aria-hidden="true">#</a> Makro laienemine</h5><p>Kui soovite n\xE4ha, mida see makromaagia teeb, saate selle laiendamiseks kasutada makrot <code>cargo expand --example 01</code>, mis tuleb k\xF5igepealt paigaldada. <code>cargo install cargo-expand</code></p><p>Allpool on esitatud ekraanipilt laiendatud koodist.</p><p><img src="//irmw.gumlet.io/PDzEtT.png" alt="PDzEtT"></p><h5 id="anyhow-ja-lazy-static" tabindex="-1"><a class="header-anchor" href="#anyhow-ja-lazy-static" aria-hidden="true">#</a> anyhow ja lazy_static</h5><p>Laiendatud ekraanipildilt n\xE4ete, et kasutatakse <code>lazy_static</code> ja <code>anyhow</code>.</p><p><a href="https://rustmagazine.github.io/rust_magazine_2021/chapter_2/rust_error_handle.html#thiserror--anyhow" target="_blank" rel="noopener noreferrer">igatahes</a> on veak\xE4itlusraamatukogu rooste jaoks.</p><p><a href="https://juejin.cn/post/7007336922817232927" target="_blank" rel="noopener noreferrer">lazy_static</a> on staatiline muutuja, mille initsialiseerimine on hilinenud <a href="https://juejin.cn/post/7007336922817232927" target="_blank" rel="noopener noreferrer">.</a></p><p>Need kaks raamatukogu on v\xE4ga levinud ja ma ei hakka neid k\xE4sitlema.</p><h5 id="makro-mdbx" tabindex="-1"><a class="header-anchor" href="#makro-mdbx" aria-hidden="true">#</a> Makro mdbx!</h5><p><a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html" target="_blank" rel="noopener noreferrer"><code>mdbx!</code></a> on <a href="https://mp.weixin.qq.com/s/YT_HNFDCQ_IyocvBkRNJnA" target="_blank" rel="noopener noreferrer">protseduuride makro</a>.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Andmebaasi muutuja nimi Env
  Test // Andmebaasi test
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xE4ljastada libmdbx&#39;i versiooni number
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Mitmesuunaline lugemine ja kirjutamine
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
      sync_period : 65536, // 1/65536 sekundi jooksul
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
 MDBX // Andmebaasi muutuja nimi Env
 Test // Andmebaasi test
}
</code></pre></div><p>Esimene rida on andmebaasi keskkonna muutuja nimi</p><p>Teine rida on andmebaasi nimi</p><p>Andmebaase v\xF5ib olla rohkem kui \xFCks, \xFCks rida iga andmebaasi jaoks.</p><h5 id="niidid-ja-tehingud" tabindex="-1"><a class="header-anchor" href="#niidid-ja-tehingud" aria-hidden="true">#</a> Niidid ja tehingud</h5><p>\xDClaltoodud kood demonstreerib mitmikeerulist lugemist ja kirjutamist.</p><p>Oluline on m\xE4rkida, et <strong>\xFChes l\xF5ngas</strong> v\xF5ib korraga <strong>olla ainult \xFCks tehing, kui l\xF5ngas on avatud rohkem kui \xFCks tehing, kukub programm kokku</strong>.</p><p>Tehing pannakse paika kohaldamisala l\xF5pus.</p><h5 id="binaarsete-andmete-lugemine-ja-kirjutamine" tabindex="-1"><a class="header-anchor" href="#binaarsete-andmete-lugemine-ja-kirjutamine" aria-hidden="true">#</a> Binaarsete andmete lugemine ja kirjutamine</h5><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Andmebaasi muutuja nimi Env
  Test // Andmebaasi test
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xE4ljastada libmdbx&#39;i versiooni number
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Mitmesuunaline lugemine ja kirjutamine
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
      sync_period : 65536, // 1/65536 sekundi jooksul
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
 MDBX // Andmebaasi muutuja nimi Env
 Test // Andmebaasi test
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
</code></pre></div><p><code>set</code> on kirjutamine, <code>get</code> on lugemine ja iga objekt, mis rakendab <a href="https://doc.rust-lang.org/std/convert/trait.AsRef.html" target="_blank" rel="noopener noreferrer"><code>AsRef&lt;[u8]&gt;</code></a> objekti saab andmebaasi kirjutada.</p><p><code>get</code> V\xE4lja tuleb <code>Ok(Some(Bin([6])))</code>, mida saab teisendada <code>&amp;[u8]</code>.</p><h3 id="naide-2-andmetuubid-andmebaasi-lipud-kustutamine-labimine" tabindex="-1"><a class="header-anchor" href="#naide-2-andmetuubid-andmebaasi-lipud-kustutamine-labimine" aria-hidden="true">#</a> N\xE4ide 2: Andmet\xFC\xFCbid, andmebaasi lipud, kustutamine, l\xE4bimine</h3><p>Vaatame teist <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">n\xE4idet/02.rs</a>:</p><p>Selles n\xE4ites on <code>env_rw!</code> v\xE4lja j\xE4etud ning kolmas ja neljas argument ( <code>r</code>, <code>w</code>) on v\xE4lja j\xE4etud.</p><h4 id="kood-1" tabindex="-1"><a class="header-anchor" href="#kood-1" aria-hidden="true">#</a> Kood</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Andmebaasi muutuja nimi Env
  Test // Andmebaasi test
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xE4ljastada libmdbx&#39;i versiooni number
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Mitmesuunaline lugemine ja kirjutamine
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
      sync_period : 65536, // 1/65536 sekundi jooksul
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
 MDBX // Andmebaasi muutuja nimi Env
 Test // Andmebaasi test
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
  MDBX // Andmebaasi muutujate nimed ENV
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
  // Kiire kirjutamine
  w!(Test1.set [2, 3],[4, 5]);

  // Kiire lugemine
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

  // Mitu operatsiooni mitme andmebaasiga \xFChes ja samas tehingus
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

    // Tehing pannakse paika kohaldamisala l\xF5pus.
  }

  Ok(())
}
</code></pre></div><h4 id="kaivita-valjund-1" tabindex="-1"><a class="header-anchor" href="#kaivita-valjund-1" aria-hidden="true">#</a> K\xE4ivita v\xE4ljund</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/02.mdb

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
</code></pre></div><h4 id="kiire-lugemine-ja-kirjutamine" tabindex="-1"><a class="header-anchor" href="#kiire-lugemine-ja-kirjutamine" aria-hidden="true">#</a> Kiire lugemine ja kirjutamine</h4><p>Kui me tahame lihtsalt lugeda v\xF5i kirjutada \xFChe rea andmeid, saame kasutada makrode s\xFCntaktilist suhkrut.</p><p>Andmete lugemine</p><div class="language-text ext-text"><pre class="language-text"><code>r!(Test1.get [2, 3])
</code></pre></div><p>Andmete kirjutamine</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Andmebaasi muutuja nimi Env
  Test // Andmebaasi test
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xE4ljastada libmdbx&#39;i versiooni number
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Mitmesuunaline lugemine ja kirjutamine
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
      sync_period : 65536, // 1/65536 sekundi jooksul
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
 MDBX // Andmebaasi muutuja nimi Env
 Test // Andmebaasi test
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
  MDBX // Andmebaasi muutujate nimed ENV
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
  // Kiire kirjutamine
  w!(Test1.set [2, 3],[4, 5]);

  // Kiire lugemine
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

  // Mitu operatsiooni mitme andmebaasiga \xFChes ja samas tehingus
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

    // Tehing pannakse paika kohaldamisala l\xF5pus.
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
</code></pre></div><p>K\xF5ik \xFChes reas, nagu on kirjutatud <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a>.</p><h4 id="andmetuubid" tabindex="-1"><a class="header-anchor" href="#andmetuubid" aria-hidden="true">#</a> Andmet\xFC\xFCbid</h4><p>N\xE4idetes/02 <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">.</a> rs n\xE4eb andmebaasi m\xE4\xE4ratlus v\xE4lja selline :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Andmebaasi muutuja nimi Env
  Test // Andmebaasi test
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xE4ljastada libmdbx&#39;i versiooni number
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Mitmesuunaline lugemine ja kirjutamine
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
      sync_period : 65536, // 1/65536 sekundi jooksul
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
 MDBX // Andmebaasi muutuja nimi Env
 Test // Andmebaasi test
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
  MDBX // Andmebaasi muutujate nimed ENV
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
  // Kiire kirjutamine
  w!(Test1.set [2, 3],[4, 5]);

  // Kiire lugemine
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

  // Mitu operatsiooni mitme andmebaasiga \xFChes ja samas tehingus
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

    // Tehing pannakse paika kohaldamisala l\xF5pus.
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
</code></pre></div><p>kus <code>key</code> ja <code>val</code> m\xE4\xE4ratlevad vastavalt v\xF5tmete ja v\xE4\xE4rtuste andmet\xFC\xFCbid.</p><p>Kui proovite kirjutada andmet\xFC\xFCpi, mis ei vasta m\xE4\xE4ratletud t\xFC\xFCbile, antakse veateade, nagu on n\xE4idatud alloleval ekraanipildil :</p><p><img src="//irmw.gumlet.io/4rFTC6.png" alt=""></p><p>Vaikimisi andmet\xFC\xFCp on <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Bin.html" target="_blank" rel="noopener noreferrer"><code>Bin</code></a> , saab kirjutada mis tahes andmeid, mis rakendavad <code>AsRef&lt;[u8]&gt;</code>.</p><p>Kui v\xF5ti v\xF5i v\xE4\xE4rtus on <code>utf8</code> string, saab andmet\xFC\xFCbiks m\xE4\xE4rata <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Str.html" target="_blank" rel="noopener noreferrer"><code>Str</code></a> .</p><p><a href="https://doc.rust-lang.org/std/ops/trait.Deref.html" target="_blank" rel="noopener noreferrer">Unquoting</a> <code>Str</code> tagastab stringi, sarnaselt <code>let k:&amp;str = &amp;k;</code>.</p><p>Lisaks sellele rakendab <code>Str</code> ka <a href="https://doc.rust-lang.org/std/fmt/trait.Display.html" target="_blank" rel="noopener noreferrer"><code>std::fmt::Display</code></a> , <code>println!(&quot;{}&quot;,k)</code> v\xE4ljastab loetava stringi.</p><h5 id="eelseadistatud-andmetuubid" tabindex="-1"><a class="header-anchor" href="#eelseadistatud-andmetuubid" aria-hidden="true">#</a> Eelseadistatud andmet\xFC\xFCbid</h5><p>Lisaks <code>Str</code> ja <code>Bin</code> on pakendiga kaasas ka andmetugi <a href="https://docs.rs/mdbx/latest/src/mdbx/type.rs.html#48" target="_blank" rel="noopener noreferrer">usize, u128, u64, u32, u16, u8, isize, i128, i64, i32, i16, i8, f32, f64.</a></p><h4 id="andmebaasi-lipud" tabindex="-1"><a class="header-anchor" href="#andmebaasi-lipud" aria-hidden="true">#</a> Andmebaasi lipud</h4><p>Andmetele lisatud andmebaasi lipud n\xE4ete <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a> aadressil <code>Test4</code>. <code>flag DUPSORT</code></p><p>Libmdbx andmebaasis on mitmeid lipukesi ( <a href="https://erthink.github.io/libmdbx/group__c__dbi.html#gafe3bddb297b3ab0d828a487c5726f76a" target="_blank" rel="noopener noreferrer"><code>MDBX_db_flags_t</code></a> ), mida saab m\xE4\xE4rata.</p><ul><li>REVERSEKEY kasutab v\xF5tmete jaoks p\xF6\xF6rdv\xF5rdlust. (kasulik, kui v\xF5tmetena kasutatakse v\xE4ikeseid l\xF5ppkoodiga numbreid)</li><li>DUPSORT kasutab sorteeritud duplikaate, st lubab v\xF5tme jaoks mitu v\xE4\xE4rtust.</li><li>INTEGERKEY Native byte-j\xE4rjestatud numbriline v\xF5ti uint32_t v\xF5i uint64_t. V\xF5tmed peavad olema sama suurusega ja peavad olema joondatud, kui need antakse \xFCle argumentidena.</li><li>DUPFIXED Andmev\xE4\xE4rtuste suurus peab olema sama, kui kasutatakse DUPSORT (v\xF5imaldab v\xE4\xE4rtuste arvu kiiret lugemist).</li><li>DUPSORT ja DUPFIXED on vajalikud INTEGERDUPi jaoks; v\xE4\xE4rtused on t\xE4isarvud (sarnaselt INTEGERKEY-le). Andmev\xE4\xE4rtused peavad k\xF5ik olema \xFChesuurused ja parameetrina edastamisel peavad nad olema joondatud.</li><li>REVERSEDUP kasutab DUPSORT; andmete v\xE4\xE4rtuste puhul kasutatakse vastupidist stringide v\xF5rdlust.</li><li>CREATE loob andmebaasi, kui seda ei ole olemas (vaikimisi lisatud).</li><li>DB_ACCEDE Avab olemasoleva alamandmebaasi, mis on loodud tundmatu lipu abil.<br> See DB_ACCEDE lipp on m\xF5eldud olemasolevate alamandmebaaside avamiseks, mis on loodud tundmatute lipukestega (REVERSEKEY, DUPSORT, INTEGERKEY, DUPFIXED, INTEGERDUP ja REVERSEDUP).<br> Sellisel juhul ei tagasta alamandmebaas INCOMPATIBLE viga, vaid avatakse selle loomisel kasutatud lipukestega ja rakendus saab seej\xE4rel tegelikud lipukesed m\xE4\xE4rata mdbx_dbi_flags() abil.</li></ul><h5 id="dupsort-uks-voti-vastab-rohkem-kui-uhele-vaartusele" tabindex="-1"><a class="header-anchor" href="#dupsort-uks-voti-vastab-rohkem-kui-uhele-vaartusele" aria-hidden="true">#</a> DUPSORT : \xFCks v\xF5ti vastab rohkem kui \xFChele v\xE4\xE4rtusele</h5><p><code>DUPSORT</code>t\xE4hendab, et v\xF5tmele v\xF5ib vastata rohkem kui \xFCks v\xE4\xE4rtus.</p><p>Kui soovite m\xE4\xE4rata mitu lipukest, kirjutage j\xE4rgmiselt <code>flag DUPSORT | DUPFIXED</code></p><h5 id="dup-key-iteraator-mis-tagastab-koik-votmele-vastavad-vaartused" tabindex="-1"><a class="header-anchor" href="#dup-key-iteraator-mis-tagastab-koik-votmele-vastavad-vaartused" aria-hidden="true">#</a> <code>.dup(key)</code> iteraator, mis tagastab k\xF5ik v\xF5tmele vastavad v\xE4\xE4rtused</h5><p>See funktsioon on saadaval ainult andmebaaside puhul, mis on t\xE4histatud <code>DUPSORT</code>, kus v\xF5tmele v\xF5ib vastata rohkem kui \xFCks v\xE4\xE4rtus.</p><p>Andmebaaside <code>DUPSORT</code> puhul tagastab <code>get</code> ainult selle v\xF5tme esimese v\xE4\xE4rtuse. K\xF5ikide v\xE4\xE4rtuste saamiseks kasutage <code>dup</code>.</p><h5 id="vaikimisi-automaatselt-lisatud-andmebaasi-lipud" tabindex="-1"><a class="header-anchor" href="#vaikimisi-automaatselt-lisatud-andmebaasi-lipud" aria-hidden="true">#</a> Vaikimisi automaatselt lisatud andmebaasi lipud</h5><p>Kui andmet\xFC\xFCbiks on <code>u32</code> / <code>u64</code> / <code>usize</code>, lisatakse automaatselt andmebaasi lipp. <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#105" target="_blank" rel="noopener noreferrer"><code>INTEGERKEY</code></a> .</p><p>V\xE4ikeste otsade kodeeringuga masinates lisatakse automaatselt muud numbrit\xFC\xFCbid. <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#108" target="_blank" rel="noopener noreferrer"><code>REVERSEKEY</code></a> Andmebaasi lipp lisatakse automaatselt, kui andmet\xFC\xFCbiks on / / .</p><h4 id="andmete-kustutamine" tabindex="-1"><a class="header-anchor" href="#andmete-kustutamine" aria-hidden="true">#</a> Andmete kustutamine</h4><h5 id="del-key-klahvi-kustutamine" tabindex="-1"><a class="header-anchor" href="#del-key-klahvi-kustutamine" aria-hidden="true">#</a> <code>.del(key)</code> Klahvi kustutamine</h5><p><code>.del(val)</code> Kustutab v\xF5tmele vastava v\xE4\xE4rtuse.</p><p>Kui andmebaasis on m\xE4rk <code>DUPSORT</code>, kustutatakse k\xF5ik selle v\xF5tme all olevad v\xE4\xE4rtused.</p><p>Tagastab <code>true</code>, kui andmed on kustutatud, ja <code>false</code>, kui mitte.</p><h5 id="del-val-key-val-tapse-vaste-kustutamine" tabindex="-1"><a class="header-anchor" href="#del-val-key-val-tapse-vaste-kustutamine" aria-hidden="true">#</a> <code>.del_val(key,val)</code> T\xE4pse vaste kustutamine</h5><p><code>.del_val(key,val)</code> Kustutab v\xF5tmev\xE4\xE4rtuspaarid, mis vastavad t\xE4pselt sisendparameetritele.</p><p>Tagastab <code>true</code>, kui andmed on kustutatud, ja <code>false</code>, kui mitte.</p><h4 id="traversaal" tabindex="-1"><a class="header-anchor" href="#traversaal" aria-hidden="true">#</a> Traversaal</h4><h5 id="jarjestikune-labimine" tabindex="-1"><a class="header-anchor" href="#jarjestikune-labimine" aria-hidden="true">#</a> j\xE4rjestikune l\xE4bimine</h5><p>Rakendamise t\xF5ttu <a href="https://doc.rust-lang.org/std/iter/trait.IntoIterator.html" target="_blank" rel="noopener noreferrer"><code>std::iter::IntoIterator</code></a> . saab otse l\xE4bida j\xE4rgmiselt :</p><p><code>for (k, v) in test1</code></p><h5 id="rev-pooratud-jarjestuse-labimine" tabindex="-1"><a class="header-anchor" href="#rev-pooratud-jarjestuse-labimine" aria-hidden="true">#</a> <code>.rev()</code> P\xF6\xF6ratud j\xE4rjestuse l\xE4bimine</h5><p><code>for (k, v) in test4.rev()</code></p><h5 id="sorteerimine" tabindex="-1"><a class="header-anchor" href="#sorteerimine" aria-hidden="true">#</a> Sorteerimine</h5><p>Libmdbx v\xF5tmed on sorteeritud <a href="https://zh.wikipedia.org/wiki/%E5%AD%97%E5%85%B8%E5%BA%8F" target="_blank" rel="noopener noreferrer">s\xF5nastiku j\xE4rjekorras</a>.</p><ul><li><p>M\xE4rkimata numbrite puhul</p><p>on sorteeritud v\xE4ikseimast suurimani, sest andmebaasi lipud lisatakse automaatselt ( <code>u32</code>/ <code>u64</code>/ <code>usize</code> lisatakse <code>INTEGERKEY</code>, teised lisatakse <code>REVERSEKEY</code> s\xF5ltuvalt masinakoodist).</p></li><li><p>Allkirjastatud numbrite puhul</p><p>j\xE4rjekord on j\xE4rgmine: k\xF5igepealt 0, seej\xE4rel k\xF5ik positiivsed arvud v\xE4ikseimast suurimani, seej\xE4rel k\xF5ik negatiivsed arvud v\xE4ikseimast suurimani.</p></li></ul><h3 id="intervall-iteraatorid" tabindex="-1"><a class="header-anchor" href="#intervall-iteraatorid" aria-hidden="true">#</a> Intervall-iteraatorid</h3><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Andmebaasi muutuja nimi Env
  Test // Andmebaasi test
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xE4ljastada libmdbx&#39;i versiooni number
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Mitmesuunaline lugemine ja kirjutamine
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
      sync_period : 65536, // 1/65536 sekundi jooksul
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
 MDBX // Andmebaasi muutuja nimi Env
 Test // Andmebaasi test
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
  MDBX // Andmebaasi muutujate nimed ENV
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
  // Kiire kirjutamine
  w!(Test1.set [2, 3],[4, 5]);

  // Kiire lugemine
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

  // Mitu operatsiooni mitme andmebaasiga \xFChes ja samas tehingus
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

    // Tehing pannakse paika kohaldamisala l\xF5pus.
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
</code></pre></div><h4 id="kaivita-valjund-2" tabindex="-1"><a class="header-anchor" href="#kaivita-valjund-2" aria-hidden="true">#</a> K\xE4ivita v\xE4ljund</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/range.mdb

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
</code></pre></div><h4 id="range-begin-end-intervalli-intervall-iteratsioon" tabindex="-1"><a class="header-anchor" href="#range-begin-end-intervalli-intervall-iteratsioon" aria-hidden="true">#</a> <code>.range(begin..end)</code> Intervalli intervall Iteratsioon</h4><p>Numbrite puhul on intervall numbriline intervall.</p><p>Binaarseks v\xF5ib sama intervalli konstrueerida, nt.</p><div class="language-text ext-text"><pre class="language-text"><code>let begin : &amp;[u8] = &amp;[1,1];
for (k,v) in test0.range(begin..=&amp;[2]) {}
</code></pre></div><p>Kui <code>begin</code> on suurem kui <code>end</code>, siis itereeritakse tagasi.</p><p>N\xE4iteks <code>test1.range(5..2)</code> v\xE4ljastab j\xE4rgmise :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Andmebaasi muutuja nimi Env
  Test // Andmebaasi test
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xE4ljastada libmdbx&#39;i versiooni number
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Mitmesuunaline lugemine ja kirjutamine
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
      sync_period : 65536, // 1/65536 sekundi jooksul
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
 MDBX // Andmebaasi muutuja nimi Env
 Test // Andmebaasi test
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
  MDBX // Andmebaasi muutujate nimed ENV
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
  // Kiire kirjutamine
  w!(Test1.set [2, 3],[4, 5]);

  // Kiire lugemine
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

  // Mitu operatsiooni mitme andmebaasiga \xFChes ja samas tehingus
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

    // Tehing pannakse paika kohaldamisala l\xF5pus.
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
</code></pre></div><p>Intervalliline iteratsioon ei ole toetatud <a href="https://doc.rust-lang.org/std/ops/struct.RangeFull.html" target="_blank" rel="noopener noreferrer"><code>RangeFull</code></a> , s.t. <code>..</code>kasutamine ei ole toetatud, kasutage selle asemel palun eespool mainitud <a href="#%E9%81%8D%E5%8E%86">traversaali</a>.</p><h4 id="rev-range-umberpooratud-intervallid" tabindex="-1"><a class="header-anchor" href="#rev-range-umberpooratud-intervallid" aria-hidden="true">#</a> <code>.rev_range</code> \xDCmberp\xF6\xF6ratud intervallid</h4><p>Kui soovite saada inverteeritud intervalli, mis on v\xE4iksem v\xF5i v\xF5rdne mingi v\xE4\xE4rtusega, saate teha j\xE4rgmist</p><div class="language-text ext-text"><pre class="language-text"><code>test2.rev_range(2..)
</code></pre></div><p>V\xE4ljund on</p><div class="language-text ext-text"><pre class="language-text"><code>(2, 4)
(1, 5)
(0, 0)
</code></pre></div><p>Inverteeritud intervalli jaoks ei tohi olla m\xE4\xE4ratud \xFCks <code>begin</code> v\xF5i <code>end</code>, sest kui m\xF5lemad on m\xE4\xE4ratud, saate alati kasutada <code>range(end..begin)</code>, et saavutada sama efekt.</p><h3 id="andmetuupide-kohandamine" tabindex="-1"><a class="header-anchor" href="#andmetuupide-kohandamine" aria-hidden="true">#</a> Andmet\xFC\xFCpide kohandamine</h3><p>Demokood on saadaval aadressil <a href="https://github.com/rmw-lib/mdbx-example/blob/master/01/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/01</a></p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Andmebaasi muutuja nimi Env
  Test // Andmebaasi test
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xE4ljastada libmdbx&#39;i versiooni number
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Mitmesuunaline lugemine ja kirjutamine
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
      sync_period : 65536, // 1/65536 sekundi jooksul
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
 MDBX // Andmebaasi muutuja nimi Env
 Test // Andmebaasi test
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
  MDBX // Andmebaasi muutujate nimed ENV
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
  // Kiire kirjutamine
  w!(Test1.set [2, 3],[4, 5]);

  // Kiire lugemine
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

  // Mitu operatsiooni mitme andmebaasiga \xFChes ja samas tehingus
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

    // Tehing pannakse paika kohaldamisala l\xF5pus.
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
</code></pre></div><p>V\xE4ljund on j\xE4rgmine</p><div class="language-text ext-text"><pre class="language-text"><code>Some(City { name: &quot;BeiJing&quot;, lnglat: (11640, 3990) })
</code></pre></div><p>Kohandatud t\xFC\xFCbi n\xE4ites kasutame <a href="https://github.com/koute/speedy" target="_blank" rel="noopener noreferrer"><code>speedy</code></a> teha seriaalid <a href="https://github.com/djkoloski/rust_serialization_benchmark" target="_blank" rel="noopener noreferrer">( <code>speedy</code> tulemuslikkuse hindamine</a> ) <a href="https://github.com/djkoloski/rust_serialization_benchmark" target="_blank" rel="noopener noreferrer">.</a></p><p>Kohandatud t\xFC\xFCbi rakendamine <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.FromMdbx.html" target="_blank" rel="noopener noreferrer"><code>FromMdbx</code></a> ja <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.ToAsRef.html" target="_blank" rel="noopener noreferrer"><code>ToAsRef</code></a> saab seej\xE4rel salvestada aadressil <code>mdbx</code>.</p><p>Kui kasutate konkreetset serialiseerimisraamatukogu, saate protsessi lihtsustamiseks kohandada ka atribuutide <a href="https://blog.logrocket.com/macros-in-rust-a-tutorial-with-examples/" target="_blank" rel="noopener noreferrer">makrosid</a>.</p><h4 id="kohandatud-tuupide-lihtsustamine-atribuutide-makrode-abil" tabindex="-1"><a class="header-anchor" href="#kohandatud-tuupide-lihtsustamine-atribuutide-makrode-abil" aria-hidden="true">#</a> Kohandatud t\xFC\xFCpide lihtsustamine atribuutide makrode abil</h4><p>Atribuutide makro rakendamine on nii lihtne kui <a href="https://crates.io/crates/mdbx_speedy" target="_blank" rel="noopener noreferrer"><code>mdbx_speedy</code></a> Atribuudi makrokood on j\xE4rgmine :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Andmebaasi muutuja nimi Env
  Test // Andmebaasi test
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xE4ljastada libmdbx&#39;i versiooni number
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Mitmesuunaline lugemine ja kirjutamine
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
      sync_period : 65536, // 1/65536 sekundi jooksul
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
 MDBX // Andmebaasi muutuja nimi Env
 Test // Andmebaasi test
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
  MDBX // Andmebaasi muutujate nimed ENV
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
  // Kiire kirjutamine
  w!(Test1.set [2, 3],[4, 5]);

  // Kiire lugemine
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

  // Mitu operatsiooni mitme andmebaasiga \xFChes ja samas tehingus
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

    // Tehing pannakse paika kohaldamisala l\xF5pus.
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
</code></pre></div><p>Alustage oma projektis <code>cargo add mdbx-speedy</code>ja seej\xE4rel saate t\xFC\xFCbi kiiresti kohandada (vt <a href="https://github.com/rmw-lib/mdbx-example/blob/master/02/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/02</a> demokoodi) <a href="https://github.com/rmw-lib/mdbx-example/blob/master/02/src/main.rs" target="_blank" rel="noopener noreferrer">.</a></p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Andmebaasi muutuja nimi Env
  Test // Andmebaasi test
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xE4ljastada libmdbx&#39;i versiooni number
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Mitmesuunaline lugemine ja kirjutamine
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
      sync_period : 65536, // 1/65536 sekundi jooksul
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
 MDBX // Andmebaasi muutuja nimi Env
 Test // Andmebaasi test
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
  MDBX // Andmebaasi muutujate nimed ENV
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
  // Kiire kirjutamine
  w!(Test1.set [2, 3],[4, 5]);

  // Kiire lugemine
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

  // Mitu operatsiooni mitme andmebaasiga \xFChes ja samas tehingus
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

    // Tehing pannakse paika kohaldamisala l\xF5pus.
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
</code></pre></div><p>Loomulikult on ikka t\xFC\xFCtu kirjutada <code>#[derive(PartialEq, Debug, Readable, Writable, MdbxSpeedy)]</code> korduvalt, nii et v\xF5ite kasutada <a href="https://docs.rs/derive-alias/0.1.0/derive_alias" target="_blank" rel="noopener noreferrer"><code>derive_alias</code></a> koodi edasiseks lihtsustamiseks.</p><h2 id="markus-jargmiste-ainete-kasutamise-kohta" tabindex="-1"><a class="header-anchor" href="#markus-jargmiste-ainete-kasutamise-kohta" aria-hidden="true">#</a> M\xE4rkus j\xE4rgmiste ainete kasutamise kohta</h2><h3 id="votme-pikkus" tabindex="-1"><a class="header-anchor" href="#votme-pikkus" aria-hidden="true">#</a> V\xF5tme pikkus</h3><ul><li>Minimaalne 0, maksimaalne \u2248 \xBD lehek\xFClje suurus (vaikimisi 4K lehek\xFClje v\xF5tme maksimaalne suurus on 2022 baiti), mis m\xE4\xE4ratakse andmebaasi initsialiseerimisel <code>pagesize</code> saab seadistada maksimaalselt <code>65536</code>ja see peab olema 2 v\xF5imsus.</li></ul><h2 id="joonealused-markused" tabindex="-1"><a class="header-anchor" href="#joonealused-markused" aria-hidden="true">#</a> Joonealused m\xE4rkused</h2><p>Nad viitavad LMDB-lt MDBX-le \xFClemineku eelistele.</p><blockquote><p>Erigon alustas BoltDB andmebaasi backendiga, seej\xE4rel lisas ta toetust BadgerDB-le ja l\xF5puks l\xE4ks t\xE4ielikult \xFCle LMDB-le. mingil hetkel tekkis meil LMDB kasutamisest tingitud stabiilsusprobleeme, mida loojad ei osanud ette n\xE4ha. Sellest ajast alates oleme vaadanud LMDB h\xE4sti toetatud tuletist nimega MDBX ja loodame kasutada nende stabiilsuse parandusi ja potentsiaalselt teha tulevikus rohkem koost\xF6\xF6d. MDBX-i integreerimine on n\xFC\xFCdseks l\xF5pule viidud ja on aeg rohkem testida ja dokumenteerida.</p><p>LMDB-lt MDBX-le \xFClemineku eelised.</p><ol><li><p>Kasv &quot;ruum (geomeetria)&quot; andmebaasi failide t\xF6\xF6tab korralikult. See on oluline, eriti Windowsis. LMDBs tuleb m\xE4lukaardi suurus m\xE4\xE4rata \xFCks kord ette (praegu kasutame vaikimisi 2 TB) ja kui andmebaasi fail kasvab \xFCle selle piiri, tuleb protsess uuesti k\xE4ivitada. Windowsis muudaks m\xE4lukaardi suuruse seadmine 2Tb suuruseks andmebaasi faili algul 2Tb suureks, mis ei ole v\xE4ga mugav. MDBXis suurendatakse m\xE4lukaardi suurust 2 gigabaidi kaupa. See t\xE4hendab aeg-ajalt \xFCmberl\xFClitamist, kuid annab parema kasutajakogemuse.</p></li><li><p>MDBXis on rangemad kontrollid tehingut\xF6\xF6tluse samaaegse kasutamise ning samas t\xE4itmisvoos toimuvate lugemis- ja kirjutamistehingute kattumise suhtes. See v\xF5imaldab meil m\xE4rgata m\xF5ningaid mitteilmseid vigu ja muudab k\xE4itumise paremini prognoositavaks.<br> Rohkem kui 5 aasta jooksul (alates selle eraldamisest LMDB-st) on MDBX kogunud suure hulga turvaparandusi ja heisenbugide parandusi, mis meie teada on endiselt olemas LMDB-s. M\xF5ned neist avastati meie testimise k\xE4igus ning MDBXi hooldajad v\xF5tsid neid t\xF5siselt ja parandasid need kiiresti.</p></li><li><p>Andmeid pidevalt muutvate andmebaaside puhul tekitavad nad \xFCsna palju taaskasutatavat ruumi (mida LMDB terminoloogias nimetatakse ka &quot;freelistiks&quot;). Me oleme pidanud parandama LMDB-d, et k\xF5rvaldada k\xF5ige t\xF5sisemad puudused taaskasutatava ruumi k\xE4itlemisel <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide" target="_blank" rel="noopener noreferrer">(anal\xFC\xFCs</a> ). MDBX on p\xF6\xF6ranud <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide%EF%BC%89%E3%80%82MDBX%E5%AF%B9%E5%8F%AF%E5%9B%9E%E6%94%B6%E7%A9%BA%E9%97%B4%E7%9A%84%E6%9C%89%E6%95%88%E5%A4%84%E7%90%86%E8%BF%9B%E8%A1%8C%E4%BA%86%E7%89%B9%E5%88%AB%E7%9A%84%E5%85%B3%E6%B3%A8%EF%BC%8C%E5%88%B0%E7%9B%AE%E5%89%8D%E4%B8%BA%E6%AD%A2%EF%BC%8C%E8%BF%98%E4%B8%8D%E9%9C%80%E8%A6%81%E6%89%93%E8%A1%A5%E4%B8%81%E3%80%82" target="_blank" rel="noopener noreferrer">erilist t\xE4helepanu taaskasutatava ruumi t\xF5husale k\xE4itlemisele ja seni ei ole seda vaja parandada</a>.</p></li><li><p>Meie testimise p\xF5hjal oli MDBX meie t\xF6\xF6koormuse puhul veidi parem.</p></li><li><p>MDBX avaldab rohkem sisemisi telemeetriaandmeid - rohkem m\xF5\xF5teandmeid selle kohta, mis toimub andmebaasis. Ja meil on need andmed Grafana&#39;s - et teha paremaid otsuseid rakenduse disaini kohta. N\xE4iteks p\xE4rast t\xE4ielikku \xFCleminekut MDBXile (LMDB toetuse eemaldamine) rakendame &quot;poolenisti t\xE4is tehingu kinnitamise&quot; poliitikat, et v\xE4ltida kettakontaktide \xFClevoolu/\xFClevoolu. See lihtsustab meie koodi veelgi, ilma et see m\xF5jutaks j\xF5udlust.</p></li><li><p>MDBX toetab &quot;Exclusive open&quot; re\u017Eiimi - me kasutame seda andmebaasi migratsioonide puhul, et v\xE4ltida teiste lugejate juurdep\xE4\xE4su andmebaasile migratsiooniprotsessi ajal.</p></li></ol></blockquote><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p><a href="https://github.com/ledgerwatch/erigon/wiki/Criteria-for-transitioning-from-Alpha-to-Beta#switch-from-lmdb-to-mdbx" target="_blank" rel="noopener noreferrer">Erigon (j\xE4rgmise p\xF5lvkonna Ethernet-klient) l\xE4ks hiljuti LMDB-lt \xFCle MDBX-le.</a> <a href="#fnref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,160);function st(it,rt){const n=d("RouterLink");return r(),l(o,null,[p,b,g,h,t("nav",k,[t("ul",null,[t("li",null,[a(n,{to:"#tsitaadid"},{default:s(()=>[_]),_:1})]),t("li",null,[a(n,{to:"#mis-on-libmdbx"},{default:s(()=>[v]),_:1})]),t("li",null,[a(n,{to:"#tutorials"},{default:s(()=>[c]),_:1}),t("ul",null,[t("li",null,[a(n,{to:"#kuidas-kaivitada-naide"},{default:s(()=>[f]),_:1})]),t("li",null,[a(n,{to:"#naide-1-kirjutamine-set-key-val-ja-lugemine-get-key"},{default:s(()=>[x]),_:1}),t("ul",null,[t("li",null,[a(n,{to:"#kood"},{default:s(()=>[q]),_:1})]),t("li",null,[a(n,{to:"#kaivita-valjund"},{default:s(()=>[y]),_:1})]),t("li",null,[a(n,{to:"#koodikirjeldus"},{default:s(()=>[j]),_:1}),t("ul",null,[t("li",null,[a(n,{to:"#env-rw-andmebaasi-maaratlemine"},{default:s(()=>[D]),_:1})]),t("li",null,[a(n,{to:"#makro-laienemine"},{default:s(()=>[E]),_:1})]),t("li",null,[a(n,{to:"#anyhow-ja-lazy-static"},{default:s(()=>[w]),_:1})]),t("li",null,[a(n,{to:"#makro-mdbx"},{default:s(()=>[T]),_:1})]),t("li",null,[a(n,{to:"#niidid-ja-tehingud"},{default:s(()=>[B]),_:1})]),t("li",null,[a(n,{to:"#binaarsete-andmete-lugemine-ja-kirjutamine"},{default:s(()=>[M]),_:1})])])])])]),t("li",null,[a(n,{to:"#naide-2-andmetuubid-andmebaasi-lipud-kustutamine-labimine"},{default:s(()=>[N]),_:1}),t("ul",null,[t("li",null,[a(n,{to:"#kood-1"},{default:s(()=>[S]),_:1})]),t("li",null,[a(n,{to:"#kaivita-valjund-1"},{default:s(()=>[X]),_:1})]),t("li",null,[a(n,{to:"#kiire-lugemine-ja-kirjutamine"},{default:s(()=>[A]),_:1})]),t("li",null,[a(n,{to:"#andmetuubid"},{default:s(()=>[R]),_:1}),t("ul",null,[t("li",null,[a(n,{to:"#eelseadistatud-andmetuubid"},{default:s(()=>[O]),_:1})])])]),t("li",null,[a(n,{to:"#andmebaasi-lipud"},{default:s(()=>[V]),_:1}),t("ul",null,[t("li",null,[a(n,{to:"#dupsort-uks-voti-vastab-rohkem-kui-uhele-vaartusele"},{default:s(()=>[C]),_:1})]),t("li",null,[a(n,{to:"#dup-key-iteraator-mis-tagastab-koik-votmele-vastavad-vaartused"},{default:s(()=>[U]),_:1})]),t("li",null,[a(n,{to:"#vaikimisi-automaatselt-lisatud-andmebaasi-lipud"},{default:s(()=>[I]),_:1})])])]),t("li",null,[a(n,{to:"#andmete-kustutamine"},{default:s(()=>[L]),_:1}),t("ul",null,[t("li",null,[a(n,{to:"#del-key-klahvi-kustutamine"},{default:s(()=>[P]),_:1})]),t("li",null,[a(n,{to:"#del-val-key-val-tapse-vaste-kustutamine"},{default:s(()=>[F]),_:1})])])]),t("li",null,[a(n,{to:"#traversaal"},{default:s(()=>[K]),_:1}),t("ul",null,[t("li",null,[a(n,{to:"#jarjestikune-labimine"},{default:s(()=>[z]),_:1})]),t("li",null,[a(n,{to:"#rev-pooratud-jarjestuse-labimine"},{default:s(()=>[$]),_:1})]),t("li",null,[a(n,{to:"#sorteerimine"},{default:s(()=>[Y]),_:1})])])])])]),t("li",null,[a(n,{to:"#intervall-iteraatorid"},{default:s(()=>[G]),_:1}),t("ul",null,[t("li",null,[a(n,{to:"#kaivita-valjund-2"},{default:s(()=>[H]),_:1})]),t("li",null,[a(n,{to:"#range-begin-end-intervalli-intervall-iteratsioon"},{default:s(()=>[W]),_:1})]),t("li",null,[a(n,{to:"#rev-range-umberpooratud-intervallid"},{default:s(()=>[J]),_:1})])])]),t("li",null,[a(n,{to:"#andmetuupide-kohandamine"},{default:s(()=>[Q]),_:1}),t("ul",null,[t("li",null,[a(n,{to:"#kohandatud-tuupide-lihtsustamine-atribuutide-makrode-abil"},{default:s(()=>[Z]),_:1})])])])])]),t("li",null,[a(n,{to:"#markus-jargmiste-ainete-kasutamise-kohta"},{default:s(()=>[tt]),_:1}),t("ul",null,[t("li",null,[a(n,{to:"#votme-pikkus"},{default:s(()=>[et]),_:1})])])]),t("li",null,[a(n,{to:"#joonealused-markused"},{default:s(()=>[nt]),_:1})])])]),at],64)}var ut=i(m,[["render",st],["__file","2021-12-21-mdbx.html.vue"]]);export{ut as default};
