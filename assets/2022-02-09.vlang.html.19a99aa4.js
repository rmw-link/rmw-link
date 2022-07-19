import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as o,a,b as t,w as r,F as u,d as e,e as p,r as l}from"./app.2a6a1bd2.js";const d={},m=a("h1",{id:"v-valodu-apguves-piezimes",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#v-valodu-apguves-piezimes","aria-hidden":"true"},"#"),e(" V Valodu apguves piez\u012Bmes")],-1),k=a("hr",null,null,-1),v=a("p",null,"Saturs :",-1),c={class:"table-of-contents"},h=e("Ievads: vlang - n\u0101kotnes valoda"),b=e("Priek\u0161v\u0101rds"),g=e("v self Kompil\u0113jiet to pats"),z=e("V Scen\u0101riju rakst\u012B\u0161ana"),f=e("Faila izmai\u0146u uzraudz\u012B\u0161ana un autom\u0101tiska darb\u012Bbas restart\u0113\u0161ana"),_=p(`<hr><h2 id="ievads-vlang-nakotnes-valoda" tabindex="-1"><a class="header-anchor" href="#ievads-vlang-nakotnes-valoda" aria-hidden="true">#</a> Ievads: vlang - n\u0101kotnes valoda</h2><p>vlang, front-end, back-end, lielo datu, blok\u0137\u0113des, m\u0101ksl\u012Bgais intelekts ir izplat\u012Bts visos sabiedr\u012Bbas aspektos. P\u0101rsp\u0113t citas programm\u0113\u0161anas valodas un apvienot pasauli 2050. gad\u0101. T\u0101 pat k\u013Cuva par pasaules lingua franca, kas \u013C\u0101va cilv\u0113cei atjaunot le\u0123end\u0101ro B\u0101beles torni un strauji att\u012Bst\u012Bties tehnolo\u0123iju jom\u0101. ......</p><p>--- <a href="https://www.zhihu.com/question/318526180/answer/729421901" target="_blank" rel="noopener noreferrer">Cit\u0113ts no laikraksta People&#39;s Daily 2050</a></p><h2 id="prieksvards" tabindex="-1"><a class="header-anchor" href="#prieksvards" aria-hidden="true">#</a> Priek\u0161v\u0101rds</h2><p><a href="https://vlang.io" target="_blank" rel="noopener noreferrer"><code>V\u8BED\u8A00</code></a> , Vlang - programm\u0113\u0161anas valoda hakeriem.</p><p>rust un zig ir labi, bet tie ir p\u0101r\u0101k stingri un akad\u0113miski.</p><p>V ir vair\u0101k l\u012Bdz\u012Bga \u0101trai uzs\u0101k\u0161anas valodai, piem\u0113ram, javascript, maz\u0101k struktur\u0113ta, \u0101tri s\u0101kama un, protams, \u0101tra.</p><p>Liela da\u013Ca no V m\u0101jaslap\u0101 paust\u0101 hype v\u0113l nav pie\u0146\u0113musies sp\u0113k\u0101 (piem\u0113ram, C uz V autom\u0101tiski), un <a href="https://www.zhihu.com/question/318526180" target="_blank" rel="noopener noreferrer">daudzi</a> to <a href="https://www.zhihu.com/question/318526180" target="_blank" rel="noopener noreferrer">ir nosauku\u0161i par viltus propagandu</a>, piem\u0113ram, :</p><p>T\u0101 ir pareiza strat\u0113\u0123ija - vispirms uzs\u0101kt propagandu un tad to \u012Bstenot; cilv\u0113ki ir izt\u0113les kopiena.</p><blockquote><p>Liel\u0101k\u0101 da\u013Ca cilv\u0113ku tic, jo vi\u0146i redz, bet da\u017Ei cilv\u0113ki redz, jo vi\u0146i tic.</p></blockquote><p>T\u0101pat k\u0101 tic\u012Bba komunismam var b\u016Bt maz\u0101kum\u0101, bet vienm\u0113r b\u016Bs \u013Coti neliels skaits cilv\u0113ku, kas patie\u0161\u0101m tic, un zvaigznes uguns var izrais\u012Bt pr\u0113riju ugunsgr\u0113ku. Bez Komunistisk\u0101s partijas neb\u016Btu jaun\u0101s \u0136\u012Bnas.</p><p>Datormatem\u0101ti\u0137iem V var \u0161\u0137ist mazliet vieglpr\u0101t\u012Bga, bet es ticu, ka hakeriem \u0161\u012B valoda patiks.</p><p>Dom\u0101\u0161ana ir r\u012Bc\u012Bba, drosme dom\u0101t, drosme m\u0113\u0123in\u0101t, un varb\u016Bt t\u0101 ir at\u0161\u0137ir\u012Bba starp m\u0101kslu un matem\u0101tiku. Vai programm\u0113\u0161anas valoda ir m\u0101ksla vai matem\u0101tika? Tas ir m\u016B\u017E\u012Bgais jaut\u0101jums.</p><p>Manupr\u0101t, lab\u0101kais, kas, manupr\u0101t, ir V, ir robe\u017Eu izpl\u016B\u0161ana starp valodas dizainu un programmu izstr\u0101di.</p><p>T\u0101 kompil\u0113jas pati, un tr\u012Bs vai piecu sekun\u017Eu laik\u0101 to var p\u0101rkompil\u0113t, un kods ir skaidrs.</p><p>V autors raksta <a href="https://github.com/vlang/v/blob/master/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">V koda direktoriju strukt\u016Br\u0101</a>:</p><blockquote><p>Esmu centies kompilatoru un vlib kodu padar\u012Bt p\u0113c iesp\u0113jas vienk\u0101r\u0161\u0101ku un las\u0101m\u0101ku.</p><p>Viens no V m\u0113r\u0137iem ir b\u016Bt atv\u0113rtam izstr\u0101d\u0101t\u0101jiem ar da\u017E\u0101da l\u012Bme\u0146a pieredzi kompilatoru izstr\u0101d\u0113. Kompilatoram nav j\u0101b\u016Bt melnai, burvju pilnai kast\u012Btei, ko saprot tikai da\u017Ei cilv\u0113ki.</p><p>V kompilators ir modul\u0101rs, un to var izmantot cit\u0101s lietojumprogramm\u0101s. Tas atrodas <code>cmd/v/</code> un <code>vlib/v/</code>.</p><p>Svar\u012Bg\u0101k\u0101 un noder\u012Bg\u0101k\u0101 komanda darb\u0101 ar V kompilatoru ir <code>v self</code>. Tas p\u0101rb\u016Bv\u0113 V kompilatoru.</p><p>Kompilatora strukt\u016Bra ir \u013Coti vienk\u0101r\u0161a, un taj\u0101 ir tr\u012Bs da\u017E\u0101di so\u013Ci.</p><p>AST analiz\u0113\u0161ana/\u0123ener\u0113\u0161ana ( <code>v.parser</code>) =&gt; tipa p\u0101rbaude ( <code>v.checker</code>) =&gt; C/JavaScript/ma\u0161\u012Bnas koda \u0123ener\u0113\u0161ana ( <code>v.gen</code>).</p></blockquote><p>Var\u0113tu dom\u0101t:</p><blockquote><p><a href="https://www.zhihu.com/question/318526180/answer/685952638" target="_blank" rel="noopener noreferrer">Neskaitot lekseri un analizatoru, kodols sast\u0101v tikai no da\u017Eiem t\u016Bksto\u0161iem rindu. Es varu tikai teikt, ka autors ir paveicis labu m\u0101rketinga darbu, un ofici\u0101l\u0101 t\u012Bmek\u013Ca vietne izskat\u0101s diezgan l\u012Bdz\u012Bgi.</a></p></blockquote><p>Ta\u010Du, manupr\u0101t, tie\u0161i \u0161\u012B vienk\u0101r\u0161\u012Bba ir lab\u0101k\u0101 V.</p><p>Nedom\u0101jiet par V k\u0101 par tradicion\u0101lu neveiklu programm\u0113\u0161anas valodu ar kompilatoru, kas ir neskaidra, neskaidra gr\u0101mata debes\u012Bs.</p><p>Dom\u0101jiet par to k\u0101 par t\u012Bmek\u013Ca front-end ietvaru, piem\u0113ram, Vue, kur\u0101 piek\u013Cuves barjera ir zema un kur\u0101 var iesaist\u012Bties ikviens.</p><p>Ja jums ir probl\u0113ma, vienk\u0101r\u0161i to mainiet.</p><blockquote><p>Dariet to pa\u0161i, un jums b\u016Bs ko \u0113st.</p></blockquote><p>Jauna, skaista pasaule nav kaut kas t\u0101ds, ko var tikai s\u0113d\u0113t un gaid\u012Bt, to rada str\u0101d\u0101jo\u0161i cilv\u0113ki ar sav\u0101m rok\u0101m.</p><p><img src="//irmw.gumlet.io/cEFoDn.jpg" alt=""></p><h2 id="v-self-kompilejiet-to-pats" tabindex="-1"><a class="header-anchor" href="#v-self-kompilejiet-to-pats" aria-hidden="true">#</a> <code>v self</code> Kompil\u0113jiet to pats</h2><p>V var viegli kompil\u0113t pats, izmantojot <code>v self</code>. Man\u0101 2015. gada Apple kl\u0113pjdator\u0101 kompil\u0113\u0161ana vienu reizi aiz\u0146em 5,63 sekundes.</p><p>Es iesaku to instal\u0113t k\u0101 pirmkodu.</p><div class="language-text ext-text"><pre class="language-text"><code>git clone git@github.com:vlang/v.git
make
sudo ./v symlink
</code></pre></div><p>Ja jums ir k\u0101das idejas, mainiet tie\u0161i kompilatora vai standarta bibliot\u0113kas pirmkodu.</p><p>P\u0113c tam izmantojiet <code>v self</code>un kompil\u0113jiet to pats. Kad esat izstr\u0101d\u0101jis savas pras\u012Bbas, nododiet un apvienojiet t\u0101s ar ofici\u0101lo pirmkodu.</p><p>\u0160odien es tikko iem\u0101c\u012Bjos V un esmu uzs\u0101cis 3 apvieno\u0161anas piepras\u012Bjumus <a href="https://github.com/vlang/v/pull/13518" target="_blank" rel="noopener noreferrer">(1</a>, <a href="https://github.com/vlang/v/pull/13524" target="_blank" rel="noopener noreferrer">2</a>, <a href="https://github.com/vlang/v/pull/13514" target="_blank" rel="noopener noreferrer">3</a> ) ar ierosin\u0101jumu valodas uzlabo\u0161anai: <a href="https://github.com/vlang/v/issues/13526" target="_blank" rel="noopener noreferrer">neoblig\u0101ta skaidra interfeisa atbalsta deklar\u0113\u0161ana</a>.</p><p>Es labi nerun\u0101ju angliski, bet ar tulkot\u0101ju <a href="https://www.deepl.com/zh/translator" target="_blank" rel="noopener noreferrer">vietn\u0113 DeepL</a> ir viegli konvert\u0113t no \u0137\u012Bnie\u0161u valodas uz ang\u013Cu valodu, lai padzi\u013Cin\u0101ti sazin\u0101tos ar draugiem no \u0101rzem\u0113m.</p><h2 id="v-scenariju-rakstisana" tabindex="-1"><a class="header-anchor" href="#v-scenariju-rakstisana" aria-hidden="true">#</a> V Scen\u0101riju rakst\u012B\u0161ana</h2><p><code>v init</code> P\u0113c projekta inicializ\u0113\u0161anas man ir nepiecie\u0161ams kompil\u0113\u0161anas skripts.</p><p>V var izmantot, lai uzrakst\u012Btu \u0161o skriptu bash viet\u0101.</p><p>Mans kompil\u0113\u0161anas skripts ir \u0161\u0101ds.</p><div class="language-vlang ext-vlang"><pre class="language-vlang"><code>#!/usr/bin/env -S v run

import v.vmod

fn sh(cmd string){
  println(&quot;\u276F $cmd&quot;)
  print(execute_or_exit(cmd).output)
}

vm := vmod.decode( @VMOD_FILE ) or { panic(err) }

name := vm.name

sh(&#39;v -autofree -prod \${name}.v&#39;)

suffix := $if windows { &#39;.exe&#39; } $else { &#39;&#39; }
src := name + suffix
bin := join_path_single(&#39;bin&#39;,src)
mkdir(&#39;bin&#39;) or {}
mv(src, bin)?

println(&#39;  &#39;+bin)
</code></pre></div><h2 id="faila-izmainu-uzraudzisana-un-automatiska-darbibas-restartesana" tabindex="-1"><a class="header-anchor" href="#faila-izmainu-uzraudzisana-un-automatiska-darbibas-restartesana" aria-hidden="true">#</a> Faila izmai\u0146u uzraudz\u012B\u0161ana un autom\u0101tiska darb\u012Bbas restart\u0113\u0161ana</h2><p>Man ir ieradums vienreiz uzrakst\u012Bt un palaist skriptu, un man ir nepiecie\u0161ama izmai\u0146u uzraudz\u012Bba un autom\u0101tiska t\u0101 atk\u0101rtota palai\u0161ana.</p><p>v ir pieejams <code>v watch run xx.v</code>, lai to izdar\u012Btu.</p><p>Es izveidoju \u0161\u0101du skriptu, lai atvieglotu <code>./dev.sh</code> izmanto\u0161anu.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>#!/usr/bin/env bash

DIR=$(dirname $(realpath &quot;$0&quot;))
cd $DIR
set -ex

NAME=$(cat v.mod|grep name|awk -F\\&#39; &#39;{print $2}&#39;)
SH=&quot;v watch run $NAME.v&quot;

exec $SH \\
  -i &#39;.git&#39; \\
  -i &#39;bin&#39; \\
  -c -s --before &quot;printf \\&quot;\\e[90m\u276F \${SH}\\e[0m\\n\\&quot;&quot;
</code></pre></div><p>Projekta veidni skatiet <a href="https://github.com/rmw-link/rmw-v-template" target="_blank" rel="noopener noreferrer">rmw-link/rmw-v-template</a></p>`,46);function j(V,w){const i=l("RouterLink");return s(),o(u,null,[m,k,v,a("nav",c,[a("ul",null,[a("li",null,[t(i,{to:"#ievads-vlang-nakotnes-valoda"},{default:r(()=>[h]),_:1})]),a("li",null,[t(i,{to:"#prieksvards"},{default:r(()=>[b]),_:1})]),a("li",null,[t(i,{to:"#v-self-kompilejiet-to-pats"},{default:r(()=>[g]),_:1})]),a("li",null,[t(i,{to:"#v-scenariju-rakstisana"},{default:r(()=>[z]),_:1})]),a("li",null,[t(i,{to:"#faila-izmainu-uzraudzisana-un-automatiska-darbibas-restartesana"},{default:r(()=>[f]),_:1})])])]),_],64)}var $=n(d,[["render",j],["__file","2022-02-09.vlang.html.vue"]]);export{$ as default};
