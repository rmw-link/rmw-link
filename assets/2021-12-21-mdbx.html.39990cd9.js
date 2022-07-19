import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as i,c as o,a as t,b as a,w as s,F as u,d as n,e as l,o as d}from"./app.87d927ab.js";const p={},m=t("h1",{id:"rusas-pakete-libmdbx",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#rusas-pakete-libmdbx","aria-hidden":"true"},"#"),n(" R\u016Bsas pakete libmdbx")],-1),b=t("p",null,[t("code",null,"rust"),n(" datu b\u0101zes "),t("a",{href:"https://github.com/erthink/libmdbx",target:"_blank",rel:"noopener noreferrer"},"libmdbx"),n(" ietin\u0113js.")],-1),g=t("hr",null,null,-1),c=t("p",null,"Katalogs :",-1),v={class:"table-of-contents"},k=n("Cit\u0101ti"),_=n("Kas ir libmdbx?"),h=n("M\u0101c\u012Bbu pam\u0101c\u012Bbas"),f=n("K\u0101 palaist piem\u0113ru"),x=n("Piem\u0113rs 1 : Rakst\u012B\u0161ana set(key,val) un las\u012B\u0161ana .get(key)"),q=n("Kods"),z=n("Palaist izejas"),D=n("Koda apraksts"),y=n("env_rw! Datu b\u0101zes defin\u0113\u0161ana"),w=n("Makro papla\u0161in\u0101\u0161an\u0101s"),E=n("anyhow un lazy_static"),B=n("Makro mdbx!"),T=n("Diegi un dar\u012Bjumi"),M=n("Bin\u0101ro datu las\u012B\u0161ana un rakst\u012B\u0161ana"),j=n("2. piem\u0113rs: datu tipi, datub\u0101zes karodzi\u0146i, dz\u0113\u0161ana, p\u0101rl\u016Bko\u0161ana"),N=n("Kods"),S=n("Palaist izejas"),X=n("\u0100tr\u0101 las\u012B\u0161ana un rakst\u012B\u0161ana"),V=n("Datu tipi"),R=n("Iepriek\u0161 iestat\u012Bti datu tipi"),O=n("Datub\u0101zes karodzi\u0146i"),C=n("DUPSORT : vienai atsl\u0113gai atbilst vair\u0101k nek\u0101 viena v\u0113rt\u012Bba"),I=n(".dup(key) iterators, kas atgrie\u017E visas v\u0113rt\u012Bbas, kuras atbilst atsl\u0113gai."),U=n("P\u0113c noklus\u0113juma autom\u0101tiski pievienoti datub\u0101zes karodzi\u0146a karodzi\u0146i"),A=n("Datu dz\u0113\u0161ana"),P=n(".del(key) Atsl\u0113gas dz\u0113\u0161ana"),L=n(".del_val(key,val) Prec\u012Bza atbilst\u012Bbas dz\u0113\u0161ana"),F=n("P\u0101rbrauk\u0161ana"),$=n("sec\u012Bga \u0161\u0137\u0113rso\u0161ana"),Y=n(".rev() Apgriezt\u0101s sec\u012Bbas \u0161\u0137\u0113rso\u0161ana"),K=n("\u0160\u0137iro\u0161ana"),G=n("Interv\u0101la iteratori"),H=n("Palaist izvades"),J=n(".range(begin..end) Interv\u0101la iter\u0101cija"),W=n(".rev_range Apv\u0113rstie interv\u0101li"),Z=n("Datu tipu piel\u0101go\u0161ana"),Q=n("Piel\u0101gotu tipu vienk\u0101r\u0161o\u0161ana ar atrib\u016Btu makroautom\u0101tiem"),tt=n("Piez\u012Bme par"),nt=n("Atsl\u0113gas garums"),et=n("Zemsv\u012Btras piez\u012Bmes"),at=l(`<hr><h2 id="citati" tabindex="-1"><a class="header-anchor" href="#citati" aria-hidden="true">#</a> Cit\u0101ti</h2><p>Rakstot <a href="https://rmw.link" target="_blank" rel="noopener noreferrer">rmw.link</a>, es jutu, ka man ir vajadz\u012Bga iegult\u0101 datub\u0101ze.</p><p>Sakar\u0101 ar t\u012Bkla caurlaides sp\u0113ju, kas saist\u012Bta ar bie\u017Eu ierakst\u012B\u0161anu, nolas\u012B\u0161anu un rakst\u012B\u0161anu, <code>sqlite3</code> bija p\u0101r\u0101k progres\u012Bvs, lai nodro\u0161in\u0101tu veiktsp\u0113ju.</p><p>T\u0101p\u0113c piem\u0113rot\u0101ka bija zem\u0101ka l\u012Bme\u0146a atsl\u0113gu-v\u0113rt\u012Bbu datub\u0101ze <a href="https://discourse.world/h/2020/06/05/Shine-and-poverty-key-value-database-LMDB-in-applications-for-iOS" target="_blank" rel="noopener noreferrer">(lmdb ir 10 reizes \u0101tr\u0101ka par sqlite</a> ).</p><p><img src="//irmw.gumlet.io/yxZV8x.jpg" alt=""></p><p>Galu gal\u0101 es izv\u0113l\u0113jos ma\u0123isko <code>lmdb</code> versiju - <code>mdbx</code>.</p><p>Pa\u0161laik eso\u0161\u0101 <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">mdbx-rs (mdbx-sys</a> ) pakete <code>rust</code> no <code>mdbx</code> <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">neatbalsta Windows</a>, t\u0101p\u0113c es uz\u0146\u0113mos izstr\u0101d\u0101t paketi ar Windows atbalstu.</p><p>Atbalsts piel\u0101gotu r\u016Bsas tipu glab\u0101\u0161anai. Atbalsta daudzpavedienu piek\u013Cuvi.</p><p>Datu b\u0101zi var defin\u0113t modul\u012B, izmantojot <code>lazy_static</code>, un p\u0113c tam vienk\u0101r\u0161i ieviest un izmantot, izmantojot, piem\u0113ram, :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
</code></pre></div><h2 id="kas-ir-libmdbx" tabindex="-1"><a class="header-anchor" href="#kas-ir-libmdbx" aria-hidden="true">#</a> Kas ir libmdbx?</h2><p><a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">mdbx</a> ir sekund\u0101ra datu b\u0101ze, kas balst\u012Bta uz lmdb, ko izveidojis krievu <a href="https://vk.com/erthink" target="_blank" rel="noopener noreferrer">leon\u012Bds Jurjevs (Leonid Yuriev)</a>.</p><p><a href="https://en.wikipedia.org/wiki/Lightning_Memory-Mapped_Database" target="_blank" rel="noopener noreferrer">lmdb</a> ir \u012Bpa\u0161i \u0101tra iegult\u0101 atsl\u0113gas-v\u0113rt\u012Bbas datub\u0101ze.</p><p>Pilntekstu mekl\u0113\u0161anas sist\u0113mas <a href="https://docs.meilisearch.com/reference/under_the_hood/storage.html#measured-disk-usage" target="_blank" rel="noopener noreferrer">MeiliSearch</a> pamat\u0101 ir lmdb.</p><p><a href="https://docs.nvidia.com/deeplearning/dali/user-guide/docs/examples/general/data_loading/dataloading_lmdb.html" target="_blank" rel="noopener noreferrer">Ar\u012B dzi\u013C\u0101s m\u0101c\u012B\u0161an\u0101s ietvarstrukt\u016Bra caffe izmanto lmdb k\u0101 datu kr\u0101tuvi</a>.</p><p><a href="https://github.com/erthink/libmdbx#added-features" target="_blank" rel="noopener noreferrer">mdbx ir par 30 % \u0101tr\u0101ks nek\u0101 lmdb iegulto veiktsp\u0113jas testa etalonm\u0113r\u012Bjum\u0101 ioarena</a>.</p><p><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-1.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-3.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-4.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-5.png" alt=""></p><p>Taj\u0101 pa\u0161\u0101 laik\u0101 mdbx <a href="https://github.com/erthink/libmdbx#improvements-beyond-lmdb" target="_blank" rel="noopener noreferrer">uzlabo daudzas</a> lmdb <a href="https://github.com/erthink/libmdbx#improvements-beyond-lmdb" target="_blank" rel="noopener noreferrer">nepiln\u012Bbas</a>, t\u0101p\u0113c Erigon (n\u0101kam\u0101s paaudzes ethereum klients) nesen p\u0101rg\u0101ja no LMDB uz MDBX <sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>.</p><h2 id="macibu-pamacibas" tabindex="-1"><a class="header-anchor" href="#macibu-pamacibas" aria-hidden="true">#</a> M\u0101c\u012Bbu pam\u0101c\u012Bbas</h2><h3 id="ka-palaist-piemeru" tabindex="-1"><a class="header-anchor" href="#ka-palaist-piemeru" aria-hidden="true">#</a> K\u0101 palaist piem\u0113ru</h3><p>Vispirms klon\u0113jiet kodu b\u0101zi <code>git clone git@github.com:rmw-lib/mdbx.git --depth=1 &amp;&amp; cd mdbx</code></p><p>P\u0113c tam palaidiet <code>cargo run --example 01</code>, un tas darbosies <code>examples/01.rs</code></p><p>Ja tas ir j\u016Bsu projekts, vispirms palaidiet to:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>cargo install cargo-edit
cargo add mdbx lazy_static ctor paste
</code></pre></div><h3 id="piemers-1-rakstisana-set-key-val-un-lasisana-get-key" tabindex="-1"><a class="header-anchor" href="#piemers-1-rakstisana-set-key-val-un-lasisana-get-key" aria-hidden="true">#</a> Piem\u0113rs 1 : Rakst\u012B\u0161ana <code>set(key,val)</code> un las\u012B\u0161ana <code>.get(key)</code></h3><p>Apl\u016Bkosim vienk\u0101r\u0161u <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/01.rs" target="_blank" rel="noopener noreferrer">piem\u0113ru/01.rs</a></p><h4 id="kods" tabindex="-1"><a class="header-anchor" href="#kods" aria-hidden="true">#</a> Kods</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Datub\u0101zes main\u012Bgais nosaukums Env
  Test // Datub\u0101zes tests
}

fn main() -&gt; Result&lt;()&gt; {
  // Izvadiet libmdbx versijas numuru
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Vair\u0101ku pavedienu las\u012B\u0161ana un rakst\u012B\u0161ana
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
</code></pre></div><h4 id="palaist-izejas" tabindex="-1"><a class="header-anchor" href="#palaist-izejas" aria-hidden="true">#</a> Palaist izejas</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/01.mdb
mdbx version https://github.com/erthink/libmdbx/releases/tag/v0.11.2
test1 get Ok(Some(Bin([6])))
[6]
</code></pre></div><h4 id="koda-apraksts" tabindex="-1"><a class="header-anchor" href="#koda-apraksts" aria-hidden="true">#</a> Koda apraksts</h4><h5 id="env-rw-datu-bazes-definesana" tabindex="-1"><a class="header-anchor" href="#env-rw-datu-bazes-definesana" aria-hidden="true">#</a> <code>env_rw!</code> Datu b\u0101zes defin\u0113\u0161ana</h5><p>Kods s\u0101kas ar makru env_rw, kuram ir 4 parametri.</p><ol><li><p>Datub\u0101zes vides main\u012Bgais nosaukums</p></li><li><p>Atgrie\u017E objektu, <a href="https://docs.rs/mdbx/latest/src/mdbx/env.rs.html#27-35" target="_blank" rel="noopener noreferrer">mdbx:: env:: Config</a>.</p></li></ol><p>M\u0113s izmantojam noklus\u0113juma konfigur\u0101ciju, jo <code>Env</code> implement\u0113 <code>From&lt;Into&lt;PathBuf&gt;&gt;</code>, t\u0101p\u0113c datu b\u0101zes ce\u013C\u0161 <code>into()</code> b\u016Bs piem\u0113rots, un noklus\u0113juma konfigur\u0101cija ir \u0161\u0101da.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
MDBX // Datub\u0101zes main\u012Bgais nosaukums Env
Test // Datub\u0101zes tests
}

fn main() -&gt; Result&lt;()&gt; {
// Izvadiet libmdbx versijas numuru
unsafe {
  println!(
    &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
    mdbx_version.major, mdbx_version.minor, mdbx_version.release
  );
}

// Vair\u0101ku pavedienu las\u012B\u0161ana un rakst\u012B\u0161ana
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
    sync_period : 65536, // 1/65536 sekundes da\u013C\u0101
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
</code></pre></div><p><code>max_db</code> \u0160o iestat\u012Bjumu var atiestat\u012Bt katru reizi, kad <a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">tiek</a> atv\u0113rta datub\u0101ze, ta\u010Du p\u0101r\u0101k liela iestat\u012B\u0161ana ietekm\u0113s veiktsp\u0113ju, t\u0101p\u0113c iestatiet to p\u0113c vajadz\u012Bbas.</p><p>P\u0101r\u0113jo parametru noz\u012Bmi skatiet <a href="https://erthink.github.io/libmdbx/group__c__opening.html#ga9138119a904355d245777c4119534061" target="_blank" rel="noopener noreferrer">libmdbx dokument\u0101cij\u0101</a>.</p><ol start="3"><li><p>Datu b\u0101zes nolas\u012B\u0161anas dar\u012Bjuma makro nosaukums, noklus\u0113juma v\u0113rt\u012Bba ir <code>r</code></p></li><li><p>Datu b\u0101zes rakst\u012B\u0161anas dar\u012Bjuma makro nosaukums, noklus\u0113juma v\u0113rt\u012Bba ir <code>w</code></p></li></ol><p>Parametrus 3 un 4 var izlaist, lai izmantotu noklus\u0113juma v\u0113rt\u012Bbas.</p><h5 id="makro-paplasinasanas" tabindex="-1"><a class="header-anchor" href="#makro-paplasinasanas" aria-hidden="true">#</a> Makro papla\u0161in\u0101\u0161an\u0101s</h5><p>Ja v\u0113laties redz\u0113t, ko dara makroatt\u0113ls, varat izmantot <code>cargo expand --example 01</code> makroatt\u0113lu, lai to papla\u0161in\u0101tu, kas vispirms ir j\u0101instal\u0113. <code>cargo install cargo-expand</code></p><p>Zem\u0101k ir par\u0101d\u012Bts izv\u0113rst\u0101 koda ekr\u0101n\u0161\u0101vi\u0146\u0161.</p><p><img src="//irmw.gumlet.io/PDzEtT.png" alt="PDzEtT"></p><h5 id="anyhow-un-lazy-static" tabindex="-1"><a class="header-anchor" href="#anyhow-un-lazy-static" aria-hidden="true">#</a> anyhow un lazy_static</h5><p>Papla\u0161in\u0101taj\u0101 ekr\u0101n\u0161\u0101vi\u0146\u0101 redzams, ka tiek izmantotas vietnes <code>lazy_static</code> un <code>anyhow</code>.</p><p><a href="https://rustmagazine.github.io/rust_magazine_2021/chapter_2/rust_error_handle.html#thiserror--anyhow" target="_blank" rel="noopener noreferrer">anyhow</a> ir r\u016Bsas k\u013C\u016Bdu apstr\u0101des bibliot\u0113ka.</p><p><a href="https://juejin.cn/post/7007336922817232927" target="_blank" rel="noopener noreferrer">lazy_static</a> ir statisks main\u012Bgais ar nov\u0113lotu inicializ\u0101ciju.</p><p>\u0160\u012Bs divas bibliot\u0113kas ir \u013Coti bie\u017Ei sastopamas, un es t\u0101m nepiev\u0113rs\u012B\u0161os.</p><h5 id="makro-mdbx" tabindex="-1"><a class="header-anchor" href="#makro-mdbx" aria-hidden="true">#</a> Makro mdbx!</h5><p><a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html" target="_blank" rel="noopener noreferrer"><code>mdbx!</code></a> ir <a href="https://mp.weixin.qq.com/s/YT_HNFDCQ_IyocvBkRNJnA" target="_blank" rel="noopener noreferrer">proced\u016Bras makro</a>.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Datub\u0101zes main\u012Bgais nosaukums Env
  Test // Datub\u0101zes tests
}

fn main() -&gt; Result&lt;()&gt; {
  // Izvadiet libmdbx versijas numuru
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Vair\u0101ku pavedienu las\u012B\u0161ana un rakst\u012B\u0161ana
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
      sync_period : 65536, // 1/65536 sekundes da\u013C\u0101
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
 MDBX // Datub\u0101zes main\u012Bgais nosaukums Env
 Test // Datub\u0101zes tests
}
</code></pre></div><p>Pirmaj\u0101 rind\u0101 ir datu b\u0101zes vides main\u012Bgais nosaukums.</p><p>Otraj\u0101 rind\u0101 ir nor\u0101d\u012Bts datub\u0101zes nosaukums</p><p>Datu b\u0101ze var b\u016Bt vair\u0101k nek\u0101 viena, katrai datu b\u0101zei var b\u016Bt viena rinda.</p><h5 id="diegi-un-darijumi" tabindex="-1"><a class="header-anchor" href="#diegi-un-darijumi" aria-hidden="true">#</a> Diegi un dar\u012Bjumi</h5><p>Iepriek\u0161 par\u0101d\u012Btaj\u0101 kod\u0101 ir demonstr\u0113ta vair\u0101ku pavedienu las\u012B\u0161ana un rakst\u012B\u0161ana.</p><p>Ir svar\u012Bgi atz\u012Bm\u0113t, ka <strong>vien\u0101 un taj\u0101 pa\u0161\u0101 pavedien\u0101 vienlaikus</strong> var b\u016Bt <strong>tikai viens dar\u012Bjums; ja pavedien\u0101 ir atv\u0113rts vair\u0101k nek\u0101 viens dar\u012Bjums, programma saboj\u0101s</strong>.</p><p>Dar\u012Bjums tiks veikts darb\u012Bbas jomas beig\u0101s.</p><h5 id="binaro-datu-lasisana-un-rakstisana" tabindex="-1"><a class="header-anchor" href="#binaro-datu-lasisana-un-rakstisana" aria-hidden="true">#</a> Bin\u0101ro datu las\u012B\u0161ana un rakst\u012B\u0161ana</h5><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Datub\u0101zes main\u012Bgais nosaukums Env
  Test // Datub\u0101zes tests
}

fn main() -&gt; Result&lt;()&gt; {
  // Izvadiet libmdbx versijas numuru
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Vair\u0101ku pavedienu las\u012B\u0161ana un rakst\u012B\u0161ana
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
      sync_period : 65536, // 1/65536 sekundes da\u013C\u0101
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
 MDBX // Datub\u0101zes main\u012Bgais nosaukums Env
 Test // Datub\u0101zes tests
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
</code></pre></div><p><code>set</code> ir rakst\u012B\u0161ana, <code>get</code> ir las\u012B\u0161ana, un jebkur\u0161 objekts, kas implement\u0113 <a href="https://doc.rust-lang.org/std/convert/trait.AsRef.html" target="_blank" rel="noopener noreferrer"><code>AsRef&lt;[u8]&gt;</code></a> objektu var ierakst\u012Bt datub\u0101z\u0113.</p><p><code>get</code> Izn\u0101k <code>Ok(Some(Bin([6])))</code>, ko var p\u0101rv\u0113rst <code>&amp;[u8]</code>.</p><h3 id="_2-piemers-datu-tipi-datubazes-karodzini-dzesana-parlukosana" tabindex="-1"><a class="header-anchor" href="#_2-piemers-datu-tipi-datubazes-karodzini-dzesana-parlukosana" aria-hidden="true">#</a> 2. piem\u0113rs: datu tipi, datub\u0101zes karodzi\u0146i, dz\u0113\u0161ana, p\u0101rl\u016Bko\u0161ana</h3><p>Apl\u016Bkosim otro <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">piem\u0113ru/02.rs</a>:</p><p>\u0160aj\u0101 piem\u0113r\u0101 <code>env_rw!</code> ir izlaists, un tre\u0161ais un ceturtais arguments ( <code>r</code>, <code>w</code>) ir izlaisti.</p><h4 id="kods-1" tabindex="-1"><a class="header-anchor" href="#kods-1" aria-hidden="true">#</a> Kods</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Datub\u0101zes main\u012Bgais nosaukums Env
  Test // Datub\u0101zes tests
}

fn main() -&gt; Result&lt;()&gt; {
  // Izvadiet libmdbx versijas numuru
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Vair\u0101ku pavedienu las\u012B\u0161ana un rakst\u012B\u0161ana
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
      sync_period : 65536, // 1/65536 sekundes da\u013C\u0101
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
 MDBX // Datub\u0101zes main\u012Bgais nosaukums Env
 Test // Datub\u0101zes tests
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
  MDBX // Main\u012Bgo lielumu nosaukumi datu b\u0101zei LVV
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
  // \u0100tra rakst\u012B\u0161ana
  w!(Test1.set [2, 3],[4, 5]);

  // \u0100tra las\u012B\u0161ana
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

  // Vair\u0101kas oper\u0101cijas vair\u0101k\u0101s datub\u0101z\u0113s vien\u0101 dar\u012Bjum\u0101
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

    // Dar\u012Bjums tiks veikts darb\u012Bbas jomas beig\u0101s.
  }

  Ok(())
}
</code></pre></div><h4 id="palaist-izejas-1" tabindex="-1"><a class="header-anchor" href="#palaist-izejas-1" aria-hidden="true">#</a> Palaist izejas</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/02.mdb

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
</code></pre></div><h4 id="atra-lasisana-un-rakstisana" tabindex="-1"><a class="header-anchor" href="#atra-lasisana-un-rakstisana" aria-hidden="true">#</a> \u0100tr\u0101 las\u012B\u0161ana un rakst\u012B\u0161ana</h4><p>Ja v\u0113lamies vienk\u0101r\u0161i nolas\u012Bt vai ierakst\u012Bt vienu datu rindu, varam izmantot makro makro sintaktisko cukuru.</p><p>Las\u012Bt datus</p><div class="language-text ext-text"><pre class="language-text"><code>r!(Test1.get [2, 3])
</code></pre></div><p>Datu rakst\u012B\u0161ana</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Datub\u0101zes main\u012Bgais nosaukums Env
  Test // Datub\u0101zes tests
}

fn main() -&gt; Result&lt;()&gt; {
  // Izvadiet libmdbx versijas numuru
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Vair\u0101ku pavedienu las\u012B\u0161ana un rakst\u012B\u0161ana
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
      sync_period : 65536, // 1/65536 sekundes da\u013C\u0101
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
 MDBX // Datub\u0101zes main\u012Bgais nosaukums Env
 Test // Datub\u0101zes tests
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
  MDBX // Main\u012Bgo lielumu nosaukumi datu b\u0101zei LVV
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
  // \u0100tra rakst\u012B\u0161ana
  w!(Test1.set [2, 3],[4, 5]);

  // \u0100tra las\u012B\u0161ana
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

  // Vair\u0101kas oper\u0101cijas vair\u0101k\u0101s datub\u0101z\u0113s vien\u0101 dar\u012Bjum\u0101
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

    // Dar\u012Bjums tiks veikts darb\u012Bbas jomas beig\u0101s.
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
</code></pre></div><p>Viss vien\u0101 rind\u0101, k\u0101 rakst\u012Bts <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs.</a></p><h4 id="datu-tipi" tabindex="-1"><a class="header-anchor" href="#datu-tipi" aria-hidden="true">#</a> Datu tipi</h4><p>Datub\u0101zes defin\u012Bcija vietn\u0113 examples/02. <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">rs</a> izskat\u0101s \u0161\u0101di :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Datub\u0101zes main\u012Bgais nosaukums Env
  Test // Datub\u0101zes tests
}

fn main() -&gt; Result&lt;()&gt; {
  // Izvadiet libmdbx versijas numuru
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Vair\u0101ku pavedienu las\u012B\u0161ana un rakst\u012B\u0161ana
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
      sync_period : 65536, // 1/65536 sekundes da\u013C\u0101
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
 MDBX // Datub\u0101zes main\u012Bgais nosaukums Env
 Test // Datub\u0101zes tests
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
  MDBX // Main\u012Bgo lielumu nosaukumi datu b\u0101zei LVV
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
  // \u0100tra rakst\u012B\u0161ana
  w!(Test1.set [2, 3],[4, 5]);

  // \u0100tra las\u012B\u0161ana
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

  // Vair\u0101kas oper\u0101cijas vair\u0101k\u0101s datub\u0101z\u0113s vien\u0101 dar\u012Bjum\u0101
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

    // Dar\u012Bjums tiks veikts darb\u012Bbas jomas beig\u0101s.
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
</code></pre></div><p>kur <code>key</code> un <code>val</code> defin\u0113 attiec\u012Bgi atsl\u0113gu un v\u0113rt\u012Bbu datu tipus.</p><p>Ja m\u0113\u0123in\u0101siet ierakst\u012Bt datu tipu, kas neatbilst defin\u0113tajam, tiks zi\u0146ots par k\u013C\u016Bdu, k\u0101 par\u0101d\u012Bts zem\u0101k redzamaj\u0101 ekr\u0101n\u0161\u0101vi\u0146\u0101 :</p><p><img src="//irmw.gumlet.io/4rFTC6.png" alt=""></p><p>Noklus\u0113juma datu tips ir <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Bin.html" target="_blank" rel="noopener noreferrer"><code>Bin</code></a> , var ierakst\u012Bt jebkurus datus, kas \u012Bsteno <code>AsRef&lt;[u8]&gt;</code>.</p><p>Ja atsl\u0113ga vai v\u0113rt\u012Bba ir <code>utf8</code> virkne, datu tipu var iestat\u012Bt uz <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Str.html" target="_blank" rel="noopener noreferrer"><code>Str</code></a> .</p><p><a href="https://doc.rust-lang.org/std/ops/trait.Deref.html" target="_blank" rel="noopener noreferrer">Atcit\u0113jot</a> <code>Str</code>, tiks atgriezta virkne, l\u012Bdz\u012Bgi k\u0101 <code>let k:&amp;str = &amp;k;</code>.</p><p>Turkl\u0101t vietn\u0113 <code>Str</code> ir ieviesti ar\u012B <a href="https://doc.rust-lang.org/std/fmt/trait.Display.html" target="_blank" rel="noopener noreferrer"><code>std::fmt::Display</code></a> , <code>println!(&quot;{}&quot;,k)</code> izvad\u012Bs las\u0101mu virkni.</p><h5 id="ieprieks-iestatiti-datu-tipi" tabindex="-1"><a class="header-anchor" href="#ieprieks-iestatiti-datu-tipi" aria-hidden="true">#</a> Iepriek\u0161 iestat\u012Bti datu tipi</h5><p>Papildus <code>Str</code> un <code>Bin</code> ietvarprogramm\u0101 ir ar\u012B <a href="https://docs.rs/mdbx/latest/src/mdbx/type.rs.html#48" target="_blank" rel="noopener noreferrer">usize, u128, u64, u32, u16, u8, isize, i128, i64, i32, i16, i8, f32, f64</a> datu atbalsts.</p><h4 id="datubazes-karodzini" tabindex="-1"><a class="header-anchor" href="#datubazes-karodzini" aria-hidden="true">#</a> Datub\u0101zes karodzi\u0146i</h4><p>Datub\u0101zes karodzi\u0146a karodzi\u0146us, kas pievienoti datiem vietn\u0113 <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a>, varat skat\u012Bt <code>Test4</code>. <code>flag DUPSORT</code></p><p>Libmdbx datub\u0101zei ir vair\u0101ki karodzi\u0146i ( <a href="https://erthink.github.io/libmdbx/group__c__dbi.html#gafe3bddb297b3ab0d828a487c5726f76a" target="_blank" rel="noopener noreferrer"><code>MDBX_db_flags_t</code></a> ), ko var iestat\u012Bt.</p><ul><li>REVERSEKEY atsl\u0113g\u0101m izmanto apgriezt\u0101s virknes sal\u012Bdzin\u0101\u0161anu. (noder\u012Bgi, ja k\u0101 atsl\u0113gas izmanto mazus ciparus ar gala kodiem).</li><li>DUPSORT izmanto sak\u0101rtotus dublik\u0101tus, t. i., pie\u013Cauj vair\u0101kas atsl\u0113gas v\u0113rt\u012Bbas.</li><li>INTEGERKEY Native byte-ordered numeric key uint32_t vai uint64_t. Atsl\u0113g\u0101m j\u0101b\u016Bt vien\u0101da lieluma un, nododot t\u0101s k\u0101 argumentus, j\u0101b\u016Bt izl\u012Bdzin\u0101t\u0101m.</li><li>DUPFIXED Datu v\u0113rt\u012Bbu lielumam j\u0101b\u016Bt vien\u0101dam, ja tiek izmantots DUPSORT (\u013Cauj \u0101tri saskait\u012Bt v\u0113rt\u012Bbu skaitu).</li><li>INTEGERDUP ir nepiecie\u0161amas DUPSORT un DUPFIXED; v\u0113rt\u012Bbas ir veseli skait\u013Ci (l\u012Bdz\u012Bgi k\u0101 INTEGERKEY). Vis\u0101m datu v\u0113rt\u012Bb\u0101m j\u0101b\u016Bt vien\u0101da lieluma, un, nododot t\u0101s k\u0101 parametrus, t\u0101m j\u0101b\u016Bt izl\u012Bdzin\u0101t\u0101m.</li><li>REVERSEDUP izmanto DUPSORT; datu v\u0113rt\u012Bb\u0101m tiek izmantots reversais virknes sal\u012Bdzin\u0101jums.</li><li>CREATE izveido DB, ja t\u0101 neeksist\u0113 (pievienota p\u0113c noklus\u0113juma).</li><li>DB_ACCEDE Atver eso\u0161u apak\u0161datub\u0101zi, kas izveidota, izmantojot karodzi\u0146u nezin\u0101ms.<br> \u0160is DB_ACCEDE karodzi\u0146\u0161 ir paredz\u0113ts, lai atv\u0113rtu eso\u0161\u0101s apak\u0161datub\u0101zes, kas izveidotas ar nezin\u0101miem karogiem (REVERSEKEY, DUPSORT, INTEGERKEY, DUPFIXED, INTEGERDUP un REVERSEDUP).<br> \u0160\u0101d\u0101 gad\u012Bjum\u0101 apak\u0161datub\u0101ze neatgriez\u012Bs INCOMPATIBLE k\u013C\u016Bdu, bet tiks atv\u0113rta ar t\u0101s izveido\u0161anai izmantotajiem karogiem, un lietojumprogramma p\u0113c tam var noteikt faktiskos karogus ar mdbx_dbi_flags().</li></ul><h5 id="dupsort-vienai-atslegai-atbilst-vairak-neka-viena-vertiba" tabindex="-1"><a class="header-anchor" href="#dupsort-vienai-atslegai-atbilst-vairak-neka-viena-vertiba" aria-hidden="true">#</a> DUPSORT : vienai atsl\u0113gai atbilst vair\u0101k nek\u0101 viena v\u0113rt\u012Bba</h5><p><code>DUPSORT</code>noz\u012Bm\u0113, ka atsl\u0113gai var atbilst vair\u0101k nek\u0101 viena v\u0113rt\u012Bba.</p><p>Ja v\u0113laties iestat\u012Bt vair\u0101kus karodzi\u0146us, rakstiet \u0161\u0101di. <code>flag DUPSORT | DUPFIXED</code></p><h5 id="dup-key-iterators-kas-atgriez-visas-vertibas-kuras-atbilst-atslegai" tabindex="-1"><a class="header-anchor" href="#dup-key-iterators-kas-atgriez-visas-vertibas-kuras-atbilst-atslegai" aria-hidden="true">#</a> <code>.dup(key)</code> iterators, kas atgrie\u017E visas v\u0113rt\u012Bbas, kuras atbilst atsl\u0113gai.</h5><p>\u0160\u012B funkcija ir pieejama tikai datub\u0101z\u0113m, kas atz\u012Bm\u0113tas ar <code>DUPSORT</code>, kur atsl\u0113gai var atbilst vair\u0101k nek\u0101 viena v\u0113rt\u012Bba.</p><p><code>DUPSORT</code> datub\u0101z\u0113m <code>get</code> atgrie\u017E tikai pirmo \u0161\u012Bs atsl\u0113gas v\u0113rt\u012Bbu. Lai ieg\u016Btu visas v\u0113rt\u012Bbas, izmantojiet <code>dup</code>.</p><h5 id="pec-noklusejuma-automatiski-pievienoti-datubazes-karodzina-karodzini" tabindex="-1"><a class="header-anchor" href="#pec-noklusejuma-automatiski-pievienoti-datubazes-karodzina-karodzini" aria-hidden="true">#</a> P\u0113c noklus\u0113juma autom\u0101tiski pievienoti datub\u0101zes karodzi\u0146a karodzi\u0146i</h5><p>Ja datu tips ir <code>u32</code> / <code>u64</code> / <code>usize</code>, datub\u0101zes karodzi\u0146\u0161 tiek pievienots autom\u0101tiski. <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#105" target="_blank" rel="noopener noreferrer"><code>INTEGERKEY</code></a> .</p><p>Ma\u0161\u012Bn\u0101s ar mazo galu kod\u0113\u0161anu citi ciparu tipi tiek pievienoti autom\u0101tiski. <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#108" target="_blank" rel="noopener noreferrer"><code>REVERSEKEY</code></a> Datub\u0101zes karodzi\u0146\u0161 tiek autom\u0101tiski pievienots, ja datu tips ir / / .</p><h4 id="datu-dzesana" tabindex="-1"><a class="header-anchor" href="#datu-dzesana" aria-hidden="true">#</a> Datu dz\u0113\u0161ana</h4><h5 id="del-key-atslegas-dzesana" tabindex="-1"><a class="header-anchor" href="#del-key-atslegas-dzesana" aria-hidden="true">#</a> <code>.del(key)</code> Atsl\u0113gas dz\u0113\u0161ana</h5><p><code>.del(val)</code> Dz\u0113\u0161 atsl\u0113gai atbilsto\u0161o v\u0113rt\u012Bbu.</p><p>Ja datub\u0101zei ir karodzi\u0146\u0161 <code>DUPSORT</code>, visas v\u0113rt\u012Bbas zem \u0161\u012Bs atsl\u0113gas tiks dz\u0113stas.</p><p>Atgrie\u017E <code>true</code>, ja ir dz\u0113sti dati, un <code>false</code>, ja nav dz\u0113sti dati.</p><h5 id="del-val-key-val-preciza-atbilstibas-dzesana" tabindex="-1"><a class="header-anchor" href="#del-val-key-val-preciza-atbilstibas-dzesana" aria-hidden="true">#</a> <code>.del_val(key,val)</code> Prec\u012Bza atbilst\u012Bbas dz\u0113\u0161ana</h5><p><code>.del_val(key,val)</code> Dz\u0113\u0161 atsl\u0113gu un v\u0113rt\u012Bbu p\u0101rus, kas prec\u012Bzi atbilst ievades parametriem.</p><p>Atgrie\u017E <code>true</code>, ja ir dz\u0113sti dati, un <code>false</code>, ja nav dz\u0113sti dati.</p><h4 id="parbrauksana" tabindex="-1"><a class="header-anchor" href="#parbrauksana" aria-hidden="true">#</a> P\u0101rbrauk\u0161ana</h4><h5 id="seciga-skersosana" tabindex="-1"><a class="header-anchor" href="#seciga-skersosana" aria-hidden="true">#</a> sec\u012Bga \u0161\u0137\u0113rso\u0161ana</h5><p>Sakar\u0101 ar ievie\u0161anu <a href="https://doc.rust-lang.org/std/iter/trait.IntoIterator.html" target="_blank" rel="noopener noreferrer"><code>std::iter::IntoIterator</code></a> . varat \u0161\u0137\u0113rsot tie\u0161i \u0161\u0101di:</p><p><code>for (k, v) in test1</code></p><h5 id="rev-apgrieztas-secibas-skersosana" tabindex="-1"><a class="header-anchor" href="#rev-apgrieztas-secibas-skersosana" aria-hidden="true">#</a> <code>.rev()</code> Apgriezt\u0101s sec\u012Bbas \u0161\u0137\u0113rso\u0161ana</h5><p><code>for (k, v) in test4.rev()</code></p><h5 id="skirosana" tabindex="-1"><a class="header-anchor" href="#skirosana" aria-hidden="true">#</a> \u0160\u0137iro\u0161ana</h5><p>Libmdbx atsl\u0113gas ir sak\u0101rtotas <a href="https://zh.wikipedia.org/wiki/%E5%AD%97%E5%85%B8%E5%BA%8F" target="_blank" rel="noopener noreferrer">v\u0101rdn\u012Bcas sec\u012Bb\u0101</a>.</p><ul><li><p>Nenoteiktiem skait\u013Ciem</p><p>ir sak\u0101rtoti no maz\u0101k\u0101 l\u012Bdz liel\u0101kajam, jo datub\u0101zes karodzi\u0146i tiek autom\u0101tiski pievienoti ( <code>u32</code>/ <code>u64</code>/ <code>usize</code> tiek pievienoti <code>INTEGERKEY</code>, citi tiek pievienoti <code>REVERSEKEY</code> atkar\u012Bb\u0101 no ma\u0161\u012Bnkoda).</p></li><li><p>Parakst\u012Btiem skait\u013Ciem</p><p>sec\u012Bba ir \u0161\u0101da: vispirms 0, tad visi pozit\u012Bvie skait\u013Ci no maz\u0101k\u0101 l\u012Bdz liel\u0101kajam, tad visi negat\u012Bvie skait\u013Ci no maz\u0101k\u0101 l\u012Bdz liel\u0101kajam.</p></li></ul><h3 id="intervala-iteratori" tabindex="-1"><a class="header-anchor" href="#intervala-iteratori" aria-hidden="true">#</a> Interv\u0101la iteratori</h3><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Datub\u0101zes main\u012Bgais nosaukums Env
  Test // Datub\u0101zes tests
}

fn main() -&gt; Result&lt;()&gt; {
  // Izvadiet libmdbx versijas numuru
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Vair\u0101ku pavedienu las\u012B\u0161ana un rakst\u012B\u0161ana
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
      sync_period : 65536, // 1/65536 sekundes da\u013C\u0101
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
 MDBX // Datub\u0101zes main\u012Bgais nosaukums Env
 Test // Datub\u0101zes tests
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
  MDBX // Main\u012Bgo lielumu nosaukumi datu b\u0101zei LVV
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
  // \u0100tra rakst\u012B\u0161ana
  w!(Test1.set [2, 3],[4, 5]);

  // \u0100tra las\u012B\u0161ana
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

  // Vair\u0101kas oper\u0101cijas vair\u0101k\u0101s datub\u0101z\u0113s vien\u0101 dar\u012Bjum\u0101
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

    // Dar\u012Bjums tiks veikts darb\u012Bbas jomas beig\u0101s.
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
</code></pre></div><h4 id="palaist-izvades" tabindex="-1"><a class="header-anchor" href="#palaist-izvades" aria-hidden="true">#</a> Palaist izvades</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/range.mdb

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
</code></pre></div><h4 id="range-begin-end-intervala-iteracija" tabindex="-1"><a class="header-anchor" href="#range-begin-end-intervala-iteracija" aria-hidden="true">#</a> <code>.range(begin..end)</code> Interv\u0101la iter\u0101cija</h4><p>Attiec\u012Bb\u0101 uz skait\u013Ciem interv\u0101ls ir skaitlisks interv\u0101ls.</p><p>Bin\u0101rajam skaitlim var izveidot t\u0101du pa\u0161u interv\u0101lu, piem\u0113ram.</p><div class="language-text ext-text"><pre class="language-text"><code>let begin : &amp;[u8] = &amp;[1,1];
for (k,v) in test0.range(begin..=&amp;[2]) {}
</code></pre></div><p>Ja <code>begin</code> ir liel\u0101ks par <code>end</code>, tiks iter\u0113ts atpaka\u013C.</p><p>Piem\u0113ram, <code>test1.range(5..2)</code> izvad\u012Bs \u0161\u0101du :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Datub\u0101zes main\u012Bgais nosaukums Env
  Test // Datub\u0101zes tests
}

fn main() -&gt; Result&lt;()&gt; {
  // Izvadiet libmdbx versijas numuru
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Vair\u0101ku pavedienu las\u012B\u0161ana un rakst\u012B\u0161ana
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
      sync_period : 65536, // 1/65536 sekundes da\u013C\u0101
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
 MDBX // Datub\u0101zes main\u012Bgais nosaukums Env
 Test // Datub\u0101zes tests
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
  MDBX // Main\u012Bgo lielumu nosaukumi datu b\u0101zei LVV
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
  // \u0100tra rakst\u012B\u0161ana
  w!(Test1.set [2, 3],[4, 5]);

  // \u0100tra las\u012B\u0161ana
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

  // Vair\u0101kas oper\u0101cijas vair\u0101k\u0101s datub\u0101z\u0113s vien\u0101 dar\u012Bjum\u0101
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

    // Dar\u012Bjums tiks veikts darb\u012Bbas jomas beig\u0101s.
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
</code></pre></div><p>Interv\u0101la iter\u0101cija netiek atbalst\u012Bta <a href="https://doc.rust-lang.org/std/ops/struct.RangeFull.html" target="_blank" rel="noopener noreferrer"><code>RangeFull</code></a> t. i., <code>..</code>izmanto\u0161ana nav atbalst\u012Bta, t\u0101 viet\u0101 izmantojiet iepriek\u0161 min\u0113to <a href="#%E9%81%8D%E5%8E%86">p\u0101rl\u016Bko\u0161anu</a>.</p><h4 id="rev-range-apverstie-intervali" tabindex="-1"><a class="header-anchor" href="#rev-range-apverstie-intervali" aria-hidden="true">#</a> <code>.rev_range</code> Apv\u0113rstie interv\u0101li</h4><p>Ja v\u0113laties ieg\u016Bt invert\u0113tu interv\u0101lu, kas ir maz\u0101ks vai vien\u0101ds ar v\u0113rt\u012Bbu, varat r\u012Bkoties \u0161\u0101di.</p><div class="language-text ext-text"><pre class="language-text"><code>test2.rev_range(2..)
</code></pre></div><p>Izvades rezult\u0101ts b\u016Bs \u0161\u0101ds.</p><div class="language-text ext-text"><pre class="language-text"><code>(2, 4)
(1, 5)
(0, 0)
</code></pre></div><p>Apv\u0113rstajam interv\u0101lam nedr\u012Bkst iestat\u012Bt vienu no <code>begin</code> vai <code>end</code>; jo, ja ir iestat\u012Bti abi, vienm\u0113r var izmantot <code>range(end..begin)</code>, lai sasniegtu t\u0101du pa\u0161u efektu.</p><h3 id="datu-tipu-pielagosana" tabindex="-1"><a class="header-anchor" href="#datu-tipu-pielagosana" aria-hidden="true">#</a> Datu tipu piel\u0101go\u0161ana</h3><p>Demo kods ir pieejams vietn\u0113 <a href="https://github.com/rmw-lib/mdbx-example/blob/master/01/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/01</a>.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Datub\u0101zes main\u012Bgais nosaukums Env
  Test // Datub\u0101zes tests
}

fn main() -&gt; Result&lt;()&gt; {
  // Izvadiet libmdbx versijas numuru
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Vair\u0101ku pavedienu las\u012B\u0161ana un rakst\u012B\u0161ana
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
      sync_period : 65536, // 1/65536 sekundes da\u013C\u0101
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
 MDBX // Datub\u0101zes main\u012Bgais nosaukums Env
 Test // Datub\u0101zes tests
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
  MDBX // Main\u012Bgo lielumu nosaukumi datu b\u0101zei LVV
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
  // \u0100tra rakst\u012B\u0161ana
  w!(Test1.set [2, 3],[4, 5]);

  // \u0100tra las\u012B\u0161ana
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

  // Vair\u0101kas oper\u0101cijas vair\u0101k\u0101s datub\u0101z\u0113s vien\u0101 dar\u012Bjum\u0101
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

    // Dar\u012Bjums tiks veikts darb\u012Bbas jomas beig\u0101s.
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
</code></pre></div><p>Izvades rezult\u0101ts ir \u0161\u0101ds.</p><div class="language-text ext-text"><pre class="language-text"><code>Some(City { name: &quot;BeiJing&quot;, lnglat: (11640, 3990) })
</code></pre></div><p>Piel\u0101got\u0101 tipa piem\u0113r\u0101 m\u0113s izmantojam <a href="https://github.com/koute/speedy" target="_blank" rel="noopener noreferrer"><code>speedy</code></a> veikt serializ\u0101ciju <a href="https://github.com/djkoloski/rust_serialization_benchmark" target="_blank" rel="noopener noreferrer">( <code>speedy</code> veiktsp\u0113jas p\u0101rskat\u012B\u0161ana)</a>.</p><p>Piel\u0101gota tipa ievie\u0161ana <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.FromMdbx.html" target="_blank" rel="noopener noreferrer"><code>FromMdbx</code></a> un <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.ToAsRef.html" target="_blank" rel="noopener noreferrer"><code>ToAsRef</code></a> p\u0113c tam var uzglab\u0101t vietn\u0113 <code>mdbx</code>.</p><p>Ja izmantojat konkr\u0113tu serializ\u0101cijas bibliot\u0113ku, varat ar\u012B piel\u0101got atrib\u016Btu <a href="https://blog.logrocket.com/macros-in-rust-a-tutorial-with-examples/" target="_blank" rel="noopener noreferrer">makro</a>, lai vienk\u0101r\u0161otu procesu.</p><h4 id="pielagotu-tipu-vienkarsosana-ar-atributu-makroautomatiem" tabindex="-1"><a class="header-anchor" href="#pielagotu-tipu-vienkarsosana-ar-atributu-makroautomatiem" aria-hidden="true">#</a> Piel\u0101gotu tipu vienk\u0101r\u0161o\u0161ana ar atrib\u016Btu makroautom\u0101tiem</h4><p>Ieviest atrib\u016Btu makro ir tik vienk\u0101r\u0161i k\u0101 <a href="https://crates.io/crates/mdbx_speedy" target="_blank" rel="noopener noreferrer"><code>mdbx_speedy</code></a> Atrib\u016Bta makro kods ir \u0161\u0101ds :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Datub\u0101zes main\u012Bgais nosaukums Env
  Test // Datub\u0101zes tests
}

fn main() -&gt; Result&lt;()&gt; {
  // Izvadiet libmdbx versijas numuru
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Vair\u0101ku pavedienu las\u012B\u0161ana un rakst\u012B\u0161ana
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
      sync_period : 65536, // 1/65536 sekundes da\u013C\u0101
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
 MDBX // Datub\u0101zes main\u012Bgais nosaukums Env
 Test // Datub\u0101zes tests
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
  MDBX // Main\u012Bgo lielumu nosaukumi datu b\u0101zei LVV
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
  // \u0100tra rakst\u012B\u0161ana
  w!(Test1.set [2, 3],[4, 5]);

  // \u0100tra las\u012B\u0161ana
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

  // Vair\u0101kas oper\u0101cijas vair\u0101k\u0101s datub\u0101z\u0113s vien\u0101 dar\u012Bjum\u0101
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

    // Dar\u012Bjums tiks veikts darb\u012Bbas jomas beig\u0101s.
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
</code></pre></div><p>S\u0101ciet ar <code>cargo add mdbx-speedy</code>sav\u0101 projekt\u0101, un p\u0113c tam varat \u0101tri piel\u0101got tipu (skatiet <a href="https://github.com/rmw-lib/mdbx-example/blob/master/02/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/02</a> demo kodu).</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Datub\u0101zes main\u012Bgais nosaukums Env
  Test // Datub\u0101zes tests
}

fn main() -&gt; Result&lt;()&gt; {
  // Izvadiet libmdbx versijas numuru
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Vair\u0101ku pavedienu las\u012B\u0161ana un rakst\u012B\u0161ana
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
      sync_period : 65536, // 1/65536 sekundes da\u013C\u0101
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
 MDBX // Datub\u0101zes main\u012Bgais nosaukums Env
 Test // Datub\u0101zes tests
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
  MDBX // Main\u012Bgo lielumu nosaukumi datu b\u0101zei LVV
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
  // \u0100tra rakst\u012B\u0161ana
  w!(Test1.set [2, 3],[4, 5]);

  // \u0100tra las\u012B\u0161ana
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

  // Vair\u0101kas oper\u0101cijas vair\u0101k\u0101s datub\u0101z\u0113s vien\u0101 dar\u012Bjum\u0101
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

    // Dar\u012Bjums tiks veikts darb\u012Bbas jomas beig\u0101s.
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
</code></pre></div><p>Protams, joproj\u0101m ir kaitino\u0161i rakst\u012Bt <code>#[derive(PartialEq, Debug, Readable, Writable, MdbxSpeedy)]</code> atk\u0101rtoti, t\u0101p\u0113c varat izmantot. <a href="https://docs.rs/derive-alias/0.1.0/derive_alias" target="_blank" rel="noopener noreferrer"><code>derive_alias</code></a> lai v\u0113l vair\u0101k vienk\u0101r\u0161otu kodu.</p><h2 id="piezime-par" tabindex="-1"><a class="header-anchor" href="#piezime-par" aria-hidden="true">#</a> Piez\u012Bme par</h2><h3 id="atslegas-garums" tabindex="-1"><a class="header-anchor" href="#atslegas-garums" aria-hidden="true">#</a> Atsl\u0113gas garums</h3><ul><li>Minim\u0101lais 0, maksim\u0101lais \u2248 \xBD lapas izm\u0113rs (noklus\u0113juma 4K lapas atsl\u0113gas maksim\u0101lais izm\u0113rs ir 2022 baiti), iestat\u012Bts, inici\u0113jot datub\u0101zi <code>pagesize</code> var konfigur\u0113t ne vair\u0101k k\u0101 <code>65536</code>, un tam j\u0101b\u016Bt 2 reizin\u0101jumam.</li></ul><h2 id="zemsvitras-piezimes" tabindex="-1"><a class="header-anchor" href="#zemsvitras-piezimes" aria-hidden="true">#</a> Zemsv\u012Btras piez\u012Bmes</h2><p>Vi\u0146i min priek\u0161roc\u012Bbas, ko sniedz p\u0101reja no LMDB uz MDBX.</p><blockquote><p>Erigon s\u0101ka ar BoltDB datub\u0101zes backend, p\u0113c tam pievienoja BadgerDB atbalstu un visbeidzot piln\u012Bb\u0101 p\u0101rg\u0101ja uz LMDB. k\u0101d\u0101 br\u012Bd\u012B m\u0113s sask\u0101r\u0101mies ar stabilit\u0101tes probl\u0113m\u0101m, ko izrais\u012Bja LMDB izmanto\u0161ana, bet ko nebija paredz\u0113ju\u0161i t\u0101s rad\u012Bt\u0101ji. Kop\u0161 t\u0101 laika m\u0113s esam apskat\u012Bju\u0161i labi atbalst\u012Btu LMDB atvasin\u0101jumu ar nosaukumu MDBX un ceram, ka izmantosim vi\u0146u stabilit\u0101tes uzlabojumus un, iesp\u0113jams, n\u0101kotn\u0113 vair\u0101k sadarbosimies. tagad MDBX integr\u0101cija ir pabeigta, un ir pien\u0101cis laiks turpm\u0101kai test\u0113\u0161anai un dokument\u0113\u0161anai.</p><p>Priek\u0161roc\u012Bbas, ko sniedz p\u0101reja no LMDB uz MDBX.</p><ol><li><p>Datu b\u0101zu dat\u0146u failu aug\u0161anas &quot;telpa (\u0123eometrija)&quot; darbojas pareizi. Tas ir svar\u012Bgi, \u012Bpa\u0161i oper\u0113t\u0101jsist\u0113m\u0101 Windows. LMDB atmi\u0146as kartes lielums ir j\u0101nor\u0101da vienreiz iepriek\u0161 (pa\u0161laik p\u0113c noklus\u0113juma tiek izmantoti 2 Tb), un, ja datub\u0101zes fails pieaug virs \u0161\u012Bs robe\u017Eas, process ir j\u0101restart\u0113. Oper\u0113t\u0101jsist\u0113m\u0101 Windows, iestatot atmi\u0146as kartes lielumu 2 Tb, datub\u0101zes datnes fails s\u0101kum\u0101 b\u016Btu 2 Tb liels, kas nav \u012Bpa\u0161i \u0113rti. MDBX atmi\u0146as kartes lielums tiek palielin\u0101ts pa 2Gb. Tas noz\u012Bm\u0113, ka laiku pa laikam ir j\u0101veic p\u0101rrakst\u012B\u0161an\u0101s, ta\u010Du tas nodro\u0161ina lab\u0101ku lietot\u0101ja pieredzi.</p></li><li><p>MDBX ir stingr\u0101kas p\u0101rbaudes attiec\u012Bb\u0101 uz vienlaic\u012Bgu dar\u012Bjumu apstr\u0101des izmanto\u0161anu un las\u012B\u0161anas un rakst\u012B\u0161anas dar\u012Bjumu p\u0101rkl\u0101\u0161anos vien\u0101 izpildes pavedien\u0101. Tas \u013Cauj mums paman\u012Bt da\u017Eas ac\u012Bmredzamas k\u013C\u016Bdas un padara uzved\u012Bbu paredzam\u0101ku.<br> Vair\u0101k nek\u0101 5 gadu laik\u0101 (kop\u0161 t\u0101 atdal\u012Bta no LMDB) MDBX ir uzkr\u0101ts liels skaits dro\u0161\u012Bbas labojumu un k\u013C\u016Bdu labojumu, kas, cik mums zin\u0101ms, joproj\u0101m past\u0101v LMDB. Da\u017Eas no t\u0101m tika atkl\u0101tas m\u016Bsu test\u0113\u0161anas laik\u0101, un MDBX uztur\u0113t\u0101ji t\u0101s uztv\u0113ra nopietni un nekav\u0113joties nov\u0113rsa.</p></li><li><p>Kad runa ir par datub\u0101z\u0113m, kas past\u0101v\u012Bgi maina datus, t\u0101s rada pietiekami daudz atg\u016Bstam\u0101s vietas (LMDB terminolo\u0123ij\u0101 to sauc ar\u012B par &quot;br\u012Bvo sarakstu&quot;). Mums ir n\u0101cies labot LMDB, lai nov\u0113rstu visnopietn\u0101kos tr\u016Bkumus atpras\u0101m\u0101s vietas apstr\u0101d\u0113 <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide" target="_blank" rel="noopener noreferrer">(anal\u012Bze</a> ). MDBX ir <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide%EF%BC%89%E3%80%82MDBX%E5%AF%B9%E5%8F%AF%E5%9B%9E%E6%94%B6%E7%A9%BA%E9%97%B4%E7%9A%84%E6%9C%89%E6%95%88%E5%A4%84%E7%90%86%E8%BF%9B%E8%A1%8C%E4%BA%86%E7%89%B9%E5%88%AB%E7%9A%84%E5%85%B3%E6%B3%A8%EF%BC%8C%E5%88%B0%E7%9B%AE%E5%89%8D%E4%B8%BA%E6%AD%A2%EF%BC%8C%E8%BF%98%E4%B8%8D%E9%9C%80%E8%A6%81%E6%89%93%E8%A1%A5%E4%B8%81%E3%80%82" target="_blank" rel="noopener noreferrer">piev\u0113rsis \u012Bpa\u0161u uzman\u012Bbu efekt\u012Bvai atpras\u0101m\u0101s vietas apstr\u0101dei, un l\u012Bdz \u0161im to nav bijis nepiecie\u0161ams labot</a>.</p></li><li><p>Pamatojoties uz m\u016Bsu test\u0113\u0161anas rezult\u0101tiem, MDBX m\u016Bsu darba slodz\u0113s darboj\u0101s nedaudz lab\u0101k.</p></li><li><p>MDBX atkl\u0101j vair\u0101k iek\u0161\u0113jo telemetrijas datu - vair\u0101k metrikas par to, kas notiek datub\u0101z\u0113. Un mums \u0161ie dati ir pieejami Grafana - lai pie\u0146emtu lab\u0101kus l\u0113mumus par lietojumprogrammu dizainu. Piem\u0113ram, p\u0113c piln\u012Bgas p\u0101rejas uz MDBX (likvid\u0113jot LMDB atbalstu) m\u0113s ievies\u012Bsim &quot;da\u013C\u0113ji pilna dar\u012Bjuma&quot; politiku, lai izvair\u012Btos no diska kontaktu p\u0101rslodzes/p\u0101rslodzes. Tas v\u0113l vair\u0101k vienk\u0101r\u0161os m\u016Bsu kodu, neietekm\u0113jot veiktsp\u0113ju.</p></li><li><p>MDBX atbalsta &quot;Exclusive open&quot; re\u017E\u012Bmu - m\u0113s to izmantojam datub\u0101zes migr\u0101cij\u0101, lai nov\u0113rstu citu las\u012Bt\u0101ju piek\u013Cuvi datub\u0101zei migr\u0101cijas procesa laik\u0101.</p></li></ol></blockquote><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p><a href="https://github.com/ledgerwatch/erigon/wiki/Criteria-for-transitioning-from-Alpha-to-Beta#switch-from-lmdb-to-mdbx" target="_blank" rel="noopener noreferrer">Erigon (n\u0101kam\u0101s paaudzes Ethernet klients) nesen p\u0101rg\u0101ja no LMDB uz MDBX</a>. <a href="#fnref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,160);function st(rt,it){const e=i("RouterLink");return d(),o(u,null,[m,b,g,c,t("nav",v,[t("ul",null,[t("li",null,[a(e,{to:"#citati"},{default:s(()=>[k]),_:1})]),t("li",null,[a(e,{to:"#kas-ir-libmdbx"},{default:s(()=>[_]),_:1})]),t("li",null,[a(e,{to:"#macibu-pamacibas"},{default:s(()=>[h]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#ka-palaist-piemeru"},{default:s(()=>[f]),_:1})]),t("li",null,[a(e,{to:"#piemers-1-rakstisana-set-key-val-un-lasisana-get-key"},{default:s(()=>[x]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#kods"},{default:s(()=>[q]),_:1})]),t("li",null,[a(e,{to:"#palaist-izejas"},{default:s(()=>[z]),_:1})]),t("li",null,[a(e,{to:"#koda-apraksts"},{default:s(()=>[D]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#env-rw-datu-bazes-definesana"},{default:s(()=>[y]),_:1})]),t("li",null,[a(e,{to:"#makro-paplasinasanas"},{default:s(()=>[w]),_:1})]),t("li",null,[a(e,{to:"#anyhow-un-lazy-static"},{default:s(()=>[E]),_:1})]),t("li",null,[a(e,{to:"#makro-mdbx"},{default:s(()=>[B]),_:1})]),t("li",null,[a(e,{to:"#diegi-un-darijumi"},{default:s(()=>[T]),_:1})]),t("li",null,[a(e,{to:"#binaro-datu-lasisana-un-rakstisana"},{default:s(()=>[M]),_:1})])])])])]),t("li",null,[a(e,{to:"#_2-piemers-datu-tipi-datubazes-karodzini-dzesana-parlukosana"},{default:s(()=>[j]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#kods-1"},{default:s(()=>[N]),_:1})]),t("li",null,[a(e,{to:"#palaist-izejas-1"},{default:s(()=>[S]),_:1})]),t("li",null,[a(e,{to:"#atra-lasisana-un-rakstisana"},{default:s(()=>[X]),_:1})]),t("li",null,[a(e,{to:"#datu-tipi"},{default:s(()=>[V]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#ieprieks-iestatiti-datu-tipi"},{default:s(()=>[R]),_:1})])])]),t("li",null,[a(e,{to:"#datubazes-karodzini"},{default:s(()=>[O]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#dupsort-vienai-atslegai-atbilst-vairak-neka-viena-vertiba"},{default:s(()=>[C]),_:1})]),t("li",null,[a(e,{to:"#dup-key-iterators-kas-atgriez-visas-vertibas-kuras-atbilst-atslegai"},{default:s(()=>[I]),_:1})]),t("li",null,[a(e,{to:"#pec-noklusejuma-automatiski-pievienoti-datubazes-karodzina-karodzini"},{default:s(()=>[U]),_:1})])])]),t("li",null,[a(e,{to:"#datu-dzesana"},{default:s(()=>[A]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#del-key-atslegas-dzesana"},{default:s(()=>[P]),_:1})]),t("li",null,[a(e,{to:"#del-val-key-val-preciza-atbilstibas-dzesana"},{default:s(()=>[L]),_:1})])])]),t("li",null,[a(e,{to:"#parbrauksana"},{default:s(()=>[F]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#seciga-skersosana"},{default:s(()=>[$]),_:1})]),t("li",null,[a(e,{to:"#rev-apgrieztas-secibas-skersosana"},{default:s(()=>[Y]),_:1})]),t("li",null,[a(e,{to:"#skirosana"},{default:s(()=>[K]),_:1})])])])])]),t("li",null,[a(e,{to:"#intervala-iteratori"},{default:s(()=>[G]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#palaist-izvades"},{default:s(()=>[H]),_:1})]),t("li",null,[a(e,{to:"#range-begin-end-intervala-iteracija"},{default:s(()=>[J]),_:1})]),t("li",null,[a(e,{to:"#rev-range-apverstie-intervali"},{default:s(()=>[W]),_:1})])])]),t("li",null,[a(e,{to:"#datu-tipu-pielagosana"},{default:s(()=>[Z]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#pielagotu-tipu-vienkarsosana-ar-atributu-makroautomatiem"},{default:s(()=>[Q]),_:1})])])])])]),t("li",null,[a(e,{to:"#piezime-par"},{default:s(()=>[tt]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#atslegas-garums"},{default:s(()=>[nt]),_:1})])])]),t("li",null,[a(e,{to:"#zemsvitras-piezimes"},{default:s(()=>[et]),_:1})])])]),at],64)}var lt=r(p,[["render",st],["__file","2021-12-21-mdbx.html.vue"]]);export{lt as default};
