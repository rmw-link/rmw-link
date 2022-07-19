import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{e}from"./app.87d927ab.js";const t={},a=e(`<h1 id="quickjs-n-muokkaaminen-ruosteen-funktioiden-tuomiseksi-uusi-tapa-ajatella-krakenin-laajentamista" tabindex="-1"><a class="header-anchor" href="#quickjs-n-muokkaaminen-ruosteen-funktioiden-tuomiseksi-uusi-tapa-ajatella-krakenin-laajentamista" aria-hidden="true">#</a> Quickjs:n muokkaaminen ruosteen funktioiden tuomiseksi - uusi tapa ajatella Krakenin laajentamista.</h1><h2 id="koodivarasto" tabindex="-1"><a class="header-anchor" href="#koodivarasto" aria-hidden="true">#</a> Koodivarasto</h2><ul><li><a href="https://github.com/rmw-lib/quickjs-rust" target="_blank" rel="noopener noreferrer">github</a></li><li><a href="https://gitee.com/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">gitee</a></li><li><a href="https://gitflic.ru/project/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">gitflic</a></li><li><a href="https://bitbucket.org/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">bitbucket</a></li></ul><h2 id="syntyprosessi" tabindex="-1"><a class="header-anchor" href="#syntyprosessi" aria-hidden="true">#</a> Syntyprosessi</h2><p><a href="https://openkraken.com" target="_blank" rel="noopener noreferrer">Kraken</a> on suorituskykyinen web-render\xF6intimoottori, joka perustuu osoitteeseen <code>Flutter</code> ja k\xE4ytt\xE4\xE4 skriptausmoottorina <a href="https://github.com/openkraken/kraken/tree/main/bridge/third_party/quickjs" target="_blank" rel="noopener noreferrer">quickjs:\xE4\xE4</a>.</p><p>Halusin kirjoittaa joitakin laajennuksia Krakeniin k\xE4ytt\xE4en <code>rust</code>.</p><p>Kraken <a href="https://openkraken.com/guide/advanced/custom-js-api" target="_blank" rel="noopener noreferrer">tukee laajennusten kirjoittamista osoitteessa <code>dart</code></a> .</p><p>K\xE4ytt\xE4m\xE4ll\xE4 <a href="https://github.com/fzyzcjy/flutter_rust_bridge" target="_blank" rel="noopener noreferrer"><code>flutter_rust_bridge</code></a> <code>rust</code> ja <code>dart</code>.</p><p>Kun n\xE4m\xE4 kaksi kohtaa yhdistet\xE4\xE4n, ei ole vaikeaa kirjoittaa Kraken-laajennuksia k\xE4ytt\xE4m\xE4ll\xE4 <code>rust</code>.<br> T\xE4m\xE4n ratkaisun suorituskykyyn liittyv\xE4t kustannukset tuntuvat kuitenkin suurilta, sill\xE4 <code>dart</code> kutsuu <code>rust</code> ja <code>quickjs</code> kutsuu <code>dart</code>, mik\xE4 aiheuttaa suorituskyvyn heikkenemist\xE4.</p><p>Toisaalta, vaikka <code>rust</code> -yhteis\xF6 on ollut <a href="https://github.com/DelSkayn/rquickjs" target="_blank" rel="noopener noreferrer"><code>rquickjs</code></a> t\xE4llaiset kutsut <code>quickjs</code> -kirjastoon osoitteessa <code>rust</code>.<br> Ne kuitenkin kutsuvat <code>quickjs</code> sen sijaan, ett\xE4 ne upottaisivat <code>quickjs</code>, eik\xE4 niit\xE4 voida k\xE4ytt\xE4\xE4 <code>quickjs</code> taikomiseen.</p><p>T\xE4ss\xE4 koodipohjassa olen toteuttanut uuden ratkaisun: <code>quickjs</code> l\xE4hdekoodia on muutettu suoraan tukemaan <code>rust</code> -laajennusta.</p><p>T\xE4m\xE4 on yleinen ratkaisu, jota voidaan k\xE4ytt\xE4\xE4 Krakenin muokkaamisen lis\xE4ksi my\xF6s kaikkiin kehyksiin ja kirjastoihin, jotka upottavat <code>quickjs</code>.</p><h2 id="esittely" tabindex="-1"><a class="header-anchor" href="#esittely" aria-hidden="true">#</a> Esittely</h2><p>Test.js-koodi on seuraava :</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>const try_run = (func, ...args) =&gt; {
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
</code></pre></div><p>Suorita <code>./quickjs/qjs test.js</code>, tulos :</p><div class="language-text ext-text"><pre class="language-text"><code>export from rust : fib,sleep
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
</code></pre></div><h3 id="fib-n-toteuttaminen-ruosteessa" tabindex="-1"><a class="header-anchor" href="#fib-n-toteuttaminen-ruosteessa" aria-hidden="true">#</a> Fib:n toteuttaminen ruosteessa</h3><p>Js:ss\xE4 tuotu fib-funktio on per\xE4isin osoitteesta <code>rust/src/export/fib.rs</code> ja koodi on seuraava :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>T\xE4ll\xE4 hetkell\xE4 proseduurimakro <code>#[js]</code> lis\xE4\xE4 vain vakion <code>fib_args_len</code>, joka m\xE4\xE4ritt\xE4\xE4 funktion argumenttien m\xE4\xE4r\xE4n.</p><p>Tulevaisuudessa voidaan kirjoittaa menettelymakro <code>./rust_macro</code>, joka mahdollistaa t\xE4ysin automaattisen toimintojen viennin.</p><h3 id="unifunktion-toteuttaminen-ruosteessa" tabindex="-1"><a class="header-anchor" href="#unifunktion-toteuttaminen-ruosteessa" aria-hidden="true">#</a> Unifunktion toteuttaminen ruosteessa</h3><p>Js:ss\xE4 tuotu sleep-funktio on per\xE4isin osoitteesta <code>rust/src/export/sleep.rs</code> ja koodi on seuraava :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>Kuten yll\xE4 n\xE4kyy, kaikki viedyt funktiot on m\xE4\xE4ritelty hakemistossa <code>./rust/src/export</code>. T\xE4m\xE4 hakemisto <code>mod.rs</code> luodaan automaattisesti, kun <code>./rust/build.xsh</code> ajetaan, jolloin kaikki <code>.rs</code> -tiedostot vied\xE4\xE4n sen alle.</p><h3 id="js-n-saapuvien-parametrien-lukeminen-ja-validointi" tabindex="-1"><a class="header-anchor" href="#js-n-saapuvien-parametrien-lukeminen-ja-validointi" aria-hidden="true">#</a> Js:n saapuvien parametrien lukeminen ja validointi</h3><p>Parametrit luetaan ja validoidaan osoitteessa <code>src/js/arg.rs</code> seuraavalla koodilla :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>T\xE4ll\xE4 hetkell\xE4 tarkistetaan vain argumenttien lukum\xE4\xE4r\xE4 ja luetaan i64-tyyppi.</p><p>Voit lis\xE4t\xE4 n\xE4it\xE4 funktioita tarpeen mukaan, katso <a href="https://docs.rs/qjs-sys/0.1.2/qjs_sys/" target="_blank" rel="noopener noreferrer">qjs_sys</a>:n funktiot alkaen osoitteesta <code>JS_To</code>.</p><h3 id="tietotyypin-muuntaminen-rustista-js-aan" tabindex="-1"><a class="header-anchor" href="#tietotyypin-muuntaminen-rustista-js-aan" aria-hidden="true">#</a> Tietotyypin muuntaminen rustista js:\xE4\xE4n</h3><p>Tyyppimuunnos tehd\xE4\xE4n osoitteessa <code>src/js/val.rs</code> seuraavalla koodilla :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>Vain nelj\xE4 tyyppi\xE4 on m\xE4\xE4ritelty muunnosta varten <code>None</code>, <code>()</code>, <code>i64</code>ja CStringist\xE4 <code>js</code>. Voit lis\xE4t\xE4 niit\xE4 niin monta kuin haluat.</p><p>Lis\xE4\xE4 tietotyyppej\xE4 voidaan ilmoittaa <a href="https://docs.rs/qjs-sys/0.1.2/qjs_sys/" target="_blank" rel="noopener noreferrer">qjs_sys</a>:n funktioissa, jotka alkavat osoitteesta <code>JS_New</code>.</p><h2 id="kehitysymparisto" tabindex="-1"><a class="header-anchor" href="#kehitysymparisto" aria-hidden="true">#</a> Kehitysymp\xE4rist\xF6</h2><p>Kehit\xE4n Applen kannettavalla tietokoneella, joka k\xE4ytt\xE4\xE4 1.62.0-nightly-versiota.</p><p>Asenna ensin <a href="https://direnv.net" target="_blank" rel="noopener noreferrer">direnv</a>, mene hakemistoon ja <code>direnv allow</code> jonkin aikaa.</p><p>Asenna python3, sitten <code>pip3 install -r ./requirements.txt</code></p><p>run <code>./build.xsh</code> k\xE4\xE4nt\xE4\xE4 ja ajaa demo demo</p><p>Oletusarvoisesti virallinen quickjs-repository kloonataan, jos haluat muuttaa quickjs:\xE4\xE4 Kraken-repositoryyn, ensin</p><p><code>git clone --recursive git@github.com:openkraken/kraken.git --depth=1</code></p><p>toimi seuraavasti</p><div class="language-bash ext-sh"><pre class="language-bash"><code>rm -rf quickjs
ln -s ../kraken/bridge/third_party/quickjs .
</code></pre></div><p>Suorita lopuksi uudelleen <code>./build.xsh</code></p><h2 id="hakemiston-rakenne" tabindex="-1"><a class="header-anchor" href="#hakemiston-rakenne" aria-hidden="true">#</a> Hakemiston rakenne</h2><ul><li><p><code>./quickjs_rust</code><br> Quickjs-koodin c-tiedoston muuttaminen</p></li><li><p><code>./quickjs_ffi</code><br> Vie funktiot <code>quickjs</code> otsikkotiedostosta osoitteeseen <code>rust</code></p></li><li><p><code>./rust</code><br> K\xE4yt\xE4 <code>rust</code> toteuttamaan <code>quickjs</code>:n toiminnot.</p><ul><li><code>./rust/src/qjs.rs</code><br> Asynkronisten kutsujen toteuttaminen. Koska <code>quickjs</code> on yksis\xE4ikeinen, toimintokutsut, joissa on mukana <code>quckjs</code>, kirjoitetaan p\xE4\xE4s\xE4ikeess\xE4.</li></ul></li><li><p><code>./rust_macro</code><br><code>rust</code> Menettelyn toteuttaminen makro <code>#[js]</code></p><p>Tulevaisuudessa katso <a href="https://github.com/second-state/wasmedge-quickjs/blob/70efe8520dc65636cb81b7225e2a6dae47cfad49/src/quickjs_sys/mod.rs#L122" target="_blank" rel="noopener noreferrer">wasmedge-quickjs</a>, jotta rust-funktiot voidaan vied\xE4 automaattisesti js-funktioiksi. <a href="https://github.com/second-state/wasmedge-quickjs/blob/70efe8520dc65636cb81b7225e2a6dae47cfad49/src/quickjs_sys/mod.rs#L122" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 JsFunctionTrampoline</a></p></li></ul><h2 id="skriptien-rakentaminen-build-xsh" tabindex="-1"><a class="header-anchor" href="#skriptien-rakentaminen-build-xsh" aria-hidden="true">#</a> Skriptien rakentaminen <code>build.xsh</code></h2><p>Pidemmitt\xE4 puheitta siirrymme suoraan <code>build.xsh</code> build-skriptin l\xE4hdekoodiin.</p><div class="language-xonsh ext-xonsh"><pre class="language-xonsh"><code>#!/usr/bin/env xonsh

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
</code></pre></div><h2 id="periaatteen-selitys" tabindex="-1"><a class="header-anchor" href="#periaatteen-selitys" aria-hidden="true">#</a> Periaatteen selitys</h2><h3 id="quickjs-rust-patch-py" tabindex="-1"><a class="header-anchor" href="#quickjs-rust-patch-py" aria-hidden="true">#</a> <code>quickjs_rust/patch.py</code></h3><p>K\xE4ynnist\xE4m\xE4ll\xE4 <code>./quickjs_rust/patch.py</code> tehd\xE4\xE4n joitakin pieni\xE4 muutoksia <code>quickjs</code> -l\xE4hdekoodiin.</p><p>Yksi funktioista <code>JS_AddRust</code> k\xE4ytet\xE4\xE4n ruoste-moduulin ruiskuttamiseen.</p><p><code>rust_run</code> lis\xE4t\xE4\xE4n osoitteeseen <code>JS_ExecutePendingJob</code> asynkronisten toimintojen kutsumiseksi.</p><p>Alla on kuvakaappaus kaikista muutoksista:</p><p><img src="//irmw.gumlet.io/ep2Xgg.png" alt=""></p><h3 id="quickjs-rust-h" tabindex="-1"><a class="header-anchor" href="#quickjs-rust-h" aria-hidden="true">#</a> <code>quickjs_rust.h</code></h3><p>Yll\xE4 olevista muutoksista n\xE4et, ett\xE4 olemme ottaneet k\xE4ytt\xF6\xF6n uuden otsikkotiedoston <code>quickjs_rust.h</code>, jossa on seuraava koodi</p><div class="language-c ext-c"><pre class="language-c"><code>#ifndef QUICKJS_RUST_H
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
</code></pre></div><h3 id="rust-rust-h" tabindex="-1"><a class="header-anchor" href="#rust-rust-h" aria-hidden="true">#</a> <code>rust/rust.h</code></h3><p>N\xE4et, ett\xE4 <code>quickjs_rust/quickjs_rust.h</code> esittelee <code>quickjs_rust/js_rust_funcs.h</code>, joka luodaan automaattisesti rust-vientifunktion otsikkotiedostosta <code>rust/rust.h</code>, eik\xE4 sit\xE4 pit\xE4isi muuttaa k\xE4sin.</p><p>Ja <code>rust/rust.h</code> luodaan kutsumalla cbindgen osoitteesta <code>./rust/build.xsh</code>.</p><h3 id="rust-build-xsh" tabindex="-1"><a class="header-anchor" href="#rust-build-xsh" aria-hidden="true">#</a> <code>rust/build.xsh</code></h3><div class="language-xonsh ext-xonsh"><pre class="language-xonsh"><code>#!/usr/bin/env xonsh

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
</code></pre></div><h2 id="kehitysmuistiinpanot" tabindex="-1"><a class="header-anchor" href="#kehitysmuistiinpanot" aria-hidden="true">#</a> Kehitysmuistiinpanot</h2><h3 id="quickjs-ffi" tabindex="-1"><a class="header-anchor" href="#quickjs-ffi" aria-hidden="true">#</a> <code>quickjs_ffi</code></h3><p>Koodi tiedostosta <a href="https://raw.githubusercontent.com/taskie/quijine/main/quijine_core/src/ffi.rs" target="_blank" rel="noopener noreferrer">quijine/main/quijine_core/src/ffi.</a> rs</p><p>pienin muutoksin, korvaten</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>osoitteeseen</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><h3 id="undefined-symbols-for-architecture-x86-64-js-toint32" tabindex="-1"><a class="header-anchor" href="#undefined-symbols-for-architecture-x86-64-js-toint32" aria-hidden="true">#</a> <code>Undefined symbols for architecture x86_64: &quot;_JS_ToInt32&quot;</code></h3><p>Muokkaa &#39;. /rust/Cargo.toml&#39; seuraavasti, s\xE4ilytt\xE4en vain staticlib:n</p><div class="language-toml ext-toml"><pre class="language-toml"><code>[lib]
#crate-type = [&quot;lib&quot;, &quot;cdylib&quot;, &quot;staticlib&quot;]
crate-type = [&quot;staticlib&quot;]
</code></pre></div><h2 id="viitteet" tabindex="-1"><a class="header-anchor" href="#viitteet" aria-hidden="true">#</a> Viitteet</h2><ol start="0"><li><code>JS</code> -moottorista <code>JS</code> -ajoaikaan <a href="https://github.com/doodlewind/blog/blob/master/source/_posts/js-engine-to-js-runtime-1.md" target="_blank" rel="noopener noreferrer">(ylh\xE4\xE4ll\xE4)</a> <a href="https://github.com/doodlewind/blog/blob/master/source/_posts/js-engine-to-js-runtime-2.md" target="_blank" rel="noopener noreferrer">(alhaalla)</a></li><li><a href="https://github.com/quickjs-zh/QuickJS/wiki/%E4%BD%BF%E7%94%A8C%E8%AF%AD%E8%A8%80%E4%B8%BAQuickJS%E5%BC%80%E5%8F%91%E4%B8%80%E4%B8%AA%E5%8E%9F%E7%94%9F%E6%A8%A1%E5%9D%97" target="_blank" rel="noopener noreferrer">Natiivimoduulin kehitt\xE4minen <code>QuickJS</code>:lle C-kielell\xE4</a></li><li><a href="https://wasmedge.org/book/en/dev/js/rust.html" target="_blank" rel="noopener noreferrer">K\xE4yt\xE4 Rustia JS API:n toteuttamiseen</a></li><li><a href="https://github.com/Kozova1/quickjs-example" target="_blank" rel="noopener noreferrer">QuickJS-esimerkkej\xE4</a></li><li><a href="https://rust-lang.github.io/rust-bindgen/" target="_blank" rel="noopener noreferrer">rust-bindgen</a></li><li><a href="https://calbertts.medium.com/how-to-create-asynchronous-apis-for-quickjs-8aca5488bb2e" target="_blank" rel="noopener noreferrer">Miten luoda asynkronista koodia <code>QuickJS</code> varten</a>?</li><li><a href="https://github.com/DelSkayn/rquickjs/blob/master/core/src/context/ctx.rs#L104" target="_blank" rel="noopener noreferrer">rquickjs \u2192 JS_NewPromiseCapability -ominaisuus</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/8a65582265ecdd3171380feebf56b3bb8c34d183/src/quickjs_sys/mod.rs#L515" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 uusi_lupaus</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/da887752fdc9c36aca0f4b7499c5b115862ce771/src/internal_module/wasi_net_module.rs#L46" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 JsMethod</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/8a65582265ecdd3171380feebf56b3bb8c34d183/src/quickjs_sys/mod.rs#L756" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 kutsu</a></li><li><a href="https://mp.weixin.qq.com/s/BKto24ItwXbeHon_LaF_0w" target="_blank" rel="noopener noreferrer">Huomaamaton ansa - lukot Rustissa</a></li></ol><h2 id="tietoja" tabindex="-1"><a class="header-anchor" href="#tietoja" aria-hidden="true">#</a> Tietoja</h2><p>T\xE4m\xE4 projekti on osa <strong>rmw.link ( <a href="//rmw.link" target="_blank" rel="noopener noreferrer">rmw.link</a></strong> ) -koodiprojektia.</p><p><img src="https://raw.githubusercontent.com/rmw-link/logo/master/rmw.red.bg.svg" alt="rmw.link"></p>`,81);function r(s,i){return a}var c=n(t,[["render",r],["__file","2022-04-29-quickjs-rust.html.vue"]]);export{c as default};
