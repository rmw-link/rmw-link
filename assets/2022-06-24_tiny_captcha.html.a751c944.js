import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.2a6a1bd2.js";const e={},r=a(`<h1 id="tiny-captcha-rust-lightweight-captcha-generator-that-compiles-to-wasm" tabindex="-1"><a class="header-anchor" href="#tiny-captcha-rust-lightweight-captcha-generator-that-compiles-to-wasm" aria-hidden="true">#</a> tiny_captcha : rust lightweight captcha generator that compiles to wasm</h1><p><a href="https://docs.rs/tiny_captcha" target="_blank" rel="noopener noreferrer">Project documentation</a></p><p>Lightweight CAPTCHA generator, relying only on rand and gif, can be compiled into wasm.</p><p>Based on <a href="http://brokestream.com/captcha.html" target="_blank" rel="noopener noreferrer">Ivan Tikhonov&#39;s captcha library</a>, rewritten with <a href="https://c2rust.com" target="_blank" rel="noopener noreferrer">c2rust</a> code conversion.</p><p>The font file is from <a href="https://github.com/ITikhonov/captcha/blob/master/font.h" target="_blank" rel="noopener noreferrer">https://github.com/ITikhonov/captcha/blob/master/font.h</a> and is ASCII artwork, make and then use unfont to generate the array.</p><p>Use the demo :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use anyhow::Result;
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
</code></pre></div><p>The output is shown :</p><p><img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/1.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/2.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/3.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/4.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/5.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/6.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/7.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/8.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/9.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/10.gif" alt=""></p>`,9);function n(i,c){return r}var h=t(e,[["render",n],["__file","2022-06-24_tiny_captcha.html.vue"]]);export{h as default};
