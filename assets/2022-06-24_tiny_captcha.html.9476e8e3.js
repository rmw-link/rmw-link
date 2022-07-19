import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.040d9bb0.js";const e={},r=a(`<h1 id="tiny-captcha-rooste-kergekaaluline-captcha-generaator-mis-on-kompileeritav-wasm-ile" tabindex="-1"><a class="header-anchor" href="#tiny-captcha-rooste-kergekaaluline-captcha-generaator-mis-on-kompileeritav-wasm-ile" aria-hidden="true">#</a> tiny_captcha : rooste kergekaaluline captcha generaator, mis on kompileeritav wasm&#39;ile</h1><p><a href="https://docs.rs/tiny_captcha" target="_blank" rel="noopener noreferrer">Projekti dokumentatsioon</a></p><p>Kerge CAPTCHA generaator, mis tugineb ainult randile ja gifile ja mida saab koostada wasm&#39;i.</p><p>P\xF5hineb <a href="http://brokestream.com/captcha.html" target="_blank" rel="noopener noreferrer">Ivan Tihhonovi CAPTCHA raamatukogul</a>, mis on \xFCmber kirjutatud <a href="https://c2rust.com" target="_blank" rel="noopener noreferrer">c2rust</a> &#39;is.</p><p>Kirjat\xFC\xFCbifail on p\xE4rit aadressilt <a href="https://github.com/ITikhonov/captcha/blob/master/font.h" target="_blank" rel="noopener noreferrer">https://github.com/ITikhonov/captcha/blob/master/font.h</a> ja on ASCII-kujundus, mis on tehtud ja seej\xE4rel genereeritud unfonti abil massiiviks.</p><p>Kasutage demo :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use anyhow::Result;
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
</code></pre></div><p>V\xE4ljund on n\xE4idatud :</p><p><img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/1.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/2.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/3.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/4.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/5.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/6.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/7.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/8.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/9.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/10.gif" alt=""></p>`,9);function i(n,c){return r}var m=t(e,[["render",i],["__file","2022-06-24_tiny_captcha.html.vue"]]);export{m as default};
