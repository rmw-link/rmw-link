import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{e}from"./app.040d9bb0.js";const a={},o=e(`<h1 id="kompilesana-kiss-ftpd-rusas-valodas-programma-android-set-top-box" tabindex="-1"><a class="header-anchor" href="#kompilesana-kiss-ftpd-rusas-valodas-programma-android-set-top-box" aria-hidden="true">#</a> kompil\u0113\u0161ana kiss-ftpd ( r\u016Bsas valodas programma ) android set-top box</h1><p>busybox n\u0101k ar haotisku ftp kodu, t\u0101p\u0113c es esmu gatavojas apkopot <a href="https://github.com/moparisthebest/kiss-ftpd" target="_blank" rel="noopener noreferrer">kiss-ftpd</a> izmantot uz televizora pier\u012Bces.</p><p>Vispirms <code>rustup target add aarch64-linux-android</code></p><p>P\u0113c tam instal\u0113jiet Android NDK, es to izdar\u012Bju ar Android Studio, zem\u0101k redzamais ekr\u0101n\u0161\u0101vi\u0146\u0161.</p><p><img src="//irmw.gumlet.io/qcUqsK.png" alt=""></p><p>Protams, varat ar\u012B <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">lejupiel\u0101d\u0113t NDK tie\u0161i un</a> to <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">atpakot</a>.</p><ol start="2021"><li>gad\u0101 <a href="https://github.com/mozilla/rust-android-gradle/issues/75#issuecomment-970179046" target="_blank" rel="noopener noreferrer">rust atbalst\u012Bt\u0101 augst\u0101k\u0101 NDK versija ir 22.1.7171670</a>, t\u0101p\u0113c vispirms izmantojiet to.</li></ol><p>Visbeidzot, kompil\u0113\u0161anas skripts ir \u0161\u0101ds.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>#!/usr/bin/env bash

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
</code></pre></div>`,9);function t(n,s){return o}var d=r(a,[["render",t],["__file","2021-11-11-rust-android.html.vue"]]);export{d as default};
