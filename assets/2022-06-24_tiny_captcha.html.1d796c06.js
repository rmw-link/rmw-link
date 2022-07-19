import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.87d927ab.js";const r={},e=a(`<h1 id="tiny-captcha-rozsda-konnyu-captcha-generator-fordithato-wasm-be" tabindex="-1"><a class="header-anchor" href="#tiny-captcha-rozsda-konnyu-captcha-generator-fordithato-wasm-be" aria-hidden="true">#</a> tiny_captcha : rozsda k\xF6nny\u0171 captcha gener\xE1tor, ford\xEDthat\xF3 wasm-be</h1><p><a href="https://docs.rs/tiny_captcha" target="_blank" rel="noopener noreferrer">Projekt dokument\xE1ci\xF3</a></p><p>K\xF6nny\u0171 CAPTCHA gener\xE1tor, amely csak a rand \xE9s a gif programokra t\xE1maszkodik, \xE9s wasm-be ford\xEDthat\xF3.</p><p><a href="http://brokestream.com/captcha.html" target="_blank" rel="noopener noreferrer">Ivan Tikhonov CAPTCHA k\xF6nyvt\xE1r\xE1n</a> alapul, \xFAjra\xEDrva <a href="https://c2rust.com" target="_blank" rel="noopener noreferrer">c2rust</a> nyelven.</p><p>A bet\u0171t\xEDpus f\xE1jl a <a href="https://github.com/ITikhonov/captcha/blob/master/font.h" target="_blank" rel="noopener noreferrer">https://github.com/ITikhonov/captcha/blob/master/font.h</a> oldalr\xF3l sz\xE1rmazik, \xE9s ASCII artwork, amelyet az unfont seg\xEDts\xE9g\xE9vel k\xE9sz\xEDtettek, majd gener\xE1ltak egy t\xF6mbbe.</p><p>Haszn\xE1lja a dem\xF3t :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use anyhow::Result;
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
</code></pre></div><p>A kimenet l\xE1that\xF3 :</p><p><img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/1.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/2.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/3.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/4.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/5.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/6.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/7.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/8.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/9.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/10.gif" alt=""></p>`,9);function n(i,c){return e}var h=t(r,[["render",n],["__file","2022-06-24_tiny_captcha.html.vue"]]);export{h as default};
