import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.2a6a1bd2.js";const e={},r=a(`<h1 id="tiny-captcha-rust-lightweight-captcha-generator-ki-ga-je-mogoce-sestaviti-v-wasm" tabindex="-1"><a class="header-anchor" href="#tiny-captcha-rust-lightweight-captcha-generator-ki-ga-je-mogoce-sestaviti-v-wasm" aria-hidden="true">#</a> tiny_captcha : rust lightweight captcha generator, ki ga je mogo\u010De sestaviti v wasm</h1><p><a href="https://docs.rs/tiny_captcha" target="_blank" rel="noopener noreferrer">Projektna dokumentacija</a></p><p>Lahkoten generator CAPTCHA, ki temelji le na randu in gifu in ga je mogo\u010De sestaviti v wasm.</p><p>Temelji na <a href="http://brokestream.com/captcha.html" target="_blank" rel="noopener noreferrer">knji\u017Enici CAPTCHA Ivana Tihonova</a>, ki je na novo napisana v <a href="https://c2rust.com" target="_blank" rel="noopener noreferrer">c2rust</a>.</p><p>Datoteka s pisavo je iz <a href="https://github.com/ITikhonov/captcha/blob/master/font.h" target="_blank" rel="noopener noreferrer">https://github.com/ITikhonov/captcha/blob/master/font.h</a> in je umetni\u0161ko delo ASCII, ki je bilo izdelano in nato ustvarjeno v polje z uporabo programa unfont.</p><p>Uporabite demo :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use anyhow::Result;
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
</code></pre></div><p>Izhod je prikazan:</p><p><img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/1.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/2.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/3.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/4.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/5.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/6.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/7.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/8.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/9.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/10.gif" alt=""></p>`,9);function i(n,c){return r}var h=t(e,[["render",i],["__file","2022-06-24_tiny_captcha.html.vue"]]);export{h as default};
