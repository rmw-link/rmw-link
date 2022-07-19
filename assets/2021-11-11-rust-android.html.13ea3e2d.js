import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.2a6a1bd2.js";const o={},n=r(`<h1 id="kompilacja-kiss-ftpd-program-w-jezyku-rust-dla-android-set-top-box" tabindex="-1"><a class="header-anchor" href="#kompilacja-kiss-ftpd-program-w-jezyku-rust-dla-android-set-top-box" aria-hidden="true">#</a> Kompilacja kiss-ftpd (program w j\u0119zyku rust) dla android set-top box</h1><p>busybox jest dostarczany z niechlujnym kodem ftp, wi\u0119c zamierzam skompilowa\u0107 <a href="https://github.com/moparisthebest/kiss-ftpd" target="_blank" rel="noopener noreferrer">kiss-ftpd</a>, aby u\u017Cywa\u0107 go na dekoderze.</p><p>Po pierwsze <code>rustup target add aarch64-linux-android</code></p><p>Nast\u0119pnie zainstaluj pakiet NDK dla systemu Android, ja zrobi\u0142em to za pomoc\u0105 programu Android Studio, zrzut ekranu poni\u017Cej.</p><p><img src="//irmw.gumlet.io/qcUqsK.png" alt=""></p><p>Oczywi\u015Bcie mo\u017Cna te\u017C <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">pobra\u0107 NDK bezpo\u015Brednio i rozpakowa\u0107</a>.</p><p>W 2021 roku <a href="https://github.com/mozilla/rust-android-gradle/issues/75#issuecomment-970179046" target="_blank" rel="noopener noreferrer">najwy\u017Csz\u0105 wersj\u0105 NDK obs\u0142ugiwan\u0105 przez rust jest 22.1.7171670</a>, wi\u0119c nale\u017Cy jej u\u017Cy\u0107 w pierwszej kolejno\u015Bci.</p><p>Ostatecznie skrypt kompilacji wygl\u0105da nast\u0119puj\u0105co.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>#!/usr/bin/env bash

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
</code></pre></div>`,9);function a(t,i){return n}var d=e(o,[["render",a],["__file","2021-11-11-rust-android.html.vue"]]);export{d as default};
