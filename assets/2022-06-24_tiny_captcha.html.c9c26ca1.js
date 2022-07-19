import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{e}from"./app.87d927ab.js";const a={},r=e(`<h1 id="tiny-captcha-generateur-de-captcha-leger-de-type-rust-compilable-en-wasm" tabindex="-1"><a class="header-anchor" href="#tiny-captcha-generateur-de-captcha-leger-de-type-rust-compilable-en-wasm" aria-hidden="true">#</a> tiny_captcha : g\xE9n\xE9rateur de captcha l\xE9ger de type rust, compilable en wasm</h1><p><a href="https://docs.rs/tiny_captcha" target="_blank" rel="noopener noreferrer">Documentation du projet</a></p><p>G\xE9n\xE9rateur de CAPTCHA l\xE9ger, reposant uniquement sur rand et gif, qui peut \xEAtre compil\xE9 dans wasm.</p><p>Bas\xE9 sur la <a href="http://brokestream.com/captcha.html" target="_blank" rel="noopener noreferrer">biblioth\xE8que CAPTCHA d&#39;Ivan Tikhonov</a>, r\xE9\xE9crit en <a href="https://c2rust.com" target="_blank" rel="noopener noreferrer">c2rust</a>.</p><p>Le fichier de police provient de <a href="https://github.com/ITikhonov/captcha/blob/master/font.h" target="_blank" rel="noopener noreferrer">https://github.com/ITikhonov/captcha/blob/master/font.h</a>. Il s&#39;agit d&#39;un travail artistique ASCII, r\xE9alis\xE9 puis g\xE9n\xE9r\xE9 dans un tableau \xE0 l&#39;aide de unfont.</p><p>Utilisez la d\xE9mo :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use anyhow::Result;
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
</code></pre></div><p>La sortie est indiqu\xE9e :</p><p><img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/1.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/2.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/3.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/4.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/5.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/6.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/7.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/8.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/9.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/10.gif" alt=""></p>`,9);function n(i,c){return r}var p=t(a,[["render",n],["__file","2022-06-24_tiny_captcha.html.vue"]]);export{p as default};
