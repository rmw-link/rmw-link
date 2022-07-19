import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as s,a as e,b as t,w as n,F as l,d as a,e as d,r as p}from"./app.2a6a1bd2.js";const k={},m=e("h1",{id:"v-anteckningar-om-sprakinlarning",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#v-anteckningar-om-sprakinlarning","aria-hidden":"true"},"#"),a(" V Anteckningar om spr\xE5kinl\xE4rning")],-1),g=e("hr",null,null,-1),c=e("p",null,"Inneh\xE5llsf\xF6rteckning :",-1),h={class:"table-of-contents"},v=a("Introduktion: vlang, framtidens spr\xE5k"),u=a("F\xF6rord"),f=a("v self kompilerar sig sj\xE4lv"),b=a("V Skriva manuskript"),_=a("\xD6vervaka fil\xE4ndringar och starta om k\xF6rningen automatiskt"),x=d(`<hr><h2 id="introduktion-vlang-framtidens-sprak" tabindex="-1"><a class="header-anchor" href="#introduktion-vlang-framtidens-sprak" aria-hidden="true">#</a> Introduktion: vlang, framtidens spr\xE5k</h2><p>vlang, f\xF6r front-end, back-end, stora data, blockchain, artificiell intelligens, genomsyrar alla aspekter av samh\xE4llet. Sl\xE5 andra programmeringsspr\xE5k och f\xF6rena v\xE4rlden 2050. Det blev till och med v\xE4rldens lingua franca, vilket gjorde det m\xF6jligt f\xF6r m\xE4nskligheten att \xE5teruppbygga det legendariska Babeltornet och g\xF6ra tekniska framsteg med stormsteg. ......</p><p>--- <a href="https://www.zhihu.com/question/318526180/answer/729421901" target="_blank" rel="noopener noreferrer">Citerat i People&#39;s Daily 2050</a></p><h2 id="forord" tabindex="-1"><a class="header-anchor" href="#forord" aria-hidden="true">#</a> F\xF6rord</h2><p><a href="https://vlang.io" target="_blank" rel="noopener noreferrer"><code>V\u8BED\u8A00</code></a> Vlang, programmeringsspr\xE5ket f\xF6r hackare.</p><p>rust och zig \xE4r bra, men de \xE4r f\xF6r stela och kollegiala.</p><p>V \xE4r mer som ett snabbstartspr\xE5k som javascript, mindre strukturerat, snabbt att komma ig\xE5ng med och naturligtvis snabbt.</p><p>Mycket av den hype som finns kring V-hemsidan har \xE4nnu inte slagit igenom (t.ex. C till V automatiskt) och <a href="https://www.zhihu.com/question/318526180" target="_blank" rel="noopener noreferrer">har av m\xE5nga kallats f\xF6r falsk</a>, t.ex:</p><p>Det \xE4r r\xE4tt strategi att f\xF6rst g\xF6ra reklam och sedan inse att m\xE4nniskan \xE4r en fantasifull gemenskap.</p><blockquote><p>De flesta m\xE4nniskor tror f\xF6r att de ser, och vissa m\xE4nniskor ser f\xF6r att de tror.</p></blockquote><p>P\xE5 samma s\xE4tt som tron p\xE5 kommunismen kanske \xE4r i minoritet, men det kommer alltid att finnas ett mycket litet antal m\xE4nniskor som faktiskt tror p\xE5 den, och elden fr\xE5n en stj\xE4rna kan starta en pr\xE4rie. Utan kommunistpartiet skulle det inte finnas n\xE5got nytt Kina.</p><p>Datamatematiker kanske tycker att V \xE4r lite l\xE4ttsinnigt, men jag \xE4r s\xE4ker p\xE5 att hackare kommer att \xE4lska spr\xE5ket.</p><p>Att t\xE4nka \xE4r att agera, att v\xE5ga t\xE4nka, att v\xE5ga f\xF6rs\xF6ka, och kanske \xE4r det skillnaden mellan konst och matematik. \xC4r ett programmeringsspr\xE5k konst eller matematik? Det \xE4r den eviga fr\xE5gan.</p><p>Jag tror att den st\xF6rsta f\xF6rdelen med V \xE4r att gr\xE4nserna mellan spr\xE5kdesign och programutveckling suddas ut.</p><p>Den kompilerar sig sj\xE4lv, och p\xE5 tre eller fem sekunder kan den kompileras p\xE5 nytt och koden \xE4r tydlig.</p><p>F\xF6rfattaren till V skriver i <a href="https://github.com/vlang/v/blob/master/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">V-kodens katalogstruktur</a>:</p><blockquote><p>Jag har f\xF6rs\xF6kt g\xF6ra kompilatorn och vlib-koden s\xE5 enkel och l\xE4ttl\xE4st som m\xF6jligt.</p><p>Ett av m\xE5len med V \xE4r att vara \xF6ppen f\xF6r utvecklare med olika niv\xE5er av erfarenhet av kompilatorutveckling. Kompilatorn beh\xF6ver inte vara en svart l\xE5da full av magi som bara ett f\xE5tal personer kan f\xF6rst\xE5.</p><p>V-kompilatorn \xE4r modul\xE4r och kan anv\xE4ndas av andra program. Den finns p\xE5 <code>cmd/v/</code> och <code>vlib/v/</code>.</p><p>Det viktigaste och mest anv\xE4ndbara kommandot n\xE4r du arbetar med V-kompilatorn \xE4r <code>v self</code>. Den bygger om V-kompilatorn.</p><p>Kompilatorns struktur \xE4r mycket enkel och best\xE5r av tre olika steg.</p><p>Parsing/generering av AST ( <code>v.parser</code>) =&gt; kontroll av typ ( <code>v.checker</code>) =&gt; generering av C/JavaScript/maskinkod ( <code>v.gen</code>)</p></blockquote><p>En del kanske t\xE4nker :</p><blockquote><p><a href="https://www.zhihu.com/question/318526180/answer/685952638" target="_blank" rel="noopener noreferrer">Utan att r\xE4kna med lexer och parser \xE4r k\xE4rnkoden bara n\xE5gra tusen rader. Jag kan bara s\xE4ga att f\xF6rfattaren har gjort ett bra jobb med marknadsf\xF6ringen och att webbplatsen ser ganska bra ut.</a></p></blockquote><p>Men jag tror att denna enkelhet \xE4r den st\xF6rsta f\xF6rdelen med V.</p><p>T\xE4nk inte p\xE5 V som ett traditionellt klumpigt programmeringsspr\xE5k med en kompilator som \xE4r en obskyr, obskyr bok i himlen.</p><p>T\xE4nk p\xE5 det som ett ramverk f\xF6r webbfronter, som Vue, med en l\xE5g ing\xE5ngsbarri\xE4r och n\xE5got som alla kan delta i.</p><p>Om du har problem, byt bara ut dem.</p><blockquote><p>G\xF6r det sj\xE4lv och du kommer att bli v\xE4lm\xE5ende.</p></blockquote><p>En vacker ny v\xE4rld \xE4r inte n\xE5got man bara sitter och v\xE4ntar p\xE5, det \xE4r n\xE5got som arbetande m\xE4nniskor skapar med sina h\xE4nder.</p><p><img src="//irmw.gumlet.io/cEFoDn.jpg" alt=""></p><h2 id="v-self-kompilerar-sig-sjalv" tabindex="-1"><a class="header-anchor" href="#v-self-kompilerar-sig-sjalv" aria-hidden="true">#</a> <code>v self</code> kompilerar sig sj\xE4lv</h2><p>V kan enkelt kompilera sig sj\xE4lvt med <code>v self</code>, p\xE5 min b\xE4rbara Apple-dator fr\xE5n 2015 tar det 5,63 sekunder att kompilera en g\xE5ng.</p><p>Jag rekommenderar att du installerar den som k\xE4llkod.</p><div class="language-text ext-text"><pre class="language-text"><code>git clone git@github.com:vlang/v.git
make
sudo ./v symlink
</code></pre></div><p>Om du har n\xE5gra id\xE9er kan du \xE4ndra k\xE4llkoden f\xF6r kompilatorn eller standardbiblioteket direkt.</p><p>Anv\xE4nd sedan <code>v self</code>och kompilera sj\xE4lv. N\xE4r du har utarbetat dina krav, l\xE4gg in dem i den officiella k\xE4llkoden och sammanfoga dem.</p><p>Idag har jag precis l\xE4rt mig V och har startat tre sammanslagningsbeg\xE4randen <a href="https://github.com/vlang/v/pull/13518" target="_blank" rel="noopener noreferrer">(1</a>, <a href="https://github.com/vlang/v/pull/13524" target="_blank" rel="noopener noreferrer">2</a>, <a href="https://github.com/vlang/v/pull/13514" target="_blank" rel="noopener noreferrer">3</a> ) med ett f\xF6rslag till spr\xE5kf\xF6rb\xE4ttring: <a href="https://github.com/vlang/v/issues/13526" target="_blank" rel="noopener noreferrer">valfri uttrycklig deklaration av st\xF6d f\xF6r ett gr\xE4nssnitt</a>.</p><p>Jag talar inte s\xE5 bra engelska, men med \xF6vers\xE4ttaren <a href="https://www.deepl.com/zh/translator" target="_blank" rel="noopener noreferrer">p\xE5 DeepL</a> \xE4r det l\xE4tt att kommunicera p\xE5 djupet med internationella v\xE4nner om kinesiska till engelska.</p><h2 id="v-skriva-manuskript" tabindex="-1"><a class="header-anchor" href="#v-skriva-manuskript" aria-hidden="true">#</a> V Skriva manuskript</h2><p>Efter att ha initialiserat projektet p\xE5 <code>v init</code> beh\xF6ver jag ett kompileringsskript.</p><p>V kan skriva s\xE5dana skript ist\xE4llet f\xF6r bash.</p><p>Mitt kompileringsskript \xE4r f\xF6ljande.</p><div class="language-vlang ext-vlang"><pre class="language-vlang"><code>#!/usr/bin/env -S v run

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
</code></pre></div><h2 id="overvaka-filandringar-och-starta-om-korningen-automatiskt" tabindex="-1"><a class="header-anchor" href="#overvaka-filandringar-och-starta-om-korningen-automatiskt" aria-hidden="true">#</a> \xD6vervaka fil\xE4ndringar och starta om k\xF6rningen automatiskt</h2><p>Jag har f\xF6r vana att skriva och k\xF6ra en g\xE5ng, och att \xF6vervaka \xE4ndringar i filer och starta om dem automatiskt \xE4r n\xE5got jag beh\xF6ver.</p><p>v inneh\xE5ller <code>v watch run xx.v</code> f\xF6r att g\xF6ra detta.</p><p>Jag har skapat ett skript f\xF6r att underl\xE4tta anv\xE4ndningen av <code>./dev.sh</code> p\xE5 f\xF6ljande s\xE4tt.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>#!/usr/bin/env bash

DIR=$(dirname $(realpath &quot;$0&quot;))
cd $DIR
set -ex

NAME=$(cat v.mod|grep name|awk -F\\&#39; &#39;{print $2}&#39;)
SH=&quot;v watch run $NAME.v&quot;

exec $SH \\
  -i &#39;.git&#39; \\
  -i &#39;bin&#39; \\
  -c -s --before &quot;printf \\&quot;\\e[90m\u276F \${SH}\\e[0m\\n\\&quot;&quot;
</code></pre></div><p>F\xF6r projektmallen se <a href="https://github.com/rmw-link/rmw-v-template" target="_blank" rel="noopener noreferrer">rmw-link/rmw-v-template</a>.</p>`,46);function j(w,V){const r=p("RouterLink");return i(),s(l,null,[m,g,c,e("nav",h,[e("ul",null,[e("li",null,[t(r,{to:"#introduktion-vlang-framtidens-sprak"},{default:n(()=>[v]),_:1})]),e("li",null,[t(r,{to:"#forord"},{default:n(()=>[u]),_:1})]),e("li",null,[t(r,{to:"#v-self-kompilerar-sig-sjalv"},{default:n(()=>[f]),_:1})]),e("li",null,[t(r,{to:"#v-skriva-manuskript"},{default:n(()=>[b]),_:1})]),e("li",null,[t(r,{to:"#overvaka-filandringar-och-starta-om-korningen-automatiskt"},{default:n(()=>[_]),_:1})])])]),x],64)}var D=o(k,[["render",j],["__file","2022-02-09.vlang.html.vue"]]);export{D as default};