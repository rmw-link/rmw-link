import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as d,a as e,b as a,w as s,F as i,d as t,e as l,r as u}from"./app.2a6a1bd2.js";const p={},m=e("h1",{id:"o-pacote-de-ferrugem-para-a-libmdbx",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#o-pacote-de-ferrugem-para-a-libmdbx","aria-hidden":"true"},"#"),t(" O pacote de ferrugem para a libmdbx")],-1),c=e("p",null,[t("A embalagem "),e("code",null,"rust"),t(" para a base de dados "),e("a",{href:"https://github.com/erthink/libmdbx",target:"_blank",rel:"noopener noreferrer"},"da libmdbx"),t(".")],-1),g=e("hr",null,null,-1),b=e("p",null,"Direct\xF3rio :",-1),h={class:"table-of-contents"},_=t("Cita\xE7\xF5es"),v=t("O que \xE9 a libmdbx?"),f=t("Tutoriais"),x=t("Como executar o exemplo"),q=t("Exemplo 1 : Escrever set(key,val) e ler .get(key)"),E=t("C\xF3digo"),D=t("Executar a sa\xEDda"),k=t("Descri\xE7\xE3o do c\xF3digo"),y=t("env_rw! Definindo a base de dados"),B=t("Macro expans\xE3o"),w=t("de qualquer forma e pregui\xE7oso_est\xE1tico"),T=t("A macro mdbx!"),N=t("T\xF3picos e transac\xE7\xF5es"),M=t("Leitura e escrita de dados bin\xE1rios"),S=t("Exemplo 2: Tipos de dados, marca\xE7\xF5es de banco de dados, elimina\xE7\xE3o, travessia"),X=t("C\xF3digo"),O=t("Executar a sa\xEDda"),C=t("Leituras e escritas r\xE1pidas"),R=t("Tipos de dados"),V=t("Tipos de dados predefinidos"),A=t("Bandeiras de banco de dados"),U=t("DUPSORT : Uma chave corresponde a mais do que um valor"),L=t(".dup(key) iterador que devolve todos os valores correspondentes a uma chave"),I=t("Bandeiras de banco de dados automaticamente anexadas por padr\xE3o"),z=t("Elimina\xE7\xE3o de dados"),P=t(".del(key) Elimina\xE7\xE3o de uma chave"),F=t(".del_val(key,val) Elimina\xE7\xE3o exacta da correspond\xEAncia"),$=t("Traversal"),j=t("travessia sequencial"),Y=t(".rev() Travessia de ordem inversa"),G=t("Classifica\xE7\xE3o"),H=t("Iteradores de intervalo"),W=t("Execute a sa\xEDda de"),K=t(".range(begin..end) Itera\xE7\xE3o de Intervalo"),J=t(".rev_range Intervalos invertidos"),Q=t("Personaliza\xE7\xE3o de tipos de dados"),Z=t("Simplifica\xE7\xE3o de tipos personalizados com macros de atributos"),ee=t("Nota sobre a utiliza\xE7\xE3o de"),te=t("O comprimento da chave"),ne=t("Notas de rodap\xE9"),ae=l(`<hr><h2 id="citacoes" tabindex="-1"><a class="header-anchor" href="#citacoes" aria-hidden="true">#</a> Cita\xE7\xF5es</h2><p>Enquanto escrevia <a href="https://rmw.link" target="_blank" rel="noopener noreferrer">&#39;rmw.link</a> &#39;, senti que precisava de uma base de dados incorporada.</p><p>Devido ao rendimento da rede envolvido na grava\xE7\xE3o, leitura e escrita frequentemente, <code>sqlite3</code> estava demasiado avan\xE7ado para preocupa\xE7\xF5es de desempenho.</p><p>Portanto, uma base de dados de valores-chave de n\xEDvel inferior foi mais apropriada <a href="https://discourse.world/h/2020/06/05/Shine-and-poverty-key-value-database-LMDB-in-applications-for-iOS" target="_blank" rel="noopener noreferrer">(lmdb \xE9 10 vezes mais r\xE1pida do que sqlite</a> ).</p><p><img src="//irmw.gumlet.io/yxZV8x.jpg" alt=""></p><p>No final, optei pela vers\xE3o m\xE1gica de <code>lmdb</code> - <code>mdbx</code>.</p><p>Atualmente, o pacote <code>rust</code> existente de <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">mdbx-rs (mdbx-sys)</a> do <code>mdbx</code> <a href="https://github.com/vorot93/mdbx-rs/issues/1" target="_blank" rel="noopener noreferrer">n\xE3o suporta windows</a>, ent\xE3o eu me encarreguei de empacotar uma vers\xE3o com suporte a windows.</p><p>Suporte para o armazenamento de tipos de ferrugem personalizados. Suporta acesso multi-tarefa.</p><p>A base de dados pode ser definida num m\xF3dulo usando <code>lazy_static</code> e depois simplesmente introduzida e usada com algo como :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

let id = 1234;
let user = r!(User.get id);
</code></pre></div><h2 id="o-que-e-a-libmdbx" tabindex="-1"><a class="header-anchor" href="#o-que-e-a-libmdbx" aria-hidden="true">#</a> O que \xE9 a libmdbx?</h2><p><a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">mdbx</a> \xE9 uma base de dados secund\xE1ria baseada em lmdb, pelo russo <a href="https://vk.com/erthink" target="_blank" rel="noopener noreferrer">\u041B\u0435\u043E\u043D\u0438\u0434 \u042E\u0440\u044C\u0435\u0432 (Leonid Yuriev)</a>.</p><p><a href="https://en.wikipedia.org/wiki/Lightning_Memory-Mapped_Database" target="_blank" rel="noopener noreferrer">A lmdb</a> \xE9 uma base de dados de valores-chave integrada super-r\xE1pida.</p><p>O motor de pesquisa de texto completo <a href="https://docs.meilisearch.com/reference/under_the_hood/storage.html#measured-disk-usage" target="_blank" rel="noopener noreferrer">MeiliSearch</a> \xE9 baseado em lmdb.</p><p><a href="https://docs.nvidia.com/deeplearning/dali/user-guide/docs/examples/general/data_loading/dataloading_lmdb.html" target="_blank" rel="noopener noreferrer">A estrutura de aprendizagem profunda caffe tamb\xE9m usa lmdb como um armazenamento de dados</a>.</p><p>O <a href="https://github.com/erthink/libmdbx#added-features" target="_blank" rel="noopener noreferrer">mdbx \xE9 30% mais r\xE1pido que o lmdb no teste de desempenho embutido de refer\xEAncia ioarena</a>.</p><p><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-1.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-3.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-4.png" alt=""><br><img src="https://raw.githubusercontent.com/wiki/erthink/libmdbx/img/perf-slide-5.png" alt=""></p><p>Ao mesmo tempo, o mdbx <a href="https://github.com/erthink/libmdbx#improvements-beyond-lmdb" target="_blank" rel="noopener noreferrer">melhora em muitas das falhas do</a> lmdb, ent\xE3o Erigon (o cliente de et\xE9reo de pr\xF3xima gera\xE7\xE3o) recentemente mudou de LMDB para MDBX <sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>.</p><h2 id="tutoriais" tabindex="-1"><a class="header-anchor" href="#tutoriais" aria-hidden="true">#</a> Tutoriais</h2><h3 id="como-executar-o-exemplo" tabindex="-1"><a class="header-anchor" href="#como-executar-o-exemplo" aria-hidden="true">#</a> Como executar o exemplo</h3><p>Primeiro clone a base de c\xF3digo <code>git clone git@github.com:rmw-lib/mdbx.git --depth=1 &amp;&amp; cd mdbx</code></p><p>Ent\xE3o corra <code>cargo run --example 01</code> e ele correr\xE1 <code>examples/01.rs</code></p><p>Se \xE9 o seu pr\xF3prio projeto, por favor, execute-o primeiro :</p><div class="language-bash ext-sh"><pre class="language-bash"><code>cargo install cargo-edit
cargo add mdbx lazy_static ctor paste
</code></pre></div><h3 id="exemplo-1-escrever-set-key-val-e-ler-get-key" tabindex="-1"><a class="header-anchor" href="#exemplo-1-escrever-set-key-val-e-ler-get-key" aria-hidden="true">#</a> Exemplo 1 : Escrever <code>set(key,val)</code> e ler <code>.get(key)</code></h3><p>Vejamos um exemplo <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/01.rs" target="_blank" rel="noopener noreferrer">simples/01.rs</a></p><h4 id="codigo" tabindex="-1"><a class="header-anchor" href="#codigo" aria-hidden="true">#</a> C\xF3digo</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nome da vari\xE1vel da base de dados Env
  Test // Teste da Base de Dados
}

fn main() -&gt; Result&lt;()&gt; {
  // Sa\xEDda do n\xFAmero da vers\xE3o da libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Leitura e escrita multi-tarefa
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
</code></pre></div><h4 id="executar-a-saida" tabindex="-1"><a class="header-anchor" href="#executar-a-saida" aria-hidden="true">#</a> Executar a sa\xEDda</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/01.mdb
mdbx version https://github.com/erthink/libmdbx/releases/tag/v0.11.2
test1 get Ok(Some(Bin([6])))
[6]
</code></pre></div><h4 id="descricao-do-codigo" tabindex="-1"><a class="header-anchor" href="#descricao-do-codigo" aria-hidden="true">#</a> Descri\xE7\xE3o do c\xF3digo</h4><h5 id="env-rw-definindo-a-base-de-dados" tabindex="-1"><a class="header-anchor" href="#env-rw-definindo-a-base-de-dados" aria-hidden="true">#</a> <code>env_rw!</code> Definindo a base de dados</h5><p>O c\xF3digo come\xE7a com uma macro env_rw, que tem 4 par\xE2metros.</p><ol><li><p>O nome da vari\xE1vel do ambiente do banco de dados</p></li><li><p>Devolve um objeto, <a href="https://docs.rs/mdbx/latest/src/mdbx/env.rs.html#27-35" target="_blank" rel="noopener noreferrer">mdbx:: env:: Config.</a></p></li></ol><p>Usamos a configura\xE7\xE3o padr\xE3o, como <code>Env</code> implementa <code>From&lt;Into&lt;PathBuf&gt;&gt;</code>, assim o caminho da base de dados <code>into()</code> ir\xE1 fazer, e a configura\xE7\xE3o padr\xE3o \xE9 a seguinte.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
MDBX // Nome da vari\xE1vel da base de dados Env
Test // Teste da Base de Dados
}

fn main() -&gt; Result&lt;()&gt; {
// Sa\xEDda do n\xFAmero da vers\xE3o da libmdbx
unsafe {
  println!(
    &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
    mdbx_version.major, mdbx_version.minor, mdbx_version.release
  );
}

// Leitura e escrita multi-tarefa
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
    sync_period : 65536, // Em 1/65536 de um segundo
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
</code></pre></div><p><code>max_db</code> Esta configura\xE7\xE3o pode ser redefinida cada vez que a base de dados <a href="https://github.com/erthink/libmdbx" target="_blank" rel="noopener noreferrer">\xE9</a> aberta, mas defini-la demasiado afectar\xE1 o desempenho, basta defini-la conforme necess\xE1rio.</p><p>Veja <a href="https://erthink.github.io/libmdbx/group__c__opening.html#ga9138119a904355d245777c4119534061" target="_blank" rel="noopener noreferrer">a documenta\xE7\xE3o da libmdbx</a> para o significado dos outros par\xE2metros.</p><ol start="3"><li><p>O nome da macro de transa\xE7\xE3o de leitura de banco de dados, o valor padr\xE3o \xE9 <code>r</code></p></li><li><p>O nome da macro de transa\xE7\xE3o de grava\xE7\xE3o do banco de dados, o valor padr\xE3o \xE9 <code>w</code></p></li></ol><p>Os par\xE2metros 3 e 4 podem ser omitidos para usar os valores padr\xE3o.</p><h5 id="macro-expansao" tabindex="-1"><a class="header-anchor" href="#macro-expansao" aria-hidden="true">#</a> Macro expans\xE3o</h5><p>Se voc\xEA quiser ver o que a macro magia est\xE1 fazendo, voc\xEA pode usar a macro <code>cargo expand --example 01</code> para expandi-la, que precisa ser instalada primeiro. <code>cargo install cargo-expand</code></p><p>Uma captura de tela do c\xF3digo expandido \xE9 mostrada abaixo.</p><p><img src="//irmw.gumlet.io/PDzEtT.png" alt="PDzEtT"></p><h5 id="de-qualquer-forma-e-preguicoso-estatico" tabindex="-1"><a class="header-anchor" href="#de-qualquer-forma-e-preguicoso-estatico" aria-hidden="true">#</a> de qualquer forma e pregui\xE7oso_est\xE1tico</h5><p>A partir da captura de tela expandida, voc\xEA pode ver que <code>lazy_static</code> e <code>anyhow</code>s\xE3o usados.</p><p><a href="https://rustmagazine.github.io/rust_magazine_2021/chapter_2/rust_error_handle.html#thiserror--anyhow" target="_blank" rel="noopener noreferrer">de qualquer maneira</a> \xE9 a biblioteca de tratamento de erros para ferrugem.</p><p><a href="https://juejin.cn/post/7007336922817232927" target="_blank" rel="noopener noreferrer">lazy_static</a> \xE9 uma vari\xE1vel est\xE1tica com inicializa\xE7\xE3o atrasada.</p><p>Estas duas bibliotecas s\xE3o muito comuns e eu n\xE3o vou entrar nelas.</p><h5 id="a-macro-mdbx" tabindex="-1"><a class="header-anchor" href="#a-macro-mdbx" aria-hidden="true">#</a> A macro mdbx!</h5><p><a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html" target="_blank" rel="noopener noreferrer"><code>mdbx!</code></a> \xE9 uma <a href="https://mp.weixin.qq.com/s/YT_HNFDCQ_IyocvBkRNJnA" target="_blank" rel="noopener noreferrer">macro de procedimento</a>.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nome da vari\xE1vel da base de dados Env
  Test // Teste da Base de Dados
}

fn main() -&gt; Result&lt;()&gt; {
  // Sa\xEDda do n\xFAmero da vers\xE3o da libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Leitura e escrita multi-tarefa
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
      sync_period : 65536, // Em 1/65536 de um segundo
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
 MDBX // Nome da vari\xE1vel da base de dados Env
 Test // Teste da Base de Dados
}
</code></pre></div><p>A primeira linha \xE9 o nome da vari\xE1vel do ambiente do banco de dados</p><p>A segunda linha \xE9 o nome da base de dados</p><p>Pode haver mais do que uma base de dados, uma linha para cada</p><h5 id="topicos-e-transaccoes" tabindex="-1"><a class="header-anchor" href="#topicos-e-transaccoes" aria-hidden="true">#</a> T\xF3picos e transac\xE7\xF5es</h5><p>O c\xF3digo acima demonstra leitura e escrita multi-tarefa.</p><p>\xC9 importante notar que <strong>s\xF3</strong> pode <strong>haver uma transa\xE7\xE3o no mesmo thread de cada vez, se um thread tiver mais de uma transa\xE7\xE3o aberta, o programa ir\xE1 travar</strong>.</p><p>A transa\xE7\xE3o ser\xE1 comprometida no final do escopo.</p><h5 id="leitura-e-escrita-de-dados-binarios" tabindex="-1"><a class="header-anchor" href="#leitura-e-escrita-de-dados-binarios" aria-hidden="true">#</a> Leitura e escrita de dados bin\xE1rios</h5><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nome da vari\xE1vel da base de dados Env
  Test // Teste da Base de Dados
}

fn main() -&gt; Result&lt;()&gt; {
  // Sa\xEDda do n\xFAmero da vers\xE3o da libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Leitura e escrita multi-tarefa
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
      sync_period : 65536, // Em 1/65536 de um segundo
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
 MDBX // Nome da vari\xE1vel da base de dados Env
 Test // Teste da Base de Dados
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
</code></pre></div><p><code>set</code> \xE9 uma escrita, <code>get</code> \xE9 uma leitura, e qualquer objeto que implemente <a href="https://doc.rust-lang.org/std/convert/trait.AsRef.html" target="_blank" rel="noopener noreferrer"><code>AsRef&lt;[u8]&gt;</code></a> objeto pode ser escrito no banco de dados.</p><p><code>get</code> O que sai \xE9 <code>Ok(Some(Bin([6])))</code>que pode ser convertido para <code>&amp;[u8]</code>.</p><h3 id="exemplo-2-tipos-de-dados-marcacoes-de-banco-de-dados-eliminacao-travessia" tabindex="-1"><a class="header-anchor" href="#exemplo-2-tipos-de-dados-marcacoes-de-banco-de-dados-eliminacao-travessia" aria-hidden="true">#</a> Exemplo 2: Tipos de dados, marca\xE7\xF5es de banco de dados, elimina\xE7\xE3o, travessia</h3><p>Vejamos o segundo <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">exemplo/02.rs</a>:</p><p>Neste exemplo, <code>env_rw!</code> \xE9 omitido e o terceiro e quarto argumentos ( <code>r</code>, <code>w</code>) s\xE3o omitidos.</p><h4 id="codigo-1" tabindex="-1"><a class="header-anchor" href="#codigo-1" aria-hidden="true">#</a> C\xF3digo</h4><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nome da vari\xE1vel da base de dados Env
  Test // Teste da Base de Dados
}

fn main() -&gt; Result&lt;()&gt; {
  // Sa\xEDda do n\xFAmero da vers\xE3o da libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Leitura e escrita multi-tarefa
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
      sync_period : 65536, // Em 1/65536 de um segundo
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
 MDBX // Nome da vari\xE1vel da base de dados Env
 Test // Teste da Base de Dados
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
  MDBX // Nomes de vari\xE1veis para a base de dados ENV
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
  // Escrita R\xE1pida
  w!(Test1.set [2, 3],[4, 5]);

  // Leitura r\xE1pida
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

  // M\xFAltiplas opera\xE7\xF5es em m\xFAltiplos bancos de dados na mesma transa\xE7\xE3o
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

    // A transa\xE7\xE3o ser\xE1 comprometida no final do escopo
  }

  Ok(())
}
</code></pre></div><h4 id="executar-a-saida-1" tabindex="-1"><a class="header-anchor" href="#executar-a-saida-1" aria-hidden="true">#</a> Executar a sa\xEDda</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/02.mdb

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
</code></pre></div><h4 id="leituras-e-escritas-rapidas" tabindex="-1"><a class="header-anchor" href="#leituras-e-escritas-rapidas" aria-hidden="true">#</a> Leituras e escritas r\xE1pidas</h4><p>Se quisermos simplesmente ler ou escrever uma \xFAnica linha de dados, podemos usar o a\xE7\xFAcar sint\xE1ctico de uma macro.</p><p>Ler dados</p><div class="language-text ext-text"><pre class="language-text"><code>r!(Test1.get [2, 3])
</code></pre></div><p>Dados de escrita</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nome da vari\xE1vel da base de dados Env
  Test // Teste da Base de Dados
}

fn main() -&gt; Result&lt;()&gt; {
  // Sa\xEDda do n\xFAmero da vers\xE3o da libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Leitura e escrita multi-tarefa
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
      sync_period : 65536, // Em 1/65536 de um segundo
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
 MDBX // Nome da vari\xE1vel da base de dados Env
 Test // Teste da Base de Dados
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
  MDBX // Nomes de vari\xE1veis para a base de dados ENV
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
  // Escrita R\xE1pida
  w!(Test1.set [2, 3],[4, 5]);

  // Leitura r\xE1pida
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

  // M\xFAltiplas opera\xE7\xF5es em m\xFAltiplos bancos de dados na mesma transa\xE7\xE3o
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

    // A transa\xE7\xE3o ser\xE1 comprometida no final do escopo
  }

  Ok(())
}
w!(Test1.set [2, 3],[4, 5])
</code></pre></div><p>Tudo em uma linha, como escrito em <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">exemplos/02.rs</a>.</p><h4 id="tipos-de-dados" tabindex="-1"><a class="header-anchor" href="#tipos-de-dados" aria-hidden="true">#</a> Tipos de dados</h4><p>Em exemplos/02 <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">.rs</a>, a defini\xE7\xE3o da base de dados \xE9 parecida com a seguinte :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nome da vari\xE1vel da base de dados Env
  Test // Teste da Base de Dados
}

fn main() -&gt; Result&lt;()&gt; {
  // Sa\xEDda do n\xFAmero da vers\xE3o da libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Leitura e escrita multi-tarefa
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
      sync_period : 65536, // Em 1/65536 de um segundo
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
 MDBX // Nome da vari\xE1vel da base de dados Env
 Test // Teste da Base de Dados
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
  MDBX // Nomes de vari\xE1veis para a base de dados ENV
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
  // Escrita R\xE1pida
  w!(Test1.set [2, 3],[4, 5]);

  // Leitura r\xE1pida
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

  // M\xFAltiplas opera\xE7\xF5es em m\xFAltiplos bancos de dados na mesma transa\xE7\xE3o
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

    // A transa\xE7\xE3o ser\xE1 comprometida no final do escopo
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
</code></pre></div><p>onde <code>key</code> e <code>val</code> definem os tipos de dados para chaves e valores respectivamente.</p><p>Se voc\xEA tentar escrever um tipo de dado que n\xE3o corresponda ao definido, um erro ser\xE1 reportado, como mostrado na captura de tela abaixo :</p><p><img src="//irmw.gumlet.io/4rFTC6.png" alt=""></p><p>O tipo de dados padr\xE3o \xE9 <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Bin.html" target="_blank" rel="noopener noreferrer"><code>Bin</code></a> qualquer dado que implemente <code>AsRef&lt;[u8]&gt;</code> pode ser escrito.</p><p>Se a chave ou valor for uma string <code>utf8</code>, o tipo de dados pode ser definido para <a href="https://docs.rs/mdbx/latest/mdbx/type/struct.Str.html" target="_blank" rel="noopener noreferrer"><code>Str</code></a> .</p><p><a href="https://doc.rust-lang.org/std/ops/trait.Deref.html" target="_blank" rel="noopener noreferrer">Des citando</a> <code>Str</code> ir\xE1 retornar uma string, semelhante a <code>let k:&amp;str = &amp;k;</code>.</p><p>Al\xE9m disso, <code>Str</code> tamb\xE9m implementa <a href="https://doc.rust-lang.org/std/fmt/trait.Display.html" target="_blank" rel="noopener noreferrer"><code>std::fmt::Display</code></a><code>println!(&quot;{}&quot;,k)</code> ir\xE1 emitir uma string leg\xEDvel.</p><h5 id="tipos-de-dados-predefinidos" tabindex="-1"><a class="header-anchor" href="#tipos-de-dados-predefinidos" aria-hidden="true">#</a> Tipos de dados predefinidos</h5><p>Al\xE9m de <code>Str</code> e <code>Bin</code>, o inv\xF3lucro tamb\xE9m vem com suporte de dados para <a href="https://docs.rs/mdbx/latest/src/mdbx/type.rs.html#48" target="_blank" rel="noopener noreferrer">usize, u128, u64, u32, u16, u8, isize, i128, i64, i32, i16, i8, f32, f64</a>.</p><h4 id="bandeiras-de-banco-de-dados" tabindex="-1"><a class="header-anchor" href="#bandeiras-de-banco-de-dados" aria-hidden="true">#</a> Bandeiras de banco de dados</h4><p>Voc\xEA pode ver os sinalizadores da base de dados adicionados aos dados nos <a href="https://github.com/rmw-lib/mdbx/blob/master/examples/02.rs" target="_blank" rel="noopener noreferrer">exemplos/02.rs</a> em <code>Test4</code> <code>flag DUPSORT</code></p><p>A base de dados da libmdbx tem uma s\xE9rie de bandeiras ( <a href="https://erthink.github.io/libmdbx/group__c__dbi.html#gafe3bddb297b3ab0d828a487c5726f76a" target="_blank" rel="noopener noreferrer"><code>MDBX_db_flags_t</code></a> ) que pode ser definido.</p><ul><li>REVERSEKEY utiliza a compara\xE7\xE3o inversa de cadeias de caracteres para chaves. (\xFAtil quando se usam pequenos n\xFAmeros codificados como chaves)</li><li>DUPSORT utiliza duplicatas ordenadas, ou seja, permite m\xFAltiplos valores para uma chave.</li><li>INTEGERKEY Chave num\xE9rica nativa ordenada por bytes uint32_t ou uint64_t. As chaves devem ter o mesmo tamanho e devem ser alinhadas quando passadas como argumento.</li><li>DUPFIXED O tamanho dos valores dos dados deve ser o mesmo se for utilizado DUPSORT (permite uma contagem r\xE1pida do n\xFAmero de valores).</li><li>DUPSORT e DUPFIXED s\xE3o necess\xE1rios para o INTEGERDUP; os valores s\xE3o inteiros (semelhantes ao INTEGERKEY). Todos os valores dos dados devem ter o mesmo tamanho e devem ser alinhados quando passados como par\xE2metros.</li><li>REVERSEDUP usa DUPSORT; a compara\xE7\xE3o inversa de strings \xE9 usada para valores de dados.</li><li>CREATE cria o BD se ele n\xE3o existir (adicionado por padr\xE3o).</li><li>DB_ACCEDE Abre uma sub-base de dados existente criada usando a bandeira desconhecida.<br> Esta bandeira DB_ACCEDE destina-se a abrir sub-bases de dados existentes criadas com bandeiras desconhecidas (REVERSEKEY, DUPSORT, INTEGERKEY, DUPFIXED, INTEGERDUP e REVEREDUP).<br> Neste caso, a sub-base n\xE3o retornar\xE1 um erro INCOMPAT\xCDVEL, mas ser\xE1 aberta com os flags usados para cri\xE1-la, e a aplica\xE7\xE3o pode ent\xE3o determinar os flags reais com mdbx_dbi_flags().</li></ul><h5 id="dupsort-uma-chave-corresponde-a-mais-do-que-um-valor" tabindex="-1"><a class="header-anchor" href="#dupsort-uma-chave-corresponde-a-mais-do-que-um-valor" aria-hidden="true">#</a> DUPSORT : Uma chave corresponde a mais do que um valor</h5><p><code>DUPSORT</code>significa que uma chave pode corresponder a mais do que um valor.</p><p>Se voc\xEA quiser definir v\xE1rias bandeiras, escreva da seguinte forma <code>flag DUPSORT | DUPFIXED</code></p><h5 id="dup-key-iterador-que-devolve-todos-os-valores-correspondentes-a-uma-chave" tabindex="-1"><a class="header-anchor" href="#dup-key-iterador-que-devolve-todos-os-valores-correspondentes-a-uma-chave" aria-hidden="true">#</a> <code>.dup(key)</code> iterador que devolve todos os valores correspondentes a uma chave</h5><p>Esta fun\xE7\xE3o s\xF3 est\xE1 dispon\xEDvel para bases de dados marcadas com <code>DUPSORT</code> onde uma chave pode corresponder a mais do que um valor.</p><p>Para <code>DUPSORT</code> bases de dados, <code>get</code> retorna apenas o primeiro valor para esta chave. Para obter todos os valores, use <code>dup</code>.</p><h5 id="bandeiras-de-banco-de-dados-automaticamente-anexadas-por-padrao" tabindex="-1"><a class="header-anchor" href="#bandeiras-de-banco-de-dados-automaticamente-anexadas-por-padrao" aria-hidden="true">#</a> Bandeiras de banco de dados automaticamente anexadas por padr\xE3o</h5><p>Quando o tipo de dados \xE9 <code>u32</code> / <code>u64</code> / <code>usize</code>, a bandeira da base de dados \xE9 automaticamente adicionada. <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#105" target="_blank" rel="noopener noreferrer"><code>INTEGERKEY</code></a> .</p><p>Em m\xE1quinas com codifica\xE7\xE3o de pequenas dimens\xF5es, outros tipos num\xE9ricos s\xE3o automaticamente adicionados <a href="https://docs.rs/mdbx-proc/latest/src/mdbx_proc/lib.rs.html#108" target="_blank" rel="noopener noreferrer"><code>REVERSEKEY</code></a> O flag de banco de dados \xE9 automaticamente adicionado quando o tipo de dado \xE9 / / .</p><h4 id="eliminacao-de-dados" tabindex="-1"><a class="header-anchor" href="#eliminacao-de-dados" aria-hidden="true">#</a> Elimina\xE7\xE3o de dados</h4><h5 id="del-key-eliminacao-de-uma-chave" tabindex="-1"><a class="header-anchor" href="#del-key-eliminacao-de-uma-chave" aria-hidden="true">#</a> <code>.del(key)</code> Elimina\xE7\xE3o de uma chave</h5><p><code>.del(val)</code> Elimina o valor correspondente a uma chave.</p><p>Se a base de dados tiver a bandeira <code>DUPSORT</code>, todos os valores sob esta chave ser\xE3o eliminados.</p><p>Devolve <code>true</code>se algum dado for eliminado, e <code>false</code>se n\xE3o for.</p><h5 id="del-val-key-val-eliminacao-exacta-da-correspondencia" tabindex="-1"><a class="header-anchor" href="#del-val-key-val-eliminacao-exacta-da-correspondencia" aria-hidden="true">#</a> <code>.del_val(key,val)</code> Elimina\xE7\xE3o exacta da correspond\xEAncia</h5><p><code>.del_val(key,val)</code> Elimina os pares de valores-chave que correspondem exactamente aos par\xE2metros de entrada.</p><p>Devolve <code>true</code>se algum dado for eliminado, e <code>false</code>se n\xE3o for.</p><h4 id="traversal" tabindex="-1"><a class="header-anchor" href="#traversal" aria-hidden="true">#</a> Traversal</h4><h5 id="travessia-sequencial" tabindex="-1"><a class="header-anchor" href="#travessia-sequencial" aria-hidden="true">#</a> travessia sequencial</h5><p>Devido \xE0 implementa\xE7\xE3o de <a href="https://doc.rust-lang.org/std/iter/trait.IntoIterator.html" target="_blank" rel="noopener noreferrer"><code>std::iter::IntoIterator</code></a> . voc\xEA pode atravessar diretamente da seguinte maneira :</p><p><code>for (k, v) in test1</code></p><h5 id="rev-travessia-de-ordem-inversa" tabindex="-1"><a class="header-anchor" href="#rev-travessia-de-ordem-inversa" aria-hidden="true">#</a> <code>.rev()</code> Travessia de ordem inversa</h5><p><code>for (k, v) in test4.rev()</code></p><h5 id="classificacao" tabindex="-1"><a class="header-anchor" href="#classificacao" aria-hidden="true">#</a> Classifica\xE7\xE3o</h5><p>As chaves da libmdbx s\xE3o ordenadas em <a href="https://zh.wikipedia.org/wiki/%E5%AD%97%E5%85%B8%E5%BA%8F" target="_blank" rel="noopener noreferrer">ordem de dicion\xE1rio</a>.</p><ul><li><p>Para n\xFAmeros n\xE3o assinados</p><p>s\xE3o classificados de menor para maior porque as bandeiras da base de dados s\xE3o automaticamente adicionadas ( <code>u32</code>/ <code>u64</code>/ <code>usize</code> s\xE3o adicionados a <code>INTEGERKEY</code>, outros s\xE3o adicionados a <code>REVERSEKEY</code>, dependendo do c\xF3digo da m\xE1quina).</p></li><li><p>Para n\xFAmeros assinados</p><p>a ordem \xE9: 0 primeiro, depois todos os n\xFAmeros positivos do menor para o maior, depois todos os n\xFAmeros negativos do menor para o maior.</p></li></ul><h3 id="iteradores-de-intervalo" tabindex="-1"><a class="header-anchor" href="#iteradores-de-intervalo" aria-hidden="true">#</a> Iteradores de intervalo</h3><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nome da vari\xE1vel da base de dados Env
  Test // Teste da Base de Dados
}

fn main() -&gt; Result&lt;()&gt; {
  // Sa\xEDda do n\xFAmero da vers\xE3o da libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Leitura e escrita multi-tarefa
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
      sync_period : 65536, // Em 1/65536 de um segundo
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
 MDBX // Nome da vari\xE1vel da base de dados Env
 Test // Teste da Base de Dados
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
  MDBX // Nomes de vari\xE1veis para a base de dados ENV
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
  // Escrita R\xE1pida
  w!(Test1.set [2, 3],[4, 5]);

  // Leitura r\xE1pida
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

  // M\xFAltiplas opera\xE7\xF5es em m\xFAltiplos bancos de dados na mesma transa\xE7\xE3o
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

    // A transa\xE7\xE3o ser\xE1 comprometida no final do escopo
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
</code></pre></div><h4 id="execute-a-saida-de" tabindex="-1"><a class="header-anchor" href="#execute-a-saida-de" aria-hidden="true">#</a> Execute a sa\xEDda de</h4><div class="language-text ext-text"><pre class="language-text"><code>mdbx file path /Users/z/rmw/mdbx/target/debug/examples/range.mdb

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
</code></pre></div><h4 id="range-begin-end-iteracao-de-intervalo" tabindex="-1"><a class="header-anchor" href="#range-begin-end-iteracao-de-intervalo" aria-hidden="true">#</a> <code>.range(begin..end)</code> Itera\xE7\xE3o de Intervalo</h4><p>Para n\xFAmeros, um intervalo \xE9 um intervalo num\xE9rico.</p><p>Para bin\xE1rios, o mesmo intervalo pode ser constru\xEDdo, por exemplo</p><div class="language-text ext-text"><pre class="language-text"><code>let begin : &amp;[u8] = &amp;[1,1];
for (k,v) in test0.range(begin..=&amp;[2]) {}
</code></pre></div><p>Se <code>begin</code> for maior que <code>end</code>, ele ir\xE1 iterar para tr\xE1s.</p><p>Por exemplo, <code>test1.range(5..2)</code> ir\xE1 produzir o seguinte :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nome da vari\xE1vel da base de dados Env
  Test // Teste da Base de Dados
}

fn main() -&gt; Result&lt;()&gt; {
  // Sa\xEDda do n\xFAmero da vers\xE3o da libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Leitura e escrita multi-tarefa
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
      sync_period : 65536, // Em 1/65536 de um segundo
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
 MDBX // Nome da vari\xE1vel da base de dados Env
 Test // Teste da Base de Dados
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
  MDBX // Nomes de vari\xE1veis para a base de dados ENV
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
  // Escrita R\xE1pida
  w!(Test1.set [2, 3],[4, 5]);

  // Leitura r\xE1pida
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

  // M\xFAltiplas opera\xE7\xF5es em m\xFAltiplos bancos de dados na mesma transa\xE7\xE3o
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

    // A transa\xE7\xE3o ser\xE1 comprometida no final do escopo
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
</code></pre></div><p>A itera\xE7\xE3o de intervalo n\xE3o \xE9 suportada <a href="https://doc.rust-lang.org/std/ops/struct.RangeFull.html" target="_blank" rel="noopener noreferrer"><code>RangeFull</code></a> ou seja, o uso de <code>..</code>n\xE3o \xE9 suportado, por favor use a <a href="#%E9%81%8D%E5%8E%86">travessia</a> mencionada acima.</p><h4 id="rev-range-intervalos-invertidos" tabindex="-1"><a class="header-anchor" href="#rev-range-intervalos-invertidos" aria-hidden="true">#</a> <code>.rev_range</code> Intervalos invertidos</h4><p>Se voc\xEA quiser obter um intervalo invertido que seja menor ou igual a um valor, voc\xEA pode fazer isso</p><div class="language-text ext-text"><pre class="language-text"><code>test2.rev_range(2..)
</code></pre></div><p>A sa\xEDda ser\xE1</p><div class="language-text ext-text"><pre class="language-text"><code>(2, 4)
(1, 5)
(0, 0)
</code></pre></div><p>Um de <code>begin</code> ou <code>end</code> n\xE3o deve ser definido para o intervalo invertido; porque se ambos est\xE3o definidos, voc\xEA pode sempre usar <code>range(end..begin)</code> para obter o mesmo efeito.</p><h3 id="personalizacao-de-tipos-de-dados" tabindex="-1"><a class="header-anchor" href="#personalizacao-de-tipos-de-dados" aria-hidden="true">#</a> Personaliza\xE7\xE3o de tipos de dados</h3><p>O c\xF3digo de demonstra\xE7\xE3o est\xE1 dispon\xEDvel em <a href="https://github.com/rmw-lib/mdbx-example/blob/master/01/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/01</a></p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nome da vari\xE1vel da base de dados Env
  Test // Teste da Base de Dados
}

fn main() -&gt; Result&lt;()&gt; {
  // Sa\xEDda do n\xFAmero da vers\xE3o da libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Leitura e escrita multi-tarefa
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
      sync_period : 65536, // Em 1/65536 de um segundo
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
 MDBX // Nome da vari\xE1vel da base de dados Env
 Test // Teste da Base de Dados
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
  MDBX // Nomes de vari\xE1veis para a base de dados ENV
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
  // Escrita R\xE1pida
  w!(Test1.set [2, 3],[4, 5]);

  // Leitura r\xE1pida
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

  // M\xFAltiplas opera\xE7\xF5es em m\xFAltiplos bancos de dados na mesma transa\xE7\xE3o
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

    // A transa\xE7\xE3o ser\xE1 comprometida no final do escopo
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
</code></pre></div><p>A sa\xEDda \xE9 a seguinte</p><div class="language-text ext-text"><pre class="language-text"><code>Some(City { name: &quot;BeiJing&quot;, lnglat: (11640, 3990) })
</code></pre></div><p>No exemplo do tipo customizado, n\xF3s usamos <a href="https://github.com/koute/speedy" target="_blank" rel="noopener noreferrer"><code>speedy</code></a> para fazer a serializa\xE7\xE3o <a href="https://github.com/djkoloski/rust_serialization_benchmark" target="_blank" rel="noopener noreferrer">( <code>speedy</code> an\xE1lise de desempenho</a> ).</p><p>Implementa\xE7\xE3o de tipo personalizado <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.FromMdbx.html" target="_blank" rel="noopener noreferrer"><code>FromMdbx</code></a> e <a href="https://docs.rs/mdbx/latest/mdbx/type/trait.ToAsRef.html" target="_blank" rel="noopener noreferrer"><code>ToAsRef</code></a> pode ent\xE3o ser armazenado em <code>mdbx</code>.</p><p>Se voc\xEA estiver usando uma biblioteca de serializa\xE7\xE3o espec\xEDfica, voc\xEA tamb\xE9m pode personalizar <a href="https://blog.logrocket.com/macros-in-rust-a-tutorial-with-examples/" target="_blank" rel="noopener noreferrer">macros de</a> atributos para simplificar o processo.</p><h4 id="simplificacao-de-tipos-personalizados-com-macros-de-atributos" tabindex="-1"><a class="header-anchor" href="#simplificacao-de-tipos-personalizados-com-macros-de-atributos" aria-hidden="true">#</a> Simplifica\xE7\xE3o de tipos personalizados com macros de atributos</h4><p>A implementa\xE7\xE3o de uma macro de atributos \xE9 t\xE3o simples quanto <a href="https://crates.io/crates/mdbx_speedy" target="_blank" rel="noopener noreferrer"><code>mdbx_speedy</code></a> O c\xF3digo de macro atributo \xE9 o seguinte :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nome da vari\xE1vel da base de dados Env
  Test // Teste da Base de Dados
}

fn main() -&gt; Result&lt;()&gt; {
  // Sa\xEDda do n\xFAmero da vers\xE3o da libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Leitura e escrita multi-tarefa
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
      sync_period : 65536, // Em 1/65536 de um segundo
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
 MDBX // Nome da vari\xE1vel da base de dados Env
 Test // Teste da Base de Dados
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
  MDBX // Nomes de vari\xE1veis para a base de dados ENV
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
  // Escrita R\xE1pida
  w!(Test1.set [2, 3],[4, 5]);

  // Leitura r\xE1pida
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

  // M\xFAltiplas opera\xE7\xF5es em m\xFAltiplos bancos de dados na mesma transa\xE7\xE3o
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

    // A transa\xE7\xE3o ser\xE1 comprometida no final do escopo
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
</code></pre></div><p>Comece com <code>cargo add mdbx-speedy</code>em seu pr\xF3prio projeto e ent\xE3o voc\xEA pode rapidamente personalizar o tipo (veja <a href="https://github.com/rmw-lib/mdbx-example/blob/master/02/src/main.rs" target="_blank" rel="noopener noreferrer">github.com/rmw-lib/mdbx-example/02</a> para c\xF3digo de demonstra\xE7\xE3o).</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use db::User;

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
  MDBX // Nome da vari\xE1vel da base de dados Env
  Test // Teste da Base de Dados
}

fn main() -&gt; Result&lt;()&gt; {
  // Sa\xEDda do n\xFAmero da vers\xE3o da libmdbx
  unsafe {
    println!(
      &quot;mdbx version https://github.com/erthink/libmdbx/releases/tag/v{}.{}.{}&quot;,
      mdbx_version.major, mdbx_version.minor, mdbx_version.release
    );
  }

  // Leitura e escrita multi-tarefa
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
      sync_period : 65536, // Em 1/65536 de um segundo
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
 MDBX // Nome da vari\xE1vel da base de dados Env
 Test // Teste da Base de Dados
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
  MDBX // Nomes de vari\xE1veis para a base de dados ENV
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
  // Escrita R\xE1pida
  w!(Test1.set [2, 3],[4, 5]);

  // Leitura r\xE1pida
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

  // M\xFAltiplas opera\xE7\xF5es em m\xFAltiplos bancos de dados na mesma transa\xE7\xE3o
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

    // A transa\xE7\xE3o ser\xE1 comprometida no final do escopo
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
</code></pre></div><p>\xC9 claro que ainda \xE9 irritante escrever <code>#[derive(PartialEq, Debug, Readable, Writable, MdbxSpeedy)]</code> repetidamente, por isso pode usar <a href="https://docs.rs/derive-alias/0.1.0/derive_alias" target="_blank" rel="noopener noreferrer"><code>derive_alias</code></a> para simplificar ainda mais o c\xF3digo.</p><h2 id="nota-sobre-a-utilizacao-de" tabindex="-1"><a class="header-anchor" href="#nota-sobre-a-utilizacao-de" aria-hidden="true">#</a> Nota sobre a utiliza\xE7\xE3o de</h2><h3 id="o-comprimento-da-chave" tabindex="-1"><a class="header-anchor" href="#o-comprimento-da-chave" aria-hidden="true">#</a> O comprimento da chave</h3><ul><li>M\xEDnimo 0, m\xE1ximo \u2248 \xBD tamanho de p\xE1gina (o tamanho m\xE1ximo padr\xE3o da chave de p\xE1gina 4K \xE9 2022 bytes), definido na inicializa\xE7\xE3o da base de dados <code>pagesize</code> pode ser configurado para n\xE3o mais do que <code>65536</code>e precisa ser uma pot\xEAncia de 2.</li></ul><h2 id="notas-de-rodape" tabindex="-1"><a class="header-anchor" href="#notas-de-rodape" aria-hidden="true">#</a> Notas de rodap\xE9</h2><p>Eles citam os benef\xEDcios da transi\xE7\xE3o de LMDB para MDBX.</p><blockquote><p>Erigon come\xE7ou com um backend de banco de dados BoltDB, depois adicionou suporte ao BadgerDB, e finalmente migrou completamente para LMDB. em algum momento tivemos problemas de estabilidade que foram causados pelo nosso uso de LMDB que n\xE3o foram previstos pelos criadores. Desde ent\xE3o, temos procurado um derivado bem suportado de LMDB chamado MDBX e esperamos usar suas melhorias de estabilidade e potencialmente colaborar mais no futuro. a integra\xE7\xE3o do MDBX est\xE1 agora completa e \xE9 hora de mais testes e documenta\xE7\xE3o.</p><p>Benef\xEDcios da transi\xE7\xE3o de LMDB para MDBX.</p><ol><li><p>O &quot;espa\xE7o (geometria)&quot; de crescimento dos arquivos da base de dados funciona corretamente. Isto \xE9 importante, especialmente no Windows. Em LMDB \xE9 necess\xE1rio especificar o tamanho do mapa de mem\xF3ria uma vez antes (atualmente usamos 2Tb por padr\xE3o) e se o arquivo de banco de dados crescer al\xE9m desse limite, o processo tem que ser reiniciado. No Windows, definir o tamanho do mapa de mem\xF3ria para 2Tb tornaria o arquivo de banco de dados 2Tb grande para come\xE7ar, o que n\xE3o \xE9 muito conveniente. Em MDBX, o tamanho do mapa de mem\xF3ria \xE9 incrementado em incrementos de 2Gb. Isto significa um remapeamento ocasional, mas resulta numa melhor experi\xEAncia para o utilizador.</p></li><li><p>MDBX tem verifica\xE7\xF5es mais rigorosas sobre o uso simult\xE2neo do processamento de transa\xE7\xF5es e sobreposi\xE7\xE3o de transa\xE7\xF5es de leitura e grava\xE7\xE3o no mesmo segmento de execu\xE7\xE3o. Isto permite-nos detectar alguns erros n\xE3o \xF3bvios e torna o comportamento mais previs\xEDvel.<br> Em mais de 5 anos (desde que foi separada da LMDB), a MDBX acumulou um grande n\xFAmero de corre\xE7\xF5es de seguran\xE7a e corre\xE7\xF5es de heisenbug que, segundo o nosso conhecimento, ainda existem na LMDB. Algumas delas foram descobertas durante nossos testes, e os mantenedores do MDBX as levaram a s\xE9rio e as consertaram prontamente.</p></li><li><p>Quando se trata de bancos de dados que est\xE3o constantemente modificando dados, eles criam uma quantidade razo\xE1vel de espa\xE7o recuper\xE1vel (tamb\xE9m conhecido como &quot;freelist&quot; na terminologia da LMDB). Tivemos de remendar a LMDB para corrigir as defici\xEAncias mais graves no manuseio do espa\xE7o recuper\xE1vel <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide" target="_blank" rel="noopener noreferrer">(an\xE1lise)</a>. A MDBX <a href="https://github.com/ledgerwatch/erigon/wiki/LMDB-freelist-illustrated-guide%EF%BC%89%E3%80%82MDBX%E5%AF%B9%E5%8F%AF%E5%9B%9E%E6%94%B6%E7%A9%BA%E9%97%B4%E7%9A%84%E6%9C%89%E6%95%88%E5%A4%84%E7%90%86%E8%BF%9B%E8%A1%8C%E4%BA%86%E7%89%B9%E5%88%AB%E7%9A%84%E5%85%B3%E6%B3%A8%EF%BC%8C%E5%88%B0%E7%9B%AE%E5%89%8D%E4%B8%BA%E6%AD%A2%EF%BC%8C%E8%BF%98%E4%B8%8D%E9%9C%80%E8%A6%81%E6%89%93%E8%A1%A5%E4%B8%81%E3%80%82" target="_blank" rel="noopener noreferrer">prestou aten\xE7\xE3o especial ao manuseio eficiente do espa\xE7o recuper\xE1vel e, at\xE9 agora, n\xE3o precisou ser remendado</a>.</p></li><li><p>Com base em nossos testes, MDBX teve um desempenho ligeiramente melhor em nossas cargas de trabalho.</p></li><li><p>MDBX exp\xF5e mais dados de telemetria interna - mais m\xE9tricas sobre o que est\xE1 acontecendo dentro da base de dados. E temos estes dados na Grafana - para tomar melhores decis\xF5es sobre o design das aplica\xE7\xF5es. Por exemplo, ap\xF3s a transi\xE7\xE3o completa para MDBX (remo\xE7\xE3o do suporte para LMDB), implementaremos uma pol\xEDtica de &quot;compromisso de meia transa\xE7\xE3o completa&quot; para evitar o transbordo/descarregamento de contatos em disco. Isto simplificar\xE1 ainda mais o nosso c\xF3digo sem impactar o desempenho.</p></li><li><p>MDBX suporta o modo &quot;Exclusive open&quot; - n\xF3s o usamos para migra\xE7\xF5es de banco de dados para evitar que outros leitores acessem o banco de dados durante o processo de migra\xE7\xE3o.</p></li></ol></blockquote><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p><a href="https://github.com/ledgerwatch/erigon/wiki/Criteria-for-transitioning-from-Alpha-to-Beta#switch-from-lmdb-to-mdbx" target="_blank" rel="noopener noreferrer">Erigon (o cliente Ethernet de pr\xF3xima gera\xE7\xE3o) comutou recentemente de LMDB para MDBX</a>. <a href="#fnref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,160);function se(oe,re){const n=u("RouterLink");return r(),d(i,null,[m,c,g,b,e("nav",h,[e("ul",null,[e("li",null,[a(n,{to:"#citacoes"},{default:s(()=>[_]),_:1})]),e("li",null,[a(n,{to:"#o-que-e-a-libmdbx"},{default:s(()=>[v]),_:1})]),e("li",null,[a(n,{to:"#tutoriais"},{default:s(()=>[f]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#como-executar-o-exemplo"},{default:s(()=>[x]),_:1})]),e("li",null,[a(n,{to:"#exemplo-1-escrever-set-key-val-e-ler-get-key"},{default:s(()=>[q]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#codigo"},{default:s(()=>[E]),_:1})]),e("li",null,[a(n,{to:"#executar-a-saida"},{default:s(()=>[D]),_:1})]),e("li",null,[a(n,{to:"#descricao-do-codigo"},{default:s(()=>[k]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#env-rw-definindo-a-base-de-dados"},{default:s(()=>[y]),_:1})]),e("li",null,[a(n,{to:"#macro-expansao"},{default:s(()=>[B]),_:1})]),e("li",null,[a(n,{to:"#de-qualquer-forma-e-preguicoso-estatico"},{default:s(()=>[w]),_:1})]),e("li",null,[a(n,{to:"#a-macro-mdbx"},{default:s(()=>[T]),_:1})]),e("li",null,[a(n,{to:"#topicos-e-transaccoes"},{default:s(()=>[N]),_:1})]),e("li",null,[a(n,{to:"#leitura-e-escrita-de-dados-binarios"},{default:s(()=>[M]),_:1})])])])])]),e("li",null,[a(n,{to:"#exemplo-2-tipos-de-dados-marcacoes-de-banco-de-dados-eliminacao-travessia"},{default:s(()=>[S]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#codigo-1"},{default:s(()=>[X]),_:1})]),e("li",null,[a(n,{to:"#executar-a-saida-1"},{default:s(()=>[O]),_:1})]),e("li",null,[a(n,{to:"#leituras-e-escritas-rapidas"},{default:s(()=>[C]),_:1})]),e("li",null,[a(n,{to:"#tipos-de-dados"},{default:s(()=>[R]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#tipos-de-dados-predefinidos"},{default:s(()=>[V]),_:1})])])]),e("li",null,[a(n,{to:"#bandeiras-de-banco-de-dados"},{default:s(()=>[A]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#dupsort-uma-chave-corresponde-a-mais-do-que-um-valor"},{default:s(()=>[U]),_:1})]),e("li",null,[a(n,{to:"#dup-key-iterador-que-devolve-todos-os-valores-correspondentes-a-uma-chave"},{default:s(()=>[L]),_:1})]),e("li",null,[a(n,{to:"#bandeiras-de-banco-de-dados-automaticamente-anexadas-por-padrao"},{default:s(()=>[I]),_:1})])])]),e("li",null,[a(n,{to:"#eliminacao-de-dados"},{default:s(()=>[z]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#del-key-eliminacao-de-uma-chave"},{default:s(()=>[P]),_:1})]),e("li",null,[a(n,{to:"#del-val-key-val-eliminacao-exacta-da-correspondencia"},{default:s(()=>[F]),_:1})])])]),e("li",null,[a(n,{to:"#traversal"},{default:s(()=>[$]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#travessia-sequencial"},{default:s(()=>[j]),_:1})]),e("li",null,[a(n,{to:"#rev-travessia-de-ordem-inversa"},{default:s(()=>[Y]),_:1})]),e("li",null,[a(n,{to:"#classificacao"},{default:s(()=>[G]),_:1})])])])])]),e("li",null,[a(n,{to:"#iteradores-de-intervalo"},{default:s(()=>[H]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#execute-a-saida-de"},{default:s(()=>[W]),_:1})]),e("li",null,[a(n,{to:"#range-begin-end-iteracao-de-intervalo"},{default:s(()=>[K]),_:1})]),e("li",null,[a(n,{to:"#rev-range-intervalos-invertidos"},{default:s(()=>[J]),_:1})])])]),e("li",null,[a(n,{to:"#personalizacao-de-tipos-de-dados"},{default:s(()=>[Q]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#simplificacao-de-tipos-personalizados-com-macros-de-atributos"},{default:s(()=>[Z]),_:1})])])])])]),e("li",null,[a(n,{to:"#nota-sobre-a-utilizacao-de"},{default:s(()=>[ee]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#o-comprimento-da-chave"},{default:s(()=>[te]),_:1})])])]),e("li",null,[a(n,{to:"#notas-de-rodape"},{default:s(()=>[ne]),_:1})])])]),ae],64)}var le=o(p,[["render",se],["__file","2021-12-21-mdbx.html.vue"]]);export{le as default};
