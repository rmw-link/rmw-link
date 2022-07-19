import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as n}from"./app.2a6a1bd2.js";const t={},r=n(`<h1 id="modifier-quickjs-pour-importer-des-fonctions-rust-une-nouvelle-facon-de-penser-a-l-extension-de-kraken" tabindex="-1"><a class="header-anchor" href="#modifier-quickjs-pour-importer-des-fonctions-rust-une-nouvelle-facon-de-penser-a-l-extension-de-kraken" aria-hidden="true">#</a> Modifier quickjs pour importer des fonctions rust - une nouvelle fa\xE7on de penser \xE0 l&#39;extension de Kraken</h1><h2 id="depot-de-codes" tabindex="-1"><a class="header-anchor" href="#depot-de-codes" aria-hidden="true">#</a> D\xE9p\xF4t de codes</h2><ul><li><a href="https://github.com/rmw-lib/quickjs-rust" target="_blank" rel="noopener noreferrer">github</a></li><li><a href="https://gitee.com/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">gitee</a></li><li><a href="https://gitflic.ru/project/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">gitflic</a></li><li><a href="https://bitbucket.org/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">bitbucket</a></li></ul><h2 id="la-genese" tabindex="-1"><a class="header-anchor" href="#la-genese" aria-hidden="true">#</a> La gen\xE8se</h2><p><a href="https://openkraken.com" target="_blank" rel="noopener noreferrer">Kraken</a> est un moteur de rendu web haute performance bas\xE9 sur <code>Flutter</code>, qui utilise <a href="https://github.com/openkraken/kraken/tree/main/bridge/third_party/quickjs" target="_blank" rel="noopener noreferrer">quickjs</a>, comme moteur de script.</p><p>Je voulais \xE9crire des extensions pour Kraken en utilisant <code>rust</code>.</p><p>Kraken <a href="https://openkraken.com/guide/advanced/custom-js-api" target="_blank" rel="noopener noreferrer">prend en charge l&#39;\xE9criture d&#39;extensions \xE0 l&#39;aide de <code>dart</code>.</a></p><p>Utilisation de <a href="https://github.com/fzyzcjy/flutter_rust_bridge" target="_blank" rel="noopener noreferrer"><code>flutter_rust_bridge</code></a> <code>rust</code> et <code>dart</code>.</p><p>En combinant ces deux points, il n&#39;est pas difficile d&#39;\xE9crire des extensions Kraken en utilisant <code>rust</code>.<br> Cependant, le surco\xFBt de performance de cette solution semble \xE9lev\xE9, car il y a une p\xE9nalit\xE9 de performance pour <code>dart</code> qui appelle <code>rust</code>, et une autre pour <code>quickjs</code> qui appelle <code>dart</code>.</p><p>D&#39;autre part, alors que la communaut\xE9 <code>rust</code> a <a href="https://github.com/DelSkayn/rquickjs" target="_blank" rel="noopener noreferrer"><code>rquickjs</code></a> de tels appels \xE0 la biblioth\xE8que <code>quickjs</code> dans <code>rust</code>.<br> Cependant, ils appellent <code>quickjs</code> au lieu d&#39;int\xE9grer <code>quickjs</code>et ne peuvent pas \xEAtre utilis\xE9s pour la magie de <code>quickjs</code>.</p><p>Dans cette base de code, j&#39;ai impl\xE9ment\xE9 une nouvelle solution : modifier directement le code source de <code>quickjs</code> pour supporter l&#39;extension <code>rust</code>.</p><p>Il s&#39;agit d&#39;une solution g\xE9n\xE9rique qui peut \xEAtre utilis\xE9e non seulement pour modifier Kraken, mais aussi pour tous les frameworks et biblioth\xE8ques qui int\xE8grent <code>quickjs</code>.</p><h2 id="demonstration" tabindex="-1"><a class="header-anchor" href="#demonstration" aria-hidden="true">#</a> D\xE9monstration</h2><p>Le code de test.js est le suivant :</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>const try_run = (func, ...args) =&gt; {
  try {
    func(...args)
  } catch (err) {
    console.log(&#39;\u274C&#39;, err.message)
    console.log(err.stack)
  }
};

import * as rust from &#39;rust&#39;
console.log(&quot;export from rust :&quot;, Object.keys(rust))

import {
  fib,
  sleep
} from &#39;rust&#39;

(async () =&gt; {

  console.log(&#39;begin sleep 2s&#39;)
  await sleep(2000);
  console.log(&#39;sleep done&#39;)

  console.log(&#39;fib(3) =&#39;, fib(3));

  console.log(&quot;try catch example :&quot;)
  try_run(fib);
  try_run(fib, &#39;*&#39;);

})()
</code></pre></div><p>Ex\xE9cuter <code>./quickjs/qjs test.js</code>, sortie :</p><div class="language-text ext-text"><pre class="language-text"><code>export from rust : fib,sleep
begin sleep 2s
sleep done
fib(3) = 6
try catch example :
\u274C miss : args need 1 pass 0
    at fib (native)
    at try_run (test.js:8)
    at &lt;anonymous&gt; (test.js:27)

\u274C not number : args position 0
    at fib (native)
    at try_run (test.js:6)
    at &lt;anonymous&gt; (test.js:28)
</code></pre></div><h3 id="mise-en-\u0153uvre-de-fib-dans-rust" tabindex="-1"><a class="header-anchor" href="#mise-en-\u0153uvre-de-fib-dans-rust" aria-hidden="true">#</a> Mise en \u0153uvre de fib dans rust</h3><p>La fonction fib import\xE9e en js provient de <code>rust/src/export/fib.rs</code> et le code est le suivant :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
use quickjs_ffi::{JSContext, JSValue};
use rust_macro::js;
use std::os::raw::c_int;

#[js]
pub fn fib(n: i64) -&gt; i64 {
  if n &lt;= 1 {
    return if n == 1 { 1 } else { 0 };
  }
  n + fib(n - 1)
}

#[no_mangle]
pub extern &quot;C&quot; fn js_fib(
  ctx: *mut JSContext,
  _this: JSValue,
  argc: c_int,
  argv: *mut JSValue,
) -&gt; JSValue {
  if let Err(err) = arg::arg_miss(ctx, argc, fib_args_len) {
    return err;
  }
  match arg::arg_i64(ctx, argv, 0) {
    Err(err) =&gt; err,
    Ok(n) =&gt; js::val(ctx, fib(n)),
  }
}
</code></pre></div><p>Actuellement, la macro de proc\xE9dure <code>#[js]</code> ajoute simplement une constante <code>fib_args_len</code>qui identifie le nombre d&#39;arguments de la fonction.</p><p>\xC0 l&#39;avenir, la macro de proc\xE9dure <code>./rust_macro</code> pourra \xEAtre \xE9crite pour permettre l&#39;exportation enti\xE8rement automatique des fonctions.</p><h3 id="mise-en-\u0153uvre-de-la-fonction-sommeil-dans-rust" tabindex="-1"><a class="header-anchor" href="#mise-en-\u0153uvre-de-la-fonction-sommeil-dans-rust" aria-hidden="true">#</a> Mise en \u0153uvre de la fonction sommeil dans rust</h3><p>La fonction sleep import\xE9e en js provient de <code>rust/src/export/sleep.rs</code> et le code est le suivant :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
use quickjs_ffi::{JSContext, JSValue};
use rust_macro::js;
use std::os::raw::c_int;

#[js]
pub fn fib(n: i64) -&gt; i64 {
  if n &lt;= 1 {
    return if n == 1 { 1 } else { 0 };
  }
  n + fib(n - 1)
}

#[no_mangle]
pub extern &quot;C&quot; fn js_fib(
  ctx: *mut JSContext,
  _this: JSValue,
  argc: c_int,
  argv: *mut JSValue,
) -&gt; JSValue {
  if let Err(err) = arg::arg_miss(ctx, argc, fib_args_len) {
    return err;
  }
  match arg::arg_i64(ctx, argv, 0) {
    Err(err) =&gt; err,
    Ok(n) =&gt; js::val(ctx, fib(n)),
  }
}
use crate::{js::arg, qjs::run};
use async_io::Timer;
use quickjs_ffi::{JSContext, JSValue};
use rust_macro::js;
use std::{os::raw::c_int, time::Duration};

#[js]
pub async fn sleep(n: u64) {
  Timer::after(Duration::from_millis(n)).await;
}

#[no_mangle]
pub extern &quot;C&quot; fn js_sleep(
  ctx: *mut JSContext,
  _this: JSValue,
  argc: c_int,
  argv: *mut JSValue,
) -&gt; JSValue {
  if let Err(err) = arg::arg_miss(ctx, argc, sleep_args_len) {
    return err;
  }
  match arg::arg_i64(ctx, argv, 0) {
    Err(err) =&gt; err,
    Ok(n) =&gt; run(ctx, async move {
      sleep(n as u64).await;
      Ok(())
    }),
  }
}
</code></pre></div><p>Comme vous pouvez le voir ci-dessus, toutes les fonctions export\xE9es sont d\xE9finies dans le r\xE9pertoire <code>./rust/src/export</code>. Ce r\xE9pertoire <code>mod.rs</code> est automatiquement g\xE9n\xE9r\xE9 lorsque <code>./rust/build.xsh</code> est ex\xE9cut\xE9, exportant tous les fichiers <code>.rs</code> qui s&#39;y trouvent.</p><h3 id="lecture-et-validation-des-parametres-entrants-js" tabindex="-1"><a class="header-anchor" href="#lecture-et-validation-des-parametres-entrants-js" aria-hidden="true">#</a> Lecture et validation des param\xE8tres entrants js</h3><p>Les param\xE8tres sont lus et valid\xE9s sur <code>src/js/arg.rs</code> avec le code suivant :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
use quickjs_ffi::{JSContext, JSValue};
use rust_macro::js;
use std::os::raw::c_int;

#[js]
pub fn fib(n: i64) -&gt; i64 {
  if n &lt;= 1 {
    return if n == 1 { 1 } else { 0 };
  }
  n + fib(n - 1)
}

#[no_mangle]
pub extern &quot;C&quot; fn js_fib(
  ctx: *mut JSContext,
  _this: JSValue,
  argc: c_int,
  argv: *mut JSValue,
) -&gt; JSValue {
  if let Err(err) = arg::arg_miss(ctx, argc, fib_args_len) {
    return err;
  }
  match arg::arg_i64(ctx, argv, 0) {
    Err(err) =&gt; err,
    Ok(n) =&gt; js::val(ctx, fib(n)),
  }
}
use crate::{js::arg, qjs::run};
use async_io::Timer;
use quickjs_ffi::{JSContext, JSValue};
use rust_macro::js;
use std::{os::raw::c_int, time::Duration};

#[js]
pub async fn sleep(n: u64) {
  Timer::after(Duration::from_millis(n)).await;
}

#[no_mangle]
pub extern &quot;C&quot; fn js_sleep(
  ctx: *mut JSContext,
  _this: JSValue,
  argc: c_int,
  argv: *mut JSValue,
) -&gt; JSValue {
  if let Err(err) = arg::arg_miss(ctx, argc, sleep_args_len) {
    return err;
  }
  match arg::arg_i64(ctx, argv, 0) {
    Err(err) =&gt; err,
    Ok(n) =&gt; run(ctx, async move {
      sleep(n as u64).await;
      Ok(())
    }),
  }
}
use crate::js::throw;

use quickjs_ffi::{JSContext, JSValue, JS_IsNumber, JS_ToInt64};
use std::{mem::MaybeUninit, os::raw::c_int};

pub(crate) fn arg_miss(ctx: *mut JSContext, argc: c_int, need: c_int) -&gt; Result&lt;(), JSValue&gt; {
  if argc &lt; need {
    throw(ctx, format!(&quot;miss : args need {need} pass {argc}&quot;))?
  }
  Ok(())
}

pub(crate) fn arg_i64(ctx: *mut JSContext, argv: *mut JSValue, pos: isize) -&gt; Result&lt;i64, JSValue&gt; {
  unsafe {
    let val = *argv.offset(pos);
    if JS_IsNumber(val) == 0 {
      throw(ctx, format!(&quot;not number : args position {pos}&quot;))?
    }
    let mut n = MaybeUninit::uninit();
    JS_ToInt64(ctx, n.as_mut_ptr() as _, val);
    Ok(n.assume_init())
  }
}
</code></pre></div><p>Actuellement, seul le nombre d&#39;arguments est v\xE9rifi\xE9, et le type i64 est lu.</p><p>Vous pouvez ajouter ces fonctions si n\xE9cessaire, voir les fonctions dans <a href="https://docs.rs/qjs-sys/0.1.2/qjs_sys/" target="_blank" rel="noopener noreferrer">qjs_sys</a> commen\xE7ant par <code>JS_To</code>.</p><h3 id="conversion-des-types-de-donnees-de-rust-en-js" tabindex="-1"><a class="header-anchor" href="#conversion-des-types-de-donnees-de-rust-en-js" aria-hidden="true">#</a> Conversion des types de donn\xE9es de rust en js</h3><p>La conversion de type est faite \xE0 <code>src/js/val.rs</code> avec le code suivant :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
use quickjs_ffi::{JSContext, JSValue};
use rust_macro::js;
use std::os::raw::c_int;

#[js]
pub fn fib(n: i64) -&gt; i64 {
  if n &lt;= 1 {
    return if n == 1 { 1 } else { 0 };
  }
  n + fib(n - 1)
}

#[no_mangle]
pub extern &quot;C&quot; fn js_fib(
  ctx: *mut JSContext,
  _this: JSValue,
  argc: c_int,
  argv: *mut JSValue,
) -&gt; JSValue {
  if let Err(err) = arg::arg_miss(ctx, argc, fib_args_len) {
    return err;
  }
  match arg::arg_i64(ctx, argv, 0) {
    Err(err) =&gt; err,
    Ok(n) =&gt; js::val(ctx, fib(n)),
  }
}
use crate::{js::arg, qjs::run};
use async_io::Timer;
use quickjs_ffi::{JSContext, JSValue};
use rust_macro::js;
use std::{os::raw::c_int, time::Duration};

#[js]
pub async fn sleep(n: u64) {
  Timer::after(Duration::from_millis(n)).await;
}

#[no_mangle]
pub extern &quot;C&quot; fn js_sleep(
  ctx: *mut JSContext,
  _this: JSValue,
  argc: c_int,
  argv: *mut JSValue,
) -&gt; JSValue {
  if let Err(err) = arg::arg_miss(ctx, argc, sleep_args_len) {
    return err;
  }
  match arg::arg_i64(ctx, argv, 0) {
    Err(err) =&gt; err,
    Ok(n) =&gt; run(ctx, async move {
      sleep(n as u64).await;
      Ok(())
    }),
  }
}
use crate::js::throw;

use quickjs_ffi::{JSContext, JSValue, JS_IsNumber, JS_ToInt64};
use std::{mem::MaybeUninit, os::raw::c_int};

pub(crate) fn arg_miss(ctx: *mut JSContext, argc: c_int, need: c_int) -&gt; Result&lt;(), JSValue&gt; {
  if argc &lt; need {
    throw(ctx, format!(&quot;miss : args need {need} pass {argc}&quot;))?
  }
  Ok(())
}

pub(crate) fn arg_i64(ctx: *mut JSContext, argv: *mut JSValue, pos: isize) -&gt; Result&lt;i64, JSValue&gt; {
  unsafe {
    let val = *argv.offset(pos);
    if JS_IsNumber(val) == 0 {
      throw(ctx, format!(&quot;not number : args position {pos}&quot;))?
    }
    let mut n = MaybeUninit::uninit();
    JS_ToInt64(ctx, n.as_mut_ptr() as _, val);
    Ok(n.assume_init())
  }
}
use quickjs_ffi::{JSContext, JSValue, JS_NewInt64, JS_NewString, JS_NULL, JS_UNDEFINED};
use std::ffi::CString;

pub enum Val {
  None,
  Undefined,
  I64(i64),
  CString(CString),
}

impl From&lt;()&gt; for Val {
  fn from(_: ()) -&gt; Self {
    Val::Undefined
  }
}

impl From&lt;i64&gt; for Val {
  fn from(t: i64) -&gt; Self {
    Val::I64(t)
  }
}

impl From&lt;CString&gt; for Val {
  fn from(t: CString) -&gt; Self {
    Val::CString(t)
  }
}

pub(crate) fn val(ctx: *mut JSContext, t: impl Into&lt;Val&gt;) -&gt; JSValue {
  match t.into() {
    Val::None =&gt; JS_NULL,
    Val::Undefined =&gt; JS_UNDEFINED,
    Val::I64(n) =&gt; unsafe { JS_NewInt64(ctx, n) },
    Val::CString(cstr) =&gt; unsafe { JS_NewString(ctx, cstr.as_ptr()) },
  }
}
</code></pre></div><p>Seuls quatre types sont d\xE9finis pour la conversion de <code>None</code>, <code>()</code>, <code>i64</code>et CString en <code>js</code>. Vous pouvez en ajouter autant que vous le souhaitez.</p><p>D&#39;autres types de donn\xE9es peuvent \xEAtre d\xE9clar\xE9s dans les fonctions de <a href="https://docs.rs/qjs-sys/0.1.2/qjs_sys/" target="_blank" rel="noopener noreferrer">qjs_sys</a> commen\xE7ant par <code>JS_New</code>.</p><h2 id="environnement-de-developpement" tabindex="-1"><a class="header-anchor" href="#environnement-de-developpement" aria-hidden="true">#</a> Environnement de d\xE9veloppement</h2><p>Je d\xE9veloppe sur un ordinateur portable Apple, rust utilise la version 1.62.0-nightly.</p><p>Installez d&#39;abord <a href="https://direnv.net" target="_blank" rel="noopener noreferrer">direnv</a>, allez dans le r\xE9pertoire et <code>direnv allow</code> pendant un moment.</p><p>Installez python3, puis <code>pip3 install -r ./requirements.txt</code></p><p>run <code>./build.xsh</code> pour compiler et ex\xE9cuter la d\xE9mo</p><p>Par d\xE9faut, le d\xE9p\xF4t officiel de quickjs sera clon\xE9, si vous souhaitez modifier les quickjs dans le d\xE9p\xF4t Kraken, commencez par</p><p><code>git clone --recursive git@github.com:openkraken/kraken.git --depth=1</code></p><p>alors faites ce qui suit</p><div class="language-bash ext-sh"><pre class="language-bash"><code>rm -rf quickjs
ln -s ../kraken/bridge/third_party/quickjs .
</code></pre></div><p>Enfin, ex\xE9cutez \xE0 nouveau le <code>./build.xsh</code></p><h2 id="structure-du-repertoire" tabindex="-1"><a class="header-anchor" href="#structure-du-repertoire" aria-hidden="true">#</a> Structure du r\xE9pertoire</h2><ul><li><p><code>./quickjs_rust</code><br> Modification du fichier c du code quickjs</p></li><li><p><code>./quickjs_ffi</code><br> Exportation des fonctions du fichier d&#39;en-t\xEAte <code>quickjs</code> vers <code>rust</code></p></li><li><p><code>./rust</code><br> Utilisez <code>rust</code> pour mettre en \u0153uvre les fonctions de <code>quickjs</code>.</p><ul><li><code>./rust/src/qjs.rs</code><br> Mise en \u0153uvre d&#39;appels asynchrones. Comme <code>quickjs</code> est monofilaire, les appels de fonction impliquant <code>quckjs</code> sont \xE9crits dans le fil principal.</li></ul></li><li><p><code>./rust_macro</code><br><code>rust</code> Mise en \u0153uvre de la macro proc\xE9dure <code>#[js]</code></p><p>Dans le futur, voir <a href="https://github.com/second-state/wasmedge-quickjs/blob/70efe8520dc65636cb81b7225e2a6dae47cfad49/src/quickjs_sys/mod.rs#L122" target="_blank" rel="noopener noreferrer">wasmedge-quickjs</a> pour une exportation automatique des fonctions rust vers des fonctions js. <a href="https://github.com/second-state/wasmedge-quickjs/blob/70efe8520dc65636cb81b7225e2a6dae47cfad49/src/quickjs_sys/mod.rs#L122" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 JsFunctionTrampoline</a></p></li></ul><h2 id="scripts-de-construction-build-xsh" tabindex="-1"><a class="header-anchor" href="#scripts-de-construction-build-xsh" aria-hidden="true">#</a> Scripts de construction <code>build.xsh</code></h2><p>Sans plus attendre, allons directement au code source du script de construction <code>build.xsh</code>.</p><div class="language-xonsh ext-xonsh"><pre class="language-xonsh"><code>#!/usr/bin/env xonsh

from pathlib import Path
from os.path import dirname,abspath,exists,join
PWD = dirname(abspath(__file__))
cd @(PWD)

p&quot;.xonshrc&quot;.exists() &amp;&amp; source .xonshrc

quickjs = &#39;quickjs&#39;

if not exists(quickjs):
  git clone git@github.com:bellard/@(quickjs).git --depth=1

./quickjs_rust/patch.py

./rust/build.xsh
./quickjs_rust/gen.py

def ln_s(li):
  for arg in li.split(&#39; &#39;):
    fp = join(quickjs,arg)
    if not exists(fp):
      ln -s @(PWD)/@(arg) @(fp)

ln_s(&#39;quickjs_rust rust quickjs_ffi rust_macro&#39;)

cd @(quickjs)
make qjs

cd @(PWD)
./quickjs/qjs --unhandled-rejection -m test.js 2&gt;&amp;1 | tee test.js.out
</code></pre></div><h2 id="explication-du-principe" tabindex="-1"><a class="header-anchor" href="#explication-du-principe" aria-hidden="true">#</a> Explication du principe</h2><h3 id="quickjs-rust-patch-py" tabindex="-1"><a class="header-anchor" href="#quickjs-rust-patch-py" aria-hidden="true">#</a> <code>quickjs_rust/patch.py</code></h3><p>L&#39;ex\xE9cution de <code>./quickjs_rust/patch.py</code> apportera quelques changements mineurs au code source de <code>quickjs</code>.</p><p>Une des fonctions <code>JS_AddRust</code> est utilis\xE9e pour injecter dans le module rust.</p><p><code>rust_run</code> est inject\xE9 dans <code>JS_ExecutePendingJob</code> pour appeler des fonctions asynchrones.</p><p>Une capture d&#39;\xE9cran de tous les changements est pr\xE9sent\xE9e ci-dessous :</p><p><img src="//irmw.gumlet.io/ep2Xgg.png" alt=""></p><h3 id="quickjs-rust-h" tabindex="-1"><a class="header-anchor" href="#quickjs-rust-h" aria-hidden="true">#</a> <code>quickjs_rust.h</code></h3><p>A partir des changements ci-dessus, vous pouvez voir que nous avons introduit un nouveau fichier d&#39;en-t\xEAte <code>quickjs_rust.h</code> avec le code suivant</p><div class="language-c ext-c"><pre class="language-c"><code>#ifndef QUICKJS_RUST_H
#define QUICKJS_RUST_H

#include &quot;../quickjs/quickjs.h&quot;
#include &quot;../rust/rust.h&quot;

#define countof(x) (sizeof(x) / sizeof((x)[0]))
#define JS_RUSTFUNC_DEF(name) JS_CFUNC_DEF(#name, name##_args_len, js_##name)
#include &quot;./js_rust_funcs.h&quot;

static const unsigned int js_rust_funcs_count = countof(js_rust_funcs);

static int
js_rust_init(JSContext* ctx, JSModuleDef* m)
{
  return JS_SetModuleExportList(ctx, m, js_rust_funcs,
      js_rust_funcs_count);
}

#define JS_INIT_MODULE js_init_module_rust

JSModuleDef* JS_INIT_MODULE(JSContext* ctx, const char* module_name)
{
  JSModuleDef* m;
  m = JS_NewCModule(ctx, module_name, js_rust_init);
  if (!m)
    return NULL;
  js_rust_init(ctx, m);
  return m;
}

void JS_AddRust(JSContext* ctx, JSRuntime* rt)
{
  JSModuleDef* m = JS_INIT_MODULE(ctx, &quot;rust&quot;);
  for (unsigned int i = 0; i &lt; js_rust_funcs_count; i++) {
    JS_AddModuleExport(ctx, m, js_rust_funcs[i].name);
  }
  rust_init(ctx, rt);
}

#endif
</code></pre></div><h3 id="rust-rust-h" tabindex="-1"><a class="header-anchor" href="#rust-rust-h" aria-hidden="true">#</a> <code>rust/rust.h</code></h3><p>Vous pouvez voir que <code>quickjs_rust/quickjs_rust.h</code> introduit <code>quickjs_rust/js_rust_funcs.h</code>, qui est automatiquement g\xE9n\xE9r\xE9 \xE0 partir du fichier d&#39;en-t\xEAte de la fonction d&#39;exportation rust <code>rust/rust.h</code> et ne doit pas \xEAtre modifi\xE9 \xE0 la main.</p><p>Et <code>rust/rust.h</code> est g\xE9n\xE9r\xE9 en appelant cbindgen depuis <code>./rust/build.xsh</code>.</p><h3 id="rust-build-xsh" tabindex="-1"><a class="header-anchor" href="#rust-build-xsh" aria-hidden="true">#</a> <code>rust/build.xsh</code></h3><div class="language-xonsh ext-xonsh"><pre class="language-xonsh"><code>#!/usr/bin/env xonsh

from os.path import dirname,abspath
import platform
PWD = dirname(abspath(__file__))
cd @(PWD)

p&quot;../.xonshrc&quot;.exists() &amp;&amp; source ../.xonshrc

./src/export/mod.gen.py

system = platform.system().lower()
if system == &#39;darwin&#39;:
  system = f&#39;apple-{system}&#39;

TARGET=f&#39;{platform.machine()}-{system}&#39;

def cbindgen():
  cbindgen -q --config cbindgen.toml --crate rust --output rust.h

try:
  cbindgen()
except:
  cargo clean
  cbindgen()

cargo build \\
--release \\
-Z build-std=std,panic_abort \\
-Z build-std-features=panic_immediate_abort \\
--target @(TARGET)

mv ./target/@(TARGET)/release/librust.a ./target/release
</code></pre></div><h2 id="notes-de-developpement" tabindex="-1"><a class="header-anchor" href="#notes-de-developpement" aria-hidden="true">#</a> Notes de d\xE9veloppement</h2><h3 id="quickjs-ffi" tabindex="-1"><a class="header-anchor" href="#quickjs-ffi" aria-hidden="true">#</a> <code>quickjs_ffi</code></h3><p>Code provenant de <a href="https://raw.githubusercontent.com/taskie/quijine/main/quijine_core/src/ffi.rs" target="_blank" rel="noopener noreferrer">quijine/main/quijine_core/src/ffi.rs</a></p><p>avec quelques modifications mineures, en rempla\xE7ant</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
use quickjs_ffi::{JSContext, JSValue};
use rust_macro::js;
use std::os::raw::c_int;

#[js]
pub fn fib(n: i64) -&gt; i64 {
  if n &lt;= 1 {
    return if n == 1 { 1 } else { 0 };
  }
  n + fib(n - 1)
}

#[no_mangle]
pub extern &quot;C&quot; fn js_fib(
  ctx: *mut JSContext,
  _this: JSValue,
  argc: c_int,
  argv: *mut JSValue,
) -&gt; JSValue {
  if let Err(err) = arg::arg_miss(ctx, argc, fib_args_len) {
    return err;
  }
  match arg::arg_i64(ctx, argv, 0) {
    Err(err) =&gt; err,
    Ok(n) =&gt; js::val(ctx, fib(n)),
  }
}
use crate::{js::arg, qjs::run};
use async_io::Timer;
use quickjs_ffi::{JSContext, JSValue};
use rust_macro::js;
use std::{os::raw::c_int, time::Duration};

#[js]
pub async fn sleep(n: u64) {
  Timer::after(Duration::from_millis(n)).await;
}

#[no_mangle]
pub extern &quot;C&quot; fn js_sleep(
  ctx: *mut JSContext,
  _this: JSValue,
  argc: c_int,
  argv: *mut JSValue,
) -&gt; JSValue {
  if let Err(err) = arg::arg_miss(ctx, argc, sleep_args_len) {
    return err;
  }
  match arg::arg_i64(ctx, argv, 0) {
    Err(err) =&gt; err,
    Ok(n) =&gt; run(ctx, async move {
      sleep(n as u64).await;
      Ok(())
    }),
  }
}
use crate::js::throw;

use quickjs_ffi::{JSContext, JSValue, JS_IsNumber, JS_ToInt64};
use std::{mem::MaybeUninit, os::raw::c_int};

pub(crate) fn arg_miss(ctx: *mut JSContext, argc: c_int, need: c_int) -&gt; Result&lt;(), JSValue&gt; {
  if argc &lt; need {
    throw(ctx, format!(&quot;miss : args need {need} pass {argc}&quot;))?
  }
  Ok(())
}

pub(crate) fn arg_i64(ctx: *mut JSContext, argv: *mut JSValue, pos: isize) -&gt; Result&lt;i64, JSValue&gt; {
  unsafe {
    let val = *argv.offset(pos);
    if JS_IsNumber(val) == 0 {
      throw(ctx, format!(&quot;not number : args position {pos}&quot;))?
    }
    let mut n = MaybeUninit::uninit();
    JS_ToInt64(ctx, n.as_mut_ptr() as _, val);
    Ok(n.assume_init())
  }
}
use quickjs_ffi::{JSContext, JSValue, JS_NewInt64, JS_NewString, JS_NULL, JS_UNDEFINED};
use std::ffi::CString;

pub enum Val {
  None,
  Undefined,
  I64(i64),
  CString(CString),
}

impl From&lt;()&gt; for Val {
  fn from(_: ()) -&gt; Self {
    Val::Undefined
  }
}

impl From&lt;i64&gt; for Val {
  fn from(t: i64) -&gt; Self {
    Val::I64(t)
  }
}

impl From&lt;CString&gt; for Val {
  fn from(t: CString) -&gt; Self {
    Val::CString(t)
  }
}

pub(crate) fn val(ctx: *mut JSContext, t: impl Into&lt;Val&gt;) -&gt; JSValue {
  match t.into() {
    Val::None =&gt; JS_NULL,
    Val::Undefined =&gt; JS_UNDEFINED,
    Val::I64(n) =&gt; unsafe { JS_NewInt64(ctx, n) },
    Val::CString(cstr) =&gt; unsafe { JS_NewString(ctx, cstr.as_ptr()) },
  }
}
pub use libquickjs_sys::*;
</code></pre></div><p>\xE0</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
use quickjs_ffi::{JSContext, JSValue};
use rust_macro::js;
use std::os::raw::c_int;

#[js]
pub fn fib(n: i64) -&gt; i64 {
  if n &lt;= 1 {
    return if n == 1 { 1 } else { 0 };
  }
  n + fib(n - 1)
}

#[no_mangle]
pub extern &quot;C&quot; fn js_fib(
  ctx: *mut JSContext,
  _this: JSValue,
  argc: c_int,
  argv: *mut JSValue,
) -&gt; JSValue {
  if let Err(err) = arg::arg_miss(ctx, argc, fib_args_len) {
    return err;
  }
  match arg::arg_i64(ctx, argv, 0) {
    Err(err) =&gt; err,
    Ok(n) =&gt; js::val(ctx, fib(n)),
  }
}
use crate::{js::arg, qjs::run};
use async_io::Timer;
use quickjs_ffi::{JSContext, JSValue};
use rust_macro::js;
use std::{os::raw::c_int, time::Duration};

#[js]
pub async fn sleep(n: u64) {
  Timer::after(Duration::from_millis(n)).await;
}

#[no_mangle]
pub extern &quot;C&quot; fn js_sleep(
  ctx: *mut JSContext,
  _this: JSValue,
  argc: c_int,
  argv: *mut JSValue,
) -&gt; JSValue {
  if let Err(err) = arg::arg_miss(ctx, argc, sleep_args_len) {
    return err;
  }
  match arg::arg_i64(ctx, argv, 0) {
    Err(err) =&gt; err,
    Ok(n) =&gt; run(ctx, async move {
      sleep(n as u64).await;
      Ok(())
    }),
  }
}
use crate::js::throw;

use quickjs_ffi::{JSContext, JSValue, JS_IsNumber, JS_ToInt64};
use std::{mem::MaybeUninit, os::raw::c_int};

pub(crate) fn arg_miss(ctx: *mut JSContext, argc: c_int, need: c_int) -&gt; Result&lt;(), JSValue&gt; {
  if argc &lt; need {
    throw(ctx, format!(&quot;miss : args need {need} pass {argc}&quot;))?
  }
  Ok(())
}

pub(crate) fn arg_i64(ctx: *mut JSContext, argv: *mut JSValue, pos: isize) -&gt; Result&lt;i64, JSValue&gt; {
  unsafe {
    let val = *argv.offset(pos);
    if JS_IsNumber(val) == 0 {
      throw(ctx, format!(&quot;not number : args position {pos}&quot;))?
    }
    let mut n = MaybeUninit::uninit();
    JS_ToInt64(ctx, n.as_mut_ptr() as _, val);
    Ok(n.assume_init())
  }
}
use quickjs_ffi::{JSContext, JSValue, JS_NewInt64, JS_NewString, JS_NULL, JS_UNDEFINED};
use std::ffi::CString;

pub enum Val {
  None,
  Undefined,
  I64(i64),
  CString(CString),
}

impl From&lt;()&gt; for Val {
  fn from(_: ()) -&gt; Self {
    Val::Undefined
  }
}

impl From&lt;i64&gt; for Val {
  fn from(t: i64) -&gt; Self {
    Val::I64(t)
  }
}

impl From&lt;CString&gt; for Val {
  fn from(t: CString) -&gt; Self {
    Val::CString(t)
  }
}

pub(crate) fn val(ctx: *mut JSContext, t: impl Into&lt;Val&gt;) -&gt; JSValue {
  match t.into() {
    Val::None =&gt; JS_NULL,
    Val::Undefined =&gt; JS_UNDEFINED,
    Val::I64(n) =&gt; unsafe { JS_NewInt64(ctx, n) },
    Val::CString(cstr) =&gt; unsafe { JS_NewString(ctx, cstr.as_ptr()) },
  }
}
pub use libquickjs_sys::*;
#![allow(non_upper_case_globals)]
#![allow(non_camel_case_types)]
#![allow(non_snake_case)]

include!(concat!(env!(&quot;OUT_DIR&quot;), &quot;/c.rs&quot;));
</code></pre></div><h3 id="undefined-symbols-for-architecture-x86-64-js-toint32" tabindex="-1"><a class="header-anchor" href="#undefined-symbols-for-architecture-x86-64-js-toint32" aria-hidden="true">#</a> <code>Undefined symbols for architecture x86_64: &quot;_JS_ToInt32&quot;</code></h3><p>Modifier &#39;. /rust/Cargo.toml&#39; comme suit, en ne conservant que la staticlib</p><div class="language-toml ext-toml"><pre class="language-toml"><code>[lib]
#crate-type = [&quot;lib&quot;, &quot;cdylib&quot;, &quot;staticlib&quot;]
crate-type = [&quot;staticlib&quot;]
</code></pre></div><h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> R\xE9f\xE9rences</h2><ol start="0"><li>Du moteur <code>JS</code> au runtime <code>JS</code> <a href="https://github.com/doodlewind/blog/blob/master/source/_posts/js-engine-to-js-runtime-1.md" target="_blank" rel="noopener noreferrer">(en haut)</a> <a href="https://github.com/doodlewind/blog/blob/master/source/_posts/js-engine-to-js-runtime-2.md" target="_blank" rel="noopener noreferrer">(en bas)</a></li><li><a href="https://github.com/quickjs-zh/QuickJS/wiki/%E4%BD%BF%E7%94%A8C%E8%AF%AD%E8%A8%80%E4%B8%BAQuickJS%E5%BC%80%E5%8F%91%E4%B8%80%E4%B8%AA%E5%8E%9F%E7%94%9F%E6%A8%A1%E5%9D%97" target="_blank" rel="noopener noreferrer">D\xE9velopper un module natif pour <code>QuickJS</code> en C</a></li><li><a href="https://wasmedge.org/book/en/dev/js/rust.html" target="_blank" rel="noopener noreferrer">Utiliser Rust pour impl\xE9menter l&#39;API JS</a></li><li><a href="https://github.com/Kozova1/quickjs-example" target="_blank" rel="noopener noreferrer">Exemples de QuickJS</a></li><li><a href="https://rust-lang.github.io/rust-bindgen/" target="_blank" rel="noopener noreferrer">rouille-bindgen</a></li><li><a href="https://calbertts.medium.com/how-to-create-asynchronous-apis-for-quickjs-8aca5488bb2e" target="_blank" rel="noopener noreferrer">Comment cr\xE9er du code asynchrone pour <code>QuickJS</code></a></li><li><a href="https://github.com/DelSkayn/rquickjs/blob/master/core/src/context/ctx.rs#L104" target="_blank" rel="noopener noreferrer">rquickjs \u2192 JS_NouvellePromesseCapacit\xE9</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/8a65582265ecdd3171380feebf56b3bb8c34d183/src/quickjs_sys/mod.rs#L515" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 new_promise</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/da887752fdc9c36aca0f4b7499c5b115862ce771/src/internal_module/wasi_net_module.rs#L46" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 JsMethod</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/8a65582265ecdd3171380feebf56b3bb8c34d183/src/quickjs_sys/mod.rs#L756" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 appel</a></li><li><a href="https://mp.weixin.qq.com/s/BKto24ItwXbeHon_LaF_0w" target="_blank" rel="noopener noreferrer">Le pi\xE8ge inaper\xE7u - les serrures en Rust</a></li></ol><h2 id="a-propos-de" tabindex="-1"><a class="header-anchor" href="#a-propos-de" aria-hidden="true">#</a> \xC0 propos de</h2><p>Ce projet fait partie du projet de code <strong>rmw.link ( <a href="//rmw.link" target="_blank" rel="noopener noreferrer">rmw.link</a></strong> ).</p><p><img src="https://raw.githubusercontent.com/rmw-link/logo/master/rmw.red.bg.svg" alt="rmw.link"></p>`,81);function s(a,o){return r}var c=e(t,[["render",s],["__file","2022-04-29-quickjs-rust.html.vue"]]);export{c as default};
