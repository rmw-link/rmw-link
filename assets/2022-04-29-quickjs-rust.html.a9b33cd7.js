import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as n}from"./app.040d9bb0.js";const t={},r=n(`<h1 id="uprava-quickjs-na-import-funkcii-rustu-novy-sposob-uvazovania-o-rozsireni-krakenu" tabindex="-1"><a class="header-anchor" href="#uprava-quickjs-na-import-funkcii-rustu-novy-sposob-uvazovania-o-rozsireni-krakenu" aria-hidden="true">#</a> \xDAprava quickjs na import funkci\xED rustu - nov\xFD sp\xF4sob uva\u017Eovania o roz\u0161\xEDren\xED Krakenu</h1><h2 id="ulozisko-kodu" tabindex="-1"><a class="header-anchor" href="#ulozisko-kodu" aria-hidden="true">#</a> \xDAlo\u017Eisko k\xF3du</h2><ul><li><a href="https://github.com/rmw-lib/quickjs-rust" target="_blank" rel="noopener noreferrer">github</a></li><li><a href="https://gitee.com/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">gitee</a></li><li><a href="https://gitflic.ru/project/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">gitflic</a></li><li><a href="https://bitbucket.org/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">bitbucket</a></li></ul><h2 id="geneza" tabindex="-1"><a class="header-anchor" href="#geneza" aria-hidden="true">#</a> Gen\xE9za</h2><p><a href="https://openkraken.com" target="_blank" rel="noopener noreferrer">Kraken</a> je vysoko v\xFDkonn\xE9 webov\xE9 vykres\u013Eovacie jadro zalo\u017Een\xE9 na adrese <code>Flutter</code>, ktor\xE9 ako skriptovacie jadro pou\u017E\xEDva <a href="https://github.com/openkraken/kraken/tree/main/bridge/third_party/quickjs" target="_blank" rel="noopener noreferrer">quickjs</a>.</p><p>Chcel som nap\xEDsa\u0165 nejak\xE9 roz\u0161\xEDrenia pre Kraken pomocou <code>rust</code>.</p><p>Kraken <a href="https://openkraken.com/guide/advanced/custom-js-api" target="_blank" rel="noopener noreferrer">podporuje z\xE1pis roz\u0161\xEDren\xED pomocou adresy <code>dart</code></a> .</p><p>Pou\u017E\xEDvanie str\xE1nky <a href="https://github.com/fzyzcjy/flutter_rust_bridge" target="_blank" rel="noopener noreferrer"><code>flutter_rust_bridge</code></a> <code>rust</code> a <code>dart</code>.</p><p>Kombin\xE1ciou t\xFDchto dvoch bodov nie je \u0165a\u017Ek\xE9 nap\xEDsa\u0165 roz\u0161\xEDrenia Kraken pomocou str\xE1nky <code>rust</code>.<br> V\xFDkonnostn\xE1 r\xE9\u017Eia tohto rie\u0161enia je v\u0161ak vysok\xE1, preto\u017Ee pri volan\xED adresy <code>dart</code> na adresu <code>rust</code> doch\xE1dza k zn\xED\u017Eeniu v\xFDkonu a pri volan\xED adresy <code>quickjs</code> na adresu <code>dart</code> k \u010Fal\u0161iemu zn\xED\u017Eeniu v\xFDkonu.</p><p>Na druhej strane, zatia\u013E \u010Do komunita <code>rust</code> m\xE1 <a href="https://github.com/DelSkayn/rquickjs" target="_blank" rel="noopener noreferrer"><code>rquickjs</code></a> tak\xE9to volania kni\u017Enice <code>quickjs</code> na adrese <code>rust</code>.<br> Namiesto vlo\u017Eenia v\u0161ak volaj\xFA <code>quickjs</code> <code>quickjs</code> a nedaj\xFA sa pou\u017Ei\u0165 na \u010Darovanie <code>quickjs</code>.</p><p>V tejto datab\xE1ze som implementoval nov\xE9 rie\u0161enie: priamo upravil zdrojov\xFD k\xF3d <code>quickjs</code> tak, aby podporoval roz\u0161\xEDrenie <code>rust</code>.</p><p>Ide o v\u0161eobecn\xE9 rie\u0161enie, ktor\xE9 mo\u017Eno pou\u017Ei\u0165 nielen na \xFApravu Krakenu, ale aj pre v\u0161etky frameworky a kni\u017Enice, ktor\xE9 obsahuj\xFA <code>quickjs</code>.</p><h2 id="ukazka" tabindex="-1"><a class="header-anchor" href="#ukazka" aria-hidden="true">#</a> Uk\xE1\u017Eka</h2><p>K\xF3d test.js je nasledovn\xFD :</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>const try_run = (func, ...args) =&gt; {
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
</code></pre></div><p>Spustite <code>./quickjs/qjs test.js</code>, v\xFDstup :</p><div class="language-text ext-text"><pre class="language-text"><code>export from rust : fib,sleep
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
</code></pre></div><h3 id="implementacia-fib-v-hrdzi" tabindex="-1"><a class="header-anchor" href="#implementacia-fib-v-hrdzi" aria-hidden="true">#</a> Implement\xE1cia fib v hrdzi</h3><p>Funkcia fib importovan\xE1 v js je z <code>rust/src/export/fib.rs</code> a k\xF3d je nasleduj\xFAci :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>V s\xFA\u010Dasnosti makro proced\xFAry <code>#[js]</code> len prid\xE1va kon\u0161tantu <code>fib_args_len</code>, ktor\xE1 identifikuje po\u010Det argumentov funkcie.</p><p>V bud\xFAcnosti bude mo\u017En\xE9 nap\xEDsa\u0165 makro proced\xFAry <code>./rust_macro</code>, ktor\xE9 umo\u017En\xED plne automatick\xFD export funkci\xED.</p><h3 id="implementacia-funkcie-sleep-v-jazyku-rust" tabindex="-1"><a class="header-anchor" href="#implementacia-funkcie-sleep-v-jazyku-rust" aria-hidden="true">#</a> Implement\xE1cia funkcie sleep v jazyku rust</h3><p>Funkcia sleep importovan\xE1 v js je z <code>rust/src/export/sleep.rs</code> a k\xF3d je nasledovn\xFD :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>Ako vid\xEDte vy\u0161\u0161ie, v\u0161etky exportovan\xE9 funkcie s\xFA definovan\xE9 v adres\xE1ri <code>./rust/src/export</code>. Tento adres\xE1r <code>mod.rs</code> sa automaticky vygeneruje pri spusten\xED <code>./rust/build.xsh</code>, pri\u010Dom sa do neho exportuj\xFA v\u0161etky s\xFAbory <code>.rs</code>.</p><h3 id="citanie-a-overovanie-prichodzich-parametrov-js" tabindex="-1"><a class="header-anchor" href="#citanie-a-overovanie-prichodzich-parametrov-js" aria-hidden="true">#</a> \u010C\xEDtanie a overovanie pr\xEDchodz\xEDch parametrov js</h3><p>Parametre sa na\u010D\xEDtaj\xFA a overuj\xFA na adrese <code>src/js/arg.rs</code> pomocou nasleduj\xFAceho k\xF3du :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>V s\xFA\u010Dasnosti sa kontroluje len po\u010Det argumentov a \u010D\xEDta sa typ i64.</p><p>Tieto funkcie m\xF4\u017Eete prida\u0165 pod\u013Ea potreby, pozri funkcie v <a href="https://docs.rs/qjs-sys/0.1.2/qjs_sys/" target="_blank" rel="noopener noreferrer">qjs_sys</a> za\u010D\xEDnaj\xFAce na <code>JS_To</code>.</p><h3 id="konverzia-datovych-typov-z-rustu-do-js" tabindex="-1"><a class="header-anchor" href="#konverzia-datovych-typov-z-rustu-do-js" aria-hidden="true">#</a> Konverzia d\xE1tov\xFDch typov z rustu do js</h3><p>Konverzia typu sa vykon\xE1va na adrese <code>src/js/val.rs</code> pomocou nasleduj\xFAceho k\xF3du :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>Pre konverziu z <code>None</code>, <code>()</code>, <code>i64</code>a CString na <code>js</code> s\xFA definovan\xE9 len \u0161tyri typy. M\xF4\u017Eete ich prida\u0165 \u013Eubovo\u013En\xFD po\u010Det.</p><p>\u010Eal\u0161ie d\xE1tov\xE9 typy je mo\u017En\xE9 deklarova\u0165 vo funkci\xE1ch v <a href="https://docs.rs/qjs-sys/0.1.2/qjs_sys/" target="_blank" rel="noopener noreferrer">qjs_sys</a> po\u010Dn\xFAc <code>JS_New</code>.</p><h2 id="vyvojove-prostredie" tabindex="-1"><a class="header-anchor" href="#vyvojove-prostredie" aria-hidden="true">#</a> V\xFDvojov\xE9 prostredie</h2><p>Vyv\xEDjam na notebooku Apple, rust pou\u017E\xEDva 1.62.0-nightly.</p><p>Najprv nain\u0161talujte <a href="https://direnv.net" target="_blank" rel="noopener noreferrer">direnv</a>, prejdite do adres\xE1ra a <code>direnv allow</code> na chv\xED\u013Eu</p><p>Nain\u0161talujte python3, potom <code>pip3 install -r ./requirements.txt</code></p><p>spusti\u0165 <code>./build.xsh</code> na kompil\xE1ciu a spustenie uk\xE1\u017Eky</p><p>V predvolenom nastaven\xED sa klonuje ofici\xE1lny repozit\xE1r quickjs, ak chcete upravi\u0165 quickjs v repozit\xE1ri Kraken, najprv</p><p><code>git clone --recursive git@github.com:openkraken/kraken.git --depth=1</code></p><p>potom vykonajte nasleduj\xFAce kroky</p><div class="language-bash ext-sh"><pre class="language-bash"><code>rm -rf quickjs
ln -s ../kraken/bridge/third_party/quickjs .
</code></pre></div><p>Nakoniec znovu spustite <code>./build.xsh</code></p><h2 id="struktura-adresara" tabindex="-1"><a class="header-anchor" href="#struktura-adresara" aria-hidden="true">#</a> \u0160trukt\xFAra adres\xE1ra</h2><ul><li><p><code>./quickjs_rust</code><br> \xDAprava c-s\xFAboru k\xF3du quickjs</p></li><li><p><code>./quickjs_ffi</code><br> Export funkci\xED zo z\xE1hlavn\xE9ho s\xFAboru <code>quickjs</code> do <code>rust</code></p></li><li><p><code>./rust</code><br> Na implement\xE1ciu funkci\xED na str\xE1nke <code>quickjs</code> pou\u017Eite str\xE1nku <code>rust</code>.</p><ul><li><code>./rust/src/qjs.rs</code><br> Implement\xE1cia asynchr\xF3nnych volan\xED. Ke\u010F\u017Ee <code>quickjs</code> je jednovl\xE1knov\xFD, volania funkci\xED zah\u0155\u0148aj\xFAce <code>quckjs</code> sa zapisuj\xFA v hlavnom vl\xE1kne.</li></ul></li><li><p><code>./rust_macro</code><br><code>rust</code> Implement\xE1cia makra postupu <code>#[js]</code></p><p>V bud\xFAcnosti si pozrite <a href="https://github.com/second-state/wasmedge-quickjs/blob/70efe8520dc65636cb81b7225e2a6dae47cfad49/src/quickjs_sys/mod.rs#L122" target="_blank" rel="noopener noreferrer">wasmedge-quickjs</a> pre automatick\xFD export rust funkci\xED do js funkci\xED. <a href="https://github.com/second-state/wasmedge-quickjs/blob/70efe8520dc65636cb81b7225e2a6dae47cfad49/src/quickjs_sys/mod.rs#L122" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 JsFunctionTrampoline</a></p></li></ul><h2 id="stavebne-skripty-build-xsh" tabindex="-1"><a class="header-anchor" href="#stavebne-skripty-build-xsh" aria-hidden="true">#</a> Stavebn\xE9 skripty <code>build.xsh</code></h2><p>Bez \u010Fal\u0161\xEDch slov prejdime priamo k zdrojov\xE9mu k\xF3du zostavovacieho skriptu <code>build.xsh</code></p><div class="language-xonsh ext-xonsh"><pre class="language-xonsh"><code>#!/usr/bin/env xonsh

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
</code></pre></div><h2 id="vysvetlenie-principu" tabindex="-1"><a class="header-anchor" href="#vysvetlenie-principu" aria-hidden="true">#</a> Vysvetlenie princ\xEDpu</h2><h3 id="quickjs-rust-patch-py" tabindex="-1"><a class="header-anchor" href="#quickjs-rust-patch-py" aria-hidden="true">#</a> <code>quickjs_rust/patch.py</code></h3><p>Spusten\xEDm str\xE1nky <code>./quickjs_rust/patch.py</code> sa v zdrojovom k\xF3de str\xE1nky <code>quickjs</code> vykon\xE1 nieko\u013Eko men\u0161\xEDch zmien.</p><p>Jedna z funkci\xED <code>JS_AddRust</code> sa pou\u017E\xEDva na injektovanie do modulu rust.</p><p><code>rust_run</code> sa vklad\xE1 do str\xE1nky <code>JS_ExecutePendingJob</code> na volanie asynchr\xF3nnych funkci\xED.</p><p>Sn\xEDmka obrazovky so v\u0161etk\xFDmi zmenami je uveden\xE1 ni\u017E\u0161ie :</p><p><img src="//irmw.gumlet.io/ep2Xgg.png" alt=""></p><h3 id="quickjs-rust-h" tabindex="-1"><a class="header-anchor" href="#quickjs-rust-h" aria-hidden="true">#</a> <code>quickjs_rust.h</code></h3><p>Z uveden\xFDch zmien vid\xEDte, \u017Ee sme zaviedli nov\xFD hlavi\u010Dkov\xFD s\xFAbor <code>quickjs_rust.h</code> s nasleduj\xFAcim k\xF3dom</p><div class="language-c ext-c"><pre class="language-c"><code>#ifndef QUICKJS_RUST_H
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
</code></pre></div><h3 id="rust-rust-h" tabindex="-1"><a class="header-anchor" href="#rust-rust-h" aria-hidden="true">#</a> <code>rust/rust.h</code></h3><p>Vid\xEDte, \u017Ee <code>quickjs_rust/quickjs_rust.h</code> zav\xE1dza <code>quickjs_rust/js_rust_funcs.h</code>, ktor\xFD je automaticky generovan\xFD zo s\xFAboru hlavi\u010Dky exportnej funkcie rust <code>rust/rust.h</code> a nemal by sa ru\u010Dne upravova\u0165.</p><p>A str\xE1nka <code>rust/rust.h</code> sa generuje volan\xEDm cbindgen zo str\xE1nky <code>./rust/build.xsh</code>.</p><h3 id="rust-build-xsh" tabindex="-1"><a class="header-anchor" href="#rust-build-xsh" aria-hidden="true">#</a> <code>rust/build.xsh</code></h3><div class="language-xonsh ext-xonsh"><pre class="language-xonsh"><code>#!/usr/bin/env xonsh

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
</code></pre></div><h2 id="poznamky-k-vyvoju" tabindex="-1"><a class="header-anchor" href="#poznamky-k-vyvoju" aria-hidden="true">#</a> Pozn\xE1mky k v\xFDvoju</h2><h3 id="quickjs-ffi" tabindex="-1"><a class="header-anchor" href="#quickjs-ffi" aria-hidden="true">#</a> <code>quickjs_ffi</code></h3><p>K\xF3d z <a href="https://raw.githubusercontent.com/taskie/quijine/main/quijine_core/src/ffi.rs" target="_blank" rel="noopener noreferrer">quijine/main/quijine_core/src/ffi.rs</a></p><p>s mal\xFDmi \xFApravami, nahraden\xEDm</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><h3 id="undefined-symbols-for-architecture-x86-64-js-toint32" tabindex="-1"><a class="header-anchor" href="#undefined-symbols-for-architecture-x86-64-js-toint32" aria-hidden="true">#</a> <code>Undefined symbols for architecture x86_64: &quot;_JS_ToInt32&quot;</code></h3><p>Upravi\u0165 &quot;. /rust/Cargo.toml&#39; takto, pri\u010Dom sa zachov\xE1 len staticlib</p><div class="language-toml ext-toml"><pre class="language-toml"><code>[lib]
#crate-type = [&quot;lib&quot;, &quot;cdylib&quot;, &quot;staticlib&quot;]
crate-type = [&quot;staticlib&quot;]
</code></pre></div><h2 id="odkazy" tabindex="-1"><a class="header-anchor" href="#odkazy" aria-hidden="true">#</a> Odkazy</h2><ol start="0"><li>Od motora <code>JS</code> k runtime <code>JS</code> <a href="https://github.com/doodlewind/blog/blob/master/source/_posts/js-engine-to-js-runtime-1.md" target="_blank" rel="noopener noreferrer">(hore</a> ) <a href="https://github.com/doodlewind/blog/blob/master/source/_posts/js-engine-to-js-runtime-2.md" target="_blank" rel="noopener noreferrer">(dole)</a></li><li><a href="https://github.com/quickjs-zh/QuickJS/wiki/%E4%BD%BF%E7%94%A8C%E8%AF%AD%E8%A8%80%E4%B8%BAQuickJS%E5%BC%80%E5%8F%91%E4%B8%80%E4%B8%AA%E5%8E%9F%E7%94%9F%E6%A8%A1%E5%9D%97" target="_blank" rel="noopener noreferrer">V\xFDvoj nat\xEDvneho modulu pre <code>QuickJS</code> v jazyku C</a></li><li><a href="https://wasmedge.org/book/en/dev/js/rust.html" target="_blank" rel="noopener noreferrer">Pou\u017Eitie Rustu na implement\xE1ciu rozhrania JS API</a></li><li><a href="https://github.com/Kozova1/quickjs-example" target="_blank" rel="noopener noreferrer">Pr\xEDklady QuickJS</a></li><li><a href="https://rust-lang.github.io/rust-bindgen/" target="_blank" rel="noopener noreferrer">rust-bindgen</a></li><li><a href="https://calbertts.medium.com/how-to-create-asynchronous-apis-for-quickjs-8aca5488bb2e" target="_blank" rel="noopener noreferrer">Ako vytvori\u0165 asynchr\xF3nny k\xF3d pre <code>QuickJS</code></a></li><li><a href="https://github.com/DelSkayn/rquickjs/blob/master/core/src/context/ctx.rs#L104" target="_blank" rel="noopener noreferrer">rquickjs \u2192 JS_NewPromiseCapability</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/8a65582265ecdd3171380feebf56b3bb8c34d183/src/quickjs_sys/mod.rs#L515" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 new_promise</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/da887752fdc9c36aca0f4b7499c5b115862ce771/src/internal_module/wasi_net_module.rs#L46" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 JsMethod</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/8a65582265ecdd3171380feebf56b3bb8c34d183/src/quickjs_sys/mod.rs#L756" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 volanie</a></li><li><a href="https://mp.weixin.qq.com/s/BKto24ItwXbeHon_LaF_0w" target="_blank" rel="noopener noreferrer">Nepostrehnute\u013En\xE1 pasca - z\xE1mky Rust</a></li></ol><h2 id="o-stranke" tabindex="-1"><a class="header-anchor" href="#o-stranke" aria-hidden="true">#</a> O str\xE1nke</h2><p>Tento projekt je s\xFA\u010Das\u0165ou projektu k\xF3du <strong>rmw.link ( <a href="//rmw.link" target="_blank" rel="noopener noreferrer">rmw.link</a></strong> ).</p><p><img src="https://raw.githubusercontent.com/rmw-link/logo/master/rmw.red.bg.svg" alt="rmw.link"></p>`,81);function a(s,o){return r}var c=e(t,[["render",a],["__file","2022-04-29-quickjs-rust.html.vue"]]);export{c as default};
