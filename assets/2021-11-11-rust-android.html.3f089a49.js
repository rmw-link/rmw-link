import{_ as t,r as p,o,c as l,a as s,b as e,F as r,d as a,e as i}from"./app.b761d2b7.js";const c={},k=s("h1",{id:"kompilering-av-kiss-ftpd-program-i-rost-for-android-set-top-box",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#kompilering-av-kiss-ftpd-program-i-rost-for-android-set-top-box","aria-hidden":"true"},"#"),a(" Kompilering av kiss-ftpd (program i rost) f\xF6r android set-top box")],-1),b=a("busyboxen levereras med en r\xF6rig ftp-kod, s\xE5 jag ska kompilera en "),d={href:"https://github.com/moparisthebest/kiss-ftpd",target:"_blank",rel:"noopener noreferrer"},u=a("kiss-ftpd"),v=a(" f\xF6r att anv\xE4nda den p\xE5 set-top-boxen."),m=s("p",null,[a("F\xF6r det f\xF6rsta "),s("code",null,"rustup target add aarch64-linux-android")],-1),g=s("p",null,"Installera sedan NDK f\xF6r Android, jag gjorde detta med Android Studio, sk\xE4rmdump nedan.",-1),_=s("p",null,[s("img",{src:"//irmw.gumlet.io/qcUqsK.png",alt:""})],-1),h=a("Du kan naturligtvis ocks\xE5 "),f={href:"https://developer.android.com/ndk/downloads",target:"_blank",rel:"noopener noreferrer"},A=a("ladda ner NDK direkt och packa upp"),T=a(" den."),$=a("\xC5r 2021 "),x={href:"https://github.com/mozilla/rust-android-gradle/issues/75#issuecomment-970179046",target:"_blank",rel:"noopener noreferrer"},R=a("\xE4r den h\xF6gsta versionen av NDK som st\xF6ds av rust 22.1.7171670"),N=a(", s\xE5 anv\xE4nd den f\xF6rst."),I=i(`<p>Slutligen \xE4r kompileringsskriptet f\xF6ljande.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>

<span class="token assign-left variable">DIR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> <span class="token string">&quot;<span class="token variable">$0</span>&quot;</span><span class="token variable">)</span></span>&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>
<span class="token builtin class-name">set</span> -ex
<span class="token builtin class-name">cd</span> <span class="token variable">$DIR</span>

<span class="token builtin class-name">export</span> <span class="token assign-left variable">API</span><span class="token operator">=</span><span class="token number">30</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NDK_VERSION</span><span class="token operator">=</span><span class="token number">22.1</span>.7171670

<span class="token builtin class-name">export</span> <span class="token assign-left variable">TARGET</span><span class="token operator">=</span>aarch64-linux-android

<span class="token builtin class-name">export</span> <span class="token assign-left variable">os</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">uname</span> -s<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{ print tolower($0) }&#39;</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NDK</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/Library/Android/sdk/ndk/<span class="token variable">$NDK_VERSION</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ANDROID_NDK_HOME</span><span class="token operator">=</span><span class="token variable">$NDK</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">TOOLCHAIN</span><span class="token operator">=</span><span class="token variable">$NDK</span>/toolchains/llvm/prebuilt/<span class="token variable">$os</span>-x86_64
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$TOOLCHAIN</span>/bin:<span class="token environment constant">$PATH</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">AR</span><span class="token operator">=</span><span class="token variable">$TOOLCHAIN</span>/bin/llvm-ar
<span class="token builtin class-name">export</span> <span class="token assign-left variable">AS</span><span class="token operator">=</span><span class="token variable">$TOOLCHAIN</span>/bin/<span class="token variable">$TARGET</span>-as
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CC</span><span class="token operator">=</span><span class="token variable">$TOOLCHAIN</span>/bin/<span class="token variable">$TARGET</span><span class="token variable">$API</span>-clang
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CXX</span><span class="token operator">=</span><span class="token variable">$TOOLCHAIN</span>/bin/<span class="token variable">$TARGET</span><span class="token variable">$API</span>-clang++
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LD</span><span class="token operator">=</span><span class="token variable">$TOOLCHAIN</span>/bin/<span class="token variable">$TARGET</span>-ld
<span class="token builtin class-name">export</span> <span class="token assign-left variable">RANLIB</span><span class="token operator">=</span><span class="token variable">$TOOLCHAIN</span>/bin/<span class="token variable">$TARGET</span>-ranlib
<span class="token builtin class-name">export</span> <span class="token assign-left variable">STRIP</span><span class="token operator">=</span><span class="token variable">$TOOLCHAIN</span>/bin/<span class="token variable">$TARGET</span>-strip

<span class="token assign-left variable">CARGO_TARGET</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $<span class="token punctuation">{</span>TARGET//-/_<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ print toupper($0) }&#39;</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">export</span> CARGO_TARGET_<span class="token variable">\${CARGO_TARGET}</span>_LINKER<span class="token operator">=</span><span class="token variable">$CC</span>

<span class="token builtin class-name">echo</span> <span class="token string">&#39;AR = &#39;</span><span class="token variable">$AR</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;AS = &#39;</span><span class="token variable">$AS</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;CC = &#39;</span><span class="token variable">$CC</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;CXX = &#39;</span><span class="token variable">$CXX</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;LD = &#39;</span><span class="token variable">$LD</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;RANLIB = &#39;</span><span class="token variable">$RANLIB</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;STRIP = &#39;</span><span class="token variable">$STRIP</span>

<span class="token assign-left variable">RUST_BACKTRACE</span><span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\\</span>
cargo +nightly build --release --target aarch64-linux-android
</code></pre></div>`,2);function C(O,E){const n=p("ExternalLinkIcon");return o(),l(r,null,[k,s("p",null,[b,s("a",d,[u,e(n)]),v]),m,g,_,s("p",null,[h,s("a",f,[A,e(n)]),T]),s("p",null,[$,s("a",x,[R,e(n)]),N]),I],64)}var D=t(c,[["render",C],["__file","2021-11-11-rust-android.html.vue"]]);export{D as default};
