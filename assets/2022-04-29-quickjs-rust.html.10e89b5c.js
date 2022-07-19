import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{e}from"./app.2a6a1bd2.js";const t={},r=e(`<h1 id="quickjs\u3092\u6539\u9020\u3057\u3066rust\u95A2\u6570\u3092\u30A4\u30F3\u30DB\u309A\u30FC\u30C8\u3059\u308B-kraken\u3092\u62E1\u5F35\u3059\u308B\u65B0\u3057\u3044\u8003\u3048\u65B9" tabindex="-1"><a class="header-anchor" href="#quickjs\u3092\u6539\u9020\u3057\u3066rust\u95A2\u6570\u3092\u30A4\u30F3\u30DB\u309A\u30FC\u30C8\u3059\u308B-kraken\u3092\u62E1\u5F35\u3059\u308B\u65B0\u3057\u3044\u8003\u3048\u65B9" aria-hidden="true">#</a> Quickjs\u3092\u6539\u9020\u3057\u3066Rust\u95A2\u6570\u3092\u30A4\u30F3\u30DD\u30FC\u30C8\u3059\u308B - Kraken\u3092\u62E1\u5F35\u3059\u308B\u65B0\u3057\u3044\u8003\u3048\u65B9</h1><h2 id="\u30B3\u30FC\u30C8\u3099\u4FDD\u7BA1\u5EAB" tabindex="-1"><a class="header-anchor" href="#\u30B3\u30FC\u30C8\u3099\u4FDD\u7BA1\u5EAB" aria-hidden="true">#</a> \u30B3\u30FC\u30C9\u4FDD\u7BA1\u5EAB</h2><ul><li><a href="https://github.com/rmw-lib/quickjs-rust" target="_blank" rel="noopener noreferrer">\u30AE\u30D6\u30B9</a></li><li><a href="https://gitee.com/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">\u30B2\u30C6\u30E2\u30CE</a></li><li><a href="https://gitflic.ru/project/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">\u30AE\u30C8\u30D5\u30EA\u30C3\u30AF</a></li><li><a href="https://bitbucket.org/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">\u30D3\u30C3\u30C8\u30D0\u30B1\u30C3\u30C8</a></li></ul><h2 id="\u5275\u4E16\u8A18" tabindex="-1"><a class="header-anchor" href="#\u5275\u4E16\u8A18" aria-hidden="true">#</a> \u5275\u4E16\u8A18</h2><p><a href="https://openkraken.com" target="_blank" rel="noopener noreferrer">Kraken\u306F</a> \u3001 <code>Flutter</code> \u3001\u30B9\u30AF\u30EA\u30D7\u30C8\u30A8\u30F3\u30B8\u30F3\u3068\u3057\u3066 <a href="https://github.com/openkraken/kraken/tree/main/bridge/third_party/quickjs" target="_blank" rel="noopener noreferrer">quickjs\u3092</a>\u4F7F\u7528\u3057\u305F\u3001\u9AD8\u6027\u80FD\u306AWeb\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u30A8\u30F3\u30B8\u30F3\u3067\u3059\u3002</p><p><code>rust</code> \u3092\u4F7F\u3063\u3066 Kraken \u306E\u62E1\u5F35\u3092\u3044\u304F\u3064\u304B\u66F8\u304D\u305F\u3044\u3068\u601D\u3044\u307E\u3057\u305F\u3002</p><p>Kraken\u306F\u3001 <a href="https://openkraken.com/guide/advanced/custom-js-api" target="_blank" rel="noopener noreferrer"><code>dart</code></a> \u3092\u4F7F\u7528\u3057\u305F\u62E1\u5F35\u6A5F\u80FD\u306E\u66F8\u304D\u8FBC\u307F\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059\u3002</p><p>\u4F7F\u7528\u65B9\u6CD5 <a href="https://github.com/fzyzcjy/flutter_rust_bridge" target="_blank" rel="noopener noreferrer"><code>flutter_rust_bridge</code></a> <code>rust</code> \u3001 <code>dart</code>\u3002</p><p>\u3053\u306E2\u70B9\u3092\u7D44\u307F\u5408\u308F\u305B\u308C\u3070\u3001 <code>rust</code> \u3092\u4F7F\u3063\u3066 Kraken \u306E\u62E1\u5F35\u3092\u66F8\u304F\u3053\u3068\u306F\u96E3\u3057\u304F\u3042\u308A\u307E\u305B\u3093\u3002<br> \u3057\u304B\u3057\u3001\u3053\u306E\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u3001 <code>dart</code> \u304C <code>rust</code> \u3092\u547C\u3073\u51FA\u3059\u969B\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u30DA\u30CA\u30EB\u30C6\u30A3\u3068\u3001<code>quickjs</code> \u304C <code>dart</code> \u3092\u547C\u3073\u51FA\u3059\u969B\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u30DA\u30CA\u30EB\u30C6\u30A3\u304C\u3042\u308B\u305F\u3081\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306E\u30AA\u30FC\u30D0\u30FC\u30D8\u30C3\u30C9\u304C\u5927\u304D\u304F\u611F\u3058\u3089\u308C\u307E\u3059\u3002</p><p>\u4E00\u65B9\u3001 <code>rust</code> \u306E\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u3067\u306F <a href="https://github.com/DelSkayn/rquickjs" target="_blank" rel="noopener noreferrer"><code>rquickjs</code></a> \u3053\u306E\u3088\u3046\u306A\u547C\u3073\u51FA\u3057\u306F\u3001 <code>rust</code> \u306E <code>quickjs</code> \u30E9\u30A4\u30D6\u30E9\u30EA\u306B\u5BFE\u3057\u3066\u884C\u308F\u308C\u307E\u3059\u3002<br> \u3057\u304B\u3057\u3001\u305D\u308C\u3089\u306F <code>quickjs</code>\u3092\u57CB\u3081\u8FBC\u3080\u4EE3\u308F\u308A\u306B <code>quickjs</code> \u3092\u547C\u3073\u51FA\u3057\u3001 <code>quickjs</code> \u306E\u30DE\u30B8\u30C3\u30AF\u306B\u306F\u4F7F\u3048\u307E\u305B\u3093\u3002</p><p>\u3053\u306E\u30B3\u30FC\u30C9\u30D9\u30FC\u30B9\u3067\u306F\u3001 <code>quickjs</code> \u306E\u30BD\u30FC\u30B9\u30B3\u30FC\u30C9\u3092\u76F4\u63A5\u4FEE\u6B63\u3057\u3066\u3001 <code>rust</code> \u62E1\u5F35\u306B\u5BFE\u5FDC\u3055\u305B\u308B\u3068\u3044\u3046\u65B0\u3057\u3044\u89E3\u6C7A\u7B56\u3092\u5B9F\u88C5\u3057\u3066\u3044\u307E\u3059\u3002</p><p>\u3053\u308C\u306F\u3001Kraken\u306E\u6539\u9020\u3060\u3051\u3067\u306A\u304F\u3001 <code>quickjs</code> \u3092\u57CB\u3081\u8FBC\u3080\u3059\u3079\u3066\u306E\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3068\u30E9\u30A4\u30D6\u30E9\u30EA\u306B\u4F7F\u7528\u3067\u304D\u308B\u6C4E\u7528\u7684\u306A\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3067\u3059\u3002</p><h2 id="\u30C6\u3099\u30E2\u306E\u69D8\u5B50" tabindex="-1"><a class="header-anchor" href="#\u30C6\u3099\u30E2\u306E\u69D8\u5B50" aria-hidden="true">#</a> \u30C7\u30E2\u306E\u69D8\u5B50</h2><p>test.js\u306E\u30B3\u30FC\u30C9\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>const try_run = (func, ...args) =&gt; {
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
</code></pre></div><p>\u5B9F\u884C <code>./quickjs/qjs test.js</code>, \u51FA\u529B :</p><div class="language-text ext-text"><pre class="language-text"><code>export from rust : fib,sleep
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
</code></pre></div><h3 id="rust\u3066\u3099\u306Efib\u306E\u5B9F\u88C5" tabindex="-1"><a class="header-anchor" href="#rust\u3066\u3099\u306Efib\u306E\u5B9F\u88C5" aria-hidden="true">#</a> rust\u3067\u306Efib\u306E\u5B9F\u88C5</h3><p>js\u3067\u30A4\u30F3\u30DD\u30FC\u30C8\u3057\u305Ffib\u95A2\u6570\u306F\u3001 <code>rust/src/export/fib.rs</code> \u3001\u30B3\u30FC\u30C9\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059\u3002</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>\u73FE\u5728\u3001\u30D7\u30ED\u30B7\u30FC\u30B8\u30E3\u30DE\u30AF\u30ED <code>#[js]</code> \u306F\u3001\u95A2\u6570\u3078\u306E\u5F15\u6570\u306E\u6570\u3092\u7279\u5B9A\u3059\u308B\u5B9A\u6570 <code>fib_args_len</code>\u3092\u8FFD\u52A0\u3057\u3066\u3044\u308B\u3060\u3051\u3067\u3059\u3002</p><p>\u5C06\u6765\u7684\u306B\u306F\u3001\u30D7\u30ED\u30B7\u30FC\u30B8\u30E3\u30DE\u30AF\u30ED <code>./rust_macro</code> \u3092\u8A18\u8FF0\u3059\u308B\u3053\u3068\u3067\u3001\u5B8C\u5168\u306B\u81EA\u52D5\u3067\u6A5F\u80FD\u3092\u66F8\u304D\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002</p><h3 id="rust\u306E\u30B9\u30EA\u30FC\u30D5\u309A\u6A5F\u80FD\u306E\u5B9F\u88C5" tabindex="-1"><a class="header-anchor" href="#rust\u306E\u30B9\u30EA\u30FC\u30D5\u309A\u6A5F\u80FD\u306E\u5B9F\u88C5" aria-hidden="true">#</a> rust\u306E\u30B9\u30EA\u30FC\u30D7\u6A5F\u80FD\u306E\u5B9F\u88C5</h3><p>js\u3067\u30A4\u30F3\u30DD\u30FC\u30C8\u3057\u305Fsleep\u95A2\u6570\u306F\u3001 <code>rust/src/export/sleep.rs</code> \u3001\u30B3\u30FC\u30C9\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059\u3002</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>\u4E0A\u3067\u898B\u305F\u3088\u3046\u306B\u3001\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u3055\u308C\u305F\u95A2\u6570\u306F\u3059\u3079\u3066\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA <code>./rust/src/export</code> \u3067\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA <code>mod.rs</code> \u306F <code>./rust/build.xsh</code> \u3092\u5B9F\u884C\u3059\u308B\u3068\u81EA\u52D5\u7684\u306B\u751F\u6210\u3055\u308C\u3001\u305D\u306E\u4E0B\u306B\u3059\u3079\u3066\u306E <code>.rs</code> \u30D5\u30A1\u30A4\u30EB\u304C\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3059\u3002</p><h3 id="js\u53D7\u4FE1\u30CF\u309A\u30E9\u30E1\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u3068\u691C\u8A3C" tabindex="-1"><a class="header-anchor" href="#js\u53D7\u4FE1\u30CF\u309A\u30E9\u30E1\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u3068\u691C\u8A3C" aria-hidden="true">#</a> js\u53D7\u4FE1\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u3068\u691C\u8A3C</h3><p>\u30D1\u30E9\u30E1\u30FC\u30BF\u306F\u3001 <code>src/js/arg.rs</code> \u3001\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3067\u8AAD\u307F\u8FBC\u307E\u308C\u3001\u691C\u8A3C\u3055\u308C\u307E\u3059\u3002</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>\u73FE\u5728\u306F\u3001\u5F15\u6570\u306E\u6570\u3060\u3051\u30C1\u30A7\u30C3\u30AF\u3057\u3001i64\u578B\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u3002</p><p>\u3053\u308C\u3089\u306E\u95A2\u6570\u306F\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u8FFD\u52A0\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 <code>JS_To</code> \u304B\u3089\u59CB\u307E\u308B <a href="https://docs.rs/qjs-sys/0.1.2/qjs_sys/" target="_blank" rel="noopener noreferrer">qjs_sys</a> \u306E\u95A2\u6570\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p><h3 id="rust\u304B\u3089js\u3078\u306E\u30C6\u3099\u30FC\u30BF\u578B\u5909\u63DB" tabindex="-1"><a class="header-anchor" href="#rust\u304B\u3089js\u3078\u306E\u30C6\u3099\u30FC\u30BF\u578B\u5909\u63DB" aria-hidden="true">#</a> rust\u304B\u3089js\u3078\u306E\u30C7\u30FC\u30BF\u578B\u5909\u63DB</h3><p>\u578B\u5909\u63DB\u306F\u3001 <code>src/js/val.rs</code> \u3001\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3067\u884C\u308F\u308C\u307E\u3059\u3002</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p><code>None</code>,<code>()</code>,<code>i64</code>, CString \u304B\u3089 <code>js</code> \u3078\u306E\u5909\u63DB\u306F4\u7A2E\u985E\u306E\u307F\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u597D\u304D\u306A\u3060\u3051\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002</p><p>\u305D\u306E\u4ED6\u306E\u30C7\u30FC\u30BF\u578B\u306F\u3001 <code>JS_New</code> \u3067\u59CB\u307E\u308B <a href="https://docs.rs/qjs-sys/0.1.2/qjs_sys/" target="_blank" rel="noopener noreferrer">qjs_sys</a> \u306E\u95A2\u6570\u3067\u5BA3\u8A00\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3002</p><h2 id="\u958B\u767A\u74B0\u5883" tabindex="-1"><a class="header-anchor" href="#\u958B\u767A\u74B0\u5883" aria-hidden="true">#</a> \u958B\u767A\u74B0\u5883</h2><p>Apple\u306E\u30CE\u30FC\u30C8\u30D1\u30BD\u30B3\u30F3\u3067\u958B\u767A\u3057\u3066\u304A\u308A\u3001rust\u306F1.62.0-nightly\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002</p><p>\u307E\u305A <a href="https://direnv.net" target="_blank" rel="noopener noreferrer">direnv\u3092</a> \u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3001\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u79FB\u52D5\u3057\u3001\u3057\u3070\u3089\u304F<code>direnv allow</code> \u3002</p><p>python3 \u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057 <code>pip3 install -r ./requirements.txt</code></p><p>run <code>./build.xsh</code> \u3067\u30C7\u30E2\u306E\u30B3\u30F3\u30D1\u30A4\u30EB\u3068\u5B9F\u884C\u3092\u884C\u3044\u307E\u3059\u3002</p><p>\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001\u516C\u5F0F\u306Equickjs\u30EA\u30DD\u30B8\u30C8\u30EA\u304C\u30AF\u30ED\u30FC\u30F3\u3055\u308C\u308B\u306E\u3067\u3001Kraken\u30EA\u30DD\u30B8\u30C8\u30EA\u306Equickjs\u3092\u5909\u66F4\u3057\u305F\u3044\u5834\u5408\u306F\u3001\u307E\u305A</p><p><code>git clone --recursive git@github.com:openkraken/kraken.git --depth=1</code></p><p>\u3067\u3042\u308C\u3070\u3001\u6B21\u306E\u3088\u3046\u306B\u3057\u307E\u3059\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>rm -rf quickjs
ln -s ../kraken/bridge/third_party/quickjs .
</code></pre></div><p>\u6700\u5F8C\u306B\u3001\u518D\u5B9F\u884C\u3057\u307E\u3059\u3002 <code>./build.xsh</code></p><h2 id="\u30C6\u3099\u30A3\u30EC\u30AF\u30C8\u30EA\u69CB\u9020" tabindex="-1"><a class="header-anchor" href="#\u30C6\u3099\u30A3\u30EC\u30AF\u30C8\u30EA\u69CB\u9020" aria-hidden="true">#</a> \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u69CB\u9020</h2><ul><li><p><code>./quickjs_rust</code><br> quickjs\u306E\u30B3\u30FC\u30C9\u306Ec\u30D5\u30A1\u30A4\u30EB\u3092\u4FEE\u6B63\u3059\u308B\u3002</p></li><li><p><code>./quickjs_ffi</code><br><code>quickjs</code> \u306E\u30D8\u30C3\u30C0\u30FC\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u95A2\u6570\u3092\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002 <code>rust</code></p></li><li><p><code>./rust</code><br><code>rust</code> \u3092\u4F7F\u3063\u3066 <code>quickjs</code> \u306E\u6A5F\u80FD\u3092\u5B9F\u88C5\u3059\u308B\u3002</p><ul><li><code>./rust/src/qjs.rs</code><br> \u975E\u540C\u671F\u547C\u3073\u51FA\u3057\u306E\u5B9F\u88C5\u3002 <code>quickjs</code> \u306F\u30B7\u30F3\u30B0\u30EB\u30B9\u30EC\u30C3\u30C9\u306A\u306E\u3067\u3001 <code>quckjs</code> \u306B\u95A2\u308F\u308B\u95A2\u6570\u547C\u3073\u51FA\u3057\u306F\u30E1\u30A4\u30F3\u30B9\u30EC\u30C3\u30C9\u3067\u8A18\u8FF0\u3055\u308C\u308B\u3002</li></ul></li><li><p><code>./rust_macro</code><br><code>rust</code> \u30D7\u30ED\u30B7\u30FC\u30B8\u30E3\u30DE\u30AF\u30ED\u306E\u5B9F\u88C5 <code>#[js]</code></p><p>\u5C06\u6765\u7684\u306B\u306F\u3001rust \u306E\u95A2\u6570\u3092 js \u306E\u95A2\u6570\u306B\u81EA\u52D5\u7684\u306B\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u3059\u308B\u305F\u3081\u306B<a href="https://github.com/second-state/wasmedge-quickjs/blob/70efe8520dc65636cb81b7225e2a6dae47cfad49/src/quickjs_sys/mod.rs#L122" target="_blank" rel="noopener noreferrer">wasmedge-quickjs</a>\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p></li></ul><h2 id="\u30B9\u30AF\u30EA\u30D5\u309A\u30C8\u306E\u69CB\u7BC9-build-xsh" tabindex="-1"><a class="header-anchor" href="#\u30B9\u30AF\u30EA\u30D5\u309A\u30C8\u306E\u69CB\u7BC9-build-xsh" aria-hidden="true">#</a> \u30B9\u30AF\u30EA\u30D7\u30C8\u306E\u69CB\u7BC9 <code>build.xsh</code></h2><p>\u3055\u3063\u305D\u304F\u3001 <code>build.xsh</code> \u30D3\u30EB\u30C9\u30B9\u30AF\u30EA\u30D7\u30C8\u306E\u30BD\u30FC\u30B9\u30B3\u30FC\u30C9\u3092\u898B\u3066\u307F\u307E\u3057\u3087\u3046\u3002</p><div class="language-xonsh ext-xonsh"><pre class="language-xonsh"><code>#!/usr/bin/env xonsh

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
</code></pre></div><h2 id="\u539F\u7406\u306E\u8AAC\u660E" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406\u306E\u8AAC\u660E" aria-hidden="true">#</a> \u539F\u7406\u306E\u8AAC\u660E</h2><h3 id="quickjs-rust-patch-py" tabindex="-1"><a class="header-anchor" href="#quickjs-rust-patch-py" aria-hidden="true">#</a> <code>quickjs_rust/patch.py</code></h3><p><code>./quickjs_rust/patch.py</code> \u3092\u5B9F\u884C\u3059\u308B\u3068\u3001 <code>quickjs</code> \u306E\u30BD\u30FC\u30B9\u30B3\u30FC\u30C9\u306B\u82E5\u5E72\u306E\u5909\u66F4\u304C\u52A0\u3048\u3089\u308C\u307E\u3059\u3002</p><p>\u95A2\u6570 <code>JS_AddRust</code> \u306E\u4E00\u3064\u3067\u3001rust \u30E2\u30B8\u30E5\u30FC\u30EB\u306B\u6CE8\u5165\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002</p><p><code>rust_run</code> \u3092 <code>JS_ExecutePendingJob</code> \u306B\u30A4\u30F3\u30B8\u30A7\u30AF\u30B7\u30E7\u30F3\u3057\u3066\u975E\u540C\u671F\u95A2\u6570\u3092\u547C\u3073\u51FA\u3059\u3002</p><p>\u3059\u3079\u3066\u306E\u5909\u66F4\u70B9\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059\u3002</p><p><img src="//irmw.gumlet.io/ep2Xgg.png" alt=""></p><h3 id="quickjs-rust-h" tabindex="-1"><a class="header-anchor" href="#quickjs-rust-h" aria-hidden="true">#</a> <code>quickjs_rust.h</code></h3><p>\u4E0A\u8A18\u306E\u5909\u66F4\u70B9\u304B\u3089\u3001\u65B0\u3057\u3044\u30D8\u30C3\u30C0\u30FC\u30D5\u30A1\u30A4\u30EB <code>quickjs_rust.h</code> \u3092\u5C0E\u5165\u3057\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u30B3\u30FC\u30C9\u3092\u8A18\u8FF0\u3057\u3066\u3044\u308B\u3053\u3068\u304C\u308F\u304B\u308A\u307E\u3059\u3002</p><div class="language-c ext-c"><pre class="language-c"><code>#ifndef QUICKJS_RUST_H
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
</code></pre></div><h3 id="rust-rust-h" tabindex="-1"><a class="header-anchor" href="#rust-rust-h" aria-hidden="true">#</a> <code>rust/rust.h</code></h3><p><code>quickjs_rust/quickjs_rust.h</code> \u304C <code>quickjs_rust/js_rust_funcs.h</code>\u3092\u7D39\u4ECB\u3057\u3066\u3044\u308B\u306E\u304C\u308F\u304B\u308A\u307E\u3059\u304C\u3001\u3053\u308C\u306F rust export \u95A2\u6570\u306E\u30D8\u30C3\u30C0\u30FC\u30D5\u30A1\u30A4\u30EB <code>rust/rust.h</code> \u304B\u3089\u81EA\u52D5\u7684\u306B\u751F\u6210\u3055\u308C\u308B\u3082\u306E\u3067\u3001\u624B\u3067\u4FEE\u6B63\u3057\u3066\u306F\u3044\u3051\u307E\u305B\u3093\u3002</p><p>\u305D\u3057\u3066\u3001 <code>./rust/build.xsh</code> \u304B\u3089 cbindgen \u3092\u547C\u3073\u51FA\u3059\u3053\u3068\u3067 <code>rust/rust.h</code> \u304C\u751F\u6210\u3055\u308C\u308B\u3002</p><h3 id="rust-build-xsh" tabindex="-1"><a class="header-anchor" href="#rust-build-xsh" aria-hidden="true">#</a> <code>rust/build.xsh</code></h3><div class="language-xonsh ext-xonsh"><pre class="language-xonsh"><code>#!/usr/bin/env xonsh

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
</code></pre></div><h2 id="\u958B\u767A\u30CE\u30FC\u30C8" tabindex="-1"><a class="header-anchor" href="#\u958B\u767A\u30CE\u30FC\u30C8" aria-hidden="true">#</a> \u958B\u767A\u30CE\u30FC\u30C8</h2><h3 id="quickjs-ffi" tabindex="-1"><a class="header-anchor" href="#quickjs-ffi" aria-hidden="true">#</a> <code>quickjs_ffi</code></h3><p><a href="https://raw.githubusercontent.com/taskie/quijine/main/quijine_core/src/ffi.rs" target="_blank" rel="noopener noreferrer">quijine/main/quijine_core/src/ffi.rs</a>\u306E\u30B3\u30FC\u30C9\u3002</p><p>\u3092\u82E5\u5E72\u306E\u4FEE\u6B63\u3067\u7F6E\u304D\u63DB\u3048\u305F\u3082\u306E\u3067\u3059\u3002</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>\u307E\u3067</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><h3 id="undefined-symbols-for-architecture-x86-64-js-toint32" tabindex="-1"><a class="header-anchor" href="#undefined-symbols-for-architecture-x86-64-js-toint32" aria-hidden="true">#</a> <code>Undefined symbols for architecture x86_64: &quot;_JS_ToInt32&quot;</code></h3><p>\u3092\u4FEE\u6B63\u3059\u308B\u3002/rust/Cargo.toml&#39; \u3092\u6B21\u306E\u3088\u3046\u306B\u4FEE\u6B63\u3057\u3001staticlib \u3060\u3051\u3092\u6B8B\u3057\u307E\u3059\u3002</p><div class="language-toml ext-toml"><pre class="language-toml"><code>[lib]
#crate-type = [&quot;lib&quot;, &quot;cdylib&quot;, &quot;staticlib&quot;]
crate-type = [&quot;staticlib&quot;]
</code></pre></div><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2><ol start="0"><li><code>JS</code> \u30A8\u30F3\u30B8\u30F3\u304B\u3089 <code>JS</code> \u30E9\u30F3\u30BF\u30A4\u30E0\u3078 <a href="https://github.com/doodlewind/blog/blob/master/source/_posts/js-engine-to-js-runtime-1.md" target="_blank" rel="noopener noreferrer">(\u4E0A)</a> <a href="https://github.com/doodlewind/blog/blob/master/source/_posts/js-engine-to-js-runtime-2.md" target="_blank" rel="noopener noreferrer">(\u4E0B)</a></li><li><a href="https://github.com/quickjs-zh/QuickJS/wiki/%E4%BD%BF%E7%94%A8C%E8%AF%AD%E8%A8%80%E4%B8%BAQuickJS%E5%BC%80%E5%8F%91%E4%B8%80%E4%B8%AA%E5%8E%9F%E7%94%9F%E6%A8%A1%E5%9D%97" target="_blank" rel="noopener noreferrer">C\u8A00\u8A9E\u306B\u3088\u308B <code>QuickJS</code> \u306E\u30CD\u30A4\u30C6\u30A3\u30D6\u30E2\u30B8\u30E5\u30FC\u30EB\u306E\u958B\u767A</a></li><li><a href="https://wasmedge.org/book/en/dev/js/rust.html" target="_blank" rel="noopener noreferrer">Rust\u3092\u4F7F\u3063\u3066JS API\u3092\u5B9F\u88C5\u3059\u308B</a></li><li><a href="https://github.com/Kozova1/quickjs-example" target="_blank" rel="noopener noreferrer">QuickJS\u306E\u4F8B</a></li><li><a href="https://rust-lang.github.io/rust-bindgen/" target="_blank" rel="noopener noreferrer">\u9306\u3073\u4ED8\u304D\u98A8\u795E</a></li><li><a href="https://calbertts.medium.com/how-to-create-asynchronous-apis-for-quickjs-8aca5488bb2e" target="_blank" rel="noopener noreferrer"><code>QuickJS</code></a> \u306E\u975E\u540C\u671F\u30B3\u30FC\u30C9\u306E\u4F5C\u308A\u65B9</li><li><a href="https://github.com/DelSkayn/rquickjs/blob/master/core/src/context/ctx.rs#L104" target="_blank" rel="noopener noreferrer">rquickjs \u2192 JS_NewPromiseCapability</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/8a65582265ecdd3171380feebf56b3bb8c34d183/src/quickjs_sys/mod.rs#L515" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 new_promise \u3067\u3059\u3002</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/da887752fdc9c36aca0f4b7499c5b115862ce771/src/internal_module/wasi_net_module.rs#L46" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 JsMethod \u3067\u3059\u3002</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/8a65582265ecdd3171380feebf56b3bb8c34d183/src/quickjs_sys/mod.rs#L756" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 \u30B3\u30FC\u30EB</a></li><li><a href="https://mp.weixin.qq.com/s/BKto24ItwXbeHon_LaF_0w" target="_blank" rel="noopener noreferrer">\u6C17\u3065\u304B\u308C\u306A\u3044\u7F60 - Rust\u306E\u30ED\u30C3\u30AF</a></li></ol><h2 id="\u306B\u3064\u3044\u3066" tabindex="-1"><a class="header-anchor" href="#\u306B\u3064\u3044\u3066" aria-hidden="true">#</a> \u306B\u3064\u3044\u3066</h2><p>\u3053\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u3001 <strong>rmw.link\uFF08<a href="//rmw.link" target="_blank" rel="noopener noreferrer">rmw.link</a></strong> \uFF09\u30B3\u30FC\u30C9\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4E00\u90E8\u3067\u3059\u3002</p><p><img src="https://raw.githubusercontent.com/rmw-link/logo/master/rmw.red.bg.svg" alt="rmw.link"></p>`,81);function s(a,i){return r}var c=n(t,[["render",s],["__file","2022-04-29-quickjs-rust.html.vue"]]);export{c as default};
