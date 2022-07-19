import{_ as a,o as d,c as i,a as e,b as n,F as s,e as r,d as t,r as c}from"./app.30fd0c1f.js";const l={},h=r('<h1 id="mdi-embed-code-in-markdown-version-number-markdown" tabindex="-1"><a class="header-anchor" href="#mdi-embed-code-in-markdown-version-number-markdown" aria-hidden="true">#</a> mdi : embed code in markdown / version number / markdown ...</h1><h2 id="preface" tabindex="-1"><a class="header-anchor" href="#preface" aria-hidden="true">#</a> Preface</h2><p>Embedding version numbers and demo code in <code>readme.md</code> is a very common requirement.</p><p>There are some similar tools on the market, but none of them works well. So I wrote one myself ( executable size 256 KB ).</p><p>The function is to write a statement like <code>&gt; ./demo.js</code> in markdown to embed the code, and the screenshot of the generated content is as follows :</p><p><img src="//irmw.gumlet.io/i9g9We.png" alt=""></p>',6),m=t("In addition, with the "),_={href:"https://rmw.link/log/2021-12-09-markdown-translate",target:"_blank",rel:"noopener noreferrer"},p=t("markdown translation tool"),u=t(" I wrote "),f={href:"https://rmw.link/log/2021-12-09-markdown-translate",target:"_blank",rel:"noopener noreferrer"},b=t("based on deepl"),w=t(", you can automatically translate and render Chinese and English in the same "),g=e("code",null,"readme.md",-1),k=t(" file."),x=e("p",null,"Then set an in-text anchor point (as below) at the top of the github readme, and click it to jump to the various language versions of the instructions, which will be a good user experience.",-1),v=e("p",null,[e("img",{src:"//irmw.gumlet.io/YQfKiS.png",alt:""})],-1),I=e("h2",{id:"installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),t(" Installation")],-1),y={href:"https://github.com/rmw-lib/mdi/releases",target:"_blank",rel:"noopener noreferrer"},E=t("Download from github"),V=t(" or "),B=e("code",null,"cargo install mdi",-1),N={href:"https://github.com/rmw-lib/mdi",target:"_blank",rel:"noopener noreferrer"},T=t("Codebase address"),C=r('<h2 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> Use</h2><p><code>mdi [dir]</code></p><p>It will search the directory <code>xxx.mdi.md</code> and replace <code>&gt; ./xxx.rs</code> with the embedded code content, and then output to <code>xxx.md</code>.</p><p>If the embed is a markdown file, it will recursively render the references in it.</p>',4),S=t("View the demo file "),j={href:"https://raw.githubusercontent.com/rmw-lib/mdi/master/readme.mdi.md",target:"_blank",rel:"noopener noreferrer"},F=t("readme.mdi.md");function K(L,q){const o=c("ExternalLinkIcon");return d(),i(s,null,[h,e("p",null,[m,e("a",_,[p,n(o)]),u,e("a",f,[b,n(o)]),w,g,k]),x,v,I,e("p",null,[e("a",y,[E,n(o)]),V,B]),e("p",null,[e("a",N,[T,n(o)])]),C,e("p",null,[S,e("a",j,[F,n(o)])])],64)}var D=a(l,[["render",K],["__file","2022-07-20_mdi.html.vue"]]);export{D as default};
