import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{e}from"./app.040d9bb0.js";const a={},r=e(`<h1 id="tiny-captcha-gerador-de-captcha-leve-de-ferrugem-compilavel-para-wasm" tabindex="-1"><a class="header-anchor" href="#tiny-captcha-gerador-de-captcha-leve-de-ferrugem-compilavel-para-wasm" aria-hidden="true">#</a> tiny_captcha : gerador de captcha leve de ferrugem, compil\xE1vel para wasm</h1><p><a href="https://docs.rs/tiny_captcha" target="_blank" rel="noopener noreferrer">Documenta\xE7\xE3o do projecto</a></p><p>Gerador de CAPTCHA leve, que depende apenas de rand e gif, que pode ser compilado em wasm.</p><p>Baseado na <a href="http://brokestream.com/captcha.html" target="_blank" rel="noopener noreferrer">biblioteca CAPTCHA de Ivan Tikhonov</a>, reescrita em <a href="https://c2rust.com" target="_blank" rel="noopener noreferrer">c2rust</a>.</p><p>O ficheiro da fonte \xE9 de <a href="https://github.com/ITikhonov/captcha/blob/master/font.h" target="_blank" rel="noopener noreferrer">https://github.com/ITikhonov/captcha/blob/master/font.h</a> e \xE9 uma obra de arte ASCII, feita e depois gerada numa matriz utilizando fontes n\xE3o-fonte.</p><p>Utilize a demonstra\xE7\xE3o :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use anyhow::Result;
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
</code></pre></div><p>A produ\xE7\xE3o \xE9 mostrada :</p><p><img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/1.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/2.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/3.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/4.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/5.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/6.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/7.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/8.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/9.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/10.gif" alt=""></p>`,9);function n(i,c){return r}var p=t(a,[["render",n],["__file","2022-06-24_tiny_captcha.html.vue"]]);export{p as default};
