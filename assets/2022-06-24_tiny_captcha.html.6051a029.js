import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.2a6a1bd2.js";const r={},e=a(`<h1 id="tiny-captcha-rost-lattviktig-captcha-generator-kompilerbar-till-wasm" tabindex="-1"><a class="header-anchor" href="#tiny-captcha-rost-lattviktig-captcha-generator-kompilerbar-till-wasm" aria-hidden="true">#</a> tiny_captcha : Rost l\xE4ttviktig captcha-generator, kompilerbar till wasm</h1><p><a href="https://docs.rs/tiny_captcha" target="_blank" rel="noopener noreferrer">Projektdokumentation</a></p><p>L\xE4ttviktig CAPTCHA-generator som endast anv\xE4nder rand och gif och som kan kompileras till wasm.</p><p>Baserat p\xE5 <a href="http://brokestream.com/captcha.html" target="_blank" rel="noopener noreferrer">Ivan Tikhonovs CAPTCHA-bibliotek</a>, omskrivet i <a href="https://c2rust.com" target="_blank" rel="noopener noreferrer">c2rust</a>.</p><p>Typsnittsfilen kommer fr\xE5n <a href="https://github.com/ITikhonov/captcha/blob/master/font.h" target="_blank" rel="noopener noreferrer">https://github.com/ITikhonov/captcha/blob/master/font.h</a> och \xE4r en ASCII-bild, som skapats och sedan genererats till en array med hj\xE4lp av unfont.</p><p>Anv\xE4nd demotypen :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use anyhow::Result;
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
</code></pre></div><p>Utmatningen visas :</p><p><img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/1.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/2.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/3.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/4.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/5.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/6.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/7.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/8.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/9.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/10.gif" alt=""></p>`,9);function n(i,c){return e}var p=t(r,[["render",n],["__file","2022-06-24_tiny_captcha.html.vue"]]);export{p as default};
