import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.040d9bb0.js";const r={},e=a(`<h1 id="tiny-captcha-rust-lekki-generator-captcha-kompilowalny-do-wasm" tabindex="-1"><a class="header-anchor" href="#tiny-captcha-rust-lekki-generator-captcha-kompilowalny-do-wasm" aria-hidden="true">#</a> tiny_captcha : rust lekki generator captcha, kompilowalny do wasm</h1><p><a href="https://docs.rs/tiny_captcha" target="_blank" rel="noopener noreferrer">Dokumentacja projektowa</a></p><p>Lekki generator CAPTCHA, wykorzystuj\u0105cy tylko rand i gif, kt\xF3ry mo\u017Cna skompilowa\u0107 do wasm.</p><p>Oparta na <a href="http://brokestream.com/captcha.html" target="_blank" rel="noopener noreferrer">bibliotece CAPTCHA Ivana Tikhonova</a>, przepisana w <a href="https://c2rust.com" target="_blank" rel="noopener noreferrer">c2rust</a>.</p><p>Plik czcionki pochodzi z witryny <a href="https://github.com/ITikhonov/captcha/blob/master/font.h" target="_blank" rel="noopener noreferrer">https://github.com/ITikhonov/captcha/blob/master/font.h</a> i jest grafik\u0105 ASCII, wykonan\u0105, a nast\u0119pnie wygenerowan\u0105 do postaci tablicy za pomoc\u0105 programu unfont.</p><p>U\u017Cyj wersji demonstracyjnej :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use anyhow::Result;
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
</code></pre></div><p>Wy\u015Bwietlane s\u0105 dane wyj\u015Bciowe :</p><p><img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/1.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/2.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/3.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/4.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/5.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/6.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/7.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/8.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/9.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/10.gif" alt=""></p>`,9);function n(i,c){return e}var p=t(r,[["render",n],["__file","2022-06-24_tiny_captcha.html.vue"]]);export{p as default};
