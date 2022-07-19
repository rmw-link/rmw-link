import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{e}from"./app.2a6a1bd2.js";const t={},a=e(`<h1 id="quickjs-modificesana-lai-importetu-rusas-funkcijas-jauns-veids-ka-domat-par-kraken-paplasinasanu" tabindex="-1"><a class="header-anchor" href="#quickjs-modificesana-lai-importetu-rusas-funkcijas-jauns-veids-ka-domat-par-kraken-paplasinasanu" aria-hidden="true">#</a> QuickJS modific\u0113\u0161ana, lai import\u0113tu r\u016Bsas funkcijas - jauns veids, k\u0101 dom\u0101t par Kraken papla\u0161in\u0101\u0161anu</h1><h2 id="koda-repozitorijs" tabindex="-1"><a class="header-anchor" href="#koda-repozitorijs" aria-hidden="true">#</a> Koda repozitorijs</h2><ul><li><a href="https://github.com/rmw-lib/quickjs-rust" target="_blank" rel="noopener noreferrer">github</a></li><li><a href="https://gitee.com/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">gitee</a></li><li><a href="https://gitflic.ru/project/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">gitflic</a></li><li><a href="https://bitbucket.org/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">bitbucket</a></li></ul><h2 id="pirmsakumi" tabindex="-1"><a class="header-anchor" href="#pirmsakumi" aria-hidden="true">#</a> Pirms\u0101kumi</h2><p><a href="https://openkraken.com" target="_blank" rel="noopener noreferrer">Kraken</a> ir augstas veiktsp\u0113jas t\u012Bmek\u013Ca atveido\u0161anas r\u012Bks, kura pamat\u0101 ir <code>Flutter</code>, kas izmanto <a href="https://github.com/openkraken/kraken/tree/main/bridge/third_party/quickjs" target="_blank" rel="noopener noreferrer">quickjs</a> k\u0101 skriptu r\u012Bku.</p><p>Es grib\u0113ju uzrakst\u012Bt da\u017Eus Kraken papla\u0161in\u0101jumus, izmantojot <code>rust</code>.</p><p>Kraken <a href="https://openkraken.com/guide/advanced/custom-js-api" target="_blank" rel="noopener noreferrer">atbalsta papla\u0161in\u0101jumu rakst\u012B\u0161anu, izmantojot <code>dart</code></a> .</p><p>Izmantojot <a href="https://github.com/fzyzcjy/flutter_rust_bridge" target="_blank" rel="noopener noreferrer"><code>flutter_rust_bridge</code></a> <code>rust</code> un <code>dart</code>.</p><p>Apvienojot \u0161os divus punktus, nav gr\u016Bti uzrakst\u012Bt Kraken papla\u0161in\u0101jumus, izmantojot <code>rust</code>.<br> Tom\u0113r \u0161\u012B risin\u0101juma pieskait\u0101m\u0101s izmaksas ir augstas, jo <code>dart</code> izsauc <code>rust</code>, bet <code>quickjs</code> izsauc <code>dart</code>, savuk\u0101rt izsauc .</p><p>No otras puses, lai gan <code>rust</code> kopiena ir <a href="https://github.com/DelSkayn/rquickjs" target="_blank" rel="noopener noreferrer"><code>rquickjs</code></a> \u0161\u0101di izsaukumi uz <code>quickjs</code> bibliot\u0113ku vietn\u0113 <code>rust</code>.<br> Tom\u0113r tie izsauc <code>quickjs</code>, nevis iegulda <code>quickjs</code>, un tos nevar izmantot burvju <code>quickjs</code>.</p><p>\u0160aj\u0101 datub\u0101z\u0113 esmu ieviesis jaunu risin\u0101jumu: tie\u0161i modific\u0113jot <code>quickjs</code> pirmkodu, lai atbalst\u012Btu <code>rust</code> papla\u0161in\u0101jumu.</p><p>Tas ir visp\u0101r\u012Bgs risin\u0101jums, ko var izmantot ne tikai Kraken modific\u0113\u0161anai, bet ar\u012B visiem karkasiem un bibliot\u0113k\u0101m, kur\u0101s ir iestr\u0101d\u0101ts <code>quickjs</code>.</p><h2 id="demonstrejums" tabindex="-1"><a class="header-anchor" href="#demonstrejums" aria-hidden="true">#</a> Demonstr\u0113jums</h2><p>Test.js kods ir \u0161\u0101ds:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>const try_run = (func, ...args) =&gt; {
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
</code></pre></div><p>Palaist <code>./quickjs/qjs test.js</code>, izejas :</p><div class="language-text ext-text"><pre class="language-text"><code>export from rust : fib,sleep
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
</code></pre></div><h3 id="fib-ieviesana-rusas-sistema" tabindex="-1"><a class="header-anchor" href="#fib-ieviesana-rusas-sistema" aria-hidden="true">#</a> Fib ievie\u0161ana r\u016Bsas sist\u0113m\u0101</h3><p>Fib funkcija import\u0113ta js ir no <code>rust/src/export/fib.rs</code> un kods ir \u0161\u0101ds:</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>Pa\u0161laik proced\u016Bras makro <code>#[js]</code> tikai pievieno konstantu <code>fib_args_len</code>, kas nor\u0101da funkcijas argumentu skaitu.</p><p>N\u0101kotn\u0113 var uzrakst\u012Bt proced\u016Bras makro <code>./rust_macro</code>, lai nodro\u0161in\u0101tu piln\u012Bb\u0101 autom\u0101tisku funkciju eksport\u0113\u0161anu.</p><h3 id="miega-funkcijas-ieviesana-rust-sistema" tabindex="-1"><a class="header-anchor" href="#miega-funkcijas-ieviesana-rust-sistema" aria-hidden="true">#</a> Miega funkcijas ievie\u0161ana rust sist\u0113m\u0101</h3><p>Miega funkcija import\u0113ta js ir no <code>rust/src/export/sleep.rs</code> un kods ir \u0161\u0101ds:</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>K\u0101 redzams iepriek\u0161, visas eksport\u0113t\u0101s funkcijas ir defin\u0113tas direktorij\u0101 <code>./rust/src/export</code>. \u0160\u012B direktorija <code>mod.rs</code> tiek autom\u0101tiski \u0123ener\u0113ta, kad tiek palaists <code>./rust/build.xsh</code>, eksport\u0113jot visus taj\u0101 eso\u0161os <code>.rs</code> failus.</p><h3 id="js-ienakoso-parametru-nolasisana-un-apstiprinasana" tabindex="-1"><a class="header-anchor" href="#js-ienakoso-parametru-nolasisana-un-apstiprinasana" aria-hidden="true">#</a> js ien\u0101ko\u0161o parametru nolas\u012B\u0161ana un apstiprin\u0101\u0161ana</h3><p>Parametri tiek nolas\u012Bti un apstiprin\u0101ti vietn\u0113 <code>src/js/arg.rs</code>, izmantojot \u0161\u0101du kodu :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>Pa\u0161laik tiek p\u0101rbaud\u012Bts tikai argumentu skaits un nolas\u012Bts i64 tips.</p><p>Varat pievienot \u0161\u012Bs funkcijas p\u0113c vajadz\u012Bbas, skatiet <a href="https://docs.rs/qjs-sys/0.1.2/qjs_sys/" target="_blank" rel="noopener noreferrer">qjs_sys</a> funkcijas, kas s\u0101kas ar <code>JS_To</code>.</p><h3 id="datu-tipa-konvertesana-no-rusas-uz-js" tabindex="-1"><a class="header-anchor" href="#datu-tipa-konvertesana-no-rusas-uz-js" aria-hidden="true">#</a> Datu tipa konvert\u0113\u0161ana no r\u016Bsas uz js</h3><p>Tipa konvert\u0113\u0161ana tiek veikta vietn\u0113 <code>src/js/val.rs</code>, izmantojot \u0161\u0101du kodu :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>P\u0101rv\u0113r\u0161anai no <code>None</code>, <code>()</code>, <code>i64</code>un CString uz <code>js</code> ir defin\u0113ti tikai \u010Detri tipi. Varat pievienot tik daudz, cik v\u0113laties.</p><p>Vair\u0101k datu tipu var deklar\u0113t <a href="https://docs.rs/qjs-sys/0.1.2/qjs_sys/" target="_blank" rel="noopener noreferrer">qjs_sys</a> funkcij\u0101s, s\u0101kot ar <code>JS_New</code>.</p><h2 id="izstrades-vide" tabindex="-1"><a class="header-anchor" href="#izstrades-vide" aria-hidden="true">#</a> Izstr\u0101des vide</h2><p>Es izstr\u0101d\u0101ju uz Apple kl\u0113pjdatora, r\u016Bsas izmanto 1.62.0-nightly.</p><p>Vispirms instal\u0113t <a href="https://direnv.net" target="_blank" rel="noopener noreferrer">direnv</a>, dodieties uz direktoriju un <code>direnv allow</code> uz br\u012Bdi</p><p>Instal\u0113jiet python3, p\u0113c tam <code>pip3 install -r ./requirements.txt</code></p><p>palaist <code>./build.xsh</code>, lai kompil\u0113tu un palaistu demo versiju.</p><p>P\u0113c noklus\u0113juma ofici\u0101lais quickjs repozitorijs tiks klon\u0113ts, ja v\u0113laties main\u012Bt quickjs Kraken repozitorij\u0101, vispirms</p><p><code>git clone --recursive git@github.com:openkraken/kraken.git --depth=1</code></p><p>p\u0113c tam veiciet \u0161\u0101das darb\u012Bbas</p><div class="language-bash ext-sh"><pre class="language-bash"><code>rm -rf quickjs
ln -s ../kraken/bridge/third_party/quickjs .
</code></pre></div><p>Visbeidzot, atk\u0101rtoti palaidiet <code>./build.xsh</code></p><h2 id="kataloga-struktura" tabindex="-1"><a class="header-anchor" href="#kataloga-struktura" aria-hidden="true">#</a> Kataloga strukt\u016Bra</h2><ul><li><p><code>./quickjs_rust</code><br> QuickJS koda c-faila modific\u0113\u0161ana</p></li><li><p><code>./quickjs_ffi</code><br> Eksport\u0113t funkcijas no <code>quickjs</code> galvenes faila uz <code>rust</code></p></li><li><p><code>./rust</code><br> Izmantojiet <code>rust</code>, lai \u012Bstenotu <code>quickjs</code> funkcijas.</p><ul><li><code>./rust/src/qjs.rs</code><br> Asinhrono izsaukumu \u012Bsteno\u0161ana. T\u0101 k\u0101 <code>quickjs</code> ir vienpavediens, funkciju izsaukumi, kas saist\u012Bti ar <code>quckjs</code>, tiek rakst\u012Bti galvenaj\u0101 pavedien\u0101.</li></ul></li><li><p><code>./rust_macro</code><br><code>rust</code> Proced\u016Bras makro ievie\u0161ana <code>#[js]</code></p><p>N\u0101kotn\u0113 skatiet <a href="https://github.com/second-state/wasmedge-quickjs/blob/70efe8520dc65636cb81b7225e2a6dae47cfad49/src/quickjs_sys/mod.rs#L122" target="_blank" rel="noopener noreferrer">wasmedge-quickjs</a>, lai autom\u0101tiski eksport\u0113tu rust funkcijas uz js funkcij\u0101m. <a href="https://github.com/second-state/wasmedge-quickjs/blob/70efe8520dc65636cb81b7225e2a6dae47cfad49/src/quickjs_sys/mod.rs#L122" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 JsFunctionTrampoline</a></p></li></ul><h2 id="ekas-skriptu-veidosana-build-xsh" tabindex="-1"><a class="header-anchor" href="#ekas-skriptu-veidosana-build-xsh" aria-hidden="true">#</a> \u0112kas skriptu veido\u0161ana <code>build.xsh</code></h2><p>Bez liekas kav\u0113\u0161an\u0101s \u0137ersimies tie\u0161i pie <code>build.xsh</code> izveides skripta avota koda.</p><div class="language-xonsh ext-xonsh"><pre class="language-xonsh"><code>#!/usr/bin/env xonsh

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
</code></pre></div><h2 id="principa-skaidrojums" tabindex="-1"><a class="header-anchor" href="#principa-skaidrojums" aria-hidden="true">#</a> Principa skaidrojums</h2><h3 id="quickjs-rust-patch-py" tabindex="-1"><a class="header-anchor" href="#quickjs-rust-patch-py" aria-hidden="true">#</a> <code>quickjs_rust/patch.py</code></h3><p>Palai\u017Eot <code>./quickjs_rust/patch.py</code>, tiks veiktas nelielas izmai\u0146as <code>quickjs</code> avota kod\u0101.</p><p>Viena no funkcij\u0101m <code>JS_AddRust</code> tiek izmantota, lai injic\u0113tu rust moduli.</p><p><code>rust_run</code> tiek ievad\u012Bts <code>JS_ExecutePendingJob</code>, lai izsauktu asinhron\u0101s funkcijas.</p><p>T\u0101l\u0101k ir par\u0101d\u012Bts visu izmai\u0146u ekr\u0101n\u0161\u0101vi\u0146\u0161:</p><p><img src="//irmw.gumlet.io/ep2Xgg.png" alt=""></p><h3 id="quickjs-rust-h" tabindex="-1"><a class="header-anchor" href="#quickjs-rust-h" aria-hidden="true">#</a> <code>quickjs_rust.h</code></h3><p>No iepriek\u0161 min\u0113taj\u0101m izmai\u0146\u0101m redzams, ka esam ieviesu\u0161i jaunu galvenes failu <code>quickjs_rust.h</code> ar \u0161\u0101du kodu.</p><div class="language-c ext-c"><pre class="language-c"><code>#ifndef QUICKJS_RUST_H
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
</code></pre></div><h3 id="rust-rust-h" tabindex="-1"><a class="header-anchor" href="#rust-rust-h" aria-hidden="true">#</a> <code>rust/rust.h</code></h3><p>Var redz\u0113t, ka <code>quickjs_rust/quickjs_rust.h</code> ievie\u0161 <code>quickjs_rust/js_rust_funcs.h</code>, kas tiek autom\u0101tiski \u0123ener\u0113ts no rust eksport\u0113\u0161anas funkcijas galvenes faila <code>rust/rust.h</code>, un to nevajadz\u0113tu main\u012Bt ar rok\u0101m.</p><p>Un <code>rust/rust.h</code> tiek \u0123ener\u0113ts, izsaucot cbindgen no <code>./rust/build.xsh</code>.</p><h3 id="rust-build-xsh" tabindex="-1"><a class="header-anchor" href="#rust-build-xsh" aria-hidden="true">#</a> <code>rust/build.xsh</code></h3><div class="language-xonsh ext-xonsh"><pre class="language-xonsh"><code>#!/usr/bin/env xonsh

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
</code></pre></div><h2 id="attistibas-piezimes" tabindex="-1"><a class="header-anchor" href="#attistibas-piezimes" aria-hidden="true">#</a> Att\u012Bst\u012Bbas piez\u012Bmes</h2><h3 id="quickjs-ffi" tabindex="-1"><a class="header-anchor" href="#quickjs-ffi" aria-hidden="true">#</a> <code>quickjs_ffi</code></h3><p>Kods no <a href="https://raw.githubusercontent.com/taskie/quijine/main/quijine_core/src/ffi.rs" target="_blank" rel="noopener noreferrer">quijine/main/quijine_core/src/ffi.rs</a></p><p>ar neliel\u0101m izmai\u0146\u0101m, aizst\u0101jot</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>uz</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><h3 id="undefined-symbols-for-architecture-x86-64-js-toint32" tabindex="-1"><a class="header-anchor" href="#undefined-symbols-for-architecture-x86-64-js-toint32" aria-hidden="true">#</a> <code>Undefined symbols for architecture x86_64: &quot;_JS_ToInt32&quot;</code></h3><p>Main\u012Bt &quot;. /rust/Cargo.toml&#39; \u0161\u0101di, saglab\u0101jot tikai staticlib</p><div class="language-toml ext-toml"><pre class="language-toml"><code>[lib]
#crate-type = [&quot;lib&quot;, &quot;cdylib&quot;, &quot;staticlib&quot;]
crate-type = [&quot;staticlib&quot;]
</code></pre></div><h2 id="atsauces" tabindex="-1"><a class="header-anchor" href="#atsauces" aria-hidden="true">#</a> Atsauces</h2><ol start="0"><li>No <code>JS</code> dzin\u0113ja uz <code>JS</code> izpildes laiku <a href="https://github.com/doodlewind/blog/blob/master/source/_posts/js-engine-to-js-runtime-1.md" target="_blank" rel="noopener noreferrer">(aug\u0161\u0101)</a> <a href="https://github.com/doodlewind/blog/blob/master/source/_posts/js-engine-to-js-runtime-2.md" target="_blank" rel="noopener noreferrer">(apak\u0161\u0101)</a></li><li><a href="https://github.com/quickjs-zh/QuickJS/wiki/%E4%BD%BF%E7%94%A8C%E8%AF%AD%E8%A8%80%E4%B8%BAQuickJS%E5%BC%80%E5%8F%91%E4%B8%80%E4%B8%AA%E5%8E%9F%E7%94%9F%E6%A8%A1%E5%9D%97" target="_blank" rel="noopener noreferrer">Viet\u0113j\u0101 modu\u013Ca izveide <code>QuickJS</code> lietojumprogramm\u0101 C</a></li><li><a href="https://wasmedge.org/book/en/dev/js/rust.html" target="_blank" rel="noopener noreferrer">Rust izmanto\u0161ana, lai \u012Bstenotu JS API</a></li><li><a href="https://github.com/Kozova1/quickjs-example" target="_blank" rel="noopener noreferrer">QuickJS piem\u0113ri</a></li><li><a href="https://rust-lang.github.io/rust-bindgen/" target="_blank" rel="noopener noreferrer">rust-bindgen</a></li><li><a href="https://calbertts.medium.com/how-to-create-asynchronous-apis-for-quickjs-8aca5488bb2e" target="_blank" rel="noopener noreferrer">K\u0101 izveidot asinhrono kodu vietn\u0113 <code>QuickJS</code></a></li><li><a href="https://github.com/DelSkayn/rquickjs/blob/master/core/src/context/ctx.rs#L104" target="_blank" rel="noopener noreferrer">rquickjs \u2192 JS_NewPromiseCapability</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/8a65582265ecdd3171380feebf56b3bb8c34d183/src/quickjs_sys/mod.rs#L515" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 new_promise</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/da887752fdc9c36aca0f4b7499c5b115862ce771/src/internal_module/wasi_net_module.rs#L46" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 JsMetod</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/8a65582265ecdd3171380feebf56b3bb8c34d183/src/quickjs_sys/mod.rs#L756" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 zvans</a></li><li><a href="https://mp.weixin.qq.com/s/BKto24ItwXbeHon_LaF_0w" target="_blank" rel="noopener noreferrer">Nepaman\u0101ms slazds - sl\u0113dzenes Rust</a></li></ol><h2 id="par" tabindex="-1"><a class="header-anchor" href="#par" aria-hidden="true">#</a> Par</h2><p>\u0160is projekts ir da\u013Ca no <strong>rmw.link ( <a href="//rmw.link" target="_blank" rel="noopener noreferrer">rmw.link</a></strong> ) koda projekta.</p><p><img src="https://raw.githubusercontent.com/rmw-link/logo/master/rmw.red.bg.svg" alt="rmw.link"></p>`,81);function r(s,i){return a}var c=n(t,[["render",r],["__file","2022-04-29-quickjs-rust.html.vue"]]);export{c as default};
