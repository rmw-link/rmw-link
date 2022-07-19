import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.87d927ab.js";const e={},r=a(`<h1 id="tiny-captcha-generator-de-captcha-usor-compilabil-in-wasm" tabindex="-1"><a class="header-anchor" href="#tiny-captcha-generator-de-captcha-usor-compilabil-in-wasm" aria-hidden="true">#</a> tiny_captcha : generator de captcha u\u0219or, compilabil \xEEn wasm</h1><p><a href="https://docs.rs/tiny_captcha" target="_blank" rel="noopener noreferrer">Documenta\u021Bia proiectului</a></p><p>Generator CAPTCHA u\u0219or, bazat doar pe rand \u0219i gif, care poate fi compilat \xEEn wasm.</p><p>Bazat pe <a href="http://brokestream.com/captcha.html" target="_blank" rel="noopener noreferrer">biblioteca CAPTCHA a lui Ivan Tikhonov</a>, rescris\u0103 \xEEn <a href="https://c2rust.com" target="_blank" rel="noopener noreferrer">c2rust</a>.</p><p>Fi\u0219ierul fontului este de la <a href="https://github.com/ITikhonov/captcha/blob/master/font.h" target="_blank" rel="noopener noreferrer">https://github.com/ITikhonov/captcha/blob/master/font.h</a> \u0219i este o lucrare ASCII, realizat\u0103 \u0219i apoi generat\u0103 \xEEntr-o matrice folosind unfont.</p><p>Utiliza\u021Bi demonstra\u021Bia :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use anyhow::Result;
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
</code></pre></div><p>Ie\u0219irea este prezentat\u0103 :</p><p><img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/1.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/2.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/3.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/4.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/5.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/6.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/7.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/8.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/9.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/10.gif" alt=""></p>`,9);function i(n,c){return r}var p=t(e,[["render",i],["__file","2022-06-24_tiny_captcha.html.vue"]]);export{p as default};
