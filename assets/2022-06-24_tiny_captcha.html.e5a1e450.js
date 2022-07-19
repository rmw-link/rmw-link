import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{e}from"./app.2a6a1bd2.js";const r={},a=e(`<h1 id="tiny-captcha-rust-leichtgewichtiger-captcha-generator-kompilierbar-zu-wasm" tabindex="-1"><a class="header-anchor" href="#tiny-captcha-rust-leichtgewichtiger-captcha-generator-kompilierbar-zu-wasm" aria-hidden="true">#</a> tiny_captcha : rust leichtgewichtiger Captcha-Generator, kompilierbar zu wasm</h1><p><a href="https://docs.rs/tiny_captcha" target="_blank" rel="noopener noreferrer">Projektdokumentation</a></p><p>Leichtgewichtiger CAPTCHA-Generator, der nur auf rand und gif basiert und in wasm kompiliert werden kann.</p><p>Basiert auf <a href="http://brokestream.com/captcha.html" target="_blank" rel="noopener noreferrer">Ivan Tikhonovs CAPTCHA-Bibliothek</a>, umgeschrieben in <a href="https://c2rust.com" target="_blank" rel="noopener noreferrer">c2rust</a>.</p><p>Die Schriftdatei stammt von <a href="https://github.com/ITikhonov/captcha/blob/master/font.h" target="_blank" rel="noopener noreferrer">https://github.com/ITikhonov/captcha/blob/master/font.h</a> und ist eine ASCII-Grafik, die mit unfont in ein Array generiert wurde.</p><p>Verwenden Sie die Demo :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use anyhow::Result;
use std::{env::current_exe, fs::File};
use tiny_captcha::gif;

fn main() -&gt; Result&lt;()&gt; {
  for i in 1..=10 {
    let exe = current_exe()?;
    let gif_path = exe.parent().unwrap().join(format!(&quot;{}.gif&quot;, i));

    let word = gif(&amp;mut File::create(&amp;gif_path)?);
    println!(&quot;{} {}&quot;, word, gif_path.display());
  }
  Ok(())
}
</code></pre></div><p>Die Ausgabe wird angezeigt:</p><p><img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/1.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/2.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/3.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/4.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/5.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/6.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/7.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/8.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/9.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/10.gif" alt=""></p>`,9);function i(n,c){return a}var h=t(r,[["render",i],["__file","2022-06-24_tiny_captcha.html.vue"]]);export{h as default};
