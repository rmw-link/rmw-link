import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as l,a as e,b as a,w as r,F as o,d as t,e as u,r as d}from"./app.2a6a1bd2.js";const p={},c=e("h1",{id:"pachetul-rust-pentru-libmdbx",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pachetul-rust-pentru-libmdbx","aria-hidden":"true"},"#"),t(" Pachetul rust pentru libmdbx")],-1),m=e("p",null,[t("\xCEnveli\u0219ul "),e("code",null,"rust"),t(" pentru baza de date "),e("a",{href:"https://github.com/erthink/libmdbx",target:"_blank",rel:"noopener noreferrer"},"libmdbx"),t(".")],-1),b=e("hr",null,null,-1),g=e("p",null,"Anuar :",-1),h={class:"table-of-contents"},_=t("Citate"),f=t("Ce este libmdbx?"),v=t("Tutoriale"),x=t("Cum se execut\u0103 exemplul"),q=t("Exemplul 1 : Scrierea set(key,val) \u0219i citirea .get(key)"),E=t("Cod"),D=t("Executa\u021Bi ie\u0219irea"),k=t("Cod descriere"),y=t("env_rw! Definirea bazei de date"),w=t("Extinderea macro"),z=t("oricum \u0219i lazy_static"),T=t("Macro mdbx!"),B=t("Fire \u0219i tranzac\u021Bii"),N=t("Citirea \u0219i scrierea datelor binare"),M=t("Exemplul 2: Tipuri de date, indicatori de baze de date, \u0219tergere, traversare"),S=t("Cod"),C=t("Executa\u021Bi ie\u0219irea"),X=t("Citiri \u0219i scrieri rapide"),O=t("Tipuri de date"),R=t("Tipuri de date prestabilite"),V=t("Stegule\u021Be de baz\u0103 de date"),A=t("DUPSORT : O cheie corespunde mai multor valori"),U=t(".dup(key) iterator care returneaz\u0103 toate valorile care corespund unei chei"),I=t("Stegule\u021Be de baz\u0103 de date ad\u0103ugate automat \xEEn mod implicit"),L=t("\u0218tergerea datelor"),P=t(".del(key) \u0218tergerea unei taste"),F=t(".del_val(key,val) \u0218tergere cu potrivire exact\u0103"),$=t("Traversare"),j=t("traversare secven\u021Bial\u0103"),Y=t(".rev() Traversarea invers\u0103 a ordinii"),G=t("Sortare"),H=t("Iteratori de interval"),W=t("Rula\u021Bi ie\u0219irea din"),K=t(".range(begin..end) Interval Iterare"),J=t(".rev_range Intervale inversate"),Q=t("Personalizarea tipurilor de date"),Z=t("Simplificarea tipurilor personalizate cu ajutorul macrourilor de atribute"),ee=t("Not\u0103 privind utilizarea"),te=t("Lungimea cheii"),ne=t("Note de subsol"),ae=u(`<hr><h2 id="citate" tabindex="-1"><a class="header-anchor" href="#citate" aria-hidden="true">#</a> Citate</h2><p>\xCEn timp ce scriam <a href="https://rmw.link" target="_blank" rel="noopener noreferrer">&quot;rmw.link</a> &quot;, am sim\u021Bit c\u0103 am nevoie de o baz\u0103 de date \xEEncorporat\u0103.</p><p>Din cauza debitului de re\u021Bea implicat \xEEn \xEEnregistrarea, citirea \u0219i scrierea frecvent\u0103, <code>sqlite3</code> era prea avansat pentru a r\u0103spunde la problemele de performan\u021B\u0103.</p><p>Astfel, o baz\u0103 de date de nivel inferior cu valori cheie era mai potrivit\u0103 <a href="https://discourse.world/h/2020/06/05/Shine-and-poverty-key-value-database-LMDB-in-applications-for-iOS" target="_blank" rel="noopener noreferrer">(lmdb este de 10 ori mai rapid\u0103 dec\xE2t sqlite</a> ).</p><p><img src="//irmw.gumlet.io/yxZV8x.jpg" alt=""></p><p>\xCEn cele din urm\u0103, am optat pentru versiunea magic\u0103 a <code>lmdb</code> - <code>mdbx</code>.</p><p>\xCEn prezent, pachetul existent <code>rust</code> al <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">mdbx-rs (mdbx-sys)</a> de la <code>mdbx</code> nu suport\u0103 Windows, a\u0219a c\u0103 am decis s\u0103 \xEEmpachetez o versiune cu suport pentru Windows.</p><p>Suport pentru stocarea tipurilor de rugin\u0103 personalizate. Suport\u0103 accesul cu mai multe fire.</p><p>Baza de date poate fi definit\u0103 \xEEntr-un modul folosind <code>lazy_static</code> \u0219i apoi poate fi introdus\u0103 \u0219i utilizat\u0103 pur \u0219i simplu cu ceva de genul :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
</code></pre></div><h2 id="ce-este-libmdbx" tabindex="-1"><a class="header-anchor" href="#ce-este-libmdbx" aria-hidden="true">#</a> Ce este libmdbx?</h2><p><a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">mdbx</a> este o baz\u0103 de date secundar\u0103 bazat\u0103 pe lmdb, realizat\u0103 de rusul <a href="https://vk.com/erthink" target="_blank" rel="noopener noreferrer">\u041B\u0435\u043E\u043D\u0438\u0434 \u042E\u0440\u044C\u0435\u0432 (Leonid Yuriev)</a>.</p><p><a href="https://en.wikipedia.org/wiki/Lightning_Memory-Mapped_Database" target="_blank" rel="noopener noreferrer">lmdb</a> este o baz\u0103 de date cu valori cheie \xEEncorporat\u0103 super-rapid\u0103.</p><p>Motorul de c\u0103utare full-text <a href="https://docs.meilisearch.com/reference/under_the_hood/storage.html#measured-disk-usage" target="_blank" rel="noopener noreferrer">MeiliSearch</a> se bazeaz\u0103 pe lmdb.</p><p><a href="https://docs.nvidia.com/deeplearning/dali/user-guide/docs/examples/general/data_loading/dataloading_lmdb.html" target="_blank" rel="noopener noreferrer">Cadrul de \xEEnv\u0103\u021Bare profund\u0103 caffe utilizeaz\u0103, de asemenea, lmdb ca depozit de date</a>.</p><p><a href="https://github.com/erthink/libmdbx#added-features" target="_blank" rel="noopener noreferrer">mdbx este cu 30% mai rapid dec\xE2t lmdb \xEEn testul de performan\u021B\u0103 \xEEncorporat ioarena</a>.</p><p><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-1.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-3.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-4.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-5.png" alt=""></p><p>\xCEn acela\u0219i timp, mdbx <a href="https://github.com/erthink/libmdbx#improvements-beyond-lmdb" target="_blank" rel="noopener noreferrer">\xEEmbun\u0103t\u0103\u021Be\u0219te multe dintre deficien\u021Bele lui</a> lmdb, astfel c\u0103 Erigon (clientul ethereum de ultim\u0103 genera\u021Bie) a trecut recent de la LMDB la MDBX <sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>.</p><h2 id="tutoriale" tabindex="-1"><a class="header-anchor" href="#tutoriale" aria-hidden="true">#</a> Tutoriale</h2><h3 id="cum-se-executa-exemplul" tabindex="-1"><a class="header-anchor" href="#cum-se-executa-exemplul" aria-hidden="true">#</a> Cum se execut\u0103 exemplul</h3><p>Mai \xEEnt\xE2i clona\u021Bi baza de cod <code>git clone git@github.com:rmw-lib/mdbx.git --depth=1 &amp;&amp; cd mdbx</code></p><p>Apoi rula\u021Bi <code>cargo run --example 01</code> \u0219i va rula <code>examples/01.rs</code></p><p>Dac\u0103 este vorba de propriul proiect, v\u0103 rug\u0103m s\u0103 \xEEl rula\u021Bi mai \xEEnt\xE2i:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>cargo install cargo-edit
cargo add mdbx lazy_static ctor paste
</code></pre></div><h3 id="exemplul-1-scrierea-set-key-val-si-citirea-get-key" tabindex="-1"><a class="header-anchor" href="#exemplul-1-scrierea-set-key-val-si-citirea-get-key" aria-hidden="true">#</a> Exemplul 1 : Scrierea <code>set(key,val)</code> \u0219i citirea <code>.get(key)</code></h3><p>S\u0103 ne uit\u0103m la un exemplu simplu de <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/01.rs" target="_blank" rel="noopener noreferrer">exemplu/01.rs</a></p><h4 id="cod" tabindex="-1"><a class="header-anchor" href="#cod" aria-hidden="true">#</a> Cod</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Numele variabilei din baza de date Env
  Test // Testul bazei de date
}

fn main() -&gt; Result&lt;()&gt; {
  // Afi\u0219eaz\u0103 num\u0103rul de versiune al libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Citire \u0219i scriere cu mai multe fire
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
</code></pre></div><h4 id="executati-iesirea" tabindex="-1"><a class="header-anchor" href="#executati-iesirea" aria-hidden="true">#</a> Executa\u021Bi ie\u0219irea</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/01.mdb
mdbx version https://github.com/erthink/libmdbx/releases/tag/v0.11.2
test1 get Ok(Some(Bin([6])))
[6]
</code></pre></div><h4 id="cod-descriere" tabindex="-1"><a class="header-anchor" href="#cod-descriere" aria-hidden="true">#</a> Cod descriere</h4><h5 id="env-rw-definirea-bazei-de-date" tabindex="-1"><a class="header-anchor" href="#env-rw-definirea-bazei-de-date" aria-hidden="true">#</a> <code>env_rw!</code> Definirea bazei de date</h5><p>Codul \xEEncepe cu un macro env_rw, care are 4 parametri.</p><ol><li><p>Numele variabilei de mediu al bazei de date</p></li><li><p>Returneaz\u0103 un obiect, <a href="https://docs.rs/mdbx/latest/src/mdbx/env.rs.html#27-35" target="_blank" rel="noopener noreferrer">mdbx::: env:: Config</a>.</p></li></ol><p>Utiliz\u0103m configura\u021Bia implicit\u0103, deoarece <code>Env</code> implementeaz\u0103 <code>From&lt;Into&lt;PathBuf&gt;&gt;</code>, astfel \xEEnc\xE2t calea bazei de date <code>into()</code> este suficient\u0103, iar configura\u021Bia implicit\u0103 este urm\u0103toarea.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
MDBX // Numele variabilei din baza de date Env
Test // Testul bazei de date
}

fn main() -&gt; Result&lt;()&gt; {
// Afi\u0219eaz\u0103 num\u0103rul de versiune al libmdbx
unsafe {
  println!(
    &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
    mdbx_version.major, mdbx_version.minor, mdbx_version.release
  );
}

// Citire \u0219i scriere cu mai multe fire
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
    sync_period : 65536, // \xCEn 1/65536 de secund\u0103
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
</code></pre></div><p><code>max_db</code> Aceast\u0103 setare poate fi resetat\u0103 de fiecare dat\u0103 c\xE2nd <a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">se</a> deschide baza de date, dar o setare prea mare va afecta performan\u021Ba; seta\u021Bi-o doar dup\u0103 cum este necesar.</p><p>Consulta\u021Bi <a href="https://erthink.github.io/libmdbx/group__c__opening.html#ga9138119a904355d245777c4119534061" target="_blank" rel="noopener noreferrer">documenta\u021Bia libmdbx</a> pentru semnifica\u021Bia celorlal\u021Bi parametri.</p><ol start="3"><li><p>Numele macroului tranzac\u021Biei de citire a bazei de date; valoarea implicit\u0103 este <code>r</code></p></li><li><p>Numele macroului de tranzac\u021Bie de scriere a bazei de date; valoarea implicit\u0103 este <code>w</code></p></li></ol><p>Parametrii 3 \u0219i 4 pot fi omisi pentru a utiliza valorile implicite.</p><h5 id="extinderea-macro" tabindex="-1"><a class="header-anchor" href="#extinderea-macro" aria-hidden="true">#</a> Extinderea macro</h5><p>Dac\u0103 dori\u021Bi s\u0103 vede\u021Bi ce face magia macro, pute\u021Bi utiliza macro <code>cargo expand --example 01</code> pentru a o extinde, care trebuie instalat\u0103 mai \xEEnt\xE2i. <code>cargo install cargo-expand</code></p><p>O captur\u0103 de ecran a codului extins este prezentat\u0103 mai jos.</p><p><img src="//irmw.gumlet.io/PDzEtT.png" alt="PDzEtT"></p><h5 id="oricum-si-lazy-static" tabindex="-1"><a class="header-anchor" href="#oricum-si-lazy-static" aria-hidden="true">#</a> oricum \u0219i lazy_static</h5><p>Din captura de ecran extins\u0103, pute\u021Bi vedea c\u0103 sunt utilizate <code>lazy_static</code> \u0219i <code>anyhow</code>.</p><p><a href="https://rustmagazine.github.io/rust_magazine_2021/chapter_2/rust_error_handle.html#thiserror--anyhow" target="_blank" rel="noopener noreferrer">anyhow</a> este biblioteca de tratare a erorilor pentru rust.</p><p><a href="https://juejin.cn/post/7007336922817232927" target="_blank" rel="noopener noreferrer">lazy_static</a> este o variabil\u0103 static\u0103 cu ini\u021Bializare \xEEnt\xE2rziat\u0103.</p><p>Aceste dou\u0103 biblioteci sunt foarte comune \u0219i nu voi intra \xEEn discu\u021Bie.</p><h5 id="macro-mdbx" tabindex="-1"><a class="header-anchor" href="#macro-mdbx" aria-hidden="true">#</a> Macro mdbx!</h5><p><a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html" target="_blank" rel="noopener noreferrer"><code>mdbx!</code></a> este o <a href="https://mp.weixin.qq.com/s/YT_HNFDCQ_IyocvBkRNJnA" target="_blank" rel="noopener noreferrer">macroprocedur\u0103</a>.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Numele variabilei din baza de date Env
  Test // Testul bazei de date
}

fn main() -&gt; Result&lt;()&gt; {
  // Afi\u0219eaz\u0103 num\u0103rul de versiune al libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Citire \u0219i scriere cu mai multe fire
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
      sync_period : 65536, // \xCEn 1/65536 de secund\u0103
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
 MDBX // Numele variabilei din baza de date Env
 Test // Testul bazei de date
}
</code></pre></div><p>Prima linie este numele variabilei de mediu al bazei de date</p><p>A doua linie este numele bazei de date</p><p>Pot exista mai multe baze de date, c\xE2te o linie pentru fiecare baz\u0103 de date.</p><h5 id="fire-si-tranzactii" tabindex="-1"><a class="header-anchor" href="#fire-si-tranzactii" aria-hidden="true">#</a> Fire \u0219i tranzac\u021Bii</h5><p>Codul de mai sus demonstreaz\u0103 citirea \u0219i scrierea cu mai multe fire.</p><p>Este important de re\u021Binut c\u0103 nu poate exista <strong>dec\xE2t o singur\u0103 tranzac\u021Bie \xEEn acela\u0219i fir de execu\u021Bie la un moment dat; dac\u0103 un fir de execu\u021Bie are mai mult de o tranzac\u021Bie deschis\u0103, programul se va bloca</strong>.</p><p>Tranzac\u021Bia va fi angajat\u0103 la sf\xE2r\u0219itul domeniului de aplicare.</p><h5 id="citirea-si-scrierea-datelor-binare" tabindex="-1"><a class="header-anchor" href="#citirea-si-scrierea-datelor-binare" aria-hidden="true">#</a> Citirea \u0219i scrierea datelor binare</h5><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Numele variabilei din baza de date Env
  Test // Testul bazei de date
}

fn main() -&gt; Result&lt;()&gt; {
  // Afi\u0219eaz\u0103 num\u0103rul de versiune al libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Citire \u0219i scriere cu mai multe fire
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
      sync_period : 65536, // \xCEn 1/65536 de secund\u0103
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
 MDBX // Numele variabilei din baza de date Env
 Test // Testul bazei de date
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
</code></pre></div><p><code>set</code> este o scriere, <code>get</code> este o citire, iar orice obiect care implementeaz\u0103 <a href="https://doc.rust-lang.org/std/convert/trait.AsRef.html" target="_blank" rel="noopener noreferrer"><code>AsRef&lt;[u8]&gt;</code></a> poate fi scris \xEEn baza de date.</p><p><code>get</code> Ceea ce rezult\u0103 este <code>Ok(Some(Bin([6])))</code>, care poate fi transformat \xEEn <code>&amp;[u8]</code>.</p><h3 id="exemplul-2-tipuri-de-date-indicatori-de-baze-de-date-stergere-traversare" tabindex="-1"><a class="header-anchor" href="#exemplul-2-tipuri-de-date-indicatori-de-baze-de-date-stergere-traversare" aria-hidden="true">#</a> Exemplul 2: Tipuri de date, indicatori de baze de date, \u0219tergere, traversare</h3><p>S\u0103 ne uit\u0103m la al doilea <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">exemplu/02.rs</a>:</p><p>\xCEn acest exemplu, <code>env_rw!</code> este omis, iar al treilea \u0219i al patrulea argument ( <code>r</code>, <code>w</code>) sunt omise.</p><h4 id="cod-1" tabindex="-1"><a class="header-anchor" href="#cod-1" aria-hidden="true">#</a> Cod</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Numele variabilei din baza de date Env
  Test // Testul bazei de date
}

fn main() -&gt; Result&lt;()&gt; {
  // Afi\u0219eaz\u0103 num\u0103rul de versiune al libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Citire \u0219i scriere cu mai multe fire
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
      sync_period : 65536, // \xCEn 1/65536 de secund\u0103
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
 MDBX // Numele variabilei din baza de date Env
 Test // Testul bazei de date
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
  MDBX // Nume de variabile pentru baza de date ENV
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
  // Scrisoare rapid\u0103
  w!(Test1.set [2, 3],[4, 5]);

  // Lectur\u0103 rapid\u0103
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

  // Opera\u021Biuni multiple pe mai multe baze de date \xEEn aceea\u0219i tranzac\u021Bie
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

    // Tranzac\u021Bia va fi angajat\u0103 la sf\xE2r\u0219itul domeniului de aplicare.
  }

  Ok(())
}
</code></pre></div><h4 id="executati-iesirea-1" tabindex="-1"><a class="header-anchor" href="#executati-iesirea-1" aria-hidden="true">#</a> Executa\u021Bi ie\u0219irea</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/02.mdb

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
</code></pre></div><h4 id="citiri-si-scrieri-rapide" tabindex="-1"><a class="header-anchor" href="#citiri-si-scrieri-rapide" aria-hidden="true">#</a> Citiri \u0219i scrieri rapide</h4><p>Dac\u0103 dorim s\u0103 citim sau s\u0103 scriem pur \u0219i simplu o singur\u0103 linie de date, putem utiliza zah\u0103rul sintactic al unei macro.</p><p>Citi\u021Bi datele</p><div class="language-text ext-text"><pre class="language-text"><code>r!(Test1.get [2, 3])
</code></pre></div><p>Scrierea datelor</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Numele variabilei din baza de date Env
  Test // Testul bazei de date
}

fn main() -&gt; Result&lt;()&gt; {
  // Afi\u0219eaz\u0103 num\u0103rul de versiune al libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Citire \u0219i scriere cu mai multe fire
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
      sync_period : 65536, // \xCEn 1/65536 de secund\u0103
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
 MDBX // Numele variabilei din baza de date Env
 Test // Testul bazei de date
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
  MDBX // Nume de variabile pentru baza de date ENV
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
  // Scrisoare rapid\u0103
  w!(Test1.set [2, 3],[4, 5]);

  // Lectur\u0103 rapid\u0103
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

  // Opera\u021Biuni multiple pe mai multe baze de date \xEEn aceea\u0219i tranzac\u021Bie
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

    // Tranzac\u021Bia va fi angajat\u0103 la sf\xE2r\u0219itul domeniului de aplicare.
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
</code></pre></div><p>Totul \xEEntr-un singur r\xE2nd, a\u0219a cum este scris \xEEn <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a>.</p><h4 id="tipuri-de-date" tabindex="-1"><a class="header-anchor" href="#tipuri-de-date" aria-hidden="true">#</a> Tipuri de date</h4><p>\xCEn examples/02 <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">.</a> rs, defini\u021Bia bazei de date arat\u0103 astfel :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Numele variabilei din baza de date Env
  Test // Testul bazei de date
}

fn main() -&gt; Result&lt;()&gt; {
  // Afi\u0219eaz\u0103 num\u0103rul de versiune al libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Citire \u0219i scriere cu mai multe fire
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
      sync_period : 65536, // \xCEn 1/65536 de secund\u0103
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
 MDBX // Numele variabilei din baza de date Env
 Test // Testul bazei de date
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
  MDBX // Nume de variabile pentru baza de date ENV
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
  // Scrisoare rapid\u0103
  w!(Test1.set [2, 3],[4, 5]);

  // Lectur\u0103 rapid\u0103
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

  // Opera\u021Biuni multiple pe mai multe baze de date \xEEn aceea\u0219i tranzac\u021Bie
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

    // Tranzac\u021Bia va fi angajat\u0103 la sf\xE2r\u0219itul domeniului de aplicare.
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
</code></pre></div><p>unde <code>key</code> \u0219i <code>val</code> definesc tipurile de date pentru chei \u0219i, respectiv, valori.</p><p>Dac\u0103 \xEEncerca\u021Bi s\u0103 scrie\u021Bi un tip de date care nu se potrive\u0219te cu cel definit, se va raporta o eroare, a\u0219a cum se arat\u0103 \xEEn imaginea de mai jos:</p><p><img src="//irmw.gumlet.io/4rFTC6.png" alt=""></p><p>Tipul de date implicit este <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Bin.html" target="_blank" rel="noopener noreferrer"><code>Bin</code></a> , se poate scrie pe orice date care implementeaz\u0103 <code>AsRef&lt;[u8]&gt;</code>.</p><p>Dac\u0103 cheia sau valoarea este un \u0219ir de caractere <code>utf8</code>, tipul de date poate fi setat la <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Str.html" target="_blank" rel="noopener noreferrer"><code>Str</code></a> .</p><p><a href="https://doc.rust-lang.org/std/ops/trait.Deref.html" target="_blank" rel="noopener noreferrer">Descifrarea</a> <code>Str</code> va returna un \u0219ir de caractere, similar cu <code>let k:&amp;str = &amp;k;</code>.</p><p>\xCEn plus, <code>Str</code> implementeaz\u0103 \u0219i <a href="https://doc.rust-lang.org/std/fmt/trait.Display.html" target="_blank" rel="noopener noreferrer"><code>std::fmt::Display</code></a> , <code>println!(&quot;{}&quot;,k)</code> va produce un \u0219ir de caractere lizibil.</p><h5 id="tipuri-de-date-prestabilite" tabindex="-1"><a class="header-anchor" href="#tipuri-de-date-prestabilite" aria-hidden="true">#</a> Tipuri de date prestabilite</h5><p>\xCEn plus fa\u021B\u0103 de <code>Str</code> \u0219i <code>Bin</code>, wrapper-ul vine, de asemenea, cu suport de date pentru <a href="https://docs.rs/mdbx/latest/src/mdbx/type.rs.html#48" target="_blank" rel="noopener noreferrer">usize, u128, u64, u32, u16, u8, isize, i128, i64, i32, i16, i8, f32, f64</a>.</p><h4 id="stegulete-de-baza-de-date" tabindex="-1"><a class="header-anchor" href="#stegulete-de-baza-de-date" aria-hidden="true">#</a> Stegule\u021Be de baz\u0103 de date</h4><p>Pute\u021Bi vedea stegule\u021Bele bazei de date ad\u0103ugate la datele din <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a> la <code>Test4</code>. <code>flag DUPSORT</code></p><p>Baza de date libmdbx are un num\u0103r de indicatori ( <a href="https://erthink.github.io/libmdbx/group__c__dbi.html#gafe3bddb297b3ab0d828a487c5726f76a" target="_blank" rel="noopener noreferrer"><code>MDBX_db_flags_t</code></a> ) care pot fi stabilite.</p><ul><li>REVERSEKEY utilizeaz\u0103 compararea invers\u0103 a \u0219irurilor de caractere pentru chei. (util atunci c\xE2nd se utilizeaz\u0103 numere mici cu coduri de cap\u0103t ca chei)</li><li>DUPSORT utilizeaz\u0103 duplicate sortate, adic\u0103 permite mai multe valori pentru o cheie.</li><li>INTEGERKEY Cheie numeric\u0103 nativ\u0103 ordonat\u0103 pe octe\u021Bi uint32_t sau uint64_t. Cheile trebuie s\u0103 aib\u0103 aceea\u0219i dimensiune \u0219i trebuie s\u0103 fie aliniate atunci c\xE2nd sunt transmise ca argument.</li><li>DUPFIXED Dimensiunea valorilor datelor trebuie s\u0103 fie aceea\u0219i dac\u0103 se utilizeaz\u0103 DUPSORT (permite o num\u0103rare rapid\u0103 a num\u0103rului de valori).</li><li>DUPSORT \u0219i DUPFIXED sunt necesare pentru INTEGERDUP; valorile sunt numere \xEEntregi (similar cu INTEGERKEY). Valorile datelor trebuie s\u0103 aib\u0103 toate aceea\u0219i dimensiune \u0219i trebuie s\u0103 fie aliniate atunci c\xE2nd sunt transmise ca parametri.</li><li>REVERSEDUP utilizeaz\u0103 DUPSORT; compara\u021Bia invers\u0103 a \u0219irurilor de caractere este utilizat\u0103 pentru valorile datelor.</li><li>CREATE creeaz\u0103 baza de date dac\u0103 aceasta nu exist\u0103 (ad\u0103ugat\u0103 \xEEn mod implicit).</li><li>DB_ACCEDE Deschide o sub-baz\u0103 de date existent\u0103 creat\u0103 cu ajutorul indicatorului necunoscut.<br> Acest indicator DB_ACCEDE este destinat deschiderii bazelor de date secundare existente create cu indicatori necunoscu\u021Bi (REVERSEKEY, DUPSORT, INTEGERKEY, DUPFIXED, INTEGERDUP \u0219i REVERSEDUP).<br> \xCEn acest caz, baza de date secundar\u0103 nu va returna o eroare INCOMPATIBLE, ci va fi deschis\u0103 cu stegule\u021Bele utilizate pentru a o crea, iar aplica\u021Bia poate determina apoi stegule\u021Bele reale cu mdbx_dbi_flags().</li></ul><h5 id="dupsort-o-cheie-corespunde-mai-multor-valori" tabindex="-1"><a class="header-anchor" href="#dupsort-o-cheie-corespunde-mai-multor-valori" aria-hidden="true">#</a> DUPSORT : O cheie corespunde mai multor valori</h5><p><code>DUPSORT</code>, \xEEnseamn\u0103 c\u0103 unei chei \xEEi pot corespunde mai multe valori.</p><p>Dac\u0103 dori\u021Bi s\u0103 seta\u021Bi mai multe stegule\u021Be, scrie\u021Bi dup\u0103 cum urmeaz\u0103 <code>flag DUPSORT | DUPFIXED</code></p><h5 id="dup-key-iterator-care-returneaza-toate-valorile-care-corespund-unei-chei" tabindex="-1"><a class="header-anchor" href="#dup-key-iterator-care-returneaza-toate-valorile-care-corespund-unei-chei" aria-hidden="true">#</a> <code>.dup(key)</code> iterator care returneaz\u0103 toate valorile care corespund unei chei</h5><p>Aceast\u0103 func\u021Bie este disponibil\u0103 numai pentru bazele de date marcate cu <code>DUPSORT</code>, unde o cheie poate corespunde mai multor valori.</p><p>Pentru bazele de date <code>DUPSORT</code>, <code>get</code> returneaz\u0103 numai prima valoare pentru aceast\u0103 cheie. Pentru a ob\u021Bine toate valorile, utiliza\u021Bi <code>dup</code>.</p><h5 id="stegulete-de-baza-de-date-adaugate-automat-in-mod-implicit" tabindex="-1"><a class="header-anchor" href="#stegulete-de-baza-de-date-adaugate-automat-in-mod-implicit" aria-hidden="true">#</a> Stegule\u021Be de baz\u0103 de date ad\u0103ugate automat \xEEn mod implicit</h5><p>Atunci c\xE2nd tipul de date este <code>u32</code> / <code>u64</code> / <code>usize</code>, se adaug\u0103 automat marcajul bazei de date. <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#105" target="_blank" rel="noopener noreferrer"><code>INTEGERKEY</code></a> .</p><p>La ma\u0219inile cu codificare small-end, se adaug\u0103 automat alte tipuri numerice <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#108" target="_blank" rel="noopener noreferrer"><code>REVERSEKEY</code></a> Indicatorul de baz\u0103 de date este ad\u0103ugat automat atunci c\xE2nd tipul de date este / / .</p><h4 id="stergerea-datelor" tabindex="-1"><a class="header-anchor" href="#stergerea-datelor" aria-hidden="true">#</a> \u0218tergerea datelor</h4><h5 id="del-key-stergerea-unei-taste" tabindex="-1"><a class="header-anchor" href="#del-key-stergerea-unei-taste" aria-hidden="true">#</a> <code>.del(key)</code> \u0218tergerea unei taste</h5><p><code>.del(val)</code> \u0218terge valoarea corespunz\u0103toare unei chei.</p><p>Dac\u0103 baza de date are marcajul <code>DUPSORT</code>, toate valorile din aceast\u0103 cheie vor fi \u0219terse.</p><p>Returneaz\u0103 <code>true</code>dac\u0103 sunt \u0219terse date \u0219i <code>false</code>dac\u0103 nu.</p><h5 id="del-val-key-val-stergere-cu-potrivire-exacta" tabindex="-1"><a class="header-anchor" href="#del-val-key-val-stergere-cu-potrivire-exacta" aria-hidden="true">#</a> <code>.del_val(key,val)</code> \u0218tergere cu potrivire exact\u0103</h5><p><code>.del_val(key,val)</code> \u0218terge perechile cheie-valoare care corespund exact parametrilor de intrare.</p><p>Returneaz\u0103 <code>true</code>dac\u0103 sunt \u0219terse date \u0219i <code>false</code>dac\u0103 nu.</p><h4 id="traversare" tabindex="-1"><a class="header-anchor" href="#traversare" aria-hidden="true">#</a> Traversare</h4><h5 id="traversare-secventiala" tabindex="-1"><a class="header-anchor" href="#traversare-secventiala" aria-hidden="true">#</a> traversare secven\u021Bial\u0103</h5><p>Datorit\u0103 implement\u0103rii <a href="https://doc.rust-lang.org/std/iter/trait.IntoIterator.html" target="_blank" rel="noopener noreferrer"><code>std::iter::IntoIterator</code></a> . se poate traversa direct dup\u0103 cum urmeaz\u0103 :</p><p><code>for (k, v) in test1</code></p><h5 id="rev-traversarea-inversa-a-ordinii" tabindex="-1"><a class="header-anchor" href="#rev-traversarea-inversa-a-ordinii" aria-hidden="true">#</a> <code>.rev()</code> Traversarea invers\u0103 a ordinii</h5><p><code>for (k, v) in test4.rev()</code></p><h5 id="sortare" tabindex="-1"><a class="header-anchor" href="#sortare" aria-hidden="true">#</a> Sortare</h5><p>Cheile libmdbx sunt sortate \xEEn <a href="https://zh.wikipedia.org/wiki/%E5%AD%97%E5%85%B8%E5%BA%8F" target="_blank" rel="noopener noreferrer">ordinea dic\u021Bionarului</a>.</p><ul><li><p>Pentru numere f\u0103r\u0103 semn</p><p>sunt ordonate de la cel mai mic la cel mai mare, deoarece stegule\u021Bele bazei de date sunt ad\u0103ugate automat ( <code>u32</code>/ <code>u64</code>/ <code>usize</code> sunt ad\u0103ugate la <code>INTEGERKEY</code>, altele sunt ad\u0103ugate la <code>REVERSEKEY</code> \xEEn func\u021Bie de codul ma\u0219in\u0103).</p></li><li><p>Pentru numere cu semn</p><p>ordinea este: mai \xEEnt\xE2i 0, apoi toate numerele pozitive de la cel mai mic la cel mai mare, apoi toate numerele negative de la cel mai mic la cel mai mare.</p></li></ul><h3 id="iteratori-de-interval" tabindex="-1"><a class="header-anchor" href="#iteratori-de-interval" aria-hidden="true">#</a> Iteratori de interval</h3><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Numele variabilei din baza de date Env
  Test // Testul bazei de date
}

fn main() -&gt; Result&lt;()&gt; {
  // Afi\u0219eaz\u0103 num\u0103rul de versiune al libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Citire \u0219i scriere cu mai multe fire
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
      sync_period : 65536, // \xCEn 1/65536 de secund\u0103
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
 MDBX // Numele variabilei din baza de date Env
 Test // Testul bazei de date
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
  MDBX // Nume de variabile pentru baza de date ENV
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
  // Scrisoare rapid\u0103
  w!(Test1.set [2, 3],[4, 5]);

  // Lectur\u0103 rapid\u0103
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

  // Opera\u021Biuni multiple pe mai multe baze de date \xEEn aceea\u0219i tranzac\u021Bie
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

    // Tranzac\u021Bia va fi angajat\u0103 la sf\xE2r\u0219itul domeniului de aplicare.
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
</code></pre></div><h4 id="rulati-iesirea-din" tabindex="-1"><a class="header-anchor" href="#rulati-iesirea-din" aria-hidden="true">#</a> Rula\u021Bi ie\u0219irea din</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/range.mdb

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
</code></pre></div><h4 id="range-begin-end-interval-iterare" tabindex="-1"><a class="header-anchor" href="#range-begin-end-interval-iterare" aria-hidden="true">#</a> <code>.range(begin..end)</code> Interval Iterare</h4><p>Pentru numere, un interval este un interval numeric.</p><p>Pentru binar, acela\u0219i interval poate fi construit, de exemplu.</p><div class="language-text ext-text"><pre class="language-text"><code>let begin : &amp;[u8] = &amp;[1,1];
for (k,v) in test0.range(begin..=&amp;[2]) {}
</code></pre></div><p>\xCEn cazul \xEEn care <code>begin</code> este mai mare dec\xE2t <code>end</code>, se va derula invers.</p><p>De exemplu, <code>test1.range(5..2)</code> va afi\u0219a urm\u0103toarele :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Numele variabilei din baza de date Env
  Test // Testul bazei de date
}

fn main() -&gt; Result&lt;()&gt; {
  // Afi\u0219eaz\u0103 num\u0103rul de versiune al libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Citire \u0219i scriere cu mai multe fire
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
      sync_period : 65536, // \xCEn 1/65536 de secund\u0103
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
 MDBX // Numele variabilei din baza de date Env
 Test // Testul bazei de date
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
  MDBX // Nume de variabile pentru baza de date ENV
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
  // Scrisoare rapid\u0103
  w!(Test1.set [2, 3],[4, 5]);

  // Lectur\u0103 rapid\u0103
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

  // Opera\u021Biuni multiple pe mai multe baze de date \xEEn aceea\u0219i tranzac\u021Bie
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

    // Tranzac\u021Bia va fi angajat\u0103 la sf\xE2r\u0219itul domeniului de aplicare.
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
</code></pre></div><p>Itera\u021Bia pe intervale nu este acceptat\u0103 <a href="https://doc.rust-lang.org/std/ops/struct.RangeFull.html" target="_blank" rel="noopener noreferrer"><code>RangeFull</code></a> , adic\u0103 utilizarea <code>..</code>nu este acceptat\u0103, v\u0103 rug\u0103m s\u0103 folosi\u021Bi \xEEn schimb <a href="#%E9%81%8D%E5%8E%86">traversarea</a> men\u021Bionat\u0103 mai sus.</p><h4 id="rev-range-intervale-inversate" tabindex="-1"><a class="header-anchor" href="#rev-range-intervale-inversate" aria-hidden="true">#</a> <code>.rev_range</code> Intervale inversate</h4><p>Dac\u0103 dori\u021Bi s\u0103 ob\u021Bine\u021Bi un interval inversat care este mai mic sau egal cu o valoare, pute\u021Bi face acest lucru</p><div class="language-text ext-text"><pre class="language-text"><code>test2.rev_range(2..)
</code></pre></div><p>Rezultatul va fi</p><div class="language-text ext-text"><pre class="language-text"><code>(2, 4)
(1, 5)
(0, 0)
</code></pre></div><p>Pentru intervalul inversat nu trebuie s\u0103 fie setat unul dintre <code>begin</code> sau <code>end</code>, deoarece, dac\u0103 ambele sunt setate, pute\u021Bi utiliza \xEEntotdeauna <code>range(end..begin)</code> pentru a ob\u021Bine acela\u0219i efect.</p><h3 id="personalizarea-tipurilor-de-date" tabindex="-1"><a class="header-anchor" href="#personalizarea-tipurilor-de-date" aria-hidden="true">#</a> Personalizarea tipurilor de date</h3><p>Codul demo este disponibil la <a href="https://github.com/rmw-lib/mdbx-example/blob/master/01/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/01</a></p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Numele variabilei din baza de date Env
  Test // Testul bazei de date
}

fn main() -&gt; Result&lt;()&gt; {
  // Afi\u0219eaz\u0103 num\u0103rul de versiune al libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Citire \u0219i scriere cu mai multe fire
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
      sync_period : 65536, // \xCEn 1/65536 de secund\u0103
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
 MDBX // Numele variabilei din baza de date Env
 Test // Testul bazei de date
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
  MDBX // Nume de variabile pentru baza de date ENV
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
  // Scrisoare rapid\u0103
  w!(Test1.set [2, 3],[4, 5]);

  // Lectur\u0103 rapid\u0103
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

  // Opera\u021Biuni multiple pe mai multe baze de date \xEEn aceea\u0219i tranzac\u021Bie
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

    // Tranzac\u021Bia va fi angajat\u0103 la sf\xE2r\u0219itul domeniului de aplicare.
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
</code></pre></div><p>Rezultatul este urm\u0103torul</p><div class="language-text ext-text"><pre class="language-text"><code>Some(City { name: &quot;BeiJing&quot;, lnglat: (11640, 3990) })
</code></pre></div><p>\xCEn exemplul de tip personalizat, folosim <a href="https://github.com/koute/speedy" target="_blank" rel="noopener noreferrer"><code>speedy</code></a> pentru a face serializarea <a href="https://github.com/djkoloski/rust_serialization_benchmark" target="_blank" rel="noopener noreferrer">( <code>speedy</code> evaluarea performan\u021Belor</a> ).</p><p>Implementarea tipului personalizat <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.FromMdbx.html" target="_blank" rel="noopener noreferrer"><code>FromMdbx</code></a> \u0219i <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.ToAsRef.html" target="_blank" rel="noopener noreferrer"><code>ToAsRef</code></a> pot fi apoi stocate la <code>mdbx</code>.</p><p>Dac\u0103 folosi\u021Bi o anumit\u0103 bibliotec\u0103 de serializare, pute\u021Bi personaliza, de asemenea, <a href="https://blog.logrocket.com/macros-in-rust-a-tutorial-with-examples/" target="_blank" rel="noopener noreferrer">macrourile de</a> atribute pentru a simplifica procesul.</p><h4 id="simplificarea-tipurilor-personalizate-cu-ajutorul-macrourilor-de-atribute" tabindex="-1"><a class="header-anchor" href="#simplificarea-tipurilor-personalizate-cu-ajutorul-macrourilor-de-atribute" aria-hidden="true">#</a> Simplificarea tipurilor personalizate cu ajutorul macrourilor de atribute</h4><p>Implementarea unui macro atribut este la fel de simpl\u0103 ca <a href="https://crates.io/crates/mdbx_speedy" target="_blank" rel="noopener noreferrer"><code>mdbx_speedy</code></a> Codul macro atributelor este urm\u0103torul :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Numele variabilei din baza de date Env
  Test // Testul bazei de date
}

fn main() -&gt; Result&lt;()&gt; {
  // Afi\u0219eaz\u0103 num\u0103rul de versiune al libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Citire \u0219i scriere cu mai multe fire
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
      sync_period : 65536, // \xCEn 1/65536 de secund\u0103
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
 MDBX // Numele variabilei din baza de date Env
 Test // Testul bazei de date
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
  MDBX // Nume de variabile pentru baza de date ENV
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
  // Scrisoare rapid\u0103
  w!(Test1.set [2, 3],[4, 5]);

  // Lectur\u0103 rapid\u0103
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

  // Opera\u021Biuni multiple pe mai multe baze de date \xEEn aceea\u0219i tranzac\u021Bie
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

    // Tranzac\u021Bia va fi angajat\u0103 la sf\xE2r\u0219itul domeniului de aplicare.
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
</code></pre></div><p>\xCEncepe\u021Bi cu <code>cargo add mdbx-speedy</code>\xEEn propriul proiect \u0219i apoi pute\u021Bi personaliza rapid tipul (consulta\u021Bi <a href="https://github.com/rmw-lib/mdbx-example/blob/master/02/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/02</a> pentru codul demo).</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Numele variabilei din baza de date Env
  Test // Testul bazei de date
}

fn main() -&gt; Result&lt;()&gt; {
  // Afi\u0219eaz\u0103 num\u0103rul de versiune al libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Citire \u0219i scriere cu mai multe fire
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
      sync_period : 65536, // \xCEn 1/65536 de secund\u0103
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
 MDBX // Numele variabilei din baza de date Env
 Test // Testul bazei de date
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
  MDBX // Nume de variabile pentru baza de date ENV
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
  // Scrisoare rapid\u0103
  w!(Test1.set [2, 3],[4, 5]);

  // Lectur\u0103 rapid\u0103
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

  // Opera\u021Biuni multiple pe mai multe baze de date \xEEn aceea\u0219i tranzac\u021Bie
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

    // Tranzac\u021Bia va fi angajat\u0103 la sf\xE2r\u0219itul domeniului de aplicare.
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
</code></pre></div><p>Bine\xEEn\u021Beles c\u0103 este totu\u0219i enervant s\u0103 scrii <code>#[derive(PartialEq, Debug, Readable, Writable, MdbxSpeedy)]</code> \xEEn mod repetat, a\u0219a c\u0103 po\u021Bi folosi <a href="https://docs.rs/derive-alias/0.1.0/derive_alias" target="_blank" rel="noopener noreferrer"><code>derive_alias</code></a> pentru a simplifica \u0219i mai mult codul.</p><h2 id="nota-privind-utilizarea" tabindex="-1"><a class="header-anchor" href="#nota-privind-utilizarea" aria-hidden="true">#</a> Not\u0103 privind utilizarea</h2><h3 id="lungimea-cheii" tabindex="-1"><a class="header-anchor" href="#lungimea-cheii" aria-hidden="true">#</a> Lungimea cheii</h3><ul><li>Minim 0, maxim \u2248 \xBD dimensiunea paginii (implicit dimensiunea maxim\u0103 a cheii de pagin\u0103 4K este de 2022 octe\u021Bi), setat\u0103 la ini\u021Bializarea bazei de date <code>pagesize</code> poate fi configurat\u0103 la maximum <code>65536</code>\u0219i trebuie s\u0103 fie o putere de 2.</li></ul><h2 id="note-de-subsol" tabindex="-1"><a class="header-anchor" href="#note-de-subsol" aria-hidden="true">#</a> Note de subsol</h2><p>Ace\u0219tia men\u021Bioneaz\u0103 beneficiile tranzi\u021Biei de la LMDB la MDBX.</p><blockquote><p>Erigon a \xEEnceput cu o baz\u0103 de date BoltDB, apoi a ad\u0103ugat suport pentru BadgerDB \u0219i, \xEEn cele din urm\u0103, a migrat complet la LMDB. la un moment dat, am \xEEnt\xE2mpinat probleme de stabilitate cauzate de utilizarea LMDB, probleme care nu au fost anticipate de creatori. De atunci, am analizat un derivat bine sus\u021Binut al LMDB numit MDBX \u0219i sper\u0103m s\u0103 folosim \xEEmbun\u0103t\u0103\u021Birile aduse de acesta \xEEn ceea ce prive\u0219te stabilitatea \u0219i, eventual, s\u0103 colabor\u0103m mai mult \xEEn viitor. integrarea MDBX este acum complet\u0103 \u0219i este timpul pentru mai multe teste \u0219i documenta\u021Bie.</p><p>Avantajele tranzi\u021Biei de la LMDB la MDBX.</p><ol><li><p>Cre\u0219terea &quot;spa\u021Biului (geometriei)&quot; de cre\u0219tere a fi\u0219ierelor din baza de date func\u021Bioneaz\u0103 corect. Acest lucru este important, \xEEn special \xEEn Windows. \xCEn LMDB trebuie specificat\u0103 o dat\u0103 \xEEn avans dimensiunea h\u0103r\u021Bii de memorie (\xEEn prezent folosim 2Tb \xEEn mod implicit) \u0219i dac\u0103 fi\u0219ierul de baz\u0103 de date cre\u0219te peste aceast\u0103 limit\u0103, procesul trebuie repornit. Pe Windows, dac\u0103 seta\u021Bi dimensiunea h\u0103r\u021Bii de memorie la 2Tb, fi\u0219ierul bazei de date va fi de 2Tb, ceea ce nu este foarte convenabil. \xCEn MDBX, dimensiunea h\u0103r\u021Bii de memorie este m\u0103rit\u0103 \xEEn trepte de 2Gb. Acest lucru \xEEnseamn\u0103 o repliere ocazional\u0103, dar are ca rezultat o experien\u021B\u0103 mai bun\u0103 pentru utilizator.</p></li><li><p>MDBX are verific\u0103ri mai stricte privind utilizarea simultan\u0103 a proces\u0103rii tranzac\u021Biilor \u0219i suprapunerea tranzac\u021Biilor de citire \u0219i scriere \xEEn acela\u0219i fir de execu\u021Bie. Acest lucru ne permite s\u0103 identific\u0103m unele erori care nu sunt evidente \u0219i face comportamentul mai previzibil.<br> \xCEn mai bine de 5 ani (de c\xE2nd a fost separat de LMDB), MDBX a acumulat un num\u0103r mare de remedieri de securitate \u0219i remedieri de heisenbug-uri care, dup\u0103 cuno\u0219tin\u021Bele noastre, \xEEnc\u0103 exist\u0103 \xEEn LMDB. Unele dintre acestea au fost descoperite \xEEn timpul testelor noastre, iar administratorii MDBX le-au luat \xEEn serios \u0219i le-au rezolvat cu promptitudine.</p></li><li><p>\xCEn cazul bazelor de date care modific\u0103 \xEEn mod constant datele, acestea creeaz\u0103 o cantitate destul de mare de spa\u021Biu recuperabil (cunoscut \u0219i sub numele de &quot;freelist&quot; \xEEn terminologia LMDB). Am fost nevoi\u021Bi s\u0103 modific\u0103m LMDB pentru a remedia cele mai grave deficien\u021Be \xEEn <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide%EF%BC%89%E3%80%82MDBX%E5%AF%B9%E5%8F%AF%E5%9B%9E%E6%94%B6%E7%A9%BA%E9%97%B4%E7%9A%84%E6%9C%89%E6%95%88%E5%A4%84%E7%90%86%E8%BF%9B%E8%A1%8C%E4%BA%86%E7%89%B9%E5%88%AB%E7%9A%84%E5%85%B3%E6%B3%A8%EF%BC%8C%E5%88%B0%E7%9B%AE%E5%89%8D%E4%B8%BA%E6%AD%A2%EF%BC%8C%E8%BF%98%E4%B8%8D%E9%9C%80%E8%A6%81%E6%89%93%E8%A1%A5%E4%B8%81%E3%80%82" target="_blank" rel="noopener noreferrer">gestionarea spa\u021Biului recuperabil</a> <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide" target="_blank" rel="noopener noreferrer">(analiz\u0103)</a>. MDBX a acordat o <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide%EF%BC%89%E3%80%82MDBX%E5%AF%B9%E5%8F%AF%E5%9B%9E%E6%94%B6%E7%A9%BA%E9%97%B4%E7%9A%84%E6%9C%89%E6%95%88%E5%A4%84%E7%90%86%E8%BF%9B%E8%A1%8C%E4%BA%86%E7%89%B9%E5%88%AB%E7%9A%84%E5%85%B3%E6%B3%A8%EF%BC%8C%E5%88%B0%E7%9B%AE%E5%89%8D%E4%B8%BA%E6%AD%A2%EF%BC%8C%E8%BF%98%E4%B8%8D%E9%9C%80%E8%A6%81%E6%89%93%E8%A1%A5%E4%B8%81%E3%80%82" target="_blank" rel="noopener noreferrer">aten\u021Bie deosebit\u0103 gestion\u0103rii eficiente a spa\u021Biului recuperabil \u0219i, p\xE2n\u0103 \xEEn prezent, nu a fost nevoie s\u0103 fie modificat</a>.</p></li><li><p>Pe baza testelor noastre, MDBX a avut o performan\u021B\u0103 u\u0219or mai bun\u0103 \xEEn sarcinile noastre de lucru.</p></li><li><p>MDBX expune mai multe date de telemetrie intern\u0103 - mai mul\u021Bi parametri despre ceea ce se \xEEnt\xE2mpl\u0103 \xEEn interiorul bazei de date. \u0218i avem aceste date \xEEn Grafana - pentru a lua decizii mai bune \xEEn ceea ce prive\u0219te proiectarea aplica\u021Biilor. De exemplu, dup\u0103 tranzi\u021Bia complet\u0103 la MDBX (elimin\xE2nd suportul pentru LMDB), vom implementa o politic\u0103 de &quot;comitere a tranzac\u021Biei pe jum\u0103tate plin\u0103&quot; pentru a evita contactele pe disc de tip overflow/unoverflow. Acest lucru va simplifica \u0219i mai mult codul nostru f\u0103r\u0103 a afecta performan\u021Ba.</p></li><li><p>MDBX suport\u0103 modul &quot;Exclusiv deschis&quot; - folosim acest mod pentru migrarea bazelor de date pentru a \xEEmpiedica orice alt cititor s\u0103 acceseze baza de date \xEEn timpul procesului de migrare.</p></li></ol></blockquote><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p><a href="https://github.com/ledgerwatch/erigon/wiki/Criteria-for-transitioning-from-Alpha-to-Beta#switch-from-lmdb-to-mdbx" target="_blank" rel="noopener noreferrer">Erigon (clientul Ethernet de ultim\u0103 genera\u021Bie) a trecut recent de la LMDB la MDBX</a>. <a href="#fnref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,160);function re(ie,se){const n=d("RouterLink");return s(),l(o,null,[c,m,b,g,e("nav",h,[e("ul",null,[e("li",null,[a(n,{to:"#citate"},{default:r(()=>[_]),_:1})]),e("li",null,[a(n,{to:"#ce-este-libmdbx"},{default:r(()=>[f]),_:1})]),e("li",null,[a(n,{to:"#tutoriale"},{default:r(()=>[v]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#cum-se-executa-exemplul"},{default:r(()=>[x]),_:1})]),e("li",null,[a(n,{to:"#exemplul-1-scrierea-set-key-val-si-citirea-get-key"},{default:r(()=>[q]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#cod"},{default:r(()=>[E]),_:1})]),e("li",null,[a(n,{to:"#executati-iesirea"},{default:r(()=>[D]),_:1})]),e("li",null,[a(n,{to:"#cod-descriere"},{default:r(()=>[k]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#env-rw-definirea-bazei-de-date"},{default:r(()=>[y]),_:1})]),e("li",null,[a(n,{to:"#extinderea-macro"},{default:r(()=>[w]),_:1})]),e("li",null,[a(n,{to:"#oricum-si-lazy-static"},{default:r(()=>[z]),_:1})]),e("li",null,[a(n,{to:"#macro-mdbx"},{default:r(()=>[T]),_:1})]),e("li",null,[a(n,{to:"#fire-si-tranzactii"},{default:r(()=>[B]),_:1})]),e("li",null,[a(n,{to:"#citirea-si-scrierea-datelor-binare"},{default:r(()=>[N]),_:1})])])])])]),e("li",null,[a(n,{to:"#exemplul-2-tipuri-de-date-indicatori-de-baze-de-date-stergere-traversare"},{default:r(()=>[M]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#cod-1"},{default:r(()=>[S]),_:1})]),e("li",null,[a(n,{to:"#executati-iesirea-1"},{default:r(()=>[C]),_:1})]),e("li",null,[a(n,{to:"#citiri-si-scrieri-rapide"},{default:r(()=>[X]),_:1})]),e("li",null,[a(n,{to:"#tipuri-de-date"},{default:r(()=>[O]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#tipuri-de-date-prestabilite"},{default:r(()=>[R]),_:1})])])]),e("li",null,[a(n,{to:"#stegulete-de-baza-de-date"},{default:r(()=>[V]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#dupsort-o-cheie-corespunde-mai-multor-valori"},{default:r(()=>[A]),_:1})]),e("li",null,[a(n,{to:"#dup-key-iterator-care-returneaza-toate-valorile-care-corespund-unei-chei"},{default:r(()=>[U]),_:1})]),e("li",null,[a(n,{to:"#stegulete-de-baza-de-date-adaugate-automat-in-mod-implicit"},{default:r(()=>[I]),_:1})])])]),e("li",null,[a(n,{to:"#stergerea-datelor"},{default:r(()=>[L]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#del-key-stergerea-unei-taste"},{default:r(()=>[P]),_:1})]),e("li",null,[a(n,{to:"#del-val-key-val-stergere-cu-potrivire-exacta"},{default:r(()=>[F]),_:1})])])]),e("li",null,[a(n,{to:"#traversare"},{default:r(()=>[$]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#traversare-secventiala"},{default:r(()=>[j]),_:1})]),e("li",null,[a(n,{to:"#rev-traversarea-inversa-a-ordinii"},{default:r(()=>[Y]),_:1})]),e("li",null,[a(n,{to:"#sortare"},{default:r(()=>[G]),_:1})])])])])]),e("li",null,[a(n,{to:"#iteratori-de-interval"},{default:r(()=>[H]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#rulati-iesirea-din"},{default:r(()=>[W]),_:1})]),e("li",null,[a(n,{to:"#range-begin-end-interval-iterare"},{default:r(()=>[K]),_:1})]),e("li",null,[a(n,{to:"#rev-range-intervale-inversate"},{default:r(()=>[J]),_:1})])])]),e("li",null,[a(n,{to:"#personalizarea-tipurilor-de-date"},{default:r(()=>[Q]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#simplificarea-tipurilor-personalizate-cu-ajutorul-macrourilor-de-atribute"},{default:r(()=>[Z]),_:1})])])])])]),e("li",null,[a(n,{to:"#nota-privind-utilizarea"},{default:r(()=>[ee]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#lungimea-cheii"},{default:r(()=>[te]),_:1})])])]),e("li",null,[a(n,{to:"#note-de-subsol"},{default:r(()=>[ne]),_:1})])])]),ae],64)}var ue=i(p,[["render",re],["__file","2021-12-21-mdbx.html.vue"]]);export{ue as default};
