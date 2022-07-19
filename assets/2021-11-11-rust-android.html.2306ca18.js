import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.2a6a1bd2.js";const n={},o=r(`<h1 id="kompilering-af-kiss-ftpd-program-pa-rustsprog-til-android-set-top-boks" tabindex="-1"><a class="header-anchor" href="#kompilering-af-kiss-ftpd-program-pa-rustsprog-til-android-set-top-boks" aria-hidden="true">#</a> Kompilering af kiss-ftpd ( program p\xE5 rustsprog ) til android set-top boks</h1><p>busyboxen leveres med en rodet ftp-kode, s\xE5 jeg vil kompilere en <a href="https://github.com/moparisthebest/kiss-ftpd" target="_blank" rel="noopener noreferrer">kiss-ftpd</a> til brug p\xE5 set-top-boksen.</p><p>For det f\xF8rste <code>rustup target add aarch64-linux-android</code></p><p>Installer derefter NDK til Android, jeg gjorde det med Android Studio, sk\xE6rmbillede nedenfor.</p><p><img src="//irmw.gumlet.io/qcUqsK.png" alt=""></p><p>Du kan selvf\xF8lgelig ogs\xE5 <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">downloade NDK&#39;en direkte og pakke den ud</a>.</p><p>I 2021 <a href="https://github.com/mozilla/rust-android-gradle/issues/75#issuecomment-970179046" target="_blank" rel="noopener noreferrer">er den h\xF8jeste version af NDK&#39;en, der underst\xF8ttes af rust, 22.1.7171670</a>, s\xE5 brug den f\xF8rst.</p><p>Endelig er kompileringsskriften som f\xF8lger.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>#!/usr/bin/env bash

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
</code></pre></div>`,9);function t(a,s){return o}var p=e(n,[["render",t],["__file","2021-11-11-rust-android.html.vue"]]);export{p as default};
