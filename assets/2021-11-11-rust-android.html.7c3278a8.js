import{_ as t,o,c as p,a as s,b as e,F as l,d as a,e as r,r as i}from"./app.30fd0c1f.js";const c={},k=s("h1",{id:"kompiliranje-kiss-ftpd-rust-jezikovni-program-za-android-set-top-box",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#kompiliranje-kiss-ftpd-rust-jezikovni-program-za-android-set-top-box","aria-hidden":"true"},"#"),a(" Kompiliranje kiss-ftpd ( rust jezikovni program ) za android set-top box")],-1),b=a("busybox prihaja z neredno ftp kodo, zato bom sestavil "),d={href:"https://github.com/moparisthebest/kiss-ftpd",target:"_blank",rel:"noopener noreferrer"},u=a("kiss-ftpd"),v=a(" za uporabo na set-top boxu."),_=s("p",null,[a("Najprej "),s("code",null,"rustup target add aarch64-linux-android")],-1),m=s("p",null,"Nato namestite NDK za Android, to sem storil s programom Android Studio, spodnja slika zaslona.",-1),h=s("p",null,[s("img",{src:"//irmw.gumlet.io/qcUqsK.png",alt:""})],-1),g=a("Seveda lahko "),f={href:"https://developer.android.com/ndk/downloads",target:"_blank",rel:"noopener noreferrer"},A=a("NDK prenesete"),T=a(" tudi "),$={href:"https://developer.android.com/ndk/downloads",target:"_blank",rel:"noopener noreferrer"},x=a("neposredno"),R=a(" in ga "),N={href:"https://developer.android.com/ndk/downloads",target:"_blank",rel:"noopener noreferrer"},C=a("razpakirate"),I=a("."),O=a("V letu 2021 "),j={href:"https://github.com/mozilla/rust-android-gradle/issues/75#issuecomment-970179046",target:"_blank",rel:"noopener noreferrer"},E=a("je najvi\u0161ja razli\u010Dica NDK, ki jo podpira rust, 22.1.7171670"),L=a(", zato najprej uporabite to razli\u010Dico."),z=r(`<p>Skripta za sestavljanje je naslednja.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>

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
</code></pre></div>`,2);function D(G,H){const n=i("ExternalLinkIcon");return o(),p(l,null,[k,s("p",null,[b,s("a",d,[u,e(n)]),v]),_,m,h,s("p",null,[g,s("a",f,[A,e(n)]),T,s("a",$,[x,e(n)]),R,s("a",N,[C,e(n)]),I]),s("p",null,[O,s("a",j,[E,e(n)]),L]),z],64)}var S=t(c,[["render",D],["__file","2021-11-11-rust-android.html.vue"]]);export{S as default};