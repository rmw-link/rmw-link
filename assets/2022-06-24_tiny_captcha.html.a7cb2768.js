import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.87d927ab.js";const e={},r=a(`<h1 id="tiny-captcha-ruosteessa-kevyt-captcha-generaattori-kaannettavissa-wasm-ksi" tabindex="-1"><a class="header-anchor" href="#tiny-captcha-ruosteessa-kevyt-captcha-generaattori-kaannettavissa-wasm-ksi" aria-hidden="true">#</a> tiny_captcha : ruosteessa kevyt captcha generaattori, k\xE4\xE4nnett\xE4viss\xE4 wasm:ksi.</h1><p><a href="https://docs.rs/tiny_captcha" target="_blank" rel="noopener noreferrer">Hankeasiakirjat</a></p><p>Kevyt CAPTCHA-generaattori, joka perustuu vain randiin ja gifiin ja joka voidaan k\xE4\xE4nt\xE4\xE4 wasm:ksi.</p><p>Perustuu <a href="http://brokestream.com/captcha.html" target="_blank" rel="noopener noreferrer">Ivan Tikhonovin CAPTCHA-kirjastoon</a>, joka on kirjoitettu uudelleen <a href="https://c2rust.com" target="_blank" rel="noopener noreferrer">c2rust-kielell\xE4</a>.</p><p>Fonttitiedosto on per\xE4isin osoitteesta <a href="https://github.com/ITikhonov/captcha/blob/master/font.h" target="_blank" rel="noopener noreferrer">https://github.com/ITikhonov/captcha/blob/master/font.h</a>, ja se on ASCII-taideteos, joka on tehty ja sitten luotu arrayksi unfont-ohjelmalla.</p><p>K\xE4yt\xE4 demoa :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use anyhow::Result;
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
</code></pre></div><p>Tulos n\xE4kyy :</p><p><img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/1.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/2.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/3.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/4.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/5.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/6.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/7.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/8.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/9.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/10.gif" alt=""></p>`,9);function n(i,s){return r}var h=t(e,[["render",n],["__file","2022-06-24_tiny_captcha.html.vue"]]);export{h as default};
