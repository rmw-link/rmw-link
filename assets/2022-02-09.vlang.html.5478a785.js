import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as s,c as n,a,b as t,w as r,F as u,d as i,e as p,o as l}from"./app.87d927ab.js";const k={},m=a("h1",{id:"v-kalbos-mokymosi-pastabos",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#v-kalbos-mokymosi-pastabos","aria-hidden":"true"},"#"),i(" V Kalbos mokymosi pastabos")],-1),d=a("hr",null,null,-1),g=a("p",null,"Turinys :",-1),c={class:"table-of-contents"},v=i('\u012Evadas: "vlang" - ateities kalba'),b=i("\u012E\u017Eanga"),h=i("v self Kompiliuokite patys"),f=i("V Scenarij\u0173 ra\u0161ymas"),y=i("Steb\u0117ti fail\u0173 pakeitimus ir automati\u0161kai i\u0161 naujo paleisti paleidim\u0105"),j=p(`<hr><h2 id="ivadas-vlang-ateities-kalba" tabindex="-1"><a class="header-anchor" href="#ivadas-vlang-ateities-kalba" aria-hidden="true">#</a> \u012Evadas: &quot;vlang&quot; - ateities kalba</h2><p>&quot;vlang&quot;, skirta priekinei ir galinei daliai, didiesiems duomenims, blok\u0173 grandinei, dirbtiniam intelektui, persmelkia kiekvien\u0105 visuomen\u0117s aspekt\u0105. \u012Eveikti kitas programavimo kalbas ir suvienyti pasaul\u012F 2050 m. Ji netgi tapo pasaulio lingua franca, leidusia \u017Emonijai atstatyti legendin\u012F Babelio bok\u0161t\u0105 ir spar\u010Diai tobulinti technologijas ......</p><p>--- <a href="https://www.zhihu.com/question/318526180/answer/729421901" target="_blank" rel="noopener noreferrer">Cituota i\u0161 &quot;People&#39;s Daily 2050</a></p><h2 id="izanga" tabindex="-1"><a class="header-anchor" href="#izanga" aria-hidden="true">#</a> \u012E\u017Eanga</h2><p><a href="https://vlang.io" target="_blank" rel="noopener noreferrer"><code>V\u8BED\u8A00</code></a> , &quot;Vlang&quot; - programi\u0161i\u0173 programavimo kalba.</p><p>r\u016Bdys ir zig yra geri, bet jie pernelyg grie\u017Eti ir akademi\u0161ki.</p><p>V yra labiau pana\u0161i \u012F greit\u0105 prad\u017Ei\u0105, pavyzd\u017Eiui, &quot;javascript&quot; kalba, ma\u017Eiau strukt\u016Brizuota, greitai pradedama naudoti ir, \u017Einoma, greita.</p><p>Dauguma &quot;V&quot; pagrindiniame puslapyje pateikt\u0173 teigini\u0173 dar ne\u012Fsitvirtino (pvz., automatinis &quot;C&quot; per\u0117jimas \u012F &quot;V&quot;) ir <a href="https://www.zhihu.com/question/318526180" target="_blank" rel="noopener noreferrer">daugelio buvo pavadinti melaginga propaganda</a>, pvz:</p><p>Tinkama strategija - pirmiausia imtis propagandos, o paskui j\u0105 \u012Fgyvendinti; \u017Emon\u0117s yra vaizduot\u0117s bendruomen\u0117.</p><blockquote><p>Dauguma \u017Emoni\u0173 tiki, nes mato, o kai kurie mato, nes tiki.</p></blockquote><p>Kaip ir tik\u0117jimas komunizmu gali b\u016Bti ma\u017Euma, bet visada bus labai nedaug \u017Emoni\u0173, kurie tikrai tiki, o \u017Evaig\u017Ed\u0117s ugnis gali sukelti prerij\u0173 gaisr\u0105. Be Komunist\u0173 partijos neb\u016Bt\u0173 naujosios Kinijos.</p><p>Kompiuteri\u0173 matematikams V gali pasirodyti \u0161iek tiek lengvab\u016Bdi\u0161ka, bet manau, kad hakeriams \u0161i kalba patiks.</p><p>M\u0105stymas yra veikimas, dr\u0105sa m\u0105styti, dr\u0105sa bandyti, ir galb\u016Bt tai yra skirtumas tarp meno ir matematikos. Ar programavimo kalba yra menas, ar matematika? Tai am\u017Einas klausimas.</p><p>Manau, kad geriausias dalykas, kalbant apie V, yra rib\u0173 tarp kalbos dizaino ir program\u0173 k\u016Brimo nutrynimas.</p><p>Jis pats susikompiliuoja ir per tris ar penkias sekundes gali b\u016Bti perkompiluotas, o kodas yra ai\u0161kus.</p><p>V autorius ra\u0161o <a href="https://github.com/vlang/v/blob/master/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">V kodo katalogo strukt\u016Broje</a>:</p><blockquote><p>Stengiausi, kad kompiliatorius ir vlib kodas b\u016Bt\u0173 kuo paprastesnis ir suprantamesnis.</p><p>Vienas i\u0161 &quot;V&quot; tiksl\u0173 - b\u016Bti atviram skirtingo lygio kompiliatori\u0173 k\u016Brimo patirties turintiems k\u016Br\u0117jams. Kompilatorius neturi b\u016Bti juoda d\u0117\u017E\u0117, pilna magijos, kuri\u0105 supranta tik keli \u017Emon\u0117s.</p><p>V kompiliatorius yra modulinis ir gali b\u016Bti naudojamas kitose programose. Jis yra adresu <code>cmd/v/</code> ir <code>vlib/v/</code>.</p><p>Svarbiausia ir naudingiausia komanda dirbant su V kompiliatoriumi yra <code>v self</code>. Jis atkuria V kompiliatori\u0173.</p><p>Kompilatoriaus strukt\u016Bra yra labai paprasta ir susideda i\u0161 trij\u0173 skirting\u0173 etap\u0173.</p><p>AST analiz\u0117/generavimas ( <code>v.parser</code>) =&gt; tipo tikrinimas ( <code>v.checker</code>) =&gt; C/JavaScript/ma\u0161ininio kodo generavimas ( <code>v.gen</code>)</p></blockquote><p>Galima pagalvoti:</p><blockquote><p><a href="https://www.zhihu.com/question/318526180/answer/685952638" target="_blank" rel="noopener noreferrer">Neskai\u010Diuojant lekserio ir analizatoriaus, pagrindin\u012F kod\u0105 sudaro vos keli t\u016Bkstan\u010Diai eilu\u010Di\u0173. Galiu tik pasakyti, kad autorius gerai atliko rinkodaros darb\u0105, o oficiali svetain\u0117 atrodo gana pana\u0161iai.</a></p></blockquote><p>Ta\u010Diau manau, kad \u0161is paprastumas yra geriausias &quot;V&quot; bruo\u017Eas.</p><p>Negalvokite apie V kaip apie tradicin\u0119 grem\u0117zdi\u0161k\u0105 programavimo kalb\u0105 su kompiliatoriumi, kuris yra neai\u0161ki, neai\u0161ki knyga danguje.</p><p>Galvokite apie j\u0105 kaip apie \u017Einiatinklio priekin\u0117s dalies strukt\u016Br\u0105, pana\u0161i\u0105 \u012F &quot;Vue&quot;, kurioje patekimo \u012F rink\u0105 barjeras yra nedidelis ir \u012F kuri\u0105 gali \u012Fsitraukti kiekvienas.</p><p>Jei kyla problem\u0173, tiesiog pakeiskite j\u012F.</p><blockquote><p>Padarykite tai patys ir tur\u0117site k\u0105 valgyti.</p></blockquote><p>Gra\u017Eus naujas pasaulis - tai ne ka\u017Ekas, ko galima laukti, o ka\u017Ekas, k\u0105 dirbantys \u017Emon\u0117s kuria savo rankomis.</p><p><img src="//irmw.gumlet.io/cEFoDn.jpg" alt=""></p><h2 id="v-self-kompiliuokite-patys" tabindex="-1"><a class="header-anchor" href="#v-self-kompiliuokite-patys" aria-hidden="true">#</a> <code>v self</code> Kompiliuokite patys</h2><p>V gali lengvai susikompiliuoti pats naudodamasis <code>v self</code>. Mano 2015 m. versijos &quot;Apple&quot; ne\u0161iojamajame kompiuteryje vien\u0105 kart\u0105 susikompiliuoti u\u017Etrunka 5,63 sekund\u0117s.</p><p>Rekomenduoju j\u012F \u012Fdiegti kaip pirmin\u012F kod\u0105.</p><div class="language-text ext-text"><pre class="language-text"><code>git clone git@github.com:vlang/v.git
make
sudo ./v symlink
</code></pre></div><p>Jei turite koki\u0173 nors id\u0117j\u0173, eikite \u012F priek\u012F ir tiesiogiai modifikuokite kompiliatoriaus arba standartin\u0117s bibliotekos i\u0161eities kod\u0105.</p><p>Tada naudokite <code>v self</code>ir patys j\u0105 susikurkite. Kai nustatysite savo reikalavimus, perduokite juos ir \u012Ftraukite \u012F oficial\u0173 \u0161altinio kod\u0105.</p><p>\u0160iandien a\u0161 k\u0105 tik su\u017Einojau V ir prad\u0117jau 3 susijungimo u\u017Eklausas <a href="https://github.com/vlang/v/pull/13518" target="_blank" rel="noopener noreferrer">(1</a>, <a href="https://github.com/vlang/v/pull/13524" target="_blank" rel="noopener noreferrer">2</a>, <a href="https://github.com/vlang/v/pull/13514" target="_blank" rel="noopener noreferrer">3</a> ) su pasi\u016Blymu d\u0117l kalbos tobulinimo: <a href="https://github.com/vlang/v/issues/13526" target="_blank" rel="noopener noreferrer">neprivalomas ai\u0161kus s\u0105sajos palaikymo deklaravimas</a>.</p><p>Gerai nekalbu angli\u0161kai, bet naudodamasis <a href="https://www.deepl.com/zh/translator" target="_blank" rel="noopener noreferrer">DeepL esan\u010Diu</a> vert\u0117ju galiu lengvai konvertuoti i\u0161 kin\u0173 kalbos \u012F angl\u0173 kalb\u0105 ir i\u0161samiai bendrauti su tarptautiniais draugais.</p><h2 id="v-scenariju-rasymas" tabindex="-1"><a class="header-anchor" href="#v-scenariju-rasymas" aria-hidden="true">#</a> V Scenarij\u0173 ra\u0161ymas</h2><p><code>v init</code> Inicializavus projekt\u0105, man reikia surinkimo scenarijaus.</p><p>V galima naudoti \u0161iam scenarijui ra\u0161yti vietoj bash.</p><p>Mano kompiliavimo scenarijus yra toks.</p><div class="language-vlang ext-vlang"><pre class="language-vlang"><code>#!/usr/bin/env -S v run

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
</code></pre></div><h2 id="stebeti-failu-pakeitimus-ir-automatiskai-is-naujo-paleisti-paleidima" tabindex="-1"><a class="header-anchor" href="#stebeti-failu-pakeitimus-ir-automatiskai-is-naujo-paleisti-paleidima" aria-hidden="true">#</a> Steb\u0117ti fail\u0173 pakeitimus ir automati\u0161kai i\u0161 naujo paleisti paleidim\u0105</h2><p>Turiu \u012Fprot\u012F vien\u0105 kart\u0105 para\u0161yti ir paleisti scenarij\u0173, o poky\u010Di\u0173 steb\u0117jimas ir automatinis paleidimas yra tai, ko man reikia.</p><p>v yra <code>v watch run xx.v</code>, kad tai padarytum\u0117te.</p><p>Suk\u016Briau tok\u012F scenarij\u0173, kuris palengvina <code>./dev.sh</code> naudojim\u0105.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>#!/usr/bin/env bash

DIR=$(dirname $(realpath &quot;$0&quot;))
cd $DIR
set -ex

NAME=$(cat v.mod|grep name|awk -F\\&#39; &#39;{print $2}&#39;)
SH=&quot;v watch run $NAME.v&quot;

exec $SH \\
  -i &#39;.git&#39; \\
  -i &#39;bin&#39; \\
  -c -s --before &quot;printf \\&quot;\\e[90m\u276F \${SH}\\e[0m\\n\\&quot;&quot;
</code></pre></div><p>Projekto \u0161ablon\u0105 \u017Er. <a href="https://github.com/rmw-link/rmw-v-template" target="_blank" rel="noopener noreferrer">rmw-link/rmw-v-template</a></p>`,46);function _(q,V){const e=s("RouterLink");return l(),n(u,null,[m,d,g,a("nav",c,[a("ul",null,[a("li",null,[t(e,{to:"#ivadas-vlang-ateities-kalba"},{default:r(()=>[v]),_:1})]),a("li",null,[t(e,{to:"#izanga"},{default:r(()=>[b]),_:1})]),a("li",null,[t(e,{to:"#v-self-kompiliuokite-patys"},{default:r(()=>[h]),_:1})]),a("li",null,[t(e,{to:"#v-scenariju-rasymas"},{default:r(()=>[f]),_:1})]),a("li",null,[t(e,{to:"#stebeti-failu-pakeitimus-ir-automatiskai-is-naujo-paleisti-paleidima"},{default:r(()=>[y]),_:1})])])]),j],64)}var z=o(k,[["render",_],["__file","2022-02-09.vlang.html.vue"]]);export{z as default};
