import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.2a6a1bd2.js";const r={},e=a(`<h1 id="tiny-captcha-rust-lightweight-captcha-generator-kompilejams-uz-wasm" tabindex="-1"><a class="header-anchor" href="#tiny-captcha-rust-lightweight-captcha-generator-kompilejams-uz-wasm" aria-hidden="true">#</a> tiny_captcha : rust lightweight captcha generator, kompil\u0113jams uz wasm</h1><p><a href="https://docs.rs/tiny_captcha" target="_blank" rel="noopener noreferrer">Projekta dokument\u0101cija</a></p><p>Viegls CAPTCHA \u0123enerators, kas balst\u0101s tikai uz rand un gif, ko var kompil\u0113t wasm.</p><p>Pamatojoties uz <a href="http://brokestream.com/captcha.html" target="_blank" rel="noopener noreferrer">Ivana Tihonova CAPTCHA bibliot\u0113ku</a>, p\u0101rrakst\u012Bta <a href="https://c2rust.com" target="_blank" rel="noopener noreferrer">c2rust</a>.</p><p>\u0160rifta fails ir no <a href="https://github.com/ITikhonov/captcha/blob/master/font.h" target="_blank" rel="noopener noreferrer">https://github.com/ITikhonov/captcha/blob/master/font.h</a>, un tas ir ASCII m\u0101kslas darbs, kas izveidots un p\u0113c tam \u0123ener\u0113ts mas\u012Bv\u0101, izmantojot unfont.</p><p>Izmantojiet demo versiju :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use anyhow::Result;
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
</code></pre></div><p>Tiek par\u0101d\u012Bta izeja:</p><p><img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/1.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/2.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/3.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/4.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/5.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/6.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/7.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/8.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/9.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/10.gif" alt=""></p>`,9);function i(n,c){return e}var h=t(r,[["render",i],["__file","2022-06-24_tiny_captcha.html.vue"]]);export{h as default};
