---
title: Multimédia et Intégration
chapitre: HTML
permalink: /cours/multimedia.html
---

Avant le HTML5, pour l'ajout du contenu multimédia ou des animations dans une
page web, les développeurs ont utilisé des plugins embarqués dans la page du
web comme des plugins des lecteurs vidéos/audio (VLC, RealPlayer, QuickTime,
Windows Media Player, ...) ou des plateformes propriétaire comme Adobe Flash
(anciennement Macromedia Flash) et Microsoft Silverlight. Ces solutions avons
des limites comme le manque d'intégration avec le HTML/CSS, problèmes des
sécurités et de stabilités, et manque d'accessibilité.

HTML5 a ajouté un support native des contenus multimédia et des animations en
utilisant un combinaison de HTML5, CSS3 et JavaScript. Dans ce section, on va
démontrer seulement les fonctionnalités fondamentales du HTML5 sans CSS3 et
JavaScript.

Les Vidéos
----------

La balise `<video>` permet d'intégrer un vidéo dans la page web. Un exemple
d'un élément vidéo:

```html
<video src="mon-video.mp4" controls></video>
```

Les attributs principales d'élément vidéo sont:

- **src**: l'URL du vidéo à afficher.
- **controls**: attribut booléen pour afficher les contrôles de base du lecteur
vidéo (lecture, pause, contrôle du volume).
- **poster**: L'URL de l'image à afficher jusqu'à l'utilisateur play le vidéo.
- **autoplay**: attribut booléen pour spécifier que le vidéo doit commencer
automatiquement quand la page est chargée.
- **preload**: charger le contenu du fichier vidéo en même temps que la page
  web. La valeur `auto` permet de charge tout le contenu du fichier. La valeur
  `metadata` (par défaut dans la majorité des navigateurs) permet de charge que
  les données méta du fichier vidéo (longueur du vidéo, ...). La valeur `none`
  permet de ne charger aucun données du vidéo.
- **loop**: attribut booléen permet de répéter le vidéo en boucle.
- **muted**: attribut booléen permet de mettre le volume du vidéo en 0.


Les navigateurs supportent des multiples des formats du vidéo. Ce support
diffère entre les navigateurs. Les deux formats vidéo principales sont:

- **WebM**: Un conteneur vidéo développé par Google avec le codage vidéo
  **VP8** ou **VP9** et le codage audio **Vorbis** ou **Opus**. Il est supporté
  par la majorité des navigateurs à l'exception du Safari.
- **MP4**: Un conteneur vidéo avec le codage vidéo **H.264** ou **H.265** et le
  codage audio **MP3** ou **AAC**. Il est supporté par la majorité des
  navigateurs avec l'exception du Opera.

Pour fournir plus d'un format de vidéo, on peut utilisé la balise `<source>`
qui accepte L'URL du vidéo dans l'attribut `src` et le format MIME du vidéo
dans l'attribut `type`.

```html
<video controls>
  <source src="mon-video.webm" type="video/webm" />
  <source src="mon-video.mp4" type="video/mp4" />
</video>
```

Les audio
---------

L'élément audio du HTML5 fonctionne de même façon que l'élément vidéo même il
est limité aux formats audio.

```html
<audio controls>
  <source src="mon-audio.mp3" type="audio/mp3" />
  <source src="mon-audio.ogg" type="audio/ogg" />
  <source src="mon-audio.webm" type="audio/webm" />
</audio>
```

Les formats principales d'audio sont:

- **MP3**: Supporté par la majorité des navigateur.
- **WebM**: Utilise le codage audio **Vorbis**. Il est supporté par la majorité
  navigateur à l'exception du Safari.
- **OGG**: Supporté principalement par Firefox et Google Chrome. Il peut
  utiliser le codage audio **Opus** ou **Vorbis** ou **FLAC**.

Les images vectorielles
-----------------------

Les images sont divisés en deux types principales:

- Les images pixels: dont l'unité est le pixel. Ils sont définis par un matrice
  des pixels. Les formats les plus connus sont: **JPEG**, **PNG**, **GIF**,
  **BMP**. Ces images perdent la qualité quand ils sont agrandis plus que sont
  tailles original.
- Les images vectoriels: dont l'unité est des éléments géométriques tel que un
  rectangle, un cercle,... . Ces images ne perdent pas la qualité quand ils
  sont agrandis. La format la plus connue est **SVG**.

La format **SVG** (**S**calable **V**ector **G**raphics) est un format d'image
vectoriel basé sur la langage XML développé par **W3C** depuis 1999. Cette
format est supportée par la majorité des éditeurs des images vectorielles. Il
est utilisé dans le web pour structuré des images complexe que le HTML/CSS peut
structurer.  SVG est désigné pour d'intégrer bien avec les technologies du web
comme le HTML et CSS. Il support les animations aussi. La version courante est
**SVG 1.1**.  La version **SVG 2.0** est en cours de développement.

Pour afficher un fichier SVG, on utilise la balise `<img>`.

```html
<img src="mon-image.svg" />
```

On peut aussi intégrer le code SVG directement dans notre code HTML en
utilisant la balise SVG.

```html
{% include_absolute _cours/demos/image-svg.html %}
```
<p>
  <iframe height='240' scrolling='no' src='demos/image-svg.html'></iframe>
</p>

Intégration de contenu externe
------------------------------

À côté de l'intégration des vidéos et audio dans la page Web, le HTML permet
l'intégration des autres types de ressources (p.ex: PDF, Flash, sous pages Web,
...) dans un document Web. Cette fonctionnalité était très importante surtout
avant la standardisation des éléments `<video>` et `<audio>`. Pendant les 90s
et le début de 2000s, les développeurs web ont utilisé l'élément `<object>` ou
plus moins l'élément `<embed>` qui permettent d'intégrer des différents types
de ressources à travers des plugins (comme Adobe PDF Reader, VLC, RealPlayer,
QuickTime, Windows Media Player, ...) ou des plateformes propriétaire comme
Adobe Flash (anciennement Macromedia Flash), Java Applets et Microsoft
Silverlight. Aussi, l'élément `<iframe>`, et ses précédents absolues `<frame>`
et `<frameset>`, permettent l'intégration des sous page web dans le document
HTML.

### Intégration des pages Web

On va discuter seulement l'élément `<iframe>` parce que les éléments `<frame>`
et `<frameset>` sont obsolètes depuis HTML5. Cet élément permet d'intégrer des
pages web dans le document HTML courant ce qui permet d'intégrer des contenus
des autres sites Web ou de réutiliser des contenus sans besoin de d'implémenter
dans chaque page Web. Par exemple, on peut intégrer un vidéo ou un audio
hébergé dans un fournisseur des services vidéos ou audio (YouTube, Vimeo,
SoundCloud, ...), ou un système de commentaires (Disqus, ...), ou des cartes
géographiques (Google Maps, Here, ...), ou des banners d'avertissement (Google
Adsense, ...).

`<frame>` accepte un multiple des attributs dont les principales sont:
- `src`: C'est le seul attribut obligatoire. Il permet de spécifier l'URL de la
  page web à intégrer.
- `allowfullscreen`: Un attribut booléen pour permettre la page intégrée à
  entrer le mode plain écran (par exemple: permettre le lecteur vidéo de
  YouTube de entre le mode plein écran).
- `frameborder`: Si il est assigné la valeur "1", une bordure sera affichée
  autour l'élément qui est le défaut comportement. Si il est assigné la valeur
  "0", aucune bordure sera rendue. Il est recommandé d'utiliser le CSS pour
  spécifier le mise en forme de la bordure au future.
- `height` et `width`: Spécifier la hauteur et la largeur de l'élément en
  pixels.
- `scrolling`: Spécifier quant le navigateur doit fournir un barre de
  défilement pour le cadre. Les valeurs possible sont `yes` pour toujours
  afficher le barre, `no` pour jamais afficher le barre ou `auto` pour afficher
  le barre seulement quand l'espace fourni pour le cadre n'est pas suffisant
  pour afficher tout le contenu de la page intégrée.

Prenons les deux exemples suivants d'intégration de vidéo YouTube et d'une
carte géographique Google Maps dans le document.

```html
{% include_absolute _cours/demos/balise-iframe-youtube.html %}
```
<p>
  <iframe height='320' scrolling='no' src='demos/balise-iframe-youtube.html'></iframe>
</p>

```html
{% include_absolute _cours/demos/balise-iframe-google-maps.html %}
```
<p>
  <iframe height='420' scrolling='no' src='demos/balise-iframe-google-maps.html'></iframe>
</p>

### Intégrer des autres ressources

Contrairement à l'élément `<iframe>`, `<object>` et `<embed>` permettent
d'intégrer des autres types de contenu dans le document HTML grâce à des
plugins propriétaires. Par exemple, on peut intégrer des PDFs, des Flash, des
Applets Java, des vidéos, des images ou des autres types. On va démontrer
seulement l'élément `<object>` parce que l'élément `<embed>` est rarement
utilisé et `<object>` est son successeur.

Les attributs principales de `<object>`:
- `data`: Spécifier l'URL du ressource à intégrer dans le document.
- `type`: Spécifier le type MIME du ressource.

Prenons l'exemple d'intégration d'un fichier PDF.

```html
{% include_absolute _cours/demos/balise-object-pdf.html %}
```

Notons que l'utilisation de les éléments `<object>` et `<embed>` est rare à
causes des multiples raisons:
- Les plateformes propriétaires comme Java Applets et Flash ne sont plus
  populaires et ils sont en train d'être obsolètes. Java Applets n'est plus
  supporté depuis Java SE 9. Flash ne sera plus maintenu depuis 2020. Les PDFs
  sont généralement référencés au lieu d'intégrer dans le document.
- Les nouveaux éléments de HTML fournirent un meilleur alternatif comme les
  éléments `<video>`, `<audio>`, ou les nouvelles fonctionnalités de CSS3 et
  JavaScript (API Web) comme canvas et WebGL.
- Ces plateformes et plugins propriétaires ne sont pas portables et
  et ne sont pas accessibles par tous les utilisateurs comme les utilisateurs
  des smartphones.
- Le manque d'accessibilité et d'intégration entre le contenu du document HTML
  et le contenu des ressources externes.

Remarque
--------

Ils y a un grand nombre des vendeurs des services de vidéos en ligne
([YouTube](https://www.youtube.com/), [Vimeo](https://vimeo.com/),
[Dailymotion](https://dailymotion.com), ...) et des services d'audio en ligne
([Soundcloud](https://soundcloud.com/), ...) qui sont gratuites et payantes.
Ces services permettent d'héberger les vidéos/audio dans ses serveurs sans
limites de tailles ou de bindwidths. Ces services permettre d'intégrer leurs
lecteurs vidéos/audio dans vos pages web facilement avec un énormes nombres des
fonctionnalités. Ils sont la solutions la plus préférées pour ajouter des
contenus multimédias aux sites web.

Le code d'intégration est fourni par ces services. Par exemple, YouTube fourni
le code d'intégration dans le dialogue du partage du vidéo. Le code suivant est
le code d'intégration d'un vidéo YouTube:

```html
{% include_absolute _cours/demos/video-youtube.html %}
```
