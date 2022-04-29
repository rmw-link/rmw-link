import{_ as t,r as p,o,c as l,a as s,b as e,F as i,d as a,e as r}from"./app.b761d2b7.js";const c={},k=s("h1",{id:"compilarea-kiss-ftpd-program-in-limba-rugina-pentru-android-set-top-box",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#compilarea-kiss-ftpd-program-in-limba-rugina-pentru-android-set-top-box","aria-hidden":"true"},"#"),a(" Compilarea kiss-ftpd (program \xEEn limba rugin\u0103) pentru android set-top box")],-1),b=a("Busybox vine cu un cod ftp dezordonat, a\u0219a c\u0103 voi compila un "),u={href:"https://github.com/moparisthebest/kiss-ftpd",target:"_blank",rel:"noopener noreferrer"},d=a("kiss-ftpd"),m=a(" pentru a-l folosi pe set-top box."),v=s("p",null,[a("\xCEn primul r\xE2nd "),s("code",null,"rustup target add aarch64-linux-android")],-1),_=s("p",null,"Apoi instala\u021Bi NDK pentru Android, am f\u0103cut acest lucru cu Android Studio, captura de ecran de mai jos.",-1),h=s("p",null,[s("img",{src:"//irmw.gumlet.io/qcUqsK.png",alt:""})],-1),g=a("Bine\xEEn\u021Beles, pute\u021Bi "),f={href:"https://developer.android.com/ndk/downloads",target:"_blank",rel:"noopener noreferrer"},A=a("desc\u0103rca direct NDK \u0219i"),T=a(" \xEEl pute\u021Bi "),$={href:"https://developer.android.com/ndk/downloads",target:"_blank",rel:"noopener noreferrer"},x=a("despacheta"),R=a("."),N=a("\xCEn 2021, cea "),C={href:"https://github.com/mozilla/rust-android-gradle/issues/75#issuecomment-970179046",target:"_blank",rel:"noopener noreferrer"},I=a("mai mare versiune a NDK-ului acceptat de rust este 22.1.7171670"),O=a(", a\u0219a c\u0103 utiliza\u021Bi-o mai \xEEnt\xE2i."),E=r(`<p>\xCEn cele din urm\u0103, scriptul de compilare este urm\u0103torul.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>

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
</code></pre></div>`,2);function L(D,G){const n=p("ExternalLinkIcon");return o(),l(i,null,[k,s("p",null,[b,s("a",u,[d,e(n)]),m]),v,_,h,s("p",null,[g,s("a",f,[A,e(n)]),T,s("a",$,[x,e(n)]),R]),s("p",null,[N,s("a",C,[I,e(n)]),O]),E],64)}var K=t(c,[["render",L],["__file","2021-11-11-rust-android.html.vue"]]);export{K as default};
