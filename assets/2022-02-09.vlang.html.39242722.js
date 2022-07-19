import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,c as l,a as e,b as r,w as n,F as s,d as t,e as u,o as c}from"./app.87d927ab.js";const p={},d=e("h1",{id:"v-notes-sur-l-apprentissage-des-langues",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#v-notes-sur-l-apprentissage-des-langues","aria-hidden":"true"},"#"),t(" V Notes sur l'apprentissage des langues")],-1),m=e("hr",null,null,-1),g=e("p",null,"Table des mati\xE8res :",-1),v={class:"table-of-contents"},h=t("Introduction : vlang, la langue du futur"),f=t("Pr\xE9face"),b=t("v self Compilez-le vous-m\xEAme"),q=t("V R\xE9daction de scripts"),_=t("Surveiller les changements de fichiers et relancer automatiquement l'ex\xE9cution"),x=u(`<hr><h2 id="introduction-vlang-la-langue-du-futur" tabindex="-1"><a class="header-anchor" href="#introduction-vlang-la-langue-du-futur" aria-hidden="true">#</a> Introduction : vlang, la langue du futur</h2><p>vlang, pour le front-end, le back-end, le big data, la blockchain, l&#39;intelligence artificielle, impr\xE8gne tous les aspects de la soci\xE9t\xE9. Battre les autres langages de programmation et unifier le monde en 2050. Il est m\xEAme devenu la lingua franca du monde, permettant \xE0 l&#39;humanit\xE9 de reconstruire la l\xE9gendaire tour de Babel et de faire progresser la technologie \xE0 pas de g\xE9ant .......</p><p>--- <a href="https://www.zhihu.com/question/318526180/answer/729421901" target="_blank" rel="noopener noreferrer">Cit\xE9 par le Quotidien du Peuple 2050</a></p><h2 id="preface" tabindex="-1"><a class="header-anchor" href="#preface" aria-hidden="true">#</a> Pr\xE9face</h2><p><a href="https://vlang.io" target="_blank" rel="noopener noreferrer"><code>V\u8BED\u8A00</code></a> Vlang, le langage de programmation pour les hackers.</p><p>rust et zig sont bons, mais ils sont trop rigoureux et acad\xE9miques.</p><p>V est plus un langage de d\xE9marrage rapide comme javascript, moins structur\xE9, rapide \xE0 d\xE9marrer et bien s\xFBr rapide.</p><p>Une grande partie du battage publicitaire sur la page d&#39;accueil du V n&#39;a pas encore pris racine (par exemple, le passage automatique de C \xE0 V) et <a href="https://www.zhihu.com/question/318526180" target="_blank" rel="noopener noreferrer">a \xE9t\xE9 qualifi\xE9e de propagande mensong\xE8re par beaucoup</a>, par exemple :</p><p>La bonne strat\xE9gie consiste d&#39;abord \xE0 faire de la propagande et ensuite \xE0 la concr\xE9tiser ; les \xEAtres humains sont une communaut\xE9 d&#39;imagination.</p><blockquote><p>La plupart des gens croient parce qu&#39;ils voient, et certaines personnes voient parce qu&#39;elles croient.</p></blockquote><p>De m\xEAme, la croyance au communisme est peut-\xEAtre minoritaire, mais il y aura toujours un tr\xE8s petit nombre de personnes qui y croient vraiment, et le feu d&#39;une \xE9toile peut d\xE9clencher un feu de prairie. Sans le parti communiste, il n&#39;y aurait pas de nouvelle Chine.</p><p>Les math\xE9maticiens peuvent trouver V un peu frivole, mais je pense que les hackers vont adorer ce langage.</p><p>Penser, c&#39;est agir, oser penser, oser essayer, et c&#39;est peut-\xEAtre l\xE0 la diff\xE9rence entre l&#39;art et les math\xE9matiques. Un langage de programmation est-il un art ou des math\xE9matiques ? C&#39;est l&#39;\xE9ternelle question.</p><p>Je pense que la meilleure chose \xE0 propos de V est l&#39;effacement des fronti\xE8res entre la conception du langage et le d\xE9veloppement de programmes.</p><p>Il se compile lui-m\xEAme, et en trois ou cinq secondes, il peut \xEAtre recompil\xE9, et le code est clair.</p><p>L&#39;auteur de V \xE9crit dans la <a href="https://github.com/vlang/v/blob/master/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">structure de r\xE9pertoire du code V</a>:</p><blockquote><p>J&#39;ai essay\xE9 de rendre le compilateur et le code de la vlib aussi simples et lisibles que possible.</p><p>L&#39;un des objectifs de V est d&#39;\xEAtre ouvert aux d\xE9veloppeurs ayant diff\xE9rents niveaux d&#39;exp\xE9rience dans le d\xE9veloppement de compilateurs. Le compilateur ne doit pas \xEAtre une bo\xEEte noire pleine de magie que seules quelques personnes peuvent comprendre.</p><p>Le compilateur V est modulaire et peut \xEAtre utilis\xE9 par d&#39;autres applications. Il est situ\xE9 \xE0 <code>cmd/v/</code> et <code>vlib/v/</code>.</p><p>La commande la plus importante et la plus utile pour travailler avec le compilateur V est <code>v self</code>. Il reconstruit le compilateur V.</p><p>La structure du compilateur est tr\xE8s simple et comporte trois \xE9tapes diff\xE9rentes.</p><p>Analyser/g\xE9n\xE9rer l&#39;AST ( <code>v.parser</code>) =&gt; v\xE9rifier le type ( <code>v.checker</code>) =&gt; g\xE9n\xE9rer le code C/JavaScript/machine ( <code>v.gen</code>)</p></blockquote><p>On pourrait penser :</p><blockquote><p><a href="https://www.zhihu.com/question/318526180/answer/685952638" target="_blank" rel="noopener noreferrer">Sans compter le lexer et l&#39;analyseur, le code de base ne compte que quelques milliers de lignes. Je peux seulement dire que l&#39;auteur a fait un bon travail de marketing et que le site officiel y ressemble beaucoup.</a></p></blockquote><p>Mais je pense que cette simplicit\xE9 est ce qu&#39;il y a de mieux chez V.</p><p>Ne consid\xE9rez pas V comme un langage de programmation traditionnel et encombrant, dot\xE9 d&#39;un compilateur qui n&#39;est qu&#39;un livre obscur dans le ciel.</p><p>Consid\xE9rez-le comme un cadre frontal web, comme Vue, o\xF9 la barri\xE8re \xE0 l&#39;entr\xE9e est faible et o\xF9 tout le monde peut s&#39;impliquer.</p><p>Si vous avez un probl\xE8me, il suffit de le changer.</p><blockquote><p>Faites-le vous-m\xEAme et vous aurez de quoi manger.</p></blockquote><p>Un nouveau monde magnifique n&#39;est pas quelque chose que l&#39;on attend sans rien faire, c&#39;est quelque chose que les travailleurs cr\xE9ent de leurs mains.</p><p><img src="//irmw.gumlet.io/cEFoDn.jpg" alt=""></p><h2 id="v-self-compilez-le-vous-meme" tabindex="-1"><a class="header-anchor" href="#v-self-compilez-le-vous-meme" aria-hidden="true">#</a> <code>v self</code> Compilez-le vous-m\xEAme</h2><p>V peut facilement se compiler lui-m\xEAme en utilisant <code>v self</code>. Sur ma version 2015 de l&#39;ordinateur portable d&#39;Apple, il faut 5,63 secondes pour compiler une fois.</p><p>Je recommande de l&#39;installer en tant que code source.</p><div class="language-text ext-text"><pre class="language-text"><code>git clone git@github.com:vlang/v.git
make
sudo ./v symlink
</code></pre></div><p>Si vous avez des id\xE9es, allez-y et modifiez directement le code source du compilateur ou de la biblioth\xE8que standard.</p><p>Utilisez ensuite <code>v self</code>et compilez-le vous-m\xEAme. Une fois que vous avez d\xE9fini vos besoins, engagez et fusionnez-les dans le code source officiel.</p><p>Aujourd&#39;hui, je viens d&#39;apprendre V et j&#39;ai lanc\xE9 3 demandes de fusion ( <a href="https://github.com/vlang/v/pull/13518" target="_blank" rel="noopener noreferrer">1</a>, <a href="https://github.com/vlang/v/pull/13524" target="_blank" rel="noopener noreferrer">2</a>, <a href="https://github.com/vlang/v/pull/13514" target="_blank" rel="noopener noreferrer">3</a> ) avec une suggestion d&#39;am\xE9lioration du langage : <a href="https://github.com/vlang/v/issues/13526" target="_blank" rel="noopener noreferrer">d\xE9claration explicite facultative du support d&#39;une interface</a>.</p><p>Je ne parle pas bien l&#39;anglais, mais avec le traducteur <a href="https://www.deepl.com/zh/translator" target="_blank" rel="noopener noreferrer">sur DeepL</a>, il est facile de convertir le chinois en anglais pour une communication approfondie avec des amis internationaux.</p><h2 id="v-redaction-de-scripts" tabindex="-1"><a class="header-anchor" href="#v-redaction-de-scripts" aria-hidden="true">#</a> V R\xE9daction de scripts</h2><p><code>v init</code> Apr\xE8s avoir initialis\xE9 le projet, j&#39;ai besoin d&#39;un script de compilation.</p><p>V peut \xEAtre utilis\xE9 pour \xE9crire ce script au lieu de bash.</p><p>Mon script de compilation est le suivant.</p><div class="language-vlang ext-vlang"><pre class="language-vlang"><code>#!/usr/bin/env -S v run

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
</code></pre></div><h2 id="surveiller-les-changements-de-fichiers-et-relancer-automatiquement-l-execution" tabindex="-1"><a class="header-anchor" href="#surveiller-les-changements-de-fichiers-et-relancer-automatiquement-l-execution" aria-hidden="true">#</a> Surveiller les changements de fichiers et relancer automatiquement l&#39;ex\xE9cution</h2><p>J&#39;ai l&#39;habitude d&#39;\xE9crire et d&#39;ex\xE9cuter un script une fois, et surveiller les changements et le red\xE9marrer automatiquement est ce dont j&#39;ai besoin.</p><p>v est livr\xE9 avec <code>v watch run xx.v</code> pour faire cela.</p><p>J&#39;ai cr\xE9\xE9 un script pour faciliter l&#39;utilisation de <code>./dev.sh</code> comme suit.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>#!/usr/bin/env bash

DIR=$(dirname $(realpath &quot;$0&quot;))
cd $DIR
set -ex

NAME=$(cat v.mod|grep name|awk -F\\&#39; &#39;{print $2}&#39;)
SH=&quot;v watch run $NAME.v&quot;

exec $SH \\
  -i &#39;.git&#39; \\
  -i &#39;bin&#39; \\
  -c -s --before &quot;printf \\&quot;\\e[90m\u276F \${SH}\\e[0m\\n\\&quot;&quot;
</code></pre></div><p>Pour le mod\xE8le de projet, voir <a href="https://github.com/rmw-link/rmw-v-template" target="_blank" rel="noopener noreferrer">rmw-link/rmw-v-template</a>.</p>`,46);function k(w,V){const a=o("RouterLink");return c(),l(s,null,[d,m,g,e("nav",v,[e("ul",null,[e("li",null,[r(a,{to:"#introduction-vlang-la-langue-du-futur"},{default:n(()=>[h]),_:1})]),e("li",null,[r(a,{to:"#preface"},{default:n(()=>[f]),_:1})]),e("li",null,[r(a,{to:"#v-self-compilez-le-vous-meme"},{default:n(()=>[b]),_:1})]),e("li",null,[r(a,{to:"#v-redaction-de-scripts"},{default:n(()=>[q]),_:1})]),e("li",null,[r(a,{to:"#surveiller-les-changements-de-fichiers-et-relancer-automatiquement-l-execution"},{default:n(()=>[_]),_:1})])])]),x],64)}var y=i(p,[["render",k],["__file","2022-02-09.vlang.html.vue"]]);export{y as default};
