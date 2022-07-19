import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as o}from"./app.87d927ab.js";const r={},a=o(`<h1 id="compilacao-do-kiss-ftpd-programa-de-linguagem-de-ferrugem-para-o-set-top-box-androide" tabindex="-1"><a class="header-anchor" href="#compilacao-do-kiss-ftpd-programa-de-linguagem-de-ferrugem-para-o-set-top-box-androide" aria-hidden="true">#</a> Compila\xE7\xE3o do kiss-ftpd (programa de linguagem de ferrugem) para o set-top box andr\xF3ide</h1><p>O busybox vem com um c\xF3digo ftp confuso, por isso vou compilar um <a href="https://github.com/moparisthebest/kiss-ftpd" target="_blank" rel="noopener noreferrer">kiss-ftpd</a> para usar no set-top box.</p><p>Primeiro <code>rustup target add aarch64-linux-android</code></p><p>Depois instale o NDK para Android, fiz isso com o Android Studio, imagem de tela abaixo.</p><p><img src="//irmw.gumlet.io/qcUqsK.png" alt=""></p><p>Claro, voc\xEA tamb\xE9m pode <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">baixar o NDK diretamente e descompact\xE1-lo</a>.</p><p>Em 2021, a <a href="https://github.com/mozilla/rust-android-gradle/issues/75#issuecomment-970179046" target="_blank" rel="noopener noreferrer">vers\xE3o mais alta do NDK suportada pela ferrugem \xE9 a 22.1.7171670</a>, portanto use-a primeiro.</p><p>Finalmente, o roteiro da compila\xE7\xE3o \xE9 o seguinte.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>#!/usr/bin/env bash

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
</code></pre></div>`,9);function n(t,i){return a}var s=e(r,[["render",n],["__file","2021-11-11-rust-android.html.vue"]]);export{s as default};
