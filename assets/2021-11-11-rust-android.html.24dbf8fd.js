import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{e}from"./app.2a6a1bd2.js";const r={},o=e(`<h1 id="kiss-ftpd-n-ruosteenkielinen-ohjelma-kaantaminen-android-sovittimelle" tabindex="-1"><a class="header-anchor" href="#kiss-ftpd-n-ruosteenkielinen-ohjelma-kaantaminen-android-sovittimelle" aria-hidden="true">#</a> Kiss-ftpd:n ( ruosteenkielinen ohjelma ) k\xE4\xE4nt\xE4minen android-sovittimelle.</h1><p>busyboxin mukana tulee sotkuinen ftp-koodi, joten aion k\xE4\xE4nt\xE4\xE4 <a href="https://github.com/moparisthebest/kiss-ftpd" target="_blank" rel="noopener noreferrer">kiss-ftpd:</a> n k\xE4ytett\xE4v\xE4ksi digiboksilla.</p><p>Ensinn\xE4kin <code>rustup target add aarch64-linux-android</code></p><p>Asenna sitten Androidin NDK, tein t\xE4m\xE4n Android Studion avulla, kuvakaappaus alla.</p><p><img src="//irmw.gumlet.io/qcUqsK.png" alt=""></p><p>Voit tietenkin my\xF6s <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">ladata NDK:n suoraan ja purkaa</a> sen <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">pakkauksen</a>.</p><p>Vuonna 2021 <a href="https://github.com/mozilla/rust-android-gradle/issues/75#issuecomment-970179046" target="_blank" rel="noopener noreferrer">korkein rustin tukema NDK-versio on 22.1.7171670</a>, joten k\xE4yt\xE4 sit\xE4 ensin.</p><p>Lopuksi k\xE4\xE4nn\xF6skomentosarja on seuraava.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>#!/usr/bin/env bash

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
</code></pre></div>`,9);function a(t,i){return o}var p=n(r,[["render",a],["__file","2021-11-11-rust-android.html.vue"]]);export{p as default};
