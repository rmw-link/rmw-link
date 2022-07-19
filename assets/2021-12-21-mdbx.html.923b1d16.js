import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as i,a as n,b as a,w as s,F as l,d as t,e as d,r as u}from"./app.2a6a1bd2.js";const p={},c=n("h1",{id:"pakiet-rust-dla-libmdbx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pakiet-rust-dla-libmdbx","aria-hidden":"true"},"#"),t(" Pakiet rust dla libmdbx")],-1),m=n("p",null,[t("Narz\u0119dzie "),n("code",null,"rust"),t(" do obs\u0142ugi bazy danych "),n("a",{href:"https://github.com/erthink/libmdbx",target:"_blank",rel:"noopener noreferrer"},"libmdbx"),t(".")],-1),b=n("hr",null,null,-1),y=n("p",null,"Spis tre\u015Bci :",-1),g={class:"table-of-contents"},h=t("Cytaty"),w=t("Co to jest libmdbx?"),z=t("Samouczki"),_=t("Jak uruchomi\u0107 przyk\u0142ad"),k=t("Przyk\u0142ad 1: Pisanie set(key,val) i czytanie .get(key)"),f=t("Kod"),x=t("Uruchom wyj\u015Bcie"),q=t("Opis kodu"),v=t("env_rw! Definiowanie bazy danych"),j=t("Makroekspansja"),D=t("w ka\u017Cdym razie i lazy_static"),E=t("Makro mdbx!"),T=t("W\u0105tki i transakcje"),B=t("Odczyt i zapis danych binarnych"),N=t("Przyk\u0142ad 2: Typy danych, flagi bazy danych, usuwanie, przegl\u0105danie"),M=t("Kod"),S=t("Uruchom wyj\u015Bcie"),X=t("Szybkie odczyty i zapisy"),O=t("Typy danych"),R=t("Zaprogramowane typy danych"),C=t("Flagi bazy danych"),V=t("DUPSORT: jednemu kluczowi odpowiada wi\u0119cej ni\u017C jedna warto\u015B\u0107"),U=t(".dup(key) iterator, kt\xF3ry zwraca wszystkie warto\u015Bci odpowiadaj\u0105ce kluczowi"),I=t("Domy\u015Blne, automatycznie do\u0142\u0105czane flagi bazy danych"),P=t("Usuwanie danych"),A=t(".del(key) Usuwanie klawisza"),L=t(".del_val(key,val) Usuwanie dok\u0142adnego dopasowania"),F=t("Traversal"),W=t("sekwencyjne przechodzenie"),$=t(".rev() Odwr\xF3cona kolejno\u015B\u0107"),Y=t("Sortowanie"),J=t("Iteratory interwa\u0142owe"),G=t("Uruchom dane wyj\u015Bciowe z"),K=t(".range(begin..end) Interwa\u0142 Iteracja"),H=t(".rev_range Odwr\xF3cone interwa\u0142y"),Z=t("Dostosowywanie typ\xF3w danych"),Q=t("Upraszczanie typ\xF3w niestandardowych za pomoc\u0105 makr atrybut\xF3w"),nn=t("Uwaga dotycz\u0105ca stosowania"),tn=t("D\u0142ugo\u015B\u0107 klucza"),en=t("Przypisy"),an=d(`<hr><h2 id="cytaty" tabindex="-1"><a class="header-anchor" href="#cytaty" aria-hidden="true">#</a> Cytaty</h2><p>Podczas pisania programu <a href="https://rmw.link" target="_blank" rel="noopener noreferrer">&quot;rmw.link</a> &quot; poczu\u0142em, \u017Ce potrzebuj\u0119 wbudowanej bazy danych.</p><p>Ze wzgl\u0119du na przepustowo\u015B\u0107 sieci zwi\u0105zan\u0105 z cz\u0119stym zapisywaniem, odczytywaniem i zapisywaniem danych, strona <code>sqlite3</code> by\u0142a zbyt zaawansowana, aby sprosta\u0107 wymaganiom dotycz\u0105cym wydajno\u015Bci.</p><p>Dlatego bardziej odpowiednia by\u0142a baza danych klucz-warto\u015B\u0107 ni\u017Cszego poziomu <a href="https://discourse.world/h/2020/06/05/Shine-and-poverty-key-value-database-LMDB-in-applications-for-iOS" target="_blank" rel="noopener noreferrer">(lmdb jest 10 razy szybsza ni\u017C sqlite</a> ).</p><p><img src="//irmw.gumlet.io/yxZV8x.jpg" alt=""></p><p>Ostatecznie zdecydowa\u0142em si\u0119 na magiczn\u0105 wersj\u0119 strony <code>lmdb</code> - <code>mdbx</code>.</p><p><code>mdbx</code> Obecnie istniej\u0105cy pakiet <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">mdbx-rs (mdbx-sys)</a> ze strony <code>rust</code> <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">nie obs\u0142uguje systemu Windows</a>, wi\u0119c postanowi\u0142em przygotowa\u0107 wersj\u0119 z obs\u0142ug\u0105 systemu Windows.</p><p>Obs\u0142uga przechowywania niestandardowych typ\xF3w rdzy. Obs\u0142uguje dost\u0119p wielow\u0105tkowy.</p><p>Baz\u0119 danych mo\u017Cna zdefiniowa\u0107 w module za pomoc\u0105 <code>lazy_static</code>, a nast\u0119pnie po prostu wprowadzi\u0107 i u\u017Cywa\u0107 jej za pomoc\u0105 czego\u015B w rodzaju :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
</code></pre></div><h2 id="co-to-jest-libmdbx" tabindex="-1"><a class="header-anchor" href="#co-to-jest-libmdbx" aria-hidden="true">#</a> Co to jest libmdbx?</h2><p><a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">mdbx</a> jest wt\xF3rn\u0105 baz\u0105 danych opart\u0105 na lmdb, autorstwa rosyjskiego <a href="https://vk.com/erthink" target="_blank" rel="noopener noreferrer">\u041B\u0435\u043E\u043D\u0438\u0434 \u042E\u0440\u044C\u0435\u0432 (Leonid Yuriev)</a>.</p><p><a href="https://en.wikipedia.org/wiki/Lightning_Memory-Mapped_Database" target="_blank" rel="noopener noreferrer">lmdb</a> to superszybka wbudowana baza danych klucz-warto\u015B\u0107.</p><p>Wyszukiwarka pe\u0142notekstowa <a href="https://docs.meilisearch.com/reference/under_the_hood/storage.html#measured-disk-usage" target="_blank" rel="noopener noreferrer">MeiliSearch</a> jest oparta na lmdb.</p><p><a href="https://docs.nvidia.com/deeplearning/dali/user-guide/docs/examples/general/data_loading/dataloading_lmdb.html" target="_blank" rel="noopener noreferrer">Framework do g\u0142\u0119bokiego uczenia caffe r\xF3wnie\u017C u\u017Cywa lmdb jako magazynu danych</a>.</p><p><a href="https://github.com/erthink/libmdbx#added-features" target="_blank" rel="noopener noreferrer">W te\u015Bcie wydajno\u015Bci wbudowanej ioarena mdbx jest o 30% szybszy ni\u017C lmdb</a>.</p><p><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-1.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-3.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-4.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-5.png" alt=""></p><p>Jednocze\u015Bnie mdbx <a href="https://github.com/erthink/libmdbx#improvements-beyond-lmdb" target="_blank" rel="noopener noreferrer">poprawia wiele niedoci\u0105gni\u0119\u0107</a> lmdb, dlatego Erigon (klient ethereum nowej generacji) niedawno przeszed\u0142 z LMDB na MDBX <sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>.</p><h2 id="samouczki" tabindex="-1"><a class="header-anchor" href="#samouczki" aria-hidden="true">#</a> Samouczki</h2><h3 id="jak-uruchomic-przyk\u0142ad" tabindex="-1"><a class="header-anchor" href="#jak-uruchomic-przyk\u0142ad" aria-hidden="true">#</a> Jak uruchomi\u0107 przyk\u0142ad</h3><p>Najpierw nale\u017Cy sklonowa\u0107 baz\u0119 kod\xF3w <code>git clone git@github.com:rmw-lib/mdbx.git --depth=1 &amp;&amp; cd mdbx</code></p><p>Nast\u0119pnie nale\u017Cy uruchomi\u0107 stron\u0119 <code>cargo run --example 01</code>, co spowoduje uruchomienie <code>examples/01.rs</code></p><p>Je\u015Bli jest to w\u0142asny projekt, nale\u017Cy go najpierw uruchomi\u0107:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>cargo install cargo-edit
cargo add mdbx lazy_static ctor paste
</code></pre></div><h3 id="przyk\u0142ad-1-pisanie-set-key-val-i-czytanie-get-key" tabindex="-1"><a class="header-anchor" href="#przyk\u0142ad-1-pisanie-set-key-val-i-czytanie-get-key" aria-hidden="true">#</a> Przyk\u0142ad 1: Pisanie <code>set(key,val)</code> i czytanie <code>.get(key)</code></h3><p>Przyjrzyjmy si\u0119 prostemu <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/01.rs" target="_blank" rel="noopener noreferrer">przyk\u0142adowi/01.rs</a></p><h4 id="kod" tabindex="-1"><a class="header-anchor" href="#kod" aria-hidden="true">#</a> Kod</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nazwa zmiennej bazy danych Env
  Test // Test bazy danych
}

fn main() -&gt; Result&lt;()&gt; {
  // Wypisz numer wersji libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Odczyt i zapis wielow\u0105tkowy
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
</code></pre></div><h4 id="uruchom-wyjscie" tabindex="-1"><a class="header-anchor" href="#uruchom-wyjscie" aria-hidden="true">#</a> Uruchom wyj\u015Bcie</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/01.mdb
mdbx version https://github.com/erthink/libmdbx/releases/tag/v0.11.2
test1 get Ok(Some(Bin([6])))
[6]
</code></pre></div><h4 id="opis-kodu" tabindex="-1"><a class="header-anchor" href="#opis-kodu" aria-hidden="true">#</a> Opis kodu</h4><h5 id="env-rw-definiowanie-bazy-danych" tabindex="-1"><a class="header-anchor" href="#env-rw-definiowanie-bazy-danych" aria-hidden="true">#</a> <code>env_rw!</code> Definiowanie bazy danych</h5><p>Kod rozpoczyna si\u0119 od makra env_rw, kt\xF3re ma 4 parametry.</p><ol><li><p>Nazwa zmiennej \u015Brodowiska bazy danych</p></li><li><p>Zwraca obiekt, <a href="https://docs.rs/mdbx/latest/src/mdbx/env.rs.html#27-35" target="_blank" rel="noopener noreferrer">mdbx:: env:: Config</a>.</p></li></ol><p>U\u017Cywamy konfiguracji domy\u015Blnej, poniewa\u017C <code>Env</code> implementuje <code>From&lt;Into&lt;PathBuf&gt;&gt;</code>, wi\u0119c wystarczy \u015Bcie\u017Cka do bazy danych <code>into()</code>, a konfiguracja domy\u015Blna jest nast\u0119puj\u0105ca.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
MDBX // Nazwa zmiennej bazy danych Env
Test // Test bazy danych
}

fn main() -&gt; Result&lt;()&gt; {
// Wypisz numer wersji libmdbx
unsafe {
  println!(
    &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
    mdbx_version.major, mdbx_version.minor, mdbx_version.release
  );
}

// Odczyt i zapis wielow\u0105tkowy
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
    sync_period : 65536, // W 1/65536 cz\u0119\u015Bci sekundy
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
</code></pre></div><p><code>max_db</code> Ustawienie to mo\u017Ce by\u0107 resetowane <a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">przy</a> ka\u017Cdym otwarciu bazy danych, ale zbyt du\u017Ce jego ustawienie mo\u017Ce wp\u0142yn\u0105\u0107 na wydajno\u015B\u0107.</p><p>Znaczenie pozosta\u0142ych parametr\xF3w mo\u017Cna znale\u017A\u0107 w <a href="https://erthink.github.io/libmdbx/group__c__opening.html#ga9138119a904355d245777c4119534061" target="_blank" rel="noopener noreferrer">dokumentacji libmdbx</a>.</p><ol start="3"><li><p>Nazwa makra transakcji odczytu bazy danych, warto\u015B\u0107 domy\u015Blna to <code>r</code></p></li><li><p>Nazwa makra transakcji zapisu do bazy danych, warto\u015B\u0107 domy\u015Blna to <code>w</code></p></li></ol><p>Parametry 3 i 4 mo\u017Cna pomin\u0105\u0107, aby zastosowa\u0107 warto\u015Bci domy\u015Blne.</p><h5 id="makroekspansja" tabindex="-1"><a class="header-anchor" href="#makroekspansja" aria-hidden="true">#</a> Makroekspansja</h5><p>Je\u015Bli chcesz zobaczy\u0107, co robi magia makr, mo\u017Cesz u\u017Cy\u0107 makra <code>cargo expand --example 01</code>, kt\xF3re trzeba najpierw zainstalowa\u0107, aby je rozwin\u0105\u0107. <code>cargo install cargo-expand</code></p><p>Poni\u017Cej pokazano zrzut ekranu z rozszerzonym kodem.</p><p><img src="//irmw.gumlet.io/PDzEtT.png" alt="PDzEtT"></p><h5 id="w-kazdym-razie-i-lazy-static" tabindex="-1"><a class="header-anchor" href="#w-kazdym-razie-i-lazy-static" aria-hidden="true">#</a> w ka\u017Cdym razie i lazy_static</h5><p>Na rozwini\u0119tym zrzucie ekranu wida\u0107, \u017Ce u\u017Cywane s\u0105 adresy <code>lazy_static</code> i <code>anyhow</code>.</p><p><a href="https://rustmagazine.github.io/rust_magazine_2021/chapter_2/rust_error_handle.html#thiserror--anyhow" target="_blank" rel="noopener noreferrer">anyhow</a> jest bibliotek\u0105 obs\u0142ugi b\u0142\u0119d\xF3w dla j\u0119zyka rust.</p><p><a href="https://juejin.cn/post/7007336922817232927" target="_blank" rel="noopener noreferrer">lazy_static</a> to zmienna statyczna z op\xF3\u017Anion\u0105 inicjalizacj\u0105.</p><p>Te dwie biblioteki s\u0105 bardzo powszechne i nie b\u0119d\u0119 si\u0119 nad nimi rozwodzi\u0107.</p><h5 id="makro-mdbx" tabindex="-1"><a class="header-anchor" href="#makro-mdbx" aria-hidden="true">#</a> Makro mdbx!</h5><p><a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html" target="_blank" rel="noopener noreferrer"><code>mdbx!</code></a> jest <a href="https://mp.weixin.qq.com/s/YT_HNFDCQ_IyocvBkRNJnA" target="_blank" rel="noopener noreferrer">makrem proceduralnym</a>.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nazwa zmiennej bazy danych Env
  Test // Test bazy danych
}

fn main() -&gt; Result&lt;()&gt; {
  // Wypisz numer wersji libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Odczyt i zapis wielow\u0105tkowy
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
      sync_period : 65536, // W 1/65536 cz\u0119\u015Bci sekundy
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
 MDBX // Nazwa zmiennej bazy danych Env
 Test // Test bazy danych
}
</code></pre></div><p>W pierwszym wierszu podajemy nazw\u0119 zmiennej \u015Brodowiska bazy danych</p><p>W drugim wierszu znajduje si\u0119 nazwa bazy danych</p><p>Mo\u017Ce istnie\u0107 wi\u0119cej ni\u017C jedna baza danych, po jednym wierszu dla ka\u017Cdej z nich.</p><h5 id="watki-i-transakcje" tabindex="-1"><a class="header-anchor" href="#watki-i-transakcje" aria-hidden="true">#</a> W\u0105tki i transakcje</h5><p>Powy\u017Cszy kod demonstruje wielow\u0105tkowy odczyt i zapis.</p><p>Nale\u017Cy pami\u0119ta\u0107, \u017Ce <strong>w danym momencie w tym samym w\u0105tku</strong> mo\u017Ce <strong>znajdowa\u0107 si\u0119 tylko jedna transakcja. Je\u015Bli w w\u0105tku otwartych jest wi\u0119cej ni\u017C jedna transakcja, program ulegnie awarii</strong>.</p><p>Transakcja zostanie zrealizowana po zako\u0144czeniu zakresu.</p><h5 id="odczyt-i-zapis-danych-binarnych" tabindex="-1"><a class="header-anchor" href="#odczyt-i-zapis-danych-binarnych" aria-hidden="true">#</a> Odczyt i zapis danych binarnych</h5><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nazwa zmiennej bazy danych Env
  Test // Test bazy danych
}

fn main() -&gt; Result&lt;()&gt; {
  // Wypisz numer wersji libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Odczyt i zapis wielow\u0105tkowy
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
      sync_period : 65536, // W 1/65536 cz\u0119\u015Bci sekundy
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
 MDBX // Nazwa zmiennej bazy danych Env
 Test // Test bazy danych
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
</code></pre></div><p><code>set</code> jest zapisem, <code>get</code> jest odczytem, a ka\u017Cdy obiekt, kt\xF3ry implementuje <a href="https://doc.rust-lang.org/std/convert/trait.AsRef.html" target="_blank" rel="noopener noreferrer"><code>AsRef&lt;[u8]&gt;</code></a> mo\u017Ce zosta\u0107 zapisany w bazie danych.</p><p><code>get</code> Powstaje strona <code>Ok(Some(Bin([6])))</code>, kt\xF3r\u0105 mo\u017Cna przekszta\u0142ci\u0107 na <code>&amp;[u8]</code>.</p><h3 id="przyk\u0142ad-2-typy-danych-flagi-bazy-danych-usuwanie-przegladanie" tabindex="-1"><a class="header-anchor" href="#przyk\u0142ad-2-typy-danych-flagi-bazy-danych-usuwanie-przegladanie" aria-hidden="true">#</a> Przyk\u0142ad 2: Typy danych, flagi bazy danych, usuwanie, przegl\u0105danie</h3><p>Przyjrzyjmy si\u0119 drugiemu <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">przyk\u0142adowi/02.rs</a>:</p><p>W tym przyk\u0142adzie pomini\u0119to stron\u0119 <code>env_rw!</code> oraz trzeci i czwarty argument ( <code>r</code>, <code>w</code>).</p><h4 id="kod-1" tabindex="-1"><a class="header-anchor" href="#kod-1" aria-hidden="true">#</a> Kod</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nazwa zmiennej bazy danych Env
  Test // Test bazy danych
}

fn main() -&gt; Result&lt;()&gt; {
  // Wypisz numer wersji libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Odczyt i zapis wielow\u0105tkowy
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
      sync_period : 65536, // W 1/65536 cz\u0119\u015Bci sekundy
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
 MDBX // Nazwa zmiennej bazy danych Env
 Test // Test bazy danych
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
  MDBX // Nazwy zmiennych dla bazy danych ENV
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
  // Szybkie pisanie
  w!(Test1.set [2, 3],[4, 5]);

  // Szybkie czytanie
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

  // Wielokrotne operacje na wielu bazach danych w ramach tej samej transakcji
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

    // Transakcja zostanie zrealizowana po zako\u0144czeniu zakresu
  }

  Ok(())
}
</code></pre></div><h4 id="uruchom-wyjscie-1" tabindex="-1"><a class="header-anchor" href="#uruchom-wyjscie-1" aria-hidden="true">#</a> Uruchom wyj\u015Bcie</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/02.mdb

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
</code></pre></div><h4 id="szybkie-odczyty-i-zapisy" tabindex="-1"><a class="header-anchor" href="#szybkie-odczyty-i-zapisy" aria-hidden="true">#</a> Szybkie odczyty i zapisy</h4><p>Je\u015Bli chcemy po prostu odczyta\u0107 lub zapisa\u0107 pojedynczy wiersz danych, mo\u017Cemy u\u017Cy\u0107 syntaktycznego cukru, jakim jest makro.</p><p>Dane do odczytu</p><div class="language-text ext-text"><pre class="language-text"><code>r!(Test1.get [2, 3])
</code></pre></div><p>Zapisywanie danych</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nazwa zmiennej bazy danych Env
  Test // Test bazy danych
}

fn main() -&gt; Result&lt;()&gt; {
  // Wypisz numer wersji libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Odczyt i zapis wielow\u0105tkowy
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
      sync_period : 65536, // W 1/65536 cz\u0119\u015Bci sekundy
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
 MDBX // Nazwa zmiennej bazy danych Env
 Test // Test bazy danych
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
  MDBX // Nazwy zmiennych dla bazy danych ENV
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
  // Szybkie pisanie
  w!(Test1.set [2, 3],[4, 5]);

  // Szybkie czytanie
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

  // Wielokrotne operacje na wielu bazach danych w ramach tej samej transakcji
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

    // Transakcja zostanie zrealizowana po zako\u0144czeniu zakresu
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
</code></pre></div><p>Wszystko w jednym wierszu, jak napisano w <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a>.</p><h4 id="typy-danych" tabindex="-1"><a class="header-anchor" href="#typy-danych" aria-hidden="true">#</a> Typy danych</h4><p>W pliku examples/02 <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">.rs</a> definicja bazy danych wygl\u0105da nast\u0119puj\u0105co :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nazwa zmiennej bazy danych Env
  Test // Test bazy danych
}

fn main() -&gt; Result&lt;()&gt; {
  // Wypisz numer wersji libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Odczyt i zapis wielow\u0105tkowy
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
      sync_period : 65536, // W 1/65536 cz\u0119\u015Bci sekundy
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
 MDBX // Nazwa zmiennej bazy danych Env
 Test // Test bazy danych
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
  MDBX // Nazwy zmiennych dla bazy danych ENV
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
  // Szybkie pisanie
  w!(Test1.set [2, 3],[4, 5]);

  // Szybkie czytanie
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

  // Wielokrotne operacje na wielu bazach danych w ramach tej samej transakcji
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

    // Transakcja zostanie zrealizowana po zako\u0144czeniu zakresu
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
</code></pre></div><p>gdzie <code>key</code> i <code>val</code> okre\u015Blaj\u0105 typy danych odpowiednio dla kluczy i warto\u015Bci.</p><p>W przypadku pr\xF3by zapisania typu danych, kt\xF3ry nie odpowiada zdefiniowanemu, zostanie zg\u0142oszony b\u0142\u0105d, jak pokazano na poni\u017Cszym zrzucie ekranu:</p><p><img src="//irmw.gumlet.io/4rFTC6.png" alt=""></p><p>Domy\u015Blnym typem danych jest <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Bin.html" target="_blank" rel="noopener noreferrer"><code>Bin</code></a> mo\u017Cna zapisa\u0107 dowolne dane, kt\xF3re obs\u0142uguj\u0105 adres <code>AsRef&lt;[u8]&gt;</code>.</p><p>Je\u015Bli kluczem lub warto\u015Bci\u0105 jest ci\u0105g znak\xF3w <code>utf8</code>, typ danych mo\u017Cna ustawi\u0107 na <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Str.html" target="_blank" rel="noopener noreferrer"><code>Str</code></a> .</p><p><a href="https://doc.rust-lang.org/std/ops/trait.Deref.html" target="_blank" rel="noopener noreferrer">Odcytowanie</a> <code>Str</code> spowoduje zwr\xF3cenie \u0142a\u0144cucha, podobnego do <code>let k:&amp;str = &amp;k;</code>.</p><p>Ponadto strona <code>Str</code> implementuje r\xF3wnie\u017C <a href="https://doc.rust-lang.org/std/fmt/trait.Display.html" target="_blank" rel="noopener noreferrer"><code>std::fmt::Display</code></a> , <code>println!(&quot;{}&quot;,k)</code> wy\u015Bwietli czytelny ci\u0105g znak\xF3w.</p><h5 id="zaprogramowane-typy-danych" tabindex="-1"><a class="header-anchor" href="#zaprogramowane-typy-danych" aria-hidden="true">#</a> Zaprogramowane typy danych</h5><p>Opr\xF3cz <code>Str</code> i <code>Bin</code>, wrapper zawiera r\xF3wnie\u017C obs\u0142ug\u0119 danych dla <a href="https://docs.rs/mdbx/latest/src/mdbx/type.rs.html#48" target="_blank" rel="noopener noreferrer">usize, u128, u64, u32, u16, u8, isize, i128, i64, i32, i16, i8, f32</a>, f64.</p><h4 id="flagi-bazy-danych" tabindex="-1"><a class="header-anchor" href="#flagi-bazy-danych" aria-hidden="true">#</a> Flagi bazy danych</h4><p>Flagi bazy danych dodane do danych w pliku <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a> mo\u017Cna zobaczy\u0107 na stronie <code>Test4</code>. <code>flag DUPSORT</code></p><p>Baza danych libmdbx posiada szereg flag ( <a href="https://erthink.github.io/libmdbx/group__c__dbi.html#gafe3bddb297b3ab0d828a487c5726f76a" target="_blank" rel="noopener noreferrer"><code>MDBX_db_flags_t</code></a> ), kt\xF3re mo\u017Cna ustawi\u0107.</p><ul><li>REVERSEKEY u\u017Cywa odwrotnego por\xF3wnywania \u0142a\u0144cuch\xF3w dla kluczy. (przydatne w przypadku u\u017Cywania ma\u0142ych liczb z kodem ko\u0144cowym jako kluczy)</li><li>DUPSORT u\u017Cywa posortowanych duplikat\xF3w, tzn. dopuszcza wiele warto\u015Bci dla jednego klucza.</li><li>INTEGERKEY Natywny klucz numeryczny uporz\u0105dkowany bajtowo uint32_t lub uint64_t. klucze musz\u0105 mie\u0107 ten sam rozmiar i musz\u0105 by\u0107 wyr\xF3wnane, gdy s\u0105 przekazywane jako argument.</li><li>DUPFIXED Rozmiar warto\u015Bci danych musi by\u0107 taki sam, je\u015Bli u\u017Cywany jest DUPSORT (umo\u017Cliwia szybkie policzenie liczby warto\u015Bci).</li><li>DUPSORT i DUPFIXED s\u0105 wymagane dla INTEGERDUP; warto\u015Bci s\u0105 liczbami ca\u0142kowitymi (podobnie jak w przypadku INTEGERKEY). Wszystkie warto\u015Bci danych musz\u0105 mie\u0107 ten sam rozmiar i musz\u0105 by\u0107 wyr\xF3wnane, gdy s\u0105 przekazywane jako parametry.</li><li>REVERSEDUP u\u017Cywa DUPSORT; dla warto\u015Bci danych u\u017Cywane jest odwrotne por\xF3wnywanie \u0142a\u0144cuch\xF3w.</li><li>CREATE tworzy baz\u0119 danych, je\u015Bli jeszcze nie istnieje (domy\u015Blnie dodana).</li><li>DB_ACCEDE Otwiera istniej\u0105c\u0105 podbaz\u0119 danych utworzon\u0105 przy u\u017Cyciu flagi unknown.<br> Ta flaga DB_ACCEDE jest przeznaczona do otwierania istniej\u0105cych podbaz danych utworzonych z nieznanymi flagami (REVERSEKEY, DUPSORT, INTEGERKEY, DUPFIXED, INTEGERDUP i REVERSEDUP).<br> W takim przypadku podbaza nie zwr\xF3ci b\u0142\u0119du INCOMPATIBLE, ale zostanie otwarta z flagami u\u017Cytymi do jej utworzenia, a aplikacja mo\u017Ce okre\u015Bli\u0107 rzeczywiste flagi za pomoc\u0105 funkcji mdbx_dbi_flags().</li></ul><h5 id="dupsort-jednemu-kluczowi-odpowiada-wiecej-niz-jedna-wartosc" tabindex="-1"><a class="header-anchor" href="#dupsort-jednemu-kluczowi-odpowiada-wiecej-niz-jedna-wartosc" aria-hidden="true">#</a> DUPSORT: jednemu kluczowi odpowiada wi\u0119cej ni\u017C jedna warto\u015B\u0107</h5><p><code>DUPSORT</code>Oznacza to, \u017Ce jednemu kluczowi mo\u017Ce odpowiada\u0107 wi\u0119cej ni\u017C jedna warto\u015B\u0107.</p><p>Je\u015Bli chcesz ustawi\u0107 wiele flag, napisz w nast\u0119puj\u0105cy spos\xF3b <code>flag DUPSORT | DUPFIXED</code></p><h5 id="dup-key-iterator-ktory-zwraca-wszystkie-wartosci-odpowiadajace-kluczowi" tabindex="-1"><a class="header-anchor" href="#dup-key-iterator-ktory-zwraca-wszystkie-wartosci-odpowiadajace-kluczowi" aria-hidden="true">#</a> <code>.dup(key)</code> iterator, kt\xF3ry zwraca wszystkie warto\u015Bci odpowiadaj\u0105ce kluczowi</h5><p>Funkcja ta jest dost\u0119pna tylko dla baz danych oznaczonych adresem <code>DUPSORT</code>, w kt\xF3rych kluczowi mo\u017Ce odpowiada\u0107 wi\u0119cej ni\u017C jedna warto\u015B\u0107.</p><p>W przypadku baz danych <code>DUPSORT</code>, <code>get</code> zwraca tylko pierwsz\u0105 warto\u015B\u0107 dla tego klucza. Aby uzyska\u0107 wszystkie warto\u015Bci, nale\u017Cy u\u017Cy\u0107 adresu <code>dup</code>.</p><h5 id="domyslne-automatycznie-do\u0142aczane-flagi-bazy-danych" tabindex="-1"><a class="header-anchor" href="#domyslne-automatycznie-do\u0142aczane-flagi-bazy-danych" aria-hidden="true">#</a> Domy\u015Blne, automatycznie do\u0142\u0105czane flagi bazy danych</h5><p>Je\u015Bli typ danych to <code>u32</code> / <code>u64</code> / <code>usize</code>, flaga bazy danych jest dodawana automatycznie. <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#105" target="_blank" rel="noopener noreferrer"><code>INTEGERKEY</code></a> .</p><p>W przypadku maszyn z kodowaniem ma\u0142ych ko\u0144c\xF3wek inne typy liczb s\u0105 dodawane automatycznie <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#108" target="_blank" rel="noopener noreferrer"><code>REVERSEKEY</code></a> Znacznik bazy danych jest dodawany automatycznie, gdy typem danych jest / / .</p><h4 id="usuwanie-danych" tabindex="-1"><a class="header-anchor" href="#usuwanie-danych" aria-hidden="true">#</a> Usuwanie danych</h4><h5 id="del-key-usuwanie-klawisza" tabindex="-1"><a class="header-anchor" href="#del-key-usuwanie-klawisza" aria-hidden="true">#</a> <code>.del(key)</code> Usuwanie klawisza</h5><p><code>.del(val)</code> Usuwa warto\u015B\u0107 odpowiadaj\u0105c\u0105 kluczowi.</p><p>Je\u015Bli baza danych ma ustawion\u0105 flag\u0119 <code>DUPSORT</code>, wszystkie warto\u015Bci pod tym kluczem zostan\u0105 usuni\u0119te.</p><p>Zwraca adres <code>true</code>, je\u015Bli jakie\u015B dane zosta\u0142y usuni\u0119te, oraz <code>false</code>, je\u015Bli nie.</p><h5 id="del-val-key-val-usuwanie-dok\u0142adnego-dopasowania" tabindex="-1"><a class="header-anchor" href="#del-val-key-val-usuwanie-dok\u0142adnego-dopasowania" aria-hidden="true">#</a> <code>.del_val(key,val)</code> Usuwanie dok\u0142adnego dopasowania</h5><p><code>.del_val(key,val)</code> Usuwa pary klucz-warto\u015B\u0107, kt\xF3re dok\u0142adnie odpowiadaj\u0105 parametrom wej\u015Bciowym.</p><p>Zwraca adres <code>true</code>, je\u015Bli jakie\u015B dane zosta\u0142y usuni\u0119te, oraz <code>false</code>, je\u015Bli nie.</p><h4 id="traversal" tabindex="-1"><a class="header-anchor" href="#traversal" aria-hidden="true">#</a> Traversal</h4><h5 id="sekwencyjne-przechodzenie" tabindex="-1"><a class="header-anchor" href="#sekwencyjne-przechodzenie" aria-hidden="true">#</a> sekwencyjne przechodzenie</h5><p>Ze wzgl\u0119du na wdro\u017Cenie <a href="https://doc.rust-lang.org/std/iter/trait.IntoIterator.html" target="_blank" rel="noopener noreferrer"><code>std::iter::IntoIterator</code></a> . mo\u017Cna przemieszcza\u0107 si\u0119 bezpo\u015Brednio w nast\u0119puj\u0105cy spos\xF3b :</p><p><code>for (k, v) in test1</code></p><h5 id="rev-odwrocona-kolejnosc" tabindex="-1"><a class="header-anchor" href="#rev-odwrocona-kolejnosc" aria-hidden="true">#</a> <code>.rev()</code> Odwr\xF3cona kolejno\u015B\u0107</h5><p><code>for (k, v) in test4.rev()</code></p><h5 id="sortowanie" tabindex="-1"><a class="header-anchor" href="#sortowanie" aria-hidden="true">#</a> Sortowanie</h5><p>Klucze libmdbx s\u0105 posortowane w <a href="https://zh.wikipedia.org/wiki/%E5%AD%97%E5%85%B8%E5%BA%8F" target="_blank" rel="noopener noreferrer">kolejno\u015Bci s\u0142ownikowej</a>.</p><ul><li><p>Dla liczb bez znaku</p><p>s\u0105 posortowane od najmniejszej do najwi\u0119kszej, poniewa\u017C flagi bazy danych s\u0105 dodawane automatycznie ( <code>u32</code>/ <code>u64</code>/ <code>usize</code> s\u0105 dodawane do <code>INTEGERKEY</code>, inne s\u0105 dodawane do <code>REVERSEKEY</code> w zale\u017Cno\u015Bci od kodu maszynowego).</p></li><li><p>Dla liczb podpisanych</p><p>kolejno\u015B\u0107 jest nast\u0119puj\u0105ca: najpierw 0, potem wszystkie liczby dodatnie od najmniejszej do najwi\u0119kszej, a nast\u0119pnie wszystkie liczby ujemne od najmniejszej do najwi\u0119kszej.</p></li></ul><h3 id="iteratory-interwa\u0142owe" tabindex="-1"><a class="header-anchor" href="#iteratory-interwa\u0142owe" aria-hidden="true">#</a> Iteratory interwa\u0142owe</h3><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nazwa zmiennej bazy danych Env
  Test // Test bazy danych
}

fn main() -&gt; Result&lt;()&gt; {
  // Wypisz numer wersji libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Odczyt i zapis wielow\u0105tkowy
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
      sync_period : 65536, // W 1/65536 cz\u0119\u015Bci sekundy
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
 MDBX // Nazwa zmiennej bazy danych Env
 Test // Test bazy danych
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
  MDBX // Nazwy zmiennych dla bazy danych ENV
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
  // Szybkie pisanie
  w!(Test1.set [2, 3],[4, 5]);

  // Szybkie czytanie
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

  // Wielokrotne operacje na wielu bazach danych w ramach tej samej transakcji
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

    // Transakcja zostanie zrealizowana po zako\u0144czeniu zakresu
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
</code></pre></div><h4 id="uruchom-dane-wyjsciowe-z" tabindex="-1"><a class="header-anchor" href="#uruchom-dane-wyjsciowe-z" aria-hidden="true">#</a> Uruchom dane wyj\u015Bciowe z</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/range.mdb

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
</code></pre></div><h4 id="range-begin-end-interwa\u0142-iteracja" tabindex="-1"><a class="header-anchor" href="#range-begin-end-interwa\u0142-iteracja" aria-hidden="true">#</a> <code>.range(begin..end)</code> Interwa\u0142 Iteracja</h4><p>W przypadku liczb przedzia\u0142 to przedzia\u0142 liczbowy.</p><p>Dla uk\u0142adu dw\xF3jkowego mo\u017Cna skonstruowa\u0107 taki sam przedzia\u0142, np.</p><div class="language-text ext-text"><pre class="language-text"><code>let begin : &amp;[u8] = &amp;[1,1];
for (k,v) in test0.range(begin..=&amp;[2]) {}
</code></pre></div><p>Je\u015Bli adres <code>begin</code> jest wi\u0119kszy ni\u017C <code>end</code>, zostanie wykonana iteracja wstecz.</p><p>Na przyk\u0142ad strona <code>test1.range(5..2)</code> wy\u015Bwietli nast\u0119puj\u0105ce dane :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nazwa zmiennej bazy danych Env
  Test // Test bazy danych
}

fn main() -&gt; Result&lt;()&gt; {
  // Wypisz numer wersji libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Odczyt i zapis wielow\u0105tkowy
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
      sync_period : 65536, // W 1/65536 cz\u0119\u015Bci sekundy
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
 MDBX // Nazwa zmiennej bazy danych Env
 Test // Test bazy danych
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
  MDBX // Nazwy zmiennych dla bazy danych ENV
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
  // Szybkie pisanie
  w!(Test1.set [2, 3],[4, 5]);

  // Szybkie czytanie
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

  // Wielokrotne operacje na wielu bazach danych w ramach tej samej transakcji
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

    // Transakcja zostanie zrealizowana po zako\u0144czeniu zakresu
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
</code></pre></div><p>Nie jest obs\u0142ugiwana iteracja interwa\u0142owa <a href="https://doc.rust-lang.org/std/ops/struct.RangeFull.html" target="_blank" rel="noopener noreferrer"><code>RangeFull</code></a> tzn. u\u017Cycie adresu <code>..</code>nie jest obs\u0142ugiwane, zamiast tego nale\u017Cy u\u017Cy\u0107 wspomnianego powy\u017Cej <a href="#%E9%81%8D%E5%8E%86">traversal</a>.</p><h4 id="rev-range-odwrocone-interwa\u0142y" tabindex="-1"><a class="header-anchor" href="#rev-range-odwrocone-interwa\u0142y" aria-hidden="true">#</a> <code>.rev_range</code> Odwr\xF3cone interwa\u0142y</h4><p>Je\u015Bli chcesz uzyska\u0107 odwr\xF3cony przedzia\u0142, kt\xF3ry jest mniejszy lub r\xF3wny pewnej warto\u015Bci, mo\u017Cesz wykona\u0107 nast\u0119puj\u0105c\u0105 czynno\u015B\u0107</p><div class="language-text ext-text"><pre class="language-text"><code>test2.rev_range(2..)
</code></pre></div><p>Dane wyj\u015Bciowe b\u0119d\u0105 nast\u0119puj\u0105ce</p><div class="language-text ext-text"><pre class="language-text"><code>(2, 4)
(1, 5)
(0, 0)
</code></pre></div><p>Dla odwr\xF3conego przedzia\u0142u czasowego nie wolno ustawia\u0107 jednego z adres\xF3w <code>begin</code> lub <code>end</code>, poniewa\u017C je\u015Bli oba s\u0105 ustawione, zawsze mo\u017Cna u\u017Cy\u0107 adresu <code>range(end..begin)</code>, aby uzyska\u0107 ten sam efekt.</p><h3 id="dostosowywanie-typow-danych" tabindex="-1"><a class="header-anchor" href="#dostosowywanie-typow-danych" aria-hidden="true">#</a> Dostosowywanie typ\xF3w danych</h3><p>Kod demonstracyjny jest dost\u0119pny na stronie <a href="https://github.com/rmw-lib/mdbx-example/blob/master/01/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/01</a></p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nazwa zmiennej bazy danych Env
  Test // Test bazy danych
}

fn main() -&gt; Result&lt;()&gt; {
  // Wypisz numer wersji libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Odczyt i zapis wielow\u0105tkowy
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
      sync_period : 65536, // W 1/65536 cz\u0119\u015Bci sekundy
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
 MDBX // Nazwa zmiennej bazy danych Env
 Test // Test bazy danych
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
  MDBX // Nazwy zmiennych dla bazy danych ENV
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
  // Szybkie pisanie
  w!(Test1.set [2, 3],[4, 5]);

  // Szybkie czytanie
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

  // Wielokrotne operacje na wielu bazach danych w ramach tej samej transakcji
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

    // Transakcja zostanie zrealizowana po zako\u0144czeniu zakresu
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
</code></pre></div><p>Dane wyj\u015Bciowe s\u0105 nast\u0119puj\u0105ce</p><div class="language-text ext-text"><pre class="language-text"><code>Some(City { name: &quot;BeiJing&quot;, lnglat: (11640, 3990) })
</code></pre></div><p>W przyk\u0142adzie typu niestandardowego u\u017Cywamy <a href="https://github.com/koute/speedy" target="_blank" rel="noopener noreferrer"><code>speedy</code></a> do przeprowadzenia serializacji <a href="https://github.com/djkoloski/rust_serialization_benchmark" target="_blank" rel="noopener noreferrer">( <code>speedy</code> performance review</a> ).</p><p>Implementacja typu niestandardowego <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.FromMdbx.html" target="_blank" rel="noopener noreferrer"><code>FromMdbx</code></a> oraz <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.ToAsRef.html" target="_blank" rel="noopener noreferrer"><code>ToAsRef</code></a> mo\u017Cna nast\u0119pnie przechowywa\u0107 pod adresem <code>mdbx</code>.</p><p>Je\u015Bli u\u017Cywasz okre\u015Blonej biblioteki serializacyjnej, mo\u017Cesz tak\u017Ce dostosowa\u0107 <a href="https://blog.logrocket.com/macros-in-rust-a-tutorial-with-examples/" target="_blank" rel="noopener noreferrer">makra</a> atrybut\xF3w, aby upro\u015Bci\u0107 proces.</p><h4 id="upraszczanie-typow-niestandardowych-za-pomoca-makr-atrybutow" tabindex="-1"><a class="header-anchor" href="#upraszczanie-typow-niestandardowych-za-pomoca-makr-atrybutow" aria-hidden="true">#</a> Upraszczanie typ\xF3w niestandardowych za pomoc\u0105 makr atrybut\xF3w</h4><p>Implementacja makra atrybutu jest tak prosta, jak <a href="https://crates.io/crates/mdbx_speedy" target="_blank" rel="noopener noreferrer"><code>mdbx_speedy</code></a> Kod makra atrybutu jest nast\u0119puj\u0105cy :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nazwa zmiennej bazy danych Env
  Test // Test bazy danych
}

fn main() -&gt; Result&lt;()&gt; {
  // Wypisz numer wersji libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Odczyt i zapis wielow\u0105tkowy
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
      sync_period : 65536, // W 1/65536 cz\u0119\u015Bci sekundy
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
 MDBX // Nazwa zmiennej bazy danych Env
 Test // Test bazy danych
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
  MDBX // Nazwy zmiennych dla bazy danych ENV
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
  // Szybkie pisanie
  w!(Test1.set [2, 3],[4, 5]);

  // Szybkie czytanie
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

  // Wielokrotne operacje na wielu bazach danych w ramach tej samej transakcji
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

    // Transakcja zostanie zrealizowana po zako\u0144czeniu zakresu
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
</code></pre></div><p>Zacznij od <code>cargo add mdbx-speedy</code>w swoim w\u0142asnym projekcie, a nast\u0119pnie mo\u017Cesz szybko dostosowa\u0107 typ (kod demonstracyjny znajduje si\u0119 na <a href="https://github.com/rmw-lib/mdbx-example/blob/master/02/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/02</a> ).</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nazwa zmiennej bazy danych Env
  Test // Test bazy danych
}

fn main() -&gt; Result&lt;()&gt; {
  // Wypisz numer wersji libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Odczyt i zapis wielow\u0105tkowy
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
      sync_period : 65536, // W 1/65536 cz\u0119\u015Bci sekundy
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
 MDBX // Nazwa zmiennej bazy danych Env
 Test // Test bazy danych
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
  MDBX // Nazwy zmiennych dla bazy danych ENV
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
  // Szybkie pisanie
  w!(Test1.set [2, 3],[4, 5]);

  // Szybkie czytanie
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

  // Wielokrotne operacje na wielu bazach danych w ramach tej samej transakcji
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

    // Transakcja zostanie zrealizowana po zako\u0144czeniu zakresu
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
</code></pre></div><p>Oczywi\u015Bcie wielokrotne wpisywanie adresu <code>#[derive(PartialEq, Debug, Readable, Writable, MdbxSpeedy)]</code> jest nadal denerwuj\u0105ce, dlatego mo\u017Cna u\u017Cy\u0107 <a href="https://docs.rs/derive-alias/0.1.0/derive_alias" target="_blank" rel="noopener noreferrer"><code>derive_alias</code></a> aby jeszcze bardziej upro\u015Bci\u0107 kod.</p><h2 id="uwaga-dotyczaca-stosowania" tabindex="-1"><a class="header-anchor" href="#uwaga-dotyczaca-stosowania" aria-hidden="true">#</a> Uwaga dotycz\u0105ca stosowania</h2><h3 id="d\u0142ugosc-klucza" tabindex="-1"><a class="header-anchor" href="#d\u0142ugosc-klucza" aria-hidden="true">#</a> D\u0142ugo\u015B\u0107 klucza</h3><ul><li>Minimalny 0, maksymalny \u2248 \xBD rozmiaru strony (domy\u015Blnie 4K, maksymalny rozmiar klucza strony to 2022 bajty), ustawiany podczas inicjalizacji bazy danych <code>pagesize</code> mo\u017Ce by\u0107 skonfigurowany na nie wi\u0119cej ni\u017C <code>65536</code>i musi by\u0107 pot\u0119g\u0105 2.</li></ul><h2 id="przypisy" tabindex="-1"><a class="header-anchor" href="#przypisy" aria-hidden="true">#</a> Przypisy</h2><p>Wymieniaj\u0105 oni korzy\u015Bci wynikaj\u0105ce z przej\u015Bcia z LMDB na MDBX.</p><blockquote><p>Pocz\u0105tkowo Erigon korzysta\u0142 z bazy danych BoltDB, nast\u0119pnie dodano obs\u0142ug\u0119 BadgerDB, a w ko\u0144cu przeprowadzono ca\u0142kowit\u0105 migracj\u0119 do LMDB. W pewnym momencie napotkali\u015Bmy problemy ze stabilno\u015Bci\u0105 spowodowane u\u017Cywaniem LMDB, kt\xF3rych tw\xF3rcy nie przewidzieli. Od tego czasu przygl\u0105damy si\u0119 dobrze wspieranej pochodnej LMDB, zwanej MDBX, i mamy nadziej\u0119 korzysta\u0107 z jej ulepsze\u0144 w zakresie stabilno\u015Bci oraz potencjalnie wsp\xF3\u0142pracowa\u0107 w przysz\u0142o\u015Bci. Integracja MDBX zosta\u0142a zako\u0144czona i nadszed\u0142 czas na dalsze testy i dokumentacj\u0119.</p><p>Korzy\u015Bci wynikaj\u0105ce z przej\u015Bcia z LMDB na MDBX.</p><ol><li><p>Przyrost &quot;przestrze\u0144 (geometria)&quot; plik\xF3w bazy danych dzia\u0142a prawid\u0142owo. Jest to wa\u017Cne, zw\u0142aszcza w systemie Windows. W LMDB nale\u017Cy raz z g\xF3ry okre\u015Bli\u0107 rozmiar mapy pami\u0119ci (obecnie domy\u015Blnie u\u017Cywamy 2 TB), a je\u015Bli plik bazy danych wzro\u015Bnie ponad ten limit, proces musi zosta\u0107 ponownie uruchomiony. W systemie Windows ustawienie rozmiaru mapy pami\u0119ci na 2 Tb spowodowa\u0142oby, \u017Ce plik bazy danych ju\u017C na pocz\u0105tku mia\u0142by rozmiar 2 Tb, co nie jest zbyt wygodne. W systemie MDBX rozmiar mapy pami\u0119ci jest zwi\u0119kszany co 2 Gb. Oznacza to sporadyczne remapowanie, ale zapewnia lepsze wra\u017Cenia u\u017Cytkownika.</p></li><li><p>MDBX ma bardziej rygorystyczne kontrole dotycz\u0105ce jednoczesnego korzystania z przetwarzania transakcji oraz nak\u0142adaj\u0105cych si\u0119 transakcji odczytu i zapisu w tym samym w\u0105tku wykonawczym. Pozwala to na wykrycie niekt\xF3rych nieoczywistych b\u0142\u0119d\xF3w i sprawia, \u017Ce zachowanie jest bardziej przewidywalne.<br> W ci\u0105gu ponad 5 lat (od czasu wydzielenia z LMDB) MDBX zgromadzi\u0142 du\u017C\u0105 liczb\u0119 poprawek bezpiecze\u0144stwa i b\u0142\u0119d\xF3w, kt\xF3re, wed\u0142ug naszej wiedzy, nadal istniej\u0105 w LMDB. Niekt\xF3re z nich zosta\u0142y wykryte podczas naszych test\xF3w, a opiekunowie MDBX potraktowali je powa\u017Cnie i szybko naprawili.</p></li><li><p>Je\u015Bli chodzi o bazy danych, kt\xF3re stale modyfikuj\u0105 dane, tworz\u0105 one spor\u0105 ilo\u015B\u0107 przestrzeni odzyskiwalnej (w terminologii LMDB nazywanej r\xF3wnie\u017C &quot;woln\u0105 list\u0105&quot;). Musieli\u015Bmy wprowadzi\u0107 poprawki do LMDB, aby usun\u0105\u0107 najpowa\u017Cniejsze niedoci\u0105gni\u0119cia w obs\u0142udze przestrzeni odzyskiwalnej <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide" target="_blank" rel="noopener noreferrer">(analiza)</a>. W MDBX zwr\xF3cono <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide%EF%BC%89%E3%80%82MDBX%E5%AF%B9%E5%8F%AF%E5%9B%9E%E6%94%B6%E7%A9%BA%E9%97%B4%E7%9A%84%E6%9C%89%E6%95%88%E5%A4%84%E7%90%86%E8%BF%9B%E8%A1%8C%E4%BA%86%E7%89%B9%E5%88%AB%E7%9A%84%E5%85%B3%E6%B3%A8%EF%BC%8C%E5%88%B0%E7%9B%AE%E5%89%8D%E4%B8%BA%E6%AD%A2%EF%BC%8C%E8%BF%98%E4%B8%8D%E9%9C%80%E8%A6%81%E6%89%93%E8%A1%A5%E4%B8%81%E3%80%82" target="_blank" rel="noopener noreferrer">szczeg\xF3ln\u0105 uwag\u0119 na efektywn\u0105 obs\u0142ug\u0119 przestrzeni odzyskiwalnej i jak dot\u0105d nie by\u0142o potrzeby wprowadzania poprawek</a>.</p></li><li><p>Z naszych test\xF3w wynika, \u017Ce MDBX wypad\u0142 nieco lepiej w naszych obci\u0105\u017Ceniach roboczych.</p></li><li><p>MDBX ujawnia wi\u0119cej wewn\u0119trznych danych telemetrycznych - wi\u0119cej metryk dotycz\u0105cych tego, co dzieje si\u0119 wewn\u0105trz bazy danych. Mamy te dane w Grafanie - dzi\u0119ki nim mo\u017Cemy podejmowa\u0107 lepsze decyzje dotycz\u0105ce projektowania aplikacji. Na przyk\u0142ad po pe\u0142nym przej\u015Bciu na MDBX (usuni\u0119ciu obs\u0142ugi LMDB) wprowadzimy zasad\u0119 &quot;commit half full transaction&quot;, aby unikn\u0105\u0107 przepe\u0142nienia/nieprzeci\u0105\u017Cenia styk\xF3w dyskowych. Pozwoli to jeszcze bardziej upro\u015Bci\u0107 nasz kod bez wp\u0142ywu na jego wydajno\u015B\u0107.</p></li><li><p>MDBX obs\u0142uguje tryb &quot;Wy\u0142\u0105cznego otwarcia&quot; - u\u017Cywamy go podczas migracji baz danych, aby uniemo\u017Cliwi\u0107 innym czytnikom dost\u0119p do bazy danych podczas procesu migracji.</p></li></ol></blockquote><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p><a href="https://github.com/ledgerwatch/erigon/wiki/Criteria-for-transitioning-from-Alpha-to-Beta#switch-from-lmdb-to-mdbx" target="_blank" rel="noopener noreferrer">Erigon (klient sieci Ethernet nowej generacji) przeszed\u0142 ostatnio z LMDB na MDBX</a>. <a href="#fnref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,160);function sn(on,rn){const e=u("RouterLink");return r(),i(l,null,[c,m,b,y,n("nav",g,[n("ul",null,[n("li",null,[a(e,{to:"#cytaty"},{default:s(()=>[h]),_:1})]),n("li",null,[a(e,{to:"#co-to-jest-libmdbx"},{default:s(()=>[w]),_:1})]),n("li",null,[a(e,{to:"#samouczki"},{default:s(()=>[z]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#jak-uruchomic-przyk\u0142ad"},{default:s(()=>[_]),_:1})]),n("li",null,[a(e,{to:"#przyk\u0142ad-1-pisanie-set-key-val-i-czytanie-get-key"},{default:s(()=>[k]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#kod"},{default:s(()=>[f]),_:1})]),n("li",null,[a(e,{to:"#uruchom-wyjscie"},{default:s(()=>[x]),_:1})]),n("li",null,[a(e,{to:"#opis-kodu"},{default:s(()=>[q]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#env-rw-definiowanie-bazy-danych"},{default:s(()=>[v]),_:1})]),n("li",null,[a(e,{to:"#makroekspansja"},{default:s(()=>[j]),_:1})]),n("li",null,[a(e,{to:"#w-kazdym-razie-i-lazy-static"},{default:s(()=>[D]),_:1})]),n("li",null,[a(e,{to:"#makro-mdbx"},{default:s(()=>[E]),_:1})]),n("li",null,[a(e,{to:"#watki-i-transakcje"},{default:s(()=>[T]),_:1})]),n("li",null,[a(e,{to:"#odczyt-i-zapis-danych-binarnych"},{default:s(()=>[B]),_:1})])])])])]),n("li",null,[a(e,{to:"#przyk\u0142ad-2-typy-danych-flagi-bazy-danych-usuwanie-przegladanie"},{default:s(()=>[N]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#kod-1"},{default:s(()=>[M]),_:1})]),n("li",null,[a(e,{to:"#uruchom-wyjscie-1"},{default:s(()=>[S]),_:1})]),n("li",null,[a(e,{to:"#szybkie-odczyty-i-zapisy"},{default:s(()=>[X]),_:1})]),n("li",null,[a(e,{to:"#typy-danych"},{default:s(()=>[O]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#zaprogramowane-typy-danych"},{default:s(()=>[R]),_:1})])])]),n("li",null,[a(e,{to:"#flagi-bazy-danych"},{default:s(()=>[C]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#dupsort-jednemu-kluczowi-odpowiada-wiecej-niz-jedna-wartosc"},{default:s(()=>[V]),_:1})]),n("li",null,[a(e,{to:"#dup-key-iterator-ktory-zwraca-wszystkie-wartosci-odpowiadajace-kluczowi"},{default:s(()=>[U]),_:1})]),n("li",null,[a(e,{to:"#domyslne-automatycznie-do\u0142aczane-flagi-bazy-danych"},{default:s(()=>[I]),_:1})])])]),n("li",null,[a(e,{to:"#usuwanie-danych"},{default:s(()=>[P]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#del-key-usuwanie-klawisza"},{default:s(()=>[A]),_:1})]),n("li",null,[a(e,{to:"#del-val-key-val-usuwanie-dok\u0142adnego-dopasowania"},{default:s(()=>[L]),_:1})])])]),n("li",null,[a(e,{to:"#traversal"},{default:s(()=>[F]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#sekwencyjne-przechodzenie"},{default:s(()=>[W]),_:1})]),n("li",null,[a(e,{to:"#rev-odwrocona-kolejnosc"},{default:s(()=>[$]),_:1})]),n("li",null,[a(e,{to:"#sortowanie"},{default:s(()=>[Y]),_:1})])])])])]),n("li",null,[a(e,{to:"#iteratory-interwa\u0142owe"},{default:s(()=>[J]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#uruchom-dane-wyjsciowe-z"},{default:s(()=>[G]),_:1})]),n("li",null,[a(e,{to:"#range-begin-end-interwa\u0142-iteracja"},{default:s(()=>[K]),_:1})]),n("li",null,[a(e,{to:"#rev-range-odwrocone-interwa\u0142y"},{default:s(()=>[H]),_:1})])])]),n("li",null,[a(e,{to:"#dostosowywanie-typow-danych"},{default:s(()=>[Z]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#upraszczanie-typow-niestandardowych-za-pomoca-makr-atrybutow"},{default:s(()=>[Q]),_:1})])])])])]),n("li",null,[a(e,{to:"#uwaga-dotyczaca-stosowania"},{default:s(()=>[nn]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#d\u0142ugosc-klucza"},{default:s(()=>[tn]),_:1})])])]),n("li",null,[a(e,{to:"#przypisy"},{default:s(()=>[en]),_:1})])])]),an],64)}var un=o(p,[["render",sn],["__file","2021-12-21-mdbx.html.vue"]]);export{un as default};
