import{_ as t,r as p,o,c as l,a as s,b as e,F as r,d as a,e as c}from"./app.8d0bec44.js";const i={},k=s("h1",{id:"kompilace-kiss-ftpd-program-v-jazyce-rust-pro-set-top-box-s-androidem",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#kompilace-kiss-ftpd-program-v-jazyce-rust-pro-set-top-box-s-androidem","aria-hidden":"true"},"#"),a(" Kompilace kiss-ftpd ( program v jazyce rust ) pro set-top box s Androidem")],-1),b=a("busybox je dod\xE1v\xE1n s chaotick\xFDm ftp k\xF3dem, tak\u017Ee se chyst\xE1m zkompilovat "),d={href:"https://github.com/moparisthebest/kiss-ftpd",target:"_blank",rel:"noopener noreferrer"},u=a("kiss-ftpd"),v=a(" pro pou\u017Eit\xED na set-top boxu."),m=s("p",null,[a("Nejprve "),s("code",null,"rustup target add aarch64-linux-android")],-1),_=s("p",null,"Pot\xE9 nainstalujte NDK pro Android, j\xE1 jsem to ud\u011Blal pomoc\xED Android Studia, obr\xE1zek n\xED\u017Ee.",-1),h=s("p",null,[s("img",{src:"//irmw.gumlet.io/qcUqsK.png",alt:""})],-1),g={href:"https://developer.android.com/ndk/downloads",target:"_blank",rel:"noopener noreferrer"},A=a("NDK si"),f=a(" samoz\u0159ejm\u011B m\u016F\u017Eete "),T={href:"https://developer.android.com/ndk/downloads",target:"_blank",rel:"noopener noreferrer"},$=a("st\xE1hnout p\u0159\xEDmo a rozbalit"),x=a("."),R=a("V roce 2021 "),N={href:"https://github.com/mozilla/rust-android-gradle/issues/75#issuecomment-970179046",target:"_blank",rel:"noopener noreferrer"},C=a("je nejvy\u0161\u0161\xED verze NDK podporovan\xE1 rustem 22.1.7171670"),I=a(", tak\u017Ee ji pou\u017Eijte jako prvn\xED."),O=c(`<p>Nakonec je kompila\u010Dn\xED skript n\xE1sleduj\xEDc\xED.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>

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
</code></pre></div>`,2);function E(L,j){const n=p("ExternalLinkIcon");return o(),l(r,null,[k,s("p",null,[b,s("a",d,[u,e(n)]),v]),m,_,h,s("p",null,[s("a",g,[A,e(n)]),f,s("a",T,[$,e(n)]),x]),s("p",null,[R,s("a",N,[C,e(n)]),I]),O],64)}var G=t(i,[["render",E],["__file","2021-11-11-rust-android.html.vue"]]);export{G as default};