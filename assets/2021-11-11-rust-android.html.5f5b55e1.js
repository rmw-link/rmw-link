import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.2a6a1bd2.js";const o={},n=r(`<h1 id="kompiliranje-kiss-ftpd-rust-jezikovni-program-za-android-set-top-box" tabindex="-1"><a class="header-anchor" href="#kompiliranje-kiss-ftpd-rust-jezikovni-program-za-android-set-top-box" aria-hidden="true">#</a> Kompiliranje kiss-ftpd ( rust jezikovni program ) za android set-top box</h1><p>busybox prihaja z neredno ftp kodo, zato bom sestavil <a href="https://github.com/moparisthebest/kiss-ftpd" target="_blank" rel="noopener noreferrer">kiss-ftpd</a> za uporabo na set-top boxu.</p><p>Najprej <code>rustup target add aarch64-linux-android</code></p><p>Nato namestite NDK za Android, to sem storil s programom Android Studio, spodnja slika zaslona.</p><p><img src="//irmw.gumlet.io/qcUqsK.png" alt=""></p><p>Seveda lahko <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">NDK prenesete</a> tudi <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">neposredno</a> in ga <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">razpakirate</a>.</p><p>V letu 2021 <a href="https://github.com/mozilla/rust-android-gradle/issues/75#issuecomment-970179046" target="_blank" rel="noopener noreferrer">je najvi\u0161ja razli\u010Dica NDK, ki jo podpira rust, 22.1.7171670</a>, zato najprej uporabite to razli\u010Dico.</p><p>Skripta za sestavljanje je naslednja.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>#!/usr/bin/env bash

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
</code></pre></div>`,9);function a(t,i){return n}var s=e(o,[["render",a],["__file","2021-11-11-rust-android.html.vue"]]);export{s as default};
