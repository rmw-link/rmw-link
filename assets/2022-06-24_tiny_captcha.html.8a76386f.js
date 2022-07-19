import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.2a6a1bd2.js";const r={},e=a(`<h1 id="tiny-captcha-rudziu-lengvas-captcha-generatorius-kompiliuojamas-i-wasm" tabindex="-1"><a class="header-anchor" href="#tiny-captcha-rudziu-lengvas-captcha-generatorius-kompiliuojamas-i-wasm" aria-hidden="true">#</a> tiny_captcha : r\u016Bd\u017Ei\u0173 lengvas captcha generatorius, kompiliuojamas \u012F wasm</h1><p><a href="https://docs.rs/tiny_captcha" target="_blank" rel="noopener noreferrer">Projekto dokumentai</a></p><p>Lengvas CAPTCHA generatorius, paremtas tik rand ir gif, kur\u012F galima kompiliuoti \u012F wasm.</p><p>Remiantis <a href="http://brokestream.com/captcha.html" target="_blank" rel="noopener noreferrer">Ivano Tichonovo CAPTCHA biblioteka</a>, perra\u0161yta \u012F <a href="https://c2rust.com" target="_blank" rel="noopener noreferrer">c2rust</a>.</p><p>\u0160rifto failas yra i\u0161 <a href="https://github.com/ITikhonov/captcha/blob/master/font.h" target="_blank" rel="noopener noreferrer">https://github.com/ITikhonov/captcha/blob/master/font.h</a> ir yra ASCII meno k\u016Brinys, sukurtas ir tada sugeneruotas \u012F masyv\u0105 naudojant &quot;unfont&quot;.</p><p>Naudokite demonstracin\u0119 versij\u0105:</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use anyhow::Result;
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
</code></pre></div><p>Pateikiama i\u0161vestis:</p><p><img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/1.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/2.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/3.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/4.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/5.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/6.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/7.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/8.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/9.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/10.gif" alt=""></p>`,9);function i(n,c){return e}var m=t(r,[["render",i],["__file","2022-06-24_tiny_captcha.html.vue"]]);export{m as default};
