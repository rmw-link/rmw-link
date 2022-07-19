import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as o}from"./app.87d927ab.js";const r={},n=o(`<h1 id="kompilace-kiss-ftpd-program-v-jazyce-rust-pro-set-top-box-s-androidem" tabindex="-1"><a class="header-anchor" href="#kompilace-kiss-ftpd-program-v-jazyce-rust-pro-set-top-box-s-androidem" aria-hidden="true">#</a> Kompilace kiss-ftpd ( program v jazyce rust ) pro set-top box s Androidem</h1><p>busybox je dod\xE1v\xE1n s chaotick\xFDm ftp k\xF3dem, tak\u017Ee se chyst\xE1m zkompilovat <a href="https://github.com/moparisthebest/kiss-ftpd" target="_blank" rel="noopener noreferrer">kiss-ftpd</a> pro pou\u017Eit\xED na set-top boxu.</p><p>Nejprve <code>rustup target add aarch64-linux-android</code></p><p>Pot\xE9 nainstalujte NDK pro Android, j\xE1 jsem to ud\u011Blal pomoc\xED Android Studia, obr\xE1zek n\xED\u017Ee.</p><p><img src="//irmw.gumlet.io/qcUqsK.png" alt=""></p><p><a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">NDK si</a> samoz\u0159ejm\u011B m\u016F\u017Eete <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">st\xE1hnout p\u0159\xEDmo a rozbalit</a>.</p><p>V roce 2021 <a href="https://github.com/mozilla/rust-android-gradle/issues/75#issuecomment-970179046" target="_blank" rel="noopener noreferrer">je nejvy\u0161\u0161\xED verze NDK podporovan\xE1 rustem 22.1.7171670</a>, tak\u017Ee ji pou\u017Eijte jako prvn\xED.</p><p>Nakonec je kompila\u010Dn\xED skript n\xE1sleduj\xEDc\xED.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>#!/usr/bin/env bash

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
</code></pre></div>`,9);function t(a,p){return n}var d=e(r,[["render",t],["__file","2021-11-11-rust-android.html.vue"]]);export{d as default};
