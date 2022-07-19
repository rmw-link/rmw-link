import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.2a6a1bd2.js";const e={},r=a(`<h1 id="tiny-captcha-rust-lightweight-captcha-generator-kompilovatelny-do-wasm" tabindex="-1"><a class="header-anchor" href="#tiny-captcha-rust-lightweight-captcha-generator-kompilovatelny-do-wasm" aria-hidden="true">#</a> tiny_captcha : rust lightweight captcha generator, kompilovateln\xFD do wasm</h1><p><a href="https://docs.rs/tiny_captcha" target="_blank" rel="noopener noreferrer">Projektov\xE1 dokumentace</a></p><p>Lehk\xFD gener\xE1tor CAPTCHA, kter\xFD se spol\xE9h\xE1 pouze na rand a gif a kter\xFD lze zkompilovat do wasm.</p><p>Zalo\u017Eeno na <a href="http://brokestream.com/captcha.html" target="_blank" rel="noopener noreferrer">knihovn\u011B CAPTCHA Ivana Tichonova</a>, p\u0159epsan\xE9 v <a href="https://c2rust.com" target="_blank" rel="noopener noreferrer">c2rust</a>.</p><p>Soubor s p\xEDsmem poch\xE1z\xED z adresy <a href="https://github.com/ITikhonov/captcha/blob/master/font.h" target="_blank" rel="noopener noreferrer">https://github.com/ITikhonov/captcha/blob/master/font.h</a> a jedn\xE1 se o kresbu ASCII, kter\xE1 byla vytvo\u0159ena a n\xE1sledn\u011B vygenerov\xE1na do pole pomoc\xED n\xE1stroje unfont.</p><p>Pou\u017Eijte uk\xE1zku :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use anyhow::Result;
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
</code></pre></div><p>V\xFDstup je zobrazen :</p><p><img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/1.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/2.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/3.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/4.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/5.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/6.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/7.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/8.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/9.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/10.gif" alt=""></p>`,9);function n(i,o){return r}var h=t(e,[["render",n],["__file","2022-06-24_tiny_captcha.html.vue"]]);export{h as default};
