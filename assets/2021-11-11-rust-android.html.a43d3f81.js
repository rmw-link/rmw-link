import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.040d9bb0.js";const n={},o=r(`<h1 id="kompilieren-von-kiss-ftpd-rust-sprachprogramm-fur-android-set-top-box" tabindex="-1"><a class="header-anchor" href="#kompilieren-von-kiss-ftpd-rust-sprachprogramm-fur-android-set-top-box" aria-hidden="true">#</a> Kompilieren von kiss-ftpd (Rust-Sprachprogramm) f\xFCr android set-top box</h1><p>Die busybox kommt mit einem unordentlichen ftp-Code, also werde ich einen <a href="https://github.com/moparisthebest/kiss-ftpd" target="_blank" rel="noopener noreferrer">kiss-ftpd</a> kompilieren, um ihn auf der Set-Top-Box zu verwenden.</p><p>Erstens <code>rustup target add aarch64-linux-android</code></p><p>Dann installieren Sie das NDK f\xFCr Android, ich habe das mit Android Studio gemacht, Screenshot unten.</p><p><img src="//irmw.gumlet.io/qcUqsK.png" alt=""></p><p>Nat\xFCrlich k\xF6nnen Sie <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">das NDK</a> auch <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">direkt herunterladen und entpacken</a>.</p><p>Im Jahr 2021 <a href="https://github.com/mozilla/rust-android-gradle/issues/75#issuecomment-970179046" target="_blank" rel="noopener noreferrer">ist die h\xF6chste von Rust unterst\xFCtzte Version des NDK 22.1.7171670</a>, also verwenden Sie diese zuerst.</p><p>Das Kompilierungsskript schlie\xDFlich lautet wie folgt.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>#!/usr/bin/env bash

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
</code></pre></div>`,9);function t(a,i){return o}var p=e(n,[["render",t],["__file","2021-11-11-rust-android.html.vue"]]);export{p as default};
