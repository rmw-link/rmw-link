import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.87d927ab.js";const t={},o=r(`<h1 id="kiss-ftpd-rozsda-nyelvi-program-forditasa-android-set-top-boxhoz" tabindex="-1"><a class="header-anchor" href="#kiss-ftpd-rozsda-nyelvi-program-forditasa-android-set-top-boxhoz" aria-hidden="true">#</a> Kiss-ftpd ( rozsda nyelvi program ) ford\xEDt\xE1sa android set-top boxhoz</h1><p>A busybox egy kusza ftp k\xF3ddal \xE9rkezik, ez\xE9rt \xF6ssze\xE1ll\xEDtok egy <a href="https://github.com/moparisthebest/kiss-ftpd" target="_blank" rel="noopener noreferrer">kiss-ftpd-t</a>, hogy a set-top boxon haszn\xE1lhassam.</p><p>El\u0151sz\xF6r is <code>rustup target add aarch64-linux-android</code></p><p>Ezut\xE1n telep\xEDtse az NDK for Androidot, \xE9n ezt az Android Studio seg\xEDts\xE9g\xE9vel tettem, al\xE1bbi k\xE9perny\u0151k\xE9p.</p><p><img src="//irmw.gumlet.io/qcUqsK.png" alt=""></p><p>Term\xE9szetesen az <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">NDK-t k\xF6zvetlen\xFCl is let\xF6ltheti \xE9s kicsomagolhatja.</a></p><p>2021-ben a <a href="https://github.com/mozilla/rust-android-gradle/issues/75#issuecomment-970179046" target="_blank" rel="noopener noreferrer">rust \xE1ltal t\xE1mogatott NDK legmagasabb verzi\xF3ja a 22.1.7171670</a>, ez\xE9rt el\u0151sz\xF6r ezt haszn\xE1ld.</p><p>V\xE9g\xFCl a ford\xEDt\xE1si szkript a k\xF6vetkez\u0151.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>#!/usr/bin/env bash

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
</code></pre></div>`,9);function n(a,s){return o}var p=e(t,[["render",n],["__file","2021-11-11-rust-android.html.vue"]]);export{p as default};
