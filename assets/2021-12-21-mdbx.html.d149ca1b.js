import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as i,a as e,b as a,w as o,F as l,d as n,e as d,r as p}from"./app.2a6a1bd2.js";const u={},b=e("h1",{id:"paket-rust-za-libmdbx",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#paket-rust-za-libmdbx","aria-hidden":"true"},"#"),n(" Paket rust za libmdbx")],-1),m=e("p",null,[n("Ovoj "),e("code",null,"rust"),n(" za podatkovno zbirko "),e("a",{href:"https://github.com/erthink/libmdbx",target:"_blank",rel:"noopener noreferrer"},"libmdbx"),n(".")],-1),v=e("hr",null,null,-1),g=e("p",null,"Imenik :",-1),k={class:"table-of-contents"},h=n("Citati"),c=n("Kaj je libmdbx?"),_=n("U\u010Dna gradiva"),f=n("Kako zagnati primer"),j=n("Primer 1: Pisanje set(key,val) in branje .get(key)"),x=n("Koda"),q=n("Zagon izpisa"),z=n("Opis kode"),D=n("env_rw! Opredelitev zbirke podatkov"),y=n("\u0160iritev na makro ravni"),E=n("Kakorkoli in lazy_static"),w=n("Makro mdbx!"),T=n("Niti in transakcije"),B=n("Branje in pisanje binarnih podatkov"),M=n("Primer 2: Podatkovne vrste, oznake zbirke podatkov, brisanje, pre\u010Dkanje"),N=n("Koda"),S=n("Zagon izpisa"),X=n("Hitro branje in pisanje"),V=n("Vrste podatkov"),O=n("Prednastavljene vrste podatkov"),R=n("Zastave podatkovne zbirke"),C=n("DUPSORT : enemu klju\u010Du ustreza ve\u010D kot ena vrednost"),I=n(".dup(key) iterator, ki vrne vse vrednosti, ki ustrezajo klju\u010Du."),U=n("Privzete samodejno dodane oznake zbirke podatkov"),P=n("Brisanje podatkov"),A=n(".del(key) Brisanje tipke"),L=n(".del_val(key,val) Natan\u010Dno izbrisovanje ujemanj"),F=n("Prehod"),$=n("zaporedno pre\u010Dkanje"),H=n(".rev() Obratno pre\u010Dkanje vrstnega reda"),Y=n("Razvr\u0161\u010Danje"),K=n("Intervalni iteratorji"),Z=n("Za\u017Eenite izhodno datoteko"),G=n(".range(begin..end) Iteracija intervala"),W=n(".rev_range Obrnjeni intervali"),J=n("Prilagajanje podatkovnih vrst"),Q=n("Poenostavitev tipov po meri z atributnimi makri"),ee=n("Opomba o uporabi"),ne=n("Dol\u017Eina klju\u010Da"),te=n("Opombe pod \u010Drto"),ae=d(`<hr><h2 id="citati" tabindex="-1"><a class="header-anchor" href="#citati" aria-hidden="true">#</a> Citati</h2><p>Med pisanjem <a href="https://rmw.link" target="_blank" rel="noopener noreferrer">programa &#39;rmw.link</a> &#39; sem za\u010Dutil, da potrebujem vgrajeno zbirko podatkov.</p><p>Zaradi omre\u017Ene prepustnosti, ki je povezana s pogostim snemanjem, branjem in pisanjem, je bila spletna stran <code>sqlite3</code> preve\u010D napredna, da bi se lahko ukvarjala z zmogljivostjo.</p><p>Zato je bila primernej\u0161a podatkovna zbirka klju\u010D-vrednost ni\u017Eje ravni ( <a href="https://discourse.world/h/2020/06/05/Shine-and-poverty-key-value-database-LMDB-in-applications-for-iOS" target="_blank" rel="noopener noreferrer">lmdb je 10-krat hitrej\u0161a od sqlite</a> ).</p><p><img src="//irmw.gumlet.io/yxZV8x.jpg" alt=""></p><p>Na koncu sem se odlo\u010Dil za \u010Darobno razli\u010Dico <code>lmdb</code> - <code>mdbx</code>.</p><p>Trenutno obstoje\u010Di paket <code>rust</code> <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">mdbx-rs (mdbx-sys</a> ) iz <code>mdbx</code> <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">ne podpira oken</a>, zato sem se odlo\u010Dil, da pripravim paket z razli\u010Dico s podporo za okna.</p><p>Podpora za shranjevanje vrst rje po meri. Podpira ve\u010Dnitni dostop.</p><p>Podatkovno zbirko lahko dolo\u010Dite v modulu z uporabo <code>lazy_static</code>, nato pa jo preprosto uvedete in uporabljate z nekaj, kot je :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
</code></pre></div><h2 id="kaj-je-libmdbx" tabindex="-1"><a class="header-anchor" href="#kaj-je-libmdbx" aria-hidden="true">#</a> Kaj je libmdbx?</h2><p><a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">mdbx</a> je sekundarna podatkovna zbirka, ki temelji na lmdb ruskega avtorja <a href="https://vk.com/erthink" target="_blank" rel="noopener noreferrer">Leonida Jurjeva (\u041B\u0435\u043E\u043D\u0438\u0434 \u042E\u0440\u044C\u0435\u0432</a> ).</p><p><a href="https://en.wikipedia.org/wiki/Lightning_Memory-Mapped_Database" target="_blank" rel="noopener noreferrer">lmdb</a> je izjemno hitra vgrajena podatkovna zbirka klju\u010D-vrednost.</p><p>Polnomenski iskalnik <a href="https://docs.meilisearch.com/reference/under_the_hood/storage.html#measured-disk-usage" target="_blank" rel="noopener noreferrer">MeiliSearch</a> temelji na lmdb.</p><p><a href="https://docs.nvidia.com/deeplearning/dali/user-guide/docs/examples/general/data_loading/dataloading_lmdb.html" target="_blank" rel="noopener noreferrer">Tudi ogrodje za globoko u\u010Denje caffe uporablja lmdb kot podatkovno shrambo</a>.</p><p><a href="https://github.com/erthink/libmdbx#added-features" target="_blank" rel="noopener noreferrer">mdbx je 30 % hitrej\u0161i od lmdb v vgrajenem preizkusu zmogljivosti ioarena</a>.</p><p><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-1.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-3.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-4.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-5.png" alt=""></p><p>Hkrati mdbx <a href="https://github.com/erthink/libmdbx#improvements-beyond-lmdb" target="_blank" rel="noopener noreferrer">izbolj\u0161uje \u0161tevilne pomanjkljivosti</a> lmdb, zato je Erigon (odjemalec ethereuma naslednje generacije) nedavno pre\u0161el z LMDB na MDBX <sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>.</p><h2 id="ucna-gradiva" tabindex="-1"><a class="header-anchor" href="#ucna-gradiva" aria-hidden="true">#</a> U\u010Dna gradiva</h2><h3 id="kako-zagnati-primer" tabindex="-1"><a class="header-anchor" href="#kako-zagnati-primer" aria-hidden="true">#</a> Kako zagnati primer</h3><p>Najprej kloni bazo programske opreme <code>git clone git@github.com:rmw-lib/mdbx.git --depth=1 &amp;&amp; cd mdbx</code></p><p>Nato za\u017Eenite <code>cargo run --example 01</code> in zagnali boste <code>examples/01.rs</code></p><p>\u010Ce je to va\u0161 projekt, ga najprej za\u017Eenite:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>cargo install cargo-edit
cargo add mdbx lazy_static ctor paste
</code></pre></div><h3 id="primer-1-pisanje-set-key-val-in-branje-get-key" tabindex="-1"><a class="header-anchor" href="#primer-1-pisanje-set-key-val-in-branje-get-key" aria-hidden="true">#</a> Primer 1: Pisanje <code>set(key,val)</code> in branje <code>.get(key)</code></h3><p>Oglejmo si preprost <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/01.rs" target="_blank" rel="noopener noreferrer">primer/01.rs</a></p><h4 id="koda" tabindex="-1"><a class="header-anchor" href="#koda" aria-hidden="true">#</a> Koda</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Ime spremenljivke podatkovne zbirke Env
  Test // Test podatkovne baze
}

fn main() -&gt; Result&lt;()&gt; {
  // Izpis \u0161tevilke razli\u010Dice programa libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Ve\u010Dnitno branje in pisanje
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
</code></pre></div><h4 id="zagon-izpisa" tabindex="-1"><a class="header-anchor" href="#zagon-izpisa" aria-hidden="true">#</a> Zagon izpisa</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/01.mdb
mdbx version https://github.com/erthink/libmdbx/releases/tag/v0.11.2
test1 get Ok(Some(Bin([6])))
[6]
</code></pre></div><h4 id="opis-kode" tabindex="-1"><a class="header-anchor" href="#opis-kode" aria-hidden="true">#</a> Opis kode</h4><h5 id="env-rw-opredelitev-zbirke-podatkov" tabindex="-1"><a class="header-anchor" href="#env-rw-opredelitev-zbirke-podatkov" aria-hidden="true">#</a> <code>env_rw!</code> Opredelitev zbirke podatkov</h5><p>Koda se za\u010Dne z makrom env_rw, ki ima 4 parametre.</p><ol><li><p>Ime spremenljivke okolja zbirke podatkov</p></li><li><p>Vrne predmet, <a href="https://docs.rs/mdbx/latest/src/mdbx/env.rs.html#27-35" target="_blank" rel="noopener noreferrer">mdbx:: env:: Config</a>.</p></li></ol><p>Uporabljamo privzeto konfiguracijo, saj <code>Env</code> implementira <code>From&lt;Into&lt;PathBuf&gt;&gt;</code>, zato bo zadostovala pot do zbirke podatkov <code>into()</code>, privzeta konfiguracija pa je naslednja.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
MDBX // Ime spremenljivke podatkovne zbirke Env
Test // Test podatkovne baze
}

fn main() -&gt; Result&lt;()&gt; {
// Izpis \u0161tevilke razli\u010Dice programa libmdbx
unsafe {
  println!(
    &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
    mdbx_version.major, mdbx_version.minor, mdbx_version.release
  );
}

// Ve\u010Dnitno branje in pisanje
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
    sync_period : 65536, // V 1/65536 sekunde
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
</code></pre></div><p><code>max_db</code> To nastavitev je mogo\u010De ponastaviti ob vsakem <a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">odprtju</a> zbirke podatkov, vendar bo prevelika nastavitev vplivala na zmogljivost, zato jo nastavite po potrebi.</p><p>Za pomen drugih parametrov glejte <a href="https://erthink.github.io/libmdbx/group__c__opening.html#ga9138119a904355d245777c4119534061" target="_blank" rel="noopener noreferrer">dokumentacijo libmdbx</a>.</p><ol start="3"><li><p>Ime makra transakcije branja podatkovne baze, privzeta vrednost je <code>r</code></p></li><li><p>Ime makra transakcije pisanja v zbirko podatkov, privzeta vrednost je <code>w</code></p></li></ol><p>Parametra 3 in 4 lahko izpustite in uporabite privzete vrednosti.</p><h5 id="siritev-na-makro-ravni" tabindex="-1"><a class="header-anchor" href="#siritev-na-makro-ravni" aria-hidden="true">#</a> \u0160iritev na makro ravni</h5><p>\u010Ce \u017Eelite videti, kaj po\u010Dne \u010Darobni makro, ga lahko raz\u0161irite z makrom <code>cargo expand --example 01</code>, ki ga je treba najprej namestiti. <code>cargo install cargo-expand</code></p><p>Slika raz\u0161irjene kode je prikazana spodaj.</p><p><img src="//irmw.gumlet.io/PDzEtT.png" alt="PDzEtT"></p><h5 id="kakorkoli-in-lazy-static" tabindex="-1"><a class="header-anchor" href="#kakorkoli-in-lazy-static" aria-hidden="true">#</a> Kakorkoli in lazy_static</h5><p>Na raz\u0161irjeni zaslonski sliki je razvidno, da sta uporabljena <code>lazy_static</code> in <code>anyhow</code>.</p><p><a href="https://rustmagazine.github.io/rust_magazine_2021/chapter_2/rust_error_handle.html#thiserror--anyhow" target="_blank" rel="noopener noreferrer">Anyhow</a> je knji\u017Enica za ravnanje z napakami za rust.</p><p><a href="https://juejin.cn/post/7007336922817232927" target="_blank" rel="noopener noreferrer">lazy_static</a> je stati\u010Dna spremenljivka z odlo\u017Eeno inicializacijo.</p><p>Ti dve knji\u017Enici sta zelo pogosti in ju ne bom obravnaval.</p><h5 id="makro-mdbx" tabindex="-1"><a class="header-anchor" href="#makro-mdbx" aria-hidden="true">#</a> Makro mdbx!</h5><p><a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html" target="_blank" rel="noopener noreferrer"><code>mdbx!</code></a> je <a href="https://mp.weixin.qq.com/s/YT_HNFDCQ_IyocvBkRNJnA" target="_blank" rel="noopener noreferrer">makro postopka</a>.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Ime spremenljivke podatkovne zbirke Env
  Test // Test podatkovne baze
}

fn main() -&gt; Result&lt;()&gt; {
  // Izpis \u0161tevilke razli\u010Dice programa libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Ve\u010Dnitno branje in pisanje
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
      sync_period : 65536, // V 1/65536 sekunde
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
 MDBX // Ime spremenljivke podatkovne zbirke Env
 Test // Test podatkovne baze
}
</code></pre></div><p>V prvi vrstici je ime spremenljivke okolja zbirke podatkov</p><p>V drugi vrstici je ime zbirke podatkov</p><p>Podatkovnih zbirk je lahko ve\u010D, za vsako je lahko ena vrstica.</p><h5 id="niti-in-transakcije" tabindex="-1"><a class="header-anchor" href="#niti-in-transakcije" aria-hidden="true">#</a> Niti in transakcije</h5><p>Zgornja koda prikazuje ve\u010Dnitno branje in pisanje.</p><p>Pomembno je opozoriti, da je lahko <strong>v isti niti hkrati samo ena transakcija; \u010De je v niti odprta ve\u010D kot ena transakcija, se program sesuje</strong>.</p><p>Transakcija bo zavezujo\u010Da ob koncu obsega.</p><h5 id="branje-in-pisanje-binarnih-podatkov" tabindex="-1"><a class="header-anchor" href="#branje-in-pisanje-binarnih-podatkov" aria-hidden="true">#</a> Branje in pisanje binarnih podatkov</h5><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Ime spremenljivke podatkovne zbirke Env
  Test // Test podatkovne baze
}

fn main() -&gt; Result&lt;()&gt; {
  // Izpis \u0161tevilke razli\u010Dice programa libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Ve\u010Dnitno branje in pisanje
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
      sync_period : 65536, // V 1/65536 sekunde
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
 MDBX // Ime spremenljivke podatkovne zbirke Env
 Test // Test podatkovne baze
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
</code></pre></div><p><code>set</code> je pisanje, <code>get</code> je branje in vsak objekt, ki implementira <a href="https://doc.rust-lang.org/std/convert/trait.AsRef.html" target="_blank" rel="noopener noreferrer"><code>AsRef&lt;[u8]&gt;</code></a> se lahko zapi\u0161e v zbirko podatkov.</p><p><code>get</code> Dobimo <code>Ok(Some(Bin([6])))</code>, ki ga lahko pretvorimo v <code>&amp;[u8]</code>.</p><h3 id="primer-2-podatkovne-vrste-oznake-zbirke-podatkov-brisanje-preckanje" tabindex="-1"><a class="header-anchor" href="#primer-2-podatkovne-vrste-oznake-zbirke-podatkov-brisanje-preckanje" aria-hidden="true">#</a> Primer 2: Podatkovne vrste, oznake zbirke podatkov, brisanje, pre\u010Dkanje</h3><p>Oglejmo si drugi <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">primer/02.rs</a>:</p><p>V tem primeru je izpu\u0161\u010Den naslov <code>env_rw!</code>, tretji in \u010Detrti argument ( <code>r</code>, <code>w</code>) pa sta izpu\u0161\u010Dena.</p><h4 id="koda-1" tabindex="-1"><a class="header-anchor" href="#koda-1" aria-hidden="true">#</a> Koda</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Ime spremenljivke podatkovne zbirke Env
  Test // Test podatkovne baze
}

fn main() -&gt; Result&lt;()&gt; {
  // Izpis \u0161tevilke razli\u010Dice programa libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Ve\u010Dnitno branje in pisanje
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
      sync_period : 65536, // V 1/65536 sekunde
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
 MDBX // Ime spremenljivke podatkovne zbirke Env
 Test // Test podatkovne baze
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
  MDBX // Imena spremenljivk za podatkovno zbirko ENV
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
  // Hitro pisanje
  w!(Test1.set [2, 3],[4, 5]);

  // Hitro branje
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

  // Ve\u010D operacij v ve\u010D podatkovnih bazah v isti transakciji
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

    // Transakcija bo zavezujo\u010Da ob koncu podro\u010Dja uporabe.
  }

  Ok(())
}
</code></pre></div><h4 id="zagon-izpisa-1" tabindex="-1"><a class="header-anchor" href="#zagon-izpisa-1" aria-hidden="true">#</a> Zagon izpisa</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/02.mdb

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
</code></pre></div><h4 id="hitro-branje-in-pisanje" tabindex="-1"><a class="header-anchor" href="#hitro-branje-in-pisanje" aria-hidden="true">#</a> Hitro branje in pisanje</h4><p>\u010Ce \u017Eelimo preprosto prebrati ali zapisati eno samo vrstico podatkov, lahko uporabimo sintakti\u010Dni sladkor makro.</p><p>Preberi podatke</p><div class="language-text ext-text"><pre class="language-text"><code>r!(Test1.get [2, 3])
</code></pre></div><p>Pisanje podatkov</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Ime spremenljivke podatkovne zbirke Env
  Test // Test podatkovne baze
}

fn main() -&gt; Result&lt;()&gt; {
  // Izpis \u0161tevilke razli\u010Dice programa libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Ve\u010Dnitno branje in pisanje
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
      sync_period : 65536, // V 1/65536 sekunde
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
 MDBX // Ime spremenljivke podatkovne zbirke Env
 Test // Test podatkovne baze
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
  MDBX // Imena spremenljivk za podatkovno zbirko ENV
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
  // Hitro pisanje
  w!(Test1.set [2, 3],[4, 5]);

  // Hitro branje
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

  // Ve\u010D operacij v ve\u010D podatkovnih bazah v isti transakciji
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

    // Transakcija bo zavezujo\u010Da ob koncu podro\u010Dja uporabe.
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
</code></pre></div><p>Vse v eni vrstici, kot je zapisano v dokumentu <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs.</a></p><h4 id="vrste-podatkov" tabindex="-1"><a class="header-anchor" href="#vrste-podatkov" aria-hidden="true">#</a> Vrste podatkov</h4><p>V dokumentu examples/02. <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">rs</a> je definicija zbirke podatkov videti takole :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Ime spremenljivke podatkovne zbirke Env
  Test // Test podatkovne baze
}

fn main() -&gt; Result&lt;()&gt; {
  // Izpis \u0161tevilke razli\u010Dice programa libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Ve\u010Dnitno branje in pisanje
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
      sync_period : 65536, // V 1/65536 sekunde
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
 MDBX // Ime spremenljivke podatkovne zbirke Env
 Test // Test podatkovne baze
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
  MDBX // Imena spremenljivk za podatkovno zbirko ENV
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
  // Hitro pisanje
  w!(Test1.set [2, 3],[4, 5]);

  // Hitro branje
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

  // Ve\u010D operacij v ve\u010D podatkovnih bazah v isti transakciji
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

    // Transakcija bo zavezujo\u010Da ob koncu podro\u010Dja uporabe.
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
</code></pre></div><p>kjer <code>key</code> in <code>val</code> dolo\u010Data podatkovne tipe za klju\u010De oziroma vrednosti.</p><p>\u010Ce posku\u0161ate zapisati podatkovni tip, ki se ne ujema z opredeljenim, se prika\u017Ee napaka, kot je prikazano na spodnji sliki :</p><p><img src="//irmw.gumlet.io/4rFTC6.png" alt=""></p><p>Privzeta vrsta podatkov je <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Bin.html" target="_blank" rel="noopener noreferrer"><code>Bin</code></a> , je mogo\u010De zapisati vse podatke, ki se uporabljajo na naslovu <code>AsRef&lt;[u8]&gt;</code>.</p><p>\u010Ce je klju\u010D ali vrednost niz <code>utf8</code>, lahko vrsto podatkov nastavite na <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Str.html" target="_blank" rel="noopener noreferrer"><code>Str</code></a> .</p><p>\u010Ce <a href="https://doc.rust-lang.org/std/ops/trait.Deref.html" target="_blank" rel="noopener noreferrer">ne boste citirali</a> <code>Str</code>, bo vrnjen niz, podoben tistemu iz <code>let k:&amp;str = &amp;k;</code>.</p><p>Poleg tega je na spletnem mestu <code>Str</code> name\u0161\u010Den tudi <a href="https://doc.rust-lang.org/std/fmt/trait.Display.html" target="_blank" rel="noopener noreferrer"><code>std::fmt::Display</code></a> , <code>println!(&quot;{}&quot;,k)</code> bo prikazal berljiv niz.</p><h5 id="prednastavljene-vrste-podatkov" tabindex="-1"><a class="header-anchor" href="#prednastavljene-vrste-podatkov" aria-hidden="true">#</a> Prednastavljene vrste podatkov</h5><p>Poleg naslovov <code>Str</code> in <code>Bin</code> vsebuje ovijalec tudi podporo za podatke <a href="https://docs.rs/mdbx/latest/src/mdbx/type.rs.html#48" target="_blank" rel="noopener noreferrer">usize, u128, u64, u32, u16, u8, isize, i128, i64, i32, i16, i8, f32, f64</a>.</p><h4 id="zastave-podatkovne-zbirke" tabindex="-1"><a class="header-anchor" href="#zastave-podatkovne-zbirke" aria-hidden="true">#</a> Zastave podatkovne zbirke</h4><p>Zastavice podatkovne zbirke, dodane podatkom v <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a>, si lahko ogledate na naslovu <code>Test4</code>. <code>flag DUPSORT</code></p><p>Podatkovna baza libmdbx ima ve\u010D zastavic ( <a href="https://erthink.github.io/libmdbx/group__c__dbi.html#gafe3bddb297b3ab0d828a487c5726f76a" target="_blank" rel="noopener noreferrer"><code>MDBX_db_flags_t</code></a> ), ki jih je mogo\u010De nastaviti.</p><ul><li>REVERSEKEY uporablja obratno primerjavo nizov za klju\u010De. (uporabno pri uporabi majhnih \u0161tevilk s kon\u010Dnim kodiranjem kot klju\u010Dev)</li><li>DUPSORT uporablja razvr\u0161\u010Dene dvojnike, tj. omogo\u010Da ve\u010D vrednosti za klju\u010D.</li><li>INTEGERKEY Nativni \u0161tevilski klju\u010D v bajtnem vrstnem redu uint32_t ali uint64_t. Klju\u010Di morajo biti enako veliki in morajo biti poravnani, ko se posredujejo kot argumenti.</li><li>DUPFIXED Velikost podatkovnih vrednosti mora biti enaka, \u010De se uporablja DUPSORT (omogo\u010Da hitro \u0161tetje \u0161tevila vrednosti).</li><li>Za INTEGERDUP sta potrebna DUPSORT in DUPFIXED; vrednosti so cela \u0161tevila (podobno kot pri INTEGERKEY). Vse podatkovne vrednosti morajo biti enako velike in morajo biti poravnane, ko so posredovane kot parametri.</li><li>REVERSEDUP uporablja DUPSORT; za podatkovne vrednosti se uporablja obratna primerjava nizov.</li><li>CREATE ustvari DB, \u010De ne obstaja (privzeto je dodana).</li><li>DB_ACCEDE Odpre obstoje\u010Do podpodatkovno zbirko, ustvarjeno z uporabo oznake unknown.<br> Ta zastavica DB_ACCEDE je namenjena odpiranju obstoje\u010Dih podpodatkovnih zbirk, ustvarjenih z neznanimi zastavicami (REVERSEKEY, DUPSORT, INTEGERKEY, DUPFIXED, INTEGERDUP in REVERSEDUP).<br> V tem primeru podmno\u017Eica ne bo vrnila napake INCOMPATIBLE, temve\u010D bo odprta z zastavicami, ki so bile uporabljene za njeno ustvarjanje, aplikacija pa lahko nato dolo\u010Di dejanske zastave z mdbx_dbi_flags().</li></ul><h5 id="dupsort-enemu-kljucu-ustreza-vec-kot-ena-vrednost" tabindex="-1"><a class="header-anchor" href="#dupsort-enemu-kljucu-ustreza-vec-kot-ena-vrednost" aria-hidden="true">#</a> DUPSORT : enemu klju\u010Du ustreza ve\u010D kot ena vrednost</h5><p><code>DUPSORT</code>pomeni, da lahko klju\u010Du ustreza ve\u010D kot ena vrednost.</p><p>\u010Ce \u017Eelite nastaviti ve\u010D zastavic, napi\u0161ite, kot sledi <code>flag DUPSORT | DUPFIXED</code></p><h5 id="dup-key-iterator-ki-vrne-vse-vrednosti-ki-ustrezajo-kljucu" tabindex="-1"><a class="header-anchor" href="#dup-key-iterator-ki-vrne-vse-vrednosti-ki-ustrezajo-kljucu" aria-hidden="true">#</a> <code>.dup(key)</code> iterator, ki vrne vse vrednosti, ki ustrezajo klju\u010Du.</h5><p>Ta funkcija je na voljo samo za podatkovne zbirke, ozna\u010Dene s <code>DUPSORT</code>, kjer lahko klju\u010Du ustreza ve\u010D kot ena vrednost.</p><p>Za podatkovne zbirke <code>DUPSORT\`\`get</code> vrne samo prvo vrednost za ta klju\u010D. \u010Ce \u017Eelite pridobiti vse vrednosti, uporabite <code>dup</code>.</p><h5 id="privzete-samodejno-dodane-oznake-zbirke-podatkov" tabindex="-1"><a class="header-anchor" href="#privzete-samodejno-dodane-oznake-zbirke-podatkov" aria-hidden="true">#</a> Privzete samodejno dodane oznake zbirke podatkov</h5><p>\u010Ce je vrsta podatkov <code>u32</code> / <code>u64</code> / <code>usize</code>, se samodejno doda oznaka podatkovne zbirke. <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#105" target="_blank" rel="noopener noreferrer"><code>INTEGERKEY</code></a> .</p><p>Na strojih z majhnim kodiranjem se samodejno dodajo druge \u0161tevilske vrste. <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#108" target="_blank" rel="noopener noreferrer"><code>REVERSEKEY</code></a> Oznaka za podatkovno zbirko se samodejno doda, \u010De je vrsta podatkov / / .</p><h4 id="brisanje-podatkov" tabindex="-1"><a class="header-anchor" href="#brisanje-podatkov" aria-hidden="true">#</a> Brisanje podatkov</h4><h5 id="del-key-brisanje-tipke" tabindex="-1"><a class="header-anchor" href="#del-key-brisanje-tipke" aria-hidden="true">#</a> <code>.del(key)</code> Brisanje tipke</h5><p><code>.del(val)</code> Izbri\u0161e vrednost, ki ustreza klju\u010Du.</p><p>\u010Ce ima zbirka podatkov zastavico <code>DUPSORT</code>, bodo izbrisane vse vrednosti pod tem klju\u010Dem.</p><p>Vrne <code>true</code>, \u010De so bili izbrisani vsi podatki, in <code>false</code>, \u010De niso bili izbrisani.</p><h5 id="del-val-key-val-natancno-izbrisovanje-ujemanj" tabindex="-1"><a class="header-anchor" href="#del-val-key-val-natancno-izbrisovanje-ujemanj" aria-hidden="true">#</a> <code>.del_val(key,val)</code> Natan\u010Dno izbrisovanje ujemanj</h5><p><code>.del_val(key,val)</code> Izbri\u0161e pare klju\u010D-vrednost, ki se natan\u010Dno ujemajo z vhodnimi parametri.</p><p>Vrne <code>true</code>, \u010De so bili izbrisani vsi podatki, in <code>false</code>, \u010De niso bili izbrisani.</p><h4 id="prehod" tabindex="-1"><a class="header-anchor" href="#prehod" aria-hidden="true">#</a> Prehod</h4><h5 id="zaporedno-preckanje" tabindex="-1"><a class="header-anchor" href="#zaporedno-preckanje" aria-hidden="true">#</a> zaporedno pre\u010Dkanje</h5><p>Zaradi izvajanja <a href="https://doc.rust-lang.org/std/iter/trait.IntoIterator.html" target="_blank" rel="noopener noreferrer"><code>std::iter::IntoIterator</code></a> . lahko potujete neposredno na naslednji na\u010Din :</p><p><code>for (k, v) in test1</code></p><h5 id="rev-obratno-preckanje-vrstnega-reda" tabindex="-1"><a class="header-anchor" href="#rev-obratno-preckanje-vrstnega-reda" aria-hidden="true">#</a> <code>.rev()</code> Obratno pre\u010Dkanje vrstnega reda</h5><p><code>for (k, v) in test4.rev()</code></p><h5 id="razvrscanje" tabindex="-1"><a class="header-anchor" href="#razvrscanje" aria-hidden="true">#</a> Razvr\u0161\u010Danje</h5><p>Klju\u010Di libmdbx so razvr\u0161\u010Deni v <a href="https://zh.wikipedia.org/wiki/%E5%AD%97%E5%85%B8%E5%BA%8F" target="_blank" rel="noopener noreferrer">slovarskem vrstnem redu</a>.</p><ul><li><p>Za nezaznamovana \u0161tevila</p><p>so razvr\u0161\u010Deni od najmanj\u0161ega do najve\u010Djega, saj se oznake podatkovne zbirke samodejno dodajo ( <code>u32</code>/ <code>u64</code>/ <code>usize</code> se dodajo k <code>INTEGERKEY</code>, drugi pa k <code>REVERSEKEY</code>, odvisno od strojne kode).</p></li><li><p>Za podpisana \u0161tevila</p><p>vrstni red je: najprej 0, nato vsa pozitivna \u0161tevila od najmanj\u0161ega do najve\u010Djega, nato vsa negativna \u0161tevila od najmanj\u0161ega do najve\u010Djega.</p></li></ul><h3 id="intervalni-iteratorji" tabindex="-1"><a class="header-anchor" href="#intervalni-iteratorji" aria-hidden="true">#</a> Intervalni iteratorji</h3><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Ime spremenljivke podatkovne zbirke Env
  Test // Test podatkovne baze
}

fn main() -&gt; Result&lt;()&gt; {
  // Izpis \u0161tevilke razli\u010Dice programa libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Ve\u010Dnitno branje in pisanje
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
      sync_period : 65536, // V 1/65536 sekunde
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
 MDBX // Ime spremenljivke podatkovne zbirke Env
 Test // Test podatkovne baze
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
  MDBX // Imena spremenljivk za podatkovno zbirko ENV
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
  // Hitro pisanje
  w!(Test1.set [2, 3],[4, 5]);

  // Hitro branje
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

  // Ve\u010D operacij v ve\u010D podatkovnih bazah v isti transakciji
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

    // Transakcija bo zavezujo\u010Da ob koncu podro\u010Dja uporabe.
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
</code></pre></div><h4 id="zazenite-izhodno-datoteko" tabindex="-1"><a class="header-anchor" href="#zazenite-izhodno-datoteko" aria-hidden="true">#</a> Za\u017Eenite izhodno datoteko</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/range.mdb

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
</code></pre></div><h4 id="range-begin-end-iteracija-intervala" tabindex="-1"><a class="header-anchor" href="#range-begin-end-iteracija-intervala" aria-hidden="true">#</a> <code>.range(begin..end)</code> Iteracija intervala</h4><p>Pri \u0161tevilkah je interval \u0161tevilski interval.</p><p>Za binarno obliko lahko enak interval sestavimo, npr.</p><div class="language-text ext-text"><pre class="language-text"><code>let begin : &amp;[u8] = &amp;[1,1];
for (k,v) in test0.range(begin..=&amp;[2]) {}
</code></pre></div><p>\u010Ce je <code>begin</code> ve\u010Dji od <code>end</code>, se iterira nazaj.</p><p>Na primer, <code>test1.range(5..2)</code> izpi\u0161e naslednje :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Ime spremenljivke podatkovne zbirke Env
  Test // Test podatkovne baze
}

fn main() -&gt; Result&lt;()&gt; {
  // Izpis \u0161tevilke razli\u010Dice programa libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Ve\u010Dnitno branje in pisanje
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
      sync_period : 65536, // V 1/65536 sekunde
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
 MDBX // Ime spremenljivke podatkovne zbirke Env
 Test // Test podatkovne baze
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
  MDBX // Imena spremenljivk za podatkovno zbirko ENV
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
  // Hitro pisanje
  w!(Test1.set [2, 3],[4, 5]);

  // Hitro branje
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

  // Ve\u010D operacij v ve\u010D podatkovnih bazah v isti transakciji
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

    // Transakcija bo zavezujo\u010Da ob koncu podro\u010Dja uporabe.
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
</code></pre></div><p>Intervalno ponavljanje ni podprto <a href="https://doc.rust-lang.org/std/ops/struct.RangeFull.html" target="_blank" rel="noopener noreferrer"><code>RangeFull</code></a> , tj. uporaba spletne strani <code>..</code>ni podprta, namesto tega uporabite zgoraj omenjeni na\u010Din <a href="#%E9%81%8D%E5%8E%86">pre\u010Dkanja</a>.</p><h4 id="rev-range-obrnjeni-intervali" tabindex="-1"><a class="header-anchor" href="#rev-range-obrnjeni-intervali" aria-hidden="true">#</a> <code>.rev_range</code> Obrnjeni intervali</h4><p>\u010Ce \u017Eelite dobiti obrnjen interval, ki je manj\u0161i ali enak vrednosti, lahko naredite naslednje</p><div class="language-text ext-text"><pre class="language-text"><code>test2.rev_range(2..)
</code></pre></div><p>Rezultat bo</p><div class="language-text ext-text"><pre class="language-text"><code>(2, 4)
(1, 5)
(0, 0)
</code></pre></div><p>Za obrnjeni interval ne sme biti nastavljena ena od mo\u017Enosti <code>begin</code> ali <code>end</code>; \u010De sta nastavljeni obe, lahko za dosego enakega u\u010Dinka vedno uporabite <code>range(end..begin)</code>.</p><h3 id="prilagajanje-podatkovnih-vrst" tabindex="-1"><a class="header-anchor" href="#prilagajanje-podatkovnih-vrst" aria-hidden="true">#</a> Prilagajanje podatkovnih vrst</h3><p>Demonstracijska koda je na voljo na naslovu <a href="https://github.com/rmw-lib/mdbx-example/blob/master/01/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/01</a></p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Ime spremenljivke podatkovne zbirke Env
  Test // Test podatkovne baze
}

fn main() -&gt; Result&lt;()&gt; {
  // Izpis \u0161tevilke razli\u010Dice programa libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Ve\u010Dnitno branje in pisanje
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
      sync_period : 65536, // V 1/65536 sekunde
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
 MDBX // Ime spremenljivke podatkovne zbirke Env
 Test // Test podatkovne baze
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
  MDBX // Imena spremenljivk za podatkovno zbirko ENV
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
  // Hitro pisanje
  w!(Test1.set [2, 3],[4, 5]);

  // Hitro branje
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

  // Ve\u010D operacij v ve\u010D podatkovnih bazah v isti transakciji
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

    // Transakcija bo zavezujo\u010Da ob koncu podro\u010Dja uporabe.
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
</code></pre></div><p>Izpis je naslednji</p><div class="language-text ext-text"><pre class="language-text"><code>Some(City { name: &quot;BeiJing&quot;, lnglat: (11640, 3990) })
</code></pre></div><p>V primeru tipa po meri uporabljamo <a href="https://github.com/koute/speedy" target="_blank" rel="noopener noreferrer"><code>speedy</code></a> za izvedbo serijizacije <a href="https://github.com/djkoloski/rust_serialization_benchmark" target="_blank" rel="noopener noreferrer">( <code>speedy</code> pregled uspe\u0161nosti</a> ).</p><p>Izvajanje tipa po meri <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.FromMdbx.html" target="_blank" rel="noopener noreferrer"><code>FromMdbx</code></a> in . <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.ToAsRef.html" target="_blank" rel="noopener noreferrer"><code>ToAsRef</code></a> nato se lahko shranijo na naslovu <code>mdbx</code>.</p><p>\u010Ce uporabljate dolo\u010Deno knji\u017Enico za serializacijo, lahko za poenostavitev postopka prilagodite tudi atributne <a href="https://blog.logrocket.com/macros-in-rust-a-tutorial-with-examples/" target="_blank" rel="noopener noreferrer">makre</a>.</p><h4 id="poenostavitev-tipov-po-meri-z-atributnimi-makri" tabindex="-1"><a class="header-anchor" href="#poenostavitev-tipov-po-meri-z-atributnimi-makri" aria-hidden="true">#</a> Poenostavitev tipov po meri z atributnimi makri</h4><p>Izvajanje atributnega makra je tako preprosto kot <a href="https://crates.io/crates/mdbx_speedy" target="_blank" rel="noopener noreferrer"><code>mdbx_speedy</code></a> Makro koda atributa je naslednja :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Ime spremenljivke podatkovne zbirke Env
  Test // Test podatkovne baze
}

fn main() -&gt; Result&lt;()&gt; {
  // Izpis \u0161tevilke razli\u010Dice programa libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Ve\u010Dnitno branje in pisanje
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
      sync_period : 65536, // V 1/65536 sekunde
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
 MDBX // Ime spremenljivke podatkovne zbirke Env
 Test // Test podatkovne baze
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
  MDBX // Imena spremenljivk za podatkovno zbirko ENV
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
  // Hitro pisanje
  w!(Test1.set [2, 3],[4, 5]);

  // Hitro branje
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

  // Ve\u010D operacij v ve\u010D podatkovnih bazah v isti transakciji
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

    // Transakcija bo zavezujo\u010Da ob koncu podro\u010Dja uporabe.
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
</code></pre></div><p>Za\u010Dnite z <code>cargo add mdbx-speedy</code>v svojem projektu, nato pa lahko tip hitro prilagodite (glejte <a href="https://github.com/rmw-lib/mdbx-example/blob/master/02/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/02</a> za demo kodo).</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Ime spremenljivke podatkovne zbirke Env
  Test // Test podatkovne baze
}

fn main() -&gt; Result&lt;()&gt; {
  // Izpis \u0161tevilke razli\u010Dice programa libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Ve\u010Dnitno branje in pisanje
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
      sync_period : 65536, // V 1/65536 sekunde
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
 MDBX // Ime spremenljivke podatkovne zbirke Env
 Test // Test podatkovne baze
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
  MDBX // Imena spremenljivk za podatkovno zbirko ENV
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
  // Hitro pisanje
  w!(Test1.set [2, 3],[4, 5]);

  // Hitro branje
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

  // Ve\u010D operacij v ve\u010D podatkovnih bazah v isti transakciji
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

    // Transakcija bo zavezujo\u010Da ob koncu podro\u010Dja uporabe.
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
</code></pre></div><p>Seveda je \u0161e vedno nadle\u017Eno ve\u010Dkrat pisati <code>#[derive(PartialEq, Debug, Readable, Writable, MdbxSpeedy)]</code>, zato lahko uporabite <a href="https://docs.rs/derive-alias/0.1.0/derive_alias" target="_blank" rel="noopener noreferrer"><code>derive_alias</code></a> za dodatno poenostavitev kode.</p><h2 id="opomba-o-uporabi" tabindex="-1"><a class="header-anchor" href="#opomba-o-uporabi" aria-hidden="true">#</a> Opomba o uporabi</h2><h3 id="dolzina-kljuca" tabindex="-1"><a class="header-anchor" href="#dolzina-kljuca" aria-hidden="true">#</a> Dol\u017Eina klju\u010Da</h3><ul><li>Najmanj\u0161a velikost 0, najve\u010Dja \u2248 \xBD velikosti strani (privzeta velikost strani 4K, najve\u010Dja velikost klju\u010Da je 2022 bajtov), nastavljena ob inicializaciji podatkovne zbirke <code>pagesize</code> je lahko nastavljena na najve\u010D <code>65536</code>in mora biti enaka mo\u010Di 2.</li></ul><h2 id="opombe-pod-crto" tabindex="-1"><a class="header-anchor" href="#opombe-pod-crto" aria-hidden="true">#</a> Opombe pod \u010Drto</h2><p>Navajajo prednosti prehoda z LMDB na MDBX.</p><blockquote><p>Erigon je za\u010Del z zaledno zbirko podatkov BoltDB, nato je dodal podporo za BadgerDB in nazadnje v celoti pre\u0161el na LMDB. na neki to\u010Dki smo naleteli na te\u017Eave s stabilnostjo, ki jih je povzro\u010Dila na\u0161a uporaba LMDB in jih ustvarjalci niso predvideli. Od takrat smo si ogledali dobro podprt derivat LMDB, imenovan MDBX, in upamo, da bomo uporabili njihove izbolj\u0161ave stabilnosti ter v prihodnosti morda \u0161e bolj sodelovali. integracija MDBX je zdaj kon\u010Dana in \u010Das je za nadaljnje testiranje in dokumentacijo.</p><p>Prednosti prehoda z LMDB na MDBX.</p><ol><li><p>Rast &quot;prostor (geometrija)&quot; datotek zbirke podatkov deluje pravilno. To je pomembno, zlasti v sistemu Windows. V LMDB je treba enkrat vnaprej dolo\u010Diti velikost pomnilni\u0161kega zemljevida (trenutno privzeto uporabljamo 2 TB) in \u010De datoteka zbirke podatkov prese\u017Ee to mejo, je treba postopek znova zagnati. \u010Ce bi v sistemu Windows velikost pomnilni\u0161kega zemljevida nastavili na 2 Tb, bi bila datoteka zbirke podatkov \u017Ee na za\u010Detku velika 2 Tb, kar ni preve\u010D priro\u010Dno. Pri MDBX se velikost pomnilni\u0161kega zemljevida pove\u010Duje v korakih po 2Gb. To pomeni ob\u010Dasno prestavljanje, vendar omogo\u010Da bolj\u0161o uporabni\u0161ko izku\u0161njo.</p></li><li><p>MDBX stro\u017Eje preverja hkratno uporabo obdelave transakcij ter prekrivanje transakcij branja in pisanja v isti niti izvajanja. Tako lahko odkrijemo nekatere napake, ki niso o\u010Ditne, obna\u0161anje pa je bolj predvidljivo.<br> V ve\u010D kot petih letih (odkar je bil lo\u010Den od LMDB) je MDBX zbral veliko \u0161tevilo varnostnih popravkov in popravkov hro\u0161\u010Dev, ki po na\u0161em vedenju \u0161e vedno obstajajo v LMDB. Nekatere od njih smo odkrili med testiranjem, vzdr\u017Eevalci MDBX pa so jih vzeli resno in jih nemudoma odpravili.</p></li><li><p>Pri podatkovnih zbirkah, ki nenehno spreminjajo podatke, se ustvari precej prostora, ki ga je mogo\u010De povrniti (v terminologiji LMDB znanega tudi kot &quot;prosti seznam&quot;). LMDB smo morali popraviti, da smo odpravili najhuj\u0161e pomanjkljivosti pri ravnanju s prostorom za vra\u010Danje ( <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide" target="_blank" rel="noopener noreferrer">analiza</a> ). MDBX je posvetil <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide%EF%BC%89%E3%80%82MDBX%E5%AF%B9%E5%8F%AF%E5%9B%9E%E6%94%B6%E7%A9%BA%E9%97%B4%E7%9A%84%E6%9C%89%E6%95%88%E5%A4%84%E7%90%86%E8%BF%9B%E8%A1%8C%E4%BA%86%E7%89%B9%E5%88%AB%E7%9A%84%E5%85%B3%E6%B3%A8%EF%BC%8C%E5%88%B0%E7%9B%AE%E5%89%8D%E4%B8%BA%E6%AD%A2%EF%BC%8C%E8%BF%98%E4%B8%8D%E9%9C%80%E8%A6%81%E6%89%93%E8%A1%A5%E4%B8%81%E3%80%82" target="_blank" rel="noopener noreferrer">posebno pozornost u\u010Dinkovitemu ravnanju s prostorom za vra\u010Danje in ga do zdaj ni bilo treba popravljati</a>.</p></li><li><p>Na podlagi na\u0161ega testiranja se je MDBX pri na\u0161ih delovnih obremenitvah obnesel nekoliko bolje.</p></li><li><p>MDBX razkriva ve\u010D notranjih telemetri\u010Dnih podatkov - ve\u010D metrik o dogajanju v zbirki podatkov. Te podatke imamo na voljo v aplikaciji Grafana - za bolj\u0161e odlo\u010Danje o zasnovi aplikacij. Na primer, po popolnem prehodu na MDBX (odstranitev podpore za LMDB) bomo uvedli politiko &quot;potrditve pol polne transakcije&quot;, da bi se izognili prepolnim/nepopolnim stikom na disku. S tem bomo \u0161e bolj poenostavili kodo, ne da bi to vplivalo na zmogljivost.</p></li><li><p>MDBX podpira na\u010Din &quot;Exclusive open&quot; - ta na\u010Din uporabljamo pri selitvah podatkovnih zbirk, da med postopkom selitve prepre\u010Dimo dostop do podatkovne zbirke vsem drugim bralnikom.</p></li></ol></blockquote><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p><a href="https://github.com/ledgerwatch/erigon/wiki/Criteria-for-transitioning-from-Alpha-to-Beta#switch-from-lmdb-to-mdbx" target="_blank" rel="noopener noreferrer">Erigon (naslednja generacija odjemalca Ethernet) je pred kratkim pre\u0161el z LMDB na MDBX</a>. <a href="#fnref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,160);function oe(re,se){const t=p("RouterLink");return s(),i(l,null,[b,m,v,g,e("nav",k,[e("ul",null,[e("li",null,[a(t,{to:"#citati"},{default:o(()=>[h]),_:1})]),e("li",null,[a(t,{to:"#kaj-je-libmdbx"},{default:o(()=>[c]),_:1})]),e("li",null,[a(t,{to:"#ucna-gradiva"},{default:o(()=>[_]),_:1}),e("ul",null,[e("li",null,[a(t,{to:"#kako-zagnati-primer"},{default:o(()=>[f]),_:1})]),e("li",null,[a(t,{to:"#primer-1-pisanje-set-key-val-in-branje-get-key"},{default:o(()=>[j]),_:1}),e("ul",null,[e("li",null,[a(t,{to:"#koda"},{default:o(()=>[x]),_:1})]),e("li",null,[a(t,{to:"#zagon-izpisa"},{default:o(()=>[q]),_:1})]),e("li",null,[a(t,{to:"#opis-kode"},{default:o(()=>[z]),_:1}),e("ul",null,[e("li",null,[a(t,{to:"#env-rw-opredelitev-zbirke-podatkov"},{default:o(()=>[D]),_:1})]),e("li",null,[a(t,{to:"#siritev-na-makro-ravni"},{default:o(()=>[y]),_:1})]),e("li",null,[a(t,{to:"#kakorkoli-in-lazy-static"},{default:o(()=>[E]),_:1})]),e("li",null,[a(t,{to:"#makro-mdbx"},{default:o(()=>[w]),_:1})]),e("li",null,[a(t,{to:"#niti-in-transakcije"},{default:o(()=>[T]),_:1})]),e("li",null,[a(t,{to:"#branje-in-pisanje-binarnih-podatkov"},{default:o(()=>[B]),_:1})])])])])]),e("li",null,[a(t,{to:"#primer-2-podatkovne-vrste-oznake-zbirke-podatkov-brisanje-preckanje"},{default:o(()=>[M]),_:1}),e("ul",null,[e("li",null,[a(t,{to:"#koda-1"},{default:o(()=>[N]),_:1})]),e("li",null,[a(t,{to:"#zagon-izpisa-1"},{default:o(()=>[S]),_:1})]),e("li",null,[a(t,{to:"#hitro-branje-in-pisanje"},{default:o(()=>[X]),_:1})]),e("li",null,[a(t,{to:"#vrste-podatkov"},{default:o(()=>[V]),_:1}),e("ul",null,[e("li",null,[a(t,{to:"#prednastavljene-vrste-podatkov"},{default:o(()=>[O]),_:1})])])]),e("li",null,[a(t,{to:"#zastave-podatkovne-zbirke"},{default:o(()=>[R]),_:1}),e("ul",null,[e("li",null,[a(t,{to:"#dupsort-enemu-kljucu-ustreza-vec-kot-ena-vrednost"},{default:o(()=>[C]),_:1})]),e("li",null,[a(t,{to:"#dup-key-iterator-ki-vrne-vse-vrednosti-ki-ustrezajo-kljucu"},{default:o(()=>[I]),_:1})]),e("li",null,[a(t,{to:"#privzete-samodejno-dodane-oznake-zbirke-podatkov"},{default:o(()=>[U]),_:1})])])]),e("li",null,[a(t,{to:"#brisanje-podatkov"},{default:o(()=>[P]),_:1}),e("ul",null,[e("li",null,[a(t,{to:"#del-key-brisanje-tipke"},{default:o(()=>[A]),_:1})]),e("li",null,[a(t,{to:"#del-val-key-val-natancno-izbrisovanje-ujemanj"},{default:o(()=>[L]),_:1})])])]),e("li",null,[a(t,{to:"#prehod"},{default:o(()=>[F]),_:1}),e("ul",null,[e("li",null,[a(t,{to:"#zaporedno-preckanje"},{default:o(()=>[$]),_:1})]),e("li",null,[a(t,{to:"#rev-obratno-preckanje-vrstnega-reda"},{default:o(()=>[H]),_:1})]),e("li",null,[a(t,{to:"#razvrscanje"},{default:o(()=>[Y]),_:1})])])])])]),e("li",null,[a(t,{to:"#intervalni-iteratorji"},{default:o(()=>[K]),_:1}),e("ul",null,[e("li",null,[a(t,{to:"#zazenite-izhodno-datoteko"},{default:o(()=>[Z]),_:1})]),e("li",null,[a(t,{to:"#range-begin-end-iteracija-intervala"},{default:o(()=>[G]),_:1})]),e("li",null,[a(t,{to:"#rev-range-obrnjeni-intervali"},{default:o(()=>[W]),_:1})])])]),e("li",null,[a(t,{to:"#prilagajanje-podatkovnih-vrst"},{default:o(()=>[J]),_:1}),e("ul",null,[e("li",null,[a(t,{to:"#poenostavitev-tipov-po-meri-z-atributnimi-makri"},{default:o(()=>[Q]),_:1})])])])])]),e("li",null,[a(t,{to:"#opomba-o-uporabi"},{default:o(()=>[ee]),_:1}),e("ul",null,[e("li",null,[a(t,{to:"#dolzina-kljuca"},{default:o(()=>[ne]),_:1})])])]),e("li",null,[a(t,{to:"#opombe-pod-crto"},{default:o(()=>[te]),_:1})])])]),ae],64)}var de=r(u,[["render",oe],["__file","2021-12-21-mdbx.html.vue"]]);export{de as default};
