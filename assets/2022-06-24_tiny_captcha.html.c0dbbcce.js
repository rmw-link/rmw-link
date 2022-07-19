import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{e}from"./app.2a6a1bd2.js";const r={},a=e(`<h1 id="tiny-captcha-rust-letv\xE6gts-captcha-generator-kompilerbar-til-wasm" tabindex="-1"><a class="header-anchor" href="#tiny-captcha-rust-letv\xE6gts-captcha-generator-kompilerbar-til-wasm" aria-hidden="true">#</a> tiny_captcha : rust letv\xE6gts captcha-generator, kompilerbar til wasm</h1><p><a href="https://docs.rs/tiny_captcha" target="_blank" rel="noopener noreferrer">Projektdokumentation</a></p><p>Letv\xE6gts CAPTCHA-generator, der kun bruger rand og gif, og som kan kompileres i wasm.</p><p>Baseret p\xE5 <a href="http://brokestream.com/captcha.html" target="_blank" rel="noopener noreferrer">Ivan Tikhonovs CAPTCHA-bibliotek</a>, omskrevet i <a href="https://c2rust.com" target="_blank" rel="noopener noreferrer">c2rust</a>.</p><p>Fontfilen er fra <a href="https://github.com/ITikhonov/captcha/blob/master/font.h" target="_blank" rel="noopener noreferrer">https://github.com/ITikhonov/captcha/blob/master/font.h</a> og er ASCII-kunstv\xE6rk, der er lavet og derefter genereret til et array ved hj\xE6lp af unfont.</p><p>Brug demoen :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use anyhow::Result;
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
</code></pre></div><p>Resultatet vises :</p><p><img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/1.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/2.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/3.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/4.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/5.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/6.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/7.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/8.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/9.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/10.gif" alt=""></p>`,9);function n(i,c){return a}var p=t(r,[["render",n],["__file","2022-06-24_tiny_captcha.html.vue"]]);export{p as default};
