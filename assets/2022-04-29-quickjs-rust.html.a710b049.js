import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{e}from"./app.87d927ab.js";const t={},r=e(`<h1 id="modyfikacja-quickjs-w-celu-importowania-funkcji-rust-nowy-sposob-myslenia-o-rozszerzaniu-krakena" tabindex="-1"><a class="header-anchor" href="#modyfikacja-quickjs-w-celu-importowania-funkcji-rust-nowy-sposob-myslenia-o-rozszerzaniu-krakena" aria-hidden="true">#</a> Modyfikacja quickjs w celu importowania funkcji rust - nowy spos\xF3b my\u015Blenia o rozszerzaniu Krakena</h1><h2 id="repozytorium-kodow" tabindex="-1"><a class="header-anchor" href="#repozytorium-kodow" aria-hidden="true">#</a> Repozytorium kod\xF3w</h2><ul><li><a href="https://github.com/rmw-lib/quickjs-rust" target="_blank" rel="noopener noreferrer">github</a></li><li><a href="https://gitee.com/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">gitee</a></li><li><a href="https://gitflic.ru/project/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">gitflic</a></li><li><a href="https://bitbucket.org/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">bitbucket</a></li></ul><h2 id="geneza" tabindex="-1"><a class="header-anchor" href="#geneza" aria-hidden="true">#</a> Geneza</h2><p><a href="https://openkraken.com" target="_blank" rel="noopener noreferrer">Kraken</a> to wysokowydajny silnik renderuj\u0105cy strony internetowe oparty na witrynie <code>Flutter</code>, kt\xF3ry wykorzystuje <a href="https://github.com/openkraken/kraken/tree/main/bridge/third_party/quickjs" target="_blank" rel="noopener noreferrer">quickjs</a> jako silnik skryptowy.</p><p>Chcia\u0142em napisa\u0107 kilka rozszerze\u0144 do Krakena, korzystaj\u0105c z witryny <code>rust</code>.</p><p>Kraken <a href="https://openkraken.com/guide/advanced/custom-js-api" target="_blank" rel="noopener noreferrer">obs\u0142uguje pisanie rozszerze\u0144 za pomoc\u0105 strony <code>dart</code></a> .</p><p>Korzystanie z witryny <a href="https://github.com/fzyzcjy/flutter_rust_bridge" target="_blank" rel="noopener noreferrer"><code>flutter_rust_bridge</code></a> <code>rust</code> i <code>dart</code>.</p><p>\u0141\u0105cz\u0105c te dwa punkty, pisanie rozszerze\u0144 Krakena przy u\u017Cyciu strony <code>rust</code> nie jest trudne.<br> To rozwi\u0105zanie ma jednak du\u017Cy narzut na wydajno\u015B\u0107, poniewa\u017C za wywo\u0142anie adresu <code>dart</code> na stronie <code>rust</code> trzeba zap\u0142aci\u0107 kar\u0119, a za wywo\u0142anie adresu <code>quickjs</code> na stronie <code>dart</code> - kar\u0119.</p><p>Z drugiej strony, podczas gdy spo\u0142eczno\u015B\u0107 <code>rust</code> ma <a href="https://github.com/DelSkayn/rquickjs" target="_blank" rel="noopener noreferrer"><code>rquickjs</code></a> takie po\u0142\u0105czenia z bibliotek\u0105 <code>quickjs</code> na stronie <code>rust</code>.<br> Jednak zamiast osadza\u0107 <code>quickjs</code>, wywo\u0142uj\u0105 <code>quickjs</code> i nie mo\u017Cna ich u\u017Cy\u0107 do zaczarowania <code>quickjs</code>.</p><p>W tej bazie kodu zastosowa\u0142em nowe rozwi\u0105zanie: bezpo\u015Bredni\u0105 modyfikacj\u0119 kodu \u017Ar\xF3d\u0142owego <code>quickjs</code> w celu obs\u0142ugi rozszerzenia <code>rust</code>.</p><p>Jest to rozwi\u0105zanie og\xF3lne, kt\xF3re mo\u017Cna stosowa\u0107 nie tylko do modyfikowania Krakena, ale tak\u017Ce do wszystkich framework\xF3w i bibliotek osadzonych na stronie <code>quickjs</code>.</p><h2 id="demonstracja" tabindex="-1"><a class="header-anchor" href="#demonstracja" aria-hidden="true">#</a> Demonstracja</h2><p>Kod pliku test.js jest nast\u0119puj\u0105cy :</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>const try_run = (func, ...args) =&gt; {
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
</code></pre></div><p>Uruchom <code>./quickjs/qjs test.js</code>, wyj\u015Bcie :</p><div class="language-text ext-text"><pre class="language-text"><code>export from rust : fib,sleep
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
</code></pre></div><h3 id="implementacja-fib-w-rust" tabindex="-1"><a class="header-anchor" href="#implementacja-fib-w-rust" aria-hidden="true">#</a> Implementacja fib w rust</h3><p>Funkcja fib zaimportowana w js pochodzi z witryny <code>rust/src/export/fib.rs</code>, a jej kod jest nast\u0119puj\u0105cy :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>Obecnie makro procedury <code>#[js]</code> dodaje jedynie sta\u0142\u0105 <code>fib_args_len</code>, kt\xF3ra okre\u015Bla liczb\u0119 argument\xF3w funkcji.</p><p>W przysz\u0142o\u015Bci mo\u017Cna napisa\u0107 makro proceduralne <code>./rust_macro</code>, aby umo\u017Cliwi\u0107 w pe\u0142ni automatyczny eksport funkcji.</p><h3 id="implementacja-funkcji-sleep-w-programie-rust" tabindex="-1"><a class="header-anchor" href="#implementacja-funkcji-sleep-w-programie-rust" aria-hidden="true">#</a> Implementacja funkcji sleep w programie rust</h3><p>Funkcja sleep zaimportowana w js pochodzi z <code>rust/src/export/sleep.rs</code>, a jej kod jest nast\u0119puj\u0105cy :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>Jak wida\u0107 powy\u017Cej, wszystkie wyeksportowane funkcje s\u0105 zdefiniowane w katalogu <code>./rust/src/export</code>. Katalog <code>mod.rs</code> jest automatycznie generowany po uruchomieniu programu <code>./rust/build.xsh</code>, co powoduje wyeksportowanie do niego wszystkich plik\xF3w <code>.rs</code>.</p><h3 id="odczytywanie-i-sprawdzanie-poprawnosci-parametrow-przychodzacych-js" tabindex="-1"><a class="header-anchor" href="#odczytywanie-i-sprawdzanie-poprawnosci-parametrow-przychodzacych-js" aria-hidden="true">#</a> Odczytywanie i sprawdzanie poprawno\u015Bci parametr\xF3w przychodz\u0105cych js</h3><p>Parametry s\u0105 odczytywane i zatwierdzane na stronie <code>src/js/arg.rs</code> za pomoc\u0105 nast\u0119puj\u0105cego kodu :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>Obecnie sprawdzana jest tylko liczba argument\xF3w oraz odczytywany jest typ i64.</p><p>Mo\u017Cna doda\u0107 te funkcje w razie potrzeby, patrz funkcje w <a href="https://docs.rs/qjs-sys/0.1.2/qjs_sys/" target="_blank" rel="noopener noreferrer">qjs_sys</a> zaczynaj\u0105ce si\u0119 od <code>JS_To</code>.</p><h3 id="konwersja-typow-danych-z-rust-na-js" tabindex="-1"><a class="header-anchor" href="#konwersja-typow-danych-z-rust-na-js" aria-hidden="true">#</a> Konwersja typ\xF3w danych z rust na js</h3><p>Konwersja typ\xF3w jest wykonywana na stronie <code>src/js/val.rs</code> za pomoc\u0105 nast\u0119puj\u0105cego kodu :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>Zdefiniowano tylko cztery typy do konwersji z <code>None</code>, <code>()</code>, <code>i64</code>i CString na <code>js</code>. Mo\u017Cna doda\u0107 dowoln\u0105 ich liczb\u0119.</p><p>Wi\u0119cej typ\xF3w danych mo\u017Cna zadeklarowa\u0107 w funkcjach w <a href="https://docs.rs/qjs-sys/0.1.2/qjs_sys/" target="_blank" rel="noopener noreferrer">qjs_sys</a> zaczynaj\u0105cych si\u0119 od <code>JS_New</code>.</p><h2 id="srodowisko-programistyczne" tabindex="-1"><a class="header-anchor" href="#srodowisko-programistyczne" aria-hidden="true">#</a> \u015Arodowisko programistyczne</h2><p>Pracuj\u0119 nad projektem na laptopie Apple, na kt\xF3rym u\u017Cywana jest wersja 1.62.0-nightly.</p><p>Najpierw zainstaluj <a href="https://direnv.net" target="_blank" rel="noopener noreferrer">direnv</a>, przejd\u017A do katalogu i <code>direnv allow</code> przez chwil\u0119</p><p>Zainstaluj python3, a nast\u0119pnie <code>pip3 install -r ./requirements.txt</code></p><p>uruchom <code>./build.xsh</code>, aby skompilowa\u0107 i uruchomi\u0107 demo</p><p>Domy\u015Blnie, oficjalne repozytorium quickjs zostanie sklonowane, je\u015Bli chcesz zmodyfikowa\u0107 quickjs w repozytorium Kraken, najpierw</p><p><code>git clone --recursive git@github.com:openkraken/kraken.git --depth=1</code></p><p>to wykonaj nast\u0119puj\u0105ce czynno\u015Bci</p><div class="language-bash ext-sh"><pre class="language-bash"><code>rm -rf quickjs
ln -s ../kraken/bridge/third_party/quickjs .
</code></pre></div><p>Na koniec nale\u017Cy ponownie uruchomi\u0107 program <code>./build.xsh</code></p><h2 id="struktura-katalogu" tabindex="-1"><a class="header-anchor" href="#struktura-katalogu" aria-hidden="true">#</a> Struktura katalogu</h2><ul><li><p><code>./quickjs_rust</code><br> Modyfikacja pliku c kodu quickjs</p></li><li><p><code>./quickjs_ffi</code><br> Wyeksportuj funkcje z pliku nag\u0142\xF3wkowego <code>quickjs</code> do <code>rust</code></p></li><li><p><code>./rust</code><br> U\u017Cyj strony <code>rust</code> do implementacji funkcji w <code>quickjs</code>.</p><ul><li><code>./rust/src/qjs.rs</code><br> Implementacja wywo\u0142a\u0144 asynchronicznych. Poniewa\u017C witryna <code>quickjs</code> jest jednow\u0105tkowa, wywo\u0142ania funkcji dotycz\u0105cych witryny <code>quckjs</code> s\u0105 zapisywane w g\u0142\xF3wnym w\u0105tku.</li></ul></li><li><p><code>./rust_macro</code><br><code>rust</code> Implementacja makra proceduralnego <code>#[js]</code></p><p>W przysz\u0142o\u015Bci, zobacz <a href="https://github.com/second-state/wasmedge-quickjs/blob/70efe8520dc65636cb81b7225e2a6dae47cfad49/src/quickjs_sys/mod.rs#L122" target="_blank" rel="noopener noreferrer">wasmedge-quickjs</a> dla automatycznego eksportu funkcji rust do funkcji js. <a href="https://github.com/second-state/wasmedge-quickjs/blob/70efe8520dc65636cb81b7225e2a6dae47cfad49/src/quickjs_sys/mod.rs#L122" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 JsFunctionTrampoline</a></p></li></ul><h2 id="tworzenie-skryptow-build-xsh" tabindex="-1"><a class="header-anchor" href="#tworzenie-skryptow-build-xsh" aria-hidden="true">#</a> Tworzenie skrypt\xF3w <code>build.xsh</code></h2><p>Bez dalszych ceregieli przejd\u017Amy od razu do kodu \u017Ar\xF3d\u0142owego skryptu kompilacji <code>build.xsh</code>.</p><div class="language-xonsh ext-xonsh"><pre class="language-xonsh"><code>#!/usr/bin/env xonsh

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
</code></pre></div><h2 id="objasnienie-zasady" tabindex="-1"><a class="header-anchor" href="#objasnienie-zasady" aria-hidden="true">#</a> Obja\u015Bnienie zasady</h2><h3 id="quickjs-rust-patch-py" tabindex="-1"><a class="header-anchor" href="#quickjs-rust-patch-py" aria-hidden="true">#</a> <code>quickjs_rust/patch.py</code></h3><p>Uruchomienie <code>./quickjs_rust/patch.py</code> spowoduje wprowadzenie drobnych zmian w kodzie \u017Ar\xF3d\u0142owym <code>quickjs</code>.</p><p>Jedna z funkcji <code>JS_AddRust</code> jest u\u017Cywana do wstrzykiwania do modu\u0142u rust.</p><p>Strona <code>rust_run</code> jest wstrzykiwana do strony <code>JS_ExecutePendingJob</code> w celu wywo\u0142ania funkcji asynchronicznych.</p><p>Zrzut ekranu przedstawiaj\u0105cy wszystkie zmiany jest pokazany poni\u017Cej :</p><p><img src="//irmw.gumlet.io/ep2Xgg.png" alt=""></p><h3 id="quickjs-rust-h" tabindex="-1"><a class="header-anchor" href="#quickjs-rust-h" aria-hidden="true">#</a> <code>quickjs_rust.h</code></h3><p>Z powy\u017Cszych zmian wida\u0107, \u017Ce wprowadzili\u015Bmy nowy plik nag\u0142\xF3wkowy <code>quickjs_rust.h</code> z nast\u0119puj\u0105cym kodem</p><div class="language-c ext-c"><pre class="language-c"><code>#ifndef QUICKJS_RUST_H
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
</code></pre></div><h3 id="rust-rust-h" tabindex="-1"><a class="header-anchor" href="#rust-rust-h" aria-hidden="true">#</a> <code>rust/rust.h</code></h3><p>Wida\u0107, \u017Ce <code>quickjs_rust/quickjs_rust.h</code> wprowadza plik <code>quickjs_rust/js_rust_funcs.h</code>, kt\xF3ry jest automatycznie generowany z pliku nag\u0142\xF3wkowego funkcji eksportu rdzy <code>rust/rust.h</code> i nie powinien by\u0107 modyfikowany r\u0119cznie.</p><p>Strona <code>rust/rust.h</code> jest generowana przez wywo\u0142anie cbindgen ze strony <code>./rust/build.xsh</code>.</p><h3 id="rust-build-xsh" tabindex="-1"><a class="header-anchor" href="#rust-build-xsh" aria-hidden="true">#</a> <code>rust/build.xsh</code></h3><div class="language-xonsh ext-xonsh"><pre class="language-xonsh"><code>#!/usr/bin/env xonsh

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
</code></pre></div><h2 id="uwagi-dotyczace-rozwoju" tabindex="-1"><a class="header-anchor" href="#uwagi-dotyczace-rozwoju" aria-hidden="true">#</a> Uwagi dotycz\u0105ce rozwoju</h2><h3 id="quickjs-ffi" tabindex="-1"><a class="header-anchor" href="#quickjs-ffi" aria-hidden="true">#</a> <code>quickjs_ffi</code></h3><p>Kod z <a href="https://raw.githubusercontent.com/taskie/quijine/main/quijine_core/src/ffi.rs" target="_blank" rel="noopener noreferrer">quijine/main/quijine_core/src/ffi.rs</a></p><p>z niewielkimi modyfikacjami, zast\u0119puj\u0105c</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>do</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><h3 id="undefined-symbols-for-architecture-x86-64-js-toint32" tabindex="-1"><a class="header-anchor" href="#undefined-symbols-for-architecture-x86-64-js-toint32" aria-hidden="true">#</a> <code>Undefined symbols for architecture x86_64: &quot;_JS_ToInt32&quot;</code></h3><p>Zmodyfikuj &quot;. /rust/Cargo.toml&quot; w nast\u0119puj\u0105cy spos\xF3b, zachowuj\u0105c tylko staticlib</p><div class="language-toml ext-toml"><pre class="language-toml"><code>[lib]
#crate-type = [&quot;lib&quot;, &quot;cdylib&quot;, &quot;staticlib&quot;]
crate-type = [&quot;staticlib&quot;]
</code></pre></div><h2 id="referencje" tabindex="-1"><a class="header-anchor" href="#referencje" aria-hidden="true">#</a> Referencje</h2><ol start="0"><li>Od silnika <code>JS</code> do runtime <code>JS</code> <a href="https://github.com/doodlewind/blog/blob/master/source/_posts/js-engine-to-js-runtime-1.md" target="_blank" rel="noopener noreferrer">(g\xF3ra)</a> <a href="https://github.com/doodlewind/blog/blob/master/source/_posts/js-engine-to-js-runtime-2.md" target="_blank" rel="noopener noreferrer">(d\xF3\u0142</a> )</li><li><a href="https://github.com/quickjs-zh/QuickJS/wiki/%E4%BD%BF%E7%94%A8C%E8%AF%AD%E8%A8%80%E4%B8%BAQuickJS%E5%BC%80%E5%8F%91%E4%B8%80%E4%B8%AA%E5%8E%9F%E7%94%9F%E6%A8%A1%E5%9D%97" target="_blank" rel="noopener noreferrer">Tworzenie natywnego modu\u0142u dla <code>QuickJS</code> w j\u0119zyku C</a></li><li><a href="https://wasmedge.org/book/en/dev/js/rust.html" target="_blank" rel="noopener noreferrer">U\u017Cyj j\u0119zyka Rust do implementacji interfejsu API JS</a></li><li><a href="https://github.com/Kozova1/quickjs-example" target="_blank" rel="noopener noreferrer">Przyk\u0142ady QuickJS</a></li><li><a href="https://rust-lang.github.io/rust-bindgen/" target="_blank" rel="noopener noreferrer">rust-bindgen</a></li><li><a href="https://calbertts.medium.com/how-to-create-asynchronous-apis-for-quickjs-8aca5488bb2e" target="_blank" rel="noopener noreferrer">Jak utworzy\u0107 kod asynchroniczny dla strony <code>QuickJS</code></a></li><li><a href="https://github.com/DelSkayn/rquickjs/blob/master/core/src/context/ctx.rs#L104" target="_blank" rel="noopener noreferrer">rquickjs \u2192 JS_NewPromiseCapability</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/8a65582265ecdd3171380feebf56b3bb8c34d183/src/quickjs_sys/mod.rs#L515" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 new_promise</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/da887752fdc9c36aca0f4b7499c5b115862ce771/src/internal_module/wasi_net_module.rs#L46" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 JsMethod</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/8a65582265ecdd3171380feebf56b3bb8c34d183/src/quickjs_sys/mod.rs#L756" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 po\u0142\u0105czenie</a></li><li><a href="https://mp.weixin.qq.com/s/BKto24ItwXbeHon_LaF_0w" target="_blank" rel="noopener noreferrer">Niezauwa\u017Calna pu\u0142apka - zamki w Rdzy</a></li></ol><h2 id="o-stronie" tabindex="-1"><a class="header-anchor" href="#o-stronie" aria-hidden="true">#</a> O stronie</h2><p>Ten projekt jest cz\u0119\u015Bci\u0105 projektu kodu <strong>rmw.link ( <a href="//rmw.link" target="_blank" rel="noopener noreferrer">rmw.link</a></strong> ).</p><p><img src="https://raw.githubusercontent.com/rmw-link/logo/master/rmw.red.bg.svg" alt="rmw.link"></p>`,81);function a(s,o){return r}var u=n(t,[["render",a],["__file","2022-04-29-quickjs-rust.html.vue"]]);export{u as default};
