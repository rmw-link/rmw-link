import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as n}from"./app.2a6a1bd2.js";const t={},r=n(`<h1 id="modificarea-quickjs-pentru-a-importa-functii-ruginite-un-nou-mod-de-a-gandi-despre-extinderea-kraken" tabindex="-1"><a class="header-anchor" href="#modificarea-quickjs-pentru-a-importa-functii-ruginite-un-nou-mod-de-a-gandi-despre-extinderea-kraken" aria-hidden="true">#</a> Modificarea quickjs pentru a importa func\u021Bii ruginite - un nou mod de a g\xE2ndi despre extinderea Kraken</h1><h2 id="depozit-de-coduri" tabindex="-1"><a class="header-anchor" href="#depozit-de-coduri" aria-hidden="true">#</a> Depozit de coduri</h2><ul><li><a href="https://github.com/rmw-lib/quickjs-rust" target="_blank" rel="noopener noreferrer">github</a></li><li><a href="https://gitee.com/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">gitee</a></li><li><a href="https://gitflic.ru/project/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">gitflic</a></li><li><a href="https://bitbucket.org/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">bitbucket</a></li></ul><h2 id="geneza" tabindex="-1"><a class="header-anchor" href="#geneza" aria-hidden="true">#</a> Geneza</h2><p><a href="https://openkraken.com" target="_blank" rel="noopener noreferrer">Kraken</a> este un motor de randare web de \xEEnalt\u0103 performan\u021B\u0103 bazat pe <code>Flutter</code>, care folose\u0219te <a href="https://github.com/openkraken/kraken/tree/main/bridge/third_party/quickjs" target="_blank" rel="noopener noreferrer">quickjs</a> ca motor de scripting.</p><p>Am vrut s\u0103 scriu c\xE2teva extensii pentru Kraken folosind <code>rust</code>.</p><p>Kraken <a href="https://openkraken.com/guide/advanced/custom-js-api" target="_blank" rel="noopener noreferrer">accept\u0103 scrierea de extensii folosind <code>dart</code></a> .</p><p>Utilizarea <a href="https://github.com/fzyzcjy/flutter_rust_bridge" target="_blank" rel="noopener noreferrer"><code>flutter_rust_bridge</code></a> <code>rust</code> \u0219i <code>dart</code>.</p><p>Combin\xE2nd aceste dou\u0103 puncte, nu este dificil s\u0103 scrie\u021Bi extensii Kraken folosind <code>rust</code>.<br> Cu toate acestea, performan\u021Ba acestei solu\u021Bii este ridicat\u0103, deoarece exist\u0103 o penalizare de performan\u021B\u0103 pentru <code>dart</code> care apeleaz\u0103 <code>rust</code> \u0219i o alta pentru <code>quickjs</code> care apeleaz\u0103 <code>dart</code>.</p><p>Pe de alt\u0103 parte, \xEEn timp ce comunitatea <code>rust</code> a <a href="https://github.com/DelSkayn/rquickjs" target="_blank" rel="noopener noreferrer"><code>rquickjs</code></a> astfel de apeluri c\u0103tre biblioteca <code>quickjs</code> din <code>rust</code>.<br> Cu toate acestea, ele apeleaz\u0103 <code>quickjs</code> \xEEn loc s\u0103 integreze <code>quickjs</code>\u0219i nu pot fi folosite pentru a face magie pe <code>quickjs</code>.</p><p>\xCEn aceast\u0103 baz\u0103 de cod, am implementat o nou\u0103 solu\u021Bie: modificarea direct\u0103 a codului surs\u0103 <code>quickjs</code> pentru a suporta extensia <code>rust</code>.</p><p>Aceasta este o solu\u021Bie generic\u0103 care poate fi utilizat\u0103 nu numai pentru modificarea Kraken, ci \u0219i pentru toate cadrele \u0219i bibliotecile care \xEEncorporeaz\u0103 <code>quickjs</code>.</p><h2 id="demonstratie" tabindex="-1"><a class="header-anchor" href="#demonstratie" aria-hidden="true">#</a> Demonstra\u021Bie</h2><p>Codul test.js este dup\u0103 cum urmeaz\u0103 :</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>const try_run = (func, ...args) =&gt; {
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
</code></pre></div><p>Rula\u021Bi <code>./quickjs/qjs test.js</code>, ie\u0219ire :</p><div class="language-text ext-text"><pre class="language-text"><code>export from rust : fib,sleep
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
</code></pre></div><h3 id="implementarea-lui-fib-in-rust" tabindex="-1"><a class="header-anchor" href="#implementarea-lui-fib-in-rust" aria-hidden="true">#</a> Implementarea lui fib \xEEn rust</h3><p>Func\u021Bia fib importat\u0103 \xEEn js este din <code>rust/src/export/fib.rs</code> \u0219i codul este urm\u0103torul :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>\xCEn prezent, macroprocedura <code>#[js]</code> adaug\u0103 doar o constant\u0103 <code>fib_args_len</code>care identific\u0103 num\u0103rul de argumente ale func\u021Biei.</p><p>\xCEn viitor, macroprocedura <code>./rust_macro</code> poate fi scris\u0103 pentru a permite exportul complet automat de func\u021Bii.</p><h3 id="implementarea-functiei-sleep-in-rust" tabindex="-1"><a class="header-anchor" href="#implementarea-functiei-sleep-in-rust" aria-hidden="true">#</a> Implementarea func\u021Biei sleep \xEEn rust</h3><p>Func\u021Bia sleep importat\u0103 \xEEn js este din <code>rust/src/export/sleep.rs</code> \u0219i codul este urm\u0103torul :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>Dup\u0103 cum pute\u021Bi vedea mai sus, toate func\u021Biile exportate sunt definite \xEEn directorul <code>./rust/src/export</code>. Acest director <code>mod.rs</code> este generat automat atunci c\xE2nd se execut\u0103 <code>./rust/build.xsh</code>, export\xE2nd toate fi\u0219ierele <code>.rs</code> sub el.</p><h3 id="citirea-si-validarea-parametrilor-js-de-intrare" tabindex="-1"><a class="header-anchor" href="#citirea-si-validarea-parametrilor-js-de-intrare" aria-hidden="true">#</a> Citirea \u0219i validarea parametrilor js de intrare</h3><p>Parametrii sunt citi\u021Bi \u0219i valida\u021Bi la <code>src/js/arg.rs</code> cu urm\u0103torul cod :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>\xCEn prezent, se verific\u0103 doar num\u0103rul de argumente \u0219i se cite\u0219te tipul i64.</p><p>Pute\u021Bi ad\u0103uga aceste func\u021Bii \xEEn func\u021Bie de necesit\u0103\u021Bi, consulta\u021Bi func\u021Biile din <a href="https://docs.rs/qjs-sys/0.1.2/qjs_sys/" target="_blank" rel="noopener noreferrer">qjs_sys</a> \xEEncep\xE2nd cu <code>JS_To</code>.</p><h3 id="conversia-tipului-de-date-din-rust-in-js" tabindex="-1"><a class="header-anchor" href="#conversia-tipului-de-date-din-rust-in-js" aria-hidden="true">#</a> Conversia tipului de date din rust \xEEn js</h3><p>Conversia de tip se face la <code>src/js/val.rs</code> cu urm\u0103torul cod :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>Doar patru tipuri sunt definite pentru conversia din <code>None</code>, <code>()</code>, <code>i64</code>\u0219i CString \xEEn <code>js</code>. Pute\u021Bi ad\u0103uga c\xE2te tipuri dori\u021Bi.</p><p>Mai multe tipuri de date pot fi declarate \xEEn func\u021Biile din <a href="https://docs.rs/qjs-sys/0.1.2/qjs_sys/" target="_blank" rel="noopener noreferrer">qjs_sys</a> \xEEncep\xE2nd cu <code>JS_New</code>.</p><h2 id="mediu-de-dezvoltare" tabindex="-1"><a class="header-anchor" href="#mediu-de-dezvoltare" aria-hidden="true">#</a> Mediu de dezvoltare</h2><p>Eu dezvolt pe un laptop Apple, rust folose\u0219te 1.62.0-nightly.</p><p>Mai \xEEnt\xE2i instala\u021Bi <a href="https://direnv.net" target="_blank" rel="noopener noreferrer">direnv</a>, merge\u021Bi la directorul \u0219i <code>direnv allow</code> pentru o vreme</p><p>Instala\u021Bi python3, apoi <code>pip3 install -r ./requirements.txt</code></p><p>rula\u021Bi <code>./build.xsh</code> pentru a compila \u0219i rula demo-ul</p><p>\xCEn mod implicit, depozitul oficial quickjs va fi clonat, dac\u0103 dori\u021Bi s\u0103 modifica\u021Bi quickjs \xEEn depozitul Kraken, mai \xEEnt\xE2i</p><p><code>git clone --recursive git@github.com:openkraken/kraken.git --depth=1</code></p><p>atunci face\u021Bi urm\u0103toarele</p><div class="language-bash ext-sh"><pre class="language-bash"><code>rm -rf quickjs
ln -s ../kraken/bridge/third_party/quickjs .
</code></pre></div><p>\xCEn cele din urm\u0103, rula\u021Bi din nou aplica\u021Bia <code>./build.xsh</code></p><h2 id="structura-directoarelor" tabindex="-1"><a class="header-anchor" href="#structura-directoarelor" aria-hidden="true">#</a> Structura directoarelor</h2><ul><li><p><code>./quickjs_rust</code><br> Modificarea fi\u0219ierului c al codului quickjs</p></li><li><p><code>./quickjs_ffi</code><br> Exporta\u021Bi func\u021Biile din fi\u0219ierul de antet <code>quickjs</code> \xEEn <code>rust</code></p></li><li><p><code>./rust</code><br> Utiliza\u021Bi <code>rust</code> pentru a implementa func\u021Biile din <code>quickjs</code></p><ul><li><code>./rust/src/qjs.rs</code><br> Implementarea apelurilor asincrone. Deoarece <code>quickjs</code> este un singur fir de execu\u021Bie, apelurile de func\u021Bii care implic\u0103 <code>quckjs</code> sunt scrise \xEEn firul principal.</li></ul></li><li><p><code>./rust_macro</code><br><code>rust</code> Punerea \xEEn aplicare a macroprocedurii <code>#[js]</code></p><p>\xCEn viitor, vede\u021Bi <a href="https://github.com/second-state/wasmedge-quickjs/blob/70efe8520dc65636cb81b7225e2a6dae47cfad49/src/quickjs_sys/mod.rs#L122" target="_blank" rel="noopener noreferrer">wasmedge-quickjs</a> pentru un export automat de func\u021Bii rust \xEEn func\u021Bii js. <a href="https://github.com/second-state/wasmedge-quickjs/blob/70efe8520dc65636cb81b7225e2a6dae47cfad49/src/quickjs_sys/mod.rs#L122" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 JsFunctionTrampoline</a></p></li></ul><h2 id="scripturi-de-constructie-build-xsh" tabindex="-1"><a class="header-anchor" href="#scripturi-de-constructie-build-xsh" aria-hidden="true">#</a> Scripturi de construc\u021Bie <code>build.xsh</code></h2><p>F\u0103r\u0103 alte comentarii, s\u0103 trecem direct la codul surs\u0103 al scriptului de compilare <code>build.xsh</code></p><div class="language-xonsh ext-xonsh"><pre class="language-xonsh"><code>#!/usr/bin/env xonsh

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
</code></pre></div><h2 id="explicarea-principiului" tabindex="-1"><a class="header-anchor" href="#explicarea-principiului" aria-hidden="true">#</a> Explicarea principiului</h2><h3 id="quickjs-rust-patch-py" tabindex="-1"><a class="header-anchor" href="#quickjs-rust-patch-py" aria-hidden="true">#</a> <code>quickjs_rust/patch.py</code></h3><p>Rularea <code>./quickjs_rust/patch.py</code> va aduce c\xE2teva modific\u0103ri minore la codul surs\u0103 <code>quickjs</code>.</p><p>Una dintre func\u021Biile <code>JS_AddRust</code> este utilizat\u0103 pentru a fi injectat\u0103 \xEEn modulul rust.</p><p><code>rust_run</code> este injectat \xEEn <code>JS_ExecutePendingJob</code> pentru a apela func\u021Bii asincrone.</p><p>O captur\u0103 de ecran cu toate modific\u0103rile este prezentat\u0103 mai jos :</p><p><img src="//irmw.gumlet.io/ep2Xgg.png" alt=""></p><h3 id="quickjs-rust-h" tabindex="-1"><a class="header-anchor" href="#quickjs-rust-h" aria-hidden="true">#</a> <code>quickjs_rust.h</code></h3><p>Din modific\u0103rile de mai sus, pute\u021Bi vedea c\u0103 am introdus un nou fi\u0219ier antet <code>quickjs_rust.h</code> cu urm\u0103torul cod</p><div class="language-c ext-c"><pre class="language-c"><code>#ifndef QUICKJS_RUST_H
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
</code></pre></div><h3 id="rust-rust-h" tabindex="-1"><a class="header-anchor" href="#rust-rust-h" aria-hidden="true">#</a> <code>rust/rust.h</code></h3><p>Pute\u021Bi vedea c\u0103 <code>quickjs_rust/quickjs_rust.h</code> introduce <code>quickjs_rust/js_rust_funcs.h</code>, care este generat automat din fi\u0219ierul de antet al func\u021Biei de export rust <code>rust/rust.h</code> \u0219i nu trebuie modificat manual.</p><p>Iar <code>rust/rust.h</code> este generat prin apelarea cbindgen din <code>./rust/build.xsh</code>.</p><h3 id="rust-build-xsh" tabindex="-1"><a class="header-anchor" href="#rust-build-xsh" aria-hidden="true">#</a> <code>rust/build.xsh</code></h3><div class="language-xonsh ext-xonsh"><pre class="language-xonsh"><code>#!/usr/bin/env xonsh

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
</code></pre></div><h2 id="note-de-dezvoltare" tabindex="-1"><a class="header-anchor" href="#note-de-dezvoltare" aria-hidden="true">#</a> Note de dezvoltare</h2><h3 id="quickjs-ffi" tabindex="-1"><a class="header-anchor" href="#quickjs-ffi" aria-hidden="true">#</a> <code>quickjs_ffi</code></h3><p>Cod din <a href="https://raw.githubusercontent.com/taskie/quijine/main/quijine_core/src/ffi.rs" target="_blank" rel="noopener noreferrer">quijine/main/quijine_core/src/ffi.rs</a></p><p>cu unele modific\u0103ri minore, \xEEnlocuind</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>la</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><h3 id="undefined-symbols-for-architecture-x86-64-js-toint32" tabindex="-1"><a class="header-anchor" href="#undefined-symbols-for-architecture-x86-64-js-toint32" aria-hidden="true">#</a> <code>Undefined symbols for architecture x86_64: &quot;_JS_ToInt32&quot;</code></h3><p>Modifica\u021Bi &quot;. /rust/Cargo.toml&quot; dup\u0103 cum urmeaz\u0103, p\u0103str\xE2nd doar staticlib</p><div class="language-toml ext-toml"><pre class="language-toml"><code>[lib]
#crate-type = [&quot;lib&quot;, &quot;cdylib&quot;, &quot;staticlib&quot;]
crate-type = [&quot;staticlib&quot;]
</code></pre></div><h2 id="referinte" tabindex="-1"><a class="header-anchor" href="#referinte" aria-hidden="true">#</a> Referin\u021Be</h2><ol start="0"><li>De la motorul <code>JS</code> la timpul de execu\u021Bie <code>JS</code> <a href="https://github.com/doodlewind/blog/blob/master/source/_posts/js-engine-to-js-runtime-1.md" target="_blank" rel="noopener noreferrer">(sus)</a> <a href="https://github.com/doodlewind/blog/blob/master/source/_posts/js-engine-to-js-runtime-2.md" target="_blank" rel="noopener noreferrer">(jos)</a></li><li><a href="https://github.com/quickjs-zh/QuickJS/wiki/%E4%BD%BF%E7%94%A8C%E8%AF%AD%E8%A8%80%E4%B8%BAQuickJS%E5%BC%80%E5%8F%91%E4%B8%80%E4%B8%AA%E5%8E%9F%E7%94%9F%E6%A8%A1%E5%9D%97" target="_blank" rel="noopener noreferrer">Dezvoltarea unui modul nativ pentru <code>QuickJS</code> \xEEn C</a></li><li><a href="https://wasmedge.org/book/en/dev/js/rust.html" target="_blank" rel="noopener noreferrer">Utiliza\u021Bi Rust pentru a implementa JS API</a></li><li><a href="https://github.com/Kozova1/quickjs-example" target="_blank" rel="noopener noreferrer">Exemple QuickJS</a></li><li><a href="https://rust-lang.github.io/rust-bindgen/" target="_blank" rel="noopener noreferrer">rugin\u0103-bindgen</a></li><li><a href="https://calbertts.medium.com/how-to-create-asynchronous-apis-for-quickjs-8aca5488bb2e" target="_blank" rel="noopener noreferrer">Cum s\u0103 crea\u021Bi cod asincron pentru <code>QuickJS</code></a></li><li><a href="https://github.com/DelSkayn/rquickjs/blob/master/core/src/context/ctx.rs#L104" target="_blank" rel="noopener noreferrer">rquickjs \u2192 JS_NewPromiseCapability</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/8a65582265ecdd3171380feebf56b3bb8c34d183/src/quickjs_sys/mod.rs#L515" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 new_promise</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/da887752fdc9c36aca0f4b7499c5b115862ce771/src/internal_module/wasi_net_module.rs#L46" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 JsMethod</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/8a65582265ecdd3171380feebf56b3bb8c34d183/src/quickjs_sys/mod.rs#L756" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 call</a></li><li><a href="https://mp.weixin.qq.com/s/BKto24ItwXbeHon_LaF_0w" target="_blank" rel="noopener noreferrer">Capcana imperceptibil\u0103 - \xEEncuietori \xEEn Rust</a></li></ol><h2 id="despre" tabindex="-1"><a class="header-anchor" href="#despre" aria-hidden="true">#</a> Despre</h2><p>Acest proiect face parte din proiectul de cod <strong>rmw.link ( <a href="//rmw.link" target="_blank" rel="noopener noreferrer">rmw.link</a></strong> ).</p><p><img src="https://raw.githubusercontent.com/rmw-link/logo/master/rmw.red.bg.svg" alt="rmw.link"></p>`,81);function a(i,s){return r}var c=e(t,[["render",a],["__file","2022-04-29-quickjs-rust.html.vue"]]);export{c as default};
