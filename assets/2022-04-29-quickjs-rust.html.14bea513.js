import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{e}from"./app.2a6a1bd2.js";const t={},a=e(`<h1 id="quickjs-modifikavimas-kad-butu-galima-importuoti-rudziu-funkcijas-naujas-mastymo-apie-kraken-ispletima-budas" tabindex="-1"><a class="header-anchor" href="#quickjs-modifikavimas-kad-butu-galima-importuoti-rudziu-funkcijas-naujas-mastymo-apie-kraken-ispletima-budas" aria-hidden="true">#</a> Quickjs modifikavimas, kad b\u016Bt\u0173 galima importuoti r\u016Bd\u017Ei\u0173 funkcijas - naujas m\u0105stymo apie &quot;Kraken&quot; i\u0161pl\u0117tim\u0105 b\u016Bdas</h1><h2 id="kodu-saugykla" tabindex="-1"><a class="header-anchor" href="#kodu-saugykla" aria-hidden="true">#</a> Kod\u0173 saugykla</h2><ul><li><a href="https://github.com/rmw-lib/quickjs-rust" target="_blank" rel="noopener noreferrer">github</a></li><li><a href="https://gitee.com/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">gitee</a></li><li><a href="https://gitflic.ru/project/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">gitflic</a></li><li><a href="https://bitbucket.org/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">bitbucket</a></li></ul><h2 id="kilme" tabindex="-1"><a class="header-anchor" href="#kilme" aria-hidden="true">#</a> Kilm\u0117</h2><p>&quot; <a href="https://openkraken.com" target="_blank" rel="noopener noreferrer">Kraken&quot;</a> yra didelio na\u0161umo \u017Einiatinklio atvaizdavimo variklis, paremtas <code>Flutter</code>, kuriame kaip scenarij\u0173 variklis naudojamas <a href="https://github.com/openkraken/kraken/tree/main/bridge/third_party/quickjs" target="_blank" rel="noopener noreferrer">quickjs</a>.</p><p>Nor\u0117jau para\u0161yti kelet\u0105 &quot;Kraken&quot; pl\u0117tini\u0173 naudodamas <code>rust</code>.</p><p>&quot;Kraken&quot; <a href="https://openkraken.com/guide/advanced/custom-js-api" target="_blank" rel="noopener noreferrer">palaiko pl\u0117tini\u0173 ra\u0161ym\u0105 naudojant <code>dart</code></a> .</p><p>Naudojant <a href="https://github.com/fzyzcjy/flutter_rust_bridge" target="_blank" rel="noopener noreferrer"><code>flutter_rust_bridge</code></a> <code>rust</code> ir <code>dart</code>.</p><p>Sujungus \u0161iuos du dalykus, nesunku para\u0161yti &quot;Kraken&quot; pl\u0117tinius naudojant <code>rust</code>.<br> Ta\u010Diau \u0161io sprendimo na\u0161umo s\u0105naudos yra didel\u0117s, nes <code>dart</code> skambinant \u012F <code>rust</code>, o <code>quickjs</code> skambinant \u012F <code>dart</code>, patiriama na\u0161umo nuostoli\u0173.</p><p>Kita vertus, nors <code>rust</code> bendruomen\u0117 <a href="https://github.com/DelSkayn/rquickjs" target="_blank" rel="noopener noreferrer"><code>rquickjs</code></a> toki\u0173 skambu\u010Di\u0173 \u012F <code>quickjs</code> bibliotek\u0105 <code>rust</code>.<br> Ta\u010Diau vietoj \u012Fterpimo <code>quickjs</code>jie vadinasi <code>quickjs</code> ir negali b\u016Bti naudojami stebuklingam <code>quickjs</code>.</p><p>\u0160ioje kod\u0173 baz\u0117je a\u0161 \u012Fgyvendinau nauj\u0105 sprendim\u0105: tiesiogiai pakei\u010Diau <code>quickjs</code> i\u0161eities kod\u0105, kad jis palaikyt\u0173 <code>rust</code> pl\u0117tin\u012F.</p><p>Tai bendras sprendimas, kur\u012F galima naudoti ne tik &quot;Kraken&quot; modifikavimui, bet ir visiems karkasams ir bibliotekoms, kuriuose \u012Fdiegta <code>quickjs</code>.</p><h2 id="demonstracinis" tabindex="-1"><a class="header-anchor" href="#demonstracinis" aria-hidden="true">#</a> Demonstracinis</h2><p>Test.js kodas yra toks:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>const try_run = (func, ...args) =&gt; {
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
</code></pre></div><p>Paleisti <code>./quickjs/qjs test.js</code>, i\u0161vestis :</p><div class="language-text ext-text"><pre class="language-text"><code>export from rust : fib,sleep
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
</code></pre></div><h3 id="fib-igyvendinimas-rudziu-sistemoje" tabindex="-1"><a class="header-anchor" href="#fib-igyvendinimas-rudziu-sistemoje" aria-hidden="true">#</a> Fib \u012Fgyvendinimas r\u016Bd\u017Ei\u0173 sistemoje</h3><p>Fib funkcija importuota js yra i\u0161 <code>rust/src/export/fib.rs</code> ir kodas yra toks :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>\u0160iuo metu proced\u016Bros makro <code>#[js]</code> tik prideda konstant\u0105 <code>fib_args_len</code>, kuri nurodo funkcijos argument\u0173 skai\u010Di\u0173.</p><p>Ateityje bus galima para\u0161yti proced\u016Bros makro <code>./rust_macro</code>, kad b\u016Bt\u0173 galima visi\u0161kai automati\u0161kai eksportuoti funkcijas.</p><h3 id="miego-funkcijos-igyvendinimas-rust-sistemoje" tabindex="-1"><a class="header-anchor" href="#miego-funkcijos-igyvendinimas-rust-sistemoje" aria-hidden="true">#</a> Miego funkcijos \u012Fgyvendinimas rust sistemoje</h3><p>\u012E js importuota miego funkcija yra i\u0161 <code>rust/src/export/sleep.rs</code>, o kodas yra toks :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>Kaip matote pirmiau, visos eksportuojamos funkcijos apibr\u0117\u017Etos kataloge <code>./rust/src/export</code>. \u0160is katalogas <code>mod.rs</code> automati\u0161kai sukuriamas, kai paleid\u017Eiamas <code>./rust/build.xsh</code>, eksportuojant visus jame esan\u010Dius <code>.rs</code> failus.</p><h3 id="ieinanciu-js-parametru-skaitymas-ir-patvirtinimas" tabindex="-1"><a class="header-anchor" href="#ieinanciu-js-parametru-skaitymas-ir-patvirtinimas" aria-hidden="true">#</a> \u012Eeinan\u010Di\u0173 js parametr\u0173 skaitymas ir patvirtinimas</h3><p>Parametrai nuskaitomi ir patvirtinami adresu <code>src/js/arg.rs</code> naudojant \u0161\u012F kod\u0105:</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>\u0160iuo metu tikrinamas tik argument\u0173 skai\u010Dius ir skaitomas i64 tipas.</p><p>\u0160ias funkcijas galite prid\u0117ti pagal poreik\u012F, \u017Er. <a href="https://docs.rs/qjs-sys/0.1.2/qjs_sys/" target="_blank" rel="noopener noreferrer">qjs_sys</a> funkcijas, prasidedan\u010Dias <code>JS_To</code>.</p><h3 id="duomenu-tipu-konvertavimas-is-rust-i-js" tabindex="-1"><a class="header-anchor" href="#duomenu-tipu-konvertavimas-is-rust-i-js" aria-hidden="true">#</a> Duomen\u0173 tip\u0173 konvertavimas i\u0161 rust \u012F js</h3><p>Tipo konvertavimas atliekamas adresu <code>src/js/val.rs</code> naudojant \u0161\u012F kod\u0105 :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>Konvertuoti i\u0161 <code>None</code>, <code>()</code>, <code>i64</code>ir CString \u012F <code>js</code> galima tik keturis tipus. Galite prid\u0117ti tiek, kiek norite.</p><p>Daugiau duomen\u0173 tip\u0173 galima deklaruoti <a href="https://docs.rs/qjs-sys/0.1.2/qjs_sys/" target="_blank" rel="noopener noreferrer">qjs_sys</a> funkcijose, pradedant <code>JS_New</code>.</p><h2 id="kurimo-aplinka" tabindex="-1"><a class="header-anchor" href="#kurimo-aplinka" aria-hidden="true">#</a> K\u016Brimo aplinka</h2><p>Kuriu &quot;Apple&quot; ne\u0161iojamajame kompiuteryje, r\u016Bdys naudoja 1.62.0-nightly.</p><p>Pirmiausia \u012Fdiekite <a href="https://direnv.net" target="_blank" rel="noopener noreferrer">direnv</a>, eikite \u012F katalog\u0105 ir <code>direnv allow</code>, o</p><p>\u012Ediekite python3, tada <code>pip3 install -r ./requirements.txt</code></p><p>paleisti <code>./build.xsh</code>, kad b\u016Bt\u0173 sukompiliuota ir paleista demonstracin\u0117 versija</p><p>Pagal numatytuosius nustatymus oficiali quickjs saugykla bus klonuota, jei norite pakeisti &quot;Kraken&quot; saugykloje esant\u012F quickjs, pirmiausia</p><p><code>git clone --recursive git@github.com:openkraken/kraken.git --depth=1</code></p><p>tada atlikite \u0161iuos veiksmus</p><div class="language-bash ext-sh"><pre class="language-bash"><code>rm -rf quickjs
ln -s ../kraken/bridge/third_party/quickjs .
</code></pre></div><p>Galiausiai dar kart\u0105 paleiskite <code>./build.xsh</code></p><h2 id="katalogo-struktura" tabindex="-1"><a class="header-anchor" href="#katalogo-struktura" aria-hidden="true">#</a> Katalogo strukt\u016Bra</h2><ul><li><p><code>./quickjs_rust</code><br> Quickjs kodo c failo keitimas</p></li><li><p><code>./quickjs_ffi</code><br> Eksportuokite funkcijas i\u0161 <code>quickjs</code> antra\u0161t\u0117s failo \u012F <code>rust</code></p></li><li><p><code>./rust</code><br> Naudokite <code>rust</code>, kad \u012Fgyvendintum\u0117te <code>quickjs</code> funkcijas.</p><ul><li><code>./rust/src/qjs.rs</code><br> Asinchronini\u0173 skambu\u010Di\u0173 \u012Fgyvendinimas. Kadangi <code>quickjs</code> yra vienos gijos, su <code>quckjs</code> susij\u0119 funkcij\u0173 i\u0161kvietimai ra\u0161omi pagrindin\u0117je gijoje.</li></ul></li><li><p><code>./rust_macro</code><br><code>rust</code> Proced\u016Bros makro <code>#[js]</code> \u012Fgyvendinimas</p><p>Ateityje \u017Er. <a href="https://github.com/second-state/wasmedge-quickjs/blob/70efe8520dc65636cb81b7225e2a6dae47cfad49/src/quickjs_sys/mod.rs#L122" target="_blank" rel="noopener noreferrer">wasmedge-quickjs</a> d\u0117l automatinio rust funkcij\u0173 eksporto \u012F js funkcijas. <a href="https://github.com/second-state/wasmedge-quickjs/blob/70efe8520dc65636cb81b7225e2a6dae47cfad49/src/quickjs_sys/mod.rs#L122" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 JsFunctionTrampoline</a></p></li></ul><h2 id="statybos-scenarijai-build-xsh" tabindex="-1"><a class="header-anchor" href="#statybos-scenarijai-build-xsh" aria-hidden="true">#</a> Statybos scenarijai <code>build.xsh</code></h2><p>Nedelsdami pereikime tiesiai prie <code>build.xsh</code> k\u016Brimo scenarijaus i\u0161eities kodo.</p><div class="language-xonsh ext-xonsh"><pre class="language-xonsh"><code>#!/usr/bin/env xonsh

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
</code></pre></div><h2 id="principo-paaiskinimas" tabindex="-1"><a class="header-anchor" href="#principo-paaiskinimas" aria-hidden="true">#</a> Principo paai\u0161kinimas</h2><h3 id="quickjs-rust-patch-py" tabindex="-1"><a class="header-anchor" href="#quickjs-rust-patch-py" aria-hidden="true">#</a> <code>quickjs_rust/patch.py</code></h3><p>Paleidus <code>./quickjs_rust/patch.py</code>, <code>quickjs</code> i\u0161eities kodas bus \u0161iek tiek pakeistas.</p><p>Viena i\u0161 funkcij\u0173 <code>JS_AddRust</code> naudojama \u012F rust modul\u012F.</p><p><code>rust_run</code> yra \u012Fterpiamas \u012F <code>JS_ExecutePendingJob</code>, kad b\u016Bt\u0173 galima i\u0161kviesti asinchronines funkcijas.</p><p>Toliau pateikiama vis\u0173 pakeitim\u0173 ekrano kopija:</p><p><img src="//irmw.gumlet.io/ep2Xgg.png" alt=""></p><h3 id="quickjs-rust-h" tabindex="-1"><a class="header-anchor" href="#quickjs-rust-h" aria-hidden="true">#</a> <code>quickjs_rust.h</code></h3><p>I\u0161 pirmiau pateikt\u0173 pakeitim\u0173 matyti, kad \u012Fved\u0117me nauj\u0105 antra\u0161t\u0117s fail\u0105 <code>quickjs_rust.h</code> su tokiu kodu</p><div class="language-c ext-c"><pre class="language-c"><code>#ifndef QUICKJS_RUST_H
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
</code></pre></div><h3 id="rust-rust-h" tabindex="-1"><a class="header-anchor" href="#rust-rust-h" aria-hidden="true">#</a> <code>rust/rust.h</code></h3><p>Matote, kad <code>quickjs_rust/quickjs_rust.h</code> \u012Fveda <code>quickjs_rust/js_rust_funcs.h</code>, kuris automati\u0161kai sukuriamas i\u0161 rust eksporto funkcijos antra\u0161t\u0117s failo <code>rust/rust.h</code> ir netur\u0117t\u0173 b\u016Bti kei\u010Diamas rankiniu b\u016Bdu.</p><p>O <code>rust/rust.h</code> generuojamas i\u0161 <code>./rust/build.xsh</code> i\u0161kvietus cbindgen.</p><h3 id="rust-build-xsh" tabindex="-1"><a class="header-anchor" href="#rust-build-xsh" aria-hidden="true">#</a> <code>rust/build.xsh</code></h3><div class="language-xonsh ext-xonsh"><pre class="language-xonsh"><code>#!/usr/bin/env xonsh

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
</code></pre></div><h2 id="pastabos-del-pletros" tabindex="-1"><a class="header-anchor" href="#pastabos-del-pletros" aria-hidden="true">#</a> Pastabos d\u0117l pl\u0117tros</h2><h3 id="quickjs-ffi" tabindex="-1"><a class="header-anchor" href="#quickjs-ffi" aria-hidden="true">#</a> <code>quickjs_ffi</code></h3><p>Kodas i\u0161 <a href="https://raw.githubusercontent.com/taskie/quijine/main/quijine_core/src/ffi.rs" target="_blank" rel="noopener noreferrer">quijine/main/quijine_core/src/ffi.rs</a></p><p>su nedideliais pakeitimais, pakei\u010Diant</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>\u012F</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><h3 id="undefined-symbols-for-architecture-x86-64-js-toint32" tabindex="-1"><a class="header-anchor" href="#undefined-symbols-for-architecture-x86-64-js-toint32" aria-hidden="true">#</a> <code>Undefined symbols for architecture x86_64: &quot;_JS_ToInt32&quot;</code></h3><p>Pakeiskite &quot;. /rust/Cargo.toml&#39; taip, i\u0161laikant tik staticlib</p><div class="language-toml ext-toml"><pre class="language-toml"><code>[lib]
#crate-type = [&quot;lib&quot;, &quot;cdylib&quot;, &quot;staticlib&quot;]
crate-type = [&quot;staticlib&quot;]
</code></pre></div><h2 id="nuorodos" tabindex="-1"><a class="header-anchor" href="#nuorodos" aria-hidden="true">#</a> Nuorodos</h2><ol start="0"><li>I\u0161 <code>JS</code> variklio \u012F <code>JS</code> paleidimo laik\u0105 <a href="https://github.com/doodlewind/blog/blob/master/source/_posts/js-engine-to-js-runtime-1.md" target="_blank" rel="noopener noreferrer">(vir\u0161uje</a> ) <a href="https://github.com/doodlewind/blog/blob/master/source/_posts/js-engine-to-js-runtime-2.md" target="_blank" rel="noopener noreferrer">(apa\u010Dioje</a> )</li><li><a href="https://github.com/quickjs-zh/QuickJS/wiki/%E4%BD%BF%E7%94%A8C%E8%AF%AD%E8%A8%80%E4%B8%BAQuickJS%E5%BC%80%E5%8F%91%E4%B8%80%E4%B8%AA%E5%8E%9F%E7%94%9F%E6%A8%A1%E5%9D%97" target="_blank" rel="noopener noreferrer">Gimtojo modulio, skirto svetainei <code>QuickJS</code>, k\u016Brimas C kalba</a></li><li><a href="https://wasmedge.org/book/en/dev/js/rust.html" target="_blank" rel="noopener noreferrer">Naudokite &quot;Rust&quot; JS API \u012Fgyvendinti</a></li><li><a href="https://github.com/Kozova1/quickjs-example" target="_blank" rel="noopener noreferrer">QuickJS pavyzd\u017Eiai</a></li><li><a href="https://rust-lang.github.io/rust-bindgen/" target="_blank" rel="noopener noreferrer">rust-bindgen</a></li><li><a href="https://calbertts.medium.com/how-to-create-asynchronous-apis-for-quickjs-8aca5488bb2e" target="_blank" rel="noopener noreferrer">Kaip sukurti asinchronin\u012F kod\u0105 svetain\u0117je <code>QuickJS</code></a></li><li><a href="https://github.com/DelSkayn/rquickjs/blob/master/core/src/context/ctx.rs#L104" target="_blank" rel="noopener noreferrer">rquickjs \u2192 JS_NewPromiseCapability</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/8a65582265ecdd3171380feebf56b3bb8c34d183/src/quickjs_sys/mod.rs#L515" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 new_promise</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/da887752fdc9c36aca0f4b7499c5b115862ce771/src/internal_module/wasi_net_module.rs#L46" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 JsMetodas</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/8a65582265ecdd3171380feebf56b3bb8c34d183/src/quickjs_sys/mod.rs#L756" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 skambutis</a></li><li><a href="https://mp.weixin.qq.com/s/BKto24ItwXbeHon_LaF_0w" target="_blank" rel="noopener noreferrer">Nepastebimi sp\u0105stai - u\u017Eraktai &quot;Rust</a></li></ol><h2 id="apie" tabindex="-1"><a class="header-anchor" href="#apie" aria-hidden="true">#</a> Apie</h2><p>\u0160is projektas yra <strong>rmw.link ( <a href="//rmw.link" target="_blank" rel="noopener noreferrer">rmw.link</a></strong> ) kodo projekto dalis.</p><p><img src="https://raw.githubusercontent.com/rmw-link/logo/master/rmw.red.bg.svg" alt="rmw.link"></p>`,81);function r(i,s){return a}var c=n(t,[["render",r],["__file","2022-04-29-quickjs-rust.html.vue"]]);export{c as default};
