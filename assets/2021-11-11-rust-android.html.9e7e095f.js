import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as o}from"./app.2a6a1bd2.js";const r={},n=o(`<h1 id="compile-kiss-ftpd-rust-language-program-for-android-set-top-box" tabindex="-1"><a class="header-anchor" href="#compile-kiss-ftpd-rust-language-program-for-android-set-top-box" aria-hidden="true">#</a> Compile kiss-ftpd ( rust language program ) for android set-top box</h1><p>The busybox comes with a messy ftp code, so I want to compile a <a href="https://github.com/moparisthebest/kiss-ftpd" target="_blank" rel="noopener noreferrer">kiss-ftpd</a> to be used on the set-top box.</p><p>First, the <code>rustup target add aarch64-linux-android</code></p><p>Then install the Android NDK, I used Android Studio to install it, screenshot below.</p><p><img src="//irmw.gumlet.io/qcUqsK.png" alt=""></p><p>Of course, you can also <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">download the NDK directly to unpack</a> it.</p><p>In 2021, <a href="https://github.com/mozilla/rust-android-gradle/issues/75#issuecomment-970179046" target="_blank" rel="noopener noreferrer">the highest version of NDK supported by rust is 22.1.7171670</a>, so use this one first.</p><p>Finally, the compilation script is as follows.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>#!/usr/bin/env bash

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
</code></pre></div>`,9);function t(a,s){return n}var d=e(r,[["render",t],["__file","2021-11-11-rust-android.html.vue"]]);export{d as default};
