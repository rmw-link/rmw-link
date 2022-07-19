import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.040d9bb0.js";const n={},o=r(`<h1 id="compilation-de-kiss-ftpd-programme-en-langage-rust-pour-le-set-top-box-android" tabindex="-1"><a class="header-anchor" href="#compilation-de-kiss-ftpd-programme-en-langage-rust-pour-le-set-top-box-android" aria-hidden="true">#</a> Compilation de kiss-ftpd (programme en langage rust) pour le set-top box android</h1><p>La busybox est livr\xE9e avec un code ftp d\xE9sordonn\xE9, je vais donc compiler un <a href="https://github.com/moparisthebest/kiss-ftpd" target="_blank" rel="noopener noreferrer">kiss-ftpd</a> \xE0 utiliser sur la set-top box.</p><p>Tout d&#39;abord <code>rustup target add aarch64-linux-android</code></p><p>Ensuite, installez le NDK pour Android, je l&#39;ai fait avec Android Studio, capture d&#39;\xE9cran ci-dessous.</p><p><img src="//irmw.gumlet.io/qcUqsK.png" alt=""></p><p>Bien entendu, vous pouvez \xE9galement <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">t\xE9l\xE9charger directement le NDK et</a> le <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">d\xE9compresser</a>.</p><p>En 2021, la <a href="https://github.com/mozilla/rust-android-gradle/issues/75#issuecomment-970179046" target="_blank" rel="noopener noreferrer">plus haute version du NDK support\xE9e par rust est 22.1.7171670</a>, donc utilisez-la en premier.</p><p>Enfin, le script de compilation est le suivant.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>#!/usr/bin/env bash

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
</code></pre></div>`,9);function t(a,i){return o}var d=e(n,[["render",t],["__file","2021-11-11-rust-android.html.vue"]]);export{d as default};
