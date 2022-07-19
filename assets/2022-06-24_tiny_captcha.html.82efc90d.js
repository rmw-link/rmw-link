import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.87d927ab.js";const r={},e=a(`<h1 id="tiny-captcha-rust-\u8F7B\u91CF\u7EA7\u9A8C\u8BC1\u7801\u751F\u6210\u5668-\u53EF\u4EE5\u7F16\u8BD1\u6210-wasm" tabindex="-1"><a class="header-anchor" href="#tiny-captcha-rust-\u8F7B\u91CF\u7EA7\u9A8C\u8BC1\u7801\u751F\u6210\u5668-\u53EF\u4EE5\u7F16\u8BD1\u6210-wasm" aria-hidden="true">#</a> tiny_captcha : rust \u8F7B\u91CF\u7EA7\u9A8C\u8BC1\u7801\u751F\u6210\u5668\uFF0C\u53EF\u4EE5\u7F16\u8BD1\u6210 wasm</h1><p><a href="https://docs.rs/tiny_captcha" target="_blank" rel="noopener noreferrer">\u9879\u76EE\u6587\u6863</a></p><p>\u8F7B\u91CF\u7EA7\u9A8C\u8BC1\u7801\u751F\u6210\u5668\uFF0C\u4EC5\u4F9D\u8D56\u4E8E rand \u548C gif \uFF0C\u53EF\u4EE5\u7F16\u8BD1\u6210 wasm \u3002</p><p>\u5728 <a href="http://brokestream.com/captcha.html" target="_blank" rel="noopener noreferrer">Ivan Tikhonov \u7684\u9A8C\u8BC1\u7801\u5E93</a> \u7684\u57FA\u7840\u4E0A\uFF0C\u7528 <a href="https://c2rust.com" target="_blank" rel="noopener noreferrer">c2rust</a> \u8F6C\u4EE3\u7801\u540E\u6539\u5199\u3002</p><p>\u5B57\u4F53\u6587\u4EF6\u6765\u81EA <a href="https://github.com/ITikhonov/captcha/blob/master/font.h" target="_blank" rel="noopener noreferrer">https://github.com/ITikhonov/captcha/blob/master/font.h</a> \uFF0C\u662F ASCII \u827A\u672F\u5B57 , make \u4E4B\u540E\u7528 unfont \u751F\u6210\u6570\u7EC4\u3002</p><p>\u4F7F\u7528\u6F14\u793A :</p><div class="language-rust ext-rs"><pre class="language-rust"><code>use anyhow::Result;
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
</code></pre></div><p>\u8F93\u51FA\u5C55\u793A :</p><p><img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/1.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/2.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/3.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/4.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/5.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/6.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/7.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/8.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/9.gif" alt=""> <img src="https://raw.githubusercontent.com/rmw-link/tiny_captcha/master/gif/10.gif" alt=""></p>`,9);function n(i,c){return e}var h=t(r,[["render",n],["__file","2022-06-24_tiny_captcha.html.vue"]]);export{h as default};
