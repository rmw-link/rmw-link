import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.040d9bb0.js";const o={},a=r(`<h1 id="kiss-ftpd-rooste-keele-programm-android-digiboksi-jaoks-kompileerimine" tabindex="-1"><a class="header-anchor" href="#kiss-ftpd-rooste-keele-programm-android-digiboksi-jaoks-kompileerimine" aria-hidden="true">#</a> Kiss-ftpd ( rooste keele programm ) android digiboksi jaoks kompileerimine</h1><p>Busyboxiga on kaasas r\xE4pane ftp-kood, nii et ma kavatsen kompileerida <a href="https://github.com/moparisthebest/kiss-ftpd" target="_blank" rel="noopener noreferrer">kiss-ftpd</a>, mida kasutada digiboksis.</p><p>Esiteks <code>rustup target add aarch64-linux-android</code></p><p>Seej\xE4rel installige NDK for Android, ma tegin seda Android Studio abil, ekraanipilt allpool.</p><p><img src="//irmw.gumlet.io/qcUqsK.png" alt=""></p><p>Loomulikult v\xF5ite <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">NDK</a> ka <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">otse alla laadida ja lahti pakkida</a>.</p><p>Aastal 2021 <a href="https://github.com/mozilla/rust-android-gradle/issues/75#issuecomment-970179046" target="_blank" rel="noopener noreferrer">on rooste poolt toetatud NDK k\xF5rgeim versioon 22.1.7171670</a>, seega kasutage k\xF5igepealt seda.</p><p>L\xF5puks on kompileerimisskript j\xE4rgmine.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>#!/usr/bin/env bash

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
</code></pre></div>`,9);function n(i,t){return a}var p=e(o,[["render",n],["__file","2021-11-11-rust-android.html.vue"]]);export{p as default};
