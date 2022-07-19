import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{e}from"./app.2a6a1bd2.js";const n={},o=e(`<h1 id="kompilering-av-kiss-ftpd-program-i-rost-for-android-set-top-box" tabindex="-1"><a class="header-anchor" href="#kompilering-av-kiss-ftpd-program-i-rost-for-android-set-top-box" aria-hidden="true">#</a> Kompilering av kiss-ftpd (program i rost) f\xF6r android set-top box</h1><p>busyboxen levereras med en r\xF6rig ftp-kod, s\xE5 jag ska kompilera en <a href="https://github.com/moparisthebest/kiss-ftpd" target="_blank" rel="noopener noreferrer">kiss-ftpd</a> f\xF6r att anv\xE4nda den p\xE5 set-top-boxen.</p><p>F\xF6r det f\xF6rsta <code>rustup target add aarch64-linux-android</code></p><p>Installera sedan NDK f\xF6r Android, jag gjorde detta med Android Studio, sk\xE4rmdump nedan.</p><p><img src="//irmw.gumlet.io/qcUqsK.png" alt=""></p><p>Du kan naturligtvis ocks\xE5 <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">ladda ner NDK direkt och packa upp</a> den.</p><p>\xC5r 2021 <a href="https://github.com/mozilla/rust-android-gradle/issues/75#issuecomment-970179046" target="_blank" rel="noopener noreferrer">\xE4r den h\xF6gsta versionen av NDK som st\xF6ds av rust 22.1.7171670</a>, s\xE5 anv\xE4nd den f\xF6rst.</p><p>Slutligen \xE4r kompileringsskriptet f\xF6ljande.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>#!/usr/bin/env bash

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
</code></pre></div>`,9);function t(a,d){return o}var p=r(n,[["render",t],["__file","2021-11-11-rust-android.html.vue"]]);export{p as default};
