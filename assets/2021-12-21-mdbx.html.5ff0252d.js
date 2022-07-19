import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as o,a as t,b as a,w as s,F as u,d as n,e as l,r as d}from"./app.2a6a1bd2.js";const p={},m=t("h1",{id:"rudziu-paketas-libmdbx",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#rudziu-paketas-libmdbx","aria-hidden":"true"},"#"),n(" R\u016Bd\u017Ei\u0173 paketas libmdbx")],-1),g=t("p",null,[t("code",null,"rust"),n(),t("a",{href:"https://github.com/erthink/libmdbx",target:"_blank",rel:"noopener noreferrer"},"libmdbx"),n(" duomen\u0173 baz\u0117s apvalkalas.")],-1),b=t("hr",null,null,-1),k=t("p",null,"Katalogas :",-1),_={class:"table-of-contents"},v=n("Citatos"),c=n("Kas yra libmdbx?"),h=n("Pamokos"),f=n("Kaip paleisti pavyzd\u012F"),y=n("1 pavyzdys : ra\u0161ymas set(key,val) ir skaitymas .get(key)"),x=n("Kodas"),q=n("Paleisti i\u0161vest\u012F"),D=n("Kodo apra\u0161ymas"),E=n("env_rw! Duomen\u0173 baz\u0117s apibr\u0117\u017Eimas"),w=n("Makroaplinkos pl\u0117tra"),B=n("anyhow ir lazy_static"),T=n("Makro mdbx!"),M=n("Si\u016Blai ir sandoriai"),j=n("Dvejetaini\u0173 duomen\u0173 skaitymas ir ra\u0161ymas"),N=n("2 pavyzdys: Duomen\u0173 tipai, duomen\u0173 baz\u0117s \u017Eymos, i\u0161trynimas, nar\u0161ymas"),z=n("Kodas"),S=n("Paleisti i\u0161vest\u012F"),X=n("Greitas skaitymas ir ra\u0161ymas"),R=n("Duomen\u0173 tipai"),C=n("I\u0161 anksto nustatyti duomen\u0173 tipai"),O=n("Duomen\u0173 baz\u0117s v\u0117liavos"),V=n("DUPSORT : vienas raktas atitinka daugiau nei vien\u0105 reik\u0161m\u0119"),I=n(".dup(key) iteratorius, kuris gr\u0105\u017Eina visas rakt\u0105 atitinkan\u010Dias reik\u0161mes."),P=n("Numatytuoju atveju automati\u0161kai pridedamos duomen\u0173 baz\u0117s v\u0117liav\u0117l\u0117s"),U=n("Duomen\u0173 \u0161alinimas"),A=n(".del(key) Klavi\u0161o pa\u0161alinimas"),L=n(".del_val(key,val) Tikslaus atitikmens i\u0161trynimas"),F=n("Nar\u0161ymas"),$=n("nuoseklioji ap\u017Ei\u016Bra"),G=n(".rev() Atvirk\u0161tin\u0117s tvarkos nar\u0161ymas"),K=n("R\u016B\u0161iavimas"),Y=n("Intervaliniai iteratoriai"),H=n("Paleiskite i\u0161vest\u012F"),J=n(".range(begin..end) Intervalo iteracija"),W=n(".rev_range Apversti intervalai"),Q=n("Duomen\u0173 tip\u0173 pritaikymas"),Z=n("Pasirinktini\u0173 tip\u0173 supaprastinimas naudojant atribut\u0173 makrokomandas"),tt=n("Pastaba d\u0117l naudojimo"),nt=n("Rakto ilgis"),et=n("Pastabos"),at=l(`<hr><h2 id="citatos" tabindex="-1"><a class="header-anchor" href="#citatos" aria-hidden="true">#</a> Citatos</h2><p>Ra\u0161ydamas <a href="https://rmw.link" target="_blank" rel="noopener noreferrer">&quot;rmw.link</a> &quot; pajutau, kad man reikia \u012Fterptosios duomen\u0173 baz\u0117s.</p><p>D\u0117l tinklo pralaidumo, susijusio su da\u017Enu \u012Fra\u0161ymu, skaitymu ir ra\u0161ymu, <code>sqlite3</code> buvo per daug pa\u017Eeng\u0119s na\u0161umo po\u017Ei\u016Briu.</p><p>Taigi \u017Eemesnio lygio rakt\u0173 ir ver\u010Di\u0173 duomen\u0173 baz\u0117 buvo tinkamesn\u0117 <a href="https://discourse.world/h/2020/06/05/Shine-and-poverty-key-value-database-LMDB-in-applications-for-iOS" target="_blank" rel="noopener noreferrer">(lmdb yra 10 kart\u0173 greitesn\u0117 u\u017E sqlite</a> ).</p><p><img src="//irmw.gumlet.io/yxZV8x.jpg" alt=""></p><p>Galiausiai pasirinkau stebukling\u0105j\u0105 <code>lmdb</code> versij\u0105 - <code>mdbx</code>.</p><p>\u0160iuo metu esamas <code>rust</code> paketas <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">mdbx-rs (mdbx-sys</a> ) i\u0161 <code>mdbx</code> <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">nepalaiko &quot;Windows&quot;</a>, tod\u0117l \u0117miausi kurti paketo versij\u0105 su &quot;Windows&quot; palaikymu.</p><p>Pasirinktini\u0173 r\u016Bd\u017Ei\u0173 tip\u0173 saugojimo palaikymas. Palaikoma daugiasluoksn\u0117 prieiga.</p><p>Duomen\u0173 baz\u0119 galima apibr\u0117\u017Eti modulyje naudojant <code>lazy_static</code>, o tada j\u0105 tiesiog \u012Fvesti ir naudoti su pvz:</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
</code></pre></div><h2 id="kas-yra-libmdbx" tabindex="-1"><a class="header-anchor" href="#kas-yra-libmdbx" aria-hidden="true">#</a> Kas yra libmdbx?</h2><p><a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">mdbx</a> - tai antrin\u0117 duomen\u0173 baz\u0117, sukurta remiantis rus\u0173 autoriaus <a href="https://vk.com/erthink" target="_blank" rel="noopener noreferrer">Leonido Jurjevo (\u041B\u0435\u043E\u043D\u0438\u0434 \u042E\u0440\u044C\u0435\u0432</a> ) sukurta lmdb.</p><p><a href="https://en.wikipedia.org/wiki/Lightning_Memory-Mapped_Database" target="_blank" rel="noopener noreferrer">lmdb</a> yra itin greita \u012Fterptin\u0117 rakto ir vert\u0117s duomen\u0173 baz\u0117.</p><p>Viso teksto paie\u0161kos sistema &quot; <a href="https://docs.meilisearch.com/reference/under_the_hood/storage.html#measured-disk-usage" target="_blank" rel="noopener noreferrer">MeiliSearch&quot;</a> pagr\u012Fsta lmdb.</p><p><a href="https://docs.nvidia.com/deeplearning/dali/user-guide/docs/examples/general/data_loading/dataloading_lmdb.html" target="_blank" rel="noopener noreferrer">Gilaus mokymosi sistema caffe taip pat naudoja lmdb kaip duomen\u0173 saugykl\u0105</a>.</p><p><a href="https://github.com/erthink/libmdbx#added-features" target="_blank" rel="noopener noreferrer">mdbx yra 30 % greitesnis u\u017E lmdb pagal \u012Fterpt\u0173j\u0173 \u012Frengini\u0173 na\u0161umo test\u0173 lyginam\u0105j\u012F indeks\u0105 ioarena</a>.</p><p><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-1.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-3.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-4.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-5.png" alt=""></p><p>Tuo pat metu mdbx <a href="https://github.com/erthink/libmdbx#improvements-beyond-lmdb" target="_blank" rel="noopener noreferrer">pagerina daugel\u012F</a> lmdb <a href="https://github.com/erthink/libmdbx#improvements-beyond-lmdb" target="_blank" rel="noopener noreferrer">tr\u016Bkum\u0173</a>, tod\u0117l Erigon (naujos kartos ethereum klientas) neseniai per\u0117jo nuo LMDB prie MDBX <sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>.</p><h2 id="pamokos" tabindex="-1"><a class="header-anchor" href="#pamokos" aria-hidden="true">#</a> Pamokos</h2><h3 id="kaip-paleisti-pavyzdi" tabindex="-1"><a class="header-anchor" href="#kaip-paleisti-pavyzdi" aria-hidden="true">#</a> Kaip paleisti pavyzd\u012F</h3><p>Pirmiausia klonuokite programin\u0119 baz\u0119 <code>git clone git@github.com:rmw-lib/mdbx.git --depth=1 &amp;&amp; cd mdbx</code></p><p>Tada paleiskite <code>cargo run --example 01</code> ir jis veiks <code>examples/01.rs</code></p><p>Jei tai j\u016Bs\u0173 projektas, pirmiausia paleiskite j\u012F:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>cargo install cargo-edit
cargo add mdbx lazy_static ctor paste
</code></pre></div><h3 id="_1-pavyzdys-rasymas-set-key-val-ir-skaitymas-get-key" tabindex="-1"><a class="header-anchor" href="#_1-pavyzdys-rasymas-set-key-val-ir-skaitymas-get-key" aria-hidden="true">#</a> 1 pavyzdys : ra\u0161ymas <code>set(key,val)</code> ir skaitymas <code>.get(key)</code></h3><p>Panagrin\u0117kime paprast\u0105 <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/01.rs" target="_blank" rel="noopener noreferrer">pavyzd\u012F/01.rs</a></p><h4 id="kodas" tabindex="-1"><a class="header-anchor" href="#kodas" aria-hidden="true">#</a> Kodas</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Duomen\u0173 baz\u0117s kintamasis pavadinimas Env
  Test // Duomen\u0173 baz\u0117s testas
}

fn main() -&gt; Result&lt;()&gt; {
  // I\u0161vesti libmdbx versijos numer\u012F
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Daugiasluoksnis skaitymas ir ra\u0161ymas
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
</code></pre></div><h4 id="paleisti-isvesti" tabindex="-1"><a class="header-anchor" href="#paleisti-isvesti" aria-hidden="true">#</a> Paleisti i\u0161vest\u012F</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/01.mdb
mdbx version https://github.com/erthink/libmdbx/releases/tag/v0.11.2
test1 get Ok(Some(Bin([6])))
[6]
</code></pre></div><h4 id="kodo-aprasymas" tabindex="-1"><a class="header-anchor" href="#kodo-aprasymas" aria-hidden="true">#</a> Kodo apra\u0161ymas</h4><h5 id="env-rw-duomenu-bazes-apibrezimas" tabindex="-1"><a class="header-anchor" href="#env-rw-duomenu-bazes-apibrezimas" aria-hidden="true">#</a> <code>env_rw!</code> Duomen\u0173 baz\u0117s apibr\u0117\u017Eimas</h5><p>Kodas pradedamas makru env_rw, kuris turi 4 parametrus.</p><ol><li><p>Duomen\u0173 baz\u0117s aplinkos kintamojo pavadinimas</p></li><li><p>Gr\u0105\u017Eina objekt\u0105, <a href="https://docs.rs/mdbx/latest/src/mdbx/env.rs.html#27-35" target="_blank" rel="noopener noreferrer">mdbx:: env:: Config</a>.</p></li></ol><p>Naudojame numatyt\u0105j\u0105 konfig\u016Bracij\u0105, nes <code>Env</code> \u012Fgyvendina <code>From&lt;Into&lt;PathBuf&gt;&gt;</code>, tod\u0117l tinka duomen\u0173 baz\u0117s kelias <code>into()</code>, o numatytosios konfig\u016Bracijos konfig\u016Bracija yra tokia.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
MDBX // Duomen\u0173 baz\u0117s kintamasis pavadinimas Env
Test // Duomen\u0173 baz\u0117s testas
}

fn main() -&gt; Result&lt;()&gt; {
// I\u0161vesti libmdbx versijos numer\u012F
unsafe {
  println!(
    &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
    mdbx_version.major, mdbx_version.minor, mdbx_version.release
  );
}

// Daugiasluoksnis skaitymas ir ra\u0161ymas
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
    sync_period : 65536, // Per 1/65536 sekund\u0117s dal\u012F
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
</code></pre></div><p><code>max_db</code> \u0160\u012F nustatym\u0105 galima i\u0161 naujo nustatyti kiekvien\u0105 kart\u0105 <a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">atidarant</a> duomen\u0173 baz\u0119, ta\u010Diau per didelis jo nustatymas tur\u0117s \u012Ftakos na\u0161umui, tod\u0117l nustatykite j\u012F pagal poreik\u012F.</p><p>Kit\u0173 parametr\u0173 reik\u0161m\u0119 rasite <a href="https://erthink.github.io/libmdbx/group__c__opening.html#ga9138119a904355d245777c4119534061" target="_blank" rel="noopener noreferrer">libmdbx dokumentacijoje</a>.</p><ol start="3"><li><p>Duomen\u0173 baz\u0117s skaitymo sandorio makroaplinka, numatytasis dydis yra <code>r</code></p></li><li><p>Duomen\u0173 baz\u0117s ra\u0161ymo sandorio makro\u012Fra\u0161o pavadinimas, numatytoji reik\u0161m\u0117 yra <code>w</code></p></li></ol><p>3 ir 4 parametr\u0173 galima nepateikti, kad b\u016Bt\u0173 naudojamos numatytoji reik\u0161m\u0117.</p><h5 id="makroaplinkos-pletra" tabindex="-1"><a class="header-anchor" href="#makroaplinkos-pletra" aria-hidden="true">#</a> Makroaplinkos pl\u0117tra</h5><p>Jei norite pamatyti, k\u0105 daro makrokomandos magija, galite j\u0105 i\u0161pl\u0117sti naudodami <code>cargo expand --example 01</code> makrokomand\u0105, kuri\u0105 pirmiausia reikia \u012Fdiegti. <code>cargo install cargo-expand</code></p><p>Toliau pateikiama i\u0161pl\u0117stinio kodo ekrano kopija.</p><p><img src="//irmw.gumlet.io/PDzEtT.png" alt="PDzEtT"></p><h5 id="anyhow-ir-lazy-static" tabindex="-1"><a class="header-anchor" href="#anyhow-ir-lazy-static" aria-hidden="true">#</a> anyhow ir lazy_static</h5><p>I\u0161 i\u0161pl\u0117stinio ekrano paveiksl\u0117lio matyti, kad naudojami adresai <code>lazy_static</code> ir <code>anyhow</code>.</p><p><a href="https://rustmagazine.github.io/rust_magazine_2021/chapter_2/rust_error_handle.html#thiserror--anyhow" target="_blank" rel="noopener noreferrer">anyhow</a> yra rust klaid\u0173 tvarkymo biblioteka.</p><p><a href="https://juejin.cn/post/7007336922817232927" target="_blank" rel="noopener noreferrer">lazy_static</a> yra statinis kintamasis, kurio inicializacija atid\u0117ta.</p><p>\u0160ios dvi bibliotekos yra labai paplitusios, tod\u0117l j\u0173 nenagrin\u0117siu.</p><h5 id="makro-mdbx" tabindex="-1"><a class="header-anchor" href="#makro-mdbx" aria-hidden="true">#</a> Makro mdbx!</h5><p><a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html" target="_blank" rel="noopener noreferrer"><code>mdbx!</code></a> yra <a href="https://mp.weixin.qq.com/s/YT_HNFDCQ_IyocvBkRNJnA" target="_blank" rel="noopener noreferrer">proced\u016Bros makrokomanda</a>.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Duomen\u0173 baz\u0117s kintamasis pavadinimas Env
  Test // Duomen\u0173 baz\u0117s testas
}

fn main() -&gt; Result&lt;()&gt; {
  // I\u0161vesti libmdbx versijos numer\u012F
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Daugiasluoksnis skaitymas ir ra\u0161ymas
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
      sync_period : 65536, // Per 1/65536 sekund\u0117s dal\u012F
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
 MDBX // Duomen\u0173 baz\u0117s kintamasis pavadinimas Env
 Test // Duomen\u0173 baz\u0117s testas
}
</code></pre></div><p>Pirmoje eilut\u0117je pateikiamas duomen\u0173 baz\u0117s aplinkos kintamojo pavadinimas</p><p>Antroje eilut\u0117je \u012Fra\u0161omas duomen\u0173 baz\u0117s pavadinimas</p><p>Duomen\u0173 bazi\u0173 gali b\u016Bti daugiau nei viena, kiekvienai i\u0161 j\u0173 - po vien\u0105 eilut\u0119.</p><h5 id="siulai-ir-sandoriai" tabindex="-1"><a class="header-anchor" href="#siulai-ir-sandoriai" aria-hidden="true">#</a> Si\u016Blai ir sandoriai</h5><p>Pirmiau pateiktame kode demonstruojamas daugiasluoksnis skaitymas ir ra\u0161ymas.</p><p>Svarbu pa\u017Eym\u0117ti, kad vienu <strong>metu toje pa\u010Dioje gijoje</strong> gali b\u016Bti <strong>tik viena transakcija, jei gijoje bus atidaryta daugiau nei viena transakcija, programa nutr\u016Bks</strong>.</p><p>Sandoris bus patvirtintas taikymo srities pabaigoje.</p><h5 id="dvejetainiu-duomenu-skaitymas-ir-rasymas" tabindex="-1"><a class="header-anchor" href="#dvejetainiu-duomenu-skaitymas-ir-rasymas" aria-hidden="true">#</a> Dvejetaini\u0173 duomen\u0173 skaitymas ir ra\u0161ymas</h5><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Duomen\u0173 baz\u0117s kintamasis pavadinimas Env
  Test // Duomen\u0173 baz\u0117s testas
}

fn main() -&gt; Result&lt;()&gt; {
  // I\u0161vesti libmdbx versijos numer\u012F
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Daugiasluoksnis skaitymas ir ra\u0161ymas
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
      sync_period : 65536, // Per 1/65536 sekund\u0117s dal\u012F
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
 MDBX // Duomen\u0173 baz\u0117s kintamasis pavadinimas Env
 Test // Duomen\u0173 baz\u0117s testas
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
</code></pre></div><p><code>set</code> yra \u012Fra\u0161ymas, <code>get</code> yra skaitymas, o bet kuris objektas, \u012Fgyvendinantis <a href="https://doc.rust-lang.org/std/convert/trait.AsRef.html" target="_blank" rel="noopener noreferrer"><code>AsRef&lt;[u8]&gt;</code></a> objektas gali b\u016Bti \u012Fra\u0161ytas \u012F duomen\u0173 baz\u0119.</p><p><code>get</code> Gaunamas <code>Ok(Some(Bin([6])))</code>, kuris gali b\u016Bti paverstas \u012F <code>&amp;[u8]</code>.</p><h3 id="_2-pavyzdys-duomenu-tipai-duomenu-bazes-zymos-istrynimas-narsymas" tabindex="-1"><a class="header-anchor" href="#_2-pavyzdys-duomenu-tipai-duomenu-bazes-zymos-istrynimas-narsymas" aria-hidden="true">#</a> 2 pavyzdys: Duomen\u0173 tipai, duomen\u0173 baz\u0117s \u017Eymos, i\u0161trynimas, nar\u0161ymas</h3><p>Panagrin\u0117kime antr\u0105j\u012F <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">pavyzd\u012F/02.rs</a>:</p><p>\u0160iame pavyzdyje <code>env_rw!</code> praleistas, o tre\u010Diasis ir ketvirtasis argumentai ( <code>r</code>, <code>w</code>) praleisti.</p><h4 id="kodas-1" tabindex="-1"><a class="header-anchor" href="#kodas-1" aria-hidden="true">#</a> Kodas</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Duomen\u0173 baz\u0117s kintamasis pavadinimas Env
  Test // Duomen\u0173 baz\u0117s testas
}

fn main() -&gt; Result&lt;()&gt; {
  // I\u0161vesti libmdbx versijos numer\u012F
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Daugiasluoksnis skaitymas ir ra\u0161ymas
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
      sync_period : 65536, // Per 1/65536 sekund\u0117s dal\u012F
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
 MDBX // Duomen\u0173 baz\u0117s kintamasis pavadinimas Env
 Test // Duomen\u0173 baz\u0117s testas
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
  MDBX // Duomen\u0173 baz\u0117s kintam\u0173j\u0173 pavadinimai ENV
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
  // Greitas ra\u0161ymas
  w!(Test1.set [2, 3],[4, 5]);

  // Greitas skaitymas
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

  // Kelios operacijos keliose duomen\u0173 baz\u0117se per t\u0105 pa\u010Di\u0105 operacij\u0105
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

    // Sandoris bus \u012Fvykdytas pasibaigus taikymo sri\u010Diai
  }

  Ok(())
}
</code></pre></div><h4 id="paleisti-isvesti-1" tabindex="-1"><a class="header-anchor" href="#paleisti-isvesti-1" aria-hidden="true">#</a> Paleisti i\u0161vest\u012F</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/02.mdb

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
</code></pre></div><h4 id="greitas-skaitymas-ir-rasymas" tabindex="-1"><a class="header-anchor" href="#greitas-skaitymas-ir-rasymas" aria-hidden="true">#</a> Greitas skaitymas ir ra\u0161ymas</h4><p>Jei norime tiesiog nuskaityti arba \u012Fra\u0161yti vien\u0105 duomen\u0173 eilut\u0119, galime naudoti makrokomand\u0105.</p><p>Skaityti duomenis</p><div class="language-text ext-text"><pre class="language-text"><code>r!(Test1.get [2, 3])
</code></pre></div><p>Duomen\u0173 ra\u0161ymas</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Duomen\u0173 baz\u0117s kintamasis pavadinimas Env
  Test // Duomen\u0173 baz\u0117s testas
}

fn main() -&gt; Result&lt;()&gt; {
  // I\u0161vesti libmdbx versijos numer\u012F
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Daugiasluoksnis skaitymas ir ra\u0161ymas
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
      sync_period : 65536, // Per 1/65536 sekund\u0117s dal\u012F
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
 MDBX // Duomen\u0173 baz\u0117s kintamasis pavadinimas Env
 Test // Duomen\u0173 baz\u0117s testas
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
  MDBX // Duomen\u0173 baz\u0117s kintam\u0173j\u0173 pavadinimai ENV
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
  // Greitas ra\u0161ymas
  w!(Test1.set [2, 3],[4, 5]);

  // Greitas skaitymas
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

  // Kelios operacijos keliose duomen\u0173 baz\u0117se per t\u0105 pa\u010Di\u0105 operacij\u0105
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

    // Sandoris bus \u012Fvykdytas pasibaigus taikymo sri\u010Diai
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
</code></pre></div><p>Viskas vienoje eilut\u0117je, kaip para\u0161yta <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs.</a></p><h4 id="duomenu-tipai" tabindex="-1"><a class="header-anchor" href="#duomenu-tipai" aria-hidden="true">#</a> Duomen\u0173 tipai</h4><p>Duomen\u0173 baz\u0117s apibr\u0117\u017Etis examples/02. <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">rs</a> atrodo taip :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Duomen\u0173 baz\u0117s kintamasis pavadinimas Env
  Test // Duomen\u0173 baz\u0117s testas
}

fn main() -&gt; Result&lt;()&gt; {
  // I\u0161vesti libmdbx versijos numer\u012F
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Daugiasluoksnis skaitymas ir ra\u0161ymas
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
      sync_period : 65536, // Per 1/65536 sekund\u0117s dal\u012F
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
 MDBX // Duomen\u0173 baz\u0117s kintamasis pavadinimas Env
 Test // Duomen\u0173 baz\u0117s testas
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
  MDBX // Duomen\u0173 baz\u0117s kintam\u0173j\u0173 pavadinimai ENV
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
  // Greitas ra\u0161ymas
  w!(Test1.set [2, 3],[4, 5]);

  // Greitas skaitymas
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

  // Kelios operacijos keliose duomen\u0173 baz\u0117se per t\u0105 pa\u010Di\u0105 operacij\u0105
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

    // Sandoris bus \u012Fvykdytas pasibaigus taikymo sri\u010Diai
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
</code></pre></div><p>kur <code>key</code> ir <code>val</code> atitinkamai apibr\u0117\u017Eia rakt\u0173 ir reik\u0161mi\u0173 duomen\u0173 tipus.</p><p>Jei bandysite \u012Fra\u0161yti duomen\u0173 tip\u0105, kuris neatitinka apibr\u0117\u017Etojo, bus prane\u0161ta apie klaid\u0105, kaip parodyta toliau pateiktoje ekrano kopijoje :</p><p><img src="//irmw.gumlet.io/4rFTC6.png" alt=""></p><p>Numatytasis duomen\u0173 tipas yra <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Bin.html" target="_blank" rel="noopener noreferrer"><code>Bin</code></a> , galima \u012Fra\u0161yti bet kokius duomenis, kurie \u012Fgyvendina <code>AsRef&lt;[u8]&gt;</code>.</p><p>Jei raktas arba reik\u0161m\u0117 yra <code>utf8</code> eilut\u0117, duomen\u0173 tip\u0105 galima nustatyti \u012F <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Str.html" target="_blank" rel="noopener noreferrer"><code>Str</code></a> .</p><p><a href="https://doc.rust-lang.org/std/ops/trait.Deref.html" target="_blank" rel="noopener noreferrer">Atk\u0117lus</a> <code>Str</code> bus gr\u0105\u017Einta eilut\u0117, pana\u0161i \u012F <code>let k:&amp;str = &amp;k;</code>.</p><p>Be to, svetain\u0117je <code>Str</code> taip pat \u012Fdiegta <a href="https://doc.rust-lang.org/std/fmt/trait.Display.html" target="_blank" rel="noopener noreferrer"><code>std::fmt::Display</code></a> , <code>println!(&quot;{}&quot;,k)</code> i\u0161ves skaitom\u0105 eilut\u0119.</p><h5 id="is-anksto-nustatyti-duomenu-tipai" tabindex="-1"><a class="header-anchor" href="#is-anksto-nustatyti-duomenu-tipai" aria-hidden="true">#</a> I\u0161 anksto nustatyti duomen\u0173 tipai</h5><p>Be <code>Str</code> ir <code>Bin</code>, pl\u0117tinys taip pat palaiko <a href="https://docs.rs/mdbx/latest/src/mdbx/type.rs.html#48" target="_blank" rel="noopener noreferrer">usize, u128, u64, u32, u16, u8, isize, i128, i64, i32, i16, i8, f32, f64</a> duomenis.</p><h4 id="duomenu-bazes-veliavos" tabindex="-1"><a class="header-anchor" href="#duomenu-bazes-veliavos" aria-hidden="true">#</a> Duomen\u0173 baz\u0117s v\u0117liavos</h4><p>Duomen\u0173 baz\u0117s \u017Eymes, prid\u0117tas prie <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a> duomen\u0173, galite pamatyti adresu <code>Test4</code>. <code>flag DUPSORT</code></p><p>Libmdbx duomen\u0173 baz\u0117 turi kelet\u0105 v\u0117liav\u0173 ( <a href="https://erthink.github.io/libmdbx/group__c__dbi.html#gafe3bddb297b3ab0d828a487c5726f76a" target="_blank" rel="noopener noreferrer"><code>MDBX_db_flags_t</code></a> ), kuriuos galima nustatyti.</p><ul><li>REVERSEKEY raktams naudojamas atvirk\u0161tinis eilu\u010Di\u0173 palyginimas. (naudinga, kai kaip klavi\u0161us naudojate ma\u017Eus galinius koduotus numerius)</li><li>DUPSORT naudoja sur\u016B\u0161iuotus dublikatus, t. y. leid\u017Eia naudoti kelias rakto reik\u0161mes.</li><li>INTEGERKEY Nat\u016Bralus bait\u0173 tvarka i\u0161d\u0117stytas skaitinis raktas uint32_t arba uint64_t. Raktai turi b\u016Bti vienodo dyd\u017Eio ir perduodami kaip argumentas turi b\u016Bti i\u0161lyginti.</li><li>DUPFIXED Duomen\u0173 reik\u0161mi\u0173 dydis turi b\u016Bti vienodas, jei naudojamas DUPSORT (galima greitai suskai\u010Diuoti reik\u0161mi\u0173 skai\u010Di\u0173).</li><li>INTEGERDUP reikalingos DUPSORT ir DUPFIXED; reik\u0161m\u0117s yra sveikieji skai\u010Diai (pana\u0161iai kaip INTEGERKEY). Visos duomen\u0173 reik\u0161m\u0117s turi b\u016Bti vienodo dyd\u017Eio ir perduodamos kaip parametrai turi b\u016Bti i\u0161lygintos.</li><li>REVERSEDUP naudoja DUPSORT; duomen\u0173 vert\u0117ms naudojamas atvirk\u0161tinis eilu\u010Di\u0173 palyginimas.</li><li>CREATE sukuria DB, jei ji neegzistuoja (pridedama pagal numatytuosius nustatymus).</li><li>DB_ACCEDE Atidaro esam\u0105 subduomen\u0173 baz\u0119, sukurt\u0105 naudojant ne\u017Einom\u0105 po\u017Eym\u012F.<br> \u0160i DB_ACCEDE \u017Eyma skirta esamoms dalin\u0117ms duomen\u0173 baz\u0117ms, sukurtoms su ne\u017Einomomis v\u0117liavomis (REVERSEKEY, DUPSORT, INTEGERKEY, DUPFIXED, INTEGERDUP ir REVERSEDUP), atverti.<br> Tokiu atveju poduomen\u0173 baz\u0117 negr\u0105\u017Eins INCOMPATIBLE klaidos, bet bus atidaryta su v\u0117liavomis, kurios buvo naudojamos jai sukurti, o programa gal\u0117s nustatyti tikr\u0105sias v\u0117liavas naudodama mdbx_dbi_flags().</li></ul><h5 id="dupsort-vienas-raktas-atitinka-daugiau-nei-viena-reiksme" tabindex="-1"><a class="header-anchor" href="#dupsort-vienas-raktas-atitinka-daugiau-nei-viena-reiksme" aria-hidden="true">#</a> DUPSORT : vienas raktas atitinka daugiau nei vien\u0105 reik\u0161m\u0119</h5><p><code>DUPSORT</code>rei\u0161kia, kad rakt\u0105 gali atitikti daugiau nei viena reik\u0161m\u0117.</p><p>Jei norite nustatyti kelias v\u0117liav\u0117les, ra\u0161ykite taip <code>flag DUPSORT | DUPFIXED</code></p><h5 id="dup-key-iteratorius-kuris-grazina-visas-rakta-atitinkancias-reiksmes" tabindex="-1"><a class="header-anchor" href="#dup-key-iteratorius-kuris-grazina-visas-rakta-atitinkancias-reiksmes" aria-hidden="true">#</a> <code>.dup(key)</code> iteratorius, kuris gr\u0105\u017Eina visas rakt\u0105 atitinkan\u010Dias reik\u0161mes.</h5><p>\u0160i\u0105 funkcij\u0105 galima naudoti tik <code>DUPSORT</code> pa\u017Eym\u0117tose duomen\u0173 baz\u0117se, kuriose rakt\u0105 gali atitikti daugiau nei viena reik\u0161m\u0117.</p><p><code>DUPSORT</code> duomen\u0173 baz\u0117se <code>get</code> gr\u0105\u017Eina tik pirm\u0105j\u0105 \u0161io rakto reik\u0161m\u0119. Jei norite gauti visas reik\u0161mes, naudokite <code>dup</code>.</p><h5 id="numatytuoju-atveju-automatiskai-pridedamos-duomenu-bazes-veliaveles" tabindex="-1"><a class="header-anchor" href="#numatytuoju-atveju-automatiskai-pridedamos-duomenu-bazes-veliaveles" aria-hidden="true">#</a> Numatytuoju atveju automati\u0161kai pridedamos duomen\u0173 baz\u0117s v\u0117liav\u0117l\u0117s</h5><p>Kai duomen\u0173 tipas yra <code>u32</code> / <code>u64</code> / <code>usize</code>, automati\u0161kai pridedama duomen\u0173 baz\u0117s \u017Eyma. <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#105" target="_blank" rel="noopener noreferrer"><code>INTEGERKEY</code></a> .</p><p>Ma\u0161inose su ma\u017E\u0173j\u0173 gal\u016Bni\u0173 kodavimu kiti skaitmen\u0173 tipai pridedami automati\u0161kai. <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#108" target="_blank" rel="noopener noreferrer"><code>REVERSEKEY</code></a> Duomen\u0173 baz\u0117s \u017Eyma pridedama automati\u0161kai, kai duomen\u0173 tipas yra / / .</p><h4 id="duomenu-salinimas" tabindex="-1"><a class="header-anchor" href="#duomenu-salinimas" aria-hidden="true">#</a> Duomen\u0173 \u0161alinimas</h4><h5 id="del-key-klaviso-pasalinimas" tabindex="-1"><a class="header-anchor" href="#del-key-klaviso-pasalinimas" aria-hidden="true">#</a> <code>.del(key)</code> Klavi\u0161o pa\u0161alinimas</h5><p><code>.del(val)</code> I\u0161trina rakt\u0105 atitinkan\u010Di\u0105 reik\u0161m\u0119.</p><p>Jei duomen\u0173 baz\u0117je yra \u017Eyma <code>DUPSORT</code>, visos \u0161io rakto reik\u0161m\u0117s bus i\u0161trintos.</p><p>Gr\u0105\u017Eina <code>true</code>, jei i\u0161trinti visi duomenys, ir <code>false</code>, jei ne.</p><h5 id="del-val-key-val-tikslaus-atitikmens-istrynimas" tabindex="-1"><a class="header-anchor" href="#del-val-key-val-tikslaus-atitikmens-istrynimas" aria-hidden="true">#</a> <code>.del_val(key,val)</code> Tikslaus atitikmens i\u0161trynimas</h5><p><code>.del_val(key,val)</code> Pa\u0161alina rakto ir vert\u0117s poras, kurios tiksliai atitinka \u012Fvesties parametrus.</p><p>Gr\u0105\u017Eina <code>true</code>, jei i\u0161trinti visi duomenys, ir <code>false</code>, jei ne.</p><h4 id="narsymas" tabindex="-1"><a class="header-anchor" href="#narsymas" aria-hidden="true">#</a> Nar\u0161ymas</h4><h5 id="nuoseklioji-apziura" tabindex="-1"><a class="header-anchor" href="#nuoseklioji-apziura" aria-hidden="true">#</a> nuoseklioji ap\u017Ei\u016Bra</h5><p>D\u0117l \u012Fgyvendinimo <a href="https://doc.rust-lang.org/std/iter/trait.IntoIterator.html" target="_blank" rel="noopener noreferrer"><code>std::iter::IntoIterator</code></a> . galite keliauti tiesiai taip:</p><p><code>for (k, v) in test1</code></p><h5 id="rev-atvirkstines-tvarkos-narsymas" tabindex="-1"><a class="header-anchor" href="#rev-atvirkstines-tvarkos-narsymas" aria-hidden="true">#</a> <code>.rev()</code> Atvirk\u0161tin\u0117s tvarkos nar\u0161ymas</h5><p><code>for (k, v) in test4.rev()</code></p><h5 id="rusiavimas" tabindex="-1"><a class="header-anchor" href="#rusiavimas" aria-hidden="true">#</a> R\u016B\u0161iavimas</h5><p>Libmdbx raktai sur\u016B\u0161iuoti <a href="https://zh.wikipedia.org/wiki/%E5%AD%97%E5%85%B8%E5%BA%8F" target="_blank" rel="noopener noreferrer">\u017Eodyno tvarka</a>.</p><ul><li><p>Nepa\u017Eym\u0117tiems skai\u010Diams</p><p>r\u016B\u0161iuojami nuo ma\u017Eiausio iki did\u017Eiausio, nes automati\u0161kai pridedamos duomen\u0173 baz\u0117s \u017Eymos ( <code>u32</code>/ <code>u64</code>/ <code>usize</code> pridedamos prie <code>INTEGERKEY</code>, kitos - prie <code>REVERSEKEY</code>, priklausomai nuo ma\u0161ininio kodo).</p></li><li><p>Pasira\u0161ytiems skai\u010Diams</p><p>eili\u0161kumas yra toks: pirmiausia 0, tada visi teigiami skai\u010Diai nuo ma\u017Eiausio iki did\u017Eiausio, tada visi neigiami skai\u010Diai nuo ma\u017Eiausio iki did\u017Eiausio.</p></li></ul><h3 id="intervaliniai-iteratoriai" tabindex="-1"><a class="header-anchor" href="#intervaliniai-iteratoriai" aria-hidden="true">#</a> Intervaliniai iteratoriai</h3><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Duomen\u0173 baz\u0117s kintamasis pavadinimas Env
  Test // Duomen\u0173 baz\u0117s testas
}

fn main() -&gt; Result&lt;()&gt; {
  // I\u0161vesti libmdbx versijos numer\u012F
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Daugiasluoksnis skaitymas ir ra\u0161ymas
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
      sync_period : 65536, // Per 1/65536 sekund\u0117s dal\u012F
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
 MDBX // Duomen\u0173 baz\u0117s kintamasis pavadinimas Env
 Test // Duomen\u0173 baz\u0117s testas
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
  MDBX // Duomen\u0173 baz\u0117s kintam\u0173j\u0173 pavadinimai ENV
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
  // Greitas ra\u0161ymas
  w!(Test1.set [2, 3],[4, 5]);

  // Greitas skaitymas
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

  // Kelios operacijos keliose duomen\u0173 baz\u0117se per t\u0105 pa\u010Di\u0105 operacij\u0105
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

    // Sandoris bus \u012Fvykdytas pasibaigus taikymo sri\u010Diai
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
</code></pre></div><h4 id="paleiskite-isvesti" tabindex="-1"><a class="header-anchor" href="#paleiskite-isvesti" aria-hidden="true">#</a> Paleiskite i\u0161vest\u012F</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/range.mdb

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
</code></pre></div><h4 id="range-begin-end-intervalo-iteracija" tabindex="-1"><a class="header-anchor" href="#range-begin-end-intervalo-iteracija" aria-hidden="true">#</a> <code>.range(begin..end)</code> Intervalo iteracija</h4><p>Kalbant apie skai\u010Dius, intervalas yra skaitinis intervalas.</p><p>Dvejetainiams skai\u010Diams galima sudaryti tok\u012F pat\u012F interval\u0105, pvz.</p><div class="language-text ext-text"><pre class="language-text"><code>let begin : &amp;[u8] = &amp;[1,1];
for (k,v) in test0.range(begin..=&amp;[2]) {}
</code></pre></div><p>Jei <code>begin</code> yra didesnis u\u017E <code>end</code>, bus gr\u012F\u017Etama atgal.</p><p>Pavyzd\u017Eiui, <code>test1.range(5..2)</code> i\u0161ves tok\u012F :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Duomen\u0173 baz\u0117s kintamasis pavadinimas Env
  Test // Duomen\u0173 baz\u0117s testas
}

fn main() -&gt; Result&lt;()&gt; {
  // I\u0161vesti libmdbx versijos numer\u012F
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Daugiasluoksnis skaitymas ir ra\u0161ymas
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
      sync_period : 65536, // Per 1/65536 sekund\u0117s dal\u012F
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
 MDBX // Duomen\u0173 baz\u0117s kintamasis pavadinimas Env
 Test // Duomen\u0173 baz\u0117s testas
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
  MDBX // Duomen\u0173 baz\u0117s kintam\u0173j\u0173 pavadinimai ENV
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
  // Greitas ra\u0161ymas
  w!(Test1.set [2, 3],[4, 5]);

  // Greitas skaitymas
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

  // Kelios operacijos keliose duomen\u0173 baz\u0117se per t\u0105 pa\u010Di\u0105 operacij\u0105
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

    // Sandoris bus \u012Fvykdytas pasibaigus taikymo sri\u010Diai
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
</code></pre></div><p>Intervalin\u0117 iteracija nepalaikoma <a href="https://doc.rust-lang.org/std/ops/struct.RangeFull.html" target="_blank" rel="noopener noreferrer"><code>RangeFull</code></a> t. y. <code>..</code>naudojimas nepalaikomas, vietoj jo naudokite pirmiau min\u0117t\u0105 <a href="#%E9%81%8D%E5%8E%86">ap\u0117jim\u0105</a>.</p><h4 id="rev-range-apversti-intervalai" tabindex="-1"><a class="header-anchor" href="#rev-range-apversti-intervalai" aria-hidden="true">#</a> <code>.rev_range</code> Apversti intervalai</h4><p>Jei norite gauti apverst\u0105 interval\u0105, kuris yra ma\u017Eesnis arba lygus vertei, galite padaryti taip</p><div class="language-text ext-text"><pre class="language-text"><code>test2.rev_range(2..)
</code></pre></div><p>I\u0161vestis bus</p><div class="language-text ext-text"><pre class="language-text"><code>(2, 4)
(1, 5)
(0, 0)
</code></pre></div><p>Apverstam intervalui neturi b\u016Bti nustatytas vienas i\u0161 <code>begin</code> arba <code>end</code>; nes jei abu \u0161ie parametrai nustatyti, visada galite naudoti <code>range(end..begin)</code>, kad pasiektum\u0117te t\u0105 pat\u012F efekt\u0105.</p><h3 id="duomenu-tipu-pritaikymas" tabindex="-1"><a class="header-anchor" href="#duomenu-tipu-pritaikymas" aria-hidden="true">#</a> Duomen\u0173 tip\u0173 pritaikymas</h3><p>Demonstracin\u012F kod\u0105 galima rasti adresu <a href="https://github.com/rmw-lib/mdbx-example/blob/master/01/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/01</a>.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Duomen\u0173 baz\u0117s kintamasis pavadinimas Env
  Test // Duomen\u0173 baz\u0117s testas
}

fn main() -&gt; Result&lt;()&gt; {
  // I\u0161vesti libmdbx versijos numer\u012F
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Daugiasluoksnis skaitymas ir ra\u0161ymas
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
      sync_period : 65536, // Per 1/65536 sekund\u0117s dal\u012F
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
 MDBX // Duomen\u0173 baz\u0117s kintamasis pavadinimas Env
 Test // Duomen\u0173 baz\u0117s testas
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
  MDBX // Duomen\u0173 baz\u0117s kintam\u0173j\u0173 pavadinimai ENV
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
  // Greitas ra\u0161ymas
  w!(Test1.set [2, 3],[4, 5]);

  // Greitas skaitymas
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

  // Kelios operacijos keliose duomen\u0173 baz\u0117se per t\u0105 pa\u010Di\u0105 operacij\u0105
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

    // Sandoris bus \u012Fvykdytas pasibaigus taikymo sri\u010Diai
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
</code></pre></div><p>I\u0161vestis yra tokia</p><div class="language-text ext-text"><pre class="language-text"><code>Some(City { name: &quot;BeiJing&quot;, lnglat: (11640, 3990) })
</code></pre></div><p>Pasirinktinio tipo pavyzdyje naudojame <a href="https://github.com/koute/speedy" target="_blank" rel="noopener noreferrer"><code>speedy</code></a> atlikti serijin\u012F vertinim\u0105 <a href="https://github.com/djkoloski/rust_serialization_benchmark" target="_blank" rel="noopener noreferrer">( <code>speedy</code> veiklos rezultat\u0173 ap\u017Evalga)</a>.</p><p>Pasirinktinio tipo \u012Fgyvendinimas <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.FromMdbx.html" target="_blank" rel="noopener noreferrer"><code>FromMdbx</code></a> ir <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.ToAsRef.html" target="_blank" rel="noopener noreferrer"><code>ToAsRef</code></a> galima laikyti adresu <code>mdbx</code>.</p><p>Jei naudojate konkre\u010Di\u0105 serializavimo bibliotek\u0105, taip pat galite pritaikyti atribut\u0173 <a href="https://blog.logrocket.com/macros-in-rust-a-tutorial-with-examples/" target="_blank" rel="noopener noreferrer">makrokomandas</a>, kad procesas b\u016Bt\u0173 paprastesnis.</p><h4 id="pasirinktiniu-tipu-supaprastinimas-naudojant-atributu-makrokomandas" tabindex="-1"><a class="header-anchor" href="#pasirinktiniu-tipu-supaprastinimas-naudojant-atributu-makrokomandas" aria-hidden="true">#</a> Pasirinktini\u0173 tip\u0173 supaprastinimas naudojant atribut\u0173 makrokomandas</h4><p>\u012Ediegti atribut\u0173 makrokomand\u0105 paprasta, nes <a href="https://crates.io/crates/mdbx_speedy" target="_blank" rel="noopener noreferrer"><code>mdbx_speedy</code></a> Atributo makro kodas yra toks :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Duomen\u0173 baz\u0117s kintamasis pavadinimas Env
  Test // Duomen\u0173 baz\u0117s testas
}

fn main() -&gt; Result&lt;()&gt; {
  // I\u0161vesti libmdbx versijos numer\u012F
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Daugiasluoksnis skaitymas ir ra\u0161ymas
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
      sync_period : 65536, // Per 1/65536 sekund\u0117s dal\u012F
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
 MDBX // Duomen\u0173 baz\u0117s kintamasis pavadinimas Env
 Test // Duomen\u0173 baz\u0117s testas
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
  MDBX // Duomen\u0173 baz\u0117s kintam\u0173j\u0173 pavadinimai ENV
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
  // Greitas ra\u0161ymas
  w!(Test1.set [2, 3],[4, 5]);

  // Greitas skaitymas
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

  // Kelios operacijos keliose duomen\u0173 baz\u0117se per t\u0105 pa\u010Di\u0105 operacij\u0105
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

    // Sandoris bus \u012Fvykdytas pasibaigus taikymo sri\u010Diai
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
</code></pre></div><p>Prad\u0117kite nuo <code>cargo add mdbx-speedy</code>savo projekte, tada gal\u0117site greitai pritaikyti tip\u0105 (\u017Er. <a href="https://github.com/rmw-lib/mdbx-example/blob/master/02/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/02</a> demonstracin\u012F kod\u0105).</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Duomen\u0173 baz\u0117s kintamasis pavadinimas Env
  Test // Duomen\u0173 baz\u0117s testas
}

fn main() -&gt; Result&lt;()&gt; {
  // I\u0161vesti libmdbx versijos numer\u012F
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Daugiasluoksnis skaitymas ir ra\u0161ymas
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
      sync_period : 65536, // Per 1/65536 sekund\u0117s dal\u012F
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
 MDBX // Duomen\u0173 baz\u0117s kintamasis pavadinimas Env
 Test // Duomen\u0173 baz\u0117s testas
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
  MDBX // Duomen\u0173 baz\u0117s kintam\u0173j\u0173 pavadinimai ENV
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
  // Greitas ra\u0161ymas
  w!(Test1.set [2, 3],[4, 5]);

  // Greitas skaitymas
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

  // Kelios operacijos keliose duomen\u0173 baz\u0117se per t\u0105 pa\u010Di\u0105 operacij\u0105
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

    // Sandoris bus \u012Fvykdytas pasibaigus taikymo sri\u010Diai
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
</code></pre></div><p>\u017Dinoma, vis tiek erzina nuolat ra\u0161yti <code>#[derive(PartialEq, Debug, Readable, Writable, MdbxSpeedy)]</code>, tod\u0117l galite naudoti <a href="https://docs.rs/derive-alias/0.1.0/derive_alias" target="_blank" rel="noopener noreferrer"><code>derive_alias</code></a> dar labiau supaprastinti kod\u0105.</p><h2 id="pastaba-del-naudojimo" tabindex="-1"><a class="header-anchor" href="#pastaba-del-naudojimo" aria-hidden="true">#</a> Pastaba d\u0117l naudojimo</h2><h3 id="rakto-ilgis" tabindex="-1"><a class="header-anchor" href="#rakto-ilgis" aria-hidden="true">#</a> Rakto ilgis</h3><ul><li>Ma\u017Eiausias 0, did\u017Eiausias \u2248 \xBD puslapio dydis (pagal nutyl\u0117jim\u0105 4K puslapio rakto did\u017Eiausias dydis yra 2022 baitai), nustatomas inicializuojant duomen\u0173 baz\u0119 <code>pagesize</code> gali b\u016Bti konfig\u016Bruojamas ne didesnis kaip <code>65536</code>ir turi b\u016Bti lygus 2 galiai.</li></ul><h2 id="pastabos" tabindex="-1"><a class="header-anchor" href="#pastabos" aria-hidden="true">#</a> Pastabos</h2><p>Jie nurodo per\u0117jimo nuo LMDB prie MDBX privalumus.</p><blockquote><p>&quot;Erigon&quot; prad\u0117jo nuo BoltDB duomen\u0173 baz\u0117s, v\u0117liau prid\u0117jo BadgerDB palaikym\u0105 ir galiausiai visi\u0161kai per\u0117jo prie LMDB. tam tikru metu susid\u016Br\u0117me su stabilumo problemomis, kurias suk\u0117l\u0117 LMDB naudojimas ir kuri\u0173 k\u016Br\u0117jai nenumat\u0117. Nuo to laiko mes stebime gerai palaikom\u0105 LMDB i\u0161vestin\u0119, vadinam\u0105 MDBX, ir tikim\u0117s pasinaudoti j\u0173 stabilumo patobulinimais bei galb\u016Bt ateityje daugiau bendradarbiauti.MDBX integravimas dabar baigtas, at\u0117jo laikas atlikti daugiau bandym\u0173 ir rengti dokumentacij\u0105.</p><p>Per\u0117jimo nuo LMDB prie MDBX privalumai.</p><ol><li><p>Duomen\u0173 baz\u0117s fail\u0173 augimas &quot;erdv\u0117 (geometrija)&quot; veikia tinkamai. Tai svarbu, ypa\u010D &quot;Windows&quot; sistemoje. LMDB reikia vien\u0105 kart\u0105 i\u0161 anksto nurodyti atminties \u017Eem\u0117lapio dyd\u012F (\u0161iuo metu pagal nutyl\u0117jim\u0105 naudojame 2 Tb), o jei duomen\u0173 baz\u0117s failas per\u017Eengia \u0161i\u0105 rib\u0105, proces\u0105 reikia paleisti i\u0161 naujo. &quot;Windows&quot; sistemoje nusta\u010Dius 2 TB atminties \u017Eem\u0117lapio dyd\u012F, duomen\u0173 baz\u0117s failas i\u0161 prad\u017Ei\u0173 b\u016Bt\u0173 2 TB dyd\u017Eio, o tai n\u0117ra labai patogu. MDBX atminties \u017Eem\u0117lapio dydis didinamas po 2 Gb. Tai rei\u0161kia, kad retkar\u010Diais reikia pertvarkyti, ta\u010Diau tai u\u017Etikrina geresn\u0119 naudotojo patirt\u012F.</p></li><li><p>MDBX grie\u017E\u010Diau tikrina, ar tuo pa\u010Diu metu naudojamas sandori\u0173 apdorojimas ir ar nesikartoja skaitymo ir ra\u0161ymo sandoriai toje pa\u010Dioje vykdymo gijoje. Tai leid\u017Eia pasteb\u0117ti kai kurias neakivaizd\u017Eias klaidas ir padaro elges\u012F labiau nusp\u0117jam\u0105.<br> Per daugiau nei penkerius metus (nuo tada, kai buvo atskirta nuo LMDB) MDBX sukaup\u0117 daug saugumo patais\u0173 ir klaid\u0173, kurios, m\u016Bs\u0173 \u017Einiomis, vis dar egzistuoja LMDB. Kai kurios i\u0161 j\u0173 buvo aptiktos m\u016Bs\u0173 bandym\u0173 metu, o MDBX pri\u017Ei\u016Br\u0117tojai rimtai \u012F jas atsi\u017Evelg\u0117 ir nedelsdami i\u0161tais\u0117.</p></li><li><p>Duomen\u0173 baz\u0117se, kuriose nuolat kei\u010Diami duomenys, susidaro nema\u017Eai atstatomos vietos (LMDB terminologijoje dar vadinamos &quot;laisvuoju s\u0105ra\u0161u&quot;). Tur\u0117jome i\u0161taisyti LMDB, kad i\u0161taisytume rim\u010Diausius atkuriamos vietos tvarkymo ( <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide" target="_blank" rel="noopener noreferrer">analiz\u0117s</a> ) tr\u016Bkumus. MDBX skyr\u0117 <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide%EF%BC%89%E3%80%82MDBX%E5%AF%B9%E5%8F%AF%E5%9B%9E%E6%94%B6%E7%A9%BA%E9%97%B4%E7%9A%84%E6%9C%89%E6%95%88%E5%A4%84%E7%90%86%E8%BF%9B%E8%A1%8C%E4%BA%86%E7%89%B9%E5%88%AB%E7%9A%84%E5%85%B3%E6%B3%A8%EF%BC%8C%E5%88%B0%E7%9B%AE%E5%89%8D%E4%B8%BA%E6%AD%A2%EF%BC%8C%E8%BF%98%E4%B8%8D%E9%9C%80%E8%A6%81%E6%89%93%E8%A1%A5%E4%B8%81%E3%80%82" target="_blank" rel="noopener noreferrer">ypating\u0105 d\u0117mes\u012F veiksmingam atkuriamos vietos tvarkymui ir iki \u0161iol jo nereik\u0117jo taisyti</a>.</p></li><li><p>Remiantis m\u016Bs\u0173 bandymais, MDBX \u0161iek tiek geriau atliko m\u016Bs\u0173 darbo kr\u016Bvius.</p></li><li><p>MDBX atskleid\u017Eia daugiau vidini\u0173 telemetrijos duomen\u0173 - daugiau metrik\u0173 apie tai, kas vyksta duomen\u0173 baz\u0117je. \u0160iuos duomenis turime &quot;Grafana&quot; - kad gal\u0117tume priimti geresnius sprendimus d\u0117l taikomosios programos dizaino. Pavyzd\u017Eiui, visi\u0161kai per\u0117jus prie MDBX (panaikinus LMDB palaikym\u0105), \u012Fgyvendinsime &quot;pusiau pilno sandorio patvirtinimo&quot; politik\u0105, kad b\u016Bt\u0173 i\u0161vengta disko kontakt\u0173 perpildymo/neperpildymo. Tai dar labiau supaprastins m\u016Bs\u0173 kod\u0105, ta\u010Diau netur\u0117s \u012Ftakos na\u0161umui.</p></li><li><p>MDBX palaiko &quot;Exclusive open&quot; re\u017Eim\u0105 - j\u012F naudojame duomen\u0173 bazi\u0173 perk\u0117limui, kad jokie kiti skaitytuvai negal\u0117t\u0173 pasiekti duomen\u0173 baz\u0117s perk\u0117limo proceso metu.</p></li></ol></blockquote><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p><a href="https://github.com/ledgerwatch/erigon/wiki/Criteria-for-transitioning-from-Alpha-to-Beta#switch-from-lmdb-to-mdbx" target="_blank" rel="noopener noreferrer">Erigon (naujos kartos Ethernet klientas) neseniai per\u0117jo nuo LMDB prie MDBX</a>. <a href="#fnref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,160);function st(it,rt){const e=d("RouterLink");return r(),o(u,null,[m,g,b,k,t("nav",_,[t("ul",null,[t("li",null,[a(e,{to:"#citatos"},{default:s(()=>[v]),_:1})]),t("li",null,[a(e,{to:"#kas-yra-libmdbx"},{default:s(()=>[c]),_:1})]),t("li",null,[a(e,{to:"#pamokos"},{default:s(()=>[h]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#kaip-paleisti-pavyzdi"},{default:s(()=>[f]),_:1})]),t("li",null,[a(e,{to:"#_1-pavyzdys-rasymas-set-key-val-ir-skaitymas-get-key"},{default:s(()=>[y]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#kodas"},{default:s(()=>[x]),_:1})]),t("li",null,[a(e,{to:"#paleisti-isvesti"},{default:s(()=>[q]),_:1})]),t("li",null,[a(e,{to:"#kodo-aprasymas"},{default:s(()=>[D]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#env-rw-duomenu-bazes-apibrezimas"},{default:s(()=>[E]),_:1})]),t("li",null,[a(e,{to:"#makroaplinkos-pletra"},{default:s(()=>[w]),_:1})]),t("li",null,[a(e,{to:"#anyhow-ir-lazy-static"},{default:s(()=>[B]),_:1})]),t("li",null,[a(e,{to:"#makro-mdbx"},{default:s(()=>[T]),_:1})]),t("li",null,[a(e,{to:"#siulai-ir-sandoriai"},{default:s(()=>[M]),_:1})]),t("li",null,[a(e,{to:"#dvejetainiu-duomenu-skaitymas-ir-rasymas"},{default:s(()=>[j]),_:1})])])])])]),t("li",null,[a(e,{to:"#_2-pavyzdys-duomenu-tipai-duomenu-bazes-zymos-istrynimas-narsymas"},{default:s(()=>[N]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#kodas-1"},{default:s(()=>[z]),_:1})]),t("li",null,[a(e,{to:"#paleisti-isvesti-1"},{default:s(()=>[S]),_:1})]),t("li",null,[a(e,{to:"#greitas-skaitymas-ir-rasymas"},{default:s(()=>[X]),_:1})]),t("li",null,[a(e,{to:"#duomenu-tipai"},{default:s(()=>[R]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#is-anksto-nustatyti-duomenu-tipai"},{default:s(()=>[C]),_:1})])])]),t("li",null,[a(e,{to:"#duomenu-bazes-veliavos"},{default:s(()=>[O]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#dupsort-vienas-raktas-atitinka-daugiau-nei-viena-reiksme"},{default:s(()=>[V]),_:1})]),t("li",null,[a(e,{to:"#dup-key-iteratorius-kuris-grazina-visas-rakta-atitinkancias-reiksmes"},{default:s(()=>[I]),_:1})]),t("li",null,[a(e,{to:"#numatytuoju-atveju-automatiskai-pridedamos-duomenu-bazes-veliaveles"},{default:s(()=>[P]),_:1})])])]),t("li",null,[a(e,{to:"#duomenu-salinimas"},{default:s(()=>[U]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#del-key-klaviso-pasalinimas"},{default:s(()=>[A]),_:1})]),t("li",null,[a(e,{to:"#del-val-key-val-tikslaus-atitikmens-istrynimas"},{default:s(()=>[L]),_:1})])])]),t("li",null,[a(e,{to:"#narsymas"},{default:s(()=>[F]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#nuoseklioji-apziura"},{default:s(()=>[$]),_:1})]),t("li",null,[a(e,{to:"#rev-atvirkstines-tvarkos-narsymas"},{default:s(()=>[G]),_:1})]),t("li",null,[a(e,{to:"#rusiavimas"},{default:s(()=>[K]),_:1})])])])])]),t("li",null,[a(e,{to:"#intervaliniai-iteratoriai"},{default:s(()=>[Y]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#paleiskite-isvesti"},{default:s(()=>[H]),_:1})]),t("li",null,[a(e,{to:"#range-begin-end-intervalo-iteracija"},{default:s(()=>[J]),_:1})]),t("li",null,[a(e,{to:"#rev-range-apversti-intervalai"},{default:s(()=>[W]),_:1})])])]),t("li",null,[a(e,{to:"#duomenu-tipu-pritaikymas"},{default:s(()=>[Q]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#pasirinktiniu-tipu-supaprastinimas-naudojant-atributu-makrokomandas"},{default:s(()=>[Z]),_:1})])])])])]),t("li",null,[a(e,{to:"#pastaba-del-naudojimo"},{default:s(()=>[tt]),_:1}),t("ul",null,[t("li",null,[a(e,{to:"#rakto-ilgis"},{default:s(()=>[nt]),_:1})])])]),t("li",null,[a(e,{to:"#pastabos"},{default:s(()=>[et]),_:1})])])]),at],64)}var lt=i(p,[["render",st],["__file","2021-12-21-mdbx.html.vue"]]);export{lt as default};
