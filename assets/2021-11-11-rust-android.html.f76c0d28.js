import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{e}from"./app.87d927ab.js";const n={},t=e(`<h1 id="\u7F16\u8BD1-kiss-ftpd-rust-\u8BED\u8A00\u7684\u7A0B\u5E8F-\u7ED9-android-\u673A\u9876\u76D2\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1-kiss-ftpd-rust-\u8BED\u8A00\u7684\u7A0B\u5E8F-\u7ED9-android-\u673A\u9876\u76D2\u4F7F\u7528" aria-hidden="true">#</a> \u7F16\u8BD1 kiss-ftpd ( rust \u8BED\u8A00\u7684\u7A0B\u5E8F ) \u7ED9 android \u673A\u9876\u76D2\u4F7F\u7528</h1><p>busybox \u81EA\u5E26\u7684 ftp \u4E2D\u6587\u4E71\u7801\uFF0C\u6253\u7B97\u7F16\u8BD1\u4E00\u4E2A <a href="https://github.com/moparisthebest/kiss-ftpd" target="_blank" rel="noopener noreferrer">kiss-ftpd</a> \u4F20\u5230\u673A\u9876\u76D2\u4E0A\u4F7F\u7528\u3002</p><p>\u9996\u5148\uFF0C <code>rustup target add aarch64-linux-android</code></p><p>\u7136\u540E\u5B89\u88C5\u5B89\u5353\u7684 NDK\uFF0C\u6211\u662F\u7528 Android Studio \u88C5\u7684\uFF0C\u622A\u56FE\u5982\u4E0B\u3002</p><p><img src="//irmw.gumlet.io/qcUqsK.png" alt=""></p><p>\u5F53\u7136\u4E5F\u53EF\u4EE5 <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">\u76F4\u63A5\u53BB\u4E0B\u8F7D NDK \u89E3\u5305</a>\u3002</p><p>2021 \u5E74\uFF0C<a href="https://github.com/mozilla/rust-android-gradle/issues/75#issuecomment-970179046" target="_blank" rel="noopener noreferrer">rust \u652F\u6301\u7684 NDK \u6700\u9AD8\u7248\u672C\u662F 22.1.7171670</a> \uFF0C\u5148\u7528\u8FD9\u4E2A\u3002</p><p>\u6700\u540E\uFF0C\u7F16\u8BD1\u811A\u672C\u5982\u4E0B\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>#!/usr/bin/env bash

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
</code></pre></div>`,9);function o(a,i){return t}var p=r(n,[["render",o],["__file","2021-11-11-rust-android.html.vue"]]);export{p as default};
