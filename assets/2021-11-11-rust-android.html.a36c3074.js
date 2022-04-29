import{_ as t,r as p,o as l,c as o,a as s,b as e,F as r,d as a,e as i}from"./app.b761d2b7.js";const c={},k=s("h1",{id:"kiss-ftpd-rozsda-nyelvi-program-forditasa-android-set-top-boxhoz",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#kiss-ftpd-rozsda-nyelvi-program-forditasa-android-set-top-boxhoz","aria-hidden":"true"},"#"),a(" Kiss-ftpd ( rozsda nyelvi program ) ford\xEDt\xE1sa android set-top boxhoz")],-1),b=a("A busybox egy kusza ftp k\xF3ddal \xE9rkezik, ez\xE9rt \xF6ssze\xE1ll\xEDtok egy "),d={href:"https://github.com/moparisthebest/kiss-ftpd",target:"_blank",rel:"noopener noreferrer"},u=a("kiss-ftpd-t"),v=a(", hogy a set-top boxon haszn\xE1lhassam."),m=s("p",null,[a("El\u0151sz\xF6r is "),s("code",null,"rustup target add aarch64-linux-android")],-1),g=s("p",null,"Ezut\xE1n telep\xEDtse az NDK for Androidot, \xE9n ezt az Android Studio seg\xEDts\xE9g\xE9vel tettem, al\xE1bbi k\xE9perny\u0151k\xE9p.",-1),_=s("p",null,[s("img",{src:"//irmw.gumlet.io/qcUqsK.png",alt:""})],-1),h=a("Term\xE9szetesen az "),f={href:"https://developer.android.com/ndk/downloads",target:"_blank",rel:"noopener noreferrer"},A=a("NDK-t k\xF6zvetlen\xFCl is let\xF6ltheti \xE9s kicsomagolhatja."),T=a("2021-ben a "),$={href:"https://github.com/mozilla/rust-android-gradle/issues/75#issuecomment-970179046",target:"_blank",rel:"noopener noreferrer"},x=a("rust \xE1ltal t\xE1mogatott NDK legmagasabb verzi\xF3ja a 22.1.7171670"),R=a(", ez\xE9rt el\u0151sz\xF6r ezt haszn\xE1ld."),N=i(`<p>V\xE9g\xFCl a ford\xEDt\xE1si szkript a k\xF6vetkez\u0151.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>

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
</code></pre></div>`,2);function z(C,I){const n=p("ExternalLinkIcon");return l(),o(r,null,[k,s("p",null,[b,s("a",d,[u,e(n)]),v]),m,g,_,s("p",null,[h,s("a",f,[A,e(n)])]),s("p",null,[T,s("a",$,[x,e(n)]),R]),N],64)}var E=t(c,[["render",z],["__file","2021-11-11-rust-android.html.vue"]]);export{E as default};
