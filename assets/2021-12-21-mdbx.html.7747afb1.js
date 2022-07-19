import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as i,a as n,b as a,w as s,F as l,d as t,e as d,r as u}from"./app.2a6a1bd2.js";const p={},m=n("h1",{id:"balik-rust-pre-libmdbx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#balik-rust-pre-libmdbx","aria-hidden":"true"},"#"),t(" Bal\xEDk rust pre libmdbx")],-1),b=n("p",null,[t("Obal "),n("code",null,"rust"),t(" pre datab\xE1zu "),n("a",{href:"https://github.com/erthink/libmdbx",target:"_blank",rel:"noopener noreferrer"},"libmdbx"),t(".")],-1),c=n("hr",null,null,-1),v=n("p",null,"Adres\xE1r :",-1),g={class:"table-of-contents"},h=t("Cit\xE1ty"),_=t("\u010Co je libmdbx?"),k=t("V\xFDukov\xE9 programy"),f=t("Ako spusti\u0165 pr\xEDklad"),y=t("Pr\xEDklad 1 : P\xEDsanie set(key,val) a \u010D\xEDtanie .get(key)"),x=t("K\xF3d"),q=t("Spustite v\xFDstup"),z=t("Popis k\xF3du"),D=t("env_rw! Definovanie datab\xE1zy"),w=t("Roz\u0161\xEDrenie makier"),E=t("anyhow a lazy_static"),T=t("Makro mdbx!"),B=t("Vl\xE1kna a transakcie"),j=t("\u010C\xEDtanie a z\xE1pis bin\xE1rnych \xFAdajov"),N=t("Pr\xEDklad 2: D\xE1tov\xE9 typy, pr\xEDznaky datab\xE1zy, mazanie, prech\xE1dzanie"),M=t("K\xF3d"),S=t("Spustite v\xFDstup"),V=t("R\xFDchle \u010D\xEDtanie a p\xEDsanie"),X=t("Typy \xFAdajov"),R=t("Prednastaven\xE9 typy \xFAdajov"),O=t("Pr\xEDznaky datab\xE1zy"),C=t("DUPSORT : jedn\xE9mu k\u013E\xFA\u010Du zodpoved\xE1 viac ako jedna hodnota"),P=t(".dup(key) iter\xE1tor, ktor\xFD vr\xE1ti v\u0161etky hodnoty zodpovedaj\xFAce k\u013E\xFA\u010Du"),U=t("Predvolen\xE9 automaticky prid\xE1van\xE9 pr\xEDznaky datab\xE1zy"),A=t("Odstr\xE1nenie \xFAdajov"),I=t(".del(key) Odstr\xE1nenie k\u013E\xFA\u010Da"),L=t(".del_val(key,val) Odstr\xE1nenie presnej zhody"),F=t("Prechod"),$=t("sekven\u010Dn\xE9 prech\xE1dzanie"),Y=t(".rev() Prech\xE1dzanie v opa\u010Dnom porad\xED"),G=t("Triedenie"),Z=t("Intervalov\xE9 iter\xE1tory"),H=t("Spustite v\xFDstup"),K=t(".range(begin..end) Intervalov\xE1 iter\xE1cia"),W=t(".rev_range Invertovan\xE9 intervaly"),J=t("Prisp\xF4sobenie typov \xFAdajov"),Q=t("Zjednodu\u0161enie vlastn\xFDch typov pomocou atrib\xFAtov\xFDch makier"),nn=t("Pozn\xE1mka k pou\u017E\xEDvaniu"),tn=t("D\u013A\u017Eka k\u013E\xFA\u010Da"),en=t("Pozn\xE1mky pod \u010Diarou"),an=d(`<hr><h2 id="citaty" tabindex="-1"><a class="header-anchor" href="#citaty" aria-hidden="true">#</a> Cit\xE1ty</h2><p>Pri p\xEDsan\xED <a href="https://rmw.link" target="_blank" rel="noopener noreferrer">&#39;rmw.link</a> &#39; som mal pocit, \u017Ee potrebujem vlo\u017Een\xFA datab\xE1zu.</p><p>Vzh\u013Eadom na priepustnos\u0165 siete spojen\xFA s \u010Dast\xFDm nahr\xE1van\xEDm, \u010D\xEDtan\xEDm a z\xE1pisom bola str\xE1nka <code>sqlite3</code> pr\xEDli\u0161 pokro\u010Dil\xE1 z h\u013Eadiska v\xFDkonnosti.</p><p>Preto bola vhodnej\u0161ia ni\u017E\u0161ia \xFArove\u0148 datab\xE1zy k\u013E\xFA\u010D-hodnota <a href="https://discourse.world/h/2020/06/05/Shine-and-poverty-key-value-database-LMDB-in-applications-for-iOS" target="_blank" rel="noopener noreferrer">(lmdb je 10-kr\xE1t r\xFDchlej\u0161ia ako sqlite</a> ).</p><p><img src="//irmw.gumlet.io/yxZV8x.jpg" alt=""></p><p>Nakoniec som sa rozhodol pre magick\xFA verziu <code>lmdb</code> - <code>mdbx</code>.</p><p>V s\xFA\u010Dasnosti existuj\xFAci bal\xEDk <code>rust</code> <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">mdbx-rs (mdbx-sys</a> ) z <code>mdbx</code> <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">nepodporuje windows</a>, preto som sa podujal na vytvorenie bal\xEDka s podporou windows.</p><p>Podpora ukladania vlastn\xFDch typov hrdze. Podporuje viacvl\xE1knov\xFD pr\xEDstup.</p><p>Datab\xE1zu mo\u017Eno definova\u0165 v module pomocou <code>lazy_static</code> a potom ju jednoducho zavies\u0165 a pou\u017E\xEDva\u0165 pomocou nie\u010Doho ako :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
</code></pre></div><h2 id="co-je-libmdbx" tabindex="-1"><a class="header-anchor" href="#co-je-libmdbx" aria-hidden="true">#</a> \u010Co je libmdbx?</h2><p><a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">mdbx</a> je sekund\xE1rna datab\xE1za zalo\u017Een\xE1 na lmdb, ktorej autorom je rusk\xFD <a href="https://vk.com/erthink" target="_blank" rel="noopener noreferrer">\u041B\u0435\u043E\u043D\u0438\u0434 \u042E\u0440\u044C\u0435\u0432 (Leonid Juriev)</a>.</p><p><a href="https://en.wikipedia.org/wiki/Lightning_Memory-Mapped_Database" target="_blank" rel="noopener noreferrer">lmdb</a> je superr\xFDchla vstavan\xE1 datab\xE1za k\u013E\xFA\u010D-hodnota.</p><p>Fulltextov\xFD vyh\u013Ead\xE1va\u010D <a href="https://docs.meilisearch.com/reference/under_the_hood/storage.html#measured-disk-usage" target="_blank" rel="noopener noreferrer">MeiliSearch</a> je zalo\u017Een\xFD na lmdb.</p><p><a href="https://docs.nvidia.com/deeplearning/dali/user-guide/docs/examples/general/data_loading/dataloading_lmdb.html" target="_blank" rel="noopener noreferrer">R\xE1mec pre hlbok\xE9 u\u010Denie caffe tie\u017E pou\u017E\xEDva lmdb ako d\xE1tov\xE9 \xFAlo\u017Eisko</a>.</p><p><a href="https://github.com/erthink/libmdbx#added-features" target="_blank" rel="noopener noreferrer">mdbx je o 30 % r\xFDchlej\u0161\xED ako lmdb v benchmarku ioarena na testovanie vstavan\xE9ho v\xFDkonu</a>.</p><p><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-1.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-3.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-4.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-5.png" alt=""></p><p>Z\xE1rove\u0148 mdbx <a href="https://github.com/erthink/libmdbx#improvements-beyond-lmdb" target="_blank" rel="noopener noreferrer">zlep\u0161uje mnoh\xE9 nedostatky</a> lmdb, tak\u017Ee Erigon (klient novej gener\xE1cie etherea) ned\xE1vno pre\u0161iel z LMDB na MDBX <sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>.</p><h2 id="vyukove-programy" tabindex="-1"><a class="header-anchor" href="#vyukove-programy" aria-hidden="true">#</a> V\xFDukov\xE9 programy</h2><h3 id="ako-spustit-priklad" tabindex="-1"><a class="header-anchor" href="#ako-spustit-priklad" aria-hidden="true">#</a> Ako spusti\u0165 pr\xEDklad</h3><p>Najprv klonujte k\xF3dov\xFA z\xE1klad\u0148u <code>git clone git@github.com:rmw-lib/mdbx.git --depth=1 &amp;&amp; cd mdbx</code></p><p>Potom spustite str\xE1nku <code>cargo run --example 01</code> a spust\xED sa <code>examples/01.rs</code></p><p>Ak ide o v\xE1\u0161 vlastn\xFD projekt, najprv ho spustite:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>cargo install cargo-edit
cargo add mdbx lazy_static ctor paste
</code></pre></div><h3 id="priklad-1-pisanie-set-key-val-a-citanie-get-key" tabindex="-1"><a class="header-anchor" href="#priklad-1-pisanie-set-key-val-a-citanie-get-key" aria-hidden="true">#</a> Pr\xEDklad 1 : P\xEDsanie <code>set(key,val)</code> a \u010D\xEDtanie <code>.get(key)</code></h3><p>Pozrime sa na jednoduch\xFD <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/01.rs" target="_blank" rel="noopener noreferrer">pr\xEDklad/01.rs</a></p><h4 id="kod" tabindex="-1"><a class="header-anchor" href="#kod" aria-hidden="true">#</a> K\xF3d</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // N\xE1zov premennej datab\xE1zy Env
  Test // Test datab\xE1zy
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xFDpis \u010D\xEDsla verzie libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Viacvl\xE1knov\xE9 \u010D\xEDtanie a z\xE1pis
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
</code></pre></div><h4 id="spustite-vystup" tabindex="-1"><a class="header-anchor" href="#spustite-vystup" aria-hidden="true">#</a> Spustite v\xFDstup</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/01.mdb
mdbx version https://github.com/erthink/libmdbx/releases/tag/v0.11.2
test1 get Ok(Some(Bin([6])))
[6]
</code></pre></div><h4 id="popis-kodu" tabindex="-1"><a class="header-anchor" href="#popis-kodu" aria-hidden="true">#</a> Popis k\xF3du</h4><h5 id="env-rw-definovanie-databazy" tabindex="-1"><a class="header-anchor" href="#env-rw-definovanie-databazy" aria-hidden="true">#</a> <code>env_rw!</code> Definovanie datab\xE1zy</h5><p>K\xF3d za\u010D\xEDna makrom env_rw, ktor\xE9 m\xE1 4 parametre.</p><ol><li><p>N\xE1zov premennej prostredia datab\xE1zy</p></li><li><p>Vracia objekt, <a href="https://docs.rs/mdbx/latest/src/mdbx/env.rs.html#27-35" target="_blank" rel="noopener noreferrer">mdbx:: env:: Config</a>.</p></li></ol><p>Pou\u017Eijeme predvolen\xFA konfigur\xE1ciu, preto\u017Ee <code>Env</code> implementuje <code>From&lt;Into&lt;PathBuf&gt;&gt;</code>, tak\u017Ee n\xE1m posta\u010D\xED cesta k datab\xE1ze <code>into()</code> a predvolen\xE1 konfigur\xE1cia je nasledovn\xE1.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
MDBX // N\xE1zov premennej datab\xE1zy Env
Test // Test datab\xE1zy
}

fn main() -&gt; Result&lt;()&gt; {
// V\xFDpis \u010D\xEDsla verzie libmdbx
unsafe {
  println!(
    &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
    mdbx_version.major, mdbx_version.minor, mdbx_version.release
  );
}

// Viacvl\xE1knov\xE9 \u010D\xEDtanie a z\xE1pis
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
</code></pre></div><p><code>max_db</code> Toto nastavenie je mo\u017En\xE9 resetova\u0165 pri ka\u017Edom <a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">otvoren\xED</a> datab\xE1zy, ale jeho pr\xEDli\u0161n\xE9 nastavenie ovplyvn\xED v\xFDkon, nastavte ho len pod\u013Ea potreby.</p><p>V\xFDznam ostatn\xFDch parametrov n\xE1jdete v <a href="https://erthink.github.io/libmdbx/group__c__opening.html#ga9138119a904355d245777c4119534061" target="_blank" rel="noopener noreferrer">dokument\xE1cii k libmdbx</a>.</p><ol start="3"><li><p>N\xE1zov makra transakcie \u010D\xEDtania datab\xE1zy, predvolen\xE1 hodnota je <code>r</code></p></li><li><p>N\xE1zov makra transakcie z\xE1pisu do datab\xE1zy, predvolen\xE1 hodnota je <code>w</code></p></li></ol><p>Parametre 3 a 4 m\xF4\u017Eete vynecha\u0165, aby sa pou\u017Eili predvolen\xE9 hodnoty.</p><h5 id="rozsirenie-makier" tabindex="-1"><a class="header-anchor" href="#rozsirenie-makier" aria-hidden="true">#</a> Roz\u0161\xEDrenie makier</h5><p>Ak chcete vidie\u0165, \u010Do rob\xED magick\xE9 makro, m\xF4\u017Eete na jeho rozbalenie pou\u017Ei\u0165 makro <code>cargo expand --example 01</code>, ktor\xE9 je potrebn\xE9 najprv nain\u0161talova\u0165. <code>cargo install cargo-expand</code></p><p>Sn\xEDmka obrazovky s roz\u0161\xEDren\xFDm k\xF3dom je uveden\xE1 ni\u017E\u0161ie.</p><p><img src="//irmw.gumlet.io/PDzEtT.png" alt="PDzEtT"></p><h5 id="anyhow-a-lazy-static" tabindex="-1"><a class="header-anchor" href="#anyhow-a-lazy-static" aria-hidden="true">#</a> anyhow a lazy_static</h5><p>Na roz\u0161\xEDrenej sn\xEDmke obrazovky vid\xEDte, \u017Ee sa pou\u017E\xEDvaj\xFA adresy <code>lazy_static</code> a <code>anyhow</code>.</p><p><a href="https://rustmagazine.github.io/rust_magazine_2021/chapter_2/rust_error_handle.html#thiserror--anyhow" target="_blank" rel="noopener noreferrer">anyhow</a> je kni\u017Enica na spracovanie ch\xFDb pre rust.</p><p><a href="https://juejin.cn/post/7007336922817232927" target="_blank" rel="noopener noreferrer">lazy_static</a> je statick\xE1 premenn\xE1 s odlo\u017Eenou inicializ\xE1ciou.</p><p>Tieto dve kni\u017Enice s\xFA ve\u013Emi \u010Dast\xE9 a nebudem sa nimi zaobera\u0165.</p><h5 id="makro-mdbx" tabindex="-1"><a class="header-anchor" href="#makro-mdbx" aria-hidden="true">#</a> Makro mdbx!</h5><p><a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html" target="_blank" rel="noopener noreferrer"><code>mdbx!</code></a> je <a href="https://mp.weixin.qq.com/s/YT_HNFDCQ_IyocvBkRNJnA" target="_blank" rel="noopener noreferrer">makro proced\xFAry</a>.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // N\xE1zov premennej datab\xE1zy Env
  Test // Test datab\xE1zy
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xFDpis \u010D\xEDsla verzie libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Viacvl\xE1knov\xE9 \u010D\xEDtanie a z\xE1pis
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
 MDBX // N\xE1zov premennej datab\xE1zy Env
 Test // Test datab\xE1zy
}
</code></pre></div><p>Prv\xFD riadok je n\xE1zov premennej prostredia datab\xE1zy</p><p>Druh\xFD riadok je n\xE1zov datab\xE1zy</p><p>M\xF4\u017Ee existova\u0165 viac ako jedna datab\xE1za, jeden riadok pre ka\u017Ed\xFA</p><h5 id="vlakna-a-transakcie" tabindex="-1"><a class="header-anchor" href="#vlakna-a-transakcie" aria-hidden="true">#</a> Vl\xE1kna a transakcie</h5><p>Vy\u0161\u0161ie uveden\xFD k\xF3d demon\u0161truje viacvl\xE1knov\xE9 \u010D\xEDtanie a z\xE1pis.</p><p>Je d\xF4le\u017Eit\xE9 si uvedomi\u0165, \u017Ee <strong>v jednom vl\xE1kne</strong> m\xF4\u017Ee by\u0165 v danom \u010Dase otvoren\xE1 <strong>len jedna transakcia, ak je vo vl\xE1kne otvoren\xFDch viac transakci\xED, program sa zr\xFAti</strong>.</p><p>Transakcia sa vykon\xE1 na konci rozsahu.</p><h5 id="citanie-a-zapis-binarnych-udajov" tabindex="-1"><a class="header-anchor" href="#citanie-a-zapis-binarnych-udajov" aria-hidden="true">#</a> \u010C\xEDtanie a z\xE1pis bin\xE1rnych \xFAdajov</h5><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // N\xE1zov premennej datab\xE1zy Env
  Test // Test datab\xE1zy
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xFDpis \u010D\xEDsla verzie libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Viacvl\xE1knov\xE9 \u010D\xEDtanie a z\xE1pis
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
 MDBX // N\xE1zov premennej datab\xE1zy Env
 Test // Test datab\xE1zy
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
</code></pre></div><p><code>set</code> je z\xE1pis, <code>get</code> je \u010D\xEDtanie a ka\u017Ed\xFD objekt, ktor\xFD implementuje <a href="https://doc.rust-lang.org/std/convert/trait.AsRef.html" target="_blank" rel="noopener noreferrer"><code>AsRef&lt;[u8]&gt;</code></a> objekt mo\u017Eno zap\xEDsa\u0165 do datab\xE1zy.</p><p><code>get</code> Vznik\xE1 <code>Ok(Some(Bin([6])))</code>, ktor\xFD sa d\xE1 premeni\u0165 na <code>&amp;[u8]</code>.</p><h3 id="priklad-2-datove-typy-priznaky-databazy-mazanie-prechadzanie" tabindex="-1"><a class="header-anchor" href="#priklad-2-datove-typy-priznaky-databazy-mazanie-prechadzanie" aria-hidden="true">#</a> Pr\xEDklad 2: D\xE1tov\xE9 typy, pr\xEDznaky datab\xE1zy, mazanie, prech\xE1dzanie</h3><p>Pozrime sa na druh\xFD <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">pr\xEDklad/02.rs</a>:</p><p>V tomto pr\xEDklade sa vynech\xE1va <code>env_rw!</code> a tret\xED a \u0161tvrt\xFD argument ( <code>r</code>, <code>w</code>).</p><h4 id="kod-1" tabindex="-1"><a class="header-anchor" href="#kod-1" aria-hidden="true">#</a> K\xF3d</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // N\xE1zov premennej datab\xE1zy Env
  Test // Test datab\xE1zy
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xFDpis \u010D\xEDsla verzie libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Viacvl\xE1knov\xE9 \u010D\xEDtanie a z\xE1pis
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
 MDBX // N\xE1zov premennej datab\xE1zy Env
 Test // Test datab\xE1zy
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
  MDBX // N\xE1zvy premenn\xFDch pre datab\xE1zu ENV
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
  // R\xFDchly z\xE1pis
  w!(Test1.set [2, 3],[4, 5]);

  // R\xFDchle \u010D\xEDtanie
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

  // Viacn\xE1sobn\xE9 oper\xE1cie na viacer\xFDch datab\xE1zach v r\xE1mci jednej transakcie
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

    // Transakcia bude viazan\xE1 na konci rozsahu
  }

  Ok(())
}
</code></pre></div><h4 id="spustite-vystup-1" tabindex="-1"><a class="header-anchor" href="#spustite-vystup-1" aria-hidden="true">#</a> Spustite v\xFDstup</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/02.mdb

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
</code></pre></div><h4 id="rychle-citanie-a-pisanie" tabindex="-1"><a class="header-anchor" href="#rychle-citanie-a-pisanie" aria-hidden="true">#</a> R\xFDchle \u010D\xEDtanie a p\xEDsanie</h4><p>Ak chceme jednoducho pre\u010D\xEDta\u0165 alebo zap\xEDsa\u0165 jeden riadok \xFAdajov, m\xF4\u017Eeme pou\u017Ei\u0165 syntaktick\xFD cukor makra.</p><p>\u010C\xEDtanie \xFAdajov</p><div class="language-text ext-text"><pre class="language-text"><code>r!(Test1.get [2, 3])
</code></pre></div><p>Z\xE1pis \xFAdajov</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // N\xE1zov premennej datab\xE1zy Env
  Test // Test datab\xE1zy
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xFDpis \u010D\xEDsla verzie libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Viacvl\xE1knov\xE9 \u010D\xEDtanie a z\xE1pis
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
 MDBX // N\xE1zov premennej datab\xE1zy Env
 Test // Test datab\xE1zy
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
  MDBX // N\xE1zvy premenn\xFDch pre datab\xE1zu ENV
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
  // R\xFDchly z\xE1pis
  w!(Test1.set [2, 3],[4, 5]);

  // R\xFDchle \u010D\xEDtanie
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

  // Viacn\xE1sobn\xE9 oper\xE1cie na viacer\xFDch datab\xE1zach v r\xE1mci jednej transakcie
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

    // Transakcia bude viazan\xE1 na konci rozsahu
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
</code></pre></div><p>V\u0161etko v jednom riadku, ako je nap\xEDsan\xE9 v <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">pr\xEDklade/02.rs.</a></p><h4 id="typy-udajov" tabindex="-1"><a class="header-anchor" href="#typy-udajov" aria-hidden="true">#</a> Typy \xFAdajov</h4><p>V s\xFAbore examples/02. <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">rs</a> vyzer\xE1 defin\xEDcia datab\xE1zy takto :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // N\xE1zov premennej datab\xE1zy Env
  Test // Test datab\xE1zy
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xFDpis \u010D\xEDsla verzie libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Viacvl\xE1knov\xE9 \u010D\xEDtanie a z\xE1pis
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
 MDBX // N\xE1zov premennej datab\xE1zy Env
 Test // Test datab\xE1zy
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
  MDBX // N\xE1zvy premenn\xFDch pre datab\xE1zu ENV
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
  // R\xFDchly z\xE1pis
  w!(Test1.set [2, 3],[4, 5]);

  // R\xFDchle \u010D\xEDtanie
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

  // Viacn\xE1sobn\xE9 oper\xE1cie na viacer\xFDch datab\xE1zach v r\xE1mci jednej transakcie
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

    // Transakcia bude viazan\xE1 na konci rozsahu
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
</code></pre></div><p>kde <code>key</code> a <code>val</code> definuj\xFA d\xE1tov\xE9 typy pre k\u013E\xFA\u010De a hodnoty.</p><p>Ak sa pok\xFAsite zap\xEDsa\u0165 d\xE1tov\xFD typ, ktor\xFD nezodpoved\xE1 definovan\xE9mu, zobraz\xED sa chyba, ako je zn\xE1zornen\xE9 na nasleduj\xFAcom obr\xE1zku :</p><p><img src="//irmw.gumlet.io/4rFTC6.png" alt=""></p><p>Predvolen\xFD typ \xFAdajov je <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Bin.html" target="_blank" rel="noopener noreferrer"><code>Bin</code></a> , mo\u017Eno zap\xEDsa\u0165 ak\xE9ko\u013Evek \xFAdaje, ktor\xE9 implementuj\xFA <code>AsRef&lt;[u8]&gt;</code>.</p><p>Ak je k\u013E\xFA\u010Dom alebo hodnotou re\u0165azec <code>utf8</code>, d\xE1tov\xFD typ m\xF4\u017Ee by\u0165 nastaven\xFD na <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Str.html" target="_blank" rel="noopener noreferrer"><code>Str</code></a> .</p><p><a href="https://doc.rust-lang.org/std/ops/trait.Deref.html" target="_blank" rel="noopener noreferrer">Odcitovanie</a> <code>Str</code> vr\xE1ti re\u0165azec, podobne ako <code>let k:&amp;str = &amp;k;</code>.</p><p>Okrem toho <code>Str</code> implementuje aj <a href="https://doc.rust-lang.org/std/fmt/trait.Display.html" target="_blank" rel="noopener noreferrer"><code>std::fmt::Display</code></a> , <code>println!(&quot;{}&quot;,k)</code> vyp\xED\u0161e \u010Ditate\u013En\xFD re\u0165azec.</p><h5 id="prednastavene-typy-udajov" tabindex="-1"><a class="header-anchor" href="#prednastavene-typy-udajov" aria-hidden="true">#</a> Prednastaven\xE9 typy \xFAdajov</h5><p>Okrem <code>Str</code> a <code>Bin</code> obsahuje wrapper aj podporu d\xE1t <a href="https://docs.rs/mdbx/latest/src/mdbx/type.rs.html#48" target="_blank" rel="noopener noreferrer">usize, u128, u64, u32, u16, u8, isize, i128, i64, i32, i16, i8, f32, f64</a>.</p><h4 id="priznaky-databazy" tabindex="-1"><a class="header-anchor" href="#priznaky-databazy" aria-hidden="true">#</a> Pr\xEDznaky datab\xE1zy</h4><p>Pr\xEDznaky datab\xE1zy pridan\xE9 k \xFAdajom v s\xFAbore <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a> si m\xF4\u017Eete pozrie\u0165 na adrese <code>Test4</code>. <code>flag DUPSORT</code></p><p>Datab\xE1za libmdbx m\xE1 nieko\u013Eko pr\xEDznakov ( <a href="https://erthink.github.io/libmdbx/group__c__dbi.html#gafe3bddb297b3ab0d828a487c5726f76a" target="_blank" rel="noopener noreferrer"><code>MDBX_db_flags_t</code></a> ), ktor\xE9 mo\u017Eno nastavi\u0165.</p><ul><li>REVERSEKEY pou\u017E\xEDva pre k\u013E\xFA\u010De reverzn\xE9 porovn\xE1vanie re\u0165azcov. (u\u017Eito\u010Dn\xE9 pri pou\u017E\xEDvan\xED mal\xFDch \u010D\xEDsel s koncov\xFDm k\xF3dom ako k\u013E\xFA\u010Dov)</li><li>DUPSORT pou\u017E\xEDva zoraden\xE9 duplik\xE1ty, t. j. umo\u017E\u0148uje viacero hodn\xF4t pre jeden k\u013E\xFA\u010D.</li><li>INTEGERKEY Nat\xEDvny \u010D\xEDseln\xFD k\u013E\xFA\u010D uint32_t alebo uint64_t zoraden\xFD v bajtoch. k\u013E\xFA\u010De musia ma\u0165 rovnak\xFA ve\u013Ekos\u0165 a musia by\u0165 zarovnan\xE9, ke\u010F sa odovzd\xE1vaj\xFA ako argument.</li><li>DUPFIXED Ve\u013Ekos\u0165 d\xE1tov\xFDch hodn\xF4t mus\xED by\u0165 rovnak\xE1, ak sa pou\u017Eije DUPSORT (umo\u017E\u0148uje r\xFDchle spo\u010D\xEDtanie po\u010Dtu hodn\xF4t).</li><li>Pre INTEGERDUP sa vy\u017Eaduje DUPSORT a DUPFIXED; hodnoty s\xFA cel\xE9 \u010D\xEDsla (podobne ako pri INTEGERKEY). V\u0161etky hodnoty \xFAdajov musia ma\u0165 rovnak\xFA ve\u013Ekos\u0165 a musia by\u0165 zarovnan\xE9, ke\u010F sa odovzd\xE1vaj\xFA ako parametre.</li><li>REVERSEDUP pou\u017E\xEDva DUPSORT; pre hodnoty \xFAdajov sa pou\u017E\xEDva reverzn\xE9 porovn\xE1vanie re\u0165azcov.</li><li>CREATE vytvor\xED DB, ak neexistuje (pridan\xE1 v predvolenom nastaven\xED).</li><li>DB_ACCEDE Otvor\xED existuj\xFAcu \u010Diastkov\xFA datab\xE1zu vytvoren\xFA pomocou pr\xEDznaku unknown.<br> Tento pr\xEDznak DB_ACCEDE je ur\u010Den\xFD na otvorenie existuj\xFAcich \u010Diastkov\xFDch datab\xE1z vytvoren\xFDch s nezn\xE1mymi pr\xEDznakmi (REVERSEKEY, DUPSORT, INTEGERKEY, DUPFIXED, INTEGERDUP a REVERSEDUP).<br> V tomto pr\xEDpade subdatab\xE1za nevr\xE1ti chybu INCOMPATIBLE, ale otvor\xED sa s pr\xEDznakmi pou\u017Eit\xFDmi na jej vytvorenie a aplik\xE1cia potom m\xF4\u017Ee ur\u010Di\u0165 skuto\u010Dn\xE9 pr\xEDznaky pomocou funkcie mdbx_dbi_flags().</li></ul><h5 id="dupsort-jednemu-klucu-zodpoveda-viac-ako-jedna-hodnota" tabindex="-1"><a class="header-anchor" href="#dupsort-jednemu-klucu-zodpoveda-viac-ako-jedna-hodnota" aria-hidden="true">#</a> DUPSORT : jedn\xE9mu k\u013E\xFA\u010Du zodpoved\xE1 viac ako jedna hodnota</h5><p><code>DUPSORT</code>znamen\xE1, \u017Ee k\u013E\xFA\u010Du m\xF4\u017Ee zodpoveda\u0165 viac ako jedna hodnota.</p><p>Ak chcete nastavi\u0165 viacero pr\xEDznakov, nap\xED\u0161te nasledovne <code>flag DUPSORT | DUPFIXED</code></p><h5 id="dup-key-iterator-ktory-vrati-vsetky-hodnoty-zodpovedajuce-klucu" tabindex="-1"><a class="header-anchor" href="#dup-key-iterator-ktory-vrati-vsetky-hodnoty-zodpovedajuce-klucu" aria-hidden="true">#</a> <code>.dup(key)</code> iter\xE1tor, ktor\xFD vr\xE1ti v\u0161etky hodnoty zodpovedaj\xFAce k\u013E\xFA\u010Du</h5><p>T\xE1to funkcia je k dispoz\xEDcii len pre datab\xE1zy ozna\u010Den\xE9 <code>DUPSORT</code>, kde m\xF4\u017Ee k\u013E\xFA\u010Du zodpoveda\u0165 viac ako jedna hodnota.</p><p>V pr\xEDpade datab\xE1z <code>DUPSORT</code> vr\xE1ti <code>get</code> iba prv\xFA hodnotu tohto k\u013E\xFA\u010Da. Ak chcete z\xEDska\u0165 v\u0161etky hodnoty, pou\u017Eite <code>dup</code>.</p><h5 id="predvolene-automaticky-pridavane-priznaky-databazy" tabindex="-1"><a class="header-anchor" href="#predvolene-automaticky-pridavane-priznaky-databazy" aria-hidden="true">#</a> Predvolen\xE9 automaticky prid\xE1van\xE9 pr\xEDznaky datab\xE1zy</h5><p>Ak je typ \xFAdajov <code>u32</code> / <code>u64</code> / <code>usize</code>, pr\xEDznak datab\xE1zy sa prid\xE1 automaticky. <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#105" target="_blank" rel="noopener noreferrer"><code>INTEGERKEY</code></a> .</p><p>Na po\u010D\xEDta\u010Doch s mal\xFDm koncov\xFDm k\xF3dovan\xEDm sa automaticky prid\xE1vaj\xFA \u010Fal\u0161ie \u010D\xEDseln\xE9 typy <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#108" target="_blank" rel="noopener noreferrer"><code>REVERSEKEY</code></a> Pr\xEDznak datab\xE1zy sa automaticky prid\xE1, ak je typ \xFAdajov / / .</p><h4 id="odstranenie-udajov" tabindex="-1"><a class="header-anchor" href="#odstranenie-udajov" aria-hidden="true">#</a> Odstr\xE1nenie \xFAdajov</h4><h5 id="del-key-odstranenie-kluca" tabindex="-1"><a class="header-anchor" href="#del-key-odstranenie-kluca" aria-hidden="true">#</a> <code>.del(key)</code> Odstr\xE1nenie k\u013E\xFA\u010Da</h5><p><code>.del(val)</code> Odstr\xE1ni hodnotu zodpovedaj\xFAcu k\u013E\xFA\u010Du.</p><p>Ak m\xE1 datab\xE1za pr\xEDznak <code>DUPSORT</code>, v\u0161etky hodnoty pod t\xFDmto k\u013E\xFA\u010Dom bud\xFA vymazan\xE9.</p><p>Vr\xE1ti <code>true</code>, ak s\xFA nejak\xE9 \xFAdaje vymazan\xE9, a <code>false</code>, ak nie s\xFA.</p><h5 id="del-val-key-val-odstranenie-presnej-zhody" tabindex="-1"><a class="header-anchor" href="#del-val-key-val-odstranenie-presnej-zhody" aria-hidden="true">#</a> <code>.del_val(key,val)</code> Odstr\xE1nenie presnej zhody</h5><p><code>.del_val(key,val)</code> Odstr\xE1ni dvojice k\u013E\xFA\u010D-hodnota, ktor\xE9 presne zodpovedaj\xFA vstupn\xFDm parametrom.</p><p>Vr\xE1ti <code>true</code>, ak s\xFA nejak\xE9 \xFAdaje vymazan\xE9, a <code>false</code>, ak nie s\xFA.</p><h4 id="prechod" tabindex="-1"><a class="header-anchor" href="#prechod" aria-hidden="true">#</a> Prechod</h4><h5 id="sekvencne-prechadzanie" tabindex="-1"><a class="header-anchor" href="#sekvencne-prechadzanie" aria-hidden="true">#</a> sekven\u010Dn\xE9 prech\xE1dzanie</h5><p>Z d\xF4vodu implement\xE1cie <a href="https://doc.rust-lang.org/std/iter/trait.IntoIterator.html" target="_blank" rel="noopener noreferrer"><code>std::iter::IntoIterator</code></a> . m\xF4\u017Eete prech\xE1dza\u0165 priamo takto :</p><p><code>for (k, v) in test1</code></p><h5 id="rev-prechadzanie-v-opacnom-poradi" tabindex="-1"><a class="header-anchor" href="#rev-prechadzanie-v-opacnom-poradi" aria-hidden="true">#</a> <code>.rev()</code> Prech\xE1dzanie v opa\u010Dnom porad\xED</h5><p><code>for (k, v) in test4.rev()</code></p><h5 id="triedenie" tabindex="-1"><a class="header-anchor" href="#triedenie" aria-hidden="true">#</a> Triedenie</h5><p>K\u013E\xFA\u010De libmdbx s\xFA zoraden\xE9 v <a href="https://zh.wikipedia.org/wiki/%E5%AD%97%E5%85%B8%E5%BA%8F" target="_blank" rel="noopener noreferrer">slovn\xEDkovom porad\xED</a>.</p><ul><li><p>Pre \u010D\xEDsla bez znamienka</p><p>s\xFA zoraden\xE9 od najmen\u0161ieho po najv\xE4\u010D\u0161\xED, preto\u017Ee pr\xEDznaky datab\xE1zy sa prid\xE1vaj\xFA automaticky ( <code>u32</code>/ <code>u64</code>/ <code>usize</code> sa prid\xE1vaj\xFA k <code>INTEGERKEY</code>, ostatn\xE9 sa prid\xE1vaj\xFA k <code>REVERSEKEY</code> v z\xE1vislosti od strojov\xE9ho k\xF3du).</p></li><li><p>Pre \u010D\xEDsla so znamienkom</p><p>poradie je nasledovn\xE9: najprv 0, potom v\u0161etky kladn\xE9 \u010D\xEDsla od najmen\u0161ieho po najv\xE4\u010D\u0161ie a potom v\u0161etky z\xE1porn\xE9 \u010D\xEDsla od najmen\u0161ieho po najv\xE4\u010D\u0161ie.</p></li></ul><h3 id="intervalove-iteratory" tabindex="-1"><a class="header-anchor" href="#intervalove-iteratory" aria-hidden="true">#</a> Intervalov\xE9 iter\xE1tory</h3><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // N\xE1zov premennej datab\xE1zy Env
  Test // Test datab\xE1zy
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xFDpis \u010D\xEDsla verzie libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Viacvl\xE1knov\xE9 \u010D\xEDtanie a z\xE1pis
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
 MDBX // N\xE1zov premennej datab\xE1zy Env
 Test // Test datab\xE1zy
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
  MDBX // N\xE1zvy premenn\xFDch pre datab\xE1zu ENV
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
  // R\xFDchly z\xE1pis
  w!(Test1.set [2, 3],[4, 5]);

  // R\xFDchle \u010D\xEDtanie
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

  // Viacn\xE1sobn\xE9 oper\xE1cie na viacer\xFDch datab\xE1zach v r\xE1mci jednej transakcie
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

    // Transakcia bude viazan\xE1 na konci rozsahu
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
</code></pre></div><h4 id="spustite-vystup-2" tabindex="-1"><a class="header-anchor" href="#spustite-vystup-2" aria-hidden="true">#</a> Spustite v\xFDstup</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/range.mdb

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
</code></pre></div><h4 id="range-begin-end-intervalova-iteracia" tabindex="-1"><a class="header-anchor" href="#range-begin-end-intervalova-iteracia" aria-hidden="true">#</a> <code>.range(begin..end)</code> Intervalov\xE1 iter\xE1cia</h4><p>Pre \u010D\xEDsla je interval \u010D\xEDseln\xFD interval.</p><p>Pre bin\xE1rny interval sa d\xE1 zostroji\u0165 rovnak\xFD interval, napr.</p><div class="language-text ext-text"><pre class="language-text"><code>let begin : &amp;[u8] = &amp;[1,1];
for (k,v) in test0.range(begin..=&amp;[2]) {}
</code></pre></div><p>Ak je <code>begin</code> v\xE4\u010D\u0161ia ako <code>end</code>, bude sa iterova\u0165 dozadu.</p><p>Napr\xEDklad <code>test1.range(5..2)</code> vyp\xED\u0161e nasleduj\xFAci :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // N\xE1zov premennej datab\xE1zy Env
  Test // Test datab\xE1zy
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xFDpis \u010D\xEDsla verzie libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Viacvl\xE1knov\xE9 \u010D\xEDtanie a z\xE1pis
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
 MDBX // N\xE1zov premennej datab\xE1zy Env
 Test // Test datab\xE1zy
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
  MDBX // N\xE1zvy premenn\xFDch pre datab\xE1zu ENV
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
  // R\xFDchly z\xE1pis
  w!(Test1.set [2, 3],[4, 5]);

  // R\xFDchle \u010D\xEDtanie
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

  // Viacn\xE1sobn\xE9 oper\xE1cie na viacer\xFDch datab\xE1zach v r\xE1mci jednej transakcie
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

    // Transakcia bude viazan\xE1 na konci rozsahu
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
</code></pre></div><p>Intervalov\xE1 iter\xE1cia nie je podporovan\xE1 <a href="https://doc.rust-lang.org/std/ops/struct.RangeFull.html" target="_blank" rel="noopener noreferrer"><code>RangeFull</code></a> , t. j. pou\u017Eitie adresy <code>..</code>nie je podporovan\xE9, pou\u017Eite namiesto toho vy\u0161\u0161ie uveden\xFD sp\xF4sob <a href="#%E9%81%8D%E5%8E%86">prech\xE1dzania</a>.</p><h4 id="rev-range-invertovane-intervaly" tabindex="-1"><a class="header-anchor" href="#rev-range-invertovane-intervaly" aria-hidden="true">#</a> <code>.rev_range</code> Invertovan\xE9 intervaly</h4><p>Ak chcete z\xEDska\u0165 prevr\xE1ten\xFD interval, ktor\xFD je men\u0161\xED alebo rovn\xFD ur\u010Ditej hodnote, m\xF4\u017Eete postupova\u0165 takto</p><div class="language-text ext-text"><pre class="language-text"><code>test2.rev_range(2..)
</code></pre></div><p>V\xFDstupom bude</p><div class="language-text ext-text"><pre class="language-text"><code>(2, 4)
(1, 5)
(0, 0)
</code></pre></div><p>Pre invertovan\xFD interval nesmie by\u0165 nastaven\xE1 jedna z mo\u017Enost\xED <code>begin</code> alebo <code>end</code>; ak s\xFA toti\u017E nastaven\xE9 obe, m\xF4\u017Eete v\u017Edy pou\u017Ei\u0165 <code>range(end..begin)</code> na dosiahnutie rovnak\xE9ho efektu.</p><h3 id="prisposobenie-typov-udajov" tabindex="-1"><a class="header-anchor" href="#prisposobenie-typov-udajov" aria-hidden="true">#</a> Prisp\xF4sobenie typov \xFAdajov</h3><p>Uk\xE1\u017Ekov\xFD k\xF3d je k dispoz\xEDcii na adrese <a href="https://github.com/rmw-lib/mdbx-example/blob/master/01/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/01</a></p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // N\xE1zov premennej datab\xE1zy Env
  Test // Test datab\xE1zy
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xFDpis \u010D\xEDsla verzie libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Viacvl\xE1knov\xE9 \u010D\xEDtanie a z\xE1pis
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
 MDBX // N\xE1zov premennej datab\xE1zy Env
 Test // Test datab\xE1zy
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
  MDBX // N\xE1zvy premenn\xFDch pre datab\xE1zu ENV
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
  // R\xFDchly z\xE1pis
  w!(Test1.set [2, 3],[4, 5]);

  // R\xFDchle \u010D\xEDtanie
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

  // Viacn\xE1sobn\xE9 oper\xE1cie na viacer\xFDch datab\xE1zach v r\xE1mci jednej transakcie
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

    // Transakcia bude viazan\xE1 na konci rozsahu
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
</code></pre></div><p>V\xFDstup je nasledovn\xFD</p><div class="language-text ext-text"><pre class="language-text"><code>Some(City { name: &quot;BeiJing&quot;, lnglat: (11640, 3990) })
</code></pre></div><p>V pr\xEDklade vlastn\xE9ho typu pou\u017E\xEDvame <a href="https://github.com/koute/speedy" target="_blank" rel="noopener noreferrer"><code>speedy</code></a> vykona\u0165 serializ\xE1ciu <a href="https://github.com/djkoloski/rust_serialization_benchmark" target="_blank" rel="noopener noreferrer">( <code>speedy</code> performance review</a> ).</p><p>Implement\xE1cia vlastn\xE9ho typu <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.FromMdbx.html" target="_blank" rel="noopener noreferrer"><code>FromMdbx</code></a> a <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.ToAsRef.html" target="_blank" rel="noopener noreferrer"><code>ToAsRef</code></a> sa potom m\xF4\u017Ee ulo\u017Ei\u0165 na adrese <code>mdbx</code>.</p><p>Ak pou\u017E\xEDvate konkr\xE9tnu kni\u017Enicu na serializ\xE1ciu, m\xF4\u017Eete si prisp\xF4sobi\u0165 aj atrib\xFAtov\xE9 <a href="https://blog.logrocket.com/macros-in-rust-a-tutorial-with-examples/" target="_blank" rel="noopener noreferrer">makr\xE1,</a> aby ste proces zjednodu\u0161ili.</p><h4 id="zjednodusenie-vlastnych-typov-pomocou-atributovych-makier" tabindex="-1"><a class="header-anchor" href="#zjednodusenie-vlastnych-typov-pomocou-atributovych-makier" aria-hidden="true">#</a> Zjednodu\u0161enie vlastn\xFDch typov pomocou atrib\xFAtov\xFDch makier</h4><p>Implement\xE1cia atrib\xFAtov\xE9ho makra je jednoduch\xE1 ako <a href="https://crates.io/crates/mdbx_speedy" target="_blank" rel="noopener noreferrer"><code>mdbx_speedy</code></a> K\xF3d atrib\xFAtu makra je nasleduj\xFAci :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // N\xE1zov premennej datab\xE1zy Env
  Test // Test datab\xE1zy
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xFDpis \u010D\xEDsla verzie libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Viacvl\xE1knov\xE9 \u010D\xEDtanie a z\xE1pis
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
 MDBX // N\xE1zov premennej datab\xE1zy Env
 Test // Test datab\xE1zy
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
  MDBX // N\xE1zvy premenn\xFDch pre datab\xE1zu ENV
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
  // R\xFDchly z\xE1pis
  w!(Test1.set [2, 3],[4, 5]);

  // R\xFDchle \u010D\xEDtanie
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

  // Viacn\xE1sobn\xE9 oper\xE1cie na viacer\xFDch datab\xE1zach v r\xE1mci jednej transakcie
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

    // Transakcia bude viazan\xE1 na konci rozsahu
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
</code></pre></div><p>Za\u010Dnite s <code>cargo add mdbx-speedy</code>vo vlastnom projekte a potom si m\xF4\u017Eete r\xFDchlo prisp\xF4sobi\u0165 typ (pozri <a href="https://github.com/rmw-lib/mdbx-example/blob/master/02/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/02</a> pre demon\u0161tra\u010Dn\xFD k\xF3d).</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // N\xE1zov premennej datab\xE1zy Env
  Test // Test datab\xE1zy
}

fn main() -&gt; Result&lt;()&gt; {
  // V\xFDpis \u010D\xEDsla verzie libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Viacvl\xE1knov\xE9 \u010D\xEDtanie a z\xE1pis
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
 MDBX // N\xE1zov premennej datab\xE1zy Env
 Test // Test datab\xE1zy
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
  MDBX // N\xE1zvy premenn\xFDch pre datab\xE1zu ENV
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
  // R\xFDchly z\xE1pis
  w!(Test1.set [2, 3],[4, 5]);

  // R\xFDchle \u010D\xEDtanie
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

  // Viacn\xE1sobn\xE9 oper\xE1cie na viacer\xFDch datab\xE1zach v r\xE1mci jednej transakcie
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

    // Transakcia bude viazan\xE1 na konci rozsahu
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
</code></pre></div><p>Samozrejme, \u017Ee je st\xE1le nepr\xEDjemn\xE9 opakovane p\xEDsa\u0165 <code>#[derive(PartialEq, Debug, Readable, Writable, MdbxSpeedy)]</code>, tak\u017Ee m\xF4\u017Eete pou\u017Ei\u0165 <a href="https://docs.rs/derive-alias/0.1.0/derive_alias" target="_blank" rel="noopener noreferrer"><code>derive_alias</code></a> na \u010Fal\u0161ie zjednodu\u0161enie k\xF3du.</p><h2 id="poznamka-k-pouzivaniu" tabindex="-1"><a class="header-anchor" href="#poznamka-k-pouzivaniu" aria-hidden="true">#</a> Pozn\xE1mka k pou\u017E\xEDvaniu</h2><h3 id="dlzka-kluca" tabindex="-1"><a class="header-anchor" href="#dlzka-kluca" aria-hidden="true">#</a> D\u013A\u017Eka k\u013E\xFA\u010Da</h3><ul><li>Minim\xE1lna ve\u013Ekos\u0165 0, maxim\xE1lna \u2248 \xBD ve\u013Ekosti str\xE1nky (predvolen\xE1 maxim\xE1lna ve\u013Ekos\u0165 k\u013E\xFA\u010Da 4K je 2022 bajtov), nastaven\xE1 pri inicializ\xE1cii datab\xE1zy <code>pagesize</code> m\xF4\u017Ee by\u0165 nakonfigurovan\xE1 maxim\xE1lne na <code>65536</code>a mus\xED by\u0165 mocninou 2.</li></ul><h2 id="poznamky-pod-ciarou" tabindex="-1"><a class="header-anchor" href="#poznamky-pod-ciarou" aria-hidden="true">#</a> Pozn\xE1mky pod \u010Diarou</h2><p>Uv\xE1dzaj\xFA v\xFDhody prechodu z LMDB na MDBX.</p><blockquote><p>Spolo\u010Dnos\u0165 Erigon za\u010Dala s datab\xE1zov\xFDm backendom BoltDB, potom pridala podporu pre BadgerDB a nakoniec \xFAplne pre\u0161la na LMDB. v ur\u010Ditom momente sme narazili na probl\xE9my so stabilitou, ktor\xE9 boli sp\xF4soben\xE9 pou\u017E\xEDvan\xEDm LMDB a ktor\xE9 tvorcovia nepredpokladali. Odvtedy sme sa pozerali na dobre podporovan\xFD deriv\xE1t LMDB s n\xE1zvom MDBX a d\xFAfame, \u017Ee v bud\xFAcnosti vyu\u017Eijeme ich zlep\u0161enia stability a pr\xEDpadne budeme viac spolupracova\u0165. integr\xE1cia MDBX je teraz dokon\u010Den\xE1 a je \u010Das na \u010Fal\u0161ie testovanie a dokument\xE1ciu.</p><p>V\xFDhody prechodu z LMDB na MDBX.</p><ol><li><p>Rast &quot;priestoru (geometrie)&quot; datab\xE1zov\xFDch s\xFAborov funguje spr\xE1vne. Je to d\xF4le\u017Eit\xE9 najm\xE4 v syst\xE9me Windows. V LMDB je potrebn\xE9 raz vopred ur\u010Di\u0165 ve\u013Ekos\u0165 pam\xE4\u0165ovej mapy (v s\xFA\u010Dasnosti \u0161tandardne pou\u017E\xEDvame 2 TB) a ak datab\xE1zov\xFD s\xFAbor narastie nad tento limit, proces sa mus\xED re\u0161tartova\u0165. V syst\xE9me Windows by nastavenie ve\u013Ekosti mapy pam\xE4te na 2 TB sp\xF4sobilo, \u017Ee s\xFAbor datab\xE1zy by bol na za\u010Diatku ve\u013Ek\xFD 2 TB, \u010Do nie je ve\u013Emi vhodn\xE9. V syst\xE9me MDBX sa ve\u013Ekos\u0165 mapy pam\xE4te zv\xE4\u010D\u0161uje po 2 Gb. Znamen\xE1 to ob\u010Dasn\xE9 premapovanie, ale prin\xE1\u0161a to lep\u0161\xED pou\u017E\xEDvate\u013Esk\xFD z\xE1\u017Eitok.</p></li><li><p>MDBX m\xE1 pr\xEDsnej\u0161ie kontroly s\xFAbe\u017En\xE9ho pou\u017E\xEDvania spracovania transakci\xED a prekr\xFDvania transakci\xED \u010D\xEDtania a z\xE1pisu v tom istom vl\xE1kne vykon\xE1vania. To n\xE1m umo\u017E\u0148uje odhali\u0165 niektor\xE9 nezjavn\xE9 chyby a rob\xED spr\xE1vanie predv\xEDdate\u013Enej\u0161\xEDm.<br> Za viac ako 5 rokov (odkedy bol MDBX oddelen\xFD od LMDB) sa v \u0148om nahromadilo ve\u013Ek\xE9 mno\u017Estvo bezpe\u010Dnostn\xFDch opr\xE1v a opr\xE1v ch\xFDb, ktor\xE9 pod\u013Ea na\u0161ich vedomost\xED st\xE1le existuj\xFA v LMDB. Niektor\xE9 z nich sme objavili po\u010Das n\xE1\u0161ho testovania a spr\xE1vcovia MDBX ich vzali v\xE1\u017Ene a okam\u017Eite ich opravili.</p></li><li><p>Pokia\u013E ide o datab\xE1zy, ktor\xE9 neust\xE1le upravuj\xFA \xFAdaje, vytv\xE1raj\xFA pomerne ve\u013Ek\xE9 mno\u017Estvo regenerovate\u013En\xE9ho priestoru (v terminol\xF3gii LMDB zn\xE1meho aj ako &quot;freelist&quot;). Museli sme opravi\u0165 LMDB, aby sme odstr\xE1nili najz\xE1va\u017Enej\u0161ie nedostatky v zaobch\xE1dzan\xED s regenerovate\u013En\xFDm priestorom <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide" target="_blank" rel="noopener noreferrer">(anal\xFDza)</a>. MDBX venoval <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide%EF%BC%89%E3%80%82MDBX%E5%AF%B9%E5%8F%AF%E5%9B%9E%E6%94%B6%E7%A9%BA%E9%97%B4%E7%9A%84%E6%9C%89%E6%95%88%E5%A4%84%E7%90%86%E8%BF%9B%E8%A1%8C%E4%BA%86%E7%89%B9%E5%88%AB%E7%9A%84%E5%85%B3%E6%B3%A8%EF%BC%8C%E5%88%B0%E7%9B%AE%E5%89%8D%E4%B8%BA%E6%AD%A2%EF%BC%8C%E8%BF%98%E4%B8%8D%E9%9C%80%E8%A6%81%E6%89%93%E8%A1%A5%E4%B8%81%E3%80%82" target="_blank" rel="noopener noreferrer">osobitn\xFA pozornos\u0165 efekt\xEDvnemu zaobch\xE1dzaniu s regenerovate\u013En\xFDm priestorom a doteraz ho nebolo potrebn\xE9 opravova\u0165</a>.</p></li><li><p>Na z\xE1klade n\xE1\u0161ho testovania dosiahol MDBX pri na\u0161ich pracovn\xFDch za\u0165a\u017Eeniach o nie\u010Do lep\u0161ie v\xFDsledky.</p></li><li><p>MDBX odha\u013Euje viac intern\xFDch telemetrick\xFDch \xFAdajov - viac metr\xEDk o tom, \u010Do sa deje v datab\xE1ze. A tieto \xFAdaje m\xE1me v aplik\xE1cii Grafana - aby sme mohli lep\u0161ie rozhodova\u0165 o n\xE1vrhu aplik\xE1cie. Napr\xEDklad po \xFAplnom prechode na MDBX (odstr\xE1nenie podpory pre LMDB) zavedieme politiku &quot;commit half full transaction&quot;, aby sme zabr\xE1nili preplneniu/odplneniu diskov\xFDch kontaktov. To e\u0161te viac zjednodu\u0161\xED n\xE1\u0161 k\xF3d bez vplyvu na v\xFDkon.</p></li><li><p>MDBX podporuje re\u017Eim &quot;Exclusive open&quot; - pou\u017E\xEDvame ho pri migr\xE1cii datab\xE1z, aby sme zabr\xE1nili in\xFDm \u010D\xEDta\u010Dk\xE1m v pr\xEDstupe k datab\xE1ze po\u010Das procesu migr\xE1cie.</p></li></ol></blockquote><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p><a href="https://github.com/ledgerwatch/erigon/wiki/Criteria-for-transitioning-from-Alpha-to-Beta#switch-from-lmdb-to-mdbx" target="_blank" rel="noopener noreferrer">Erigon (nov\xE1 gener\xE1cia ethernetov\xE9ho klienta) ned\xE1vno pre\u0161iel z LMDB na MDBX</a>. <a href="#fnref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,160);function sn(on,rn){const e=u("RouterLink");return r(),i(l,null,[m,b,c,v,n("nav",g,[n("ul",null,[n("li",null,[a(e,{to:"#citaty"},{default:s(()=>[h]),_:1})]),n("li",null,[a(e,{to:"#co-je-libmdbx"},{default:s(()=>[_]),_:1})]),n("li",null,[a(e,{to:"#vyukove-programy"},{default:s(()=>[k]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#ako-spustit-priklad"},{default:s(()=>[f]),_:1})]),n("li",null,[a(e,{to:"#priklad-1-pisanie-set-key-val-a-citanie-get-key"},{default:s(()=>[y]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#kod"},{default:s(()=>[x]),_:1})]),n("li",null,[a(e,{to:"#spustite-vystup"},{default:s(()=>[q]),_:1})]),n("li",null,[a(e,{to:"#popis-kodu"},{default:s(()=>[z]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#env-rw-definovanie-databazy"},{default:s(()=>[D]),_:1})]),n("li",null,[a(e,{to:"#rozsirenie-makier"},{default:s(()=>[w]),_:1})]),n("li",null,[a(e,{to:"#anyhow-a-lazy-static"},{default:s(()=>[E]),_:1})]),n("li",null,[a(e,{to:"#makro-mdbx"},{default:s(()=>[T]),_:1})]),n("li",null,[a(e,{to:"#vlakna-a-transakcie"},{default:s(()=>[B]),_:1})]),n("li",null,[a(e,{to:"#citanie-a-zapis-binarnych-udajov"},{default:s(()=>[j]),_:1})])])])])]),n("li",null,[a(e,{to:"#priklad-2-datove-typy-priznaky-databazy-mazanie-prechadzanie"},{default:s(()=>[N]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#kod-1"},{default:s(()=>[M]),_:1})]),n("li",null,[a(e,{to:"#spustite-vystup-1"},{default:s(()=>[S]),_:1})]),n("li",null,[a(e,{to:"#rychle-citanie-a-pisanie"},{default:s(()=>[V]),_:1})]),n("li",null,[a(e,{to:"#typy-udajov"},{default:s(()=>[X]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#prednastavene-typy-udajov"},{default:s(()=>[R]),_:1})])])]),n("li",null,[a(e,{to:"#priznaky-databazy"},{default:s(()=>[O]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#dupsort-jednemu-klucu-zodpoveda-viac-ako-jedna-hodnota"},{default:s(()=>[C]),_:1})]),n("li",null,[a(e,{to:"#dup-key-iterator-ktory-vrati-vsetky-hodnoty-zodpovedajuce-klucu"},{default:s(()=>[P]),_:1})]),n("li",null,[a(e,{to:"#predvolene-automaticky-pridavane-priznaky-databazy"},{default:s(()=>[U]),_:1})])])]),n("li",null,[a(e,{to:"#odstranenie-udajov"},{default:s(()=>[A]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#del-key-odstranenie-kluca"},{default:s(()=>[I]),_:1})]),n("li",null,[a(e,{to:"#del-val-key-val-odstranenie-presnej-zhody"},{default:s(()=>[L]),_:1})])])]),n("li",null,[a(e,{to:"#prechod"},{default:s(()=>[F]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#sekvencne-prechadzanie"},{default:s(()=>[$]),_:1})]),n("li",null,[a(e,{to:"#rev-prechadzanie-v-opacnom-poradi"},{default:s(()=>[Y]),_:1})]),n("li",null,[a(e,{to:"#triedenie"},{default:s(()=>[G]),_:1})])])])])]),n("li",null,[a(e,{to:"#intervalove-iteratory"},{default:s(()=>[Z]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#spustite-vystup-2"},{default:s(()=>[H]),_:1})]),n("li",null,[a(e,{to:"#range-begin-end-intervalova-iteracia"},{default:s(()=>[K]),_:1})]),n("li",null,[a(e,{to:"#rev-range-invertovane-intervaly"},{default:s(()=>[W]),_:1})])])]),n("li",null,[a(e,{to:"#prisposobenie-typov-udajov"},{default:s(()=>[J]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#zjednodusenie-vlastnych-typov-pomocou-atributovych-makier"},{default:s(()=>[Q]),_:1})])])])])]),n("li",null,[a(e,{to:"#poznamka-k-pouzivaniu"},{default:s(()=>[nn]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#dlzka-kluca"},{default:s(()=>[tn]),_:1})])])]),n("li",null,[a(e,{to:"#poznamky-pod-ciarou"},{default:s(()=>[en]),_:1})])])]),an],64)}var un=o(p,[["render",sn],["__file","2021-12-21-mdbx.html.vue"]]);export{un as default};
