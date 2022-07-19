import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as l,a as e,b as s,w as a,F as d,d as n,e as i,r as u}from"./app.040d9bb0.js";const p={},c=e("h1",{id:"le-paquet-rust-pour-libmdbx",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#le-paquet-rust-pour-libmdbx","aria-hidden":"true"},"#"),n(" Le paquet rust pour libmdbx")],-1),m=e("p",null,[n("Le wrapper "),e("code",null,"rust"),n(" pour la base de donn\xE9es "),e("a",{href:"https://github.com/erthink/libmdbx",target:"_blank",rel:"noopener noreferrer"},"libmdbx"),n(".")],-1),b=e("hr",null,null,-1),g=e("p",null,"Annuaire :",-1),h={class:"table-of-contents"},_=n("Citations"),v=n("Qu'est-ce que libmdbx ?"),f=n("Tutoriels"),x=n("Comment ex\xE9cuter l'exemple"),q=n("Exemple 1 : \xE9crire set(key,val) et lire .get(key)"),y=n("Code"),E=n("Ex\xE9cuter la sortie"),D=n("Description du code"),k=n("env_rw! D\xE9finition de la base de donn\xE9es"),w=n("Macro-expansion"),T=n("de toute fa\xE7on et lazy_static"),B=n("La macro mdbx !"),N=n("Fils et transactions"),M=n("Lecture et \xE9criture de donn\xE9es binaires"),S=n("Exemple 2 : Types de donn\xE9es, drapeaux de base de donn\xE9es, suppression, travers\xE9e."),X=n("Code"),C=n("Ex\xE9cuter la sortie"),O=n("Lecture et \xE9criture rapides"),R=n("Types de donn\xE9es"),L=n("Types de donn\xE9es pr\xE9d\xE9finis"),V=n("Drapeaux de base de donn\xE9es"),U=n("DUPSORT : Une cl\xE9 correspond \xE0 plus d'une valeur"),I=n(".dup(key) it\xE9rateur qui renvoie toutes les valeurs correspondant \xE0 une cl\xE9"),A=n("Drapeaux de base de donn\xE9es ajout\xE9s automatiquement par d\xE9faut"),z=n("Suppression des donn\xE9es"),P=n(".del(key) Suppression d'une touche"),F=n(".del_val(key,val) Suppression de la correspondance exacte"),$=n("Travers\xE9e"),j=n("travers\xE9e s\xE9quentielle"),Y=n(".rev() Travers\xE9e de l'ordre inverse"),G=n("Triage"),H=n("It\xE9rateurs d'intervalles"),W=n("Ex\xE9cutez la sortie de"),K=n(".range(begin..end) Intervalle Iteration"),J=n(".rev_range Intervalles invers\xE9s"),Q=n("Personnalisation des types de donn\xE9es"),Z=n("Simplifier les types personnalis\xE9s avec les macros d'attributs"),ee=n("Note sur l'utilisation de"),ne=n("La longueur de la cl\xE9"),te=n("Notes de bas de page"),se=i(`<hr><h2 id="citations" tabindex="-1"><a class="header-anchor" href="#citations" aria-hidden="true">#</a> Citations</h2><p>En \xE9crivant <a href="https://rmw.link" target="_blank" rel="noopener noreferrer">&#39;rmw.link</a> &#39;, j&#39;ai senti que j&#39;avais besoin d&#39;une base de donn\xE9es int\xE9gr\xE9e.</p><p>En raison du d\xE9bit r\xE9seau qu&#39;impliquent l&#39;enregistrement, la lecture et l&#39;\xE9criture fr\xE9quents, <code>sqlite3</code> \xE9tait trop avanc\xE9 pour les pr\xE9occupations de performance.</p><p>Une base de donn\xE9es cl\xE9-valeur de niveau inf\xE9rieur \xE9tait donc plus appropri\xE9e <a href="https://discourse.world/h/2020/06/05/Shine-and-poverty-key-value-database-LMDB-in-applications-for-iOS" target="_blank" rel="noopener noreferrer">(lmdb est 10 fois plus rapide que sqlite</a> ).</p><p><img src="//irmw.gumlet.io/yxZV8x.jpg" alt=""></p><p>Finalement, j&#39;ai opt\xE9 pour la version magique de <code>lmdb</code> - <code>mdbx</code>.</p><p>Actuellement, le paquetage existant de <code>rust</code> de <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">mdbx-rs (mdbx-sys)</a> de <code>mdbx</code> <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">ne supporte pas Windows</a>, donc j&#39;ai pris sur moi d&#39;empaqueter une version avec le support de Windows.</p><p>Prise en charge du stockage des types de rouille personnalis\xE9s. Prend en charge les acc\xE8s multithreads.</p><p>La base de donn\xE9es peut \xEAtre d\xE9finie dans un module \xE0 l&#39;aide de <code>lazy_static</code>, puis simplement introduite et utilis\xE9e avec quelque chose comme :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
</code></pre></div><h2 id="qu-est-ce-que-libmdbx" tabindex="-1"><a class="header-anchor" href="#qu-est-ce-que-libmdbx" aria-hidden="true">#</a> Qu&#39;est-ce que libmdbx ?</h2><p><a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">mdbx</a> est une base de donn\xE9es secondaire bas\xE9e sur lmdb, par le russe <a href="https://vk.com/erthink" target="_blank" rel="noopener noreferrer">\u041B\u0435\u043E\u043D\u0438\u0434 \u042E\u0440\u044C\u0435\u0432 (Leonid Yuriev)</a>.</p><p><a href="https://en.wikipedia.org/wiki/Lightning_Memory-Mapped_Database" target="_blank" rel="noopener noreferrer">lmdb</a> est une base de donn\xE9es cl\xE9-valeur embarqu\xE9e super rapide.</p><p>Le moteur de recherche en texte int\xE9gral <a href="https://docs.meilisearch.com/reference/under_the_hood/storage.html#measured-disk-usage" target="_blank" rel="noopener noreferrer">MeiliSearch</a> est bas\xE9 sur lmdb.</p><p><a href="https://docs.nvidia.com/deeplearning/dali/user-guide/docs/examples/general/data_loading/dataloading_lmdb.html" target="_blank" rel="noopener noreferrer">Le cadre d&#39;apprentissage profond caffe utilise \xE9galement lmdb comme magasin de donn\xE9es</a>.</p><p><a href="https://github.com/erthink/libmdbx#added-features" target="_blank" rel="noopener noreferrer">mdbx est 30% plus rapide que lmdb dans le test de performance embarqu\xE9 ioarena</a>.</p><p><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-1.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-3.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-4.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-5.png" alt=""></p><p>Parall\xE8lement, mdbx <a href="https://github.com/erthink/libmdbx#improvements-beyond-lmdb" target="_blank" rel="noopener noreferrer">am\xE9liore de nombreuses lacunes de</a> lmdb. C&#39;est pourquoi Erigon (le client ethereum de nouvelle g\xE9n\xE9ration) est r\xE9cemment pass\xE9 de LMDB \xE0 MDBX [^erigon].</p><h2 id="tutoriels" tabindex="-1"><a class="header-anchor" href="#tutoriels" aria-hidden="true">#</a> Tutoriels</h2><h3 id="comment-executer-l-exemple" tabindex="-1"><a class="header-anchor" href="#comment-executer-l-exemple" aria-hidden="true">#</a> Comment ex\xE9cuter l&#39;exemple</h3><p>Commencez par cloner la base de code <code>git clone git@github.com:rmw-lib/mdbx.git --depth=1 &amp;&amp; cd mdbx</code></p><p>Ensuite, ex\xE9cutez <code>cargo run --example 01</code> et il s&#39;ex\xE9cutera <code>examples/01.rs</code></p><p>S&#39;il s&#39;agit de votre propre projet, veuillez l&#39;ex\xE9cuter d&#39;abord :</p><div class="language-bash ext-sh"><pre class="language-bash"><code>cargo install cargo-edit
cargo add mdbx lazy_static ctor paste
</code></pre></div><h3 id="exemple-1-ecrire-set-key-val-et-lire-get-key" tabindex="-1"><a class="header-anchor" href="#exemple-1-ecrire-set-key-val-et-lire-get-key" aria-hidden="true">#</a> Exemple 1 : \xE9crire <code>set(key,val)</code> et lire <code>.get(key)</code></h3><p>Prenons un exemple simple, <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/01.rs" target="_blank" rel="noopener noreferrer">par exemple/01.rs</a>.</p><h4 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nom de la variable de la base de donn\xE9es Env
  Test // Test de la base de donn\xE9es
}

fn main() -&gt; Result&lt;()&gt; {
  // Afficher le num\xE9ro de version de libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Lecture et \xE9criture multithreads
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
</code></pre></div><h4 id="executer-la-sortie" tabindex="-1"><a class="header-anchor" href="#executer-la-sortie" aria-hidden="true">#</a> Ex\xE9cuter la sortie</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/01.mdb
mdbx version https://github.com/erthink/libmdbx/releases/tag/v0.11.2
test1 get Ok(Some(Bin([6])))
[6]
</code></pre></div><h4 id="description-du-code" tabindex="-1"><a class="header-anchor" href="#description-du-code" aria-hidden="true">#</a> Description du code</h4><h5 id="env-rw-definition-de-la-base-de-donnees" tabindex="-1"><a class="header-anchor" href="#env-rw-definition-de-la-base-de-donnees" aria-hidden="true">#</a> <code>env_rw!</code> D\xE9finition de la base de donn\xE9es</h5><p>Le code commence par une macro env_rw, qui a 4 param\xE8tres.</p><ol><li><p>Le nom de la variable de l&#39;environnement de la base de donn\xE9es</p></li><li><p>Retourne un objet, <a href="https://docs.rs/mdbx/latest/src/mdbx/env.rs.html#27-35" target="_blank" rel="noopener noreferrer">mdbx: : env: : Config</a>.</p></li></ol><p>Nous utilisons la configuration par d\xE9faut, car <code>Env</code> impl\xE9mente <code>From&lt;Into&lt;PathBuf&gt;&gt;</code>, donc le chemin de la base de donn\xE9es <code>into()</code> fera l&#39;affaire, et la configuration par d\xE9faut est la suivante.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
MDBX // Nom de la variable de la base de donn\xE9es Env
Test // Test de la base de donn\xE9es
}

fn main() -&gt; Result&lt;()&gt; {
// Afficher le num\xE9ro de version de libmdbx
unsafe {
  println!(
    &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
    mdbx_version.major, mdbx_version.minor, mdbx_version.release
  );
}

// Lecture et \xE9criture multithreads
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
    sync_period : 65536, // En 1/65536e de seconde
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
</code></pre></div><p><code>max_db</code> Ce param\xE8tre peut \xEAtre r\xE9initialis\xE9 \xE0 chaque fois que la base de donn\xE9es <a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">est</a> ouverte, mais un param\xE8tre trop \xE9lev\xE9 affectera les performances, il suffit de le d\xE9finir comme n\xE9cessaire.</p><p>Voir la <a href="https://erthink.github.io/libmdbx/group__c__opening.html#ga9138119a904355d245777c4119534061" target="_blank" rel="noopener noreferrer">documentation de libmdbx</a> pour la signification des autres param\xE8tres.</p><ol start="3"><li><p>Le nom de la macro de transaction de lecture de la base de donn\xE9es, la valeur par d\xE9faut est <code>r</code></p></li><li><p>Le nom de la macro de transaction d&#39;\xE9criture de la base de donn\xE9es, la valeur par d\xE9faut est <code>w</code></p></li></ol><p>Les param\xE8tres 3 et 4 peuvent \xEAtre omis pour utiliser les valeurs par d\xE9faut.</p><h5 id="macro-expansion" tabindex="-1"><a class="header-anchor" href="#macro-expansion" aria-hidden="true">#</a> Macro-expansion</h5><p>Si vous voulez voir ce que fait la macro magique, vous pouvez utiliser la macro <code>cargo expand --example 01</code> pour l&#39;\xE9tendre, qui doit \xEAtre install\xE9e au pr\xE9alable. <code>cargo install cargo-expand</code></p><p>Une capture d&#39;\xE9cran du code \xE9tendu est pr\xE9sent\xE9e ci-dessous.</p><p><img src="//irmw.gumlet.io/PDzEtT.png" alt="PDzEtT"></p><h5 id="de-toute-facon-et-lazy-static" tabindex="-1"><a class="header-anchor" href="#de-toute-facon-et-lazy-static" aria-hidden="true">#</a> de toute fa\xE7on et lazy_static</h5><p>Dans la capture d&#39;\xE9cran d\xE9velopp\xE9e, vous pouvez voir que <code>lazy_static</code> et <code>anyhow</code>sont utilis\xE9s.</p><p><a href="https://rustmagazine.github.io/rust_magazine_2021/chapter_2/rust_error_handle.html#thiserror--anyhow" target="_blank" rel="noopener noreferrer">anyhow</a> est la biblioth\xE8que de gestion des erreurs pour rust.</p><p><a href="https://juejin.cn/post/7007336922817232927" target="_blank" rel="noopener noreferrer">lazy_static</a> est une variable statique avec une initialisation retard\xE9e.</p><p>Ces deux biblioth\xE8ques sont tr\xE8s courantes et je ne m&#39;y attarderai pas.</p><h5 id="la-macro-mdbx" tabindex="-1"><a class="header-anchor" href="#la-macro-mdbx" aria-hidden="true">#</a> La macro mdbx !</h5><p><a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html" target="_blank" rel="noopener noreferrer"><code>mdbx!</code></a> est une <a href="https://mp.weixin.qq.com/s/YT_HNFDCQ_IyocvBkRNJnA" target="_blank" rel="noopener noreferrer">macro de proc\xE9dure</a>.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nom de la variable de la base de donn\xE9es Env
  Test // Test de la base de donn\xE9es
}

fn main() -&gt; Result&lt;()&gt; {
  // Afficher le num\xE9ro de version de libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Lecture et \xE9criture multithreads
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
      sync_period : 65536, // En 1/65536e de seconde
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
 MDBX // Nom de la variable de la base de donn\xE9es Env
 Test // Test de la base de donn\xE9es
}
</code></pre></div><p>La premi\xE8re ligne est le nom de la variable de l&#39;environnement de la base de donn\xE9es.</p><p>La deuxi\xE8me ligne est le nom de la base de donn\xE9es</p><p>Il peut y avoir plus d&#39;une base de donn\xE9es, une ligne pour chaque</p><h5 id="fils-et-transactions" tabindex="-1"><a class="header-anchor" href="#fils-et-transactions" aria-hidden="true">#</a> Fils et transactions</h5><p>Le code ci-dessus illustre la lecture et l&#39;\xE9criture multithread.</p><p>Il est important de noter qu&#39;il <strong>ne</strong> peut y <strong>avoir qu&#39;une seule transaction dans le m\xEAme thread \xE0 un moment donn\xE9. Si un thread a plus d&#39;une transaction ouverte, le programme se bloquera</strong>.</p><p>La transaction sera engag\xE9e \xE0 la fin de la port\xE9e.</p><h5 id="lecture-et-ecriture-de-donnees-binaires" tabindex="-1"><a class="header-anchor" href="#lecture-et-ecriture-de-donnees-binaires" aria-hidden="true">#</a> Lecture et \xE9criture de donn\xE9es binaires</h5><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nom de la variable de la base de donn\xE9es Env
  Test // Test de la base de donn\xE9es
}

fn main() -&gt; Result&lt;()&gt; {
  // Afficher le num\xE9ro de version de libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Lecture et \xE9criture multithreads
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
      sync_period : 65536, // En 1/65536e de seconde
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
 MDBX // Nom de la variable de la base de donn\xE9es Env
 Test // Test de la base de donn\xE9es
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
</code></pre></div><p><code>set</code> est une \xE9criture, <code>get</code> est une lecture, et tout objet qui impl\xE9mente la fonction <a href="https://doc.rust-lang.org/std/convert/trait.AsRef.html" target="_blank" rel="noopener noreferrer"><code>AsRef&lt;[u8]&gt;</code></a> peut \xEAtre \xE9crit dans la base de donn\xE9es.</p><p><code>get</code> Ce qui en ressort est <code>Ok(Some(Bin([6])))</code>qui peut \xEAtre converti en <code>&amp;[u8]</code>.</p><h3 id="exemple-2-types-de-donnees-drapeaux-de-base-de-donnees-suppression-traversee" tabindex="-1"><a class="header-anchor" href="#exemple-2-types-de-donnees-drapeaux-de-base-de-donnees-suppression-traversee" aria-hidden="true">#</a> Exemple 2 : Types de donn\xE9es, drapeaux de base de donn\xE9es, suppression, travers\xE9e.</h3><p>Regardons le deuxi\xE8me <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">exemple/02.rs</a>:</p><p>Dans cet exemple, <code>env_rw!</code> est omis et les troisi\xE8me et quatri\xE8me arguments ( <code>r</code>, <code>w</code>) sont omis.</p><h4 id="code-1" tabindex="-1"><a class="header-anchor" href="#code-1" aria-hidden="true">#</a> Code</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nom de la variable de la base de donn\xE9es Env
  Test // Test de la base de donn\xE9es
}

fn main() -&gt; Result&lt;()&gt; {
  // Afficher le num\xE9ro de version de libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Lecture et \xE9criture multithreads
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
      sync_period : 65536, // En 1/65536e de seconde
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
 MDBX // Nom de la variable de la base de donn\xE9es Env
 Test // Test de la base de donn\xE9es
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
  MDBX // Noms de variables pour la base de donn\xE9es ENV
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
  // \xC9criture rapide
  w!(Test1.set [2, 3],[4, 5]);

  // Lecture rapide
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

  // Op\xE9rations multiples sur plusieurs bases de donn\xE9es dans la m\xEAme transaction
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

    // La transaction sera engag\xE9e \xE0 la fin de la port\xE9e.
  }

  Ok(())
}
</code></pre></div><h4 id="executer-la-sortie-1" tabindex="-1"><a class="header-anchor" href="#executer-la-sortie-1" aria-hidden="true">#</a> Ex\xE9cuter la sortie</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/02.mdb

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
</code></pre></div><h4 id="lecture-et-ecriture-rapides" tabindex="-1"><a class="header-anchor" href="#lecture-et-ecriture-rapides" aria-hidden="true">#</a> Lecture et \xE9criture rapides</h4><p>Si nous voulons simplement lire ou \xE9crire une seule ligne de donn\xE9es, nous pouvons utiliser le sucre syntaxique d&#39;une macro.</p><p>Lire les donn\xE9es</p><div class="language-text ext-text"><pre class="language-text"><code>r!(Test1.get [2, 3])
</code></pre></div><p>\xC9criture de donn\xE9es</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nom de la variable de la base de donn\xE9es Env
  Test // Test de la base de donn\xE9es
}

fn main() -&gt; Result&lt;()&gt; {
  // Afficher le num\xE9ro de version de libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Lecture et \xE9criture multithreads
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
      sync_period : 65536, // En 1/65536e de seconde
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
 MDBX // Nom de la variable de la base de donn\xE9es Env
 Test // Test de la base de donn\xE9es
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
  MDBX // Noms de variables pour la base de donn\xE9es ENV
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
  // \xC9criture rapide
  w!(Test1.set [2, 3],[4, 5]);

  // Lecture rapide
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

  // Op\xE9rations multiples sur plusieurs bases de donn\xE9es dans la m\xEAme transaction
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

    // La transaction sera engag\xE9e \xE0 la fin de la port\xE9e.
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
</code></pre></div><p>Le tout en une seule ligne, comme \xE9crit dans <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a>.</p><h4 id="types-de-donnees" tabindex="-1"><a class="header-anchor" href="#types-de-donnees" aria-hidden="true">#</a> Types de donn\xE9es</h4><p>Dans exemples/02 <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">.rs</a>, la d\xE9finition de la base de donn\xE9es ressemble \xE0 ceci :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nom de la variable de la base de donn\xE9es Env
  Test // Test de la base de donn\xE9es
}

fn main() -&gt; Result&lt;()&gt; {
  // Afficher le num\xE9ro de version de libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Lecture et \xE9criture multithreads
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
      sync_period : 65536, // En 1/65536e de seconde
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
 MDBX // Nom de la variable de la base de donn\xE9es Env
 Test // Test de la base de donn\xE9es
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
  MDBX // Noms de variables pour la base de donn\xE9es ENV
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
  // \xC9criture rapide
  w!(Test1.set [2, 3],[4, 5]);

  // Lecture rapide
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

  // Op\xE9rations multiples sur plusieurs bases de donn\xE9es dans la m\xEAme transaction
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

    // La transaction sera engag\xE9e \xE0 la fin de la port\xE9e.
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
</code></pre></div><p>o\xF9 <code>key</code> et <code>val</code> d\xE9finissent les types de donn\xE9es pour les cl\xE9s et les valeurs respectivement.</p><p>Si vous essayez d&#39;\xE9crire un type de donn\xE9es qui ne correspond pas \xE0 celui qui a \xE9t\xE9 d\xE9fini, une erreur sera signal\xE9e, comme le montre la capture d&#39;\xE9cran ci-dessous :</p><p><img src="//irmw.gumlet.io/4rFTC6.png" alt=""></p><p>Le type de donn\xE9es par d\xE9faut est <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Bin.html" target="_blank" rel="noopener noreferrer"><code>Bin</code></a> Avec le syst\xE8me de gestion des donn\xE9es, il est possible d&#39;\xE9crire sur toutes les donn\xE9es qui mettent en \u0153uvre le site <code>AsRef&lt;[u8]&gt;</code>.</p><p>Si la cl\xE9 ou la valeur est une cha\xEEne de caract\xE8res <code>utf8</code>, le type de donn\xE9es peut \xEAtre d\xE9fini comme suit <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Str.html" target="_blank" rel="noopener noreferrer"><code>Str</code></a> .</p><p>Le <a href="https://doc.rust-lang.org/std/ops/trait.Deref.html" target="_blank" rel="noopener noreferrer">fait de d\xE9quoter</a> <code>Str</code> renverra une cha\xEEne de caract\xE8res, similaire \xE0 <code>let k:&amp;str = &amp;k;</code>.</p><p>En outre, <code>Str</code> met \xE9galement en \u0153uvre <a href="https://doc.rust-lang.org/std/fmt/trait.Display.html" target="_blank" rel="noopener noreferrer"><code>std::fmt::Display</code></a><code>println!(&quot;{}&quot;,k)</code> produira une cha\xEEne de caract\xE8res lisible.</p><h5 id="types-de-donnees-predefinis" tabindex="-1"><a class="header-anchor" href="#types-de-donnees-predefinis" aria-hidden="true">#</a> Types de donn\xE9es pr\xE9d\xE9finis</h5><p>En plus de <code>Str</code> et <code>Bin</code>, le wrapper est \xE9galement livr\xE9 avec un support de donn\xE9es pour <a href="https://docs.rs/mdbx/latest/src/mdbx/type.rs.html#48" target="_blank" rel="noopener noreferrer">usize, u128, u64, u32, u16, u8, isize, i128, i64, i32, i16, i8, f32, f64</a>.</p><h4 id="drapeaux-de-base-de-donnees" tabindex="-1"><a class="header-anchor" href="#drapeaux-de-base-de-donnees" aria-hidden="true">#</a> Drapeaux de base de donn\xE9es</h4><p>Vous pouvez voir les drapeaux de base de donn\xE9es ajout\xE9s aux donn\xE9es dans <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">examples/02.rs</a> \xE0 <code>Test4</code>. <code>flag DUPSORT</code></p><p>La base de donn\xE9es libmdbx poss\xE8de un certain nombre d&#39;indicateurs ( <a href="https://erthink.github.io/libmdbx/group__c__dbi.html#gafe3bddb297b3ab0d828a487c5726f76a" target="_blank" rel="noopener noreferrer"><code>MDBX_db_flags_t</code></a> ) qui peuvent \xEAtre d\xE9finis.</p><ul><li>REVERSEKEY utilise la comparaison inverse des cha\xEEnes pour les cl\xE9s. (utile lorsque vous utilisez des petits num\xE9ros cod\xE9s en bout de ligne comme cl\xE9s)</li><li>DUPSORT utilise des doublons tri\xE9s, c&#39;est-\xE0-dire qu&#39;il autorise plusieurs valeurs pour une cl\xE9.</li><li>INTEGERKEY Cl\xE9 num\xE9rique native ordonn\xE9e par octets uint32_t ou uint64_t. Les cl\xE9s doivent avoir la m\xEAme taille et doivent \xEAtre align\xE9es lorsqu&#39;elles sont pass\xE9es comme arguments.</li><li>DUPFIXED La taille des valeurs de donn\xE9es doit \xEAtre la m\xEAme si DUPSORT est utilis\xE9 (permet un comptage rapide du nombre de valeurs).</li><li>DUPSORT et DUPFIXED sont n\xE9cessaires pour INTEGERDUP ; les valeurs sont des entiers (similaires \xE0 INTEGERKEY). Les valeurs de donn\xE9es doivent toutes avoir la m\xEAme taille et doivent \xEAtre align\xE9es lorsqu&#39;elles sont transmises en tant que param\xE8tres.</li><li>REVERSEDUP utilise DUPSORT ; la comparaison inverse des cha\xEEnes de caract\xE8res est utilis\xE9e pour les valeurs de donn\xE9es.</li><li>CREATE cr\xE9e la BD si elle n&#39;existe pas (ajout\xE9e par d\xE9faut).</li><li>DB_ACCEDE Ouvre une sous-base de donn\xE9es existante cr\xE9\xE9e \xE0 l&#39;aide de l&#39;indicateur inconnu.<br> Cet indicateur DB_ACCEDE est destin\xE9 \xE0 ouvrir des sous-bases de donn\xE9es existantes cr\xE9\xE9es avec des indicateurs inconnus (REVERSEKEY, DUPSORT, INTEGERKEY, DUPFIXED, INTEGERDUP et REVERSEDUP).<br> Dans ce cas, la sous-base de donn\xE9es ne renverra pas une erreur INCOMPATIBLE, mais sera ouverte avec les drapeaux utilis\xE9s pour la cr\xE9er, et l&#39;application pourra alors d\xE9terminer les drapeaux r\xE9els avec mdbx_dbi_flags().</li></ul><h5 id="dupsort-une-cle-correspond-a-plus-d-une-valeur" tabindex="-1"><a class="header-anchor" href="#dupsort-une-cle-correspond-a-plus-d-une-valeur" aria-hidden="true">#</a> DUPSORT : Une cl\xE9 correspond \xE0 plus d&#39;une valeur</h5><p><code>DUPSORT</code>Cela signifie qu&#39;une cl\xE9 peut correspondre \xE0 plus d&#39;une valeur.</p><p>Si vous voulez d\xE9finir plusieurs drapeaux, \xE9crivez comme suit <code>flag DUPSORT | DUPFIXED</code></p><h5 id="dup-key-iterateur-qui-renvoie-toutes-les-valeurs-correspondant-a-une-cle" tabindex="-1"><a class="header-anchor" href="#dup-key-iterateur-qui-renvoie-toutes-les-valeurs-correspondant-a-une-cle" aria-hidden="true">#</a> <code>.dup(key)</code> it\xE9rateur qui renvoie toutes les valeurs correspondant \xE0 une cl\xE9</h5><p>Cette fonction est uniquement disponible pour les bases de donn\xE9es marqu\xE9es par <code>DUPSORT</code> o\xF9 une cl\xE9 peut correspondre \xE0 plus d&#39;une valeur.</p><p>Pour les bases de donn\xE9es <code>DUPSORT</code>, <code>get</code> ne renvoie que la premi\xE8re valeur pour cette cl\xE9. Pour obtenir toutes les valeurs, utilisez <code>dup</code>.</p><h5 id="drapeaux-de-base-de-donnees-ajoutes-automatiquement-par-defaut" tabindex="-1"><a class="header-anchor" href="#drapeaux-de-base-de-donnees-ajoutes-automatiquement-par-defaut" aria-hidden="true">#</a> Drapeaux de base de donn\xE9es ajout\xE9s automatiquement par d\xE9faut</h5><p>Lorsque le type de donn\xE9es est <code>u32</code> / <code>u64</code> / <code>usize</code>, l&#39;indicateur de base de donn\xE9es est automatiquement ajout\xE9. <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#105" target="_blank" rel="noopener noreferrer"><code>INTEGERKEY</code></a> .</p><p>Sur les machines dot\xE9es d&#39;un syst\xE8me de codage \xE0 petite \xE9chelle, d&#39;autres types de chiffres sont automatiquement ajout\xE9s. <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#108" target="_blank" rel="noopener noreferrer"><code>REVERSEKEY</code></a> L&#39;indicateur de base de donn\xE9es est automatiquement ajout\xE9 lorsque le type de donn\xE9es est / / .</p><h4 id="suppression-des-donnees" tabindex="-1"><a class="header-anchor" href="#suppression-des-donnees" aria-hidden="true">#</a> Suppression des donn\xE9es</h4><h5 id="del-key-suppression-d-une-touche" tabindex="-1"><a class="header-anchor" href="#del-key-suppression-d-une-touche" aria-hidden="true">#</a> <code>.del(key)</code> Suppression d&#39;une touche</h5><p><code>.del(val)</code> Supprime la valeur correspondant \xE0 une cl\xE9.</p><p>Si la base de donn\xE9es a le drapeau <code>DUPSORT</code>, toutes les valeurs sous cette cl\xE9 seront supprim\xE9es.</p><p>Renvoie <code>true</code>si des donn\xE9es sont supprim\xE9es, et <code>false</code>dans le cas contraire.</p><h5 id="del-val-key-val-suppression-de-la-correspondance-exacte" tabindex="-1"><a class="header-anchor" href="#del-val-key-val-suppression-de-la-correspondance-exacte" aria-hidden="true">#</a> <code>.del_val(key,val)</code> Suppression de la correspondance exacte</h5><p><code>.del_val(key,val)</code> Supprime les paires cl\xE9-valeur qui correspondent exactement aux param\xE8tres d&#39;entr\xE9e.</p><p>Renvoie <code>true</code>si des donn\xE9es sont supprim\xE9es, et <code>false</code>dans le cas contraire.</p><h4 id="traversee" tabindex="-1"><a class="header-anchor" href="#traversee" aria-hidden="true">#</a> Travers\xE9e</h4><h5 id="traversee-sequentielle" tabindex="-1"><a class="header-anchor" href="#traversee-sequentielle" aria-hidden="true">#</a> travers\xE9e s\xE9quentielle</h5><p>En raison de la mise en \u0153uvre de <a href="https://doc.rust-lang.org/std/iter/trait.IntoIterator.html" target="_blank" rel="noopener noreferrer"><code>std::iter::IntoIterator</code></a> . vous pouvez traverser directement comme suit :</p><p><code>for (k, v) in test1</code></p><h5 id="rev-traversee-de-l-ordre-inverse" tabindex="-1"><a class="header-anchor" href="#rev-traversee-de-l-ordre-inverse" aria-hidden="true">#</a> <code>.rev()</code> Travers\xE9e de l&#39;ordre inverse</h5><p><code>for (k, v) in test4.rev()</code></p><h5 id="triage" tabindex="-1"><a class="header-anchor" href="#triage" aria-hidden="true">#</a> Triage</h5><p>Les cl\xE9s libmdbx sont tri\xE9es dans l&#39;<a href="https://zh.wikipedia.org/wiki/%E5%AD%97%E5%85%B8%E5%BA%8F" target="_blank" rel="noopener noreferrer">ordre du dictionnaire</a>.</p><ul><li><p>Pour les nombres non sign\xE9s</p><p>sont tri\xE9s du plus petit au plus grand car les drapeaux de la base de donn\xE9es sont automatiquement ajout\xE9s ( <code>u32</code>/ <code>u64</code>/ <code>usize</code> sont ajout\xE9s \xE0 <code>INTEGERKEY</code>, d&#39;autres sont ajout\xE9s \xE0 <code>REVERSEKEY</code> selon le code machine).</p></li><li><p>Pour les nombres sign\xE9s</p><p>l&#39;ordre est le suivant : 0 d&#39;abord, puis tous les nombres positifs du plus petit au plus grand, puis tous les nombres n\xE9gatifs du plus petit au plus grand.</p></li></ul><h3 id="iterateurs-d-intervalles" tabindex="-1"><a class="header-anchor" href="#iterateurs-d-intervalles" aria-hidden="true">#</a> It\xE9rateurs d&#39;intervalles</h3><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nom de la variable de la base de donn\xE9es Env
  Test // Test de la base de donn\xE9es
}

fn main() -&gt; Result&lt;()&gt; {
  // Afficher le num\xE9ro de version de libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Lecture et \xE9criture multithreads
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
      sync_period : 65536, // En 1/65536e de seconde
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
 MDBX // Nom de la variable de la base de donn\xE9es Env
 Test // Test de la base de donn\xE9es
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
  MDBX // Noms de variables pour la base de donn\xE9es ENV
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
  // \xC9criture rapide
  w!(Test1.set [2, 3],[4, 5]);

  // Lecture rapide
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

  // Op\xE9rations multiples sur plusieurs bases de donn\xE9es dans la m\xEAme transaction
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

    // La transaction sera engag\xE9e \xE0 la fin de la port\xE9e.
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
</code></pre></div><h4 id="executez-la-sortie-de" tabindex="-1"><a class="header-anchor" href="#executez-la-sortie-de" aria-hidden="true">#</a> Ex\xE9cutez la sortie de</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/range.mdb

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
</code></pre></div><h4 id="range-begin-end-intervalle-iteration" tabindex="-1"><a class="header-anchor" href="#range-begin-end-intervalle-iteration" aria-hidden="true">#</a> <code>.range(begin..end)</code> Intervalle Iteration</h4><p>Pour les nombres, un intervalle est un intervalle num\xE9rique.</p><p>Pour le binaire, le m\xEAme intervalle peut \xEAtre construit, par exemple</p><div class="language-text ext-text"><pre class="language-text"><code>let begin : &amp;[u8] = &amp;[1,1];
for (k,v) in test0.range(begin..=&amp;[2]) {}
</code></pre></div><p>Si <code>begin</code> est sup\xE9rieur \xE0 <code>end</code>, l&#39;it\xE9ration se fera en sens inverse.</p><p>Par exemple, <code>test1.range(5..2)</code> produira le r\xE9sultat suivant :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nom de la variable de la base de donn\xE9es Env
  Test // Test de la base de donn\xE9es
}

fn main() -&gt; Result&lt;()&gt; {
  // Afficher le num\xE9ro de version de libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Lecture et \xE9criture multithreads
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
      sync_period : 65536, // En 1/65536e de seconde
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
 MDBX // Nom de la variable de la base de donn\xE9es Env
 Test // Test de la base de donn\xE9es
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
  MDBX // Noms de variables pour la base de donn\xE9es ENV
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
  // \xC9criture rapide
  w!(Test1.set [2, 3],[4, 5]);

  // Lecture rapide
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

  // Op\xE9rations multiples sur plusieurs bases de donn\xE9es dans la m\xEAme transaction
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

    // La transaction sera engag\xE9e \xE0 la fin de la port\xE9e.
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
</code></pre></div><p>L&#39;it\xE9ration par intervalles n&#39;est pas prise en charge <a href="https://doc.rust-lang.org/std/ops/struct.RangeFull.html" target="_blank" rel="noopener noreferrer"><code>RangeFull</code></a> L&#39;utilisation de <code>..</code>n&#39;est pas support\xE9e, veuillez utiliser la <a href="#%E9%81%8D%E5%8E%86">travers\xE9e</a> mentionn\xE9e ci-dessus \xE0 la place.</p><h4 id="rev-range-intervalles-inverses" tabindex="-1"><a class="header-anchor" href="#rev-range-intervalles-inverses" aria-hidden="true">#</a> <code>.rev_range</code> Intervalles invers\xE9s</h4><p>Si vous voulez obtenir un intervalle invers\xE9 qui est inf\xE9rieur ou \xE9gal \xE0 une valeur, vous pouvez proc\xE9der comme suit</p><div class="language-text ext-text"><pre class="language-text"><code>test2.rev_range(2..)
</code></pre></div><p>La sortie sera</p><div class="language-text ext-text"><pre class="language-text"><code>(2, 4)
(1, 5)
(0, 0)
</code></pre></div><p>L&#39;une des deux options <code>begin</code> ou <code>end</code> ne doit pas \xEAtre d\xE9finie pour l&#39;intervalle invers\xE9, car si les deux sont d\xE9finies, vous pouvez toujours utiliser <code>range(end..begin)</code> pour obtenir le m\xEAme effet.</p><h3 id="personnalisation-des-types-de-donnees" tabindex="-1"><a class="header-anchor" href="#personnalisation-des-types-de-donnees" aria-hidden="true">#</a> Personnalisation des types de donn\xE9es</h3><p>Le code de d\xE9monstration est disponible \xE0 l&#39;adresse <a href="https://github.com/rmw-lib/mdbx-example/blob/master/01/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/01</a>.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nom de la variable de la base de donn\xE9es Env
  Test // Test de la base de donn\xE9es
}

fn main() -&gt; Result&lt;()&gt; {
  // Afficher le num\xE9ro de version de libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Lecture et \xE9criture multithreads
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
      sync_period : 65536, // En 1/65536e de seconde
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
 MDBX // Nom de la variable de la base de donn\xE9es Env
 Test // Test de la base de donn\xE9es
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
  MDBX // Noms de variables pour la base de donn\xE9es ENV
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
  // \xC9criture rapide
  w!(Test1.set [2, 3],[4, 5]);

  // Lecture rapide
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

  // Op\xE9rations multiples sur plusieurs bases de donn\xE9es dans la m\xEAme transaction
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

    // La transaction sera engag\xE9e \xE0 la fin de la port\xE9e.
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
</code></pre></div><p>Le r\xE9sultat est le suivant</p><div class="language-text ext-text"><pre class="language-text"><code>Some(City { name: &quot;BeiJing&quot;, lnglat: (11640, 3990) })
</code></pre></div><p>Dans l&#39;exemple du type personnalis\xE9, nous utilisons <a href="https://github.com/koute/speedy" target="_blank" rel="noopener noreferrer"><code>speedy</code></a> pour faire la s\xE9rialisation <a href="https://github.com/djkoloski/rust_serialization_benchmark" target="_blank" rel="noopener noreferrer">( <code>speedy</code> examen des performances</a> ).</p><p>Mise en \u0153uvre de types personnalis\xE9s <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.FromMdbx.html" target="_blank" rel="noopener noreferrer"><code>FromMdbx</code></a> et <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.ToAsRef.html" target="_blank" rel="noopener noreferrer"><code>ToAsRef</code></a> peut alors \xEAtre stock\xE9 sur <code>mdbx</code>.</p><p>Si vous utilisez une biblioth\xE8que de s\xE9rialisation sp\xE9cifique, vous pouvez \xE9galement personnaliser les <a href="https://blog.logrocket.com/macros-in-rust-a-tutorial-with-examples/" target="_blank" rel="noopener noreferrer">macros d&#39;</a> attributs pour simplifier le processus.</p><h4 id="simplifier-les-types-personnalises-avec-les-macros-d-attributs" tabindex="-1"><a class="header-anchor" href="#simplifier-les-types-personnalises-avec-les-macros-d-attributs" aria-hidden="true">#</a> Simplifier les types personnalis\xE9s avec les macros d&#39;attributs</h4><p>La mise en \u0153uvre d&#39;une macro d&#39;attribut est aussi simple que <a href="https://crates.io/crates/mdbx_speedy" target="_blank" rel="noopener noreferrer"><code>mdbx_speedy</code></a> Le code de la macro attributaire est le suivant :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nom de la variable de la base de donn\xE9es Env
  Test // Test de la base de donn\xE9es
}

fn main() -&gt; Result&lt;()&gt; {
  // Afficher le num\xE9ro de version de libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Lecture et \xE9criture multithreads
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
      sync_period : 65536, // En 1/65536e de seconde
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
 MDBX // Nom de la variable de la base de donn\xE9es Env
 Test // Test de la base de donn\xE9es
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
  MDBX // Noms de variables pour la base de donn\xE9es ENV
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
  // \xC9criture rapide
  w!(Test1.set [2, 3],[4, 5]);

  // Lecture rapide
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

  // Op\xE9rations multiples sur plusieurs bases de donn\xE9es dans la m\xEAme transaction
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

    // La transaction sera engag\xE9e \xE0 la fin de la port\xE9e.
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
</code></pre></div><p>Commencez par <code>cargo add mdbx-speedy</code>dans votre propre projet, puis vous pourrez rapidement personnaliser le type (voir <a href="https://github.com/rmw-lib/mdbx-example/blob/master/02/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/02</a> pour le code de d\xE9monstration).</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nom de la variable de la base de donn\xE9es Env
  Test // Test de la base de donn\xE9es
}

fn main() -&gt; Result&lt;()&gt; {
  // Afficher le num\xE9ro de version de libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Lecture et \xE9criture multithreads
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
      sync_period : 65536, // En 1/65536e de seconde
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
 MDBX // Nom de la variable de la base de donn\xE9es Env
 Test // Test de la base de donn\xE9es
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
  MDBX // Noms de variables pour la base de donn\xE9es ENV
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
  // \xC9criture rapide
  w!(Test1.set [2, 3],[4, 5]);

  // Lecture rapide
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

  // Op\xE9rations multiples sur plusieurs bases de donn\xE9es dans la m\xEAme transaction
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

    // La transaction sera engag\xE9e \xE0 la fin de la port\xE9e.
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
</code></pre></div><p>Bien s\xFBr, il est toujours ennuyeux d&#39;\xE9crire <code>#[derive(PartialEq, Debug, Readable, Writable, MdbxSpeedy)]</code> de mani\xE8re r\xE9p\xE9t\xE9e, donc vous pouvez utiliser <a href="https://docs.rs/derive-alias/0.1.0/derive_alias" target="_blank" rel="noopener noreferrer"><code>derive_alias</code></a> pour simplifier davantage le code.</p><h2 id="note-sur-l-utilisation-de" tabindex="-1"><a class="header-anchor" href="#note-sur-l-utilisation-de" aria-hidden="true">#</a> Note sur l&#39;utilisation de</h2><h3 id="la-longueur-de-la-cle" tabindex="-1"><a class="header-anchor" href="#la-longueur-de-la-cle" aria-hidden="true">#</a> La longueur de la cl\xE9</h3><ul><li>Minimum 0, maximum \u2248 \xBD taille de page (par d\xE9faut 4K page cl\xE9 taille maximale est 2022 octets), d\xE9fini lors de l&#39;initialisation de la base de donn\xE9es <code>pagesize</code> peut \xEAtre configur\xE9 \xE0 pas plus de <code>65536</code>et doit \xEAtre une puissance de 2.</li></ul><h2 id="notes-de-bas-de-page" tabindex="-1"><a class="header-anchor" href="#notes-de-bas-de-page" aria-hidden="true">#</a> Notes de bas de page</h2><p>[^erigon] : <a href="https://github.com/ledgerwatch/erigon/wiki/Criteria-for-transitioning-from-Alpha-to-Beta#switch-from-lmdb-to-mdbx" target="_blank" rel="noopener noreferrer">Erigon (le client Ethernet de nouvelle g\xE9n\xE9ration) est r\xE9cemment pass\xE9 de LMDB \xE0 MDBX</a>.</p><p>Ils citent les avantages de la transition de LMDB \xE0 MDBX.</p><blockquote><p>Erigon a commenc\xE9 avec une base de donn\xE9es BoltDB, puis a ajout\xE9 la prise en charge de BadgerDB et a finalement migr\xE9 compl\xE8tement vers LMDB. \xC0 un moment donn\xE9, nous avons rencontr\xE9 des probl\xE8mes de stabilit\xE9 caus\xE9s par notre utilisation de LMDB qui n&#39;avaient pas \xE9t\xE9 pr\xE9vus par les cr\xE9ateurs. Depuis lors, nous avons \xE9tudi\xE9 un d\xE9riv\xE9 de LMDB bien support\xE9, appel\xE9 MDBX, et nous esp\xE9rons profiter de ses am\xE9liorations en mati\xE8re de stabilit\xE9 et \xE9ventuellement collaborer davantage \xE0 l&#39;avenir. L&#39;int\xE9gration de MDBX est maintenant termin\xE9e et il est temps de proc\xE9der \xE0 d&#39;autres tests et \xE0 la documentation.</p><p>Avantages de la transition de LMDB \xE0 MDBX.</p><ol><li><p>La croissance &quot;espace (g\xE9om\xE9trie)&quot; des fichiers de la base de donn\xE9es fonctionne correctement. C&#39;est important, surtout sous Windows. Dans LMDB, il faut sp\xE9cifier la taille de la carte m\xE9moire une fois \xE0 l&#39;avance (actuellement, nous utilisons 2 To par d\xE9faut) et si le fichier de la base de donn\xE9es d\xE9passe cette limite, le processus doit \xEAtre red\xE9marr\xE9. Sous Windows, si la taille de la carte m\xE9moire est fix\xE9e \xE0 2 To, le fichier de la base de donn\xE9es aura une taille initiale de 2 To, ce qui n&#39;est pas tr\xE8s pratique. Dans MDBX, la taille de la carte m\xE9moire est augment\xE9e par incr\xE9ments de 2 Go. Cela implique un remappage occasionnel, mais se traduit par une meilleure exp\xE9rience utilisateur.</p></li><li><p>MDBX effectue des contr\xF4les plus stricts sur l&#39;utilisation simultan\xE9e du traitement des transactions et le chevauchement des transactions de lecture et d&#39;\xE9criture dans le m\xEAme fil d&#39;ex\xE9cution. Cela nous permet de rep\xE9rer certaines erreurs non \xE9videntes et rend le comportement plus pr\xE9visible.<br> En plus de 5 ans (depuis qu&#39;il a \xE9t\xE9 s\xE9par\xE9 de LMDB), MDBX a accumul\xE9 un grand nombre de correctifs de s\xE9curit\xE9 et d&#39;heisenbugs qui, \xE0 notre connaissance, existent toujours dans LMDB. Certains d&#39;entre eux ont \xE9t\xE9 d\xE9couverts lors de nos tests, et les responsables de MDBX les ont pris au s\xE9rieux et les ont corrig\xE9s rapidement.</p></li><li><p>Les bases de donn\xE9es qui modifient constamment leurs donn\xE9es cr\xE9ent une grande quantit\xE9 d&#39;espace r\xE9cup\xE9rable (\xE9galement appel\xE9 &quot;freelist&quot; dans la terminologie LMDB). Nous avons d\xFB patcher LMDB pour corriger les d\xE9fauts les plus graves dans la gestion de l&#39;espace r\xE9cup\xE9rable ( <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide" target="_blank" rel="noopener noreferrer">analyse)</a>. MDBX a accord\xE9 une <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide%EF%BC%89%E3%80%82MDBX%E5%AF%B9%E5%8F%AF%E5%9B%9E%E6%94%B6%E7%A9%BA%E9%97%B4%E7%9A%84%E6%9C%89%E6%95%88%E5%A4%84%E7%90%86%E8%BF%9B%E8%A1%8C%E4%BA%86%E7%89%B9%E5%88%AB%E7%9A%84%E5%85%B3%E6%B3%A8%EF%BC%8C%E5%88%B0%E7%9B%AE%E5%89%8D%E4%B8%BA%E6%AD%A2%EF%BC%8C%E8%BF%98%E4%B8%8D%E9%9C%80%E8%A6%81%E6%89%93%E8%A1%A5%E4%B8%81%E3%80%82" target="_blank" rel="noopener noreferrer">attention particuli\xE8re \xE0 la gestion efficace de l&#39;espace r\xE9cup\xE9rable et, jusqu&#39;\xE0 pr\xE9sent, n&#39;a pas eu besoin d&#39;\xEAtre patch\xE9</a>.</p></li><li><p>D&#39;apr\xE8s nos tests, MDBX a obtenu des r\xE9sultats l\xE9g\xE8rement meilleurs sur nos charges de travail.</p></li><li><p>MDBX expose davantage de donn\xE9es de t\xE9l\xE9m\xE9trie interne, c&#39;est-\xE0-dire davantage de mesures sur ce qui se passe dans la base de donn\xE9es. Et nous avons ces donn\xE9es dans Grafana - pour prendre de meilleures d\xE9cisions sur la conception des applications. Par exemple, apr\xE8s la transition compl\xE8te vers MDBX (suppression de la prise en charge de LMDB), nous mettrons en \u0153uvre une politique de &quot;commit half full transaction&quot; pour \xE9viter les contacts de disque en surnombre ou non. Cela simplifiera davantage notre code sans affecter les performances.</p></li><li><p>MDBX supporte le mode &quot;Ouverture exclusive&quot; - nous l&#39;utilisons pour les migrations de bases de donn\xE9es afin d&#39;emp\xEAcher tout autre lecteur d&#39;acc\xE9der \xE0 la base de donn\xE9es pendant le processus de migration.</p></li></ol></blockquote>`,159);function ae(re,oe){const t=u("RouterLink");return o(),l(d,null,[c,m,b,g,e("nav",h,[e("ul",null,[e("li",null,[s(t,{to:"#citations"},{default:a(()=>[_]),_:1})]),e("li",null,[s(t,{to:"#qu-est-ce-que-libmdbx"},{default:a(()=>[v]),_:1})]),e("li",null,[s(t,{to:"#tutoriels"},{default:a(()=>[f]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#comment-executer-l-exemple"},{default:a(()=>[x]),_:1})]),e("li",null,[s(t,{to:"#exemple-1-ecrire-set-key-val-et-lire-get-key"},{default:a(()=>[q]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#code"},{default:a(()=>[y]),_:1})]),e("li",null,[s(t,{to:"#executer-la-sortie"},{default:a(()=>[E]),_:1})]),e("li",null,[s(t,{to:"#description-du-code"},{default:a(()=>[D]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#env-rw-definition-de-la-base-de-donnees"},{default:a(()=>[k]),_:1})]),e("li",null,[s(t,{to:"#macro-expansion"},{default:a(()=>[w]),_:1})]),e("li",null,[s(t,{to:"#de-toute-facon-et-lazy-static"},{default:a(()=>[T]),_:1})]),e("li",null,[s(t,{to:"#la-macro-mdbx"},{default:a(()=>[B]),_:1})]),e("li",null,[s(t,{to:"#fils-et-transactions"},{default:a(()=>[N]),_:1})]),e("li",null,[s(t,{to:"#lecture-et-ecriture-de-donnees-binaires"},{default:a(()=>[M]),_:1})])])])])]),e("li",null,[s(t,{to:"#exemple-2-types-de-donnees-drapeaux-de-base-de-donnees-suppression-traversee"},{default:a(()=>[S]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#code-1"},{default:a(()=>[X]),_:1})]),e("li",null,[s(t,{to:"#executer-la-sortie-1"},{default:a(()=>[C]),_:1})]),e("li",null,[s(t,{to:"#lecture-et-ecriture-rapides"},{default:a(()=>[O]),_:1})]),e("li",null,[s(t,{to:"#types-de-donnees"},{default:a(()=>[R]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#types-de-donnees-predefinis"},{default:a(()=>[L]),_:1})])])]),e("li",null,[s(t,{to:"#drapeaux-de-base-de-donnees"},{default:a(()=>[V]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#dupsort-une-cle-correspond-a-plus-d-une-valeur"},{default:a(()=>[U]),_:1})]),e("li",null,[s(t,{to:"#dup-key-iterateur-qui-renvoie-toutes-les-valeurs-correspondant-a-une-cle"},{default:a(()=>[I]),_:1})]),e("li",null,[s(t,{to:"#drapeaux-de-base-de-donnees-ajoutes-automatiquement-par-defaut"},{default:a(()=>[A]),_:1})])])]),e("li",null,[s(t,{to:"#suppression-des-donnees"},{default:a(()=>[z]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#del-key-suppression-d-une-touche"},{default:a(()=>[P]),_:1})]),e("li",null,[s(t,{to:"#del-val-key-val-suppression-de-la-correspondance-exacte"},{default:a(()=>[F]),_:1})])])]),e("li",null,[s(t,{to:"#traversee"},{default:a(()=>[$]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#traversee-sequentielle"},{default:a(()=>[j]),_:1})]),e("li",null,[s(t,{to:"#rev-traversee-de-l-ordre-inverse"},{default:a(()=>[Y]),_:1})]),e("li",null,[s(t,{to:"#triage"},{default:a(()=>[G]),_:1})])])])])]),e("li",null,[s(t,{to:"#iterateurs-d-intervalles"},{default:a(()=>[H]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#executez-la-sortie-de"},{default:a(()=>[W]),_:1})]),e("li",null,[s(t,{to:"#range-begin-end-intervalle-iteration"},{default:a(()=>[K]),_:1})]),e("li",null,[s(t,{to:"#rev-range-intervalles-inverses"},{default:a(()=>[J]),_:1})])])]),e("li",null,[s(t,{to:"#personnalisation-des-types-de-donnees"},{default:a(()=>[Q]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#simplifier-les-types-personnalises-avec-les-macros-d-attributs"},{default:a(()=>[Z]),_:1})])])])])]),e("li",null,[s(t,{to:"#note-sur-l-utilisation-de"},{default:a(()=>[ee]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#la-longueur-de-la-cle"},{default:a(()=>[ne]),_:1})])])]),e("li",null,[s(t,{to:"#notes-de-bas-de-page"},{default:a(()=>[te]),_:1})])])]),se],64)}var ie=r(p,[["render",ae],["__file","2021-12-21-mdbx.html.vue"]]);export{ie as default};
