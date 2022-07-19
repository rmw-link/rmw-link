import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.87d927ab.js";const n={},a=r(`<h1 id="compilacion-de-kiss-ftpd-programa-en-lenguaje-rust-para-set-top-box-android" tabindex="-1"><a class="header-anchor" href="#compilacion-de-kiss-ftpd-programa-en-lenguaje-rust-para-set-top-box-android" aria-hidden="true">#</a> Compilaci\xF3n de kiss-ftpd ( programa en lenguaje rust ) para set-top box android</h1><p>El busybox viene con un c\xF3digo ftp desordenado, as\xED que voy a compilar un <a href="https://github.com/moparisthebest/kiss-ftpd" target="_blank" rel="noopener noreferrer">kiss-ftpd</a> para usarlo en el set-top box.</p><p>En primer lugar <code>rustup target add aarch64-linux-android</code></p><p>Luego instala el NDK para Android, yo lo hice con Android Studio, captura de pantalla abajo.</p><p><img src="//irmw.gumlet.io/qcUqsK.png" alt=""></p><p>Por supuesto, tambi\xE9n puedes <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">descargar el NDK directamente y descomprimirlo</a>.</p><p>En 2021, la <a href="https://github.com/mozilla/rust-android-gradle/issues/75#issuecomment-970179046" target="_blank" rel="noopener noreferrer">versi\xF3n m\xE1s alta del NDK soportada por rust es la 22.1.7171670</a>, as\xED que usa esa primero.</p><p>Por \xFAltimo, el script de compilaci\xF3n es el siguiente.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>#!/usr/bin/env bash

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
</code></pre></div>`,9);function o(t,i){return a}var d=e(n,[["render",o],["__file","2021-11-11-rust-android.html.vue"]]);export{d as default};
