import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,c as r,a as t,b as a,w as s,F as l,d as n,e as u,o as d}from"./app.87d927ab.js";const p={},m=t("h1",{id:"ruostepaketti-libmdbx-lle",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#ruostepaketti-libmdbx-lle","aria-hidden":"true"},"#"),n(" Ruostepaketti libmdbx:lle")],-1),k=t("p",null,[t("a",{href:"https://github.com/erthink/libmdbx",target:"_blank",rel:"noopener noreferrer"},"Libmdbx-tietokannan"),n(),t("code",null,"rust"),n(" -k\xE4\xE4re.")],-1),g=t("hr",null,null,-1),b=t("p",null,"Hakemisto :",-1),h={class:"table-of-contents"},v=n("Lainaukset"),_=n("Mik\xE4 on libmdbx?"),c=n("Oppaat"),f=n("Esimerkin suorittaminen"),x=n("Esimerkki 1 : Kirjoittaminen set(key,val) ja lukeminen .get(key)"),q=n("Koodi"),y=n("Suorita tuotos"),T=n("Koodin kuvaus"),j=n("env_rw! Tietokannan m\xE4\xE4ritt\xE4minen"),E=n("Makrolaajennus"),D=n("anyhow ja lazy_static"),w=n("Makro mdbx!"),B=n("Kierteet ja tapahtumat"),M=n("Bin\xE4\xE4ritietojen lukeminen ja kirjoittaminen"),N=n("Esimerkki 2: Tietotyypit, tietokannan liput, poistaminen, l\xE4pik\xE4ynti"),S=n("Koodi"),X=n("Suorita tuotos"),O=n("Nopea lukeminen ja kirjoittaminen"),R=n("Tietotyypit"),C=n("Esiasetetut tietotyypit"),V=n("Tietokannan liput"),U=n("DUPSORT : Yksi avain vastaa useampaa kuin yht\xE4 arvoa."),I=n(".dup(key) iteraattori, joka palauttaa kaikki avainta vastaavat arvot."),A=n("Oletusarvoisesti automaattisesti liitetyt tietokannan liput"),L=n("Tietojen poistaminen"),P=n(".del(key) N\xE4pp\xE4imen poistaminen"),F=n(".del_val(key,val) T\xE4sm\xE4llisen vastaavuuden poisto"),z=n("Traversal"),$=n("per\xE4kk\xE4inen l\xE4pik\xE4ynti"),K=n(".rev() K\xE4\xE4nteinen j\xE4rjestyksen l\xE4pik\xE4ynti"),Y=n("Lajittelu"),H=n("Intervalli-iteraattorit"),G=n("Suorita tulostus"),J=n(".range(begin..end) Intervalli Iteraatio"),W=n(".rev_range K\xE4\xE4nteiset aikav\xE4lit"),Q=n("Tietotyyppien mukauttaminen"),Z=n("Mukautettujen tyyppien yksinkertaistaminen attribuuttimakrojen avulla"),tt=n("Huomautus"),nt=n("Avaimen pituus"),et=n("Alaviitteet"),at=u(`<hr><h2 id="lainaukset" tabindex="-1"><a class="header-anchor" href="#lainaukset" aria-hidden="true">#</a> Lainaukset</h2><p>Kirjoittaessani <a href="https://rmw.link" target="_blank" rel="noopener noreferrer">&#39;rmw.link</a> &#39; -ohjelmaa tunsin tarvitsevani upotetun tietokannan.</p><p>Koska tallentamiseen, lukemiseen ja kirjoittamiseen tarvittava verkon l\xE4p\xE4isykyky oli suuri, <code>sqlite3</code> oli suorituskyvyn kannalta liian kehittynyt.</p><p>Siksi alemman tason avain-arvotietokanta oli sopivampi <a href="https://discourse.world/h/2020/06/05/Shine-and-poverty-key-value-database-LMDB-in-applications-for-iOS" target="_blank" rel="noopener noreferrer">(lmdb on 10 kertaa nopeampi kuin sqlite</a> ).</p><p><img src="//irmw.gumlet.io/yxZV8x.jpg" alt=""></p><p>Lopulta valitsin maagisen version <code>lmdb</code> - <code>mdbx</code>.</p><p>T\xE4ll\xE4 hetkell\xE4 olemassa oleva <code>rust</code> <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">mdbx-rs-paketti (mdbx-sys)</a> osoitteesta <code>mdbx</code> <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">ei tue Windows-k\xE4ytt\xF6j\xE4rjestelm\xE4\xE4</a>, joten otin teht\xE4v\xE4kseni paketoida version, jossa on Windows-tuki.</p><p>Tuki mukautettujen ruostetyyppien tallentamiselle. Tukee monis\xE4ikeist\xE4 k\xE4ytt\xF6\xE4.</p><p>Tietokanta voidaan m\xE4\xE4ritell\xE4 moduulissa k\xE4ytt\xE4en <code>lazy_static</code> ja sitten se voidaan yksinkertaisesti ottaa k\xE4ytt\xF6\xF6n ja k\xE4ytt\xE4\xE4 esimerkiksi :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
</code></pre></div><h2 id="mika-on-libmdbx" tabindex="-1"><a class="header-anchor" href="#mika-on-libmdbx" aria-hidden="true">#</a> Mik\xE4 on libmdbx?</h2><p><a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">mdbx</a> on ven\xE4l\xE4isen <a href="https://vk.com/erthink" target="_blank" rel="noopener noreferrer">Leonid Jurjevin (\u041B\u0435\u043E\u043D\u0438\u0434 \u042E\u0440\u044C\u0435\u0432</a> ) lmdb:hen perustuva toissijainen tietokanta.</p><p><a href="https://en.wikipedia.org/wiki/Lightning_Memory-Mapped_Database" target="_blank" rel="noopener noreferrer">lmdb</a> on supernopea sulautettu avain-arvotietokanta.</p><p>Kokotekstihakukone <a href="https://docs.meilisearch.com/reference/under_the_hood/storage.html#measured-disk-usage" target="_blank" rel="noopener noreferrer">MeiliSearch</a> perustuu lmdb:hen.</p><p><a href="https://docs.nvidia.com/deeplearning/dali/user-guide/docs/examples/general/data_loading/dataloading_lmdb.html" target="_blank" rel="noopener noreferrer">Syv\xE4oppimisen kehys caffe k\xE4ytt\xE4\xE4 my\xF6s lmdb:t\xE4 tietovarastona.</a></p><p><a href="https://github.com/erthink/libmdbx#added-features" target="_blank" rel="noopener noreferrer">mdbx on 30 prosenttia nopeampi kuin lmdb sulautetun suorituskykytestin ioarena-vertailussa</a>.</p><p><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-1.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-3.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-4.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-5.png" alt=""></p><p>Samaan aikaan mdbx <a href="https://github.com/erthink/libmdbx#improvements-beyond-lmdb" target="_blank" rel="noopener noreferrer">parantaa monia</a> lmdb: <a href="https://github.com/erthink/libmdbx#improvements-beyond-lmdb" target="_blank" rel="noopener noreferrer">n puutteita</a>, joten Erigon (seuraavan sukupolven ethereum-asiakas) siirtyi hiljattain LMDB:st\xE4 MDBX:\xE4\xE4n <sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>.</p><h2 id="oppaat" tabindex="-1"><a class="header-anchor" href="#oppaat" aria-hidden="true">#</a> Oppaat</h2><h3 id="esimerkin-suorittaminen" tabindex="-1"><a class="header-anchor" href="#esimerkin-suorittaminen" aria-hidden="true">#</a> Esimerkin suorittaminen</h3><p>Kloonaa ensin koodipohja <code>git clone git@github.com:rmw-lib/mdbx.git --depth=1 &amp;&amp; cd mdbx</code></p><p>Suorita sitten <code>cargo run --example 01</code> ja se suorittaa <code>examples/01.rs</code></p><p>Jos kyseess\xE4 on oma projektisi, suorita se ensin :</p><div class="language-bash ext-sh"><pre class="language-bash"><code>cargo install cargo-edit
cargo add mdbx lazy_static ctor paste
</code></pre></div><h3 id="esimerkki-1-kirjoittaminen-set-key-val-ja-lukeminen-get-key" tabindex="-1"><a class="header-anchor" href="#esimerkki-1-kirjoittaminen-set-key-val-ja-lukeminen-get-key" aria-hidden="true">#</a> Esimerkki 1 : Kirjoittaminen <code>set(key,val)</code> ja lukeminen <code>.get(key)</code></h3><p>Katsotaanpa yksinkertaista <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/01.rs" target="_blank" rel="noopener noreferrer">esimerkki\xE4/01.rs</a>.</p><h4 id="koodi" tabindex="-1"><a class="header-anchor" href="#koodi" aria-hidden="true">#</a> Koodi</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Tietokannan muuttujan nimi Env
  Test // Tietokantatesti
}

fn main() -&gt; Result&lt;()&gt; {
  // Tulostaa libmdbx:n versionumeron
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Monis\xE4ikeinen lukeminen ja kirjoittaminen
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
</code></pre></div><h4 id="suorita-tuotos" tabindex="-1"><a class="header-anchor" href="#suorita-tuotos" aria-hidden="true">#</a> Suorita tuotos</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/01.mdb
mdbx version https://github.com/erthink/libmdbx/releases/tag/v0.11.2
test1 get Ok(Some(Bin([6])))
[6]
</code></pre></div><h4 id="koodin-kuvaus" tabindex="-1"><a class="header-anchor" href="#koodin-kuvaus" aria-hidden="true">#</a> Koodin kuvaus</h4><h5 id="env-rw-tietokannan-maarittaminen" tabindex="-1"><a class="header-anchor" href="#env-rw-tietokannan-maarittaminen" aria-hidden="true">#</a> <code>env_rw!</code> Tietokannan m\xE4\xE4ritt\xE4minen</h5><p>Koodi alkaa makrolla env_rw, jolla on 4 parametria.</p><ol><li><p>Tietokantaymp\xE4rist\xF6n muuttujan nimi</p></li><li><p>Palauttaa objektin, <a href="https://docs.rs/mdbx/latest/src/mdbx/env.rs.html#27-35" target="_blank" rel="noopener noreferrer">mdbx:: env:: Config</a>.</p></li></ol><p>K\xE4yt\xE4mme oletuskonfiguraatiota, koska <code>Env</code> toteuttaa <code>From&lt;Into&lt;PathBuf&gt;&gt;</code>, joten tietokantapolku <code>into()</code> riitt\xE4\xE4, ja oletuskonfiguraatio on seuraava.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
MDBX // Tietokannan muuttujan nimi Env
Test // Tietokantatesti
}

fn main() -&gt; Result&lt;()&gt; {
// Tulostaa libmdbx:n versionumeron
unsafe {
  println!(
    &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
    mdbx_version.major, mdbx_version.minor, mdbx_version.release
  );
}

// Monis\xE4ikeinen lukeminen ja kirjoittaminen
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
    sync_period : 65536, // 1/65536 sekunnissa
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
</code></pre></div><p><code>max_db</code> T\xE4m\xE4 asetus voidaan nollata joka kerta, <a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">kun</a> tietokanta avataan, mutta liian suuri asetus vaikuttaa suorituskykyyn, joten aseta se vain tarpeen mukaan.</p><p>Katso muiden parametrien merkitys <a href="https://erthink.github.io/libmdbx/group__c__opening.html#ga9138119a904355d245777c4119534061" target="_blank" rel="noopener noreferrer">libmdbx:n dokumentaatiosta</a>.</p><ol start="3"><li><p>Tietokannan lukutapahtumamakron nimi, oletusarvo on <code>r</code></p></li><li><p>Tietokannan kirjoitustapahtumamakron nimi, oletusarvo on <code>w</code></p></li></ol><p>Parametrit 3 ja 4 voidaan j\xE4tt\xE4\xE4 pois, jolloin k\xE4ytet\xE4\xE4n oletusarvoja.</p><h5 id="makrolaajennus" tabindex="-1"><a class="header-anchor" href="#makrolaajennus" aria-hidden="true">#</a> Makrolaajennus</h5><p>Jos haluat n\xE4hd\xE4, mit\xE4 makrotaika tekee, voit laajentaa sen <code>cargo expand --example 01</code> -makrolla, joka on ensin asennettava. <code>cargo install cargo-expand</code></p><p>Alla on kuvakaappaus laajennetusta koodista.</p><p><img src="//irmw.gumlet.io/PDzEtT.png" alt="PDzEtT"></p><h5 id="anyhow-ja-lazy-static" tabindex="-1"><a class="header-anchor" href="#anyhow-ja-lazy-static" aria-hidden="true">#</a> anyhow ja lazy_static</h5><p>Laajennetusta kuvakaappauksesta n\xE4et, ett\xE4 k\xE4ytet\xE4\xE4n osoitteita <code>lazy_static</code> ja <code>anyhow</code>.</p><p><a href="https://rustmagazine.github.io/rust_magazine_2021/chapter_2/rust_error_handle.html#thiserror--anyhow" target="_blank" rel="noopener noreferrer">anyhow</a> on virheenk\xE4sittelykirjasto rustille.</p><p><a href="https://juejin.cn/post/7007336922817232927" target="_blank" rel="noopener noreferrer">lazy_static</a> on staattinen muuttuja, jonka alustaminen on viiv\xE4stetty.</p><p>N\xE4m\xE4 kaksi kirjastoa ovat hyvin yleisi\xE4, enk\xE4 aio k\xE4sitell\xE4 niit\xE4 tarkemmin.</p><h5 id="makro-mdbx" tabindex="-1"><a class="header-anchor" href="#makro-mdbx" aria-hidden="true">#</a> Makro mdbx!</h5><p><a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html" target="_blank" rel="noopener noreferrer"><code>mdbx!</code></a> on <a href="https://mp.weixin.qq.com/s/YT_HNFDCQ_IyocvBkRNJnA" target="_blank" rel="noopener noreferrer">toimenpidemakro.</a></p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Tietokannan muuttujan nimi Env
  Test // Tietokantatesti
}

fn main() -&gt; Result&lt;()&gt; {
  // Tulostaa libmdbx:n versionumeron
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Monis\xE4ikeinen lukeminen ja kirjoittaminen
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
      sync_period : 65536, // 1/65536 sekunnissa
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
 MDBX // Tietokannan muuttujan nimi Env
 Test // Tietokantatesti
}
</code></pre></div><p>Ensimm\xE4inen rivi on tietokantaymp\xE4rist\xF6n muuttujan nimi.</p><p>Toinen rivi on tietokannan nimi</p><p>Tietokantoja voi olla useampi kuin yksi, yksi rivi kutakin tietokantaa kohden.</p><h5 id="kierteet-ja-tapahtumat" tabindex="-1"><a class="header-anchor" href="#kierteet-ja-tapahtumat" aria-hidden="true">#</a> Kierteet ja tapahtumat</h5><p>Yll\xE4 oleva koodi havainnollistaa monis\xE4ikeist\xE4 lukemista ja kirjoittamista.</p><p>On t\xE4rke\xE4\xE4 huomata, ett\xE4 <strong>samassa s\xE4ikeess\xE4</strong> voi olla kerrallaan <strong>vain yksi transaktio, ja jos s\xE4ikeess\xE4 on avoinna useampi kuin yksi transaktio, ohjelma kaatuu</strong>.</p><p>Tapahtuma sidotaan soveltamisalan p\xE4\xE4ttyess\xE4.</p><h5 id="binaaritietojen-lukeminen-ja-kirjoittaminen" tabindex="-1"><a class="header-anchor" href="#binaaritietojen-lukeminen-ja-kirjoittaminen" aria-hidden="true">#</a> Bin\xE4\xE4ritietojen lukeminen ja kirjoittaminen</h5><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Tietokannan muuttujan nimi Env
  Test // Tietokantatesti
}

fn main() -&gt; Result&lt;()&gt; {
  // Tulostaa libmdbx:n versionumeron
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Monis\xE4ikeinen lukeminen ja kirjoittaminen
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
      sync_period : 65536, // 1/65536 sekunnissa
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
 MDBX // Tietokannan muuttujan nimi Env
 Test // Tietokantatesti
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
</code></pre></div><p><code>set</code> on kirjoittaminen, <code>get</code> on lukeminen, ja mik\xE4 tahansa objekti, joka implementoi <a href="https://doc.rust-lang.org/std/convert/trait.AsRef.html" target="_blank" rel="noopener noreferrer"><code>AsRef&lt;[u8]&gt;</code></a> objekti voidaan kirjoittaa tietokantaan.</p><p><code>get</code> Tuloksena on <code>Ok(Some(Bin([6])))</code>, joka voidaan muuntaa muotoon <code>&amp;[u8]</code>.</p><h3 id="esimerkki-2-tietotyypit-tietokannan-liput-poistaminen-lapikaynti" tabindex="-1"><a class="header-anchor" href="#esimerkki-2-tietotyypit-tietokannan-liput-poistaminen-lapikaynti" aria-hidden="true">#</a> Esimerkki 2: Tietotyypit, tietokannan liput, poistaminen, l\xE4pik\xE4ynti</h3><p>Katsotaanpa toista <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">esimerkki\xE4/02.rs</a>:</p><p>T\xE4ss\xE4 esimerkiss\xE4 <code>env_rw!</code> j\xE4tet\xE4\xE4n pois ja kolmas ja nelj\xE4s argumentti ( <code>r</code>, <code>w</code>) j\xE4tet\xE4\xE4n pois.</p><h4 id="koodi-1" tabindex="-1"><a class="header-anchor" href="#koodi-1" aria-hidden="true">#</a> Koodi</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Tietokannan muuttujan nimi Env
  Test // Tietokantatesti
}

fn main() -&gt; Result&lt;()&gt; {
  // Tulostaa libmdbx:n versionumeron
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Monis\xE4ikeinen lukeminen ja kirjoittaminen
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
      sync_period : 65536, // 1/65536 sekunnissa
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
 MDBX // Tietokannan muuttujan nimi Env
 Test // Tietokantatesti
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
  MDBX // Tietokannan muuttujien nimet ENV
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
  // Nopea kirjoittaminen
  w!(Test1.set [2, 3],[4, 5]);

  // Nopea lukeminen
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

  // Useita operaatioita useille tietokannoille samassa tapahtumassa
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

    // Tapahtuma sidotaan soveltamisalan p\xE4\xE4ttyess\xE4.
  }

  Ok(())
}
</code></pre></div><h4 id="suorita-tuotos-1" tabindex="-1"><a class="header-anchor" href="#suorita-tuotos-1" aria-hidden="true">#</a> Suorita tuotos</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/02.mdb

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
</code></pre></div><h4 id="nopea-lukeminen-ja-kirjoittaminen" tabindex="-1"><a class="header-anchor" href="#nopea-lukeminen-ja-kirjoittaminen" aria-hidden="true">#</a> Nopea lukeminen ja kirjoittaminen</h4><p>Jos haluamme vain lukea tai kirjoittaa yhden rivin dataa, voimme k\xE4ytt\xE4\xE4 makron syntaktista sokeria.</p><p>Lue tiedot</p><div class="language-text ext-text"><pre class="language-text"><code>r!(Test1.get [2, 3])
</code></pre></div><p>Tietojen kirjoittaminen</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Tietokannan muuttujan nimi Env
  Test // Tietokantatesti
}

fn main() -&gt; Result&lt;()&gt; {
  // Tulostaa libmdbx:n versionumeron
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Monis\xE4ikeinen lukeminen ja kirjoittaminen
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
      sync_period : 65536, // 1/65536 sekunnissa
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
 MDBX // Tietokannan muuttujan nimi Env
 Test // Tietokantatesti
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
  MDBX // Tietokannan muuttujien nimet ENV
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
  // Nopea kirjoittaminen
  w!(Test1.set [2, 3],[4, 5]);

  // Nopea lukeminen
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

  // Useita operaatioita useille tietokannoille samassa tapahtumassa
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

    // Tapahtuma sidotaan soveltamisalan p\xE4\xE4ttyess\xE4.
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
</code></pre></div><p>Kaikki yhdell\xE4 rivill\xE4, kuten <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a>:ss\xE4 on kirjoitettu.</p><h4 id="tietotyypit" tabindex="-1"><a class="header-anchor" href="#tietotyypit" aria-hidden="true">#</a> Tietotyypit</h4><p>Esimerkiss\xE4 examples/02 <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">.</a> rs tietokannan m\xE4\xE4ritelm\xE4 n\xE4ytt\xE4\xE4 t\xE4lt\xE4 :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Tietokannan muuttujan nimi Env
  Test // Tietokantatesti
}

fn main() -&gt; Result&lt;()&gt; {
  // Tulostaa libmdbx:n versionumeron
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Monis\xE4ikeinen lukeminen ja kirjoittaminen
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
      sync_period : 65536, // 1/65536 sekunnissa
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
 MDBX // Tietokannan muuttujan nimi Env
 Test // Tietokantatesti
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
  MDBX // Tietokannan muuttujien nimet ENV
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
  // Nopea kirjoittaminen
  w!(Test1.set [2, 3],[4, 5]);

  // Nopea lukeminen
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

  // Useita operaatioita useille tietokannoille samassa tapahtumassa
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

    // Tapahtuma sidotaan soveltamisalan p\xE4\xE4ttyess\xE4.
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
</code></pre></div><p>jossa <code>key</code> ja <code>val</code> m\xE4\xE4rittelev\xE4t avainten ja arvojen tietotyypit.</p><p>Jos yrit\xE4t kirjoittaa tietotyypin, joka ei vastaa m\xE4\xE4ritelty\xE4, saat virheilmoituksen, kuten alla olevassa kuvassa n\xE4kyy :</p><p><img src="//irmw.gumlet.io/4rFTC6.png" alt=""></p><p>Oletustietotyyppi on <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Bin.html" target="_blank" rel="noopener noreferrer"><code>Bin</code></a> voidaan kirjoittaa mihin tahansa dataan, joka toteuttaa <code>AsRef&lt;[u8]&gt;</code>.</p><p>Jos avain tai arvo on merkkijono <code>utf8</code>, tietotyypiksi voidaan m\xE4\xE4ritt\xE4\xE4 <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Str.html" target="_blank" rel="noopener noreferrer"><code>Str</code></a> .</p><p><a href="https://doc.rust-lang.org/std/ops/trait.Deref.html" target="_blank" rel="noopener noreferrer">Kvantifioinnin poistaminen</a> <code>Str</code> palauttaa merkkijonon, joka on samanlainen kuin <code>let k:&amp;str = &amp;k;</code>.</p><p>Lis\xE4ksi <code>Str</code> toteuttaa my\xF6s <a href="https://doc.rust-lang.org/std/fmt/trait.Display.html" target="_blank" rel="noopener noreferrer"><code>std::fmt::Display</code></a> , <code>println!(&quot;{}&quot;,k)</code> tulostaa luettavan merkkijonon.</p><h5 id="esiasetetut-tietotyypit" tabindex="-1"><a class="header-anchor" href="#esiasetetut-tietotyypit" aria-hidden="true">#</a> Esiasetetut tietotyypit</h5><p><code>Str</code> ja <code>Bin</code>:n lis\xE4ksi wrapper sis\xE4lt\xE4\xE4 my\xF6s datatuen <a href="https://docs.rs/mdbx/latest/src/mdbx/type.rs.html#48" target="_blank" rel="noopener noreferrer">usize, u128, u64, u32, u16, u8, isize, i128, i64, i32, i16, i8, f32, f64</a>.</p><h4 id="tietokannan-liput" tabindex="-1"><a class="header-anchor" href="#tietokannan-liput" aria-hidden="true">#</a> Tietokannan liput</h4><p>N\xE4et <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a>:n tietoihin lis\xE4tyt tietokantalippuvalinnat osoitteessa <code>Test4</code>. <code>flag DUPSORT</code></p><p>Libmdbx-tietokannassa on useita lippuja ( <a href="https://erthink.github.io/libmdbx/group__c__dbi.html#gafe3bddb297b3ab0d828a487c5726f76a" target="_blank" rel="noopener noreferrer"><code>MDBX_db_flags_t</code></a> ), jotka voidaan asettaa.</p><ul><li>REVERSEKEY k\xE4ytt\xE4\xE4 k\xE4\xE4nteist\xE4 merkkijonovertailua avaimille. (hy\xF6dyllinen k\xE4ytett\xE4ess\xE4 pieni\xE4 koodattuja numeroita avaimina)</li><li>DUPSORT k\xE4ytt\xE4\xE4 lajiteltuja kaksoiskappaleita eli sallii useita arvoja yhdelle avaimelle.</li><li>INTEGERKEY Alkuper\xE4inen tavuj\xE4rjestetty numeerinen avain uint32_t tai uint64_t. Avainten on oltava samankokoisia ja kohdistettuja, kun ne annetaan argumenttina.</li><li>DUPFIXED Tietoarvojen koon on oltava sama, jos DUPSORT on k\xE4yt\xF6ss\xE4 (mahdollistaa arvojen m\xE4\xE4r\xE4n nopean laskennan).</li><li>DUPSORT ja DUPFIXED tarvitaan INTEGERDUP:lle; arvot ovat kokonaislukuja (kuten INTEGERKEY). Kaikkien data-arvojen on oltava samankokoisia, ja ne on kohdistettava, kun ne v\xE4litet\xE4\xE4n parametreina.</li><li>REVERSEDUP k\xE4ytt\xE4\xE4 DUPSORTia; k\xE4\xE4nteist\xE4 merkkijonovertailua k\xE4ytet\xE4\xE4n data-arvoihin.</li><li>CREATE luo tietokannan, jos sit\xE4 ei ole olemassa (lis\xE4tty oletusarvoisesti).</li><li>DB_ACCEDE Avaa olemassa olevan alitietokannan, joka on luotu tuntemattoman lipun avulla.<br> T\xE4m\xE4 DB_ACCEDE-lippu on tarkoitettu tuntemattomilla lipuilla (REVERSEKEY, DUPSORT, INTEGERKEY, DUPFIXED, INTEGERDUP ja REVERSEDUP) luotujen olemassa olevien alitietokantojen avaamiseen.<br> T\xE4ss\xE4 tapauksessa alitietokanta ei palauta INCOMPATIBLE-virhett\xE4, vaan se avataan sen luomisessa k\xE4ytetyill\xE4 lipuilla, ja sovellus voi sitten m\xE4\xE4ritt\xE4\xE4 todelliset liput mdbx_dbi_flags()-ohjelmalla.</li></ul><h5 id="dupsort-yksi-avain-vastaa-useampaa-kuin-yhta-arvoa" tabindex="-1"><a class="header-anchor" href="#dupsort-yksi-avain-vastaa-useampaa-kuin-yhta-arvoa" aria-hidden="true">#</a> DUPSORT : Yksi avain vastaa useampaa kuin yht\xE4 arvoa.</h5><p><code>DUPSORT</code>tarkoittaa, ett\xE4 avain voi vastata useampaa kuin yht\xE4 arvoa.</p><p>Jos haluat asettaa useita lippuja, kirjoita seuraavasti <code>flag DUPSORT | DUPFIXED</code></p><h5 id="dup-key-iteraattori-joka-palauttaa-kaikki-avainta-vastaavat-arvot" tabindex="-1"><a class="header-anchor" href="#dup-key-iteraattori-joka-palauttaa-kaikki-avainta-vastaavat-arvot" aria-hidden="true">#</a> <code>.dup(key)</code> iteraattori, joka palauttaa kaikki avainta vastaavat arvot.</h5><p>T\xE4m\xE4 toiminto on k\xE4ytett\xE4viss\xE4 vain tietokannoissa, jotka on merkitty osoitteella <code>DUPSORT</code> ja joissa avain voi vastata useampaa kuin yht\xE4 arvoa.</p><p><code>DUPSORT</code> -tietokannoissa <code>get</code> palauttaa vain t\xE4m\xE4n avaimen ensimm\xE4isen arvon. Jos haluat saada kaikki arvot, k\xE4yt\xE4 <code>dup</code>.</p><h5 id="oletusarvoisesti-automaattisesti-liitetyt-tietokannan-liput" tabindex="-1"><a class="header-anchor" href="#oletusarvoisesti-automaattisesti-liitetyt-tietokannan-liput" aria-hidden="true">#</a> Oletusarvoisesti automaattisesti liitetyt tietokannan liput</h5><p>Kun tietotyyppi on <code>u32</code> / <code>u64</code> / <code>usize</code>, tietokantalippu lis\xE4t\xE4\xE4n automaattisesti. <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#105" target="_blank" rel="noopener noreferrer"><code>INTEGERKEY</code></a> .</p><p>Koneissa, joissa on pienten numeroiden koodaus, muut numerotyypit lis\xE4t\xE4\xE4n automaattisesti. <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#108" target="_blank" rel="noopener noreferrer"><code>REVERSEKEY</code></a> Tietokantalippu lis\xE4t\xE4\xE4n automaattisesti, kun tietotyyppi on / / .</p><h4 id="tietojen-poistaminen" tabindex="-1"><a class="header-anchor" href="#tietojen-poistaminen" aria-hidden="true">#</a> Tietojen poistaminen</h4><h5 id="del-key-nappaimen-poistaminen" tabindex="-1"><a class="header-anchor" href="#del-key-nappaimen-poistaminen" aria-hidden="true">#</a> <code>.del(key)</code> N\xE4pp\xE4imen poistaminen</h5><p><code>.del(val)</code> Poistaa avainta vastaavan arvon.</p><p>Jos tietokannassa on merkint\xE4 <code>DUPSORT</code>, kaikki t\xE4m\xE4n avaimen alla olevat arvot poistetaan.</p><p>Palauttaa <code>true</code>, jos tietoja on poistettu, ja <code>false</code>, jos tietoja ei ole poistettu.</p><h5 id="del-val-key-val-tasmallisen-vastaavuuden-poisto" tabindex="-1"><a class="header-anchor" href="#del-val-key-val-tasmallisen-vastaavuuden-poisto" aria-hidden="true">#</a> <code>.del_val(key,val)</code> T\xE4sm\xE4llisen vastaavuuden poisto</h5><p><code>.del_val(key,val)</code> Poistaa avain-arvoparit, jotka t\xE4sm\xE4lleen vastaavat sy\xF6tt\xF6parametreja.</p><p>Palauttaa <code>true</code>, jos tietoja on poistettu, ja <code>false</code>, jos tietoja ei ole poistettu.</p><h4 id="traversal" tabindex="-1"><a class="header-anchor" href="#traversal" aria-hidden="true">#</a> Traversal</h4><h5 id="perakkainen-lapikaynti" tabindex="-1"><a class="header-anchor" href="#perakkainen-lapikaynti" aria-hidden="true">#</a> per\xE4kk\xE4inen l\xE4pik\xE4ynti</h5><p>Seuraavien toimenpiteiden toteuttamisen vuoksi <a href="https://doc.rust-lang.org/std/iter/trait.IntoIterator.html" target="_blank" rel="noopener noreferrer"><code>std::iter::IntoIterator</code></a> . voit kulkea suoraan seuraavasti :</p><p><code>for (k, v) in test1</code></p><h5 id="rev-kaanteinen-jarjestyksen-lapikaynti" tabindex="-1"><a class="header-anchor" href="#rev-kaanteinen-jarjestyksen-lapikaynti" aria-hidden="true">#</a> <code>.rev()</code> K\xE4\xE4nteinen j\xE4rjestyksen l\xE4pik\xE4ynti</h5><p><code>for (k, v) in test4.rev()</code></p><h5 id="lajittelu" tabindex="-1"><a class="header-anchor" href="#lajittelu" aria-hidden="true">#</a> Lajittelu</h5><p>Libmdbx-avaimet on lajiteltu <a href="https://zh.wikipedia.org/wiki/%E5%AD%97%E5%85%B8%E5%BA%8F" target="_blank" rel="noopener noreferrer">sanakirjaj\xE4rjestykseen</a>.</p><ul><li><p>Kun kyseess\xE4 ovat merkitsem\xE4tt\xF6m\xE4t luvut</p><p>on lajiteltu pienimm\xE4st\xE4 suurimpaan, koska tietokannan liput lis\xE4t\xE4\xE4n automaattisesti ( <code>u32</code>/ <code>u64</code>/ <code>usize</code> lis\xE4t\xE4\xE4n osoitteeseen <code>INTEGERKEY</code>, muut lis\xE4t\xE4\xE4n osoitteeseen <code>REVERSEKEY</code> konekoodista riippuen).</p></li><li><p>Allekirjoitetuille luvuille</p><p>j\xE4rjestys on: ensin 0, sitten kaikki positiiviset luvut pienimm\xE4st\xE4 suurimpaan, sitten kaikki negatiiviset luvut pienimm\xE4st\xE4 suurimpaan.</p></li></ul><h3 id="intervalli-iteraattorit" tabindex="-1"><a class="header-anchor" href="#intervalli-iteraattorit" aria-hidden="true">#</a> Intervalli-iteraattorit</h3><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Tietokannan muuttujan nimi Env
  Test // Tietokantatesti
}

fn main() -&gt; Result&lt;()&gt; {
  // Tulostaa libmdbx:n versionumeron
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Monis\xE4ikeinen lukeminen ja kirjoittaminen
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
      sync_period : 65536, // 1/65536 sekunnissa
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
 MDBX // Tietokannan muuttujan nimi Env
 Test // Tietokantatesti
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
  MDBX // Tietokannan muuttujien nimet ENV
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
  // Nopea kirjoittaminen
  w!(Test1.set [2, 3],[4, 5]);

  // Nopea lukeminen
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

  // Useita operaatioita useille tietokannoille samassa tapahtumassa
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

    // Tapahtuma sidotaan soveltamisalan p\xE4\xE4ttyess\xE4.
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
</code></pre></div><h4 id="suorita-tulostus" tabindex="-1"><a class="header-anchor" href="#suorita-tulostus" aria-hidden="true">#</a> Suorita tulostus</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/range.mdb

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
</code></pre></div><h4 id="range-begin-end-intervalli-iteraatio" tabindex="-1"><a class="header-anchor" href="#range-begin-end-intervalli-iteraatio" aria-hidden="true">#</a> <code>.range(begin..end)</code> Intervalli Iteraatio</h4><p>Lukujen osalta intervalli on numeerinen intervalli.</p><p>Bin\xE4\xE4rist\xE4 laskentatapaa varten voidaan muodostaa sama intervalli, esim. seuraavasti.</p><div class="language-text ext-text"><pre class="language-text"><code>let begin : &amp;[u8] = &amp;[1,1];
for (k,v) in test0.range(begin..=&amp;[2]) {}
</code></pre></div><p>Jos <code>begin</code> on suurempi kuin <code>end</code>, se jatkaa toistoa taaksep\xE4in.</p><p>Esimerkiksi <code>test1.range(5..2)</code> antaa seuraavan tulosteen :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Tietokannan muuttujan nimi Env
  Test // Tietokantatesti
}

fn main() -&gt; Result&lt;()&gt; {
  // Tulostaa libmdbx:n versionumeron
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Monis\xE4ikeinen lukeminen ja kirjoittaminen
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
      sync_period : 65536, // 1/65536 sekunnissa
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
 MDBX // Tietokannan muuttujan nimi Env
 Test // Tietokantatesti
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
  MDBX // Tietokannan muuttujien nimet ENV
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
  // Nopea kirjoittaminen
  w!(Test1.set [2, 3],[4, 5]);

  // Nopea lukeminen
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

  // Useita operaatioita useille tietokannoille samassa tapahtumassa
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

    // Tapahtuma sidotaan soveltamisalan p\xE4\xE4ttyess\xE4.
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
</code></pre></div><p>Intervalli-iteraatiota ei tueta <a href="https://doc.rust-lang.org/std/ops/struct.RangeFull.html" target="_blank" rel="noopener noreferrer"><code>RangeFull</code></a> , eli <code>..</code>ei ole tuettu, k\xE4yt\xE4 sen sijaan edell\xE4 mainittua <a href="#%E9%81%8D%E5%8E%86">kiertoa</a>.</p><h4 id="rev-range-kaanteiset-aikavalit" tabindex="-1"><a class="header-anchor" href="#rev-range-kaanteiset-aikavalit" aria-hidden="true">#</a> <code>.rev_range</code> K\xE4\xE4nteiset aikav\xE4lit</h4><p>Jos haluat saada k\xE4\xE4nteisen aikav\xE4lin, joka on pienempi tai yht\xE4 suuri kuin jokin arvo, voit tehd\xE4 seuraavasti</p><div class="language-text ext-text"><pre class="language-text"><code>test2.rev_range(2..)
</code></pre></div><p>Tulos on</p><div class="language-text ext-text"><pre class="language-text"><code>(2, 4)
(1, 5)
(0, 0)
</code></pre></div><p>Jompaakumpaa <code>begin</code> tai <code>end</code> ei saa asettaa k\xE4\xE4nteiselle aikav\xE4lille, sill\xE4 jos molemmat asetetaan, voit aina k\xE4ytt\xE4\xE4 <code>range(end..begin)</code> saman vaikutuksen aikaansaamiseksi.</p><h3 id="tietotyyppien-mukauttaminen" tabindex="-1"><a class="header-anchor" href="#tietotyyppien-mukauttaminen" aria-hidden="true">#</a> Tietotyyppien mukauttaminen</h3><p>Demokoodi on saatavilla osoitteessa <a href="https://github.com/rmw-lib/mdbx-example/blob/master/01/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/01.</a></p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Tietokannan muuttujan nimi Env
  Test // Tietokantatesti
}

fn main() -&gt; Result&lt;()&gt; {
  // Tulostaa libmdbx:n versionumeron
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Monis\xE4ikeinen lukeminen ja kirjoittaminen
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
      sync_period : 65536, // 1/65536 sekunnissa
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
 MDBX // Tietokannan muuttujan nimi Env
 Test // Tietokantatesti
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
  MDBX // Tietokannan muuttujien nimet ENV
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
  // Nopea kirjoittaminen
  w!(Test1.set [2, 3],[4, 5]);

  // Nopea lukeminen
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

  // Useita operaatioita useille tietokannoille samassa tapahtumassa
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

    // Tapahtuma sidotaan soveltamisalan p\xE4\xE4ttyess\xE4.
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
</code></pre></div><p>Tulos on seuraava</p><div class="language-text ext-text"><pre class="language-text"><code>Some(City { name: &quot;BeiJing&quot;, lnglat: (11640, 3990) })
</code></pre></div><p>Esimerkiss\xE4 k\xE4yt\xE4mme mukautettua tyyppi\xE4 <a href="https://github.com/koute/speedy" target="_blank" rel="noopener noreferrer"><code>speedy</code></a> tehd\xE4 sarjoitus <a href="https://github.com/djkoloski/rust_serialization_benchmark" target="_blank" rel="noopener noreferrer">( <code>speedy</code> suorituskyvyn arviointi</a> ) <a href="https://github.com/djkoloski/rust_serialization_benchmark" target="_blank" rel="noopener noreferrer">.</a></p><p>Mukautetun tyypin toteutus <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.FromMdbx.html" target="_blank" rel="noopener noreferrer"><code>FromMdbx</code></a> ja <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.ToAsRef.html" target="_blank" rel="noopener noreferrer"><code>ToAsRef</code></a> voidaan sitten s\xE4ilytt\xE4\xE4 osoitteessa <code>mdbx</code>.</p><p>Jos k\xE4yt\xE4t tietty\xE4 sarjallistamiskirjastoa, voit my\xF6s mukauttaa <a href="https://blog.logrocket.com/macros-in-rust-a-tutorial-with-examples/" target="_blank" rel="noopener noreferrer">attribuuttimakroja</a> prosessin yksinkertaistamiseksi.</p><h4 id="mukautettujen-tyyppien-yksinkertaistaminen-attribuuttimakrojen-avulla" tabindex="-1"><a class="header-anchor" href="#mukautettujen-tyyppien-yksinkertaistaminen-attribuuttimakrojen-avulla" aria-hidden="true">#</a> Mukautettujen tyyppien yksinkertaistaminen attribuuttimakrojen avulla</h4><p>Attribuuttimakron toteuttaminen on yht\xE4 yksinkertaista kuin <a href="https://crates.io/crates/mdbx_speedy" target="_blank" rel="noopener noreferrer"><code>mdbx_speedy</code></a> Attribuutin makrokoodi on seuraava :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Tietokannan muuttujan nimi Env
  Test // Tietokantatesti
}

fn main() -&gt; Result&lt;()&gt; {
  // Tulostaa libmdbx:n versionumeron
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Monis\xE4ikeinen lukeminen ja kirjoittaminen
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
      sync_period : 65536, // 1/65536 sekunnissa
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
 MDBX // Tietokannan muuttujan nimi Env
 Test // Tietokantatesti
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
  MDBX // Tietokannan muuttujien nimet ENV
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
  // Nopea kirjoittaminen
  w!(Test1.set [2, 3],[4, 5]);

  // Nopea lukeminen
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

  // Useita operaatioita useille tietokannoille samassa tapahtumassa
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

    // Tapahtuma sidotaan soveltamisalan p\xE4\xE4ttyess\xE4.
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
</code></pre></div><p>Aloita omassa projektissasi osoitteesta <code>cargo add mdbx-speedy</code>, niin voit nopeasti muokata tyyppi\xE4 (katso demokoodi osoitteesta <a href="https://github.com/rmw-lib/mdbx-example/blob/master/02/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/02</a> ).</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Tietokannan muuttujan nimi Env
  Test // Tietokantatesti
}

fn main() -&gt; Result&lt;()&gt; {
  // Tulostaa libmdbx:n versionumeron
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Monis\xE4ikeinen lukeminen ja kirjoittaminen
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
      sync_period : 65536, // 1/65536 sekunnissa
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
 MDBX // Tietokannan muuttujan nimi Env
 Test // Tietokantatesti
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
  MDBX // Tietokannan muuttujien nimet ENV
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
  // Nopea kirjoittaminen
  w!(Test1.set [2, 3],[4, 5]);

  // Nopea lukeminen
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

  // Useita operaatioita useille tietokannoille samassa tapahtumassa
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

    // Tapahtuma sidotaan soveltamisalan p\xE4\xE4ttyess\xE4.
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
</code></pre></div><p>Tietenkin on silti \xE4rsytt\xE4v\xE4\xE4 kirjoittaa <code>#[derive(PartialEq, Debug, Readable, Writable, MdbxSpeedy)]</code> toistuvasti, joten voit k\xE4ytt\xE4\xE4 komentoa <a href="https://docs.rs/derive-alias/0.1.0/derive_alias" target="_blank" rel="noopener noreferrer"><code>derive_alias</code></a> koodin yksinkertaistamiseksi entisest\xE4\xE4n.</p><h2 id="huomautus" tabindex="-1"><a class="header-anchor" href="#huomautus" aria-hidden="true">#</a> Huomautus</h2><h3 id="avaimen-pituus" tabindex="-1"><a class="header-anchor" href="#avaimen-pituus" aria-hidden="true">#</a> Avaimen pituus</h3><ul><li>Minimi 0, maksimi \u2248 \xBD sivun koko (oletusarvo 4K-sivun avaimen maksimikoko on 2022 tavua), asetetaan tietokannan alustamisen yhteydess\xE4 <code>pagesize</code> voidaan m\xE4\xE4ritt\xE4\xE4 enint\xE4\xE4n <code>65536</code>ja sen on oltava 2:n potenssi.</li></ul><h2 id="alaviitteet" tabindex="-1"><a class="header-anchor" href="#alaviitteet" aria-hidden="true">#</a> Alaviitteet</h2><p>Ne mainitsevat LMDB:st\xE4 MDBX:\xE4\xE4n siirtymisen edut.</p><blockquote><p>Erigon aloitti BoltDB-tietokannan avulla, lis\xE4si sitten tuen BadgerDB:lle ja siirtyi lopulta kokonaan LMDB:hen.Jossain vaiheessa t\xF6rm\xE4simme LMDB:n k\xE4yt\xF6st\xE4 johtuviin vakausongelmiin, joita tekij\xE4t eiv\xE4t olleet ennakoineet. Sittemmin olemme tutustuneet hyvin tuettuun LMDB:n johdannaisversioon nimelt\xE4 MDBX ja toivomme voivamme k\xE4ytt\xE4\xE4 sen vakausparannuksia ja mahdollisesti tehd\xE4 enemm\xE4n yhteisty\xF6t\xE4 tulevaisuudessa.MDBX:n integrointi on nyt valmis ja on aika jatkaa testausta ja dokumentointia.</p><p>LMDB:st\xE4 MDBX:\xE4\xE4n siirtymisen edut.</p><ol><li><p>Tietokantatiedostojen kasvu &quot;tila (geometria)&quot; toimii oikein. T\xE4m\xE4 on t\xE4rke\xE4\xE4 erityisesti Windowsissa. LMDB:ss\xE4 on m\xE4\xE4ritett\xE4v\xE4 muistikartan koko kerran etuk\xE4teen (t\xE4ll\xE4 hetkell\xE4 k\xE4yt\xE4mme oletuksena 2 Tb), ja jos tietokantatiedosto kasvaa yli t\xE4m\xE4n rajan, prosessi on k\xE4ynnistett\xE4v\xE4 uudelleen. Windowsissa muistikartan koon asettaminen 2 Tt:iin tekisi tietokantatiedostosta aluksi 2 Tt:n kokoisen, mik\xE4 ei ole kovin k\xE4tev\xE4\xE4. MDBX:ss\xE4 muistikartan kokoa kasvatetaan 2 Gt:n askelin. T\xE4m\xE4 tarkoittaa satunnaista uudelleenm\xE4\xE4rityst\xE4, mutta johtaa parempaan k\xE4ytt\xF6kokemukseen.</p></li><li><p>MDBX:ss\xE4 on tiukemmat tarkastukset tapahtumank\xE4sittelyn samanaikaiselle k\xE4yt\xF6lle ja p\xE4\xE4llekk\xE4isille luku- ja kirjoitustapahtumille samassa suorituss\xE4ikeess\xE4. N\xE4in pystymme havaitsemaan joitakin ei-selvi\xE4 virheit\xE4 ja tekem\xE4\xE4n k\xE4ytt\xE4ytymisest\xE4 ennakoitavampaa.<br> Yli viiden vuoden aikana (sen j\xE4lkeen, kun se erotettiin LMDB:st\xE4) MDBX:\xE4\xE4n on kertynyt suuri m\xE4\xE4r\xE4 tietoturvakorjauksia ja heisenbug-korjauksia, jotka ovat tietojemme mukaan edelleen olemassa LMDB:ss\xE4. Osa n\xE4ist\xE4 havaittiin testauksemme aikana, ja MDBX:n yll\xE4pit\xE4j\xE4t ottivat ne vakavasti ja korjasivat ne nopeasti.</p></li><li><p>Kun kyseess\xE4 ovat tietokannat, jotka muokkaavat tietoja jatkuvasti, ne luovat melkoisen m\xE4\xE4r\xE4n uudelleen k\xE4ytett\xE4viss\xE4 olevaa tilaa (joka LMDB-terminologiassa tunnetaan my\xF6s nimell\xE4 &quot;freelist&quot;). LMDB:t\xE4 on jouduttu korjaamaan, jotta on voitu korjata vakavimmat puutteet uudelleenk\xE4ytett\xE4v\xE4n tilan k\xE4sittelyss\xE4 <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide" target="_blank" rel="noopener noreferrer">(analyysi</a> ). MDBX:ss\xE4 on kiinnitetty <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide%EF%BC%89%E3%80%82MDBX%E5%AF%B9%E5%8F%AF%E5%9B%9E%E6%94%B6%E7%A9%BA%E9%97%B4%E7%9A%84%E6%9C%89%E6%95%88%E5%A4%84%E7%90%86%E8%BF%9B%E8%A1%8C%E4%BA%86%E7%89%B9%E5%88%AB%E7%9A%84%E5%85%B3%E6%B3%A8%EF%BC%8C%E5%88%B0%E7%9B%AE%E5%89%8D%E4%B8%BA%E6%AD%A2%EF%BC%8C%E8%BF%98%E4%B8%8D%E9%9C%80%E8%A6%81%E6%89%93%E8%A1%A5%E4%B8%81%E3%80%82" target="_blank" rel="noopener noreferrer">erityist\xE4 huomiota uudelleenk\xE4ytett\xE4v\xE4n tilan tehokkaaseen k\xE4sittelyyn, eik\xE4 sit\xE4 ole toistaiseksi tarvinnut korjata</a>.</p></li><li><p>Testauksemme perusteella MDBX suoriutui hieman paremmin ty\xF6teht\xE4vist\xE4mme.</p></li><li><p>MDBX paljastaa enemm\xE4n sis\xE4ist\xE4 telemetriatietoa - enemm\xE4n mittareita siit\xE4, mit\xE4 tietokannan sis\xE4ll\xE4 tapahtuu. Ja meill\xE4 on n\xE4m\xE4 tiedot Grafanassa - jotta voimme tehd\xE4 parempia p\xE4\xE4t\xF6ksi\xE4 sovellussuunnittelusta. Esimerkiksi sen j\xE4lkeen, kun siirryt\xE4\xE4n kokonaan MDBX:\xE4\xE4n (poistamalla LMDB:n tuki), otamme k\xE4ytt\xF6\xF6n &quot;commit half full transaction&quot; -k\xE4yt\xE4nn\xF6n, jolla v\xE4ltet\xE4\xE4n levykontaktien ylivuoto/ylivuoto. T\xE4m\xE4 yksinkertaistaa koodia entisest\xE4\xE4n vaikuttamatta suorituskykyyn.</p></li><li><p>MDBX tukee &quot;Exclusive open&quot; -tilaa - k\xE4yt\xE4mme sit\xE4 tietokantojen siirroissa, jotta muut lukijat eiv\xE4t p\xE4\xE4se k\xE4siksi tietokantaan siirtoprosessin aikana.</p></li></ol></blockquote><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p><a href="https://github.com/ledgerwatch/erigon/wiki/Criteria-for-transitioning-from-Alpha-to-Beta#switch-from-lmdb-to-mdbx" target="_blank" rel="noopener noreferrer">Erigon (seuraavan sukupolven Ethernet-asiakasohjelma) on hiljattain siirtynyt LMDB:st\xE4 MDBX:\xE4\xE4n.</a> <a href="#fnref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,160);function st(it,ot){const e=o("RouterLink");return d(),r(l,null,[m,k,g,b,t("nav",h,[t("ul",null,[t("li",null,[a(e,{to:"#lainaukset"},{default:s(()=>[v]),_:1})]),t("li",null,[a(e,{to:"#mika-on-libmdbx"},{default:s(()=>[_]),_:1})]),t("li",null,[a(e,{to:"#oppaat"},{default:s(()=>[c]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#esimerkin-suorittaminen"},{default:s(()=>[f]),_:1})]),t("li",null,[a(e,{to:"#esimerkki-1-kirjoittaminen-set-key-val-ja-lukeminen-get-key"},{default:s(()=>[x]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#koodi"},{default:s(()=>[q]),_:1})]),t("li",null,[a(e,{to:"#suorita-tuotos"},{default:s(()=>[y]),_:1})]),t("li",null,[a(e,{to:"#koodin-kuvaus"},{default:s(()=>[T]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#env-rw-tietokannan-maarittaminen"},{default:s(()=>[j]),_:1})]),t("li",null,[a(e,{to:"#makrolaajennus"},{default:s(()=>[E]),_:1})]),t("li",null,[a(e,{to:"#anyhow-ja-lazy-static"},{default:s(()=>[D]),_:1})]),t("li",null,[a(e,{to:"#makro-mdbx"},{default:s(()=>[w]),_:1})]),t("li",null,[a(e,{to:"#kierteet-ja-tapahtumat"},{default:s(()=>[B]),_:1})]),t("li",null,[a(e,{to:"#binaaritietojen-lukeminen-ja-kirjoittaminen"},{default:s(()=>[M]),_:1})])])])])]),t("li",null,[a(e,{to:"#esimerkki-2-tietotyypit-tietokannan-liput-poistaminen-lapikaynti"},{default:s(()=>[N]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#koodi-1"},{default:s(()=>[S]),_:1})]),t("li",null,[a(e,{to:"#suorita-tuotos-1"},{default:s(()=>[X]),_:1})]),t("li",null,[a(e,{to:"#nopea-lukeminen-ja-kirjoittaminen"},{default:s(()=>[O]),_:1})]),t("li",null,[a(e,{to:"#tietotyypit"},{default:s(()=>[R]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#esiasetetut-tietotyypit"},{default:s(()=>[C]),_:1})])])]),t("li",null,[a(e,{to:"#tietokannan-liput"},{default:s(()=>[V]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#dupsort-yksi-avain-vastaa-useampaa-kuin-yhta-arvoa"},{default:s(()=>[U]),_:1})]),t("li",null,[a(e,{to:"#dup-key-iteraattori-joka-palauttaa-kaikki-avainta-vastaavat-arvot"},{default:s(()=>[I]),_:1})]),t("li",null,[a(e,{to:"#oletusarvoisesti-automaattisesti-liitetyt-tietokannan-liput"},{default:s(()=>[A]),_:1})])])]),t("li",null,[a(e,{to:"#tietojen-poistaminen"},{default:s(()=>[L]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#del-key-nappaimen-poistaminen"},{default:s(()=>[P]),_:1})]),t("li",null,[a(e,{to:"#del-val-key-val-tasmallisen-vastaavuuden-poisto"},{default:s(()=>[F]),_:1})])])]),t("li",null,[a(e,{to:"#traversal"},{default:s(()=>[z]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#perakkainen-lapikaynti"},{default:s(()=>[$]),_:1})]),t("li",null,[a(e,{to:"#rev-kaanteinen-jarjestyksen-lapikaynti"},{default:s(()=>[K]),_:1})]),t("li",null,[a(e,{to:"#lajittelu"},{default:s(()=>[Y]),_:1})])])])])]),t("li",null,[a(e,{to:"#intervalli-iteraattorit"},{default:s(()=>[H]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#suorita-tulostus"},{default:s(()=>[G]),_:1})]),t("li",null,[a(e,{to:"#range-begin-end-intervalli-iteraatio"},{default:s(()=>[J]),_:1})]),t("li",null,[a(e,{to:"#rev-range-kaanteiset-aikavalit"},{default:s(()=>[W]),_:1})])])]),t("li",null,[a(e,{to:"#tietotyyppien-mukauttaminen"},{default:s(()=>[Q]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#mukautettujen-tyyppien-yksinkertaistaminen-attribuuttimakrojen-avulla"},{default:s(()=>[Z]),_:1})])])])])]),t("li",null,[a(e,{to:"#huomautus"},{default:s(()=>[tt]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#avaimen-pituus"},{default:s(()=>[nt]),_:1})])])]),t("li",null,[a(e,{to:"#alaviitteet"},{default:s(()=>[et]),_:1})])])]),at],64)}var ut=i(p,[["render",st],["__file","2021-12-21-mdbx.html.vue"]]);export{ut as default};
