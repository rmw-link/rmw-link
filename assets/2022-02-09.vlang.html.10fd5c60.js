import{_ as l,o as c,c as d,a as e,b as s,w as i,F as h,d as n,e as r,r as o}from"./app.278ef889.js";const u={},p=e("h1",{id:"v-hinweise-zum-sprachenlernen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#v-hinweise-zum-sprachenlernen","aria-hidden":"true"},"#"),n(" V Hinweise zum Sprachenlernen")],-1),g=e("hr",null,null,-1),m=e("p",null,"Inhaltsverzeichnis :",-1),_={class:"table-of-contents"},b=n("Einf\xFChrung: vlang, die Sprache der Zukunft"),k=n("Vorwort"),f=n("v self Kompilieren Sie es selbst"),v=n("V Drehb\xFCcher schreiben"),w=n("Datei\xE4nderungen \xFCberwachen und den Lauf automatisch neu starten"),z=e("hr",null,null,-1),S=e("h2",{id:"einfuhrung-vlang-die-sprache-der-zukunft",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#einfuhrung-vlang-die-sprache-der-zukunft","aria-hidden":"true"},"#"),n(" Einf\xFChrung: vlang, die Sprache der Zukunft")],-1),V=e("p",null,"vlang, f\xFCr Front-End, Back-End, Big Data, Blockchain, k\xFCnstliche Intelligenz, durchdringt jeden Aspekt der Gesellschaft. Andere Programmiersprachen besiegen und die Welt im Jahr 2050 vereinen. Sie wurde sogar zur Weltsprache und erm\xF6glichte der Menschheit den Wiederaufbau des legend\xE4ren Turms von Babel und einen sprunghaften technischen Fortschritt ......",-1),x=n("--- "),E={href:"https://www.zhihu.com/question/318526180/answer/729421901",target:"_blank",rel:"noopener noreferrer"},q=n("Zitiert aus People's Daily 2050"),C=e("h2",{id:"vorwort",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vorwort","aria-hidden":"true"},"#"),n(" Vorwort")],-1),D={href:"https://vlang.io",target:"_blank",rel:"noopener noreferrer"},M=e("code",null,"V\u8BED\u8A00",-1),I=n(" Vlang, die Programmiersprache f\xFCr Hacker."),B=e("p",null,"rust und zig sind gut, aber sie sind zu streng und akademisch.",-1),A=e("p",null,"V ist eher eine Schnellstartsprache wie Javascript, weniger strukturiert, schnell einsatzbereit und nat\xFCrlich schnell.",-1),P=n("Vieles, was auf der V-Homepage angepriesen wird, hat sich noch nicht durchgesetzt (z.B. C zu V automatisch) und "),F={href:"https://www.zhihu.com/question/318526180",target:"_blank",rel:"noopener noreferrer"},$=n("wurde von vielen als falsche Propaganda bezeichnet"),H=n(", z.B. :"),L=e("p",null,"Es ist die richtige Strategie, erst Propaganda zu machen und sie dann zu verwirklichen; die Menschen sind eine Gemeinschaft der Phantasie.",-1),N=e("blockquote",null,[e("p",null,"Die meisten Menschen glauben, weil sie sehen, und manche Menschen sehen, weil sie glauben.")],-1),K=e("p",null,"Genauso wie der Glaube an den Kommunismus in der Minderheit sein mag, aber es wird immer eine sehr kleine Anzahl von Menschen geben, die wirklich daran glauben, und das Feuer eines Sterns kann einen Pr\xE4riebrand ausl\xF6sen. Ohne die Kommunistische Partei g\xE4be es kein neues China.",-1),y=e("p",null,"Computermathematiker m\xF6gen V ein wenig frivol finden, aber ich glaube, dass Hacker diese Sprache lieben werden.",-1),G=e("p",null,"Denken ist Handeln, sich trauen zu denken, sich trauen zu versuchen, und vielleicht ist das der Unterschied zwischen Kunst und Mathematik. Ist eine Programmiersprache Kunst oder Mathematik? Das ist die ewige Frage.",-1),W=e("p",null,"Das Beste an V ist meiner Meinung nach die Verwischung der Grenzen zwischen Sprachdesign und Programmentwicklung.",-1),j=e("p",null,"Er kompiliert sich selbst, und in drei oder f\xFCnf Sekunden kann er neu kompiliert werden, und der Code ist eindeutig.",-1),R=n("Der Autor von V schreibt in der "),T={href:"https://github.com/vlang/v/blob/master/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"},O=n("V-Code-Verzeichnisstruktur"),Z=n(":"),J=r("<blockquote><p>Ich habe versucht, den Compiler und den vlib-Code so einfach und lesbar wie m\xF6glich zu gestalten.</p><p>Eines der Ziele von V ist die Offenheit f\xFCr Entwickler mit unterschiedlicher Erfahrung in der Compilerentwicklung. Der Compiler muss keine Blackbox voller Magie sein, die nur wenige Menschen verstehen k\xF6nnen.</p><p>Der V-Compiler ist modular aufgebaut und kann von anderen Anwendungen verwendet werden. Es befindet sich unter <code>cmd/v/</code> und <code>vlib/v/</code>.</p><p>Der wichtigste und n\xFCtzlichste Befehl bei der Arbeit mit dem V-Compiler ist <code>v self</code>. Er baut den V-Compiler neu auf.</p><p>Die Struktur des Compilers ist sehr einfach und besteht aus drei verschiedenen Schritten.</p><p>Parsing/Generierung von AST ( <code>v.parser</code>) =&gt; \xDCberpr\xFCfung des Typs ( <code>v.checker</code>) =&gt; Generierung von C/JavaScript/Maschinencode ( <code>v.gen</code>)</p></blockquote><p>Man k\xF6nnte meinen:</p>",2),Q={href:"https://www.zhihu.com/question/318526180/answer/685952638",target:"_blank",rel:"noopener noreferrer"},U=n("Ohne Lexer und Parser umfasst der Kerncode nur einige tausend Zeilen. Ich kann nur sagen, dass der Autor gute Arbeit bei der Vermarktung geleistet hat, und die offizielle Website sieht dementsprechend aus."),X=r(`<p>Aber ich denke, dass diese Einfachheit das Beste an V ist.</p><p>Betrachten Sie V nicht als eine traditionelle, klobige Programmiersprache mit einem Compiler, der ein obskures Buch im Himmel ist.</p><p>Betrachten Sie es als ein Web-Frontend-Framework wie Vue, bei dem die Einstiegsh\xFCrde niedrig ist und jeder mitmachen kann.</p><p>Wenn Sie ein Problem haben, \xE4ndern Sie es einfach.</p><blockquote><p>Machen Sie es selbst und Sie haben genug zu essen.</p></blockquote><p>Eine sch\xF6ne neue Welt ist nichts, worauf man nur wartet, sondern etwas, das arbeitende Menschen mit ihren H\xE4nden schaffen.</p><p><img src="//irmw.gumlet.io/cEFoDn.jpg" alt=""></p><h2 id="v-self-kompilieren-sie-es-selbst" tabindex="-1"><a class="header-anchor" href="#v-self-kompilieren-sie-es-selbst" aria-hidden="true">#</a> <code>v self</code> Kompilieren Sie es selbst</h2><p>V kann sich mit <code>v self</code> leicht selbst kompilieren. Auf meinem 2015er Apple-Laptop dauert es 5,63 Sekunden, um einmal zu kompilieren.</p><p>Ich empfehle, ihn als Quellcode zu installieren.</p><div class="language-text ext-text"><pre class="language-text"><code>git clone git@github.com:vlang/v.git
make
sudo ./v symlink
</code></pre></div><p>Wenn Sie eine Idee haben, k\xF6nnen Sie den Quellcode des Compilers oder der Standardbibliothek direkt \xE4ndern.</p><p>Verwenden Sie dann <code>v self</code>und kompilieren Sie es selbst. Sobald Sie Ihre Anforderungen ausgearbeitet haben, binden Sie sie in den offiziellen Quellcode ein.</p>`,13),Y=n("Heute habe ich gerade V gelernt und ich habe 3 Merge Requests "),ee={href:"https://github.com/vlang/v/pull/13518",target:"_blank",rel:"noopener noreferrer"},ne=n("(1"),se=n(", "),te={href:"https://github.com/vlang/v/pull/13524",target:"_blank",rel:"noopener noreferrer"},ae=n("2"),ie=n(", "),re={href:"https://github.com/vlang/v/pull/13514",target:"_blank",rel:"noopener noreferrer"},oe=n("3"),le=n(" ) mit einem Vorschlag zur Verbesserung der Sprache gestartet: "),ce={href:"https://github.com/vlang/v/issues/13526",target:"_blank",rel:"noopener noreferrer"},de=n("optionale explizite Erkl\xE4rung der Unterst\xFCtzung f\xFCr eine Schnittstelle"),he=n("."),ue=n("Ich spreche nicht gut Englisch, aber mit dem \xDCbersetzer "),pe={href:"https://www.deepl.com/zh/translator",target:"_blank",rel:"noopener noreferrer"},ge=n("auf DeepL"),me=n(" ist es einfach, vom Chinesischen ins Englische zu konvertieren, um mit internationalen Freunden ausf\xFChrlich zu kommunizieren."),_e=r(`<h2 id="v-drehbucher-schreiben" tabindex="-1"><a class="header-anchor" href="#v-drehbucher-schreiben" aria-hidden="true">#</a> V Drehb\xFCcher schreiben</h2><p><code>v init</code> Nach der Initialisierung des Projekts ben\xF6tige ich ein Kompilierungsskript.</p><p>V kann zum Schreiben dieses Skripts anstelle von bash verwendet werden.</p><p>Mein Kompilierungsskript sieht wie folgt aus.</p><div class="language-vlang ext-vlang"><pre class="language-vlang"><code>#!/usr/bin/env -S v run

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
</code></pre></div><h2 id="dateianderungen-uberwachen-und-den-lauf-automatisch-neu-starten" tabindex="-1"><a class="header-anchor" href="#dateianderungen-uberwachen-und-den-lauf-automatisch-neu-starten" aria-hidden="true">#</a> Datei\xE4nderungen \xFCberwachen und den Lauf automatisch neu starten</h2><p>Ich habe die Angewohnheit, ein Skript einmal zu schreiben und auszuf\xFChren, und die \xDCberwachung auf \xC4nderungen und den automatischen Neustart ist das, was ich brauche.</p><p>v wird mit <code>v watch run xx.v</code> geliefert, um dies zu tun.</p><p>Ich habe ein Skript erstellt, das die Verwendung von <code>./dev.sh</code> wie folgt erleichtert.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>

<span class="token assign-left variable">DIR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> <span class="token punctuation">$(</span>realpath <span class="token string">&quot;<span class="token variable">$0</span>&quot;</span><span class="token punctuation">)</span><span class="token variable">)</span></span>
<span class="token builtin class-name">cd</span> <span class="token variable">$DIR</span>
<span class="token builtin class-name">set</span> -ex

<span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> v.mod<span class="token operator">|</span><span class="token function">grep</span> name<span class="token operator">|</span><span class="token function">awk</span> -F<span class="token punctuation">\\</span>&#39; <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">)</span></span>
<span class="token assign-left variable">SH</span><span class="token operator">=</span><span class="token string">&quot;v watch run <span class="token variable">$NAME</span>.v&quot;</span>

<span class="token builtin class-name">exec</span> <span class="token variable">$SH</span> <span class="token punctuation">\\</span>
  -i <span class="token string">&#39;.git&#39;</span> <span class="token punctuation">\\</span>
  -i <span class="token string">&#39;bin&#39;</span> <span class="token punctuation">\\</span>
  -c -s --before <span class="token string">&quot;printf <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token entity" title="\\e">\\e</span>[90m\u276F <span class="token variable">\${SH}</span><span class="token entity" title="\\e">\\e</span>[0m<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>
</code></pre></div>`,10),be=n("F\xFCr die Projektvorlage siehe "),ke={href:"https://github.com/rmw-link/rmw-v-template",target:"_blank",rel:"noopener noreferrer"},fe=n("rmw-link/rmw-v-template");function ve(we,ze){const a=o("RouterLink"),t=o("ExternalLinkIcon");return c(),d(h,null,[p,g,m,e("nav",_,[e("ul",null,[e("li",null,[s(a,{to:"#einfuhrung-vlang-die-sprache-der-zukunft"},{default:i(()=>[b]),_:1})]),e("li",null,[s(a,{to:"#vorwort"},{default:i(()=>[k]),_:1})]),e("li",null,[s(a,{to:"#v-self-kompilieren-sie-es-selbst"},{default:i(()=>[f]),_:1})]),e("li",null,[s(a,{to:"#v-drehbucher-schreiben"},{default:i(()=>[v]),_:1})]),e("li",null,[s(a,{to:"#dateianderungen-uberwachen-und-den-lauf-automatisch-neu-starten"},{default:i(()=>[w]),_:1})])])]),z,S,V,e("p",null,[x,e("a",E,[q,s(t)])]),C,e("p",null,[e("a",D,[M,s(t)]),I]),B,A,e("p",null,[P,e("a",F,[$,s(t)]),H]),L,N,K,y,G,W,j,e("p",null,[R,e("a",T,[O,s(t)]),Z]),J,e("blockquote",null,[e("p",null,[e("a",Q,[U,s(t)])])]),X,e("p",null,[Y,e("a",ee,[ne,s(t)]),se,e("a",te,[ae,s(t)]),ie,e("a",re,[oe,s(t)]),le,e("a",ce,[de,s(t)]),he]),e("p",null,[ue,e("a",pe,[ge,s(t)]),me]),_e,e("p",null,[be,e("a",ke,[fe,s(t)])])],64)}var Ve=l(u,[["render",ve],["__file","2022-02-09.vlang.html.vue"]]);export{Ve as default};
