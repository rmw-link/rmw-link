import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as n}from"./app.2a6a1bd2.js";const t={},r=n(`<h1 id="uprava-quickjs-pro-import-funkci-rustu-novy-zpusob-uvazovani-o-rozsireni-krakenu" tabindex="-1"><a class="header-anchor" href="#uprava-quickjs-pro-import-funkci-rustu-novy-zpusob-uvazovani-o-rozsireni-krakenu" aria-hidden="true">#</a> \xDAprava quickjs pro import funkc\xED rustu - nov\xFD zp\u016Fsob uva\u017Eov\xE1n\xED o roz\u0161\xED\u0159en\xED Krakenu</h1><h2 id="uloziste-kodu" tabindex="-1"><a class="header-anchor" href="#uloziste-kodu" aria-hidden="true">#</a> \xDAlo\u017Ei\u0161t\u011B k\xF3du</h2><ul><li><a href="https://github.com/rmw-lib/quickjs-rust" target="_blank" rel="noopener noreferrer">github</a></li><li><a href="https://gitee.com/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">gitee</a></li><li><a href="https://gitflic.ru/project/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">gitflic</a></li><li><a href="https://bitbucket.org/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">bitbucket</a></li></ul><h2 id="geneze" tabindex="-1"><a class="header-anchor" href="#geneze" aria-hidden="true">#</a> Geneze</h2><p><a href="https://openkraken.com" target="_blank" rel="noopener noreferrer">Kraken</a> je vysoce v\xFDkonn\xE9 vykreslovac\xED j\xE1dro webu zalo\u017Een\xE9 na adrese <code>Flutter</code>, kter\xE9 jako skriptovac\xED j\xE1dro pou\u017E\xEDv\xE1 <a href="https://github.com/openkraken/kraken/tree/main/bridge/third_party/quickjs" target="_blank" rel="noopener noreferrer">quickjs</a>.</p><p>Cht\u011Bl jsem napsat n\u011Bjak\xE9 roz\u0161\xED\u0159en\xED pro Kraken pomoc\xED <code>rust</code>.</p><p>Kraken <a href="https://openkraken.com/guide/advanced/custom-js-api" target="_blank" rel="noopener noreferrer">podporuje z\xE1pis roz\u0161\xED\u0159en\xED pomoc\xED <code>dart</code></a> .</p><p>Pou\u017E\xEDv\xE1n\xED str\xE1nek <a href="https://github.com/fzyzcjy/flutter_rust_bridge" target="_blank" rel="noopener noreferrer"><code>flutter_rust_bridge</code></a> <code>rust</code> a <code>dart</code>.</p><p>Kombinac\xED t\u011Bchto dvou bod\u016F nen\xED obt\xED\u017En\xE9 napsat roz\u0161\xED\u0159en\xED Krakenu pomoc\xED adresy <code>rust</code>.<br> V\xFDkonnostn\xED re\u017Eie tohoto \u0159e\u0161en\xED je v\u0161ak vysok\xE1, proto\u017Ee doch\xE1z\xED k v\xFDkonnostn\xED ztr\xE1t\u011B p\u0159i vol\xE1n\xED adresy <code>dart</code> na adresu <code>rust</code> a p\u0159i vol\xE1n\xED adresy <code>quickjs</code> na adresu <code>dart</code>.</p><p>Na druhou stranu, zat\xEDmco komunita <code>rust</code> m\xE1. <a href="https://github.com/DelSkayn/rquickjs" target="_blank" rel="noopener noreferrer"><code>rquickjs</code></a> takov\xE1 vol\xE1n\xED knihovny <code>quickjs</code> na adrese <code>rust</code>.<br> M\xEDsto vlo\u017Een\xED v\u0161ak volaj\xED <code>quickjs</code> <code>quickjs</code> a nelze je pou\u017E\xEDt ke kouzlen\xED <code>quickjs</code>.</p><p>V t\xE9to datab\xE1zi jsem implementoval nov\xE9 \u0159e\u0161en\xED: p\u0159\xEDmo upravil zdrojov\xFD k\xF3d <code>quickjs</code> tak, aby podporoval roz\u0161\xED\u0159en\xED <code>rust</code>.</p><p>Jedn\xE1 se o obecn\xE9 \u0159e\u0161en\xED, kter\xE9 lze pou\u017E\xEDt nejen pro \xFApravu Krakenu, ale tak\xE9 pro v\u0161echny frameworky a knihovny, kter\xE9 obsahuj\xED <code>quickjs</code>.</p><h2 id="demonstrace" tabindex="-1"><a class="header-anchor" href="#demonstrace" aria-hidden="true">#</a> Demonstrace</h2><p>K\xF3d souboru test.js je n\xE1sleduj\xEDc\xED :</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>const try_run = (func, ...args) =&gt; {
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
</code></pre></div><p>Spus\u0165te <code>./quickjs/qjs test.js</code>, v\xFDstup :</p><div class="language-text ext-text"><pre class="language-text"><code>export from rust : fib,sleep
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
</code></pre></div><h3 id="implementace-fib-v-rzi" tabindex="-1"><a class="header-anchor" href="#implementace-fib-v-rzi" aria-hidden="true">#</a> Implementace fib v rzi</h3><p>Funkce fib importovan\xE1 v js je z <code>rust/src/export/fib.rs</code> a k\xF3d je n\xE1sleduj\xEDc\xED :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>V sou\u010Dasn\xE9 dob\u011B makro procedury <code>#[js]</code> pouze p\u0159id\xE1v\xE1 konstantu <code>fib_args_len</code>, kter\xE1 identifikuje po\u010Det argument\u016F funkce.</p><p>V budoucnu bude mo\u017En\xE9 napsat makro procedury <code>./rust_macro</code>, kter\xE9 umo\u017En\xED pln\u011B automatick\xFD export funkc\xED.</p><h3 id="implementace-funkce-sleep-v-jazyce-rust" tabindex="-1"><a class="header-anchor" href="#implementace-funkce-sleep-v-jazyce-rust" aria-hidden="true">#</a> Implementace funkce sleep v jazyce rust</h3><p>Funkce sleep importovan\xE1 v js je z <code>rust/src/export/sleep.rs</code> a k\xF3d je n\xE1sleduj\xEDc\xED :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>Jak vid\xEDte v\xFD\u0161e, v\u0161echny exportovan\xE9 funkce jsou definov\xE1ny v adres\xE1\u0159i <code>./rust/src/export</code>. Tento adres\xE1\u0159 <code>mod.rs</code> se automaticky vygeneruje p\u0159i spu\u0161t\u011Bn\xED <code>./rust/build.xsh</code> a exportuj\xED se pod n\u011Bj v\u0161echny soubory <code>.rs</code>.</p><h3 id="cteni-a-overovani-prichozich-parametru-js" tabindex="-1"><a class="header-anchor" href="#cteni-a-overovani-prichozich-parametru-js" aria-hidden="true">#</a> \u010Cten\xED a ov\u011B\u0159ov\xE1n\xED p\u0159\xEDchoz\xEDch parametr\u016F js</h3><p>Parametry se na\u010D\xEDtaj\xED a ov\u011B\u0159uj\xED na adrese <code>src/js/arg.rs</code> pomoc\xED n\xE1sleduj\xEDc\xEDho k\xF3du :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>V sou\u010Dasn\xE9 dob\u011B se kontroluje pouze po\u010Det argument\u016F a \u010Dte se typ i64.</p><p>Tyto funkce m\u016F\u017Eete p\u0159idat podle pot\u0159eby, viz funkce v <a href="https://docs.rs/qjs-sys/0.1.2/qjs_sys/" target="_blank" rel="noopener noreferrer">qjs_sys</a> za\u010D\xEDnaj\xEDc\xED na <code>JS_To</code>.</p><h3 id="prevod-datovych-typu-z-rustu-do-js" tabindex="-1"><a class="header-anchor" href="#prevod-datovych-typu-z-rustu-do-js" aria-hidden="true">#</a> P\u0159evod datov\xFDch typ\u016F z rustu do js</h3><p>Konverze typu se prov\xE1d\xED na adrese <code>src/js/val.rs</code> pomoc\xED n\xE1sleduj\xEDc\xEDho k\xF3du :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>Jsou definov\xE1ny pouze \u010Dty\u0159i typy pro p\u0159evod z <code>None</code>, <code>()</code>, <code>i64</code>a CString na <code>js</code>. M\u016F\u017Eete jich p\u0159idat libovoln\xFD po\u010Det.</p><p>Dal\u0161\xED datov\xE9 typy lze deklarovat ve funkc\xEDch v <a href="https://docs.rs/qjs-sys/0.1.2/qjs_sys/" target="_blank" rel="noopener noreferrer">qjs_sys</a> po\u010D\xEDnaje <code>JS_New</code>.</p><h2 id="vyvojove-prostredi" tabindex="-1"><a class="header-anchor" href="#vyvojove-prostredi" aria-hidden="true">#</a> V\xFDvojov\xE9 prost\u0159ed\xED</h2><p>Vyv\xEDj\xEDm na notebooku Apple, rust pou\u017E\xEDv\xE1 1.62.0-nightly.</p><p>Nejprve nainstalujte <a href="https://direnv.net" target="_blank" rel="noopener noreferrer">direnv</a>, p\u0159ejd\u011Bte do adres\xE1\u0159e a <code>direnv allow</code> na chv\xEDli.</p><p>Nainstalujte python3 a potom <code>pip3 install -r ./requirements.txt</code></p><p>spustit <code>./build.xsh</code> pro kompilaci a spu\u0161t\u011Bn\xED demoverze.</p><p>Ve v\xFDchoz\xEDm nastaven\xED bude naklonov\xE1n ofici\xE1ln\xED repozit\xE1\u0159 quickjs, pokud chcete upravit quickjs v repozit\xE1\u0159i Kraken, nejprve</p><p><code>git clone --recursive git@github.com:openkraken/kraken.git --depth=1</code></p><p>pak prove\u010Fte n\xE1sleduj\xEDc\xED kroky</p><div class="language-bash ext-sh"><pre class="language-bash"><code>rm -rf quickjs
ln -s ../kraken/bridge/third_party/quickjs .
</code></pre></div><p>Nakonec znovu spus\u0165te <code>./build.xsh</code></p><h2 id="struktura-adresare" tabindex="-1"><a class="header-anchor" href="#struktura-adresare" aria-hidden="true">#</a> Struktura adres\xE1\u0159e</h2><ul><li><p><code>./quickjs_rust</code><br> \xDAprava souboru c k\xF3du quickjs</p></li><li><p><code>./quickjs_ffi</code><br> Export funkc\xED ze souboru z\xE1hlav\xED <code>quickjs</code> do souboru <code>rust</code></p></li><li><p><code>./rust</code><br> K implementaci funkc\xED na adrese <code>quickjs</code> pou\u017Eijte str\xE1nku <code>rust</code>.</p><ul><li><code>./rust/src/qjs.rs</code><br> Implementace asynchronn\xEDch vol\xE1n\xED. Proto\u017Ee je <code>quickjs</code> jednovl\xE1knov\xFD, vol\xE1n\xED funkc\xED zahrnuj\xEDc\xEDch <code>quckjs</code> se zapisuj\xED v hlavn\xEDm vl\xE1kn\u011B.</li></ul></li><li><p><code>./rust_macro</code><br><code>rust</code> Proveden\xED makra postupu <code>#[js]</code></p><p>V budoucnu viz <a href="https://github.com/second-state/wasmedge-quickjs/blob/70efe8520dc65636cb81b7225e2a6dae47cfad49/src/quickjs_sys/mod.rs#L122" target="_blank" rel="noopener noreferrer">wasmedge-quickjs</a> pro automatick\xFD export rust funkc\xED do js funkc\xED. <a href="https://github.com/second-state/wasmedge-quickjs/blob/70efe8520dc65636cb81b7225e2a6dae47cfad49/src/quickjs_sys/mod.rs#L122" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 JsFunctionTrampoline</a></p></li></ul><h2 id="vytvareni-skriptu-build-xsh" tabindex="-1"><a class="header-anchor" href="#vytvareni-skriptu-build-xsh" aria-hidden="true">#</a> Vytv\xE1\u0159en\xED skript\u016F <code>build.xsh</code></h2><p>Bez dal\u0161\xEDch \u0159e\u010D\xED p\u0159ejd\u011Bme rovnou ke zdrojov\xE9mu k\xF3du skriptu pro sestaven\xED <code>build.xsh</code>.</p><div class="language-xonsh ext-xonsh"><pre class="language-xonsh"><code>#!/usr/bin/env xonsh

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
</code></pre></div><h2 id="vysvetleni-principu" tabindex="-1"><a class="header-anchor" href="#vysvetleni-principu" aria-hidden="true">#</a> Vysv\u011Btlen\xED principu</h2><h3 id="quickjs-rust-patch-py" tabindex="-1"><a class="header-anchor" href="#quickjs-rust-patch-py" aria-hidden="true">#</a> <code>quickjs_rust/patch.py</code></h3><p>Spu\u0161t\u011Bn\xEDm str\xE1nky <code>./quickjs_rust/patch.py</code> dojde k drobn\xFDm zm\u011Bn\xE1m ve zdrojov\xE9m k\xF3du <code>quickjs</code>.</p><p>Jedna z funkc\xED <code>JS_AddRust</code> se pou\u017E\xEDv\xE1 k injektov\xE1n\xED do modulu rust.</p><p><code>rust_run</code> je vlo\u017Een do <code>JS_ExecutePendingJob</code> pro vol\xE1n\xED asynchronn\xEDch funkc\xED.</p><p>Sn\xEDmek obrazovky se v\u0161emi zm\u011Bnami je uveden n\xED\u017Ee :</p><p><img src="//irmw.gumlet.io/ep2Xgg.png" alt=""></p><h3 id="quickjs-rust-h" tabindex="-1"><a class="header-anchor" href="#quickjs-rust-h" aria-hidden="true">#</a> <code>quickjs_rust.h</code></h3><p>Z v\xFD\u0161e uveden\xFDch zm\u011Bn je patrn\xE9, \u017Ee jsme zavedli nov\xFD hlavi\u010Dkov\xFD soubor <code>quickjs_rust.h</code> s n\xE1sleduj\xEDc\xEDm k\xF3dem.</p><div class="language-c ext-c"><pre class="language-c"><code>#ifndef QUICKJS_RUST_H
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
</code></pre></div><h3 id="rust-rust-h" tabindex="-1"><a class="header-anchor" href="#rust-rust-h" aria-hidden="true">#</a> <code>rust/rust.h</code></h3><p>Vid\xEDte, \u017Ee <code>quickjs_rust/quickjs_rust.h</code> zav\xE1d\xED <code>quickjs_rust/js_rust_funcs.h</code>, kter\xFD je automaticky generov\xE1n ze souboru hlavi\u010Dky exportn\xED funkce rustu <code>rust/rust.h</code> a nem\u011Bl by b\xFDt ru\u010Dn\u011B upravov\xE1n.</p><p>A <code>rust/rust.h</code> se generuje vol\xE1n\xEDm cbindgen z <code>./rust/build.xsh</code>.</p><h3 id="rust-build-xsh" tabindex="-1"><a class="header-anchor" href="#rust-build-xsh" aria-hidden="true">#</a> <code>rust/build.xsh</code></h3><div class="language-xonsh ext-xonsh"><pre class="language-xonsh"><code>#!/usr/bin/env xonsh

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
</code></pre></div><h2 id="poznamky-k-vyvoji" tabindex="-1"><a class="header-anchor" href="#poznamky-k-vyvoji" aria-hidden="true">#</a> Pozn\xE1mky k v\xFDvoji</h2><h3 id="quickjs-ffi" tabindex="-1"><a class="header-anchor" href="#quickjs-ffi" aria-hidden="true">#</a> <code>quickjs_ffi</code></h3><p>K\xF3d z <a href="https://raw.githubusercontent.com/taskie/quijine/main/quijine_core/src/ffi.rs" target="_blank" rel="noopener noreferrer">quijine/main/quijine_core/src/ffi.rs</a></p><p>s drobn\xFDmi \xFApravami, kter\xE9 nahrazuj\xED</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>na</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><h3 id="undefined-symbols-for-architecture-x86-64-js-toint32" tabindex="-1"><a class="header-anchor" href="#undefined-symbols-for-architecture-x86-64-js-toint32" aria-hidden="true">#</a> <code>Undefined symbols for architecture x86_64: &quot;_JS_ToInt32&quot;</code></h3><p>Upravit &quot;. /rust/Cargo.toml&#39; takto, p\u0159i\u010Dem\u017E zachov\xE1te pouze staticlib</p><div class="language-toml ext-toml"><pre class="language-toml"><code>[lib]
#crate-type = [&quot;lib&quot;, &quot;cdylib&quot;, &quot;staticlib&quot;]
crate-type = [&quot;staticlib&quot;]
</code></pre></div><h2 id="odkazy" tabindex="-1"><a class="header-anchor" href="#odkazy" aria-hidden="true">#</a> Odkazy</h2><ol start="0"><li>Z enginu <code>JS</code> do runtime <code>JS</code> <a href="https://github.com/doodlewind/blog/blob/master/source/_posts/js-engine-to-js-runtime-1.md" target="_blank" rel="noopener noreferrer">(naho\u0159e</a> ) <a href="https://github.com/doodlewind/blog/blob/master/source/_posts/js-engine-to-js-runtime-2.md" target="_blank" rel="noopener noreferrer">(dole)</a></li><li><a href="https://github.com/quickjs-zh/QuickJS/wiki/%E4%BD%BF%E7%94%A8C%E8%AF%AD%E8%A8%80%E4%B8%BAQuickJS%E5%BC%80%E5%8F%91%E4%B8%80%E4%B8%AA%E5%8E%9F%E7%94%9F%E6%A8%A1%E5%9D%97" target="_blank" rel="noopener noreferrer">V\xFDvoj nativn\xEDho modulu pro <code>QuickJS</code> v jazyce C</a></li><li><a href="https://wasmedge.org/book/en/dev/js/rust.html" target="_blank" rel="noopener noreferrer">Pou\u017Eit\xED Rustu k implementaci rozhran\xED JS API</a></li><li><a href="https://github.com/Kozova1/quickjs-example" target="_blank" rel="noopener noreferrer">P\u0159\xEDklady QuickJS</a></li><li><a href="https://rust-lang.github.io/rust-bindgen/" target="_blank" rel="noopener noreferrer">rust-bindgen</a></li><li><a href="https://calbertts.medium.com/how-to-create-asynchronous-apis-for-quickjs-8aca5488bb2e" target="_blank" rel="noopener noreferrer">Jak vytvo\u0159it asynchronn\xED k\xF3d pro <code>QuickJS</code></a></li><li><a href="https://github.com/DelSkayn/rquickjs/blob/master/core/src/context/ctx.rs#L104" target="_blank" rel="noopener noreferrer">rquickjs \u2192 JS_NewPromiseCapability</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/8a65582265ecdd3171380feebf56b3bb8c34d183/src/quickjs_sys/mod.rs#L515" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 new_promise</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/da887752fdc9c36aca0f4b7499c5b115862ce771/src/internal_module/wasi_net_module.rs#L46" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 JsMethod</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/8a65582265ecdd3171380feebf56b3bb8c34d183/src/quickjs_sys/mod.rs#L756" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 vol\xE1n\xED</a></li><li><a href="https://mp.weixin.qq.com/s/BKto24ItwXbeHon_LaF_0w" target="_blank" rel="noopener noreferrer">Nep\u0159ehl\xE9dnuteln\xE1 past - z\xE1mky v Rustu</a></li></ol><h2 id="o-strankach" tabindex="-1"><a class="header-anchor" href="#o-strankach" aria-hidden="true">#</a> O str\xE1nk\xE1ch</h2><p>Tento projekt je sou\u010D\xE1st\xED projektu <strong>rmw.link ( <a href="//rmw.link" target="_blank" rel="noopener noreferrer">rmw.link</a></strong> ).</p><p><img src="https://raw.githubusercontent.com/rmw-link/logo/master/rmw.red.bg.svg" alt="rmw.link"></p>`,81);function a(s,o){return r}var c=e(t,[["render",a],["__file","2022-04-29-quickjs-rust.html.vue"]]);export{c as default};
