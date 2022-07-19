import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as n}from"./app.87d927ab.js";const o={},r=n(`<h1 id="compilazione-di-kiss-ftpd-programma-in-linguaggio-rust-per-set-top-box-android" tabindex="-1"><a class="header-anchor" href="#compilazione-di-kiss-ftpd-programma-in-linguaggio-rust-per-set-top-box-android" aria-hidden="true">#</a> Compilazione di kiss-ftpd (programma in linguaggio rust) per set-top box android</h1><p>La busybox viene fornita con un codice ftp disordinato, quindi ho intenzione di compilare un <a href="https://github.com/moparisthebest/kiss-ftpd" target="_blank" rel="noopener noreferrer">kiss-ftpd</a> da usare sul set-top box.</p><p>In primo luogo <code>rustup target add aarch64-linux-android</code></p><p>Poi installate l&#39;NDK per Android, io l&#39;ho fatto con Android Studio, screenshot qui sotto.</p><p><img src="//irmw.gumlet.io/qcUqsK.png" alt=""></p><p>Naturalmente, potete anche <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">scaricare direttamente l&#39;NDK e scompattarlo</a>.</p><p>Nel 2021, la <a href="https://github.com/mozilla/rust-android-gradle/issues/75#issuecomment-970179046" target="_blank" rel="noopener noreferrer">versione pi\xF9 alta dell&#39;NDK supportata da rust \xE8 la 22.1.7171670</a>, quindi usate prima quella.</p><p>Infine, lo script di compilazione \xE8 il seguente.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>#!/usr/bin/env bash

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
</code></pre></div>`,9);function t(a,i){return r}var d=e(o,[["render",t],["__file","2021-11-11-rust-android.html.vue"]]);export{d as default};
