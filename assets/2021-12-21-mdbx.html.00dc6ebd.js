import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as l,a as e,b as s,w as r,F as o,d as n,e as d,r as u}from"./app.2a6a1bd2.js";const g={},b=e("h1",{id:"das-rust-paket-fur-libmdbx",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#das-rust-paket-fur-libmdbx","aria-hidden":"true"},"#"),n(" Das Rust-Paket f\xFCr libmdbx")],-1),h=e("p",null,[n("Der "),e("code",null,"rust"),n(" Wrapper f\xFCr die "),e("a",{href:"https://github.com/erthink/libmdbx",target:"_blank",rel:"noopener noreferrer"},"libmdbx"),n(" Datenbank.")],-1),p=e("hr",null,null,-1),m=e("p",null,"Verzeichnis :",-1),c={class:"table-of-contents"},f=n("Zitate"),_=n("Was ist libmdbx?"),v=n("Anleitungen"),x=n("So f\xFChren Sie das Beispiel aus"),k=n("Beispiel 1: Schreiben set(key,val) und Lesen .get(key)"),q=n("Code"),D=n("Ausf\xFChren der Ausgabe"),w=n("Beschreibung des Codes"),y=n("env_rw! Definieren der Datenbank"),E=n("Makro-Erweiterung"),T=n("anyhow und lazy_static"),S=n("Das Makro mdbx!"),B=n("Threads und Transaktionen"),M=n("Lesen und Schreiben von Bin\xE4rdaten"),N=n("Beispiel 2: Datentypen, Datenbankflags, L\xF6schung, Traversal"),V=n("Code"),z=n("Ausf\xFChren der Ausgabe"),X=n("Schnelles Lesen und Schreiben"),C=n("Datenarten"),R=n("Voreingestellte Datentypen"),O=n("Datenbank-Flags"),I=n("DUPSORT : Ein Schl\xFCssel entspricht mehr als einem Wert"),A=n(".dup(key) Iterator, der alle Werte zur\xFCckgibt, die einem Schl\xFCssel entsprechen"),U=n("Standardm\xE4\xDFig automatisch angeh\xE4ngte Datenbankflags"),L=n("L\xF6schung von Daten"),F=n(".del(key) L\xF6schen einer Taste"),P=n(".del_val(key,val) Genaue \xDCbereinstimmung bei der L\xF6schung"),$=n("Durchquerung"),W=n("sequentielles Traversal"),G=n(".rev() Umgekehrte Traversierung der Reihenfolge"),j=n("Sortierung"),Y=n("Intervall-Iteratoren"),H=n("F\xFChren Sie die Ausgabe von"),Z=n(".range(begin..end) Intervall Iteration"),K=n(".rev_range Invertierte Intervalle"),J=n("Anpassen von Datentypen"),Q=n("Vereinfachung benutzerdefinierter Typen mit Attributmakros"),ee=n("Hinweis zur Verwendung von"),ne=n("Die L\xE4nge des Schl\xFCssels"),te=n("Fu\xDFnoten"),se=d(`<hr><h2 id="zitate" tabindex="-1"><a class="header-anchor" href="#zitate" aria-hidden="true">#</a> Zitate</h2><p>Als ich <a href="https://rmw.link" target="_blank" rel="noopener noreferrer">&#39;rmw.link</a> &#39; schrieb, hatte ich das Gef\xFChl, dass ich eine eingebettete Datenbank ben\xF6tigte.</p><p>Aufgrund des Netzwerkdurchsatzes, der mit dem h\xE4ufigen Aufzeichnen, Lesen und Schreiben verbunden ist, war <code>sqlite3</code> aus Leistungsgr\xFCnden zu weit fortgeschritten.</p><p>Daher war eine Key-Value-Datenbank auf niedrigerer Ebene besser geeignet <a href="https://discourse.world/h/2020/06/05/Shine-and-poverty-key-value-database-LMDB-in-applications-for-iOS" target="_blank" rel="noopener noreferrer">(lmdb ist 10 Mal schneller als sqlite</a> ).</p><p><img src="//irmw.gumlet.io/yxZV8x.jpg" alt=""></p><p>Am Ende habe ich mich f\xFCr die magische Version von <code>lmdb</code> entschieden - <code>mdbx</code>.</p><p>Das existierende <code>rust</code> -Paket von <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">mdbx-rs (mdbx-sys)</a> von <code>mdbx</code> <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">unterst\xFCtzt</a> derzeit <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">keine Fenster</a>, also habe ich es auf mich genommen, eine Version mit Windows-Unterst\xFCtzung zu paketieren.</p><p>Unterst\xFCtzung f\xFCr die Speicherung benutzerdefinierter Rosttypen. Unterst\xFCtzt Multithreading-Zugriff.</p><p>Die Datenbank kann in einem Modul mit <code>lazy_static</code> definiert und dann einfach eingef\xFChrt und mit etwas wie :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
</code></pre></div><h2 id="was-ist-libmdbx" tabindex="-1"><a class="header-anchor" href="#was-ist-libmdbx" aria-hidden="true">#</a> Was ist libmdbx?</h2><p><a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">mdbx</a> ist eine sekund\xE4re Datenbank, die auf lmdb des Russen <a href="https://vk.com/erthink" target="_blank" rel="noopener noreferrer">\u041B\u0435\u043E\u043D\u0438\u0434 \u042E\u0440\u044C\u0435\u0432 (Leonid Yuriev)</a> basiert.</p><p><a href="https://en.wikipedia.org/wiki/Lightning_Memory-Mapped_Database" target="_blank" rel="noopener noreferrer">lmdb</a> ist eine superschnelle eingebettete Schl\xFCssel-Wert-Datenbank.</p><p>Die Volltextsuchmaschine <a href="https://docs.meilisearch.com/reference/under_the_hood/storage.html#measured-disk-usage" target="_blank" rel="noopener noreferrer">MeiliSearch</a> basiert auf lmdb.</p><p><a href="https://docs.nvidia.com/deeplearning/dali/user-guide/docs/examples/general/data_loading/dataloading_lmdb.html" target="_blank" rel="noopener noreferrer">Das Deep Learning Framework caffe verwendet ebenfalls lmdb als Datenspeicher</a>.</p><p><a href="https://github.com/erthink/libmdbx#added-features" target="_blank" rel="noopener noreferrer">mdbx ist 30% schneller als lmdb im Embedded Performance Test Benchmark ioarena</a>.</p><p><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-1.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-3.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-4.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-5.png" alt=""></p><p>Gleichzeitig <a href="https://github.com/erthink/libmdbx#improvements-beyond-lmdb" target="_blank" rel="noopener noreferrer">verbessert</a> mdbx <a href="https://github.com/erthink/libmdbx#improvements-beyond-lmdb" target="_blank" rel="noopener noreferrer">viele der Unzul\xE4nglichkeiten von</a> lmdb, so dass Erigon (der Ethereum-Client der n\xE4chsten Generation) k\xFCrzlich von LMDB zu MDBX <sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> wechselte.</p><h2 id="anleitungen" tabindex="-1"><a class="header-anchor" href="#anleitungen" aria-hidden="true">#</a> Anleitungen</h2><h3 id="so-fuhren-sie-das-beispiel-aus" tabindex="-1"><a class="header-anchor" href="#so-fuhren-sie-das-beispiel-aus" aria-hidden="true">#</a> So f\xFChren Sie das Beispiel aus</h3><p>Klonen Sie zun\xE4chst die Codebase <code>git clone git@github.com:rmw-lib/mdbx.git --depth=1 &amp;&amp; cd mdbx</code></p><p>F\xFChren Sie dann <code>cargo run --example 01</code> aus, und es wird ausgef\xFChrt <code>examples/01.rs</code></p><p>Wenn es sich um Ihr eigenes Projekt handelt, f\xFChren Sie es bitte zuerst aus:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>cargo install cargo-edit
cargo add mdbx lazy_static ctor paste
</code></pre></div><h3 id="beispiel-1-schreiben-set-key-val-und-lesen-get-key" tabindex="-1"><a class="header-anchor" href="#beispiel-1-schreiben-set-key-val-und-lesen-get-key" aria-hidden="true">#</a> Beispiel 1: Schreiben <code>set(key,val)</code> und Lesen <code>.get(key)</code></h3><p>Schauen wir uns ein einfaches <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/01.rs" target="_blank" rel="noopener noreferrer">Beispiel/01.rs</a> an</p><h4 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Variablenname der Datenbank Env
  Test // Datenbank-Test
}

fn main() -&gt; Result&lt;()&gt; {
  // Ausgabe der Versionsnummer von libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Lesen und Schreiben im Multithreading-Verfahren
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
</code></pre></div><h4 id="ausfuhren-der-ausgabe" tabindex="-1"><a class="header-anchor" href="#ausfuhren-der-ausgabe" aria-hidden="true">#</a> Ausf\xFChren der Ausgabe</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/01.mdb
mdbx version https://github.com/erthink/libmdbx/releases/tag/v0.11.2
test1 get Ok(Some(Bin([6])))
[6]
</code></pre></div><h4 id="beschreibung-des-codes" tabindex="-1"><a class="header-anchor" href="#beschreibung-des-codes" aria-hidden="true">#</a> Beschreibung des Codes</h4><h5 id="env-rw-definieren-der-datenbank" tabindex="-1"><a class="header-anchor" href="#env-rw-definieren-der-datenbank" aria-hidden="true">#</a> <code>env_rw!</code> Definieren der Datenbank</h5><p>Der Code beginnt mit einem Makro env_rw, das 4 Parameter hat.</p><ol><li><p>Der Variablenname der Datenbankumgebung</p></li><li><p>Gibt ein Objekt zur\xFCck, <a href="https://docs.rs/mdbx/latest/src/mdbx/env.rs.html#27-35" target="_blank" rel="noopener noreferrer">mdbx:: env:: Config</a>.</p></li></ol><p>Wir verwenden die Standardkonfiguration, da <code>Env</code> <code>From&lt;Into&lt;PathBuf&gt;&gt;</code> implementiert, so dass der Datenbankpfad <code>into()</code> ausreicht, und die Standardkonfiguration lautet wie folgt.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
MDBX // Variablenname der Datenbank Env
Test // Datenbank-Test
}

fn main() -&gt; Result&lt;()&gt; {
// Ausgabe der Versionsnummer von libmdbx
unsafe {
  println!(
    &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
    mdbx_version.major, mdbx_version.minor, mdbx_version.release
  );
}

// Lesen und Schreiben im Multithreading-Verfahren
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
    sync_period : 65536, // In 1/65536stel einer Sekunde
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
</code></pre></div><p><code>max_db</code> Diese Einstellung kann bei jedem \xD6ffnen <a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">der</a> Datenbank zur\xFCckgesetzt werden, aber eine zu hohe Einstellung beeintr\xE4chtigt die Leistung, stellen Sie sie nur nach Bedarf ein.</p><p>Die Bedeutung der anderen Parameter finden Sie in <a href="https://erthink.github.io/libmdbx/group__c__opening.html#ga9138119a904355d245777c4119534061" target="_blank" rel="noopener noreferrer">der libmdbx-Dokumentation</a>.</p><ol start="3"><li><p>Der Name des Makros f\xFCr die Datenbanktransaktion; der Standardwert ist <code>r</code></p></li><li><p>Der Name des Makros f\xFCr die Datenbanktransaktion; der Standardwert ist <code>w</code></p></li></ol><p>Die Parameter 3 und 4 k\xF6nnen weggelassen werden, um die Standardwerte zu verwenden.</p><h5 id="makro-erweiterung" tabindex="-1"><a class="header-anchor" href="#makro-erweiterung" aria-hidden="true">#</a> Makro-Erweiterung</h5><p>Wenn Sie sehen wollen, was die Makro-Magie macht, k\xF6nnen Sie das Makro <code>cargo expand --example 01</code> verwenden, um es zu erweitern, das zuerst installiert werden muss. <code>cargo install cargo-expand</code></p><p>Ein Screenshot des erweiterten Codes ist unten abgebildet.</p><p><img src="//irmw.gumlet.io/PDzEtT.png" alt="PDzEtT"></p><h5 id="anyhow-und-lazy-static" tabindex="-1"><a class="header-anchor" href="#anyhow-und-lazy-static" aria-hidden="true">#</a> anyhow und lazy_static</h5><p>Aus dem erweiterten Screenshot k\xF6nnen Sie ersehen, dass <code>lazy_static</code> und <code>anyhow</code>verwendet werden.</p><p><a href="https://rustmagazine.github.io/rust_magazine_2021/chapter_2/rust_error_handle.html#thiserror--anyhow" target="_blank" rel="noopener noreferrer">anyhow</a> ist die Fehlerbehandlungsbibliothek f\xFCr Rust.</p><p><a href="https://juejin.cn/post/7007336922817232927" target="_blank" rel="noopener noreferrer">lazy_static</a> ist eine statische Variable mit verz\xF6gerter Initialisierung.</p><p>Diese beiden Bibliotheken sind sehr verbreitet und ich werde nicht n\xE4her darauf eingehen.</p><h5 id="das-makro-mdbx" tabindex="-1"><a class="header-anchor" href="#das-makro-mdbx" aria-hidden="true">#</a> Das Makro mdbx!</h5><p><a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html" target="_blank" rel="noopener noreferrer"><code>mdbx!</code></a> ist ein <a href="https://mp.weixin.qq.com/s/YT_HNFDCQ_IyocvBkRNJnA" target="_blank" rel="noopener noreferrer">Prozedurmakro</a>.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Variablenname der Datenbank Env
  Test // Datenbank-Test
}

fn main() -&gt; Result&lt;()&gt; {
  // Ausgabe der Versionsnummer von libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Lesen und Schreiben im Multithreading-Verfahren
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
      sync_period : 65536, // In 1/65536stel einer Sekunde
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
 MDBX // Variablenname der Datenbank Env
 Test // Datenbank-Test
}
</code></pre></div><p>Die erste Zeile ist der Variablenname der Datenbankumgebung</p><p>Die zweite Zeile ist der Name der Datenbank</p><p>Es kann mehr als eine Datenbank geben, eine Zeile f\xFCr jede</p><h5 id="threads-und-transaktionen" tabindex="-1"><a class="header-anchor" href="#threads-und-transaktionen" aria-hidden="true">#</a> Threads und Transaktionen</h5><p>Der obige Code demonstriert das Lesen und Schreiben in mehreren Threads.</p><p>Es ist wichtig zu beachten, dass <strong>sich immer nur eine Transaktion im selben Thread befinden</strong> kann <strong>. Wenn ein Thread mehr als eine Transaktion ge\xF6ffnet hat, st\xFCrzt das Programm ab</strong>.</p><p>Die Transaktion wird am Ende des Geltungsbereichs festgeschrieben.</p><h5 id="lesen-und-schreiben-von-binardaten" tabindex="-1"><a class="header-anchor" href="#lesen-und-schreiben-von-binardaten" aria-hidden="true">#</a> Lesen und Schreiben von Bin\xE4rdaten</h5><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Variablenname der Datenbank Env
  Test // Datenbank-Test
}

fn main() -&gt; Result&lt;()&gt; {
  // Ausgabe der Versionsnummer von libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Lesen und Schreiben im Multithreading-Verfahren
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
      sync_period : 65536, // In 1/65536stel einer Sekunde
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
 MDBX // Variablenname der Datenbank Env
 Test // Datenbank-Test
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
</code></pre></div><p><code>set</code> ist ein Schreibvorgang, <code>get</code> ist ein Lesevorgang, und jedes Objekt, das <a href="https://doc.rust-lang.org/std/convert/trait.AsRef.html" target="_blank" rel="noopener noreferrer"><code>AsRef&lt;[u8]&gt;</code></a> Objekt in die Datenbank geschrieben werden kann.</p><p><code>get</code> Was dabei herauskommt, ist <code>Ok(Some(Bin([6])))</code>, das in <code>&amp;[u8]</code>umgewandelt werden kann.</p><h3 id="beispiel-2-datentypen-datenbankflags-loschung-traversal" tabindex="-1"><a class="header-anchor" href="#beispiel-2-datentypen-datenbankflags-loschung-traversal" aria-hidden="true">#</a> Beispiel 2: Datentypen, Datenbankflags, L\xF6schung, Traversal</h3><p>Schauen wir uns das zweite Beispiel an <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">: example/02.rs</a>:</p><p>In diesem Beispiel wird <code>env_rw!</code> weggelassen und das dritte und vierte Argument ( <code>r</code>, <code>w</code>) entfallen.</p><h4 id="code-1" tabindex="-1"><a class="header-anchor" href="#code-1" aria-hidden="true">#</a> Code</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Variablenname der Datenbank Env
  Test // Datenbank-Test
}

fn main() -&gt; Result&lt;()&gt; {
  // Ausgabe der Versionsnummer von libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Lesen und Schreiben im Multithreading-Verfahren
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
      sync_period : 65536, // In 1/65536stel einer Sekunde
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
 MDBX // Variablenname der Datenbank Env
 Test // Datenbank-Test
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
  MDBX // Variablennamen f\xFCr die Datenbank ENV
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
  // Schnelles Schreiben
  w!(Test1.set [2, 3],[4, 5]);

  // Schnell gelesen
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

  // Mehrere Operationen auf mehreren Datenbanken in derselben Transaktion
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

    // Die Transaktion wird am Ende des Geltungsbereichs festgeschrieben
  }

  Ok(())
}
</code></pre></div><h4 id="ausfuhren-der-ausgabe-1" tabindex="-1"><a class="header-anchor" href="#ausfuhren-der-ausgabe-1" aria-hidden="true">#</a> Ausf\xFChren der Ausgabe</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/02.mdb

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
</code></pre></div><h4 id="schnelles-lesen-und-schreiben" tabindex="-1"><a class="header-anchor" href="#schnelles-lesen-und-schreiben" aria-hidden="true">#</a> Schnelles Lesen und Schreiben</h4><p>Wenn wir nur eine einzige Datenzeile lesen oder schreiben wollen, k\xF6nnen wir den syntaktischen Zucker des Makros verwenden.</p><p>Daten lesen</p><div class="language-text ext-text"><pre class="language-text"><code>r!(Test1.get [2, 3])
</code></pre></div><p>Daten schreiben</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Variablenname der Datenbank Env
  Test // Datenbank-Test
}

fn main() -&gt; Result&lt;()&gt; {
  // Ausgabe der Versionsnummer von libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Lesen und Schreiben im Multithreading-Verfahren
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
      sync_period : 65536, // In 1/65536stel einer Sekunde
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
 MDBX // Variablenname der Datenbank Env
 Test // Datenbank-Test
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
  MDBX // Variablennamen f\xFCr die Datenbank ENV
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
  // Schnelles Schreiben
  w!(Test1.set [2, 3],[4, 5]);

  // Schnell gelesen
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

  // Mehrere Operationen auf mehreren Datenbanken in derselben Transaktion
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

    // Die Transaktion wird am Ende des Geltungsbereichs festgeschrieben
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
</code></pre></div><p>Alles in einer Zeile, wie in <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a> geschrieben.</p><h4 id="datenarten" tabindex="-1"><a class="header-anchor" href="#datenarten" aria-hidden="true">#</a> Datenarten</h4><p>In examples/02 <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">.rs</a> sieht die Datenbankdefinition wie folgt aus:</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Variablenname der Datenbank Env
  Test // Datenbank-Test
}

fn main() -&gt; Result&lt;()&gt; {
  // Ausgabe der Versionsnummer von libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Lesen und Schreiben im Multithreading-Verfahren
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
      sync_period : 65536, // In 1/65536stel einer Sekunde
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
 MDBX // Variablenname der Datenbank Env
 Test // Datenbank-Test
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
  MDBX // Variablennamen f\xFCr die Datenbank ENV
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
  // Schnelles Schreiben
  w!(Test1.set [2, 3],[4, 5]);

  // Schnell gelesen
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

  // Mehrere Operationen auf mehreren Datenbanken in derselben Transaktion
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

    // Die Transaktion wird am Ende des Geltungsbereichs festgeschrieben
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
</code></pre></div><p>wobei <code>key</code> und <code>val</code> die Datentypen f\xFCr Schl\xFCssel bzw. Werte definieren.</p><p>Wenn Sie versuchen, einen Datentyp zu schreiben, der nicht mit dem definierten Typ \xFCbereinstimmt, wird ein Fehler gemeldet, wie in der folgenden Abbildung zu sehen ist:</p><p><img src="//irmw.gumlet.io/4rFTC6.png" alt=""></p><p>Der Standard-Datentyp ist <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Bin.html" target="_blank" rel="noopener noreferrer"><code>Bin</code></a> k\xF6nnen alle Daten, die <code>AsRef&lt;[u8]&gt;</code> implementiert, beschrieben werden.</p><p>Wenn der Schl\xFCssel oder Wert eine <code>utf8</code> Zeichenfolge ist, kann der Datentyp auf <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Str.html" target="_blank" rel="noopener noreferrer"><code>Str</code></a> .</p><p><a href="https://doc.rust-lang.org/std/ops/trait.Deref.html" target="_blank" rel="noopener noreferrer">Die Entquotierung von</a> <code>Str</code> ergibt eine Zeichenkette, \xE4hnlich wie bei <code>let k:&amp;str = &amp;k;</code>.</p><p>Dar\xFCber hinaus implementiert <code>Str</code> auch <a href="https://doc.rust-lang.org/std/fmt/trait.Display.html" target="_blank" rel="noopener noreferrer"><code>std::fmt::Display</code></a> wird <code>println!(&quot;{}&quot;,k)</code> eine lesbare Zeichenkette ausgeben.</p><h5 id="voreingestellte-datentypen" tabindex="-1"><a class="header-anchor" href="#voreingestellte-datentypen" aria-hidden="true">#</a> Voreingestellte Datentypen</h5><p>Zus\xE4tzlich zu <code>Str</code> und <code>Bin</code> bietet der Wrapper auch Datenunterst\xFCtzung f\xFCr <a href="https://docs.rs/mdbx/latest/src/mdbx/type.rs.html#48" target="_blank" rel="noopener noreferrer">usize, u128, u64, u32, u16, u8, isize, i128, i64, i32, i16, i8, f32, f64</a>.</p><h4 id="datenbank-flags" tabindex="-1"><a class="header-anchor" href="#datenbank-flags" aria-hidden="true">#</a> Datenbank-Flags</h4><p>Die den Daten in <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a> hinzugef\xFCgten Datenbankflags k\xF6nnen Sie unter <code>Test4</code> einsehen. <code>flag DUPSORT</code></p><p>Die libmdbx-Datenbank hat eine Reihe von Flags ( <a href="https://erthink.github.io/libmdbx/group__c__dbi.html#gafe3bddb297b3ab0d828a487c5726f76a" target="_blank" rel="noopener noreferrer"><code>MDBX_db_flags_t</code></a> ), die eingestellt werden k\xF6nnen.</p><ul><li>REVERSEKEY verwendet den umgekehrten Stringvergleich f\xFCr Schl\xFCssel. (n\xFCtzlich bei der Verwendung kleiner endcodierter Zahlen als Schl\xFCssel)</li><li>DUPSORT verwendet sortierte Duplikate, d.h. erlaubt mehrere Werte f\xFCr einen Schl\xFCssel.</li><li>INTEGERKEY Native byte-geordnete numerische Schl\xFCssel uint32_t oder uint64_t. Die Schl\xFCssel m\xFCssen die gleiche Gr\xF6\xDFe haben und bei der \xDCbergabe als Argumente ausgerichtet sein.</li><li>DUPFIXED Die Gr\xF6\xDFe der Datenwerte muss gleich sein, wenn DUPSORT verwendet wird (erm\xF6glicht eine schnelle Z\xE4hlung der Anzahl der Werte).</li><li>DUPSORT und DUPFIXED sind f\xFCr INTEGERDUP erforderlich; die Werte sind Ganzzahlen (\xE4hnlich wie bei INTEGERKEY). Die Datenwerte m\xFCssen alle die gleiche Gr\xF6\xDFe haben und bei der \xDCbergabe als Parameter ausgerichtet sein.</li><li>REVERSEDUP verwendet DUPSORT; der umgekehrte Stringvergleich wird f\xFCr Datenwerte verwendet.</li><li>CREATE erstellt die DB, wenn sie nicht existiert (standardm\xE4\xDFig hinzugef\xFCgt).</li><li>DB_ACCEDE \xD6ffnet eine bestehende Teildatenbank, die mit dem Flag unknown erstellt wurde.<br> Dieses DB_ACCEDE-Flag ist dazu gedacht, bestehende Unterdatenbanken zu \xF6ffnen, die mit unbekannten Flags (REVERSEKEY, DUPSORT, INTEGERKEY, DUPFIXED, INTEGERDUP und REVERSEDUP) angelegt wurden.<br> In diesem Fall gibt die Unterdatenbank keinen INCOMPATIBLE-Fehler zur\xFCck, sondern wird mit den Flags ge\xF6ffnet, mit denen sie erstellt wurde, und die Anwendung kann dann die tats\xE4chlichen Flags mit mdbx_dbi_flags() ermitteln.</li></ul><h5 id="dupsort-ein-schlussel-entspricht-mehr-als-einem-wert" tabindex="-1"><a class="header-anchor" href="#dupsort-ein-schlussel-entspricht-mehr-als-einem-wert" aria-hidden="true">#</a> DUPSORT : Ein Schl\xFCssel entspricht mehr als einem Wert</h5><p><code>DUPSORT</code>bedeutet, dass ein Schl\xFCssel mehr als einem Wert entsprechen kann.</p><p>Wenn Sie mehrere Flags setzen wollen, schreiben Sie wie folgt <code>flag DUPSORT | DUPFIXED</code></p><h5 id="dup-key-iterator-der-alle-werte-zuruckgibt-die-einem-schlussel-entsprechen" tabindex="-1"><a class="header-anchor" href="#dup-key-iterator-der-alle-werte-zuruckgibt-die-einem-schlussel-entsprechen" aria-hidden="true">#</a> <code>.dup(key)</code> Iterator, der alle Werte zur\xFCckgibt, die einem Schl\xFCssel entsprechen</h5><p>Diese Funktion ist nur f\xFCr Datenbanken verf\xFCgbar, die mit <code>DUPSORT</code> gekennzeichnet sind und bei denen ein Schl\xFCssel mehreren Werten entsprechen kann.</p><p>F\xFCr <code>DUPSORT</code> Datenbanken gibt <code>get</code> nur den ersten Wert f\xFCr diesen Schl\xFCssel zur\xFCck. Um alle Werte zu erhalten, verwenden Sie <code>dup</code>.</p><h5 id="standardma\xDFig-automatisch-angehangte-datenbankflags" tabindex="-1"><a class="header-anchor" href="#standardma\xDFig-automatisch-angehangte-datenbankflags" aria-hidden="true">#</a> Standardm\xE4\xDFig automatisch angeh\xE4ngte Datenbankflags</h5><p>Wenn der Datentyp <code>u32</code> / <code>u64</code> / <code>usize</code> ist, wird das Datenbankflag automatisch hinzugef\xFCgt. <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#105" target="_blank" rel="noopener noreferrer"><code>INTEGERKEY</code></a> .</p><p>Auf Maschinen mit Small-End-Codierung werden andere numerische Typen automatisch hinzugef\xFCgt <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#108" target="_blank" rel="noopener noreferrer"><code>REVERSEKEY</code></a> Das Datenbankflag wird automatisch hinzugef\xFCgt, wenn der Datentyp / / ist.</p><h4 id="loschung-von-daten" tabindex="-1"><a class="header-anchor" href="#loschung-von-daten" aria-hidden="true">#</a> L\xF6schung von Daten</h4><h5 id="del-key-loschen-einer-taste" tabindex="-1"><a class="header-anchor" href="#del-key-loschen-einer-taste" aria-hidden="true">#</a> <code>.del(key)</code> L\xF6schen einer Taste</h5><p><code>.del(val)</code> L\xF6scht den einem Schl\xFCssel entsprechenden Wert.</p><p>Wenn die Datenbank das Kennzeichen <code>DUPSORT</code>hat, werden alle Werte unter diesem Schl\xFCssel gel\xF6scht.</p><p>Gibt <code>true</code>zur\xFCck, wenn Daten gel\xF6scht wurden, und <code>false</code>, wenn nicht.</p><h5 id="del-val-key-val-genaue-ubereinstimmung-bei-der-loschung" tabindex="-1"><a class="header-anchor" href="#del-val-key-val-genaue-ubereinstimmung-bei-der-loschung" aria-hidden="true">#</a> <code>.del_val(key,val)</code> Genaue \xDCbereinstimmung bei der L\xF6schung</h5><p><code>.del_val(key,val)</code> L\xF6scht Schl\xFCssel-Wert-Paare, die genau mit den Eingabeparametern \xFCbereinstimmen.</p><p>Gibt <code>true</code>zur\xFCck, wenn Daten gel\xF6scht wurden, und <code>false</code>, wenn nicht.</p><h4 id="durchquerung" tabindex="-1"><a class="header-anchor" href="#durchquerung" aria-hidden="true">#</a> Durchquerung</h4><h5 id="sequentielles-traversal" tabindex="-1"><a class="header-anchor" href="#sequentielles-traversal" aria-hidden="true">#</a> sequentielles Traversal</h5><p>Aufgrund der Einf\xFChrung von <a href="https://doc.rust-lang.org/std/iter/trait.IntoIterator.html" target="_blank" rel="noopener noreferrer"><code>std::iter::IntoIterator</code></a> . k\xF6nnen Sie direkt wie folgt verfahren:</p><p><code>for (k, v) in test1</code></p><h5 id="rev-umgekehrte-traversierung-der-reihenfolge" tabindex="-1"><a class="header-anchor" href="#rev-umgekehrte-traversierung-der-reihenfolge" aria-hidden="true">#</a> <code>.rev()</code> Umgekehrte Traversierung der Reihenfolge</h5><p><code>for (k, v) in test4.rev()</code></p><h5 id="sortierung" tabindex="-1"><a class="header-anchor" href="#sortierung" aria-hidden="true">#</a> Sortierung</h5><p>Die libmdbx-Schl\xFCssel sind in <a href="https://zh.wikipedia.org/wiki/%E5%AD%97%E5%85%B8%E5%BA%8F" target="_blank" rel="noopener noreferrer">W\xF6rterbuchreihenfolge</a> sortiert.</p><ul><li><p>F\xFCr Zahlen ohne Vorzeichen</p><p>werden vom kleinsten zum gr\xF6\xDFten sortiert, da die Datenbankflags automatisch hinzugef\xFCgt werden ( <code>u32</code>/ <code>u64</code>/ <code>usize</code> werden zu <code>INTEGERKEY</code>hinzugef\xFCgt, andere werden zu <code>REVERSEKEY</code> hinzugef\xFCgt, je nach Maschinencode).</p></li><li><p>F\xFCr vorzeichenbehaftete Zahlen</p><p>die Reihenfolge ist: zuerst 0, dann alle positiven Zahlen von der kleinsten bis zur gr\xF6\xDFten, dann alle negativen Zahlen von der kleinsten bis zur gr\xF6\xDFten.</p></li></ul><h3 id="intervall-iteratoren" tabindex="-1"><a class="header-anchor" href="#intervall-iteratoren" aria-hidden="true">#</a> Intervall-Iteratoren</h3><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Variablenname der Datenbank Env
  Test // Datenbank-Test
}

fn main() -&gt; Result&lt;()&gt; {
  // Ausgabe der Versionsnummer von libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Lesen und Schreiben im Multithreading-Verfahren
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
      sync_period : 65536, // In 1/65536stel einer Sekunde
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
 MDBX // Variablenname der Datenbank Env
 Test // Datenbank-Test
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
  MDBX // Variablennamen f\xFCr die Datenbank ENV
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
  // Schnelles Schreiben
  w!(Test1.set [2, 3],[4, 5]);

  // Schnell gelesen
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

  // Mehrere Operationen auf mehreren Datenbanken in derselben Transaktion
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

    // Die Transaktion wird am Ende des Geltungsbereichs festgeschrieben
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
</code></pre></div><h4 id="fuhren-sie-die-ausgabe-von" tabindex="-1"><a class="header-anchor" href="#fuhren-sie-die-ausgabe-von" aria-hidden="true">#</a> F\xFChren Sie die Ausgabe von</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/range.mdb

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
</code></pre></div><h4 id="range-begin-end-intervall-iteration" tabindex="-1"><a class="header-anchor" href="#range-begin-end-intervall-iteration" aria-hidden="true">#</a> <code>.range(begin..end)</code> Intervall Iteration</h4><p>Bei Zahlen ist ein Intervall ein numerisches Intervall.</p><p>F\xFCr das Bin\xE4rintervall kann das gleiche Intervall konstruiert werden, z. B.</p><div class="language-text ext-text"><pre class="language-text"><code>let begin : &amp;[u8] = &amp;[1,1];
for (k,v) in test0.range(begin..=&amp;[2]) {}
</code></pre></div><p>Wenn <code>begin</code> gr\xF6\xDFer ist als <code>end</code>, wird r\xFCckw\xE4rts gearbeitet.</p><p><code>test1.range(5..2)</code> gibt zum Beispiel Folgendes aus:</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Variablenname der Datenbank Env
  Test // Datenbank-Test
}

fn main() -&gt; Result&lt;()&gt; {
  // Ausgabe der Versionsnummer von libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Lesen und Schreiben im Multithreading-Verfahren
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
      sync_period : 65536, // In 1/65536stel einer Sekunde
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
 MDBX // Variablenname der Datenbank Env
 Test // Datenbank-Test
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
  MDBX // Variablennamen f\xFCr die Datenbank ENV
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
  // Schnelles Schreiben
  w!(Test1.set [2, 3],[4, 5]);

  // Schnell gelesen
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

  // Mehrere Operationen auf mehreren Datenbanken in derselben Transaktion
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

    // Die Transaktion wird am Ende des Geltungsbereichs festgeschrieben
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
</code></pre></div><p>Intervall-Iteration wird nicht unterst\xFCtzt <a href="https://doc.rust-lang.org/std/ops/struct.RangeFull.html" target="_blank" rel="noopener noreferrer"><code>RangeFull</code></a> , d.h. die Verwendung von <code>..</code>wird nicht unterst\xFCtzt, bitte verwenden Sie stattdessen das oben genannte <a href="#%E9%81%8D%E5%8E%86">Traversal</a>.</p><h4 id="rev-range-invertierte-intervalle" tabindex="-1"><a class="header-anchor" href="#rev-range-invertierte-intervalle" aria-hidden="true">#</a> <code>.rev_range</code> Invertierte Intervalle</h4><p>Wenn Sie ein invertiertes Intervall erhalten m\xF6chten, das kleiner oder gleich einem Wert ist, k\xF6nnen Sie wie folgt vorgehen</p><div class="language-text ext-text"><pre class="language-text"><code>test2.rev_range(2..)
</code></pre></div><p>Die Ausgabe wird sein</p><div class="language-text ext-text"><pre class="language-text"><code>(2, 4)
(1, 5)
(0, 0)
</code></pre></div><p>Eines von <code>begin</code> oder <code>end</code> darf nicht f\xFCr das invertierte Intervall eingestellt sein; denn wenn beide eingestellt sind, k\xF6nnen Sie immer <code>range(end..begin)</code> verwenden, um denselben Effekt zu erzielen.</p><h3 id="anpassen-von-datentypen" tabindex="-1"><a class="header-anchor" href="#anpassen-von-datentypen" aria-hidden="true">#</a> Anpassen von Datentypen</h3><p>Der Demo-Code ist verf\xFCgbar unter <a href="https://github.com/rmw-lib/mdbx-example/blob/master/01/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/01</a></p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Variablenname der Datenbank Env
  Test // Datenbank-Test
}

fn main() -&gt; Result&lt;()&gt; {
  // Ausgabe der Versionsnummer von libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Lesen und Schreiben im Multithreading-Verfahren
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
      sync_period : 65536, // In 1/65536stel einer Sekunde
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
 MDBX // Variablenname der Datenbank Env
 Test // Datenbank-Test
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
  MDBX // Variablennamen f\xFCr die Datenbank ENV
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
  // Schnelles Schreiben
  w!(Test1.set [2, 3],[4, 5]);

  // Schnell gelesen
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

  // Mehrere Operationen auf mehreren Datenbanken in derselben Transaktion
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

    // Die Transaktion wird am Ende des Geltungsbereichs festgeschrieben
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
</code></pre></div><p>Die Ausgabe sieht folgenderma\xDFen aus</p><div class="language-text ext-text"><pre class="language-text"><code>Some(City { name: &quot;BeiJing&quot;, lnglat: (11640, 3990) })
</code></pre></div><p>Im Beispiel des benutzerdefinierten Typs verwenden wir <a href="https://github.com/koute/speedy" target="_blank" rel="noopener noreferrer"><code>speedy</code></a> die Serialisierung durchzuf\xFChren <a href="https://github.com/djkoloski/rust_serialization_benchmark" target="_blank" rel="noopener noreferrer">( <code>speedy</code> performance review</a> ).</p><p>Implementierung benutzerdefinierter Typen <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.FromMdbx.html" target="_blank" rel="noopener noreferrer"><code>FromMdbx</code></a> und <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.ToAsRef.html" target="_blank" rel="noopener noreferrer"><code>ToAsRef</code></a> kann dann unter <code>mdbx</code> gespeichert werden.</p><p>Wenn Sie eine bestimmte Serialisierungsbibliothek verwenden, k\xF6nnen Sie auch <a href="https://blog.logrocket.com/macros-in-rust-a-tutorial-with-examples/" target="_blank" rel="noopener noreferrer">Attributmakros</a> anpassen, um den Prozess zu vereinfachen.</p><h4 id="vereinfachung-benutzerdefinierter-typen-mit-attributmakros" tabindex="-1"><a class="header-anchor" href="#vereinfachung-benutzerdefinierter-typen-mit-attributmakros" aria-hidden="true">#</a> Vereinfachung benutzerdefinierter Typen mit Attributmakros</h4><p>Die Implementierung eines Attributmakros ist so einfach wie <a href="https://crates.io/crates/mdbx_speedy" target="_blank" rel="noopener noreferrer"><code>mdbx_speedy</code></a> Der Code des Attributmakros lautet wie folgt:</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Variablenname der Datenbank Env
  Test // Datenbank-Test
}

fn main() -&gt; Result&lt;()&gt; {
  // Ausgabe der Versionsnummer von libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Lesen und Schreiben im Multithreading-Verfahren
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
      sync_period : 65536, // In 1/65536stel einer Sekunde
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
 MDBX // Variablenname der Datenbank Env
 Test // Datenbank-Test
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
  MDBX // Variablennamen f\xFCr die Datenbank ENV
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
  // Schnelles Schreiben
  w!(Test1.set [2, 3],[4, 5]);

  // Schnell gelesen
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

  // Mehrere Operationen auf mehreren Datenbanken in derselben Transaktion
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

    // Die Transaktion wird am Ende des Geltungsbereichs festgeschrieben
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
</code></pre></div><p>Beginnen Sie mit <code>cargo add mdbx-speedy</code>in Ihrem eigenen Projekt, dann k\xF6nnen Sie den Typ schnell anpassen (siehe <a href="https://github.com/rmw-lib/mdbx-example/blob/master/02/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/02</a> f\xFCr Demo-Code).</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Variablenname der Datenbank Env
  Test // Datenbank-Test
}

fn main() -&gt; Result&lt;()&gt; {
  // Ausgabe der Versionsnummer von libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Lesen und Schreiben im Multithreading-Verfahren
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
      sync_period : 65536, // In 1/65536stel einer Sekunde
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
 MDBX // Variablenname der Datenbank Env
 Test // Datenbank-Test
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
  MDBX // Variablennamen f\xFCr die Datenbank ENV
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
  // Schnelles Schreiben
  w!(Test1.set [2, 3],[4, 5]);

  // Schnell gelesen
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

  // Mehrere Operationen auf mehreren Datenbanken in derselben Transaktion
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

    // Die Transaktion wird am Ende des Geltungsbereichs festgeschrieben
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
</code></pre></div><p>Nat\xFCrlich ist es immer noch l\xE4stig, <code>#[derive(PartialEq, Debug, Readable, Writable, MdbxSpeedy)]</code> wiederholt zu schreiben, daher k\xF6nnen Sie <a href="https://docs.rs/derive-alias/0.1.0/derive_alias" target="_blank" rel="noopener noreferrer"><code>derive_alias</code></a> um den Code weiter zu vereinfachen.</p><h2 id="hinweis-zur-verwendung-von" tabindex="-1"><a class="header-anchor" href="#hinweis-zur-verwendung-von" aria-hidden="true">#</a> Hinweis zur Verwendung von</h2><h3 id="die-lange-des-schlussels" tabindex="-1"><a class="header-anchor" href="#die-lange-des-schlussels" aria-hidden="true">#</a> Die L\xE4nge des Schl\xFCssels</h3><ul><li>Minimum 0, Maximum \u2248 \xBD Seitengr\xF6\xDFe (Standardwert 4K, maximale Gr\xF6\xDFe des Seitenschl\xFCssels ist 2022 Bytes), wird bei der Initialisierung der Datenbank festgelegt <code>pagesize</code> kann auf h\xF6chstens <code>65536</code>konfiguriert werden und muss eine Potenz von 2 sein.</li></ul><h2 id="fu\xDFnoten" tabindex="-1"><a class="header-anchor" href="#fu\xDFnoten" aria-hidden="true">#</a> Fu\xDFnoten</h2><p>Sie f\xFChren die Vorteile des \xDCbergangs von LMDB zu MDBX an.</p><blockquote><p>Erigon begann mit einem BoltDB-Datenbank-Backend, f\xFCgte dann Unterst\xFCtzung f\xFCr BadgerDB hinzu und migrierte schlie\xDFlich vollst\xE4ndig zu LMDB. Irgendwann stie\xDFen wir auf Stabilit\xE4tsprobleme, die durch die Verwendung von LMDB verursacht wurden und mit denen die Entwickler nicht gerechnet hatten. Seitdem haben wir uns ein gut unterst\xFCtztes Derivat von LMDB namens MDBX angeschaut und hoffen, dessen Stabilit\xE4tsverbesserungen zu nutzen und in Zukunft m\xF6glicherweise mehr zusammenzuarbeiten. Die Integration von MDBX ist nun abgeschlossen und es ist Zeit f\xFCr weitere Tests und Dokumentationen.</p><p>Vorteile der Umstellung von LMDB auf MDBX.</p><ol><li><p>Das Wachstum &quot;Raum (Geometrie)&quot; der Datenbankdateien funktioniert ordnungsgem\xE4\xDF. Dies ist wichtig, insbesondere unter Windows. In LMDB muss die Gr\xF6\xDFe der Memory Map einmal im Voraus festgelegt werden (derzeit verwenden wir standardm\xE4\xDFig 2 TB), und wenn die Datenbankdatei \xFCber diese Grenze hinaus w\xE4chst, muss der Prozess neu gestartet werden. Wenn man unter Windows die Gr\xF6\xDFe der Memory Map auf 2 TB setzt, wird die Datenbankdatei von vornherein 2 TB gro\xDF, was nicht sehr praktisch ist. In MDBX wird die Gr\xF6\xDFe der Speicherkarte in 2-Gb-Schritten erh\xF6ht. Dies bedeutet zwar eine gelegentliche Neuzuordnung, f\xFChrt aber zu einer besseren Benutzerfreundlichkeit.</p></li><li><p>MDBX hat strengere Kontrollen f\xFCr die gleichzeitige Verwendung der Transaktionsverarbeitung und sich \xFCberschneidende Lese- und Schreibtransaktionen im selben Ausf\xFChrungsstrang. Dadurch k\xF6nnen wir einige nicht offensichtliche Fehler erkennen und das Verhalten wird vorhersehbarer.<br> In \xFCber 5 Jahren (seit der Trennung von LMDB) hat MDBX eine gro\xDFe Anzahl von Sicherheits- und Fehlerbehebungen gesammelt, die unseres Wissens nach in LMDB noch vorhanden sind. Einige dieser Probleme wurden w\xE4hrend unserer Tests entdeckt, und die MDBX-Verantwortlichen haben sie ernst genommen und umgehend behoben.</p></li><li><p>Bei Datenbanken, in denen st\xE4ndig Daten ge\xE4ndert werden, entsteht eine betr\xE4chtliche Menge an wiedergewinnbarem Speicherplatz (in der LMDB-Terminologie auch als &quot;Freelist&quot; bezeichnet). Wir mu\xDFten LMDB patchen, um die schwerwiegendsten M\xE4ngel bei der Handhabung von wiedergewinnbarem Speicherplatz <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide" target="_blank" rel="noopener noreferrer">(Analyse)</a> zu beheben. MDBX hat <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide%EF%BC%89%E3%80%82MDBX%E5%AF%B9%E5%8F%AF%E5%9B%9E%E6%94%B6%E7%A9%BA%E9%97%B4%E7%9A%84%E6%9C%89%E6%95%88%E5%A4%84%E7%90%86%E8%BF%9B%E8%A1%8C%E4%BA%86%E7%89%B9%E5%88%AB%E7%9A%84%E5%85%B3%E6%B3%A8%EF%BC%8C%E5%88%B0%E7%9B%AE%E5%89%8D%E4%B8%BA%E6%AD%A2%EF%BC%8C%E8%BF%98%E4%B8%8D%E9%9C%80%E8%A6%81%E6%89%93%E8%A1%A5%E4%B8%81%E3%80%82" target="_blank" rel="noopener noreferrer">besonderes Augenmerk auf die effiziente Handhabung von wiedergewinnbarem Speicherplatz gelegt und mu\xDFte bisher nicht gepatcht werden</a>.</p></li><li><p>Nach unseren Tests schnitt MDBX bei unseren Arbeitslasten etwas besser ab.</p></li><li><p>MDBX legt mehr interne Telemetriedaten offen - mehr Metriken \xFCber die Vorg\xE4nge innerhalb der Datenbank. Und wir haben diese Daten in Grafana - um bessere Entscheidungen \xFCber das Anwendungsdesign zu treffen. Nach der vollst\xE4ndigen Umstellung auf MDBX (und der Abschaffung der Unterst\xFCtzung f\xFCr LMDB) werden wir zum Beispiel eine &quot;Halbvolle-Transaktion-\xFCbertragen&quot;-Politik einf\xFChren, um ein \xDCberlaufen/Unterlaufen von Festplattenkontakten zu vermeiden. Dies wird unseren Code weiter vereinfachen, ohne die Leistung zu beeintr\xE4chtigen.</p></li><li><p>MDBX unterst\xFCtzt den Modus &quot;Exklusives \xD6ffnen&quot; - wir verwenden diesen Modus f\xFCr Datenbankmigrationen, um zu verhindern, dass andere Leser w\xE4hrend der Migration auf die Datenbank zugreifen.</p></li></ol></blockquote><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p><a href="https://github.com/ledgerwatch/erigon/wiki/Criteria-for-transitioning-from-Alpha-to-Beta#switch-from-lmdb-to-mdbx" target="_blank" rel="noopener noreferrer">Erigon (der Ethernet-Client der n\xE4chsten Generation) hat k\xFCrzlich von LMDB auf MDBX umgestellt</a>. <a href="#fnref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,160);function re(ae,ie){const t=u("RouterLink");return i(),l(o,null,[b,h,p,m,e("nav",c,[e("ul",null,[e("li",null,[s(t,{to:"#zitate"},{default:r(()=>[f]),_:1})]),e("li",null,[s(t,{to:"#was-ist-libmdbx"},{default:r(()=>[_]),_:1})]),e("li",null,[s(t,{to:"#anleitungen"},{default:r(()=>[v]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#so-fuhren-sie-das-beispiel-aus"},{default:r(()=>[x]),_:1})]),e("li",null,[s(t,{to:"#beispiel-1-schreiben-set-key-val-und-lesen-get-key"},{default:r(()=>[k]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#code"},{default:r(()=>[q]),_:1})]),e("li",null,[s(t,{to:"#ausfuhren-der-ausgabe"},{default:r(()=>[D]),_:1})]),e("li",null,[s(t,{to:"#beschreibung-des-codes"},{default:r(()=>[w]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#env-rw-definieren-der-datenbank"},{default:r(()=>[y]),_:1})]),e("li",null,[s(t,{to:"#makro-erweiterung"},{default:r(()=>[E]),_:1})]),e("li",null,[s(t,{to:"#anyhow-und-lazy-static"},{default:r(()=>[T]),_:1})]),e("li",null,[s(t,{to:"#das-makro-mdbx"},{default:r(()=>[S]),_:1})]),e("li",null,[s(t,{to:"#threads-und-transaktionen"},{default:r(()=>[B]),_:1})]),e("li",null,[s(t,{to:"#lesen-und-schreiben-von-binardaten"},{default:r(()=>[M]),_:1})])])])])]),e("li",null,[s(t,{to:"#beispiel-2-datentypen-datenbankflags-loschung-traversal"},{default:r(()=>[N]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#code-1"},{default:r(()=>[V]),_:1})]),e("li",null,[s(t,{to:"#ausfuhren-der-ausgabe-1"},{default:r(()=>[z]),_:1})]),e("li",null,[s(t,{to:"#schnelles-lesen-und-schreiben"},{default:r(()=>[X]),_:1})]),e("li",null,[s(t,{to:"#datenarten"},{default:r(()=>[C]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#voreingestellte-datentypen"},{default:r(()=>[R]),_:1})])])]),e("li",null,[s(t,{to:"#datenbank-flags"},{default:r(()=>[O]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#dupsort-ein-schlussel-entspricht-mehr-als-einem-wert"},{default:r(()=>[I]),_:1})]),e("li",null,[s(t,{to:"#dup-key-iterator-der-alle-werte-zuruckgibt-die-einem-schlussel-entsprechen"},{default:r(()=>[A]),_:1})]),e("li",null,[s(t,{to:"#standardma\xDFig-automatisch-angehangte-datenbankflags"},{default:r(()=>[U]),_:1})])])]),e("li",null,[s(t,{to:"#loschung-von-daten"},{default:r(()=>[L]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#del-key-loschen-einer-taste"},{default:r(()=>[F]),_:1})]),e("li",null,[s(t,{to:"#del-val-key-val-genaue-ubereinstimmung-bei-der-loschung"},{default:r(()=>[P]),_:1})])])]),e("li",null,[s(t,{to:"#durchquerung"},{default:r(()=>[$]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#sequentielles-traversal"},{default:r(()=>[W]),_:1})]),e("li",null,[s(t,{to:"#rev-umgekehrte-traversierung-der-reihenfolge"},{default:r(()=>[G]),_:1})]),e("li",null,[s(t,{to:"#sortierung"},{default:r(()=>[j]),_:1})])])])])]),e("li",null,[s(t,{to:"#intervall-iteratoren"},{default:r(()=>[Y]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#fuhren-sie-die-ausgabe-von"},{default:r(()=>[H]),_:1})]),e("li",null,[s(t,{to:"#range-begin-end-intervall-iteration"},{default:r(()=>[Z]),_:1})]),e("li",null,[s(t,{to:"#rev-range-invertierte-intervalle"},{default:r(()=>[K]),_:1})])])]),e("li",null,[s(t,{to:"#anpassen-von-datentypen"},{default:r(()=>[J]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#vereinfachung-benutzerdefinierter-typen-mit-attributmakros"},{default:r(()=>[Q]),_:1})])])])])]),e("li",null,[s(t,{to:"#hinweis-zur-verwendung-von"},{default:r(()=>[ee]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#die-lange-des-schlussels"},{default:r(()=>[ne]),_:1})])])]),e("li",null,[s(t,{to:"#fu\xDFnoten"},{default:r(()=>[te]),_:1})])])]),se],64)}var de=a(g,[["render",re],["__file","2021-12-21-mdbx.html.vue"]]);export{de as default};
