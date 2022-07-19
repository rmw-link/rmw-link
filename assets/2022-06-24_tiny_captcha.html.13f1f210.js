import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{e}from"./app.2a6a1bd2.js";const a={},r=e(`<h1 id="tiny-captcha-generador-de-captchas-ligero-compilable-en-wasm" tabindex="-1"><a class="header-anchor" href="#tiny-captcha-generador-de-captchas-ligero-compilable-en-wasm" aria-hidden="true">#</a> tiny_captcha : generador de captchas ligero, compilable en wasm</h1><p><a href="https://docs.rs/tiny_captcha" target="_blank" rel="noopener noreferrer">Documentaci\xF3n del proyecto</a></p><p>Generador de CAPTCHA ligero, que depende s\xF3lo de rand y gif, y que puede ser compilado en wasm.</p><p>Basado en <a href="http://brokestream.com/captcha.html" target="_blank" rel="noopener noreferrer">la biblioteca CAPTCHA de Ivan Tikhonov</a>, reescrito en <a href="https://c2rust.com" target="_blank" rel="noopener noreferrer">c2rust</a>.</p><p>El archivo de fuentes es de <a href="https://github.com/ITikhonov/captcha/blob/master/font.h" target="_blank" rel="noopener noreferrer">https://github.com/ITikhonov/captcha/blob/master/font.h</a> y es una obra de arte ASCII, hecha y luego generada en una matriz usando unfont.</p><p>Utiliza la demo :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use anyhow::Result;
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
</code></pre></div><p>La salida se muestra :</p><p><img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/1.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/2.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/3.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/4.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/5.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/6.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/7.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/8.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/9.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/10.gif" alt=""></p>`,9);function n(i,c){return r}var p=t(a,[["render",n],["__file","2022-06-24_tiny_captcha.html.vue"]]);export{p as default};
