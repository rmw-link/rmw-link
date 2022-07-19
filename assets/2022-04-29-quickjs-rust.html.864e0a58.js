import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.87d927ab.js";const n={},t=r(`<h1 id="\u4FEE\u6539-quickjs-\u4EE5\u5BFC\u5165-rust-\u51FD\u6570-\u2014\u2014-\u4E00\u79CD\u6269\u5C55\u5317\u6D77\u7684\u65B0\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539-quickjs-\u4EE5\u5BFC\u5165-rust-\u51FD\u6570-\u2014\u2014-\u4E00\u79CD\u6269\u5C55\u5317\u6D77\u7684\u65B0\u601D\u8DEF" aria-hidden="true">#</a> \u4FEE\u6539 quickjs \u4EE5\u5BFC\u5165 rust \u51FD\u6570 \u2014\u2014 \u4E00\u79CD\u6269\u5C55\u5317\u6D77\u7684\u65B0\u601D\u8DEF</h1><h2 id="\u4EE3\u7801\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5E93" aria-hidden="true">#</a> \u4EE3\u7801\u5E93</h2><ul><li><a href="https://github.com/rmw-lib/quickjs-rust" target="_blank" rel="noopener noreferrer">github</a></li><li><a href="https://gitee.com/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">gitee</a></li><li><a href="https://gitflic.ru/project/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">gitflic</a></li><li><a href="https://bitbucket.org/rmw-link/quickjs-rust" target="_blank" rel="noopener noreferrer">bitbucket</a></li></ul><h2 id="\u8D77\u56E0" tabindex="-1"><a class="header-anchor" href="#\u8D77\u56E0" aria-hidden="true">#</a> \u8D77\u56E0</h2><p><a href="https://openkraken.com" target="_blank" rel="noopener noreferrer">\u5317\u6D77</a> \u662F\u57FA\u4E8E <code>Flutter</code> \u6784\u5EFA\u9AD8\u6027\u80FD Web \u6E32\u67D3\u5F15\u64CE\uFF0C\u5B83\u4F7F\u7528\u4E86 <a href="https://github.com/openkraken/kraken/tree/main/bridge/third_party/quickjs" target="_blank" rel="noopener noreferrer">quickjs</a>\uFF0C\u4F5C\u4E3A\u811A\u672C\u5F15\u64CE\u3002</p><p>\u6211\u671F\u671B\u7528 <code>rust</code> \u5199\u4E00\u4E9B\u5317\u6D77\u7684\u6269\u5C55\u3002</p><p>\u5317\u6D77 <a href="https://openkraken.com/guide/advanced/custom-js-api" target="_blank" rel="noopener noreferrer">\u652F\u6301\u7528 <code>dart</code> \u5199\u6269\u5C55</a>\u3002</p><p>\u7528 <a href="https://github.com/fzyzcjy/flutter_rust_bridge" target="_blank" rel="noopener noreferrer"><code>flutter_rust_bridge</code></a> \u53EF\u4EE5\u6253\u901A <code>rust</code> \u548C <code>dart</code>\u3002</p><p>\u7ED3\u5408\u4EE5\u4E0A\u4E24\u70B9\uFF0C\u7528 <code>rust</code> \u5199\u5317\u6D77\u7684\u6269\u5C55\u4E0D\u96BE\u3002<br> \u4F46\uFF0C\u6B64\u65B9\u6848\u6027\u80FD\u5F00\u9500\u611F\u89C9\u6BD4\u8F83\u5927\uFF0C\u56E0\u4E3A <code>dart</code> \u8C03\u7528 <code>rust</code> \u6709\u4E00\u6B21\u6027\u80FD\u635F\u8017\uFF0C<code>quickjs</code> \u8C03\u7528 <code>dart</code> \u53C8\u6709\u4E00\u6B21\u6027\u80FD\u635F\u8017\u3002</p><p>\u53E6\u4E00\u65B9\u9762\uFF0C\u867D\u7136 <code>rust</code> \u793E\u533A\u6709 <a href="https://github.com/DelSkayn/rquickjs" target="_blank" rel="noopener noreferrer"><code>rquickjs</code></a> \u8FD9\u79CD\u5728 <code>rust</code> \u4E2D\u8C03\u7528 <code>quickjs</code> \u5E93\u3002<br> \u4F46\uFF0C\u5B83\u4EEC\u662F\u8C03\u7528 <code>quickjs</code> \u800C\u4E0D\u662F\u5D4C\u5165 <code>quickjs</code>\uFF0C\u4E5F\u6CA1\u6CD5\u7528\u6765\u9B54\u6539 <code>quickjs</code> \u3002</p><p>\u5728\u6B64\u4EE3\u7801\u5E93\u4E2D\uFF0C\u6211\u5B9E\u73B0\u4E00\u79CD\u65B0\u65B9\u6848\uFF1A\u76F4\u63A5\u4FEE\u6539 <code>quickjs</code> \u6E90\u4EE3\u7801\uFF0C\u4F7F\u5176\u652F\u6301 <code>rust</code> \u6269\u5C55\u3002</p><p>\u8FD9\u662F\u4E00\u4E2A\u901A\u7528\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u4E0D\u4EC5\u4EC5\u53EF\u4EE5\u7528\u4E8E\u4FEE\u6539\u5317\u6D77\uFF0C\u5728\u6240\u6709\u5D4C\u5165\u4E86 <code>quickjs</code> \u6846\u67B6\u548C\u5E93\u90FD\u9002\u7528\u3002</p><h2 id="\u6F14\u793A" tabindex="-1"><a class="header-anchor" href="#\u6F14\u793A" aria-hidden="true">#</a> \u6F14\u793A</h2><p>test.js \u4EE3\u7801\u5982\u4E0B :</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>const try_run = (func, ...args) =&gt; {
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
</code></pre></div><p>\u8FD0\u884C <code>./quickjs/qjs test.js</code>, \u8F93\u51FA :</p><div class="language-text ext-text"><pre class="language-text"><code>export from rust : fib,sleep
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
</code></pre></div><h3 id="fib-\u5728-rust-\u4E2D\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#fib-\u5728-rust-\u4E2D\u7684\u5B9E\u73B0" aria-hidden="true">#</a> fib \u5728 rust \u4E2D\u7684\u5B9E\u73B0</h3><p>js \u4E2D\u5BFC\u5165\u7684 fib \u51FD\u6570\u6765\u81EA <code>rust/src/export/fib.rs</code> \uFF0C\u4EE3\u7801\u5982\u4E0B :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::{self, arg};
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
</code></pre></div><p>\u76EE\u524D\uFF0C\u8FC7\u7A0B\u5B8F <code>#[js]</code> \u53EA\u662F\u6DFB\u52A0\u4E86\u4E00\u4E2A\u5E38\u91CF <code>fib_args_len</code>\uFF0C\u6807\u8BC6\u51FD\u6570\u7684\u53C2\u6570\u4E2A\u6570\u3002</p><p>\u65E5\u540E\uFF0C\u53EF\u4EE5\u8FDB\u4E00\u6B65\u7F16\u5199\u8FC7\u7A0B\u5B8F <code>./rust_macro</code> \u4EE5\u5B9E\u73B0\u5168\u81EA\u52A8\u7684\u51FD\u6570\u5BFC\u51FA\u3002</p><h3 id="\u5F02\u6B65\u51FD\u6570-sleep-\u5728-rust-\u4E2D\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u51FD\u6570-sleep-\u5728-rust-\u4E2D\u7684\u5B9E\u73B0" aria-hidden="true">#</a> \u5F02\u6B65\u51FD\u6570 sleep \u5728 rust \u4E2D\u7684\u5B9E\u73B0</h3><p>js \u4E2D\u5BFC\u5165\u7684 sleep \u51FD\u6570\u6765\u81EA <code>rust/src/export/sleep.rs</code> \uFF0C\u4EE3\u7801\u5982\u4E0B :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::{js::arg, qjs::run};
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
</code></pre></div><p>\u4ECE\u4E0A\u9762\u53EF\u4EE5\u770B\u5230\uFF0C\u6240\u6709\u5BFC\u51FA\u7684\u51FD\u6570\u90FD\u5B9A\u4E49\u5728\u76EE\u5F55 <code>./rust/src/export</code> \u4E2D\uFF0C\u8FD9\u4E2A\u76EE\u5F55\u7684 <code>mod.rs</code> \u4F1A\u5728\u8FD0\u884C <code>./rust/build.xsh</code> \u81EA\u52A8\u751F\u6210\uFF0C\u5BFC\u51FA\u5176\u4E0B\u6240\u6709\u7684 <code>.rs</code> \u6587\u4EF6\u3002</p><h3 id="js-\u4F20\u5165\u53C2\u6570\u7684\u8BFB\u53D6\u548C\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#js-\u4F20\u5165\u53C2\u6570\u7684\u8BFB\u53D6\u548C\u6821\u9A8C" aria-hidden="true">#</a> js \u4F20\u5165\u53C2\u6570\u7684\u8BFB\u53D6\u548C\u6821\u9A8C</h3><p>\u53C2\u6570\u7684\u8BFB\u53D6\u548C\u6821\u9A8C\u5728 <code>src/js/arg.rs</code> \u4E2D\uFF0C\u4EE3\u7801\u5982\u4E0B :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use crate::js::throw;

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
</code></pre></div><p>\u76EE\u524D\u53EA\u63D0\u4F9B\u4E86\u53C2\u6570\u4E2A\u6570\u7684\u6821\u9A8C\uFF0C\u4EE5\u53CA\u5BF9 i64 \u7C7B\u578B\u53C2\u6570\u7684\u8BFB\u53D6\u3002</p><p>\u53EF\u4EE5\u6309\u9700\u6C42\u81EA\u884C\u6DFB\u52A0\uFF0C\u8BFB\u53D6\u51FD\u6570\u53C2\u89C1 <a href="https://docs.rs/qjs-sys/0.1.2/qjs_sys/" target="_blank" rel="noopener noreferrer">qjs_sys</a> \u4E2D\u4EE5 <code>JS_To</code> \u5F00\u5934\u7684\u51FD\u6570\u3002</p><h3 id="\u4ECE-rust-\u5230-js-\u6570\u636E\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u4ECE-rust-\u5230-js-\u6570\u636E\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> \u4ECE rust \u5230 js \u6570\u636E\u7C7B\u578B\u8F6C\u6362</h3><p>\u7C7B\u578B\u8F6C\u6362\u5728 <code>src/js/val.rs</code> \u4E2D\uFF0C\u4EE3\u7801\u5982\u4E0B :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use quickjs_ffi::{JSContext, JSValue, JS_NewInt64, JS_NewString, JS_NULL, JS_UNDEFINED};
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
</code></pre></div><p>\u76EE\u524D\u53EA\u5B9A\u4E49\u4E86 <code>None</code>\u3001<code>()</code>\u3001<code>i64</code>\u3001CString \u8FD9 4 \u79CD\u7C7B\u578B\u5230 <code>js</code> \u7684\u8F6C\u6362\uFF0C\u53EF\u4EE5\u6839\u636E\u9700\u8981\u81EA\u5DF1\u6DFB\u52A0\u3002</p><p>\u66F4\u591A\u6570\u636E\u7C7B\u578B\u7684\u58F0\u660E\u65B9\u5F0F\u53EF\u53C2\u89C1 <a href="https://docs.rs/qjs-sys/0.1.2/qjs_sys/" target="_blank" rel="noopener noreferrer">qjs_sys</a> \u4E2D\u4EE5 <code>JS_New</code> \u5F00\u5934\u7684\u51FD\u6570\u3002</p><h2 id="\u5F00\u53D1\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u73AF\u5883" aria-hidden="true">#</a> \u5F00\u53D1\u73AF\u5883</h2><p>\u6211\u662F\u5728\u82F9\u679C\u7B14\u8BB0\u672C\u4E0A\u5F00\u53D1\u7684\uFF0Crust \u7528\u7684\u662F 1.62.0-nightly\u3002</p><p>\u5148\u5B89\u88C5 <a href="https://direnv.net" target="_blank" rel="noopener noreferrer">direnv</a> \uFF0C\u8FDB\u5165\u76EE\u5F55\u540E\uFF0C<code>direnv allow</code> \u4E00\u4E0B</p><p>\u5B89\u88C5 python3\uFF0C\u7136\u540E <code>pip3 install -r ./requirements.txt</code></p><p>\u8FD0\u884C <code>./build.xsh</code> \u5373\u53EF\u7F16\u8BD1\u5E76\u8FD0\u884C\u6F14\u793A</p><p>\u9ED8\u8BA4\u662F\u4F1A\u514B\u9686 quickjs \u7684\u5B98\u65B9\u4ED3\u5E93\uFF0C\u5982\u679C\u60F3\u4FEE\u6539\u5317\u6D77\u4ED3\u5E93\u7684\u4E2D\u7684 quickjs\uFF0C\u5148</p><p><code>git clone --recursive git@github.com:openkraken/kraken.git --depth=1</code></p><p>\u7136\u540E\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C</p><div class="language-bash ext-sh"><pre class="language-bash"><code>rm -rf quickjs
ln -s ../kraken/bridge/third_party/quickjs .
</code></pre></div><p>\u6700\u540E\u91CD\u65B0\u8FD0\u884C <code>./build.xsh</code></p><h2 id="\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u76EE\u5F55\u7ED3\u6784</h2><ul><li><p><code>./quickjs_rust</code><br> \u4FEE\u6539 quickjs \u4EE3\u7801\u7684 c \u6587\u4EF6</p></li><li><p><code>./quickjs_ffi</code><br> \u5BFC\u51FA <code>quickjs</code> \u5934\u6587\u4EF6\u7684\u51FD\u6570\u5230 <code>rust</code></p></li><li><p><code>./rust</code><br> \u7528 <code>rust</code> \u5B9E\u73B0 <code>quickjs</code> \u4E2D\u7684\u51FD\u6570</p><ul><li><code>./rust/src/qjs.rs</code><br> \u5F02\u6B65\u8C03\u7528\u7684\u5B9E\u73B0\u3002\u56E0\u4E3A <code>quickjs</code> \u662F\u5355\u7EBF\u7A0B\u7684\uFF0C\u6240\u4EE5\u6D89\u53CA <code>quckjs</code> \u51FD\u6570\u8C03\u7528\u90FD\u5199\u5728\u4E3B\u7EBF\u7A0B\u3002</li></ul></li><li><p><code>./rust_macro</code><br><code>rust</code> \u8FC7\u7A0B\u5B8F <code>#[js]</code> \u7684\u5B9E\u73B0</p><p>\u672A\u6765\u53EF\u4EE5\u53C2\u8003 wasmedge-quickjs \u5B9E\u73B0 rust \u51FD\u6570\u81EA\u52A8\u5BFC\u51FA\u4E3A js \u51FD\u6570\u3002<a href="https://github.com/second-state/wasmedge-quickjs/blob/70efe8520dc65636cb81b7225e2a6dae47cfad49/src/quickjs_sys/mod.rs#L122" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 JsFunctionTrampoline</a></p></li></ul><h2 id="\u6784\u5EFA\u811A\u672C-build-xsh" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA\u811A\u672C-build-xsh" aria-hidden="true">#</a> \u6784\u5EFA\u811A\u672C <code>build.xsh</code></h2><p>\u4E0D\u591A\u8BF4\uFF0C\u76F4\u63A5\u770B <code>build.xsh</code> \u6784\u5EFA\u811A\u672C\u6E90\u4EE3\u7801</p><div class="language-xonsh ext-xonsh"><pre class="language-xonsh"><code>#!/usr/bin/env xonsh

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
</code></pre></div><h2 id="\u539F\u7406\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406\u89E3\u6790" aria-hidden="true">#</a> \u539F\u7406\u89E3\u6790</h2><h3 id="quickjs-rust-patch-py" tabindex="-1"><a class="header-anchor" href="#quickjs-rust-patch-py" aria-hidden="true">#</a> <code>quickjs_rust/patch.py</code></h3><p>\u8FD0\u884C <code>./quickjs_rust/patch.py</code> \u4F1A\u5BF9 <code>quickjs</code> \u6E90\u7801\u505A\u4E00\u4E9B\u5C0F\u4FEE\u6539\u3002</p><p>\u5176\u4E2D <code>JS_AddRust</code> \u662F\u7528\u6765\u6CE8\u5165 rust \u6A21\u5757\u7684\u51FD\u6570\u3002</p><p>\u5728 <code>JS_ExecutePendingJob</code> \u4E2D\u6CE8\u5165\u4E86 <code>rust_run</code> \u6765\u8C03\u7528\u5F02\u6B65\u51FD\u6570\u3002</p><p>\u5168\u90E8\u6539\u52A8\u622A\u56FE\u5982\u4E0B :</p><p><img src="//irmw.gumlet.io/ep2Xgg.png" alt=""></p><h3 id="quickjs-rust-h" tabindex="-1"><a class="header-anchor" href="#quickjs-rust-h" aria-hidden="true">#</a> <code>quickjs_rust.h</code></h3><p>\u4ECE\u4E0A\u9762\u6539\u52A8\uFF0C\u53EF\u4EE5\u770B\u5230\uFF0C\u6211\u4EEC\u5F15\u5165\u4E86\u4E00\u4E2A\u65B0\u7684\u5934\u6587\u4EF6 <code>quickjs_rust.h</code> \uFF0C\u5176\u4EE3\u7801\u5982\u4E0B</p><div class="language-c ext-c"><pre class="language-c"><code>#ifndef QUICKJS_RUST_H
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
</code></pre></div><h3 id="rust-rust-h" tabindex="-1"><a class="header-anchor" href="#rust-rust-h" aria-hidden="true">#</a> <code>rust/rust.h</code></h3><p>\u53EF\u4EE5\u770B\u5230 <code>quickjs_rust/quickjs_rust.h</code> \u5F15\u5165\u4E86 <code>quickjs_rust/js_rust_funcs.h</code>\uFF0C\u6B64\u662F\u6839\u636E rust \u5BFC\u51FA\u51FD\u6570\u7684\u5934\u6587\u4EF6 <code>rust/rust.h</code> \u81EA\u52A8\u751F\u6210\u7684\uFF0C\u4E0D\u8981\u624B\u5DE5\u4FEE\u6539\u3002</p><p>\u800C <code>rust/rust.h</code> \u662F\u5728 <code>./rust/build.xsh</code> \u4E2D\u8C03\u7528 cbindgen \u751F\u6210\u7684\u3002</p><h3 id="rust-build-xsh" tabindex="-1"><a class="header-anchor" href="#rust-build-xsh" aria-hidden="true">#</a> <code>rust/build.xsh</code></h3><div class="language-xonsh ext-xonsh"><pre class="language-xonsh"><code>#!/usr/bin/env xonsh

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
</code></pre></div><h2 id="\u5F00\u53D1\u5907\u5FD8" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u5907\u5FD8" aria-hidden="true">#</a> \u5F00\u53D1\u5907\u5FD8</h2><h3 id="quickjs-ffi" tabindex="-1"><a class="header-anchor" href="#quickjs-ffi" aria-hidden="true">#</a> <code>quickjs_ffi</code></h3><p>\u4EE3\u7801\u6765\u81EA <a href="https://raw.githubusercontent.com/taskie/quijine/main/quijine_core/src/ffi.rs" target="_blank" rel="noopener noreferrer">quijine/main/quijine_core/src/ffi.rs</a></p><p>\u505A\u4E86\u4E00\u4E9B\u5C0F\u4FEE\u6539\uFF0C\u66FF\u6362</p><div class="language-rust ext-rs"><pre class="language-rust"><code>pub use libquickjs_sys::*;
</code></pre></div><p>\u4E3A</p><div class="language-rust ext-rs"><pre class="language-rust"><code>#![allow(non_upper_case_globals)]
#![allow(non_camel_case_types)]
#![allow(non_snake_case)]

include!(concat!(env!(&quot;OUT_DIR&quot;), &quot;/c.rs&quot;));
</code></pre></div><h3 id="undefined-symbols-for-architecture-x86-64-js-toint32" tabindex="-1"><a class="header-anchor" href="#undefined-symbols-for-architecture-x86-64-js-toint32" aria-hidden="true">#</a> <code>Undefined symbols for architecture x86_64: &quot;_JS_ToInt32&quot;</code></h3><p>\u4FEE\u6539 &#39;./rust/Cargo.toml&#39; \u5982\u4E0B\uFF0C\u53EA\u4FDD\u7559 staticlib</p><div class="language-toml ext-toml"><pre class="language-toml"><code>[lib]
#crate-type = [&quot;lib&quot;, &quot;cdylib&quot;, &quot;staticlib&quot;]
crate-type = [&quot;staticlib&quot;]
</code></pre></div><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2><ol start="0"><li>\u4ECE <code>JS</code> \u5F15\u64CE\u5230 <code>JS</code> \u8FD0\u884C\u65F6 <a href="https://github.com/doodlewind/blog/blob/master/source/_posts/js-engine-to-js-runtime-1.md" target="_blank" rel="noopener noreferrer">(\u4E0A)</a> <a href="https://github.com/doodlewind/blog/blob/master/source/_posts/js-engine-to-js-runtime-2.md" target="_blank" rel="noopener noreferrer">\uFF08\u4E0B\uFF09</a></li><li><a href="https://github.com/quickjs-zh/QuickJS/wiki/%E4%BD%BF%E7%94%A8C%E8%AF%AD%E8%A8%80%E4%B8%BAQuickJS%E5%BC%80%E5%8F%91%E4%B8%80%E4%B8%AA%E5%8E%9F%E7%94%9F%E6%A8%A1%E5%9D%97" target="_blank" rel="noopener noreferrer">\u4F7F\u7528 C \u8BED\u8A00\u4E3A <code>QuickJS</code> \u5F00\u53D1\u4E00\u4E2A\u539F\u751F\u6A21\u5757</a></li><li><a href="https://wasmedge.org/book/en/dev/js/rust.html" target="_blank" rel="noopener noreferrer">Use Rust to implement JS API</a></li><li><a href="https://github.com/Kozova1/quickjs-example" target="_blank" rel="noopener noreferrer">QuickJS examples</a></li><li><a href="https://rust-lang.github.io/rust-bindgen/" target="_blank" rel="noopener noreferrer">rust-bindgen</a></li><li><a href="https://calbertts.medium.com/how-to-create-asynchronous-apis-for-quickjs-8aca5488bb2e" target="_blank" rel="noopener noreferrer">\u5982\u4F55\u4E3A <code>QuickJS</code> \u521B\u5EFA\u5F02\u6B65\u4EE3\u7801</a></li><li><a href="https://github.com/DelSkayn/rquickjs/blob/master/core/src/context/ctx.rs#L104" target="_blank" rel="noopener noreferrer">rquickjs \u2192 JS_NewPromiseCapability</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/8a65582265ecdd3171380feebf56b3bb8c34d183/src/quickjs_sys/mod.rs#L515" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 new_promise</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/da887752fdc9c36aca0f4b7499c5b115862ce771/src/internal_module/wasi_net_module.rs#L46" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 JsMethod</a></li><li><a href="https://github.com/second-state/wasmedge-quickjs/blob/8a65582265ecdd3171380feebf56b3bb8c34d183/src/quickjs_sys/mod.rs#L756" target="_blank" rel="noopener noreferrer">wasmedge-quickjs \u2192 call</a></li><li><a href="https://mp.weixin.qq.com/s/BKto24ItwXbeHon_LaF_0w" target="_blank" rel="noopener noreferrer">\u4E0D\u6613\u5BDF\u89C9\u7684\u9677\u9631\u2014\u2014Rust \u4E2D\u7684\u9501</a></li></ol><h2 id="\u5173\u4E8E" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E" aria-hidden="true">#</a> \u5173\u4E8E</h2><p>\u672C\u9879\u76EE\u96B6\u5C5E\u4E8E <strong>\u4EBA\u6C11\u7F51\u7EDC (<a href="//rmw.link" target="_blank" rel="noopener noreferrer">rmw.link</a>)</strong> \u4EE3\u7801\u8BA1\u5212\u3002</p><p><img src="https://raw.githubusercontent.com/rmw-link/logo/master/rmw.red.bg.svg" alt="\u4EBA\u6C11\u7F51\u7EDC"></p>`,81);function s(a,o){return t}var u=e(n,[["render",s],["__file","2022-04-29-quickjs-rust.html.vue"]]);export{u as default};
