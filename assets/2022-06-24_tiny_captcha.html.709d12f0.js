import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.040d9bb0.js";const e={},r=a(`<h1 id="tiny-captcha-rust-lightweight-captcha-generator-kompilovatelny-do-wasm" tabindex="-1"><a class="header-anchor" href="#tiny-captcha-rust-lightweight-captcha-generator-kompilovatelny-do-wasm" aria-hidden="true">#</a> tiny_captcha : rust lightweight captcha generator, kompilovate\u013En\xFD do wasm</h1><p><a href="https://docs.rs/tiny_captcha" target="_blank" rel="noopener noreferrer">Projektov\xE1 dokument\xE1cia</a></p><p>Od\u013Eah\u010Den\xFD gener\xE1tor CAPTCHA, ktor\xFD sa spolieha len na rand a gif a ktor\xFD mo\u017Eno skompilova\u0165 do wasm.</p><p>Zalo\u017Een\xE9 na <a href="http://brokestream.com/captcha.html" target="_blank" rel="noopener noreferrer">kni\u017Enici CAPTCHA od Ivana Tichonova</a>, prep\xEDsan\xE9 v <a href="https://c2rust.com" target="_blank" rel="noopener noreferrer">c2rust</a>.</p><p>S\xFAbor p\xEDsma je z adresy <a href="https://github.com/ITikhonov/captcha/blob/master/font.h" target="_blank" rel="noopener noreferrer">https://github.com/ITikhonov/captcha/blob/master/font.h</a> a je to umeleck\xE9 dielo ASCII, ktor\xE9 sa vytvorilo a potom vygenerovalo do po\u013Ea pomocou funkcie unfont.</p><p>Pou\u017Eite demo :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use anyhow::Result;
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
</code></pre></div><p>V\xFDstup je zobrazen\xFD :</p><p><img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/1.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/2.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/3.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/4.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/5.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/6.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/7.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/8.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/9.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/10.gif" alt=""></p>`,9);function n(i,o){return r}var p=t(e,[["render",n],["__file","2022-06-24_tiny_captcha.html.vue"]]);export{p as default};
