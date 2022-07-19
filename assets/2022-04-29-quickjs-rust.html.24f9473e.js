import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as n}from"./app.040d9bb0.js";const t={},a=n(`<h1 id="a-quickjs-modositasa-a-rozsda-fuggvenyek-importalasahoz-a-kraken-kiterjesztesenek-ujfajta-gondolkodasa" tabindex="-1"><a class="header-anchor" href="#a-quickjs-modositasa-a-rozsda-fuggvenyek-importalasahoz-a-kraken-kiterjesztesenek-ujfajta-gondolkodasa" aria-hidden="true">#</a> A quickjs m\xF3dos\xEDt\xE1sa a rozsda f\xFCggv\xE9nyek import\xE1l\xE1s\xE1hoz - a Kraken kiterjeszt\xE9s\xE9nek \xFAjfajta gondolkod\xE1sa</h1><h2 id="kodtar" tabindex="-1"><a class="header-anchor" href="#kodtar" aria-hidden="true">#</a> K\xF3dt\xE1r</h2><ul><li><a href="https://github.com/rmw-lib/quickjs-rust" target="_blank" rel="noopener noreferrer">github</a></li><li><a href="https://gitee.com/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">gitee</a></li><li><a href="https://gitflic.ru/project/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">gitflic</a></li><li><a href="https://bitbucket.org/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">bitbucket</a></li></ul><h2 id="a-keletkezes" tabindex="-1"><a class="header-anchor" href="#a-keletkezes" aria-hidden="true">#</a> A keletkez\xE9s</h2><p>A <a href="https://openkraken.com" target="_blank" rel="noopener noreferrer">Kraken</a> egy nagy teljes\xEDtm\xE9ny\u0171 webes renderel\u0151motor, amely a <code>Flutter</code> oldalon alapul, \xE9s a <a href="https://github.com/openkraken/kraken/tree/main/bridge/third_party/quickjs" target="_blank" rel="noopener noreferrer">quickjs-t</a> haszn\xE1lja szkriptel\u0151motork\xE9nt.</p><p>A Krakenhez akartam \xEDrni n\xE9h\xE1ny b\u0151v\xEDtm\xE9nyt a <code>rust</code> seg\xEDts\xE9g\xE9vel.</p><p>A Kraken <a href="https://openkraken.com/guide/advanced/custom-js-api" target="_blank" rel="noopener noreferrer">t\xE1mogatja a kiterjeszt\xE9sek \xEDr\xE1s\xE1t a <code>dart</code> haszn\xE1lat\xE1val</a>.</p><p>A haszn\xE1lata <a href="https://github.com/fzyzcjy/flutter_rust_bridge" target="_blank" rel="noopener noreferrer"><code>flutter_rust_bridge</code></a> <code>rust</code> \xE9s <code>dart</code>.</p><p>Ezt a k\xE9t pontot kombin\xE1lva nem neh\xE9z Kraken-b\u0151v\xEDtm\xE9nyeket \xEDrni a <code>rust</code> seg\xEDts\xE9g\xE9vel.<br> Ennek a megold\xE1snak a teljes\xEDtm\xE9nye azonban nagynak t\u0171nik, mivel a <code>dart</code> a <code>rust</code>, a <code>quickjs</code> pedig a <code>dart</code> megh\xEDv\xE1sa miatt teljes\xEDtm\xE9nycs\xF6kken\xE9st szenved el.</p><p>M\xE1sr\xE9szt, m\xEDg a <code>rust</code> k\xF6z\xF6ss\xE9g <a href="https://github.com/DelSkayn/rquickjs" target="_blank" rel="noopener noreferrer"><code>rquickjs</code></a> ilyen h\xEDv\xE1sok a <code>quickjs</code> k\xF6nyvt\xE1rhoz a <code>rust</code> oldalon.<br> Ezek azonban a <code>quickjs</code> c\xEDmet h\xEDvj\xE1k a <code>quickjs</code>be\xE1gyaz\xE1sa helyett, \xE9s nem haszn\xE1lhat\xF3k a <code>quickjs</code> var\xE1zslat\xE1hoz.</p><p>Ebben a k\xF3db\xE1zisban egy \xFAj megold\xE1st val\xF3s\xEDtottam meg: k\xF6zvetlen\xFCl a <code>quickjs</code> forr\xE1sk\xF3dot m\xF3dos\xEDtom, hogy t\xE1mogassa a <code>rust</code> kiterjeszt\xE9st.</p><p>Ez egy \xE1ltal\xE1nos megold\xE1s, amely nem csak a Kraken m\xF3dos\xEDt\xE1s\xE1ra haszn\xE1lhat\xF3, hanem minden olyan keretrendszerre \xE9s k\xF6nyvt\xE1rra is, amely a <code>quickjs</code> oldalt \xE1gyazza be.</p><h2 id="bemutato" tabindex="-1"><a class="header-anchor" href="#bemutato" aria-hidden="true">#</a> Bemutat\xF3</h2><p>A test.js k\xF3d a k\xF6vetkez\u0151:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>const try_run = (func, ...args) =&gt; {
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
</code></pre></div><p>Futtassa a <code>./quickjs/qjs test.js</code>, kimenet :</p><div class="language-text ext-text"><pre class="language-text"><code>export from rust : fib,sleep
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
</code></pre></div><h3 id="a-fib-megvalositasa-a-rozsdaban" tabindex="-1"><a class="header-anchor" href="#a-fib-megvalositasa-a-rozsdaban" aria-hidden="true">#</a> A fib megval\xF3s\xEDt\xE1sa a rozsd\xE1ban</h3><p>A js-ben import\xE1lt fib f\xFCggv\xE9ny a <code>rust/src/export/fib.rs</code> oldalr\xF3l sz\xE1rmazik, \xE9s a k\xF3d a k\xF6vetkez\u0151 :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>Jelenleg az elj\xE1r\xE1s makr\xF3 <code>#[js]</code> csak egy <code>fib_args_len</code>konstanst ad hozz\xE1, amely azonos\xEDtja a f\xFCggv\xE9nyhez tartoz\xF3 argumentumok sz\xE1m\xE1t.</p><p>A j\xF6v\u0151ben a <code>./rust_macro</code> elj\xE1r\xE1smakr\xF3 meg\xEDrhat\xF3, hogy lehet\u0151v\xE9 tegye a teljesen automatikus funkci\xF3exportot.</p><h3 id="az-alvas-funkcio-megvalositasa-rozsda-nyelven" tabindex="-1"><a class="header-anchor" href="#az-alvas-funkcio-megvalositasa-rozsda-nyelven" aria-hidden="true">#</a> Az alv\xE1s funkci\xF3 megval\xF3s\xEDt\xE1sa rozsda nyelven</h3><p>A js-ben import\xE1lt sleep f\xFCggv\xE9ny a <code>rust/src/export/sleep.rs</code> oldalr\xF3l sz\xE1rmazik, \xE9s a k\xF3d a k\xF6vetkez\u0151 :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>Amint a fentiekben l\xE1that\xF3, az \xF6sszes export\xE1lt f\xFCggv\xE9ny a <code>./rust/src/export</code> k\xF6nyvt\xE1rban van defini\xE1lva. Ez a <code>mod.rs</code> k\xF6nyvt\xE1r automatikusan l\xE9trej\xF6n a <code>./rust/build.xsh</code> futtat\xE1sakor, \xE9s az \xF6sszes <code>.rs</code> f\xE1jlt export\xE1lja alatta.</p><h3 id="a-bejovo-js-parameterek-beolvasasa-es-ervenyesitese" tabindex="-1"><a class="header-anchor" href="#a-bejovo-js-parameterek-beolvasasa-es-ervenyesitese" aria-hidden="true">#</a> A bej\xF6v\u0151 js param\xE9terek beolvas\xE1sa \xE9s \xE9rv\xE9nyes\xEDt\xE9se</h3><p>A param\xE9terek beolvas\xE1sa \xE9s ellen\u0151rz\xE9se a <code>src/js/arg.rs</code> oldalon t\xF6rt\xE9nik a k\xF6vetkez\u0151 k\xF3ddal:</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>Jelenleg csak az argumentumok sz\xE1m\xE1t ellen\u0151rzi, \xE9s az i64 t\xEDpus\xE1t olvassa.</p><p>Ezeket a f\xFCggv\xE9nyeket sz\xFCks\xE9g szerint hozz\xE1adhatod, l\xE1sd a <a href="https://docs.rs/qjs-sys/0.1.2/qjs_sys/" target="_blank" rel="noopener noreferrer">qjs_sys</a> f\xFCggv\xE9nyeket a <code>JS_To</code> c\xEDmmel kezd\u0151d\u0151en.</p><h3 id="adattipus-konverzio-rozsda-bol-js-be" tabindex="-1"><a class="header-anchor" href="#adattipus-konverzio-rozsda-bol-js-be" aria-hidden="true">#</a> Adatt\xEDpus konverzi\xF3 rozsda-b\xF3l js-be</h3><p>A t\xEDpuskonverzi\xF3 a <code>src/js/val.rs</code> oldalon t\xF6rt\xE9nik a k\xF6vetkez\u0151 k\xF3ddal :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>A <code>None</code>, <code>()</code>, <code>i64</code>\xE9s a CString \xE9s a <code>js</code> k\xF6z\xF6tti \xE1talak\xEDt\xE1shoz csak n\xE9gy t\xEDpus van defini\xE1lva.</p><p>Tov\xE1bbi adatt\xEDpusokat a <a href="https://docs.rs/qjs-sys/0.1.2/qjs_sys/" target="_blank" rel="noopener noreferrer">qjs_sys</a> f\xFCggv\xE9nyekben lehet deklar\xE1lni, kezdve a <code>JS_New</code> c\xEDmmel.</p><h2 id="fejlesztesi-kornyezet" tabindex="-1"><a class="header-anchor" href="#fejlesztesi-kornyezet" aria-hidden="true">#</a> Fejleszt\xE9si k\xF6rnyezet</h2><p>Egy Apple laptopon fejlesztek, a rozsda az 1.62.0-nightly-t haszn\xE1lja.</p><p>El\u0151sz\xF6r telep\xEDtse <a href="https://direnv.net" target="_blank" rel="noopener noreferrer">direnv</a>, menjen a k\xF6nyvt\xE1rba, \xE9s <code>direnv allow</code> egy darabig</p><p>Telep\xEDtse a python3-at, majd <code>pip3 install -r ./requirements.txt</code></p><p>run <code>./build.xsh</code> a dem\xF3 leford\xEDt\xE1s\xE1hoz \xE9s futtat\xE1s\xE1hoz</p><p>Alap\xE9rtelmez\xE9s szerint a hivatalos quickjs t\xE1rol\xF3 lesz kl\xF3nozva, ha m\xF3dos\xEDtani szeretn\xE9 a quickjs-t a Kraken t\xE1rol\xF3ban, akkor el\u0151sz\xF6r</p><p><code>git clone --recursive git@github.com:openkraken/kraken.git --depth=1</code></p><p>akkor a k\xF6vetkez\u0151ket kell tennie</p><div class="language-bash ext-sh"><pre class="language-bash"><code>rm -rf quickjs
ln -s ../kraken/bridge/third_party/quickjs .
</code></pre></div><p>V\xE9g\xFCl futtassa \xFAjra a <code>./build.xsh</code></p><h2 id="konyvtarszerkezet" tabindex="-1"><a class="header-anchor" href="#konyvtarszerkezet" aria-hidden="true">#</a> K\xF6nyvt\xE1rszerkezet</h2><ul><li><p><code>./quickjs_rust</code><br> A quickjs k\xF3d c f\xE1jlj\xE1nak m\xF3dos\xEDt\xE1sa</p></li><li><p><code>./quickjs_ffi</code><br> A f\xFCggv\xE9nyek export\xE1l\xE1sa a <code>quickjs</code> fejl\xE9cf\xE1jlb\xF3l a k\xF6vetkez\u0151 c\xEDmre <code>rust</code></p></li><li><p><code>./rust</code><br> Haszn\xE1lja a <code>rust</code> c\xEDmet a <code>quickjs</code> f\xFCggv\xE9nyek megval\xF3s\xEDt\xE1s\xE1hoz.</p><ul><li><code>./rust/src/qjs.rs</code><br> Aszinkron h\xEDv\xE1sok v\xE9grehajt\xE1sa. Mivel a <code>quickjs</code> egysz\xE1las, a <code>quckjs</code> -t \xE9rint\u0151 f\xFCggv\xE9nyh\xEDv\xE1sok a f\u0151sz\xE1lban \xEDr\xF3dnak.</li></ul></li><li><p><code>./rust_macro</code><br><code>rust</code> Az elj\xE1r\xE1s makr\xF3j\xE1nak v\xE9grehajt\xE1sa <code>#[js]</code></p><p>A j\xF6v\u0151ben l\xE1sd <a href="https://github.com/second-state/wasmedge-quickjs/blob/70efe8520dc65636cb81b7225e2a6dae47cfad49/src/quickjs_sys/mod.rs#L122" target="_blank" rel="noopener noreferrer">wasmedge-quickjs</a> a rozsda f\xFCggv\xE9nyek automatikus export\xE1l\xE1s\xE1hoz js f\xFCggv\xE9nyekbe. <a href="https://github.com/second-state/wasmedge-quickjs/blob/70efe8520dc65636cb81b7225e2a6dae47cfad49/src/quickjs_sys/mod.rs#L122" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 JsFunctionTrampoline</a></p></li></ul><h2 id="epitesi-szkriptek-build-xsh" tabindex="-1"><a class="header-anchor" href="#epitesi-szkriptek-build-xsh" aria-hidden="true">#</a> \xC9p\xEDt\xE9si szkriptek <code>build.xsh</code></h2><p>Minden tov\xE1bbi n\xE9lk\xFCl n\xE9zz\xFCk meg a <code>build.xsh</code> build script forr\xE1sk\xF3dj\xE1t.</p><div class="language-xonsh ext-xonsh"><pre class="language-xonsh"><code>#!/usr/bin/env xonsh

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
</code></pre></div><h2 id="az-elv-magyarazata" tabindex="-1"><a class="header-anchor" href="#az-elv-magyarazata" aria-hidden="true">#</a> Az elv magyar\xE1zata</h2><h3 id="quickjs-rust-patch-py" tabindex="-1"><a class="header-anchor" href="#quickjs-rust-patch-py" aria-hidden="true">#</a> <code>quickjs_rust/patch.py</code></h3><p>A <code>./quickjs_rust/patch.py</code> futtat\xE1sa kisebb v\xE1ltoztat\xE1sokat eszk\xF6z\xF6l a <code>quickjs</code> forr\xE1sk\xF3dban.</p><p>A <code>JS_AddRust</code> f\xFCggv\xE9nyek egyike a rozsda modulba t\xF6rt\xE9n\u0151 befecskendez\xE9sre szolg\xE1l.</p><p>A <code>rust_run</code> a <code>JS_ExecutePendingJob</code> oldalra ker\xFCl beilleszt\xE9sre, hogy aszinkron funkci\xF3kat h\xEDvjon.</p><p>Az \xF6sszes v\xE1ltoztat\xE1s k\xE9perny\u0151k\xE9p\xE9t az al\xE1bbiakban mutatjuk be:</p><p><img src="//irmw.gumlet.io/ep2Xgg.png" alt=""></p><h3 id="quickjs-rust-h" tabindex="-1"><a class="header-anchor" href="#quickjs-rust-h" aria-hidden="true">#</a> <code>quickjs_rust.h</code></h3><p>A fenti v\xE1ltoztat\xE1sokb\xF3l l\xE1thatjuk, hogy bevezett\xFCnk egy \xFAj fejl\xE9cf\xE1jlt <code>quickjs_rust.h</code> a k\xF6vetkez\u0151 k\xF3ddal</p><div class="language-c ext-c"><pre class="language-c"><code>#ifndef QUICKJS_RUST_H
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
</code></pre></div><h3 id="rust-rust-h" tabindex="-1"><a class="header-anchor" href="#rust-rust-h" aria-hidden="true">#</a> <code>rust/rust.h</code></h3><p>L\xE1thatjuk, hogy a <code>quickjs_rust/quickjs_rust.h</code> bevezeti a <code>quickjs_rust/js_rust_funcs.h</code>c\xEDmet, amely automatikusan gener\xE1l\xF3dik a <code>rust/rust.h</code> rozsda export f\xFCggv\xE9ny fejl\xE9c f\xE1jlb\xF3l, \xE9s nem kell k\xE9zzel m\xF3dos\xEDtani.</p><p>A <code>rust/rust.h</code> pedig a cbindgen megh\xEDv\xE1s\xE1val j\xF6n l\xE9tre a <code>./rust/build.xsh</code> oldalr\xF3l.</p><h3 id="rust-build-xsh" tabindex="-1"><a class="header-anchor" href="#rust-build-xsh" aria-hidden="true">#</a> <code>rust/build.xsh</code></h3><div class="language-xonsh ext-xonsh"><pre class="language-xonsh"><code>#!/usr/bin/env xonsh

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
</code></pre></div><h2 id="fejlesztesi-megjegyzesek" tabindex="-1"><a class="header-anchor" href="#fejlesztesi-megjegyzesek" aria-hidden="true">#</a> Fejleszt\xE9si megjegyz\xE9sek</h2><h3 id="quickjs-ffi" tabindex="-1"><a class="header-anchor" href="#quickjs-ffi" aria-hidden="true">#</a> <code>quickjs_ffi</code></h3><p>K\xF3d a <a href="https://raw.githubusercontent.com/taskie/quijine/main/quijine_core/src/ffi.rs" target="_blank" rel="noopener noreferrer">quijine/main/quijine_core/src/ffi.rs</a> f\xE1jlb\xF3l</p><p>n\xE9h\xE1ny kisebb m\xF3dos\xEDt\xE1ssal, a</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>a c\xEDmre.</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><h3 id="undefined-symbols-for-architecture-x86-64-js-toint32" tabindex="-1"><a class="header-anchor" href="#undefined-symbols-for-architecture-x86-64-js-toint32" aria-hidden="true">#</a> <code>Undefined symbols for architecture x86_64: &quot;_JS_ToInt32&quot;</code></h3><p>M\xF3dos\xEDtsa a &#39;. /rust/Cargo.toml&#39; a k\xF6vetkez\u0151k\xE9ppen, csak a staticlib-et tartva meg</p><div class="language-toml ext-toml"><pre class="language-toml"><code>[lib]
#crate-type = [&quot;lib&quot;, &quot;cdylib&quot;, &quot;staticlib&quot;]
crate-type = [&quot;staticlib&quot;]
</code></pre></div><h2 id="hivatkozasok" tabindex="-1"><a class="header-anchor" href="#hivatkozasok" aria-hidden="true">#</a> Hivatkoz\xE1sok</h2><ol start="0"><li>A <code>JS</code> motort\xF3l a <code>JS</code> futtat\xE1si id\u0151ig <a href="https://github.com/doodlewind/blog/blob/master/source/_posts/js-engine-to-js-runtime-1.md" target="_blank" rel="noopener noreferrer">(fent)</a> <a href="https://github.com/doodlewind/blog/blob/master/source/_posts/js-engine-to-js-runtime-2.md" target="_blank" rel="noopener noreferrer">(lent)</a></li><li><a href="https://github.com/quickjs-zh/QuickJS/wiki/%E4%BD%BF%E7%94%A8C%E8%AF%AD%E8%A8%80%E4%B8%BAQuickJS%E5%BC%80%E5%8F%91%E4%B8%80%E4%B8%AA%E5%8E%9F%E7%94%9F%E6%A8%A1%E5%9D%97" target="_blank" rel="noopener noreferrer">Nat\xEDv modul fejleszt\xE9se a <code>QuickJS</code> sz\xE1m\xE1ra C nyelven</a></li><li><a href="https://wasmedge.org/book/en/dev/js/rust.html" target="_blank" rel="noopener noreferrer">A Rust haszn\xE1lata a JS API megval\xF3s\xEDt\xE1s\xE1hoz</a></li><li><a href="https://github.com/Kozova1/quickjs-example" target="_blank" rel="noopener noreferrer">QuickJS p\xE9ld\xE1k</a></li><li><a href="https://rust-lang.github.io/rust-bindgen/" target="_blank" rel="noopener noreferrer">rozsda-bindgen</a></li><li><a href="https://calbertts.medium.com/how-to-create-asynchronous-apis-for-quickjs-8aca5488bb2e" target="_blank" rel="noopener noreferrer">Hogyan k\xE9sz\xEDts\xFCnk aszinkron k\xF3dot a <code>QuickJS</code> sz\xE1m\xE1ra</a>?</li><li><a href="https://github.com/DelSkayn/rquickjs/blob/master/core/src/context/ctx.rs#L104" target="_blank" rel="noopener noreferrer">rquickjs \u2192 JS_NewPromiseCapability</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/8a65582265ecdd3171380feebf56b3bb8c34d183/src/quickjs_sys/mod.rs#L515" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 new_promise</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/da887752fdc9c36aca0f4b7499c5b115862ce771/src/internal_module/wasi_net_module.rs#L46" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 JsMethod</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/8a65582265ecdd3171380feebf56b3bb8c34d183/src/quickjs_sys/mod.rs#L756" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 h\xEDv\xE1s</a></li><li><a href="https://mp.weixin.qq.com/s/BKto24ItwXbeHon_LaF_0w" target="_blank" rel="noopener noreferrer">Az \xE9szrev\xE9tlen csapda - z\xE1rak a Rozsd\xE1ban</a></li></ol><h2 id="a-oldalrol" tabindex="-1"><a class="header-anchor" href="#a-oldalrol" aria-hidden="true">#</a> A oldalr\xF3l</h2><p>Ez a projekt az <strong>rmw.link ( <a href="//rmw.link" target="_blank" rel="noopener noreferrer">rmw.link</a></strong> ) k\xF3dprojekt r\xE9sze.</p><p><img src="https://raw.githubusercontent.com/rmw-link/logo/master/rmw.red.bg.svg" alt="rmw.link"></p>`,81);function r(s,o){return a}var l=e(t,[["render",r],["__file","2022-04-29-quickjs-rust.html.vue"]]);export{l as default};
