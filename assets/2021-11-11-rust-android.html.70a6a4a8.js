import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.87d927ab.js";const n={},a=r(`<h1 id="compilarea-kiss-ftpd-program-in-limba-rugina-pentru-android-set-top-box" tabindex="-1"><a class="header-anchor" href="#compilarea-kiss-ftpd-program-in-limba-rugina-pentru-android-set-top-box" aria-hidden="true">#</a> Compilarea kiss-ftpd (program \xEEn limba rugin\u0103) pentru android set-top box</h1><p>Busybox vine cu un cod ftp dezordonat, a\u0219a c\u0103 voi compila un <a href="https://github.com/moparisthebest/kiss-ftpd" target="_blank" rel="noopener noreferrer">kiss-ftpd</a> pentru a-l folosi pe set-top box.</p><p>\xCEn primul r\xE2nd <code>rustup target add aarch64-linux-android</code></p><p>Apoi instala\u021Bi NDK pentru Android, am f\u0103cut acest lucru cu Android Studio, captura de ecran de mai jos.</p><p><img src="//irmw.gumlet.io/qcUqsK.png" alt=""></p><p>Bine\xEEn\u021Beles, pute\u021Bi <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">desc\u0103rca direct NDK \u0219i</a> \xEEl pute\u021Bi <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">despacheta</a>.</p><p>\xCEn 2021, cea <a href="https://github.com/mozilla/rust-android-gradle/issues/75#issuecomment-970179046" target="_blank" rel="noopener noreferrer">mai mare versiune a NDK-ului acceptat de rust este 22.1.7171670</a>, a\u0219a c\u0103 utiliza\u021Bi-o mai \xEEnt\xE2i.</p><p>\xCEn cele din urm\u0103, scriptul de compilare este urm\u0103torul.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>#!/usr/bin/env bash

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
</code></pre></div>`,9);function o(t,i){return a}var s=e(n,[["render",o],["__file","2021-11-11-rust-android.html.vue"]]);export{s as default};
