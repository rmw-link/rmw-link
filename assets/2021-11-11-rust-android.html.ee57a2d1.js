import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.2a6a1bd2.js";const n={},t=r(`<h1 id="\u30A2\u30F3\u30C8\u3099\u30ED\u30A4\u30C8\u3099\u30BB\u30C3\u30C8\u30C8\u30C3\u30D5\u309A\u30DB\u3099\u30C3\u30AF\u30B9\u7528kiss-ftpd-rust\u8A00\u8A9E\u30D5\u309A\u30ED\u30AF\u3099\u30E9\u30E0-\u306E\u30B3\u30F3\u30CF\u309A\u30A4\u30EB" tabindex="-1"><a class="header-anchor" href="#\u30A2\u30F3\u30C8\u3099\u30ED\u30A4\u30C8\u3099\u30BB\u30C3\u30C8\u30C8\u30C3\u30D5\u309A\u30DB\u3099\u30C3\u30AF\u30B9\u7528kiss-ftpd-rust\u8A00\u8A9E\u30D5\u309A\u30ED\u30AF\u3099\u30E9\u30E0-\u306E\u30B3\u30F3\u30CF\u309A\u30A4\u30EB" aria-hidden="true">#</a> \u30A2\u30F3\u30C9\u30ED\u30A4\u30C9\u30BB\u30C3\u30C8\u30C8\u30C3\u30D7\u30DC\u30C3\u30AF\u30B9\u7528kiss-ftpd(Rust\u8A00\u8A9E\u30D7\u30ED\u30B0\u30E9\u30E0)\u306E\u30B3\u30F3\u30D1\u30A4\u30EB</h1><p>busybox\u306B\u306F\u96D1\u306Aftp\u306E\u30B3\u30FC\u30C9\u304C\u4ED8\u5C5E\u3057\u3066\u3044\u308B\u306E\u3067\u3001\u30BB\u30C3\u30C8\u30C8\u30C3\u30D7\u30DC\u30C3\u30AF\u30B9\u3067\u4F7F\u3046\u305F\u3081\u306B <a href="https://github.com/moparisthebest/kiss-ftpd" target="_blank" rel="noopener noreferrer">kiss-ftpd\u3092</a> \u30B3\u30F3\u30D1\u30A4\u30EB\u3059\u308B\u3053\u3068\u306B\u3057\u307E\u3059\u3002</p><p>\u306F\u3058\u3081\u306B <code>rustup target add aarch64-linux-android</code></p><p>NDK for Android\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u307E\u3059\u3002</p><p><img src="//irmw.gumlet.io/qcUqsK.png" alt=""></p><p>\u3082\u3061\u308D\u3093\u3001 <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">NDK\u3092\u76F4\u63A5\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u3001\u89E3\u51CD</a>\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002</p><p>2021\u5E74\u3001<a href="https://github.com/mozilla/rust-android-gradle/issues/75#issuecomment-970179046" target="_blank" rel="noopener noreferrer">rust\u304C\u30B5\u30DD\u30FC\u30C8\u3059\u308BNDK\u306E\u6700\u9AD8\u30D0\u30FC\u30B8\u30E7\u30F3\u306F22.1.7171670</a> \u306A\u306E\u3067\u3001\u307E\u305A\u305D\u308C\u3092\u4F7F\u3063\u3066\u304F\u3060\u3055\u3044\u3002</p><p>\u6700\u5F8C\u306B\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\u30B9\u30AF\u30EA\u30D7\u30C8\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>#!/usr/bin/env bash

DIR=$(cd &quot;$(dirname &quot;$0&quot;)&quot;; pwd)
set -ex
cd $DIR

export API=30
export NDK_VERSION=22.1.7171670

export TARGET=aarch64-linux-android

export os=\`uname -s|awk &#39;{ print tolower($0) }&#39;\`
export NDK=$HOME/Library/Android/sdk/ndk/$NDK_VERSION
export ANDROID_NDK_HOME=$NDK
export TOOLCHAIN=$NDK/toolchains/llvm/prebuilt/$os-x86_64
export PATH=$TOOLCHAIN/bin:$PATH
export AR=$TOOLCHAIN/bin/llvm-ar
export AS=$TOOLCHAIN/bin/$TARGET-as
export CC=$TOOLCHAIN/bin/$TARGET$API-clang
export CXX=$TOOLCHAIN/bin/$TARGET$API-clang++
export LD=$TOOLCHAIN/bin/$TARGET-ld
export RANLIB=$TOOLCHAIN/bin/$TARGET-ranlib
export STRIP=$TOOLCHAIN/bin/$TARGET-strip

CARGO_TARGET=\`echo \${TARGET//-/_} | awk &#39;{ print toupper($0) }&#39;\`
export CARGO_TARGET_\${CARGO_TARGET}_LINKER=$CC

echo &#39;AR = &#39;$AR
echo &#39;AS = &#39;$AS
echo &#39;CC = &#39;$CC
echo &#39;CXX = &#39;$CXX
echo &#39;LD = &#39;$LD
echo &#39;RANLIB = &#39;$RANLIB
echo &#39;STRIP = &#39;$STRIP

RUST_BACKTRACE=1 \\
cargo +nightly build --release --target aarch64-linux-android
</code></pre></div>`,9);function o(a,s){return t}var d=e(n,[["render",o],["__file","2021-11-11-rust-android.html.vue"]]);export{d as default};
