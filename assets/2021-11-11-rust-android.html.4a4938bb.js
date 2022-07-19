import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as r}from"./app.87d927ab.js";const n={},o=r(`<h1 id="\u043A\u043E\u043C\u043F\u0438\u043B\u0438\u0440\u0430\u043D\u0435-\u043D\u0430-kiss-ftpd-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0430-\u043D\u0430-\u0435\u0437\u0438\u043A\u0430-\u043D\u0430-\u0440\u044A\u0436\u0434\u0430\u0442\u0430-\u0437\u0430-android-set-top-box" tabindex="-1"><a class="header-anchor" href="#\u043A\u043E\u043C\u043F\u0438\u043B\u0438\u0440\u0430\u043D\u0435-\u043D\u0430-kiss-ftpd-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0430-\u043D\u0430-\u0435\u0437\u0438\u043A\u0430-\u043D\u0430-\u0440\u044A\u0436\u0434\u0430\u0442\u0430-\u0437\u0430-android-set-top-box" aria-hidden="true">#</a> \u041A\u043E\u043C\u043F\u0438\u043B\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 kiss-ftpd ( \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0430 \u043D\u0430 \u0435\u0437\u0438\u043A\u0430 \u043D\u0430 \u0440\u044A\u0436\u0434\u0430\u0442\u0430 ) \u0437\u0430 Android set-top box</h1><p>busybox \u0438\u0434\u0432\u0430 \u0441 \u0440\u0430\u0437\u0445\u0432\u044A\u0440\u043B\u044F\u043D ftp \u043A\u043E\u0434, \u0442\u0430\u043A\u0430 \u0447\u0435 \u0449\u0435 \u043A\u043E\u043C\u043F\u0438\u043B\u0438\u0440\u0430\u043C <a href="https://github.com/moparisthebest/kiss-ftpd" target="_blank" rel="noopener noreferrer">kiss-ftpd</a>, \u0437\u0430 \u0434\u0430 \u0433\u043E \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043C \u043D\u0430 \u0434\u0435\u043A\u043E\u0434\u0435\u0440\u0430.</p><p>\u041D\u0430 \u043F\u044A\u0440\u0432\u043E \u043C\u044F\u0441\u0442\u043E <code>rustup target add aarch64-linux-android</code></p><p>\u0421\u043B\u0435\u0434 \u0442\u043E\u0432\u0430 \u0438\u043D\u0441\u0442\u0430\u043B\u0438\u0440\u0430\u0439\u0442\u0435 NDK \u0437\u0430 Android, \u0430\u0437 \u043D\u0430\u043F\u0440\u0430\u0432\u0438\u0445 \u0442\u043E\u0432\u0430 \u0441 Android Studio, \u0441\u043D\u0438\u043C\u043A\u0430 \u043F\u043E-\u0434\u043E\u043B\u0443.</p><p><img src="//irmw.gumlet.io/qcUqsK.png" alt=""></p><p>\u0420\u0430\u0437\u0431\u0438\u0440\u0430 \u0441\u0435, \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u044A\u0449\u043E \u0442\u0430\u043A\u0430 \u0434\u0430 <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">\u0438\u0437\u0442\u0435\u0433\u043B\u0438\u0442\u0435 NDK \u0434\u0438\u0440\u0435\u043A\u0442\u043D\u043E \u0438</a> \u0434\u0430 \u0433\u043E <a href="https://developer.android.com/ndk/downloads" target="_blank" rel="noopener noreferrer">\u0440\u0430\u0437\u043E\u043F\u0430\u043A\u043E\u0432\u0430\u0442\u0435</a>.</p><p>\u0412 2021 \u0433. <a href="https://github.com/mozilla/rust-android-gradle/issues/75#issuecomment-970179046" target="_blank" rel="noopener noreferrer">\u043D\u0430\u0439-\u0432\u0438\u0441\u043E\u043A\u0430\u0442\u0430 \u0432\u0435\u0440\u0441\u0438\u044F \u043D\u0430 NDK, \u043F\u043E\u0434\u0434\u044A\u0440\u0436\u0430\u043D\u0430 \u043E\u0442 rust, \u0435 22.1.7171670</a>, \u0442\u0430\u043A\u0430 \u0447\u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0439\u0442\u0435 \u043F\u044A\u0440\u0432\u043E \u043D\u0435\u044F.</p><p>\u041D\u0430\u043A\u0440\u0430\u044F, \u0441\u043A\u0440\u0438\u043F\u0442\u044A\u0442 \u0437\u0430 \u043A\u043E\u043C\u043F\u0438\u043B\u0438\u0440\u0430\u043D\u0435 \u0435 \u0441\u043B\u0435\u0434\u043D\u0438\u044F\u0442.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>#!/usr/bin/env bash

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
</code></pre></div>`,9);function t(a,d){return o}var s=e(n,[["render",t],["__file","2021-11-11-rust-android.html.vue"]]);export{s as default};
