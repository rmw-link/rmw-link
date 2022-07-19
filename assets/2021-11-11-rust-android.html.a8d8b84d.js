import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.2a6a1bd2.js";const e={},o=r(`<h1 id="kompiliuoti-kiss-ftpd-rudziu-kalbos-programa-android-set-top-box" tabindex="-1"><a class="header-anchor" href="#kompiliuoti-kiss-ftpd-rudziu-kalbos-programa-android-set-top-box" aria-hidden="true">#</a> Kompiliuoti kiss-ftpd ( r\u016Bd\u017Ei\u0173 kalbos programa ) android set-top box</h1><p>\u012E busybox ateina su netvarkinga ftp kodas, tod\u0117l a\u0161 ketinu parengti <a href="https://github.com/moparisthebest/kiss-ftpd" target="_blank" rel="noopener noreferrer">kiss-ftpd</a> naudoti televizoriaus pried\u0117lyje.</p><p>Pirmiausia <code>rustup target add aarch64-linux-android</code></p><p>Tada \u012Fdiekite &quot;Android&quot; NDK, a\u0161 tai padariau naudodamasis &quot;Android Studio&quot;, ekrano nuotrauka pateikta toliau.</p><p><img src="//irmw.gumlet.io/qcUqsK.png" alt=""></p><p>\u017Dinoma, taip pat galite <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">tiesiogiai atsisi\u0173sti NDK ir</a> j\u012F <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">i\u0161pakuoti</a>.</p><p>2021 m. <a href="https://github.com/mozilla/rust-android-gradle/issues/75#issuecomment-970179046" target="_blank" rel="noopener noreferrer">auk\u0161\u010Diausia NDK versija, palaikoma rust, yra 22.1.7171670</a>, tod\u0117l pirmiausia naudokite j\u0105.</p><p>Galiausiai, kompiliavimo scenarijus yra toks.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>#!/usr/bin/env bash

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
</code></pre></div>`,9);function t(i,n){return o}var p=a(e,[["render",t],["__file","2021-11-11-rust-android.html.vue"]]);export{p as default};